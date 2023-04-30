const swap = () => {
  let txt = document.getElementById("swap1").value;
  document.getElementById("swap1").value = document.getElementById("swap2");
  document.getElementById("swap2").value = txt;
};
