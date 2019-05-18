class CalculatorMethods {
  constructor() {
    this.calcMethods = {
      "+": (a, b) => +a + +b,
      "-": (a, b) => a - b,
      "/": (a, b) => a / b,
      "%": (a, b) => a % b,
      "*": (a, b) => a * b,
    }
    this.methodPrec = [
      ["/", "%", "*"],
      ["+", "-"]
    ]
  }

  evaluateExpression(a, op, b) {
    let res = this.calcMethods[op](a, b);

    res = res.toString();

    if(res.indexOf(".")) {
      let i = res.indexOf(".");
      res = res.slice(i + 1).length < 8 ? res : res.slice(0, i) + res.substr(i, 9);
    }
    
    return +res;
  }

  evaluateWholeExpression(val) {
    
    //getting rif of unnecessary symbols
    let input = val.replace(/[^0-9%^*/()\-+.]/g, "");
    
    //loop through array with methods grouped by precedence to first calculate those with high precedence and after with lower
    for(let i = 0; i < this.methodPrec.length; i++) {
      const regexp = new RegExp(`(\\d+\\.?\\d*)([\\${this.methodPrec[i].join('\\')}])(\\d+\\.?\\d*)`);
      regexp.lastIndex = 0;

      console.log(input.match(regexp));
      
      //loop through value untill there are no expression left
      while(regexp.test(input)) {
        let output = this.evaluateExpression(RegExp.$1, RegExp.$2, RegExp.$3);
        input = input.replace(regexp, output);
      }
    }

    return input;
  }
    
}

export default new CalculatorMethods();