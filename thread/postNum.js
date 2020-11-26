const puppeteer = require('puppeteer');

async function postNum(thread){
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
}
module.exports = {postNum}