


// 9. unknown (Güvənli any)
// 🚫 Necə olmaz:

let input1: unknown;
input1.toUpperCase(); // ❌ Xəta: Tipi bilinmir
















// ✅ Necə olmalıdır:
let input2: unknown;

input2 = "Hello";

if (typeof input2 === "string") {

  console.log(input2.toUpperCase()); // ✅ Doğru
  
}




