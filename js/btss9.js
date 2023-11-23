//bt1

let weight = +prompt("mời bạn nhập cân nặng: ");
let height = +prompt("mời bạn nhập chiều cao: ");
let bmi = weight / (height * height);
if (bmi < 18.5) {
  alert("chỉ số bmi của bạn là" + bmi + "gầy");
} else if (bmi < 25) {
  alert("chỉ số bmi của bạn là" + bmi + "bình thường");
} else if (bmi < 30) {
  alert("chỉ số bmi của bạn là" + bmi + "thừa cân tiền béo phì");
} else if (bmi < 35) {
  alert("chỉ số bmi của bạn là" + bmi + "béo phì độ I");
} else if (bmi < 40) {
  alert("chỉ số bmi của bạn là" + bmi + "béo phì độ II");
} else {
  alert("chỉ số bmi của bạn là" + bmi + "béo phì độ III");
}
