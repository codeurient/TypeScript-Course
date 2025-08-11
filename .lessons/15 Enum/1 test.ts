// Enum nədir?

// Enum (Enumeration - Siyahılama) xüsusi bir məlumat tipidir və müəyyən dəyərlər toplusunu təyin etmək üçün 
// istifadə olunur. Məsələn, əgər rənglər, həftənin günləri və sabit (dəyişməz) dəyərlər üzərində işlənilirsə, 
// enum çox faydalıdır. 





// ✅ TypeScript-də enum daxili (built-in) bir xüsusiyyətdir:
// Burada enum avtomatik olaraq Qirmizi = 0, Yasil = 1, Goy = 2 kimi dəyərlər təyin edir.
enum Reng1 {
    QIRMIZI,                            // 0
    YASIL,                              // 1
    GOY                                 // 2
}
// `menimRengim` adlı variable -ın tipini ENUM olaraq təyin edirik. Deməli bu variable sadəcə ENUM-dan gələn dəyərləri qəbul edəcək. 
let menimRengim1: Reng1 = Reng1.QIRMIZI;
console.log(menimRengim1);               // 0







// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------





// Əgər istəsək, dəyərləri özümüz də yaza bilərik:
enum Reng2 {
    QIRMIZI = 10,
    YASIL = 20,
    GOY = 30
}

console.log(Reng2.QIRMIZI); // 10
console.log(Reng2.YASIL);   // 20
console.log(Reng2.GOY);     // 30








// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------




// Enum JS - də yoxdur, sadəcə TS-də vardır. 
// JS-də enum-ları əvəz etmək üçün obyektlər vardır.

// Bu metod TypeScript-dəki enum-un eyni funksionallığını təmin edir.
const Reng3 = {
    QIRMIZI: 0,
    YASIL: 1,
    GOY: 2
};

let menimRengim3 = Reng3.QIRMIZI;
console.log(menimRengim3);  // 0






// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------






// enum (ənümertasiya) təhlükəsiz və oxunaqlı kod yazmaq üçün istifadə olunur. 

enum LogLevel {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}

// 📌 logMessage funksiyası yalnız LogLevel dəyərlərindən birini qəbul edə bilər. 
// Bu, səhv dəyərin ötürülməsinin qarşısını alır və kodun oxunaqlılığını artırır.
function logMessage(level: LogLevel, message: string) {
    console.log(`${level}: ${message}`);
}

// Əgər string yazsaq və "WARN" əvəzinə "WARNING" etsək, bütün kodu düzəltməli olacağıq.
// enum istifadə etdikdə isə yalnız enum-da dəyişiklik edib, başqa heç nə dəyişmədən kodu işlədə bilərik.
logMessage(LogLevel.INFO,  "This is an Info message");
logMessage(LogLevel.WARN,  "This is an Warning message");
logMessage(LogLevel.ERROR, "This is an Error message");


//TODO: enum-dan istifadə etməyin əsas üstünlükləri: 
// ✅ Səhvlərin qarşısını alır              – Yalnız icazə verilən dəyərlər qəbul olunur.
// ✅ Kodun oxunaqlılığını artırır          – Log səviyyələri daha aydın olur.
// ✅ IDE köməyi verir                      – LogLevel. yazdıqda mümkün seçimlər göstərilir.
// ✅ Dəyərlərin dəyişməsi kodu sındırmır   – Əgər "WARN"-ı "WARNING" etsəniz, kodu asanlıqla yeniləyə bilərik.






// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------




enum E {
    X, // 0
    Y, // 1
    Z, // 2 
}

function f(obj: { X: number; Y: number; Z: number }) {
    return obj.X + obj.Y + obj.Z;
}
f(E)

//! Enum daxilində yazılan xassə adları kiçik yazıla bilər ancaq məsləhətdir ki, böyük yazaq. 