$(function() {
	$('#movieInput').submit(function(event) {
		event.preventDefault();

		if($('#movie-name').val() == ''){
			return false;
		}
		$.ajax({
			url: 'http://www.omdbapi.com',
			type: 'get',
			dataType: 'json',
			data: {
				t: $("#movie-name").val(),
				plot:"short",
				r:"json"
			},
		})
		.done(function(data) {

			$('.movieResults .name-tile .movie-name').html(data.Title);
			$('.movieResults .name-tile .movie-year').html(data.Year);
			$('.movieResults .name-tile .movie-genre').html(data.Genre);
			$('.movieResults .name-tile .movie-language').html(data.Language);

			$('.movieResults .actor-tile .movie-actor').html(data.Actors);
			$('.movieResults .actor-tile .movie-director').html(data.Director);
			$('.movieResults .actor-tile .movie-writer').html(data.Writer);
			$('.movieResults .actor-tile .movie-awards').html(data.Awards);

			$('.movieResults .imdb-tile .movie-imdb-rating').html(data.imdbRating);
			$('.movieResults .imdb-tile .movie-imdb-score').html(data.imdbScore);
			$('.movieResults .imdb-tile .movie-imdb-votes').html(data.imdbVotes);
			$('.movieResults .imdb-tile .movie-metascore').html(data.Metascore);

			$('.movieResults .plot-tile .movie-plot-data').html(data.Plot);

			$('.movieFeeds').slideUp(500, function(){
				$('.movieResults').slideDown();
			});			
		})
.fail(function() {
	console.log("error");
})
});
});

$(function(){
	$('#back').click(function(){
		$('.movieSearch input').val("");
		
		$('.movieResults').slideUp(500, function(){
			$('.movieFeeds').slideDown();
		});
	});
});

$(function(){
	$('.action-more').click(function(){
		$('#movie-name').val($(this).data('movie'));
		$('#movieInput').trigger('submit');
		console.log("done");
	});
});




