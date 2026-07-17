let family = JSON.parse(localStorage.getItem("family")) || {

    Sean:{
        credits:0,
        money:0
    },

    Breanna:{
        credits:0,
        money:0
    },

    Grayson:{
        credits:0,
        money:0
    },

    Willow:{
        credits:0,
        money:0
    }

};


function saveBank(){

    localStorage.setItem(
        "family",
        JSON.stringify(family)
    );

}


function creditsToMoney(person, amount){

    let cost = amount * 5;

    if(family[person].credits >= cost){

        family[person].credits -= cost;
        family[person].money += amount;

        saveBank();

        return true;

    }

    return false;

}


function moneyToCredits(person, amount){

    if(family[person].money >= amount){

        family[person].money -= amount;
        family[person].credits += amount * 5;

        saveBank();

        return true;

    }

    return false;

}
