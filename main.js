import { insertDatas } from './db.js'

let total = 97//平方和
let sqrtNum = parseInt(Math.sqrt(total))+1//平方根
let runCount = 0
let runTime = 10000//总样本量
async function countSquare() {
    let x = getRndInteger(1, sqrtNum)
    let y = getRndInteger(sqrtNum - x, sqrtNum)
    let count = 0
    while(!(((total%2) === (x+y)%2) && (x*x+y*y) === total)) {
        x = getRndInteger(1, sqrtNum)
        let temp = getRndInteger(sqrtNum - x, sqrtNum)
        if (total%2 === 0) {
            if (x%2===0) {
                y = temp%2===0?temp:(temp-1)
            } else {
                y = temp%2===0?temp-1:temp
            }
        } else {
            if (x%2===0) {
                y = temp%2===0?temp-1:temp
            } else {
                y = temp%2===0?temp:temp-1
            }
        }
        count++
        // if (count>total) {
        //     console.log('error', x, y, count)
        //     return false
        // }
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
let runInterval = setInterval(() => {
    countSquare()
    runCount++
    if (runCount>runTime) {
        clearInterval(runInterval)
    }
}, 100);
function getRndInteger(min, max) {//随机函数
    return Math.floor(Math.random() * (max - min) ) + min;
}