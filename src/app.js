// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/

let app;

i18next
.use(i18nextBrowserLanguageDetector)
.use(i18nextHttpBackend)
.init({
    fallbackLng: 'en',
    // debug: true,
    saveMissing: false,
    backend: {
        loadPath: 'i18n/{{lng}}/{{ns}}.json',
        addPath: 'i18n/{{lng}}/{{ns}}.missing.json'
    }
    // 
    // useLocalStore: false
}, function (err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $, {
        useOptionsAttr: true
    });

    app = new Application();

    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $("*").localize();
    $("#nav-p1-p").append("<span id=\"nav-p1-points\" class=\"badge text-bg-warning\">0</span>");
    $("#nav-p2-p").append("<span id=\"nav-p2-points\" class=\"badge text-bg-warning\">0</span>");
    $("#nav-p3-p").append("<span id=\"nav-p3-points\" class=\"badge text-bg-warning\">0</span>");
    $("#nav-p4-p").append("<span id=\"nav-p4-points\" class=\"badge text-bg-warning\">0</span>");
});


class Application {

    constructor() {
        this.bellfaire = false;
        this.pearlbrook = false;
        this.spirecrest = false;

        this.updateData();

        $('#nav-p1-tab').on('click', (e) => { this.activePlayer = this.players[0]; this.updatePlayerOutput(); });
        $('#nav-p2-tab').on('click', (e) => { this.activePlayer = this.players[1]; this.updatePlayerOutput(); });
        $('#nav-p3-tab').on('click', (e) => { this.activePlayer = this.players[2]; this.updatePlayerOutput(); });
        $('#nav-p4-tab').on('click', (e) => { this.activePlayer = this.players[3]; this.updatePlayerOutput(); });
        $("#alert-cardlimit").hide();

        Handlebars.registerHelper('isPosperity', function (type) {
            return type == TYPES.prosperity;
        });
    }

    updateData() {
        this.bellfaire = $('#flexSwitchCheckBellfaire').is(':checked');
        this.pearlbrook = $('#flexSwitchCheckPearlbrook').is(':checked');
        this.spirecrest = $('#flexSwitchCheckSpirecrest').is(':checked');

        this.cards = [...Object.values(basecards)].filter((card) => card.getAvailability(this));
        this.basicEvents = [...Object.values(basicEvents)].filter((event) => event.getAvailability(this));
        this.specialEvents = [...Object.values(specialEvents)].filter((event) => event.getAvailability(this));
        this.garlandAwards = [...Object.values(garlandAwards)].filter((award) => award.getAvailability(this));
        this.wonders = [...Object.values(wonders)].filter((wonders) => wonders.getAvailability(this));
        this.adornments = [...Object.values(adornments)].filter((adornment) => adornment.getAvailability(this));

        this.reset();
        this.buildCards();
        this.setCardsDisable();
        $("#main-left").localize();
    }

    updatePlayerOutput() {
        $("#value_points").val(this.activePlayer.points);
        $("#value_points_badge").text(this.activePlayer.points);
        this.setCardsDisable();
    }

    reset() {
        this.players = [new Player("p1", this), new Player("p2", this), new Player("p3", this), new Player("p4", this)];
        this.activePlayer = this.players[0];
        this.players.forEach((player) => player.showPlayer());
        this.activeAward = null;
        $("#nav-p1-tab").tab('show');
        this.updatePlayerOutput();
        this.enableAll();
    }

    enableAll() {
        $("li.list-group-item").removeClass("disabled");
        $("[id^=journey_]").removeClass("text-bg-secondary disabled").addClass("text-bg-warning");
    }

    findCardByName(cardName) {
        for (let card of this.cards) {
            if (card.name == cardName) return card;
        }
        return null;
    }

