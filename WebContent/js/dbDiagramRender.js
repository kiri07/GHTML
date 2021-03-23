var DBRenderer =
			{
				render:function(el)
				{
					return DBRenderer["render"+el.attr('type')](el);
				},
				rendertable:function(table)
				{
				
					var res = "<div class='dbdiagram bg-warning col' style='display:inline-block;padding:1rem'>"
					var name = table.attr('name');
					var fields = table.attr('fields').split(",");
					res += "<div class=field style='font-weight:bold'>"+name+"</div>";
					res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
					for(var i=0;i<fields.length;i++)
						res+="<div class=field>"+fields[i]+"</div>";
					res+="</div>";
					return res;
				},
				renderrel:function(rel)
				{
					var res = "<div class='dbrel bg-danger col'>";
					var left = rel.attr('left');
					var right = rel.attr('right');
					var join = rel.attr('join');
					res += "<div style='text-align:center;padding-top:50%'>"+left+":"+right + "</div>";
					res += "<div>"+join + "</div>";
					res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
					res += "</div>"
					return res;
				}
			}