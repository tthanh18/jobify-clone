import { WHITELIST_DOMAINS } from "../utilities/contants.js"

export const corsOptions = {
    origin: function (origin, callback) {
        if (WHITELIST_DOMAINS.indexOf(origin) !== -1) {
            console.log("rn")
            callback(null, true)
        } else {
            callback(new Error(`${origin} not allowed by CORS`))
            console.log("nrn")
        }
    },
    optionsSuccessStatus: 200
}