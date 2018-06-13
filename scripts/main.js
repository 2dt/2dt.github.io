$(document).ready(function() {
    var plinks = [{
        name: 'joker',
        plink: 'http://steamcommunity.com/id/heldup'
    }, {
        name: 'has',
        plink: 'http://steamcommunity.com/id/heldup'
	}, {	
	    name: 'stolen',
        plink: 'http://steamcommunity.com/id/heldup'
	}, {	
		name: 'your',
        plink: 'http://steamcommunity.com/id/heldup'
	}, {	
	    name: 'site',
        plink: 'http://steamcommunity.com/id/heldup'
       }, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});