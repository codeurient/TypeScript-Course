// "Non-exception Failures" (Gözə görsənməyən xətalar) JavaScript-də xəta baş verdiyi halda, 
// JavaScript-in rəsmi olaraq istisna (exception) verməməsi hallarına deyilir. 

// Yəni, bəzi xətalar var ki, onlar runtime error (icra zamanı xəta) zamanı proqram öz işini dayandırmır.



// "Exception" nədir?
// Normalda JavaScript böyük problemlərlə qarşılaşanda exception (istisna) atır və proqramı dayandırır.
// Məsələn, funksiya olmayan bir şeyi çağırmaq (calling a non-callable value) istisna (exception) atır:

let message = 42;
message();                  // ❌ TypeError: message is not a function
                            // Burada JavaScript-in ECMAScript spesifikasiyası deyir ki, funksiya olmayan 
                            // bir şeyi çağırmaq TypeError atmalıdır.













// Non-exception Failure (Xəta var, amma Exception atmır)
// Amma bəzi hallarda xəta kimi görünən şeylərdə JavaScript sadəcə undefined qaytarır və ya səhvi ötürür, amma proqramı dayandırmır.
// Məsələn, mövcud olmayan bir property-ə müraciət etmək:
let obj1 = {};
console.log(obj1.name);          // ✅ undefined (Xəta yoxdur, amma nəticə məntiqli deyil)
                                 // Burada obj.name mövcud deyil, amma JavaScript exception atmır, sadəcə undefined qaytarır.











// Başqa Misallar     
// 1️⃣ Mövcud olmayan massiv elementinə giriş
let numbers = [1, 2, 3];
console.log(numbers[10]);       // ✅ undefined (Exception atmır)
                                // Burada 10-cu indeksdə heç nə yoxdur, amma JavaScript exception atmır, sadəcə undefined qaytarır.




// 2️⃣ delete əməliyyatı uğursuz olsa da exception atmır
// "use strict";
const obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "John",
  writable: false,
  configurable: false,
});

delete obj2.name;                // ✅ false qaytarır, amma exception atmır
console.log(obj2.name);          // "John" (dəyər hələ də qalır).
                                 // Burada delete obj.name işləmədiyi halda, JavaScript exception atmır, sadəcə false qaytarır.






// Niyə "Non-exception Failure" var?
// Bunun səbəbi JavaScript-in dizayn prinsipləri ilə bağlıdır:
// ✅ Daha rahat proqramlaşdırma: JavaScript bəzi hallarda kodu dayandırmaq əvəzinə daha yumşaq şəkildə xətalar verir.
// ✅ Veb brauzerlərdə sabitlik: Veb səhifənin kiçik bir xətaya görə tamamilə çökməsinin qarşısını almaq.
// ✅ Dinamizmi artırmaq: Obyektlərə və massivlərə istənilən dəyərin əlavə olunmasına imkan yaratmaq.



// Əgər TS -də işləsəydik onda TS bizə belə bir variable, object və.s olmadığını bildirəcəkdi.  Şəkil 1
