function turn_card(event)
{
  var cards = document.querySelectorAll('.card');

  [...cards].forEach((card)=>{
    
      card.classList.toggle('is-flipped');
    
  });
  event.preventDefault();
}

function change_mode_selected(n)
{
  button = document.getElementsByClassName("btn_mode");
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

function amt_select(n)
{
  button = document.getElementsByClassName("btn_amount");

  for (i = 0; i < 3; i++) {
    if(i != n)
    {
      button[i].classList.remove("amt_selected");
    }
	}

  button[n].classList.add("amt_selected");
}

(() => {
	change_mode_selected(0);
})();