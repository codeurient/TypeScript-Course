// Əgər açıq aydın PROMİSE tipini qeyd etməsəydik onda `tsconfig.json` faylında dəyişiklik etmək lazım gəlməzdi və
// terminalda qısaca `tsc test.ts` yazmaq kifayət edəcəkdi. 





async function sumAsync2(a: number, b: number) {
    return a + b; 
}
sumAsync2(5, 6).then(console.log);          
