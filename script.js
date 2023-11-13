var forms = document.getElementById("forms");
var search=document.getElementById("search")
var showimage = document.getElementById("showimage");
var keyword = '';
var page = 1;
var count=12
var show_more= document.getElementById("show_more");
const access_key = "DNRW-NzW5fAZ42cGH7Fbu1YWrimVlGsRSg0yJrfQkTg";
async function images() {
  keyword = document.getElementById("keyword").value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=${count}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if(page===1){
    showimage.innerHTML = '';

  }
   // Clear previous images
  results.forEach(result => {
    const imag = document.createElement("img");
    imag.src = result.urls.small;
    const links = document.createElement("a");
    links.href = result.links.html;
    links.appendChild(imag);
    links.target="_blank";
    showimage.appendChild(links);
  });
  
}

forms.addEventListener("submit", (e)=> {
  e.preventDefault();
  page = 1; // Reset the page number
  images();
  show_more.style.display="block";
});
show_more.addEventListener("click",function(e){
    page++;
    images();
})
search.addEventListener("click",function(e){
  page = 1; // Reset the page number
  images();
  show_more.style.display="block";

})