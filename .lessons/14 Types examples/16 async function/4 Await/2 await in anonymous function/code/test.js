// Əgər await istifadə etsək, kod asinxron funksiyanın içində olmalıdır. 
// Çünki await yalnız async funksiyalar daxilində işləyir.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// `async` bir funksiya yaratmışıq. Bu funksiyanı `then()` olmadan çağırmaq üçün önünə `await` əlavə etmək lazımdır, ancaq
// önündə `await` yazdıqda gərək həmin funksiyanı başqa bir `async` funksiyanın içində çağıraq. 
function sumAsync(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        return a + b;
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield sumAsync(3, 4));
    });
}
run(); // Asinxron funksiyanı çağırırıq
