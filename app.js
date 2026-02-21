// While Loop

// let count = 1;

// while (count <= 10){
//     console.log(count);
//     count++;
// }

// For Loop

// for(let i=0; i<10; i++){
//     console.log(i+1)
// }

/**Loops 1 through 50
 * if divisible by 3, print "Frontend"
 * if divisible by 5, print "Simplified"
 * if divisible by 3 and 5, print "Frontend Simplified"
 * if not divisible by 3 or 5, print the number
 */

for(let i=1; i<=50; i++){
    if (i%3===0 && i%5 === 0){
        console.log (`${i} -> Frontend Simplified`)
    }
    else if(i%3 === 0){
        console.log(`${i} -> Frontend`)
    }
    else if(i%5 === 0){
        console.log (`${i} -> Simplified`)
    }
    else{
    console.log(`${i} -> ${i}`);
    }
}