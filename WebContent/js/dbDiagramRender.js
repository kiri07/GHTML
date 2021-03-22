var DBRenderer =
			{
				render:function(el)
				{
					return DBRenderer["render"+el.attr('type')](el);
				},
				rendertable:function(table)
				{
				
					var name = table.attr('name');
					var fields = table.attr('fields').split(",");
					var res = "<div class=w3-col m1'>"+name;
					for(var i=0;i<fields.length;i++)
						res+="<div class=field>"+fields[i]+"</div>";
					res+="</div>"
					return res;
				},
				renderrel:function(rel)
				{
					var left = rel.attr('left');
					var right = rel.attr('right');
					return left+":"+right;
				}
			}