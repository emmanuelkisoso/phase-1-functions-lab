function distanceFromHqInBlocks(someValue) {
    const hqlocation = 42;
    return Math.abs(someValue-hqlocation);

}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock=264;
    const blocksCovered=Math.abs(destination-start)
    const feetTraveled=blocksCovered*feetPerBlock
    return feetTraveled
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance<=400) {
        return 0;
    }
    else if (distance>400 && distance<2000) {
        return (distance-400)*0.02;
    }
    else if (distance>2000 && distance<2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}






