console.log("Let's get this party started!");
const GifInput = document.querySelector("#GIFInput");
const SearchGif = document.querySelector("#searchGIF");
const displayDiv = document.querySelector("#displayGIF");
const clearAllBtn = document.querySelector("#clearAll");

async function getGIFs(SearchTerm){
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key:"sleoqZKtYietH3J4I51rQhMXzLMH92AC", q:SearchTerm}});
    let random50 = Math.floor(Math.random()*50);
    const GifURL = await res.data.data[random50].images.original.url;
    const GIFImg = document.createElement('img');
    GIFImg.src=GifURL;
    displayDiv.append(GIFImg);

}

SearchGif.addEventListener("click",function(e){
    e.preventDefault();
    searchTerm = GifInput.value;
    console.log(`searchTerm = ${searchTerm}`);
    getGIFs(searchTerm);
})

clearAllBtn.addEventListener("click", function(){
    displayDiv.innerHTML='';
})