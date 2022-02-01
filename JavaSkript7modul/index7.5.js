//Переписать консольное приложение из предыдущего юнита на классы.
class ElectricalDevices {
    constructor(name, power, brand, price, on){
      this.type = 'electrical';  
      this.name = name;
      this.power = power;
      this.brand = brand;
      this.price = price;
      this.on = on; 
      }
     
      getOn(){
           if (this.on === true) {
                   console.log(`${this.name} is on`)
               } else {
                   console.log(`${this.name} is of`)
               }
           }
      
      getPower(){
              console.log(`Power of the device ${this.name} is equal to ${this.power} watts`)
         }
  }
      
      
  //первый прибор
      
  class DeskLamp extends ElectricalDevices {
    constructor(name, power, brand, price, on, lightSource, color){
      super(name, power, brand, price, on);
      this.lightSource = lightSource;  
      this.color = color;
    
    }
  
    getColor(){
      console.log(`${this.name} is ${this.color}`)
    }
  }
    const tableLamp = new DeskLamp('luminaire', 5, 'vipe', 1237, false, '16 LEDs','blue');
  
    //второй прибор
    
    class DeskComp extends ElectricalDevices{
      constructor (name, power, brand, price, on, videoCard, processorCores){
      super(name, power, brand, price, on);
      this.videoCard = videoCard;
      this.processorCores = processorCores;
    }
    
       
    getProcesserCores(){
      console.log(`the ${this.name} has ${this.processorCores} processor cores`)
    }
      }
    const pc = new DeskComp('system unit', 250, 'AERO', 18700, true, 'built-in', 4);
                  
    

    pc.getProcesserCores()
    tableLamp.getColor()
    pc.getPower()
    tableLamp.getPower()
    pc.getOn()
    tableLamp.getOn()
    console.log(pc, tableLamp);