// Bir interface başqa bir interface-si `extend` edə bilər. Yəni genişləndirə bilər. 

// Məsələn, Human adında bir interface yaradırıq və deyirik ki:    PersonInterface extend Human
// Bu o deməkdir ki, PersonInterface,   Human interfeysi içində olanlarıda götürsün. Yəni istifadə edə bilsin.

// Bu qayda ilə, PersonInterface-si genişləndirmiş oluruq. 




// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------


interface Human {
  age: number;
}

interface PersonInterface extends Human {
  id: number;
  name: string;
}

const p1: PersonInterface = { id: 1,  name: 'John', age: 30 };