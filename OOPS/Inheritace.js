class A {
  displayA() {
    console.log("A is invoked");
  }
}
class B extends A {
  displayB() {
    console.log("B is Invoked");
  }
}
class C extends A {
  displayC() {
    console.log("C is Invoked");
  }
}

let b = new C();
b.displayC();
