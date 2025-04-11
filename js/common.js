document.addEventListener("DOMContentLoaded", function () {
	const dropdowns = document.querySelectorAll('.dropdown');
  
	dropdowns.forEach(dropdown => {
	  dropdown.addEventListener('show.bs.dropdown', function () {
		const menu = this.querySelector('.dropdown-menu');
  
		// Reset any previous custom styles
		menu.style.left = '';
		menu.style.right = '';
		menu.classList.remove('dropdown-menu-end');
  
		// Wait for the menu to be rendered (next tick)
		setTimeout(() => {
		  const rect = menu.getBoundingClientRect();
  
		  const overflowRight = rect.right > window.innerWidth;
		  const overflowLeft = rect.left < 0;
  
		  if (overflowRight) {
			// Shift it left by the overflow amount
			const shift = rect.right - window.innerWidth + 10; // +10 for spacing
			menu.style.left = `-${shift}px`;
		  }
  
		  if (overflowLeft) {
			// If it goes off the left side, force it to align right
			menu.classList.add('dropdown-menu-end');
			menu.style.left = '';
		  }
		}, 0);
	  });
	});
  });
  