'use strict';

let salesSection = document.getElementById('table');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(salesSection);

// got from mdn web docs
function randCust(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let storeData = [];

function Stores(name, minCust, maxCust, avgCookSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookSales = avgCookSales;
  this.totalCookies = 0;
  this.NumCookSold = 0;
  this.cookieArray = [];
  this.avgCookSold();
  storeData.push(this);
}

Stores.prototype.randCust = function () {
  this.randCust = `${randCust(this.minCust, this.maxCust)}`;
};

Stores.prototype.avgCookSold = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCookSold = Math.ceil(randCust(this.minCust, this.maxCust) * this.avgCookSales);
    this.totalCookies = this.totalCookies + numCookSold;
    this.cookieArray.push(numCookSold);
  }
};

Stores.prototype.render = function () {
  let trOneElem = document.createElement('tr');
  salesSection.appendChild(trOneElem);
  let dataCell = document.createElement('td');
  dataCell.textContent = this.name;
  trOneElem.appendChild(dataCell);
  for (let i = 0; i < hours.length; i++) {
    let dataCell = document.createElement('td');
    dataCell.textContent = this.cookieArray[i];
    trOneElem.appendChild(dataCell);
  }
  let dataCellTotal = document.createElement('td');
  dataCellTotal.textContent = this.totalCookies;
  trOneElem.appendChild(dataCellTotal);
};

function renderAllStoreData() {
  for (let i = 0; i < 5; i++) {
    storeData[i].render();
  }
}
function setTableHeader() {
  let newRow = document.createElement('tr');
  salesSection.appendChild(newRow);
  let thElem = document.createElement('th');
  newRow.appendChild(thElem);
  thElem.textContent = 'Store Location';
  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    newRow.appendChild(thElem);
    thElem.textContent = `${hours[i]}`;
  }
  let thTotal = document.createElement('th');
  newRow.appendChild(thTotal);
  thTotal.textContent = 'Daily Total';
}

function setTableFooter() {
  let newRow = document.createElement('tr');
  salesSection.appendChild(newRow);
  let footElem = document.createElement('tf');
  newRow.appendChild(footElem);
  footElem.textContent = 'Hourly Totals:';
  for (let i = 0; i < storeData.length; i++);
  let hourlyTotal = document.createElement('tf');
  newRow.appendChild(hourlyTotal);
  hourlyTotal.textContent = `${storeData[i]}`;

}

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);
setTableHeader();
console.log(storeData);
renderAllStoreData();
setTableFooter();

console.log(storeData.length);


