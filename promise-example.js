let abc = new Promise((resolve,reject) => {
  resolve('success')
  });

abc.then((response)=>{
  console.log(response);
});
