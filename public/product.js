const onSubmitHandler = (event) => {
  event.preventDefault();

  const obj = { productName: event.target.productName.value };
  console.log(obj);

  axios
    .post(`http://localhost:${4000}/api/products`, obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("error occured");
    });
};
