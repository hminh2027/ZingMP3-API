const cryptoJS = require('crypto-js')
require('dotenv').config()

export const encrypt = (path = '/api/v2/app/get/hot-keyword') => {
    const API_KEY = process.env.API_KEY
    const SECRET_KEY = process.env.SECRET_KEY
    const t = path
    const version = '1.6.14'

    const ctime = new Date().getTime().toString()
    const n = `ctime=${ctime}version=${version}`
    const sig = cryptoJS.HmacSHA512(n + t, SECRET_KEY).toString()

    return {
        a: API_KEY,
        sig,
        ctime
    }
}