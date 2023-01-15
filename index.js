// Importing library for WebScraping

import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// Web resources 'https://memegen-link-examples-upleveled.netlify.app/';

// async function to  get the html elements
const getWebUrl = async () => {
  //  try catch block
  try {
    const response = await fetch(
      'https://memegen-link-examples-upleveled.netlify.app/',
    );
    // body await response
    const body = await response.text();

    // cheerio module catching the body elements
    const $ = cheerio.load(body);
    // const imgs = $('.#images > div:nth-child(1) > a > img');
    // console.log(imgs.length);
    const itemArray = [];
    $('.navbar-collapse collapse').each(function (i, el) {
      const $imgSrc = $(el).find('.images').attr('src');

      console.log($imgSrc.text());
    });
  } catch (error) {
    console.log(error);
  }
};

// const bodyContent = await getWebUrl();
// const htmlContent = bodyContent;
// const $ = cheerio.load();

// console.log($.html());
console.log(await getWebUrl());
