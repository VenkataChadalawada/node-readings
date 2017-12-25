const arr = [5,9,3,1,2,8,4,7,6];

console.log('---before bubble sort arr values is --', arr);

for (let j=arr.length-1;j>=0;j--){
  for (let i=arr.length-1;i>=0;i--){
     if(arr[i]<arr[i-1]){
        swap(i,i-1);
     }
     //by every pass you get a smaller number bubbled up
  }
}

console.log('---After bubble arr values is --', arr);

function swap(a, b){
let c = arr[a];
arr[a] = arr[b];
arr[b] = c;
}
