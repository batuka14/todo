//define
let ol=document.getElementsByTagName('ol')[0];
let input=document.getElementsByTagName('input')[0];
let addBtn=document.querySelector('.add');
// onclick -> es5
// addEventListener -> es6 -> click,scroll,key...
// function(){} -> ()=>{}
addBtn.addEventListener('click',()=>{
	if(input.value==""){
		alert("Can't be empty");
	}else{
		let li=document.createElement('li');
		let del=document.createElement('button');
		let check=document.createElement('button');
		li.innerText=input.value;
		del.innerHTML="<i class='bi bi-trash3'></i>";
		check.innerHTML="<i class='bi bi-check2-circle'></i>";
		// class ner ogoh -> className, classList
		check.className="check";
		console.log(li);
		ol.append(li);
		li.append(check);
		li.append(del);
		input.value="";
	}
	saveData();
});
ol.addEventListener('click',(e)=>{
	console.log(e.target);
	let target=e.target;
	// parentElement => tuhain tag-iin gadna taliin tag
	let parentEl=target.parentElement;
	let parentel=parentEl.parentElement
	if(target.className=="bi bi-trash3"){
		// .remove() -> tag ustgah
		parentel.remove();
	}else if(target.className=="bi bi-check2-circle"){
		// toggle
		parentel.classList.toggle("checked");
	}
	saveData();
});

// session -> login,register , database 
// localStorage -> web browser / not deleted
// coockie -> tue zuuriih

// setItem() -> save/hadgalna , getItem() -> hadgalsanaa avah
localStorage.setItem('name',"Bat-Uujim");
let get=localStorage.getItem('name');
console.log(get);
function saveData(){
	localStorage.setItem('todo',ol.innerHTML);
}
function getData(){
	ol.innerHTML=localStorage.getItem('todo');
}
getData()