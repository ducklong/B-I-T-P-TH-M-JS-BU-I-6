document.getElementById("print_snt").onclick = function () {
  function kiem_tra_snt(n) {
    var check = true;

    if (n < 2) {
      check = false;
    } else if (n == 2) {
      check = true;
    } else if (n % 2 == 0) {
      check = false;
    } else {
      for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
          check = false;
          break;
        }
      }
    }

    return check;
  }

  var number = document.getElementById("number").value * 1;
  var stn = "";
  for (var i = 1; i <= number; i++) {
    if (kiem_tra_snt(i)) {
      stn += i + ", ";
    }
  }
  document.getElementById("result").innerHTML =
    "Các số nguyên tố bé hơn hoặc bằng số đã nhập là: " + "</br>" + stn;
};
