//set a variable for the cat picture and the click text

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

console.log(cats);


const clickText = $('#score');
const bobCatPic = $('#cat1-picture');
const bobCatName = $("#cat-name-1");
const steveCatPic = $('#cat2-picture');
const steveCatName = $("#cat-name-2");
let bobClicks = 0;
let steveClicks = 0;

//first set the cat names above the pictures
bobCatName.text(bobCatPic.attr('alt'));
steveCatName.text(steveCatPic.attr('alt'));

//the function to check for bob being clicked on
bobCatPic.click(function(){
  bobClicks++;
  updateClickText();
  console.log(bobClicks);
});

//the function to check for bob being clicked on
steveCatPic.click(function(){
  steveClicks++;
  updateClickText();
  console.log(steveClicks);
});

function updateClickText(){
  let clickString = "You have clicked Bob <strong>" + bobClicks + "</strong> times and Steve <strong>" + steveClicks + "</strong> times!!";
  clickText.html(clickString);
}
