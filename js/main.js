document.addEventListener('DOMContentLoaded', ()=>{
  const signIn = document.querySelector('.signin');
  const modalDisplay = document.querySelector('.modal');
  const modalClose = document.querySelector('.close');

  signIn.addEventListener('click', ()=>{
    modalDisplay.style.display = 'block';
  });
  modalClose.addEventListener('click', ()=>{
    modalDisplay.style.display = 'none';
  });

  const userN = document.querySelector('#user');
  const passW = document.querySelector('#pass');
  userN.classList.add('error');
  passW.classList.add('error');

  userN.addEventListener('click', ()=>{
    userN.classList.remove('error');
  });
  passW.addEventListener('click', ()=>{
    passW.classList.remove('error');
  });

  // const errorText = document.querySelectorAll('.error');
  // for (var i = 0; i < errorText.length; i++) {
  //   errorText[i].addEventListener('click', ()=>{
  //     errorText[i].classList.remove('.error');
  //   });
  // }
  // ^didn't work

  modalDisplay.addEventListener('click', ()=>{
    modalDisplay.style.display = 'none';
  });
});
