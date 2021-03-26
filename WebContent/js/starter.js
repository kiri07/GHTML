$(document).ready(function()
		{
		$(".code").each(function()
		{
			var language = $(this).attr('language');
			language = language ? language : "Java";
			var variables = $(this).attr('variables') ? $(this).attr('variables').split(",") : [];
			var props = $(this).attr('props') ? $(this).attr('props').split(",") : [];
			
			$(this).html(CodeRenderer[language].render($(this).text(),variables, props));
		});
		$("dbdiagram").each(function()
				{
					var res = "<div class='container-fluid' style='padding:1rem'><div class='row row-flex'>";
					$(this).find("dbel").each(function()
					{
						res+=DBRenderer.render($(this));
						console.log(res);
					});
					res += "</div></div>"
					$(this).html(res);
				});
		$("classdiagram").each(function()
				{
					// <div class='row row-flex'>" to add below
					var res = "<div class='container-fluid ml-5 p-3' style='padding:1rem'>";
					$(this).find("classel").each(function()
					{
						res+=ClassDiagramRenderer.render($(this));
					});
					// </div> to add below if doesn't render properly
					res += "</div>"
					$(this).html(res);
				});
		$("ucdiagram").each(function()
				{
					
					var res = "";
					var actors=[];
					var u=[];
					var usesd=[];
					var map=[];
					$(this).find("*").each(function()
					{	
						actors.push($(this).attr('name'));
						u.push($(this).attr('uses').split(","));
						for(var i=0;i<$(this).attr('uses').split(",").length;i++)
						map.push([$(this).attr('name'),($(this).attr('uses').split(","))[i]])
					});
		
					for(var i=0;i<u.length;i++)
						usesd=usesd.concat(u[i]);
		
					var uses=[];
					
					
					$.each(usesd, function(i, el)
					{
						if($.inArray(el, uses) === -1) uses.push(el);
					});
					
					res+=UCRenderer.render(actors,uses,map);
					
					$(this).html(res);
				});
		$(".ucarrow").each(function()
                {
                       
                        var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            var aWidth=5;
			            
			            var aLength=8;
			            var x0=0;
			            var y0=$(this).attr('start');
			            var x1=500;
			            var y1=$(this).attr('final');
			            var dx=x1-x0;
					    var dy=y1-y0;
					    var angle=Math.atan2(dy,dx);
					    var length=Math.sqrt(dx*dx+dy*dy);
					    
					    ctx.translate(x0,y0);
					    ctx.rotate(angle);
					    ctx.beginPath();
					    ctx.moveTo(0,0);
					    ctx.lineTo(length,0);
					    
					    ctx.moveTo(length-aLength,-aWidth);
					    ctx.lineTo(length,0);
					    ctx.lineTo(length-aLength,aWidth);
					    
					    ctx.stroke();
					    //ctx.setTransform(1,0,0,1,0,0);
					                });
		$("documentindex").each(function()
				{
					var res = "<h2>Indice</h2>";
					var bignum = 0;
					var tab = "<div class=tab></div>";
					$("h2").each(function()
					{
						bignum++;
						var smallnum 	= 0;
						var biglabel = $(this).text;
						res+="<div class=bignum>"+bignum+" - "+$(this).text()+"</div>";
						$(this).text(bignum+" - "+$(this).text());
						//res += "<div>" + $(this).text() + "</div>";
						$(this).next().find("h3").each(function()
						{
							smallnum++;
							res+="<div class=smallnum>"+tab+bignum+"."+smallnum+" "+$(this).text()+"</div>";
							//res += "<div>" + tab + $(this).text() + "</div>";
						});	
					});
					res += "<div class=break>&nbsp;</div>";
					$(this).html(res);
				});
		});