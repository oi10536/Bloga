var ab = ["FGHIJKLijklmarstuv", "NOPQRSWXYZhTUVABCDE"];
var cd = ["wxyzefgnopbcd", "0123456789+/="];
var jab = ab.join("M");
var jcd = cd.join("q");
var base64 = {
 _keyStr : jab + jcd,
 encode : function encode(data) {
   var _0x2602ea;
   var aStatedRank;
   var iParse;
   var msd;
   var lsd;
   var i_format;
   var which;
   var stringOutput = "";
   var i = 0;
   data = base64["_utf8_encode"](data);
   for (; i < data.length;) {
     msd = (_0x2602ea = data.charCodeAt(i++)) >> 2;
     lsd = (3 & _0x2602ea) << 4 | (aStatedRank = data.charCodeAt(i++)) >> 4;
     i_format = (15 & aStatedRank) << 2 | (iParse = data.charCodeAt(i++)) >> 6;
     which = 63 & iParse;
     if (isNaN(aStatedRank)) {
       i_format = which = 64;
     } else {
       if (isNaN(iParse)) {
         which = 64;
       }
     }
     stringOutput = stringOutput + this["_keyStr"].charAt(msd) + this["_keyStr"].charAt(lsd) + this["_keyStr"].charAt(i_format) + this["_keyStr"].charAt(which);
   }
   return stringOutput;
 },
 decode : function base64toString(format) {
   var second;
   var ord;
   var wc;
   var _0x23e423;
   var _0x477a34;
   var _0x47c369;
   var result = "";
   var i_format = 0;
   format = format.replace(/[^A-Za-z0-9\+\/=]/g, "");
   for (; i_format < format.length;) {
     second = this["_keyStr"].indexOf(format.charAt(i_format++)) << 2 | (_0x23e423 = this["_keyStr"].indexOf(format.charAt(i_format++))) >> 4;
     ord = (15 & _0x23e423) << 4 | (_0x477a34 = this["_keyStr"].indexOf(format.charAt(i_format++))) >> 2;
     wc = (3 & _0x477a34) << 6 | (_0x47c369 = this["_keyStr"].indexOf(format.charAt(i_format++)));
     result = result + String.fromCharCode(second);
     if (64 != _0x477a34) {
       result = result + String.fromCharCode(ord);
     }
     if (64 != _0x47c369) {
       result = result + String.fromCharCode(wc);
     }
   }
   return result = base64["_utf8_decode"](result);
 },
 _utf8_encode : function utf8Encode(s) {
   s = s.replace(/\r\n/g, "\n");
   var string = "";
   var i = 0;
   for (; i < s.length; i++) {
     var c = s.charCodeAt(i);
     if (c < 128) {
       string = string + String.fromCharCode(c);
     } else {
       if (c > 127 && c < 2048) {
         string = string + String.fromCharCode(c >> 6 | 192);
         string = string + String.fromCharCode(63 & c | 128);
       } else {
         string = string + String.fromCharCode(c >> 12 | 224);
         string = string + String.fromCharCode(c >> 6 & 63 | 128);
         string = string + String.fromCharCode(63 & c | 128);
       }
     }
   }
   return string;
 },
 _utf8_decode : function _utf8_decode(utftext) {
   var string = "";
   var i = 0;
   var c = c1 = c2 = 0;
   for (; i < utftext.length;) {
     if ((c = utftext.charCodeAt(i)) < 128) {
       string = string + String.fromCharCode(c);
       i++;
     } else {
       if (c > 191 && c < 224) {
         c2 = utftext.charCodeAt(i + 1);
         string = string + String.fromCharCode((31 & c) << 6 | 63 & c2);
         i = i + 2;
       } else {
         c2 = utftext.charCodeAt(i + 1);
         c3 = utftext.charCodeAt(i + 2);
         string = string + String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3);
         i = i + 3;
       }
     }
   }
   return string;
 }
};
var usrPswKey = "2356598547";
var dataWd = "YL9xXQ5MWQhzZ3vEZV==";
var host = window.location.hostname;
var rplcHm = wc.url.home.replace("https://", "").replace("/", "");
var joinHm = rplcHm + base64.decode(dataWd);
var getL = wc.license.token;
var dhJoin = host + base64.decode(dataWd);
if (getL === base64.encode(dhJoin) || getL === base64.encode(joinHm)) {
 var login = function show() {
   var mode = $("#email").val();
   var type = $("#password").val();
   if (mode === "") {
     $("#email").focus();
     $("#logNotif").toggleClass("hidden");
     $("#logNotif").html(emailTidakBolehKosong);
     setTimeout(function() {
       $("#logNotif").toggleClass("hidden");
     }, 2000);
   } else {
     if (type === "") {
       $("#password").focus();
       $("#logNotif").toggleClass("hidden");
       $("#logNotif").html(passwordTidakBolehKosong);
       setTimeout(function() {
         $("#logNotif").toggleClass("hidden");
       }, 2000);
     } else {
       $("#logNotif").show();
       $("#logNotif").html(loading);
       setTimeout(function() {
         $("#logNotif").html(emailPasswordSalah);
       }, 5000);
       $.ajax({
         url : base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + wc.googleSheet.token + "/exec",
         type : "GET",
         data : "users",
         crossDomain : true,
         dataType : "",
         success : function init(auth) {
           function resolve(id, index) {
             return function(reserved, canCreateDiscussions) {
               return reserved[id] === index;
             };
           }
           var me = auth.user;
           var value = $("#email").val();
           var res = resolve("email", base64.encode(value));
           var count = me.findIndex(res);
           var data = me[count];
           var siteId = data.name;
           var ciphertext = "1029384756";
           var decrypted = CryptoJS.AES.decrypt(data.password, ciphertext);
           var click = decrypted.toString(CryptoJS.enc.Utf8);
           var plaintext = CryptoJS.AES.decrypt(data.nohp, ciphertext);
           var highestVersion = plaintext.toString(CryptoJS.enc.Utf8);
           var m = base64.decode(data.email);
           var currentAnime = data.name;
           var fileAndWordList = currentAnime.split(" ");
           if (fileAndWordList[1] != undefined) {
             var loghistory = fileAndWordList[0].split("")[0] + fileAndWordList[1].split("")[0];
             localStorage.setItem("userAvatar", loghistory);
           } else {
             var loghistory = fileAndWordList[0].split("")[0];
             localStorage.setItem("userAvatar", loghistory);
           }
           if (mode == m && type == click) {
             $("#logNotif").css("display", "none");
             localStorage.setItem("login", "true");
             localStorage.setItem("nameUser", siteId);
             localStorage.setItem("emailUser", m);
             localStorage.setItem("numberUser", highestVersion);
             var href = location.href;
             var url = new URL(href);
             var ngEl = url.searchParams.get("target");
             if (window.location.href.indexOf("?target=") > -1) {
               setTimeout(function() {
                 window.location.href = ngEl;
               }, 1000);
             } else {
               if (sessionStorage.getItem("target") != null) {
                 setTimeout(function() {
                   window.location.href = sessionStorage.getItem("target");
                 }, 1000);
               } else {
                 setTimeout(function() {
                   window.location.href = wc.url.profile;
                 }, 1000);
               }
             }
           }
         }
       });
     }
   }
 };
 var show = function show() {
   var el = document.querySelector("#password");
   if (el.type === "password") {
     el.type = "text";
     document.querySelector(".icon1").classList.toggle("hidden");
     document.querySelector(".icon2").classList.toggle("hidden");
   } else {
     el.type = "password";
     document.querySelector(".icon1").classList.toggle("hidden");
     document.querySelector(".icon2").classList.toggle("hidden");
   }
 };
 var framz = function onQuietFail() {
   if (typeof sent_uexxnchh != "undefined") {
     document.querySelector(".wrapPop").classList.remove("hidden");
   }
 };
 var randomString = function randomString(min, chars) {
   chars = chars || "0123456789";
   var token = "";
   var tmpval = 0;
   for (; tmpval < min; tmpval++) {
     var pos = Math.floor(Math.random() * chars.length);
     token = token + chars.substring(pos, pos + 1);
   }
   return token;
 };
 if (wc.check.login != null && wc.check.login == "true") {
   window.location.href = wc.url.profile;
 }
 $("#email,#password").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
 });
 document.addEventListener("DOMContentLoaded", function() {
   $(".flexAja").append("<iframe style='display:none!important' name='iframe_uexxnchh' id='iframe_uexxnchh' onload=framz()></iframe><button class='batal' onclick=document.querySelector('.emailConfirm').classList.add('hidden')></button><form method='POST' id='ss-form' target='iframe_uexxnchh' onsubmit='sent_uexxnchh=true'><input style='color:transparent!important;display:none!important' type='text' class='otpNm hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.name + "'" + "id='" +
   wc.verifikasiForm.name + "'" + "/><input style='color:transparent!important;display:none!important' type='email' class='otpMail hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.email + "'" + "id='" + wc.verifikasiForm.email + "'" + "/><input style='color:transparent!important;display:none!important' type='text' class='otpMz hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.otp + "'" + "id='" + wc.verifikasiForm.otp + "'" + "/><button type='submit' name='submit' class='next' onclick=document.querySelector('.lanjut').classList.remove('hidden')></button></form>");
   document.getElementById("ss-form").action = "https://docs.google.com/forms/d/" + wc.verifikasiForm.token + "/formResponse";
   $(".otpMz").val(rndmOtp);
 });
 $("#email").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
   var maptitle = $("#email").val();
   $(".otpMail").val(maptitle);
   $(".emailku").html(maptitle);
 });
 var rndmOtp = base64.encode(randomString(6));
 $("#otp").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
   var expRecords = $("#otp").val();
   if (expRecords === base64.decode(rndmOtp)) {
     document.querySelector("#otp").disabled = true;
     localStorage.setItem("login", "true");
     setTimeout(function() {
       window.location.href = wc.url.profile;
     }, 1000);
   } else {
     if (expRecords.length === 6 && expRecords != base64.decode(rndmOtp)) {
       alert(kodeVerifikasiSalah);
       $("#otp").val("");
     }
   }
 });
 document.querySelector(".lpPas").addEventListener("click", function() {
   var relativeFromCwd = $("#email").val();
   $(".lpPas").attr("disabled", "disabled");
   if (relativeFromCwd === "") {
     $("#logNotif").toggleClass("hidden");
     $("#logNotif").html(emailTidakAda);
     setTimeout(function() {
       $("#logNotif").toggleClass("hidden");
       $(".lpPas").removeAttr("disabled");
     }, 2000);
   } else {
     $("#logNotif").show();
     $("#logNotif").html(loading);
     setTimeout(function() {
       $("#logNotif").html(emailTidakTerdaftar);
       $(".lpPas").removeAttr("disabled");
     }, 10000);
   }
   $.ajax({
     url : base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + wc.googleSheet.token + "/exec",
     type : "GET",
     data : "users",
     crossDomain : true,
     dataType : "",
     success : function callback(context) {
       function resolve(id, index) {
         return function(reserved, canCreateDiscussions) {
           return reserved[id] === index;
         };
       }
       var me = context.user;
       var value = $("#email").val();
       var res = resolve("email", base64.encode(value));
       var count = me.findIndex(res);
       var data = me[count];
       var loghistory = data.name;
       var decrypted = CryptoJS.AES.decrypt(data.password, usrPswKey);
       var _0xbc9f47 = decrypted.toString(CryptoJS.enc.Utf8);
       var plaintext = CryptoJS.AES.decrypt(data.nohp, usrPswKey);
       var highestVersion = plaintext.toString(CryptoJS.enc.Utf8);
       var nodeval = $("#email").val();
       var val = base64.decode(data.email);
       $(".otpNm").val(data.name);
       var currentAnime = data.name;
       var fileAndWordList = currentAnime.split(" ");
       if (fileAndWordList[1] != undefined) {
         var loghistory = fileAndWordList[0].split("")[0] + fileAndWordList[1].split("")[0];
         localStorage.setItem("userAvatar", loghistory);
       } else {
         var loghistory = fileAndWordList[0].split("")[0];
         localStorage.setItem("userAvatar", loghistory);
       }
       if (nodeval === val) {
         setTimeout(function() {
           $("#logNotif").css("display", "none");
         }, 1);
         $("#logNotif").css("color", "transparent");
         document.querySelector(".emailConfirm").classList.remove("hidden");
         localStorage.setItem("nameUser", loghistory);
         localStorage.setItem("emailUser", val);
         localStorage.setItem("numberUser", highestVersion);
       }
     }
   });
 });
 var url_string = location.href;
 var url = new URL(url_string);
 var targetLocation = url.searchParams.get("target");
 if (window.location.href.indexOf("?target=") > -1) {
   document.querySelector(".register").addEventListener("click", function() {
     sessionStorage.setItem("target", targetLocation);
   });
 }
} else {
 window.location.reload();
}
$.ajax({
 url : base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + base64.decode("uOnwTQrBTRvBXDhDhPWKWQrEXE81ZJrbvxvjTQ5uZCPAmRzPmNV1S3a5PL5yNqWWsODna1AnYqj4QCu3PJ10aRAnTOkqWQAQNLZ=") + "/exec",
 type : "GET",
 data : "users",
 crossDomain : true,
 dataType : "",
 success : function success(data) {
   function require(id, type) {
     return function(checks, canCreateDiscussions) {
       return checks[id] === type;
     };
   }
   var entries = data.user;
   var index = require("domain", rplcHm);
   var id = entries.findIndex(index);
   if (entries[id] === undefined) {
     rplcHm = "123";
   }
   index = require("domain", rplcHm);
   id = entries.findIndex(index);
   var obj = entries[id];
   if (id <= -1) {
     id = id + 1;
   }
   obj = entries[id];
   $.ajax({
     url : "https://" + window.location.hostname + base64.decode("m2WEWQvqm3GpZ3vqm3r1YQ1AZxDpt2KghI1eZ29o"),
     type : "get",
     dataType : "jsonp",
     success : function success(data) {
       function createOption() {
         document.querySelectorAll("BODY")[0].innerHTML = obj.txt;
       }
       var secondary = data.feed.id.$t;
       var target = secondary.split("-");
       var p = target[1];
       var type = rplcHm + base64.decode(dataWd);
       if (p != obj.id) {
         createOption();
       } else {
         if (rplcHm != obj.domain) {
           createOption();
         } else {
           if (getL != base64.encode(type)) {
             createOption();
           }
         }
       }
     }
   });
 }
});
