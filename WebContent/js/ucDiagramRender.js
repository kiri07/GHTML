var UCDiagramRenderer =
{
	render:function(classe)
		{
			// prepare row for the class (and possible interfaces)
			var res = "<div class='ucdiagram row'>";
			var name = classe.attr("name");
			console.log(name);
			var methods = classe.attr("methods").split(",");
			res += "<div class='classdiagram object col-md-4'>";
			res += "<img src='stickman.jpeg' width='10%' height='10%'>"+"</img>";
			res += "</div>";
			// this class implements interfaces?
				//open a new column for the arrow implements (TODO draw line!!)
				res += "<div class='ucdiagram implementation col-md-4'>";
				// here be canvases
				res += "<canvas class='implements' style='width:100%'>"+"hello im an arrow"+"</canvas>";
				//close the relation column
				res += "</div>";
				//open a new column for the interfaces
				res += "<div class='classdiagram interfaces col-md-4'>";
				// parse all interfaces
				for (var i = 0; i < methods.length; i ++)
					res += "<div class='field' style='text-align:center'>"+methods[i]+"</div class='field'>";
				// close the column
				res += "</div>";

			// close the class row
			res += "</div>";
			// finally, return to webpage
			return res;
		},
	renderrelationship:function(relationship)
	{
		// prepare row for relationship
		var res = "<div class='classdiagram row'>";
		res += "<div class='classdiagram relationship col-md-4'>";
		// get kind of relationship
		var relation = relationship.attr("relation");
		// prepare field for canvas (TODO CANVAS!!)
		res += "<canvas class='" + relation +"' style='width:100%;height:100%'>" + "</canvas>";
		// return res, arrow will be drawn after
		res += "</div>";
		res += "</div>";
		return res;
	}
}