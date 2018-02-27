/*global angular */
(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = cars;
    });
    var cars = [{
        type: "Economcy",
        description: 'Hyundai Accent 2015 Black ',
        price: 40.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "image/car1.png",
        }]
    }, {
        type: 'Compact',
        description: 'Ford Focus 2015 Silver',
        price: 60.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "image/car2.png",
        }]
    }, {
        type: 'Full-size',
        description: 'Ford Explorer 2015 White',
        price: 60.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "image/car3.png",
        }]
    }];
})();