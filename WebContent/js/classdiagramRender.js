
var ClassDiagramRenderer = 
	{
		items:
			[],
		render:
			function(document, id, mapping)
			{
				var texto = mapping.split("\n");
				var startx = 10;
				var starty = 30;
				for (var i = 1; i < texto.length; i++)
				{
					console.log(texto[i].substring(3,4));
					if(texto[i].substring(3,4) == "C")
					{
						console.log(texto[i].split(";")[0],texto[i].split(";")[1],startx,starty);
						this.items.push(new item(texto[i].split(";")[1],texto[i].split(";")[2],startx,starty));
					}
					startx += 300;
				};
				for (var i = 0; i < this.items.length; i++)
				{
					const canvas = document.getElementById(id);
					const context = canvas.getContext("2d");
					context.fillStyle = 'red';
					context.strokeStyle = 'black';
					
					context.font = '20pt Verdana';
					context.fillText(this.items[i].name, this.items[i].posx, this.items[i].posy);
					context.strokeText(name, 10, 50);
					this.items[i].posy += 30;
					 for (var j = 0 ; j < this.items[i].attributes.length; j++)
					{
						const canvas = document.getElementById(id);
						const context = canvas.getContext("2d");
						context.fillStyle = 'red';
						context.strokeStyle = 'black';
						var content = "";
						console.log(content);
						content = this.items[i].attributes[j] + "\n";
						context.font = '10pt Verdana';
						context.fillText(content, this.items[i].posx, this.items[i].posy);
						context.strokeText(content, this.items[i].posx, this.items[i].posy);
						this.items[i].posy += 30;
					}; 
				};
					
			}
	};
	
class item
{
	constructor(name,attributes, posx, posy)
	{
		this.name = name;
		this.attributes = attributes.split(",");
		this.posx = posx;
		this.posy = posy;
	}
	
}