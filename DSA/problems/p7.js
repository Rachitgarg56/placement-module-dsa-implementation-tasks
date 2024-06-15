// Create a timer whose by default value is 10 and value should decrease by 1 per second

const startTimer = (sec) => {
    const timer = setInterval(() => {
        if (sec === 0) clearInterval(timer);
        console.log(sec);
        sec--;
    }, 1000)
}

startTimer(10);
