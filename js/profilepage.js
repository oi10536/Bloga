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
   var i;
   var bite;
   var enteredKey;
   var _0x23e423;
   var _0x477a34;
   var _0x47c369;
   var out = "";
   var i_format = 0;
   format = format.replace(/[^A-Za-z0-9\+\/=]/g, "");
   for (; i_format < format.length;) {
     i = this["_keyStr"].indexOf(format.charAt(i_format++)) << 2 | (_0x23e423 = this["_keyStr"].indexOf(format.charAt(i_format++))) >> 4;
     bite = (15 & _0x23e423) << 4 | (_0x477a34 = this["_keyStr"].indexOf(format.charAt(i_format++))) >> 2;
     enteredKey = (3 & _0x477a34) << 6 | (_0x47c369 = this["_keyStr"].indexOf(format.charAt(i_format++)));
     out = out + String.fromCharCode(i);
     if (64 != _0x477a34) {
       out = out + String.fromCharCode(bite);
     }
     if (64 != _0x47c369) {
       out = out + String.fromCharCode(enteredKey);
     }
   }
   return out = base64["_utf8_decode"](out);
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
var usrPswKey = '1029384756';
var dataWd = 'YL9xXQ5MWQhzZ3vEZV==';
var host = window.location.hostname;
var rplcHm = wc.url.home.replace('https://', '').replace('/', '');
var joinHm = rplcHm + base64.decode(dataWd);
var getL = wc.license.token;
var dhJoin = host + base64.decode(dataWd);
if (getL === base64.encode(dhJoin) || getL === base64.encode(joinHm)) {
    if (localStorage.getItem('userAvatar') != null) {
        $('.avatar').append(localStorage.getItem('userAvatar'));
    } else {
        $('.avatar').hide();
    }
    if (wc.check.login == null && wc.check.login != 'true') {
        window.location.href = wc.url.login;
    }
    function logout() {
        let _0x29cbb3 = confirm(notifLogout);
        if (_0x29cbb3) {
            localStorage.removeItem('login');
            localStorage.removeItem('nameUser');
            localStorage.removeItem('emailUser');
            localStorage.removeItem('numberUser');
            setTimeout(function () {
                window.location.href = wc.url.login;
            }, 1000);
        }
    }
    $('#email').val(wc.check.email);
    $('#nama').val(wc.check.nama);
    $('#noHp').val(wc.check.noHp);
    var nama = document.querySelector('#nama');
    var nomor = document.querySelector('#noHp');
    var password = document.querySelector('#password');
    var email = document.querySelector('#email');
    document.querySelector('.editData').addEventListener('click', () => {
        var _0x86bc63 = document.querySelector('#password');
        if (_0x86bc63.type === 'password') {
            _0x86bc63.type = 'text';
        } else {
            _0x86bc63.type = 'password';
        }
        document.querySelector('.updateData').classList.toggle('hidden');
        document.querySelector('.logout').classList.toggle('hidden');
        nama.toggleAttribute('disabled');
        nomor.toggleAttribute('disabled');
        _0x86bc63.toggleAttribute('disabled');
        nama.classList.toggle('aktif');
        nomor.classList.toggle('aktif');
        _0x86bc63.classList.toggle('aktif');
        document.querySelector('#email').classList.toggle('lock');
    });
    function updateData() {
        if (email.value != wc.check.email) {
            window.location.href = wc.url.login;
        } else {
            if (nama.value === '') {
                nama.focus();
            } else {
                if (nomor.value === '') {
                    nomor.focus();
                } else {
                    if (password.value === '') {
                        password.focus();
                    } else {
                        document.querySelector('.updateProfile').classList.remove('hidden');
                    }
                }
            }
        }
    }
    function framz() {
        if (typeof sent_uexxnchh != 'undefined') {
            localStorage.removeItem('login');
            window.location.href = wc.url.login;
        }
        ;
    }
    ;
    $.ajax({
        url: base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + wc.googleSheet.token + '/exec',
        type: 'GET',
        data: 'users',
        crossDomain: true,
        dataType: '',
        success: function (_0x11cb2) {
            var _0x3dfb42 = _0x11cb2.user;
            function _0x23af53(_0x1fc827, _0x23e50a) {
                return (_0x3cd277, _0xef48b1) => _0x3cd277[_0x1fc827] === _0x23e50a;
            }
            var _0x4de0ee = wc.check.email;
            let _0x3c148f = _0x23af53('email', base64.encode(_0x4de0ee));
            let _0x189e94 = _0x3dfb42.findIndex(_0x3c148f);
            let _0x3837be = _0x189e94 + 2;
            var _0x5bc354 = _0x3dfb42[_0x189e94];
            var _0x7a84bf = CryptoJS.AES.decrypt(_0x5bc354.password, usrPswKey);
            $('#password').val(_0x7a84bf.toString(CryptoJS.enc.Utf8));
            $('.flexAja').append('<iframe style=\'display:none!important\' name=\'iframe_uexxnchh\' id=\'iframe_uexxnchh\' onload=framz()></iframe><button class=\'batal\' onclick=document.querySelector(\'.updateProfile\').classList.add(\'hidden\')></button><form method=\'POST\' id=\'ss-form\' target=\'iframe_uexxnchh\' onsubmit=\'sent_uexxnchh=true\'><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'dataNm hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.updateForm.nama + '\'' + 'id=\'' + wc.updateForm.nama + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'dataHp hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.updateForm.nomor + '\'' + 'id=\'' + wc.updateForm.nomor + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'dataPas hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.updateForm.newpas + '\'' + 'id=\'' + wc.updateForm.newpas + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'dataIdx hidden\' value=\'' + _0x3837be + '\' dir=\'auto\' title=\'\' name=\'' + wc.updateForm.index + '\'' + 'id=\'' + wc.updateForm.index + '\'' + '/><button type=\'submit\' name=\'submit\' class=\'next\'></button></form>');
            document.getElementById('ss-form').action = 'https://docs.google.com/forms/d/' + wc.updateForm.token + '/formResponse';
            $('#email,#password').keyup(function () {
                $(this).val($(this).val().replace(/\s/g, ''));
            });
            $('#nama').keyup(function () {
                var _0x4065ab = $('#nama').val();
                $('.dataNm').val(_0x4065ab);
            });
            $('#noHp').keyup(function () {
                var _0x2da25b = $('#noHp').val();
                var _0x5301ba = CryptoJS.AES.encrypt(_0x2da25b, usrPswKey);
                $('.dataHp').val(_0x5301ba);
            });
            $('#password').keyup(function () {
                var _0x16c5c6 = $('#password').val();
                var _0x39109d = CryptoJS.AES.encrypt(_0x16c5c6, usrPswKey);
                $('.dataPas').val(_0x39109d);
            });
        }
    });
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
       var i = rplcHm + base64.decode(dataWd);
       if (p != obj.id) {
         createOption();
       } else {
         if (rplcHm != obj.domain) {
           createOption();
         } else {
           if (getL != base64.encode(i)) {
             createOption();
           }
         }
       }
     }
   });
 }
});
