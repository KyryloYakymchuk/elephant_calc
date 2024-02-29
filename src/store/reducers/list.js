import { generateRandomId } from "../../helpers/functions/randomId";
import {
  ADD_NEW_CATTEGORY,
  DELETE_CATTEGORY,
  DELETE_CATTEGORY_ITEM,
  UPDATE_LIST_ITEM,
} from "../constants/list";

const initialState = {
  listData: [
    {
      name: "Монтаж кондиціонера",
      id: 1,
      titles: [
        {
          name: "Види робіт",
          id: 1,
        },
        {
          name: "Кількість",
          id: 2,
        },
        {
          name: "Од. виміру",
          id: 3,
        },
        {
          name: "Коеф складності",
          id: 4,
        },
        {
          name: "Ціна",
          id: 5,
        },
        {
          name: "Сума без ПДВ",
          id: 6,
        },
        {
          name: "Сума з ПДВ",
          id: 7,
        },
      ],
      items: [
        {
          id: 1,
          workType:
            "Монтаж кондиціонера 07-10 (1,8~3,0кВт. 1/4’’- 6,35мм.3/8’’- 9,52мм.) 3м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 4000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 2,
          workType:
            "Монтаж кондиціонера 07-10 (1,8~3,0кВт. 1/4’’- 6,35мм.3/8’’- 9,52мм.) 3м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 2500,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 3,
          workType:
            "Монтаж кондиціонера 07-10 (1,8~3,0кВт. 1/4’’- 6,35мм.3/8’’- 9,52мм.) 3м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 400,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 4,
          workType:
            "Монтаж кондиціонера 24-26 (6,2~7,2кВт. 3/8’’- 9,52мм.5/8’’- 15,88мм.) 5м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 400,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 5,
          workType:
            "Монтаж кондиціонера 24-26 (6,2~7,2кВт. 3/8’’- 9,52мм.5/8’’- 15,88мм.) 5м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 9000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 6,
          workType:
            "Монтаж кондиціонера 24-26 (6,2~7,2кВт. 3/8’’- 9,52мм.5/8’’- 15,88мм.) 5м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 12000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 7,
          workType:
            "Монтаж кондиціонера 24-26 (6,2~7,2кВт. 3/8’’- 9,52мм.5/8’’- 15,88мм.) 5м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 12000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 8,
          workType:
            "Монтаж кондиціонера 24-26 (6,2~7,2кВт. 3/8’’- 9,52мм.5/8’’- 15,88мм.) 5м.п.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 24000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
      ],
    },
    {
      name: "Додаткова фреонова магістраль ",
      id: 2,
      titles: [
        {
          name: "Види робіт",
          id: 1,
        },
        {
          name: "Кількість",
          id: 2,
        },
        {
          name: "Од. виміру",
          id: 3,
        },
        {
          name: "Коеф складності",
          id: 4,
        },
        {
          name: "Ціна",
          id: 5,
        },
        {
          name: "Сума без ПДВ",
          id: 6,
        },
        {
          name: "Сума з ПДВ",
          id: 7,
        },
      ],
      items: [
        {
          id: 1,
          workType: "Додаткова фреонова магістраль 1/4'- 6,35мм.3/8'- 9,52мм",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 1500,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 2,
          workType:
            "Додаткова фреонова магістраль 1/4'- 6,35 мм.1/2'- 12,7 мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 6200,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 3,
          workType: "Додаткова фреонова магістраль 1/4'-6,35мм.5/8'-15,88мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 8000,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 4,
          workType:
            "Додаткова фреонова магістраль 3/8'- 9,52 мм.5/8'- 15,88 мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 5520,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 5,
          workType: "Укладання магістралі по стелі 1/4'-6,35мм.1/2'-12,7мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 1440,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 6,
          workType: "Укладання магістралі по стелі 1/4'-6,35мм.1/2'-12,7мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 6520,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 7,
          workType: "Укладання магістралі по стелі 1/4'-6,35мм.1/2'-12,7мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 7420,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
      ],
    },
    {
      name: "Додаткові матеріали з роботою",
      id: 3,
      titles: [
        {
          name: "Види робіт",
          id: 1,
        },
        {
          name: "Кількість",
          id: 2,
        },
        {
          name: "Од. виміру",
          id: 3,
        },
        {
          name: "Коеф складності",
          id: 4,
        },
        {
          name: "Ціна",
          id: 5,
        },
        {
          name: "Сума без ПДВ",
          id: 6,
        },
        {
          name: "Сума з ПДВ",
          id: 7,
        },
      ],
      items: [
        {
          id: 1,
          workType: "Подовження електрокабелю 3x1,5",
          quantity: 0,
          unit: "м.п",
          complexity: 1,
          price: 500,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 2,
          workType:
            "Декоративний короб 17/17, 20/20 ш/у мм. під електричний кабель",
          quantity: 0,
          unit: "м.п.",
          complexity: 1,
          price: 200,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 3,
          workType: "Декоративний короб 25/25 ш/у мм. під дренаж",
          quantity: 0,
          unit: "м.п.",
          complexity: 1,
          price: 800,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 4,
          workType: "Кронштейни під кондиціонер К2 з нержавіючої сталі",
          quantity: 0,
          unit: "пара",
          complexity: 1,
          price: 720,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 5,
          workType: "Укладання магістралі по стелі 1/4'-6,35мм.1/2'-12,7мм.",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 1440,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 6,
          workType: "Європрофіль",
          quantity: 0,
          unit: "м.п",
          complexity: 1,
          price: 100,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
        {
          id: 7,
          workType: "Зєднувачі",
          quantity: 0,
          unit: "шт.",
          complexity: 1,
          price: 500,
          sumWithoutTax: 0,
          sumWithTax: 0,
        },
      ],
    },
  ],
};

const listReducer = (state = initialState, action) => {
  const listTemplate = {
    name: "",
    id: generateRandomId(),
    titles: [
      {
        name: "Види робіт",
        id: 1,
      },
      {
        name: "Кількість",
        id: 2,
      },
      {
        name: "Од. виміру",
        id: 3,
      },
      {
        name: "Коеф складності",
        id: 4,
      },
      {
        name: "Ціна",
        id: 5,
      },
      {
        name: "Сума без ПДВ",
        id: 6,
      },
      {
        name: "Сума з ПДВ",
        id: 7,
      },
    ],
    items: [
      {
        id: generateRandomId(),
        workType: "",
        quantity: 0,
        unit: "",
        complexity: 1,
        price: 0,
        sumWithoutTax: 0,
        sumWithTax: 0,
      },
    ],
  };

  switch (action.type) {
    case UPDATE_LIST_ITEM:
      return {
        ...state,
        listData: editItem(action.payload, state.listData),
      };
    case ADD_NEW_CATTEGORY:
      return {
        ...state,
        listData: state.listData.concat(listTemplate),
      };
    case DELETE_CATTEGORY:
      return {
        ...state,
        listData: deleteCattegory(action.payload, state.listData),
      };
    case DELETE_CATTEGORY_ITEM:
      return {
        ...state,
        listData: deleteCattegoryItem(action.payload, state.listData),
      };
    default:
      return {
        ...state,
      };
  }
};

export default listReducer;

const deleteCattegory = (payload, state) => {
  return state.filter((item) => {
    if (item.id !== payload.id) {
      return { item };
    }
  });
};

const deleteCattegoryItem = (payload, state) => {
  return state.map((item) => {
    if (item.id === payload.info.listId) {
      return {
        ...item,
        items: item.items.filter(({ id }) => id !== payload.info.id),
      };
    }
    return item;
  });
};

const editItem = (payload, state) => {
  return state.map((item) => {
    if (item.id === payload.id) {
      return {
        ...item,
        ...payload,
      };
    } else {
      return item;
    }
  });
};
