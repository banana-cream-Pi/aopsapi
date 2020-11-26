const puppeteer = require('puppeteer');

async function author(thread){
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
}
module.exports = {author}