// Enum nədir?

// Enum (Enumeration - Siyahılama) xüsusi bir məlumat tipidir və müəyyən dəyərlər toplusunu təyin etmək üçün 
// istifadə olunur. Məsələn, əgər rənglər, həftənin günləri və sabit (dəyişməz) dəyərlər üzərində işlənilirsə, 
// enum çox faydalıdır. 





// ✅ TypeScript-də enum daxili (built-in) bir xüsusiyyətdir:
// Burada enum avtomatik olaraq Qirmizi = 0, Yasil = 1, Goy = 2 kimi dəyərlər təyin edir.
enum Reng1 {
    Qirmizi,                            // 0
    Yasil,                              // 1
    Goy                                 // 2
}
// `menimRengim` adlı variable -ın tipini ENUM olaraq təyin edirik. Deməli bu variable sadəcə ENUM-dan gələn dəyərləri qəbul edəcək. 
let menimRengim1: Reng1 = Reng1.Qirmizi;
console.log(menimRengim1);               // 0





// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------





// Əgər istəsək, dəyərləri özümüz də yaza bilərik:
enum Reng2 {
    Qirmizi = 10,
    Yasil = 20,
    Goy = 30
}

console.log(Reng2.Qirmizi); // 10
console.log(Reng2.Yasil);   // 20
console.log(Reng2.Goy);     // 30








// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------




// Enum JS - də yoxdur, sadəcə TS-də vardır. 
// JS-də enum-ları əvəz etmək üçün obyektlər vardır.

// Bu metod TypeScript-dəki enum-un eyni funksionallığını təmin edir.
const Reng3 = {
    Qirmizi: 0,
    Yasil: 1,
    Goy: 2
};

let menimRengim3 = Reng3.Qirmizi;
console.log(menimRengim3);  // 0




