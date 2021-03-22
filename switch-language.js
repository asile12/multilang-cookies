const currentCookieLanguage = getCookie(langCookie) || Japanese;
const homeUrl = "https://emu-chimes-xt8c.squarespace.com/";

if (currentCookieLanguage === English) {
  console.log("switch to Japanese");
  document.cookie = `${langCookie}=${Japanese};${expires};path:/`;
  newLanguage = Japanese;
  window.location.replace(getMultilanguageUrl(Japanese, homeUrl));
} else {
  console.log("switch to english");
  document.cookie = `${langCookie}=${English};${expires};path:/`;
  newLanguage = English;
  window.location.replace(getMultilanguageUrl(English, homeUrl));
}
