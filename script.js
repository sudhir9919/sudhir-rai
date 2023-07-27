function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("confrm-password").value
    console.log(password,cnfrmPassword);
    let message = document.getElementById("message");


    if (password.length !== 0) {
        if (password === cnfrmPassword) {
          message.textContent = "Passwords match";
          message.style.backgroundColor = "#3ae374";
        } else {
          message.textContent = "Password do not match";
        }
      } else if (password.length === 0 && cnfrmPassword.length === 0) {
        message.textContent = "भोसडी के पासवर्ड खाली है";
      }
    }
