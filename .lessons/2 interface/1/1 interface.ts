// interface TypeScript-də obyektin xassələrinə (property) tip vermək üçün istifadə edilir.


// -----------------------------------------------------------------------------------------------------------------------

interface User {
  id: number
  name: string
  age: number
}



const user1: User = {
  id: 1,
  name: "Ali",
  age: 25
}

// -----------------------------------------------------------------------------------------------------------------------

const user2: User = {
  id: 2,
  name: "Aygün",
  age: "30" // ❌ Səhv: "age" number olmalıdır
}

// -----------------------------------------------------------------------------------------------------------------------

// Burada User interfeysi id, name və age sahələrini müəyyən tiplərlə təyin edir. Yanlış tip verildikdə TS xəta çıxarır.
// ✔ interface obyektin strukturunu müəyyən edir və xassələrinə tip təyin edir. 🚀