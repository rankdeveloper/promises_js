// episode 1 : consuming promises

// consume promises 
const GITHUB_API = "https://api.github.com/users/bmizerany";

const user = fetch(GITHUB_API);

console.log(user)
  
user.then(data => {
    console.log(data)
})