//Stores PC in chrome storage which will be used in TE37 ping

chrome.storage.local.set({ "pc": "U501"});

chrome.action.onClicked.addListener(function (tab) {		
	chrome.tabs.create({url: "chrome://newtab"});
});