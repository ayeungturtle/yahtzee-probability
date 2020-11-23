const randomDie = () => {
    return(Math.ceil(Math.random() * 6));
};

console.log(randomDie());

const testRandomness = () => {
    var diceCountArray = [0,0,0,0,0,0];
    
    for (var i = 0; i < 1000000; i++) {
        var dieNumber = randomDie();
        diceCountArray[dieNumber-1]++;
    };
    
    var sortedDiceCountArray = [...diceCountArray];
    sortedDiceCountArray.sort();
    sortedDiceCountArray.reverse();
    var rollRank = [];
    console.log(sortedDiceCountArray);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (diceCountArray[j] == sortedDiceCountArray[i]) {
                rollRank.push(j+1);
                break;
            };
        }
    }
    console.log(diceCountArray);
    console.log(rollRank);
};

const firstRound = () => {
    var endDice = {
        keeperDie: randomDie(),
        keeperCount: 1,
        countArray: [0,0,0,0,0,0]
    };
    endDice.countArray[keeperDie] = keeperCount;

    for (var i = 0; i < 5; i++) {
        var newDie = randomDie();
    }
};

const rollRound = (startDice) => {
    var endDice = {
        keeperDie: startDice.dieNumber,
        keeperCount: startDice.diceCount,
        countArray: [0,0,0,0,0,0]
    };
    endDice.countArray[startDice.keeperDie] = startDice.keeperCount;

    for (var i = 0; i < 6 - startDice.keeperCount; i++) {
        var newDie = randomDie();
        if (newDie == endDice.keeperDie)
            endDice.keeperCount++;
        else if (startDice.keeperCount < 3) {
            console.log("what");
            if (endDice.countArray[newDie] + 1 > endDice.keeperCount) {
                console.log("hello");
                endDice.keeperDie = newDie;
                endDice.keeperCount = endDice.countArray[newDie];
                endDice.countArray[newDie]++;
            };
        };
    };
    console.log(endDice);
    return endDice;
};

const fullTurn = () => {
    rollRound(rollRound(rollRound({keeperDie: 1, keeperCount: 0})));
};

fullTurn();