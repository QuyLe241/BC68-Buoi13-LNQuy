
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


