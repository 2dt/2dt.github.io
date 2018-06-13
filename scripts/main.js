$(document).ready(function() {
    var plinks = [{
        name: 'koda',
        plink: 'http://steamcommunity.com/id/kxda'
    }, {
        name: 'koda',
        plink: 'http://steamcommunity.com/id/kxda'
	}, {	
	    name: 'koda',
        plink: 'http://steamcommunity.com/id/kxda'
	}, {	
		name: 'koda',
        plink: 'http://steamcommunity.com/id/kxda'
	}, {	
	    name: 'koda',
        plink: 'http://steamcommunity.com/id/kxda'
       }, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(', ')
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