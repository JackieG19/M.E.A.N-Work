/* global $ */
$(function(){
    $.get('/cities', appendToList);
    
    function appendToList(cities) {
        var list = [];
        var content, city;
        for(var i in cities){
            city = cities[i];
            content = '<a href ="/cities/'+city+'">' + city + '</a>' + '<a href ="#" data-block="'+city+'">(X)</a>' ;
            list.push($('<li>', { html: content }));
        }
        $('.cities-list').append(list);
    };
    
    $('form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var cityData = form.serialize();
        
        $.ajax({
            type: 'POST', url: '/cities', data: cityData
        }).done(function(cityName){
            console.log(cityName);
            appendToList([cityName]);
            form.trigger('reset');
        });
    });
    
    $('.cities-list').on('click', 'a[data-block]', function(event){
        var target = $(event.currentTarget);
        if (!confirm('Are you sure you want to delete ' + target.data('block') + '?')) {
            return false;
        }
        
        $.ajax({
            type: 'DELETE', url: '/cities/' + target.data('block')
        }).done(function() {
            console.log('hello');
            target.parents('li').remove();
        });
         
    });
});