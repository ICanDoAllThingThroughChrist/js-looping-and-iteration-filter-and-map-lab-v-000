// Code your solution here:
function driversWithRevenueOver (collection, revenue) {
  return collection.filter(function(object) {return object.revenue >= revenue;
  });
}

function driverNamesWithRevenueOver(collection, number) {
  const newArr = [];
  collection.filter(function(object){
    if(object.revenue>=number) {
      newArr.push(object.name)
    }
  })
  return newArr;
}
