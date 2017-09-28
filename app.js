'use strict';

var random = function(min, max){
  return( Math.round(Math.random() * (max - min) + min));
};

var times = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM'];

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

function Store(locationName,minPerCust,maxPerCust,avgCookiePerSale) {
  this.locationName = locationName;
  this.minPerCust = minPerCust;
  this.maxPerCust = maxPerCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.tableRow = [this.locationName];
  var endTotal = 0;
  for(var i = 0; i < times.length; i++){
    var randomNum = random(this.minPerCust , this.maxPerCust);
    randomNum = Math.round(randomNum * this.avgCookiePerSale);
    this.tableRow.push(times[i] + ': ' + randomNum);
    endTotal += randomNum;
  };
  this.tableRow.push('total: ' + endTotal);
};

var locationArray = [];
// 1st and Pike	23	65	6.3
locationArray.push(new Store('1st and Pike',23,65,6.3));
// SeaTac Airport	3	24	1.2
locationArray.push(new Store('SeaTac Airport',3,24,1.2));
// // Seattle Center	11	38	3.7
locationArray.push(new Store('Seattle Center',11,38,3.7));
// // Capitol Hill	20	38	2.3
locationArray.push(new Store('Capitol Hill',20,38,2.3));
// // Alki	2	16	4.6
locationArray.push(new Store('Alki',2,16,4.6));

// get table by id
var tableElement = document.getElementById('sales-charts');
for(var row in locationArray) {
  var rowElement = document.createElement('tr');
  tableElement.appendChild(rowElement);
  for(var i = 0; i < locationArray[row].tableRow.length; i++) {
    if(i === 0 || i === locationArray[row].tableRow.length - 1){
      var dataElement = document.createElement('th');
    } else {
      var dataElement = document.createElement('td');
    }
    dataElement.textContent = locationArray[row].tableRow[i];
    rowElement.appendChild(dataElement);
  }
}
