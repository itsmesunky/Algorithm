const solution = (s) => {
    return (s.match(/[a-z]/g)?.sort().reverse().join('') || "") + (s.match(/[A-Z]/g)?.sort().reverse().join('') || "")
}