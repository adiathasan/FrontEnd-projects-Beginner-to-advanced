const inputs = document.querySelectorAll('input');


const patterns = {
	username: /^[a-z \d]{5,12}$/i,
	password: /^[\w @-]{8,20}$/i,
	email: /^([.a-z\d-_]+)@([a-z\d-]{2,10})\.([a-z-]{2,8})(\.[a-z]{2,8})?$/,
	telephone: /^\d{11}$/,
	slug: /^[a-z\d-]{8,20}$/
};

let valid = (field, regex)=>{
	if(regex.test(field.value)){
		field.className = 'valid';
	}else{
		field.className = 'invalid';
	}
}


inputs.forEach((input)=>{
	input.addEventListener('keyup', (e)=>{
		valid(e.target, patterns[e.target.attributes.name.value]);
	})
})

let btn = document.querySelector('button');

btn.addEventListener('mouseover', (e)=>{
	btn.style.backgroundColor = `rgb(${e.offsetY+100}, ${e.offsetX}, ${e.offsetY})`;
})

const robust = document.querySelector('body');

robust.addEventListener('mouseover', (e)=>{
	console.log(e.offsetY, e.offsetX)
	robust.style.backgroundColor = `rgb(${e.offsetY-100}, ${e.offsetX-100}, ${e.offsetX+1000})`;
})