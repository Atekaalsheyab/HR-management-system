"use strict"
let max;
let min;
function Employee( FullName, Department, Level, Image_URL, Salary) {
    this.EmployeeId = this.generateId;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Image_URL = Image_URL;
    this.Salary = this.calculateSalary;
}

Employee.prototype.calculateSalary = function () {


    switch (this.Level) {
        case "Senior":
            max = 2000;
            min = 1500;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
            return this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;
        case "Mid-Senior":
            max = 1500;
            min = 1000;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
            return this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;
        case "Junior":
            max = 500;
            min = 1000;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
            return this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;

        default:
            break;
    }
}

Employee.prototype.generateId = function () {
    min = 1000; 
    max =9999;
   
    this.EmployeeId= Math.floor(Math.random() * (max - min) + min);

}

Employee.prototype.render = function () {
   const container= document.getElementById('render'); 

   const divEl1= document.createElement('div'); 
   container.appendChild(divEl1);
   const divEl2= document.createElement('div'); 
   container.appendChild(divEl2);
   const divEl3= document.createElement('div'); 
   container.appendChild(divEl3);
}

let empArr = new Array();

let emp1 = new Employee("Ghazi Samer", "Administration", "Senior", "");
emp1.generateId(); 
emp1.calculateSalary(this.Level);
let emp2 = new Employee("Lana Ali", "Finance", "Senior", "");
emp2.generateId();
emp2.calculateSalary(this.Level);
let emp3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "");
emp3.generateId(); 
emp3.calculateSalary(this.Level);
let emp4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "");
emp4.generateId(); 
emp4.calculateSalary(this.Level);
let emp5 = new Employee("Omar Zaid", "Development", "Senior", "");
emp5.generateId();
emp5.calculateSalary(this.Level);
let emp6 = new Employee("Rana Saleh", "Development", "Junior", "");
emp6.generateId();
emp6.calculateSalary(this.Level);
let emp7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "");
emp7.calculateSalary(this.Level);
emp7.generateId();

empArr = [emp1, emp2, emp3, emp4, emp5, emp6, emp7];

// emp1.render(); 

// for (let index = 0; index < empArr.length; index++) {
//     empArr[index].render();

// }

emp1.render(); 