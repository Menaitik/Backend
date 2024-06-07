require('dotenv').config()
const express = require('express') 
const app = express() // 
const port = 4000

const github = {
    "login": "Menaitik",
    "id": 95468089,
    "node_id": "U_kgDOBbC6OQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/95468089?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Menaitik",
    "html_url": "https://github.com/Menaitik",
    "followers_url": "https://api.github.com/users/Menaitik/followers",
    "following_url": "https://api.github.com/users/Menaitik/following{/other_user}",
    "gists_url": "https://api.github.com/users/Menaitik/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Menaitik/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Menaitik/subscriptions",
    "organizations_url": "https://api.github.com/users/Menaitik/orgs",
    "repos_url": "https://api.github.com/users/Menaitik/repos",
    "events_url": "https://api.github.com/users/Menaitik/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Menaitik/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Naitik Mehta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2021-12-03T07:43:30Z",
    "updated_at": "2024-06-07T11:53:56Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send("Login Page")
})

app.get('/github',(req,res)=>{
    res.json(github)
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})