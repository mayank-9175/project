function run() {
    let html_code = document.querySelector(".html_code").value;
    let css_code =
      "<style>" + document.querySelector(".css_code").value + "</style>";
    let js_code = document.querySelector(".js_code").value;
    let frame = document.querySelector(".frame");
    frame.contentDocument.body.innerHTML = html_code + css_code;
    frame.contentWindow.eval(js_code);
  }
  document.querySelector(".html_code").addEventListener("keyup", run);
  document.querySelector(".css_code").addEventListener("keyup", run);
  document.querySelector(".js_code").addEventListener("keyup", run);
  setInterval(() => {
    let h2 = document.getElementById("h2");
    let arry = [
      "DarkRed",
      "DarkBlue",
      "DarkOrange",
      "HotPink",
      "RoyalBlue",
      "Yellow",
      "SpringGreen",
      "Teal",
    ];
    let random = Math.floor(Math.random() * arry.length);
    let final = arry[random];
    h2.style.color = final;
  }, 300);