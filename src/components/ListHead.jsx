import React from "react";

function ListHead({ displayHead }) {
  return displayHead ? (
    <thead>
      <tr>
        <th>Види робіт</th>
        <th>Кількість</th>
        <th>Од. виміру</th>
        <th>Коеф складності</th>
        <th>Ціна</th>
        <th>Сума без ПДВ</th>
        <th>Сума з ПДВ</th>
      </tr>
    </thead>
  ) : (
    ""
  );
}

export default ListHead;
