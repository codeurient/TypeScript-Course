// async funksiyaların qarşısında Promise<number> yazmaq vacib deyil, çünki TypeScript bunu avtomatik başa düşür.

// Sadəcə PROMİSE hal-hazırda `ES2015` xətası qaytarır. Şəkil 1






// Tip açıq şəkildə göstərilir (İxtiyari)
async function sumAsync(a: number, b: number): Promise<number> {
    return a + b;
}
sumAsync(3, 4).then(console.log);           // 7






// Tip yazılmasa da, TypeScript özü başa düşür
async function sumAsync2(a: number, b: number) {
    return a + b; // TypeScript avtomatik olaraq `Promise<number>` kimi qəbul edir
}
sumAsync2(5, 6).then(console.log);          // 11
