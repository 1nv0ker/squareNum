import { insertDatas, insertDatas2, insertDatas3 } from './db.js'

let total = 468948669701//平方和
let sqrtNum = parseInt(Math.sqrt(total))+1//平方根
let runCount = 0
let runTime = 1000//总样本量
async function countSquare() {//
    let x = getRndInteger(1, sqrtNum)
    let y = getRndInteger(sqrtNum-x, sqrtNum)
    let count = 0
    while(!((x*x+y*y) === total)) {
        x = getRndInteger(1, sqrtNum)
        if (total%2 === 0) {//x+y与total奇偶一致
            if (x%2 === 0) {
                y = getEvenRnd(sqrtNum-x, sqrtNum)
            } else {
                y = getOddRnd(sqrtNum-x, sqrtNum)
            }
        } else {
            if (x%2 === 0) {
                y = getOddRnd(sqrtNum-x, sqrtNum)
            } else {
                y = getEvenRnd(sqrtNum-x, sqrtNum)
            }
        }
        count++
    }
    let data = {
        x: x,
        y: y,
        count: count,
        total: total
    }
    await insertDatas(data)
    // console.log('success', x, y, count, (x*x+y*y))
}
async function halfRnd() {//当前最优解
    let x = getRndInteger(1, sqrtNum)
    let y = Math.sqrt(total-x*x)
    let count = 0
    while(String(y).indexOf('.') !== -1) {
        x = getRndInteger(1, sqrtNum)
        y = Math.sqrt(total-x*x)
        count++
    }
    let data = {
        x: x,
        y: y,
        count: count,
        total: total
    }
    await insertDatas3(data)
}
// console.log(sqrtNum)
halfRnd()
// fullRandom()
async function fullRandom() {
    let x = getRndInteger(1, sqrtNum)
    let y = getRndInteger(sqrtNum-x, sqrtNum)
    let count = 0
    while(!((x*x+y*y) === total)) {//完全随机
        x = getRndInteger(1, sqrtNum)
        y = getRndInteger(sqrtNum-x, sqrtNum)
        count++
    }
    let data = {
        x: x,
        y: y,
        count: count,
        total: total
    }
    await insertDatas2(data)
    // console.log('success', x, y, count, (x*x+y*y))
}

// let runInterval = setInterval(() => {
//     halfRnd()
//     // fullRandom()
//     runCount++
//     if (runCount>runTime) {
//         clearInterval(runInterval)
//     }
// }, 100);
function getRndInteger(min, max) {//随机函数
    return Math.floor(Math.random() * (max - min) ) + min;
}
function getOddRnd(min, max) {//随机奇数
    let num = Math.floor(Math.random() * (max - min) ) + min;
    if (num%2===0) {
        return num+1
    }
    return num
}
function getEvenRnd(min, max) {//随机偶数
    let num = Math.floor(Math.random() * (max - min) ) + min;
    if (num%2===1) {
        return num+1
    }
    return num
}

function countSquaer_three() {//三个数的平方和
    let x = getRndInteger(1, sqrtNum)
    let y = getRndInteger(parseInt(Math.sqrt(total-x*x)), sqrtNum)
    let z = 0
    let count = 0
    while((x*x+y*y+z*z) !== total) {
        x = getRndInteger(1, sqrtNum)
        // y = getRndInteger(parseInt(Math.sqrt(total-x*x)), sqrtNum)
        // z = parseInt(Math.sqrt(total-x*x-y*y))
        y = getRndInteger(1, sqrtNum)
        z = getRndInteger(1, sqrtNum)
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
function countNum(num) {

}