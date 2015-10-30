var click = 0;
var closeIt = 0;
var closeItClick =0;

$(document).ready(function() {
	fill();
	introPage();
	resize();
});

$(window).resize(function(){
	resize();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){
	$("#introBanner").hide();
	$("#fadeTo").hide();
	$("#content").hide();
	$("#artH2").hide();
	$("#skip").hide();
	$("#tvPage").hide();
	$("#closeIt").hide();
	$("#map").hide();
	$("#actionEvent").hide()
	$("#tvUitleg").hide();
	$("#hallway").hide();
	$("#notebook").hide();
	$("#quizz").hide();
	$("#quizKnop").hide();
	$("#funPage").hide();
}

																				//intropage with button
function introPage(){
	$("#banner").hide();
	var clicked = false;
	//$("body").css("background-image","url('imgs/flagBg.jpeg')");
	$("#article").css("height","55%");
	$("#artH1").css("margin","50px 0px").css("height","40%");
	$("#artH2").css("margin","50px 0px").css("height","40%");
	$("#introBanner").fadeIn(2500);
	//$("#introBanner").css("top","-20px");
	$("#artH2").fadeIn(4500);
	$("#artH1").css("font-family","Mr Dafoe").html("John F. Kennedy").fadeIn();
	$("#artH2").css("font-family","Special Elite").css("color","white").html("Press the seal to confirm you are 18 years of age.").fadeIn();
	
	$("#enterPage").hover(function() {
		console.log("hover on");
		$("#enterPage").css("opacity","1");
		$("#enterPage").css("transform","scale(1.125)");
    	$("#artH2").empty().html("Are you sure?");

  	}, function() {

  		console.log("hover off");
  		$("#enterPage").css("opacity","0.7");
  		$("#enterPage").css("transform","scale(1)");
   		if (clicked == false) {
   			$("#artH2").empty().html("Press the seal to confirm you are 18 years of age.");
   		}

   		else {
   			$("#artH2").empty().html("Entering 'The Sworn Commitment'");
   		}
 	});


	$("#enterPage").click(function(){
		clicked=true;
		console.log("clicked intro");
		$("#artH2").empty().html("Entering 'The Sworn Commitment'");
		$("#introBanner").fadeOut(1000).queue(function(){
			$("#artH1").css("transition","opacity 2s").css("opacity","0").queue(function(){
			$("#artH2").css("transition","margin-top 2s").css("margin-top","10%");
			$("#aside").fadeOut(500);
		});
		introPageExit();
		});
	});
}

function introPageExit(){
	$("#content").hide();
	$("#article").fadeOut(1000).queue(function(){
		$("#article").css("height","0px").css("background-color","none");
		$("#artText").hide();
		fill();
		hallway();
	});
	$("#introBanner").fadeOut(1000);
}

																						//hallway
function hallway(){
	$("#notebook").show().css("opacity","0.7");
	$("#closeIt").show()
	$("#next").hide();
	$("#fullpage").fadeIn(1000);
	$("#banner").show();
	$("#skip").show();
	$("#hallway").fadeIn(1000);
	$("#hallway1").css("background-image","url('imgs/gang/gang1.png')");
	$("#hallway2").css("background-image","url('imgs/gang/gang2.png')").hide();
	$("#hallway3").css("background-image","url('imgs/gang/gang3.png')").hide();

	//uitleg biiishhh
	$("#gangUitleg").fadeIn(2000);
	$("#gangH2").html("Welcome to JFK - The Sworn Commitment.").delay(1500).fadeOut(500).queue(function(){
		$("#gangUitleg").hide();
		$("#gangH2").delay(500).html("To start off, click anywhere.").show();
		$("#gangUitleg").fadeIn(500);
	});	

	$("#closeIt").click(function(){
		closeIt = closeIt + 1;

		if (closeIt == 1){
			$("#gangH2").fadeOut(500).html("Great. You are able to dismiss every pop-up like this.").fadeIn(500);
		}

		if (closeIt == 2){
			$("#gangH2").fadeOut(500).html("Your name is Ainsley Prescott, a private investigator. ").fadeIn(500);
			//fadeIn foto
		}

		if (closeIt == 3){
			$("#gangH2").fadeOut(500).html("You are hired by someone called Abraham Zapruder.").fadeIn(500);
			//fadeIn foto
		}

		if (closeIt == 4){
			$("#gangH2").fadeOut(500).html("Zapruder has provided you with the footage he shot of the assassination of Kennedy.").fadeIn(500);
		}

		if (closeIt == 5){
			$("#gangH2").fadeOut(500).html("He wants transparency on what happened that day.").fadeIn(500);
		}
		if (closeIt == 6){
			$("#gangH2").fadeOut(500).html("You have been working on a report but it isn't done yet. You are missing some last bits of information.").fadeIn(500);
		}
		if (closeIt == 7){
			$("#gangH2").fadeOut(500).html("In your room is a setup that you can use to further your investigation. Click on the arrow to walk to your apartment.").fadeIn(500);
		}
		//code voor laatste klik
		if (closeIt == 8){
			$("#gangH2").fadeOut(500).html("Good luck, detective.").fadeIn(500);
			$("#next").fadeIn(1000);
			$("#gangUitleg").fadeOut(2000);
			$("#notebook").css("opacity","1");
			$("#closeIt").css("z-index","1");
		}

		//$("#gangUitleg").fadeOut(500);
	});

	$("#next").click(function(){
		click = click + 1;
		if (click == 1){
			$("#hallway1").fadeOut(300);
			$("#hallway2").show();
			$("#next").fadeOut(500);
		}

	});

	//skip
	$("#skip").click(function(){
		$("#hallway").fadeOut(1000);
		fadeTo();
		explain();
		$("#closeIt").hide();
	});

	$("#door").hover(function(){
		$("#door").css("transform", "scale(1.025)");
	},
	function(){
		$("#door").css("transform", "scale(1)");
	});


	$("#next").hover(function(){
		$("#next").css("transform", "scale(1.125)");
	},
	function(){
		$("#next").css("transform", "scale(1)");
	});

	$("#door").click(function(){
		$("#hallway").fadeOut(1000);
		fadeTo();
		explain();
		$("#closeIt").hide();
	});
}

//uitleg pagina 
function explain(){
	$("#fadeTo").append("<div id='temp'></div>").css("background-color","none !important");
		$("#temp").html("<h2 id='tempH2'>You enter your room and get welcomed by your dog.</div>").fadeIn().delay(3000).fadeOut().queue(function(){
				livingroom();
				$("#dop").hide();
				$("#tvPage").show();
				$("#fadeTo").fadeOut(1000);
		});
}

																							//LIVING ROOM
function livingroom(){
	$("*").unbind();
	$("#tvPage").show();
	console.log("livingroom launched");
	document.getElementById("tvPage").style.display = "true";
	var tv = false;
	var radio = false;
	var doge = false;
	$("#closeIt").css("z-index","3");
	$("#closeIt").show();
	$("#radioTime").hide();
	$("#tvTime").hide();
	$("#closeIt").show();
	$("#dogeTime").hide();
	$("#quizKnop").show();
	$("#bvTime").hide();

	$("#fullpage").css("background-image","url('imgs/livingroom.png')");

	$("#tvPic").append('<video id="tvTimeVid"></video>');
	$("#radioPic").append('<audio id="radioTimeAud"></audio>');
	
	$("#tvTimeVid").append('<source src="Video/videoZap.mp4" type="video/mp4"></source>');
	$("#radioTimeAud").append('<source src="Audio/radioPres.mp3" type="audio/mp3"></source>');	

		//tijd voor een beetje uitleg
	$("#tvUitleg").fadeIn(2000);
	$("#tvH2").html("You can now explore this room to investigate the case.").delay(2500).fadeOut(500).queue(function(){
		$("#tvUitleg").hide();
		$("#closeIt").css("z-index","3");
		$("#closeIt").click(function(){
			$("#tvUitleg").fadeOut(500);
			$("#closeIt").unbind().css("z-index","1");
		});

		$("#tvH2").delay(500).html("You can progress through the map, watch tv or listen to the radio. The calendar leads to the next stage.").show();
		$("#tvUitleg").fadeIn(500);
	});

	$("#closeIt").click(function(){
		$("#tvUitleg").fadeOut(500);
		$("#closeIt").unbind().css("z-index","1");
	});
		
	$("#calPicFun").on("click" , function(){
		console.log("click");
		$("#tvPage").hide();
		$("#funPage").show();
		funeral();
	});

	//klik op tv
		$("#tvOverlay").click(function(){
			tv = true;
			$("#closeIt").css("z-index","2");
			if (radio != true){

				$("#tvTime").fadeIn(500);
				$("#closeIt").fadeIn(500);
				$("#tvTimeVid").fadeIn(500);
				var vid = document.getElementById("tvTimeVid");

				vid.play();

				//klik op sluiten
				$("#closeIt").click(function(){
					vid.pause();
					$("#tvTime").fadeOut(500);
					$("#closeIt").fadeOut(500);
					$("#tvTimeVid").fadeOut(500);
					tv = false;
					$("#closeIt").unbind();
					$("#closeIt").css("z-index","1");
				});
			}

			else {
				tv = false;
			}
		});

		//hover over TV
	$("#tvOverlay").hover(function(){
			$("#overPicTv").css("transform", "scale(1.125)");
		},
		function(){
			$("#overPicTv").css("transform", "scale(1)");
		});

	//hover over radio
	$("#radioOverlay").hover(function(){
			$("#overPicRadio").css("transform", "scale(1.125)");
		},
		function(){
			$("#overPicRadio").css("transform", "scale(1)");
		});

	//klik op radio
		$("#radioOverlay").click(function(){
			radio = true;
			$("#closeIt").css("z-index","2");
			if (tv != true){
				$("#radioTime").fadeIn(500);
				$("#closeIt").fadeIn(500);
				var aud = document.getElementById("radioTimeAud");
				aud.play();

				//klik op sluit
				$("#closeIt").click(function(){
					//klik op sluit
					aud.pause();
					$("#radioTime").fadeOut(500);
					$("#closeIt").fadeOut(500);
					radio = false;
					$("#closeIt").unbind();
					$("#closeIt").css("z-index","1");
				});
			}

			else {
				radio = false;
			}
		});
		//hover cal
	$("#calPicFun").hover(function(){
		$("#calPicFun").css("transform", "scale(0.6)");
	},
	function(){
		$("#calPicFun").css("transform", "scale(0.51)");
	});
		//hover over doge
	$("#dogeOverlay").hover(function(){
			$("#dogeTime").fadeIn(500);
			$("#overPicDoge").css("transform", "scale(1.125)");
		},
		function(){
			$("#dogeTime").fadeOut(500);
			$("#overPicDoge").css("transform", "scale(1)");
		});

	//Als je over de kalender hovert
	$("#bvOverlay").hover(function(){
		$("#tvUitleg").fadeIn(500);
		$("#tvH2").html("Find the date of the funeral to progress to the next stage.");
		$("#overPicbv").css("transform", "scale(1.225)");
	},
	function(){
		$("#tvUitleg").fadeOut(500);
		$("#overPicbv").css("transform", "scale(1.1)");
	});

	//als je op de kalender klikt

	$('#bvOverlay').click(function(e) {
	   //e.preventDefault();  //stop the browser from following
	    //window.location.href = 'docs/bronvermelding.txt';
	    $("#closeIt").css("z-index","1");
	    $("#bvTime").fadeIn(500);

	    $("#calPicFun").click(function(){
			$("#tvPage").fadeOut(1000).queue(function(){
				$("#funPage").fadeIn(1000).queue(funeral());
				console.log("klick calPic");
				$("#calPicFun").unbind();
			});
		});

	    				//klik op sluiten
		$("#closeIt").click(function(){
			$("#bvTime").fadeOut(500);
			$("#closeIt").unbind();
			$("#closeIt").css("z-index","1");
		});
	});


	//hover over map
	$("#pbOverlay").hover(function(){
		$("#overPicPb").css("transform", "scale(1.125)");
		},
		function(){
			$("#overPicPb").css("transform", "scale(1)");
		});

	//klik map  
	$("#pbOverlay").click(function(){
		$("#tvPage").fadeOut(1000).queue(function(){
			$("#map").fadeIn(1000).queue(map());
			$("#mapInfo").css("opacity","0.7");
		});
	});

	//klik op skipme
	$("#skip").click(function(){
		$("#skip").unbind();
		$("#quizKnop").fadeOut();
		$("#tvPage").fadeOut(1000).queue(function(){
			$("#funPage").fadeIn(1000).queue(function(){
				funeral();
			});
		});
	});
}
															//MAP PAGE
	
function map(){
	$("#map").show();
	$("#skip").unbind();
	$(".buttonShowWrap").hide();
	$("#closeIt").hide();
	$("#overlay").hide();
	$(".description").hide();
	$("#mapInfo").fadeIn(1000);


//													MAPINFO DIV
	$("#mapInfo").click(function(){
		$("#mapInfo").fadeOut(1000);
		$(".buttonShowWrap").fadeIn(1000);
		$("#mapText").fadeIn(1000);
	});

		//																																														BACK TO ROOM
	$("#button6").click(function(){
		$("#map").fadeOut(1000).queue(function(){
			$("#tvPage").fadeIn(1000).queue(livingroom());
		});
	});

		//klik op skipme
	$("#skip").click(function(){
		$("#skip").unbind();
		$("#map").fadeOut(1000).queue(function(){
			$("#tvPage").fadeIn(1000).queue(livingroom());
		});
	});


//													DISPLAY NAMES BUTTON

    $("#displayNames").html("SHOW NAMES & ROUTE").click(function(){
        $("p").toggleClass("main").fadeIn(1000);
    });
 //													DISPLAY NAMES BUTTON
    $("#funeralDescription").html("BACK TO ROOM").click(function(){

        
    });

    $("#backToRoom").html("BACK TO ROOM").click(function(){

        
    });

//													BUTTON 1 MOTORCADE
	$("#button1").click(function(){
	$(".buttonShowWrap").hide();
	$("#overlay").css({"top": "20%", "left": "17%"}).fadeIn();
//													CONTENT BUTTON 1
	$("#video").html("<span><h2>The motorcade</h2></span>").css("margin-bottom", "5%").css("margin-top", "2%");

	$("#text").html("<span><p>John F. Kennedy arrived in Dallas at the airfield on 11:38 AM. <br>From there he got into the presidential limousine. He was accompanied by Mrs. Kennedy, Texas Governor Connally and Mrs. Connally. The motorcade had to cover ten miles of crowded streets. Almost 150.000 people came to watch the president drive by that day. <br><br>On the right you can see the route the motorcade took. At 12:21 PM, the motorcade turned onto Main Street. Paired with loud cheering, the motorcade turned left onto Elm Street at 12:29.</p></span>").css("text-align", "left").css("display", "block").css("color","black").css("float", "left").css("width", "25%").css("margin-left", "10%");

	$("#image").html("<video id='kaartVideo1' class='video'>source src='Video/video6.mp4' type='video/mp4'></source></video>").css("width", "25%").css("margin-left", "auto").css("margin-right", "auto");
		var vid = document.getElementById("kaartVideo1");
		vid.play();
		console.log("playing video");
	});


//													BUTTON 2 SHOT 1
$("#button2").click(function(){
$("#overlay").css({"top": "35%", "left": "10%"}).fadeIn();
$(".buttonShowWrap").fadeOut("fast");
//													CONTENT BUTTON 2
$("#video").html("<span><h2>The First Shot</h2></span>");

$("#text").html("<span><p>At approximately 12:29, the first shot was fired. However, It didn't hit the president or the other passengers of the presidential limousine. The bullet was never found but almost all of the testimonials from the bystanders confirmed the sound of three shots, not two.</p></span>");

$("#image").html("<video id='kaartVideo1' class='video'><source src='Video/GunShot1.mp4' type='video/mp4'></source>").css("width", "25%").css("margin-left", "auto").css("margin-right", "auto");

	var vid = document.getElementById("kaartVideo1");
	vid.play();
	console.log("playing video");

});

//													BUTTON 3 SHOT 2
$("#button3").click(function(){
$("#overlay").css({"top": "40%", "left": "20%"}).fadeIn();
$(".buttonShowWrap").hide();
//													CONTENT BUTTON 3

$("#text").html("<span><p>At 12:30 the second shot hit John F. Kennedy and governor Connally. There are a lot of assumptions about this shot, the main one being the so called “magic bullet”. This theory claims that the second bullet went through the neck of John F. Kennedy. This checks out, in the footage you can clearly see John F. Kennedy grabbing his neck. <br><br>But then it gets interesting. The bullet would then have supposedly dropped down and entered the back of the chair of governor Connally.  Piercing one of Connally’s ribs, exiting his body under his right nipple and wound his right wrist and left thigh in the process.</p></span>").css("text-align", "left").css("display", "block").css("color","black").css("float", "left").css("width", "25%");

$("#image").html("<video id='kaartVideo1' class='video'><source src='Video/GunShot2.mp4' type='video/mp4'></source></video>").css("width", "25%").css("margin-left", "auto").css("margin-right", "auto");

	var vid = document.getElementById("kaartVideo1");
	vid.play();
	console.log("playing video");

});

//													BUTTON 4 SHOT 3
$("#button4").click(function(){
$(".buttonShowWrap").hide();
$("#overlay").css({"top": "30%", "left": "32%"}).fadeIn();
		//CONTENT 
$("#video").html("<span><h2>The Third Shot</h2></span>").css("margin-bottom", "5%").css("margin-top", "2%").css("color", "red");

$("#text").html("<span><p>At 12:30 the third shot hit John F. Kennedy. Only seconds later than the second shot. This was the fatal shot. This shot chipped the side of his head and inflicted fatal damage to his brain. There are conspiracies about this shot as well. Some people claim he was in the Texas school book depository, other people claim to have heard a shot come from the grassy knoll, the group of trees next to the white pagoda.</p></span>").css("text-align", "left").css("display", "block").css("color","black").css("float", "left").css("width", "25%").css("margin-left", "10%");

$("#image").html("<video id='kaartVideo1' class='video'><source src='Video/GunShot3.mp4' type='video/mp4'></source></source></video>").css("width", "25%").css("margin-left", "auto").css("margin-right", "auto");

	var vid = document.getElementById("kaartVideo1");
	vid.play();
	console.log("playing video");
});

//													BUTTON 4 OSWALD
$("#button5").click(function(){
	$(".buttonShowWrap").hide();
	$("#overlay").css({"top": "12%", "left": "4%"}).fadeIn();

			//CONTENT 
	$("#video").html("<span><h2>Oswald's Vantage Point</h2></span>").css("margin-bottom", "5%").css("margin-top", "2%");

	$("#text").html("<span><p>From this room in the Texas School Book depository, Lee Harvey Oswald had this view</p></span>").css("text-align", "left").css("display", "block").css("color","black").css("float", "left").css("width", "25%").css("margin-left", "10%");

	$("#image").prepend('<img id="oswald" src="imgs/oswald-view.jpg" />').css({"width": "25%", "margin-left": "auto", "margin-right": "auto", "background-color":"red"});

		var vid = document.getElementById("kaartVideo1");
		vid.play();
		console.log("playing video");
	});
//													HOVER DESCRIPTION
//													DESCR. BUTTON 1 - MOTORCADE
		$('#button1').on('mouseenter', function() {
		$("div.description").html("THE MOTORCADE").css({"top": "14%", "left": "44%"}).show();})
	.on('mouseleave', function() {
    	$('div.description').hide();  
	});

//													DESCR. BUTTON 2 - SHOT 1

	$('#button2').on('mouseenter', function() {
		$("div.description").html("THE FIRST SHOT").css({"top": "46%", "left": "26%"}).show();})
	.on('mouseleave', function() {
    	$('div.description').hide();  
	});

//													DESCR. BUTTON 3 - SHOT 2
	$('#button3').on('mouseenter', function() {
		$("div.description").html("THE SECOND SHOT").css({"top": "55%", "left": "39%"}).show();})
	.on('mouseleave', function() {
    	$('div.description').hide();  
	});

	//												DESCR. BUTTON 4 - SHOT 3
	$('#button4').on('mouseenter', function() {
		$("div.description").html("THE THIRD SHOT").css({"top": "61%", "left": "52%"}).show();})
	.on('mouseleave', function() {
    	$('div.description').hide();  
	});

	//												DESCR. BUTTON 5 - OSWALD
	$('#button5').on('mouseenter', function() {
		$("div.description").html("OSWALD").css({"top": "38%", "left": "13%"}).show();})
	.on('mouseleave', function() {
    	$('div.description').hide();  
	});
		//											DESCR. BUTTON 6 - BACK TO ROOM


	

	// 												HIDE OVERLAY WHEN CLICKED
    	$("#overlay").click(function(){
    	$("#overlay").hide();
    	$(".buttonShowWrap").fadeIn("slow");
		$("#overlay").fadeOut("slow");
		$("#video").empty();
		$("#text").empty();
		$("#image").empty();
    	});




	//												HIDE OVERLAY WHEN CLICKED OUTSIDE 
$(document).mouseup(function (e)
{
    var container = $("#overlay");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
		$(".buttonShowWrap").fadeIn("slow");
		$("#overlay").fadeOut("slow");
		$("#video").empty();
		$("#text").empty();
		$("#image").empty();

    }
});


}

