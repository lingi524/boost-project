import {readFileSync} from "fs";

export default defineEventHandler((event) => {
    const rawdata = readFileSync("server/products.json");
    const data = JSON.parse(rawdata.toString());

    return data;
  })