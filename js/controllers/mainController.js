// MAIN CONTROLLER
function mainController($scope) {
    $scope.persons = []
    $scope.addPerson = function() {
        $scope.persons.push({nom : this.nom, prenom : this.prenom, email : this.email})
        $scope.nom = ""
        $scope.prenom = ""
        $scope.email = ""
    }
}
