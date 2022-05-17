'use strict';

let salesSection = document.getElementById('store-sales');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// got from mdn web docs
function randAvgCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookSales: 6.3,
  totalCookies: 0,
  cookieArray: [],
  getNumCookSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let NumCookSold = Math.ceil(randAvgCust(this.minCust, this.maxCust) * this.avgCookSales);
      this.totalCookies = this.totalCookies + NumCookSold;
      this.cookieArray.push(NumCookSold);
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total cookies sold ${this.totalCookies}`;
    ulElem.appendChild(liElem);
  },
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookSales: 1.2,
  totalCookies: 0,
  cookieArray: [],
  getNumCookSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let NumCookSold = Math.ceil(randAvgCust(this.minCust, this.maxCust) * this.avgCookSales);
      this.totalCookies = this.totalCookies + NumCookSold;
      this.cookieArray.push(NumCookSold);
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total cookies sold ${this.totalCookies}`;
    ulElem.appendChild(liElem);
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookSales: 3.7,
  totalCookies: 0,
  cookieArray: [],
  getNumCookSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let NumCookSold = Math.ceil(randAvgCust(this.minCust, this.maxCust) * this.avgCookSales);
      this.totalCookies = this.totalCookies + NumCookSold;
      this.cookieArray.push(NumCookSold);
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total cookies sold ${this.totalCookies}`;
    ulElem.appendChild(liElem);
  },
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookSales: 2.3,
  totalCookies: 0,
  cookieArray: [],
  getNumCookSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let NumCookSold = Math.ceil(randAvgCust(this.minCust, this.maxCust) * this.avgCookSales);
      this.totalCookies = this.totalCookies + NumCookSold;
      this.cookieArray.push(NumCookSold);
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total cookies sold ${this.totalCookies}`;
    ulElem.appendChild(liElem);
  },

};
let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookSales: 4.6,
  totalCookies: 0,
  cookieArray: [],
  getNumCookSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let NumCookSold = Math.ceil(randAvgCust(this.minCust, this.maxCust) * this.avgCookSales);
      this.totalCookies = this.totalCookies + NumCookSold;
      this.cookieArray.push(NumCookSold);
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total cookies sold ${this.totalCookies}`;
    ulElem.appendChild(liElem);
  },
};

seattle.getNumCookSold();
tokyo.getNumCookSold();
dubai.getNumCookSold();
paris.getNumCookSold();
lima.getNumCookSold();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();