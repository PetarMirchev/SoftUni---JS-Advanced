function toggle() {

    let btn = document.querySelector(".button");
    let divText = document.querySelector("#extra");


//   if (divText.style.display === 'none'){ //#extra {display: none;}
//     divText.style.display = 'block';
//     btn.textContent = 'LESS';
//   } else {
//     divText.style.display = 'none';
//     btn.textContent = 'MORE';
//   }


  // alternative correct solve
  const MORE = 'More';
  const LESS = 'Less';

  // toggle functionality
  // change text of the button
  btn.textContent = btn.textContent === MORE ? LESS : MORE;

  // hide/show the text
  divText.style.display = (
    divText.style.display === 'none' ||
    divText.style.display === ''
        ? 'block'
        : 'none');
}