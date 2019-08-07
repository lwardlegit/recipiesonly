document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('submitbtn');
  // onClick's logic below:
  btn.addEventListener('click', function() {
      grabRecipe();
    });
})

function grabRecipe(){
  console.log("grabbing recipe");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);

    });
  });



  var allLi = document.getElementsByTagName("li");
  var ul = document.createElement('ul');

  for(var i=0; i< allLi.length; i++){
    ul.appendChild(allLi[i]);
  }
  document.getElementById('ingredients').appendChild(ul);
  console.log(ul);
}
