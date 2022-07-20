'use strict';

let stores = [];
let globalOpenTime = 14;
let tableCells = globalOpenTime + 1;

function Store(storeName, minCust, maxCust, aveCookiesPerCust){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiesPerCust = aveCookiesPerCust;

  let storeSalesData = [];

  this.calculateStoreData(this);
  stores.push(this);
}

Store.prototype.calculateStoreData = function(store){
  let tempDataArray = [];
  for(let i = 0; i <= globalOpenTime; i++){
    tempDataArray[i] = (Math.round(Math.floor(Math.random() * (store.maxCust - store.minCust) + store.minCust) * store.aveCookiesPerCust));
  }
  store.storeSalesData = tempDataArray;
};

Store.prototype.render = function(){
  let tbodyElm = document.getElementById('table-body');
  let tbodytrElm = document.createElement('tr');
  tbodyElm.appendChild(tbodytrElm);

  let tfootElm = document.getElementById('table-foot');
  let tfoottrElm = document.createElement('tr');
  tfootElm.appendChild(tfoottrElm);

  let dailyTotal = 0;

  for(let i = 0; i <= tableCells; i++){
    if(i === 0){
      let tbodytdElm = document.createElement('td');
      tbodytrElm.appendChild(tbodytdElm);
      tbodytdElm.textContent = this.storeName;
    } else if (i < tableCells){
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



let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

createTable();
renderAll();

function renderAll(){
  let tempStoreTotalForHour = [];

  for(let i = 0; i < stores.length; i++){
    stores[i].render();
    for (let j = 0; j < stores[i].storeSalesData.length; j++){

      if(tempStoreTotalForHour[j] === undefined)
      {
        tempStoreTotalForHour[j] = stores[i].storeSalesData[j];
      } else {
        tempStoreTotalForHour[j] += stores[i].storeSalesData[j];
      }
    }
  }
}





function createTable(){
  let parentElm = document.getElementById('sales-table');
  let captionElm = document.createElement('caption');
  parentElm.appendChild(captionElm);

  captionElm.textContent = 'Store Sales Data Table';

  let theadElm = document.createElement('thead');
  parentElm.appendChild(theadElm);

  let headtrElm = document.createElement('tr');
  theadElm.appendChild(headtrElm);

  for(let i = 0; i <= tableCells; i++)
  {
    let headthElm = document.createElement('th');
    headtrElm.appendChild(headthElm);

    if (i !== 0 && i < 7) {
      headthElm.textContent = `${i + 5}am:`;
    } else if (i === 7) {
      headthElm.textContent = `${i + 5}pm:`;
    } else if (i > 7 && i < tableCells ) {
      headthElm.textContent = `${i - 7}pm:`;
    } else if (i === tableCells ){
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

