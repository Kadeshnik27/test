"use strict";

// for (let i = 5; i < 11; i++){
//     console.log(i);
// }



// let b = 21;

// for (let i = 1; i < 12; i++){
//     b = b-1;  
//     if (b == 13) {
//         break;
//     }
//     console.log(b);
// }


// for (let i = 1; i < 11; i++){

//     if (i%2 == 0) {
//         console.log(i);
    
//     }
// }

for (let i = 2; i < 16; i++){

    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
    
}


let i = 2;

while ( i < 16 ){
    i++;
    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}


let arr = [];
for (let i = 5; i < 11; i++){
        arr = i;
    }
    console.log(arr);



    
const arr = [];
for (let i = 0; i <= 5; i++) {
    arr[i] = i + 5;
}
    
console.log(arr);






// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i < 11; i++){
    console.log(i);
}
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    let b = 21;

for (let i = 1; i < 12; i++){
    b = b-1;  
    if (b == 13) {
        break;
    }
    console.log(b);
}
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i < 11; i++){

    if (i%2 === 0) {
        console.log(i);
    
    }
}
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;

while ( i < 16 ){
    i++;
    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    const arrayOfNumber = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumber[i - 5] = i;
    }

    console.log(arrayOfNumber);
    
    // Не трогаем
    return arrayOfNumbers;
}