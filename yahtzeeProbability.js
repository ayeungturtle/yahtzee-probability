const randomDie = () => {
    return(Math.floor(Math.random() * 6));
};

const testRandomness = () => {
    var diceCountArray = [0,0,0,0,0,0];

    for (var i = 0; i < 60000000; i++) {
        var dieNumber = randomDie();
        diceCountArray[dieNumber]++;
    };

    console.log(diceCountArray);
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