const tasklist = document.querySelector('#task-list-input');

console.log(tasklist);

tasklist.addEventListner("submit", function(event){
    event.preventDefault();
});