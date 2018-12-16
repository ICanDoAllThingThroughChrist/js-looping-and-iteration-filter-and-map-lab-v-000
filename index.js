// Code your solution here:
function driversWithRevenueOver (collection, revenue) {
  return collection.filter(function(object) {return object.revenue >= revenue})
}
