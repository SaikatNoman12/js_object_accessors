/*
JavaScript introduce in two type Accessors:-
1. Getter Accessors. Use get keyword.
2. Setter Accessors. Use set keyword.
*/ 

// 1. Getter Accessor>
const person = {
    firstName: 'Abdullah Al',
    lastName: 'Nomaan',
    language: 'Bangla',
    // getter accessor;
    get fullName(){
        // set full name accessor property value;
        return `${this.firstName} ${this.lastName}`;
    }
}

// check getter accessor output;
console.log(person.fullName); // return output 'Abdullh Al Nomaan';
