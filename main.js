// listen for form submit.

document.getElementById('myForm').addEventListener('submit', saveBookmark)

function saveBookmark(e){
//Get form values
var siteName = document.getElementById('siteName').value

var siteUrl = document.getElementById('siteUrl').value

 var bookmark = {
    name: siteName,
    url: siteUrl
 }  
 console.log(bookmark)

// localStorage.setItem('test', 'Hello World');
// console.log(localStorage.getItem('test'))
// localStorage.removeItem('test')

if(localStorage.getItem('bookmarks') ===  null) {
    var bookmarks = [];
    bookmarks.push(bookmark)

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
} else {
   var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));

   bookmarks.push(bookmark);
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}


//prevents form from submitting
    e.preventDefault();
}

//Fetch Bookmarks
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

//Get Output
var bookmarksResults = document.getElementById('bookmarksResults');

//Build Output
bookmarksResults.innerHTML = '';
for(var i = 0; i < bookmarks.length; i++){
var name = bookmarks[i].name;
var url = bookmarks[i].url;

bookmarksResults.innerHTML += '<div class="well">' + '<h3>'+name+ '<a class="btn btn-default" target="_blank" href="'+url+'" >Visit<a/>'+'</h3>'+'</div>' ;
}
}