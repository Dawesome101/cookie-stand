'use strict';

let seattle = {
  storeName: 'Seattle',
  hourlyCust: {
    min: 23,
    max: 65
  },
  avgCookiesPerCust: 6.3,
  cookiePerHourEntries: 15, //Always add one to this number because the last slot in the array that uses it is the total of all the cookies per hour. So make sure to add one additional slot.

  listItemData: [],
  cookiesTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < this.cookiePerHourEntries; i++) {

      let tempNum = Math.round(this.randomNumOfCustPerHour() * this.avgCookiesPerCust);
      this.cookiesTotal += tempNum;

      if (i < 6) {
        this.listItemData[i] = `${i + 6}am: ${tempNum} cookies`;
      } else if (i === 6) {
        this.listItemData[i] = `${i + 6}pm: ${tempNum} cookies`;
      } else if (i > 6 && i < this.cookiePerHourEntries - 1) {
        this.listItemData[i] = `${i - 6}pm: ${tempNum} cookies`;
      } else {
        this.listItemData[i] = `Total: ${this.cookiesTotal} cookies`;
      }
    }
  },

  randomNumOfCustPerHour: function () {
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  render: function () {
    let parentElem = document.getElementById('sales-info');
    let articleElem = document.createElement('article');
    parentElem.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.storeName;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.calcCookiesPerHour();

    for (let i = 0; i <= this.listItemData.length; i++) {
      if (i < this.listItemData.length) {
        let liElem = document.createElement('li');
        liElem.textContent = this.listItemData[i];
        ulElem.appendChild(liElem);
      }
    }

    let imgElem = document.createElement('img');
    articleElem.appendChild(imgElem);
  }
};

let tokyo = {
  storeName: 'Tokyo',
  hourlyCust: {
    min: 3,
    max: 24
  },
  avgCookiesPerCust: 1.2,
  cookiePerHourEntries: 15, //Always add one to this number because the last slot in the array that uses it is the total of all the cookies per hour. So make sure to add one additional slot.

  listItemData: [],
  cookiesTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < this.cookiePerHourEntries; i++) {

      let tempNum = Math.round(this.randomNumOfCustPerHour() * this.avgCookiesPerCust);
      this.cookiesTotal += tempNum;

      if (i < 6) {
        this.listItemData[i] = `${i + 6}am: ${tempNum} cookies`;
      } else if (i === 6) {
        this.listItemData[i] = `${i + 6}pm: ${tempNum} cookies`;
      } else if (i > 6 && i < this.cookiePerHourEntries - 1) {
        this.listItemData[i] = `${i - 6}pm: ${tempNum} cookies`;
      } else {
        this.listItemData[i] = `Total: ${this.cookiesTotal} cookies`;
      }
    }
  },

  randomNumOfCustPerHour: function () {
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  render: function () {
    let parentElem = document.getElementById('sales-info');
    let articleElem = document.createElement('article');
    parentElem.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.storeName;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.calcCookiesPerHour();

    for (let i = 0; i <= this.listItemData.length; i++) {
      if (i < this.listItemData.length) {
        let liElem = document.createElement('li');
        liElem.textContent = this.listItemData[i];
        ulElem.appendChild(liElem);
      }
    }

    let imgElem = document.createElement('img');
    articleElem.appendChild(imgElem);
  }
};

