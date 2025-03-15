
// 5. array (Massiv)
// 🚫 Necə olmaz:

let numbers1: number[];
numbers1 = 5; // ❌ Xəta: 5 tək bir rəqəmdir, massiv olmalıdır













// ✅ Necə olmalıdır:
let numbers2: number[];
numbers2 = [1, 2, 3, 4, 5]; // ✅ Doğru






// 2 fərqli yazılış şəkli vardır Arrayın: 
// Hər iki yazılış TypeScript-də eyni məna daşıyır və hər ikisi string dəyərlərdən ibarət massivi (array) ifadə edir.

//! 1-ci üsul:
// 🔹 string[] qısa və daha oxunaqlıdır.
// 🔹 Əsasən TypeScript kodlarında daha çox istifadə olunur.
// 🔹 Tövsiyə edilən yazılışdır.
const myName1: string[]      = ["Bob", "Jon"];


//! 2-ci üsul:
// 🔹 Bu yazılış generik (generic) sintaksisidir.
// 🔹 JavaScript-in Array obyektinə əsaslanır və generik tiplərdə daha çevikdir.
// 🔹 Daha çox kompleks hallarda, məsələn, Array<Array<string>> (ikiölçülü massiv) istifadə üçün uyğundur.
const myName2: Array<string> = ["Bob", "Jon"];





//! Fərqləri nə vaxt hiss etmək olar?
// 1. Generik tip istifadəsi. Array<T> generik olduğu üçün daha kompleks strukturlarda kömək edə bilər:
const matrix: Array<Array<number>>  = [[1, 2], [3, 4]];
const matrix2: number[][]           = [[1, 2], [3, 4]];               // Əgər `number[][]` istifadə etsək də eyni olacaq:


// 2. React JSX-də < və > simvolları HTML <div> və </div> kimi qəbul edilə bilər və bu səbəbdən Array<string> bəzi hallarda parsing xətası verə bilər:
const myName3: Array<string> = ["Alice", "Bob"]; // ❌ JSX-də xəta verə bilər. Buna görə React JSX-də string[] tövsiyə olunur.



// TODO: Bu fərqli yazılış şəkli sadəcə ARRAY tipinə yox digər tiplərədə aid ola bilər. Onun üçün əgər REACT ilə işləyiriksə onda 
// TODO: < və > istifadə etməmək daha yaxşı olar. 











