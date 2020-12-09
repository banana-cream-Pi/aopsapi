const puppeteer = require('puppeteer');
async function occupation(user){
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            }).catch();
            const page = await browser.newPage().catch();
        
            const url = `https://artofproblemsolving.com/community/user/${user}`;
            
            await page.goto(url).catch();
            await page.waitForSelector('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(8) > div:nth-child(2)').catch(err =>{if(err){throw new Error('User has not set this value or invalid user');}});
            let element = await page.$('#community-all > div > div:nth-child(2) > div.cmty-user-profile-main.cmty-index-card > div.cmty-user-profile-data > div.cmty-user-profile-main-info > div:nth-child(8) > div:nth-child(2)');
            let value = await page.evaluate(el => el.textContent, element);
            
            
            value = value.replace(/^\s*|\s*$/g,'');
            browser.close().catch();
            return(value);
}

module.exports = {occupation}