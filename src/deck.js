const TYPES = {
    traveler: 'traveler',
    production: 'production',
    destination: 'destination',
    governance: 'governance',
    prosperity: 'prosperity'
}
Object.freeze(TYPES);

const KINDS = {
    building: 0,
    critter: 1
}
Object.freeze(KINDS);

const RARITY = {
    common: 0,
    unique: 1
}
Object.freeze(RARITY)

const DISCOVERYTYPES = {
    foothills: 0,
    peaks: 1,
    ridge: 2
}
Object.freeze(DISCOVERYTYPES)

function points_zero(player) { return 0; }
function points_one(player) { return 1; }
function points_two(player) { return 2; }
function points_three(player) { return 3; }
function points_four(player) { return 4; }
function points_five(player) { return 5; }
function points_six(player) { return 6; }
function points_nine(player) { return 9; }
function space_zero(player) { return 0; }
function space_one(player) { return 1; }

function available_always(app) { return true; }
function available_bellfaire(app) { return app.bellfaire; }
function available_pearlbrook(app) { return app.pearlbrook; }
function available_npearlbrook(app) { return !app.pearlbrook; }
function available_spirecrest(app) { return app.spirecrest; }

const RESSOURCES = {
    twig: 'twig',
    resin: 'resin',
    pebble: 'pebble',
    berry: 'berry',
    card: 'card',
    pearl: 'pearl'
}
Object.freeze(RESSOURCES)

