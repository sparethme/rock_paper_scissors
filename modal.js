// modal
const modal = document.querySelector(".modal");
const modalOpenBtn = document.getElementById("rules");
const modalCloseBtn = document.getElementById("close-modal-btn");

// open modal
function openModal(e) {
  if (e.target == modalOpenBtn) {
    console.log(e.target)
    modal.classList.toggle("d-none")
  }
}
// clear modal
function clearModal(e) {
  if (e.target == modal) { //remember that modal takes up entire window 
    modal.classList.toggle("d-none")
  }
}
// why won't this work in the other clearModal function? 
function clearModalOther(e) {
  if (e.target == modalCloseBtn) {
    displayNoneToggle(modal)
  }
}

// Modal event listener 
modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', clearModalOther);

window.addEventListener('click', clearModal); //click outside of modal