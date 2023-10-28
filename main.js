console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	$("#my_btn").click(()=>{
		const keisan= $("#my_syouhizei").val()
		console.log("keisan",keisan);
		const shimasu = parseInt(keisan);// 文字列->数値
		console.log("shimasu",shimasu);
		const keisanshimasu = shimasu + shimasu / 10 //結果を表示させる
		console.log("keisanshimasu",keisanshimasu);
		$("#my_result").text(keisanshimasu);

		const syouhizeidesu = shimasu * 0.1
		console.log("syouhizeidesu",syouhizeidesu);
		$("#my_result3").text(syouhizeidesu);

		
		
		//const shitai = parseInt(keisan);
		//console.log("shitai",shitai);
		const keisanshitaidesu =shimasu +  shimasu* 0.08
		console.log("keisanshitaidesu",keisanshitaidesu);
		$("#my_result2").text(keisanshitaidesu);



		const syouhizeihati= shimasu * 0.08
		console.log("syouhizeihati",syouhizeihati);
		$("#my_result4").text(syouhizeihati);
		});


		

	});

