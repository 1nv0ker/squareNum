import { Low, JSONFile } from 'lowdb'

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const adapter = new JSONFile(file)

export const db = new Low(adapter)


export async function insertDatas(data) {
    await db.read()

    db.data.rnd.push(data)
    await db.write()
}

export async function getDatas() {
    await db.read()

    return new Promise(resolve=> {
        resolve(db.data.rnd)
    })
}
export async function getDatas2() {
    await db.read()

    return new Promise(resolve=> {
        resolve(db.data.fullRnd)
    })
}
export async function getDatas3() {
    await db.read()

    return new Promise(resolve=> {
        resolve(db.data.halfRnd)
    })
}
export async function insertDatas2(data) {
    await db.read()

    db.data.fullRnd.push(data)
    await db.write()
}
export async function insertDatas3(data) {
    await db.read()

    db.data.halfRnd.push(data)
    await db.write()
}
