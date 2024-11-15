function solution(box, n) {
    let width = box[0];
    let depth = box[1];
    let height = box[2];
    
    return parseInt(width/n) * parseInt(depth/n) * parseInt(height/n);
}