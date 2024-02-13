import React, { useState } from "react";
import {
  Button,
  ExpandAccordion,
  TextField,
  TextFieldWrapper,
} from "../styles";
import { useDispatch } from "react-redux";
import { deleteCattegory, updateListData } from "../store/actions/list";
import ChevronDown from "../assets/ChevronDown";
import ChevronRight from "../assets/ChevronRight";

function ListAccordeon({ list, setExpandedState, expandedState }) {
  const [cattegoryName, setCattegoryName] = useState("");

  const dispatch = useDispatch();

  const handleCattegoryChange = (e) => {
    e.stopPropagation();
    dispatch(
      updateListData({
        id: list.id,
        name: cattegoryName,
        items: list.items,
      })
    );
    setCattegoryName("");
  };
  const handleCattegoryDelete = (e) => {
    e.stopPropagation();
    dispatch(
      deleteCattegory({
        id: list.id,
      })
    );
    setCattegoryName("");
  };
  return (
    <ExpandAccordion
      onClick={() => (list.name ? setExpandedState(!expandedState) : false)}
    >
      {list.name ? (
        <span>{list.name}</span>
      ) : (
        <TextFieldWrapper>
          <TextField
            type="text"
            placeholder="Вкажіть назву категорії"
            value={list.name || cattegoryName}
            onChange={(e) => setCattegoryName(e.target.value)}
          />
          <Button onClick={(e) => handleCattegoryChange(e, "name")}>
            Зберегти
          </Button>
          <Button
            style={{
              color: "darkred",
            }}
            onClick={(e) => handleCattegoryDelete(e)}
          >
            Відміна
          </Button>
        </TextFieldWrapper>
      )}

      {expandedState ? <ChevronDown /> : <ChevronRight />}
    </ExpandAccordion>
  );
}

export default ListAccordeon;
