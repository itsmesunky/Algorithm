const solution = (polynomial) => {
    let xValue = 0;
    let numValue = 0;
    
    polynomial.split(" + ").forEach(v => {
      if(v.includes('x')) {
          xValue += parseInt(v.replace("x", "") || "1");
      } else {
          numValue += parseInt(v);
      }
    });
    
    return (xValue ? (xValue === 1 ? "x" : xValue + "x") + (numValue ? " + " : "") : "") + (numValue ? numValue : "");
}