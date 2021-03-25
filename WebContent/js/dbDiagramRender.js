var DBRenderer =
			{
				render:function(el)
				{
					return DBRenderer["render"+el.attr('type')](el);
				},
				rendertable:function(table)
				{
					var res = "<div class='dbdiagram col' style='margin:0'>";
                    var name = table.attr('name');
                    var fields = table.attr('fields').split(",");
                    res += "<div class='row' style='background-color:lightblue'>";
                    res += "<div class='db field name mx-auto'>"+name+"</div>"+"</div>";
                    var key = "<i class='fa fa-key mr-2' aria-hidden='true'></i>";
					var elementsImage= "<i class='far fa-gem mr-2'></i>";
                    //res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
                    for(var i=0;i<fields.length;i++)
                    {	
                    	var con=fields[i].includes('pk');
                    	console.log(con);
						if(fields[i].includes('pk'))
                        	res+="<div class='field'>"+ key + fields[i]+"</div>";
						else
							res+="<div class='field'>"+ elementsImage + fields[i]+"</div>";
                    }
                    res+="</div>";
                    return res;
				},
				renderrel:function(rel)
				{
					var res = "<div class='col' style='padding:0'>";
					var left = rel.attr('left');
					var right = rel.attr('right');
					var join = rel.attr('join');
					//TODO IDEALLY FOR SETTING A DIRECTION CREATE
					// ATTRIBUTE DIR INSIDE DIV, TO DEFINE PIXELS
					// IN DOCUMENT READY
					// res += "<div class='dbrel'>"+left+":"+right + "</div>";
					// res += "<div>"+join + "</div>";
					//res += "<canvas class='dbrel' left="+left+" right=" + right + " join="+join+" style='col'></canvas>";
					res+=	"<div id='container' class='col-3'><p style='text-align:center;'>"+left+"</p></div>"
							+"<div id='container' class='col-6'><p style='text-align:center;'>"+join+"<p></div>"
							+"<div id='container' class='col-3'><p style='text-align:center;'>"+right+"</p></div>"
							+"<canvas class='dbRelArrow' style='width:100%'>"+"hello im an arrow"+"</canvas>";
					res += "</div>"
					return res;
				}
			}