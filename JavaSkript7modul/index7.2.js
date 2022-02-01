/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const lineObj = (str, object) => {
    return str in object;
 }
  
   
   let user = {
     name: 'Petr',
     surname: 'Petrov',
     city: 'Moscow'
 }
 
  console.log(lineObj('name', user));
  console.log(lineObj('age', user));
 
 
