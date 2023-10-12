let c_balance = 10000;
let price=7000;


createOrder(price).then((x)=>{
    console.log(x);
    // let var1=proceedToPay(x);
    return proceedToPay(x);
}).then((y)=>{
    console.log("Including Gst,this is your final Amount: ",y);
    return showOrderSummary(y);
}).then((z)=>{
    return UpdateWallet(c_balance,z)
}).then((m)=>{
    console.log("Payment of ",m.cprice," is successfull.");
    console.log("Remaining Balance:",m.cbal);
})
.catch((y)=>{
    console.log(y)
})

function createOrder(price){
    const orderCreate = new Promise((resolve,reject)=>{
        if(price>3000){
            console.log("Order Placed Succesfully!")
            resolve(price);
        }else{
            let err = new Error("Sorry Can't place the Order.Order Price is too Less.");
            reject(err.message);
        }
    })
    return orderCreate;
}

function proceedToPay(price){
    const p2payment = new Promise((resolve,reject)=>{
        let gst = price+(price*0.18);
        resolve(gst);
    })
    return p2payment;
}

function showOrderSummary(price){
    console.log("Your Final Order Summary is: ",price)
    return price;
}

function UpdateWallet(c_balance,price){
    const up_Wall = new Promise((resolve,reject)=>{
        if(price>c_balance){
            reject("You Don't have a sufficent Balance.");
        }
        else{
            let new_balance=c_balance-price;
            let finalObj={
                cbal:new_balance,
                cprice:price
            }
            resolve(finalObj);
        }
    })
    return up_Wall;
}