    addToActivePlayer(cardName) {
        let card = this.findCardByName(cardName);
        if (card.getOccupiedSpaces(this.activePlayer) + this.activePlayer.getOccupiedSpaces() > 15) {
            $("#alert-cardlimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-cardlimit").slideUp(500);
            });
        } else {
            this.vibrate(50);
            this.activePlayer.addTown(card);
            this.setCardDisable(card);
            if (this.activeAward){
                this.calculateAward();
                this.players.forEach((player) => player.showPlayer());
            }
        }
    }

    removeFromActivePlayer(cardIndex) {
        let card = this.activePlayer.removeTown(cardIndex);
        this.setCardDisable(card);
    }

    addEventToActivePlayer(eventName) {
        if (eventName in basicEvents) {
            this.activePlayer.addBasicEvent(basicEvents[eventName]);
        } else {
            this.activePlayer.addSpecialEvent(specialEvents[eventName]);
        }
        this.vibrate(50);
        $("#event_" + eventName).addClass("disabled");
        if (this.players.reduce((prev, player) => prev + player.specialEvents.length, 0) >= 4) {
            $("#specialevent-header").prop("disabled", true);
        }
    }

    removeEventFromActivePlayer(eventIndex) {
        let eventName = this.activePlayer.removeBasicEvent(eventIndex);
        $("#event_" + eventName).removeClass("disabled");
    }

    removeSpEventFromActivePlayer(eventIndex) {
        let eventName = this.activePlayer.removeWonder(eventIndex);
        $("#event_" + eventName).removeClass("disabled");
        // $("#specialevent-header").prop("disabled", false).tab("hide");
    }

    addJourneyToActivePlayer(journeyIndex) {
        let value = journeys[journeyIndex];
        this.activePlayer.journeys.push(value);
        this.vibrate(50);
        if (value > 2) {
            $("#journey_" + value).removeClass("text-bg-warning").addClass("text-bg-secondary disabled");
        }
        this.activePlayer.showPlayer();
    }

    removeJourneyFromActivePlayer(journeyIndex) {
        let value = this.activePlayer.removeJourney(journeyIndex);
        if (value > 2)
            $("#journey_" + value).removeClass("text-bg-secondary disabled").addClass("text-bg-warning");
    }

    addWonderToActivePlayer(wonderName) {
        this.activePlayer.wonders.push(wonders[wonderName]);
        this.vibrate(50);
        $("#wonder_" + wonderName).addClass("disabled");
        this.activePlayer.showPlayer();
    }

    removeWonderFromActivePlayer(wonderIndex) {
        let wonderName = this.activePlayer.removeWonder(wonderIndex);
        $("#wonder_" + wonderName).removeClass("disabled");
    }

    addAdornmentToActivePlayer(adornmentName) {
        if (this.activePlayer.adornments.length < 2){
            this.activePlayer.adornments.push(adornments[adornmentName]);
            this.vibrate(50);
            $("#adornment_" + adornmentName).addClass("disabled");
            this.activePlayer.showPlayer();
        }else{
            $("#alert-adornmentlimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-adornmentlimit").slideUp(500);
            });
        }
    }

    removeAdornmentFromActivePlayer(adornmentIndex) {
        let adornmentName = this.activePlayer.removeAdornment(adornmentIndex);
        $("#adornment_" + adornmentName).removeClass("disabled");
    }

    chooseAward(awardName){
        if(this.activeAward)
            $("#award_" + this.activeAward.name).removeClass("highlight");
        $("#award_" + awardName).addClass("highlight");
        this.vibrate(50);
        this.activeAward = garlandAwards[awardName];
        this.calculateAward();
        this.players.forEach((player) => player.showPlayer());
    }

    removeAward(){
        $("#award_" + this.activeAward.name).removeClass("highlight");
        this.activeAward = null;
        this.players.forEach((player) => {
            player.garlandAchievemenPoints = 0;
            player.showPlayer();
        });
    }

    calculateAward(){
        let bucket = {};
        for(let player of this.players){
            let value = this.activeAward.rankingFunction(player);
            player.garlandAchievemenPoints = 0;
            if(!(value in bucket)){
                bucket[value] = [];
            }
            bucket[value].push(player);
        }
        let winners = Object.keys(bucket).sort().reverse();
        if(winners[0] > 0){
            bucket[winners[0]].forEach((player) => player.garlandAchievemenPoints = this.activeAward.pointsFirst);
        }
        if(winners[1] > 0){
            bucket[winners[1]].forEach((player) => player.garlandAchievemenPoints = this.activeAward.pointsSecond);
        }
    }

    setLanguage(lang) {
        i18next.changeLanguage(lang, (err, t) => {
            // start localizing, details:
            // https://github.com/i18next/jquery-i18next#usage-of-selector-function
            this.buildCards();
            this.setCardsDisable();
            if (this.activeAward)
                $("#award_" + this.activeAward.name).addClass("highlight");
            $("*").localize();
            $("#nav-p1-p").append(`<span id='nav-p1-points' class='badge text-bg-warning'>${this.players[0].getTotalPoints()}</span>`);
            $("#nav-p2-p").append(`<span id='nav-p2-points' class='badge text-bg-warning'>${this.players[1].getTotalPoints()}</span>`);
            $("#nav-p3-p").append(`<span id='nav-p3-points' class='badge text-bg-warning'>${this.players[2].getTotalPoints()}</span>`);
            $("#nav-p4-p").append(`<span id='nav-p4-points' class='badge text-bg-warning'>${this.players[3].getTotalPoints()}</span>`);
        });
    }

    resourceSet(name) {
        if (name == "pearl"){
            this.activePlayer.pearls = parseInt($("#value_" + this.activePlayer.divName + "_" + name).val());
        }else{
            this.activePlayer.leftResources[name] = parseInt($("#value_" + this.activePlayer.divName + "_" + name).val());
        }
        this.activePlayer.showPlayer();
    }

    buildCards() {
        let template = Handlebars.compile($("#cards-template").html());
        let suits = {};
        Object.values(TYPES).forEach(element => {
            suits[element] = this.cards.filter((card) => { return card.type == element });
        });
        for (const [, suit] of Object.entries(suits)) {
            suit.sort((a, b) => { return getCardName(a).localeCompare(getCardName(b)); });
        }
        this.specialEvents.sort((a, b) => { return getEventName(a).localeCompare(getEventName(b)); });
        this.garlandAwards.sort((a, b) => { return getAwardName(a).localeCompare(getAwardName(b)); });
        this.adornments.sort((a, b) => { return getAdornmentName(a).localeCompare(getAdornmentName(b)); });

        let html = template({
            suits: suits,
            basicEvents: this.basicEvents,
            specialEvents: this.specialEvents,
            journeys: journeys,
            garlandAwards: this.garlandAwards,
            wonders: this.wonders,
            adornments: this.adornments
        }, {
            allowProtoMethodsByDefault: true
        });
        $('#cards').html(html);
    }

    getCardUsageCount(searchedCard) {
        return this.players.reduce((prev1, player) => player.town.reduce((prev2, card) => card == searchedCard ? ++prev2 : prev2, prev1), 0);
    }

    isCardAvailable(card) {
        if (card.rarity == RARITY.unique && this.activePlayer.town.includes(card)
            || this.getCardUsageCount(card) >= card.maximum) {
            return false;
        }
        return true;
    }

    setCardsDisable() {
        this.cards.forEach(this.setCardDisable, this);

        this.players.forEach((player) => {
            player.basicEvents.forEach((event) => { $("#event_" + event).addClass('disabled'); });
            player.specialEvents.forEach((event) => { $("#event_" + event.name).addClass('disabled'); });
            player.journeys.forEach((value) => {
                if (value > 2) {
                    $("#journey_" + journeys.indexOf(value)).addClass("disabled");
                }
            })
        });
    }

    setCardDisable(card) {
        let cardItem = $("#card_" + card.name);
        if (!this.isCardAvailable(card)) {
            cardItem.addClass("disabled");
        } else {
            cardItem.removeClass("disabled");
        }
    }

    eventCardSetValue(name) {
        specialEvents[name].value = $("#value_" + name).val();
        this.playerRefresh();
    }

    playerRefresh() {
        this.activePlayer.showPlayer();
    }

    setActivePlayerPoints() {
        this.activePlayer.points = parseInt($("#value_points").val());
        $("#value_points_badge").text(this.activePlayer.points);
        this.activePlayer.showPlayer();
    }

    vibrate(intesity){
        if('vibrate' in window.navigator)
            window.navigator.vibrate(intesity);
    }
}