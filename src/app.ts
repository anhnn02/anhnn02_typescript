export { }
const a: number = 100;
const b: number = 100;

type User = {
    id: number;
    name: string 
}
const myName: string = "Anh";
const myAge: number = 100;
const status: boolean = false;
const myObj: {} = { id: 1 };
const numberArr: number[] = [100, 1000];
const stringArr: string[] = ["100", "a"];
const objectArr: User[] = [{ id: 1, name: "Anh" }, { id: 2, name: "Anh" }, { id: 3, name: "Anh" }];

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(a, b))
