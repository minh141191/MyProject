
    class Student {
    name;
    age;
    gender;

    constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
    updateName(name) {
    this.name = name;
}
    updateAge(age) {
    this.age = age;
}
    updateGender(gender) {
    this.gender = gender;
}
}

    let student1 = new Student("Nguyen A", 23, "Male");
    let student2 = new Student("Nguyen B", 22, "Male");
    let student3 = new Student("Nguyen C", 21, "Male");
    // let student4 = new Student();
    // student4.updateName("Nguyen D");
    let studentArr = [student1,student2,student3];
    console.log(studentArr)
    let indexEdit = -1;

    function disPlay() {
    let data = "<table border='1'>"
    data += "<tr>"
    data += "<th>Name</th>"
    data += "<th>Age</th>"
    data += "<th>Gender</th>"
    data += "<th colspan='2'>Action</th>"
    data += "</tr>"

    for (let i = 0; i < studentArr.length; i++) {
    data += "<tr>"
    data += "<td>" + studentArr[i].name +"</td>"
    data += "<td>" + studentArr[i].age +"</td>"
    data += "<td>" + studentArr[i].gender +"</td>"
    data += "<td><button onclick='editStudent(" + i +")'>Edit</button></td>"
    data += "<td><button onclick='deleteStudent(" + i +")'>Delete</button></td>"
    data += "</tr>"
}

    data += "</table>"
    document.getElementById('list').innerHTML = data;

    }
    disPlay()


    function updateStudent() {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        studentArr[indexEdit].updateName(name);
        studentArr[indexEdit].updateAge(age);
        studentArr[indexEdit].updateGender(gender);
        disPlay();
    }


    function editStudent(index) {
        indexEdit = index;
        document.getElementById("name").value = studentArr[index].name;
        document.getElementById("age").value = studentArr[index].age;
        document.getElementById("gender").value = studentArr[index].gender;
}

    function deleteStudent(index) {
    if (confirm("Xóa?")) {
    studentArr.splice(index, 1)
    disPlay();
}
}

    function addStudent() {
        let student4 = new Student(prompt("nhap ten"),prompt("nhap tuoi"),prompt("nhap gioi tinh"))
        studentArr.push(student4);
        disPlay();
}
