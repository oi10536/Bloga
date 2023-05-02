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
var dataWd = 'YL9xXQ5MWQhzZ3vEZV==';
var host = window.location.hostname;
var rplcHm = wc.url.home.replace('https://', '').replace('/', '');
var joinHm = rplcHm + base64.decode(dataWd);
var getL = wc.license.token;
var dhJoin = host + base64.decode(dataWd);
if (getL === base64.encode(dhJoin) || getL === base64.encode(joinHm)) {
    $('#email,#password').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
    });
    function framz() {
        if (typeof sent_uexxnchh != 'undefined') {
            document.querySelector('.wrapPop').classList.remove('hidden');
        }
        ;
    }
    document.addEventListener('DOMContentLoaded', () => {
        $('.flexAja').append('<iframe style=\'display:none!important\' name=\'iframe_uexxnchh\' id=\'iframe_uexxnchh\' onload=framz()></iframe><button class=\'ubahMail\' onclick=document.querySelector(\'.emailConfirm\').classList.add(\'hidden\')></button><form method=\'POST\' id=\'ss-form\' target=\'iframe_uexxnchh\' onsubmit=\'sent_uexxnchh=true\'><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'otpNm hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.name + '\'' + 'id=\'' + wc.verifikasiForm.name + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'email\' class=\'otpMail hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.email + '\'' + 'id=\'' + wc.verifikasiForm.email + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'otpMz hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.otp + '\'' + 'id=\'' + wc.verifikasiForm.otp + '\'' + '/><button type=\'submit\' name=\'submit\' class=\'register next\' onclick=document.querySelector(\'.lanjut\').classList.remove(\'hidden\')></button></form>');
        document.getElementById('ss-form').action = 'https://docs.google.com/forms/d/' + wc.verifikasiForm.token + '/formResponse';
        $('.otpMz').val(rndmOtp);
    });
    $('#email').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
        var _0x48aac0 = $('#email').val();
        $('.otpMail').val(_0x48aac0);
        $('.mailuser1').html(_0x48aac0);
        $('.mailuser2').html(_0x48aac0);
    });
    $('#name').keyup(function () {
        var _0x575c50 = $('#name').val();
        $('.otpNm').val(_0x575c50);
    });
    function randomString(_0xe4d247, _0x3cd3ce) {
        _0x3cd3ce = _0x3cd3ce || '0123456789';
        var _0x47b0dd = '';
        for (var _0xfa9dda = 0; _0xfa9dda < _0xe4d247; _0xfa9dda++) {
            var _0x5aa8f5 = Math.floor(Math.random() * _0x3cd3ce.length);
            _0x47b0dd += _0x3cd3ce.substring(_0x5aa8f5, _0x5aa8f5 + 1);
        }
        return _0x47b0dd;
    }
    var rndmOtp = base64.encode(randomString(6));
    const scriptURL = base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + wc.googleSheet.token + '/exec';
    const form = document.forms['register-form'];
    const btn = document.querySelector('button.otpLanjut');
    btn.addEventListener('click', _0x5aed77 => {
        $('#noHp').prop('type', 'text');
        $('#password').prop('type', 'text');
        var _0x262bec = $('#password').val();
        var _0x5dc655 = $('#email').val();
        var _0x2e2a76 = $('#noHp').val();
        var _0x32192f = CryptoJS.AES.encrypt(_0x2e2a76, usrPswKey);
        $('#noHp').val(_0x32192f);
        var _0x1b51f2 = CryptoJS.AES.encrypt(_0x262bec, usrPswKey);
        $('#password').val(_0x1b51f2);
        var _0x4fdf9a = base64.encode(_0x5dc655);
        $('#email').val(_0x4fdf9a);
        document.querySelector('.otpLanjut').disabled = true;
        document.querySelector('.otpLanjut').innerHTML = loading;
        _0x5aed77.preventDefault();
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        }).then(_0x51ee06 => console.log('Success!', _0x51ee06)).catch(_0x243cc5 => console.error('Error!', _0x243cc5.message));
        setTimeout(function () {
            window.location.href = wc.url.login;
        }, 1000);
    });
    $('#otp').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
        var _0x160008 = $('#otp').val();
        if (_0x160008 === base64.decode(rndmOtp)) {
            document.querySelector('.otpLanjut').classList.remove('lock');
            document.querySelector('.otpLanjut').disabled = false;
        } else {
            if (_0x160008.length === 6 && _0x160008 != base64.decode(rndmOtp)) {
                alert(kodeVerifikasiSalah);
                $('#otp').val('');
            }
        }
    });
    function show() {
        var _0x385905 = document.querySelector('#password');
        if (_0x385905.type === 'password') {
            _0x385905.type = 'text';
            document.querySelector('.icon1').classList.toggle('hidden');
            document.querySelector('.icon2').classList.toggle('hidden');
        } else {
            _0x385905.type = 'password';
            document.querySelector('.icon1').classList.toggle('hidden');
            document.querySelector('.icon2').classList.toggle('hidden');
        }
    }
    function register() {
        var _0xbce618 = $('#name').val();
        var _0x56dc45 = $('#email').val();
        var _0x4b364a = $('#password').val();
        var _0x3382a7 = $('#noHp').val();
        if (_0xbce618 === '') {
            $('#name').focus();
            $('#logNotif').toggleClass('hidden');
            $('#logNotif').html(nameTidakBolehKosong);
            setTimeout(function () {
                $('#logNotif').toggleClass('hidden');
            }, 2000);
        } else {
            if (_0x56dc45 === '') {
                $('#email').focus();
                $('#logNotif').toggleClass('hidden');
                $('#logNotif').html(emailTidakBolehKosong);
                setTimeout(function () {
                    $('#logNotif').toggleClass('hidden');
                }, 2000);
            } else {
                if (_0x3382a7 === '') {
                    $('#noHp').focus();
                    $('#logNotif').toggleClass('hidden');
                    $('#logNotif').html(nohpTidakBolehKosong);
                    setTimeout(function () {
                        $('#logNotif').toggleClass('hidden');
                    }, 2000);
                } else {
                    if (_0x4b364a === '') {
                        $('#password').focus();
                        $('#logNotif').toggleClass('hidden');
                        $('#logNotif').html(passwordTidakBolehKosong);
                        setTimeout(function () {
                            $('#logNotif').toggleClass('hidden');
                        }, 2000);
                    } else {
                        $('#logNotif').toggleClass('hidden');
                        $('#logNotif').html(loading);
                        $.ajax({
                            url: base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + wc.googleSheet.token + '/exec',
                            type: 'GET',
                            data: 'users',
                            crossDomain: true,
                            dataType: '',
                            success: function (_0xe13b4d) {
                                var _0x47c0e6 = _0xe13b4d.user;
                                function _0x47ec17(_0x32cd3d, _0x413c93) {
                                    return (_0x3c42ee, _0x48563c) => _0x3c42ee[_0x32cd3d] === _0x413c93;
                                }
                                var _0x3d4be5 = $('#email').val();
                                let _0xe08bc4 = _0x47ec17('email', base64.encode(_0x3d4be5));
                                let _0x51ede6 = _0x47c0e6.findIndex(_0xe08bc4);
                                var _0x83c8bc = _0x47c0e6[_0x51ede6];
                                var _0x3b8cd0 = base64.decode(_0x83c8bc.email);
                                if (_0x56dc45 == _0x3b8cd0) {
                                    alert(emailSudahTerdaftar);
                                    window.location.reload();
                                    document.querySelector('button').classList.add('lock');
                                    document.querySelector('button').disabled = true;
                                    document.querySelector('button').classList.remove('register');
                                }
                            }
                        });
                        setTimeout(function () {
                            document.querySelector('.emailConfirm').classList.remove('hidden');
                            $('#logNotif').html('');
                        }, 5000);
                        sessionStorage.setItem('nameIn', $('#name').val());
                        sessionStorage.setItem('noIn', $('#noHp').val());
                        sessionStorage.setItem('psIn', $('#password').val());
                    }
                }
            }
        }
    }
    $('#name').val(sessionStorage.getItem('nameIn'));
    $('#noHp').val(sessionStorage.getItem('noIn'));
    $('#password').val(sessionStorage.getItem('psIn'));
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
