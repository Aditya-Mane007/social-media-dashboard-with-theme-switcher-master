// --White: hsl(0, 0%, 100%); /*(BG)*/
// --VeryPaleBlue: hsl(225, 100%, 98%); /*(Top BG Pattern)*/
// --LightGrayishBlue: hsl(227, 47%, 96%); /*(Card BG)*/
// --DarkGrayishBlue: hsl(228, 12%, 44%); /*(Text)*/
// --VeryDarkBlue: hsl(230, 17%, 14%); /*(Text)*/

const mode_change = document.querySelector('#change');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const socials = document.querySelectorAll('.social');
const box1 = document.querySelectorAll('.box1');
const box2 = document.querySelectorAll('.box2');
const total_followers = document.querySelector('.total-followers');
const mode = document.querySelector('.mode');

mode_change.addEventListener(
	'click',
	(IsCheck = () => {
		if (mode_change.checked) {
			container.style.color = 'white';

			total_followers.style.color = ' hsl(228, 34%, 66%)';

			mode.style.color = ' hsl(228, 34%, 66%)';

			mode.innerHTML = 'Dark Mode';

			container.style.backgroundColor = 'hsl(232, 19%, 15%)';

			navbar.style.backgroundColor = 'hsl(232, 19%, 15%)';

			socials.forEach((social) => {
				social.style.backgroundColor = 'hsl(228, 28%, 20%)';
			});

			box1.forEach((box) => {
				box.style.backgroundColor = 'hsl(228, 28%, 20%)';
			});
			box2.forEach((box) => {
				box.style.backgroundColor = 'hsl(228, 28%, 20%)';
			});
		} else {
			container.style.color = 'black';

			total_followers.style.color = ' hsl(230, 17%, 14%)';

			mode.style.color = ' hsl(230, 17%, 14%)';

			mode.innerHTML = 'Light Mode';

			container.style.backgroundColor = 'hsl(0, 0%, 100%)';

			navbar.style.backgroundColor = 'hsl(225, 100%, 98%)';

			socials.forEach((social) => {
				social.style.backgroundColor = 'hsl(227, 47%, 96%)';
			});

			box1.forEach((box) => {
				box.style.backgroundColor = 'hsl(227, 47%, 96%)';
			});
			box2.forEach((box) => {
				box.style.backgroundColor = 'hsl(227, 47%, 96%)';
			});
		}
	})
);
