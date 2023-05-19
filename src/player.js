class Player {
    //base game
    town = [];
    basicEvents = [];
    specialEvents = [];
    journeys = [];
    points = 0;
    leftResources = {
    }

    //bellfaire
    garlandAchievemenPoints = 0;

    //pearlbrook
    wonders = [];
    adornments = [];

    //spirecrest
    expeditions = [];
    discoveries = [];

    divName;
    #app;

    constructor(divName, app) {
        this.divName = divName;
        this.#app = app;

        Object.values(RESSOURCES).forEach((val) => this.leftResources[val] = 0);
    }

    getOccupiedSpaces() {
        return this.town.reduce((prev, card) => prev + card.getOccupiedSpaces(this), 0);
    }

    getTownOverview() {
        let dict = {};
        this.town.forEach((card) => {
            if (card.type in dict)
                dict[card.type]++;
            else
                dict[card.type] = 1;
        });
        return dict;
    }

    compareByTypeAndLexicographically(cardA, cardB) {
        if (cardA.type == cardB.type){
            return getCardName(cardA).localeCompare(getCardName(cardB));
        }
        let typeOrder = Object.keys(TYPES);
        return typeOrder.findIndex((elem) => elem == cardA.type) - typeOrder.findIndex((elem) => elem == cardB.type);
    }

    addTown(card) {
        this.town.push(card);
        this.town.sort(this.compareByTypeAndLexicographically);
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
    
    removeExpedition(expeditionIndex) {
        let expedition = this.expeditions.splice(expeditionIndex, 1)[0];
        this.showPlayer();
        return expedition.name;
    }
    
    removeDiscovery(discoveryIndex) {
        let discovery = this.discoveries.splice(discoveryIndex, 1)[0];
        this.showPlayer();
        return discovery.name;
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
                                this.expeditions.reduce((prev, expedition) => prev + expedition.points,
                                    this.discoveries.reduce((prev, discovery) => prev + discovery.getPoints(this),
                                        this.points + this.getWifeAdditionalPoints() + this.garlandAchievemenPoints + 2 * this.leftResources[RESSOURCES.pearl]))))))));
    }

    areLeftoversRequired() {
        //If Architect is in town or scale as adornment
        return this.town.includes(basecards['39']) || this.adornments.includes(adornments["scales"]);
    }

    updateLeftOvers(){
        Object.keys(this.leftResources).forEach((key) => {
            $("#value_" + key).val(this.leftResources[key]);
            $("#value_badge_" + key).html(this.leftResources[key]);
        });
        this.showLeftOvers();
    }

    showLeftOvers(){
        if (this.#app.pearlbrook){
            $("#leftOverArea").show();
            $("#area_pearl").show();
            $("#area_card").show();
        }else{
            $("#area_pearl").hide();
            $("#area_card").hide();
            if (this.areLeftoversRequired())
                $("#leftOverArea").show();
            else
                $("#leftOverArea").hide();
        }
    }

    showPlayer() {
        let template = Handlebars.compile($("#player-template").html());

        this.specialEvents.forEach((event) => { event.points = event.getPoints(app, this); })

        let displayedTown = this.town.map((card) => Object.assign({ addPoints: card.getAdditionalPoints(this) }, card));
        let displayedAdornments = this.adornments.map((adornment) => Object.assign({ points: adornment.getPoints(this) }, adornment));
        let displayedDiscoveries = this.discoveries.map((discovery) => Object.assign({ points: discovery.getPoints(this) }, discovery));

        let html = template({
            cards: displayedTown,
            cardCount: this.getOccupiedSpaces(),
            cardCountPerc: 100 * this.getOccupiedSpaces() / 15,
            additionalWifePoints: this.getWifeAdditionalPoints(),
            basicEvents: this.basicEvents,
            specialEvents: this.specialEvents,
            wonders: this.wonders,
            adornments: displayedAdornments,
            expeditions: this.expeditions,
            discoveries: displayedDiscoveries,
            journeys: this.journeys,
            award: this.#app.activeAward && this.garlandAchievemenPoints > 0 ? { 
                name: this.#app.activeAward.name,
                points: this.garlandAchievemenPoints
            } : null, 
            nav: this.divName
        });

        this.showLeftOvers();

        $("#nav-" + this.divName).html(html);
        this.updateTotalPoints();
        $(".tab-content").localize();
    }

    updateTotalPoints() {
        $("#nav-" + this.divName + "-points").html(this.getTotalPoints()); //set sum in tab
    }
}