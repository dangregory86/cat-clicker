//set a variable for the cat picture and the click text
const catPic = $('#cat-picture');
const catName = $("#cat-name");
const clickText = $('#score');

//instantiate all 5 cats
const cats = [];
const bobCat = new Cat('Bob', 'pics/cat1.jpeg');
cats.push(bobCat);
const steveCat = new Cat('Steve', 'pics/cat2.jpg');
cats.push(steveCat);
const JeffCat = new Cat('Jeff', 'pics/cat3.jpg');
cats.push(JeffCat);
const JeremyCat = new Cat('Jeremy', 'pics/cat4.jpg');
cats.push(JeremyCat);
const HenryCat = new Cat('Henry', 'pics/cat5.jpg');
cats.push(HenryCat);
/*
* @description. a function to add the cat names to the cat selection menu
*/
function addCats() {
  let elem = document.createElement('div');
  for (let x = 0; x < cats.length; x++) {
    let p = document.createElement('p');
    let nm = document.createTextNode(cats[x].name);
    const thisCat = cats[x];
    p.setAttribute('class', 'top-bottom-border');
    p.appendChild(nm);
    elem.appendChild(p);
    p.addEventListener('click', (function(catCopy) {
        return function() {
            updatePicture(catCopy);
        };
    })(thisCat));
  }
  $('#cat-list-title').after(elem);
}

/* @description. a function to change the cat picture name and number of clicks
* @Params. {Object cat}.
*/
function updatePicture(cat){
  catName.text(cat.name);
  catPic.attr('src', cat.image);
  catPic.attr('alt', cat.name + "the cat");
  updateClickText(cat);
}

catPic.click(function(event) {
  let name = catName.text();
  for(let cat of cats){
    if(cat.name === name){
      updateClicks(cat);
    }
  }
});
//the function to check for the cat being clicked on
function updateClicks(cat) {
  cat.clicks++;
  updateClickText(cat);
}

function updateClickText(cat) {
  let clickString = "You have clicked " + cat.name +" <strong>" + cat.clicks + "</strong> times!!";
  clickText.html(clickString);
}

addCats();
updatePicture(cats[0]);
