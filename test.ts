type Person1   = { name: string };
type Employee1 = { id:   number };

let worker1: Person1 & Employee1;


worker1 = { name: "Alice" };