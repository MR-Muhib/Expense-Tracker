const validateFormData = (data) => {
  if (!data.category || data.category === "") {
    return "Input field is required!";
  }

  if (!data.amount || data.amount === 0) {
    return "Input field is required!";
  }

  if (!data.date || data.date === "") {
    return "Input field is required!";
  }
};

export default validateFormData;
