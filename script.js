// ==UserScript==
// @name     		Microsoft Login Auto Clicker
// @description	Automatically chooses the only available Microsoft account on login. If multiple are available, prefers the one with 'Admin' in its name
// @version  		1
// @grant    		none
// @match 			https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize*
// @match 			https://login.microsoftonline.com/common/oauth2/v2.0/authorize*
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at 			document-end
// ==/UserScript==

'use strict';


(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
  if(document.querySelector('#tilesHolder')) {
    observer.disconnect();

    // Count number of accounts displayed
    var options = $('.table-row');
    console.log('Got ' + options.length + ' login options');


    // 2 -> one account and the "use another account" option
    if (options.length == 2){
      console.log('Found only one clickable option. Will click: ' + options[0].id);
      options[0].click();
    }

    // If multiple options, try to find something with 'Admin'
    if (options.length > 2){
      options.each(function(){
        if($(this).text().includes('Admin')){
          console.log('Found admin in option: ' + $(this).id);
          $(this).click();
        }
      });

    }
  }
}

