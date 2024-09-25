var myArray = [1, 2, 3, 4];

function maxMinValue (array){
    array.sort((a,b) => b-a);
    console.log(`El número máximo es ${array[0]}`);
    console.log(`El número mínimo es ${array[array.length-1]}`);
}

maxMinValue(myArray);