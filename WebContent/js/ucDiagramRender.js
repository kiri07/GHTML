var UCRenderer =
            {
                render:function(actor)
                {
                    var actorName = actor.attr('name');
                    var res = "<div class='ucRow'><div class='actor'>"+actorName+"</div>";
                    var fields = actor.attr('uses').split(",");
                    res+="<div class='ucfield'>";
					for (var i = 0; i < fields.length ; i ++)
						res += fields[i] + "\n";
					res += "</div></div>";
                    console.log(res);

                    return res;
                }
            }