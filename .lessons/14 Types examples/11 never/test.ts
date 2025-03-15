// 11. never (Heç vaxt geri dəyər qaytarmayan)
// 🚫 Necə olmaz:

function throwError1(): never {
  return "Error"; // ❌ Xəta: never tipi dəyər qaytarmır
}


















// ✅ Necə olmalıdır:
function throwError2(): never {
  throw new Error("Something went wrong"); // ✅ Doğru
}




// Fərqlər:

// void: Funksiya heç bir dəyər qaytarmır, amma başqa əməliyyatlar yerinə yetirə bilər.
// Funksiya normal şəkildə tamamlanır (dəyər qaytarmasa da).

// never: Funksiya heç vaxt tamamlanmaz və heç bir dəyər qaytarmaz.
// Funksiya sonsuz davam edir və ya bir səhv ataraq dayanar.


