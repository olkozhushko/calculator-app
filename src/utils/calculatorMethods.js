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

  _evaluateExpression(a, op, b) {
    let res = this.calcMethods[op](a, b);

    res = res.toString();

    if(res.indexOf(".")) {
      let i = res.indexOf(".");
      res = res.slice(i + 1).length < 8 ? res : res.slice(0, i) + res.substr(i, 9);
    }
    
    return +res;
  }

  evaluateWholeExpression(val) {
    
    //a getting rid of unnecessary symbols
    let input = val.replace(/[^0-9%^*/()\-+.]/g, "");
    
    //loop through an array with the methods grouped by precedence to first calculate those with high precedence and after with lower
    for(let i = 0; i < this.methodPrec.length; i++) {
      const regexp = new RegExp(`(\\-?\\d+\\.?\\d*)([\\${this.methodPrec[i].join('\\')}])(\\-?\\d+\\.?\\d*)`);
      regexp.lastIndex = 0;
      
      
      //loop through value untill there are no expression left
      while(regexp.test(input)) {
        console.log(input);
        console.log(input.match(regexp));
        let output = this._evaluateExpression(RegExp.$1, RegExp.$2, RegExp.$3);
        console.log(output);
        input = input.replace(regexp, output);
      }
    }

    return input;
  }
    
}

// let calc = new CalculatorMethods();
// calc.evaluateWholeExpression("0-23+23");

export default new CalculatorMethods();