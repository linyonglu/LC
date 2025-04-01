// const startPrint = (count) => {
//     if (count < 0 || count >5) return;

//     console.log(count);
//     setTimeout(() => {
//         startPrint(count + 1);
//     }, 1000)
// }

// startPrint(1);

async function printAsync() {
    for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(i);
    }
}

printAsync();