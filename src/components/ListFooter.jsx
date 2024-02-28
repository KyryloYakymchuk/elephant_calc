import React from "react";
import { Button } from "../styles";
import { useDispatch } from "react-redux";
import { updateListData } from "../store/actions/list";
import { generateRandomId } from "../helpers/functions/randomId";

function ListFooter({ list }) {
  const dispatch = useDispatch();
  const itemTemplate = {
    id: generateRandomId(),
    workType: "",
    quantity: 0,
    unit: "",
    complexity: 1,
    price: 0,
    sumWithoutTax: 0,
    sumWithTax: 0,
  };
  return (
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
        margin: "40px 20px",
      }}
    >
      Додати до списку
    </Button>
  );
}

export default ListFooter;
