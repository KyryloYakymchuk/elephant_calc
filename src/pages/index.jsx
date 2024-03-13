import React from "react";
import ListItems from "../components/ListItems";

function ListCategory({ list, setFilterTerm }) {
  return <ListItems list={list} setFilterTerm={setFilterTerm} />;
}

export default ListCategory;
