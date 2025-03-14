// Downleveling nədir?

// Downleveling — TypeScript-in müasir JavaScript xüsusiyyətlərini köhnə ECMAScript versiyalarına çevirmə prosesidir.




// 1️⃣ Downleveling nə üçün lazımdır?
// Bəzi brauzerlər və mühitlər (xüsusən köhnə versiyalar) ES6+ xüsusiyyətlərini dəstəkləmir.
// 🔹 Məsələn, template strings (Hello ${name}) ES6-dan etibarən mövcuddur. Köhnə ES5 brauzerləri bunu başa düşmür.






// 2️⃣ Downleveling necə işləyir?
// Məsələn, template string (ES6):

const person = "Alice";
const date   = new Date();
console.log(`Hello ${person}, today is ${date.toDateString()}!`);


// ⏩ TypeScript bu kodu köhnə ES5 versiyasına çevirir (concat() funksiyası ilə). Bu çevirmə köhnə brauzerlərdə də işləməsi üçün edilir: 
// console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));


//! -------------------------------------------------------------------------------------------------------------------------------------
//! -------------------------------------------------------------------------------------------------------------------------------------


// 3️⃣ Downleveling necə idarə olunur?
// TypeScript-in --target flag-i vasitəsilə hansı ECMAScript versiyasına çevriləcəyini təyin edə bilərsiniz:

// ✅ ES6 versiyasına çevirmək (müasir brauzerlər üçün):   tsc --target es2015 hello.ts
// ✅ ES5 versiyasına çevirmək (köhnə brauzerlər üçün):    tsc --target es5 hello.ts




// 5️⃣ Nəticə
// Downleveling, müasir TypeScript və JavaScript kodlarını köhnə brauzerlər və mühitlər üçün uyğunlaşdırmaq üçün zəruri bir prosesdir. 🚀

