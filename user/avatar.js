const puppeteer = require('puppeteer');
//const browser = require('aopsapi/browservar');

async function avatar(user){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    }).catch();
    const page = await browser.newPage().catch();

    const url = `https://artofproblemsolving.com/community/user/${user}`;
    
    await page.goto(url).catch();
    await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-avatar.cmty-no-phone').catch(err =>{if(err){throw new Error('Invalid User');}});
    
    
    const imgs = await page.$$eval('.cmty-user-profile-avatar img[src]', imgs => imgs.map(img => img.getAttribute('src')));
    
    
    browser.close().catch();
    return(imgs);
}
module.exports = {avatar}