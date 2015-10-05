angular
    .module('haklab')
    .directive('back', back);


function back(){
    var direktiva = {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', idiNazad);
            function idiNazad() {
                history.back();
                scope.$apply();
            }	// idiNazad
        }
    };
    return direktiva;
}	// back
