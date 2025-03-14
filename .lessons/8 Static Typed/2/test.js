let message = function() {
    return "Hello";
};



// 💡 JavaScript-də bir dəyişənin hansı tipə aid olduğunu bilmədən onun üzərində əməliyyat aparmaq təhlükəlidir.
// Ona görə də kod yazarkən typeof və ya optional chaining (?.) kimi üsullardan istifadə etmək faydalıdır:

// ✅ Məsələn, təhlükəsiz şəkildə işlətmək üçün:
if (typeof message === "string") {
    console.log(message.toLowerCase());
}

if (typeof message === "function") {
    console.log(message());
}




// və ya
console.log(message?.toLowerCase?.());
console.log(message?.());
