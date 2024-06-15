function example2() {
    let i=0;
    for (i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i);
        },i*1000)
    }
}
example2();
