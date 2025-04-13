const quote=document.getElementsByTagName("blockquote")[0];
const author=document.getElementsByClassName("author")[0];

const api="https://quotes-api-self.vercel.app/quote";

const newQuote=document.querySelector(".q_b");
const newTweet=document.querySelector(".t_b");

const getdata=async ()=>{
    const response=await fetch(api);
    const data=await response.json();

    quote.innerText=data.quote;
    author.innerText=data.author;
}

getdata();

newQuote.addEventListener("click",()=>{
    getdata();
})