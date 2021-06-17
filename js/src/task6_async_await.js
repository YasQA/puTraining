// 1. Послать fetch запрос к любому персонажу - https://www.anapioficeandfire.com/api/characters/583
// 2. В респонсе будет перечень povBooks. Послать запрос к каждой книге из povBooks
// 3. Сформировать массив с именами всех авторов этой книге
// 4. Перепишите всё на async await.

const fetch = require('node-fetch');
const url = 'https://www.anapioficeandfire.com/api/characters/583';

async function getBookLinks() {
    const response = await fetch(url);
    const details = await response.json();
    return details.povBooks;
}

async function getAuthors() {
    let books = await getBookLinks();
    let authors = [];
    for (let i = 0; i < books.length; i++) {
        const response = await fetch(books[i]);
        const details = await response.json();
        authors.push(...details.authors);
    }
    return authors;
}

async function printResult() {
    let authors = await getAuthors();
    console.log("Authors: ")
    for (let i = 0; i < authors.length; i++) {
        console.log(authors[i]);
    }
}

printResult();

