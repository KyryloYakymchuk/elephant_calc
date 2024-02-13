import { generateRandomId } from "../functions/randomId";

export const itemTemplate = {
  id: generateRandomId(),
  workType: "",
  quantity: 0,
  unit: "",
  complexity: 1,
  price: 0,
  sumWithoutTax: 0,
  sumWithTax: 0,
};

export const listTemplate = {
  name: "",
  id: generateRandomId(),
  items: [],
};
