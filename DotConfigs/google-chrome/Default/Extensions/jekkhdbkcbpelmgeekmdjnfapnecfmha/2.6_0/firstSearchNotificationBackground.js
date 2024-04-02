// First Search Notification - only show on first address bar search
function firstSearchNotification(tabId, changeInfo) {
    if(changeInfo.url){
		console.log("firstSearchNotification");
        var isBingExtensionSearch = changeInfo.url.includes("search?FORM=U501DF&PC=U501");
        chrome.storage.local.get({showFirstSearchNotification: true}, (items) => {
            if(isBingExtensionSearch && items && items.showFirstSearchNotification) {
				chrome.scripting.executeScript({
                        target: { tabId: tabId},
                        files: ["firstSearchNotificationContent.js"]
                    });
                chrome.storage.local.set({showFirstSearchNotification: false});
            }
            else if(isBingExtensionSearch && items && !items.showFirstSearchNotification) {
                chrome.tabs.onUpdated.removeListener(firstSearchNotification);
				console.log("firstSearchNotification-removeListener");
            }
        })
    }
}

var isEdgeClientHintCheck = navigator.userAgentData && navigator.userAgentData.brands.find(brand => brand.brand === "Microsoft Edge");
var isEdgeUserAgentCheck = navigator.userAgent.indexOf("Edg") != -1;
if (!isEdgeClientHintCheck && !isEdgeUserAgentCheck) {
    chrome.tabs.onUpdated.addListener(firstSearchNotification);
    chrome.runtime.onMessage.addListener(
        function(request) {
            if (request == "notificationDismissed"){
                chrome.storage.local.set({firstSearchNotificationDismissed: true});
            }
            return true;
        }
    );
    
    chrome.runtime.onConnectExternal.addListener((port) => {
        var url = "https://www.bing.com";
        if (port.name == "extensionStatusCheck" && port.sender && port.sender.url && port.sender.url.toLocaleLowerCase().includes(url)) {
            port.onMessage.addListener((message, port) => {
                if (message === "pollExtensionStatus") {
                    chrome.storage.local.get("firstSearchNotificationDismissed", (items) => {
                        if (items.firstSearchNotificationDismissed) {
                            port.postMessage({isEnabled: "true"})
                        }
                    });
                }
            });
        }      
    });   
}