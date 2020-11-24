const randomDie = () => {
    return(Math.floor(Math.random() * 6));
};

const testRandomness = () => {
    var diceCountArray = [0,0,0,0,0,0];
    
    for (var i = 0; i < 1000000; i++) {
        var dieNumber = randomDie();
        diceCountArray[dieNumber]++;
    };
    
    var sortedDiceCountArray = [...diceCountArray];
    sortedDiceCountArray.sort();
    sortedDiceCountArray.reverse();
    var rollRank = [];
    console.log(sortedDiceCountArray);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (diceCountArray[j] == sortedDiceCountArray[i]) {
                rollRank.push(j);
                break;
            };
        }
    }
    console.log(diceCountArray);
    console.log(rollRank);
};

const rollYahtzee = () => {
    var numberCount = [0,0,0,0,0,0]
    var mostFrequentNumber = 0;
    var mostFrequentNumberCount = 0;
    var diceToRoll = 5;
    var currentDie;

    for (var i = 0; i < 3; i++) {    
        diceToRoll = 5 - mostFrequentNumberCount;
        // console.log("dice to roll: " + diceToRoll);
        numberCount = [0,0,0,0,0,0];
        numberCount[mostFrequentNumber] = mostFrequentNumberCount;

        for (var j = 0; j < diceToRoll; j++) {
            currentDie = randomDie();
            // console.log("currentDie: " + currentDie);
            numberCount[currentDie]++;
            if (numberCount[currentDie] > mostFrequentNumberCount) {
                mostFrequentNumber = currentDie;
                mostFrequentNumberCount = numberCount[currentDie];
            };
            // console.log(numberCount);
            // console.log("mostFrequentNumber: " + mostFrequentNumber);
            // console.log("mostFrequentNumberCount: " + mostFrequentNumberCount);
        };

        if (mostFrequentNumberCount == 5) {
            // console.log("YAHTZEE!!!!!!!!!!!")
            return true;
        };
    };
    return false;
};

const turnsToGetYahtzee = () => {
    var turns = 0;
    while (rollYahtzee() == false)
    {
        turns++;
        // console.log("NEXT TURN");
    }
    turns++;
    console.log("It took " + turns + " turns to get a Yahtzee.");
    return turns;
};

const modelProbabilityOfYahtzee = () => {
    var rollsToModel = 1000000000;
    var yahtzeeCount = 0;
    
    for (var i = 0; i < rollsToModel; i++) {
        if (rollYahtzee())
        yahtzeeCount++;
    };
    
    var percentageYahtzees = (yahtzeeCount / rollsToModel) * 100;
    console.log("Yahtzee was rolled " + percentageYahtzees + "% of the time.");
    return percentageYahtzees;
};
modelProbabilityOfYahtzee();

// -------------------------------------------------------------------------------------
//   ARCHIVE BELOW....OLD CODE
// -------------------------------------------------------------------------------------

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

