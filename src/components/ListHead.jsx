import React, { useState } from "react";
import { TextField, TextFieldWrapper } from "../styles";

function ListHead({ list, isNewCattegory, editedTitles, setEditedTitles }) {
  const handleChangeTitles = (value, id) => {
    setEditedTitles((prev) => ({
      ...prev,
      [id]: { ...prev[id], name: value },
    }));
  };

  return (
    <thead>
      <tr>
        {list.titles.map(({ name, id }) =>
          name === "Ціна" ||
          name === "Сума без ПДВ" ||
          name === "Сума з ПДВ" ||
          isNewCattegory ? (
            <th key={id}>{name}</th>
          ) : (
            <th key={id}>
              <TextFieldWrapper style={{ width: "100%" }}>
                <TextField
                  type="text"
                  placeholder="Вкажіть назву"
                  value={editedTitles[id]?.name || name || ""}
                  onChange={(e) => handleChangeTitles(e.target.value, id)}
                />
              </TextFieldWrapper>
            </th>
          )
        )}
      </tr>
    </thead>
  );
}

export default ListHead;
