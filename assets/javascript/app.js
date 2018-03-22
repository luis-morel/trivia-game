$(document).ready(function () {

    var triviaData = {
        question: ["Which is the official distilled spirit of the United States?",
            "What is the strongest any alcohol can be?",
            "In the 1800s, which alcohol was used to clean hair?",
            "What is a martini mixed with tequila instead of dry gin called?",
            "Vodka is Russian for what?",
            "What is the biggest driving factor in the cost of alcohol?",
            "When first made, distilled spirits are which color?",
            "Which U.S. president's wife started her happy hour at 3: 00 pm ? ",
            "Which alcohol is considered a diuretic?",
            "How many milliliters of pure alcohol make up one alcoholic unit?",
            "Which of these drinks contains more alcohol units?",
            "Which one of these wine grapes is white?",
            "Which of these is NOT a brand of rum?",
            "What is the volume of a standard bottle of wine?",
            "Which two types of alcohol are used to make Sex on the Beach?",
            "Which alcohol was exempt from Prohibition laws when prescribed by a doctor or sold in pharmaceutical stores?",
            "What is the average number of grapes required to produce one bottle of wine?",
            "A bottle of champagne contains approximately how many bubbles?",
            "Which U.S. General drank alcohol on the job while leading his troops?",
            "Prior to 2009, which country permitted drunk driving as a legal excuse for car accidents?",
            "How much beer is consumed annually in the U.S.?"],
        choice1Label: 1,
        choice1Text: ["Rum", "60 proof", "Tequila", "Tequini", "Spirit", "Taxes",
            "Red", "Mary Todd Lincoln", "Gin", "5ml", "Pint of Stout", "Riesling",
            "Bacardi", "0.5 liters", "Vodka and Peach Schnapps", "Gin", "300", "10,000",
            "Ulysses S. Grant", "Colombia", "10.5 million"],
        choice2Label: 2,
        choice2Text: ["Gin", "70 proof", "Gin", "Long Island Iced Tea", "Little Water",
            "Production", "Pink", "Martha Washington", "Vodka", "10ml", "Pint of Lager",
            "Syrah", "Malibu", "1 liter", "Gin and Vermouth", "Whiskey", "600", "49 million",
            "George Washington", "Brazil", "1.2 billion"],
        choice3Label: 3,
        choice3Text: ["Bourbon", "120 proof", "Rum", "Mexquini", "Alcohol", "Marketing",
            "Clear; no color", "Pat Nixon", "Rum", "50ml", "Pint of Ale", "Cabernet Sauvignon",
            "Tanqueray", "0.75 liters", "Rum and Grand Marnrier", "Scotch", "1200", "16 million",
            "Dwight Eisenhower", "Chile", "500,000"],
        choice4Label: 4,
        choice4Text: ["Brandy", "190 proof", "Whiskey", "Dirty Martini", "God of Love", "Distribution",
            "Brown", "Michelle Obama", "Scotch", "25ml", "Large Glass of Wine", "Malbec", "Ron Zacapa",
            "0.85 liters", "Vodka and Brandy", "Rum", "900", "100,000", "Robert E. Lee", "Uruguay",
            "6.3 billion"],
        answerLabel: [3, 4, 3, 1, 3, 1, 3, 2, 1, 2, 4, 1, 3, 3, 1, 2, 2, 2, 1, 4, 4],
        answerText: ["Bourbon Whiskey, named after Bourbon County, Kentucky, is the official distilled spirit of the United States.",
            "190 proof is about 95% alcohol. At higher proof, the alcohol draws moisture from the air and self-dilutes.",
            "In the 1800s, people cleaned their hair with rum to maintain its health; they also applied brandy to strengthen the roots.",
            "Tequini",
            "Vodka is Russian for grain spirits that haven’t been flavored. It means \"little water.\"",
            "Heavy taxes more than double the price of a typical bottle of whiskey, rum or other distilled spirits beverage. Additionally, the federal government gets 14 times more in taxes on distilled spirits than producers earn making them. That does not include what states and localities additionally take in taxes on the same products.",
            "When first made, distilled spirits are completely clear with no color. They get their colors and hues from the aging process in oak barrels.",
            "In the 1790s, wife of George Washington, Martha Washington’s \"happy hour\" began at 3:00 p.m. And cocktails continued until dinner in the evening.",
            "Gin is a mild diuretic which helps the body get rid of excessive fluid. Thus, can sometimes help reduce problems such as menstrual bloating (excessive water retention due to hormonal changes).",
            "10ml",
            "A large glass of wine (~250ml) contains 3.3 units. A pint of ale contains 3 units and a pint of lager has 2.",
            "Riesling is a white grape.",
            "Tanqueray is a brand of Gin.",
            "A standard bottle of wine is 0.75 liters or 750 milliliters.",
            "\"Sex on the Beach\" is a cocktail containing vodka, peach schnapps, orange juice and cranberry juice.",
            "During the Prohibition era, the U.S. government's ban on alcohol sales did not include whiskey prescribed by a doctor and sold in pharmacies. This exemption was one of the chief reasons behind the exponential growth of the Walgreens pharmacy chain, which stocked whiskey and grew from 20 stores at the start of Prohibition to almost 400 stores in 1930.",
            "On average, it takes about 600 grapes to make a bottle of wine.",
            "According to Beekmanwine.com, scientist Bill Lembeck calculated about 49 million. Who has time to count all these bubbles, right?",
            "President Lincoln learned that General Grant drank whiskey while \"on the job\" leading his troops. Lincoln reportedly ordered \"Find out the name of the brand so I can give it to my other generals.\"",
            "Prior to 2009 drunk driving was considered a legal excuse for a car accident in Uruguay.",
            "6.3 billion gallons of beer are consumed annually in the US.  New Hampshire comes in first with 43 gallons per person; Utah is last with 19 gallons per person."]
    };

    var index = 0;

    function renderTrivia() {

        var div = $("<div>");
        var button = $("<button>");

        $("#question").html(triviaData.question[index++]);

        for (let i = 0; i < 4; i++) {
            $("#buttons").html("<div><button id='choice" + (i + 1) + "' class='buttons'>");
            $("#choice1").html((i + 1) + ") " + triviaData.choice1Text[i]);
            $("#choice2").html((i + 1) + ") " + triviaData.choice2Text[i]);
            $("#choice3").html((i + 1) + ") " + triviaData.choice3Text[i]);
            $("#choice4").html((i + 1) + ") " + triviaData.choice4Text[i]);

        }
    }

    // Kavitha's Code
    // for (var i = 0; i < 4; i++) {
    //     var options = $("<div>");
    //     options.attr('id', 'opt' + i);
    //     options.attr('class', 'choice');
    //     options.attr('value', i);
    //     options.text(triviaList[questionNumber].options[i]);
    //     $("#options").append(options);
    // }

    renderTrivia();

    // Display Trivia
    // $("#question").html(triviaData.question[0]);
    // $("#choice1").html("1) " + triviaData.choice1Text[0]);
    // $("#choice2").html("2) " + triviaData.choice2Text[0]);
    // $("#choice3").html("3) " + triviaData.choice3Text[0]);
    // $("#choice4").html("4) " + triviaData.choice4Text[0]);

});
