var CodeRenderer = 
	{
		Java:
		{
			tab:
				"<div class=tab></div>",
			keywords:
				["abstract", "default", "super", "for", "while", "finally", "case", "return", "default", "break", "try", "catch", "new ", "if(", "else", "switch", "do  ", "while", "int ", "double ", "float ", "boolean ", "char ", "short ", "long ", "byte ", "package ", "class ", "private ", "this ", "public ", "static ", "void"],
			variables:
				[],
			props:
				[],
			render:function(content,variables, props)
			{
				this.variables = variables ? variables : [];
				this.props = props ? props : [];
				var indent = 0;
				var res = "";
				text = content.split("\n");
				for(var i=1;i<text.length-1;i++)
				{
					var rendered = "";
					var line = text[i];
					if(line.trim()=="}")
						indent-=1;

					if(line.trim()[0]=="/")
						line="<div class=comment>"+line+"</div>";
					else
					{
						for(var k=0;k<this.keywords.length;k++)
							line = line.replace(this.keywords[k], "<div class=keyword>"+this.keywords[k].replace(" ","&nbsp;")+"</div>");
						for(var k=0;k<this.variables.length;k++)
							line = line.replace(this.variables[k], "<div class=variables>"+this.variables[k].replace(" ","&nbsp;")+"</div>");
						for(var k=0;k<this.props.length;k++)
							line = line.replace(this.props[k], "<div class=property>"+this.props[k].replace(" ","&nbsp;")+"</div>");
					}
					for(var k=0;k<indent;k++)
						rendered+=this.tab;

					line = line.replace("(TAB)", this.tab);
					line = line.replace("(TAB2)", this.tab + this.tab);
					for(var r=0;r<10;r++)
					{
						line = line.replace("< ", "&lt;");
						line = line.replace(" >", "&gt;");
					}
					line = "<div class=linenumber>"+(i>9 ? i : "0"+i)+"</div>"+line;
										
					
					rendered+=line+"<br />";
					// console.log(line);
					
					res+=rendered;

					if(line.trim()=="{")
						indent+=1;
					
				}
				return res;
			}					
		}};