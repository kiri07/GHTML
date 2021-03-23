var UCRenderer =
            {
                render:function(actors,uses,map)
                {   var maxlength=uses.length>actors.length? uses.length : actors.length;
                    var a=Math.floor(maxlength/actors.length);
                    var b=Math.floor(maxlength/uses.length);
                    var res="";
                    
                    for (var i = 1; i <= maxlength; i ++)
                    {
                    
                        res+= "<div class='ucRow'><div class='"+(((i%a)==0 &&(Math.floor(i/a)<=actors.length))?("actor'>"+actors[Math.floor(i/a)-1]):"emptycol'>")+"</div>";
                   
                        res+="<div class='emptycol'>";
                        //for(var a = 0; a < map.length; a ++)
                       
                        //if(map[a][0]==actors[Math.floor(i/a)-1]&&(i%a)==0 &&(Math.floor(i/a)<=actors.length))
                         //   res+="<dbel type='rel' left='1' right='n' join='author.id=book.authorid'></dbel>";

                        res+="</div><div class='"+(((i%b)==0 &&(Math.floor(i/b)<=uses.length))?("ucfield'>"+uses[Math.floor(i/b)-1]):"emptycol'>")+"</div>";
					
					    res += "</div>";
                    }
                    

                    return res;
                }
            }