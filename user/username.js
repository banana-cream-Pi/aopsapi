const puppeteer = require('puppeteer');

async function username(user){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    }).catch();
    const page = await browser.newPage().catch();

    const url = `https://artofproblemsolving.com/community/user/${user}`;
    
    await page.goto(url).catch();
    await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-index-card-heading > div').catch(err =>{if(err){throw new Error('invalid user');}});;
    let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-index-card-heading > div');
    let value = await page.evaluate(el => el.textContent, element);
    
    
    value = value.replace(/^\s*|\s*$/g,'');
    
    browser.close().catch();
    return(value);
}
module.exports = {username}
