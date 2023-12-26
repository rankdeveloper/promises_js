// episode 3

const cart =["shoes" , "watch" , "pants"];

let walletBallance = 10000;
createOrder(cart)
.then((orderId) => {
    console.log(orderId)
    return orderId
})
.then((orderId) => {
    // console.log(orderId.message)
    return proceedToPayment(orderId)
})

.then((orderStatus) => {
    console.log(orderStatus.message , orderStatus.paymentStatus)
    return showOrderSummary(orderStatus)
})

.then((orderHistory) => {
    console.log(orderHistory , orderHistory.orders)
    return updateWallet(orderHistory)
})

.then((wallet) => {
    console.log(wallet)
})

.catch((err) => {
    console.log(err.message)
})

function createOrder(cart){
    return new Promise((resolve , reject) => {
        
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid...");
            reject(err)

        }

        const orderId = "123";

        if(orderId){
            setTimeout(() => {
                resolve(orderId)
            },5000)

        }

    })
}

function validateCart(cart){
    return false;
}


function proceedToPayment(orderId){

    return new Promise((resolve , reject) => {

        if(orderId){
            resolve({paymentStatus:1 , message : "Payment successfully completed..."})
        }

        else{
            reject(new Error("Payment failed..."))
        }
    })
}



function showOrderSummary(orderStatus){
    return new Promise((resolve , reject) => {
        if(orderStatus.paymentStatus==1){
        resolve({status:"success" , orders: cart})
        }

        else{
            reject(new Error("Something went wrong..."))
        }
    })
}

function updateWallet(orderHistory){
    return new Promise((resolve , reject) => {
        if(orderHistory.status=="success"){
            let orderAmmount = 5000;
            walletBallance-=orderAmmount;
            resolve({balance:walletBallance , message:"walled updated"})
        }

        else{
            reject(new Error("Wallet balance not updated..."))

        }
    })
}