// 14. type assertion (Tipi açıq şəkildə göstərmək)


// 🚫 Necə olmaz:
let someValue1: any = "Hello";
console.log(someValue1.length);                   // ❌ Xəta: any olduğu üçün TypeScript bunu bilmir





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------





// ✅ Necə olmalıdır:
let someValue2: any = "Hello";
console.log((someValue2 as string).length);       // ✅ Doğru


//! DAHA ƏTRAFLI + TS TİPİNİ NECƏ SINDIRMAQ OLAR...
//TODO: Type Assertion, TypeScript-in tip yoxlamasını yönləndirmək üçün istifadə olunur.
//* Yuxarıdakı kodun təhlili:
//* 🔹 someValue dəyişəni any tipindədir, yəni istənilən dəyəri ala bilər.
//* 🔹 Biz TypeScript-ə deyirik ki, someValue əslində string tipindədir.
//* 🔹 Ona görə .length istifadə edə bilirik, çünki TypeScript artıq someValue-nin string olduğunu bilir.



//TODO: Type Assertion iki cür yazıla bilər
// 1. as      - açar sözü ilə (someValue as string) ✅ (Tövsiyə olunur).
// 2. <>      - süni  tip ilə (<string>someValue)   ✅ (React JSX ilə konflikt yarada bilər, ona görə `as` daha çox tövsiyə olunur.)
let someValue3: any = "Hello";
console.log((<string>someValue3).length); 


// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------






//TODO: Type Assertion nə üçün lazımdır?
// 1) TypeScript any tipini yoxlamır, amma biz tipin nə olduğunu bilirik və bu məlumatı TypeScript-ə bildiririk.
let value1:  any    = "Hello TypeScript";
let length1: number = (value1 as string).length;
console.log(length1); // 16


// 2) DOM elementləri ilə işləyərkən - TypeScript document.getElementById metodunun hansı element tipini qaytardığını 
//    tam bilmir, ona görə biz as ilə tipləndiririk.
let inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "Alice"; 


// 3. API-dən gələn məlum dəyəri tipləndirmək
// Dəyişənin əslində hansı tipdə olduğunu bilirik, amma TypeScript bilmir.
function getUser(): any {
    return { name: "Alice", age: 25 };
}
let user = getUser() as { name: string; age: number };
console.log(user.name); // Alice
console.log(user.age);  // 25
  



// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------




// Type Assertion nə zaman istifadə olunmamalıdır?
// 🚫 TypeScript-in yoxlama sistemini aldadaraq səhvləri gizlətmək üçün istifadə edilməməlidir.
// Məsələn, aşağıdakı kod TypeScript-in tip yoxlamasını keçər, amma undefined ola bilər:
// ⚠️ Yanlış istifadə TypeScript-in tip qorumasını sındıra bilər.
let user2 = "Alice" as unknown as number;                           // ❌ Səhv!
console.log(user2 + 10);                                            // Runtime səhvi ola bilər
