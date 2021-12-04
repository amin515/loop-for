

//  Create a loop where the initial value is 10,000. You need to 
// rotate the loop 50 times by using the increment and decrement operator twice.
// Assignment 6



for (let g = 10000; g <= 10050; g++){
    console.log(g);

    if (g == 10050){
        for(let h = 10050; h > 10000; h--){
            console.log(h);
        }
    }
}