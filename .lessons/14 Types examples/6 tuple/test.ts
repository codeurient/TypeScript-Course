

// 6. tuple (Müəyyən ardıcıllıqda tipli massiv)
// 🚫 Necə olmaz:

let person1: [string, number];
person1 = [25, "Alice"]; // ❌ Xəta: Ardıcıllıq səhvdir












// ✅ Necə olmalıdır:
let person2: [string, number];
person2 = ["Alice", 25]; // ✅ Doğru

