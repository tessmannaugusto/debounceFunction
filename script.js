//arrow function with logic to filter users from an API and store in a const.
const filteredUsers = async(name)=>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
  .then(res=> res.json())

//debounce function that receives three arguments: 1st is the function to be debounced, 2nd is how long
//it has to wait to run again and 3rd is a constant automatic initialization.
function debounceEvent(fn, wait = 1000, time){
  return function(){
    clearTimeout(time);

    time = setTimeout(()=>{
      fn.apply(this, arguments)
    }, wait)
  }
}

//in this example, this is the function that should run every X seconds.
function handleKeyUp(event){
 filteredUsers(event.target.value)
 .then(users=> console.log(users.map(user=> user.name)))
}

document.querySelector('input')
.addEventListener('keyup',debounceEvent(handleKeyUp, 500));
