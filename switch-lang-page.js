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

const langCookie = "besna_lang";

let newLanguage = "";
const currentLanguage = getCookie(langCookie);
console.log("current:");
console.log(currentLanguage);
const expires = getExpiresString(30);
console.log(expires);
if (currentLanguage === "en") {
  document.cookie = `${langCookie}=jp;${expires}`;
  newLanguage = "jp";
} else {
  document.cookie = `${langCookie}=en;${expires}`;
  newLanguage = "en";
}
console.log(newLanguage);
if (newLanguage === "en") {
  window.location.replace("https://emu-chimes-xt8c.squarespace.com/eng/");
}
window.location.replace("https://emu-chimes-xt8c.squarespace.com/");
