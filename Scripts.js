var app = angular.module("posUI", []);

// Create the instant search filter

app.filter('categoryFilter', function(){

	return function(dataArray, categoryName){

		var result = [];

		for (var i = 0; i < dataArray.length; i++) {
			if(dataArray[i].Category == categoryName){
				result.push(dataArray[i]);
			}
		};
		return result;
	};

});




function OrderFormController($scope){

	$scope.services = [];

	$scope.SelectedCategory = "Food";

	$scope.ShowTotal = false;

	$scope.Category = ["Food","Drink"];

	$scope.Products = [
		{
			name: 'Coffe',
			price: 300,
			Category:'Drink'
		},{
			name: 'nescafe',
			price: 400,
			Category:'Drink'
		},{
			name: 'Hot Choclet',
			price: 250,
			Category:'Drink'
		},{
			name: 'Captcheno',
			price: 220,
			Category:'Drink'
		},{
			name: 'Orange Juse',
			price: 520,
			Category:'Drink'
		},{
			name: 'Tea',
			price: 20,
			Category:'Drink'
		},{
			name: 'Ice Tea',
			price: 250,
			Category:'Drink'
		},{
			name: 'Lemon',
			price: 2220,
			Category:'Drink'
		},{
			name: 'Pizza',
			price: 20,
			Category:'Food'
		},{
			name: 'Ice Cream',
			price: 315,
			Category:'Food'
		},{
			name: 'Fish',
			price: 99999,
			Category:'Food'
		},{
			name: 'Tuna',
			price: 220,
			Category:'Food'
		},{
			name: 'Shrimp',
			price: 3155,
			Category:'Food'
		},{
			name: 'Salmon',
			price: 999,
			Category:'Food'
		}
	];

	$scope.setCategory = function(c){
		$scope.SelectedCategory = c;
	}

	$scope.RemoveProdcut = function(index){
		$scope.services.splice(index,1);
		if($scope.services.length < 1){
			$scope.ShowTotal = false;
		}
	};

	$scope.RemoveAllProdcut = function(){
		$scope.services = [];
		$scope.ShowTotal = false;
	};

	$scope.AddToCard = function(p){

		var NotExist = true;

		for (var i = 0; i < $scope.services.length; i++) {
		    if($scope.services[i].name == p.name){
				$scope.services[i].quantity ++;
				NotExist = false;
				break;
			}
		};

		$scope.ShowTotal = true;

		if(NotExist){
			var ob = {name: p.name, price: p.price,active: true , quantity:1};
			$scope.services.push(ob);	
		}
		
	};



	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price * s.quantity;
			}
		});

		return total;
	};
}