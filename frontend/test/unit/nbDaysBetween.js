const assert = require('assert');

let date1 = new Date('2018-09-22T15:00:00');
let date2 = new Date('2018-09-24T15:00:00');

function getNbDaysBetween(start,end){
    let dateStart = Date.parse(start);
    let dateEnd = Date.parse(end);
    let diff = {};
    let tmp = dateEnd - dateStart;
    tmp = Math.floor(tmp/1000);
    diff.sec = tmp % 60;
    tmp = Math.floor((tmp-diff.sec)/60);
    diff.min = tmp % 60;
    tmp = Math.floor((tmp-diff.min)/60);    
    diff.hour = tmp % 24;                   
    tmp = Math.floor((tmp-diff.hour)/24); 
    let difDay = tmp; 
    console.log("day:"+difDay);
    return difDay;
  }

assert.strictEqual(getNbDaysBetween(date1,date2),2);
    