const app = "I don't do much.";

const token = '4fbfc54d5ee7da0f5b0b9e78d28bd5699404f403'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authoriation: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
