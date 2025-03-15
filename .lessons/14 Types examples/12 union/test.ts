// union (İki və ya daha çox tipi qəbul edən)

// 🚫 Necə olmaz:
let id1: string | number;
id1 = true;                       // ❌ Xəta: yalnız string və ya number olmalıdır



















// ✅ Necə olmalıdır:
let id2: string | number;
id2 = "123";                // ✅ Doğru
id2 = 123;                  // ✅ Doğru



