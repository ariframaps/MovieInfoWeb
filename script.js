$.ajax({
    // url: 'http://www.omdbapi.com/?apikey=5e5bd661&s=avengers',
    success: results => {
        let movies = results.Search

        let cards = ''

        movies.forEach(mov => {
            cards += `  <div class="col-md-4 my-5">
                            <div class="card">
                                <img src="" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">2024</p>
                                    <a href="#" class="btn btn-primary">Show more</a>
                                </div>
                            </div>
                        </div>`;
        });
        $('#card-container').html(cards);

    },
    error: (e) => {
        console.log(e.responseText)
    }
})