// MAIN CONTROLLER
function mainController($scope) {
    $scope.persons = []
    $scope.addPerson = function() {
        return $scope.persons.push({nom : this.nom, prenom : this.prenom, email : this.email})
    }
}
