//  1) `ES2015` xətasını aradan qaldırmaq üçün,  `tsconfig.json` faylında,  target və lib ayarlarını düzəltmək lazımdır: Şəkil 1
//      target: "ES2015"        – ES6 (ES2015) versiyasına keçid edir.
//      lib: ["ES2015", "DOM"]  – Promise və digər ES6 xüsusiyyətlərini əlavə edir.


// 2) Sonra isə `tsc --target es2015 test.ts`   əmrindən istifadə edərək TS faylını JS faylına çeviririk.
// ES2015 olan yerdə normal TSC istifadə etmirik. 





async function sumAsync(a: number, b: number): Promise<number> {
    return a + b;
}
sumAsync(3, 4).then(console.log);           





async function sumAsync2(a: number, b: number) {
    return a + b; 
}
sumAsync2(5, 6).then(console.log);          
