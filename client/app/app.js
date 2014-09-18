angular
  .module( 'gameday', [ 'ui.router' ] )
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/games' )

    $stateProvider
      .state( '/games', {
        url: '/games',
        templateUrl: 'games.html'
      })
  })