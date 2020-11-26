const puppeteer = require("puppeteer");
async function title(thread){
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
}

module.exports = {title}