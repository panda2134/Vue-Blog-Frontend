function getRandomUint32() {
    return Math.round(Math.random() * 2147483647).toString(16).padStart(8, '0')
}

export {
    getRandomUint32
}