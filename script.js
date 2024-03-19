$.ajax({
    url: 'http://www.omdbapi.com/?apikey=5e5bd661&s=avengers',
    success: results => {
        console.log(results);
    },
    error: (e) => {
        console.log(e.responseText)
    }
})