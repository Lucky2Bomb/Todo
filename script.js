var score = 0;

function addNewTask() {

	let main_input = document.getElementById("main_input");

	if (main_input.value != "") {
		// let li = document.createElement("li");
		let lGroup = document.getElementById("listGroup");
		// li.innerHTML = main_input.value;
		lGroup.appendChild(newTask());
		main_input.value = "";
	}
	event.preventDefault();
}

function newTask() {
	let li = document.createElement("li");
	let input = newInput();
	let span = newSpan();
	let a = newA();

	li.appendChild(input);
	li.appendChild(span);
	li.appendChild(a);

	return li;
}

function newInput() {
	let input = document.createElement("input");
	input.type = "checkbox";
	input.name = "task";
	input.className = "taskItem";
	input.onclick = inputCheckBox_click;

	input.addEventListener("click",checkBox_click);

	return input;
}

function newSpan() {
	let span = document.createElement("span");
	let main_input = document.getElementById("main_input");
	span.innerHTML = " " + main_input.value;
	return span;
}

function newA() {
	let a = document.createElement("a");
	a.href = "#";
	a.innerHTML = "×";
	a.onclick = aClose_click;
	a.className = "aClose";
	return a;
}

function aClose_click() {
	event.target.parentNode.remove();
}

function checkBox_click() {
	countCompletedTaskItem();
}

function countCompletedTaskItem() {
	let items = document.getElementsByClassName("taskItem");
	let spanScore = document.getElementById("score");

	// for(var i = 0; i < items.length; i++ )

	score = 0;
	for(let i = 0; i < items.length; i++) {
		if(items[i].checked)
			score++;
	}
	spanScore.innerHTML = score;
}

function inputCheckBox_click() {
	var inputActive = document.getElementById("inputActive");
	var inputCompleted = document.getElementById("inputCompleted");

	if(inputActive.checked)
		inputActive_click();
	if(inputCompleted.checked)
		inputCompleted_click();
}

function inputActive_click() {
	AllVisible();
	DisabledVisible(true);
}

function inputCompleted_click() {
	AllVisible();
	DisabledVisible(false);
}

function inputAll_click() {
	AllVisible();
}

function a_click() {
	DeleteCompleted();
}

function DisabledVisible(bool) {
	let items = document.getElementsByClassName("taskItem");

	for(let i = 0; i < items.length; i++) {
		if(bool == items[i].checked) {
			items[i].parentNode.hidden = true;
		}
	}
}

function AllVisible() {
	let items = document.getElementsByClassName("taskItem");

	for(let i = 0; i < items.length; i++) {
		items[i].parentNode.hidden = false;
	}
}

function DeleteCompleted() {
	let itms = document.getElementsByClassName("taskItem");

	for(let i = 0; i < itms.length; i++) {
		if(itms[i].checked) {
			itms[i].parentNode.remove();
		}
	}
		

	countCompletedTaskItem();

	for(let i = 0; i < itms.length; i++) {
		if(itms[i].checked) {
			itms[i].parentNode.remove();
		}
	}
}


// function test(element) {

// 	var iAll = document.getElementById("inputAll");
// 	var iActive = document.getElementById("inputActive");
// 	var iCompleted = document.getElementById("inputCompleted");

// 	alert("inputAll = " + iAll.checked);
// 	alert("inputActive = " + iActive.checked);
// 	alert("inputCompleted = " + iCompleted.checked);
// }
