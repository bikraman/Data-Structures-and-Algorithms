// This is the method using string transformations
function combineUsingStringTransformations(number) {

    let nInS = new String(number); 

    let sum = 0;

    let split = nInS.split("")

    for (let i = 0; i < split.length; i++) {
        sum += new Number(split[i]);
    }

    if (String(sum).length === 1) {
        console.log(sum);
    }
    else {
        combineUsingStringTransformations(sum);
    }

}

combineUsingStringTransformations(12345);




