import { React, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log("amount", amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log("total",typeof total);
  const totals = Number(total)
  console.log("total",typeof totals);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totals}</h1>
    </>
  );
};

export default Balance;
