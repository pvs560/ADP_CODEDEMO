var _ = require("lodash");

module.exports = {
    topRated : (data) => {
        let orderedData = _.orderBy(data, 'rating','desc');
        return orderedData.slice(0,5);
    }
}