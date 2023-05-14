/* Filter unique array members 
Let arr be an array. 
Create a function unique(arr) that should return an array with unique items 
of arr. 
For instance: 
function unique(arr) { 
  /* your code */


	var array = ["Hare", "Krishna", "Hare", "Krishna", 
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];
				
	var outputArray = [];
	var count = 0;
	var start = false;
	
	for (j = 0; j < array.length; j++) {
		for (k = 0; k < outputArray.length; k++) {
			if ( array[j] == outputArray[k] ) {
				start = true;
			}
		}
		count++;
		if (count == 1 && start == false) {
			outputArray.push(array[j]);
		}
		start = false;
		count = 0;
	}
	console.log(outputArray);

