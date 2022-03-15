import { db } from './db.js'
async function clearDatas() {
    await db.read()

    db.data.test = []
    await db.write()
}
clearDatas();