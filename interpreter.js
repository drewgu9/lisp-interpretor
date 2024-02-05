function tokenizer(lispStatement) {
  function addToken(token, list) {
    if (token != "") {
      list.push(token);
    }
  }
  tokenList = [];
  let i = 0;
  currentToken = "";
  while (i < lispStatement.length) {
    currentCharacter = lispStatement[i];

    switch (currentCharacter) {
      case '"':
        addToken(currentToken, tokenList);
        currentToken = '"';
        i++;
        while (i < lispStatement.length) {
          currentToken += lispStatement[i];
          if (lispStatement[i] == '"') {
            addToken(currentToken, tokenList);
            currentToken = "";
            break;
          }
          i++;
        }
        break;
      case " ":
        addToken(currentToken, tokenList);
        currentToken = "";
        break;
      case "\n":
        addToken(currentToken, tokenList);
        currentToken = "";
        break;
      case "(":
        addToken(currentToken, tokenList);
        tokenList.push("(");
        currentToken = "";
        break;
      case ")":
        addToken(currentToken, tokenList);
        tokenList.push(")");
        currentToken = "";
        break;
      default:
        currentToken += currentCharacter;
    }
    i++;
  }

  addToken(currentToken, tokenList);

  return tokenList;
}

console.log(
  tokenizer(`(defun fib (n)
(if (< n 2)
    n
    (+ (fib (- n 1))
       (fib (- n 2)))))

(defun fact (n)
(if (<= n 1)
  1
  (* n (fact (- n 1)))))`)
);
