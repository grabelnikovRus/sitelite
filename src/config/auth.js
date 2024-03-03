import CryptoJS from "crypto-js";

const getDateString = (num) => num.toString().length === 1 ? "0" : "";

const date = new Date();
const month = `${getDateString(date.getUTCMonth() + 1)}${date.getUTCMonth() + 1}`
const day = `${getDateString(date.getUTCDate())}${date.getUTCDate()}`

console.log(`Valantis_${date.getFullYear()}${month}${day}`)

export const authString = CryptoJS.MD5(`Valantis_${date.getFullYear()}${month}${day}`);
