console.log(21323243);
console.log(111111);
// setTimeout(()=>console.log('aaaaaaaa'),5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(222222);
console.log(3333333);

for(let i =0; i<1000; i++){
    console.log(i);
};

