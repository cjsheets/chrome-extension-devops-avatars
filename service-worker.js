chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log(details.url);
    if (details.url.indexOf("MemberAvatars") >= 0) {
      return {
        redirectUrl:
          "https://url-to-png",
      };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"] // Block intercepted requests until this handler has finished
);
