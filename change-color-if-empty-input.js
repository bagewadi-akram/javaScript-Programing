const validate = (val) => {
  if (val.length > 0)
    document.getElementById("t3").style.borderColor = "silver";
};

const validate2 = () => {
  let txt = document.getElementById("t1").value;
  if (txt.length == 0) document.getElementById("t3").style.borderColor = "red";
};
