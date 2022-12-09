class Player {
    //base game
    town = [];
    basicEvents = [];
    specialEvents = [];
    journeys = [];
    points = 0;
    leftResources = {
        'twig': 0,
        'resin': 0,
        'pebble': 0,
        'berry': 0,
        'card': 0
    }

    //bellfaire
    garlandAchievemenPoints = 0;

    //pearlbrook
    wonders = [];
    adornments = [];
    pearls = 0;

    divName;
    #app;

    constructor(divName, app) {
        this.divName = divName;
        this.#app = app;
    }

    getOccupiedSpaces() {
        return this.town.reduce((prev, card) => prev + card.getOccupiedSpaces(this), 0);
    }

    addTown(card) {
        this.town.push(card);
        this.showPlayer();
    }

    removeTown(cardIndex) {
        let card = this.town.splice(cardIndex, 1)[0];
        this.showPlayer();
        return card;
    }

    addBasicEvent(event) {
        this.basicEvents.push(event);
        this.showPlayer();
    }

    removeBasicEvent(eventIndex) {
        let event = this.basicEvents.splice(eventIndex, 1)[0];
        this.showPlayer();
        return event.name;
    }

    addSpecialEvent(event) {
        this.specialEvents.push(event);
        this.showPlayer();
    }

    removeSpecialEvent(eventIndex) {
        let event = this.specialEvents.splice(eventIndex, 1)[0];
        this.showPlayer();
        return event.name;
    }

    removeJourney(journeyIndex) {
        let value = this.journeys.splice(journeyIndex, 1)[0];
        this.showPlayer();
        return value;
    }
    
    removeWonder(wonderIndex) {
        let wonder = this.wonders.splice(wonderIndex, 1)[0];
        this.showPlayer();
        return wonder.name;
    }

    removeAdornment(adornmentIndex) {
        let adornment = this.adornments.splice(adornmentIndex, 1)[0];
        this.showPlayer();
        return adornment.name;
    }

    findCountFct(findfunction) {
        return this.town.reduce((prev, card) => { if (findfunction(card)) ++prev; return prev; }, 0);
    }

    findCountType(type) {
        return this.findCountFct((card) => { return card.type == type; });
    }

    findCountKind(kind) {
        return this.findCountFct((card) => { return card.kind == kind; });
    }

    findCountRarityKind(rarity, kind) {
        return this.findCountFct((card) => { return card.kind == kind && card.rarity == rarity; });
    }

    findCountCard(cardToFind) {
        return this.findCountFct((card) => { return card == cardToFind; });
    }

    //minimal count of wife or husband is number of pairs
    getWifeHusbandPairs() {
        return Math.min(this.findCountCard(basecards['30']), this.findCountCard(basecards['31']));
    }

    getWifeAdditionalPoints() {
        return 3 * this.getWifeHusbandPairs();
    }

    getTotalPoints() {
        //Sum up all points
        return this.town.reduce((prev, card) => prev + card.points + card.getAdditionalPoints(this),
            this.specialEvents.reduce((prev, spevent) => prev + spevent.points,
                this.basicEvents.reduce((prev, event) => prev + event.points,
                    this.journeys.reduce((prev, journeyPoints) => prev + journeyPoints,
                        this.wonders.reduce((prev, wonder) => prev + wonder.points,
                            this.adornments.reduce((prev, adornments) => prev + adornments.getPoints(this),
                                this.points + this.getWifeAdditionalPoints() + this.garlandAchievemenPoints + 2 * this.pearls))))));
    }

    areLeftoversRequired() {
        //If Architect is in town or scale as adornment
        return this.town.includes(basecards['39']) || this.adornments.includes(adornments["scale"]);
    }

    showPlayer() {
        let template = Handlebars.compile($("#player-template").html());

        this.specialEvents.forEach((event) => { event.points = event.getPoints(app, this); })

        let displayedTown = this.town.map((card) => Object.assign({ addPoints: card.getAdditionalPoints(this) }, card));
        let displayedAdornments = this.adornments.map((adornment) => Object.assign({ points: adornment.getPoints(this) }, adornment));

        let html = template({
            cards: displayedTown,
            cardCount: this.getOccupiedSpaces(),
            cardCountPerc: 100 * this.getOccupiedSpaces() / 15,
            basicEvents: this.basicEvents,
            specialEvents: this.specialEvents,
            wonders: this.wonders,
            adornments: displayedAdornments,
            journeys: this.journeys,
            anyRessourceNeeded: this.areLeftoversRequired() || this.#app.pearlbrook,
            leftResources: this.areLeftoversRequired() ? this.leftResources : null,
            pearl: this.#app.pearlbrook ? { pearl: this.pearls, points: 2*this.pearls } : null,
            award: this.#app.activeAward && this.garlandAchievemenPoints > 0 ? { 
                name: this.#app.activeAward.name,
                points: this.garlandAchievemenPoints
            } : null, 
            nav: this.divName
        });
        // $("#value_points").val(this.points);
        $("#nav-" + this.divName).html(html);
        this.showTotalPoints();
        $(".tab-content").localize();
    }

    showTotalPoints() {
        $("#nav-" + this.divName + "-points").html(this.getTotalPoints()); //set sum in tab
    }
}