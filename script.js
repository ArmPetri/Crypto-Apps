let itemPosition = 0;
const items = document.querySelectorAll('.each-app');
const totalItems = items.length;

document.querySelector('.arrow_left').addEventListener("click", function(){
  nextApp();
});

document.querySelector('.arrow_right').addEventListener("click", function(){
  previousApp();
});

function updateAppPosition() {
  for (let item of items) {
    item.classList.remove('each-app-visible');
    item.classList.add('each-app-hidden');
  }

  items[itemPosition].classList.add('each-app-visible');
}

function nextApp() {
  if(itemPosition === totalItems -1) {
    itemPosition = 0;
  } else {
    itemPosition++;
  }

  updateAppPosition();
}

function previousApp() {
  if(itemPosition === 0) {
    itemPosition = totalItems -1;
  } else {
    itemPosition--;
  }

  updateAppPosition();
}

const appBtns = document.querySelectorAll('#btn');

console.log(appBtns);
let arrie = [];

for(let btn of appBtns) {

  arrie.push(btn.name);
  btn.addEventListener('click', function(){
    console.log(arrie.indexOf(btn.name));
    itemPosition = arrie.indexOf(btn.name);
    updateAppPosition();
  })
}