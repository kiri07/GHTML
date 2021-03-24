var DBRenderer =
			{
				render:function(el)
				{
					return DBRenderer["render"+el.attr('type')](el);
				},
				rendertable:function(table)
				{
					var res = "<div class='dbdiagram col'>";
					var name = table.attr('name');
					var fields = table.attr('fields').split(",");
					res += "<div class=field style='font-weight:bold;text-align:center'>"+name+"</div>";
					res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
					for(var i=0;i<fields.length;i++)
						res+="<div class=field>"+fields[i]+"</div>";
					res+="</div>";
					return res;
				},
				renderrel:function(rel)
				{
					var res = "<div class='col'>";
					var left = rel.attr('left');
					var right = rel.attr('right');
					var join = rel.attr('join');
					//TODO IDEALLY FOR SETTING A DIRECTION CREATE
					// ATTRIBUTE DIR INSIDE DIV, TO DEFINE PIXELS
					// IN DOCUMENT READY
					// res += "<div class='dbrel'>"+left+":"+right + "</div>";
					// res += "<div>"+join + "</div>";
					res += "<canvas class='dbrel' left="+left+" right=" + right + " join="+join+" style='width:100%;height:50%'></canvas>";
					res += "</div>"
					return res;
				}
			}