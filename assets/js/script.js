var navItens = document.querySelectorAll('nav ul li a');

var sections = document.querySelectorAll('section');


function activeSections(item){
	let sec = document.querySelector(item);
	for(let i = 0; i < sections.length; i++){
		sections[i].classList.remove('active');
	}
	sec.classList.add('active');
}

navItens.forEach(item =>{
	let href = item.getAttribute('href');
	console.log(href)
	item.addEventListener('click', ()=>{
		activeSections(href)

		for(let i = 0; i < navItens.length; i++){
		navItens[i].parentNode.classList.remove('active');
		}
		item.parentNode.classList.add('active');
	})
})