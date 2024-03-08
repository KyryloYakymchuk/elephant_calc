import React, { useState } from "react";

import { ItemContainer } from "../styles";

import ListBody from "./ListBody";
import ListHead from "./ListHead";
import ListAccordeon from "./ListAccordeon";
import ListFooter from "./ListFooter";

const ListItems = ({ list }) => {
  const [expandedState, setExpandedState] = useState(true);
  const [editedTitles, setEditedTitles] = useState({});

  return (
    <ItemContainer expandedState={expandedState}>
      <ListAccordeon
        list={list}
        setExpandedState={setExpandedState}
        expandedState={expandedState}
        editedTitles={editedTitles}
        setEditedTitles={setEditedTitles}
      />
      <div className="table-wrapper">
        <table>
          <ListHead
            list={list}
            isNewCattegory={list.name}
            editedTitles={editedTitles}
            setEditedTitles={setEditedTitles}
          />
          <ListBody list={list} />
        </table>
        <ListFooter list={list} />
      </div>
    </ItemContainer>
  );
};

export default ListItems;