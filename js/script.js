

let openModal = document.querySelector('.hamb')
let Modal = document.querySelector('nav')

let bool = true;

openModal.addEventListener('click', ()=>{
  
  if(bool){
    bool = false
    Modal.style.display = 'flex'
    openModal.src = 'images/icon-close.svg'
    
  }else{
    bool = true
    Modal.style.display = 'none'
    openModal.src = 'images/icon-hamburger.svg'
  
  }
})