function funeral(){
	$("#funPage").show();
	console.log("showing fun");
	$("#closeIt").unbind().css("z-index","3");
	$("#funVidDiv").append('<video id="funVid"></video>');
	$("#funVid").append('<source src="Video/funeral.mp4" type="video/mp4"></source>');
	var vid = document.getElementById("funVid");
	vid.play();

	//uitleg biiishhh
	$("#funTextDiv").fadeIn(2000);
	$("#textH2").html("Today is November 25, 1963");
	$("#closeIt").click(function(){
		console.log("Click "+ closeItClick);
		closeItClick = closeItClick + 1;

		if (closeItClick == 1){
			$("#textH2").fadeOut(500).html("You have arrived at St. Matthew's Cathedral").fadeIn(500);
		}

		if (closeItClick == 2){
			$("#textH2").fadeOut(500).html("This is where the state funeral of John Fitzgerald Kennedy takes place.").fadeIn(500);
			//fadeIn foto
		}

		if (closeItClick == 3){
			$("#textH2").fadeOut(500).html("It is here where you hand Abraham Zapruder your report.").fadeIn(500);
			//fadeIn foto
		}
		if (closeItClick == 4) {
			$("#textH2").fadeOut(500).html("Good work and goodbye, detective. Untill we meet again.").fadeIn(500);
			$("#funTextDiv").fadeOut(2000);
			$("#closeIt").css("z-index","1");
		}

		//$("#gangUitleg").fadeOut(500);
	});

	vid.onended = function(){
		location.reload();
	}

}

function fadeFrom(){
	$("fadeTo").hide();
}
function fadeTo(){
	$("#fadeTo").fadeIn(1000);
	console.log("should fade");
}