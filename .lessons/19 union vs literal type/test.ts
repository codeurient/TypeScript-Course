// 1. Union Type (Birləşmiş Tip) nədir?
// Union type (| simvolu ilə yazılır) bir dəyərin birdən çox tipə malik ola biləcəyini göstərir.

type ID = number | string; // 📌 Burada ID həm number, həm də string ola bilər, amma başqa bir tip (boolean, object və s.) ola bilməz.

let userId: ID;

userId = 123;     // ✅ Doğru
userId = "abc";   // ✅ Doğru
userId = true;    // ❌ Səhv, çünki yalnız number və string icazəlidir







// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------



// 2. Literal Type (Sabit Tip) nədir?
// Literal type müəyyən sabit dəyərləri təyin edir. Yəni, dəyişən ancaq göstərilən dəyərlərdən birini qəbul edə bilər.

// a) 
type Alignment = "left" | "bottom" | "right";
const align: Alignment = "bottom";



// b) 
type TrafficLight = "red" | "yellow" | "green";
let signal: TrafficLight;
signal = "red";    // ✅ Doğru
signal = "yellow"; // ✅ Doğru
signal = "blue";   // ❌ Səhv, çünki yalnız "red", "yellow" və "green" mümkündür
