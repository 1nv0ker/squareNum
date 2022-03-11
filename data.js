import { getDatas} from './db.js'
getDatas().then(res => {
    console.log(Math.min(...res.map(item=>item.count)))//最小次数
    console.log(Math.max(...res.map(item=>item.count)))//最大次数
})