// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

$(window).load(function () {
  $('body').sakura();
});


let elLinputUsername = document.querySelector('#username');

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

elLinputUsername.onkeyup = function () {
  if(isMoreThan4Length(elLinputUsername.value)){
    //성공 메세지가 보여야 함
    elSuccessMessage.classList.remove('hide')

    //실패 메세지가 가려져야 함
    elFailureMessage.classList.add('hide')
  }
  else{
    //성공 메세지가 가려져야 함
    elSuccessMessage.classList.add('hide')

    //실패 메세지가 보여야 함
    elFailureMessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;

}

let elLinputPassword = document.querySelector('#password');
let elLinputRePassword = document.querySelector('#password-retype');

let elMatchMessage = document.querySelector('.mismatch-message');

elLinputRePassword.onkeyup = function () {
  if(!(isMatch(elLinputPassword.value,elLinputRePassword.value))){
    elMatchMessage.classList.remove('hide');
  }
  if(isMatch(elLinputPassword.value,elLinputRePassword.value)){
    elMatchMessage.classList.add('hide');
  }
}



function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === password2){
    return true;
  }else{
    return false;
  }
}



