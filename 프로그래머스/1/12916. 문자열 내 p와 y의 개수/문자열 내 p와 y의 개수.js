const solution = (s) => {
    return s.match(/p|P/g)?.length === s.match(/y|Y/g)?.length ? true : false;
}