import { getDatas} from './db.js'
getDatas().then(res => {
    console.log('min', Math.min(...res.map(item=>item.count)))//最小次数
    console.log('max', Math.max(...res.map(item=>item.count)))//最大次数
    console.log('count', res.length)
})