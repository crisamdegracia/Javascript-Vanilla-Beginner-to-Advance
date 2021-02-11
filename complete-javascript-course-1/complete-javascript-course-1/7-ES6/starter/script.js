class Parks {
	constructor(name, buildYear, numTrees, area){
		this.name = name;
		this.buildYear = buildYear;
		this.numTrees = numTrees;
		this.area = area;
		
	}

	// treeDensity(){
	    
	// 	console.log('Tree density: ' + this.numTrees / this.parkArea );

	// 	if(this.numTrees > )
	// }

	treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }

	parkAge(){
		var age = new Date().getFullYear();
		console.log('Park Age:  ' + (age - this.buildYear) );

	}


}

class Streets extends Parks {
	constructor(name, buildYear, streetLength, streetSize ){
		super(name, buildYear);
		this.streetLength = streetLength;
		this.streetSize = streetSize;
	}

	totalAveLength(){
		console.log()
	}

	sizeClass(){

	}
}
  
const park1 = [new Parks('Parklane', 1968, 3, 44)];
const street1 = new Streets('Woodlane', 1990, 30, 200);

function reportParks(p){
	p.forEach( el => el.treeDensity() );
}

// park1.treeDensity();
// park1.parkAge();

reportParks(park1);


