var UCRenderer =
            {
                render:function(actors,uses,map)
                {   var maxlength=uses.length>actors.length? uses.length : actors.length;
                    var a=Math.floor(maxlength/actors.length);
                    var b=Math.floor(maxlength/uses.length);
                    var res="<canvas class='gigio' width='1500' height='"+maxlength*250+"' style='border:1px solid #d3d3d3;'></canvas>";
                    

                    for (var i = 1; i <= maxlength; i ++)
                    {
                    
                        res+= "<div class='ucRow'><div class='emptycol'></div><div class='"+(((i%a)==0 &&(Math.floor(i/a)<=actors.length))?("actor'>"+"<img src='stickman.jpeg' style='width:50%;'></img>"+actors[Math.floor(i/a)-1])
                            :"emptycol'>")+"</div>";
                   
                        res+="<div class='emptycol' ;>";
                        //for(var a = 0; a < map.length; a ++)
                       
                        //if(map[a][0]==actors[Math.floor(i/a)-1]&&(i%a)==0 &&(Math.floor(i/a)<=actors.length))
                        res+="<div class='dbrel'></div><div></div><canvas class='gigi' style='width:100%;'></canvas>";
                        res+="</div><div class='"+(((i%b)==0 &&(Math.floor(i/b)<=uses.length))?("ucfield'>"+uses[Math.floor(i/b)-1]):"emptycol'>");
                    
                        res += "</div></div>";
                    }
                  


                    return res;
                }
            }
