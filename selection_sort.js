const arr = [9,7,5,8,1,6,2,4,3];


console.log('---before selection sort arr values is --', arr);

for(let j=0;j<arr.length;j++){
  //console.log('----small',findSmallz(arr,j));
	//if(j!=findSmallpos(arr,j)){
    let r = findSmallpos(arr,j);
    console.log('---we r sorting ', arr[r]);
    console.log('----swap posns--',j, r);
  	swap(j, r);
    
  //}
  console.log('---After selection arr values is --', arr);
}
 console.log('---final After selection arr values is --', arr);

function findSmallpos(arr, pos){
let s = arr[pos];
  for(i=pos;i<arr.length;i++){
      if(arr[i]<=s){
         arr_pos =i;
         s=arr[i];
      }
    }
  console.log('---s val',s, arr_pos);  
  return arr_pos;
}

function findSmallz(arr, pos){
let s = arr[pos];
  for(i=pos;i<arr.length;i++){
      if(arr[i]<s){
         s=arr[i];
         arr_pos =i;
      }
    }
  return s;
}

function swap(a, b){
let c = arr[a];
arr[a] = arr[b];
arr[b] = c;
}
