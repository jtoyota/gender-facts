$('#filter').on('click', function(event){
	event.stopPropagation();	
	$('#dropdown').toggle('hidden');
});

$(document).click(function(){
	$('#dropdown').hide();
})

$('#selectAll').on('click', function() {
	$('.myth').fadeIn();
});

$('li').on('click', function(e) {
    e.preventDefault();
	$('.' + $(this).data('category')).siblings("div").fadeOut();
	$('.' + $(this).data('category')).fadeIn();
});

$('#send').on('click', function(){
	console.log("Click!");
    $('body').css('overflow-y', 'hidden');
	$('.overlay').css('display','block');
	$('.sendModal').css('display','block');
});

$('.closeModal').on('click', function() {
	$('.overlay').css('display','none');
	$('.modal').css('display','none');
    $('body').css('overflow-y', 'auto');
})

$('.myth').on('click', function(){
	$('.overlay').css('display','block');
	$('.factModal').css('display','block');
	$('.factTitle').text($(this).data('title'));
	$('.factText').text($(this).data('text'));
	$('.factSource').text($(this).data('source'));
	$('.factSource').attr('href', ($(this).data('url')));
	$('.factSource').attr('alt', ($(this).data('alt')));
});
