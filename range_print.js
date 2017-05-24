function printRange(startPoint,endPoint,skipAmount){
	var a = startPoint
	var b = endPoint
	var c = skipAmount

	//in a case where user doesnt pass an end point and a skip amount
	if(b==undefined && c==undefined){
		for(var i = 0; i < a; i++){
			console.log(i)
		}
	}
	//in a case where user doesnt pass a skip amount
	if(c==undefined){
		for(var i = a; i < b; i++){
			console.log(i)
		}
	}
	//where a user passes all three arguments
	else{
		for(var i = a; i < b; i+=c){
			console.log(i)
		}
	}
}
printRange(5,10,2) 