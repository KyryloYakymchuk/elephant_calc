import React from "react";
import { Button, TotalSum, FooterWrapper } from "../styles";
import { useDispatch } from "react-redux";
import { updateListData } from "../store/actions/list";
import { itemTemplate } from "../helpers/constants/listTemplates";

function ListFooter({ list }) {
  const dispatch = useDispatch();
  const calcTotalPrice = () => {
    let price2 = null;
    let price3 = null;

    list.items.map((item) => {
      price2 += item.sumWithoutTax;
      price3 += item.sumWithTax;
    });

    return (
      <TotalSum>
        <span>
          Сума без ПДВ: <u>{price2?.toFixed(2) || 0}₴</u>
        </span>
        <span>
          Сума з ПДВ: <u>{price3?.toFixed(2) || 0}₴</u>
        </span>
      </TotalSum>
    );
  };

  return (
    <FooterWrapper>
      {calcTotalPrice()}
      <Button
        onClick={() =>
          dispatch(
            updateListData({
              id: list.id,
              name: list.name,
              items: list.items.concat(itemTemplate),
            })
          )
        }
        style={{
          fontSize: "18px",
          color: "darkred",
        }}
      >
        Додати до списку
      </Button>
    </FooterWrapper>
  );
}

export default ListFooter;
