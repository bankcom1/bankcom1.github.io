let family = JSON.parse(localStorage.getItem("family")) || {

    Sean: {
        credits: 0,
        money: 0
    },

    Breanna: {
        credits: 0,
        money: 0
    },

    Grayson: {
        credits: 0,
        money: 0
    },

    Willow: {
        credits: 0,
        money: 0
    }

};


let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


function saveBank() {

    localStorage.setItem(
        "family",
        JSON.stringify(family)
    );

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}


function addTransaction(person, type, amount, reason) {

    transactions.unshift({

        person: person,

        type: type,

        amount: amount,

        reason: reason,

        date: new Date().toLocaleString()

    });

    saveBank();

}


function creditsToMoney(person, amount) {

    let cost = amount * 5;

    if (family[person].credits >= cost) {

        family[person].credits -= cost;

        family[person].money += amount;

        addTransaction(
            person,
            "Credits → Money",
            amount,
            "$" + amount + " redeemed"
        );

        saveBank();

        return true;

    }

    return false;

}


function moneyToCredits(person, amount) {

    if (family[person].money >= amount) {

        family[person].money -= amount;

        family[person].credits += amount * 5;

        addTransaction(
            person,
            "Money → Credits",
            amount,
            "$" + amount + " converted"
        );

        saveBank();

        return true;

    }

    return false;

}


function getTransactions() {

    return transactions;

}
