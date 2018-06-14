$(document).ready(function() {
    var plinks = [{
        name: 'youtube',
        plink: 'https://www.youtube.com/channel/UCflAo1o1z-rAInbvQDfGR5w'
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
            $('#marquee').append(' , ')
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