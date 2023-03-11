function clearScreen() {
    document.getElementById("result").value = "";
}//Hàm clearScreen() dùng để xóa giá trị của  kết quả
 //bằng cách gán cho nó 1 giá trị trống value = "  ";
function display(value) {
    document.getElementById("result").value += value;
}//Hàm display dùng để hiển thị giá trị bằng cách thêm giá trị
//của nút được nhấp vào kết quả ( += value )
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}//Hàm calculate() dùng để đánh gia biểu thức bằng cách sử dụng
//hàm eval().Giá trị đánh giá của biểu thức lại được gán cho kết quả