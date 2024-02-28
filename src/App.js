import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import ListCategory from "./pages";
import {
  AddButton,
  Button,
  CattegoryWrapper,
  StickyFooter,
  TotalSum,
  ButtonWrapper,
} from "./styles";
import { addNewCattegory } from "./store/actions/list";
import { generatePDF } from "./helpers/functions/saveToPDF";
import Modal from "./components/Modal/Modal";

function App() {
  const listState = useSelector((state) => state.listReducer.listData);
  const modalState = useSelector((state) => state.modalReducer.currentModal);
  const dispatch = useDispatch();

  const calcTotalPrice = () => {
    let sumWithoutTax = 0;
    let sumWithTax = 0;

    listState.map((list) => {
      list.items.map((item) => {
        sumWithoutTax += item.sumWithoutTax;
        sumWithTax += item.sumWithTax;
      });
    });

    return (
      <TotalSum style={{ color: "black", fontWeight: "bold" }}>
        <span>
          Сума без ПДВ: <u>{sumWithoutTax.toFixed(2)}₴</u>
        </span>
        <span>
          Сума з ПДВ: <u>{sumWithTax.toFixed(2)}₴</u>
        </span>
      </TotalSum>
    );
  };

  const handleAddNewCattegory = () => {
    dispatch(addNewCattegory());
  };

  return (
    <>
      <CattegoryWrapper>
        {listState?.map((list) => {
          return <ListCategory key={list.id} list={list} />;
        })}
        <ButtonWrapper>
          <AddButton onClick={() => handleAddNewCattegory()}>+</AddButton>;
        </ButtonWrapper>
      </CattegoryWrapper>

      <StickyFooter>
        {calcTotalPrice()}

        <Button
          style={{ marginRight: "20px" }}
          onClick={() => generatePDF(listState)}
        >
          Зберегти в PDF
        </Button>
      </StickyFooter>
      {modalState.state ? <Modal modalState={modalState} /> : <></>}
    </>
  );
}

export default App;
