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

//ex3 Synchronous one after other get first result use to for second
let SyncMulti = (a,b) => {
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

SyncMulti(5,8).then((response)=>{
  return SyncMulti(response,'33');
},(error)=>{
  console.log('error is', error);
}).then((afterResult)=>{
  console.log('afterResult is-',afterResult);
}, (errorAfter)=>{
  console.log('-----error',errorAfter);
});
