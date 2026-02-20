// const BVN = 9909009090890;
// let score = 989;
// let name = 'Kelly';
// const point = 0.8;
// let isInclass = true;

// const students = {
// 	BVN: 9909009090890,
// 	name: 'Kelly',
// 	point: 0.8,
// 	score: 989,
// 	isInclass: true,
// };

// const foods = ['rice', 'beans', 'fufu', 'eBA', 'EWA'];

// foods.forEach(function (food) {
// 	console.log(food);
// });
// let x = 4;
// let y = 10;

// let sum = x + y;
// console.log(sum);

// // NEXT CLASS CONDIOTMALS
// let age = 17;

// if (age > 18) {
// 	//
// 	console.log('Yoi are welcome');
// } else if (age > 50) {
// 	//
// 	console.log('Yoi are too old');
// } else {
// 	console.log('Yoi are a small boy');
// }

// for (let i = 0; i <= 100; i++) {
// 	console.log(foods[i]);
// }

// //for of loop for in loop

// for (let x of foods) {
// 	console.log('========>', x);
// }
// const films = {
// 	name: 'Wolf',
// 	genry: 'Action',
// 	year: 2003,
// };
// for (let x in foods) {
// 	console.log('<========>', foods[x]);
// }
// for (let x in films) {
// 	console.log('<========>>>>', x, ':', films[x]);
// }

// greet('Mike');
// function greet(username) {
// 	alert('Hello wel;come' + username);
// }
// greet('Mike');

// // arrow dunction, anonymous function
// function Sum(x, y) {
// 	return x + y;
// }

// const gree2 = (username) => {
// 	alert('Hello wel;come' + username);
// };

// gree2('Echem');

// const sum2 = (x, y) => x + y;

const dockIcon = document.getElementById('lefty');
console.log((dockIcon.style.backgroundColor = 'red'));
const avatar = document.querySelector('.avatar');
const action = document.querySelector('.action');

const sidebar = document.querySelector('.di1');
const card = document.querySelector('.new-card');
const newsec = document.querySelector('.newsec');
newsec.innerHTML = 'Loading..';
console.log(avatar);

// NEXT CLASS EVENTRS

// avatar.onclick = function () {
// 	/// write code
// };

avatar.addEventListener('click', function () {
	action.classList.toggle('openAction');
});

dockIcon.addEventListener('click', function () {
	sidebar.classList.toggle('show');
});

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// fetch(baseUrl, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: 'Bearer nnfkljdlgjnlfjdklgjklgnklnknknjk',
// 	},
// 	body: JSON.stringify({}),
// });

let elem = '';
// fetch(baseUrl)
// 	.then(function (res) {
// 		return res.json();
// 	})
// 	.then(function (datas) {
// 		datas.forEach(function (data) {
// 			console.log(data);
// 			elem += `
//                 <div class="new-card">
// 						<h3>${data.title}</h3>
//                         <p>${data.body}{</p>
// 						<a href="#">Read more</a>
// 				</div>

//             `;
// 		});
// 		newsec.innerHTML = elem;
// 	});

async function getNews() {
	try {
		const res = await fetch(baseUrl);
		const datas = await res.json();

		datas.forEach(function (data) {
			console.log(data);
			elem += `
                <div class="new-card">
						<h3>${data.title}</h3>
                        <p>${data.body}{</p>
						<a href="#">Read more</a>
				</div>
            
            `;
		});
		newsec.innerHTML = elem;
	} catch (error) {
		newsec.innerHTML = 'News not found';
	}
}
getNews();
