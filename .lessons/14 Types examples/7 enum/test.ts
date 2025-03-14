


// 7. enum (İxtiyari dəyişənlər üçün)
// 🚫 Necə olmaz:

enum Color1 { Red1, Green1, Blue1 }
let myColor1: Color1;
myColor1 = "Red";                    // ❌ Xəta: Enum string qəbul etmir














// ✅ Necə olmalıdır:
enum Color2 { Red2, Green2, Blue2 }
let myColor2: Color2;
myColor2 = Color2.Red2;            // ✅ Doğru




