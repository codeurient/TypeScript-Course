// TypeScript-də HTML Elementlərini Əldə Etmək
// Əgər TypeScript istifadə edirsənsə, elementin hansı tip olduğunu göstərməlisən (HTMLElement, HTMLInputElement və s.).
var button1 = document.getElementById("myButton1");
button1.addEventListener("click", function () {
    console.log("Button clicked! 1");
});
// Alternativ olaraq non-null assertion (!) da istifadə edə bilərsən:
var button2 = document.getElementById("myButton2");
button2.addEventListener("click", function () {
    console.log("Button clicked! 2");
});
