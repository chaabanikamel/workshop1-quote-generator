const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('.loader');
let apiQuotes =[];
// show loding
// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }
// hide loading
// function complete(){
//     quoteContainer.hidden =false;
//     loader.hidden = true;
  
// }
// show new Quote
function newQuote(){
    //pick random quotes from API quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // check if author field is balnk and replaced with 'unknown'
    if(!quote.author){
        authorText.textContent = 'unknown';
    }
    else{
        authorText.textContent = quote.author;
    }
    // check quote length to determine stiling
    if(quote.text.length>120){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote')

    }
    // set quote hide loader
    quoteText.textContent = quote.text;
    // complete();

   
    // return [quote.text,quote.author]
}
// Get Quotes from API
async function getQuotes(){
    // loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    }
    catch(error){
        // catch error here
    }
}
// tweet quote
function tweetQuote(){
    // loading();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
    
}
// eventlisteners
twitterBtn.addEventListener('click',tweetQuote)
newQuoteBtn.addEventListener('click',newQuote)


// new cote in the document


// upTO.addEventListener('click',() => {
//     let quote = newQuote();
//     contentCote.textContent = quote[0] ;
//     contentAuthor.textContent = quote[1];
// });



// // on load
getQuotes();
// newQuote();
