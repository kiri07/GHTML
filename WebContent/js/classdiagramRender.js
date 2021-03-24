var ClassDiagramRenderer =
{
	render:function(el)
		{
			return ClassDiagramRenderer["render"+el.attr('type')](el);
		},
	renderclass:function(classe)
		{
			// prepare row for the class (and possible interfaces)
			var res = "<div class='classdiagram row'>";
			var name = classe.attr("name");
			var astratta = classe.attr("abstract");
			var attributes = classe.attr("attrs").split(",");
			var methods = classe.attr("methods").split(",");
			var interfaces = classe.attr("interfaces") ? classe.attr("interfaces").split(",") : null;
			// prepare column for class
			res += "<div class='classdiagram object col'>";
			res += "<div class='field' style='text-align:center'>"+name+"</div class='field'>";
			// add a separator
			res += "<hr>";
			// parse all attributes
			for (var i = 0; i < attributes.length; i ++)
				res += "<div class='field' style='text-align:center'>"+attributes[i]+"</div class='field'>";
			// add a separator
			res += "<hr>";
			// parse all methods
			for (var i = 0; i < methods.length; i ++)
				res += "<div class='field' style='text-align:center'>"+methods[i]+"</div class='field'>";
			//first, close the class column 
			res += "</div>";
			// this class implements interfaces?
			if (interfaces != null)
			{
				//open a new column for the arrow implements (TODO draw line!!)
				res += "<div class='classdiagram implementation col'>";
				// here be canvases
				res += "<div class='field'>"+"hello im an arrow"+"</div class='field'>";
				//close the relation column
				res += "</div>";
				//open a new column for the interfaces
				res += "<div class='classdiagram interfaces col'>";
				// parse all interfaces
				for (var i = 0; i < interfaces.length; i ++)
					res += "<div class='field' style='text-align:center'>"+interfaces[i]+"</div class='field'>";
				// close the column
				res += "</div>";
			}
			// close the class row
			res += "</div>";
			// finally, return to webpage
			return res;
		},
	renderrelationship:function(relationship)
	{
		// prepare row for relationship
		var res = "<div class='classdiagram row'>";
		// get kind of relationship
		var relation = relationship.attr("relation");
		// prepare field for canvas (TODO CANVAS!!)
		res += "<canvas class='" + relation +"'>" + "</canvas>";
		// return res, arrow will be drawn after
		res += "</div>";
		return res;
	}
}