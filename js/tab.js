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
	$("#btn_search1").hide()

	$("#btn_research1").hide()
	$("#search_team").hide()
	$("#search_team2").hide()
	$(".form1").hide()
	$(".form2").hide()
    $(".tb1").hide()
	$(".tb3").hide()
	
	
	$(".tab2").click(function(){
	  $("#purchase_history").hide()
	  $("#event_awards").show()
	  $(".tab1r").hide()
	  $(".tab1").show()
	  $(".tab2").hide()
	  $(".tab2r").show()
      $(".form1").hide()
	  $(".form2").hide()
      $("#search_result_space").show()
	});	
	
	$(".tab1").click(function(){
	  $("#purchase_history").show()
	  $("#event_awards").hide()
	  $(".tab1").hide()
	  $(".tab1r").show()
	  $(".tab2r").hide()
	  $(".tab2").show()
      $(".form1").hide()
	  $(".form2").hide()
      $("#search_result_space").show()
	});	
	

	
	$("#btn_submit1").click(function(){
	  $("#btn_submit1").hide()
	  $("#btn_search1").show()
      $("#search_team").show()
	});	
	
	$("#btn_search1").click(function(){
	  $(".form1").show()
	  $("#btn_search1").hide()
	  $("#btn_research1").show()
      $("#search_result_space").hide()
	});	
	
	$("#btn_submit2").click(function(){
      $(".form2").hide()
	  $("#btn_submit2").hide()
	  $("#btn_search2").show()
      $("#search_team2").show()
	});	
	
	$("#btn_search2").click(function(){
      $(".form2").show()
	  $("#btn_submit2").hide()
	  $("#btn_search2").show()
      $("#search_team2").show()
	  $("#search_result_space").hide()
	});	
	

	$("#tresure_tab1").click(function(){
	  $(".tb1").show()
	  $(".tb2").hide()
      $(".tb3").hide()
	  $("#tresure_tab1").addClass("on")
      $("#tresure_tab1").removeClass("off")
      $("#tresure_tab2").addClass("off")
      $("#tresure_tab2").removeClass("on")
	  $("#tresure_tab3").addClass("off")
      $("#tresure_tab3").removeClass("on")
	});	
	
	$("#tresure_tab2").click(function(){
	  $(".tb2").show()
	  $(".tb1").hide()
      $(".tb3").hide()
	  $("#tresure_tab1").addClass("off")
      $("#tresure_tab1").removeClass("on")
      $("#tresure_tab2").addClass("on")
      $("#tresure_tab2").removeClass("off")
	  $("#tresure_tab3").addClass("off")
      $("#tresure_tab3").removeClass("on")
	});	
	
	$("#tresure_tab3").click(function(){
	  $(".tb3").show()
	  $(".tb1").hide()
      $(".tb2").hide()
	  $("#tresure_tab1").addClass("off")
      $("#tresure_tab1").removeClass("on")
      $("#tresure_tab2").addClass("off")
      $("#tresure_tab2").removeClass("on")
	  $("#tresure_tab3").addClass("on")
      $("#tresure_tab3").removeClass("off")
	});	


});