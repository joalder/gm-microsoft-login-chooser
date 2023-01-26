// ==UserScript==
// @name     		Microsoft Login Stay Signed In
// @description	    Selects the "Don't show this again" checkbox and responds yes to the "Stay signed in" prompt
// @version  		1
// @grant    		none
// @match 			https://login.microsoftonline.com/common/SAS/ProcessAuth
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at 			document-end
// @updateURL       https://raw.githubusercontent.com/joalder/gm-microsoft-login-chooser/main/stay_signed_in.js
// @downloadURL     https://raw.githubusercontent.com/joalder/gm-microsoft-login-chooser/main/stay_signed_in.js
// ==/UserScript==

'use strict';

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
  if(document.querySelector('.position-buttons')) {
    observer.disconnect();

    var checkbox = $('input[name="DontShowAgain"]');
    console.log('Found checkbox: ' + checkbox[0].id);
    checkbox[0].click();

    var yesButton = $('input[value="Yes"]');
    console.log('Found yes button: ' + yesButton[0].id);
    yesButton[0].click();
  }
}
