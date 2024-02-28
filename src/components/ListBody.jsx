import React, { useState } from "react";
import {
  Button,
  QuantityTD,
  TableTR,
  TextField,
  TextFieldWrapper,
} from "../styles";
import { useDispatch } from "react-redux";
import { updateListData } from "../store/actions/list";
import EditIcon from "../assets/EditIcon";

function ListBody({ list }) {
  const [displayEditItem, setDisplayEditItem] = useState({
    target: "",
    id: null,
  });
  const [editedField, setEditedField] = useState({
    target: "",
    value: "",
    id: null,
  });
  const dispatch = useDispatch();

  const handleFieldChange = (index, field, value) => {
    setEditedField({
      target: "",
      value: "",
      id: null,
    });
    setDisplayEditItem({
      target: "",
      id: null,
    });
    const updatedItems = [...list.items];
    updatedItems[index][field] = value;

    const sumWithoutTax =
      updatedItems[index].price *
      updatedItems[index].quantity *
      updatedItems[index].complexity;
    updatedItems[index].sumWithoutTax = sumWithoutTax;
    updatedItems[index].sumWithTax =
      sumWithoutTax * 1.2;

    dispatch(
      updateListData({
        id: list.id,
        name: list.name,
        items: updatedItems,
      })
    );
  };

  const actualValue = (target, id, value) => {
    if (displayEditItem.id === id) {
      return editedField.value;
    } else if (editedField.target === target && editedField.id === id) {
      return editedField.value;
    }
    return value;
  };

  const findEditedField = (id, target) => {
    if (displayEditItem.id === id && displayEditItem.target === target) {
      return true;
    }
    return false;
  };

  const editItem = (target, id) => {
    setDisplayEditItem({
      target,
      id,
    });
  };

  return (
    <tbody>
      {list.items.map((item, index) => (
        <TableTR quantity={item.quantity} key={item.id}>
          {!findEditedField(item.id, "workType") && item.workType ? (
            <td className="worktype">
              {item.workType}{" "}
              <EditIcon onClick={() => editItem("workType", item.id)} />
            </td>
          ) : (
            <td>
              <TextFieldWrapper style={{ width: "100%" }}>
                <TextField
                  type="text"
                  placeholder="Вкажіть вид роботи"
                  value={actualValue("workType", item.id, item.workType)}
                  onChange={(e) =>
                    setEditedField({
                      target: "workType",
                      value: e.target.value,
                      id: item.id,
                    })
                  }
                />
                <Button
                  onClick={() =>
                    handleFieldChange(
                      index,
                      "workType",
                      editedField.value || item.workType
                    )
                  }
                >
                  ✔
                </Button>
              </TextFieldWrapper>
            </td>
          )}

          <td>
            <input
              type="number"
              min="0"
              value={item.quantity}
              onChange={(e) =>
                handleFieldChange(index, "quantity", e.target.value)
              }
            />
          </td>

          {!findEditedField(item.id, "unit") && item.unit ? (
            <td>
              {item.unit} <EditIcon onClick={() => editItem("unit", item.id)} />
            </td>
          ) : (
            <td>
              <TextFieldWrapper style={{ width: "100%" }}>
                <TextField
                  type="text"
                  placeholder="Вкажіть од. виміру"
                  value={actualValue("unit", item.id, item.unit)}
                  onChange={(e) =>
                    setEditedField({
                      target: "unit",
                      value: e.target.value,
                      id: item.id,
                    })
                  }
                />
                <Button
                  onClick={() =>
                    handleFieldChange(
                      index,
                      "unit",
                      editedField.value || item.unit
                    )
                  }
                >
                  ✔
                </Button>
              </TextFieldWrapper>
            </td>
          )}

          <td>
            <input
              type="number"
              min="0"
              value={item.complexity}
              onChange={(e) =>
                handleFieldChange(index, "complexity", e.target.value)
              }
            />
          </td>

          {!findEditedField(item.id, "price") && item.price ? (
            <td>
              {item.price}₴{" "}
              <EditIcon onClick={() => editItem("price", item.id)} />
            </td>
          ) : (
            <td>
              <TextFieldWrapper style={{ width: "100%" }}>
                <TextField
                  type="number"
                  placeholder="Вкажіть ціну"
                  value={actualValue("price", item.id, item.price)}
                  onChange={(e) =>
                    setEditedField({
                      target: "price",
                      value: e.target.value,
                      id: item.id,
                    })
                  }
                />
                <Button
                  onClick={() =>
                    handleFieldChange(
                      index,
                      "price",
                      +editedField.value || item.price
                    )
                  }
                >
                  ✔
                </Button>
              </TextFieldWrapper>
            </td>
          )}

          <td>{+item.sumWithoutTax.toFixed(2) || 0}₴</td>
          <td>{+item.sumWithTax.toFixed(2) || 0}₴</td>
        </TableTR>
      ))}
    </tbody>
  );
}

export default ListBody;
