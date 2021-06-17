// 1. Послать fetch запрос к любому персонажу - https://www.anapioficeandfire.com/api/characters/583
// 2. В респонсе будет перечень povBooks. Послать запрос к каждой книге из povBooks
// 3. Сформировать массив с именами всех авторов этой книге

const fetch = require('node-fetch');
const url = 'https://www.anapioficeandfire.com/api/characters/583';

function getBookLinks() {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(details => {
                let books = details.povBooks;
                resolve(books);
            })
    });
}

function getAuthors(bookUrl) {
    return new Promise(function (resolve, reject) {
        fetch(bookUrl)
            .then(response => response.json())
            .then(details => {
                let authors = details.authors;
                resolve(authors);
            })
    });
}

function getResults() {
    return new Promise(function (resolve, reject) {
        getBookLinks().then(bookUrls => {
            let authors = bookUrls.map(url => getAuthors(url));
            return Promise.all(authors)    //result = array of arrays with authors
                .then(result => [].concat.apply([], result));
        }).then(result => resolve(result));
    })
}

getResults().then(result => console.log(result))


