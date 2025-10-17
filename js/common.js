const PASSWORD_PUZZLE_IMAGES = [
	"img/PasswordPuzzle/PasswordPuzzleMainMenu.png",
	"img/PasswordPuzzle/PasswordPuzzleDifficulties.jpg",
	"img/PasswordPuzzle/PasswordPuzzleHint1.jpg",
	"img/PasswordPuzzle/PasswordPuzzleHint2.jpg",
	"img/PasswordPuzzle/PasswordPuzzleHardMode.jpg",
	"img/PasswordPuzzle/PasswordPuzzleMediumExample.jpg",
];

const PASSWORD_PUZZLE_LABELS = [
	"Main Menu",
	"Difficulty Menu",
	"",
	"",
	"",
	"",
];

const PASSWORD_PUZZLE_CAPTIONS = [
	"",
	"",
	"",
	"",
	"",
	"",
];

const GRID_GAME_IMAGES = [
	"img/GridGame/GridGameTitleMenu.jpg",
	"img/GridGame/GridGamePlayHover.jpg",
	"img/GridGame/GridGamePlayMenu.jpg",
	"img/GridGame/GridGameMinigameInfo1.jpg",
	"img/GridGame/GridGameMinigameInfo2.jpg",
	"img/GridGame/GridGameMinigameInfo3.jpg",
	"img/GridGame/GridGameMinigameInfo4.jpg",
	"img/GridGame/GridGameMinigameInfo5.jpg",
	"img/GridGame/GridGameGridFlip1.jpg",
	"img/GridGame/GridGameGridFlip2.jpg",
	"img/GridGame/GridGameGridFlip3.jpg",
	"img/GridGame/GridGameGridFlip4.jpg",
	"img/GridGame/GridGameGridMatching1.jpg",
	"img/GridGame/GridGameGridMatching2.jpg",
	"img/GridGame/GridGameGridMatching3.jpg",
	"img/GridGame/GridGameGridMatching4.jpg",
	"img/GridGame/GridGameGridPuzzle1.jpg",
	"img/GridGame/GridGameGridPuzzle2.jpg",
]

// TODO: Add feature to make the text visible on bright images
const GRID_GAME_LABELS = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
];

const GRID_GAME_CAPTIONS = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
];

const LUCKY_UNLUCKY_IMAGES = [
	"img/LuckyUnlucky/LuckyUnlucky1.jpg",
	"img/LuckyUnlucky/LuckyUnlucky2.jpg",
	"img/LuckyUnlucky/LuckyUnlucky3.jpg",
	"img/LuckyUnlucky/LuckyUnluckyCustomDifficulty1.jpg",
	"img/LuckyUnlucky/LuckyUnluckyCustomDifficulty2.jpg",
	"img/LuckyUnlucky/LuckyUnluckyCustomDifficulty3.jpg",
	"img/LuckyUnlucky/LuckyUnlucky4.jpg",
	"img/LuckyUnlucky/LuckyUnlucky5.jpg",
	"img/LuckyUnlucky/LuckyUnlucky6.jpg",
	"img/LuckyUnlucky/LuckyUnlucky7.jpg",
	"img/LuckyUnlucky/LuckyUnlucky8.jpg",
	"img/LuckyUnlucky/LuckyUnlucky9.jpg",
]

const LUCKY_UNLUCKY_LABELS = [
	"Title Screen",
	"",
	"Difficulty Menu",
	"",
	"",
	"Custom Difficulty Values in Game",
	"Easy Difficulty",
	"Easy Difficulty Example",
	"",
	"Hard Difficulty",
	"Hard Difficulty Example",
	"",
];

const LUCKY_UNLUCKY_CAPTIONS = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
];


const POCKET_SOUNDGRID_IMAGES = [
	"img/PocketSoundgrid/SoundgridImage1.jpg",
	"img/PocketSoundgrid/SoundgridImage2.jpg",
	"img/PocketSoundgrid/SoundgridImage3.jpg",
	"img/PocketSoundgrid/SoundgridImage4.jpg",
	"img/PocketSoundgrid/SoundgridImage5.jpg",
	"img/PocketSoundgrid/SoundgridImage6.jpg",
]

