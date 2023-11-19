import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import imagePng from '@/assets/imagePng.png';
import imageJpg from '@/assets/imageJpg.jpg';
import ImageSvg from '@/assets/imageSvg.svg';
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    var decrement = function () { return setCount(function (prev) { return (prev <= 0 ? prev : prev - 1); }); };
    function test(a) {
        return a + 2;
    }
    test('e');
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "IsDEsctop" });
    }
    if (__PLATFORM__ === 'desktop') {
        return (_jsxs("div", { children: [_jsxs("div", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 100, height: 100, src: imagePng, alt: "" }), _jsx("img", { width: 100, height: 100, src: imageJpg, alt: "" })] }), _jsx("div", { children: _jsx(ImageSvg, { color: 'green', width: 100, height: 30 }) }), _jsx(Link, { to: '/about', children: "About" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "Shop" }), _jsx("br", {}), _jsx("span", { className: classes.value, children: count }), _jsx("button", { className: classes.button, onClick: increment, children: "Increment" }), _jsx("button", { className: classes.button, onClick: decrement, children: "Decrement" }), _jsx(Outlet, {})] }));
    }
};
