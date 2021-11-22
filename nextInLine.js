

function nextInLine(arr,item){
    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,5];

alert("Before: " + JSON.stringify(testArr));
alert(nextInLine(testArr, 6));
alert("After: " + JSON.stringify(testArr))