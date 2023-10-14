// console.log(process.argv)
// console.log(process.argv[1])
// console.log("kareem")
// let n1=parseInt(process.argv[2])
// let process1=process.argv[3]
// let n2=parseInt(process.argv[4])
// if(process1==="+"){
//     console.log(n1+n2)
// }
// else if(process1==="-"){
//     console.log(n1-n2)
// }
// else if(process1==="*"){
//     console.log(n1*n2)
// }
// else if(process1==="/"){
//     console.log(n1/n2)
// }
// else{
//     console.log("Invalid operator")
// }
import yargs from "yargs"
yargs.command({
    command:"+",
    builder:{
        x:{
            type:"number",
            demandOption:true
        },
        y:{
            type:"number",
            demandOption:true
        },
    },
    handler:function(argv){
        console.log(argv.x+argv.y)
    }
})
yargs.argv