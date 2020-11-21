const puppeteer = require('puppeteer');

let AoPS ={
    thread:{
        title: async function thread(thread){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/c${thread}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#cmty-topic-view-right > div > div.cmty-topic-posts-top.cmty-topic-full-top > div.cmty-topic-first-row > div.cmty-topic-subject');

            let element = await page.$('#cmty-topic-view-right > div > div.cmty-topic-posts-top.cmty-topic-full-top > div.cmty-topic-first-row > div.cmty-topic-subject');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            
            browser.close();
            return(value);
        },
        author: async function thread(thread){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/c${thread}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#cmty-topic-view-left > div.cmty-topics-list > div > div.aops-scroll-inner > div.cmty-topics-list-inner-box.aops-scroll-content > div.cmty-topic-cell.focus-topic > div.cmty-topic-cell-left > div.cmty-topic-cell-second-row > span.cmty-color-main.cmty-topic-cell-username');
            let element = await page.$('#cmty-topic-view-left > div.cmty-topics-list > div > div.aops-scroll-inner > div.cmty-topics-list-inner-box.aops-scroll-content > div.cmty-topic-cell.focus-topic > div.cmty-topic-cell-left > div.cmty-topic-cell-second-row > span.cmty-color-main.cmty-topic-cell-username');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        postNum: async function thread(thread){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/c${thread}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#cmty-topic-view-right > div > div.cmty-topic-posts-outer-wrapper > div > div.aops-scroll-inner > div > div:nth-child(31) > div.cmty-post-wrapper > div > div.cmty-post-middle > div.cmty-post-top-inline.cmty-post-top-data > div.cmty-post-top > a');
            let element = await page.$('#cmty-topic-view-right > div > div.cmty-topic-posts-outer-wrapper > div > div.aops-scroll-inner > div > div:nth-child(31) > div.cmty-post-wrapper > div > div.cmty-post-middle > div.cmty-post-top-inline.cmty-post-top-data > div.cmty-post-top > a');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            value = value.replace(/\D/g,'');
            value = parseInt(value);
            browser.close().catch();
            return(value);
        },
        post: async function post(thread, content, user, pass){
           const browser = await puppeteer.launch({
               headless: false,
               defaultViewport: null
           }).catch();
        
           const page = await browser.newPage().catch();
        
           const url = `https://artofproblemsolving.com/community/c${thread}`;
        
           await page.goto(url).catch();
       
           await page.waitForSelector('#header-login').catch();
        
           await page.click('#header-login').catch();
        
           await page.type('#login-username', user).catch();
           await page.type('#login-password', pass).catch();
           await page.click('#login-stay-logged-in').catch();
           await page.click('#login-button').catch();
           await page.reload().catch();
           await page.waitForSelector('#cmty-topic-view-right > div > div.cmty-topic-posts-top.cmty-topic-full-top > div.cmty-topic-third-row > div.cmty-topic-third-row-right > span.cmty-topic-reply.cmty-icon-w-text.clickable').catch();
           await page.click('#cmty-topic-view-right > div > div.cmty-topic-posts-top.cmty-topic-full-top > div.cmty-topic-third-row > div.cmty-topic-third-row-right > span.cmty-topic-reply.cmty-icon-w-text.clickable').catch();
           await page.type('#cmty-topic-view-right > div > div.cmty-topic-full-bottom > div > div.cmty-posting-environ > div.cmty-posting-box-container > textarea', content).catch();
           await page.click('#cmty-topic-view-right > div > div.cmty-topic-full-bottom > div > div.cmty-posting-environ > div:nth-child(2) > div.cmty-posting-environ-buttons > input.cmty-submit-button.btn.btn-primary').catch();
           console.log(`${user} just posted "${content}" in https://artofproblemsolving.com/community/c${thread}`);
           browser.close().catch();
       }
   },
   user:{
        joined:async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(1) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(1) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        username: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-index-card-heading > div');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-index-card-heading > div');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            
            browser.close().catch();
            return(value);
        },
        userID: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2) > a');
            
            let href = await page.$eval("#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2) > a", (elm) => elm.href);
            href = href.replace(/\D/g,'');
            href = parseInt(href);
            browser.close().catch();
            return(href);
        },
        avatar: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-avatar.cmty-no-phone');
            
            
            const imgs = await page.$$eval('.cmty-user-profile-avatar img[src]', imgs => imgs.map(img => img.getAttribute('src')));
            
            
            browser.close().catch();
            return(imgs);
        },
        status: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(2) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(2) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        goals: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(3) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(3) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        intrests: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(4) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(4) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        website: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(5) > div:nth-child(2) > a');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(5) > div:nth-child(2) > a');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        school: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(6) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(6) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        location: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(7) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(7) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        occupation: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(8) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(8) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
        },
        posts: async function thread(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2)');
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            value = value.replace(/^\s*|\s*$/g,'')
            value = value.replace(' (Click to view posts)','')
            browser.close().catch()
            return(parseInt(value))
        }
    }
}



async function output(){
    let user = "banana_cream_PI"//can also be user ID For example 438336 is banana_cream_PI
    let thread = "810735h1770184"//anything after the 'https://artofproblemsolving.com/community/c'
    console.log(await AoPS.user.username(user));
    console.log(await AoPS.user.status(user));
    console.log(await AoPS.user.goals(user));
    console.log(await AoPS.user.intrests(user));
    console.log(await AoPS.user.website(user));
    console.log(await AoPS.user.school(user));
    console.log(await AoPS.user.location(user));
    console.log(await AoPS.user.occupation(user));
    console.log(await AoPS.user.userID(user));
    console.log(await AoPS.user.posts(user));
    console.log(await AoPS.thread.author(thread));
    console.log(await AoPS.thread.postNum(thread));
    console.log(await AoPS.thread.title(thread));
    console.log(AoPS);
}
output();


