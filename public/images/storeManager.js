var mainShowStore = Ext.define('Sterling.mainShowStore', { 
				extend: 'Ext.data.Model', 
				fields: [
						{name: 'id', type: 'int'},
		 				{name: 'showname', type: 'string'},
		 				{name: 'showdate', type: 'string'},
						{name: 'showId', type: 'string'},
		 				{name: 'advance', type: 'float'},
		 				{name: 'early', type: 'float'},
		 				{name: 'isearly', type: 'boolean'},
		 				{name: 'tixlink', type: 'string'},
		 				{name: 'showflyer', type: 'string'},
						{name: 'showId', type: 'string'},
						{name: 'isdaypass', type: 'boolean'},
						{name: 'dayadvance', type: 'int'},
						{name: 'daygate', type: 'int'},
						{name: 'tickets', type: 'boolean'},
						{name: 'fbevent', type: 'string'}
						 ],
						 proxy:{
							 type: 'rest',
							 url: 'ext/Sterling/getData.php',
							 extraParams: {task: 'mainShows'},
							 reader: {
								 type: 'json',
								 root: 'mainshows'
							 }
						 }
});

//Reference the following for info on showstore -- See http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.Store & http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.reader.Reader


var showStore = Ext.define("Sterling.Show", {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'showdate', 'showname', 'showflyer', 'showId', 'year', 'showopen'
    ],
	proxy: {
    	type: 'rest',
		url : 'ext/Sterling/getData.php',
		extraParams: {task: 'getShow'},
        reader: {
        type: 'json',
        root: 'show'
       			 }
    		},

    hasMany: {model: 'Sterling.showDay', name:'showday', associationKey: 'showday'}


});

Ext.define("Sterling.showDay", {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'daysequence', 'dayname', 'dayabbrev', 'showId', 'daydate'
    ],

    hasMany  : {model: 'Sterling.TimeSlot', name:'timeslot', associationkey:'timeslot'},
    belongsTo: 'Sterling.Show'
});

Ext.define("Sterling.TimeSlot", {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'timesequence', 'time', 'stage'
    ],

    belongsTo: ['Sterling.showDay', {model: 'Sterling.Band', name:'band', associationKey: 'band'}]
});

Ext.define("Sterling.Band", {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'name', 'bandpic', 'facebook', 'twitter', 'bandsite', 'reverb', 'youtube'
    ],

    hasMany: 'Sterling.TimeSlot'
});





			

Ext.define('Sterling.storeManager',{
loadShows: function(key){
	
	switch(key) {
		case "mainShow": {

			
			var mainShow = Ext.create('Ext.data.Store', {
				model: 'Sterling.mainShowStore',
				storeId: 'mainShow',
				autoLoad: true,
				sorters: [
				{
					property: 'id',
					direction: 'ASC'
				}
				]
			
				/*data: [
						{showname: 'FolkFest', showdates: 'May 29th - June 1st', advanceprice: '$60', earlybird: '$50', isearlybird: 'true', tixlink: 'http://www.showclix.com/events/sterlingstage/tag/', 
						imglink: 'images/FolkFest_2012.jpg', showId:'folkfest'},
						{showname: 'Ameribeat', showdates: 'July 1st - July 5th', advanceprice: '$60', earlybird: '$50', isearlybird: 'true', tixlink: 'http://www.showclix.com/events/sterlingstage/tag/', 
						imglink: 'images/Ameribeat12.jpg', showId:'ameribeat'},
						{showname: 'String Fling', showdates: 'August 3rd - August 6th', advanceprice: '$60', earlybird: '$50', isearlybird: 'true', tixlink: 'http://www.showclix.com/events/sterlingstage/tag/', 
						imglink: 'images/String-Fling.jpg', showId:'string'},
						{showname: 'Last Daze of Summer', showdates: 'September 13th - September 16th', advanceprice: '$60', earlybird: '$50', isearlybird: 'true', tixlink: 'http://www.showclix.com/events/sterlingstage/tag/', 							imglink: 'images/last_daze.jpg', showId:'daze'}
			       ]*/

             });

              return mainShow;
		}
		case "showView": {
			var shows = Ext.create('Ext.data.Store', {
            model: "Sterling.Show",
			storeId: 'show',
			autoLoad: true
			});
			return shows;
		}
		default: return '';
	}
}

});