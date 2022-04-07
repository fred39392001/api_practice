
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener("click", processFormData);

// function processFormData(){
//   const emailValue = document.getElementById('emailInput').value;
//   const passwordValue = document.getElementById('passwordInput').value;
//   alert(`email:${emailValue}password:${passwordValue}`);
// };

const resData = document.getElementById('data')

const myFormData = new FormData();
myFormData.append('email', 'fred39392001@gmail.com');
myFormData.append('password', 'Born1983Abow0827');
axios.post('https://eid-backend.townway.com.tw/accounts/signin', myFormData)
.then(function(res){
  console.log(res.data);
  resData.textContent = res.data.token;
})
.catch(function(err){
  console.log(err);
});
