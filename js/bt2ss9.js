let month = +prompt(" mời bạn nhập tháng");
let year = +prompt(" mời bạn nhập năm");
let flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("số ngày của tháng" + month + "là 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("số ngày của tháng" + month + "là 30 ngày");
    break;
  case 2:
    if (flag) {
      alert("Năm" + year + " nhuận tháng 2 có 29 ngày");
    } else {
      alert("năm" + year + "không nhuận tháng 2 có 28 ngày");
    }
  default:
    break;
}
