/*Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/


const person = {
  city: "London",
}

const worker = Object.create(person)
 worker.hometown = "Birmingham";
worker.age = 35;
worker.name = "Ivan"

function func(obj){
   for (let key in obj){
    if (worker.hasOwnProperty(key))
  console.log(`${key} - ${obj[key]}`);
}
}

func(worker);
