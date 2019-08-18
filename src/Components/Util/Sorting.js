function sortAscending(inputObjectArray, sortProperty) {
    inputObjectArray.sort((a,b) => {
        const aUpper = a[sortProperty].toUpperCase();
        const bUpper = b[sortProperty].toUpperCase();
       
        let comparison = 0;
        if (aUpper < bUpper) {
            comparison = 1;
            } else if (aUpper > bUpper) {
            comparison = -1;
            }
            
        return comparison;
    });
}

function sortDescending(inputObjectArray, sortProperty) { 
    inputObjectArray.sort((a,b) => {
        let aUpper;
        let bUpper;
        if (typeof(a[sortProperty] === 'string')) { 
            aUpper = a[sortProperty].toUpperCase();
            bUpper = b[sortProperty].toUpperCase();
        } else {
            aUpper = a[sortProperty];
            bUpper = b[sortProperty];
        }
        let comparison = 0;
        if (aUpper > bUpper) {
            comparison = 1;
            } else if (aUpper < bUpper) {
            comparison = -1;
            }
        return comparison;
    });
}

module.exports = {
    sortAscending:sortAscending,
    sortDescending:sortDescending
}