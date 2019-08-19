function filterByString(inputArray, propertyName, filterString) {
    let result = inputArray.filter(a => a[propertyName] === filterString);

    if (filterString === '') {
        result = inputArray;
    }
    return result;
}

module.exports = {
    filterByString:filterByString
}