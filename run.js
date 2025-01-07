import { parse } from "./parser.js";
import { evaluate } from "./evaluator.js";
import { topScore } from "./interpeter.js";

function run(program) {
  return evaluate(parse(program), Object.create(topScore));
}

export default run;
