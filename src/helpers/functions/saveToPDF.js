import pdfMake from "pdfmake/build/pdfmake";
import vfs from "../fonts/vfs_fonts";
import { pdfImages } from "../../assets/pdfImgs";
pdfMake.vfs = vfs;
pdfMake.fonts = {
  Roboto: {
    normal: "NimbusSanL-Reg.otf",
    bold: "NimbusSanL-Bol.otf",
    italics: "NimbusSanL-RegIta.otf",
    bolditalics: "NimbusSanL-BolIta.otf",
  },
};
export const generatePDF = (listState) => {
  let exportedData = listState.map((list) => {
    return {
      ...list,
      items: list.items.filter((item) => item.quantity > 0),
    };
  });

  console.log("filtered", exportedData);
  var docDefinition = {
    content: [
      {
        image: pdfImages.header,
        width: 500,
      },
      {
        text: "Комерційна пропозиція",
        style: "header",
        alignment: "center",
        margin: [0, 10, 0, 10],
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      tableOpacityExample: {
        margin: [0, 5, 0, 15],
        fillColor: "blue",
        fillOpacity: 0.3,
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
      },
    },
    defaultStyle: {
      font: "Roboto",
    },
  };

  exportedData.map((data) => {
    if (data.items.length) {
      let tableHead = data.titles.map(({ name }) => ({
        text: name,
        style: "tableHeader",
      }));
      let tableBody = data.items.map(
        ({
          workType,
          quantity,
          unit,
          complexity,
          price,
          sumWithoutTax,
          sumWithTax,
        }) => {
          return [
            workType,
            quantity,
            unit,
            complexity.toString(),
            price.toFixed(0).toString() + "грн",
            sumWithoutTax.toFixed(0).toString() + "грн",
            sumWithTax.toFixed(0).toString() + "грн",
          ];
        }
      );

      docDefinition.content.push({
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [tableHead, ...tableBody],
        },
      });

      docDefinition.content.push({
        text: `Ціна за ${data.name} - БЕЗ ПДВ: ${
          calcPrice(data.items).sumWithoutTax
        }грн, З ПДВ: ${calcPrice(data.items).sumWithTax}грн`,
        style: "subheader",
        color: "black",
        fontSize: 10,
        alignment: "right",
      });
    }
  });
  docDefinition.content.push({
    text: `Всього - БЕЗ ПДВ: ${
      calcTotalPrice(listState).sumWithoutTax
    }грн, З ПДВ: ${calcTotalPrice(listState).sumWithTax}грн`,

    style: "subheader",
    color: "blue",
    margin: [0, 20],
    fontSize: 10,
    alignment: "right",
  });

  docDefinition.content.push({
    image: pdfImages.footer,
    width: 500,
  });

  pdfMake.createPdf(docDefinition).download();
};

const calcPrice = (items) => {
  let sumWithoutTax = 0;
  let sumWithTax = 0;

  items.map((item) => {
    sumWithoutTax += item.sumWithoutTax;
    sumWithTax += item.sumWithTax;
  });

  return {
    sumWithoutTax: sumWithoutTax.toFixed(2),
    sumWithTax: sumWithTax.toFixed(2),
  };
};

const calcTotalPrice = (listState) => {
  let sumWithoutTax = 0;
  let sumWithTax = 0;

  listState.map((list) => {
    list.items.map((item) => {
      sumWithoutTax += item.sumWithoutTax;
      sumWithTax += item.sumWithTax;
    });
  });

  return {
    sumWithoutTax: sumWithoutTax.toFixed(0),
    sumWithTax: sumWithTax.toFixed(0),
  };
};
