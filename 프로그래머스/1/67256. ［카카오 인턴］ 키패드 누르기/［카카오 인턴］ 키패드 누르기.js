const solution = (numbers, hand) => {
    const pos = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        0: [3, 1],
    };
    
    let left = [3, 0];
    let right = [3, 2];
    let result = "";
    
    for(const num of numbers) {
        switch(num) {
            case 1: case 4: case 7:
                result += "L";
                left = pos[num];
                break;
            case 3: case 6: case 9:
                result += "R";
                right = pos[num];
                break;
            default:
                const [row, column] = pos[num];
                
                let leftDiff = Math.abs(left[0] - row) + Math.abs(left[1] - column);
                let rightDiff = Math.abs(right[0] - row) + Math.abs(right[1] - column);
                
                if(leftDiff < rightDiff) {
                    result += "L";
                    left = pos[num];
                } else if(rightDiff < leftDiff) {
                    result += "R";
                    right = pos[num];
                } else {
                    if(hand === "left") {
                        result += "L";
                        left = pos[num];
                    } else {
                        result += "R";
                        right = pos[num];
                    }
                }
                
                break;
        }
    }
    
    return result;
}