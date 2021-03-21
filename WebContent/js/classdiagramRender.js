var ClassDiagramRenderer = 
	{
		name:
			"",
		attributos:
			[],
		methods:
			[],
		render:
			function(document, id, name, attributos, methods)
			{
				this.name = name ? name : "noname";
				this.attributos = attributos ? attributos.split(",") : [];
				this.methods = methods ? methods.split(",") : [];
				const canvas = document.getElementById(id);
				const context = canvas.getContext("2d");
				context.fillStyle = 'red';
				context.strokeStyle = 'black';
				
				context.font = '20pt Verdana';
				context.fillText(name, 10, 50);
				context.strokeText(name, 10, 50);
				context.fill();
				context.stroke();
				var txt = "";
				var startPos = 70;
				for (var i = 0; i < this.attributos.length; i ++)
				{
					txt = this.attributos[i] + "\n";
					context.font = '10pt Calibri';
					context.fillText(txt, 10, startPos);
					context.strokeText(txt, 10, startPos);
					context.fill();
					context.stroke();
					startPos += 20;
				}
					
			}
};