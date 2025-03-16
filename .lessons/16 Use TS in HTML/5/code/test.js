// querySelector ilə Elementi Əldə Etmək
// querySelector-dan istifadə edərkən elementin konkret tipini TypeScript-ə bildirməlisən.
var input1 = document.querySelector("#nameInput1");
if (input1) {
    console.log("İstifadəçi adi:", input1.value);
}
// Əgər TypeScript-in tip yoxlamasından qaçmaq istəyirsənsə, as keyword-dən istifadə edə bilərsən:
var input2 = document.querySelector("#nameInput2");
console.log("İstifadəçi adi:", input2.value);