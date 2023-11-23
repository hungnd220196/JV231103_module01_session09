
const heading = document.getElementById("heading");
console.log(heading);
// var myName = "Nguyễn Đức Hùng"; // khai báo biến
// myName = "Nguyễn Văn B" // phép gán lại giá trị
// var myName = "Nguyễn văn C";
// console.log("Myname: ",myName);

// //từ khóa let
// let age = 27;
// age = 28;
// // let age = 29;

// console.log("Tuổi của tôi: ",age);

// // từ khóa const
// const address = "Thái Nguyên";

// console.log("address:", address);
let score = 10;

// Câu lệnh điều kiện chỉ có if
// if(score>5){
//     console.log("du dieu kien qua mon");
// }

// // Câu lệnh điều kiện if-else
// // nếu thỏa mãn điều kiện thì vào trong if, còn sai đk thì vào else
if(score>8){
    console.log("Hoc luc gioi");
    heading.innerHTML = "Hoc luc gioi";
} else{
    console.log(" khong du tuoi");
    heading.innerHTML = "khong du tuoi";
}
// // Câu lệnh có nhiều điều kiện khác nhau
// nhập vào điểm trung bình của học sinh A và xếp loại học lực theo tiêu chí sau
//nếu điểm tb bé hơn 5 thì học lực yếu
//nếu dtb lớn hơn 5 và bé hơn hoặc bằng 6.4
// nếu đtb lớn hơn hoặc bằng 6.5, <=7.9 là khá
// nếu đtb lớn hơn hoặc bằng 8, <=9 là giỏi
// nếu đtb lớn hơn 9 đến 10 ,  xuất sắc.
// nếu điểm bé hơn 0 hoặc lớn hơn 10
// if (score < 0 || score > 10) {
//   console.log("diem nhap sai yeu cau nhap lai");
// } else {
//   if (score < 5) {
//     console.log("hoc luc yeu");
//   } else if (score >= 5 && score <= 6.4) {
//     console.log("Hoc luc trung binh");
//   } else if (score > 6.4 && score <= 7.9) {
//     console.log("hoc luc kha");
//   } else if (score >= 8 && score < 9) {
//     console.log("hoc luc gioi");
//   } else {
//     console.log("hoc luc xuat sac");
//   }
// }

//  xác định năm nhuận
// let year = 2000 ;
// if( year %4===0){

//     if(year%100===0){
//         if(year%400===0){
//             console.log("nam nhuan");
//         }else{
//             console.log("nam khong nhuan");
//         }

//     }else{
//         console.log("nam nhuan");
//     }

// }else{
//     console.log("nam khong nhuan");
// }

// let flag = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 );

// if (flag) {
//     console.log("nam nhuan");
// }else{
//     console.log("nam khong nhuan");
// }

let gender = 1;
if (gender === 0) {
  console.log("gioi tinh nam");
} else {
  console.log("gioi tinh nu");
}

// toán tử 3 ngôi
// cú pháp: (điều kiện) ? (giá trị đúng):( giá trị sai)
//  let result = (gender===0) ? "Nam":"Nữ";
//  console.log("result: ", result);

let result = gender === 0 ? "Nam" : gender === 1 ? "Nữ" : "other";
console.log("result: ", result);
// cấu trúc điều khiển swich-case
// trường hợp
// cú pháp
//  switch (key) {
//     case value:

//         break;

//     default:
//         break;
//  }

//yêu cầu người dùng nhập vào lựa chọn +,-,*,/
let key = "*";
switch (key) {
  case "+":
    console.log("Đây là phép cộng");
    break;
  case "-":
    console.log("Đây là phép trừ");
    break;

  case "*":
    console.log("Đây là phép nhân");
    break;
  case "/":
    console.log("Đây là phép chia");
    break;
  default:
    break;
}

console.log(Math.random());//
console.log(Math.abs(-9));//
console.log(Math.pow(2,5));//
console.log(Math.ceil(1.6)); // làm tròn trên
console.log(Math.floor(1.6)); // làm tròn dưới
console.log(Math.round(1.9)); // phần thập phân >= 5 làm tròn lên
console.log(Math.sqrt(2)); // căn bậc 2
console.log(Math.PI); // số pi