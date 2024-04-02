var PingDate = "PingDate";
/*var ExtnVer = "ExtnVersion";*/
var MI = "MachineID";

var startIndex = navigator.userAgent.indexOf("(");
var endIndex = navigator.userAgent.indexOf(")");
var OS = navigator.userAgent.substring(startIndex + 1, endIndex).replace(/\s/g, '');

var browserLanguage = navigator.language;

var manifestData = chrome.runtime.getManifest();
var ExtensionName = manifestData.name.replace(/ /g, "").replace('&', 'and');
var ExtensionVersion = manifestData.version;
var ExtensionId = chrome.runtime.id;
var BrowserVersion = navigator.userAgent.split(" ");
var BrowserVersion = BrowserVersion[BrowserVersion.length - 2].replace("/", "");

var FeedbackFwlink = "https://go.microsoft.com/fwlink/?linkid=2138838";
var FreFwlink = "https://go.microsoft.com/fwlink/?linkid=2138425";

var Market = "";
try {
    Market = chrome.i18n.getMessage("ExtnMarket");
    console.log("Try block - Market : " + Market);
}
catch (exception) {
    Market = navigator.language.toLocaleLowerCase();
    console.log("Catch block - Market : " + Market);
}

var PING_ALARM = "JEKK_PINGALARM";
var UPDATE_ALARM = "JEKK_UPDATEALARM";

//setStorage function
function setStorage(name, value) {
    if (value) {
        var obj = '{'
            + '"' + name + '" :"' + value + '"'
            + '}';
        var storageName = JSON.parse(obj);
        chrome.storage.local.set(storageName, function () {
            var date = new Date();
            var millisec = date.getTime();
            console.log("Name: " + name + "   " + "Value: " + value);
            console.log("Time stamp:" + date, millisec);
        });
    }
    else {
        if (name == "pc") {
            var obj = '{'
                + '"' + name + '" :"' + "UWDF" + '"'
                + '}';
            var storageName = JSON.parse(obj);
            chrome.storage.local.set(storageName);
        }
        if (name == "channel") {
            var obj = '{'
                + '"' + name + '" :"' + "organic" + '"'
                + '}';
            var storageName = JSON.parse(obj);
            chrome.storage.local.set(storageName);
        }
        if (name == "MachineID") {
            var obj = '{'
                + '"' + name + '" :"' + guid() + '"'
                + '}';
            var storageName = JSON.parse(obj);
            console.log(name)
            chrome.storage.local.set(storageName, function () {
                var date = new Date();
                var millisec = date.getTime();
                console.log("Name: " + name + "   " + "Value: " + value);
                console.log("Time stamp MachineId in else:" + date, millisec);
            });
        }
    }
}

//To redirect feedback page while uninstalling the extension
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === PING_ALARM) {
        chrome.storage.local.get("MachineID", function (items) {
            var uninstallUrl = FeedbackFwlink + "&extnID=" + ExtensionId + "&mkt=" + Market + "&mid=" + items.MachineID + "&br=gc";
            chrome.runtime.setUninstallURL(uninstallUrl);
        });

        //Call for Daily Ping
        console.log("dailyPing");
        SendPingDetails('2');
    }
});

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == 'install') {
        console.log("Install method");

        //call to create daily ping alarm for new users
        let getPingAlarmInstall = chrome.alarms.get(PING_ALARM);
        getPingAlarmInstall.then(dailyPingAlarm);

        setStorage("ExtnVersion", ExtensionVersion);
        setStorage("Migration", "True");

        //Call for Install Ping
        SendPingDetails("1");

        // To redirect FRE page while installing the extension
        var redirectionURL = FreFwlink + "&extnID=" + ExtensionId + "&mkt=" + Market + "&br=gc";
        chrome.tabs.create({ url: redirectionURL });
    }
    else if (details.reason == 'update') {
        console.log("Update method");

        //call to create daily ping alarm for existing users
        let getPingAlarmUpdate = chrome.alarms.get(PING_ALARM);
        getPingAlarmUpdate.then(dailyPingAlarm);

        //call to create update ping alarm for existing users
        let getupdateAlarm = chrome.alarms.get(UPDATE_ALARM);
        getupdateAlarm.then(updatePingAlarm);

        chrome.storage.local.set({ showFirstSearchNotification: false });

        chrome.storage.local.get(["ExtnVersion", "Migration", "ExtensionUpdatepageshown"], function (items) {
            if (!items.ExtnVersion || items.ExtnVersion != chrome.runtime.getManifest().version) {
                //Update version
                setStorage("ExtnVersion", ExtensionVersion);

                //If user is updated directly to version 16 from version 14 - for inactive users
                if (!items.Migration && !items.ExtensionUpdatepageshown) {
                    console.log("Display Migration HTML");
                    showhtmlpage();
                }
            }
        });
    }
});

function dailyPingAlarm(alarm) {
    if (!alarm) {
        console.log("New alarm created: JEKK_PING_ALARM ");
        chrome.alarms.create(PING_ALARM, {
            delayInMinutes: 1,
            periodInMinutes: 1440
        });
    }
    else {
        console.log("Existing Alarm: " + alarm.name);
    }
}

function updatePingAlarm(alarm) {
    console.log(alarm);
    if (!alarm) {
        console.log("New alarm created: JEKK_UPDATE_ALARM ");
        chrome.alarms.create(UPDATE_ALARM, {
            delayInMinutes: 1
        });
    }
    else {
        console.log("Existing Alarm: " + alarm.name);
    }
}

//Call for Update Ping
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === UPDATE_ALARM) {
        console.log("Update ping");
        SendPingDetails("3");
    }
});

/* Function to create an unique machine id */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    var MachineGUID = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    MachineGUID = MachineGUID.toLocaleUpperCase();
    setStorage("MachineID", MachineGUID);
    return MachineGUID;
}


function SendPingDetails(status) {
    /**
    * Function create and send a ping cosmos
    * @param {any} status
    */
    chrome.storage.local.get(['pc', 'channel', 'MachineID', 'muid'], (items) => {

        var pc = items.pc == undefined || items.pc == "" || items.pc == null ? "UWDF" : items.pc;
        var MachineID = (items.MachineID == undefined || items.MachineID == "" || items.MachineID == null) ? guid() : items.MachineID;
        var pingURL = 'http://g.ceipmsn.com/8SE/44?';
        var tVData = 'TV=is' + pc + '|pk' + ExtensionName + '|tm' + browserLanguage + '|bv' + BrowserVersion + '|ex' + ExtensionId + '|es' + status;
        if (items.channel)
            tVData = tVData + "|ch" + items.channel;
        if (items.muid)
            tVData = tVData + "|mu" + items.muid;
        pingURL = pingURL + 'MI=' + MachineID + '&LV=' + ExtensionVersion + '&OS=' + OS + '&TE=37&' + tVData;
        pingURL = encodeURI(pingURL);  // For HTML Encoding
        fetch(pingURL);
    });
};

function showhtmlpage() {
    chrome.tabs.create({ url: "/Welcomepage/index.html?xid=12&bmkt=" + Market });
    chrome.storage.local.set({ "ExtensionUpdatepageshown": "True" });
}
