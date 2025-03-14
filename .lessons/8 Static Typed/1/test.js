message.toLowerCase();
message();




// JavaScript-də hər bir dəyərin müəyyən davranışları var, və bu davranışlar həmin dəyərin növündən (type) asılıdır.

// Bu kodda `message` adlı bir dəyişən var və biz onun üzərində iki əməliyyat aparırıq:

// 1) message.toLowerCase()
//  - Burada güman edilir ki, message variabe-lının .toLowerCase() adlı bir xüsusiyyəti (property) var.
//  - Əgər message stringdirsə ("Hello" kimi), onda .toLowerCase() və stringi kiçik hərflərə çevirəcək.
//  - Amma message string deyilsə, məsələn, bir obyekt və ya undefined olarsa, bu kod xəta verəcək.

// 2) message()
//  - Burada isə message-ın funksiya olduğu güman edilir.
//  - Əgər message doğrudan da funksiya olarsa, o zaman bu kod onu çağıracaq.
//  - Amma message funksiya deyilsə (məsələn, string, number və ya obyekt olarsa), xəta verəcək.




// Problem: Biz message-in nə olduğunu bilmirik!
// Bu kodun işləyib-işləməyəcəyi message-in hansı dəyər olmasından asılıdır.
// JavaScript-də bir dəyişənin hansı dəyərə sahib olduğunu bilmədən onun üzərində əməliyyat aparmaq təhlükəlidir.

// ✅ message çağırıla bilən (callable) bir dəyərdirmi? (Yəni funksiya olub-olmadığını bilmirik)
// ✅ message-in toLowerCase adlı xüsusiyyəti varmı?
// ✅ Əgər toLowerCase varsa, o, funksiya olub çağırılabiləndirmi?
// ✅ Əgər həm message(), həm də message.toLowerCase() işləyirsə, onlar hansı nəticəni qaytaracaq? və.s