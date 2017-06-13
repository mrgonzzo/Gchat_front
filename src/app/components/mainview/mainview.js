(function(angular) {

  angular.module('app').component('compMainview', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/mainview/mainview.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompMainView],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compMainview'
});

function controllerCompMainView ($state){
  var vm = this;
  vm.goToChat=function(){
    $state.go('chat');
  }
   
}

})(angular)