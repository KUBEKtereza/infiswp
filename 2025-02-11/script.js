const ul = document.querySelector("ul");

const counterElement = document.querySelector("#counter");
counterElement.addEventListener("click" , generateList);

const deleteElement = document.querySelector("#delete");
deleteElement.addEventListener("click" , deleteList);

let x = 10;
const increase = document.querySelector("#plus")
increase.onclick = function () {
  x++;
};

const minus = document.querySelector("#minus")
minus.onklick = function () {
  x--;
};

/*
const listItems = document.querySelectorAll("li")
console.log(listItems);
const deleteAll = document.querySelector("#clear")
deleteAll.addEventListener("click", function(){
  liRemove;
});
*/
function generateList() {
  for (let i = 1; i <= x; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  }
}

function deleteList() {
  const liRemove = ul.lastElementChild;
  if (liRemove) {
    ul.removeChild(liRemove);
  } else {
    console.log("Hey, es gibt keine Listenelemente mehr!!!");
    alert("Hey, es gibt keine Listenelemente mehr!!!")
  }
}


