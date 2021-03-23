var UCRenderer =
			{
				render:function(actor)
				{
					var actorName = actor.attr('name');
					var res = "<div class=w3-col m1'style='margin-right:16px'>"+actorName;
					var fields = actor.attr('uses').split(",");
					res+="<div class='field w3-col m3' style='display:inline-block;margin-left:16px'>"+fields+"</div>";
					res+="</div>"
					return res;
				}
			}