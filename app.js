//set a variable for the cat picture and the click text
const clickText = $('#score');
const catPic1 = $('#cat1-picture');
let clicks = 0;

catPic1.click(function(){
  clicks++;
  updateClickText();
  console.log(clicks);
});

function updateClickText(){
  let clickString = "You have clicked the cat <strong>" + clicks + "</strong> times!!";
  clickText.html(clickString);
}
