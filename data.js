import { getDatas, getDatas2, getDatas3} from './db.js'
import { Low, JSONFile } from 'lowdb'

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'data.json')

const adapter = new JSONFile(file)

const db = new Low(adapter)
async function insertData(type, data) {
    await db.read()

    db.data[type].push(data)
    await db.write()
}
// getDatas().then(async (res) => {
//     let min = Math.min(...res.map(item=>item.count))
//     let max = Math.max(...res.map(item=>item.count))
//     let len = res.length;
//     let total = res.map(item=>item.count).reduce((a,b) => a+b)
//     let newArray = res.map(item=>item.count).sort((a,b)=> a-b)
//     let avg = parseInt(total/res.length)
//     let median = newArray[parseInt(res.length/2)]
//     console.log('min', min)//最小次数
//     console.log('max', max)//最大次数
    
//     console.log('count', len)
//     console.log('avg', avg)
//     console.log('Median', median)
//     let data = {
//         min: min,
//         max: max,
//         count: len,
//         avg: avg,
//         median: median
//     }
//     await insertData('rnd', data)
// })
// getDatas2().then(async (res) => {
//     let min = Math.min(...res.map(item=>item.count))
//     let max = Math.max(...res.map(item=>item.count))
//     let len = res.length;
//     let total = res.map(item=>item.count).reduce((a,b) => a+b)
//     let newArray = res.map(item=>item.count).sort((a,b)=> a-b)
//     let avg = parseInt(total/res.length)
//     let median = newArray[parseInt(res.length/2)]
//     console.log('min', min)//最小次数
//     console.log('max', max)//最大次数
    
//     console.log('count', len)
//     console.log('avg', avg)
//     console.log('Median', median)
//     let data = {
//         min: min,
//         max: max,
//         count: len,
//         avg: avg,
//         median: median
//     }
//     await insertData('fullRnd', data)
// })
getDatas3().then(async (res) => {
    let min = Math.min(...res.map(item=>item.count))
    let max = Math.max(...res.map(item=>item.count))
    let len = res.length;
    let total = res.map(item=>item.count).reduce((a,b) => a+b)
    let newArray = res.map(item=>item.count).sort((a,b)=> a-b)
    let avg = parseInt(total/res.length)
    let median = newArray[parseInt(res.length/2)]
    console.log('min', min)//最小次数
    console.log('max', max)//最大次数
    
    console.log('count', len)
    console.log('avg', avg)
    console.log('Median', median)
    let data = {
        min: min,
        max: max,
        count: len,
        avg: avg,
        median: median,
        time: new Date()
    }
    await insertData('halfRnd', data)
})