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
]

var baseStats = {
  firstAndPike: {
    minPerCust: 23,
    maxPerCust: 65,
    avgCookiePerSale: 6.3
  },
  seatac: {
    minPerCust: 3,
    maxPerCust: 24,
    avgCookiePerSale: 1.2
  },
  seattleCenter: {
    minPerCust: 11,
    maxPerCust: 38,
    avgCookiePerSale: 3.7
  },
  capitolHill: {
    minPerCust: 20,
    maxPerCust: 38,
    avgCookiePerSale: 2.3
  },
  alki: {
    minPerCust: 2,
    maxPerCust: 16,
    avgCookiePerSale: 4.6
  },
}

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

var locationArray = [
  {
    locationID: 'firstAndPike',
    locationName: '1st And Pike',
    salesPerHour: [],
    total: function() {
      endTotal = 0
      for (var index in this.salesPerHour){
        endTotal += this.salesPerHour[index];
        console.log(endTotal);
      }
      console.log(endTotal)
      return(endTotal)
    },
    returnAll: function() {
      for( var i = 0 ; i < times.length ; i++ ) {
        var locID = this.locationID;
        var locData = (baseStats.locID);
        console.log(locID)
        console.log(baseStats)
        console.log(locData)
        this.salesPerHour.push( random( locData.minPerCust , locData.maxPerCust ) );
      }
      console.log(this.salesPerHour);
    }
  }
]
