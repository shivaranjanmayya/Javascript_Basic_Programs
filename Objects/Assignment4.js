/* Create a constructor called Employee() with at least 3 properties and 2 behaviour and instantiate it 3 times.
Add a function to raise employee salary by x% percent. 
And use this function to raise the salary of 1st employee by 50% and 3rd employee salary by 100%.*/

function Employee(id, name, salary) {

    this.id = id,
        this.name = name,
        this.salary = salary,

        this.doWork = function () {
            console.log(this.name + ' is doing work');
        },
        this.doNothing = function () {
            console.log(this.name + ' is not working today as he is on weekly off')
        },

        this.raiseSalary = function (percentage) {
            this.salary = salary + (salary * percentage) / 100;
        }
};

let emp1 = new Employee(123, 'Shiva', 50000);
let emp2 = new Employee(124, 'Ranjan', 60000);
let emp3 = new Employee(125, 'Mayya', 70000);
console.log(emp1.name);
emp1.doWork();
emp2.doNothing();
emp1.raiseSalary(50);
console.log(emp1.salary);
emp3.raiseSalary(100);
console.log(emp3.salary);

