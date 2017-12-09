//ex 1
let abc = new Promise((resolve,reject) => {
  resolve('success')
  });

abc.then((response)=>{
  console.log(response);
});

//ex 2
let asyncAdd = (a,b) => {
  return new Promise((resolve,request) => {
    setTimeOut(()=>{
      if(typeOf(a)==number&&typeOf(b)==number){
        resolve(a+b);
      } else {
        reject('Arguments should be numbers');
      }
    },2500);
  });
}

asyncAdd(5,8).then((response)=>{
  console.log('response is',response);
},(error)=>{
  console.log('error is', error);
});
