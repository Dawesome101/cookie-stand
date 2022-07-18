'use strict';

let Seattle = {
  storeName: 'Seattle',
  hourlyCust: {
    min: 23,
    max: 65
  },
  avgCookiesPerCust: 6.3,

  randomNumOfCustPerHour: function(){
    return Math.floor(Math.random() * (this.hourlyCust.max - this.hourlyCust.min) + this.hourlyCust.min);
  },

  calcCookiesPerHour: function(){
    let tempArray = [0];
    let tempTextArray = [''];
    for (let i = 0; i < 14; i++){

      tempArray[i] = this.randomNumOfCustPerHour();

      if(i < 6 ){
        tempTextArray[i] = `${i + 6}am: ${Math.round(tempArray[i] * this.avgCookiesPerCust)} cookies`;
      } else if(i === 6) {
        tempTextArray[i] = `${i + 6}pm: ${Math.round(tempArray[i] * this.avgCookiesPerCust)} cookies`;
      } else {
        tempTextArray[i] = `${i - 6}pm: ${Math.round(tempArray[i] * this.avgCookiesPerCust)} cookies`;
      }
    }
    return tempTextArray;
  },

  render: function(){

  }
};
