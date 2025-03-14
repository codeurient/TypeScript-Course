// Strict Mode (Strictness) nədir?
// Strict Mode (strict) — TypeScript-də daha sərt tip yoxlamalarını aktivləşdirən bir rejimdir.

// 🔹 Əsas məqsəd kodun daha etibarlı olmasını təmin etmək və potensial səhvləri erkən aşkar etməkdir.

// 🔹 tsconfig.json faylında "strict": true qoymaq bütün strict modları aktivləşdirir.




// 1️⃣ Ən çox istifadə edilən Strict Modları
//      --strictNullChecks
//      --noImplicitAny
//      --noImplicitThis
//      --alwaysStrict

// 2️⃣ Başqa Strict Modlar da Var!
//      --strictFunctionTypes
//      --strictBindCallApply
//      --strictPropertyInitialization
//      --noUncheckedIndexedAccess

       

// Bəli, bütün strict modlar tsconfig.json faylının içində olur və "compilerOptions" bölməsinə yazılır.
// Bu modları tsconfig.json daxilində aktiv və ya deaktiv edə bilərsiniz.
//          {
//              "compilerOptions": {
//                "strict": true,
//                "strictNullChecks": true,
//                "noImplicitAny": true,
//                "noImplicitThis": true,
//                "alwaysStrict": true
//              }
//          }
  

// "strict": true yazmaq bütün strict modları avtomatik aktivləşdirir və ayrı-ayrı hər mod üçün true yazmağa ehtiyac qalırmı?
//          {
//              "compilerOptions": {
//                "strict": true
//              }
//          }


// Amma müəyyən bir qaydanı söndürmək üçün, onu ayrıca false yazmaq lazımdır.
//          {
//              "compilerOptions": {
//                "strict": true,
//                "strictNullChecks": false
//              }
//          }


// Bu halda bütün strict modlar aktiv olacaq, ancaq strictNullChecks deaktiv olacaq.