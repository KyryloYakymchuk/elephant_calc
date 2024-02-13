import styled from "styled-components";

export const CattegoryWrapper = styled.div`
  padding-bottom: 120px;
`;
export const ItemContainer = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 20px;
  border-radius: 10px;
  overflow: auto;
  max-height: 545px;
  box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);

  * {
    scrollbar-width: thin;
    scrollbar-color: #c7c7c7 rgb(232, 237, 238);
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(232, 237, 238);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .table-wrapper {
    display: ${({ expandedState }) => (expandedState ? "table;" : "none;")};
    /* margin: 0 auto; */

    table {
      width: fit-content;
      border-left: 1px solid grey;
      tr {
        font-size: 18px;
        line-height: 3;
        transition: 0.3s;
        &:hover {
          background-color: rgb(232, 237, 238);
          transition: 0.3s;
        }

        th {
          border-right: 1px solid grey;
          border-top: 1px solid grey;
        }

        .worktype {
          width: 200px;
          color: rgba(34, 28, 23);
          font-weight: 400;
          border-bottom: 1px solid grey;
          border-right: 1px solid grey;
          text-align: start;
        }
        td {
          padding: 20px 35px;
          min-width: 120px;
          border-right: 1px solid grey;
          border-bottom: 1px solid grey;
          text-align: center;
          position: relative;

          &:hover {
            svg {
              transition: 0.3s;
              opacity: 1;
            }
          }

          svg {
            transition: 0.3s;
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            transform: translateY(0%);
            cursor: pointer;
            &:hover {
              transition: 0.3s;
            }
          }
          input {
            max-width: 80px;
            padding: 16px 8px 16px 8px;
            font-size: 14px;
            border: 1px solid grey;
            outline: none;
            /* margin-bottom: 10px; */
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

export const QuantityTD = styled.td`
  input {
    background-color: ${({ quantity }) =>
      quantity ? `rgb(232, 237, 238);` : "transparent"};
  }
`;

export const ExpandAccordion = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 3;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: rgba(34, 28, 23);

  transition: 0.3s;
  span {
    border-bottom: 1px solid transparent;
    transition: 0.3s;
  }
  &:hover {
    span {
      border-bottom: 1px solid rgba(34, 28, 23);
    }
  }
`;
export const FooterWrapper = styled.div`
    position: sticky;
    bottom: 0;
    background-color: white;
    display: flex;
    align-items: center;
`
export const TotalSum = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px;
  font-weight: bold;
  font-size: 16px;
  color: rgba(34, 28, 23);
  u {
    font-size: 20px;
  }
`;

export const StickyFooter = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  padding: 6px 16px;
  font-size: 36px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: rgba(34, 28, 23);
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const TextField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: rgb(232, 237, 238);
  font-size: 20px;
  font-weight: bold;
  color: rgba(34, 28, 23);
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 8px;
`;
export const Button = styled.button`
  font-size: 17px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: rgba(34, 28, 23);
  transition: 0.3s;
  border-bottom: 1px solid transparent;

  &:hover {
    transition: 0.3s;
    border-bottom: 1px solid rgba(34, 28, 23);
  }
`;
