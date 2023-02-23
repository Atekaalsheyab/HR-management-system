'use strict'
let EmpArray = [];
let sumAdmin = 0;
let sumDev = 0;
let sumMar = 0;
let sumFin = 0;
let AvgAdmin = 0;
let AvgDev = 0;
let AvgMar = 0;
let AvgFin = 0;
let AdminCount = 0;
let DevCount = 0;
let FinCount = 0;
let MarCount = 0;
function getEmpdata() {
    let jsonempArr = localStorage.getItem("allEmp");
    EmpArray = JSON.parse(jsonempArr);
}

getEmpdata();
const cont = document.getElementById('body-table');

console.log(EmpArray.length);
for (let i = 0; i < EmpArray.length; i++) {
    switch (EmpArray[i].Department) {
        case "Administration":
            AdminCount++;
            sumAdmin += EmpArray[i].Salary;
            break;
        case "Marketing":
            MarCount++;
            sumMar += EmpArray[i].Salary;
            break;
        case "Development":
            DevCount++;
            sumDev += EmpArray[i].Salary;
            break;
        case "Finance":
            FinCount++;
            sumFin += EmpArray[i].Salary;
        default:
            break;
    }

}

AvgAdmin = sumAdmin / AdminCount;
AvgDev = sumDev / DevCount;
AvgMar = sumMar / MarCount;
AvgFin = sumFin / FinCount;


const trEl1 = document.createElement('tr');
cont.appendChild(trEl1);
const tdEl1 = document.createElement('td');
trEl1.appendChild(tdEl1);
tdEl1.textContent = "Administration";
const tdEl2 = document.createElement('td');
trEl1.appendChild(tdEl2);
tdEl2.textContent = AdminCount;
const tdEl3 = document.createElement('td');
trEl1.appendChild(tdEl3);
tdEl3.textContent = Math.round(sumAdmin) + " JD";
const tdEl4 = document.createElement('td');
trEl1.appendChild(tdEl4);
tdEl4.textContent = Math.round(AvgAdmin) + " JD";

const trEl2 = document.createElement('tr');
cont.appendChild(trEl2);
const tdEl21 = document.createElement('td');
trEl2.appendChild(tdEl21);
tdEl21.textContent = "Development";
const tdEl22 = document.createElement('td');
trEl2.appendChild(tdEl22);
tdEl22.textContent = DevCount;
const tdEl23 = document.createElement('td');
trEl2.appendChild(tdEl23);
tdEl23.textContent = Math.round(sumDev) + " JD";
const tdEl24 = document.createElement('td');
trEl2.appendChild(tdEl24);
tdEl24.textContent = Math.round(AvgDev) + " JD"

const trEl3 = document.createElement('tr');
cont.appendChild(trEl3);
const tdEl31 = document.createElement('td');
trEl3.appendChild(tdEl31);
tdEl31.textContent = "Markiting";
const tdEl32 = document.createElement('td');
trEl3.appendChild(tdEl32);
tdEl32.textContent = MarCount;
const tdEl33 = document.createElement('td');
trEl3.appendChild(tdEl33);
tdEl33.textContent = Math.round(sumMar) + " JD";
const tdEl34 = document.createElement('td');
trEl3.appendChild(tdEl34);
tdEl34.textContent = Math.round(AvgMar) + " JD";

const trEl4 = document.createElement('tr');
cont.appendChild(trEl4);
const tdEl41 = document.createElement('td');
trEl4.appendChild(tdEl41);
tdEl41.textContent = "Finance";
const tdEl42 = document.createElement('td');
trEl4.appendChild(tdEl42);
tdEl42.textContent = FinCount;
const tdEl43 = document.createElement('td');
trEl4.appendChild(tdEl43);
tdEl43.textContent = Math.round(sumFin) + " JD";
const tdEl44 = document.createElement('td');
trEl4.appendChild(tdEl44);
tdEl44.textContent = Math.round(AvgFin) + " JD";

const footcont = document.getElementById('table-footer');
const trFoot1 = document.createElement('tr');
footcont.appendChild(trFoot1);

const tdFoot1 = document.createElement('td');
trFoot1.appendChild(tdFoot1);
tdFoot1.textContent = "Total";

const tdFoot2 = document.createElement('td');
trFoot1.appendChild(tdFoot2);
tdFoot2.textContent = AdminCount + DevCount + FinCount + MarCount;

const tdFoot3 = document.createElement('td');
trFoot1.appendChild(tdFoot3);
tdFoot3.textContent = Math.round(sumAdmin + sumDev + sumFin + sumMar) + " JD";

const tdFoot4 = document.createElement('td');
trFoot1.appendChild(tdFoot4);
tdFoot4.textContent = Math.round(AvgAdmin + AvgDev + AvgFin + AvgMar) + " JD"; 