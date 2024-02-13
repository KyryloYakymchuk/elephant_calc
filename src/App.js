import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import ListCategory from "./pages";
import {
  AddButton,
  Button,
  CattegoryWrapper,
  StickyFooter,
  TotalSum,
} from "./styles";
import { addNewCattegory } from "./store/actions/list";
import { generatePDF } from "./helpers/functions/saveToPDF";

function App() {
  const listState = useSelector((state) => state.listReducer.listData);
  const dispatch = useDispatch();

  const calcTotalPrice = () => {
    let price2 = 0;
    let price3 = 0;

    listState.map((list) => {
      list.items.map((item) => {
        price2 += item.sumWithoutTax;
        price3 += item.sumWithTax;
      });
    });

    return (
      <TotalSum>
        <span>
          Сума без ПДВ: <u>{price2.toFixed(2)}₴</u>
        </span>
        <span>
          Сума з ПДВ: <u>{price3.toFixed(2)}₴</u>
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
        <AddButton onClick={() => handleAddNewCattegory()}>+</AddButton>;
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
    </>
  );
}

export default App;
