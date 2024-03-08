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
export const generatePDF = (listState, pdfFieldsSettings, selectdUser) => {
  let exportedData = listState.map((list) => {
    return {
      ...list,
      items: list.items.filter((item) => item.quantity > 0),
    };
  });
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
    footer: [
      {
        image: pdfImages.footer,
        width: 500,
        margin: [50, -40],
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
      // let tableHead = data.titles.map(({ name }) => ({
      //   text: name,
      //   style: "tableHeader",
      // }));
      let tableHead = data.titles
        .map(({ name }) => {
          if (
            name !== "Коеф складності" &&
            !(!pdfFieldsSettings.priceWithTAX && name === "Сума з ПДВ") &&
            !(!pdfFieldsSettings.priceWithoutTAX && name === "Сума без ПДВ")
          ) {
            return {
              text: name,
              style: "tableHeader",
              alignment: "center",
            };
          }
        })
        .filter((item) => item !== undefined);

      let tableBody = data.items.map(
        ({ workType, quantity, unit, price, sumWithoutTax, sumWithTax }) => {
          const bodyRow = [workType, quantity, unit, price.toFixed(0) + "грн"];

          if (pdfFieldsSettings.priceWithTAX) {
            bodyRow.push(sumWithTax.toFixed(0) + "грн");
          }

          if (pdfFieldsSettings.priceWithoutTAX) {
            bodyRow.push(sumWithoutTax.toFixed(0) + "грн");
          }

          return bodyRow;
        }
      );

      docDefinition.content.push({
        style: "tableExample",
        alignment: "center",
        table: {
          headerRows: 1,
          body: [tableHead, ...tableBody],
        },
      });

      // docDefinition.content.push({
      //   text: `Ціна за ${data.name} - БЕЗ ПДВ: ${
      //     calcPrice(data.items).sumWithoutTax
      //   }грн, З ПДВ: ${calcPrice(data.items).sumWithTax}грн`,
      //   style: "subheader",
      //   color: "black",
      //   fontSize: 10,
      //   alignment: "right",
      // });
    }
  });
  docDefinition.content.push({
    text: `Всього - БЕЗ ПДВ: ${
      calcTotalPrice(listState).sumWithoutTax
    }грн, З ПДВ: ${calcTotalPrice(listState).sumWithTax}грн`,

    style: "subheader",
    margin: [0, 20],
    fontSize: 12,
    alignment: "right",
  });

  docDefinition.content.push({
    text: `З повагою,
    ${selectdUser.name}
    ${selectdUser.role}
    ТОВ "Елефант-Комфорт"
    Контакти ТОВ "Елефант-Комфорт":
    Адреса: 10001 м. Житомир, проспект Незалежності, 184, офіс 213.
    Мобільний телефон: ${selectdUser.phone}
    Сайт: www.profkomfort.com.ua
    Ел.почта: ${selectdUser.email}
    `,
    fontSize: 12
  });

  pdfMake.createPdf(docDefinition).download();
};

// const calcPrice = (items) => {
//   let sumWithoutTax = 0;
//   let sumWithTax = 0;

//   items.map((item) => {
//     sumWithoutTax += item.sumWithoutTax;
//     sumWithTax += item.sumWithTax;
//   });

//   return {
//     sumWithoutTax: sumWithoutTax.toFixed(2),
//     sumWithTax: sumWithTax.toFixed(2),
//   };
// };

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
