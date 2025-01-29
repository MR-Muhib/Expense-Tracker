const saveIncomes = (data) => {
  const existingIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
  const newIncomes = [...existingIncomes, data];
  localStorage.setItem("incomes", JSON.stringify(newIncomes));
};

export default saveIncomes;
