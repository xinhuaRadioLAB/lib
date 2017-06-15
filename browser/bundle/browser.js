'use strict';

/**
 * Copyright (c) Xinhuanet Inc. All rights reserved.
 *
 * @License: MIT
 * @Author: SuperWoods
 * @Email:  st_sister@iCloud.com
 * @Date:   2016-06-17-16.35
 *          2016-07-11-15.04
 *
 * @(demo)Last modified by:   SuperWoods
 * @(demo)Last modified time: 2016-09-28-09:36:26
 */

(function () {
    // 是否拥有 trim 方法
    if (!String.prototype.trim) {
        String.prototype.trim = function trim() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }

    // ------------------------------- begin
    var browser = '';
    var device = '';

    var ua = navigator.userAgent.toLowerCase();
    var href = window.location.href;
    var html = document.getElementsByTagName('html')[0];
    var version = (ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];

    // 浏览器规则
    var _chrome$safari$firefo = {
        chrome: 'chrome',
        safari: 'safari',
        firefox: 'firefox',
        trident: 'trident',
        opera: 'opera',
        crios: 'crios',
        msie: 'msie',
        ie: 'ie',
        oldie: 'oldie',
        ie9: 'ie9',
        ie10: 'ie10',
        ie11: 'ie11'
    },
        chrome = _chrome$safari$firefo.chrome,
        safari = _chrome$safari$firefo.safari,
        firefox = _chrome$safari$firefo.firefox,
        trident = _chrome$safari$firefo.trident,
        opera = _chrome$safari$firefo.opera,
        crios = _chrome$safari$firefo.crios,
        msie = _chrome$safari$firefo.msie,
        ie = _chrome$safari$firefo.ie,
        oldie = _chrome$safari$firefo.oldie,
        ie9 = _chrome$safari$firefo.ie9,
        ie10 = _chrome$safari$firefo.ie10,
        ie11 = _chrome$safari$firefo.ie11;

    // 设备规则

    var _ipad$iphone$iphoneOs = {
        ipad: 'ipad',
        iphone: 'iphone',
        iphoneOs: 'iphone os',
        mac: 'mac',
        macintosh: 'macintosh',
        windows: 'windows',
        pc: 'pc',
        mobile: 'mobile',
        otherMobile: 'OtherMobile',
        android: 'android'
    },
        ipad = _ipad$iphone$iphoneOs.ipad,
        iphone = _ipad$iphone$iphoneOs.iphone,
        iphoneOs = _ipad$iphone$iphoneOs.iphoneOs,
        mac = _ipad$iphone$iphoneOs.mac,
        macintosh = _ipad$iphone$iphoneOs.macintosh,
        windows = _ipad$iphone$iphoneOs.windows,
        pc = _ipad$iphone$iphoneOs.pc,
        mobile = _ipad$iphone$iphoneOs.mobile,
        otherMobile = _ipad$iphone$iphoneOs.otherMobile,
        android = _ipad$iphone$iphoneOs.android;
    var _isMacintosh$isIPad$i = {
        isMacintosh: ua.indexOf(macintosh) > 0,
        isIPad: ua.indexOf(ipad) > 0,
        isIPhone: ua.indexOf(iphone) > 0,
        isIPhoneOS: ua.indexOf(iphoneOs) > 0,
        isAndroid: ua.indexOf(android) > 0,
        isWindows: ua.indexOf(windows) > 0,
        isWindowsMobile: ua.indexOf('windows mobile') > 0,
        isEdge: ua.indexOf('edge') > 0,
        isMiPad: ua.indexOf('mi pad') !== -1,
        isMiBrowser: ua.indexOf('xiaomi/miuibrowser') !== -1,
        isUCWeb: ua.indexOf(/ucweb/i) > 0,
        isPCMod: href.lastIndexOf('#' + pc) !== -1,
        isMsie: ua.indexOf(msie) > 0,
        isTrident: ua.indexOf(trident) > 0,
        isChrome: ua.indexOf(chrome) > 0 || ua.indexOf(crios) > 0,
        isSafari: ua.indexOf(safari) > 0,
        isFF: ua.indexOf(firefox) > 0,
        isOpera: ua.indexOf(opera) > 0,
        isGecko: ua.indexOf('gecko') > -1,
        isKhtml: ua.indexOf('khtml') === -1,
        isV11: version === '11.0'
    },
        isMacintosh = _isMacintosh$isIPad$i.isMacintosh,
        isIPad = _isMacintosh$isIPad$i.isIPad,
        isIPhone = _isMacintosh$isIPad$i.isIPhone,
        isIPhoneOS = _isMacintosh$isIPad$i.isIPhoneOS,
        isAndroid = _isMacintosh$isIPad$i.isAndroid,
        isWindows = _isMacintosh$isIPad$i.isWindows,
        isWindowsMobile = _isMacintosh$isIPad$i.isWindowsMobile,
        isPCMod = _isMacintosh$isIPad$i.isPCMod,
        isEdge = _isMacintosh$isIPad$i.isEdge,
        isMiPad = _isMacintosh$isIPad$i.isMiPad,
        isMiBrowser = _isMacintosh$isIPad$i.isMiBrowser,
        isUCWeb = _isMacintosh$isIPad$i.isUCWeb,
        isMsie = _isMacintosh$isIPad$i.isMsie,
        isTrident = _isMacintosh$isIPad$i.isTrident,
        isChrome = _isMacintosh$isIPad$i.isChrome,
        isSafari = _isMacintosh$isIPad$i.isSafari,
        isFF = _isMacintosh$isIPad$i.isFF,
        isOpera = _isMacintosh$isIPad$i.isOpera,
        isGecko = _isMacintosh$isIPad$i.isGecko,
        isKhtml = _isMacintosh$isIPad$i.isKhtml,
        isV11 = _isMacintosh$isIPad$i.isV11;


    if (isMacintosh) device += ' ' + mac;
    if (isIPad) device += ' ' + ipad;
    if (isIPhone || isIPhoneOS) device += ' ' + iphone;
    if (isAndroid) device += ' ' + android;
    if (isWindows) device += ' ' + windows;
    if (isWindowsMobile) device += ' windowsMobile';
    if (isEdge) device += ' edge';
    if (isMiPad) device += ' miPad';
    if (isMiBrowser) device += ' xiaomi_miuibrowser';
    if (isUCWeb) device += ' ucweb';
    if (isPCMod) device += ' ' + pc + 'Mod';

    var isJump = (typeof window.BROWSER_JUMPTO === 'string' || typeof window.browser_jumpto === 'string') && !isPCMod;

    console.log('isJump0: ', isJump);

    // 跳转模块
    if (isJump) {
        var mobileHref = void 0;
        var jumpURI = 'mobile';
        var endName = '';

        if (window.browser_jumpto) {
            jumpURI = window.browser_jumpto;
        } else {
            if (window.BROWSER_JUMPTO) {
                jumpURI = window.BROWSER_JUMPTO;
            }
        }
        console.log('isJump:', jumpURI);
        if (jumpURI.lastIndexOf('.html') !== -1) {
            jumpURI = jumpURI.replace('.html', '');
            endName = 'l';
        } else if (jumpURI.lastIndexOf('.htm') !== -1) {
            jumpURI = jumpURI.replace('.htm', '');
        }

        if (href.lastIndexOf('index') !== -1) {
            if (href.lastIndexOf('.html') !== -1) {
                mobileHref = href.replace('index.html', jumpURI + '.html');
            } else if (href.lastIndexOf('.htm') !== -1) {
                mobileHref = href.replace('index.htm', jumpURI + '.htm');
            } else {
                mobileHref = href.replace('index', jumpURI);
            }
        } else {
            mobileHref = '' + href + jumpURI + '.htm' + endName;
        }
        // 此时得到正确的 mobileHref
        console.log('mobileHref:', mobileHref);

        // 判断 pad 或 phone
        if (isMiPad || isMiBrowser || isIPad) {
            // 如果是 pad
            console.log('isPad');

            // 是否开始pad跳转
            var isJUMP_PAD = document.getElementsByName('BROWSER_JUMP_PAD').length > 0; // 默认：不开启
            // console.log('isJUMP_PAD', isJUMP_PAD);
            console.log('isJUMP_PAD:', isJUMP_PAD);

            // 启用 pad跳转模块，默认不开启
            var _isMobilePage = href.lastIndexOf(jumpURI) > 0;
            console.log('isMobile', _isMobilePage);

            if (!_isMobilePage && isJUMP_PAD) {

                var padHref = void 0;

                // 处理 padHref
                if (href.lastIndexOf('index') > 0 || href.lastIndexOf('mobile') > 0) {
                    padHref = href.replace('index', 'pad');
                    padHref = href.replace('mobile', 'pad');
                } else {
                    padHref = href + 'pad.htm';
                }
                window.location.href = padHref;
            }
        } else {
            if (isIPhone || isIPhoneOS || isAndroid || isWindowsMobile || isUCWeb) {
                // 如果是 phone
                console.log('isPhone');
                if (!isMobilePage) {
                    window.location.href = mobileHref;
                }
            } else {
                if (isGecko && isKhtml && isFF && isV11) {
                    // 如果是 otherMobile
                    console.log('otherMobile');
                    if (!isMobilePage) {
                        window.location.href = mobileHref;
                    }
                }
            }
        }
        // }
    }

    // 设置 browser
    // 是否为 ie
    if (isMsie) {
        if (!isOpera) {
            if (version < 9.0) {
                browser = oldie;
            } else if (version < 10.0) {
                browser = ie9;
            } else if (version < 11.0) {
                browser = ie10;
            }
        }
    } else {
        if (isTrident) browser = ie11;
        if (isFF) browser = firefox;
        if (isOpera) browser = opera;
        if (isSafari) browser = safari;
        if (isChrome) browser = chrome;
    }

    // 设置 device
    // if (isIPhone || isIPhoneOS) device = iphone;
    // if (isIPad) device = ipad;
    // if (isMacintosh) device = mac;
    // if (isWindows) device = windows;
    if (browser === '') {
        browser = 'unknown';
    }

    // 验证 html.className 是否为空, 如果不为空则添加 ' ' 用来分割后面的 className
    console.log('html.className length:', html.className.length);

    if (html.className.length > 0) {
        html.className = html.className.trim(); // 去除前后冗余空格
        html.className += ' ';
    }

    // 如果是ie 或者高版本ie（edge or ie11）
    if (isMsie || !isMsie && isTrident) {
        html.className += ie + ' ' + browser;
    } else {
        html.className += browser;
    }

    if (device === '') {
        device = ' unknown';
    }

    html.className += '' + device;

    // 输出 BROWSER 对象
    window.BROWSER = {
        browser: browser,
        device: device.trim(),
        version: version,
        ua: ua
    };

    console.log('--------- browser.js well done!');
})(window);