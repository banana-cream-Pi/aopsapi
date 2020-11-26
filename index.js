//require puppeteer
const puppeteer = require('puppeteer');

const author = require('./thread/author');
const postNum = require('./thread/postNum');
const title = require('./thread/title');
const avatar = require('./user/avatar');
const goals = require('./user/goals');
const intrests = require('./user/intrests');
const joined = require('./user/joined');
const location = require('./user/location');
const ocupation = require('./user/ocupation');
const posts = require('./user/posts');
const school = require('./user/school');
const status = require('./user/status');
const userID = require('./user/userID');
const username = require('./user/username');
const website = require('./user/website');

//defining class thread
let thread ={
    author: author.author,
    postNum: postNum.postNum, 
    title: title.title 
}
let user = {
    avatar: avatar.avatar,
    goals: goals.goals,
    intrests: intrests.intrests,
    joined: joined.joined,
    location: location.location,
    occupation: ocupation.occupation,
    posts: posts.posts,
    school: school.school,
    status: status.status,
    userID: userID.userID,
    username: username.username,
    website: website.website,   
}


module.exports = {
    thread:thread,
    user: user
}

