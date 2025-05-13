const solution = (id_pw, db) => {
    let result = db.find((account) => account[0] === id_pw[0]);
    
    if(!result) {
        return "fail";
    } else {
        return result[1] === id_pw[1] ? "login" : "wrong pw";
    }
}