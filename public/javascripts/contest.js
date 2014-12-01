$(window).load(function(){
	//парсим страницу с репостами
	$.ajax({
        url: 'contest',
        type: "GET",
        complete: function(data) {
        	var string = data.responseText;
         	var $object = $('<div/>').html(string);
         	//console.log($object.find('.author'));
         	$object.find('.inline_item').each(function(index){
         		console.log($(this));
         		var img = $(this).find('.ii_img').attr('src');
         		if(img[0]!='h'&&img[1]!='h') {
         			img = 'http://vk.com/'+img;
         		}
         		var name = $(this).find('.ii_owner').html();
         		if (name != 'Дима Гульбин' && name != 'Михаил Семенов') { //убираем участников Musical shelter
         		var obj = $('<div/>').html('<div class="col-md-6 member"><img src="'+img+'" class="img-thumbnail">&nbsp;&nbsp;<span id="name">'+name+'</span></div>');
         			$('#members').append(obj);
         		}
         	});    
        },
        error: function(data) {

        }
      });
});

function getWinners() {
	var num = $('#members').find('.member').length;
	var firstWinner = Math.floor((Math.random() * num) + 1);
	var secondWinner = Math.floor((Math.random() * num-1) + 1);
	if (secondWinner == firstWinner) {
		while(secondWinner != firstWinner) {
			secondWinner = Math.floor((Math.random() * num-1) + 1);
		}
	}

	var thirdWinner = Math.floor((Math.random() * num-2) + 1);

	if (thirdWinner == firstWinner || thirdWinner == secondWinner) {
		while(thirdWinner != firstWinner && thirdWinner != secondWinner) {
			thirdWinner = Math.floor((Math.random() * num-1) + 1);
		}
	}

	console.log(firstWinner);
	console.log(secondWinner);
	console.log(thirdWinner);
	var winners = new Array();
	winners.push($('#members').find('.member')[firstWinner]);
	winners.push($('#members').find('.member')[secondWinner]);
	winners.push($('#members').find('.member')[thirdWinner]);
	$.each(winners, function(index){
		console.log($(this));
		var img = $(this).find('.img-thumbnail').attr('src');
 		var name = $(this).find('#name').html();
 		var obj = $('<div/>').html('<div class="row member"><img src="'+img+'" class="img-thumbnail">&nbsp;&nbsp;'+name+'</div>');
 		$('#winners').append(obj);
	});


	$('#myModal').modal('toggle');

}
