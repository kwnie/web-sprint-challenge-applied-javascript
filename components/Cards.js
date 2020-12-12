// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(object => {
    let data = object["data"]["articles"]
    console.log(data)
    function articleMaker({data}){
        let card = document.createElement('div')
        let headline = document.createElement('div')
        let author = document.createElement('div')
        let imgContainer = document.createElement('div')
        let img = document.createElement('img')
        let authorName = document.createElement('span')

        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        author.appendChild(authorName)
        imgContainer.appendChild(img)

        card.classList.add('card')
        headline.classList.add('headline')
        author.classList.add('author')
        imgContainer.classList.add('img-container')

    
        for (const prop in data) {
            for (const obj in prop) {
                let title = headline.textContent = data[prop][obj][2]
                img.src = data[prop][obj][1]
                authorName.textContent = data[prop][obj][0]
                card.addEventListener('click', function(){
                    console.log(title)
                })
            } 
        } 

        return card
    }

    let newCard = articleMaker({data})
    let cardsContainer = document.querySelector('div.cards-container')
    cardsContainer.appendChild(newCard)
})
.catch(err => console.log(err))

