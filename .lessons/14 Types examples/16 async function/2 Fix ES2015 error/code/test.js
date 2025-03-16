//  `ES2015` xətasını aradan qaldırmaq üçün,  `tsconfig.json` faylında,  target və lib ayarlarını düzəltmək lazımdır: Şəkil 1
//      target: "ES2015"        – ES6 (ES2015) versiyasına keçid edir.
//      lib: ["ES2015", "DOM"]  – Promise və digər ES6 xüsusiyyətlərini əlavə edir.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sumAsync(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        return a + b;
    });
}
sumAsync(3, 4).then(console.log);
function sumAsync2(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        return a + b;
    });
}
sumAsync2(5, 6).then(console.log);
