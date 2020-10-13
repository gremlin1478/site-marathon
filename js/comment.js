let commentForm = document.querySelector('.comment');
let commentField = document.querySelector('.comment-text');
let submitButton = document.querySelector('.comment-btn');



commentField.oninput = function () {
  

  if (commentField.value.length > 140) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};
