import * as fs from 'fs';
export default class handleJson{
    static readFromJSON(fileName="input.txt"){
        let result
        try{
            result = JSON.parse(fs.readFileSync(fileName))
        }
        catch(e){
            result = []
        } 
        return result
    }
    static writeToJson(data, fileName="input.txt"){
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
}