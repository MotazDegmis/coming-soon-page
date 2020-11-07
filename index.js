const email = document.getElementById("email")
const submit = document.getElementById("submit")
const form = document.getElementById("form")


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});



function checkInputs(){
  const emailValue = email.value.trim();

  if(emailValue === '') {
		setErrorFor();
	} else if (!isEmail(emailValue)) {
    setErrorFor();
    return
	} else {
		setSuccessFor();
  }
  
}


function setErrorFor() {
  
  form.classList.add('error');
}


function setSuccessFor(){
  form.classList.remove('error');
  document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}