var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
    };

function order(object){
    let newObject= Object.entries(object)
    .sort((a,b) => a[1]-b[1]).map((input) => input[0]);
    
    console.log(newObject);
}

order(object);

