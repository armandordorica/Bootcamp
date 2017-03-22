function average(scores){
    var sum =0; 
    
    for(i=0; i<scores.length; i++){
        sum+=scores[i]; 
    }
    
    var average = sum/scores.length;
    
    // return Math.round(average);
    return average; 
}

var scores = [90, 98, 89, 100, 100, 86, 94]; 
console.log(average(scores)); //should return 94