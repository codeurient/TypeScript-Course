


// 8. any (Hər cür dəyəri qəbul edir - tövsiyə edilmir)
// 🚫 Necə olmaz:

let value: any;
value = 5;
value.toUpperCase(); // ❌ Xəta: number-də toUpperCase metodu yoxdur















// ✅ Necə olmalıdır:
let value: any;
value = "Hello";
console.log(value.toUpperCase()); // ✅ Doğru





