const splitSents = function* (str){
    var words = str.split(" ");
    for (var i = 0; i < words.length ; i++) {
        yield words[i]
    }
}


const string = "All I know is something like a bird within her sang";
var words = string.split(" ")

const split = n => splitSents(string)
mySplit= split()

let count = words.length;
while (count --> 0) {
    console.log(mySplit.next().value);
}


