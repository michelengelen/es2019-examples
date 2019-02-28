class C { foo() { /*hello*/ } }
console.log(C.prototype.foo.toString());
// expected result: 'foo() { /*hello*/ }'
