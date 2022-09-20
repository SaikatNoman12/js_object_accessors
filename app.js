/*==========================================
JavaScript introduce in two type Accessors:-
1. Getter Accessors. Use get keyword.
2. Setter Accessors. Use set keyword.
==========================================*/

/*== 
1. Getter Accessor:-
==*/
const person = {
    firstName: 'Abdullah Al',
    lastName: 'Nomaan',
    language: 'Bangla',
    // getter accessor;
    get fullName() {
        // set full name accessor property value;
        return `${this.firstName} ${this.lastName}`;
    }
}

// check getter accessor output;
console.log(person.fullName);   // return output 'Abdullh Al Nomaan';

// lopping getter accessor and show object value;
for(let i in person){
    console.log(person[i]);
    /* return:-
    Abdullah Al
    Nomaan
    Bangla
    Abdullah Al Nomaan
    */
}


/*== 
2. Setter Accessor:- 
==*/
const personTwo = {
    firstName: 'Noman',
    lastName: 'Abdullah',
    age: 100,
    // setter accessor;
    set myAge(year) {
        this.age = year;

        return this.age;
    }
}

// set value in age parameter; 
personTwo.myAge = 30;
// check setter accessor output;
console.log(personTwo.age); // return output '30';

// lopping setter accessor, and show object value;
for(let i in personTwo){
    console.log(personTwo[i]);
    /* return:-
    Nomaan
    Abdullah
    30
    undefined
    */
}


