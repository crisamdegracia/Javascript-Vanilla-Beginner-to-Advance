class Parks {
	constructor(name, buildYear, numTrees, parkArea,){
		this.name = name;
		this.buildYear = buildYear;
		this.numTrees = numTrees;
		this.parkArea = parkArea;
		
	}

	treeDensity(){
		
		console.log( this.numTrees / this.parkArea )
	}


}

class Streets extends Parks {
	constructor(name, buildYear){
		super(name, buildYear);
	}
}

const density = new Parks('Parklane', 2021, 3, 44);

density.treeDensity();
