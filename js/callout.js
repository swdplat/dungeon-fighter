// JavaScript Document
$(document).ready(function() {
	
	$("#login_callout").hide()
	$("#login_callout2").hide()
	$("#callout").hide()
	$(".nav_name").hide()
	$(".nav_team").hide()
	$("#nav_logout_btn").hide()
	
    $("#how").click(function(){
	  $("#callout").show()
	});	
	
	$("#callout_close").click(function(){
	  $("#callout").hide()
	});	
	
	$("#how4").click(function(){
	  $("#callout").show()
	});	
	
	$("#how3").click(function(){
	  $("#callout").show()
	});	
	
        $("#how1").click(function(){
	  $("#callout").show()
	});
	
	$("#nav_login_btn").click(function(){
	  $("#nav_login_btn").hide()
	  $("#login_callout").show()
	});	
	
	$("#login_callout_close").click(function(){
        $("#nav_login_btn").show()
		$("#login_callout").hide()
	});	
	
	$("#nav_login_btn").click(function(){
	  $("#nav_login_btn").hide()
	  $("#login_callout2").show()
	});	
	
	$("#login_callout_close").click(function(){
        $("#nav_login_btn").show()
		$("#login_callout2").hide()
	});	
	
	$("#login_callout_close").click(function(){
        $("#nav_login_btn").show()
		$("#login_callout").hide()
	});	
	
	$("#id_submit").click(function(){
	  $("#login_callout").hide()
	  $("#login_callout2").hide()
	  $("#nav_login_btn").hide()
	  $("#nav_logout_btn").show()
	  $(".nav_team").show()
	  $(".nav_name").show()
	});
	
	$("#nav_logout_btn").click(function(){
	  $("#login_callout").hide()
	  $("#login_callout2").hide()
	  $("#nav_login_btn").show()
	  $("#nav_logout_btn").hide()
	  $(".nav_team").hide()
	  $(".nav_name").hide()
	});

});