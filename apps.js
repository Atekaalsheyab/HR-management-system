"use strict"
let max;
let min;
function Employee(FullName, Department, Level, Image_URL, Salary) {
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
    max = 9999;

    this.EmployeeId = Math.floor(Math.random() * (max - min) + min);

}

const container = document.getElementById('render');
const secEl1 = document.createElement('section');
container.appendChild(secEl1);
const h6El1 = document.createElement('p');
h6El1.textContent = "Administration Department";
secEl1.appendChild(h6El1);
const secEl2 = document.createElement('section');
container.appendChild(secEl2);
const h6El2 = document.createElement('p');
h6El2.textContent = "Marketing Department";
secEl2.appendChild(h6El2);
const secEl3 = document.createElement('section');
container.appendChild(secEl3);
const h6El3 = document.createElement('p');
h6El3.textContent = "Development Department";
secEl3.appendChild(h6El3);
const secEl4 = document.createElement('section');
container.appendChild(secEl4);
const h6El4 = document.createElement('p');
h6El4.textContent = "Finance Department";
secEl4.appendChild(h6El4);

Employee.prototype.render = function () {

    switch (this.Department) {
        case "Administration":

            const divEl1 = document.createElement('div');
            divEl1.id = 'card';
            secEl1.appendChild(divEl1);
            const imgEl1 = document.createElement('img');
            divEl1.appendChild(imgEl1);
            //imgEl1.setAttribute('src', this.Image_URL);
            imgEl1.src=this.Image_URL; 
            imgEl1.width = "200";
            imgEl1.height = "200";
            const divChEl1 = document.createElement('div');
            divChEl1.id = 'container';
            divEl1.appendChild(divChEl1);
            const p1El1 = document.createElement('p');
            divChEl1.appendChild(p1El1);
            p1El1.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeId}`
            const p2El1 = document.createElement('p');
            divChEl1.appendChild(p2El1);
            p2El1.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
            const p3El1 = document.createElement('p');
            divChEl1.appendChild(p3El1);
            p3El1.textContent = `${this.Salary}`;
            const brEl = document.createElement('br');
            break;

        case "Marketing":

            const divEl2 = document.createElement('div');
            divEl2.id = 'card';
            secEl2.appendChild(divEl2);
            const imgEl2 = document.createElement('img');
            divEl2.appendChild(imgEl2);
            imgEl2.setAttribute('src', this.Image_URL);
            imgEl2.width = "200";
            imgEl2.height = "200";
            const divChEl2 = document.createElement('div');
            divChEl2.id = 'container';
            divEl2.appendChild(divChEl2);
            const h4El2 = document.createElement('h4');
            divChEl2.appendChild(h4El2);
            const p1El2 = document.createElement('p');
            divChEl2.appendChild(p1El2);
            p1El2.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeId}`
            const p2El2 = document.createElement('p');
            divChEl2.appendChild(p2El2);
            p2El2.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
            const p3El2 = document.createElement('p');
            divChEl2.appendChild(p3El2);
            p3El2.textContent = `${this.Salary}`;
            const brEl2 = document.createElement('br');
            break;

        case "Development":

            const divEl3 = document.createElement('div');
            divEl3.id = 'card';
            secEl3.appendChild(divEl3);
            const imgEl3 = document.createElement('img');
            divEl3.appendChild(imgEl3);
            imgEl3.setAttribute('src', this.Image_URL);
            imgEl3.width = "200";
            imgEl3.height = "200";
            const divChEl3 = document.createElement('div');
            divChEl3.id = 'container';
            divEl3.appendChild(divChEl3);
            const p1El3 = document.createElement('p');
            divChEl3.appendChild(p1El3);
            p1El3.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeId}`
            const p2El3 = document.createElement('p');
            divChEl3.appendChild(p2El3);
            p2El3.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
            const p3El3 = document.createElement('p');
            divChEl3.appendChild(p3El3);
            p3El3.textContent = `${this.Salary}`;
            const brEl3 = document.createElement('br');
            break;

        case "Finance":

            const divEl4 = document.createElement('div');
            divEl4.id = 'card';
            secEl4.appendChild(divEl4);
            const imgEl4 = document.createElement('img');
            divEl4.appendChild(imgEl4);
            imgEl4.setAttribute('src', this.Image_URL);
            imgEl4.width = "200";
            imgEl4.height = "200";
            const divChEl4 = document.createElement('div');
            divChEl4.id = 'container1';
            divEl4.appendChild(divChEl4);
            const p1El4 = document.createElement('p');
            divChEl4.appendChild(p1El4);
            p1El4.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeId}`
            const p2El4 = document.createElement('p');
            divChEl4.appendChild(p2El4);
            p2El4.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
            const p3El4 = document.createElement('p');
            divChEl4.appendChild(p3El4);
            p3El4.textContent = `${this.Salary}`;
            const brEl4 = document.createElement('br');

        default:
            break;
    }
    
}

let EmpForm = document.getElementById("Empform"); 
EmpForm.addEventListener('submit', addNewEmployee);

function addNewEmployee(event){
    event.preventDefault();

    let empName= event.target.name.value; 
    let dep= event.target.Dep.value; 
    let level = event.target.level.value; 
    let imgUrl= event.target.imgurl.value; 
    
    let newEmp = new Employee(empName, dep,level,imgUrl); 
    newEmp.calculateSalary(); 
    newEmp.generateId(); 
    newEmp.render(); 
}

