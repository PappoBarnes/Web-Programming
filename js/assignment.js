//////javaScript Assignment //////
/////////////////////////////////
///////Term 2 Year 1 ///////////
///////////////////////////////



class Hotel { // creates the hotel object class

	constructor(name,rating,distanceFromCity, wifi,
		pool, pricePerNight){
	this.name=name;
	this.rating=rating;
	this.distanceFromCity=distanceFromCity;
	this.wifi=wifi;
	this.pool=pool;
	this.pricePerNight=pricePerNight; 
}
}

let hotel=[];// Creates an empty array.

hotel.push(new Hotel("The Grand","5","0.5","Yes","No","£190"));
hotel.push(new Hotel("The Plaza","4","1","Yes","Yes","£70"));
hotel.push(new Hotel("The Lord Milburn","4","5","Yes","No","£65"));
hotel.push(new Hotel("The Grange","3","1","Yes","No","£57"));
hotel.push(new Hotel("The Windmill","1","10","No","No","£5"));
hotel.push(new Hotel("The Excel","3","0.5","Yes","No","£56"));
hotel.push(new Hotel("The Ritz","2","5","Yes","No","£14"));
hotel.push(new Hotel("The Victoria","4","0.5","Yes","No","£80"));
hotel.push(new Hotel("Pheonix House","4","1","Yes","No","£72"));
hotel.push(new Hotel("The Lodge","2","1","No","No","£25"));
hotel.push(new Hotel("The Sanctum","5","2","Yes","Yes","£180"));

let userRating = prompt("Please Enter STAR RATING of the hotel you require : ");

//filter which generates starRating function

let ratingChoice=hotel.filter(function(starRating){

	if (starRating.rating===userRating){  //if statement to verify the rating input.
		return true;
	}
	  else if (userRating>5){
		alert("Please Enter A Valid Rating");
		return false;
		reload.location();    // Validation Alert !!!!NOT WORKING!!!
	}
	
})

	
ratingChoice.map(function(result){
		document.write((result.name) + ", " +(result.pricePerNight + "pn" + "</br>"));
	
	})
	
// ratingChoice.push(function(resultName){
// 	console.log(resultName);
// })	
// console.log(ratingChoice);


	