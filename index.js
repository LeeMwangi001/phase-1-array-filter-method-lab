// Code your solution here

function findMatching(array,specifiedName) {
    const driverName = array.filter(driver => {
        return driver.toLowerCase() === specifiedName.toLowerCase() ; 
    });
    return driverName;
}

function fuzzyMatch(array, specifiedChar) {
    const filteredArray = array.filter(driverChar => {
        return driverChar.toLowerCase().indexOf(specifiedChar.toLowerCase()) === 0
    });
    return filteredArray;
}
function matchName(array, specifiedName){
    return array.filter((array) => array.name === specifiedName);
}

