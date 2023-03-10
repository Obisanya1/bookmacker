// listen for form submit.

document.getElementById('myForm').addEventListener('submit', saveBookmark)

function saveBookmark(e){
//Get form values
var siteName = document.getElementById('siteName').value
var siteUrl = document.getElementById('siteUrl').value

if (!siteName || !siteUrl){
    alert('Please fill in the form')
    return false
}

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

fetchBookmarks()


//prevents form from submitting
    e.preventDefault();
}

//delete

function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    //Loop through
    for(var i = 0 ; i < bookmarks.length; i++ ){
if(bookmarks[i].url == url){
    bookmarks.splice(i,1)
}
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    fetchBookmarks()
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

bookmarksResults.innerHTML += '<div class="well">' + '<h3>'+name+ 
'<a class="btn btn-success" target="_blank" href="'+url+'" >Visit <a/>'
+ '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" >Delete</a>'
+'</h3>'+'</div>' ;
}
}