angular.module('haklab').service('BackendService', function($firebaseArray, $firebaseAuth, $filter){
    var self = this;
    var ref = new Firebase("https://hklbgd.firebaseio.com/users");
    var auth = $firebaseAuth(ref);
    this.users = $firebaseArray(ref);


    this.prijaviSe = function(){
      auth.$authWithOAuthPopup("google").then(function(authData) {
        if($filter('filter')(self.users, {id: authData.google.id}).length > 0){
          console.log('already exist');
          return;
        }
        self.users.$add({
          id: authData.google.id,
          name: authData.google.displayName,
          imageUrl: authData.google.profileImageURL
        });
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });

    }

    return {
      prijaviSe: self.prijaviSe,
      users: self.users
    }

});
