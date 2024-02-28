import pdfMake from "pdfmake/build/pdfmake";
import vfs from "../fonts/vfs_fonts";
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
        image:
          "data:image/jpeg;base64,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",
        width: 500,
      },
      {
        text: "Комерційна пропозиція",
        style: "header",
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
            price.toFixed(0).toString() + 'грн',
            sumWithoutTax.toFixed(0).toString() + 'грн',
            sumWithTax.toFixed(0).toString() + 'грн',
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
        color: "blue",
        margin: [0, 20],
        fontSize: 12,
        alignment: "right",
      });
    }
  });
  docDefinition.content.push({
    text: `Всього - БЕЗ ПДВ: ${calcTotalPrice(listState).sumWithoutTax}грн, З ПДВ: ${
      calcTotalPrice(listState).sumWithTax
    }грн`,

    style: "subheader",
    color: "blue",
    margin: [0, 20],
    fontSize: 12,
    alignment: "right",
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