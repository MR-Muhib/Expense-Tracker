const saveExpense = (data) => {
  // Retrieve existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem("expense") || "[]");

  // Append new expense
  existingData.push(data);

  // Save updated data back to localStorage
  localStorage.setItem("expense", JSON.stringify(existingData));
};

export default saveExpense;
