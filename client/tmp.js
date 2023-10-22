
const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
        resolve("Promise is fulfilled!");
    } else {
        reject("Promise failed!");
    }
})


function handleResolve(value) {
    console.log(value);
}

function handleReject(reason) {
    console.error(reason);
}

let success = 0;
let failure = 0;
for (let i = 0; i < 10; i++) {
    promise.then(handleResolve, handleReject);
}