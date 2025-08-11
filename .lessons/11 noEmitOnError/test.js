// --noEmitOnError nədir?

// --noEmitOnError TypeScript-in (tsc) kompilyasiya parametrlərindən biridir.
// Bu parametr səhv olduğu halda, kompilyatorun çıxış faylı (.js) yaratmasını (emit etməsini) bloklayır.


// Terminalda yazılır:  tsc --noEmitOnError hello.ts






// tsconfig.json faylında noEmitOnError necə aktiv edilir?
// Əgər hər dəfə əllə --noEmitOnError yazmaq istəmirsinizsə, bunu tsconfig.json içində daimi olaraq aktiv edə bilərsiniz:

// {
//   "compilerOptions": {
//     "noEmitOnError": true
//   }
// }






// TODO: TypeScript dokumentasiyasına görə:
// TODO:    tsc test.ts yazdıqda tsconfig.json nəzərə alınmır və default parametrlər tətbiq olunur.
// TODO:    Bu səbəbdən noEmitOnError: true işə düşmür və .js faylı yenə yaranır.

// Əgər tsc test.ts yazanda tsconfig.json-dakı ayarlar (məsələn noEmitOnError) nəzərə alınsın istəyirsənsə, 
// TypeScript bunu default olaraq etmir — çünki sən fayl adını birbaşa yazanda "single file compile mode"-a 
// keçir və konfiq faylı bypass edir.

// Amma bunun bir "dolayı" həlli var. tsconfig.json-u belə yazmaq:
// {
//     "compilerOptions": {
//       "module": "CommonJS",
//       "target": "ES2015",
//       "lib": ["ES2015", "ES2016", "DOM"],
//       "noEmitOnError": true,
//       "strict": true
//     },
//     "include": [
//       "test.ts"
//     ]
//  }
  

// Yaxud elə bir alias yaza bilərəm ki, terminalda sadəcə tsc test.ts yazanda avtomatik olaraq --project tsconfig.json ilə işləsin.
// Ancaq hal-hazırda sadəcə: `tsc --noEmitOnError test.ts` belə yazın və bu mövzu haqqında çoxda düşünməyin. 