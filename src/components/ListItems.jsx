import React, { useState } from "react";

import { ItemContainer } from "../styles";

import ListBody from "./ListBody";
import ListHead from "./ListHead";
import ListAccordeon from "./ListAccordeon";
import ListFooter from "./ListFooter";

const ListItems = ({ list }) => {
  const [expandedState, setExpandedState] = useState(false);

  return (
    <ItemContainer expandedState={expandedState}>
      <ListAccordeon
        list={list}
        setExpandedState={setExpandedState}
        expandedState={expandedState}
      />
      <div className="table-wrapper">
        <table>
          <ListHead displayHead={list.items.length} />
          <ListBody list={list} />
        </table>
        <ListFooter list={list} />
      </div>
    </ItemContainer>
  );
};

export default ListItems;
