// return multiple data
// const myFun = () => {
    // return {
    //     val1:5,
    //     val2: 15,
    //     val3: 25
    // }
// }

// const myFun = () => {
//     return (()=> {
//         return 7
//     })()
// }
// console.log(myFun())


//clouser
// const myClouser = (x, y)=>{
//     return {
//         x:()=> x,   // x:5
//         y: () => y,
//         myx:x,
//         increaseX: function(){ x += 1; this.myx++ },
//         add : () => console.log(x+y),
//         sub : () => console.log(x-y)
//     }
// }
// // {inc:fun, add:fun, sub:fun, x:fun, y:fun}
// const clo = myClouser(5,3)
// console.log(clo.x());
// clo.increaseX()   // (6,3)
// // x.add()
// console.log(clo.x())
// console.log(clo.myx);


/*
clouser => products 
[] , 
add => proname, price , 
showAll 
*/

// const products = (allProducts = []) =>{
//     return {
//         add:(name, price)=>{
//             allProducts.push( { sku: Date.now(), name, price } )
//             console.log("product added")
//         },
//         showAll:()=>{
//             allProducts.forEach((product, i)=> console.log(`${i+1} -sku : ${product.sku} name: ${product.name} - price ${product.price} EGP`))
//         },
//         showSingle:(sku)=>{
//             const myData = allProducts.find(pro=> pro.sku == sku)
//             console.log( myData? myData : "not found" )
//         }
//     }
// }

// const myPro = products()
// myPro.add("p1", 50)
// myPro.add("p2",100)
// myPro.showAll()


//callback
// const myCallBack = (cb) => {
//     cb(5) 
// }

// myCallBack(val => console.log(val))

// const isNumber = (val, cb) => {
//     setTimeout(()=>{
//         if(typeof val=="number") cb("is number")
//         else cb( "not a number")
//     }, 1500)
// }

// isNumber(5, (res)=>{
//     console.log(`result ${ res}`)
// })

// const myArrayFun = (arr)=>{
//     return {
//         myForEach:(callback)=>{
//             for(let i=0; i<arr.length; i++)
//                 callback(arr[i], i, arr)
//         },
//         myFind: (val, callback)=>{
//             for(let i=0; i<arr.length; i++)
//                 if(val==arr[i]) callback(arr[i], i, arr)
//         }
//     }
// }

// const myArr = myArrayFun([1,2,3,4,5])

// myArr.myForEach((el,index, arr)=>{
//     console.log(el)
//     console.log(index)
//     console.log(arr)
// })
// myArr.myFind(5, (el)=> console.log(el))

// promises
const myOwnPromise = (val)=>{
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                typeof val == "number" ? resolve("is a Number") : reject("Nan")
            }, 2000)
        }
    )
}

// console.log(myOwnPromise(5));
//then catch
// myOwnPromise("hhh")
// .then(res=>{console.log(res)})
// .catch(err=>{ console.log(err)})

//async await
// const runner = async function(){

// }
// const runner = async()=>{}
async function runner(){
    try{
        const result =  await myOwnPromise(5)
        // const d = await myOwnPromise(result)
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
}
runner()
console.log("test")