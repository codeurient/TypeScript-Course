// ✅ Əgər await-i async funksiyasız istifadə etsək, xəta alarıq:




async function sumAsync(a: number, b: number): Promise<number> {
    return a + b;
}

console.log(     await sumAsync(3, 4)     );     // ❌ SyntaxError: await sadəcə async functions içində istifadə edilir. 







   

// Əgər await-i async olmayan bir mühitdə işlətmək istəyiriksə, IIFE (Immediately Invoked Function Expression) istifadə etmək lazımdır:

(async () => {

    console.log(await sumAsync(3, 4));      // 7

})();






//!  await istifadə etmək üçün həmişə async function daxilində olmalısan.
//!  then(console.log) metodu isə istənilən yerdə işləyir, çünki o, Promise metodudur.