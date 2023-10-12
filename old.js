const orderId = 8000;

const Promisez = ValueChecker(orderId);
console.log(Promisez);
Promisez.then((result) => {
    console.log(result);
    const gstval=gstCalculate(result);
    return gstval
}).catch(function(err2){
    console.log(err2.message);
}).then(function(x){
    console.log(x);
    return 10
}).then(function(x){
    console.log("Hello");
    console.log(x)
})
.catch((err) => {
    console.log(err.message);
});

function gstCalculate(val){
    console.log("Value inside Gst function is:",val);
    const pypro = new Promise((resolve,reject)=>{
        if(val>6000){
            let bk=val+(val*0.18);
            console.log("GST Added Succesfully.");
            resolve(bk);
        }
        else{
            let err2 = new Error("Gst cannot be applied Minimum amount needed is 6000")
            reject(err2);
        }
        console.log(pypro);
    })
    return pypro;
}

function ValueChecker(oid){
    const rez = new Promise(function(resolve,reject ){
        if(oid<4000){
            const er = new Error("AI Error");
            reject(er);
        }
        
        if(oid>4500){
            setTimeout(()=>{
                resolve(oid);
            },4000)
        }
    })
    return rez;
}

 
setTimeout(()=>{console.log(Promisez);},6000);