let basecards = {

    '03': {
        name: 'inn',
        type: TYPES.destination,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['innkeeper'],
        getAvailability: available_always
    },
    '04': {
        name: 'innkeeper',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '05': {
        name: 'postoffice',
        type: TYPES.destination,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['postal pigeon'],
        getAvailability: available_always
    },
    '06': {
        name: 'postalpigeon',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '07': {
        name: 'cemetery',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 0,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['undertaker'],
        getAvailability: available_always
    },
    '08': {
        name: 'undertaker',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '09': {
        name: 'chapel',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['shepherd'],
        getAvailability: available_always
    },
    '10': {
        name: 'shepherd',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '11': {
        name: 'lookout',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['wanderer'],
        getAvailability: available_always
    },
    '12': {
        name: 'wanderer',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_always
    },
    '13': {
        name: 'monastery',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['monk'],
        getAvailability: available_always
    },
    '14': {
        name: 'monk',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 0,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '15': {
        name: 'university',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['doctor'],
        getAvailability: available_always
    },
    '16': {
        name: 'doctor',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 4,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '17': {
        name: 'ruins',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['peddler'],
        getAvailability: available_always
    },
    '18': {
        name: 'peddler',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '19': {
        name: 'fairgrounds',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['fool'],
        getAvailability: available_always
    },
    '20': {
        name: 'fool',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: -2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '21': {
        name: 'twigbarge',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['bargetoad'],
        getAvailability: available_always
    },
    '22': {
        name: 'bargetoad',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '23': {
        name: 'resinrefinery',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['chipsweep'],
        getAvailability: available_always
    },
    '24': {
        name: 'chipsweep',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '25': {
        name: 'mine',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['minemoler'],
        getAvailability: available_always
    },
    '26': {
        name: 'minemoler',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '27': {
        name: 'storehouse',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['woodcarver'],
        getAvailability: available_always
    },
    '28': {
        name: 'woodcarver',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '29': {
        name: 'farm',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 8,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['husband', 'wife'],
        getAvailability: available_always
    },
    '30': {
        name: 'husband',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 4,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player) {
            if (player.findCountCard(basecards['31']) <= player.findCountCard(basecards['30'])) {
                return 1;
            }
            return 0;
        },
        related: ['wife'],
        getAvailability: available_always
    },
    '31': {
        name: 'wife',
        type: TYPES.prosperity,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 4,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player) {
            if (player.findCountCard(basecards['31']) > player.findCountCard(basecards['30'])) {
                return 1;
            }
            return 0;
        },
        related: ['husband'],
        getAvailability: available_always
    },
    '32': {
        name: 'generalstore',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['shopkeeper'],
        getAvailability: available_always
    },
    '33': {
        name: 'shopkeeper',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '34': {
        name: 'courthouse',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['judge'],
        getAvailability: available_always
    },
    '35': {
        name: 'judge',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '36': {
        name: 'clocktower',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['historian'],
        getAvailability: available_always
    },
    '37': {
        name: 'historian',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '38': {
        name: 'crane',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['architect'],
        getAvailability: available_always
    },
    '39': {
        name: 'architect',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: function (player) { return Math.min(6, player.leftResources['pebble'] + player.leftResources['resin']); },
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '40': {
        name: 'dungeon',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 0,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['ranger'],
        getAvailability: available_always
    },
    '41': {
        name: 'ranger',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '42': {
        name: 'evertree',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 5,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.findCountType(TYPES.prosperity); },
        getOccupiedSpaces: space_one,
        related: [''],
        getAvailability: available_always
    },
    '43': {
        name: 'castle',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 4,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.findCountRarityKind(RARITY.common, KINDS.building) },
        getOccupiedSpaces: space_one,
        related: ['king'],
        getAvailability: available_always
    },
    '44': {
        name: 'king',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 4,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.basicEvents.length + player.specialEvents.length * 2; },
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '45': {
        name: 'palace',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 4,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.findCountRarityKind(RARITY.unique, KINDS.building) },
        getOccupiedSpaces: space_one,
        related: ['queen'],
        getAvailability: available_always
    },
    '46': {
        name: 'queen',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 4,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '47': {
        name: 'school',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.findCountRarityKind(RARITY.common, KINDS.critter) },
        getOccupiedSpaces: space_one,
        related: ['teacher'],
        getAvailability: available_always
    },
    '48': {
        name: 'teacher',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },
    '49': {
        name: 'theater',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: function (player) { return player.findCountRarityKind(RARITY.unique, KINDS.critter) },
        getOccupiedSpaces: space_one,
        related: ['bard'],
        getAvailability: available_always
    },
    '50': {
        name: 'bard',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 0,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_always
    },



    '101': {
        name: 'ferry',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['ferryferret'],
        getAvailability: available_pearlbrook
    },
    '102': {
        name: 'ferryferret',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_pearlbrook
    },
    '103': {
        name: 'pirateship',
        type: TYPES.destination,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['pirate'],
        getAvailability: available_pearlbrook
    },
    '104': {
        name: 'pirate',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_pearlbrook
    },
    '105': {
        name: 'harbor',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['shipwright'],
        getAvailability: available_pearlbrook
    },
    '106': {
        name: 'shipwright',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: (player)=> player.findCountFct((card)=>card.getAvailability==available_pearlbrook),
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_pearlbrook
    },
    '107': {
        name: 'bridge',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['messenger'],
        getAvailability: available_pearlbrook
    },
    '108': {
        name: 'messenger',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_pearlbrook
    }
}

let basicEvents = {
    "grandtour": {
        name: "grandtour",
        points: 3,
        getAvailability: available_npearlbrook
    },
    "autumnfairy": {
        name: "autumnfairy",
        points: 3,
        getAvailability: available_npearlbrook
    },
    "expedition": {
        name: "expedition",
        points: 3,
        getAvailability: available_npearlbrook
    },
    "monument": {
        name: "monument",
        points: 3,
        getAvailability: available_npearlbrook
    },

    "flowerfestival": {
        name: "flowerfestival",
        points: 4,
        getAvailability: available_bellfaire
    }
}

let specialEvents = {
    "taxrelief": {
        name: "taxrelief",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_three,
        getAvailability: available_always
    },
    "pilgrimspath": {
        name: "pilgrimspath",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "undernewmanagement": {
        name: "undernewmanagement",
        input: true,
        value: 0,
        inputMax: 6,
        inputFactor: 1,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "awellruncity": {
        name: "awellruncity",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_always
    },
    "rememberingthefallen": {
        name: "rememberingthefallen",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "performerinresidence": {
        name: "performerinresidence",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "croakwartcure": {
        name: "croakwartcure",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_always
    },
    "capture": {
        name: "capture",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "marketingplan": {
        name: "marketingplan",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "ministeringtomiscreants": {
        name: "ministeringtomiscreants",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "graduation": {
        name: "graduation",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "pristinechapel": {
        name: "pristinechapel",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "everdellgames": {
        name: "everdellgames",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_nine,
        getAvailability: available_always
    },
    "ancientscrolls": {
        name: "ancientscrolls",
        input: true,
        value: 0,
        inputMax: 5,
        inputFactor: 1,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "fireworks": {
        name: "fireworks",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "flyingdoctor": {
        name: "flyingdoctor",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },


    "bednbreakfast": {
        name: "bednbreakfast",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "vacation": {
        name: "vacation",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "renaissance": {
        name: "renaissance",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "cakefeast": {
        name: "cakefeast",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "statues": {
        name: "statues",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "artnculture": {
        name: "artnculture",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "gathering": {
        name: "gathering",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "royalwedding": {
        name: "royalwedding",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "kingsroad": {
        name: "kingsroad",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },

    "romanticcruise": {
        name: "romanticcruise",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },
    "riverrace": {
        name: "riverrace",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_pearlbrook
    },
    "riverbath": {
        name: "riverbath",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_pearlbrook
    },
    "markedtreasure": {
        name: "markedtreasure",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },
    "treasurediscovery": {
        name: "treasurediscovery",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },
    "invitationmaskball": {
        name: "invitationmaskball",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    }
}

let garlandAwards = {
    "tales": {
        name: "tales",
        rankingFunction: (player) => player.findCountType(TYPES.traveler),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "tourism": {
        name: "tourism",
        rankingFunction: (player) => player.findCountType(TYPES.destination),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "beauty": {
        name: "beauty",
        rankingFunction: (player) => player.findCountType(TYPES.prosperity),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "peace": {
        name: "peace",
        rankingFunction: (player) => player.findCountType(TYPES.governance),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "farming": {
        name: "farming",
        rankingFunction: (player) => player.findCountType(TYPES.production),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "architecture": {
        name: "architecture",
        rankingFunction: (player) => player.findCountKind(KINDS.building),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    },
    "community": {
        name: "community",
        rankingFunction: (player) => player.findCountKind(KINDS.critter),
        pointsFirst: 6,
        pointsSecond: 3,
        getAvailability: available_bellfaire
    }
}

let journeys = [5, 4, 3, 2];

let wonders = {
    "flame": {
        name: "flame",
        points: 25,
        getAvailability: available_pearlbrook
    },
    "bridge": {
        name: "bridge",
        points: 20,
        getAvailability: available_pearlbrook
    },
    "gate": {
        name: "gate",
        points: 20,
        getAvailability: available_pearlbrook
    },
    "fountain": {
        name: "fountain",
        points: 15,
        getAvailability: available_pearlbrook
    }
}

let adornments = {
    "tiara": {
        name: "tiara",
        getPoints: (player) => player.findCountType(TYPES.prosperity),
        getAvailability: available_pearlbrook
    },
    "telescope": {
        name: "telescope",
        getPoints: (player) => player.wonders.length * 3,
        getAvailability: available_pearlbrook
    },
    "compass": {
        name: "compass",
        getPoints: (player) => player.findCountType(TYPES.traveler),
        getAvailability: available_pearlbrook
    },
    "goldenbook": {
        name: "goldenbook",
        getPoints: (player) => player.findCountType(TYPES.governance),
        getAvailability: available_pearlbrook
    },
    "mask": {
        name: "mask",
        getPoints: (player) => Math.trunc(player.points / 3),
        getAvailability: available_pearlbrook
    },
    "mirror": {
        name: "mirror",
        getPoints: (player) => { 
            let types = new Set();
            player.town.forEach(card => {
                types.add(card.type);
            });
            return types.size;
        },
        getAvailability: available_pearlbrook
    },
    "scale": {
        name: "scale",
        getPoints: (player) => Math.min(player.leftResources['card'], 5),
        getAvailability: available_pearlbrook
    },
    "sundial": {
        name: "sundial",
        getPoints: (player) => Math.trunc(player.findCountType(TYPES.production) / 2),
        getAvailability: available_pearlbrook
    },
    "hourglass": {
        name: "hourglass",
        getPoints: (player) => player.findCountType(TYPES.destination),
        getAvailability: available_pearlbrook
    },
    "bell": {
        name: "bell",
        getPoints: (player) => Math.trunc(player.findCountKind(KINDS.critter) / 2),
        getAvailability: available_pearlbrook
    },
    "townkey": {
        name: "townkey",
        getPoints: (player) => Math.trunc(player.findCountKind(KINDS.building) / 2),
        getAvailability: available_pearlbrook
    },
    "seacharm": {
        name: "seacharm",
        getPoints: points_three,
        getAvailability: available_pearlbrook
    }
}

let expeditions = {
    "meeks": {
        name: "meeks",
        points: 2,
        getAvailability: available_spirecrest
    },
    "lilyponds": {
        name: "lilyponds",
        points: 2,
        getAvailability: available_spirecrest
    },
    "thesea": {
        name: "thesea",
        points: 2,
        getAvailability: available_spirecrest
    },
    "fortress": {
        name: "fortress",
        points: 2,
        getAvailability: available_spirecrest
    },
    "manguste": {
        name: "manguste",
        points: 2,
        getAvailability: available_spirecrest
    },
    "yarasland": {
        name: "yarasland",
        points: 2,
        getAvailability: available_spirecrest
    },
    "littledell": {
        name: "littledell",
        points: 3,
        getAvailability: available_spirecrest
    },
    "blubmountain": {
        name: "blubmountain",
        points: 3,
        getAvailability: available_spirecrest
    },
    "cuddlebay": {
        name: "cuddlebay",
        points: 3,
        getAvailability: available_spirecrest
    },
    "stomp": {
        name: "stomp",
        points: 3,
        getAvailability: available_spirecrest
    },
    "watermill": {
        name: "watermill",
        points: 3,
        getAvailability: available_spirecrest
    },
    "longfootforest": {
        name: "longfootforest",
        points: 3,
        getAvailability: available_spirecrest
    },
    "earthcavevalley": {
        name: "earthcavevalley",
        points: 4,
        getAvailability: available_spirecrest
    },
    "ambercaves": {
        name: "ambercaves",
        points: 4,
        getAvailability: available_spirecrest
    },
    "berryfields": {
        name: "berryfields",
        points: 4,
        getAvailability: available_spirecrest
    },
    "dewworm": {
        name: "dewworm",
        points: 4,
        getAvailability: available_spirecrest
    },
    "twinbridges": {
        name: "twinbridges",
        points: 4,
        getAvailability: available_spirecrest
    },
    "mirrorlake": {
        name: "mirrorlake",
        points: 4,
        getAvailability: available_spirecrest
    },
    "badgersteeth": {
        name: "badgersteeth",
        points: 5,
        getAvailability: available_spirecrest
    },
    "debriscoast": {
        name: "debriscoast",
        points: 5,
        getAvailability: available_spirecrest
    },
    "quokkasisle": {
        name: "quokkasisle",
        points: 5,
        getAvailability: available_spirecrest
    },
    "seaofflowers": {
        name: "seaofflowers",
        points: 6,
        getAvailability: available_spirecrest
    },
    "soullessdesert": {
        name: "soullessdesert",
        points: 6,
        getAvailability: available_spirecrest
    },
    "mistfalls": {
        name: "mistfalls",
        points: 6,
        getAvailability: available_spirecrest
    },
}

let discoveries = {
    "greenrungpath": {
        name: "greenrungpath",
        getPoints:  (player) => (player.findCountType(TYPES.production) >= 4 ) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest
    },
    "misttrackpath": {
        name: "misttrackpath",
        getPoints: (player) => (player.findCountType(TYPES.traveler) >= 3 ) ? 4 : 0 ,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "everflowerpath": {
        name: "everflowerpath",
        getPoints: (player) => (player.findCountType(TYPES.prosperity) >= 3 ) ? 4 : 0 ,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "sunraypath": {
        name: "sunraypath",
        getPoints: (player) => (player.findCountType(TYPES.destination) >= 3 ) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest  
    },
    "starfallpath": {
        name: "starfallpath",
        getPoints: (player) => (player.findCountType(TYPES.governance) >= 3 ) ? 4 : 0 ,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "glockenspielpath": {
        name: "glockenspielpath",
        getPoints: (player) => (player.expeditions.length >= 3 ) ? 4 : 0 ,
        type: DISCOVERYTYPES.peaks,
        getAvailability: available_spirecrest
    },
    "glockenspielcity": {
        name: "glockenspielcity",
        // fix 3 point + number of fewest card type in city
        getPoints: (player) => 3 + TYPES.reduce((prev, type, _) => Math.min(prev, player.findCountType(type)), 15),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    }, 
    "greenrungcity": {
        name: "greenrungcity",
        getPoints: (player) => 6 - Math.trunc(player.findCountType(TYPES.production) / 2 ),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "everflowercity": {
        name: "everflowercity",
        getPoints: (player) => 6 - player.findCountType(TYPES.prosperity),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "misttrackcity": {
        name: "misttrackcity",
        getPoints: (player) => 6 - player.findCountType(TYPES.traveler),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "sunraycity": {
        name: "sunraycity",
        getPoints: (player) => 6 - player.findCountType(TYPES.destination),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "starfallcity": {
        name: "starfallcity",
        getPoints: (player) => 6 - player.findCountType(TYPES.governance),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "wayofhope": {
        name: "wayofhope",
        getPoints: (player) => Math.min(7, player.expeditions.reduce((prev, expedition, _) => prev + expedition.points, 0)),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "flybreakpath": {
        name: "flybreakpath",
        getPoints: (player) => player.basicEvents.length + player.specialEvents.length >= 2 ? 4 : 0,
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    }, 
    "greenrungcity": {
        name: "greenrungcity",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "everflowercity": {
        name: "everflowercity",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "misttrackcity": {
        name: "misttrackcity",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "sunraycity": {
        name: "sunraycity",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "starfallcity": {
        name: "starfallcity",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "wayofhope": {
        name: "wayofhope",
        getPoints: points_six,
        getAvailability: available_spirecrest
    },
    "flybreakpath": {
        name: "flybreakpath",
        getPoints: points_four,
        getAvailability: available_spirecrest
    }
}

function getCardName(card) {
    return i18next.t("card." + card.name);
}

function getEventName(event) {
    return i18next.t("event." + event.name);
}

function getAwardName(award) {
    return i18next.t("award." + award.name);
}

function getAdornmentName(adornment) {
    return i18next.t("adornment." + adornment.name);
}

function getExpeditionName(adornment) {
    return i18next.t("expedition." + adornment.name);
}

function getDiscoveryName(adornment) {
    return i18next.t("discovery." + adornment.name);
}