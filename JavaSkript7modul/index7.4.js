/*Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.*/



function ElectricalAppliance(name, power, brand, price, on){
    this.type = 'electrical';  
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.price = price;
    this.on = on; 
    }
    // метод, который определяет включен или выключен прибор
    
    ElectricalAppliance.prototype.getOn = function(){
         if (this.on === true) {
                 console.log(`${this.name} is on`)
             } else {
                 console.log(`${this.name} is of`)
             }
         }
    
    // метод, который определяет потребляемую мощность
    ElectricalAppliance.prototype.getPower = function(){
            console.log(`Power of the device ${this.name} is equal to ${this.power} watts`)
       }
    
    
    //первый прибор
    
function ElectroLamp(name, power, brand, price, on, lightSource, color){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.price = price;
    this.on = on; 
    this.lightSource = lightSource;  
    this.color = color;
  
  }
  
  ElectroLamp.prototype = new ElectricalAppliance()
  
  
  
  ElectroLamp.prototype.getColor = function(){
    console.log(`${this.name} is ${this.color}`)
  }
  
  const lamp = new ElectroLamp('luminaire', 5, 'vipe', 1237, false, '16 LEDs','blue');
  
  //второй прибор
  
  function Computer(name, power, brand, price, on, videoCard, processorCores){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.price = price;
    this.on = on; 
    this.videoCard = videoCard;
    this.processorCores = processorCores;
  }
  
  Computer.prototype = new ElectricalAppliance()
  
  Computer.prototype.getProcesserCores = function(){
    console.log(`the ${this.name} has ${this.processorCores} processor cores`)
  }
  
  const comp = new Computer('system unit', 250, 'AERO', 18700, true, 'built-in', 4);
  
  
  
  
  comp.getProcesserCores()
  lamp.getColor()
  comp.getPower()
  lamp.getPower()
  comp.getOn()
  lamp.getOn()
  console.log(comp, lamp);