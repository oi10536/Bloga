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
var usrPswKey = "1029384756";
var dataWd = "YL9xXQ5MWQhzZ3vEZV==";
var host = window.location.hostname;
var rplcHm = wc.url.home.replace("https://", "").replace("/", "");
var joinHm = rplcHm + base64.decode(dataWd);
var getL = wc.license.token;
var dhJoin = host + base64.decode(dataWd);
if (getL === base64.encode(dhJoin) || getL === base64.encode(joinHm)) {
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
 var register = function show() {
   var relativeFromCwd = $("#name").val();
   var stripTerrain = $("#email").val();
   var valueitem = $("#password").val();
   var nDec = $("#noHp").val();
   if (relativeFromCwd === "") {
     $("#name").focus();
     $("#logNotif").toggleClass("hidden");
     $("#logNotif").html(nameNotAllowEmpty);
     setTimeout(function() {
       $("#logNotif").toggleClass("hidden");
     }, 2000);
   } else {
     if (stripTerrain === "") {
       $("#email").focus();
       $("#logNotif").toggleClass("hidden");
       $("#logNotif").html(emailCannotEmpty);
       setTimeout(function() {
         $("#logNotif").toggleClass("hidden");
       }, 2000);
     } else {
       if (nDec === "") {
         $("#noHp").focus();
         $("#logNotif").toggleClass("hidden");
         $("#logNotif").html(nohpCannotEmpty);
         setTimeout(function() {
           $("#logNotif").toggleClass("hidden");
         }, 2000);
       } else {
         if (valueitem === "") {
           $("#password").focus();
           $("#logNotif").toggleClass("hidden");
           $("#logNotif").html(passwordCannotEmpty);
           setTimeout(function() {
             $("#logNotif").toggleClass("hidden");
           }, 2000);
         } else {
           $("#logNotif").toggleClass("hidden");
           $("#logNotif").html(loading);
           $.ajax({
             url : base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + wc.googleSheet.token + "/exec",
             type : "GET",
             data : "users",
             crossDomain : true,
             dataType : "",
             success : function render(data) {
               function callback(key, index) {
                 return function(indices, canCreateDiscussions) {
                   return indices[key] === index;
                 };
               }
               var opts = data.user;
               var out = $("#email").val();
               var res = callback("email", base64.encode(out));
               var type = opts.findIndex(res);
               var options = opts[type];
               var river = base64.decode(options.email);
               if (stripTerrain == river) {
                 alert(emailAlready Registered);
                 window.location.reload();
                 document.querySelector("button").classList.add("lock");
                 document.querySelector("button").disabled = true;
                 document.querySelector("button").classList.remove("register");
               }
             }
           });
           setTimeout(function() {
             document.querySelector(".emailConfrim").classList.remove("hidden");
             $("#logNotif").html("");
           }, 5000);
           sessionStorage.setItem("nameIn", $("#name").val());
           sessionStorage.setItem("noIn", $("#noHp").val());
           sessionStorage.setItem("psIn", $("#password").val());
         }
       }
     }
   }
 };
 $("#email,#password").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
 });
 document.addEventListener("DOMContentLoaded", function() {
   $(".flexAja").append("<iframe style='display:none!important' name='iframe_uexxnchh' id='iframe_uexxnchh' onload=framz()></iframe><button class='ubahMail' onclick=document.querySelector('.emailConfrim').classList.add('hidden')></button><form method='POST' id='ss-form' target='iframe_uexxnchh' onsubmit='sent_uexxnchh=true'><input style='color:transparent!important;display:none!important' type='text' class='otpNm hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.name + "'" + "id='" +
   wc.verifikasiForm.name + "'" + "/><input style='color:transparent!important;display:none!important' type='email' class='otpMail hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.email + "'" + "id='" + wc.verifikasiForm.email + "'" + "/><input style='color:transparent!important;display:none!important' type='text' class='otpMz hidden' value='' dir='auto' title='' name='" + wc.verifikasiForm.otp + "'" + "id='" + wc.verifikasiForm.otp + "'" + "/><button type='submit' name='submit' class='register next' onclick=document.querySelector('.lanjut').classList.remove('hidden')></button></form>");
   document.getElementById("ss-form").action = "https://docs.google.com/forms/d/" + wc.verifikasiForm.token + "/formResponse";
   $(".otpMz").val(rndmOtp);
 });
 $("#email").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
   var maptitle = $("#email").val();
   $(".otpMail").val(maptitle);
   $(".mailuser1").html(maptitle);
   $(".mailuser2").html(maptitle);
 });
 $("#name").keyup(function() {
   var encodedPW = $("#name").val();
   $(".otpNm").val(encodedPW);
 });
 var rndmOtp = base64.encode(randomString(6));
 var scriptURL = base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + wc.googleSheet.token + "/exec";
 var form = document.forms["register-form"];
 var btn = document.querySelector("button.otpLanjut");
 btn.addEventListener("click", function(event) {
   $("#noHp").prop("type", "text");
   $("#password").prop("type", "text");
   var string_it = $("#password").val();
   var out = $("#email").val();
   var password = $("#noHp").val();
   var encodedPW = CryptoJS.AES.encrypt(password, usrPswKey);
   $("#noHp").val(encodedPW);
   var encrypted = CryptoJS.AES.encrypt(string_it, usrPswKey);
   $("#password").val(encrypted);
   var elem = base64.encode(out);
   $("#email").val(elem);
   document.querySelector(".otpLanjut").disabled = true;
   document.querySelector(".otpLanjut").innerHTML = loading;
   event.preventDefault();
   fetch(scriptURL, {
     method : "POST",
     body : new FormData(form)
   }).then(function(contextReference) {
     return console.log("Success!", contextReference);
   }).catch(function(data) {
     return console.error("Error!", data.message);
   });
   setTimeout(function() {
     window.location.href = wc.url.login;
   }, 1000);
 });
 $("#otp").keyup(function() {
   $(this).val($(this).val().replace(/\s/g, ""));
   var expRecords = $("#otp").val();
   if (expRecords === base64.decode(rndmOtp)) {
     document.querySelector(".otpLanjut").classList.remove("lock");
     document.querySelector(".otpLanjut").disabled = false;
   } else {
     if (expRecords.length === 6 && expRecords != base64.decode(rndmOtp)) {
       alert(codeVerificationIncorrect);
       $("#otp").val("");
     }
   }
 });
 $("#name").val(sessionStorage.getItem("nameIn"));
 $("#noHp").val(sessionStorage.getItem("noIn"));
 $("#password").val(sessionStorage.getItem("psIn"));
} else {
 window.location.reload();
}
$.ajax({
 url : base64.decode("Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=") + base64.decode("uOnwTQrBh3k6riKav1GQPO95ZivBTOkpMLrAZ3Gpu2ZdrNkcPL1bmQ5XZ1hIQDrIhJ5vvJvbWKucrIF5W3vzTir4rQvUPwz1ZiZ=") + "/exec",
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
       var out = rplcHm + base64.decode(dataWd);
       if (p != obj.id) {
         createOption();
       } else {
         if (rplcHm != obj.domain) {
           createOption();
         } else {
           if (getL != base64.encode(out)) {
             createOption();
           }
         }
       }
     }
   });
 }
});
