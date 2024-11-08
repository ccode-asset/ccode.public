/**
 * 
 */
function showSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}

function hideSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}

//window.onscroll = function() {stickyMenu()};

var navbar = document.getElementsByName("navbar");
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

			
			