// is operatoru TypeScript-də `type predicate` (tipin yoxlayıcısı) yaratmaq üçün istifadə edilir.
// Bu, bir dəyişənin müəyyən bir tipə aid olub-olmadığını yoxlamağa imkan verir.

// is əsasən custom (xüsusi) tip yoxlayan funksiyalar (type guard) yazmaq üçün istifadə edilir.


// Misal: Bir obyektin Admin olub-olmadığını yoxlamaq:
type User  = { name: string; email: string };
type Admin = { name: string; email: string; role: "admin" };

// `user is Admin` bu funksiyanın dönüş tipidir. Əgər user yəni istifadəçi,  Admin tipinə aid olarsa, TypeScript avtomatik olaraq tip çıxaracaq. Əks halda, user, User tipində qalır.
function isAdmin1(user: User | Admin): user is Admin {
    return (user as Admin).role === "admin";
}

const user1: User = { name: "Alice", email: "alice@example.com" };
const admin1: Admin = { name: "Bob", email: "bob@example.com", role: "admin" };

console.log(isAdmin1(user1));  // false
console.log(isAdmin1(admin1)); // true






// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





// ✅ TypeScript-də is operatoru olmadan yoxlama etsək, as (type assertion) istifadə etməliyik:
// 🔸 Bu üsul işləyir, amma TypeScript-in avtomatik tip çıxarmasına mane olur. Yəni, funksiyanın içində kod yazaraq nəticəni RETURN etməli oluruq bu halda. 
// 🔸 is operatoru ilə isə TypeScript daha yaxşı tip çıxara bilir.
function isAdmin2(user: User | Admin): boolean {
    return (user as Admin).role === "admin";
}



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





//! is Operatoru ilə in Operatoru Arasındakı Fərq
// is operatoru ilə obyektin tipini yoxlayırıq: 📌 Əgər tip yoxlamaq lazımdırsa, is istifadə etmək daha düzgündür.
// in operatoru isə sadəcə obyektin açarı olub-olmadığını yoxlayır: 📌 Əgər sadəcə bir açarın olub-olmadığını yoxlamaq lazımdırsa, in daha uyğundur.