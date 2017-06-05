var ages = [2, 1, 5, 10, 3, 20, 30, 4, 8, 7, 5, 99, 28, 18];

var sort = function(arr) {
    var from;
    var to;
    for(var i = 1; i < arr.length; i++){
        from = i;
        for(var j = 0; j < i; j++){
            if(arr[j] > arr[i]){
                to = j;
                changePosition(from, to, arr)
            }
        }
    }
    return arr;
};

var changePosition = function(from, to, arr) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
};

console.log(sort(ages));
