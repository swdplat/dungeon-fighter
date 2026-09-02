// JavaScript Document
$(document).ready(function() {
	
	$(".tab1r").show()
	$(".tab1").hide()
	$(".tab2r").hide()
	$(".tab2").show()	
	$("#event_awards").hide()
	$("#callout").hide()
	$(".form2").hide()
	$("#server").hide()
	$("#character").hide()
	$(".btn_confirm").hide()
	$(".btn_search2").hide()
	$("#search_team").hide()
	$("#search_team2").hide()
	
	
	$(".tab2").click(function(){
	  $("#purchase_history").hide()
	  $("#event_awards").show()
	  $(".tab1r").hide()
	  $(".tab1").show()
	  $(".tab2").hide()
	  $(".tab2r").show()
      $(".form1").hide()
	  $(".form2").show()
	});	
	
	$(".tab1").click(function(){
	  $("#purchase_history").show()
	  $("#event_awards").hide()
	  $(".tab1").hide()
	  $(".tab1r").show()
	  $(".tab2r").hide()
	  $(".tab2").show()
      $(".form2").hide()
	  $(".form1").show()
	});	
	
	
	
    $("#how").click(function(){
	  $("#callout").show()
	});	
	
	$("#callout_close").click(function(){
	  $("#callout").hide()
	});	
	
	$("#id_submit").click(function(){
	  $("#server").show()
	  $("#character").show()
	  $(".btn_confirm").show()
      $("#member_ID").hide()
      $("#how").hide()
	});	
	
	$("#btn_search1").click(function(){
      $("#search_ID").hide()
      $("#how").hide()
	  $("#btn_search1").hide()
	  $("#btn_research1").show()
      $("#search_team").show()
	});	
	
	$("#btn_search2").click(function(){
      $("#search_ID2").hide()
	  $("#search_mycard").hide()
      $("#how2").hide()
	  $("#btn_search2").hide()
	  $("#btn_research2").show()
      $("#search_team2").show()
	});	
	
	

});