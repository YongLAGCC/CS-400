
const fibonacci = function* (n, n1 = 0, n2 = 1){
    if (n === 0) {
        return n1;
    }
    yield n1;
    yield *fibonacci(n-1, n2, n1 + n2);
}

const fibs = n => fibonacci(20)
myFibs = fibs()

const isEven= function* (){
    let count = 0;
    while (count < 6) {
        temp = myFibs.next().value
        if(temp % 2 == 0){
            yield temp;
        }

    }
}

const evens = n => isEven()
myEven = evens()

let count = 6;
while (count --> 0) {
    console.log(myEven.next().value)
}
