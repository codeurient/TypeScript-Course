// 15. function (Funksiyalar üçün tip təyin etmək)



// 🚫 Necə olmaz:
function add1(a, b) {
    return a + b; // ❌ Xəta: Parametrlərin tipi bəlli deyil
}
  





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------





// ✅ Necə olmalıdır:
function add2(a: number, b: number): number {
    return a + b;                                                   // ✅ Doğru
}
  








// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------







// Əgər asinxron formada funksiya yaradırıqsa onda tip olaraq PROMİSE istifadə etmək lazımdır. 
async function sumAsync(a: number, b: number): Promise<number> {
    return a + b;
}