

// Create a loop using “for” that will increment by
//  3 per step and break the loop when it finds a number divisible by 11

// Assignment 4

for( let r = 1; r <= 100; r+=3){

    console.log(r);

    if( r % 11 == 0){
        console.log(r)
        break;
    }
}