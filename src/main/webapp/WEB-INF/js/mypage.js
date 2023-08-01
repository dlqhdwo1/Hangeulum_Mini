$(function(){

	var html = "";
	const userId = $('#userId').val();
	console.log('세션 아이디값' + userId);

	alert('마이페이지');
	
	$.ajax({
		type:'post',
		url:'/Hangeulum/user/mypage_view',
		data: { "userId" : userId },
		
		success: function(data){
			console.log(JSON.stringify(data));
			
			console.log(data[0].donationactive);
			
			$('#cash_total_donation').text(data[0].donationactive);
			$('#cash_total_funding').text(data[0].fundingactive);
			
	
		},
		
		error: function(err){
			console.log(err);
		},
	
	
	});

});