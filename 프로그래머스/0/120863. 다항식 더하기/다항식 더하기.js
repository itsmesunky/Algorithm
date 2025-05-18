const solution = (polynomial) => {
    let xValue = 0;
    let numValue = 0;
    
    polynomial.split(" + ").forEach(v => {
      if(v.includes('x')) {
          if(v.length === 1) {
              xValue += 1;
          } else {
              xValue += parseInt(v.replace("x", ""));
          }
      } else {
          numValue += +v;
      }
    });
    
    return (xValue ? (xValue === 1 ? "x" : xValue + "x") + (numValue ? " + " : "") : "") + (numValue ? numValue : "");
}