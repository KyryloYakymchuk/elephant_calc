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
import { calcTotalPrice } from "../helpers/functions/calcPrice";
import EditIcon from "../assets/EditIcon";
import DeleteIcon from "../assets/DeleteIcon";
import { setCurrentModal } from "../store/actions/modal";

function ListAccordeon({
  list,
  setExpandedState,
  expandedState,
  editedTitles,
  setEditedTitles,
}) {
  const [cattegoryName, setCattegoryName] = useState("");
  const [displayEditItem, setDisplayEditItem] = useState({
    target: "",
    id: null,
  });
  const dispatch = useDispatch();

  const handleCattegoryChange = (e, id) => {
    e.stopPropagation();

    const updatedTitles = list.titles.map((title) => {
      if (editedTitles[title.id]) {
        return { ...title, name: editedTitles[title.id].name };
      }
      return title;
    });
    setEditedTitles({});
    dispatch(
      updateListData({
        id: id,
        name: cattegoryName,
        items: list.items,
        titles: updatedTitles,
      })
    );
    setCattegoryName("");
    setDisplayEditItem({
      target: "",
      id: null,
    });
  };
  const handleCattegoryDelete = (e, id) => {
    e.stopPropagation();
    dispatch(
      deleteCattegory({
        id,
      })
    );
    setCattegoryName("");
  };

  const editItem = (target, id, name, e) => {
    e.stopPropagation();
    setCattegoryName(name);
    setDisplayEditItem({
      target,
      id,
    });
  };
  const displayModal = (e, id, name) => {
    e.stopPropagation();
    dispatch(
      setCurrentModal({
        state: true,
        flag: "delete_cattegory",
        info: { id, name },
      })
    );
  };
  return (
    <ExpandAccordion
      onClick={() => (list.name ? setExpandedState(!expandedState) : false)}
    >
      {displayEditItem.id === list.id || !list.name ? (
        <TextFieldWrapper style={{ padding: "10px 0" }}>
          <TextField
            type="text"
            placeholder="Вкажіть назву категорії"
            value={cattegoryName || list.name}
            onChange={(e) => setCattegoryName(e.target.value)}
          />
          <Button onClick={(e) => handleCattegoryChange(e, list.id)}>✔</Button>
          {!list.name && (
            <Button
              style={{
                color: "darkred",
              }}
              onClick={(e) => handleCattegoryDelete(e, list.id)}
            >
              Відміна
            </Button>
          )}
        </TextFieldWrapper>
      ) : (
        <span>
          {list.name}
          <EditIcon onClick={(e) => editItem("name", list.id, list.name, e)} />
          <DeleteIcon onClick={(e) => displayModal(e, list.id, list.name)} />
        </span>
      )}
      {list.name ? (
        <div className="category-title">
          {calcTotalPrice(list.items)}
          {expandedState ? <ChevronDown /> : <ChevronRight />}
        </div>
      ) : (
        ""
      )}
    </ExpandAccordion>
  );
}

export default ListAccordeon;
