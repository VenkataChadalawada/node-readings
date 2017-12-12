
const arr = [4,1,2,7,5,9,0];

for(let i=arr.length-1;i>0;i--){
  for(let i=arr.length-1;i>0;i--){
    console.log('----i',arr[i]);
    if(arr[i]<arr[i-1]){
    console.log('---before swap--',arr[i],arr[i-1]);
      swap(i,i-1);
     console.log('---after swap--',arr[i],arr[i-1]);
    }
  }
}

function swap(a,b){
var c = arr[a];
arr[a]=arr[b];
arr[b]=c;
}

console.log('----one time rsult',arr);
