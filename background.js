var urls = [
    'brainly.com.br'
]

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({
        url: '/installed.html'
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, {
        file: "script.js"
    });
})

