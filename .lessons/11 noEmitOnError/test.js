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