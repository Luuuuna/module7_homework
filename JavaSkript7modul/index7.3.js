//Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj(){
    let obj = Object.create(null);
    console.log(obj)
  }
  emptyObj();