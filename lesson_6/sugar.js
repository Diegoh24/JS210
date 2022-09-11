function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}
//==
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    quz: qux,
  }
}

function foo() {
  return {
    bar() {
      console.log("bar");
    },
    qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}
// ==
function foo() {
  return {
    bar: function() {
      console.log('bar');
    },
    qux: function(arg1) {
      console.log('qux');
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log('baz');
      console.log(arg1);
      console.log(arg2);
    },
  };
}

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

//let { baz, qux, bar } = foo(1, 2, 3);
// ===
// let obj = foo(1, 2, 3);
// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

// let array = [1, 2, 3];
// let result = foo(array);
// //let [ bar, qux, baz ] = result;
// ===
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];



function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
//let result = product(...array);
// ===
// let result = product(array[0], array[1], array[2]);

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

function product() {
  let arg = Array.from(arguments);
  return arg.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);


const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// const { first, second, ...rest } = obj;
// ===
const first = obj.first;
const second = obj.second;
const rest = {
  third: obj.third,
  rest: obj.rest
};

//console.log(rest);

function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return {
    type: animalType,
    age,
    colors,
  }
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]


