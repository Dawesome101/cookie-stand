'use strict';

let addStoreForm = document.getElementById('add-store-form');

function handleSubmitStore(event) {
  event.preventDefault();

  let name = event.target.formStoreName.value;
  let min = +event.target.minimum.value;
  let max = +event.target.maximum.value;
  let avrg = +event.target.average.value;

  let newStore = new Store(name, min, max, avrg);

  newStore.renderStore();
  renderFooter(true);
  addStoreForm.reset();
}

function initializePage() {
  let seattle = new Store('Seattle', 23, 65, 6.3);
  let tokyo = new Store('Tokyo', 3, 24, 1.2);
  let dubai = new Store('Dubai', 11, 38, 3.7);
  let paris = new Store('Paris', 20, 38, 2.3);
  let Lima = new Store('Lima', 2, 16, 4.6);

  createTable();
  renderStoresOnPageLoad();
  renderFooter(false);
}

function createTable() {
  let parentElm = document.getElementById('sales-table');
  let captionElm = document.createElement('caption');
  parentElm.appendChild(captionElm);
  captionElm.textContent = 'Store Sales Data Table';

  let theadElm = document.createElement('thead');
  parentElm.appendChild(theadElm);

  let headtrElm = document.createElement('tr');
  theadElm.appendChild(headtrElm);

  for (let i = 0; i <= tableCells; i++) {
    let headthElm = document.createElement('th');
    headtrElm.appendChild(headthElm);

    if (i !== 0 && i < 7) {
      headthElm.textContent = `${i + 5}am:`;
    } else if (i === 7) {
      headthElm.textContent = `${i + 5}pm:`;
    } else if (i > 7 && i < tableCells) {
      headthElm.textContent = `${i - 7}pm:`;
    } else if (i === tableCells) {
      headthElm.textContent = 'Daily Location Total';
    }
  }

  let tbodyElm = document.createElement('tbody');
  parentElm.appendChild(tbodyElm);
  tbodyElm.setAttribute('id', 'table-body');

  let tfootElm = document.createElement('tfoot');
  parentElm.appendChild(tfootElm);
  tfootElm.setAttribute('id', 'table-foot');
}

let stores = [];
let combinedTotalForEachHour = [];
let globalOpenTime = 14;
let tableCells = globalOpenTime + 1;

function Store(storeName, minCust, maxCust, aveCookiesPerCust) {
  this.storeName = storeName;

  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiesPerCust = aveCookiesPerCust;
  let storeSalesData = [];

  this.calculateStoreData(this);
  stores.push(this);
}

Store.prototype.calculateStoreData = function (store) {
  let tempDataArray = [];
  for (let i = 0; i <= globalOpenTime; i++) {
    tempDataArray[i] = Math.round(Math.floor(Math.random() * (store.maxCust - store.minCust) + store.minCust) * store.aveCookiesPerCust);
  }
  store.storeSalesData = tempDataArray;
};

Store.prototype.renderStore = function () {
  let tbodytrElm;
  let dailyTotal = 0;

  let tbodyElm = document.getElementById('table-body');
  tbodytrElm = document.createElement('tr');
  tbodyElm.appendChild(tbodytrElm);

  for (let i = 0; i <= tableCells; i++) {
    if (i === 0) {
      let tbodytdElm = document.createElement('td');
      tbodytrElm.appendChild(tbodytdElm);
      tbodytdElm.textContent = this.storeName;
    } else if (i < tableCells) {
      dailyTotal += this.storeSalesData[i - 1];
      let tbodytdElm = document.createElement('td');
      tbodytrElm.appendChild(tbodytdElm);
      tbodytdElm.textContent = this.storeSalesData[i - 1];
    } else {
      let tbodytdElm = document.createElement('td');
      tbodytrElm.appendChild(tbodytdElm);
      tbodytdElm.textContent = dailyTotal;
    }
  }
};

function renderStoresOnPageLoad() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].renderStore();

    for (let j = 0; j < stores[i].storeSalesData.length; j++) {
      if (combinedTotalForEachHour[j] === undefined) {
        combinedTotalForEachHour[j] = stores[i].storeSalesData[j];
      } else {
        combinedTotalForEachHour[j] += stores[i].storeSalesData[j];
      }
    }
  }
}

function renderFooter(removeTableRow) {
  let tfootElm = document.getElementById('table-foot');
  let dailyTotal = 0;

  if (removeTableRow) {
    document.getElementById('table-row').remove();

    for (let i = 0; i < stores[stores.length - 1].storeSalesData.length; i++) {
      combinedTotalForEachHour[i] += stores[(stores.length - 1)].storeSalesData[i];
    }
  }

  let tfoottrElm = document.createElement('tr');
  tfoottrElm.setAttribute('id', 'table-row');
  tfootElm.appendChild(tfoottrElm);

  for (let i = 0; i <= tableCells; i++) {
    if (i === 0) {
      let tfootthElm = document.createElement('th');
      tfoottrElm.appendChild(tfootthElm);
      tfootthElm.textContent = 'Total';
    } else if (i < tableCells) {
      dailyTotal += combinedTotalForEachHour[i - 1];
      let tfootthElm = document.createElement('th');
      tfoottrElm.appendChild(tfootthElm);
      tfootthElm.textContent = combinedTotalForEachHour[i - 1];
    } else {
      let tfootthElm = document.createElement('th');
      tfoottrElm.appendChild(tfootthElm);
      tfootthElm.textContent = dailyTotal;
    }
  }
}

initializePage();

addStoreForm.addEventListener('submit', handleSubmitStore);