let dubai = {
  storeName: 'Dubai',
  hourlyCust: {
    min: 11,
    max: 38
  },
  avgCookiesPerCust: 3.7,
  cookiePerHourEntries: 15, //Always add one to this number because the last slot in the array that uses it is the total of all the cookies per hour. So make sure to add one additional slot.

  listItemData: [],
  cookiesTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < this.cookiePerHourEntries; i++) {

      let tempNum = Math.round(this.randomNumOfCustPerHour() * this.avgCookiesPerCust);
      this.cookiesTotal += tempNum;

      if (i < 6) {
        this.listItemData[i] = `${i + 6}am: ${tempNum} cookies`;
      } else if (i === 6) {
        this.listItemData[i] = `${i + 6}pm: ${tempNum} cookies`;
      } else if (i > 6 && i < this.cookiePerHourEntries - 1) {
        this.listItemData[i] = `${i - 6}pm: ${tempNum} cookies`;
      } else {
        this.listItemData[i] = `Total: ${this.cookiesTotal} cookies`;
      }
    }
  },

  randomNumOfCustPerHour: function () {
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  render: function () {
    let parentElem = document.getElementById('sales-info');
    let articleElem = document.createElement('article');
    parentElem.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.storeName;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.calcCookiesPerHour();

    for (let i = 0; i <= this.listItemData.length; i++) {
      if (i < this.listItemData.length) {
        let liElem = document.createElement('li');
        liElem.textContent = this.listItemData[i];
        ulElem.appendChild(liElem);
      }
    }

    let imgElem = document.createElement('img');
    articleElem.appendChild(imgElem);
  }
};

let paris = {
  storeName: 'Paris',
  hourlyCust: {
    min: 20,
    max: 38
  },
  avgCookiesPerCust: 2.3,
  cookiePerHourEntries: 15, //Always add one to this number because the last slot in the array that uses it is the total of all the cookies per hour. So make sure to add one additional slot.

  listItemData: [],
  cookiesTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < this.cookiePerHourEntries; i++) {

      let tempNum = Math.round(this.randomNumOfCustPerHour() * this.avgCookiesPerCust);
      this.cookiesTotal += tempNum;

      if (i < 6) {
        this.listItemData[i] = `${i + 6}am: ${tempNum} cookies`;
      } else if (i === 6) {
        this.listItemData[i] = `${i + 6}pm: ${tempNum} cookies`;
      } else if (i > 6 && i < this.cookiePerHourEntries - 1) {
        this.listItemData[i] = `${i - 6}pm: ${tempNum} cookies`;
      } else {
        this.listItemData[i] = `Total: ${this.cookiesTotal} cookies`;
      }
    }
  },

  randomNumOfCustPerHour: function () {
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  render: function () {
    let parentElem = document.getElementById('sales-info');
    let articleElem = document.createElement('article');
    parentElem.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.storeName;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.calcCookiesPerHour();

    for (let i = 0; i <= this.listItemData.length; i++) {
      if (i < this.listItemData.length) {
        let liElem = document.createElement('li');
        liElem.textContent = this.listItemData[i];
        ulElem.appendChild(liElem);
      }
    }

    let imgElem = document.createElement('img');
    articleElem.appendChild(imgElem);
  }
};

let lima = {
  storeName: 'Lima',
  hourlyCust: {
    min: 2,
    max: 16
  },
  avgCookiesPerCust: 4.6,
  cookiePerHourEntries: 15, //Always add one to this number because the last slot in the array that uses it is the total of all the cookies per hour. So make sure to add one additional slot.

  listItemData: [],
  cookiesTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < this.cookiePerHourEntries; i++) {

      let tempNum = Math.round(this.randomNumOfCustPerHour() * this.avgCookiesPerCust);
      this.cookiesTotal += tempNum;

      if (i < 6) {
        this.listItemData[i] = `${i + 6}am: ${tempNum} cookies`;
      } else if (i === 6) {
        this.listItemData[i] = `${i + 6}pm: ${tempNum} cookies`;
      } else if (i > 6 && i < this.cookiePerHourEntries - 1) {
        this.listItemData[i] = `${i - 6}pm: ${tempNum} cookies`;
      } else {
        this.listItemData[i] = `Total: ${this.cookiesTotal} cookies`;
      }
    }
  },

  randomNumOfCustPerHour: function () {
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  render: function () {
    let parentElem = document.getElementById('sales-info');
    let articleElem = document.createElement('article');
    parentElem.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.storeName;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.calcCookiesPerHour();

    for (let i = 0; i <= this.listItemData.length; i++) {
      if (i < this.listItemData.length) {
        let liElem = document.createElement('li');
        liElem.textContent = this.listItemData[i];
        ulElem.appendChild(liElem);
      }
    }

    let imgElem = document.createElement('img');
    articleElem.appendChild(imgElem);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
