// querySelector ilə Elementi Əldə Etmək



// querySelector-dan istifadə edərkən elementin konkret tipini TypeScript-ə bildirməlisən.
let input1 = document.querySelector<HTMLInputElement>("#nameInput1");

if (input1) {
    console.log("İstifadəçi adi:", input1.value);
}




// Əgər TypeScript-in tip yoxlamasından qaçmaq istəyirsənsə, as keyword-dən istifadə edə bilərsən:
let input2 = document.querySelector("#nameInput2") as HTMLInputElement;
console.log("İstifadəçi adi:", input2.value);







//! NOT
// non-null assertion (!) istifadə edərək elementi əldə etdikdə,  value istifadə etmək TypeScript-də xətaya səbəb olur.
// Bunun səbəbi  document.querySelector metodunun qaytardığı tip Element | null olur.
// Element obyekti isə value propertsinə malik deyil (yalnız HTMLInputElement kimi spesifik elementlərdə var).
// Non-null assertion (!) elementin null olmayacağını bildirir, amma tipini HTMLInputElement-ə çevirmir.

//      let input3 = document.querySelector("#nameInput3")!;
//      if (input3) {
//          console.log("İstifadəçi adi:", input3.value);
//      }
