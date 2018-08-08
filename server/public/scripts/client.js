let FoodApp = angular.module( 'FoodApp', [] );

FoodApp.controller( 'FoodController', function(){
    let vm = this;
    vm.myFood = [];

    vm.addFood = function(){
        console.log('in addFood', vm.foodIn);
        vm.myFood.push(vm.foodIn);
        console.log('my food:', vm.myFood);
    }
});