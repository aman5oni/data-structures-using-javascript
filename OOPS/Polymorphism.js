// class A{
//   displayA() {
//     console.log("A is invoked");
//   }
// }
// class B extends A {
//   displayB() {
//     console.log("B is Invoked");
//   }
// }
// class C extends A {
//     displayC(){
//         console.log("C is Invoked")
//     }
// }


// let b = new C()
// b.displayC()

// let a = [new A(), new B()];
// a.forEach(function (msg) {
//   msg.displayA();
// });


function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
  
let a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  console.log(msg.display());  
});  