const POCKET_SOUNDGRID_LABELS = [
	"Main Display",
	"Button Display",
	"Buttons With Data",
	"Delete Saved Data Prompt 1",
	"Delete Saved Data Prompt 2",
	"Link Mode Example",
];

const POCKET_SOUNDGRID_CAPTIONS = [
	"",
	"",
	"",
	"",
	"",
	"Link mode allows multiple buttons to play one after another once the previous button finishes playing.",
];

const passwordpuzzle = document.getElementById("Password")
const gridgame = document.getElementById("Grid")
const pocketsoundgrid = document.getElementById("Pocket")
const luckyunlucky = document.getElementById("Lucky")

const galleryModal = document.getElementById('galleryModal');
const carouselEl = document.getElementById('galleryCarousel');
const innerEl = document.getElementById('carouselInner');
const indicEl = document.getElementById('carouselIndicators');
const ctrlPrev = document.getElementById('ctrlPrev');
const ctrlNext = document.getElementById('ctrlNext');

passwordpuzzle.addEventListener("click", () => buildCarousel(PASSWORD_PUZZLE_IMAGES, PASSWORD_PUZZLE_LABELS, PASSWORD_PUZZLE_CAPTIONS));
gridgame.addEventListener("click", () => buildCarousel(GRID_GAME_IMAGES, GRID_GAME_LABELS, GRID_GAME_CAPTIONS));
pocketsoundgrid.addEventListener("click", () => buildCarousel(POCKET_SOUNDGRID_IMAGES, POCKET_SOUNDGRID_LABELS, POCKET_SOUNDGRID_CAPTIONS));
luckyunlucky.addEventListener("click", () => buildCarousel(LUCKY_UNLUCKY_IMAGES, LUCKY_UNLUCKY_LABELS, LUCKY_UNLUCKY_CAPTIONS));

function buildCarousel(images, labels, captions) {
	//Remove old slides
	const inst = bootstrap.Carousel.getInstance(carouselEl);
	if (inst) inst.dispose();

	//Rebuild indicators and slides
	innerEl.replaceChildren();
	indicEl.replaceChildren();

	// Create Indicators, Slides, Labels, and Captions
	for (let i = 0; i < images.length; i++) {
		// Indicators
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.setAttribute('data-bs-target', '#galleryCarousel');
		btn.setAttribute('data-bs-slide-to', String(i));
		btn.setAttribute('aria-label', `Slide ${i + 1}`);
		if (i === 0) {
			btn.classList.add('active');
			btn.setAttribute('aria-current', 'true');
		}
		indicEl.appendChild(btn);

		// Slide
		const item = document.createElement('div');
		item.className = `carousel-item${i === 0 ? ' active' : ''}`;

		const img = document.createElement('img');
		img.src = images[i];
		img.alt = `Image ${i + 1}`;
		img.className = 'd-block w-100';

		item.appendChild(img);
		innerEl.appendChild(item);


		// Subitem container
		const subitem = document.createElement('div');
		subitem.className = `carousel-caption d-none d-md-block`;
		item.appendChild(subitem)

		// Label
		const h5 = document.createElement("h5");
		h5.textContent = labels[i];
		subitem.appendChild(h5);

		// Caption
		const p = document.createElement("p");
		p.textContent = captions[i];
		subitem.appendChild(p);

	}

	// Hide controls if only one image
	const single = images.length <= 1;
	ctrlPrev.style.display = single ? 'none' : '';
	ctrlNext.style.display = single ? 'none' : '';

	// Re-initialize the carousel and reset to the first slide
	const newInst = new bootstrap.Carousel(carouselEl, {
		interval: false,
		ride: false,
		touch: true,
		keyboard: true,
		pause: true,
		wrap: true,
	});
	newInst.to(0);
}

// Fixes that annoying bug from the dropdown menu appearing off screen
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
