
let charHealth = '120'
let villianHealth = '120'
let compNum = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
let goalNum = 0
let isFinished = false



console.log(compNum)

//set initializer

// const init = _ => {
//     isFinished = false


//let player choose character


//display character health number
document.querySelector('.charHealth').textContent = 'Health: ' + charHealth

//display villian health number
document.querySelector('.villianHealth').textContent = 'Health: ' + villianHealth

//let computer choose random number from array to subtract from health

function genRandNum() {
let compChosen = compNum[Math.floor(Math.random()*compNum.length)];
console.log(compChosen);
return compChosen;
}

//while characters numbers is greater than zero keep substracting random number to both character 

function attack () {
    charHealth=charHealth - genRandNum();
    document.querySelector('.charHealth').textContent = charHealth;

    villianHealth=villianHealth - genRandNum();
    document.querySelector('.villianHealth').textContent = villianHealth;


    console.log(charHealth);
    if (charHealth <= goalNum) {
              document.querySelector('.result').textContent = 'You Loose';

    }else if (villianHealth <= goalNum) {
        document.querySelector('.result').textContent = 'You Win';
    }
}



// const check = _ => {
//     if (charhealth === goalNum) {
//       isFinished = true;
//       document.querySelector('#result').textContent = 'You Loose';}
//     else if (villianHealth === goalNum) {
//         isFinished = true
//         document.querySelector('#result').textContent = 'You Won'
//     }
// }

//start app
// init()