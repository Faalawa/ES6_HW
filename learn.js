class MiniDress {
    constructor (dressName, location, whoWornIt) {
        this.dressName = dressName;
        this.location = location;
        this.isFlare = 100;
        this.flareLevel = flareLevel;
        this.friends = friends;
        this.dresLength =dressLength;
        this.flares = {
            moveWhileWalking: 20,
            moveWhileDansing: 30,
            moveWhileRunning: 20,
            moveWhileStanding: 10
        }
    }
}

dressMovement (move, isFlare = false); {
    if (this.isFlare == false) {
        return console.log("This dress is straight and too close to the body");
    }
}
const dressMovement = this.flareLevel - this.flare[move];
if (this.flareLevel - this.flare[move] < 0 && isFlare == false) {
    console.log(`This dress is too close to the body to ${move}`);
} else {
    this.flareLevel = dressMovement;
    console.log(`Less dress movement, but ${move} is still possible`);
}

addFriend(friendName) {
    this.friends.push(friendName)
    console.log(`My friend name is ${friendName}, she is wearing the same dress as me`);
}

class longDress extends MiniDress {
    constructor();
        super(dressName, location, whoWornIt);
        this.flareLevel = 200
        this.flares = {
            moveWhileWalking: 20,
            moveWhileDansing: 30,
            moveWhileRunning: 20,
            moveWhileStanding: 10
        }
    };
}

dressMovement (move, isFlare = false); {
    if (this.isFlare == false) {
        return console.log("This dress is straight and too close to the body");
    }
}
const dressMovement = this.flareLevel - this.flare[move];
if (this.flareLevel - this.flare[move] < -100 && isFlare == false) {
    console.log(`This dress is too close to the body to ${move}`);
} else {
    this.flareLevel = dressMovement;
    console.log(`Less dress movement, but ${move} is still possible`);
}

addFriend(friendName) {
    this.friends.push(friendName);
    console.log(`My friend name is ${friendName}, she is wearing the same dress as me.`);
}



