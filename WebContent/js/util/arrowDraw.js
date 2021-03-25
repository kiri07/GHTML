$(document).ready(function()
		{

		$(".associates").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(120, 120);
			            ctx.moveTo(180, 120);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".inherit").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(120, 120);
			            ctx.lineTo(180, 120);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".implements").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
			            ctx.beginPath();
			            ctx.moveTo(300,75);
			            ctx.lineTo(0, 75);
			            ctx.stroke();
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            ctx.lineTo(20, 50);
			            ctx.lineTo(20, 100);
			            ctx.lineTo(0, 75);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".depends").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.setLineDash([5, 3]);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(120, 120);
			            ctx.moveTo(180, 120);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".aggregates").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(120, 120);
			            ctx.lineTo(150, 90);
			            ctx.lineTo(180, 120);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".composes").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(120, 120);
			            ctx.lineTo(150, 90);
			            ctx.lineTo(180, 120);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "black";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".dbRelArrow").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.beginPath();
			            ctx.moveTo(300,75);
			            ctx.lineTo(0, 75);
			            ctx.stroke();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		});