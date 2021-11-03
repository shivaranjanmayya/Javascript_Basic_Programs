// creating an object using constructor function

function Employee(id, name, salary) {

    this.id = id,
        this.name = name,
        this.salary = salary,
        this.age = -1;
}

var emp1 = new Employee(1, "Jack", 6066);
var emp2 = new Employee(2, "Kate", 4343);

console.log(typeof (emp1));
console.log(emp1.name);
console.log(emp2["name"]);

//adding new property to an existing object

emp1.city = "Bengaluru";
console.log(emp1.city);
console.log(emp2.city);
console.log(emp1.age);
console.log(emp2.age);

