var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.a5a4456de528d6867ccb.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 448: function (e, t, n) { var r = n(294), a = n(840); function l(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var o = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            o.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {}; function m(e, t, n, r, a, l, o) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), z = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var D = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var M = Symbol.iterator; function O(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = M && e[M] || e["@@iterator"]) ? e : null; } var U, F = Object.assign; function j(e) { if (void 0 === U)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                U = t && t[1] || "";
            } return "\n" + U + e; } var I = !1; function A(e, t) { if (!e || I)
            return ""; I = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];)
                    i--;
                for (; 1 <= o && 0 <= i; o--, i--)
                    if (a[o] !== l[i]) {
                        if (1 !== o || 1 !== i)
                            do {
                                if (o--, 0 > --i || a[o] !== l[i]) {
                                    var u = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= o && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            I = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? j(e) : ""; } function B(e) { switch (e.tag) {
            case 5: return j(e.type);
            case 16: return j("Lazy");
            case 13: return j("Suspense");
            case 19: return j("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function $(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case x: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case E: return "StrictMode";
            case L: return "Suspense";
            case N: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case R:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case T: return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
                case z:
                    t = e._payload, e = e._init;
                    try {
                        return $(e(t));
                    }
                    catch (e) { }
            } return null; } function H(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return $(t);
            case 8: return t === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function V(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function W(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function Q(e) { e._valueTracker || (e._valueTracker = function (e) { var t = W(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, l = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, l.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = V(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function G(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function J(e, t) { G(e, t); var n = V(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(l(91)); return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(l(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(l(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: V(n) }; } function le(e, t) { var n = V(t.value), r = V(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function oe(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, fe = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function de(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ye(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(l(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(l(62));
        } } function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, xe = null, Ee = null; function Ce(e) { if (e = ba(e)) {
            if ("function" != typeof Se)
                throw Error(l(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function _e(e) { xe ? Ee ? Ee.push(e) : Ee = [e] : xe = e; } function Pe() { if (xe) {
            var e = xe, t = Ee;
            if (Ee = xe = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } } function Re(e, t) { return e(t); } function Le() { } var Ne = !1; function Te(e, t, n) { if (Ne)
            return e(t, n); Ne = !0; try {
            return Re(e, t, n);
        }
        finally {
            Ne = !1, (null !== xe || null !== Ee) && (Le(), Pe());
        } } function ze(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(l(231, t, typeof n)); return n; } var De = !1; if (c)
            try {
                var Me = {};
                Object.defineProperty(Me, "passive", { get: function () { De = !0; } }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me);
            }
            catch (ce) {
                De = !1;
            } function Oe(e, t, n, r, a, l, o, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Ue = !1, Fe = null, je = !1, Ie = null, Ae = { onError: function (e) { Ue = !0, Fe = e; } }; function Be(e, t, n, r, a, l, o, i, u) { Ue = !1, Fe = null, Oe.apply(Ae, arguments); } function $e(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 != (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function He(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function Ve(e) { if ($e(e) !== e)
            throw Error(l(188)); } function We(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = $e(e)))
                throw Error(l(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === n)
                        return Ve(a), e;
                    if (o === r)
                        return Ve(a), t;
                    o = o.sibling;
                }
                throw Error(l(188));
            }
            if (n.return !== r.return)
                n = a, r = o;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = o;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            i = !0, n = o, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = o, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(l(189));
                }
            }
            if (n.alternate !== r)
                throw Error(l(190));
        } if (3 !== n.tag)
            throw Error(l(188)); return n.stateNode.current === n ? e : t; }(e)) ? Qe(e) : null; } function Qe(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Qe(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var qe = a.unstable_scheduleCallback, Ke = a.unstable_cancelCallback, Ye = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Ge = a.unstable_now, Je = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, lt = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (it(e) / ut | 0) | 0; }, it = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function ft(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function dt(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, l = e.pingedLanes, o = 268435455 & n; if (0 !== o) {
            var i = o & ~a;
            0 !== i ? r = ft(i) : 0 != (l &= o) && (r = ft(l));
        }
        else
            0 != (o = n & ~a) ? r = ft(o) : 0 !== l && (r = ft(l)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 != (4194240 & l)))
            return t; if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ht(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = st; return 0 == (4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var bt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1; } var kt, St, xt, Et, Ct, _t = !1, Pt = [], Rt = null, Lt = null, Nt = null, Tt = new Map, zt = new Map, Dt = [], Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Ot(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Rt = null;
                break;
            case "dragenter":
            case "dragleave":
                Lt = null;
                break;
            case "mouseover":
            case "mouseout":
                Nt = null;
                break;
            case "pointerover":
            case "pointerout":
                Tt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": zt.delete(t.pointerId);
        } } function Ut(e, t, n, r, a, l) { return null === e || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ft(e) { var t = ya(e.target); if (null !== t) {
            var n = $e(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = He(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { xt(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function jt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function It(e, t, n) { jt(e) && n.delete(t); } function At() { _t = !1, null !== Rt && jt(Rt) && (Rt = null), null !== Lt && jt(Lt) && (Lt = null), null !== Nt && jt(Nt) && (Nt = null), Tt.forEach(It), zt.forEach(It); } function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function $t(e) { function t(t) { return Bt(t, e); } if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
                var r = Pt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Rt && Bt(Rt, e), null !== Lt && Bt(Lt, e), null !== Nt && Bt(Nt, e), Tt.forEach(t), zt.forEach(t), n = 0; n < Dt.length; n++)
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;)
            Ft(n), null === n.blockedOn && Dt.shift(); } var Ht = w.ReactCurrentBatchConfig, Vt = !0; function Wt(e, t, n, r) { var a = bt, l = Ht.transition; Ht.transition = null; try {
            bt = 1, qt(e, t, n, r);
        }
        finally {
            bt = a, Ht.transition = l;
        } } function Qt(e, t, n, r) { var a = bt, l = Ht.transition; Ht.transition = null; try {
            bt = 4, qt(e, t, n, r);
        }
        finally {
            bt = a, Ht.transition = l;
        } } function qt(e, t, n, r) { if (Vt) {
            var a = Yt(e, t, n, r);
            if (null === a)
                Vr(e, t, r, Kt, n), Ot(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Rt = Ut(Rt, e, t, n, r, a), !0;
                case "dragenter": return Lt = Ut(Lt, e, t, n, r, a), !0;
                case "mouseover": return Nt = Ut(Nt, e, t, n, r, a), !0;
                case "pointerover":
                    var l = a.pointerId;
                    return Tt.set(l, Ut(Tt.get(l) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return l = a.pointerId, zt.set(l, Ut(zt.get(l) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Ot(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                for (; null !== a;) {
                    var l = ba(a);
                    if (null !== l && kt(l), null === (l = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n), l === a)
                        break;
                    a = l;
                }
                null !== a && r.stopPropagation();
            }
            else
                Vr(e, t, r, null, n);
        } } var Kt = null; function Yt(e, t, n, r) { if (Kt = null, null !== (e = ya(e = ke(r))))
            if (null === (t = $e(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = He(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Kt = e, null; } function Xt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Je()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Gt = null, Jt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Jt, r = n.length, a = "value" in Gt ? Gt.value : Gt.textContent, l = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, l) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return F(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var ln, on, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), fn = F({}, sn, { view: 0, detail: 0 }), dn = an(fn), pn = F({}, fn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (ln = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = ln = 0, un = e), ln); }, movementY: function (e) { return "movementY" in e ? e.movementY : on; } }), hn = an(pn), mn = an(F({}, pn, { dataTransfer: 0 })), vn = an(F({}, fn, { relatedTarget: 0 })), gn = an(F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = F({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = an(yn), wn = an(F({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function En(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e]; } function Cn() { return En; } var _n = F({}, fn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Pn = an(_n), Rn = an(F({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Ln = an(F({}, fn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), Nn = an(F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Tn = F({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), zn = an(Tn), Dn = [9, 13, 27, 32], Mn = c && "CompositionEvent" in window, On = null; c && "documentMode" in document && (On = document.documentMode); var Un = c && "TextEvent" in window && !On, Fn = c && (!Mn || On && 8 < On && 11 >= On), jn = String.fromCharCode(32), In = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== Dn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Bn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var $n = !1, Hn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Vn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Hn[e.type] : "textarea" === t; } function Wn(e, t, n, r) { _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Qn = null, qn = null; function Kn(e) { jr(e, 0); } function Yn(e) { if (q(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Gn = !1; if (c) {
            var Jn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Jn = Zn;
            }
            else
                Jn = !1;
            Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null); } function nr(e) { if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Wn(t, qn, e, ke(e)), Te(Kn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn); } function lr(e, t) { if ("click" === e)
            return Yn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Yn(t); } var ir = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (ir(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function fr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function dr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function hr(e) { var t = dr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, l = Math.min(r.start, a);
                    r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                    var o = cr(n, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, xr = {}, Er = {}; function Cr(e) { if (xr[e])
            return xr[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in Er)
                return xr[e] = n[t]; return e; } c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var _r = Cr("animationend"), Pr = Cr("animationiteration"), Rr = Cr("animationstart"), Lr = Cr("transitionend"), Nr = new Map, Tr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function zr(e, t) { Nr.set(e, t), u(t, [e]); } for (var Dr = 0; Dr < Tr.length; Dr++) {
            var Mr = Tr[Dr];
            zr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        } zr(_r, "onAnimationEnd"), zr(Pr, "onAnimationIteration"), zr(Rr, "onAnimationStart"), zr("dblclick", "onDoubleClick"), zr("focusin", "onFocus"), zr("focusout", "onBlur"), zr(Lr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ur = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or)); function Fr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, o, i, u, s) { if (Be.apply(this, arguments), Ue) {
            if (!Ue)
                throw Error(l(198));
            var c = Fe;
            Ue = !1, Fe = null, je || (je = !0, Ie = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function jr(e, t) { t = 0 != (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
            }
        } if (je)
            throw e = Ie, je = !1, Ie = null, e; } function Ir(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || (Hr(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), Hr(n, e, r, t); } var Br = "_reactListening" + Math.random().toString(36).slice(2); function $r(e) { if (!e[Br]) {
            e[Br] = !0, o.forEach((function (t) { "selectionchange" !== t && (Ur.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || (t[Br] = !0, Ar("selectionchange", !1, t));
        } } function Hr(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Wt;
                break;
            case 4:
                a = Qt;
                break;
            default: a = qt;
        } n = a.bind(null, t, n, e), a = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Vr(e, t, n, r, a) { var l = r; if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var u = o.tag;
                            if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== i;) {
                        if (null === (o = ya(i)))
                            return;
                        if (5 === (u = o.tag) || 6 === u) {
                            r = l = o;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } Te((function () { var r = l, a = ke(n), o = []; e: {
            var i = Nr.get(e);
            if (void 0 !== i) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = Pn;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Ln;
                        break;
                    case _r:
                    case Pr:
                    case Rr:
                        u = gn;
                        break;
                    case Lr:
                        u = Nn;
                        break;
                    case "scroll":
                        u = dn;
                        break;
                    case "wheel":
                        u = zn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Rn;
                }
                var c = 0 != (4 & t), f = !c && "scroll" === e, d = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== d && null != (m = ze(h, d)) && c.push(Wr(h, m, p))), f)
                        break;
                    h = h.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), o.push({ event: i, listeners: c }));
            }
        } if (0 == (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = $e(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Rn, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? i : wa(u), p = null == s ? i : wa(s), (i = new c(m, h + "leave", u, n, a)).target = f, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, m = c), f = m, u && s)
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = qr(p))
                            h++;
                        for (p = 0, m = d; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            d = qr(d), p--;
                        for (; h--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = qr(c), d = qr(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Kr(o, i, u, c, !1), null !== s && null !== f && Kr(o, f, s, c, !0);
            }
            if ("select" === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Xn;
            else if (Vn(i))
                if (Gn)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = lr);
            switch (v && (v = v(e, r)) ? Wn(o, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Vn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(o, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(o, n, a);
            }
            var y;
            if (Mn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                $n ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Fn && "ko" !== n.locale && ($n || "onCompositionStart" !== b ? "onCompositionEnd" === b && $n && (y = en()) : (Jt = "value" in (Gt = a) ? Gt.value : Gt.textContent, $n = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({ event: b, listeners: g }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = Un ? function (e, t) { switch (e) {
                case "compositionend": return Bn(t);
                case "keypress": return 32 !== t.which ? null : (In = !0, jn);
                case "textInput": return (e = t.data) === jn && In ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if ($n)
                return "compositionend" === e || !Mn && An(e, t) ? (e = en(), Zt = Jt = Gt = null, $n = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Fn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({ event: a, listeners: r }), a.data = y);
        } jr(o, t); })); } function Wr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Qr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, l = a.stateNode;
            5 === a.tag && null !== l && (a = l, null != (l = ze(e, n)) && r.unshift(Wr(e, l, a)), null != (l = ze(e, t)) && r.push(Wr(e, l, a))), e = e.return;
        } return r; } function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Kr(e, t, n, r, a) { for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = ze(n, l)) && o.unshift(Wr(n, u, i)) : a || null != (u = ze(n, l)) && o.push(Wr(n, u, i))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Gr(e) { return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, ""); } function Jr(e, t, n) { if (t = Gr(t), Gr(e) !== t && n)
            throw Error(l(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, la = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== la ? function (e) { return la.resolve(null).then(e).catch(ia); } : ra; function ia(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void $t(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); $t(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var fa = Math.random().toString(36).slice(2), da = "__reactFiber$" + fa, pa = "__reactProps$" + fa, ha = "__reactContainer$" + fa, ma = "__reactEvents$" + fa, va = "__reactListeners$" + fa, ga = "__reactHandles$" + fa; function ya(e) { var t = e[da]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ha] || n[da]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[da])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ba(e) { return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(l(33)); } function ka(e) { return e[pa] || null; } var Sa = [], xa = -1; function Ea(e) { return { current: e }; } function Ca(e) { 0 > xa || (e.current = Sa[xa], Sa[xa] = null, xa--); } function _a(e, t) { xa++, Sa[xa] = e.current, e.current = t; } var Pa = {}, Ra = Ea(Pa), La = Ea(!1), Na = Pa; function Ta(e, t) { var n = e.type.contextTypes; if (!n)
            return Pa; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, l = {}; for (a in n)
            l[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l; } function za(e) { return null != e.childContextTypes; } function Da() { Ca(La), Ca(Ra); } function Ma(e, t, n) { if (Ra.current !== Pa)
            throw Error(l(168)); _a(Ra, t), _a(La, n); } function Oa(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(l(108, H(e) || "Unknown", a)); return F({}, n, r); } function Ua(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Na = Ra.current, _a(Ra, e), _a(La, La.current), !0; } function Fa(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(l(169)); n ? (e = Oa(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, Ca(La), Ca(Ra), _a(Ra, e)) : Ca(La), _a(La, n); } var ja = null, Ia = !1, Aa = !1; function Ba(e) { null === ja ? ja = [e] : ja.push(e); } function $a() { if (!Aa && null !== ja) {
            Aa = !0;
            var e = 0, t = bt;
            try {
                var n = ja;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                ja = null, Ia = !1;
            }
            catch (t) {
                throw null !== ja && (ja = ja.slice(e + 1)), qe(Ze, $a), t;
            }
            finally {
                bt = t, Aa = !1;
            }
        } return null; } var Ha = [], Va = 0, Wa = null, Qa = 0, qa = [], Ka = 0, Ya = null, Xa = 1, Ga = ""; function Ja(e, t) { Ha[Va++] = Qa, Ha[Va++] = Wa, Wa = e, Qa = t; } function Za(e, t, n) { qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Ya = e; var r = Xa; e = Ga; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var l = 32 - ot(t) + a; if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Xa = 1 << 32 - ot(t) + a | n << a | r, Ga = l + e;
        }
        else
            Xa = 1 << l | n << a | r, Ga = e; } function el(e) { null !== e.return && (Ja(e, 1), Za(e, 1, 0)); } function tl(e) { for (; e === Wa;)
            Wa = Ha[--Va], Ha[Va] = null, Qa = Ha[--Va], Ha[Va] = null; for (; e === Ya;)
            Ya = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null; } var nl = null, rl = null, al = !1, ll = null; function ol(e, t) { var n = zs(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function il(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? { id: Xa, overflow: Ga } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
            default: return !1;
        } } function ul(e) { return 0 != (1 & e.mode) && 0 == (128 & e.flags); } function sl(e) { if (al) {
            var t = rl;
            if (t) {
                var n = t;
                if (!il(e, t)) {
                    if (ul(e))
                        throw Error(l(418));
                    t = sa(n.nextSibling);
                    var r = nl;
                    t && il(e, t) ? ol(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e);
                }
            }
            else {
                if (ul(e))
                    throw Error(l(418));
                e.flags = -4097 & e.flags | 2, al = !1, nl = e;
            }
        } } function cl(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; nl = e; } function fl(e) { if (e !== nl)
            return !1; if (!al)
            return cl(e), al = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
            if (ul(e))
                throw dl(), Error(l(418));
            for (; t;)
                ol(e, t), t = sa(t.nextSibling);
        } if (cl(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(l(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                rl = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                rl = null;
            }
        }
        else
            rl = nl ? sa(e.stateNode.nextSibling) : null; return !0; } function dl() { for (var e = rl; e;)
            e = sa(e.nextSibling); } function pl() { rl = nl = null, al = !1; } function hl(e) { null === ll ? ll = [e] : ll.push(e); } var ml = w.ReactCurrentBatchConfig; function vl(e, t) { if (e && e.defaultProps) {
            for (var n in t = F({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var gl = Ea(null), yl = null, bl = null, wl = null; function kl() { wl = bl = yl = null; } function Sl(e) { var t = gl.current; Ca(gl), e._currentValue = t; } function xl(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function El(e, t) { yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wi = !0), e.firstContext = null); } function Cl(e) { var t = e._currentValue; if (wl !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === bl) {
                if (null === yl)
                    throw Error(l(308));
                bl = e, yl.dependencies = { lanes: 0, firstContext: e };
            }
            else
                bl = bl.next = e; return t; } var _l = null; function Pl(e) { null === _l ? _l = [e] : _l.push(e); } function Rl(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Pl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ll(e, r); } function Ll(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Nl = !1; function Tl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function zl(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function Dl(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Ml(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 != (2 & Lu)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ll(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Pl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ll(e, n); } function Ol(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } function Ul(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === l ? a = l = o : l = l.next = o, n = n.next;
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t;
            }
            else
                a = l = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function Fl(e, t, n, r) { var a = e.updateQueue; Nl = !1; var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === o ? l = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l;;) {
                var d = i.lane, p = i.eventTime;
                if ((r & d) === d) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var h = e, m = i;
                        switch (d = t, p = n, m.tag) {
                            case 1:
                                if ("function" == typeof (h = m.payload)) {
                                    f = h.call(p, f, d);
                                    break e;
                                }
                                f = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null == (d = "function" == typeof (h = m.payload) ? h.call(p, f, d) : h))
                                    break e;
                                f = F({}, f, d);
                                break e;
                            case 2: Nl = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [i] : d.push(i));
                }
                else
                    p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = f) : c = c.next = p, o |= d;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (d = i).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
                }
            }
            if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === l && (a.shared.lanes = 0);
            Fu |= o, e.lanes = o, e.memoizedState = f;
        } } function jl(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(l(191, a));
                    a.call(r);
                }
            } } var Il = (new r.Component).refs; function Al(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var Bl = { isMounted: function (e) { return !!(e = e._reactInternals) && $e(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Dl(r, a); l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Dl(r, a); l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = Dl(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Ml(e, a, r)) && (rs(t, e, r, n), Ol(t, e, r)); } }; function $l(e, t, n, r, a, l, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, l)); } function Hl(e, t, n) { var r = !1, a = Pa, l = t.contextType; return "object" == typeof l && null !== l ? l = Cl(l) : (a = za(t) ? Na : Ra.current, l = (r = null != (r = t.contextTypes)) ? Ta(e, a) : Pa), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t; } function Vl(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null); } function Wl(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = Il, Tl(e); var l = t.contextType; "object" == typeof l && null !== l ? a.context = Cl(l) : (l = za(t) ? Na : Ra.current, a.context = Ta(e, l)), a.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (Al(e, t, l, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bl.enqueueReplaceState(a, a.state, null), Fl(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function Ql(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(l(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(l(147, e));
                var a = r, o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) { var t = a.refs; t === Il && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e; }, t._stringRef = o, t);
            }
            if ("string" != typeof e)
                throw Error(l(284));
            if (!n._owner)
                throw Error(l(290, e));
        } return e; } function ql(e, t) { throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Kl(e) { return (0, e._init)(e._payload); } function Yl(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Ms(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = js(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var l = n.type; return l === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === z && Kl(l) === t.type) ? ((r = a(t, n.props)).ref = Ql(e, t, n), r.return = e, r) : ((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function f(e, t, n, r, l) { return null === t || 7 !== t.tag ? ((t = Us(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t); } function d(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = js("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(e, null, t), n.return = e, n;
                case S: return (t = Is(t, e.mode, n)).return = e, t;
                case z: return d(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || O(t))
                return (t = Us(t, e.mode, n, null)).return = e, t;
            ql(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case z: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || O(n))
                return null !== a ? null : f(e, t, n, r, null);
            ql(e, n);
        } return null; } function h(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case z: return h(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || O(r))
                return f(t, e = e.get(n) || null, r, a, null);
            ql(t, r);
        } return null; } function m(a, l, i, u) { for (var s = null, c = null, f = l, m = l = 0, v = null; null !== f && m < i.length; m++) {
            f.index > m ? (v = f, f = null) : v = f.sibling;
            var g = p(a, f, i[m], u);
            if (null === g) {
                null === f && (f = v);
                break;
            }
            e && f && null === g.alternate && t(a, f), l = o(g, l, m), null === c ? s = g : c.sibling = g, c = g, f = v;
        } if (m === i.length)
            return n(a, f), al && Ja(a, m), s; if (null === f) {
            for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) && (l = o(f, l, m), null === c ? s = f : c.sibling = f, c = f);
            return al && Ja(a, m), s;
        } for (f = r(a, f); m < i.length; m++)
            null !== (v = h(f, a, m, i[m], u)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), l = o(v, l, m), null === c ? s = v : c.sibling = v, c = v); return e && f.forEach((function (e) { return t(a, e); })), al && Ja(a, m), s; } function v(a, i, u, s) { var c = O(u); if ("function" != typeof c)
            throw Error(l(150)); if (null == (u = c.call(u)))
            throw Error(l(151)); for (var f = c = null, m = i, v = i = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, s);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(a, m), i = o(b, i, v), null === f ? c = b : f.sibling = b, f = b, m = g;
        } if (y.done)
            return n(a, m), al && Ja(a, v), c; if (null === m) {
            for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) && (i = o(y, i, v), null === f ? c = y : f.sibling = y, f = y);
            return al && Ja(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = u.next())
            null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = o(y, i, v), null === f ? c = y : f.sibling = y, f = y); return e && m.forEach((function (e) { return t(a, e); })), al && Ja(a, v), c; } return function e(r, l, o, u) { if ("object" == typeof o && null !== o && o.type === x && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
                case k:
                    e: {
                        for (var s = o.key, c = l; null !== c;) {
                            if (c.key === s) {
                                if ((s = o.type) === x) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (l = a(c, o.props.children)).return = r, r = l;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === z && Kl(s) === c.type) {
                                    n(r, c.sibling), (l = a(c, o.props)).ref = Ql(r, c, o), l.return = r, r = l;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        o.type === x ? ((l = Us(o.props.children, r.mode, u, o.key)).return = r, r = l) : ((u = Os(o.type, o.key, o.props, null, r.mode, u)).ref = Ql(r, l, o), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = o.key; null !== l;) {
                            if (l.key === c) {
                                if (4 === l.tag && l.stateNode.containerInfo === o.containerInfo && l.stateNode.implementation === o.implementation) {
                                    n(r, l.sibling), (l = a(l, o.children || [])).return = r, r = l;
                                    break e;
                                }
                                n(r, l);
                                break;
                            }
                            t(r, l), l = l.sibling;
                        }
                        (l = Is(o, r.mode, u)).return = r, r = l;
                    }
                    return i(r);
                case z: return e(r, l, (c = o._init)(o._payload), u);
            }
            if (te(o))
                return m(r, l, o, u);
            if (O(o))
                return v(r, l, o, u);
            ql(r, o);
        } return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, o)).return = r, r = l) : (n(r, l), (l = js(o, r.mode, u)).return = r, r = l), i(r)) : n(r, l); }; } var Xl = Yl(!0), Gl = Yl(!1), Jl = {}, Zl = Ea(Jl), eo = Ea(Jl), to = Ea(Jl); function no(e) { if (e === Jl)
            throw Error(l(174)); return e; } function ro(e, t) { switch (_a(to, t), _a(eo, e), _a(Zl, Jl), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ca(Zl), _a(Zl, t); } function ao() { Ca(Zl), Ca(eo), Ca(to); } function lo(e) { no(to.current); var t = no(Zl.current), n = ue(t, e.type); t !== n && (_a(eo, e), _a(Zl, n)); } function oo(e) { eo.current === e && (Ca(Zl), Ca(eo)); } var io = Ea(0); function uo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var so = []; function co() { for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null; so.length = 0; } var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null, yo = !1, bo = !1, wo = 0, ko = 0; function So() { throw Error(l(321)); } function xo(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n]))
                return !1; return !0; } function Eo(e, t, n, r, a, o) { if (ho = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bo) {
            o = 0;
            do {
                if (bo = !1, wo = 0, 25 <= o)
                    throw Error(l(301));
                o += 1, go = vo = null, t.updateQueue = null, fo.current = si, e = n(r, a);
            } while (bo);
        } if (fo.current = oi, t = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, t)
            throw Error(l(300)); return e; } function Co() { var e = 0 !== wo; return wo = 0, e; } function _o() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? mo.memoizedState = go = e : go = go.next = e, go; } function Po() { if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var t = null === go ? mo.memoizedState : go.next; if (null !== t)
            go = t, vo = e;
        else {
            if (null === e)
                throw Error(l(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? mo.memoizedState = go = e : go = go.next = e;
        } return go; } function Ro(e, t) { return "function" == typeof t ? t(e) : t; } function Lo(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== a) {
                var i = a.next;
                a.next = o.next, o.next = i;
            }
            r.baseQueue = a = o, n.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var u = i = null, s = null, c = o;
            do {
                var f = c.lane;
                if ((ho & f) === f)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = d, i = r) : s = s.next = d, mo.lanes |= f, Fu |= f;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                o = a.lane, mo.lanes |= o, Fu |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function No(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, o = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                o = e(o, i.action), i = i.next;
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; } function To() { } function zo(e, t) { var n = mo, r = Po(), a = t(), o = !ir(r.memoizedState, a); if (o && (r.memoizedState = a, wi = !0), r = r.queue, Vo(Oo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
            if (n.flags |= 2048, Io(9, Mo.bind(null, n, r, a, t), void 0, null), null === Nu)
                throw Error(l(349));
            0 != (30 & ho) || Do(n, t, a);
        } return a; } function Do(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Mo(e, t, n, r) { t.value = n, t.getSnapshot = r, Uo(t) && Fo(e); } function Oo(e, t, n) { return n((function () { Uo(t) && Fo(e); })); } function Uo(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !ir(e, n);
        }
        catch (e) {
            return !0;
        } } function Fo(e) { var t = Ll(e, 1); null !== t && rs(t, e, 1, -1); } function jo(e) { var t = _o(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ro, lastRenderedState: e }, t.queue = e, e = e.dispatch = ni.bind(null, mo, e), [t.memoizedState, e]; } function Io(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Ao() { return Po().memoizedState; } function Bo(e, t, n, r) { var a = _o(); mo.flags |= e, a.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r); } function $o(e, t, n, r) { var a = Po(); r = void 0 === r ? null : r; var l = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (l = o.destroy, null !== r && xo(r, o.deps))
                return void (a.memoizedState = Io(t, n, l, r));
        } mo.flags |= e, a.memoizedState = Io(1 | t, n, l, r); } function Ho(e, t) { return Bo(8390656, 8, e, t); } function Vo(e, t) { return $o(2048, 8, e, t); } function Wo(e, t) { return $o(4, 2, e, t); } function Qo(e, t) { return $o(4, 4, e, t); } function qo(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Ko(e, t, n) { return n = null != n ? n.concat([e]) : null, $o(4, 4, qo.bind(null, t, e), n); } function Yo() { } function Xo(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Go(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Jo(e, t, n) { return 0 == (21 & ho) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), mo.lanes |= n, Fu |= n, e.baseState = !0), t); } function Zo(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, po.transition = r;
        } } function ei() { return Po().memoizedState; } function ti(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ri(e) ? ai(t, n) : null !== (n = Rl(e, t, n, r)) && (rs(n, e, r, ts()), li(n, t, r)); } function ni(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (ri(e))
            ai(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, i = l(o, n);
                    if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Pl(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Rl(e, t, a, r)) && (rs(n, e, r, a = ts()), li(n, t, r));
        } } function ri(e) { var t = e.alternate; return e === mo || null !== t && t === mo; } function ai(e, t) { bo = yo = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function li(e, t, n) { if (0 != (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } var oi = { readContext: Cl, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ii = { readContext: Cl, useCallback: function (e, t) { return _o().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: Cl, useEffect: Ho, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Bo(4194308, 4, qo.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Bo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Bo(4, 2, e, t); }, useMemo: function (e, t) { var n = _o(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _o(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ti.bind(null, mo, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _o().memoizedState = e; }, useState: jo, useDebugValue: Yo, useDeferredValue: function (e) { return _o().memoizedState = e; }, useTransition: function () { var e = jo(!1), t = e[0]; return e = Zo.bind(null, e[1]), _o().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = mo, a = _o(); if (al) {
                if (void 0 === n)
                    throw Error(l(407));
                n = n();
            }
            else {
                if (n = t(), null === Nu)
                    throw Error(l(349));
                0 != (30 & ho) || Do(r, t, n);
            } a.memoizedState = n; var o = { value: n, getSnapshot: t }; return a.queue = o, Ho(Oo.bind(null, r, o, e), [e]), r.flags |= 2048, Io(9, Mo.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = _o(), t = Nu.identifierPrefix; if (al) {
                var n = Ga;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - ot(Xa) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = ko++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ui = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Go, useReducer: Lo, useRef: Ao, useState: function () { return Lo(Ro); }, useDebugValue: Yo, useDeferredValue: function (e) { return Jo(Po(), vo.memoizedState, e); }, useTransition: function () { return [Lo(Ro)[0], Po().memoizedState]; }, useMutableSource: To, useSyncExternalStore: zo, useId: ei, unstable_isNewReconciler: !1 }, si = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Go, useReducer: No, useRef: Ao, useState: function () { return No(Ro); }, useDebugValue: Yo, useDeferredValue: function (e) { var t = Po(); return null === vo ? t.memoizedState = e : Jo(t, vo.memoizedState, e); }, useTransition: function () { return [No(Ro)[0], Po().memoizedState]; }, useMutableSource: To, useSyncExternalStore: zo, useId: ei, unstable_isNewReconciler: !1 }; function ci(e, t) { try {
            var n = "", r = t;
            do {
                n += B(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function fi(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function di(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pi = "function" == typeof WeakMap ? WeakMap : Map; function hi(e, t, n) { (n = Dl(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Wu || (Wu = !0, Qu = r), di(0, t); }, n; } function mi(e, t, n) { (n = Dl(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { di(0, t); };
        } var l = e.stateNode; return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () { di(0, t), "function" != typeof r && (null === qu ? qu = new Set([this]) : qu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e)); } function gi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function yi(e, t, n, r, a) { return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Dl(-1, 1)).tag = 2, Ml(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); } var bi = w.ReactCurrentOwner, wi = !1; function ki(e, t, n, r) { t.child = null === e ? Gl(t, null, n, r) : Xl(t, e.child, n, r); } function Si(e, t, n, r, a) { n = n.render; var l = t.ref; return El(t, a), r = Eo(e, t, n, r, l, a), n = Co(), null === e || wi ? (al && n && el(t), t.flags |= 1, ki(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function xi(e, t, n, r, a) { if (null === e) {
            var l = n.type;
            return "function" != typeof l || Ds(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Ei(e, t, l, r, a));
        } if (l = e.child, 0 == (e.lanes & a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                return Wi(e, t, a);
        } return t.flags |= 1, (e = Ms(l, r)).ref = t.ref, e.return = t, t.child = e; } function Ei(e, t, n, r, a) { if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
                if (wi = !1, t.pendingProps = r = l, 0 == (e.lanes & a))
                    return t.lanes = e.lanes, Wi(e, t, a);
                0 != (131072 & e.flags) && (wi = !0);
            }
        } return Pi(e, t, n, r, a); } function Ci(e, t, n) { var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _a(Mu, Du), Du |= n;
            else {
                if (0 == (1073741824 & n))
                    return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _a(Mu, Du), Du |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== l ? l.baseLanes : n, _a(Mu, Du), Du |= r;
            }
        else
            null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, _a(Mu, Du), Du |= r; return ki(e, t, a, n), t.child; } function _i(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Pi(e, t, n, r, a) { var l = za(n) ? Na : Ra.current; return l = Ta(t, l), El(t, a), n = Eo(e, t, n, r, l, a), r = Co(), null === e || wi ? (al && r && el(t), t.flags |= 1, ki(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function Ri(e, t, n, r, a) { if (za(n)) {
            var l = !0;
            Ua(t);
        }
        else
            l = !1; if (El(t, a), null === t.stateNode)
            Vi(e, t), Hl(t, n, r), Wl(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode, i = t.memoizedProps;
            o.props = i;
            var u = o.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? Cl(s) : Ta(t, s = za(n) ? Na : Ra.current);
            var c = n.getDerivedStateFromProps, f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && Vl(t, o, r, s), Nl = !1;
            var d = t.memoizedState;
            o.state = d, Fl(t, r, o, a), u = t.memoizedState, i !== r || d !== u || La.current || Nl ? ("function" == typeof c && (Al(t, n, c, r), u = t.memoizedState), (i = Nl || $l(t, n, i, r, d, u, s)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            o = t.stateNode, zl(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : vl(t.type, i), o.props = s, f = t.pendingProps, d = o.context, u = "object" == typeof (u = n.contextType) && null !== u ? Cl(u) : Ta(t, u = za(n) ? Na : Ra.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== f || d !== u) && Vl(t, o, r, u), Nl = !1, d = t.memoizedState, o.state = d, Fl(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || La.current || Nl ? ("function" == typeof p && (Al(t, n, p, r), h = t.memoizedState), (s = Nl || $l(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Li(e, t, n, r, l, a); } function Li(e, t, n, r, a, l) { _i(e, t); var o = 0 != (128 & t.flags); if (!r && !o)
            return a && Fa(t, n, !1), Wi(e, t, l); r = t.stateNode, bi.current = t; var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && o ? (t.child = Xl(t, e.child, null, l), t.child = Xl(t, null, i, l)) : ki(e, t, i, l), t.memoizedState = r.state, a && Fa(t, n, !0), t.child; } function Ni(e) { var t = e.stateNode; t.pendingContext ? Ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(0, t.context, !1), ro(e, t.containerInfo); } function Ti(e, t, n, r, a) { return pl(), hl(a), t.flags |= 256, ki(e, t, n, r), t.child; } var zi, Di, Mi, Oi, Ui = { dehydrated: null, treeContext: null, retryLane: 0 }; function Fi(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function ji(e, t, n) { var r, a = t.pendingProps, o = io.current, i = !1, u = 0 != (128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), _a(io, 1 & o), null === e)
            return sl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 0 == (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Fs(u, a, 0, null), e = Us(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fi(n), t.memoizedState = Ui, e) : Ii(t, u)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, t, n, r, a, o, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Ai(e, t, i, r = fi(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Fs({ mode: "visible", children: r.children }, a, 0, null), (o = Us(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 != (1 & t.mode) && Xl(t, e.child, null, i), t.child.memoizedState = Fi(i), t.memoizedState = Ui, o); if (0 == (1 & t.mode))
                return Ai(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Ai(e, t, i, r = fi(o = Error(l(419)), r, void 0));
            } if (u = 0 != (i & e.childLanes), wi || u) {
                if (null !== (r = Nu)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Ll(e, a), rs(r, e, a, -1));
                }
                return vs(), Ai(e, t, i, r = fi(Error(l(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Rs.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rl = sa(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = t), (t = Ii(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, o, n); if (i) {
            i = a.fallback, u = t.mode, r = (o = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 0 == (1 & u) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Ms(o, s)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Ms(r, i) : (i = Us(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Fi(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Ui, a;
        } return e = (i = e.child).sibling, a = Ms(i, { mode: "visible", children: a.children }), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Ii(e, t) { return (t = Fs({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Ai(e, t, n, r) { return null !== r && hl(r), Xl(t, e.child, null, n), (e = Ii(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Bi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), xl(e.return, t, n); } function $i(e, t, n, r, a) { var l = e.memoizedState; null === l ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a); } function Hi(e, t, n) { var r = t.pendingProps, a = r.revealOrder, l = r.tail; if (ki(e, t, r.children, n), 0 != (2 & (r = io.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bi(e, n, t);
                    else if (19 === e.tag)
                        Bi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (_a(io, r), 0 == (1 & t.mode))
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === uo(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $i(t, !1, a, n, l);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === uo(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    $i(t, !0, n, null, l);
                    break;
                case "together":
                    $i(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; } function Vi(e, t) { 0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Wi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, 0 == (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(l(153)); if (null !== t.child) {
            for (n = Ms(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Ms(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Qi(e, t) { if (!al)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function qi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Ki(e, t, n) { var r = t.pendingProps; switch (tl(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return qi(t), null;
            case 1:
            case 17: return za(t.type) && Da(), qi(t), null;
            case 3: return r = t.stateNode, ao(), Ca(La), Ca(Ra), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ll && (is(ll), ll = null))), Di(e, t), qi(t), null;
            case 5:
                oo(t);
                var a = no(to.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Mi(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(l(166));
                        return qi(t), null;
                    }
                    if (e = no(Zl.current), fl(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[da] = t, r[pa] = o, e = 0 != (1 & t.mode), n) {
                            case "dialog":
                                Ir("cancel", r), Ir("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ir("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Or.length; a++)
                                    Ir(Or[a], r);
                                break;
                            case "source":
                                Ir("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ir("error", r), Ir("load", r);
                                break;
                            case "details":
                                Ir("toggle", r);
                                break;
                            case "input":
                                X(r, o), Ir("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, Ir("invalid", r);
                                break;
                            case "textarea": ae(r, o), Ir("invalid", r);
                        }
                        for (var u in ye(n, o), a = null, o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ir("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Q(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                Q(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, zi(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = be(n, r), n) {
                                case "dialog":
                                    Ir("cancel", e), Ir("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ir("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Or.length; a++)
                                        Ir(Or[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ir("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ir("error", e), Ir("load", e), a = r;
                                    break;
                                case "details":
                                    Ir("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), Ir("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = F({}, r, { value: void 0 }), Ir("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Ir("invalid", e);
                            }
                            for (o in ye(n, a), s = a)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && Ir("scroll", e) : null != c && b(e, o, c, u));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return qi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Oi(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(l(166));
                    if (n = no(to.current), no(Zl.current), fl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (o = r.nodeValue !== n) && null !== (e = nl))
                            switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 != (1 & e.mode));
                            }
                        o && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r;
                }
                return qi(t), null;
            case 13:
                if (Ca(io), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (al && null !== rl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                        dl(), pl(), t.flags |= 98560, o = !1;
                    else if (o = fl(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(l(318));
                            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                                throw Error(l(317));
                            o[da] = t;
                        }
                        else
                            pl(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qi(t), o = !1;
                    }
                    else
                        null !== ll && (is(ll), ll = null), o = !0;
                    if (!o)
                        return 65536 & t.flags ? t : null;
                }
                return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & io.current) ? 0 === Ou && (Ou = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);
            case 4: return ao(), Di(e, t), null === e && $r(t.stateNode.containerInfo), qi(t), null;
            case 10: return Sl(t.type._context), qi(t), null;
            case 19:
                if (Ca(io), null === (o = t.memoizedState))
                    return qi(t), null;
                if (r = 0 != (128 & t.flags), null === (u = o.rendering))
                    if (r)
                        Qi(o, !1);
                    else {
                        if (0 !== Ou || null !== e && 0 != (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (u = uo(e))) {
                                    for (t.flags |= 128, Qi(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return _a(io, 1 & io.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Ge() > Hu && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = uo(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !al)
                                return qi(t), null;
                        }
                        else
                            2 * Ge() - o.renderingStartTime > Hu && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u);
                }
                return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ge(), t.sibling = null, n = io.current, _a(io, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);
            case 22:
            case 23: return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Du) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;
            case 24:
            case 25: return null;
        } throw Error(l(156, t.tag)); } function Yi(e, t) { switch (tl(t), t.tag) {
            case 1: return za(t.type) && Da(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ao(), Ca(La), Ca(Ra), co(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return oo(t), null;
            case 13:
                if (Ca(io), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(l(340));
                    pl();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ca(io), null;
            case 4: return ao(), null;
            case 10: return Sl(t.type._context), null;
            case 22:
            case 23: return ds(), null;
            default: return null;
        } } zi = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Di = function () { }, Mi = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, no(Zl.current);
            var l, o = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), o = [];
                    break;
                case "select":
                    a = F({}, a, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (l in u)
                            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (l in u)
                                !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in s)
                                s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
                        }
                        else
                            n || (o || (o = []), o.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ir("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
            }
            n && (o = o || []).push("style", n);
            var c = o;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Oi = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xi = !1, Gi = !1, Ji = "function" == typeof WeakSet ? WeakSet : Set, Zi = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    Cs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            Cs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var l = a.destroy;
                    a.destroy = void 0, void 0 !== l && tu(t, n, l);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function lu(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function ou(e) { var t = e.alternate; null !== t && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function iu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || iu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var fu = null, du = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            hu(e, t, n), n = n.sibling; } function hu(e, t, n) { if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
                lt.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Gi || eu(n, t);
            case 6:
                var r = fu, a = du;
                fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
                break;
            case 18:
                null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), $t(e)) : ua(fu, n.stateNode));
                break;
            case 4:
                r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Gi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var l = a, o = l.destroy;
                        l = l.tag, void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && tu(n, t, o), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Gi && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        Cs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Gi = (r = Gi) || null !== n.memoizedState, pu(e, t, n), Gi = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function mu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ji), t.forEach((function (t) { var r = Ls.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var o = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                fu = u.stateNode, du = !1;
                                break e;
                            case 3:
                            case 4:
                                fu = u.stateNode.containerInfo, du = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === fu)
                        throw Error(l(160));
                    hu(o, i, a), fu = null, du = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    Cs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), yu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        de(a, "");
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, i = null !== n ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === o.type && null != o.name && G(a, o), be(u, i);
                            var c = be(u, o);
                            for (i = 0; i < s.length; i += 2) {
                                var f = s[i], d = s[i + 1];
                                "style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c);
                            }
                            switch (u) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    le(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? ne(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (t) {
                            Cs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), yu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(l(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        $t(t.containerInfo);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), yu(e);
                break;
            case 13:
                vu(t, e), yu(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || ($u = Ge())), 4 & r && mu(e);
                break;
            case 22:
                if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gi = (c = Gi) || f, vu(t, e), Gi = c) : vu(t, e), yu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
                        for (Zi = e, f = e.child; null !== f;) {
                            for (d = Zi = f; null !== Zi;) {
                                switch (h = (p = Zi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (e) {
                                                Cs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(d);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Zi = h) : Su(d);
                            }
                            f = f.sibling;
                        }
                    e: for (f = null, d = e;;) {
                        if (5 === d.tag) {
                            if (null === f) {
                                f = d;
                                try {
                                    a = d.stateNode, c ? "function" == typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === d.tag) {
                            if (null === f)
                                try {
                                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                        }
                        else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e)
                            break e;
                        for (; null === d.sibling;) {
                            if (null === d.return || d.return === e)
                                break e;
                            f === d && (f = null), d = d.return;
                        }
                        f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19: vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
        } } function yu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(l(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        su(e, uu(e), o);
                        break;
                    default: throw Error(l(161));
                }
            }
            catch (t) {
                Cs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function bu(e, t, n) { Zi = e, wu(e, t, n); } function wu(e, t, n) { for (var r = 0 != (1 & e.mode); null !== Zi;) {
            var a = Zi, l = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Xi;
                if (!o) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Gi;
                    i = Xi;
                    var s = Gi;
                    if (Xi = o, (Gi = u) && !s)
                        for (Zi = a; null !== Zi;)
                            u = (o = Zi).child, 22 === o.tag && null !== o.memoizedState ? xu(a) : null !== u ? (u.return = o, Zi = u) : xu(a);
                    for (; null !== l;)
                        Zi = l, wu(l, t, n), l = l.sibling;
                    Zi = a, Xi = i, Gi = s;
                }
                ku(e);
            }
            else
                0 != (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Zi = l) : ku(e);
        } } function ku(e) { for (; null !== Zi;) {
            var t = Zi;
            if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 != (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gi || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Gi)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = t.updateQueue;
                                null !== o && jl(t, o, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    jl(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var f = c.memoizedState;
                                        if (null !== f) {
                                            var d = f.dehydrated;
                                            null !== d && $t(d);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(l(163));
                        }
                    Gi || 512 & t.flags && lu(t);
                }
                catch (e) {
                    Cs(t, t.return, e);
                }
            }
            if (t === e) {
                Zi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Su(e) { for (; null !== Zi;) {
            var t = Zi;
            if (t === e) {
                Zi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function xu(e) { for (; null !== Zi;) {
            var t = Zi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            Cs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                Cs(t, a, e);
                            }
                        }
                        var l = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, l, e);
                        }
                        break;
                    case 5:
                        var o = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, o, e);
                        }
                }
            }
            catch (e) {
                Cs(t, t.return, e);
            }
            if (t === e) {
                Zi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Zi = i;
                break;
            }
            Zi = t.return;
        } } var Eu, Cu = Math.ceil, _u = w.ReactCurrentDispatcher, Pu = w.ReactCurrentOwner, Ru = w.ReactCurrentBatchConfig, Lu = 0, Nu = null, Tu = null, zu = 0, Du = 0, Mu = Ea(0), Ou = 0, Uu = null, Fu = 0, ju = 0, Iu = 0, Au = null, Bu = null, $u = 0, Hu = 1 / 0, Vu = null, Wu = !1, Qu = null, qu = null, Ku = !1, Yu = null, Xu = 0, Gu = 0, Ju = null, Zu = -1, es = 0; function ts() { return 0 != (6 & Lu) ? Ge() : -1 !== Zu ? Zu : Zu = Ge(); } function ns(e) { return 0 == (1 & e.mode) ? 1 : 0 != (2 & Lu) && 0 !== zu ? zu & -zu : null !== ml.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type); } function rs(e, t, n, r) { if (50 < Gu)
            throw Gu = 0, Ju = null, Error(l(185)); gt(e, n, r), 0 != (2 & Lu) && e === Nu || (e === Nu && (0 == (2 & Lu) && (ju |= n), 4 === Ou && us(e, zu)), as(e, r), 1 === n && 0 === Lu && 0 == (1 & t.mode) && (Hu = Ge() + 500, Ia && $a())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
            var o = 31 - ot(l), i = 1 << o, u = a[o];
            -1 === u ? 0 != (i & n) && 0 == (i & r) || (a[o] = pt(i, t)) : u <= t && (e.expiredLanes |= i), l &= ~i;
        } }(e, t); var r = dt(e, e === Nu ? zu : 0); if (0 === r)
            null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ke(n), 1 === t)
                0 === e.tag ? function (e) { Ia = !0, Ba(e); }(ss.bind(null, e)) : Ba(ss.bind(null, e)), oa((function () { 0 == (6 & Lu) && $a(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Ns(n, ls.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function ls(e, t) { if (Zu = -1, es = 0, 0 != (6 & Lu))
            throw Error(l(327)); var n = e.callbackNode; if (xs() && e.callbackNode !== n)
            return null; var r = dt(e, e === Nu ? zu : 0); if (0 === r)
            return null; if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Lu;
            Lu |= 2;
            var o = ms();
            for (Nu === e && zu === t || (Vu = null, Hu = Ge() + 500, ps(e, t));;)
                try {
                    bs();
                    break;
                }
                catch (t) {
                    hs(e, t);
                }
            kl(), _u.current = o, Lu = a, null !== Tu ? t = 0 : (Nu = null, zu = 0, t = Ou);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = ht(e)) && (r = a, t = os(e, a)), 1 === t)
                throw n = Uu, ps(e, 0), us(e, r), as(e, Ge()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, 0 == (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], l = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!ir(l(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) && (2 === (t = gs(e, r)) && 0 !== (o = ht(e)) && (r = o, t = os(e, o)), 1 === t))
                    throw n = Uu, ps(e, 0), us(e, r), as(e, Ge()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(l(345));
                    case 2:
                    case 5:
                        Ss(e, Bu, Vu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = $u + 500 - Ge())) {
                            if (0 !== dt(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Vu), t);
                            break;
                        }
                        Ss(e, Bu, Vu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - ot(r);
                            o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Vu), r);
                            break;
                        }
                        Ss(e, Bu, Vu);
                        break;
                    default: throw Error(l(329));
                }
            }
        } return as(e, Ge()), e.callbackNode === n ? ls.bind(null, e) : null; } function os(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Bu, Bu = n, null !== t && is(t)), e; } function is(e) { null === Bu ? Bu = e : Bu.push.apply(Bu, e); } function us(e, t) { for (t &= ~Iu, t &= ~ju, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (0 != (6 & Lu))
            throw Error(l(327)); xs(); var t = dt(e, 0); if (0 == (1 & t))
            return as(e, Ge()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = os(e, r));
        } if (1 === n)
            throw n = Uu, ps(e, 0), us(e, t), as(e, Ge()), n; if (6 === n)
            throw Error(l(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Bu, Vu), as(e, Ge()), null; } function cs(e, t) { var n = Lu; Lu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Lu = n) && (Hu = Ge() + 500, Ia && $a());
        } } function fs(e) { null !== Yu && 0 === Yu.tag && 0 == (6 & Lu) && xs(); var t = Lu; Lu |= 1; var n = Ru.transition, r = bt; try {
            if (Ru.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Ru.transition = n, 0 == (6 & (Lu = t)) && $a();
        } } function ds() { Du = Mu.current, Ca(Mu); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Tu)
            for (n = Tu.return; null !== n;) {
                var r = n;
                switch (tl(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Da();
                        break;
                    case 3:
                        ao(), Ca(La), Ca(Ra), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        Ca(io);
                        break;
                    case 10:
                        Sl(r.type._context);
                        break;
                    case 22:
                    case 23: ds();
                }
                n = n.return;
            } if (Nu = e, Tu = e = Ms(e.current, null), zu = Du = t, Ou = 0, Uu = null, Iu = ju = Fu = 0, Bu = Au = null, null !== _l) {
            for (t = 0; t < _l.length; t++)
                if (null !== (r = (n = _l[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, l = n.pending;
                    if (null !== l) {
                        var o = l.next;
                        l.next = a, r.next = o;
                    }
                    n.pending = r;
                }
            _l = null;
        } return e; } function hs(e, t) { for (;;) {
            var n = Tu;
            try {
                if (kl(), fo.current = oi, yo) {
                    for (var r = mo.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yo = !1;
                }
                if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Pu.current = null, null === n || null === n.return) {
                    Ou = 1, Uu = t, Tu = null;
                    break;
                }
                e: {
                    var o = e, i = n.return, u = n, s = t;
                    if (t = zu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, f = u, d = f.tag;
                        if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                            var p = f.alternate;
                            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
                        }
                        var h = gi(i);
                        if (null !== h) {
                            h.flags &= -257, yi(h, i, u, 0, t), 1 & h.mode && vi(o, c, t), s = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                m.add(s);
                            break e;
                        }
                        if (0 == (1 & t)) {
                            vi(o, c, t), vs();
                            break e;
                        }
                        s = Error(l(426));
                    }
                    else if (al && 1 & u.mode) {
                        var g = gi(i);
                        if (null !== g) {
                            0 == (65536 & g.flags) && (g.flags |= 256), yi(g, i, u, 0, t), hl(ci(s, u));
                            break e;
                        }
                    }
                    o = s = ci(s, u), 4 !== Ou && (Ou = 2), null === Au ? Au = [o] : Au.push(o), o = i;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t, Ul(o, hi(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = o.type, b = o.stateNode;
                                if (0 == (128 & o.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t, Ul(o, mi(o, u, t));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                ks(n);
            }
            catch (e) {
                t = e, Tu === n && null !== n && (Tu = n = n.return);
                continue;
            }
            break;
        } } function ms() { var e = _u.current; return _u.current = oi, null === e ? oi : e; } function vs() { 0 !== Ou && 3 !== Ou && 2 !== Ou || (Ou = 4), null === Nu || 0 == (268435455 & Fu) && 0 == (268435455 & ju) || us(Nu, zu); } function gs(e, t) { var n = Lu; Lu |= 2; var r = ms(); for (Nu === e && zu === t || (Vu = null, ps(e, t));;)
            try {
                ys();
                break;
            }
            catch (t) {
                hs(e, t);
            } if (kl(), Lu = n, _u.current = r, null !== Tu)
            throw Error(l(261)); return Nu = null, zu = 0, Ou; } function ys() { for (; null !== Tu;)
            ws(Tu); } function bs() { for (; null !== Tu && !Ye();)
            ws(Tu); } function ws(e) { var t = Eu(e.alternate, e, Du); e.memoizedProps = e.pendingProps, null === t ? ks(e) : Tu = t, Pu.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 == (32768 & t.flags)) {
                if (null !== (n = Ki(n, t, Du)))
                    return void (Tu = n);
            }
            else {
                if (null !== (n = Yi(n, t)))
                    return n.flags &= 32767, void (Tu = n);
                if (null === e)
                    return Ou = 6, void (Tu = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (Tu = t);
            Tu = t = e;
        } while (null !== t); 0 === Ou && (Ou = 5); } function Ss(e, t, n) { var r = bt, a = Ru.transition; try {
            Ru.transition = null, bt = 1, function (e, t, n, r) { do {
                xs();
            } while (null !== Yu); if (0 != (6 & Lu))
                throw Error(l(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(l(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), l = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l;
            } }(e, o), e === Nu && (Tu = Nu = null, zu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Ku || (Ku = !0, Ns(tt, (function () { return xs(), null; }))), o = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || o) {
                o = Ru.transition, Ru.transition = null;
                var i = bt;
                bt = 1;
                var u = Lu;
                Lu |= 4, Pu.current = null, function (e, t) { if (ea = Vt, pr(e = dr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, o.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                t: for (;;) {
                                    for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== o || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (h = d.firstChild);)
                                        p = d, d = h;
                                    for (;;) {
                                        if (d === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === o && ++f === r && (s = i), null !== (h = d.nextSibling))
                                            break;
                                        p = (d = p).parentNode;
                                    }
                                    d = h;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Vt = !1, Zi = t; null !== Zi;)
                    if (e = (t = Zi).child, 0 != (1028 & t.subtreeFlags) && null !== e)
                        e.return = t, Zi = e;
                    else
                        for (; null !== Zi;) {
                            t = Zi;
                            try {
                                var m = t.alternate;
                                if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(l(163));
                                    }
                            }
                            catch (e) {
                                Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zi = e;
                                break;
                            }
                            Zi = t.return;
                        } m = nu, nu = !1; }(e, n), gu(n, e), hr(ta), Vt = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Lu = u, bt = i, Ru.transition = o;
            }
            else
                e.current = n; if (Ku && (Ku = !1, Yu = e, Xu = a), 0 === (o = e.pendingLanes) && (qu = null), function (e) { if (lt && "function" == typeof lt.onCommitFiberRoot)
                try {
                    lt.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Ge()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Wu)
                throw Wu = !1, e = Qu, Qu = null, e; 0 != (1 & Xu) && 0 !== e.tag && xs(), 0 != (1 & (o = e.pendingLanes)) ? e === Ju ? Gu++ : (Gu = 0, Ju = e) : Gu = 0, $a(); }(e, t, n, r);
        }
        finally {
            Ru.transition = a, bt = r;
        } return null; } function xs() { if (null !== Yu) {
            var e = wt(Xu), t = Ru.transition, n = bt;
            try {
                if (Ru.transition = null, bt = 16 > e ? 16 : e, null === Yu)
                    var r = !1;
                else {
                    if (e = Yu, Yu = null, Xu = 0, 0 != (6 & Lu))
                        throw Error(l(331));
                    var a = Lu;
                    for (Lu |= 4, Zi = e.current; null !== Zi;) {
                        var o = Zi, i = o.child;
                        if (0 != (16 & Zi.flags)) {
                            var u = o.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zi = c; null !== Zi;) {
                                        var f = Zi;
                                        switch (f.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, f, o);
                                        }
                                        var d = f.child;
                                        if (null !== d)
                                            d.return = f, Zi = d;
                                        else
                                            for (; null !== Zi;) {
                                                var p = (f = Zi).sibling, h = f.return;
                                                if (ou(f), f === c) {
                                                    Zi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Zi = p;
                                                    break;
                                                }
                                                Zi = h;
                                            }
                                    }
                                }
                                var m = o.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zi = o;
                            }
                        }
                        if (0 != (2064 & o.subtreeFlags) && null !== i)
                            i.return = o, Zi = i;
                        else
                            e: for (; null !== Zi;) {
                                if (0 != (2048 & (o = Zi).flags))
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, o, o.return);
                                    }
                                var y = o.sibling;
                                if (null !== y) {
                                    y.return = o.return, Zi = y;
                                    break e;
                                }
                                Zi = o.return;
                            }
                    }
                    var b = e.current;
                    for (Zi = b; null !== Zi;) {
                        var w = (i = Zi).child;
                        if (0 != (2064 & i.subtreeFlags) && null !== w)
                            w.return = i, Zi = w;
                        else
                            e: for (i = b; null !== Zi;) {
                                if (0 != (2048 & (u = Zi).flags))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        Cs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Zi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zi = k;
                                    break e;
                                }
                                Zi = u.return;
                            }
                    }
                    if (Lu = a, $a(), lt && "function" == typeof lt.onPostCommitFiberRoot)
                        try {
                            lt.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Ru.transition = t;
            }
        } return !1; } function Es(e, t, n) { e = Ml(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function Cs(e, t, n) { if (3 === e.tag)
            Es(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Es(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Ml(t, e = mi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function _s(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Nu === e && (zu & n) === n && (4 === Ou || 3 === Ou && (130023424 & zu) === zu && 500 > Ge() - $u ? ps(e, 0) : Iu |= n), as(e, t); } function Ps(e, t) { 0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = ts(); null !== (e = Ll(e, t)) && (gt(e, t, n), as(e, n)); } function Rs(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Ps(e, n); } function Ls(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(l(314));
        } null !== r && r.delete(t), Ps(e, n); } function Ns(e, t) { return qe(e, t); } function Ts(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function zs(e, t, n, r) { return new Ts(e, t, n, r); } function Ds(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Ms(e, t) { var n = e.alternate; return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Os(e, t, n, r, a, o) { var i = 2; if (r = e, "function" == typeof e)
            Ds(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case x: return Us(n.children, a, o, t);
                case E:
                    i = 8, a |= 8;
                    break;
                case C: return (e = zs(12, n, t, 2 | a)).elementType = C, e.lanes = o, e;
                case L: return (e = zs(13, n, t, a)).elementType = L, e.lanes = o, e;
                case N: return (e = zs(19, n, t, a)).elementType = N, e.lanes = o, e;
                case D: return Fs(n, a, o, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case R:
                                i = 11;
                                break e;
                            case T:
                                i = 14;
                                break e;
                            case z:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(l(130, null == e ? e : typeof e, ""));
            } return (t = zs(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t; } function Us(e, t, n, r) { return (e = zs(7, e, r, t)).lanes = n, e; } function Fs(e, t, n, r) { return (e = zs(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function js(e, t, n) { return (e = zs(6, e, null, t)).lanes = n, e; } function Is(e, t, n) { return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Bs(e, t, n, r, a, l, o, i, u) { return e = new As(e, t, n, i, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = zs(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tl(l), e; } function $s(e) { if (!e)
            return Pa; e: {
            if ($e(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(l(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (za(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(l(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (za(n))
                return Oa(e, n, t);
        } return t; } function Hs(e, t, n, r, a, l, o, i, u) { return (e = Bs(n, r, !0, e, 0, l, 0, i, u)).context = $s(null), n = e.current, (l = Dl(r = ts(), a = ns(n))).callback = null != t ? t : null, Ml(n, l, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Vs(e, t, n, r) { var a = t.current, l = ts(), o = ns(a); return n = $s(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Dl(l, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ml(a, t, o)) && (rs(e, a, o, l), Ol(e, a, o)), o; } function Ws(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Qs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function qs(e, t) { Qs(e, t), (e = e.alternate) && Qs(e, t); } Eu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current)
                wi = !0;
            else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return wi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Ni(t), pl();
                            break;
                        case 5:
                            lo(t);
                            break;
                        case 1:
                            za(t.type) && Ua(t);
                            break;
                        case 4:
                            ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            _a(gl, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (_a(io, 1 & io.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? ji(e, t, n) : (_a(io, 1 & io.current), null !== (e = Wi(e, t, n)) ? e.sibling : null);
                            _a(io, 1 & io.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r)
                                    return Hi(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(io, io.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Ci(e, t, n);
                    } return Wi(e, t, n); }(e, t, n);
                wi = 0 != (131072 & e.flags);
            }
        else
            wi = !1, al && 0 != (1048576 & t.flags) && Za(t, Qa, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Vi(e, t), e = t.pendingProps;
                var a = Ta(t, Ra.current);
                El(t, n), a = Eo(null, t, r, e, a, n);
                var o = Co();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, za(r) ? (o = !0, Ua(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Tl(t), a.updater = Bl, t.stateNode = a, a._reactInternals = t, Wl(t, r, e, n), t = Li(null, t, r, !0, o, n)) : (t.tag = 0, al && o && el(t), ki(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Vi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ds(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === R)
                            return 11;
                        if (e === T)
                            return 14;
                    } return 2; }(r), e = vl(r, e), a) {
                        case 0:
                            t = Pi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ri(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Si(null, t, r, e, n);
                            break e;
                        case 14:
                            t = xi(null, t, r, vl(r.type, e), n);
                            break e;
                    }
                    throw Error(l(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Ri(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 3:
                e: {
                    if (Ni(t), null === e)
                        throw Error(l(387));
                    r = t.pendingProps, a = (o = t.memoizedState).element, zl(e, t), Fl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Ti(e, t, r, n, a = ci(Error(l(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Ti(e, t, r, n, a = ci(Error(l(424)), t));
                            break e;
                        }
                        for (rl = sa(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Gl(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (pl(), r === a) {
                            t = Wi(e, t, n);
                            break e;
                        }
                        ki(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return lo(t), null === e && sl(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), _i(e, t), ki(e, t, i, n), t.child;
            case 6: return null === e && sl(t), null;
            case 13: return ji(e, t, n);
            case 4: return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xl(t, null, r, n) : ki(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 7: return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, _a(gl, r._currentValue), r._currentValue = i, null !== o)
                        if (ir(o.value, i)) {
                            if (o.children === a.children && !La.current) {
                                t = Wi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var u = o.dependencies;
                                if (null !== u) {
                                    i = o.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === o.tag) {
                                                (s = Dl(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s;
                                                }
                                            }
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), xl(o.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    i = o.type === t.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (i = o.return))
                                        throw Error(l(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), xl(i, n, t), i = o.sibling;
                                }
                                else
                                    i = o.child;
                                if (null !== i)
                                    i.return = o;
                                else
                                    for (i = o; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (o = i.sibling)) {
                                            o.return = i.return, i = o;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                o = i;
                            }
                    ki(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, El(t, n), r = r(a = Cl(a)), t.flags |= 1, ki(e, t, r, n), t.child;
            case 14: return a = vl(r = t.type, t.pendingProps), xi(e, t, r, a = vl(r.type, a), n);
            case 15: return Ei(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), Vi(e, t), t.tag = 1, za(r) ? (e = !0, Ua(t)) : e = !1, El(t, n), Hl(t, r, a), Wl(t, r, a, n), Li(null, t, r, !0, e, n);
            case 19: return Hi(e, t, n);
            case 22: return Ci(e, t, n);
        } throw Error(l(156, t.tag)); }; var Ks = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ys(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var l = n._reactRootContainer; if (l) {
            var o = l;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Ws(o); i.call(e); };
            }
            Vs(t, o, e, a);
        }
        else
            o = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var l = r;
                    r = function () { var e = Ws(o); l.call(e); };
                }
                var o = Hs(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = o, e[ha] = o.current, $r(8 === e.nodeType ? e.parentNode : e), fs(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Ws(u); i.call(e); };
            } var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ha] = u.current, $r(8 === e.nodeType ? e.parentNode : e), fs((function () { Vs(t, u, n, r); })), u; }(n, t, e, a, r); return Ws(o); } Xs.prototype.render = Ys.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(l(409)); Vs(e, t, null, null); }, Xs.prototype.unmount = Ys.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            fs((function () { Vs(null, e, null, null); })), t[ha] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Et();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++)
                ;
            Dt.splice(n, 0, e), 0 === n && Ft(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ft(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), as(t, Ge()), 0 == (6 & Lu) && (Hu = Ge() + 500, $a()));
                }
                break;
            case 13: fs((function () { var t = Ll(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), qs(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Ll(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
        } }, xt = function (e) { if (13 === e.tag) {
            var t = ns(e), n = Ll(e, t);
            null !== n && rs(n, e, t, ts()), qs(e, t);
        } }, Et = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(l(90));
                            q(r), J(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                le(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Re = cs, Le = fs; var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, _e, Pe, cs] }, nc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = We(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), lt = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Gs(t))
            throw Error(l(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Gs(e))
            throw Error(l(299)); var n = !1, r = "", a = Ks; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bs(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Ys(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(l(188));
            throw e = Object.keys(e).join(","), Error(l(268, e));
        } return null === (e = We(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return fs(e); }, t.hydrate = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Gs(e))
            throw Error(l(405)); var r = null != n && n.hydratedSources || null, a = !1, o = "", i = Ks; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Hs(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[ha] = t.current, $r(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Js(e))
            throw Error(l(40)); return !!e._reactRootContainer && (fs((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Js(n))
            throw Error(l(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(l(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 745: function (e, t, n) { var r = n(935); t.s = r.createRoot, r.hydrateRoot; }, 935: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(448); }, 251: function (e, t, n) { var r = n(294), a = Symbol.for("react.element"), l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 }; function u(e, t, n) { var r, u = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            l.call(t, r) && !i.hasOwnProperty(r) && (u[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === u[r] && (u[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: u, _owner: o.current }; } t.jsx = u, t.jsxs = u; }, 408: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, x = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, l = {}, o = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)
                S.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            l.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            l.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === l[a] && (l[a] = u[a]); return { $$typeof: n, type: e, key: o, ref: i, props: l, _owner: x.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function R(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function L(e, t, a, l, o) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return o = o(u = e), e = "" === l ? "." + R(u, 0) : l, k(o) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), L(o, t, a, "", (function (e) { return e; }))) : null != o && (_(o) && (o = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1; if (u = 0, l = "" === l ? "." : l + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = l + R(i = e[s], s);
                u += L(i, t, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += L(i = i.value, t, a, c = l + R(i, s++), o);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function N(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return L(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function T(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var z = { current: null }, D = { transition: null }, M = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: D, ReactCurrentOwner: x }; t.Children = { map: N, forEach: function (e, t, n) { N(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return N(e, (function () { t++; })), t; }, toArray: function (e) { return N(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), l = e.key, o = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, i = x.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: l, ref: o, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: T }; }, t.memo = function (e, t) { return { $$typeof: f, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = D.transition; D.transition = {}; try {
            e();
        }
        finally {
            D.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return z.current.useCallback(e, t); }, t.useContext = function (e) { return z.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return z.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return z.current.useEffect(e, t); }, t.useId = function () { return z.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return z.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return z.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return z.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return z.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return z.current.useReducer(e, t, n); }, t.useRef = function (e) { return z.current.useRef(e); }, t.useState = function (e) { return z.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return z.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return z.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, n) { e.exports = n(408); }, 893: function (e, t, n) { e.exports = n(251); }, 53: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < l(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > l(u, n))
                    s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > l(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function l(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], f = 1, d = null, p = 3, h = !1, m = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !m)
            if (null !== r(s))
                m = !0, D(S);
            else {
                var t = r(c);
                null !== t && M(k, t.startTime - e);
            } } function S(e, n) { m = !1, v && (v = !1, y(_), _ = -1), h = !0; var l = p; try {
            for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !L());) {
                var o = d.callback;
                if ("function" == typeof o) {
                    d.callback = null, p = d.priorityLevel;
                    var i = o(d.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? d.callback = i : d === r(s) && a(s), w(n);
                }
                else
                    a(s);
                d = r(s);
            }
            if (null !== d)
                var u = !0;
            else {
                var f = r(c);
                null !== f && M(k, f.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            d = null, p = l, h = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, E = !1, C = null, _ = -1, P = 5, R = -1; function L() { return !(t.unstable_now() - R < P); } function N() { if (null !== C) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? x() : (E = !1, C = null);
            }
        }
        else
            E = !1; } if ("function" == typeof b)
            x = function () { b(N); };
        else if ("undefined" != typeof MessageChannel) {
            var T = new MessageChannel, z = T.port2;
            T.port1.onmessage = N, x = function () { z.postMessage(null); };
        }
        else
            x = function () { g(N, 0); }; function D(e) { C = e, E || (E = !0, x()); } function M(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, D(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, l) { var o = t.unstable_now(); switch (l = "object" == typeof l && null !== l && "number" == typeof (l = l.delay) && 0 < l ? o + l : o, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: f++, callback: a, priorityLevel: e, startTime: l, expirationTime: i = l + i, sortIndex: -1 }, l > o ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, M(k, l - o))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, D(S))), e; }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 840: function (e, t, n) { e.exports = n(53); } }, l = {};
    function o(e) { var t = l[e]; if (void 0 !== t)
        return t.exports; var n = l[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var l = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((function (e) { return l[e] = function () { return n[e]; }; })); return l.default = function () { return n; }, o.d(a, l), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce((function (t, n) { return (o.f[n](e, t), t); }), [])); }, o.u = function (e) { return e + "." + { 447: "edcb455b4a78b90299d5", 592: "1bbf6bc314b2ef48d143" }[e] + ".js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "webpack:", o.l = function (e, t, a, l) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == r + a) {
                    i = f;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var d = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && !e;)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 179: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var l = o.p + o.u(t), i = new Error;
            o.l(l, (function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", i.name = "ChunkLoadError", i.type = a, i.request = l, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, l = n[0], i = n[1], u = n[2], s = 0; if (l.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            o.o(i, r) && (o.m[r] = i[r]);
        u && u(o);
    } for (t && t(n); s < l.length; s++)
        a = l[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkwebpack = self.webpackChunkwebpack || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e, t = o(893), n = o(294), r = o.t(n, 2), a = o(745); function l() { return l = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, l.apply(this, arguments); } !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {})); var i = "popstate"; function u(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function s(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function c(e, t) { return { usr: e.state, key: e.key, idx: t }; } function f(e, t, n, r) { return void 0 === n && (n = null), l({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? p(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function d(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function p(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var h; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(h || (h = {})); var m = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function v(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var o = __spreadArray(__spreadArray([], n, true), [a], false), i = "string" == typeof e.id ? e.id : o.join("-"); if (u(!0 !== e.index || !e.children, "Cannot specify children on an index route"), u(!r[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = l({}, e, t(e), { id: i });
        return r[i] = n_2, n_2;
    } {
        var n_3 = l({}, e, t(e), { id: i, children: void 0 });
        return r[i] = n_3, e.children && (n_3.children = v(e.children, t, o, r)), n_3;
    } })); } function g(e, t, n) { void 0 === n && (n = "/"); var r = T(("string" == typeof t ? p(t) : t).pathname || "/", n); if (null == r)
        return null; var a = y(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var l = null; for (var e_1 = 0; null == l && e_1 < a.length; ++e_1)
        l = R(a[e_1], N(r)); return l; } function y(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, l) { var o = { relativePath: void 0 === l ? e.path || "" : l, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (u(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var i = O([r, o.relativePath]), s = n.concat(o); e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), y(e.children, t, s, i)), (null != e.path || e.index) && t.push({ path: i, score: P(i, e.index), routesMeta: s }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = b(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function b(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), l = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [l, ""] : [l]; var o = b(r.join("/")), i = []; return i.push.apply(i, o.map((function (e) { return "" === e ? l : [l, e].join("/"); }))), a && i.push.apply(i, o), i.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var w = /^:\w+$/, k = 3, S = 2, x = 1, E = 10, C = -2, _ = function (e) { return "*" === e; }; function P(e, t) { var n = e.split("/"), r = n.length; return n.some(_) && (r += C), t && (r += S), n.filter((function (e) { return !_(e); })).reduce((function (e, t) { return e + (w.test(t) ? k : "" === t ? x : E); }), r); } function R(e, t) { var n = e.routesMeta, r = {}, a = "/", l = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var o_1 = n[e_2], i_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = L({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        l.push({ params: r, pathname: O([a, s_1.pathname]), pathnameBase: U(O([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = O([a, s_1.pathnameBase]));
    } return l; } function L(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), s("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) { return (r.push(t), "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce((function (e, t, n) { if ("*" === t) {
            var e_3 = i[n] || "";
            o = l.slice(0, l.length - e_3.length).replace(/(.)\/+$/, "$1");
        } return e[t] = function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return s(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(i[n] || "", t), e; }), {}), pathname: l, pathnameBase: o, pattern: e }; } function N(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return s(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function T(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function z(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function D(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } function M(e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = p(e) : (a = l({}, e), u(!a.pathname || !a.pathname.includes("?"), z("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), z("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), z("#", "search", "hash", a))); var o, i = "" === e || "" === a.pathname, s = i ? "/" : a.pathname; if (r || null == s)
        o = n;
    else {
        var e_4 = t.length - 1;
        if (s.startsWith("..")) {
            var t_1 = s.split("/");
            for (; ".." === t_1[0];)
                t_1.shift(), e_4 -= 1;
            a.pathname = t_1.join("/");
        }
        o = e_4 >= 0 ? t[e_4] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? p(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, l = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: l, search: F(r), hash: j(a) }; }(a, o), f = s && "/" !== s && s.endsWith("/"), d = (i || "." === s) && n.endsWith("/"); return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c; } var O = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, U = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, F = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, j = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var I = /** @class */ (function () {
            function I(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return I;
        }()); function A(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var B = ["post", "put", "patch", "delete"], $ = new Set(B), H = __spreadArray(["get"], B, true), V = new Set(H), W = new Set([301, 302, 303, 307, 308]), Q = new Set([307, 308]), q = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, K = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Y = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, X = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, G = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }; function J(e, t, n, r, a, l, o) { var i, u; if (null != l && "path" !== o) {
        i = [];
        for (var _b = 0, t_2 = t; _b < t_2.length; _b++) {
            var e_5 = t_2[_b];
            if (i.push(e_5), e_5.route.id === l) {
                u = e_5;
                break;
            }
        }
    }
    else
        i = t, u = t[t.length - 1]; var s = M(a || ".", D(i).map((function (e) { return e.pathnameBase; })), T(e.pathname, n) || e.pathname, "path" === o); return null == a && (s.search = e.search, s.hash = e.hash), null != a && "" !== a && "." !== a || !u || !u.route.index || ke(s.search) || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (s.pathname = "/" === s.pathname ? n : O([n, s.pathname])), d(s); } function Z(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !V.has(a.toLowerCase())))
        return { path: n, error: de(405, { method: r.formMethod }) }; var a; var l, o, i = function () { return ({ path: n, error: de(400, { type: "invalid-body" }) }); }, s = r.formMethod || "get", c = e ? s.toUpperCase() : s.toLowerCase(), f = he(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!ye(c))
                return i();
            var e_6 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: c, formAction: f, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_6 } };
        }
        if ("application/json" === r.formEncType) {
            if (!ye(c))
                return i();
            try {
                var e_7 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: c, formAction: f, formEncType: r.formEncType, formData: void 0, json: e_7, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (u("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        l = oe(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        l = oe(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        l = r.body, o = ie(l);
    else if (null == r.body)
        l = new URLSearchParams, o = new FormData;
    else
        try {
            l = new URLSearchParams(r.body), o = ie(l);
        }
        catch (e) {
            return i();
        } var h = { formMethod: c, formAction: f, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (ye(h.formMethod))
        return { path: n, submission: h }; var m = p(n); return t && m.search && ke(m.search) && l.append("index", ""), m.search = "?" + l, { path: d(m), submission: h }; } function ee(e, t, n, r, a, o, i, u, s, c, f, d, p, h) { var m = h ? Object.values(h)[0] : p ? Object.values(p)[0] : void 0, v = e.createURL(t.location), y = e.createURL(a), b = h ? Object.keys(h)[0] : void 0, w = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, b).filter((function (e, n) { if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || i.some((function (t) { return t === e.route.id; })))
        return !0; var a = t.matches[n], u = e; return ne(e, l({ currentUrl: v, currentParams: a.params, nextUrl: y, nextParams: u.params }, r, { actionResult: m, defaultShouldRevalidate: o || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || te(a, u) })); })), k = []; return s.forEach((function (e, a) { if (!n.some((function (t) { return t.route.id === e.routeId; })))
        return; var i = g(f, e.path, d); if (!i)
        return void k.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var s = t.fetchers.get(a), p = Se(i, e.path), h = !1; h = !c.has(a) && (!!u.includes(a) || (s && "idle" !== s.state && void 0 === s.data ? o : ne(p, l({ currentUrl: v, currentParams: t.matches[t.matches.length - 1].params, nextUrl: y, nextParams: n[n.length - 1].params }, r, { actionResult: m, defaultShouldRevalidate: o })))), h && k.push({ key: a, routeId: e.routeId, path: e.path, matches: i, match: p, controller: new AbortController }); })), [w, k]; } function te(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function ne(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function re(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, o, e_8, t_3; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    u(a, "No route found in manifest");
                    o = {};
                    for (e_8 in r) {
                        t_3 = void 0 !== a[e_8] && "hasErrorBoundary" !== e_8;
                        s(!t_3, 'Route "' + a.id + '" has a static property "' + e_8 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_8 + '" will be ignored.'), t_3 || m.has(e_8) || (o[e_8] = r[e_8]);
                    }
                    Object.assign(a, o), Object.assign(a, l({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function ae(e, t, n, r, a, l, o, i) {
        return __awaiter(this, void 0, void 0, function () { var s, c, f, d, r_3, e_10, t_4, e_11, r_4, e_12, e_9, e_13, a_1, e_14, n_6, r_5, a_2, l_1, _b, p, m, v; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    void 0 === i && (i = {});
                    d = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return f = function () { return r(); }, t.signal.addEventListener("abort", f), Promise.race([e({ request: t, params: n.params, context: i.requestContext }), a]); };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([d(r_3).catch((function (t) { e_10 = t; })), re(n.route, l, a)])];
                case 2:
                    t_4 = _c.sent();
                    if (e_10)
                        throw e_10;
                    c = t_4[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, re(n.route, l, a)];
                case 4:
                    if (_c.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_11 = new URL(t.url), r_4 = e_11.pathname + e_11.search;
                            throw de(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: h.data, data: void 0 }];
                    }
                    return [4 /*yield*/, d(r_3)];
                case 5:
                    c = _c.sent();
                    _c.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_12 = new URL(t.url);
                        throw de(404, { pathname: e_12.pathname + e_12.search });
                    }
                    return [4 /*yield*/, d(r_3)];
                case 8:
                    c = _c.sent();
                    _c.label = 9;
                case 9:
                    u(void 0 !== c, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_9 = _c.sent();
                    s = h.error, c = e_9;
                    return [3 /*break*/, 12];
                case 11:
                    f && t.signal.removeEventListener("abort", f);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (p = c) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body)) return [3 /*break*/, 17];
                    a_1 = c.status;
                    if (W.has(a_1)) {
                        e_14 = c.headers.get("Location");
                        if (u(e_14, "Redirects returned/thrown from loaders/actions must have a Location header"), X.test(e_14)) {
                            if (!i.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_14.startsWith("//") ? new URL(n_6.protocol + e_14) : new URL(e_14), a_2 = null != T(r_5.pathname, o);
                                r_5.origin === n_6.origin && a_2 && (e_14 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_14 = J(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_14);
                        if (i.isStaticRequest)
                            throw c.headers.set("Location", e_14), c;
                        return [2 /*return*/, { type: h.redirect, status: a_1, location: e_14, revalidate: null !== c.headers.get("X-Remix-Revalidate"), reloadDocument: null !== c.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (i.isRouteRequest)
                        throw { type: s === h.error ? h.error : h.data, response: c };
                    l_1 = c.headers.get("Content-Type");
                    if (!(l_1 && /\bapplication\/json\b/.test(l_1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, c.json()];
                case 13:
                    _b = _c.sent();
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, c.text()];
                case 15:
                    _b = _c.sent();
                    _c.label = 16;
                case 16: return [2 /*return*/, (e_13 = _b, s === h.error ? { type: s, error: new I(a_1, c.statusText, e_13), headers: c.headers } : { type: h.data, data: e_13, statusCode: c.status, headers: c.headers })];
                case 17: return [2 /*return*/, s === h.error ? { type: s, error: c } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(c) ? { type: h.deferred, deferredData: c, statusCode: null == (m = c.init) ? void 0 : m.status, headers: (null == (v = c.init) ? void 0 : v.headers) && new Headers(c.init.headers) } : { type: h.data, data: c }];
            }
        }); });
    } function le(e, t, n, r) { var a = e.createURL(he(t)).toString(), l = { signal: n }; if (r && ye(r.formMethod)) {
        var e_15 = r.formMethod, t_5 = r.formEncType;
        l.method = e_15.toUpperCase(), "application/json" === t_5 ? (l.headers = new Headers({ "Content-Type": t_5 }), l.body = JSON.stringify(r.json)) : "text/plain" === t_5 ? l.body = r.text : "application/x-www-form-urlencoded" === t_5 && r.formData ? l.body = oe(r.formData) : l.body = r.formData;
    } return new Request(a, l); } function oe(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function ie(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function ue(e, t, n, r, a, o, i, s) {
        var _b;
        var _c = function (e, t, n, r, a) { var l, o = {}, i = null, s = !1, c = {}; return n.forEach((function (n, f) { var d = t[f].route.id; if (u(!ge(n), "Cannot handle redirect results in processLoaderData"), ve(n)) {
            var t_6 = ce(e, d), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_6.route.id] && (i[t_6.route.id] = a_3), o[d] = void 0, s || (s = !0, l = A(n.error) ? n.error.status : 500), n.headers && (c[d] = n.headers);
        }
        else
            me(n) ? (a.set(d, n.deferredData), o[d] = n.deferredData.data) : o[d] = n.data, null == n.statusCode || 200 === n.statusCode || s || (l = n.statusCode), n.headers && (c[d] = n.headers); })), r && (i = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: c }; }(t, n, r, a, s), c = _c.loaderData, f = _c.errors;
        for (var t_7 = 0; t_7 < o.length; t_7++) {
            var _d = o[t_7], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            u(void 0 !== i && void 0 !== i[t_7], "Did not find corresponding fetcher result");
            var s_2 = i[t_7];
            if (!a_4 || !a_4.signal.aborted)
                if (ve(s_2)) {
                    var t_8 = ce(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    f && f[t_8.route.id] || (f = l({}, f, (_b = {}, _b[t_8.route.id] = s_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (ge(s_2))
                    u(!1, "Unhandled fetcher revalidation redirect");
                else if (me(s_2))
                    u(!1, "Unhandled fetcher deferred data");
                else {
                    var t_9 = _e(s_2.data);
                    e.fetchers.set(n_9, t_9);
                }
        }
        return { loaderData: c, errors: f };
    } function se(e, t, n, r) { var a = l({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var l_2 = n_10[_b];
        var n_11 = l_2.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && l_2.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function ce(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function fe(e) { var t = e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function de(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, l = _b.type, o = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === l ? i = "defer() is not supported in actions" : "invalid-body" === l && (i = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new I(e || 500, o, new Error(i), !0); } function pe(e) { for (var t_10 = e.length - 1; t_10 >= 0; t_10--) {
        var n_12 = e[t_10];
        if (ge(n_12))
            return { result: n_12, idx: t_10 };
    } } function he(e) { return d(l({}, "string" == typeof e ? p(e) : e, { hash: "" })); } function me(e) { return e.type === h.deferred; } function ve(e) { return e.type === h.error; } function ge(e) { return (e && e.type) === h.redirect; } function ye(e) { return $.has(e.toLowerCase()); } function be(e, t, n, r, a, l) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var i_2, s_3, c_2, f_1, e_16;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    i_2 = n[o_2], s_3 = t[o_2];
                                    if (!s_3)
                                        return [2 /*return*/, "continue"];
                                    c_2 = e.find((function (e) { return e.route.id === s_3.route.id; })), f_1 = null != c_2 && !te(c_2, s_3) && void 0 !== (l && l[s_3.route.id]);
                                    if (!(me(i_2) && (a || f_1))) return [3 /*break*/, 2];
                                    e_16 = r[o_2];
                                    u(e_16, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, we(i_2, e_16, a).then((function (e) { e && (n[o_2] = e || n[o_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function we(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: h.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: h.error, error: e }];
                            }
                        return [2 /*return*/, { type: h.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function ke(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function Se(e, t) { var n = "string" == typeof t ? p(t).search : t.search; if (e[e.length - 1].route.index && ke(n || ""))
        return e[e.length - 1]; var r = D(e); return r[r.length - 1]; } function xe(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, l = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != l ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; } function Ee(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function Ce(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function _e(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function Pe() { return Pe = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Pe.apply(this, arguments); } Symbol("deferred"); var Re = n.createContext(null), Le = n.createContext(null), Ne = n.createContext(null), Te = n.createContext(null), ze = n.createContext({ outlet: null, matches: [], isDataRoute: !1 }), De = n.createContext(null); function Me() { return null != n.useContext(Te); } function Oe() { return Me() || u(!1), n.useContext(Te).location; } function Ue(e) { n.useContext(Ne).static || n.useLayoutEffect(e); } function Fe() { var e = n.useContext(ze).isDataRoute; return e ? function () { var e = function (e) { var t = n.useContext(Re); return t || u(!1), t; }(We.UseNavigateStable).router, t = qe(Qe.UseNavigateStable), r = n.useRef(!1); Ue((function () { r.current = !0; })); var a = n.useCallback((function (n, a) { void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, Pe({ fromRouteId: t }, a))); }), [e, t]); return a; }() : function () { Me() || u(!1); var e = n.useContext(Re), _b = n.useContext(Ne), t = _b.basename, r = _b.navigator, a = n.useContext(ze).matches, l = Oe().pathname, o = JSON.stringify(D(a).map((function (e) { return e.pathnameBase; }))), i = n.useRef(!1); return Ue((function () { i.current = !0; })), n.useCallback((function (n, a) { if (void 0 === a && (a = {}), !i.current)
        return; if ("number" == typeof n)
        return void r.go(n); var u = M(n, JSON.parse(o), l, "path" === a.relative); null == e && "/" !== t && (u.pathname = "/" === u.pathname ? t : O([t, u.pathname])), (a.replace ? r.replace : r.push)(u, a.state, a); }), [t, r, o, l, e]); }(); } var je = n.createContext(null); function Ie(e, t) { var r = (void 0 === t ? {} : t).relative, a = n.useContext(ze).matches, l = Oe().pathname, o = JSON.stringify(D(a).map((function (e) { return e.pathnameBase; }))); return n.useMemo((function () { return M(e, JSON.parse(o), l, "path" === r); }), [e, o, l, r]); } function Ae(t, r, a) { Me() || u(!1); var l = n.useContext(Ne).navigator, o = n.useContext(ze).matches, i = o[o.length - 1], s = i ? i.params : {}, c = (i && i.pathname, i ? i.pathnameBase : "/"); i && i.route; var f, d = Oe(); if (r) {
        var h;
        var e_17 = "string" == typeof r ? p(r) : r;
        "/" === c || (null == (h = e_17.pathname) ? void 0 : h.startsWith(c)) || u(!1), f = e_17;
    }
    else
        f = d; var m = f.pathname || "/", v = g(t, { pathname: "/" === c ? m : m.slice(c.length) || "/" }), y = function (e, t, r) { var a; if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
        var l;
        if (null == (l = r) || !l.errors)
            return null;
        e = r.matches;
    } var o = e, i = null == (a = r) ? void 0 : a.errors; if (null != i) {
        var e_18 = o.findIndex((function (e) { return e.route.id && (null == i ? void 0 : i[e.route.id]); }));
        e_18 >= 0 || u(!1), o = o.slice(0, Math.min(o.length, e_18 + 1));
    } return o.reduceRight((function (e, a, l) { var u = a.route.id ? null == i ? void 0 : i[a.route.id] : null, s = null; r && (s = a.route.errorElement || $e); var c = t.concat(o.slice(0, l + 1)), f = function () { var t; return t = u ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(Ve, { match: a, routeContext: { outlet: e, matches: c, isDataRoute: null != r }, children: t }); }; return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? n.createElement(He, { location: r.location, revalidation: r.revalidation, component: s, error: u, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f(); }), null); }(v && v.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, s, e.params), pathname: O([c, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? c : O([c, l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), o, a); return r && y ? n.createElement(Te.Provider, { value: { location: Pe({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: e.Pop } }, y) : y; } function Be() { var e = function () { var e; var t = n.useContext(De), r = function (e) { var t = n.useContext(Le); return t || u(!1), t; }(Qe.UseRouteError), a = qe(Qe.UseRouteError); return t || (null == (e = r.errors) ? void 0 : e[a]); }(), t = A(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? n.createElement("pre", { style: a }, r) : null, null); } var $e = n.createElement(Be, null);
        var He = /** @class */ (function (_super) {
            __extends(He, _super);
            function He(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            He.getDerivedStateFromError = function (e) { return { error: e }; };
            He.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            He.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            He.prototype.render = function () { return this.state.error ? n.createElement(ze.Provider, { value: this.props.routeContext }, n.createElement(De.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return He;
        }(n.Component)); function Ve(e) { var t = e.routeContext, r = e.match, a = e.children, l = n.useContext(Re); return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(ze.Provider, { value: t }, a); } var We = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(We || {}), Qe = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Qe || {}); function qe(e) { var t = function (e) { var t = n.useContext(ze); return t || u(!1), t; }(), r = t.matches[t.matches.length - 1]; return r.route.id || u(!1), r.route.id; } var Ke = r.startTransition; function Ye(e) { var t = e.routes, n = e.state; return Ae(t, void 0, n); } function Xe(e) { return function (e) { var t = n.useContext(ze).outlet; return t ? n.createElement(je.Provider, { value: e }, t) : t; }(e.context); } function Ge(t) { var _b = t.basename, r = _b === void 0 ? "/" : _b, _c = t.children, a = _c === void 0 ? null : _c, l = t.location, _d = t.navigationType, o = _d === void 0 ? e.Pop : _d, i = t.navigator, _f = t.static, s = _f === void 0 ? !1 : _f; Me() && u(!1); var c = r.replace(/^\/*/, "/"), f = n.useMemo((function () { return ({ basename: c, navigator: i, static: s }); }), [c, i, s]); "string" == typeof l && (l = p(l)); var _g = l.pathname, d = _g === void 0 ? "/" : _g, _h = l.search, h = _h === void 0 ? "" : _h, _j = l.hash, m = _j === void 0 ? "" : _j, _k = l.state, v = _k === void 0 ? null : _k, _m = l.key, g = _m === void 0 ? "default" : _m, y = n.useMemo((function () { var e = T(d, c); return null == e ? null : { location: { pathname: e, search: h, hash: m, state: v, key: g }, navigationType: o }; }), [c, d, h, m, v, g, o]); return null == y ? null : n.createElement(Ne.Provider, { value: f }, n.createElement(Te.Provider, { children: a, value: y })); } function Je() { return Je = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Je.apply(this, arguments); } new Promise((function () { })), n.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); var Ze = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"]; function et(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_11 = t; _b < t_11.length; _b++) {
        var _c = t_11[_b], e_19 = _c[0], r_9 = _c[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_19] = new I(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_12 = window[r_9.__subType];
                if ("function" == typeof t_12)
                    try {
                        var a_5 = new t_12(r_9.message);
                        a_5.stack = "", n[e_19] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_19]) {
                var t_13 = new Error(r_9.message);
                t_13.stack = "", n[e_19] = t_13;
            }
        }
        else
            n[e_19] = r_9;
    } return n; } r.startTransition; var tt = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, nt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, rt = n.forwardRef((function (e, t) { var r, a = e.onClick, l = e.relative, o = e.reloadDocument, i = e.replace, s = e.state, c = e.target, f = e.to, p = e.preventScrollReset, h = function (e, t) { if (null == e)
        return {}; var n, r, a = {}, l = Object.keys(e); for (r = 0; r < l.length; r++)
        n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]); return a; }(e, Ze), m = n.useContext(Ne).basename, v = !1; if ("string" == typeof f && nt.test(f) && (r = f, tt))
        try {
            var e_20 = new URL(window.location.href), t_14 = f.startsWith("//") ? new URL(e_20.protocol + f) : new URL(f), n_13 = T(t_14.pathname, m);
            t_14.origin === e_20.origin && null != n_13 ? f = n_13 + t_14.search + t_14.hash : v = !0;
        }
        catch (e) { } var g = function (e, t) { var r = (void 0 === t ? {} : t).relative; Me() || u(!1); var _b = n.useContext(Ne), a = _b.basename, l = _b.navigator, _c = Ie(e, { relative: r }), o = _c.hash, i = _c.pathname, s = _c.search, c = i; return "/" !== a && (c = "/" === i ? a : O([a, i])), l.createHref({ pathname: c, search: s, hash: o }); }(f, { relative: l }), y = function (e, t) { var _b = void 0 === t ? {} : t, r = _b.target, a = _b.replace, l = _b.state, o = _b.preventScrollReset, i = _b.relative, u = Fe(), s = Oe(), c = Ie(e, { relative: i }); return n.useCallback((function (t) { if (function (e, t) { return !(0 !== e.button || t && "_self" !== t || function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e)); }(t, r)) {
        t.preventDefault();
        var n_14 = void 0 !== a ? a : d(s) === d(c);
        u(e, { replace: n_14, state: l, preventScrollReset: o, relative: i });
    } }), [s, u, c, a, l, r, e, o, i]); }(f, { replace: i, state: s, target: c, preventScrollReset: p, relative: l }); return n.createElement("a", Je({}, h, { href: r || g, onClick: v || o ? a : function (e) { a && a(e), e.defaultPrevented || y(e); }, ref: t, target: c })); })); var at, lt; (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"; })(at || (at = {})), function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(lt || (lt = {})); var ot = "j_hXvOGO", it = o.p + "6c9b989f7d29e990fbcc.png", ut = o.p + "b151335602bbc77720a9.jpg"; var st, ct; function ft() { return ft = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, ft.apply(this, arguments); } var dt = function (e) { return n.createElement("svg", ft({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "F1416C", viewBox: "0 0 85 41" }, e), st || (st = n.createElement("rect", { width: 85, height: 41, rx: 6 })), ct || (ct = n.createElement("path", { fill: "#fff", d: "M23.849 25H21.77l.014-1.073h2.065c.71 0 1.303-.148 1.777-.445.474-.3.83-.72 1.066-1.257.242-.543.363-1.176.363-1.9v-.61c0-.569-.069-1.075-.205-1.517a3.07 3.07 0 0 0-.602-1.128 2.54 2.54 0 0 0-.97-.704 3.336 3.336 0 0 0-1.306-.239H21.73v-1.08h2.242c.651 0 1.246.11 1.784.328.538.214 1 .526 1.388.936.392.406.692.898.902 1.477.21.574.314 1.221.314 1.942v.594c0 .72-.104 1.37-.314 1.948a3.968 3.968 0 0 1-2.331 2.406c-.552.215-1.174.322-1.866.322m-1.374-9.953V25h-1.32v-9.953h1.32m12.038 8.688v-3.807c0-.292-.06-.545-.178-.76a1.163 1.163 0 0 0-.52-.505c-.232-.118-.52-.178-.86-.178-.32 0-.6.055-.842.164-.237.11-.424.253-.56.431a.944.944 0 0 0-.198.574H30.09c0-.264.068-.526.205-.786.137-.26.333-.494.588-.704.26-.214.57-.383.93-.506.364-.127.77-.191 1.216-.191.538 0 1.012.09 1.422.273.415.183.739.458.97.827.238.365.356.823.356 1.374v3.446c0 .246.02.508.062.786.045.278.111.517.198.718V25h-1.32a2.36 2.36 0 0 1-.15-.581 4.679 4.679 0 0 1-.054-.684m.218-3.22.014.89h-1.278c-.36 0-.681.029-.964.088-.283.055-.52.14-.711.253a1.202 1.202 0 0 0-.437.43c-.1.17-.15.368-.15.596 0 .232.052.444.156.635.105.192.262.344.472.458.214.11.476.164.786.164.388 0 .73-.082 1.026-.246.296-.164.53-.364.704-.601.177-.237.273-.467.287-.69l.54.608a1.837 1.837 0 0 1-.26.635 3.06 3.06 0 0 1-1.401 1.196 2.715 2.715 0 0 1-1.08.206c-.502 0-.942-.098-1.32-.294a2.256 2.256 0 0 1-.875-.786 2.081 2.081 0 0 1-.307-1.115c0-.396.077-.745.232-1.046.155-.305.378-.558.67-.758a3.18 3.18 0 0 1 1.053-.465 5.55 5.55 0 0 1 1.374-.157h1.47m4.3-1.332V25h-1.264v-7.396h1.196l.068 1.579m-.3 1.838-.527-.02c.005-.506.08-.973.226-1.401.145-.433.35-.81.615-1.128a2.741 2.741 0 0 1 2.167-1.005c.364 0 .693.05.984.15.292.096.54.25.745.465.21.214.37.492.479.834.11.337.164.75.164 1.237V25h-1.272v-4.86c0-.388-.056-.698-.17-.93a1.05 1.05 0 0 0-.5-.513c-.218-.11-.487-.164-.806-.164-.314 0-.602.066-.861.198a2.062 2.062 0 0 0-.663.547 2.75 2.75 0 0 0-.431.8c-.1.296-.15.61-.15.944m11.566-3.418h1.148v7.24c0 .651-.132 1.207-.396 1.668-.264.46-.634.809-1.108 1.046-.469.241-1.011.362-1.626.362-.256 0-.556-.041-.903-.123a3.64 3.64 0 0 1-1.012-.403 2.529 2.529 0 0 1-.827-.76l.663-.751c.31.373.634.633.971.78.342.145.68.218 1.012.218.4 0 .747-.075 1.039-.226.291-.15.517-.373.677-.67.164-.291.246-.651.246-1.08V19.23l.116-1.626m-5.093 3.78v-.143c0-.565.066-1.078.198-1.538.137-.465.33-.864.581-1.196a2.61 2.61 0 0 1 2.14-1.04c.465 0 .87.083 1.217.247.35.16.647.394.888.704.247.305.44.674.582 1.107.14.433.239.923.293 1.47v.629a6.44 6.44 0 0 1-.293 1.463 3.452 3.452 0 0 1-.582 1.107c-.241.306-.537.54-.888.704-.351.16-.761.24-1.23.24-.443 0-.844-.094-1.204-.28a2.74 2.74 0 0 1-.916-.787 3.725 3.725 0 0 1-.588-1.19 5.409 5.409 0 0 1-.198-1.496m1.265-.143v.144c0 .369.036.715.11 1.039.077.323.193.608.348.854.16.246.362.44.608.581.246.137.54.206.882.206.42 0 .766-.09 1.04-.267.273-.178.489-.413.648-.704.165-.292.292-.609.383-.95v-1.648a3.36 3.36 0 0 0-.232-.725 2.233 2.233 0 0 0-.397-.628 1.714 1.714 0 0 0-.594-.445 1.972 1.972 0 0 0-.834-.164 1.75 1.75 0 0 0-.896.219 1.744 1.744 0 0 0-.608.588 2.82 2.82 0 0 0-.349.861 4.72 4.72 0 0 0-.11 1.04m9.966 3.897a3.64 3.64 0 0 1-1.4-.26 3.179 3.179 0 0 1-1.074-.745 3.314 3.314 0 0 1-.684-1.135 4.162 4.162 0 0 1-.239-1.436v-.287c0-.601.089-1.137.267-1.606.177-.474.419-.875.724-1.203a3.103 3.103 0 0 1 1.04-.745 2.985 2.985 0 0 1 1.203-.253c.528 0 .984.09 1.367.273.387.183.704.438.95.766.246.323.428.706.547 1.148.118.438.177.916.177 1.436v.567H53.79v-1.032h4.259v-.096a3.156 3.156 0 0 0-.205-.957 1.722 1.722 0 0 0-.547-.765c-.25-.2-.593-.301-1.025-.301a1.722 1.722 0 0 0-1.416.718 2.687 2.687 0 0 0-.403.868 4.4 4.4 0 0 0-.143 1.182v.287c0 .351.047.682.143.992.1.305.244.574.43.806.192.233.422.415.691.547.274.132.584.199.93.199.447 0 .825-.092 1.135-.274a2.81 2.81 0 0 0 .813-.731l.766.608c-.16.242-.363.472-.609.69-.246.22-.549.397-.909.534-.355.136-.777.205-1.265.205m5.62-6.371V25H60.79v-7.396h1.23l.035 1.162m2.31-1.203-.007 1.175a1.82 1.82 0 0 0-.3-.04 3.199 3.199 0 0 0-.315-.014c-.291 0-.549.045-.772.136a1.603 1.603 0 0 0-.568.383c-.155.164-.278.36-.369.588-.086.223-.143.47-.17.738l-.356.205c0-.446.043-.866.13-1.257a3.42 3.42 0 0 1 .417-1.04c.187-.305.423-.542.71-.71.292-.174.639-.26 1.04-.26.09 0 .196.011.314.034.119.018.2.039.246.061" }))); }; var pt = (0, n.lazy)((function () { return o.e(592).then(o.bind(o, 592)); })), ht = (0, n.lazy)((function () { return o.e(447).then(o.bind(o, 447)); })), mt = document.getElementById("root"); if (!mt)
        throw new Error("root is not found"); var vt, gt, yt = (0, a.s)(mt), bt = (vt = [{ path: "/", element: (0, t.jsx)((function () { var e = (0, n.useState)(0), r = e[0], a = e[1]; return (0, t.jsxs)("div", { children: [(0, t.jsxs)("div", { children: ["PLATFORM=", "desktop"] }), (0, t.jsxs)("div", { children: [(0, t.jsx)("img", { width: 100, height: 100, src: it, alt: "" }), (0, t.jsx)("img", { width: 100, height: 100, src: ut, alt: "" })] }), (0, t.jsx)("div", { children: (0, t.jsx)(dt, { color: "green", width: 100, height: 30 }) }), (0, t.jsx)(rt, { to: "/about", children: "About" }), (0, t.jsx)("br", {}), (0, t.jsx)(rt, { to: "/shop", children: "Shop" }), (0, t.jsx)("br", {}), (0, t.jsx)("span", { className: "lCLBcOmp", children: r }), (0, t.jsx)("button", { className: ot, onClick: function () { return a((function (e) { return e + 1; })); }, children: "Increment" }), (0, t.jsx)("button", { className: ot, onClick: function () { return a((function (e) { return e <= 0 ? e : e - 1; })); }, children: "Decrement" }), (0, t.jsx)(Xe, {})] }); }), {}), children: [{ path: "/about", element: (0, t.jsxs)(n.Suspense, { fallback: "Loading...", children: [(0, t.jsx)(pt, {}), ","] }) }, { path: "/shop", element: (0, t.jsxs)(n.Suspense, { fallback: "Loading...", children: [(0, t.jsx)(ht, {}), ","] }) }] }], function (t) {
        var _b;
        var n = t.window ? t.window : "undefined" != typeof window ? window : void 0, r = void 0 !== n && void 0 !== n.document && void 0 !== n.document.createElement, a = !r;
        var o;
        if (u(t.routes.length > 0, "You must provide a non-empty routes array to createRouter"), t.mapRouteProperties)
            o = t.mapRouteProperties;
        else if (t.detectErrorBoundary) {
            var e_21 = t.detectErrorBoundary;
            o = function (t) { return ({ hasErrorBoundary: e_21(t) }); };
        }
        else
            o = G;
        var i, c = {}, d = v(t.routes, o, void 0, c), p = t.basename || "/", m = l({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, t.future), y = null, b = new Set, w = null, k = null, S = null, x = null != t.hydrationData, E = g(d, t.history.location, p), C = null;
        if (null == E) {
            var e_22 = de(404, { pathname: t.history.location.pathname }), _c = fe(d), n_15 = _c.matches, r_10 = _c.route;
            E = n_15, C = (_b = {}, _b[r_10.id] = e_22, _b);
        }
        var _, P, R = !(E.some((function (e) { return e.route.lazy; })) || E.some((function (e) { return e.route.loader; })) && null == t.hydrationData), L = { historyAction: t.history.action, location: t.history.location, matches: E, initialized: R, navigation: q, restoreScrollPosition: null == t.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: t.hydrationData && t.hydrationData.loaderData || {}, actionData: t.hydrationData && t.hydrationData.actionData || null, errors: t.hydrationData && t.hydrationData.errors || C, fetchers: new Map, blockers: new Map }, N = e.Pop, z = !1, D = !1, M = !1, O = [], U = [], F = new Map, j = 0, I = -1, A = new Map, B = new Set, $ = new Map, H = new Map, V = new Map, W = !1;
        function te(e) { L = l({}, L, e), b.forEach((function (e) { return e(L); })); }
        function ne(n, r) { var a, o; var u, s = null != L.actionData && null != L.navigation.formMethod && ye(L.navigation.formMethod) && "loading" === L.navigation.state && !0 !== (null == (a = n.state) ? void 0 : a._isRedirect); u = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : s ? L.actionData : null; var c = r.loaderData ? se(L.loaderData, r.loaderData, r.matches || [], r.errors) : L.loaderData, f = L.blockers; f.size > 0 && (f = new Map(f), f.forEach((function (e, t) { return f.set(t, Y); }))); var p = !0 === z || null != L.navigation.formMethod && ye(L.navigation.formMethod) && !0 !== (null == (o = n.state) ? void 0 : o._isRedirect); i && (d = i, i = void 0), D || N === e.Pop || (N === e.Push ? t.history.push(n, n.state) : N === e.Replace && t.history.replace(n, n.state)), te(l({}, r, { actionData: u, loaderData: c, historyAction: N, location: n, initialized: !0, navigation: q, revalidation: "idle", restoreScrollPosition: je(n, r.matches || L.matches), preventScrollReset: p, blockers: f })), N = e.Pop, z = !1, D = !1, M = !1, O = [], U = []; }
        function re(n, r, a) {
            return __awaiter(this, void 0, void 0, function () {
                var u, s, f, e_23, _b, t_15, n_16, m, v, y, b, k, t_16, _c, x, E, C;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            P && P.abort(), P = null, N = n, D = !0 === (a && a.startUninterruptedRevalidation), function (e, t) { if (w && S) {
                                var n_17 = Fe(e, t);
                                w[n_17] = S();
                            } }(L.location, L.matches), z = !0 === (a && a.preventScrollReset);
                            u = i || d, s = a && a.overrideNavigation, f = g(u, r, p);
                            if (!f) {
                                e_23 = de(404, { pathname: r.pathname }), _b = fe(u), t_15 = _b.matches, n_16 = _b.route;
                                return [2 /*return*/, (Ue(), void ne(r, { matches: t_15, loaderData: {}, errors: (_d = {}, _d[n_16.id] = e_23, _d) }))];
                            }
                            if (L.initialized && !M && (m = L.location, v = r, m.pathname === v.pathname && m.search === v.search && ("" === m.hash ? "" !== v.hash : m.hash === v.hash || "" !== v.hash)) && !(a && a.submission && ye(a.submission.formMethod)))
                                return [2 /*return*/, void ne(r, { matches: f })];
                            P = new AbortController;
                            k = le(t.history, r, P.signal, a && a.submission);
                            if (!(a && a.pendingError)) return [3 /*break*/, 1];
                            b = (_f = {}, _f[ce(f).route.id] = a.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(a && a.submission && ye(a.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (t, n, r, a, l) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var i, u, s, e_24, t_17;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === l && (l = {}), ke();
                                                    u = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(n, r);
                                                    te({ navigation: u });
                                                    s = Se(a, n);
                                                    if (!(s.route.action || s.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, ae("action", t, s, a, c, o, p)];
                                                case 1:
                                                    if (i = _d.sent(), t.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    i = { type: h.error, error: de(405, { method: t.method, pathname: n.pathname, routeId: s.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!ge(i)) return [3 /*break*/, 5];
                                                    e_24 = l && null != l.replace ? l.replace : i.location === L.location.pathname + L.location.search;
                                                    return [4 /*yield*/, ie(L, i, { submission: r, replace: e_24 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (ve(i)) {
                                                        t_17 = ce(a, s.route.id);
                                                        return [2 /*return*/, (!0 !== (l && l.replace) && (N = e.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[t_17.route.id] = i.error, _b) })];
                                                    }
                                                    if (me(i))
                                                        throw de(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[s.route.id] = i.data, _c) }];
                                            }
                                        });
                                    });
                                }(k, r, a.submission, f, { replace: a.replace })];
                        case 2:
                            t_16 = _g.sent();
                            if (t_16.shortCircuited)
                                return [2 /*return*/];
                            y = t_16.pendingActionData, b = t_16.pendingActionError, s = Ee(r, a.submission), k = new Request(k.url, { signal: k.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (e, n, r, a, o, u, s, c, f) {
                                return __awaiter(this, void 0, void 0, function () { var h, m, v, _b, g, y, e_25, e_26, b, _c, w, k, S, x, e_27, _d, E, C, _, R; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            h = a || Ee(n, o), m = o || u || xe(h), v = i || d, _b = ee(t.history, L, r, m, n, M, O, U, $, B, v, p, c, f), g = _b[0], y = _b[1];
                                            if (Ue((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || g && g.some((function (t) { return t.route.id === e; })); })), I = ++j, 0 === g.length && 0 === y.length) {
                                                e_25 = Te();
                                                return [2 /*return*/, (ne(n, l({ matches: r, loaderData: {}, errors: f || null }, c ? { actionData: c } : {}, e_25 ? { fetchers: new Map(L.fetchers) } : {})), { shortCircuited: !0 })];
                                            }
                                            if (!D) {
                                                y.forEach((function (e) { var t = L.fetchers.get(e.key), n = Ce(void 0, t ? t.data : void 0); L.fetchers.set(e.key, n); }));
                                                e_26 = c || L.actionData;
                                                te(l({ navigation: h }, e_26 ? 0 === Object.keys(e_26).length ? { actionData: null } : { actionData: e_26 } : {}, y.length > 0 ? { fetchers: new Map(L.fetchers) } : {}));
                                            }
                                            y.forEach((function (e) { F.has(e.key) && Le(e.key), e.controller && F.set(e.key, e.controller); }));
                                            b = function () { return y.forEach((function (e) { return Le(e.key); })); };
                                            P && P.signal.addEventListener("abort", b);
                                            return [4 /*yield*/, he(L.matches, r, g, y, e)];
                                        case 1:
                                            _c = _f.sent(), w = _c.results, k = _c.loaderResults, S = _c.fetcherResults;
                                            if (e.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            P && P.signal.removeEventListener("abort", b), y.forEach((function (e) { return F.delete(e.key); }));
                                            x = pe(w);
                                            if (!x) return [3 /*break*/, 3];
                                            if (x.idx >= g.length) {
                                                e_27 = y[x.idx - g.length].key;
                                                B.add(e_27);
                                            }
                                            return [4 /*yield*/, ie(L, x.result, { replace: s })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = ue(L, r, g, k, f, y, S, H), E = _d.loaderData, C = _d.errors;
                                            H.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && H.delete(t); })); }));
                                            _ = Te(), R = ze(I);
                                            return [2 /*return*/, l({ loaderData: E, errors: C }, _ || R || y.length > 0 ? { fetchers: new Map(L.fetchers) } : {})];
                                    }
                                }); });
                            }(k, r, f, s, a && a.submission, a && a.fetcherSubmission, a && a.replace, y, b)];
                        case 4:
                            _c = _g.sent(), x = _c.shortCircuited, E = _c.loaderData, C = _c.errors;
                            x || (P = null, ne(r, l({ matches: f }, y ? { actionData: y } : {}, { loaderData: E, errors: C })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function oe(e) { return L.fetchers.get(e) || K; }
        function ie(a, o, i) {
            return __awaiter(this, void 0, void 0, function () { var _b, s, c, d, h, e_28, r_11, m, _c, v, g, y, b, e_29; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === i ? {} : i, s = _b.submission, c = _b.fetcherSubmission, d = _b.replace;
                        o.revalidate && (M = !0);
                        h = f(a.location, o.location, { _isRedirect: !0 });
                        if (u(h, "Expected a location on the redirect navigation"), r) {
                            e_28 = !1;
                            if (o.reloadDocument)
                                e_28 = !0;
                            else if (X.test(o.location)) {
                                r_11 = t.history.createURL(o.location);
                                e_28 = r_11.origin !== n.location.origin || null == T(r_11.pathname, p);
                            }
                            if (e_28)
                                return [2 /*return*/, void (d ? n.location.replace(o.location) : n.location.assign(o.location))];
                        }
                        P = null;
                        m = !0 === d ? e.Replace : e.Push, _c = a.navigation, v = _c.formMethod, g = _c.formAction, y = _c.formEncType;
                        !s && !c && v && g && y && (s = xe(a.navigation));
                        b = s || c;
                        if (!(Q.has(o.status) && b && ye(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, re(m, h, { submission: l({}, b, { formAction: o.location }), preventScrollReset: z })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_29 = Ee(h, s);
                        return [4 /*yield*/, re(m, h, { overrideNavigation: e_29, fetcherSubmission: c, preventScrollReset: z })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function he(e, n, r, a, l) {
            return __awaiter(this, void 0, void 0, function () { var i, u, s; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return ae("loader", l, e, n, c, o, p); })), true), a.map((function (e) { return e.matches && e.match && e.controller ? ae("loader", le(t.history, e.path, e.controller.signal), e.match, e.matches, c, o, p) : { type: h.error, error: de(404, { pathname: e.path }) }; })), true))];
                    case 1:
                        i = _b.sent(), u = i.slice(0, r.length), s = i.slice(r.length);
                        return [4 /*yield*/, Promise.all([be(e, r, u, u.map((function () { return l.signal; })), !1, L.loaderData), be(e, a.map((function (e) { return e.match; })), s, a.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: i, loaderResults: u, fetcherResults: s })];
                }
            }); });
        }
        function ke() { M = !0, O.push.apply(O, Ue()), $.forEach((function (e, t) { F.has(t) && (U.push(t), Le(t)); })); }
        function Pe(e, t, n) {
            var _b;
            var r = ce(L.matches, t);
            Re(e), te({ errors: (_b = {}, _b[r.route.id] = n, _b), fetchers: new Map(L.fetchers) });
        }
        function Re(e) { var t = L.fetchers.get(e); !F.has(e) || t && "loading" === t.state && A.has(e) || Le(e), $.delete(e), A.delete(e), B.delete(e), L.fetchers.delete(e); }
        function Le(e) { var t = F.get(e); u(t, "Expected fetch controller: " + e), t.abort(), F.delete(e); }
        function Ne(e) { for (var _b = 0, e_30 = e; _b < e_30.length; _b++) {
            var t_18 = e_30[_b];
            var e_31 = _e(oe(t_18).data);
            L.fetchers.set(t_18, e_31);
        } }
        function Te() { var e = [], t = !1; for (var _b = 0, B_1 = B; _b < B_1.length; _b++) {
            var n_18 = B_1[_b];
            var r_12 = L.fetchers.get(n_18);
            u(r_12, "Expected fetcher: " + n_18), "loading" === r_12.state && (B.delete(n_18), e.push(n_18), t = !0);
        } return Ne(e), t; }
        function ze(e) { var t = []; for (var _b = 0, A_1 = A; _b < A_1.length; _b++) {
            var _c = A_1[_b], n_19 = _c[0], r_13 = _c[1];
            if (r_13 < e) {
                var e_32 = L.fetchers.get(n_19);
                u(e_32, "Expected fetcher: " + n_19), "loading" === e_32.state && (Le(n_19), A.delete(n_19), t.push(n_19));
            }
        } return Ne(t), t.length > 0; }
        function De(e) { L.blockers.delete(e), V.delete(e); }
        function Me(e, t) { var n = L.blockers.get(e) || Y; u("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(L.blockers); r.set(e, t), te({ blockers: r }); }
        function Oe(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === V.size)
            return; V.size > 1 && s(!1, "A router only supports one blocker at a time"); var a = Array.from(V.entries()), _b = a[a.length - 1], l = _b[0], o = _b[1], i = L.blockers.get(l); return i && "proceeding" === i.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? l : void 0; }
        function Ue(e) { var t = []; return H.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), H.delete(r)); })), t; }
        function Fe(e, t) { return k && k(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, L.loaderData); }))) || e.key; }
        function je(e, t) { if (w) {
            var n_20 = Fe(e, t), r_14 = w[n_20];
            if ("number" == typeof r_14)
                return r_14;
        } return null; }
        return _ = { get basename() { return p; }, get state() { return L; }, get routes() { return d; }, initialize: function () { return y = t.history.listen((function (e) { var n = e.action, r = e.location, a = e.delta; if (W)
                return void (W = !1); s(0 === V.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var l = Oe({ currentLocation: L.location, nextLocation: r, historyAction: n }); return l && null != a ? (W = !0, t.history.go(-1 * a), void Me(l, { state: "blocked", location: r, proceed: function () { Me(l, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), t.history.go(a); }, reset: function () { var e = new Map(L.blockers); e.set(l, Y), te({ blockers: e }); } })) : re(n, r); })), L.initialized || re(e.Pop, L.location), _; }, subscribe: function (e) { return b.add(e), function () { return b.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (w = e, S = t, k = n || null, !x && L.navigation === q) {
                x = !0;
                var e_33 = je(L.location, L.matches);
                null != e_33 && te({ restoreScrollPosition: e_33 });
            } return function () { w = null, S = null, k = null; }; }, navigate: function n(r, a) {
                return __awaiter(this, void 0, void 0, function () { var o, _b, i, u, s, c, d, h, v, g, y; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof r)
                                return [2 /*return*/, void t.history.go(r)];
                            o = J(L.location, L.matches, p, m.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative), _b = Z(m.v7_normalizeFormMethod, !1, o, a), i = _b.path, u = _b.submission, s = _b.error, c = L.location, d = f(L.location, i, a && a.state);
                            d = l({}, d, t.history.encodeLocation(d));
                            h = a && null != a.replace ? a.replace : void 0, v = e.Push;
                            !0 === h ? v = e.Replace : !1 === h || null != u && ye(u.formMethod) && u.formAction === L.location.pathname + L.location.search && (v = e.Replace);
                            g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0, y = Oe({ currentLocation: c, nextLocation: d, historyAction: v });
                            if (!!y) return [3 /*break*/, 2];
                            return [4 /*yield*/, re(v, d, { submission: u, pendingError: s, preventScrollReset: g, replace: a && a.replace })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            Me(y, { state: "blocked", location: d, proceed: function () { Me(y, { state: "proceeding", proceed: void 0, reset: void 0, location: d }), n(r, a); }, reset: function () { var e = new Map(L.blockers); e.set(y, Y), te({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (e, n, r, s) { if (a)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); F.has(e) && Le(e); var f = i || d, h = J(L.location, L.matches, p, m.v7_prependBasename, r, n, null == s ? void 0 : s.relative), v = g(f, h, p); if (!v)
                return void Pe(e, n, de(404, { pathname: h })); var _b = Z(m.v7_normalizeFormMethod, !0, h, s), y = _b.path, b = _b.submission, w = _b.error; if (w)
                return void Pe(e, n, w); var k = Se(v, y); z = !0 === (s && s.preventScrollReset), b && ye(b.formMethod) ? function (e, n, r, a, s, f) {
                return __awaiter(this, void 0, void 0, function () {
                    var t_19, h, m, v, y, b, t_20, t_21, w, k, S, x, E, C, _b, _, R, T, _c, z, D, V, W, e_34, _d, Q, q, t_22, K;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (ke(), $.delete(e), !a.route.action && !a.route.lazy) {
                                    t_19 = de(405, { method: f.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void Pe(e, n, t_19)];
                                }
                                h = function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(f, L.fetchers.get(e));
                                L.fetchers.set(e, h), te({ fetchers: new Map(L.fetchers) });
                                m = new AbortController, v = le(t.history, r, m.signal, f);
                                F.set(e, m);
                                y = j;
                                return [4 /*yield*/, ae("action", v, a, s, c, o, p)];
                            case 1:
                                b = _g.sent();
                                if (v.signal.aborted)
                                    return [2 /*return*/, void (F.get(e) === m && F.delete(e))];
                                if (ge(b)) {
                                    if (F.delete(e), I > y) {
                                        t_20 = _e(void 0);
                                        return [2 /*return*/, (L.fetchers.set(e, t_20), void te({ fetchers: new Map(L.fetchers) }))];
                                    }
                                    {
                                        B.add(e);
                                        t_21 = Ce(f);
                                        return [2 /*return*/, (L.fetchers.set(e, t_21), te({ fetchers: new Map(L.fetchers) }), ie(L, b, { fetcherSubmission: f }))];
                                    }
                                }
                                if (ve(b))
                                    return [2 /*return*/, void Pe(e, n, b.error)];
                                if (me(b))
                                    throw de(400, { type: "defer-action" });
                                w = L.navigation.location || L.location, k = le(t.history, w, m.signal), S = i || d, x = "idle" !== L.navigation.state ? g(S, L.navigation.location, p) : L.matches;
                                u(x, "Didn't find any matches after fetcher action");
                                E = ++j;
                                A.set(e, E);
                                C = Ce(f, b.data);
                                L.fetchers.set(e, C);
                                _b = ee(t.history, L, x, f, w, M, O, U, $, B, S, p, (_f = {}, _f[a.route.id] = b.data, _f), void 0), _ = _b[0], R = _b[1];
                                R.filter((function (t) { return t.key !== e; })).forEach((function (e) { var t = e.key, n = L.fetchers.get(t), r = Ce(void 0, n ? n.data : void 0); L.fetchers.set(t, r), F.has(t) && Le(t), e.controller && F.set(t, e.controller); })), te({ fetchers: new Map(L.fetchers) });
                                T = function () { return R.forEach((function (e) { return Le(e.key); })); };
                                m.signal.addEventListener("abort", T);
                                return [4 /*yield*/, he(L.matches, x, _, R, k)];
                            case 2:
                                _c = _g.sent(), z = _c.results, D = _c.loaderResults, V = _c.fetcherResults;
                                if (m.signal.aborted)
                                    return [2 /*return*/];
                                m.signal.removeEventListener("abort", T), A.delete(e), F.delete(e), R.forEach((function (e) { return F.delete(e.key); }));
                                W = pe(z);
                                if (W) {
                                    if (W.idx >= _.length) {
                                        e_34 = R[W.idx - _.length].key;
                                        B.add(e_34);
                                    }
                                    return [2 /*return*/, ie(L, W.result)];
                                }
                                _d = ue(L, L.matches, _, D, void 0, R, V, H), Q = _d.loaderData, q = _d.errors;
                                if (L.fetchers.has(e)) {
                                    t_22 = _e(b.data);
                                    L.fetchers.set(e, t_22);
                                }
                                K = ze(E);
                                "loading" === L.navigation.state && E > I ? (u(N, "Expected pending action"), P && P.abort(), ne(L.navigation.location, { matches: x, loaderData: Q, errors: q, fetchers: new Map(L.fetchers) })) : (te(l({ errors: q, loaderData: se(L.loaderData, Q, x, q) }, K || R.length > 0 ? { fetchers: new Map(L.fetchers) } : {})), M = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, y, k, v, b) : ($.set(e, { routeId: n, path: y }), function (e, n, r, a, l, i) {
                return __awaiter(this, void 0, void 0, function () {
                    var s, f, d, h, m, v, _b, t_23, t_24, g;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                s = L.fetchers.get(e), f = Ce(i, s ? s.data : void 0);
                                L.fetchers.set(e, f), te({ fetchers: new Map(L.fetchers) });
                                d = new AbortController, h = le(t.history, r, d.signal);
                                F.set(e, d);
                                m = j;
                                return [4 /*yield*/, ae("loader", h, a, l, c, o, p)];
                            case 1:
                                v = _d.sent();
                                _b = me(v);
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, we(v, h.signal, !0)];
                            case 2:
                                _b = (v = (_d.sent()) || v);
                                _d.label = 3;
                            case 3:
                                if (_b, F.get(e) === d && F.delete(e), h.signal.aborted)
                                    return [2 /*return*/];
                                if (!ge(v)) return [3 /*break*/, 5];
                                if (I > m) {
                                    t_23 = _e(void 0);
                                    return [2 /*return*/, (L.fetchers.set(e, t_23), void te({ fetchers: new Map(L.fetchers) }))];
                                }
                                B.add(e);
                                return [4 /*yield*/, ie(L, v)];
                            case 4: return [2 /*return*/, void (_d.sent())];
                            case 5:
                                if (ve(v)) {
                                    t_24 = ce(L.matches, n);
                                    return [2 /*return*/, (L.fetchers.delete(e), void te({ fetchers: new Map(L.fetchers), errors: (_c = {}, _c[t_24.route.id] = v.error, _c) }))];
                                }
                                u(!me(v), "Unhandled fetcher deferred data");
                                g = _e(v.data);
                                L.fetchers.set(e, g), te({ fetchers: new Map(L.fetchers) });
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, y, k, v, b)); }, revalidate: function () { ke(), te({ revalidation: "loading" }), "submitting" !== L.navigation.state && ("idle" !== L.navigation.state ? re(N || L.historyAction, L.navigation.location, { overrideNavigation: L.navigation }) : re(L.historyAction, L.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (e) { return t.history.createHref(e); }, encodeLocation: function (e) { return t.history.encodeLocation(e); }, getFetcher: oe, deleteFetcher: Re, dispose: function () { y && y(), b.clear(), P && P.abort(), L.fetchers.forEach((function (e, t) { return Re(t); })), L.blockers.forEach((function (e, t) { return De(t); })); }, getBlocker: function (e, t) { var n = L.blockers.get(e) || Y; return V.get(e) !== t && V.set(e, t), n; }, deleteBlocker: De, _internalFetchControllers: F, _internalActiveDeferreds: H, _internalSetRoutes: function (e) { c = {}, i = v(e, o, void 0, c); } }, _;
    }({ basename: void 0, future: Je({}, void 0, { v7_prependBasename: !0 }), history: (gt = { window: void 0 }, void 0 === gt && (gt = {}), function (t, n, r, a) { void 0 === a && (a = {}); var _b = a.window, o = _b === void 0 ? document.defaultView : _b, _c = a.v5Compat, s = _c === void 0 ? !1 : _c, p = o.history, h = e.Pop, m = null, v = g(); function g() { return (p.state || { idx: null }).idx; } function y() { h = e.Pop; var t = g(), n = null == t ? null : t - v; v = t, m && m({ action: h, location: w.location, delta: n }); } function b(e) { var t = "null" !== o.location.origin ? o.location.origin : o.location.href, n = "string" == typeof e ? e : d(e); return u(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, p.replaceState(l({}, p.state, { idx: v }), "")); var w = { get action() { return h; }, get location() { return t(o, p); }, listen: function (e) { if (m)
                throw new Error("A history only accepts one active listener"); return o.addEventListener(i, y), m = e, function () { o.removeEventListener(i, y), m = null; }; }, createHref: function (e) { return n(o, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (t, n) { h = e.Push; var a = f(w.location, t, n); r && r(a, t), v = g() + 1; var l = c(a, v), i = w.createHref(a); try {
                p.pushState(l, "", i);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                o.location.assign(i);
            } s && m && m({ action: h, location: w.location, delta: 1 }); }, replace: function (t, n) { h = e.Replace; var a = f(w.location, t, n); r && r(a, t), v = g(); var l = c(a, v), o = w.createHref(a); p.replaceState(l, "", o), s && m && m({ action: h, location: w.location, delta: 0 }); }, go: function (e) { return p.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return f("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : d(t); }), null, gt)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = Je({}, t, { errors: et(t.errors) })), t; }(), routes: vt, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: n.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: n.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; } }).initialize()); yt.render((0, t.jsx)((function (e) { var t = e.fallbackElement, r = e.router, a = e.future, _b = n.useState(r.state), l = _b[0], o = _b[1], i = (a || {}).v7_startTransition, u = n.useCallback((function (e) { i && Ke ? Ke((function () { return o(e); })) : o(e); }), [o, i]); n.useLayoutEffect((function () { return r.subscribe(u); }), [r, u]); var s = n.useMemo((function () { return ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: function (e) { return r.navigate(e); }, push: function (e, t, n) { return r.navigate(e, { state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); }, replace: function (e, t, n) { return r.navigate(e, { replace: !0, state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); } }); }), [r]), c = r.basename || "/", f = n.useMemo((function () { return ({ router: r, navigator: s, static: !1, basename: c }); }), [r, s, c]); return n.createElement(n.Fragment, null, n.createElement(Re.Provider, { value: f }, n.createElement(Le.Provider, { value: l }, n.createElement(Ge, { basename: c, location: l.location, navigationType: l.historyAction, navigator: s }, l.initialized ? n.createElement(Ye, { routes: r.routes, state: l }) : t))), null); }), { router: bt })); })();
})();
