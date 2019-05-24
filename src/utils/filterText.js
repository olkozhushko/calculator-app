const filterText = (data) => {
  const oper = ["%", "+", "*", "/", "."];

  let res = data[0] === "0" ? data.replace(/0/, "") : data;
  res = oper.includes(res[0]) ? "0"+res : res;
  
  //filter rext stripping out of all dublicated values and alphabetical characters;
  res = res.replace(/([-+/%*.]){2,}/ig, "$1").replace(/\s{2,}/g, " ").replace(/[^-+/%*\s\d.]/g, "");
  
  res = res.replace(/(\.\d+)\./g, "$1");

  return res;
}

export default filterText;