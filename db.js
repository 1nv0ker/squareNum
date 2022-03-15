import { Low, JSONFile } from 'lowdb'

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const adapter = new JSONFile(file)

export const db = new Low(adapter)


export async function insertDatas(data) {
    await db.read()

    db.data.test.push(data)
    await db.write()
}

export async function getDatas() {
    await db.read()

    return new Promise(resolve=> {
        resolve(db.data.test)
    })
}

export async function clearDatas() {
    await db.read()

    db.data.test = []
    await db.write()
}
// clearDatas()
