// Code your solution in this file!
const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks(num){
    if(num > 42){
        return num - headquarters;
    } else if (num < 42){
        return headquarters - num;
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num)*feet;
}

function distanceTravelledInFeet(headquarters, num2){
    if (num2 > headquarters){
        return(num2 - headquarters)*feet;
    } else {
        return(headquarters-num2)*feet;
    }
}

function calculatesFarePrice(start, destination){
    const totalFeet = distanceTravelledInFeet(start, destination)
    let cost;
    if (totalFeet < 400){
        return(0);
    } else if ((totalFeet >= 400)&&(totalFeet<=2000)) {
        return cost = (totalFeet - 400)*0.02;
    } else if (totalFeet > 2500){
        return('cannot travel that far');
    } else if (totalFeet > 2000){
        return 25;
    }
}