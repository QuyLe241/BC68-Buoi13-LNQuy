// //      Test Js
// // console.log("hello");
// // console.warn("warn");
// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault()
// }, !1),
// document.onkeydown = function(e) {
//     return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0
// }
// ,
// document.getElementById("btnSalary").onclick = function() {
//     var e = document.getElementById("inputNum1").value * document.getElementById("inputNum2").value;
//     document.getElementById("txtSalary").innerHTML = e
// }
// ,
// document.getElementById("btnTB").onclick = function() {
//     let e = document.querySelectorAll(".bai2 .form-control")
//       , t = 0;
//     for (let n = 0; n < e.length; n++)
//         t += Number(e[n].value);
//     document.getElementById("txtTB").innerHTML = t / e.length
// } 
// ,
// document.getElementById("btnCurrency").onclick = function() {
//     var e = document.getElementById("usd").value
//       , t = new Intl.NumberFormat("vn-VN").format(23500 * e);
//     document.getElementById("txtCurrency").innerHTML = t
// }
// ,
// document.getElementById("btnCal").onclick = function() {
//     var e = document.getElementById("width").value
//       , t = document.getElementById("height").value
//       , n = e * t
//       , u = 2 * (Number(e) + Number(t));
//     document.getElementById("txtCal").innerHTML = `\n        Diện tích: ${n};\n        Chu vi: ${u}\n    `
// }
// ,
// document.getElementById("btnSum").onclick = function() {
//     var e = document.getElementById("number").value
//       , t = Math.floor(e / 10)
//       , n = e % 10;
//     document.getElementById("txtSum").innerHTML = t + n
// };


//    Bài 1
document.getElementById("btnSalary").onclick = function(){
  let value1 = document.getElementById("inputNum1").value*1;
  let value2 = document.getElementById("inputNum2").value*1;
  let tongLuong = value1 * value2;
  document.getElementById("txtSalary").innerHTML = `Tổng lương: ${tongLuong}`;
  console.log("Tông lương:",tongLuong);
  // console.log(value1);
};

//    Bài 2
document.getElementById("btnTB").onclick = function(){
  let a = document.getElementById("num1").value*1;
  let b = document.getElementById("num2").value*1;
  let c = document.getElementById("num3").value*1;
  let d = document.getElementById("num4").value*1;
  let e = document.getElementById("num5").value*1;
  let nTB = (a + b + c + d + e) / 5;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(nTB);
  document.getElementById("txtTB").innerHTML = nTB;
};

//    Bài 3
document.getElementById("btnCurrency").onclick = function(){
  let usd = document.getElementById("usd").value*1;
  let vnd = (usd * 23500).toLocaleString("vi", {style: "currency", currency: "VND"})
  document.getElementById("txtCurrency").innerHTML = vnd;
};

//    Bài 4
document.getElementById("btnCal").onclick = function() {
  let dai = document.getElementById("width").value*1;
  let rong = document.getElementById("height").value*1;
  let dienTich = dai * rong;
  let chuVi = (dai + rong) * 2;
  document.getElementById("txtCal").innerHTML = `Diện tích: ${dienTich} - Chu vi: ${chuVi}`;
};

//    Bài 5
document.getElementById("btnSum").onclick = function() {
  let num =  document.getElementById("number").value*1;
  if (num >= -99 && num <= 99){
    let donvi = num % 10;
    let chuc = (num - donvi) / 10;
    let tong = donvi + chuc;
    document.getElementById("txtSum").innerHTML = `Tổng: ${tong}`;
  } else {
    alert("Nhập số có 2 chữ số");
    return null;
  }
};


