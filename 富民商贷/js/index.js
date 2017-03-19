$(document).ready(function() {
	//轮播
	jQuery(".slideBox").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});

	//日期
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();

	function convert(s) {
		return s < 10 ? "0" + s : s;
	}
	year = convert(year);
	month = convert(month);
	day = convert(day);
	$("#na-right-date").text(year + "-" + month + "-" + day);

	//鼠标放上有悬浮效果
	$(".suspension").mouseover(function() {
		$(this).addClass("shadow");
	})
	$(".suspension").mouseout(function() {
		$(this).removeClass("shadow");
	});
	//advantages
	$("#pic-1").mouseenter(function() {
		$(this).attr("src", "images/anquan-2.png");
	});
	$("#pic-1").mouseleave(function() {
		$(this).attr("src", "images/anquan-1.png");
	})
	$("#pic-2").mouseenter(function() {
		$(this).attr("src", "images/baozhang-2.png");
	});
	$("#pic-2").mouseleave(function() {
		$(this).attr("src", "images/baozhang-1.png");
	})
	$("#pic-3").mouseenter(function() {
		$(this).attr("src", "images/shouyi-2.png");
	});
	$("#pic-3").mouseleave(function() {
		$(this).attr("src", "images/shouyi-1.png");
	})
	$("#pic-4").mouseenter(function() {
		$(this).attr("src", "images/zidonghua-2.png");
	});
	$("#pic-4").mouseleave(function() {
		$(this).attr("src", "images/zidonghua-1.png");
	})

	$("#bottom-1").mouseenter(function() {
		$(this).attr("src", "images/bottom-0.png");
		$(this).css("margin-right", "19px");
	});
	$("#bottom-1").mouseleave(function() {
		$(this).attr("src", "images/bottom-1.png");
		$(this).css("margin-right", "20px");
	})

	//文字轮播
	jQuery(".txtMarquee-top").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		effect: "topMarquee",
		vis: 5,
		interTime: 50
	});

	var spanText = $("#tzlc-right-progress .progress-val").toArray()
		//	console.log(spanText[0].innerText)
		//	console.log(spanText.length)
	for(var i = 0; i < spanText.length; i++) {
		if(spanText[i].innerText == "100%") {
			var j = "." + i;
			console.log(j)
			$(j).css("background-color", "#d7d7d7").text("还款中");
		}
	}
});

//返回顶部
$(document).ready(function() {
	$.goup({
		trigger: 200,
		bottomOffset: 30,
		locationOffset: 20,
		containerRadius: 20,
		containerColor: "#aaa",
		entryAnimation: "slide",

	});
});