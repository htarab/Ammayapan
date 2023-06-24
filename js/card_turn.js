// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

function change_selected(n = 0)
{
  button = document.getElementsByClassName("button");
  button[n].classList.add("selected");
  button[n].classList.remove("not_selected");
  
  for (i = 0; i < 2; i++) {
    if(i != n)
    {
      button[i].classList.remove("selected");
		  button[i].classList.add("not_selected");
    }
	}
  
  button[n].classList.add("selected");
  button[n].classList.remove("not_selected");
}

(() => {
	change_selected();
})();