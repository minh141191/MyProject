class FormStory {
    id;
    img;
    name;

    constructor(id, img, name) {
        this.id = id;
        this.img = img;
        this.name = name;
    }
    getId() {
        return this.id;
    }

    getImg() {
        return this.img;
    }

    getName() {
        return this.name;
    }
    setId(id) {
        this.id = id;
    }

    setImg(img) {
        this.img = img;
    }

    setName(name) {
        this.name = name;
    }
}

let story = new FormStory(1,"1.jpg", "abcd");
let story1 = new FormStory(2,"1.jpg", "DLDL");
let story2 = new FormStory(3,"1.jpg", "DLDL");
let story3 = new FormStory(4,"1.jpg", "DLDL");
let story4 = new FormStory(5,"1.jpg", "DLDL");
let storyArr = [story, story1, story2, story3, story4];
console.log(storyArr);
let indexEdit = -1;

function disPlay() {
    let data = "<div class='grid-stories'>";
    for (let i = 0; i <storyArr.length; i++) {
        data += "<div class='story-grid'><image src='" + storyArr[i].img + "'</div>";
        data += "<div class='info'>"
        data += "<h4>" + storyArr[i].name + "</h4>";
        data+= "</div>";
        data += "</div>"
    }
    document.getElementById("showstory").innerHTML = data;

}
disPlay();

function listStory() {
    let data = "<table class='table-grid'>";
    data += "<tr><th style='font-size: 30px' colspan='5'>Danh sách truyên</th></tr>";
    data += "<tr>";
    data += "<th>STT</th>";
    data += "<th>Ảnh</th>";
    data += "<th>Tên Truyện</th>";
    data += "<th>Action</th>";
    data += "</tr>";

    for (let i = 0; i < storyArr.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + "</td>";
        data += "<td class='story-list'><image src='" + storyArr[i].img + "'</td>";
        data += "<td>" + storyArr[i].name + "</td>";
        data += "<td>"
        data += "<button class='btn-edit' onclick='editStory(" + i + ")'>Edit</button>"
        data += "<button class='bnt-delete' onclick='deleteStory(" + i + ")'>Delete</button>"
        data += "</td>";
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("listsotory").innerHTML = data;
}
listStory()
function updateStory() {
    let id = document.getElementById("id").value;
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    storyArr[indexEdit].setId(id);
    storyArr[indexEdit].setImg(img);
    storyArr[indexEdit].setName(name);
    disPlay();
    listStory();

}

function editStory(index) {
    indexEdit = index;
    document.getElementById("id").value = storyArr[index].getId();
    document.getElementById("img").value = storyArr[index].getImg();
    document.getElementById("name").value = storyArr[index].getName();
    showEdit();

}

function deleteStory(index) {
    if(confirm("Xóa?")) {
        storyArr.splice(index, 1);
    }
    disPlay();
    listStory()
}

function addStory() {
    let id = document.getElementById("id").value;
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let story = new FormStory(id, img, name);
    storyArr.push(story);
    disPlay();
    listStory();
}


function showHome() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("mystories").style.display = 'none';
    document.getElementById("action").style.display = 'none';
    document.getElementById("home").style.display = 'block';
}

function showListStory() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("mystories").style.display = 'block';
}
function showEdit() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("mystories").style.display = 'block';
    document.getElementById("action").style.display = 'block';
}