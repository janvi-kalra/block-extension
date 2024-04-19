const blockList = [
    "*://*.linkedin.com/*",
    "*://*.twitter.com/*",
    "*://*.facebook.com/*",
    "*://*.netflix.com/*",
    "*://*.reddit.com/*",
   "*://www.youtube.com/*"
];

const redirectUrl = "https://raw.githubusercontent.com/janvi-kalra/block-extension/main/redirect_to.png"; // URL to redirect to

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const params = new URLSearchParams(url.search);
    if (url.hostname === 'www.youtube.com' && params.get('ab_channel') === 'NeetCode') {
      return {};  // Don't block NeetCode.
    }
    return { redirectUrl };
  },
  { urls: blockList },
  ["blocking"]
);