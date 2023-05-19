# EverdellScore
Serverless JS App for counting Everdell Score.

## Content
As the summing up the total points of a game of Everdell can be complex, this application should help players to identify the winner of the game faster.
It allows you to choose all the cards per player and will give the sum up the total points per player. Special effects of prosperity cards are determined automatically, while for some Special Event cards a manual input must be done.
The application also prevents that cards are multiple chosen, if not allowed (e.g. unique cards or number of cards).

## Personal Data
Cookies for storing the chosen language.

# Roadmap

* [X] Implementing expansions
  * [X] Bellfaire
  * [X] Pearlbrook
  * [X] Spirecrest
* [ ] 2 Upcoming expansions
  * [ ] Mistwood
  * [ ] Newleaf
* [ ] QoL
  * [ ] Statistics
  * [ ] Export results
  * [ ] (Adding picture to cards)

# Updates

## Version 1.3.2
* General 
  * Type ordering of players town cards matches now with type order in menu bar
  * Left over ressources have now own counting badge
  * Fix issue that left over ressources was not displayed although *Architect* was in town, if a *Garland Award* was active
  * Fix miner mole points
* Spirecrest 
  * Added missing discoveries _Serpent's Pass_ and _The Distant Shore_
* Pearlbrook
  * Fix points of *Hopewatchgate*

### Version 1.3.1
* Improved english text. Thanks to [Dajakk](https://github.com/Dajakk)
* Fix _Hopewatch Trail_ to count journey points.
* Changed _Bellsong City_ according to [The Everdell Archive](https://cdn.shopify.com/s/files/1/0559/8245/6947/files/The_Everdell_Archive_web_res.pdf) from The Complete Collection.

### Version 1.3
* Spirecrest extension
* Coloring of cards when in players town
* Changed sort of cards in players town by type and name
* Mobile QoL improved
  * Smaller blocks to better fit on mobile
  * Sliders effect immediately for easier input
  
### Version 1.2
* Pearlbrook extension
* Remember language on refresh
  
### Version 1.1 
* Bellfaire extension
* Vibration feedback on choosing cards on phone
   
### Version 1.0
* Basegame