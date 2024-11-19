describe('Player', function() {
  let player;

  beforeEach(function() {
    player = new Player("","");
  });

  describe('when calling getTownOverview', function () {
    it('should group cards by type', function () {
      player.town.push(...Array(3).fill(basecards.husband));
      player.town.push(...Array(1).fill(basecards.wife));
      player.town.push(...Array(2).fill(basecards.postalpigeon));
      player.town.push(...Array(4).fill(basecards.university));
      player.town.push(...Array(5).fill(basecards.historian));


      let townOverview = player.getTownOverview();
      expect(townOverview[TYPES.traveler]).toEqual(2);
      expect(townOverview[TYPES.production]).toEqual(3);
      expect(townOverview[TYPES.destination]).toEqual(4);
      expect(townOverview[TYPES.governance]).toEqual(5);
      expect(townOverview[TYPES.prosperity]).toEqual(1);
    });

    it('should not include types that are missing', function () {
      player.town = [basecards['husband'], basecards['husband'], basecards['wife'], basecards['husband']];

      let townOverview = player.getTownOverview();
      expect(townOverview[TYPES.production]).toEqual(3);
      expect(townOverview[TYPES.prosperity]).toEqual(1);

      expect(townOverview[TYPES.traveler]).toBeUndefined();
      expect(townOverview[TYPES.destination]).toBeUndefined();
      expect(townOverview[TYPES.governance]).toBeUndefined();

    });
  });

  describe('when calling getUniqueTownCards', function () {
    it('should return unique cards', function () {
      player.town = [basecards['husband'], basecards['husband'], basecards['wife'], basecards['husband']];

      expect(player.getUniqueTownCards()).toEqual(['husband', 'wife']);
    });
  });
});