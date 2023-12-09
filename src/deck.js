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
    common: 0,
    unique: 1,
    legendary: 2
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
function points_seven(player) { return 7; }
function points_nine(player) { return 9; }

function space_zero(player, to_be_added) { return 0; }
function space_one(player, to_be_added) { return 1; }

function available_always(app) { return true; }
function available_bellfaire(app) { return app.bellfaire; }
function available_pearlbrook(app) { return app.pearlbrook; }
function available_npearlbrook(app) { return !app.pearlbrook; }
function available_spirecrest(app) { return app.spirecrest; }
function available_newleaf(app) { return app.newleaf; }
function available_mistwood(app) { return app.mistwood; }

const RESOURCES = {
    twig: 'twig',
    resin: 'resin',
    pebble: 'pebble',
    berry: 'berry',
    card: 'card',
    pearl: 'pearl'
}
Object.freeze(RESOURCES)

let basecards = {

    'inn': {
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
    'innkeeper': {
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
    'postoffice': {
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
    'postalpigeon': {
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
    'cemetery': {
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
    'undertaker': {
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
    'chapel': {
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
    'shepherd': {
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
    'lookout': {
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
    'wanderer': {
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
    'monastery': {
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
    'monk': {
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
    'university': {
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
    'doctor': {
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
    'ruins': {
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
    'peddler': {
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
    'fairgrounds': {
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
    'fool': {
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
    'twigbarge': {
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
    'bargetoad': {
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
    'resinrefinery': {
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
    'chipsweep': {
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
    'mine': {
        name: 'mine',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['minermole'],
        getAvailability: available_always
    },
    'minermole': {
        name: 'minermole',
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
    'storehouse': {
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
    'woodcarver': {
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
    'farm': {
        name: 'farm',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 8,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player, to_be_added) {
            if (player.findCountCard(basecards['greenhouse']) <= player.findCountCard(basecards['farm']) && 
                player.playerpowername != 'pigs') {
                return 1;
            }
            return 0;
        },
        related: ['husband', 'wife'],
        getAvailability: available_always
    },
    'farmnospace': {
        name: 'farmnospace',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: ['husband', 'wife'],
        getAvailability: available_mistwood
    },
    'husband': {
        name: 'husband',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 4,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player, to_be_added) {
            if (player.findCountCard(basecards['wife']) <= player.findCountCard(basecards['husband'])) {
                return 1;
            }
            return 0;
        },
        related: ['wife'],
        getAvailability: available_always
    },
    'wife': {
        name: 'wife',
        type: TYPES.prosperity,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 2,
        maximum: 4,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player, to_be_added) {
            // Wife requires 1 space if she should be added to town and town already has
            // as many wifes as husbands
            if (player.findCountHusbandMatches() > player.findCountCard(basecards['husband']) ||
                to_be_added && player.findCountHusbandMatches() == player.findCountCard(basecards['husband'])) {
                return 1;
            }
            return 0;
        },
        related: ['husband'],
        getAvailability: available_always
    },
    'generalstore': {
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
    'shopkeeper': {
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
    'courthouse': {
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
    'judge': {
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
    'clocktower': {
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
    'historian': {
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
    'crane': {
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
    'architect': {
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
    'dungeon': {
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
    'ranger': {
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
    'evertree': {
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
    'castle': {
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
    'king': {
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
    'palace': {
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
    'queen': {
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
    'school': {
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
    'teacher': {
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
    'theater': {
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
    'bard': {
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



    'ferry': {
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
    'ferryferret': {
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
    'pirateship': {
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
    'pirate': {
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
    'harbor': {
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
    'shipwright': {
        name: 'shipwright',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: (player) => player.findCountFct((card) => card.getAvailability == available_pearlbrook),
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_pearlbrook
    },
    'bridge': {
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
    'messenger': {
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
    },

    'baker': {
        name: 'baker',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: (player) => Math.min(6, player.leftResources[RESOURCES.berry] * 2),
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'chipsmith': {
        name: 'chipsmith',
        type: TYPES.destination,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'conductor': {
        name: 'conductor',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'diplomat': {
        name: 'diplomat',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'gardener': {
        name: 'gardener',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'inventor': {
        name: 'inventor',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'lamplighter': {
        name: 'lamplighter',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'magician': {
        name: 'magician',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'mayor': {
        name: 'mayor',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'miller': {
        name: 'miller',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'photographer': {
        name: 'photographer',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 2,
        maximum: 2,
        getAdditionalPoints: (player) => player.photographerChoiceCardName == null ? 0 : basecards[player.photographerChoiceCardName].getAdditionalPoints(player),
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'poet': {
        name: 'poet',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.critter,
        points: 0,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'airballoon': {
        name: 'airballoon',
        type: TYPES.traveler,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_newleaf
    },
    'bank': {
        name: 'bank',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'cityhall': {
        name: 'cityhall',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'everwall': {
        name: 'everwall',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 6,
        maximum: 2,
        getAdditionalPoints: (player) => Math.floor((player.getOccupiedSpaces() / 5 * 2)),
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_newleaf
    },
    'freightcar': {
        name: 'freightcar',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'greenhouse': {
        name: 'greenhouse',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 2,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: function (player, to_be_added) {
            // Greenhouse requires 1 space if she should be added to town and town already has
            // as many greenhouses as farms
            if (player.findCountCard(basecards['greenhouse']) > player.findCountCard(basecards['farm']) || 
                to_be_added && player.findCountCard(basecards['greenhouse']) == player.findCountCard(basecards['farm']) ||
                player.playerpowername == 'pigs' ) {
                return 1;
            }
            return 0;
        },
        related: [],
        getAvailability: available_newleaf
    },
    'hotel': {
        name: 'hotel',
        type: TYPES.destination,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'library': {
        name: 'library',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: (player) => Object.entries(player.getTownOverview()).length,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'locomotive': {
        name: 'locomotive',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 3,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'mainroad': {
        name: 'mainroad',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 0,
        maximum: 4,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_newleaf
    },
    'museum': {
        name: 'museum',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 2,
        maximum: 2,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },
    'teahouse': {
        name: 'teahouse',
        type: TYPES.production,
        rarity: RARITY.common,
        kind: KINDS.building,
        points: 1,
        maximum: 3,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_newleaf
    },

    'corrinspath': {
        name: 'corrinspath',
        type: TYPES.destination,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 0,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_mistwood
    },
    'corrinsfield': {
        name: 'corrinsfield',
        type: TYPES.production,
        rarity: RARITY.unique,
        kind: KINDS.building,
        points: 1,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_mistwood
    },
    'corrintheleader': {
        name: 'corrintheleader',
        type: TYPES.governance,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_mistwood
    },
    'corrintheking': {
        name: 'corrintheking',
        type: TYPES.prosperity,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 4,
        maximum: 1,
        getAdditionalPoints: 
            // Prosperity cards in one other town (obviously max then)
            (player) => player.getOtherPlayers().reduce((prev, pl) => Math.max(prev, pl.findCountType(TYPES.prosperity)), 0),
        getOccupiedSpaces: space_one,
        related: [],
        getAvailability: available_mistwood
    },
    'corrinthewarrior': {
        name: 'corrinthewarrior',
        type: TYPES.traveler,
        rarity: RARITY.unique,
        kind: KINDS.critter,
        points: 1,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_zero,
        related: [],
        getAvailability: available_mistwood
    },

    'chipterswipple': {
        name: 'chipterswipple',
        type: TYPES.production,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['chipsweep'],
        getAvailability: available_mistwood
    },
    'clickclacks': {
        name: 'clickclacks',
        type: TYPES.production,
        rarity: RARITY.legendary,
        kind: KINDS.building,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['shopkeeper', 'generalstore'],
        getAvailability: available_mistwood
    },
    'darkdeepprison': {
        name: 'darkdeepprison',
        type: TYPES.traveler,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 3,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['dungeon', 'ranger'],
        getAvailability: available_mistwood
    },
    'everflametomb': {
        name: 'everflametomb',
        type: TYPES.destination,
        rarity: RARITY.legendary,
        kind: KINDS.building,
        points: 2,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['cemetery', 'undertaker'],
        getAvailability: available_mistwood
    },
    'jorgoldwing': {
        name: 'jorgoldwing',
        type: TYPES.traveler,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['bard'],
        getAvailability: available_mistwood
    },
    'kingnorthstreasury': {
        name: 'kingnorthstreasury',
        type: TYPES.governance,
        rarity: RARITY.legendary,
        kind: KINDS.building,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['clocktower', 'historian'],
        getAvailability: available_mistwood
    },
    'mayberrymatriarch': {
        name: 'mayberrymatriarch',
        type: TYPES.prosperity,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 5,
        maximum: 1,
        getAdditionalPoints: (player) => player.findCountCard(basecards['husband']) >= 1 && player.findCountCard(basecards['farm']) >= 1 ? 5 : 0,
        getOccupiedSpaces: function (player, to_be_added) {
            // Wife requires 1 space if she should be added to town and town already has
            // as many wifes as husbands
            if (player.findCountHusbandMatches() > player.findCountCard(basecards['husband']) ||
                to_be_added && player.findCountHusbandMatches() == player.findCountCard(basecards['husband'])) {
                return 1;
            }
            return 0;
        },
        related: ['wife', 'husband'],
        getAvailability: available_mistwood
    },
    'strongrootcastle': {
        name: 'strongrootcastle',
        type: TYPES.prosperity,
        rarity: RARITY.legendary,
        kind: KINDS.building,
        points: 4,
        maximum: 1,
        getAdditionalPoints: (player) => player.findCountRarityKind(RARITY.common, KINDS.building) * 2,
        getOccupiedSpaces: space_one,
        related: ['castle', 'king'],
        getAvailability: available_mistwood
    },
    'streysamt': {
        name: 'streysamt',
        type: TYPES.destination,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['ranger'],
        getAvailability: available_mistwood
    },
    'terryhare': {
        name: 'terryhare',
        type: TYPES.governance,
        rarity: RARITY.legendary,
        kind: KINDS.critter,
        points: 4,
        maximum: 1,
        getAdditionalPoints: points_zero,
        getOccupiedSpaces: space_one,
        related: ['shopkeeper'],
        getAvailability: available_mistwood
    }
}

let basicEvents = {
    "grandtour": {
        name: "grandtour",
        points: 3,
        getAvailability: available_npearlbrook
    },
    "harvestfestival": {
        name: "harvestfestival",
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
        getAvailability: (app) => available_bellfaire(app) && available_npearlbrook(app)
    },
    
    "scenicflight": {
        name: "scenicflight",
        points: 3,
        getAvailability: (app) => available_newleaf(app) && available_npearlbrook(app)
    },
    "bigcity": {
        name: "bigcity",
        points: 5,
        getAvailability: (app) => available_newleaf(app) && available_npearlbrook(app)
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
    "pathofthepilgrims": {
        name: "pathofthepilgrims",
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
    "captureoftheacornthieves": {
        name: "captureoftheacornthieves",
        input: true,
        value: 0,
        inputMax: 2,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "abrilliantmarketingplan": {
        name: "abrilliantmarketingplan",
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
    "graduationofscholars": {
        name: "graduationofscholars",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "pristinechapelceiling": {
        name: "pristinechapelceiling",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "theeverdellgames": {
        name: "theeverdellgames",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_nine,
        getAvailability: available_always
    },
    "ancientscrollsdiscovered": {
        name: "ancientscrollsdiscovered",
        input: true,
        value: 0,
        inputMax: 5,
        inputFactor: 1,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "aneveningoffireworks": {
        name: "aneveningoffireworks",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },
    "flyingdoctorservice": {
        name: "flyingdoctorservice",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 3,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_always
    },

    //Bellfaire
    "bednbreakfastguild": {
        name: "bednbreakfastguild",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "cityholiday": {
        name: "cityholiday",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "architecturalrenaissance": {
        name: "architecturalrenaissance",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_bellfaire
    },
    "pieeatingcontest": {
        name: "pieeatingcontest",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "statuescommisioned": {
        name: "statuescommisioned",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "artnmusicfestival": {
        name: "artnmusicfestival",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },
    "gatheringoftheelders": {
        name: "gatheringoftheelders",
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
    "kingsroadestablished": {
        name: "kingsroadestablished",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_six,
        getAvailability: available_bellfaire
    },

    //Pearlbrook
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
    "riversideresort": {
        name: "riversideresort",
        input: true,
        value: 0,
        inputMax: 3,
        inputFactor: 2,
        points: 0,
        getPoints: function (app, player) { return this.value * this.inputFactor; },
        getAvailability: available_pearlbrook
    },
    "xmarksthespot": {
        name: "xmarksthespot",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },
    "sunkentreasurediscovered": {
        name: "sunkentreasurediscovered",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },
    "masqueradeinvitations": {
        name: "masqueradeinvitations",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_pearlbrook
    },

    //Newleaf
    "cityjubilee": {
        name: "cityjubilee",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_zero,
        getAvailability: available_newleaf
    },
    "everwalltower": {
        name: "everwalltower",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_newleaf
    },
    "glowlightfestival": {
        name: "glowlightfestival",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_three,
        getAvailability: available_newleaf
    },
    "hotairballoonrace": {
        name: "hotairballoonrace",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_newleaf
    },
    "dancecontest": {
        name: "dancecontest",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_newleaf
    },
    "magicshow": {
        name: "magicshow",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_newleaf
    },
    "royaltea": {
        name: "royaltea",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_newleaf
    },
    "stockmarketboom": {
        name: "stockmarketboom",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_four,
        getAvailability: available_newleaf
    },
    "sunflowerparade": {
        name: "sunflowerparade",
        input: false,
        value: 0,
        inputMax: 0,
        inputFactor: 0,
        points: 0,
        getPoints: points_five,
        getAvailability: available_newleaf
    }
}

let garlandAwards = {
    "storytelling": {
        name: "storytelling",
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
    "agriculture": {
        name: "agriculture",
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
    "fountain": {
        name: "fountain",
        points: 15,
        getAvailability: available_pearlbrook
    },
    "gate": {
        name: "gate",
        points: 10,
        getAvailability: available_pearlbrook
    }
}

let adornments = {
    "tiara": {
        name: "tiara",
        getPoints: (player) => player.findCountType(TYPES.prosperity),
        getAvailability: available_pearlbrook
    },
    "spyglass": {
        name: "spyglass",
        getPoints: (player) => player.wonders.length * 3,
        getAvailability: available_pearlbrook
    },
    "compass": {
        name: "compass",
        getPoints: (player) => player.findCountType(TYPES.traveler),
        getAvailability: available_pearlbrook
    },
    "gildedbook": {
        name: "gildedbook",
        getPoints: (player) => player.findCountType(TYPES.governance),
        getAvailability: available_pearlbrook
    },
    "masque": {
        name: "masque",
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
    "scales": {
        name: "scales",
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
    "keytothecity": {
        name: "keytothecity",
        getPoints: (player) => Math.trunc(player.findCountKind(KINDS.building) / 2),
        getAvailability: available_pearlbrook
    },
    "seaglassamulet": {
        name: "seaglassamulet",
        getPoints: points_three,
        getAvailability: available_pearlbrook
    }
}

let expeditions = {
    "meekscrossing": {
        name: "meekscrossing",
        points: 2,
        getAvailability: available_spirecrest
    },
    "lilyponds": {
        name: "lilyponds",
        points: 2,
        getAvailability: available_spirecrest
    },
    "thebog": {
        name: "thebog",
        points: 2,
        getAvailability: available_spirecrest
    },
    "fortfaraway": {
        name: "fortfaraway",
        points: 2,
        getAvailability: available_spirecrest
    },
    "meerkatcanyon": {
        name: "meerkatcanyon",
        points: 2,
        getAvailability: available_spirecrest
    },
    "yaraspatch": {
        name: "yaraspatch",
        points: 2,
        getAvailability: available_spirecrest
    },
    "littledell": {
        name: "littledell",
        points: 3,
        getAvailability: available_spirecrest
    },
    "bubblingsprings": {
        name: "bubblingsprings",
        points: 3,
        getAvailability: available_spirecrest
    },
    "cuddlerscove": {
        name: "cuddlerscove",
        points: 3,
        getAvailability: available_spirecrest
    },
    "stompyknoll": {
        name: "stompyknoll",
        points: 3,
        getAvailability: available_spirecrest
    },
    "kibblerillferry": {
        name: "kibblerillferry",
        points: 3,
        getAvailability: available_spirecrest
    },
    "longlegforest": {
        name: "longlegforest",
        points: 3,
        getAvailability: available_spirecrest
    },
    "burrowdale": {
        name: "burrowdale",
        points: 4,
        getAvailability: available_spirecrest
    },
    "ambercaves": {
        name: "ambercaves",
        points: 4,
        getAvailability: available_spirecrest
    },
    "newberryfields": {
        name: "newberryfields",
        points: 4,
        getAvailability: available_spirecrest
    },
    "dugwormgully": {
        name: "dugwormgully",
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
    "shipwreckshore": {
        name: "shipwreckshore",
        points: 5,
        getAvailability: available_spirecrest
    },
    "quokkaisland": {
        name: "quokkaisland",
        points: 5,
        getAvailability: available_spirecrest
    },
    "brightcoatbloom": {
        name: "brightcoatbloom",
        points: 6,
        getAvailability: available_spirecrest
    },
    "coldbloodeddesert": {
        name: "coldbloodeddesert",
        points: 6,
        getAvailability: available_spirecrest
    },
    "mistfirefalls": {
        name: "mistfirefalls",
        points: 6,
        getAvailability: available_spirecrest
    },
}

let discoveries = {
    "greensprouttrail": {
        name: "greensprouttrail",
        getPoints: (player) => (player.findCountType(TYPES.production) >= 4) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest
    },
    "mistrisetrail": {
        name: "mistrisetrail",
        getPoints: (player) => (player.findCountType(TYPES.traveler) >= 3) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "everblossomtrail": {
        name: "everblossomtrail",
        getPoints: (player) => (player.findCountType(TYPES.prosperity) >= 3) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "sunblazetrail": {
        name: "sunblazetrail",
        getPoints: (player) => (player.findCountType(TYPES.destination) >= 3) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest  
    },
    "starfalltrail": {
        name: "starfalltrail",
        getPoints: (player) => (player.findCountType(TYPES.governance) >= 3) ? 4 : 0,
        type: DISCOVERYTYPES.foothills,
        getAvailability: available_spirecrest 
    },
    "bellsongtrail": {
        name: "bellsongtrail",
        getPoints: (player) => (player.expeditions.length >= 3) ? 4 : 0,
        type: DISCOVERYTYPES.peaks,
        getAvailability: available_spirecrest
    },
    "bellsongcity": {
        name: "bellsongcity",
        // fix 3 point + number of fewest card type in city
        getPoints: (player) => 3 + Math.min(...Object.values(player.getTownOverview())),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    }, 
    "greensproutcity": {
        name: "greensproutcity",
        getPoints: (player) => 6 - Math.trunc(player.findCountType(TYPES.production) / 2),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "everblossomcity": {
        name: "everblossomcity",
        getPoints: (player) => 6 - player.findCountType(TYPES.prosperity),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "mistrisecity": {
        name: "mistrisecity",
        getPoints: (player) => 6 - player.findCountType(TYPES.traveler),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "sunblazecity": {
        name: "sunblazecity",
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
    "hopewatchtrail": {
        name: "hopewatchtrail",
        getPoints: (player) => Math.min(7, player.journeys.reduce((prev, journey, _) => prev + journey, 0)),
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "gatherwindtrail": {
        name: "gatherwindtrail",
        getPoints: (player) => player.basicEvents.length + player.specialEvents.length >= 2 ? 4 : 0,
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "serpentspass": {
        name: "serpentspass",
        getPoints: points_seven,
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    },
    "distantshore": {
        name: "distantshore",
        getPoints: (player) => (player.expeditions.length >= 3) ? 7 : 0,
        type: DISCOVERYTYPES.ridge,
        getAvailability: available_spirecrest
    }
}

let visitors = {
    "bimlittle": {
        name: "bimlittle",
        getPoints: (player) => player.findCountType(TYPES.destination) >= 6 ? 7 : 0
    },
    "bosleytedwardson": {
        name: "bosleytedwardson",
        getPoints: (player) => Object.keys(TYPES).reduce((prev, val) => prev && player.findCountType(TYPES[val]) >= 2, true) ? 9 : 0
    },
    "butterbellsweetpaw": {
        name: "butterbellsweetpaw",
        getPoints: (player) => player.town.length >= 15 ? 6 : 0
    },
    "diggsdeepwell": {
        name: "diggsdeepwell",
        getPoints: (player) => player.leftResources[RESOURCES.pebble] >= 2 ? 6 : 0
    },
    "cillweedquicksniff": {
        name: "cillweedquicksniff",
        getPoints: (player) => player.findCountKind(KINDS.building) > player.findCountKind(KINDS.critter) ? 5 : 0
    },
    "dimdustlight": {
        name: "dimdustlight",
        getPoints: (player) => player.findCountRarity(RARITY.unique) >= 6 ? 5 : 0
    },
    "dipdibble": {
        name: "dipdibble",
        getPoints: (player) => player.findCountType(TYPES.destination) >= 4 ? 5 : 0
    },
    "dunetarrington": {
        name: "dunetarrington",
        getPoints: (player) => player.findCountType(TYPES.prosperity) >= 6 ? 6 : 0
    },
    "dwellnorthwatch": {
        name: "dwellnorthwatch",
        getPoints: (player) => player.findCountType(TYPES.traveler) >= 4 ? 5 : 0
    },
    "edvardtriptail": {
        name: "edvardtriptail",
        getPoints: (player) => Object.keys(TYPES).reduce((prev, val) => prev && player.findCountType(TYPES[val]) >= 1, true) ? 5 : 0
    },
    "frinstickly": {
        name: "frinstickly",
        getPoints: (player) => player.leftResources[RESOURCES.resin] >= 4 ? 6 : 0
    },
    "glindilfrink": {
        name: "glindilfrink",
        getPoints: (player) => player.findCountType(TYPES.prosperity) >= 4 ? 4 : 0
    },
    "iggysilverscale": {
        name: "iggysilverscale",
        getPoints: (player) => player.findCountType(TYPES.traveler) >= 6 ? 7 : 0
    },
    "mossysteptoe": {
        name: "mossysteptoe",
        getPoints: (player) => player.findCountType(TYPES.production) >= 5 ? 5 : 0
    },
    "orinnimblepaw": {
      name: "orinnimblepaw",
      getPoints: (player) => player.journeys.length >= 2 ? 6 : 0
     },
    "oscarlongtale": {
        name: "oscarlongtale",
        getPoints: (player) => player.findCountKind(KINDS.critter) > player.findCountKind(KINDS.building) ? 5 : 0
    },
    "phillgurgle": {
        name: "phillgurgle",
        getPoints: (player) => player.findCountType(TYPES.production) <= 2 ? 10 : 0
    },    
    "piffquillglow": {
        name: "piffquillglow",
        getPoints: (player) => player.leftResources[RESOURCES.twig] >= 5 ? 6 : 0
    },
    "plumshortclaw": {
        name: "plumshortclaw",
        getPoints: (player) => player.findCountType(TYPES.governance) >= 4 ? 5 : 0
    }, 
    "quinncleanwhisker": {
        name: "quinncleanwhisker",
        getPoints: (player) => player.findCountKind(KINDS.critter) >= 6 && player.findCountKind(KINDS.building) >= 6 ? 6 : 0
    },
    "reemysniggle": {
        name: "reemysniggle",
        getPoints: (player) => player.basicEvents.length >= 3 ? 7 : 0
    },
    "rivilablacus": {
        name: "rivilablacus",
        getPoints: (player) => player.findCountType(TYPES.governance) >= 6 ? 7 : 0
    },
    "rubydew": {
        name: "rubydew",
        getPoints: (player) => player.specialEvents.length >= 2 ? 8 : 0
    },
    "sarisclearwhistle": {
        name: "sarisclearwhistle",
        getPoints: (player) => player.findCountRarity(RARITY.common) >= 6 ? 5 : 0
    },
    "sirtrivleqsmarqwill": {
        name: "sirtrivleqsmarqwill",
        getPoints: (player) => player.leftResources[RESOURCES.twig] >= 1 && player.leftResources[RESOURCES.resin] >= 1 && player.leftResources[RESOURCES.pebble] >= 1 && player.leftResources[RESOURCES.berry] >= 1 ? 7 : 0
    },
    "skidshinysnout": {
        name: "skidshinysnout",
        getPoints: (player) => player.points >= 10 ? 5 : 0
    },
    "snoutpuddlehop": {
        name: "snoutpuddlehop",
        getPoints: (player) => player.specialEvents.length >= 1 && player.basicEvents.length >= 2 ? 8 : 0
    },
    "trisspeske": {
        name: "trisspeske",
        getPoints: (player) => {
            let overview = player.getTownOverview();
            return Object.keys(overview).reduce(
                (prev, type) => prev || (type != TYPES.production && overview[type] >= 6),
                false) ? 6 : 0;
        }
    },
    "wildellfamily": {
        name: "wildellfamily",
        getPoints: (player) => player.findCountRarity(RARITY.common) >= 9 ? 7 : 0
    },
    "willowgreengrin": {
        name: "willowgreengrin",
        getPoints: (player) => player.findCountType(TYPES.production) >= 7 ? 7 : 0
    },
    "wimblewuffle": {
        name: "wimblewuffle",
        getPoints: (player) => player.leftResources[RESOURCES.berry] >= 3 ? 6 : 0
    },
    "yarabrunmayberry": {
        name: "yarabrunmayberry",
        getPoints: (player) => player.findCountRarity(RARITY.unique) >= 7 ? 7 : 0
    }
}

let playerpowers = {
    'pigs' : {
        name: 'pigs',
        getAvailability: available_mistwood
    },
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

function getExpeditionName(expedition) {
    return i18next.t("expedition." + expedition.name);
}

function getDiscoveryName(discovery) {
    return i18next.t("discovery." + discovery.name);
}

function getVisitorName(visitor) {
    return i18next.t("visitor." + visitor.name);
}

function getPlayerpowerName(playerpower) {
    return i18next.t("playerpower." + playerpower.name);
}