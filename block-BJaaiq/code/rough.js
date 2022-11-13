let root = document.querySelector("ul");

let max = 3;

let index = 0;
function addQuotes() {
    for(let i = 0; i < max; i++) {
        let li = document.createElement("li");
        let blockquote = document.createElement("blockquote");
        let cite = document.createElement("cite");
        blockquote.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockquote, cite);

        root.append(li);
        index++;
    }
}

addQuotes();
