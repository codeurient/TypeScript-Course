// intersection (İki və ya daha çox obyekt tipini birləşdirən)

// 🚫 Necə olmaz:
type Person1   = { name: string };
type Employee1 = { id:   number };

let worker1: Person1 & Employee1;


worker1 = { name: "Alice" }; // ❌ Xəta: id də olmalıdır





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------







// ✅ Necə olmalıdır:
type Person2   = { name: string };
type Employee2 = { id:   number };

let worker2: Person2 & Employee2;
worker2 = { name: "Alice",  id: 1 };              // ✅ Doğru







// type açar sözü yalnız TypeScript-də mövcuddur və JavaScript-də yoxdur.
// Bu kodu saf JavaScript-də (JS-də) işlətməyə çalışsan, səhv verəcək, çünki JS-də type anlayışı yoxdur.





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------













//TODO: JavaScript-də alternativ olaraq necə yazmaq olar?
//! Variant 1: Object.assign() metodundan istifadə edərək obyekt birləşdirmək.

// 1-ci parametr {} (boş obyekt)    - Bu yeni bir obyekt yaradır ki, nəticə buraya yazılsın.
//                                    Əgər boş obyekt qoymasaydıq və ilk parametr kimi mövcud bir obyekt versəydik, həmin obyekt dəyişərdi.

// 2-ci və 3-cü parametrlər         - Mənbə (source) obyektlərdir. Bu obyektlər soldan sağa doğru birləşir və nəticə hədəf obyektinə ({}) əlavə edilir.

const worker3 = Object.assign(       {},      { name: "Alice" },         { id: 1 }         );
console.log(worker3); // { name: "Alice", id: 1 }






//* Alternativ Yazılış      - Burada ... (spread operatoru) obyektləri birləşdirir.
const worker4 = { ...{ name: "Alice" }, ...{ id: 1 } };
console.log(worker4); // { name: "Alice", id: 1 }








//! Variant 2: Obyekt kimi əl ilə təyin etmə
const worker5 = {
    name: "Alice",
    id: 1
};
  
console.log(worker5.name); // "Alice"
console.log(worker5.id);   // 1
  







//! Variant 3: JavaScript-də Klasslar ilə işləmək
// Əgər obyektlər üçün müəyyən bir struktur yaratmaq istəyirsənsə, klass (class) istifadə edə bilərsən:
// Bu aşağıda əslində bir xəta yoxdur çünki VARİANT 1,2,3 də olan kodlar əslində .JS faylında yazılmalı idi ancaq .TS içində yazmışıq.
class Worker6 {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
}
  
const worker6 = new Worker6("Alice", 1);
console.log(worker6.name);                // "Alice"
console.log(worker6.id);                  // 1
