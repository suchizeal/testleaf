import {test,expect,chromium} from '@playwright/test'


// hello(hi);

// function hello(callback) {
//     setTimeout(() => {
//         console.log("Hello");
//         callback();
//     }, 3000);
// }
// function hi(data) {
//     console.log("Hi");
// }


// function isPositive(number){

//     if(number<0){
//         return 'negative'
//     }
//     else if (number >0){
//         return 'positive'
//     }
//     else{
//         return 'neutral'
//     }
    
// }
// console.log(isPositive(0))

//Top level  triggers the deprecated warning
// let given = 'Suchitra';
// //let reverse = given.split("").reverse().join('');
// //console.log(reverse);
// let reverse = "";
// for(let index = given.length-1;index >=0;index--){

//     reverse = reverse +given.charAt(index);
// }
// console.log(reverse);

test.only(`Test to launch the browser`, async () => {


    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: "chrome"});


    //Create the browser context
    const browserContext = await browser.newContext();


    //Create a new page
    const page = await browserContext.newPage();


    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");


    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);


    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //console.log(`The title of the page is ${await page.title()}`);
    
    await page.waitForTimeout(5000);


    //Gracefully clearing the resources
    //Close the page
    await page.close();


    //Close the browser context 
    await browserContext.close();


    //Close the browser
    await browser.close();


})


// test(`To launch the browser using firefox`, async () => {


//     const browser = await firefox.launch({headless: false});
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https:login.salesforce.com");
//     await page.waitForTimeout(3000);
// } )


// test.only(`Test to launch the browser using the playwright configurations`, async () => {


//     //Create a browser instance
//     const browser = await chromium.launch();


//     //Create the browser context
//     const browserContext = await browser.newContext();


//     //Create a new page
//     const page = await browserContext.newPage();


//     //Load the url
//     await page.goto("http://leaftaps.com/opentaps/control/main");


//     //Get the url of the page
//     const url = page.url();
//     console.log(`The url of the page is ${url}`);


//     //Get the title of the page
//     const title = await page.title();
//     console.log(`The title of the page is ${title}`);
    
//     //console.log(`The title of the page is ${await page.title()}`);
    
//     await page.waitForTimeout(5000);


//     //Gracefully clearing the resources
//     //Close the page
//     await page.close();


//     //Close the browser context 
//     await browserContext.close();


//     //Close the browser
//     await browser.close();


// })
