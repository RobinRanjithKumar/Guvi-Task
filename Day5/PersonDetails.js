class Person {
    constructor(firstName, lastName, age, gender, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        return `
            Name: ${this.getFullName()}
            Age: ${this.age}
            Gender: ${this.gender}
            Address: ${this.address}
        `;
    }
}

// Example usage:
const person1 = new Person("Robin", "RanjithKumar", 24, "Male", "61/AB Pongimmal Street Rathinapuri coimbatore, Tamilnadu");
console.log(person1.getFullName());  // Output: John Doe
console.log(person1.getDetails());  
/*
Output:
Name: Robin RanjithKumar
            Age: 24
            Gender: Male
            Address: 61/AB Pongimmal Street Rathinapuri coimbatore, Tamilnadu
*/
