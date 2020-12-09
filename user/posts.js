const puppeteer = require('puppeteer');

async function posts(user){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    }).catch();
    const page = await browser.newPage().catch();

    const url = `https://artofproblemsolving.com/community/user/${user}`;
    
    await page.goto(url).catch();
    await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2)').catch(err => {if(err){throw new Error('invalid user');}});
    let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-activity.cmty-index-card > div.cmty-user-profile-data > div:nth-child(2) > div:nth-child(2)');
    let value = await page.evaluate(el => el.textContent, element);
    
    value = value.replace(/^\s*|\s*$/g,'')
    value = value.replace(' (Click to view posts)','')
    browser.close().catch()
    return(parseInt(value))
}
module.exports = {posts}