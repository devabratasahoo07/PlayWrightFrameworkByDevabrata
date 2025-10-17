
import fs from "fs";


export function readJSON(filepath){
console.log("Read JSON FILE");
const fileContent=fs.readFileSync(filepath,"utf-8")
const data=JSON.parse(fileContent)
return data

}