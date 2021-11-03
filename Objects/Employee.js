// Constructor - function

function Employee(id, name) {
    this.id = id;
    this.name = name;

}

Employee.prototype.city = 'Not Specified';

let emp1 = new Employee(123, 'Shiva');
let emp2 = new Employee(125, 'Ranjan');
console.log(typeof emp1);
console.log(typeof emp2);

emp1.city = 'Mangalore';

console.log(emp1, emp2);
console.log(emp1.name, emp2['name']);

for (var key in emp1)
    console.log(emp1[key]);

for (var key in emp2)
    console.log(emp2[key]);