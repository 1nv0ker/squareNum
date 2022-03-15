import { db } from './db.js'
async function clearDatas() {
    await db.read()

    db.data.fullRnd = []
    db.data.rnd = []
    db.data.halfRnd = []
    await db.write()
}
clearDatas();