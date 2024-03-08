import styled from "styled-components";
import App from "./App";

export const CattegoryWrapper = styled.div`
  padding-bottom: 120px;
`;
export const ItemContainer = styled.div`
  max-width: 1071px;
  background-color: rgb(255, 255, 255);
  margin: 20px auto;
  @media (max-width: 968px) {
    margin: 20px;
  }
  border-radius: 10px;
  overflow: auto;
  max-height: 545px;
  box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);

  * {
    scrollbar-width: 6px;
    scrollbar-color: #c7c7c7 rgb(232, 237, 238);
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(232, 237, 238);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
  }
  .table-wrapper {
    display: ${({ expandedState }) => (expandedState ? "table;" : "none;")};
    /* margin: 0 auto; */

    table {
      width: fit-content;
      border-left: 1px solid grey;

      thead {
        position: relative;
        tr {
          position: sticky;
          background-color: white;
          top: 60px;
          z-index: 1;
          @media (max-width: 968px) {
            top: 80px;
          }
        }
      }
      tr {
        font-size: 16px;
        line-height: 3;
        transition: 0.3s;
        @media (max-width: 968px) {
          font-size: 14px;
        }
        &:hover {
          background-color: rgb(232, 237, 238);
          transition: 0.3s;
        }

        th {
          border-right: 1px solid grey;
          border-top: 1px solid grey;
          line-height: normal;
          padding: 10px 0;
        }

        .worktype {
          width: 350px;
          min-width: 300px;
          color: rgba(34, 28, 23);
          font-weight: 600;
          border-bottom: 1px solid grey;
          border-right: 1px solid grey;
          text-align: start;
          line-height: normal;
        }
        td {
          padding: 20px 10px;
          min-width: 75px;
          border-right: 1px solid grey;
          border-bottom: 1px solid grey;
          font-weight: 600;
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
            background-color: transparent;
            width: 80%;
            padding: 16px 8px 16px 8px;
            font-size: 16px;
            font-weight: 600;
            @media (max-width: 968px) {
              font-size: 14px;
            }
            color: black;
            border: 1.5px solid black;
            outline: none;
            /* margin-bottom: 10px; */
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

export const TableTR = styled.tr`
  background-color: ${({ quantity }) =>
    quantity ? `rgb(232, 237, 238);` : "transparent"};
`;

export const ExpandAccordion = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 3;
  font-size: 20px;

  font-weight: bold;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 968px) {
    font-size: 16px;
    width: 120vh;
    justify-content: unset;
  }
  cursor: pointer;
  color: rgba(34, 28, 23);
  transition: 0.3s;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
      svg {
        opacity: 1;
        transition: 0.3s;
      }
    }
    svg {
      opacity: 0;
      transition: 0.3s;
    }
  }
  .category-title {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      border-bottom: 1px solid transparent;
      transition: 0.3s;
    }
    &:hover {
      p {
        border-bottom: 1px solid rgba(34, 28, 23);
      }
    }
  }
`;

export const TotalSum = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px;
  font-size: 16px;
  @media (max-width: 968px) {
    flex-direction: column;
    font-size: 14px;
    gap: 10px;
  }
  color: darkgrey;
  u {
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 968px) {
      font-size: 16px;
    }
  }
`;
export const PageWrapper = styled.div`
  max-width: 1071px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 5px;
    margin: 5px;
  }
`;

export const SelectOption = styled.select`
  font-weight: 600;
  padding: 8px 4px;
  font-size: 14px;
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
  z-index: 3;
`;

export const AddButton = styled.button`
  padding: 6px 16px;
  font-size: 36px;
  @media (max-width: 968px) {
    font-size: 24px;
  }
  border-radius: 10px;
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
  max-width: 80%;
  @media (max-width: 968px) {
    font-size: 16px;
  }
  font-weight: bold;
  color: rgba(34, 28, 23);
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 70%; */
  gap: 8px;
`;
export const Button = styled.button`
  font-size: 17px;
  @media (max-width: 968px) {
    font-size: 14px;
  }
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: rgba(34, 28, 23);
  transition: 0.3s;
  border-bottom: 1px solid transparent;
  &:disabled {
    opacity: 0.4;
  }
  &:hover {
    transition: 0.3s;
    border-bottom: 1px solid rgba(34, 28, 23);
  }
`;
