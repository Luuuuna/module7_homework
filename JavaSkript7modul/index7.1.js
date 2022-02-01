/*Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/


const person = {
  city: "London",
}

const worker = Object.create(person)
 worker.hometown = "Birmingham";
function func(worker){

for (let key in worker) {
  if (worker.hasOwnProperty(key))
  console.log(key)
}
}
func(worker);
