// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(object => {
    let data = object["data"]["topics"];
    data.forEach(topic => {
        function tabMaker(){
            let tab = document.createElement('div')
            tab.classList.add('tab')
            tab.textContent = topic
            return tab
        }
        let tab = document.querySelector('span.title')
        let newTab = tabMaker(topic)
        tab.appendChild(newTab)
    })
})
.catch(err => console.log(err))


    
   
    
    
