//PROMISES - prmoises are more composable than callbacks
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
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(typeof a==='number'&& typeof b==='number'){
        resolve(a+b);
      } else {
        reject('Arguments should be numbers');
      }
    },2500);
  });
}

SyncMulti4(5,7).then((res) => {
    return SyncMulti4(res,33);
}).then((res2)=>{
  return SyncMulti4(res2, '33');
}).catch((error) => {
    console.log('functional error', error);
});
/*output if anyone fails it goes to catch and errors out
Promise {<pending>}
VM5465:4 functional error Arguments should be numbers
*/


