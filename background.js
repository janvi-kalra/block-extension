const blockList = [
    "*://*.linkedin.com/*",
    "*://*.twitter.com/*",
    "*://*.facebook.com/*",
    "*://*.netflix.com/*",
    "*://*.reddit.com/*",
    "*://*.youtube.com/*"
];

const redirectUrl = "https://www.google.com"; // URL to redirect to

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: redirectUrl};
  },
  {urls: blockList},
  ["blocking"]
);
