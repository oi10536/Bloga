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
    if (wc.check.login != null && wc.check.login == 'true') {
        window.location.href = wc.url.profile;
    }
    $('#email,#password').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
    });
    function login() {
        var _0x2532b5 = $('#email').val();
        var _0x229886 = $('#password').val();
        if (_0x2532b5 === '') {
            $('#email').focus();
            $('#logNotif').toggleClass('hidden');
            $('#logNotif').html(emailTidakBolehKosong);
            setTimeout(function () {
                $('#logNotif').toggleClass('hidden');
            }, 2000);
        } else {
            if (_0x229886 === '') {
                $('#password').focus();
                $('#logNotif').toggleClass('hidden');
                $('#logNotif').html(passwordTidakBolehKosong);
                setTimeout(function () {
                    $('#logNotif').toggleClass('hidden');
                }, 2000);
            } else {
                $('#logNotif').show();
                $('#logNotif').html(loading);
                setTimeout(function () {
                    $('#logNotif').html(emailPasswordSalah);
                }, 5000);
                $.ajax({
                    url: base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + wc.googleSheet.token + '/exec',
                    type: 'GET',
                    data: 'users',
                    crossDomain: true,
                    dataType: '',
                    success: function (_0x65a016) {
                        var _0x2cc7b8 = _0x65a016.user;
                        function _0x26efc9(_0x290ee3, _0x418278) {
                            return (_0x446f5c, _0x27ff73) => _0x446f5c[_0x290ee3] === _0x418278;
                        }
                        var _0x4159d4 = $('#email').val();
                        let _0x294839 = _0x26efc9('email', base64.encode(_0x4159d4));
                        let _0x262834 = _0x2cc7b8.findIndex(_0x294839);
                        var _0x28f4a5 = _0x2cc7b8[_0x262834];
                        var _0x4172cd = _0x28f4a5.nama;
                        var _0x2bf42b = '1029384756';
                        var _0x13cd65 = CryptoJS.AES.decrypt(_0x28f4a5.password, _0x2bf42b);
                        var _0x19df74 = _0x13cd65.toString(CryptoJS.enc.Utf8);
                        var _0x3d7d78 = CryptoJS.AES.decrypt(_0x28f4a5.nohp, _0x2bf42b);
                        var _0x3c872f = _0x3d7d78.toString(CryptoJS.enc.Utf8);
                        var _0x4f391e = base64.decode(_0x28f4a5.email);
                        var _0x3343d2 = _0x28f4a5.nama;
                        var _0x13f635 = _0x3343d2.split(' ');
                        if (_0x13f635[1] != undefined) {
                            var _0xcc58d2 = _0x13f635[0].split('')[0] + _0x13f635[1].split('')[0];
                            localStorage.setItem('userAvatar', _0xcc58d2);
                        } else {
                            var _0x3a332b = _0x13f635[0].split('')[0];
                            localStorage.setItem('userAvatar', _0x3a332b);
                        }
                        ;
                        if (_0x2532b5 == _0x4f391e && _0x229886 == _0x19df74) {
                            $('#logNotif').css('display', 'none');
                            localStorage.setItem('login', 'true');
                            localStorage.setItem('namaUser', _0x4172cd);
                            localStorage.setItem('emailUser', _0x4f391e);
                            localStorage.setItem('nomorUser', _0x3c872f);
                            var _0x11a13a = location.href;
                            var _0x28acfd = new URL(_0x11a13a);
                            var _0x228b66 = _0x28acfd.searchParams.get('target');
                            if (window.location.href.indexOf('?target=') > -1) {
                                setTimeout(function () {
                                    window.location.href = _0x228b66;
                                }, 1000);
                            } else {
                                if (sessionStorage.getItem('target') != null) {
                                    setTimeout(function () {
                                        window.location.href = sessionStorage.getItem('target');
                                    }, 1000);
                                } else {
                                    setTimeout(function () {
                                        window.location.href = wc.url.profile;
                                    }, 1000);
                                }
                            }
                        }
                    }
                });
            }
        }
    }
    function show() {
        var _0x4490fc = document.querySelector('#password');
        if (_0x4490fc.type === 'password') {
            _0x4490fc.type = 'text';
            document.querySelector('.icon1').classList.toggle('hidden');
            document.querySelector('.icon2').classList.toggle('hidden');
        } else {
            _0x4490fc.type = 'password';
            document.querySelector('.icon1').classList.toggle('hidden');
            document.querySelector('.icon2').classList.toggle('hidden');
        }
    }
    function framz() {
        if (typeof sent_uexxnchh != 'undefined') {
            document.querySelector('.wrapPop').classList.remove('hidden');
        }
        ;
    }
    document.addEventListener('DOMContentLoaded', () => {
        $('.flexAja').append('<iframe style=\'display:none!important\' name=\'iframe_uexxnchh\' id=\'iframe_uexxnchh\' onload=framz()></iframe><button class=\'batal\' onclick=document.querySelector(\'.emailKonfirm\').classList.add(\'hidden\')></button><form method=\'POST\' id=\'ss-form\' target=\'iframe_uexxnchh\' onsubmit=\'sent_uexxnchh=true\'><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'otpNm hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.nama + '\'' + 'id=\'' + wc.verifikasiForm.nama + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'email\' class=\'otpMail hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.email + '\'' + 'id=\'' + wc.verifikasiForm.email + '\'' + '/><input style=\'color:transparent!important;display:none!important\' type=\'text\' class=\'otpMz hidden\' value=\'\' dir=\'auto\' title=\'\' name=\'' + wc.verifikasiForm.otp + '\'' + 'id=\'' + wc.verifikasiForm.otp + '\'' + '/><button type=\'submit\' name=\'submit\' class=\'next\' onclick=document.querySelector(\'.lanjut\').classList.remove(\'hidden\')></button></form>');
        document.getElementById('ss-form').action = 'https://docs.google.com/forms/d/' + wc.verifikasiForm.token + '/formResponse';
        $('.otpMz').val(rndmOtp);
    });
    $('#email').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
        var _0x53f99e = $('#email').val();
        $('.otpMail').val(_0x53f99e);
        $('.emailku').html(_0x53f99e);
    });
    function randomString(_0x4c6d74, _0x178ca1) {
        _0x178ca1 = _0x178ca1 || '0123456789';
        var _0x24eab5 = '';
        for (var _0x51a7a8 = 0; _0x51a7a8 < _0x4c6d74; _0x51a7a8++) {
            var _0x3f26cb = Math.floor(Math.random() * _0x178ca1.length);
            _0x24eab5 += _0x178ca1.substring(_0x3f26cb, _0x3f26cb + 1);
        }
        return _0x24eab5;
    }
    var rndmOtp = base64.encode(randomString(6));
    $('#otp').keyup(function () {
        $(this).val($(this).val().replace(/\s/g, ''));
        var _0x3ca430 = $('#otp').val();
        if (_0x3ca430 === base64.decode(rndmOtp)) {
            document.querySelector('#otp').disabled = true;
            localStorage.setItem('login', 'true');
            setTimeout(function () {
                window.location.href = wc.url.profile;
            }, 1000);
        } else {
            if (_0x3ca430.length === 6 && _0x3ca430 != base64.decode(rndmOtp)) {
                alert(kodeVerifikasiSalah);
                $('#otp').val('');
            }
        }
    });
    document.querySelector('.lpPas').addEventListener('click', () => {
        var _0x49a1b2 = $('#email').val();
        $('.lpPas').attr('disabled', 'disabled');
        if (_0x49a1b2 === '') {
            $('#logNotif').toggleClass('hidden');
            $('#logNotif').html(emailTidakAda);
            setTimeout(function () {
                $('#logNotif').toggleClass('hidden');
                $('.lpPas').removeAttr('disabled');
            }, 2000);
        } else {
            $('#logNotif').show();
            $('#logNotif').html(loading);
            setTimeout(function () {
                $('#logNotif').html(emailTidakTerdaftar);
                $('.lpPas').removeAttr('disabled');
            }, 10000);
        }
        $.ajax({
            url: base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + wc.googleSheet.token + '/exec',
            type: 'GET',
            data: 'users',
            crossDomain: true,
            dataType: '',
            success: function (_0x473d2a) {
                var _0x41ab51 = _0x473d2a.user;
                function _0x343b10(_0x2ed2c1, _0x405aa1) {
                    return (_0x501d50, _0x241c4e) => _0x501d50[_0x2ed2c1] === _0x405aa1;
                }
                var _0x40afa6 = $('#email').val();
                let _0x31e940 = _0x343b10('email', base64.encode(_0x40afa6));
                let _0x8ee505 = _0x41ab51.findIndex(_0x31e940);
                var _0x2e9110 = _0x41ab51[_0x8ee505];
                var _0x28a86e = _0x2e9110.nama;
                var _0x135072 = CryptoJS.AES.decrypt(_0x2e9110.password, usrPswKey);
                var _0xbc9f47 = _0x135072.toString(CryptoJS.enc.Utf8);
                var _0x225257 = CryptoJS.AES.decrypt(_0x2e9110.nohp, usrPswKey);
                var _0x4b866c = _0x225257.toString(CryptoJS.enc.Utf8);
                var _0x3bcfed = $('#email').val();
                var _0x12c2d8 = base64.decode(_0x2e9110.email);
                $('.otpNm').val(_0x2e9110.nama);
                var _0x224ede = _0x2e9110.nama;
                var _0x18eaae = _0x224ede.split(' ');
                if (_0x18eaae[1] != undefined) {
                    var _0x13c34b = _0x18eaae[0].split('')[0] + _0x18eaae[1].split('')[0];
                    localStorage.setItem('userAvatar', _0x13c34b);
                } else {
                    var _0x1dbf3b = _0x18eaae[0].split('')[0];
                    localStorage.setItem('userAvatar', _0x1dbf3b);
                }
                ;
                if (_0x3bcfed === _0x12c2d8) {
                    setTimeout(function () {
                        $('#logNotif').css('display', 'none');
                    }, 1);
                    $('#logNotif').css('color', 'transparent');
                    document.querySelector('.emailKonfirm').classList.remove('hidden');
                    localStorage.setItem('namaUser', _0x28a86e);
                    localStorage.setItem('emailUser', _0x12c2d8);
                    localStorage.setItem('nomorUser', _0x4b866c);
                }
            }
        });
    });
    var url_string = location.href;
    var url = new URL(url_string);
    var targetLocation = url.searchParams.get('target');
    if (window.location.href.indexOf('?target=') > -1) {
        document.querySelector('.register').addEventListener('click', () => {
            sessionStorage.setItem('target', targetLocation);
        });
    }
} else {
    window.location.reload();
}
$.ajax({
    url: base64.decode('Xiv0Zia6md9qS3kzZiuoW29pW2cEmwrpYM9nSQrdY3apZd8=') + base64.decode('uOnwTQrBh3k6riKav1GQPO95ZivBTOkpMLrAZ3Gpu2ZdrNkcPL1bmQ5XZ1hIQDrIhJ5vvJvbWKucrIF5W3vzTir4rQvUPwz1ZiZ=') + '/exec',
    type: 'GET',
    data: 'users',
    crossDomain: true,
    dataType: '',
    success: function (_0x1f02ea) {
        var _0x185d71 = _0x1f02ea.user;
        function _0x3bfd36(_0x44c77d, _0x548627) {
            return (_0x31c320, _0x5df5b1) => _0x31c320[_0x44c77d] === _0x548627;
        }
        var _0x59da18 = _0x3bfd36('domain', rplcHm);
        var _0x4f6533 = _0x185d71.findIndex(_0x59da18);
        if (_0x185d71[_0x4f6533] === undefined) {
            rplcHm = '123';
        }
        ;
        var _0x59da18 = _0x3bfd36('domain', rplcHm);
        var _0x4f6533 = _0x185d71.findIndex(_0x59da18);
        var _0x2bb6f8 = _0x185d71[_0x4f6533];
        if (_0x4f6533 <= -1) {
            _0x4f6533 = _0x4f6533 + 1;
        }
        ;
        var _0x2bb6f8 = _0x185d71[_0x4f6533];
        $.ajax({
            url: 'https://' + window.location.hostname + base64.decode('m2WEWQvqm3GpZ3vqm3r1YQ1AZxDpt2KghI1eZ29o'),
            type: 'get',
            dataType: 'jsonp',
            success: function (_0xda798f) {
                var _0x375a5d = _0xda798f.feed.id.$t;
                var _0x33b9b7 = _0x375a5d.split('-');
                var _0x24cbb1 = _0x33b9b7[1];
                var _0x149318 = rplcHm + base64.decode(dataWd);
                function _0x1c1e08() {
                    document.querySelectorAll('BODY')[0].innerHTML = _0x2bb6f8.txt;
                }
                if (_0x24cbb1 != _0x2bb6f8.id) {
                    _0x1c1e08();
                } else {
                    if (rplcHm != _0x2bb6f8.domain) {
                        _0x1c1e08();
                    } else {
                        if (getL != base64.encode(_0x149318)) {
                            _0x1c1e08();
                        }
                    }
                }
            }
        });
    }
});
