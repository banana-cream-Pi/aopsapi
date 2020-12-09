const puppeteer = require('puppeteer');

async function userID(user){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    }).catch();
    const page = await browser.newPage().catch();

    const url = `https://artofproblemsolving.com/community/user/${user}`;
    
    await page.goto(url).catch();
    await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2) > a').catch(err =>{if(err){console.log(`this user probablly does not exsist`);return}});;
    
    let href = await page.$eval("#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2) > a", (elm) => elm.href);
    href = href.replace(/\D/g,'');
    href = parseInt(href);
    browser.close().catch();
    return(href);
}
module.exports = {userID}