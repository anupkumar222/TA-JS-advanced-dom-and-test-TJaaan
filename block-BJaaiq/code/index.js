document.body.style.lineHeight = "1.5"
let div = document.querySelector("div");


document.addEventListener(`DOMContentLoaded`,()=>{
    for(let i = 0; i < 3; i++){
        let h2 = document.createElement("h2");
        h2.innerText = quotes[i].quoteAuthor;
        h2.style.fontSize = "4.5rem"
        let p = document.createElement("p");
        p.innerText = quotes[i].quoteText
        p.style.fontSize = "2.2rem"

        div.append(h2, p)
    }
})

window.addEventListener("scroll",()=>{
   const scrollable = document.documentElement.scrollHeight;
   console.log(scrollable);


   quotes.forEach((elm) =>{
    let h2 = document.createElement("h2");
    h2.innerText = elm.quoteText;
    h2.style.fontSize = "4rem"
    let p = document.createElement("p");
    p.innerText = elm.quoteAuthor;
    p.style.fontSize = "2rem"
    div.append(h2, p);
   })
})
// let root = document.querySelector("ul");

// let max = 3;

// let index = 0;
// function addQuotes() {
//     for(let i = 0; i < max; i++) {
//         let li = document.createElement("li");
//         let blockquote = document.createElement("blockquote");
//         let cite = document.createElement("cite");
//         blockquote.innerText = quotes[index].quoteText;
//         li.append(blockquote, cite);

//         root.append(li);
//         index++;
//     }
// }

// addQuotes();
