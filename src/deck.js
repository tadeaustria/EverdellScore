const TYPES = {
    traveler: 'traveler',
    production: 'production',
    destination: 'destination',
    governance: 'governance',
    prosperity: 'prosperity'
}
Object.freeze(TYPES);

const KINDS = {
    building: 'building',
    critter: 'critter'
}
Object.freeze(KINDS);

const RARITY = {
    common: 'common',
    unique: 'unique'
}
Object.freeze(RARITY)

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
        related: ['innkeeper']
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
        related: []
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
        related: ['postal pigeon']
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
        related: []
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
        related: ['undertaker']
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
        related: []
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
        related: ['shepherd']
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
        related: []
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
        related: ['wanderer']
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
        related: []
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
        related: ['monk']
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
        related: []
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
        related: ['doctor']
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
        related: []
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
        related: ['peddler']
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
        related: []
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
        related: ['fool']
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
        related: []
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
        related: ['bargetoad']
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
        related: []
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
        related: ['chipsweep']
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
        related: []
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
        related: ['minemoler']
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
        related: []
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
        related: ['woodcarver']
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
        related: []
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
        related: ['husband', 'wife']
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
        related: ['wife']
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
        related: ['husband']
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
        related: ['shopkeeper']
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
        related: []
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
        related: ['judge']
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
        related: []
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
        related: ['historian']
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
        related: []
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
        related: ['architect']
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
        related: []
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
        related: ['ranger']
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
        related: []
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
        related: ['']
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
        related: ['king']
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
        related: []
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
        related: ['queen']
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
        related: []
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
        related: ['teacher']
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
        related: []
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
        related: ['bard']
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
        related: []
    }
}

let basicEvents = {
    "grandtour": 3,
    "autumnfairy": 3,
    "expedition": 3,
    "monument": 3
}

let specialEvents = {
    "taxrelief": {
        name: "taxrelief",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_three
    },
    "pilgrimspath": {
        name: "pilgrimspath",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "undernewmanagement": {
        name: "undernewmanagement",
        input: true,
        value: 0,
        inputMax: 6,
        inputFactor: 1,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "awellruncity": {
        name: "awellruncity",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four
    },
    "rememberingthefallen": {
        name: "rememberingthefallen",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "performerinresidence": {
        name: "performerinresidence",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "croakwartcure": {
        name: "croakwartcure",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six
    },
    "capture": {
        name: "capture",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "marketingplan": {
        name: "marketingplan",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "ministeringtomiscreants": {
        name: "ministeringtomiscreants",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "graduation": {
        name: "graduation",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "pristinechapel": {
        name: "pristinechapel",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "everdellgames": {
        name: "everdellgames",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_nine
    },
    "ancientscrolls": {
        name: "ancientscrolls",
        input: true,
        value: 0,
        inputMax: 5,
        inputFactor: 1,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "fireworks": {
        name: "fireworks",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    },
    "flyingdoctor": {
        name: "flyingdoctor",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; }
    }
}

let journeys = [5, 4, 3, 2];

function getCardName(card) {
    return i18next.t("card." + card.name);
}

function getEventName(event) {
    return i18next.t("event." + event.name);
}