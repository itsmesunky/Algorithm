const solution = (id_pw, db) => {
    let result = db.filter((account) => account[0] === id_pw[0]);
    
    if(!result.length) {
        return "fail";
    } else {
        return result[0][1] === id_pw[1] ? "login" : "wrong pw";
    }
}