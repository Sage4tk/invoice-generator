const shellNum = (num) => {
    const arr = [];
    

    for (let i = 0; i < num; i++) {
        if (i <= 1) {
            arr.push(1);  
        } else {
            arr.push(arr[i - 1] + arr[i-2]);
        }
    }

    console.log(arr)
}

shellNum(10);