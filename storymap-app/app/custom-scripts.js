define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		/*
		* Custom Javascript to be executed when the application is ready goes here
		*/
        //const moreTabsBtn = document.querySelectorAll('ul.nav li.dropdown a.dropdown-toggle')[0];
        //const mySpan = document.createElement('span');
        //mySpan.innerHTML = 'More Tabs';
        
        //moreTabsBtn.appendChild(mySpan);
        
	});

	// Tab navigation.  This is fired anytime the tab is selected/changed.
	topic.subscribe("story-tab-navigation", function(index){
		/*
		* Custom Javascript to be executed when a tab is selected goes here
		*/
	});
});
