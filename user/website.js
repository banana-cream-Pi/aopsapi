const puppeteer = require('puppeteer');

async function website(user){
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
}
module.exports = {website}