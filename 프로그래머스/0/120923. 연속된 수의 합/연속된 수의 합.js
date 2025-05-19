const solution = (num, total) => {
    return Array.from({length: num})
                .fill(parseInt(total/num))
                .map((v, i) => {
                        if(num % 2 === 0) {
                            return v + (i - parseInt(num / 2 - 1));
                        } else {
                            return v + (i - parseInt(num / 2));
                        }
                    })
}