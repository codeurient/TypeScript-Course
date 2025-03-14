// TypeScript Enum JavaScript-ə necə çevrilir?

// TypeScript enum istifadə etsək, transpilation (TS → JS çevirmə) zamanı bu JS koduna aşağıdakı kimi çevrilir.
// Məsələn, aşağıdakı TypeScript kodu:
enum Reng {
    Qirmizi, 
    Yasil,    
    Goy       
}
console.log(Reng.Qirmizi); // 0






// 👉 JavaScript-ə çevriləndə belə olur:    Şəkil 2

//              "use strict";
//              var Reng;
//              (function (Reng) {
//                  Reng[Reng["Qirmizi"] = 0] = "Qirmizi";
//                  Reng[Reng["Yasil"] = 1] = "Yasil";
//                  Reng[Reng["Goy"] = 2] = "Goy";
//              })(Reng || (Reng = {}));

//              console.log(Reng.Qirmizi); // 0
    