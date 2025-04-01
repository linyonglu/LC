const upSetArr = (arr) => {
    const len = arr.length;

    if (len === 0) throw new Error('数组为空');

    // 打乱的操作
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * (len - i) + i); // 随机索引
        const temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = upSetArr(arr);
console.log(res);