
for (let counter = 1; counter <= 100; counter++){
    if (counter % 3 === 0 && counter % 5 === 0){
        console.log("FizzBuzz");
    }else {
        if (counter % 3 === 0){
            console.log("Fizz");
        }else {
            if (counter % 3 === 0){
                console.log("Fizz");
            }else {
                console.log(counter);
            }
        }
    }
}