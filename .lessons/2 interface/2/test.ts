// Eyni adda olan interface yaratmaq o deməkdir ki, biz 1ci yaradılan interface -si təkrar çağıraraq içinə yeni nəsə əlavə edə bilərik.  




// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------


interface Human {
  age: number;
}

interface Human {
  name: string;
}


const p1: Human = { age: 17,  name: 'John' };