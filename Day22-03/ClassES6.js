class Student {
    id;
    age;
    name;
    gender;
    constructor(id, age, name, gender) {
        this.id = id;
        this.age =age;
        this.name = name;
        this.gender = gender;
    }
    getId() {
        return this.id;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    setId(id) {
        this.id = id;
    }
    setAge(age) {
        this.age = age;
    }
    setName(name) {
        this.name= name;
    }
    setGender(gender) {
        this.gender = gender;
    }
}
 let student = new Student();
 student.setId(1);
 student.setName("minh");
 student.setAge(25);
 student.setGender("male");
console.log(student);

// function editGender(student) {
//     student.setGender("Female");
//     console.log(student);
// }
// editGender(student);

