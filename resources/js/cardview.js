const popupViews = document.querySelectorAll('.popup-view');
const popupBtns = document.querySelectorAll('.popup-btn');
const closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
const popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});