import { evaluate } from "./evaluator.js";

const specialForms = Object.create(null);

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Неверное количество аргументов для if.");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Неверное число аругментов для while.");
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }

  return false;
};

specialForms.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }

  return value;
};

specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Неверное использование определения.");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("У функции должно быть тело.");
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map((expr) => {
    if (expr.type != "word") {
      throw new SyntaxError("Именами параметров должны быть слова.");
    }
    return expr.name;
  });
  return function () {
    if (arguments.length != params.length) {
      throw new TypeError("Неккореткное число аргументов.");
    }
    let localScope = Object.create(scope);
    for (let index = 0; index < arguments.length; index++) {
      localScope[params[index]] = arguments[index];
    }

    return evaluate(body, localScope);
  };
};

export default specialForms;
