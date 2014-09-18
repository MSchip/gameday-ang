var GetMlbData = function( $http, $q ) {

  var formatDate = function( date ) {
    date = date || new Date();

    var addZero = function( number, type ) {
      if( type === 'month' ) {
        number++;
      }

      return number < 10 ? '0' + number : number.toString();
    };

    var year = date.getFullYear();
    var month = addZero( date.getMonth(), 'month' );
    var date = addZero( date.getDate() );

    return year + '/' + month + '/' + date;
  };

  this.makeRequest = function( url ) {

    var deferred = $q.defer();

    $http.get( url )
    .success( function( results ) {
      deferred.resolve( results );
    })
    .error( function( error ) {
      console.log( 'error in request to Gameday: ', error );
      deferred.reject( error );
    });

    return defered.promise;
  };

  this.dayScoreboard = function( date ) {
    var url = '/api/' + formatDate( date ) + '/mini';
    var deferred = $q.defer()

    this.makeRequest( url )
    .then( function( data ) {
      deferred.resolve( data );
    })
    .error( function( error ) {
      deferred.reject( error );
    });

    return deferred.promise;
  };

  this.singleGame = function( gid, type ) {
    type = type || '';
    var url = '/api/gid/' + gid + '/' + type;
    var deferred = $q.defer()

    this.makeRequest( url )
    .then( function( data ) {
      deferred.resolve( data );
    })
    .error( function( error ) {
      deferred.reject( error );
    });

    return deferred.promise;
  };
};

angular
  .module( 'gameday' )
  .service( 'GetMlbData', GetMlbData )
