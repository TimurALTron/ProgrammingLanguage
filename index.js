import run from "./run.js";

const program = `
do ( 
    # также есть поддержка комментариев,,!:)
    set(a, array("hello", 123)),
    set(i, 0),
    print(a),
    while(<(i, 10), do( set(i, +(i, 1)), print(i) ) ),
)
`;
run(program);
