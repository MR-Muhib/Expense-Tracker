const totalIncomes = () => {
  const income = JSON.parse(localStorage.getItem("incomes")) || [];
  const totalIncome = income.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  return totalIncome;
};

const totalExpenses = () => {
  const expenses = JSON.parse(localStorage.getItem("expense")) || [];
  const totalExpense = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  return totalExpense;
};

const netIncome = () => {
  const totalIncome = totalIncomes();
  const totalExpense = totalExpenses();
  return Number(totalIncome - totalExpense);
};

export { totalIncomes, totalExpenses, netIncome };
