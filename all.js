const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submitBtn =document.getElementById('submitBtn');
const resData = document.getElementById('data');

submitBtn.addEventListener('click', function(){
  const myFormData = new FormData();
  const url = 'https://eid-backend.townway.com.tw/accounts/signin';
  
  myFormData.append('email', emailInput.value);
  myFormData.append('password', passwordInput.value);

  if(emailInput.value === '' || passwordInput.value === ''){
    alert('Email 或密碼欄位不得為空!')
    return;
  }
  // axios 寫法
  // axios.post('https://eid-backend.townway.com.tw/accounts/signin', myFormData)
  // .then(function(res){
  //   console.log(res.data);
  //   alert(`${res.data.username}您好，您已登入成功！`);
  //   emailInput.value = '';
  //   passwordInput.value = '';
  //   renderData(res);
  // })
  // .catch(function(err){
  //   console.log(err);
  //   alert('登入失敗，請輸入正確的 Email 或密碼！')
  // });
  signIn(url, myFormData);
});

// async 寫法
async function signIn(url, data) {
  try {
    const res = await axios.post(url, data);
    console.log(res);
    alert(`${res.data.username}您好，您已登入成功！`);
    emailInput.value = '';
    passwordInput.value = '';
    renderData(res);
  } catch (error) {
    console.error(error);
    alert('登入失敗，請輸入正確的 Email 或密碼！')
  }
};

function renderData(receiveData){
  const prettyString = JSON.stringify(receiveData.data, null, 2)
  resData.textContent = prettyString;
};