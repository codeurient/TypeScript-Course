// 10. void (Geri dəyər qaytarmayan funksiyalar)
// 🚫 Necə olmaz:

function sayHello1(): void {
  return "Hello";                 // ❌ Xəta: void funksiya dəyər qaytarmamalıdır
}

















// ✅ Necə olmalıdır:
function sayHello2(): void {
  console.log("Hello!");          // ✅ Doğru
}





// Nə üçün void geri dəyər qaytarmamalıdır?
// Çünki void funksiyaları geri dəyər qaytarmamalıdır, çünki onlar yalnız yan təsir göstərmək üçün nəzərdə tutulub.
// (məsələn, məlumatı ekrana yazdırmaq, fayl üzərində əməliyyatlar etmək və s.)

