angular
  .module( 'gameday', [ 'ui.router' ] )
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/games' )

    $stateProvider
      .state( 'games', {
        url: '/games',
        views: {
          'main-game': { 
            templateUrl: 'app/templates/game.html'
          },
          'side-games': {
            templateUrl: 'app/templates/games.html'
          }
        }
      })
  })