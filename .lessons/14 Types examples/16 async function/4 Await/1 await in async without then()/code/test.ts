// Əgər await istifadə etsək, kod asinxron funksiyanın içində olmalıdır. 
// Çünki await yalnız async funksiyalar daxilində işləyir.




// `async` bir funksiya yaratmışıq. Bu funksiyanı `then()` olmadan çağırmaq üçün önünə `await` əlavə etmək lazımdır, ancaq
// önündə `await` yazdıqda gərək həmin funksiyanı başqa bir `async` funksiyanın içində çağıraq. 
async function sumAsync(a: number, b: number): Promise<number> {
    return a + b;
}

async function run() {
    console.log(await sumAsync(3, 4)); 
}

run(); // Asinxron funksiyanı çağırırıq
   




