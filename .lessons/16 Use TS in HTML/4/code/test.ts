// TypeScript-də HTML Elementlərini Əldə Etmək

// Əgər TypeScript istifadə edirsənsə, elementin hansı tip olduğunu göstərməlisən (HTMLElement, HTMLInputElement və s.).
let button1 = document.getElementById("myButton1") as HTMLButtonElement;

button1.addEventListener("click", () => {
    console.log("Button clicked! 1");
});



// Alternativ olaraq non-null assertion (!) da istifadə edə bilərsən:
let button2 = document.getElementById("myButton2")!;
button2.addEventListener("click", () => {
    console.log("Button clicked! 2");
});