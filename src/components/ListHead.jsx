import React from "react";
import { TextField, TextFieldWrapper } from "../styles";
import { useDispatch } from "react-redux";
import { updateListData } from "../store/actions/list";

function ListHead({ list, isNewCattegory }) {
  const dispatch = useDispatch();

  const handleChangeTitles = (value, id) => {
    const updatedTitles = list.titles.map((title) => {
      if (title.id === id) {
        return { ...title, name: value };
      }
      return title;
    });

    dispatch(
      updateListData({
        id: list.id,
        name: list.name,
        items: list.items,
        titles: updatedTitles,
      })
    );
  };
  return (
    <thead>
      <tr>
        {list.titles.map(({ name, id }) =>
          isNewCattegory ? (
            <th>{name}</th>
          ) : (
            <th>
              <TextFieldWrapper style={{ width: "100%" }}>
                <TextField
                  type="text"
                  placeholder="Вкажіть назву"
                  value={name}
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
