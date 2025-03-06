// 只有三个状态，状态一经变更就不能再变更
const PENDING = 'pending';
const FUILFILLED = 'fuilfilled';
const REJECTED = 'rejected';
class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;

        executor(this.reslove, this.reject);
    }

    reslove(value) {
        if (this.state === PENDING) {
            this.state = FUILFILLED;
            this.value = value;
            this.then()
        }
    }

    reject(reason) {
        if (this.state === PENDING) {
            this.state = REJECTED;
            this.reason = reason;
        }
    }

    then(resloveCallback, rejectCallBack) {

    }
}


const promise = new MyPromise((reslove, reject) => {
    
})
    .then(
        res => {

        },
        err => {

        });