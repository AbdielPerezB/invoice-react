import { invoice } from "../data/invoice";

export const getInvoice = () => {

  // let total = 0;
  // invoice.items.forEach(item => {
  //   total = total + item.price * item.quantity
  // });
  const total = invoice.items
    .map(item => item.price * item.quantity) //devuvelve un array con puros numeros
    .reduce( (acumulador, valorActual) => acumulador + valorActual, 0);
  return {...invoice, total};
};
