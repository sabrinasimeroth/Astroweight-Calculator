
$(document)
	.ready(function() {

	var planets = [
		['Pluto', 0.06],
		['Neptune', 1.148],
		['Uranus', 0.917],
		['Saturn', 1.139],
		['Jupiter', 2.640],
		['Mars', 0.3895],
		['Moon', 0.1655],
		['Earth', 1],
		['Venus', 0.9032],
		['Mercury', 0.377],
		['Sun', 27.9]
	];

	planets = planets.reverse();
	//populate planet names in select dropdown:
	$.each(planets, function (i, planet){
		$('#planetsDropdown').append("<option value = '" + planet[1] +"'>"
		+ planet[0] + '</option>');
	})

  //Create a function to calculate Weight upon clicking button
	$('#astroWeightForm').submit(function(e) {
			e.preventDefault();

    var yourWeight = $("#weightInput").val();
    var yourPlanet = $("select option:selected").text();
    var gravityCalc = $("select option:selected").val();
    var result = yourWeight * gravityCalc;

		$("#output").text("If you were on " + yourPlanet + ", you would weigh " + Math.round(result) + " lbs!");

		return false;
  });

});
