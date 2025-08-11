// instanceof, JavaScript və TypeScript-də istifadə olunan operatordur. O, bir obyektin müəyyən bir class-dan və ya konstruktor funksiyasından 
// yaranıb-yaranmadığını yoxlamaq üçün istifadə edilir.




// x tipi Date | string kimi yazıldığı üçün Date və ya string ola bilər. DATE -də ayrıca bir tipdir. 
function logValue(x: Date | string) {
    // `instanceof Date` yoxlayır ki, `x` bir Date obyektidirmi?
    if (x instanceof Date) {
      console.log(x.toUTCString()); // ✅ Əgər x Date-dirsə, tarix formatında yazdır
    } else {
      console.log(x.toUpperCase()); // ✅ Əgər x string-dirsə, böyük hərflə yazdır
    }
  }

  


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// instanceof necə işləyir?

// Sintaksis:   object instanceof ClassName

// Əgər object həmin ClassName-dən yaranıbsa, true qaytarır.
// Əks halda false qaytarır.

console.log(     new Date()          instanceof Date    );   // true
console.log(     "Hello"             instanceof String  );   // false
console.log(     new String("Hello") instanceof String  );   // true
console.log(     []                  instanceof Array   );   // true
console.log(     {}                  instanceof Object  );   // true


//!    ❌ Diqqət!   - Aşağıda `FALSE` qayıdır çünki, String primitiv tipdir, amma `new String("Hello")` obyekt tipidir və `instanceof` yalnız obyektlər üçün işləyir.
console.log("Hello" instanceof String);     



// TODO: Əgər obyekt yoxlayırsınızsa, `INSTANCEOF` istifadə edin.
// TODO: Əgər primitiv tip yoxlayırsınızsa, `TYPEOF` istifadə edin. 