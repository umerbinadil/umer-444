const allBtns = document.querySelector("#buttons");
const input = document.querySelector(".screen");
const clearBtn = document.querySelector(".btn-clear");
const offBtn = document.querySelector(".btn-off");
const equalBtn = document.querySelector(".btn-equal");

//console.log(allBtns);
//console.log(input);
//console.log(clearBtn);
allBtns.addEventListener("click", function(event){
    event.preventDefault();

    const currentelement = event.target;
    //console.log(currentelement, 'element selected');
   if(currentelement.classList.contains("btn")){
     const elementattr = currentelement.getAttribute('data-num');
    // console.log(elementattr, 'element selected');
    input.value += elementattr;
   };
})


clearBtn.addEventListener("click", function(event){
  event.preventDefault();
  input.value = "0"
})

offBtn.addEventListener("click", function(event){
  event.preventDefault();
  input.value = ""
});

equalBtn.addEventListener("click", function(event){
  event.preventDefault();
  input.value = eval(input.value);
});

input.addEventListener("input", function(e){
    e.preventDefault();
    const currentElement = e.target;
    if (testOnlyLetters(input.value)){
      currentElement.value = ""
    };
});

function testOnlyLetters(string = ""){
  return /[a-zA-Z]+$/.test(string);
};