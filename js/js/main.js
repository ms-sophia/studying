// * REGEX in Javacript

document.getElementById("phoneNum").addEventListener("input", (event) => {
  const regex = /^\(?(d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat");

  const phone = input.nodeValue;

  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("phoneNum");
  const regex = /[()-. ]/g;
  // eliminating the numbers we don't using regex
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});
