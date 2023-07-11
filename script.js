try {
  let string = "";
  let btn = document.getElementById("equal-btn");
  const btns = document.querySelectorAll(".btn");
  Array.from(btns).forEach((element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      if (e.target.innerHTML === "C") {
        console.log(e.target);
        string = "";
      } else {
        string = string + e.target.innerHTML;
      }
      document.getElementById("type-bar").value = string;
    });
  });

  btn.addEventListener("click", () => {
    let data;
    try {
      data = document.getElementById("type-bar");
      const text = data.value;
      const res = eval(text);
      data.value = res;
      console.log("hello");
    } catch (error) {
        data.value = "Error";
    }
  });
} catch (err) {
  console.log(err.message);
}
