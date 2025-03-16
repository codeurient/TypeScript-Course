

// 4. object (Obyekt)
// 🚫 Necə olmaz:

let user1: object;
user1 = "Alice"; // ❌ Xəta: string obyekt ola bilməz












// ✅ Necə olmalıdır:
let user2: object;
user2 = { name: "Alice", age: 25 }; // ✅ Doğru







// ✅ Fərqli bir yazılış şəkli:
const obj1: { id: number;   title: string } = { id: 1, title: "test"}

// Əgər xassənin qarşısında sual yazsaq bu o deməkdir ki, title olada bilər olmayda bilər. 
const obj2: { id: number;   title?: string } = { id: 1 }
