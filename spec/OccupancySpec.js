describe('Occupancy', function() {
  let player;

  beforeEach(function() {
    player = new Player("","");
  });

  describe('when checking occupancy for the Messenger', function () {
    describe('if there are no buildings', function () {
      beforeEach(function() {
        player.town.push(...Array(2).fill(basecards.messenger));
      });

      it('should occupy one space each', function () {
        expect(basecards.messenger.occupancy.whenAdded(player, basecards.messenger)).toEqual(2);
        expect(player.getOccupiedSpaces()).toEqual(2);
      });

      it('should require one space each', function () {
        expect(basecards.messenger.occupancy.whenAdd(player, basecards.messenger, 1)).toEqual(1);
      });
    });

    describe('if there are buildings', function () {
      beforeEach(function() {
        player.town.push(...Array(2).fill(basecards.messenger));
        player.town.push(...Array(1).fill(basecards.farm));
      });

      it('should occupy no space', function () {
        expect(player.getOccupiedSpaces()).toEqual(1);
        expect(basecards.messenger.occupancy.whenAdded(player, basecards.messenger)).toEqual(0);
      });

      it('should require no space', function () {
        expect(basecards.messenger.occupancy.whenAdd(player, basecards.messenger, 1)).toEqual(0);
      });
    });
  });

  describe('when checking occupancy for the Scurrble Champion', function () {
    describe('if there are no Scurrble Champions in town', function () {
      it('should require one space', function () {
        expect(basecards.scurrblechampion.occupancy.whenAdd(player, basecards.scurrblechampion, 1)).toEqual(1);
      });
    });

    describe('if there is one Scurrble Champion in town', function () {
      beforeEach(function() {
        player.town.push(...Array(1).fill(basecards.scurrblechampion));
      });

      it('should occupy single space', function () {
        expect(player.getOccupiedSpaces()).toEqual(1);
        expect(basecards.scurrblechampion.occupancy.whenAdded(player, basecards.scurrblechampion, 1)).toEqual(1);
      });

      it('should require no space', function () {
        expect(basecards.scurrblechampion.occupancy.whenAdd(player, basecards.scurrblechampion, 1)).toEqual(0);
      });
    });

    describe('if there are multiple Scurrble Champions in town', function () {
      beforeEach(function() {
        player.town.push(...Array(3).fill(basecards.scurrblechampion));
      });

      it('should occupy single space', function () {
        expect(player.getOccupiedSpaces()).toEqual(1);
        expect(basecards.scurrblechampion.occupancy.whenAdded(player, basecards.scurrblechampion, 1)).toEqual(1);
      });

      it('should require no space', function () {
        expect(basecards.scurrblechampion.occupancy.whenAdd(player, basecards.scurrblechampion, 1)).toEqual(0);
      });
    });
  });

  describe('when checking occupancy for the Wife and the Husband', function () {
    describe('if no special wives used', function () {
      describe('if there are more wives than husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.wife));
          player.town.push(...Array(3).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(4);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(0);
        });

        it('wives should require one space each', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(1);
        });

        it('legendary wife should require one space', function () {
          expect(basecards.mayberrymatriarch.occupancy.whenAdd(player, basecards.mayberrymatriarch, 1)).toEqual(1);
        });

        it('husbands should require no space', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(0);
        });
      });

      describe('if there are less wives than husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.wife));
          player.town.push(...Array(4).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(3);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(1);
        });

        it('wives should require no space', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(0);
        });

        it('legendary wife should require no space', function () {
          expect(basecards.mayberrymatriarch.occupancy.whenAdd(player, basecards.mayberrymatriarch, 1)).toEqual(0);
        });

        it('husbands should require one space each', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(1);
        });
      });

      describe('if there are same number of wives as husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.wife));
          player.town.push(...Array(4).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(4);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(0);
        });

        it('wives should require one space each', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(1);
        });

        it('legendary wife should require one space', function () {
          expect(basecards.mayberrymatriarch.occupancy.whenAdd(player, basecards.mayberrymatriarch, 1)).toEqual(1);
        });

        it('husbands should require one space each', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(1);
        });
      });
    });

    describe('if one of the wives is legendary wife', function () {
      describe('if there are more wives than husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.wife));
          player.town.push(...Array(1).fill(basecards.mayberrymatriarch));
          player.town.push(...Array(3).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(3);
          expect(basecards.mayberrymatriarch.occupancy.whenAdded(player, basecards.mayberrymatriarch)).toEqual(1);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(0);
        });

        it('wives should require one space each', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(1);
        });

        it('husbands should require no space', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(0);
        });
      });

      describe('if there are less wives than husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(2).fill(basecards.wife));
          player.town.push(...Array(1).fill(basecards.mayberrymatriarch));
          player.town.push(...Array(4).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(2);
          expect(basecards.mayberrymatriarch.occupancy.whenAdded(player, basecards.mayberrymatriarch)).toEqual(1);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(1);
        });

        it('wives should require no space', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(0);
        });

        it('husbands should require one space each', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(1);
        });
      });

      describe('if there are same number of wives as husbands', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.wife));
          player.town.push(...Array(1).fill(basecards.mayberrymatriarch));
          player.town.push(...Array(4).fill(basecards.husband));
        });

        it('wives and husbands should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.wife.occupancy.whenAdded(player, basecards.wife)).toEqual(3);
          expect(basecards.mayberrymatriarch.occupancy.whenAdded(player, basecards.mayberrymatriarch)).toEqual(1);
          expect(basecards.husband.occupancy.whenAdded(player, basecards.husband)).toEqual(0);
        });

        it('wives should require one space each', function () {
          expect(basecards.wife.occupancy.whenAdd(player, basecards.wife, 1)).toEqual(1);
        });

        it('husbands should require one space each', function () {
          expect(basecards.husband.occupancy.whenAdd(player, basecards.husband, 1)).toEqual(1);
        });
      });
    });
  });

  describe('when checking occupancy for the Farm and the Greenhouse', function () {
    describe('if no player powers or special farms used', function () {
      describe('if there are more farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.farm));
          player.town.push(...Array(3).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(4);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require one space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(1);
        });

        it('greenhouses should require no space', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(0);
        });
      });

      describe('if there are less farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(3);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(1);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require no space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });

      describe('if there are same number of farms as greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.farm));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(4);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require one space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(1);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });
    });

    describe('if pigs player power used', function () {
      beforeEach(function () {
        player.playerpowername = 'pigs';
      });

      describe('if there are more farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.farm));
          player.town.push(...Array(3).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(0);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require no space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(0);
        });

        it('greenhouses should require no space', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(0);
        });
      });

      describe('if there are less farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(1);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(1);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require no space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });

      describe('if there are same number of farms as greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(4).fill(basecards.farm));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(0);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('legendary farm should require one space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });
    });

    describe('if one of the farms is summer farm', function () {
      describe('if there are more farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.farmnospace));
          player.town.push(...Array(3).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(3);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(3);
          expect(basecards.farmnospace.occupancy.whenAdded(player, basecards.farmnospace)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('legendary farm should require one space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(1);
        });

        it('greenhouses should require no space', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(0);
        });
      });

      describe('if there are less farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(2).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.farmnospace));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(3);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(2);
          expect(basecards.farmnospace.occupancy.whenAdded(player, basecards.farmnospace)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(1);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('legendary farm should require no space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });

      describe('if there are same number of farms as greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.farmnospace));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(3);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(3);
          expect(basecards.farmnospace.occupancy.whenAdded(player, basecards.farmnospace)).toEqual(0);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('legendary farm should require one space', function () {
          expect(basecards.mcgregorsmarket.occupancy.whenAdd(player, basecards.mcgregorsmarket, 1)).toEqual(1);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });
    });

    describe('if one of the farms is legendary farm', function () {
      describe('if there are more farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.mcgregorsmarket));
          player.town.push(...Array(3).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(3);
          expect(basecards.mcgregorsmarket.occupancy.whenAdded(player, basecards.mcgregorsmarket)).toEqual(1);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('greenhouses should require no space', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(0);
        });
      });

      describe('if there are less farms than greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(2).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.mcgregorsmarket));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(2);
          expect(basecards.mcgregorsmarket.occupancy.whenAdded(player, basecards.mcgregorsmarket)).toEqual(1);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(1);
        });

        it('farms should require no space', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(0);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });

      describe('if there are same number of farms as greenhouses', function () {
        beforeEach(function () {
          player.town.push(...Array(3).fill(basecards.farm));
          player.town.push(...Array(1).fill(basecards.mcgregorsmarket));
          player.town.push(...Array(4).fill(basecards.greenhouse));
        });

        it('farms and greenhouses should share a space', function () {
          expect(player.getOccupiedSpaces()).toEqual(4);
          expect(basecards.farm.occupancy.whenAdded(player, basecards.farm)).toEqual(3);
          expect(basecards.mcgregorsmarket.occupancy.whenAdded(player, basecards.mcgregorsmarket)).toEqual(1);
          expect(basecards.greenhouse.occupancy.whenAdded(player, basecards.greenhouse)).toEqual(0);
        });

        it('farms should require one space each', function () {
          expect(basecards.farm.occupancy.whenAdd(player, basecards.farm, 1)).toEqual(1);
        });

        it('summer farm should require no space', function () {
          expect(basecards.farmnospace.occupancy.whenAdd(player, basecards.farmnospace, 1)).toEqual(0);
        });

        it('greenhouses should require one space each', function () {
          expect(basecards.greenhouse.occupancy.whenAdd(player, basecards.greenhouse, 1)).toEqual(1);
        });
      });
    });
  });
});