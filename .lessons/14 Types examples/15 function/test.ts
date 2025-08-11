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







// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------


// Burada demiş olur ki, İD həm NUMBER tipi qəbul edə bilər həmdə STRING.
function add3(id: number | string) {
    console.log(id);                                // ✅ Doğru
}

add3(1);





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------




// Ancaq funksiyanın içində İD üçün toUpperCase() metodunu istifadə etsək xəta alacağıq. Çünki burada NUMBER da gözləmiş ola bilər funksiya.
function add4(id: number | string) {
    console.log(id.toUpperCase());                  // ❌ Xəta: Property 'toUpperCase' does not exist on type 'string | number'.
}
add4("hello");


// Bu xətanın qarşısını almaq üçün isə İF ilə şərt qoşmaq lazımdır. 
function add5(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());              // ✅ Doğru
    } else {
        console.log(id);
    }            
}
add5("hello");




// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------


// Əgər göndərilən dəyər string ehtiva edən array olarsa onda aşağıdakı kimi yazmalıyıq. Ancaq nnumber dəyər göndərdikdə xəta alarıq. 
function welcomePeople1(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "));
    } else {
      console.log("Welcome lone traveler " + x);
    }
  }
  welcomePeople1( ["Alice", "Bob", "Eve"] ); 




// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------


// Əgər həm string həm number ehtiva edən array göndərmək lazımdırsa onda belə yazmaq olar. 
function welcomePeople2(x: (number | string)[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "));
    } else {
      console.log("Welcome lone traveler " + x);
    }
  }
  welcomePeople2( [4, "Bob", 6] ); 





// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------


// Daha rahat olsun deyə öz tipimizi yarada bilərik. Buna union type yaxud custom type deyilir. 
type MY_ID_TYPE = number | string;


function welcomePeople3(id: MY_ID_TYPE) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());              // ✅ Doğru
  } else {
      console.log(id);
  } 
}
welcomePeople3( 'hello' ); 



