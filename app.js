'use strict';

var random = function(min, max){
  return( Math.round(Math.random() * (max - min) + min));
}

var times = [
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM'
];

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

var locationArray = [
  {
    locationName: '1st And Pike',
    locationId: 'first-and-pike',
    minPerCust: 23,
    maxPerCust: 65,
    avgCookiePerSale: 6.3,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        randomNum = Math.round(randomNum * this.avgCookiePerSale);
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'SeaTac Airport',
    locationId: 'seatac',
    minPerCust: 3,
    maxPerCust: 24,
    avgCookiePerSale: 1.2,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        randomNum = Math.round(randomNum * this.avgCookiePerSale);
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'Seattle Center',
    locationId: 'seattle-center',
    minPerCust: 11,
    maxPerCust: 38,
    avgCookiePerSale: 3.7,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        randomNum = Math.round(randomNum * this.avgCookiePerSale);
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'Capitol Hill',
    locationId: 'capitol-hill',
    minPerCust: 20,
    maxPerCust: 38,
    avgCookiePerSale: 2.3,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        randomNum = Math.round(randomNum * this.avgCookiePerSale);
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'Alki',
    locationId: 'alki',
    minPerCust: 2,
    maxPerCust: 16,
    avgCookiePerSale: 4.6,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        randomNum = Math.round(randomNum * this.avgCookiePerSale);
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  }
];

for(var index in locationArray) {
  // populate hourly sales
  locationArray[index].returnAll();

  // get unordered list by id
  var id = locationArray[index].locationId;
  var ulEl = document.getElementById(id);
  // +1 is for totals
  for(var i = 0; i < times.length + 1; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = locationArray[index].salesPerHour[i];
    ulEl.appendChild(liEl);
  }
}
