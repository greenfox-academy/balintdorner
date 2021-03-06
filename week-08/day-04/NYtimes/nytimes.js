let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon&api_key=570eb8d564b84d9d8a407a36e752467e', true);

xhr.send();
let list;

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        list = JSON.parse(xhr.response)
    writeText()
    }
}

var getDiv = document.querySelector('div');
var paragraph;
var pubDate;
var headline;
var permaLink;

function writeText() {
    for (let i = 0; i < 10; i++) {
        headline = document.createElement('h1');
        paragraph = document.createElement('p');
        pubDate = document.createElement('p');
        permaLink = document.createElement('a')
        var headlineText = list.response.docs[i].headline.main;
        var paragraphText = list.response.docs[i].snippet;
        var pubDateText = list.response.docs[i].pub_date;
        var permaLinkSource = list.response.docs[i].web_url;
        var permaLinkText = list.response.docs[i].source;
        headline.innerText = headlineText;
        paragraph.innerText = paragraphText;
        pubDate.innerText = pubDateText;
        permaLink.setAttribute('href', permaLinkSource)
        permaLink.innerText = permaLinkText)
        getDiv.appendChild(headline);
        getDiv.appendChild(paragraph);
        getDiv.appendChild(pubDate);
        getDiv.appendChild(permaLink);
        console.log(permaLink);
    }

}
