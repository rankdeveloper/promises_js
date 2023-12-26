
//episode 2 - creating promises

const cart = ["shoes" , "pants" , "watch"];

// const promises = createOrder(cart);
// console.log(promises)

// promises.then((orderId) => {
//     console.log(orderId)
//     return orderId
// });
// promises.then((orderId) => {
//     return proceedToPayment(orderId)
// })
// promises.then((paymentInfo) => {
//     console.log(paymentInfo)
// })

// promises.catch((err) => console.log(err.message))

createOrder(cart)
.then((orderId) => {
    console.log(orderId)
    return orderId
})

// .catch((err) => {
//     console.log(err.message)
// })
.then((orderId) => {
    return proceedToPayment(orderId)
})

.then((paymentInfo) => {
    console.log(paymentInfo)
})

.catch((err) => {
    console.log(err.message)
})

.then((orderId) => {
    console.log("No matter I ,  will definietely be called")
})

//producer

function createOrder(cart){
const pr = new Promise((resolve , reject) => {
//create order
//validate cart
//orderid

if(!validateCart(cart)){
const err = new Error("cart is not valid");
reject(err);
}

//logic for create order
const orderId = "123"
if(orderId){

    setTimeout(() => {
        resolve(orderId)
    },5000)
    
}
})

return pr;
}


function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise((resolve , reject) => {
        resolve("Payment successful");
    })
}