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
                    res += "<div class='row' style='background-color:lightblue'>";
                    res += "<div class='db field name'>"+name+"</div>"+"</div>";
                    var key = "<i class='fa fa-key' aria-hidden='true'></i>";
                    //res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
                    for(var i=0;i<fields.length;i++)
                    	{	
                    	var con=fields[i].includes('pk');
                    	console.log(con);
                        res+="<div class=field>"+(fields[i].includes('pk') ? key+" " : "")+fields[i]+"</div>";
                    }
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