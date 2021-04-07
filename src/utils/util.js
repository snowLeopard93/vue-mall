let _ = require("underscore");

export function filterData(data, query) {
  let filterData = [];
  let keys = _.keys(query);
  let filterParams = {};
  _.each(keys, keyItem => {
    if (query[keyItem]) {
      filterParams[keyItem] = query[keyItem];
    }
  });
  filterData = _.where(data, filterParams);
  return filterData;
}
