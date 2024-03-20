$('.input-group').on('submit', function () {
    event.preventDefault();
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=5e5bd661&s=' + $('.input-form').val(),
        success: results => {
            let movies = results.Search

            let cards = ''

            movies.forEach(mov => {
                cards += showMovie(mov)
            });
            $('#card-container').html(cards);

            $('.modal-btn').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=5e5bd661&i=' + $(this).data('imdbid'),
                    success: data => {
                        const movieDetail = showMovieDetail(data);
                        $('.modal-body').html(movieDetail);
                    }
                })
            });

        },
        error: (e) => {
            console.log(e.responseText)
        }
    })

});


function showMovie(mov) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${mov.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${mov.Title}</h5>
                        <p class="card-text">${mov.Year}</p>
                        <a href="#" class="btn btn-primary modal-btn" data-bs-toggle="modal" data-bs-target="#movieDetail" data-imdbid='${mov.imdbID}'>Show more</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(data) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${data.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${data.Title} (${data.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Actors: </strong>${data.Actors}</li>
                            <li class="list-group-item"><strong>Genre: </strong>${data.Genre}</li>
                            <li class="list-group-item"><strong>Awards: </strong>${data.Awards}</li>
                            <li class="list-group-item"><strong>Plot: </strong><br>
                                ${data.Plot}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
}