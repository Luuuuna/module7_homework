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