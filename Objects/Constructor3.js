function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = -1;
}

emp1 = new Employee(123, "Jack", 505050);
emp1.city = "Bengaluru";

emp2 = new Employee(111, "Mack", 606060);

console.log(emp1);
console.log(emp2);