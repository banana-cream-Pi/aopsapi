const puppeteer = require('puppeteer');

async function userID(user){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    }).catch();
    const page = await browser.newPage().catch();

    const url = `https://artofproblemsolving.com/community/user/${user}`;
    
    await page.goto(url).catch();
    await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-avatar.cmty-no-phone > img').catch(err =>{if(err){throw new Error('invalid user');}});;
    
    var src = await page.evaluate(() => {
        src = document.querySelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-avatar.cmty-no-phone > img').src
        return src
    })
    src = src.replace(/\D/g,'');
    src = src.substring(0, 6)
    src = parseInt(src);
    
    browser.close().catch();
    return(src);
}
module.exports = {userID}
