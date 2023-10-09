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
        this.mistwood = false;
        this.newleaf = false;

        this.updateData();

        $('#nav-p1-tab').on('click', (e) => { this.activePlayer = this.players[0]; this.updatePlayerOutput(); });
        $('#nav-p2-tab').on('click', (e) => { this.activePlayer = this.players[1]; this.updatePlayerOutput(); });
        $('#nav-p3-tab').on('click', (e) => { this.activePlayer = this.players[2]; this.updatePlayerOutput(); });
        $('#nav-p4-tab').on('click', (e) => { this.activePlayer = this.players[3]; this.updatePlayerOutput(); });
        $("#alert-cardlimit").hide();

        // returning something in this function, will result in a message box
        // if site is left
        window.onbeforeunload = function () { return 'Are you sure?' };

        Handlebars.registerHelper('isProsperityButNotWife', function (type, name) {
            return type == TYPES.prosperity && name != basecards['wife'].name;
        });
    }

    updateExpansions() {
        if (this.hasData())
            this.show_modal(i18next.t("text.data_loss_header"), i18next.t("text.expansion_content"), this.updateData, this.reset_expansions_ui);
        else
            this.updateData();
    }

    updateData() {
        this.bellfaire = $('#flexSwitchCheckBellfaire').is(':checked');
        this.pearlbrook = $('#flexSwitchCheckPearlbrook').is(':checked');
        this.spirecrest = $('#flexSwitchCheckSpirecrest').is(':checked');
        this.mistwood = $('#flexSwitchCheckMistwood').is(':checked');
        this.newleaf = $('#flexSwitchCheckNewleaf').is(':checked');

        this.cards = [...Object.values(basecards)].filter((card) => card.getAvailability(this));
        this.basicEvents = [...Object.values(basicEvents)].filter((event) => event.getAvailability(this));
        this.specialEvents = [...Object.values(specialEvents)].filter((event) => event.getAvailability(this));
        this.garlandAwards = [...Object.values(garlandAwards)].filter((award) => award.getAvailability(this));
        this.wonders = [...Object.values(wonders)].filter((wonders) => wonders.getAvailability(this));
        this.adornments = [...Object.values(adornments)].filter((adornment) => adornment.getAvailability(this))
        this.expeditions = [...Object.values(expeditions)].filter((expedition) => expedition.getAvailability(this));
        this.discoveries = [...Object.values(discoveries)].filter((discovery) => discovery.getAvailability(this));
        this.visitors = this.newleaf ? [...Object.values(visitors)] : [];
        this.playerpowers = [...Object.values(playerpowers)].filter((playerpower) => playerpower.getAvailability(this));

        this.reset();
        this.buildCards();
        this.setCardsDisable();
        $("#main-left").localize();

        this.buildLeftResources();
        $("#leftOverArea").localize();
    }

    updatePlayerOutput() {
        this.activePlayer.updateLeftOvers();
        $("#value_points").val(this.activePlayer.points);
        $("#value_points_badge").text(this.activePlayer.points);
        this.setCardsDisable();
    }

    // Sets switches in UI to stored values
    reset_expansions_ui() {
        $('#flexSwitchCheckBellfaire').prop('checked', this.bellfaire);
        $('#flexSwitchCheckPearlbrook').prop('checked', this.pearlbrook);
        $('#flexSwitchCheckSpirecrest').prop('checked', this.spirecrest);
        $('#flexSwitchCheckMistwood').prop('checked', this.mistwood);
        $('#flexSwitchCheckNewleaf').prop('checked', this.newleaf);
    }

    btn_reset() {
        this.show_modal(i18next.t("text.data_loss_header"), i18next.t("text.reset_content"), this.reset);
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
        if (card.getOccupiedSpaces(this.activePlayer, true) + this.activePlayer.getOccupiedSpaces() > this.activePlayer.getMaxSpace()) {
            $("#alert-cardlimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-cardlimit").slideUp(500);
            });
        } else {
            this.vibrate(50);

            this.activePlayer.addTown(card);
            this.setCardDisable(card);

            //Special handling photographer
            if (card == basecards['photographer']) {
                let prosperitiesInOtherTowns = new Set();
                for (let player of this.players) {
                    if (player == this.activePlayer)
                        continue;
                    player.town.filter((card) => card.type == TYPES.prosperity).forEach(prosperitiesInOtherTowns.add, prosperitiesInOtherTowns);
                }
                // If any other has also photographer, add cards of own town as well
                if (prosperitiesInOtherTowns.has(basecards['photographer'])) {
                    this.activePlayer.town.filter((card) => card.type == TYPES.prosperity).forEach(prosperitiesInOtherTowns.add, prosperitiesInOtherTowns);
                }
                prosperitiesInOtherTowns.delete(basecards['photographer']);

                let template = Handlebars.compile($("#photographer-template").html());
                let cards = [];
                for (const card of prosperitiesInOtherTowns.values()) {
                    cards.push({ name: card.name, points: card.getAdditionalPoints(this.activePlayer) });
                }

                let html = template({
                    cards: cards,
                }, {
                    allowProtoMethodsByDefault: true
                });
                $('#photographer_modal_body').html(html).localize();
                $('#photographer_modal').modal('show');
            }

            if (this.activeAward) {
                this.calculateAward();
                this.players.forEach((player) => player.showPlayer());
            } else if (this.mistwood) {
                this.players.forEach((player) => player.showPlayer());
                this.activePlayer.showPlayer();
            }
        }
    }

    chooseEffectCopy(cardname) {
        $('#photographer_modal').modal('hide');
        this.activePlayer.photographerChoiceCardName = cardname;
        this.activePlayer.showPlayer();
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
        let eventName = this.activePlayer.removeSpecialEvent(eventIndex);
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
        if (this.activePlayer.adornments.length < 2) {
            this.activePlayer.adornments.push(adornments[adornmentName]);
            this.vibrate(50);
            $("#adornment_" + adornmentName).addClass("disabled");
            this.activePlayer.showPlayer();
        } else {
            $("#alert-adornmentlimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-adornmentlimit").slideUp(500);
            });
        }
    }

    removeAdornmentFromActivePlayer(adornmentIndex) {
        let adornmentName = this.activePlayer.removeAdornment(adornmentIndex);
        $("#adornment_" + adornmentName).removeClass("disabled");
    }

    addExpeditionToActivePlayer(expeditionName) {
        if (this.activePlayer.expeditions.length < 3) {
            this.activePlayer.expeditions.push(expeditions[expeditionName]);
            this.vibrate(50);
            $("#expedition_" + expeditionName).addClass("disabled");
            this.activePlayer.showPlayer();
        } else {
            $("#alert-expeditionlimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-expeditionlimit").slideUp(500);
            });
        }
    }

    removeExpeditionFromActivePlayer(expeditionIndex) {
        let expeditionName = this.activePlayer.removeExpedition(expeditionIndex);
        $("#expedition_" + expeditionName).removeClass("disabled");
    }

    addDiscoveryToActivePlayer(discoveryName) {
        if (this.activePlayer.discoveries.length < 2) {
            this.activePlayer.discoveries.push(discoveries[discoveryName]);
            this.vibrate(50);
            $("#discovery_" + discoveryName).addClass("disabled");
            this.activePlayer.showPlayer();
        } else {
            $("#alert-discoverylimit").fadeTo(3000, 500).slideUp(500, function () {
                $("#alert-discoverylimit").slideUp(500);
            });
        }
    }

    removeDiscoveryFromActivePlayer(discoveryIndex) {
        let discoveryName = this.activePlayer.removeDiscovery(discoveryIndex);
        $("#discovery_" + discoveryName).removeClass("disabled");
    }

    addVisitorToActivePlayer(visitorName) {
        this.activePlayer.visitors.push(visitors[visitorName]);
        this.vibrate(50);
        $("#visitor_" + visitorName).addClass("disabled");
        this.activePlayer.showPlayer();
    }

    removeVisitorFromActivePlayer(visitorIndex) {
        let visitorName = this.activePlayer.removeVisitor(visitorIndex);
        $("#visitor_" + visitorName).removeClass("disabled");
    }

    chooseAward(awardName) {
        if (this.activeAward)
            $("#award_" + this.activeAward.name).removeClass("highlight");
        $("#award_" + awardName).addClass("highlight");
        this.vibrate(50);
        this.activeAward = garlandAwards[awardName];
        this.calculateAward();
        this.players.forEach((player) => player.showPlayer());
    }

    removeAward() {
        $("#award_" + this.activeAward.name).removeClass("highlight");
        this.activeAward = null;
        this.players.forEach((player) => {
            player.garlandAchievemenPoints = 0;
            player.showPlayer();
        });
    }

    setPlayerpowerToActivePlayer(playerpowername){
        this.activePlayer.playerpowername = playerpowername;
        $("#playerpower_" + playerpowername).addClass("disabled");
        this.activePlayer.showPlayer();
    }
    
    removePlayerpowerFromActivePlayer(){
        $("#playerpower_" + this.activePlayer.playerpowername).removeClass("disabled");
        this.activePlayer.playerpowername = null;
        this.activePlayer.showPlayer();
    }

    calculateAward() {
        let bucket = {};
        for (let player of this.players) {
            let value = this.activeAward.rankingFunction(player);
            player.garlandAchievemenPoints = 0;
            if (!(value in bucket)) {
                bucket[value] = [];
            }
            bucket[value].push(player);
        }
        let winners = Int8Array.from(Object.keys(bucket)).sort().reverse();
        if (winners[0] > 0) {
            bucket[winners[0]].forEach((player) => player.garlandAchievemenPoints = this.activeAward.pointsFirst);
        }
        if (winners[1] > 0) {
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
            for (let player of this.players) {
                player.resortTown();
            }
            this.activePlayer.showPlayer();
            $("*").localize();
            $("#nav-p1-p").append(`<span id='nav-p1-points' class='badge text-bg-warning'>${this.players[0].getTotalPoints()}</span>`);
            $("#nav-p2-p").append(`<span id='nav-p2-points' class='badge text-bg-warning'>${this.players[1].getTotalPoints()}</span>`);
            $("#nav-p3-p").append(`<span id='nav-p3-points' class='badge text-bg-warning'>${this.players[2].getTotalPoints()}</span>`);
            $("#nav-p4-p").append(`<span id='nav-p4-points' class='badge text-bg-warning'>${this.players[3].getTotalPoints()}</span>`);
        });
    }

    setResource(name) {
        $("#value_badge_" + name).html(this.activePlayer.leftResources[name] = parseInt($("#value_" + name).val()));
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
        this.expeditions.sort((a, b) => { return getExpeditionName(a).localeCompare(getExpeditionName(b)); });
        this.discoveries.sort((a, b) => { return getDiscoveryName(a).localeCompare(getDiscoveryName(b)); });
        this.visitors.sort((a, b) => { return getVisitorName(a).localeCompare(getVisitorName(b)); });
        this.playerpowers.sort((a, b) => { return getPlayerpowerName(a).localeCompare(getPlayerpowerName(b)); });

        let html = template({
            suits: suits,
            basicEvents: this.basicEvents,
            specialEvents: this.specialEvents,
            journeys: journeys,
            garlandAwards: this.garlandAwards,
            wonders: this.wonders,
            adornments: this.adornments,
            expeditions: this.expeditions,
            discoveries: this.discoveries,
            visitors: this.visitors,
            playerpowers: this.playerpowers
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
        specialEvents[name].points = specialEvents[name].getPoints(this, this.activePlayer);
        $("#event_value_" + name).html(specialEvents[name].points);
        this.playerRefresh();
    }

    playerRefresh() {
        this.activePlayer.updateTotalPoints();
    }

    setActivePlayerPoints() {
        this.activePlayer.points = parseInt($("#value_points").val());
        $("#value_points_badge").text(this.activePlayer.points);
        this.activePlayer.showPlayer();
    }

    buildLeftResources() {
        let template = Handlebars.compile($("#resource-template").html());
        let html = template({
            resources: RESOURCES
        });
        $('#leftResources').html(html);
    }

    vibrate(intesity) {
        if ('vibrate' in window.navigator)
            window.navigator.vibrate(intesity);
    }

    show_modal(header, text, fun_accept, fun_abort = null) {
        this.callback_accept = fun_accept;
        this.callback_abort = fun_abort;
        $("#modal_title").text(header);
        $("#modal_text").text(text);
        $("#modal_window").modal("show");
    }

    modal_accept() {
        $("#modal_window").modal("hide");
        this.callback_accept();
    }

    modal_abort() {
        $("#modal_window").modal("hide");
        if (this.callback_abort)
            this.callback_abort();
    }

    hasData() {
        return this.players.reduce((prev, player) => prev || player.hasData(), false);
    }
}