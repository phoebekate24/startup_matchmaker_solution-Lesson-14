$(document).ready(start);

function start() {
  $(".mobile-menu-button").click(dropDownMenu);
}

function dropDownMenu(e){
  e.preventDefault();
  $("#drop-menu").toggleClass('active');
}
