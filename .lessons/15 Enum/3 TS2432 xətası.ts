// TypeScript-də enum-lar çox hissədə elan edilə bilər (enum merging), amma yalnız bir elan ilk elementi üçün dəyər təyin etməyə bilər.

// Əgər bir neçə hissə ilk element üçün dəyər göstərməzsə, TypeScript hansı dəyəri təyin edəcəyini bilmir və TS2432 xətasını göstərir.






// Xətalı Kod (Səhv Nümunə) - 🔴 Xəta: TypeScript bilmir ki, Yasil hansı dəyərdən başlamalıdır, çünki Qirmizi başqa bir hissədə elan edilib.
// Çünki default olaraq 0 olmalıdır ancaq bu 0 (sıfır) hansına verilsin ? Qirmizi yoxsa Yasil üçün. Onun üçün xəta alırıq. 

// Birinci elan
enum Reng1 {
    Qirmizi,  // Burada dəyər verilməyib
}

// İkinci elan
enum Reng1 {
    Yasil,  // Burada da dəyər verilməyib → Xəta: TS2432
    Goy
}




// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------





// Həll Yolları - ✅ 1. İlk elementi açıq şəkildə təyin et (Sadə Həll)
enum Reng2 {
    Qirmizi = 1,    // İndi TypeScript bilir ki, bu 1-dən başlayır
}

enum Reng2 {
    Yasil,          // 2 olacaq
    Goy             // 3 olacaq
}

console.log(Reng2.Qirmizi);  // 1
console.log(Reng2.Yasil);    // 2
console.log(Reng2.Goy);      // 3




// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------



// ✅ 2. Çox hissəli elanlardan çəkin (Sadələşdirilmiş Həll)
// Əgər enum-u çox hissədə elan etməyə ehtiyac yoxdursa, hamısını bir hissədə yazmaq daha yaxşıdır:
enum Reng3 {
    Qirmizi,
    Yasil,
    Goy
}
