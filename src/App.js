import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import ListCategory from "./pages";
import {
  AddButton,
  Button,
  CattegoryWrapper,
  StickyFooter,
  TotalSum,
  PageWrapper,
  TextField,
  ButtonWrapper,
  SelectOption,
} from "./styles";
import { addNewCattegory, setListFBData } from "./store/actions/list";
import { generatePDF } from "./helpers/functions/saveToPDF";
import Modal from "./components/Modal/Modal";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Context } from "./index";

function App() {
  const listState = useSelector((state) => state.listReducer.listData);
  const modalState = useSelector((state) => state.modalReducer.currentModal);
  const dispatch = useDispatch();
  const [filteredState, setFilteredState] = useState(listState);
  const [filterTerm, setFilterTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [selectdUser, setSelectedUser] = useState({});
  const [pdfFieldsSettings, setPdfFieldsSettings] = useState({
    priceWithTAX: true,
    priceWithoutTAX: true,
  });
  const { db } = useContext(Context);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filteredList = listState?.filter(
        (item) =>
          item.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
          item.items.some((work) =>
            work.workType.toLowerCase().includes(filterTerm.toLowerCase())
          )
      );
      setFilteredState(filteredList);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [filterTerm, listState]);

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const calcTotalPrice = () => {
    let sumWithoutTax = 0;
    let sumWithTax = 0;

    listState?.map((list) => {
      list.items.map((item) => {
        sumWithoutTax += item.sumWithoutTax;
        sumWithTax += item.sumWithTax;
      });
    });

    return (
      <TotalSum
        style={{ color: "black", fontWeight: "bold", flexDirection: "column" }}
      >
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

  useEffect(async () => {
    const docRef = doc(db, `listData`, "listData");
    const docSnap = await getDoc(docRef);
    dispatch(setListFBData(docSnap.data().listData));
    setUsers(docSnap.data().users);
  }, []);

  useEffect(() => {
    if (listState.length) {
      const updatedListState = listState.map((item) => ({
        ...item,
        items: item.items.map((subItem) => ({
          ...subItem,
          quantity: 0,
          complexity: 1,
        })),
      }));

      setDoc(doc(db, `listData`, "listData"), {
        listData: updatedListState,
      });
    }
  }, [listState]);

  return (
    <>
      <CattegoryWrapper>
        <PageWrapper>
          <TextField
            style={{
              backgroundColor: "white",
              margin: "20px",
            }}
            type="text"
            placeholder="Пошук..."
            value={filterTerm}
            onChange={handleFilterChange}
          />
        </PageWrapper>

        {filteredState?.map((list) => {
          return <ListCategory key={list.id} list={list} />;
        })}
        <PageWrapper>
          <AddButton onClick={() => handleAddNewCattegory()}>+</AddButton>;
        </PageWrapper>
      </CattegoryWrapper>

      <StickyFooter>
        {calcTotalPrice()}

        <ButtonWrapper>
          <SelectOption
            onChange={(e) => {
              setSelectedUser(JSON.parse(e.target.value));
            }}
          >
            <option selected disabled value="Працівник">
            Працівник
            </option>
            {users?.map((user) => (
              <option value={JSON.stringify(user)}>{user.name}</option>
            ))}
          </SelectOption>
          <div>
            <label htmlFor="priceWithTAX">
              <input
                id="priceWithTAX"
                type="checkbox"
                onChange={() =>
                  setPdfFieldsSettings((state) => ({
                    ...state,
                    priceWithTAX: !state.priceWithTAX,
                  }))
                }
                checked={pdfFieldsSettings.priceWithTAX}
              />
              Ціна з ПДФ
            </label>

            <label htmlFor="priceWithoutTAX">
              <input
                id="priceWithoutTAX"
                type="checkbox"
                onChange={() =>
                  setPdfFieldsSettings((state) => ({
                    ...state,
                    priceWithoutTAX: !state.priceWithoutTAX,
                  }))
                }
                checked={pdfFieldsSettings.priceWithoutTAX}
              />
              Ціна без ПДФ
            </label>
          </div>
          <Button
            disabled={!selectdUser.name}
            style={{ marginRight: "20px", border: "1px solid black" }}
            onClick={() =>
              generatePDF(listState, pdfFieldsSettings, selectdUser)
            }
          >
            Зберегти в PDF
          </Button>
        </ButtonWrapper>
      </StickyFooter>
      {modalState.state ? <Modal modalState={modalState} /> : <></>}
    </>
  );
}

export default App;
