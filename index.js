let inpute = document.getElementById("button");

inpute.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

let counters = document.querySelectorAll("span");

counters.forEach((counter) => {
  let updateCounte = () => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    let inc = (target * 3) / target;

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCounte, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCounte();
});
