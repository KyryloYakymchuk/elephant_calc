import { TotalSum } from "../../styles";

export const calcTotalPrice = (items) => {
  let sumWithoutTax = 0;
  let sumWithTax = 0;

  items.map((item) => {
    sumWithoutTax += item.sumWithoutTax;
    sumWithTax += item.sumWithTax;
  });

  return (
    <TotalSum>
      <span>
        Сума без ПДВ: <u>{sumWithoutTax?.toFixed(2)}₴</u>
      </span>
      <span>
        Сума з ПДВ: <u>{sumWithTax?.toFixed(2)}₴</u>
      </span>
    </TotalSum>
  );
};