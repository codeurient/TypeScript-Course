// Bu kod person obyektində "id" açarı olub-olmadığını yoxlamaq üçündür:

// Object.keys(person) string[] (string massiv) qaytarır.
// Ancaq ES2015 versiyasında includes() metodu array-lərdə mövcud olmadığı üçün belə bir xəta alırıq:       Property 'includes' does not exist on type 'string[]'.
// O, yalnız ES2016 və sonrakı versiyalarda mövcuddur.

// Bu xətanı aradan qaldırmaq üçün `tsconfig.json` faylında, lib sahəsini bəzi əlavələr etməl lazımdır:     "lib": ["ES2015", "ES2016", "DOM"]
const person = {
    id: 1,
    name: "John",
};

if(Object.keys(person).includes('id')) {
    console.log('Yes');
}


// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------





// Alternativ həl olaraq əgər lib-i dəyişmək istəmiriksə, includes() əvəzinə aşağıdakı metodlardan istifadə edə bilərik

// indexOf("id") metodu "id" açarının indeksini qaytarır. (0)
// Əgər "id" tapılmasa, -1 qaytarır.
// Bu metod ES2015-də mövcuddur, ona görə də işləyəcək. 

const person2 = {
    id: 1,
    name: "John",
};

if (Object.keys(person2).indexOf("id") !== -1) { 
    console.log("Yes");
}





// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------



// Daha yaxşı həll:     Əgər obyektin açarlarını yoxlamaq istəyirsinizsə, IN operatoru daha yaxşı seçimdir:

// Niyə üstünlük verilir?
//      - Daha sürətlidir və Object.keys() çağırmağa ehtiyac yoxdur.
//      - undefined dəyərləri də yoxlayır.

// NUMUNE 1
const person3 = {
    id: 1,
    name: "John",
};

if ("id" in person3) { 
    console.log("Yes");
}


// NUMUNE 2
const person4 = { id: undefined };
console.log("id" in person4);       // true