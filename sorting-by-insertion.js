var ages = [2, 1, 5, 10, 3, 20, 30, 4, 8, 7, 5, 99, 28, 18];

var sort = function(arr, method='backward') {
    var from;
    var to;
    for(var i = 1; i < arr.length; i++){
        from = i;
        for(var j = 0; j < i; j++){
            if(method === 'upward'){
                if(arr[j] < arr[i]){
                    to = j;
                    changePosition(from, to, arr)
                }
            } else {
                if(arr[j] > arr[i]){
                    to = j;
                    changePosition(from, to, arr)
                }
            }
        }
    }
    return arr;
};

var changePosition = function(from, to, arr) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
};

var assertEqual = function(expected, result) {
    if(JSON.stringify(expected) === JSON.stringify(result)) {
        return 'PASS';
    }
    return `Expected ${expected} but actually got: ${result}`;
}

console.log(sort(ages));
console.log(assertEqual([1, 10, 100, 1000, 10000], sort([10, 1000, 10000, 100, 1])));
console.log(assertEqual([1], sort([1])));
console.log(assertEqual([1, 2, 11, 12, 13], sort([1, 2, 11, 12, 13])));
console.log(assertEqual([10, 9, 8, 7, 6], sort([10, 9, 8, 7, 6], 'upward')));

