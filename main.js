import { insertDatas } from './db.js'

let total = 94//平方和
let sqrtNum = parseInt(Math.sqrt(total))+1//平方根
let runCount = 0
let runTime = 10//总样本量
async function countSquare() {//
    let x = getRndInteger(1, sqrtNum)
    let y = 1
    let count = 0
    while(!(((total%2) === (x+y)%2) && (x*x+y*y) === total)) {
        x = getRndInteger(1, sqrtNum)
        y = parseInt(Math.sqrt(total-x*x))
        count++
    }
    let data = {
        x: x,
        y: y,
        count: count,
        total: total
    }
    await insertDatas(data)
    console.log('success', x, y, count, (x*x+y*y))
}
// countSquare()
countSquaer_three();
function countSquaer_three() {//三个数的平方和
    let x = getRndInteger(1, sqrtNum)
    let y = getRndInteger(parseInt(Math.sqrt(total-x*x)), sqrtNum)
    let z = 0
    let count = 0
    while((x*x+y*y+z*z) !== total) {
        x = getRndInteger(1, sqrtNum)
        y = getRndInteger(parseInt(Math.sqrt(total-x*x)), sqrtNum)
        z = parseInt(Math.sqrt(total-x*x-y*y))
        count++
    }
    // let data = {
    //     x: x,
    //     y: y,
    //     count: count,
    //     total: total
    // }
    // await insertDatas(data)
    console.log('success', x, y, count, (x*x+y*y+z*z))
}
// let runInterval = setInterval(() => {
//     countSquare()
//     runCount++
//     if (runCount>runTime) {
//         clearInterval(runInterval)
//     }
// }, 100);
function getRndInteger(min, max) {//随机函数
    return Math.floor(Math.random() * (max - min) ) + min;
}