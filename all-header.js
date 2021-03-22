const langCookie = "besna_lang";
const Japanese = "ja";
const English = "en";
const domain = ".com/";

const getCookie = (cname) => {
  var name = cname + "=";
  var allCookies = document.cookie.split(";");
  for (var i = 0; i < allCookies.length; i++) {
    var c = allCookies[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const getExpiresString = (numberOfDays) => {
  var d = new Date();
  d.setTime(d.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
  return "expires=" + d.toUTCString();
};

const getCurrentPageLanguage = () => {
  const indexUrlAfterDomain = location.href.lastIndexOf(domain) + domain.length;

  const urlAfterDomain = location.href.slice(indexUrlAfterDomain);
  console.log(urlAfterDomain.slice(0, 3));

  return urlAfterDomain.slice(0, 3) === "eng" ? English : Japanese;
};

const getMultilanguageUrl = (language, url) => {
  if (language === English && getCurrentPageLanguage() === English) {
    return url || location.href;
  }
  if (language === Japanese && getCurrentPageLanguage() === Japanese) {
    return url || location.href;
  }

  if (language === Japanese && getCurrentPageLanguage() === English) {
    const newUrl = url || location.href;
    return newUrl.replace("eng/", "");
  }
  if (language === English && getCurrentPageLanguage() === Japanese) {
    const newUrl = url || location.href;
    const position = newUrl.lastIndexOf(domain) + domain.length;
    return [newUrl.slice(0, position), "eng/", newUrl.slice(position)].join("");
  }
};

const expires = getExpiresString(30);

// execution starts here
let newLanguage = "";
const currentCookieLanguage = getCookie(langCookie) || Japanese;
console.log("currentCookieLanguage:", currentCookieLanguage);

const shouldSwitchLanguages =
  currentCookieLanguage !== getCurrentPageLanguage();

console.log("shouldSwitch", shouldSwitchLanguages);

if (shouldSwitchLanguages) {
  if (currentCookieLanguage === English) {
    console.log("switch to Japanese");
    document.cookie = `${langCookie}=${Japanese};${expires};path:/`;
    newLanguage = Japanese;
    window.location.replace(getMultilanguageUrl(Japanese));
  } else {
    console.log("switch to English");
    document.cookie = `${langCookie}=${English};${expires};path:/`;
    newLanguage = English;
    window.location.replace(getMultilanguageUrl(English));
  }
}
console.log("newLanguage", newLanguage);
