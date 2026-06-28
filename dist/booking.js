var na = { exports: {} }, Qr = {}, ua = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zu = Symbol.for("react.element"), _c = Symbol.for("react.portal"), Dc = Symbol.for("react.fragment"), Pc = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), Ac = Symbol.for("react.context"), Lc = Symbol.for("react.forward_ref"), Bc = Symbol.for("react.suspense"), Tc = Symbol.for("react.memo"), zc = Symbol.for("react.lazy"), Ri = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != "object" ? null : (e = Ri && e[Ri] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ra = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, la = Object.assign, oa = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = oa, this.updater = n || ra;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ia() {
}
ia.prototype = Hn.prototype;
function Ro(e, t, n) {
  this.props = e, this.context = t, this.refs = oa, this.updater = n || ra;
}
var Io = Ro.prototype = new ia();
Io.constructor = Ro;
la(Io, Hn.prototype);
Io.isPureReactComponent = !0;
var Ii = Array.isArray, sa = Object.prototype.hasOwnProperty, $o = { current: null }, aa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ca(e, t, n) {
  var u, r = {}, l = null, o = null;
  if (t != null) for (u in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) sa.call(t, u) && !aa.hasOwnProperty(u) && (r[u] = t[u]);
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  if (e && e.defaultProps) for (u in i = e.defaultProps, i) r[u] === void 0 && (r[u] = i[u]);
  return { $$typeof: zu, type: e, key: l, ref: o, props: r, _owner: $o.current };
}
function Rc(e, t) {
  return { $$typeof: zu, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Oo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zu;
}
function Ic(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var $i = /\/+/g;
function al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ic("" + e.key) : t.toString(36);
}
function cr(e, t, n, u, r) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (l) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case zu:
        case _c:
          o = !0;
      }
  }
  if (o) return o = e, r = r(o), e = u === "" ? "." + al(o, 0) : u, Ii(r) ? (n = "", e != null && (n = e.replace($i, "$&/") + "/"), cr(r, t, n, "", function(c) {
    return c;
  })) : r != null && (Oo(r) && (r = Rc(r, n + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace($i, "$&/") + "/") + e)), t.push(r)), 1;
  if (o = 0, u = u === "" ? "." : u + ":", Ii(e)) for (var i = 0; i < e.length; i++) {
    l = e[i];
    var s = u + al(l, i);
    o += cr(l, t, n, s, r);
  }
  else if (s = Mc(e), typeof s == "function") for (e = s.call(e), i = 0; !(l = e.next()).done; ) l = l.value, s = u + al(l, i++), o += cr(l, t, n, s, r);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Vu(e, t, n) {
  if (e == null) return e;
  var u = [], r = 0;
  return cr(e, u, "", "", function(l) {
    return t.call(n, l, r++);
  }), u;
}
function $c(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null }, dr = { transition: null }, Oc = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: dr, ReactCurrentOwner: $o };
function da() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: Vu, forEach: function(e, t, n) {
  Vu(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vu(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vu(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Oo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = Hn;
I.Fragment = Dc;
I.Profiler = Fc;
I.PureComponent = Ro;
I.StrictMode = Pc;
I.Suspense = Bc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
I.act = da;
I.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var u = la({}, e.props), r = e.key, l = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, o = $o.current), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) sa.call(t, s) && !aa.hasOwnProperty(s) && (u[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) u.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    u.children = i;
  }
  return { $$typeof: zu, type: e.type, key: r, ref: l, props: u, _owner: o };
};
I.createContext = function(e) {
  return e = { $$typeof: Ac, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jc, _context: e }, e.Consumer = e;
};
I.createElement = ca;
I.createFactory = function(e) {
  var t = ca.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: Lc, render: e };
};
I.isValidElement = Oo;
I.lazy = function(e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: $c };
};
I.memo = function(e, t) {
  return { $$typeof: Tc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = dr.transition;
  dr.transition = {};
  try {
    e();
  } finally {
    dr.transition = t;
  }
};
I.unstable_act = da;
I.useCallback = function(e, t) {
  return Le.current.useCallback(e, t);
};
I.useContext = function(e) {
  return Le.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return Le.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return Le.current.useEffect(e, t);
};
I.useId = function() {
  return Le.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return Le.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return Le.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return Le.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return Le.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return Le.current.useRef(e);
};
I.useState = function(e) {
  return Le.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return Le.current.useTransition();
};
I.version = "18.3.1";
ua.exports = I;
var k = ua.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc = k, Uc = Symbol.for("react.element"), Wc = Symbol.for("react.fragment"), Hc = Object.prototype.hasOwnProperty, Vc = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fa(e, t, n) {
  var u, r = {}, l = null, o = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (u in t) Hc.call(t, u) && !Qc.hasOwnProperty(u) && (r[u] = t[u]);
  if (e && e.defaultProps) for (u in t = e.defaultProps, t) r[u] === void 0 && (r[u] = t[u]);
  return { $$typeof: Uc, type: e, key: l, ref: o, props: r, _owner: Vc.current };
}
Qr.Fragment = Wc;
Qr.jsx = fa;
Qr.jsxs = fa;
na.exports = Qr;
var p = na.exports, pa = { exports: {} }, Qe = {}, ma = { exports: {} }, ha = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(D, B) {
    var z = D.length;
    D.push(B);
    e: for (; 0 < z; ) {
      var V = z - 1 >>> 1, ue = D[V];
      if (0 < r(ue, B)) D[V] = B, D[z] = ue, z = V;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function u(D) {
    if (D.length === 0) return null;
    var B = D[0], z = D.pop();
    if (z !== B) {
      D[0] = z;
      e: for (var V = 0, ue = D.length, Pt = ue >>> 1; V < Pt; ) {
        var G = 2 * (V + 1) - 1, Oe = D[G], pe = G + 1, at = D[pe];
        if (0 > r(Oe, z)) pe < ue && 0 > r(at, Oe) ? (D[V] = at, D[pe] = z, V = pe) : (D[V] = Oe, D[G] = z, V = G);
        else if (pe < ue && 0 > r(at, z)) D[V] = at, D[pe] = z, V = pe;
        else break e;
      }
    }
    return B;
  }
  function r(D, B) {
    var z = D.sortIndex - B.sortIndex;
    return z !== 0 ? z : D.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var s = [], c = [], v = 1, g = null, h = 3, x = !1, w = !1, C = !1, M = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(D) {
    for (var B = n(c); B !== null; ) {
      if (B.callback === null) u(c);
      else if (B.startTime <= D) u(c), B.sortIndex = B.expirationTime, t(s, B);
      else break;
      B = n(c);
    }
  }
  function m(D) {
    if (C = !1, d(D), !w) if (n(s) !== null) w = !0, Y(S);
    else {
      var B = n(c);
      B !== null && Te(m, B.startTime - D);
    }
  }
  function S(D, B) {
    w = !1, C && (C = !1, f(P), P = -1), x = !0;
    var z = h;
    try {
      for (d(B), g = n(s); g !== null && (!(g.expirationTime > B) || D && !R()); ) {
        var V = g.callback;
        if (typeof V == "function") {
          g.callback = null, h = g.priorityLevel;
          var ue = V(g.expirationTime <= B);
          B = e.unstable_now(), typeof ue == "function" ? g.callback = ue : g === n(s) && u(s), d(B);
        } else u(s);
        g = n(s);
      }
      if (g !== null) var Pt = !0;
      else {
        var G = n(c);
        G !== null && Te(m, G.startTime - B), Pt = !1;
      }
      return Pt;
    } finally {
      g = null, h = z, x = !1;
    }
  }
  var E = !1, _ = null, P = -1, $ = 5, j = -1;
  function R() {
    return !(e.unstable_now() - j < $);
  }
  function De() {
    if (_ !== null) {
      var D = e.unstable_now();
      j = D;
      var B = !0;
      try {
        B = _(!0, D);
      } finally {
        B ? oe() : (E = !1, _ = null);
      }
    } else E = !1;
  }
  var oe;
  if (typeof a == "function") oe = function() {
    a(De);
  };
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel(), Pe = U.port2;
    U.port1.onmessage = De, oe = function() {
      Pe.postMessage(null);
    };
  } else oe = function() {
    M(De, 0);
  };
  function Y(D) {
    _ = D, E || (E = !0, oe());
  }
  function Te(D, B) {
    P = M(function() {
      D(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    w || x || (w = !0, Y(S));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(D) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = h;
    }
    var z = h;
    h = B;
    try {
      return D();
    } finally {
      h = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, B) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var z = h;
    h = D;
    try {
      return B();
    } finally {
      h = z;
    }
  }, e.unstable_scheduleCallback = function(D, B, z) {
    var V = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? V + z : V) : z = V, D) {
      case 1:
        var ue = -1;
        break;
      case 2:
        ue = 250;
        break;
      case 5:
        ue = 1073741823;
        break;
      case 4:
        ue = 1e4;
        break;
      default:
        ue = 5e3;
    }
    return ue = z + ue, D = { id: v++, callback: B, priorityLevel: D, startTime: z, expirationTime: ue, sortIndex: -1 }, z > V ? (D.sortIndex = z, t(c, D), n(s) === null && D === n(c) && (C ? (f(P), P = -1) : C = !0, Te(m, z - V))) : (D.sortIndex = ue, t(s, D), w || x || (w = !0, Y(S))), D;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(D) {
    var B = h;
    return function() {
      var z = h;
      h = B;
      try {
        return D.apply(this, arguments);
      } finally {
        h = z;
      }
    };
  };
})(ha);
ma.exports = ha;
var Kc = ma.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = k, Ve = Kc;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var va = /* @__PURE__ */ new Set(), yu = {};
function hn(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (yu[e] = t, e = 0; e < t.length; e++) va.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ol = Object.prototype.hasOwnProperty, Gc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oi = {}, bi = {};
function Xc(e) {
  return Ol.call(bi, e) ? !0 : Ol.call(Oi, e) ? !1 : Gc.test(e) ? bi[e] = !0 : (Oi[e] = !0, !1);
}
function Zc(e, t, n, u) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return u ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Jc(e, t, n, u) {
  if (t === null || typeof t > "u" || Zc(e, t, n, u)) return !0;
  if (u) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Be(e, t, n, u, r, l, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = u, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function Uo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bo,
    Uo
  );
  xe[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bo, Uo);
  xe[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bo, Uo);
  xe[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wo(e, t, n, u) {
  var r = xe.hasOwnProperty(t) ? xe[t] : null;
  (r !== null ? r.type !== 0 : u || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jc(t, n, r, u) && (n = null), u || r === null ? Xc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName, u = r.attributeNamespace, n === null ? e.removeAttribute(t) : (r = r.type, n = r === 3 || r === 4 && n === !0 ? "" : "" + n, u ? e.setAttributeNS(u, t, n) : e.setAttribute(t, n))));
}
var Dt = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qu = Symbol.for("react.element"), kn = Symbol.for("react.portal"), xn = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), ga = Symbol.for("react.provider"), ya = Symbol.for("react.context"), Vo = Symbol.for("react.forward_ref"), Ul = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), Qo = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), ka = Symbol.for("react.offscreen"), Ui = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, cl;
function ru(e) {
  if (cl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    cl = t && t[1] || "";
  }
  return `
` + cl + e;
}
var dl = !1;
function fl(e, t) {
  if (!e || dl) return "";
  dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var u = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        u = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        u = c;
      }
      e();
    }
  } catch (c) {
    if (c && u && typeof c.stack == "string") {
      for (var r = c.stack.split(`
`), l = u.stack.split(`
`), o = r.length - 1, i = l.length - 1; 1 <= o && 0 <= i && r[o] !== l[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (r[o] !== l[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || r[o] !== l[i]) {
              var s = `
` + r[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    dl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ru(e) : "";
}
function qc(e) {
  switch (e.tag) {
    case 5:
      return ru(e.type);
    case 16:
      return ru("Lazy");
    case 13:
      return ru("Suspense");
    case 19:
      return ru("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = fl(e.type, !1), e;
    case 11:
      return e = fl(e.type.render, !1), e;
    case 1:
      return e = fl(e.type, !0), e;
    default:
      return "";
  }
}
function Hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case kn:
      return "Portal";
    case bl:
      return "Profiler";
    case Ho:
      return "StrictMode";
    case Ul:
      return "Suspense";
    case Wl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ya:
      return (e.displayName || "Context") + ".Consumer";
    case ga:
      return (e._context.displayName || "Context") + ".Provider";
    case Vo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qo:
      return t = e.displayName || null, t !== null ? t : Hl(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Hl(e(t));
      } catch {
      }
  }
  return null;
}
function e4(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Hl(t);
    case 8:
      return t === Ho ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function t4(e) {
  var t = xa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), u = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var r = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return r.call(this);
    }, set: function(o) {
      u = "" + o, l.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return u;
    }, setValue: function(o) {
      u = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ku(e) {
  e._valueTracker || (e._valueTracker = t4(e));
}
function wa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), u = "";
  return e && (u = xa(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== n ? (t.setValue(e), !0) : !1;
}
function Sr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vl(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, u = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: u, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sa(e, t) {
  t = t.checked, t != null && Wo(e, "checked", t, !1);
}
function Ql(e, t) {
  Sa(e, t);
  var n = Yt(t.value), u = t.type;
  if (n != null) u === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (u === "submit" || u === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kl(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var u = t.type;
    if (!(u !== "submit" && u !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Kl(e, t, n) {
  (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lu = Array.isArray;
function An(e, t, n, u) {
  if (e = e.options, t) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && u && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        e[r].selected = !0, u && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Vi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (lu(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function Ea(e, t) {
  var n = Yt(t.value), u = Yt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), u != null && (e.defaultValue = "" + u);
}
function Qi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ca(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ca(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yu, Na = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, u, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, u, r);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Yu = Yu || document.createElement("div"), Yu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ku(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var su = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, n4 = ["Webkit", "ms", "Moz", "O"];
Object.keys(su).forEach(function(e) {
  n4.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), su[t] = su[e];
  });
});
function _a(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || su.hasOwnProperty(e) && su[e] ? ("" + t).trim() : t + "px";
}
function Da(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var u = n.indexOf("--") === 0, r = _a(n, t[n], u);
    n === "float" && (n = "cssFloat"), u ? e.setProperty(n, r) : e[n] = r;
  }
}
var u4 = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xl(e, t) {
  if (t) {
    if (u4[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Zl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Jl = null;
function Ko(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ql = null, Ln = null, Bn = null;
function Ki(e) {
  if (e = Iu(e)) {
    if (typeof ql != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Zr(t), ql(e.stateNode, e.type, t));
  }
}
function Pa(e) {
  Ln ? Bn ? Bn.push(e) : Bn = [e] : Ln = e;
}
function Fa() {
  if (Ln) {
    var e = Ln, t = Bn;
    if (Bn = Ln = null, Ki(e), t) for (e = 0; e < t.length; e++) Ki(t[e]);
  }
}
function ja(e, t) {
  return e(t);
}
function Aa() {
}
var pl = !1;
function La(e, t, n) {
  if (pl) return e(t, n);
  pl = !0;
  try {
    return ja(e, t, n);
  } finally {
    pl = !1, (Ln !== null || Bn !== null) && (Aa(), Fa());
  }
}
function xu(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var u = Zr(n);
  if (u === null) return null;
  n = u[t];
  e: switch (t) {
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
      (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var eo = !1;
if (Et) try {
  var Zn = {};
  Object.defineProperty(Zn, "passive", { get: function() {
    eo = !0;
  } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
} catch {
  eo = !1;
}
function r4(e, t, n, u, r, l, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var au = !1, Er = null, Cr = !1, to = null, l4 = { onError: function(e) {
  au = !0, Er = e;
} };
function o4(e, t, n, u, r, l, o, i, s) {
  au = !1, Er = null, r4.apply(l4, arguments);
}
function i4(e, t, n, u, r, l, o, i, s) {
  if (o4.apply(this, arguments), au) {
    if (au) {
      var c = Er;
      au = !1, Er = null;
    } else throw Error(N(198));
    Cr || (Cr = !0, to = c);
  }
}
function vn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ba(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Yi(e) {
  if (vn(e) !== e) throw Error(N(188));
}
function s4(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, u = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var l = r.alternate;
    if (l === null) {
      if (u = r.return, u !== null) {
        n = u;
        continue;
      }
      break;
    }
    if (r.child === l.child) {
      for (l = r.child; l; ) {
        if (l === n) return Yi(r), e;
        if (l === u) return Yi(r), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== u.return) n = r, u = l;
    else {
      for (var o = !1, i = r.child; i; ) {
        if (i === n) {
          o = !0, n = r, u = l;
          break;
        }
        if (i === u) {
          o = !0, u = r, n = l;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = l.child; i; ) {
          if (i === n) {
            o = !0, n = l, u = r;
            break;
          }
          if (i === u) {
            o = !0, u = l, n = r;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== u) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ta(e) {
  return e = s4(e), e !== null ? za(e) : null;
}
function za(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = za(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ma = Ve.unstable_scheduleCallback, Gi = Ve.unstable_cancelCallback, a4 = Ve.unstable_shouldYield, c4 = Ve.unstable_requestPaint, le = Ve.unstable_now, d4 = Ve.unstable_getCurrentPriorityLevel, Yo = Ve.unstable_ImmediatePriority, Ra = Ve.unstable_UserBlockingPriority, Nr = Ve.unstable_NormalPriority, f4 = Ve.unstable_LowPriority, Ia = Ve.unstable_IdlePriority, Kr = null, ht = null;
function p4(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(Kr, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ot = Math.clz32 ? Math.clz32 : v4, m4 = Math.log, h4 = Math.LN2;
function v4(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (m4(e) / h4 | 0) | 0;
}
var Gu = 64, Xu = 4194304;
function ou(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var u = 0, r = e.suspendedLanes, l = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~r;
    i !== 0 ? u = ou(i) : (l &= o, l !== 0 && (u = ou(l)));
  } else o = n & ~r, o !== 0 ? u = ou(o) : l !== 0 && (u = ou(l));
  if (u === 0) return 0;
  if (t !== 0 && t !== u && !(t & r) && (r = u & -u, l = t & -t, r >= l || r === 16 && (l & 4194240) !== 0)) return t;
  if (u & 4 && (u |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= u; 0 < t; ) n = 31 - ot(t), r = 1 << n, u |= e[n], t &= ~r;
  return u;
}
function g4(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function y4(e, t) {
  for (var n = e.suspendedLanes, u = e.pingedLanes, r = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var o = 31 - ot(l), i = 1 << o, s = r[o];
    s === -1 ? (!(i & n) || i & u) && (r[o] = g4(i, t)) : s <= t && (e.expiredLanes |= i), l &= ~i;
  }
}
function no(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $a() {
  var e = Gu;
  return Gu <<= 1, !(Gu & 4194240) && (Gu = 64), e;
}
function ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mu(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n;
}
function k4(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var u = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - ot(n), l = 1 << r;
    t[r] = 0, u[r] = -1, e[r] = -1, n &= ~l;
  }
}
function Go(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var u = 31 - ot(n), r = 1 << u;
    r & t | e[u] & t && (e[u] |= t), n &= ~r;
  }
}
var H = 0;
function Oa(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ba, Xo, Ua, Wa, Ha, uo = !1, Zu = [], Ot = null, bt = null, Ut = null, wu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Mt = [], x4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      wu.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Su.delete(t.pointerId);
  }
}
function Jn(e, t, n, u, r, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: u, nativeEvent: l, targetContainers: [r] }, t !== null && (t = Iu(t), t !== null && Xo(t)), e) : (e.eventSystemFlags |= u, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
}
function w4(e, t, n, u, r) {
  switch (t) {
    case "focusin":
      return Ot = Jn(Ot, e, t, n, u, r), !0;
    case "dragenter":
      return bt = Jn(bt, e, t, n, u, r), !0;
    case "mouseover":
      return Ut = Jn(Ut, e, t, n, u, r), !0;
    case "pointerover":
      var l = r.pointerId;
      return wu.set(l, Jn(wu.get(l) || null, e, t, n, u, r)), !0;
    case "gotpointercapture":
      return l = r.pointerId, Su.set(l, Jn(Su.get(l) || null, e, t, n, u, r)), !0;
  }
  return !1;
}
function Va(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ba(n), t !== null) {
          e.blockedOn = t, Ha(e.priority, function() {
            Ua(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var u = new n.constructor(n.type, n);
      Jl = u, n.target.dispatchEvent(u), Jl = null;
    } else return t = Iu(n), t !== null && Xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zi(e, t, n) {
  fr(e) && n.delete(t);
}
function S4() {
  uo = !1, Ot !== null && fr(Ot) && (Ot = null), bt !== null && fr(bt) && (bt = null), Ut !== null && fr(Ut) && (Ut = null), wu.forEach(Zi), Su.forEach(Zi);
}
function qn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, uo || (uo = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, S4)));
}
function Eu(e) {
  function t(r) {
    return qn(r, e);
  }
  if (0 < Zu.length) {
    qn(Zu[0], e);
    for (var n = 1; n < Zu.length; n++) {
      var u = Zu[n];
      u.blockedOn === e && (u.blockedOn = null);
    }
  }
  for (Ot !== null && qn(Ot, e), bt !== null && qn(bt, e), Ut !== null && qn(Ut, e), wu.forEach(t), Su.forEach(t), n = 0; n < Mt.length; n++) u = Mt[n], u.blockedOn === e && (u.blockedOn = null);
  for (; 0 < Mt.length && (n = Mt[0], n.blockedOn === null); ) Va(n), n.blockedOn === null && Mt.shift();
}
var Tn = Dt.ReactCurrentBatchConfig, Dr = !0;
function E4(e, t, n, u) {
  var r = H, l = Tn.transition;
  Tn.transition = null;
  try {
    H = 1, Zo(e, t, n, u);
  } finally {
    H = r, Tn.transition = l;
  }
}
function C4(e, t, n, u) {
  var r = H, l = Tn.transition;
  Tn.transition = null;
  try {
    H = 4, Zo(e, t, n, u);
  } finally {
    H = r, Tn.transition = l;
  }
}
function Zo(e, t, n, u) {
  if (Dr) {
    var r = ro(e, t, n, u);
    if (r === null) Cl(e, t, u, Pr, n), Xi(e, u);
    else if (w4(r, e, t, n, u)) u.stopPropagation();
    else if (Xi(e, u), t & 4 && -1 < x4.indexOf(e)) {
      for (; r !== null; ) {
        var l = Iu(r);
        if (l !== null && ba(l), l = ro(e, t, n, u), l === null && Cl(e, t, u, Pr, n), l === r) break;
        r = l;
      }
      r !== null && u.stopPropagation();
    } else Cl(e, t, u, null, n);
  }
}
var Pr = null;
function ro(e, t, n, u) {
  if (Pr = null, e = Ko(u), e = un(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ba(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Pr = e, null;
}
function Qa(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch (d4()) {
        case Yo:
          return 1;
        case Ra:
          return 4;
        case Nr:
        case f4:
          return 16;
        case Ia:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null, Jo = null, pr = null;
function Ka() {
  if (pr) return pr;
  var e, t = Jo, n = t.length, u, r = "value" in It ? It.value : It.textContent, l = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++) ;
  var o = n - e;
  for (u = 1; u <= o && t[n - u] === r[l - u]; u++) ;
  return pr = r.slice(e, 1 < u ? 1 - u : void 0);
}
function mr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ju() {
  return !0;
}
function Ji() {
  return !1;
}
function Ke(e) {
  function t(n, u, r, l, o) {
    this._reactName = n, this._targetInst = r, this.type = u, this.nativeEvent = l, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(l) : l[i]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ju : Ji, this.isPropagationStopped = Ji, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ju);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ju);
  }, persist: function() {
  }, isPersistent: Ju }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qo = Ke(Vn), Ru = ne({}, Vn, { view: 0, detail: 0 }), N4 = Ke(Ru), hl, vl, eu, Yr = ne({}, Ru, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ei, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== eu && (eu && e.type === "mousemove" ? (hl = e.screenX - eu.screenX, vl = e.screenY - eu.screenY) : vl = hl = 0, eu = e), hl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vl;
} }), qi = Ke(Yr), _4 = ne({}, Yr, { dataTransfer: 0 }), D4 = Ke(_4), P4 = ne({}, Ru, { relatedTarget: 0 }), gl = Ke(P4), F4 = ne({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), j4 = Ke(F4), A4 = ne({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), L4 = Ke(A4), B4 = ne({}, Vn, { data: 0 }), es = Ke(B4), T4 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, z4 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, M4 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function R4(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = M4[e]) ? !!t[e] : !1;
}
function ei() {
  return R4;
}
var I4 = ne({}, Ru, { key: function(e) {
  if (e.key) {
    var t = T4[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? z4[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ei, charCode: function(e) {
  return e.type === "keypress" ? mr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $4 = Ke(I4), O4 = ne({}, Yr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ts = Ke(O4), b4 = ne({}, Ru, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ei }), U4 = Ke(b4), W4 = ne({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), H4 = Ke(W4), V4 = ne({}, Yr, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Q4 = Ke(V4), K4 = [9, 13, 27, 32], ti = Et && "CompositionEvent" in window, cu = null;
Et && "documentMode" in document && (cu = document.documentMode);
var Y4 = Et && "TextEvent" in window && !cu, Ya = Et && (!ti || cu && 8 < cu && 11 >= cu), ns = " ", us = !1;
function Ga(e, t) {
  switch (e) {
    case "keyup":
      return K4.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function G4(e, t) {
  switch (e) {
    case "compositionend":
      return Xa(t);
    case "keypress":
      return t.which !== 32 ? null : (us = !0, ns);
    case "textInput":
      return e = t.data, e === ns && us ? null : e;
    default:
      return null;
  }
}
function X4(e, t) {
  if (wn) return e === "compositionend" || !ti && Ga(e, t) ? (e = Ka(), pr = Jo = It = null, wn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ya && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Z4 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Z4[e.type] : t === "textarea";
}
function Za(e, t, n, u) {
  Pa(u), t = Fr(t, "onChange"), 0 < t.length && (n = new qo("onChange", "change", null, n, u), e.push({ event: n, listeners: t }));
}
var du = null, Cu = null;
function J4(e) {
  s0(e, 0);
}
function Gr(e) {
  var t = Cn(e);
  if (wa(t)) return e;
}
function q4(e, t) {
  if (e === "change") return t;
}
var Ja = !1;
if (Et) {
  var yl;
  if (Et) {
    var kl = "oninput" in document;
    if (!kl) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"), kl = typeof ls.oninput == "function";
    }
    yl = kl;
  } else yl = !1;
  Ja = yl && (!document.documentMode || 9 < document.documentMode);
}
function os() {
  du && (du.detachEvent("onpropertychange", qa), Cu = du = null);
}
function qa(e) {
  if (e.propertyName === "value" && Gr(Cu)) {
    var t = [];
    Za(t, Cu, e, Ko(e)), La(J4, t);
  }
}
function ed(e, t, n) {
  e === "focusin" ? (os(), du = t, Cu = n, du.attachEvent("onpropertychange", qa)) : e === "focusout" && os();
}
function td(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gr(Cu);
}
function nd(e, t) {
  if (e === "click") return Gr(t);
}
function ud(e, t) {
  if (e === "input" || e === "change") return Gr(t);
}
function rd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var st = typeof Object.is == "function" ? Object.is : rd;
function Nu(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), u = Object.keys(t);
  if (n.length !== u.length) return !1;
  for (u = 0; u < n.length; u++) {
    var r = n[u];
    if (!Ol.call(t, r) || !st(e[r], t[r])) return !1;
  }
  return !0;
}
function is(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, t) {
  var n = is(e);
  e = 0;
  for (var u; n; ) {
    if (n.nodeType === 3) {
      if (u = e + n.textContent.length, e <= t && u >= t) return { node: n, offset: t - e };
      e = u;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = is(n);
  }
}
function e0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? e0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function t0() {
  for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sr(e.document);
  }
  return t;
}
function ni(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ld(e) {
  var t = t0(), n = e.focusedElem, u = e.selectionRange;
  if (t !== n && n && n.ownerDocument && e0(n.ownerDocument.documentElement, n)) {
    if (u !== null && ni(n)) {
      if (t = u.start, e = u.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var r = n.textContent.length, l = Math.min(u.start, r);
        u = u.end === void 0 ? l : Math.min(u.end, r), !e.extend && l > u && (r = u, u = l, l = r), r = ss(n, l);
        var o = ss(
          n,
          u
        );
        r && o && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(r.node, r.offset), e.removeAllRanges(), l > u ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var od = Et && "documentMode" in document && 11 >= document.documentMode, Sn = null, lo = null, fu = null, oo = !1;
function as(e, t, n) {
  var u = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oo || Sn == null || Sn !== Sr(u) || (u = Sn, "selectionStart" in u && ni(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), fu && Nu(fu, u) || (fu = u, u = Fr(lo, "onSelect"), 0 < u.length && (t = new qo("onSelect", "select", null, t, n), e.push({ event: t, listeners: u }), t.target = Sn)));
}
function qu(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var En = { animationend: qu("Animation", "AnimationEnd"), animationiteration: qu("Animation", "AnimationIteration"), animationstart: qu("Animation", "AnimationStart"), transitionend: qu("Transition", "TransitionEnd") }, xl = {}, n0 = {};
Et && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
function Xr(e) {
  if (xl[e]) return xl[e];
  if (!En[e]) return e;
  var t = En[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in n0) return xl[e] = t[n];
  return e;
}
var u0 = Xr("animationend"), r0 = Xr("animationiteration"), l0 = Xr("animationstart"), o0 = Xr("transitionend"), i0 = /* @__PURE__ */ new Map(), cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xt(e, t) {
  i0.set(e, t), hn(t, [e]);
}
for (var wl = 0; wl < cs.length; wl++) {
  var Sl = cs[wl], id = Sl.toLowerCase(), sd = Sl[0].toUpperCase() + Sl.slice(1);
  Xt(id, "on" + sd);
}
Xt(u0, "onAnimationEnd");
Xt(r0, "onAnimationIteration");
Xt(l0, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(o0, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var iu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(iu));
function ds(e, t, n) {
  var u = e.type || "unknown-event";
  e.currentTarget = n, i4(u, t, void 0, e), e.currentTarget = null;
}
function s0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var u = e[n], r = u.event;
    u = u.listeners;
    e: {
      var l = void 0;
      if (t) for (var o = u.length - 1; 0 <= o; o--) {
        var i = u[o], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== l && r.isPropagationStopped()) break e;
        ds(r, i, c), l = s;
      }
      else for (o = 0; o < u.length; o++) {
        if (i = u[o], s = i.instance, c = i.currentTarget, i = i.listener, s !== l && r.isPropagationStopped()) break e;
        ds(r, i, c), l = s;
      }
    }
  }
  if (Cr) throw e = to, Cr = !1, to = null, e;
}
function Z(e, t) {
  var n = t[fo];
  n === void 0 && (n = t[fo] = /* @__PURE__ */ new Set());
  var u = e + "__bubble";
  n.has(u) || (a0(t, e, 2, !1), n.add(u));
}
function El(e, t, n) {
  var u = 0;
  t && (u |= 4), a0(n, e, u, t);
}
var er = "_reactListening" + Math.random().toString(36).slice(2);
function _u(e) {
  if (!e[er]) {
    e[er] = !0, va.forEach(function(n) {
      n !== "selectionchange" && (ad.has(n) || El(n, !1, e), El(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[er] || (t[er] = !0, El("selectionchange", !1, t));
  }
}
function a0(e, t, n, u) {
  switch (Qa(t)) {
    case 1:
      var r = E4;
      break;
    case 4:
      r = C4;
      break;
    default:
      r = Zo;
  }
  n = r.bind(null, t, n, e), r = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), u ? r !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: r }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, { passive: r }) : e.addEventListener(t, n, !1);
}
function Cl(e, t, n, u, r) {
  var l = u;
  if (!(t & 1) && !(t & 2) && u !== null) e: for (; ; ) {
    if (u === null) return;
    var o = u.tag;
    if (o === 3 || o === 4) {
      var i = u.stateNode.containerInfo;
      if (i === r || i.nodeType === 8 && i.parentNode === r) break;
      if (o === 4) for (o = u.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === r || s.nodeType === 8 && s.parentNode === r)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = un(i), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          u = l = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    u = u.return;
  }
  La(function() {
    var c = l, v = Ko(n), g = [];
    e: {
      var h = i0.get(e);
      if (h !== void 0) {
        var x = qo, w = e;
        switch (e) {
          case "keypress":
            if (mr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = $4;
            break;
          case "focusin":
            w = "focus", x = gl;
            break;
          case "focusout":
            w = "blur", x = gl;
            break;
          case "beforeblur":
          case "afterblur":
            x = gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = D4;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = U4;
            break;
          case u0:
          case r0:
          case l0:
            x = j4;
            break;
          case o0:
            x = H4;
            break;
          case "scroll":
            x = N4;
            break;
          case "wheel":
            x = Q4;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = L4;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ts;
        }
        var C = (t & 4) !== 0, M = !C && e === "scroll", f = C ? h !== null ? h + "Capture" : null : h;
        C = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var m = d.stateNode;
          if (d.tag === 5 && m !== null && (d = m, f !== null && (m = xu(a, f), m != null && C.push(Du(a, m, d)))), M) break;
          a = a.return;
        }
        0 < C.length && (h = new x(h, w, null, n, v), g.push({ event: h, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== Jl && (w = n.relatedTarget || n.fromElement) && (un(w) || w[Ct])) break e;
        if ((x || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = c, w = w ? un(w) : null, w !== null && (M = vn(w), w !== M || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = c), x !== w)) {
          if (C = qi, m = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (C = ts, m = "onPointerLeave", f = "onPointerEnter", a = "pointer"), M = x == null ? h : Cn(x), d = w == null ? h : Cn(w), h = new C(m, a + "leave", x, n, v), h.target = M, h.relatedTarget = d, m = null, un(v) === c && (C = new C(f, a + "enter", w, n, v), C.target = d, C.relatedTarget = M, m = C), M = m, x && w) t: {
            for (C = x, f = w, a = 0, d = C; d; d = yn(d)) a++;
            for (d = 0, m = f; m; m = yn(m)) d++;
            for (; 0 < a - d; ) C = yn(C), a--;
            for (; 0 < d - a; ) f = yn(f), d--;
            for (; a--; ) {
              if (C === f || f !== null && C === f.alternate) break t;
              C = yn(C), f = yn(f);
            }
            C = null;
          }
          else C = null;
          x !== null && fs(g, h, x, C, !1), w !== null && M !== null && fs(g, M, w, C, !0);
        }
      }
      e: {
        if (h = c ? Cn(c) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var S = q4;
        else if (rs(h)) if (Ja) S = ud;
        else {
          S = td;
          var E = ed;
        }
        else (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = nd);
        if (S && (S = S(e, c))) {
          Za(g, S, n, v);
          break e;
        }
        E && E(e, h, c), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && Kl(h, "number", h.value);
      }
      switch (E = c ? Cn(c) : window, e) {
        case "focusin":
          (rs(E) || E.contentEditable === "true") && (Sn = E, lo = c, fu = null);
          break;
        case "focusout":
          fu = lo = Sn = null;
          break;
        case "mousedown":
          oo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          oo = !1, as(g, n, v);
          break;
        case "selectionchange":
          if (od) break;
        case "keydown":
        case "keyup":
          as(g, n, v);
      }
      var _;
      if (ti) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else wn ? Ga(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ya && n.locale !== "ko" && (wn || P !== "onCompositionStart" ? P === "onCompositionEnd" && wn && (_ = Ka()) : (It = v, Jo = "value" in It ? It.value : It.textContent, wn = !0)), E = Fr(c, P), 0 < E.length && (P = new es(P, e, null, n, v), g.push({ event: P, listeners: E }), _ ? P.data = _ : (_ = Xa(n), _ !== null && (P.data = _)))), (_ = Y4 ? G4(e, n) : X4(e, n)) && (c = Fr(c, "onBeforeInput"), 0 < c.length && (v = new es("onBeforeInput", "beforeinput", null, n, v), g.push({ event: v, listeners: c }), v.data = _));
    }
    s0(g, t);
  });
}
function Du(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
  for (var n = t + "Capture", u = []; e !== null; ) {
    var r = e, l = r.stateNode;
    r.tag === 5 && l !== null && (r = l, l = xu(e, n), l != null && u.unshift(Du(e, l, r)), l = xu(e, t), l != null && u.push(Du(e, l, r))), e = e.return;
  }
  return u;
}
function yn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fs(e, t, n, u, r) {
  for (var l = t._reactName, o = []; n !== null && n !== u; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === u) break;
    i.tag === 5 && c !== null && (i = c, r ? (s = xu(n, l), s != null && o.unshift(Du(n, s, i))) : r || (s = xu(n, l), s != null && o.push(Du(n, s, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var cd = /\r\n?/g, dd = /\u0000|\uFFFD/g;
function ps(e) {
  return (typeof e == "string" ? e : "" + e).replace(cd, `
`).replace(dd, "");
}
function tr(e, t, n) {
  if (t = ps(t), ps(e) !== t && n) throw Error(N(425));
}
function jr() {
}
var io = null, so = null;
function ao(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var co = typeof setTimeout == "function" ? setTimeout : void 0, fd = typeof clearTimeout == "function" ? clearTimeout : void 0, ms = typeof Promise == "function" ? Promise : void 0, pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ms < "u" ? function(e) {
  return ms.resolve(null).then(e).catch(md);
} : co;
function md(e) {
  setTimeout(function() {
    throw e;
  });
}
function Nl(e, t) {
  var n = t, u = 0;
  do {
    var r = n.nextSibling;
    if (e.removeChild(n), r && r.nodeType === 8) if (n = r.data, n === "/$") {
      if (u === 0) {
        e.removeChild(r), Eu(t);
        return;
      }
      u--;
    } else n !== "$" && n !== "$?" && n !== "$!" || u++;
    n = r;
  } while (n);
  Eu(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Qn, Pu = "__reactProps$" + Qn, Ct = "__reactContainer$" + Qn, fo = "__reactEvents$" + Qn, hd = "__reactListeners$" + Qn, vd = "__reactHandles$" + Qn;
function un(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hs(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = hs(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Iu(e) {
  return e = e[mt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Zr(e) {
  return e[Pu] || null;
}
var po = [], Nn = -1;
function Zt(e) {
  return { current: e };
}
function J(e) {
  0 > Nn || (e.current = po[Nn], po[Nn] = null, Nn--);
}
function K(e, t) {
  Nn++, po[Nn] = e.current, e.current = t;
}
var Gt = {}, _e = Zt(Gt), Re = Zt(!1), cn = Gt;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var u = e.stateNode;
  if (u && u.__reactInternalMemoizedUnmaskedChildContext === t) return u.__reactInternalMemoizedMaskedChildContext;
  var r = {}, l;
  for (l in n) r[l] = t[l];
  return u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = r), r;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  J(Re), J(_e);
}
function vs(e, t, n) {
  if (_e.current !== Gt) throw Error(N(168));
  K(_e, t), K(Re, n);
}
function c0(e, t, n) {
  var u = e.stateNode;
  if (t = t.childContextTypes, typeof u.getChildContext != "function") return n;
  u = u.getChildContext();
  for (var r in u) if (!(r in t)) throw Error(N(108, e4(e) || "Unknown", r));
  return ne({}, n, u);
}
function Lr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, cn = _e.current, K(_e, e), K(Re, Re.current), !0;
}
function gs(e, t, n) {
  var u = e.stateNode;
  if (!u) throw Error(N(169));
  n ? (e = c0(e, t, cn), u.__reactInternalMemoizedMergedChildContext = e, J(Re), J(_e), K(_e, e)) : J(Re), K(Re, n);
}
var kt = null, Jr = !1, _l = !1;
function d0(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function gd(e) {
  Jr = !0, d0(e);
}
function Jt() {
  if (!_l && kt !== null) {
    _l = !0;
    var e = 0, t = H;
    try {
      var n = kt;
      for (H = 1; e < n.length; e++) {
        var u = n[e];
        do
          u = u(!0);
        while (u !== null);
      }
      kt = null, Jr = !1;
    } catch (r) {
      throw kt !== null && (kt = kt.slice(e + 1)), Ma(Yo, Jt), r;
    } finally {
      H = t, _l = !1;
    }
  }
  return null;
}
var _n = [], Dn = 0, Br = null, Tr = 0, Xe = [], Ze = 0, dn = null, xt = 1, wt = "";
function tn(e, t) {
  _n[Dn++] = Tr, _n[Dn++] = Br, Br = e, Tr = t;
}
function f0(e, t, n) {
  Xe[Ze++] = xt, Xe[Ze++] = wt, Xe[Ze++] = dn, dn = e;
  var u = xt;
  e = wt;
  var r = 32 - ot(u) - 1;
  u &= ~(1 << r), n += 1;
  var l = 32 - ot(t) + r;
  if (30 < l) {
    var o = r - r % 5;
    l = (u & (1 << o) - 1).toString(32), u >>= o, r -= o, xt = 1 << 32 - ot(t) + r | n << r | u, wt = l + e;
  } else xt = 1 << l | n << r | u, wt = e;
}
function ui(e) {
  e.return !== null && (tn(e, 1), f0(e, 1, 0));
}
function ri(e) {
  for (; e === Br; ) Br = _n[--Dn], _n[Dn] = null, Tr = _n[--Dn], _n[Dn] = null;
  for (; e === dn; ) dn = Xe[--Ze], Xe[Ze] = null, wt = Xe[--Ze], Xe[Ze] = null, xt = Xe[--Ze], Xe[Ze] = null;
}
var He = null, We = null, q = !1, lt = null;
function p0(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, We = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, We = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: xt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, He = e, We = null, !0) : !1;
    default:
      return !1;
  }
}
function mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ho(e) {
  if (q) {
    var t = We;
    if (t) {
      var n = t;
      if (!ys(e, t)) {
        if (mo(e)) throw Error(N(418));
        t = Wt(n.nextSibling);
        var u = He;
        t && ys(e, t) ? p0(u, n) : (e.flags = e.flags & -4097 | 2, q = !1, He = e);
      }
    } else {
      if (mo(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, q = !1, He = e;
    }
  }
}
function ks(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  He = e;
}
function nr(e) {
  if (e !== He) return !1;
  if (!q) return ks(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ao(e.type, e.memoizedProps)), t && (t = We)) {
    if (mo(e)) throw m0(), Error(N(418));
    for (; t; ) p0(e, t), t = Wt(t.nextSibling);
  }
  if (ks(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = He ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function m0() {
  for (var e = We; e; ) e = Wt(e.nextSibling);
}
function $n() {
  We = He = null, q = !1;
}
function li(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var yd = Dt.ReactCurrentBatchConfig;
function tu(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var u = n.stateNode;
      }
      if (!u) throw Error(N(147, e));
      var r = u, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(o) {
        var i = r.refs;
        o === null ? delete i[l] : i[l] = o;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function ur(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function xs(e) {
  var t = e._init;
  return t(e._payload);
}
function h0(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function u(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function r(f, a) {
    return f = Kt(f, a), f.index = 0, f.sibling = null, f;
  }
  function l(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, m) {
    return a === null || a.tag !== 6 ? (a = Bl(d, f.mode, m), a.return = f, a) : (a = r(a, d), a.return = f, a);
  }
  function s(f, a, d, m) {
    var S = d.type;
    return S === xn ? v(f, a, d.props.children, m, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && xs(S) === a.type) ? (m = r(a, d.props), m.ref = tu(f, a, d), m.return = f, m) : (m = wr(d.type, d.key, d.props, null, f.mode, m), m.ref = tu(f, a, d), m.return = f, m);
  }
  function c(f, a, d, m) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Tl(d, f.mode, m), a.return = f, a) : (a = r(a, d.children || []), a.return = f, a);
  }
  function v(f, a, d, m, S) {
    return a === null || a.tag !== 7 ? (a = sn(d, f.mode, m, S), a.return = f, a) : (a = r(a, d), a.return = f, a);
  }
  function g(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Bl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Qu:
          return d = wr(a.type, a.key, a.props, null, f.mode, d), d.ref = tu(f, null, a), d.return = f, d;
        case kn:
          return a = Tl(a, f.mode, d), a.return = f, a;
        case Tt:
          var m = a._init;
          return g(f, m(a._payload), d);
      }
      if (lu(a) || Xn(a)) return a = sn(a, f.mode, d, null), a.return = f, a;
      ur(f, a);
    }
    return null;
  }
  function h(f, a, d, m) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : i(f, a, "" + d, m);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Qu:
          return d.key === S ? s(f, a, d, m) : null;
        case kn:
          return d.key === S ? c(f, a, d, m) : null;
        case Tt:
          return S = d._init, h(
            f,
            a,
            S(d._payload),
            m
          );
      }
      if (lu(d) || Xn(d)) return S !== null ? null : v(f, a, d, m, null);
      ur(f, d);
    }
    return null;
  }
  function x(f, a, d, m, S) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return f = f.get(d) || null, i(a, f, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Qu:
          return f = f.get(m.key === null ? d : m.key) || null, s(a, f, m, S);
        case kn:
          return f = f.get(m.key === null ? d : m.key) || null, c(a, f, m, S);
        case Tt:
          var E = m._init;
          return x(f, a, d, E(m._payload), S);
      }
      if (lu(m) || Xn(m)) return f = f.get(d) || null, v(a, f, m, S, null);
      ur(a, m);
    }
    return null;
  }
  function w(f, a, d, m) {
    for (var S = null, E = null, _ = a, P = a = 0, $ = null; _ !== null && P < d.length; P++) {
      _.index > P ? ($ = _, _ = null) : $ = _.sibling;
      var j = h(f, _, d[P], m);
      if (j === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && j.alternate === null && t(f, _), a = l(j, a, P), E === null ? S = j : E.sibling = j, E = j, _ = $;
    }
    if (P === d.length) return n(f, _), q && tn(f, P), S;
    if (_ === null) {
      for (; P < d.length; P++) _ = g(f, d[P], m), _ !== null && (a = l(_, a, P), E === null ? S = _ : E.sibling = _, E = _);
      return q && tn(f, P), S;
    }
    for (_ = u(f, _); P < d.length; P++) $ = x(_, f, P, d[P], m), $ !== null && (e && $.alternate !== null && _.delete($.key === null ? P : $.key), a = l($, a, P), E === null ? S = $ : E.sibling = $, E = $);
    return e && _.forEach(function(R) {
      return t(f, R);
    }), q && tn(f, P), S;
  }
  function C(f, a, d, m) {
    var S = Xn(d);
    if (typeof S != "function") throw Error(N(150));
    if (d = S.call(d), d == null) throw Error(N(151));
    for (var E = S = null, _ = a, P = a = 0, $ = null, j = d.next(); _ !== null && !j.done; P++, j = d.next()) {
      _.index > P ? ($ = _, _ = null) : $ = _.sibling;
      var R = h(f, _, j.value, m);
      if (R === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && R.alternate === null && t(f, _), a = l(R, a, P), E === null ? S = R : E.sibling = R, E = R, _ = $;
    }
    if (j.done) return n(
      f,
      _
    ), q && tn(f, P), S;
    if (_ === null) {
      for (; !j.done; P++, j = d.next()) j = g(f, j.value, m), j !== null && (a = l(j, a, P), E === null ? S = j : E.sibling = j, E = j);
      return q && tn(f, P), S;
    }
    for (_ = u(f, _); !j.done; P++, j = d.next()) j = x(_, f, P, j.value, m), j !== null && (e && j.alternate !== null && _.delete(j.key === null ? P : j.key), a = l(j, a, P), E === null ? S = j : E.sibling = j, E = j);
    return e && _.forEach(function(De) {
      return t(f, De);
    }), q && tn(f, P), S;
  }
  function M(f, a, d, m) {
    if (typeof d == "object" && d !== null && d.type === xn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Qu:
          e: {
            for (var S = d.key, E = a; E !== null; ) {
              if (E.key === S) {
                if (S = d.type, S === xn) {
                  if (E.tag === 7) {
                    n(f, E.sibling), a = r(E, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && xs(S) === E.type) {
                  n(f, E.sibling), a = r(E, d.props), a.ref = tu(f, E, d), a.return = f, f = a;
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === xn ? (a = sn(d.props.children, f.mode, m, d.key), a.return = f, f = a) : (m = wr(d.type, d.key, d.props, null, f.mode, m), m.ref = tu(f, a, d), m.return = f, f = m);
          }
          return o(f);
        case kn:
          e: {
            for (E = d.key; a !== null; ) {
              if (a.key === E) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = r(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Tl(d, f.mode, m), a.return = f, f = a;
          }
          return o(f);
        case Tt:
          return E = d._init, M(f, a, E(d._payload), m);
      }
      if (lu(d)) return w(f, a, d, m);
      if (Xn(d)) return C(f, a, d, m);
      ur(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = r(a, d), a.return = f, f = a) : (n(f, a), a = Bl(d, f.mode, m), a.return = f, f = a), o(f)) : n(f, a);
  }
  return M;
}
var On = h0(!0), v0 = h0(!1), zr = Zt(null), Mr = null, Pn = null, oi = null;
function ii() {
  oi = Pn = Mr = null;
}
function si(e) {
  var t = zr.current;
  J(zr), e._currentValue = t;
}
function vo(e, t, n) {
  for (; e !== null; ) {
    var u = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function zn(e, t) {
  Mr = e, oi = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
}
function et(e) {
  var t = e._currentValue;
  if (oi !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (Mr === null) throw Error(N(308));
    Pn = e, Mr.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var rn = null;
function ai(e) {
  rn === null ? rn = [e] : rn.push(e);
}
function g0(e, t, n, u) {
  var r = t.interleaved;
  return r === null ? (n.next = n, ai(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Nt(e, u);
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function ci(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function y0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ht(e, t, n) {
  var u = e.updateQueue;
  if (u === null) return null;
  if (u = u.shared, b & 2) {
    var r = u.pending;
    return r === null ? t.next = t : (t.next = r.next, r.next = t), u.pending = t, Nt(e, n);
  }
  return r = u.interleaved, r === null ? (t.next = t, ai(u)) : (t.next = r.next, r.next = t), u.interleaved = t, Nt(e, n);
}
function hr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var u = t.lanes;
    u &= e.pendingLanes, n |= u, t.lanes = n, Go(e, n);
  }
}
function ws(e, t) {
  var n = e.updateQueue, u = e.alternate;
  if (u !== null && (u = u.updateQueue, n === u)) {
    var r = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? r = l = o : l = l.next = o, n = n.next;
      } while (n !== null);
      l === null ? r = l = t : l = l.next = t;
    } else r = l = t;
    n = { baseState: u.baseState, firstBaseUpdate: r, lastBaseUpdate: l, shared: u.shared, effects: u.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Rr(e, t, n, u) {
  var r = e.updateQueue;
  zt = !1;
  var l = r.firstBaseUpdate, o = r.lastBaseUpdate, i = r.shared.pending;
  if (i !== null) {
    r.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, o === null ? l = c : o.next = c, o = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, i = v.lastBaseUpdate, i !== o && (i === null ? v.firstBaseUpdate = c : i.next = c, v.lastBaseUpdate = s));
  }
  if (l !== null) {
    var g = r.baseState;
    o = 0, v = c = s = null, i = l;
    do {
      var h = i.lane, x = i.eventTime;
      if ((u & h) === h) {
        v !== null && (v = v.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, C = i;
          switch (h = t, x = n, C.tag) {
            case 1:
              if (w = C.payload, typeof w == "function") {
                g = w.call(x, g, h);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = C.payload, h = typeof w == "function" ? w.call(x, g, h) : w, h == null) break e;
              g = ne({}, g, h);
              break e;
            case 2:
              zt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = r.effects, h === null ? r.effects = [i] : h.push(i));
      } else x = { eventTime: x, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, v === null ? (c = v = x, s = g) : v = v.next = x, o |= h;
      if (i = i.next, i === null) {
        if (i = r.shared.pending, i === null) break;
        h = i, i = h.next, h.next = null, r.lastBaseUpdate = h, r.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = g), r.baseState = s, r.firstBaseUpdate = c, r.lastBaseUpdate = v, t = r.shared.interleaved, t !== null) {
      r = t;
      do
        o |= r.lane, r = r.next;
      while (r !== t);
    } else l === null && (r.shared.lanes = 0);
    pn |= o, e.lanes = o, e.memoizedState = g;
  }
}
function Ss(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var u = e[t], r = u.callback;
    if (r !== null) {
      if (u.callback = null, u = n, typeof r != "function") throw Error(N(191, r));
      r.call(u);
    }
  }
}
var $u = {}, vt = Zt($u), Fu = Zt($u), ju = Zt($u);
function ln(e) {
  if (e === $u) throw Error(N(174));
  return e;
}
function di(e, t) {
  switch (K(ju, t), K(Fu, e), K(vt, $u), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gl(t, e);
  }
  J(vt), K(vt, t);
}
function bn() {
  J(vt), J(Fu), J(ju);
}
function k0(e) {
  ln(ju.current);
  var t = ln(vt.current), n = Gl(t, e.type);
  t !== n && (K(Fu, e), K(vt, n));
}
function fi(e) {
  Fu.current === e && (J(vt), J(Fu));
}
var ee = Zt(0);
function Ir(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Dl = [];
function pi() {
  for (var e = 0; e < Dl.length; e++) Dl[e]._workInProgressVersionPrimary = null;
  Dl.length = 0;
}
var vr = Dt.ReactCurrentDispatcher, Pl = Dt.ReactCurrentBatchConfig, fn = 0, te = null, de = null, me = null, $r = !1, pu = !1, Au = 0, kd = 0;
function Ee() {
  throw Error(N(321));
}
function mi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!st(e[n], t[n])) return !1;
  return !0;
}
function hi(e, t, n, u, r, l) {
  if (fn = l, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vr.current = e === null || e.memoizedState === null ? Ed : Cd, e = n(u, r), pu) {
    l = 0;
    do {
      if (pu = !1, Au = 0, 25 <= l) throw Error(N(301));
      l += 1, me = de = null, t.updateQueue = null, vr.current = Nd, e = n(u, r);
    } while (pu);
  }
  if (vr.current = Or, t = de !== null && de.next !== null, fn = 0, me = de = te = null, $r = !1, t) throw Error(N(300));
  return e;
}
function vi() {
  var e = Au !== 0;
  return Au = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? te.memoizedState = me = e : me = me.next = e, me;
}
function tt() {
  if (de === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? te.memoizedState : me.next;
  if (t !== null) me = t, de = e;
  else {
    if (e === null) throw Error(N(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? te.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Lu(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fl(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var u = de, r = u.baseQueue, l = n.pending;
  if (l !== null) {
    if (r !== null) {
      var o = r.next;
      r.next = l.next, l.next = o;
    }
    u.baseQueue = r = l, n.pending = null;
  }
  if (r !== null) {
    l = r.next, u = u.baseState;
    var i = o = null, s = null, c = l;
    do {
      var v = c.lane;
      if ((fn & v) === v) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), u = c.hasEagerState ? c.eagerState : e(u, c.action);
      else {
        var g = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = g, o = u) : s = s.next = g, te.lanes |= v, pn |= v;
      }
      c = c.next;
    } while (c !== null && c !== l);
    s === null ? o = u : s.next = i, st(u, t.memoizedState) || (Me = !0), t.memoizedState = u, t.baseState = o, t.baseQueue = s, n.lastRenderedState = u;
  }
  if (e = n.interleaved, e !== null) {
    r = e;
    do
      l = r.lane, te.lanes |= l, pn |= l, r = r.next;
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jl(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var u = n.dispatch, r = n.pending, l = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = r = r.next;
    do
      l = e(l, o.action), o = o.next;
    while (o !== r);
    st(l, t.memoizedState) || (Me = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, u];
}
function x0() {
}
function w0(e, t) {
  var n = te, u = tt(), r = t(), l = !st(u.memoizedState, r);
  if (l && (u.memoizedState = r, Me = !0), u = u.queue, gi(C0.bind(null, n, u, e), [e]), u.getSnapshot !== t || l || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Bu(9, E0.bind(null, n, u, r, t), void 0, null), he === null) throw Error(N(349));
    fn & 30 || S0(n, t, r);
  }
  return r;
}
function S0(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function E0(e, t, n, u) {
  t.value = n, t.getSnapshot = u, N0(t) && _0(e);
}
function C0(e, t, n) {
  return n(function() {
    N0(t) && _0(e);
  });
}
function N0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function _0(e) {
  var t = Nt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function Es(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lu, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sd.bind(null, te, e), [t.memoizedState, e];
}
function Bu(e, t, n, u) {
  return e = { tag: e, create: t, destroy: n, deps: u, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (u = n.next, n.next = e, e.next = u, t.lastEffect = e)), e;
}
function D0() {
  return tt().memoizedState;
}
function gr(e, t, n, u) {
  var r = pt();
  te.flags |= e, r.memoizedState = Bu(1 | t, n, void 0, u === void 0 ? null : u);
}
function qr(e, t, n, u) {
  var r = tt();
  u = u === void 0 ? null : u;
  var l = void 0;
  if (de !== null) {
    var o = de.memoizedState;
    if (l = o.destroy, u !== null && mi(u, o.deps)) {
      r.memoizedState = Bu(t, n, l, u);
      return;
    }
  }
  te.flags |= e, r.memoizedState = Bu(1 | t, n, l, u);
}
function Cs(e, t) {
  return gr(8390656, 8, e, t);
}
function gi(e, t) {
  return qr(2048, 8, e, t);
}
function P0(e, t) {
  return qr(4, 2, e, t);
}
function F0(e, t) {
  return qr(4, 4, e, t);
}
function j0(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function A0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qr(4, 4, j0.bind(null, t, e), n);
}
function yi() {
}
function L0(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var u = n.memoizedState;
  return u !== null && t !== null && mi(t, u[1]) ? u[0] : (n.memoizedState = [e, t], e);
}
function B0(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var u = n.memoizedState;
  return u !== null && t !== null && mi(t, u[1]) ? u[0] : (e = e(), n.memoizedState = [e, t], e);
}
function T0(e, t, n) {
  return fn & 21 ? (st(n, t) || (n = $a(), te.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
}
function xd(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var u = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Pl.transition = u;
  }
}
function z0() {
  return tt().memoizedState;
}
function wd(e, t, n) {
  var u = Qt(e);
  if (n = { lane: u, action: n, hasEagerState: !1, eagerState: null, next: null }, M0(e)) R0(t, n);
  else if (n = g0(e, t, n, u), n !== null) {
    var r = Ae();
    it(n, e, u, r), I0(n, t, u);
  }
}
function Sd(e, t, n) {
  var u = Qt(e), r = { lane: u, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (M0(e)) R0(t, r);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var o = t.lastRenderedState, i = l(o, n);
      if (r.hasEagerState = !0, r.eagerState = i, st(i, o)) {
        var s = t.interleaved;
        s === null ? (r.next = r, ai(t)) : (r.next = s.next, s.next = r), t.interleaved = r;
        return;
      }
    } catch {
    } finally {
    }
    n = g0(e, t, r, u), n !== null && (r = Ae(), it(n, e, u, r), I0(n, t, u));
  }
}
function M0(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function R0(e, t) {
  pu = $r = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function I0(e, t, n) {
  if (n & 4194240) {
    var u = t.lanes;
    u &= e.pendingLanes, n |= u, t.lanes = n, Go(e, n);
  }
}
var Or = { readContext: et, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, Ed = { readContext: et, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: et, useEffect: Cs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gr(
    4194308,
    4,
    j0.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return gr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return gr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var u = pt();
  return t = n !== void 0 ? n(t) : t, u.memoizedState = u.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, u.queue = e, e = e.dispatch = wd.bind(null, te, e), [u.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Es, useDebugValue: yi, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = Es(!1), t = e[0];
  return e = xd.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var u = te, r = pt();
  if (q) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(N(349));
    fn & 30 || S0(u, t, n);
  }
  r.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return r.queue = l, Cs(C0.bind(
    null,
    u,
    l,
    e
  ), [e]), u.flags |= 2048, Bu(9, E0.bind(null, u, l, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = he.identifierPrefix;
  if (q) {
    var n = wt, u = xt;
    n = (u & ~(1 << 32 - ot(u) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Au++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = kd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Cd = {
  readContext: et,
  useCallback: L0,
  useContext: et,
  useEffect: gi,
  useImperativeHandle: A0,
  useInsertionEffect: P0,
  useLayoutEffect: F0,
  useMemo: B0,
  useReducer: Fl,
  useRef: D0,
  useState: function() {
    return Fl(Lu);
  },
  useDebugValue: yi,
  useDeferredValue: function(e) {
    var t = tt();
    return T0(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Fl(Lu)[0], t = tt().memoizedState;
    return [e, t];
  },
  useMutableSource: x0,
  useSyncExternalStore: w0,
  useId: z0,
  unstable_isNewReconciler: !1
}, Nd = { readContext: et, useCallback: L0, useContext: et, useEffect: gi, useImperativeHandle: A0, useInsertionEffect: P0, useLayoutEffect: F0, useMemo: B0, useReducer: jl, useRef: D0, useState: function() {
  return jl(Lu);
}, useDebugValue: yi, useDeferredValue: function(e) {
  var t = tt();
  return de === null ? t.memoizedState = e : T0(t, de.memoizedState, e);
}, useTransition: function() {
  var e = jl(Lu)[0], t = tt().memoizedState;
  return [e, t];
}, useMutableSource: x0, useSyncExternalStore: w0, useId: z0, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function go(e, t, n, u) {
  t = e.memoizedState, n = n(u, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var el = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var u = Ae(), r = Qt(e), l = St(u, r);
  l.payload = t, n != null && (l.callback = n), t = Ht(e, l, r), t !== null && (it(t, e, r, u), hr(t, e, r));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var u = Ae(), r = Qt(e), l = St(u, r);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ht(e, l, r), t !== null && (it(t, e, r, u), hr(t, e, r));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ae(), u = Qt(e), r = St(n, u);
  r.tag = 2, t != null && (r.callback = t), t = Ht(e, r, u), t !== null && (it(t, e, u, n), hr(t, e, u));
} };
function Ns(e, t, n, u, r, l, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, l, o) : t.prototype && t.prototype.isPureReactComponent ? !Nu(n, u) || !Nu(r, l) : !0;
}
function $0(e, t, n) {
  var u = !1, r = Gt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = et(l) : (r = Ie(t) ? cn : _e.current, u = t.contextTypes, l = (u = u != null) ? In(e, r) : Gt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = el, e.stateNode = t, t._reactInternals = e, u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function _s(e, t, n, u) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, u), t.state !== e && el.enqueueReplaceState(t, t.state, null);
}
function yo(e, t, n, u) {
  var r = e.stateNode;
  r.props = n, r.state = e.memoizedState, r.refs = {}, ci(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? r.context = et(l) : (l = Ie(t) ? cn : _e.current, r.context = In(e, l)), r.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (go(e, t, l, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), t !== r.state && el.enqueueReplaceState(r, r.state, null), Rr(e, n, r, u), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", u = t;
    do
      n += qc(u), u = u.return;
    while (u);
    var r = n;
  } catch (l) {
    r = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ko(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var _d = typeof WeakMap == "function" ? WeakMap : Map;
function O0(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var u = t.value;
  return n.callback = function() {
    Ur || (Ur = !0, Fo = u), ko(e, t);
  }, n;
}
function b0(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var u = e.type.getDerivedStateFromError;
  if (typeof u == "function") {
    var r = t.value;
    n.payload = function() {
      return u(r);
    }, n.callback = function() {
      ko(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    ko(e, t), typeof u != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ds(e, t, n) {
  var u = e.pingCache;
  if (u === null) {
    u = e.pingCache = new _d();
    var r = /* @__PURE__ */ new Set();
    u.set(t, r);
  } else r = u.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), u.set(t, r));
  r.has(n) || (r.add(n), e = Od.bind(null, e, t, n), t.then(e, e));
}
function Ps(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fs(e, t, n, u, r) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = r, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, Ht(n, t, 1))), n.lanes |= 1), e);
}
var Dd = Dt.ReactCurrentOwner, Me = !1;
function je(e, t, n, u) {
  t.child = e === null ? v0(t, null, n, u) : On(t, e.child, n, u);
}
function js(e, t, n, u, r) {
  n = n.render;
  var l = t.ref;
  return zn(t, r), u = hi(e, t, n, u, l, r), n = vi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, _t(e, t, r)) : (q && n && ui(t), t.flags |= 1, je(e, t, u, r), t.child);
}
function As(e, t, n, u, r) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !_i(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, U0(e, t, l, u, r)) : (e = wr(n.type, null, u, t, t.mode, r), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & r)) {
    var o = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Nu, n(o, u) && e.ref === t.ref) return _t(e, t, r);
  }
  return t.flags |= 1, e = Kt(l, u), e.ref = t.ref, e.return = t, t.child = e;
}
function U0(e, t, n, u, r) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Nu(l, u) && e.ref === t.ref) if (Me = !1, t.pendingProps = u = l, (e.lanes & r) !== 0) e.flags & 131072 && (Me = !0);
    else return t.lanes = e.lanes, _t(e, t, r);
  }
  return xo(e, t, n, u, r);
}
function W0(e, t, n) {
  var u = t.pendingProps, r = u.children, l = e !== null ? e.memoizedState : null;
  if (u.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(jn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(jn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = l !== null ? l.baseLanes : n, K(jn, Ue), Ue |= u;
  }
  else l !== null ? (u = l.baseLanes | n, t.memoizedState = null) : u = n, K(jn, Ue), Ue |= u;
  return je(e, t, r, n), t.child;
}
function H0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function xo(e, t, n, u, r) {
  var l = Ie(n) ? cn : _e.current;
  return l = In(t, l), zn(t, r), n = hi(e, t, n, u, l, r), u = vi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, _t(e, t, r)) : (q && u && ui(t), t.flags |= 1, je(e, t, n, r), t.child);
}
function Ls(e, t, n, u, r) {
  if (Ie(n)) {
    var l = !0;
    Lr(t);
  } else l = !1;
  if (zn(t, r), t.stateNode === null) yr(e, t), $0(t, n, u), yo(t, n, u, r), u = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = et(c) : (c = Ie(n) ? cn : _e.current, c = In(t, c));
    var v = n.getDerivedStateFromProps, g = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== u || s !== c) && _s(t, o, u, c), zt = !1;
    var h = t.memoizedState;
    o.state = h, Rr(t, u, o, r), s = t.memoizedState, i !== u || h !== s || Re.current || zt ? (typeof v == "function" && (go(t, n, v, u), s = t.memoizedState), (i = zt || Ns(t, n, i, u, h, s, c)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = s), o.props = u, o.state = s, o.context = c, u = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
  } else {
    o = t.stateNode, y0(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : ut(t.type, i), o.props = c, g = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = et(s) : (s = Ie(n) ? cn : _e.current, s = In(t, s));
    var x = n.getDerivedStateFromProps;
    (v = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || h !== s) && _s(t, o, u, s), zt = !1, h = t.memoizedState, o.state = h, Rr(t, u, o, r);
    var w = t.memoizedState;
    i !== g || h !== w || Re.current || zt ? (typeof x == "function" && (go(t, n, x, u), w = t.memoizedState), (c = zt || Ns(t, n, c, u, h, w, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(u, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(u, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = w), o.props = u, o.state = w, o.context = s, u = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), u = !1);
  }
  return wo(e, t, n, u, l, r);
}
function wo(e, t, n, u, r, l) {
  H0(e, t);
  var o = (t.flags & 128) !== 0;
  if (!u && !o) return r && gs(t, n, !1), _t(e, t, l);
  u = t.stateNode, Dd.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : u.render();
  return t.flags |= 1, e !== null && o ? (t.child = On(t, e.child, null, l), t.child = On(t, null, i, l)) : je(e, t, i, l), t.memoizedState = u.state, r && gs(t, n, !0), t.child;
}
function V0(e) {
  var t = e.stateNode;
  t.pendingContext ? vs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vs(e, t.context, !1), di(e, t.containerInfo);
}
function Bs(e, t, n, u, r) {
  return $n(), li(r), t.flags |= 256, je(e, t, n, u), t.child;
}
var So = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Q0(e, t, n) {
  var u = t.pendingProps, r = ee.current, l = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0), i ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1), K(ee, r & 1), e === null)
    return ho(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = u.children, e = u.fallback, l ? (u = t.mode, l = t.child, o = { mode: "hidden", children: o }, !(u & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = ul(o, u, 0, null), e = sn(e, u, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Eo(n), t.memoizedState = So, e) : ki(t, o));
  if (r = e.memoizedState, r !== null && (i = r.dehydrated, i !== null)) return Pd(e, t, o, u, i, r, n);
  if (l) {
    l = u.fallback, o = t.mode, r = e.child, i = r.sibling;
    var s = { mode: "hidden", children: u.children };
    return !(o & 1) && t.child !== r ? (u = t.child, u.childLanes = 0, u.pendingProps = s, t.deletions = null) : (u = Kt(r, s), u.subtreeFlags = r.subtreeFlags & 14680064), i !== null ? l = Kt(i, l) : (l = sn(l, o, n, null), l.flags |= 2), l.return = t, u.return = t, u.sibling = l, t.child = u, u = l, l = t.child, o = e.child.memoizedState, o = o === null ? Eo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, l.memoizedState = o, l.childLanes = e.childLanes & ~n, t.memoizedState = So, u;
  }
  return l = e.child, e = l.sibling, u = Kt(l, { mode: "visible", children: u.children }), !(t.mode & 1) && (u.lanes = n), u.return = t, u.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = u, t.memoizedState = null, u;
}
function ki(e, t) {
  return t = ul({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function rr(e, t, n, u) {
  return u !== null && li(u), On(t, e.child, null, n), e = ki(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Pd(e, t, n, u, r, l, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, u = Al(Error(N(422))), rr(e, t, o, u)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = u.fallback, r = t.mode, u = ul({ mode: "visible", children: u.children }, r, 0, null), l = sn(l, r, o, null), l.flags |= 2, u.return = t, l.return = t, u.sibling = l, t.child = u, t.mode & 1 && On(t, e.child, null, o), t.child.memoizedState = Eo(o), t.memoizedState = So, l);
  if (!(t.mode & 1)) return rr(e, t, o, null);
  if (r.data === "$!") {
    if (u = r.nextSibling && r.nextSibling.dataset, u) var i = u.dgst;
    return u = i, l = Error(N(419)), u = Al(l, u, void 0), rr(e, t, o, u);
  }
  if (i = (o & e.childLanes) !== 0, Me || i) {
    if (u = he, u !== null) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      r = r & (u.suspendedLanes | o) ? 0 : r, r !== 0 && r !== l.retryLane && (l.retryLane = r, Nt(e, r), it(u, e, r, -1));
    }
    return Ni(), u = Al(Error(N(421))), rr(e, t, o, u);
  }
  return r.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bd.bind(null, e), r._reactRetry = t, null) : (e = l.treeContext, We = Wt(r.nextSibling), He = t, q = !0, lt = null, e !== null && (Xe[Ze++] = xt, Xe[Ze++] = wt, Xe[Ze++] = dn, xt = e.id, wt = e.overflow, dn = t), t = ki(t, u.children), t.flags |= 4096, t);
}
function Ts(e, t, n) {
  e.lanes |= t;
  var u = e.alternate;
  u !== null && (u.lanes |= t), vo(e.return, t, n);
}
function Ll(e, t, n, u, r) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: u, tail: n, tailMode: r } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = u, l.tail = n, l.tailMode = r);
}
function K0(e, t, n) {
  var u = t.pendingProps, r = u.revealOrder, l = u.tail;
  if (je(e, t, u.children, n), u = ee.current, u & 2) u = u & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ts(e, n, t);
      else if (e.tag === 19) Ts(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    u &= 1;
  }
  if (K(ee, u), !(t.mode & 1)) t.memoizedState = null;
  else switch (r) {
    case "forwards":
      for (n = t.child, r = null; n !== null; ) e = n.alternate, e !== null && Ir(e) === null && (r = n), n = n.sibling;
      n = r, n === null ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), Ll(t, !1, r, n, l);
      break;
    case "backwards":
      for (n = null, r = t.child, t.child = null; r !== null; ) {
        if (e = r.alternate, e !== null && Ir(e) === null) {
          t.child = r;
          break;
        }
        e = r.sibling, r.sibling = n, n = r, r = e;
      }
      Ll(t, !0, n, null, l);
      break;
    case "together":
      Ll(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function yr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function _t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fd(e, t, n) {
  switch (t.tag) {
    case 3:
      V0(t), $n();
      break;
    case 5:
      k0(t);
      break;
    case 1:
      Ie(t.type) && Lr(t);
      break;
    case 4:
      di(t, t.stateNode.containerInfo);
      break;
    case 10:
      var u = t.type._context, r = t.memoizedProps.value;
      K(zr, u._currentValue), u._currentValue = r;
      break;
    case 13:
      if (u = t.memoizedState, u !== null)
        return u.dehydrated !== null ? (K(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Q0(e, t, n) : (K(ee, ee.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (u = (n & t.childLanes) !== 0, e.flags & 128) {
        if (u) return K0(e, t, n);
        t.flags |= 128;
      }
      if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), K(ee, ee.current), u) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, W0(e, t, n);
  }
  return _t(e, t, n);
}
var Y0, Co, G0, X0;
Y0 = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Co = function() {
};
G0 = function(e, t, n, u) {
  var r = e.memoizedProps;
  if (r !== u) {
    e = t.stateNode, ln(vt.current);
    var l = null;
    switch (n) {
      case "input":
        r = Vl(e, r), u = Vl(e, u), l = [];
        break;
      case "select":
        r = ne({}, r, { value: void 0 }), u = ne({}, u, { value: void 0 }), l = [];
        break;
      case "textarea":
        r = Yl(e, r), u = Yl(e, u), l = [];
        break;
      default:
        typeof r.onClick != "function" && typeof u.onClick == "function" && (e.onclick = jr);
    }
    Xl(n, u);
    var o;
    n = null;
    for (c in r) if (!u.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null) if (c === "style") {
      var i = r[c];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (yu.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
    for (c in u) {
      var s = u[c];
      if (i = r != null ? r[c] : void 0, u.hasOwnProperty(c) && s !== i && (s != null || i != null)) if (c === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (l || (l = []), l.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (l = l || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (yu.hasOwnProperty(c) ? (s != null && c === "onScroll" && Z("scroll", e), l || i === s || (l = [])) : (l = l || []).push(c, s));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
X0 = function(e, t, n, u) {
  n !== u && (t.flags |= 4);
};
function nu(e, t) {
  if (!q) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var u = null; n !== null; ) n.alternate !== null && (u = n), n = n.sibling;
      u === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
  }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, u = 0;
  if (t) for (var r = e.child; r !== null; ) n |= r.lanes | r.childLanes, u |= r.subtreeFlags & 14680064, u |= r.flags & 14680064, r.return = e, r = r.sibling;
  else for (r = e.child; r !== null; ) n |= r.lanes | r.childLanes, u |= r.subtreeFlags, u |= r.flags, r.return = e, r = r.sibling;
  return e.subtreeFlags |= u, e.childLanes = n, t;
}
function jd(e, t, n) {
  var u = t.pendingProps;
  switch (ri(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Ie(t.type) && Ar(), Ce(t), null;
    case 3:
      return u = t.stateNode, bn(), J(Re), J(_e), pi(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (e === null || e.child === null) && (nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Lo(lt), lt = null))), Co(e, t), Ce(t), null;
    case 5:
      fi(t);
      var r = ln(ju.current);
      if (n = t.type, e !== null && t.stateNode != null) G0(e, t, n, u, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!u) {
          if (t.stateNode === null) throw Error(N(166));
          return Ce(t), null;
        }
        if (e = ln(vt.current), nr(t)) {
          u = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (u[mt] = t, u[Pu] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", u), Z("close", u);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", u);
              break;
            case "video":
            case "audio":
              for (r = 0; r < iu.length; r++) Z(iu[r], u);
              break;
            case "source":
              Z("error", u);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                u
              ), Z("load", u);
              break;
            case "details":
              Z("toggle", u);
              break;
            case "input":
              Wi(u, l), Z("invalid", u);
              break;
            case "select":
              u._wrapperState = { wasMultiple: !!l.multiple }, Z("invalid", u);
              break;
            case "textarea":
              Vi(u, l), Z("invalid", u);
          }
          Xl(n, l), r = null;
          for (var o in l) if (l.hasOwnProperty(o)) {
            var i = l[o];
            o === "children" ? typeof i == "string" ? u.textContent !== i && (l.suppressHydrationWarning !== !0 && tr(u.textContent, i, e), r = ["children", i]) : typeof i == "number" && u.textContent !== "" + i && (l.suppressHydrationWarning !== !0 && tr(
              u.textContent,
              i,
              e
            ), r = ["children", "" + i]) : yu.hasOwnProperty(o) && i != null && o === "onScroll" && Z("scroll", u);
          }
          switch (n) {
            case "input":
              Ku(u), Hi(u, l, !0);
              break;
            case "textarea":
              Ku(u), Qi(u);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (u.onclick = jr);
          }
          u = r, t.updateQueue = u, u !== null && (t.flags |= 4);
        } else {
          o = r.nodeType === 9 ? r : r.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ca(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof u.is == "string" ? e = o.createElement(n, { is: u.is }) : (e = o.createElement(n), n === "select" && (o = e, u.multiple ? o.multiple = !0 : u.size && (o.size = u.size))) : e = o.createElementNS(e, n), e[mt] = t, e[Pu] = u, Y0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Zl(n, u), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), r = u;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), r = u;
                break;
              case "video":
              case "audio":
                for (r = 0; r < iu.length; r++) Z(iu[r], e);
                r = u;
                break;
              case "source":
                Z("error", e), r = u;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), r = u;
                break;
              case "details":
                Z("toggle", e), r = u;
                break;
              case "input":
                Wi(e, u), r = Vl(e, u), Z("invalid", e);
                break;
              case "option":
                r = u;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!u.multiple }, r = ne({}, u, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                Vi(e, u), r = Yl(e, u), Z("invalid", e);
                break;
              default:
                r = u;
            }
            Xl(n, r), i = r;
            for (l in i) if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "style" ? Da(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Na(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ku(e, s) : typeof s == "number" && ku(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (yu.hasOwnProperty(l) ? s != null && l === "onScroll" && Z("scroll", e) : s != null && Wo(e, l, s, o));
            }
            switch (n) {
              case "input":
                Ku(e), Hi(e, u, !1);
                break;
              case "textarea":
                Ku(e), Qi(e);
                break;
              case "option":
                u.value != null && e.setAttribute("value", "" + Yt(u.value));
                break;
              case "select":
                e.multiple = !!u.multiple, l = u.value, l != null ? An(e, !!u.multiple, l, !1) : u.defaultValue != null && An(
                  e,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                );
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = jr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break e;
              case "img":
                u = !0;
                break e;
              default:
                u = !1;
            }
          }
          u && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) X0(e, t, e.memoizedProps, u);
      else {
        if (typeof u != "string" && t.stateNode === null) throw Error(N(166));
        if (n = ln(ju.current), ln(vt.current), nr(t)) {
          if (u = t.stateNode, n = t.memoizedProps, u[mt] = t, (l = u.nodeValue !== n) && (e = He, e !== null)) switch (e.tag) {
            case 3:
              tr(u.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && tr(u.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else u = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(u), u[mt] = t, t.stateNode = u;
      }
      return Ce(t), null;
    case 13:
      if (J(ee), u = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && We !== null && t.mode & 1 && !(t.flags & 128)) m0(), $n(), t.flags |= 98560, l = !1;
        else if (l = nr(t), u !== null && u.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
            l[mt] = t;
          } else $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), l = !1;
        } else lt !== null && (Lo(lt), lt = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (u = u !== null, u !== (e !== null && e.memoizedState !== null) && u && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? fe === 0 && (fe = 3) : Ni())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return bn(), Co(e, t), e === null && _u(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return si(t.type._context), Ce(t), null;
    case 17:
      return Ie(t.type) && Ar(), Ce(t), null;
    case 19:
      if (J(ee), l = t.memoizedState, l === null) return Ce(t), null;
      if (u = (t.flags & 128) !== 0, o = l.rendering, o === null) if (u) nu(l, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ir(e), o !== null) {
            for (t.flags |= 128, nu(l, !1), u = o.updateQueue, u !== null && (t.updateQueue = u, t.flags |= 4), t.subtreeFlags = 0, u = n, n = t.child; n !== null; ) l = n, e = u, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && le() > Wn && (t.flags |= 128, u = !0, nu(l, !1), t.lanes = 4194304);
      }
      else {
        if (!u) if (e = Ir(o), e !== null) {
          if (t.flags |= 128, u = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nu(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !q) return Ce(t), null;
        } else 2 * le() - l.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, u = !0, nu(l, !1), t.lanes = 4194304);
        l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = le(), t.sibling = null, n = ee.current, K(ee, u ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Ci(), u = t.memoizedState !== null, e !== null && e.memoizedState !== null !== u && (t.flags |= 8192), u && t.mode & 1 ? Ue & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Ad(e, t) {
  switch (ri(t), t.tag) {
    case 1:
      return Ie(t.type) && Ar(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bn(), J(Re), J(_e), pi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return fi(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ee), null;
    case 4:
      return bn(), null;
    case 10:
      return si(t.type._context), null;
    case 22:
    case 23:
      return Ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var lr = !1, Ne = !1, Ld = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (u) {
    re(e, t, u);
  }
  else n.current = null;
}
function No(e, t, n) {
  try {
    n();
  } catch (u) {
    re(e, t, u);
  }
}
var zs = !1;
function Bd(e, t) {
  if (io = Dr, e = t0(), ni(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var u = n.getSelection && n.getSelection();
      if (u && u.rangeCount !== 0) {
        n = u.anchorNode;
        var r = u.anchorOffset, l = u.focusNode;
        u = u.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, s = -1, c = 0, v = 0, g = e, h = null;
        t: for (; ; ) {
          for (var x; g !== n || r !== 0 && g.nodeType !== 3 || (i = o + r), g !== l || u !== 0 && g.nodeType !== 3 || (s = o + u), g.nodeType === 3 && (o += g.nodeValue.length), (x = g.firstChild) !== null; )
            h = g, g = x;
          for (; ; ) {
            if (g === e) break t;
            if (h === n && ++c === r && (i = o), h === l && ++v === u && (s = o), (x = g.nextSibling) !== null) break;
            g = h, h = g.parentNode;
          }
          g = x;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (so = { focusedElem: e, selectionRange: n }, Dr = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var C = w.memoizedProps, M = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? C : ut(t.type, C), M);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(N(163));
      }
    } catch (m) {
      re(t, t.return, m);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return w = zs, zs = !1, w;
}
function mu(e, t, n) {
  var u = t.updateQueue;
  if (u = u !== null ? u.lastEffect : null, u !== null) {
    var r = u = u.next;
    do {
      if ((r.tag & e) === e) {
        var l = r.destroy;
        r.destroy = void 0, l !== void 0 && No(t, n, l);
      }
      r = r.next;
    } while (r !== u);
  }
}
function tl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var u = n.create;
        n.destroy = u();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _o(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Z0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Z0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[Pu], delete t[fo], delete t[hd], delete t[vd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function J0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ms(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || J0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Do(e, t, n) {
  var u = e.tag;
  if (u === 5 || u === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jr));
  else if (u !== 4 && (e = e.child, e !== null)) for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), e = e.sibling;
}
function Po(e, t, n) {
  var u = e.tag;
  if (u === 5 || u === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (u !== 4 && (e = e.child, e !== null)) for (Po(e, t, n), e = e.sibling; e !== null; ) Po(e, t, n), e = e.sibling;
}
var ye = null, rt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) q0(e, t, n), n = n.sibling;
}
function q0(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(Kr, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || Fn(n, t);
    case 6:
      var u = ye, r = rt;
      ye = null, Bt(e, t, n), ye = u, rt = r, ye !== null && (rt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (rt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n), Eu(e)) : Nl(ye, n.stateNode));
      break;
    case 4:
      u = ye, r = rt, ye = n.stateNode.containerInfo, rt = !0, Bt(e, t, n), ye = u, rt = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (u = n.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
        r = u = u.next;
        do {
          var l = r, o = l.destroy;
          l = l.tag, o !== void 0 && (l & 2 || l & 4) && No(n, t, o), r = r.next;
        } while (r !== u);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Ne && (Fn(n, t), u = n.stateNode, typeof u.componentWillUnmount == "function")) try {
        u.props = n.memoizedProps, u.state = n.memoizedState, u.componentWillUnmount();
      } catch (i) {
        re(n, t, i);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (u = Ne) || n.memoizedState !== null, Bt(e, t, n), Ne = u) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Rs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ld()), t.forEach(function(u) {
      var r = Ud.bind(null, e, u);
      n.has(u) || (n.add(u), u.then(r, r));
    });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var u = 0; u < n.length; u++) {
    var r = n[u];
    try {
      var l = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ye = i.stateNode, rt = !1;
            break e;
          case 3:
            ye = i.stateNode.containerInfo, rt = !0;
            break e;
          case 4:
            ye = i.stateNode.containerInfo, rt = !0;
            break e;
        }
        i = i.return;
      }
      if (ye === null) throw Error(N(160));
      q0(l, o, r), ye = null, rt = !1;
      var s = r.alternate;
      s !== null && (s.return = null), r.return = null;
    } catch (c) {
      re(r, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ec(t, e), t = t.sibling;
}
function ec(e, t) {
  var n = e.alternate, u = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nt(t, e), ft(e), u & 4) {
        try {
          mu(3, e, e.return), tl(3, e);
        } catch (C) {
          re(e, e.return, C);
        }
        try {
          mu(5, e, e.return);
        } catch (C) {
          re(e, e.return, C);
        }
      }
      break;
    case 1:
      nt(t, e), ft(e), u & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (nt(t, e), ft(e), u & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
        var r = e.stateNode;
        try {
          ku(r, "");
        } catch (C) {
          re(e, e.return, C);
        }
      }
      if (u & 4 && (r = e.stateNode, r != null)) {
        var l = e.memoizedProps, o = n !== null ? n.memoizedProps : l, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && l.type === "radio" && l.name != null && Sa(r, l), Zl(i, o);
          var c = Zl(i, l);
          for (o = 0; o < s.length; o += 2) {
            var v = s[o], g = s[o + 1];
            v === "style" ? Da(r, g) : v === "dangerouslySetInnerHTML" ? Na(r, g) : v === "children" ? ku(r, g) : Wo(r, v, g, c);
          }
          switch (i) {
            case "input":
              Ql(r, l);
              break;
            case "textarea":
              Ea(r, l);
              break;
            case "select":
              var h = r._wrapperState.wasMultiple;
              r._wrapperState.wasMultiple = !!l.multiple;
              var x = l.value;
              x != null ? An(r, !!l.multiple, x, !1) : h !== !!l.multiple && (l.defaultValue != null ? An(
                r,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : An(r, !!l.multiple, l.multiple ? [] : "", !1));
          }
          r[Pu] = l;
        } catch (C) {
          re(e, e.return, C);
        }
      }
      break;
    case 6:
      if (nt(t, e), ft(e), u & 4) {
        if (e.stateNode === null) throw Error(N(162));
        r = e.stateNode, l = e.memoizedProps;
        try {
          r.nodeValue = l;
        } catch (C) {
          re(e, e.return, C);
        }
      }
      break;
    case 3:
      if (nt(t, e), ft(e), u & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Eu(t.containerInfo);
      } catch (C) {
        re(e, e.return, C);
      }
      break;
    case 4:
      nt(t, e), ft(e);
      break;
    case 13:
      nt(t, e), ft(e), r = e.child, r.flags & 8192 && (l = r.memoizedState !== null, r.stateNode.isHidden = l, !l || r.alternate !== null && r.alternate.memoizedState !== null || (Si = le())), u & 4 && Rs(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (c = Ne) || v, nt(t, e), Ne = c) : nt(t, e), ft(e), u & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !v && e.mode & 1) for (F = e, v = e.child; v !== null; ) {
          for (g = F = v; F !== null; ) {
            switch (h = F, x = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mu(4, h, h.return);
                break;
              case 1:
                Fn(h, h.return);
                var w = h.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  u = h, n = h.return;
                  try {
                    t = u, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (C) {
                    re(u, n, C);
                  }
                }
                break;
              case 5:
                Fn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  $s(g);
                  continue;
                }
            }
            x !== null ? (x.return = h, F = x) : $s(g);
          }
          v = v.sibling;
        }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                r = g.stateNode, c ? (l = r.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = _a("display", o));
              } catch (C) {
                re(e, e.return, C);
              }
            }
          } else if (g.tag === 6) {
            if (v === null) try {
              g.stateNode.nodeValue = c ? "" : g.memoizedProps;
            } catch (C) {
              re(e, e.return, C);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            v === g && (v = null), g = g.return;
          }
          v === g && (v = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      nt(t, e), ft(e), u & 4 && Rs(e);
      break;
    case 21:
      break;
    default:
      nt(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (J0(n)) {
            var u = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (u.tag) {
        case 5:
          var r = u.stateNode;
          u.flags & 32 && (ku(r, ""), u.flags &= -33);
          var l = Ms(e);
          Po(e, l, r);
          break;
        case 3:
        case 4:
          var o = u.stateNode.containerInfo, i = Ms(e);
          Do(e, i, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      re(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Td(e, t, n) {
  F = e, tc(e);
}
function tc(e, t, n) {
  for (var u = (e.mode & 1) !== 0; F !== null; ) {
    var r = F, l = r.child;
    if (r.tag === 22 && u) {
      var o = r.memoizedState !== null || lr;
      if (!o) {
        var i = r.alternate, s = i !== null && i.memoizedState !== null || Ne;
        i = lr;
        var c = Ne;
        if (lr = o, (Ne = s) && !c) for (F = r; F !== null; ) o = F, s = o.child, o.tag === 22 && o.memoizedState !== null ? Os(r) : s !== null ? (s.return = o, F = s) : Os(r);
        for (; l !== null; ) F = l, tc(l), l = l.sibling;
        F = r, lr = i, Ne = c;
      }
      Is(e);
    } else r.subtreeFlags & 8772 && l !== null ? (l.return = r, F = l) : Is(e);
  }
}
function Is(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || tl(5, t);
            break;
          case 1:
            var u = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) u.componentDidMount();
            else {
              var r = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              u.componentDidUpdate(r, n.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Ss(t, l, u);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ss(t, o, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var v = c.memoizedState;
                if (v !== null) {
                  var g = v.dehydrated;
                  g !== null && Eu(g);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(N(163));
        }
        Ne || t.flags & 512 && _o(t);
      } catch (h) {
        re(t, t.return, h);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function $s(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function Os(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (s) {
            re(t, n, s);
          }
          break;
        case 1:
          var u = t.stateNode;
          if (typeof u.componentDidMount == "function") {
            var r = t.return;
            try {
              u.componentDidMount();
            } catch (s) {
              re(t, r, s);
            }
          }
          var l = t.return;
          try {
            _o(t);
          } catch (s) {
            re(t, l, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            _o(t);
          } catch (s) {
            re(t, o, s);
          }
      }
    } catch (s) {
      re(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, F = i;
      break;
    }
    F = t.return;
  }
}
var zd = Math.ceil, br = Dt.ReactCurrentDispatcher, xi = Dt.ReactCurrentOwner, qe = Dt.ReactCurrentBatchConfig, b = 0, he = null, ae = null, ke = 0, Ue = 0, jn = Zt(0), fe = 0, Tu = null, pn = 0, nl = 0, wi = 0, hu = null, ze = null, Si = 0, Wn = 1 / 0, yt = null, Ur = !1, Fo = null, Vt = null, or = !1, $t = null, Wr = 0, vu = 0, jo = null, kr = -1, xr = 0;
function Ae() {
  return b & 6 ? le() : kr !== -1 ? kr : kr = le();
}
function Qt(e) {
  return e.mode & 1 ? b & 2 && ke !== 0 ? ke & -ke : yd.transition !== null ? (xr === 0 && (xr = $a()), xr) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qa(e.type)), e) : 1;
}
function it(e, t, n, u) {
  if (50 < vu) throw vu = 0, jo = null, Error(N(185));
  Mu(e, n, u), (!(b & 2) || e !== he) && (e === he && (!(b & 2) && (nl |= n), fe === 4 && Rt(e, ke)), $e(e, u), n === 1 && b === 0 && !(t.mode & 1) && (Wn = le() + 500, Jr && Jt()));
}
function $e(e, t) {
  var n = e.callbackNode;
  y4(e, t);
  var u = _r(e, e === he ? ke : 0);
  if (u === 0) n !== null && Gi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = u & -u, e.callbackPriority !== t) {
    if (n != null && Gi(n), t === 1) e.tag === 0 ? gd(bs.bind(null, e)) : d0(bs.bind(null, e)), pd(function() {
      !(b & 6) && Jt();
    }), n = null;
    else {
      switch (Oa(u)) {
        case 1:
          n = Yo;
          break;
        case 4:
          n = Ra;
          break;
        case 16:
          n = Nr;
          break;
        case 536870912:
          n = Ia;
          break;
        default:
          n = Nr;
      }
      n = ac(n, nc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nc(e, t) {
  if (kr = -1, xr = 0, b & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (Mn() && e.callbackNode !== n) return null;
  var u = _r(e, e === he ? ke : 0);
  if (u === 0) return null;
  if (u & 30 || u & e.expiredLanes || t) t = Hr(e, u);
  else {
    t = u;
    var r = b;
    b |= 2;
    var l = rc();
    (he !== e || ke !== t) && (yt = null, Wn = le() + 500, on(e, t));
    do
      try {
        Id();
        break;
      } catch (i) {
        uc(e, i);
      }
    while (!0);
    ii(), br.current = l, b = r, ae !== null ? t = 0 : (he = null, ke = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (r = no(e), r !== 0 && (u = r, t = Ao(e, r))), t === 1) throw n = Tu, on(e, 0), Rt(e, u), $e(e, le()), n;
    if (t === 6) Rt(e, u);
    else {
      if (r = e.current.alternate, !(u & 30) && !Md(r) && (t = Hr(e, u), t === 2 && (l = no(e), l !== 0 && (u = l, t = Ao(e, l))), t === 1)) throw n = Tu, on(e, 0), Rt(e, u), $e(e, le()), n;
      switch (e.finishedWork = r, e.finishedLanes = u, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          nn(e, ze, yt);
          break;
        case 3:
          if (Rt(e, u), (u & 130023424) === u && (t = Si + 500 - le(), 10 < t)) {
            if (_r(e, 0) !== 0) break;
            if (r = e.suspendedLanes, (r & u) !== u) {
              Ae(), e.pingedLanes |= e.suspendedLanes & r;
              break;
            }
            e.timeoutHandle = co(nn.bind(null, e, ze, yt), t);
            break;
          }
          nn(e, ze, yt);
          break;
        case 4:
          if (Rt(e, u), (u & 4194240) === u) break;
          for (t = e.eventTimes, r = -1; 0 < u; ) {
            var o = 31 - ot(u);
            l = 1 << o, o = t[o], o > r && (r = o), u &= ~l;
          }
          if (u = r, u = le() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * zd(u / 1960)) - u, 10 < u) {
            e.timeoutHandle = co(nn.bind(null, e, ze, yt), u);
            break;
          }
          nn(e, ze, yt);
          break;
        case 5:
          nn(e, ze, yt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return $e(e, le()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Ao(e, t) {
  var n = hu;
  return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = Hr(e, t), e !== 2 && (t = ze, ze = n, t !== null && Lo(t)), e;
}
function Lo(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function Md(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var u = 0; u < n.length; u++) {
        var r = n[u], l = r.getSnapshot;
        r = r.value;
        try {
          if (!st(l(), r)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Rt(e, t) {
  for (t &= ~wi, t &= ~nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ot(t), u = 1 << n;
    e[n] = -1, t &= ~u;
  }
}
function bs(e) {
  if (b & 6) throw Error(N(327));
  Mn();
  var t = _r(e, 0);
  if (!(t & 1)) return $e(e, le()), null;
  var n = Hr(e, t);
  if (e.tag !== 0 && n === 2) {
    var u = no(e);
    u !== 0 && (t = u, n = Ao(e, u));
  }
  if (n === 1) throw n = Tu, on(e, 0), Rt(e, t), $e(e, le()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, nn(e, ze, yt), $e(e, le()), null;
}
function Ei(e, t) {
  var n = b;
  b |= 1;
  try {
    return e(t);
  } finally {
    b = n, b === 0 && (Wn = le() + 500, Jr && Jt());
  }
}
function mn(e) {
  $t !== null && $t.tag === 0 && !(b & 6) && Mn();
  var t = b;
  b |= 1;
  var n = qe.transition, u = H;
  try {
    if (qe.transition = null, H = 1, e) return e();
  } finally {
    H = u, qe.transition = n, b = t, !(b & 6) && Jt();
  }
}
function Ci() {
  Ue = jn.current, J(jn);
}
function on(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fd(n)), ae !== null) for (n = ae.return; n !== null; ) {
    var u = n;
    switch (ri(u), u.tag) {
      case 1:
        u = u.type.childContextTypes, u != null && Ar();
        break;
      case 3:
        bn(), J(Re), J(_e), pi();
        break;
      case 5:
        fi(u);
        break;
      case 4:
        bn();
        break;
      case 13:
        J(ee);
        break;
      case 19:
        J(ee);
        break;
      case 10:
        si(u.type._context);
        break;
      case 22:
      case 23:
        Ci();
    }
    n = n.return;
  }
  if (he = e, ae = e = Kt(e.current, null), ke = Ue = t, fe = 0, Tu = null, wi = nl = pn = 0, ze = hu = null, rn !== null) {
    for (t = 0; t < rn.length; t++) if (n = rn[t], u = n.interleaved, u !== null) {
      n.interleaved = null;
      var r = u.next, l = n.pending;
      if (l !== null) {
        var o = l.next;
        l.next = r, u.next = o;
      }
      n.pending = u;
    }
    rn = null;
  }
  return e;
}
function uc(e, t) {
  do {
    var n = ae;
    try {
      if (ii(), vr.current = Or, $r) {
        for (var u = te.memoizedState; u !== null; ) {
          var r = u.queue;
          r !== null && (r.pending = null), u = u.next;
        }
        $r = !1;
      }
      if (fn = 0, me = de = te = null, pu = !1, Au = 0, xi.current = null, n === null || n.return === null) {
        fe = 1, Tu = t, ae = null;
        break;
      }
      e: {
        var l = e, o = n.return, i = n, s = t;
        if (t = ke, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, v = i, g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var x = Ps(o);
          if (x !== null) {
            x.flags &= -257, Fs(x, o, i, l, t), x.mode & 1 && Ds(l, c, t), t = x, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(s), t.updateQueue = C;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ds(l, c, t), Ni();
              break e;
            }
            s = Error(N(426));
          }
        } else if (q && i.mode & 1) {
          var M = Ps(o);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Fs(M, o, i, l, t), li(Un(s, i));
            break e;
          }
        }
        l = s = Un(s, i), fe !== 4 && (fe = 2), hu === null ? hu = [l] : hu.push(l), l = o;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = O0(l, s, t);
              ws(l, f);
              break e;
            case 1:
              i = s;
              var a = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vt === null || !Vt.has(d)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var m = b0(l, i, t);
                ws(l, m);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      oc(n);
    } catch (S) {
      t = S, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rc() {
  var e = br.current;
  return br.current = Or, e === null ? Or : e;
}
function Ni() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), he === null || !(pn & 268435455) && !(nl & 268435455) || Rt(he, ke);
}
function Hr(e, t) {
  var n = b;
  b |= 2;
  var u = rc();
  (he !== e || ke !== t) && (yt = null, on(e, t));
  do
    try {
      Rd();
      break;
    } catch (r) {
      uc(e, r);
    }
  while (!0);
  if (ii(), b = n, br.current = u, ae !== null) throw Error(N(261));
  return he = null, ke = 0, fe;
}
function Rd() {
  for (; ae !== null; ) lc(ae);
}
function Id() {
  for (; ae !== null && !a4(); ) lc(ae);
}
function lc(e) {
  var t = sc(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? oc(e) : ae = t, xi.current = null;
}
function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ad(n, t), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ae = null;
        return;
      }
    } else if (n = jd(n, t, Ue), n !== null) {
      ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function nn(e, t, n) {
  var u = H, r = qe.transition;
  try {
    qe.transition = null, H = 1, $d(e, t, n, u);
  } finally {
    qe.transition = r, H = u;
  }
  return null;
}
function $d(e, t, n, u) {
  do
    Mn();
  while ($t !== null);
  if (b & 6) throw Error(N(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (k4(e, l), e === he && (ae = he = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || or || (or = !0, ac(Nr, function() {
    return Mn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = qe.transition, qe.transition = null;
    var o = H;
    H = 1;
    var i = b;
    b |= 4, xi.current = null, Bd(e, n), ec(n, e), ld(so), Dr = !!io, so = io = null, e.current = n, Td(n), c4(), b = i, H = o, qe.transition = l;
  } else e.current = n;
  if (or && (or = !1, $t = e, Wr = r), l = e.pendingLanes, l === 0 && (Vt = null), p4(n.stateNode), $e(e, le()), t !== null) for (u = e.onRecoverableError, n = 0; n < t.length; n++) r = t[n], u(r.value, { componentStack: r.stack, digest: r.digest });
  if (Ur) throw Ur = !1, e = Fo, Fo = null, e;
  return Wr & 1 && e.tag !== 0 && Mn(), l = e.pendingLanes, l & 1 ? e === jo ? vu++ : (vu = 0, jo = e) : vu = 0, Jt(), null;
}
function Mn() {
  if ($t !== null) {
    var e = Oa(Wr), t = qe.transition, n = H;
    try {
      if (qe.transition = null, H = 16 > e ? 16 : e, $t === null) var u = !1;
      else {
        if (e = $t, $t = null, Wr = 0, b & 6) throw Error(N(331));
        var r = b;
        for (b |= 4, F = e.current; F !== null; ) {
          var l = F, o = l.child;
          if (F.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (F = c; F !== null; ) {
                  var v = F;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mu(8, v, l);
                  }
                  var g = v.child;
                  if (g !== null) g.return = v, F = g;
                  else for (; F !== null; ) {
                    v = F;
                    var h = v.sibling, x = v.return;
                    if (Z0(v), v === c) {
                      F = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = x, F = h;
                      break;
                    }
                    F = x;
                  }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var C = w.child;
                if (C !== null) {
                  w.child = null;
                  do {
                    var M = C.sibling;
                    C.sibling = null, C = M;
                  } while (C !== null);
                }
              }
              F = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) o.return = l, F = o;
          else e: for (; F !== null; ) {
            if (l = F, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                mu(9, l, l.return);
            }
            var f = l.sibling;
            if (f !== null) {
              f.return = l.return, F = f;
              break e;
            }
            F = l.return;
          }
        }
        var a = e.current;
        for (F = a; F !== null; ) {
          o = F;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, F = d;
          else e: for (o = a; F !== null; ) {
            if (i = F, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  tl(9, i);
              }
            } catch (S) {
              re(i, i.return, S);
            }
            if (i === o) {
              F = null;
              break e;
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, F = m;
              break e;
            }
            F = i.return;
          }
        }
        if (b = r, Jt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(Kr, e);
        } catch {
        }
        u = !0;
      }
      return u;
    } finally {
      H = n, qe.transition = t;
    }
  }
  return !1;
}
function Us(e, t, n) {
  t = Un(n, t), t = O0(e, t, 1), e = Ht(e, t, 1), t = Ae(), e !== null && (Mu(e, 1, t), $e(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Us(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Us(t, e, n);
      break;
    } else if (t.tag === 1) {
      var u = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Vt === null || !Vt.has(u))) {
        e = Un(n, e), e = b0(t, e, 1), t = Ht(t, e, 1), e = Ae(), t !== null && (Mu(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Od(e, t, n) {
  var u = e.pingCache;
  u !== null && u.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ke & n) === n && (fe === 4 || fe === 3 && (ke & 130023424) === ke && 500 > le() - Si ? on(e, 0) : wi |= n), $e(e, t);
}
function ic(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xu, Xu <<= 1, !(Xu & 130023424) && (Xu = 4194304)) : t = 1);
  var n = Ae();
  e = Nt(e, t), e !== null && (Mu(e, t, n), $e(e, n));
}
function bd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ic(e, n);
}
function Ud(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var u = e.stateNode, r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      u = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  u !== null && u.delete(t), ic(e, n);
}
var sc;
sc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, Fd(e, t, n);
    Me = !!(e.flags & 131072);
  }
  else Me = !1, q && t.flags & 1048576 && f0(t, Tr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var u = t.type;
      yr(e, t), e = t.pendingProps;
      var r = In(t, _e.current);
      zn(t, n), r = hi(null, t, u, e, r, n);
      var l = vi();
      return t.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(u) ? (l = !0, Lr(t)) : l = !1, t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, ci(t), r.updater = el, t.stateNode = r, r._reactInternals = t, yo(t, u, e, n), t = wo(null, t, u, !0, l, n)) : (t.tag = 0, q && l && ui(t), je(null, t, r, n), t = t.child), t;
    case 16:
      u = t.elementType;
      e: {
        switch (yr(e, t), e = t.pendingProps, r = u._init, u = r(u._payload), t.type = u, r = t.tag = Hd(u), e = ut(u, e), r) {
          case 0:
            t = xo(null, t, u, e, n);
            break e;
          case 1:
            t = Ls(null, t, u, e, n);
            break e;
          case 11:
            t = js(null, t, u, e, n);
            break e;
          case 14:
            t = As(null, t, u, ut(u.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          u,
          ""
        ));
      }
      return t;
    case 0:
      return u = t.type, r = t.pendingProps, r = t.elementType === u ? r : ut(u, r), xo(e, t, u, r, n);
    case 1:
      return u = t.type, r = t.pendingProps, r = t.elementType === u ? r : ut(u, r), Ls(e, t, u, r, n);
    case 3:
      e: {
        if (V0(t), e === null) throw Error(N(387));
        u = t.pendingProps, l = t.memoizedState, r = l.element, y0(e, t), Rr(t, u, null, n);
        var o = t.memoizedState;
        if (u = o.element, l.isDehydrated) if (l = { element: u, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          r = Un(Error(N(423)), t), t = Bs(e, t, u, n, r);
          break e;
        } else if (u !== r) {
          r = Un(Error(N(424)), t), t = Bs(e, t, u, n, r);
          break e;
        } else for (We = Wt(t.stateNode.containerInfo.firstChild), He = t, q = !0, lt = null, n = v0(t, null, u, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), u === r) {
            t = _t(e, t, n);
            break e;
          }
          je(e, t, u, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return k0(t), e === null && ho(t), u = t.type, r = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = r.children, ao(u, r) ? o = null : l !== null && ao(u, l) && (t.flags |= 32), H0(e, t), je(e, t, o, n), t.child;
    case 6:
      return e === null && ho(t), null;
    case 13:
      return Q0(e, t, n);
    case 4:
      return di(t, t.stateNode.containerInfo), u = t.pendingProps, e === null ? t.child = On(t, null, u, n) : je(e, t, u, n), t.child;
    case 11:
      return u = t.type, r = t.pendingProps, r = t.elementType === u ? r : ut(u, r), js(e, t, u, r, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (u = t.type._context, r = t.pendingProps, l = t.memoizedProps, o = r.value, K(zr, u._currentValue), u._currentValue = o, l !== null) if (st(l.value, o)) {
          if (l.children === r.children && !Re.current) {
            t = _t(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var i = l.dependencies;
          if (i !== null) {
            o = l.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === u) {
                if (l.tag === 1) {
                  s = St(-1, n & -n), s.tag = 2;
                  var c = l.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var v = c.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), c.pending = s;
                  }
                }
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), vo(
                  l.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (o = l.return, o === null) throw Error(N(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), vo(o, n, t), o = l.sibling;
          } else o = l.child;
          if (o !== null) o.return = l;
          else for (o = l; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (l = o.sibling, l !== null) {
              l.return = o.return, o = l;
              break;
            }
            o = o.return;
          }
          l = o;
        }
        je(e, t, r.children, n), t = t.child;
      }
      return t;
    case 9:
      return r = t.type, u = t.pendingProps.children, zn(t, n), r = et(r), u = u(r), t.flags |= 1, je(e, t, u, n), t.child;
    case 14:
      return u = t.type, r = ut(u, t.pendingProps), r = ut(u.type, r), As(e, t, u, r, n);
    case 15:
      return U0(e, t, t.type, t.pendingProps, n);
    case 17:
      return u = t.type, r = t.pendingProps, r = t.elementType === u ? r : ut(u, r), yr(e, t), t.tag = 1, Ie(u) ? (e = !0, Lr(t)) : e = !1, zn(t, n), $0(t, u, r), yo(t, u, r, n), wo(null, t, u, !0, e, n);
    case 19:
      return K0(e, t, n);
    case 22:
      return W0(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function ac(e, t) {
  return Ma(e, t);
}
function Wd(e, t, n, u) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, u) {
  return new Wd(e, t, n, u);
}
function _i(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hd(e) {
  if (typeof e == "function") return _i(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Vo) return 11;
    if (e === Qo) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wr(e, t, n, u, r, l) {
  var o = 2;
  if (u = e, typeof e == "function") _i(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case xn:
      return sn(n.children, r, l, t);
    case Ho:
      o = 8, r |= 8;
      break;
    case bl:
      return e = Je(12, n, t, r | 2), e.elementType = bl, e.lanes = l, e;
    case Ul:
      return e = Je(13, n, t, r), e.elementType = Ul, e.lanes = l, e;
    case Wl:
      return e = Je(19, n, t, r), e.elementType = Wl, e.lanes = l, e;
    case ka:
      return ul(n, r, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ga:
          o = 10;
          break e;
        case ya:
          o = 9;
          break e;
        case Vo:
          o = 11;
          break e;
        case Qo:
          o = 14;
          break e;
        case Tt:
          o = 16, u = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = Je(o, n, t, r), t.elementType = e, t.type = u, t.lanes = l, t;
}
function sn(e, t, n, u) {
  return e = Je(7, e, u, t), e.lanes = n, e;
}
function ul(e, t, n, u) {
  return e = Je(22, e, u, t), e.elementType = ka, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bl(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function Tl(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Vd(e, t, n, u, r) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ml(0), this.expirationTimes = ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ml(0), this.identifierPrefix = u, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null;
}
function Di(e, t, n, u, r, l, o, i, s) {
  return e = new Vd(e, t, n, i, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Je(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: u, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ci(l), e;
}
function Qd(e, t, n) {
  var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: u == null ? null : "" + u, children: e, containerInfo: t, implementation: n };
}
function cc(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return c0(e, n, t);
  }
  return t;
}
function dc(e, t, n, u, r, l, o, i, s) {
  return e = Di(n, u, !0, e, r, l, o, i, s), e.context = cc(null), n = e.current, u = Ae(), r = Qt(n), l = St(u, r), l.callback = t ?? null, Ht(n, l, r), e.current.lanes = r, Mu(e, r, u), $e(e, u), e;
}
function rl(e, t, n, u) {
  var r = t.current, l = Ae(), o = Qt(r);
  return n = cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(l, o), t.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (t.callback = u), e = Ht(r, t, o), e !== null && (it(e, r, o, l), hr(e, r, o)), o;
}
function Vr(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ws(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pi(e, t) {
  Ws(e, t), (e = e.alternate) && Ws(e, t);
}
function Kd() {
  return null;
}
var fc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fi(e) {
  this._internalRoot = e;
}
ll.prototype.render = Fi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  rl(e, t, null, null);
};
ll.prototype.unmount = Fi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function() {
      rl(null, e, null, null);
    }), t[Ct] = null;
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++) ;
    Mt.splice(n, 0, e), n === 0 && Va(e);
  }
};
function ji(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ol(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Hs() {
}
function Yd(e, t, n, u, r) {
  if (r) {
    if (typeof u == "function") {
      var l = u;
      u = function() {
        var c = Vr(o);
        l.call(c);
      };
    }
    var o = dc(t, u, e, 0, null, !1, !1, "", Hs);
    return e._reactRootContainer = o, e[Ct] = o.current, _u(e.nodeType === 8 ? e.parentNode : e), mn(), o;
  }
  for (; r = e.lastChild; ) e.removeChild(r);
  if (typeof u == "function") {
    var i = u;
    u = function() {
      var c = Vr(s);
      i.call(c);
    };
  }
  var s = Di(e, 0, !1, null, null, !1, !1, "", Hs);
  return e._reactRootContainer = s, e[Ct] = s.current, _u(e.nodeType === 8 ? e.parentNode : e), mn(function() {
    rl(t, s, n, u);
  }), s;
}
function il(e, t, n, u, r) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = Vr(o);
        i.call(s);
      };
    }
    rl(t, o, e, r);
  } else o = Yd(n, t, e, r, u);
  return Vr(o);
}
ba = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ou(t.pendingLanes);
        n !== 0 && (Go(t, n | 1), $e(t, le()), !(b & 6) && (Wn = le() + 500, Jt()));
      }
      break;
    case 13:
      mn(function() {
        var u = Nt(e, 1);
        if (u !== null) {
          var r = Ae();
          it(u, e, 1, r);
        }
      }), Pi(e, 1);
  }
};
Xo = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      it(t, e, 134217728, n);
    }
    Pi(e, 134217728);
  }
};
Ua = function(e) {
  if (e.tag === 13) {
    var t = Qt(e), n = Nt(e, t);
    if (n !== null) {
      var u = Ae();
      it(n, e, t, u);
    }
    Pi(e, t);
  }
};
Wa = function() {
  return H;
};
Ha = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
ql = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ql(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var u = n[t];
          if (u !== e && u.form === e.form) {
            var r = Zr(u);
            if (!r) throw Error(N(90));
            wa(u), Ql(u, r);
          }
        }
      }
      break;
    case "textarea":
      Ea(e, n);
      break;
    case "select":
      t = n.value, t != null && An(e, !!n.multiple, t, !1);
  }
};
ja = Ei;
Aa = mn;
var Gd = { usingClientEntryPoint: !1, Events: [Iu, Cn, Zr, Pa, Fa, Ei] }, uu = { findFiberByHostInstance: un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xd = { bundleType: uu.bundleType, version: uu.version, rendererPackageName: uu.rendererPackageName, rendererConfig: uu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ta(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: uu.findFiberByHostInstance || Kd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ir.isDisabled && ir.supportsFiber) try {
    Kr = ir.inject(Xd), ht = ir;
  } catch {
  }
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd;
Qe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ji(t)) throw Error(N(200));
  return Qd(e, t, null, n);
};
Qe.createRoot = function(e, t) {
  if (!ji(e)) throw Error(N(299));
  var n = !1, u = "", r = fc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = Di(e, 1, !1, null, null, n, !1, u, r), e[Ct] = t.current, _u(e.nodeType === 8 ? e.parentNode : e), new Fi(t);
};
Qe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Ta(t), e = e === null ? null : e.stateNode, e;
};
Qe.flushSync = function(e) {
  return mn(e);
};
Qe.hydrate = function(e, t, n) {
  if (!ol(t)) throw Error(N(200));
  return il(null, e, t, !0, n);
};
Qe.hydrateRoot = function(e, t, n) {
  if (!ji(e)) throw Error(N(405));
  var u = n != null && n.hydratedSources || null, r = !1, l = "", o = fc;
  if (n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = dc(t, null, e, 1, n ?? null, r, !1, l, o), e[Ct] = t.current, _u(e), u) for (e = 0; e < u.length; e++) n = u[e], r = n._getVersion, r = r(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(
    n,
    r
  );
  return new ll(t);
};
Qe.render = function(e, t, n) {
  if (!ol(t)) throw Error(N(200));
  return il(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function(e) {
  if (!ol(e)) throw Error(N(40));
  return e._reactRootContainer ? (mn(function() {
    il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Qe.unstable_batchedUpdates = Ei;
Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, u) {
  if (!ol(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return il(e, t, n, !1, u);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function pc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), pa.exports = Qe;
var mc = pa.exports, hc, Vs = mc;
hc = Vs.createRoot, Vs.hydrateRoot;
function Zd(e) {
  const t = e.trim().replace(/\s+/g, " ");
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function Ai(e) {
  return Zd(e.category ?? "");
}
function Jd(e) {
  const t = e.map((u) => ({
    ...u,
    category: Ai(u) || void 0
  }));
  let n = "";
  for (const u of t)
    u.category ? n = u.category : n && (u.category = n);
  return t;
}
function qd(e) {
  const t = /* @__PURE__ */ new Set();
  for (const u of e) {
    const r = Ai(u);
    r && t.add(r);
  }
  const n = [...t].sort((u, r) => u.localeCompare(r, "bg"));
  return [{ id: null, label: "Всички" }, ...n.map((u) => ({ id: u, label: u }))];
}
function Qs(e, t) {
  return t ? Ai(e) === t : !0;
}
var ef = {
  booking: {
    modal: {
      ariaLabel: "Резервация",
      titleDefault: "Резервация",
      titleWithStaff: "при {name}",
      closeAria: "Затвори",
      confirmClose: "Сигурни ли сте, че искате да затворите резервацията?",
      stepService: "Услуга",
      stepSpecialist: "Специалист",
      stepTime: "Час",
      stepDetails: "Данни",
      stepAria: "Стъпка {n}: {label}",
      selectedServices: "Избрани услуги",
      services: "Услуги",
      serviceCountOne: "{count} услуга",
      serviceCountMany: "{count} услуги",
      minSuffix: "мин",
      remove: "Премахни",
      removeAria: "Премахни услуга",
      addMoreServices: "Добави още услуги",
      hideList: "Скрий списъка · {count} избрани",
      add: "Добави",
      addService: "Добави услуга",
      noServicesInCategory: "Няма услуги в избраната категория.",
      selectSpecialist: "Избери специалист",
      availableFor: "Налични за",
      serviceUnavailable: "Тази услуга не е налична за резервация в момента.",
      selectOtherService: "Избери друга услуга",
      dateTime: "Дата и час",
      timeWithStaff: "Час при {name}",
      date: "Дата",
      time: "Час",
      selectDateFirst: "Първо изберете дата.",
      dayClosed: "В този ден салонът е затворен.",
      noSlots: "Няма свободни часове за избраните услуги.",
      selectServiceFirst: "Първо изберете услуга.",
      contactDetails: "Данни за контакт",
      name: "Име",
      phone: "Телефон",
      email: "Имейл",
      notes: "Бележки (по желание)",
      smsConsentPre: "Съгласявам се да получавам SMS напомняния за резервацията от",
      smsConsentPost: "на посочения телефон. Прочетох",
      smsConsentAnd: "и",
      terms: "Общите условия",
      privacy: "Политиката за поверителност",
      smsConsentNote: "Без отметка резервацията ви остава валидна, но няма да получите SMS напомняние от салона.",
      totalDuration: "Общо: {min} мин",
      totalPrice: "Общо: {price}",
      startTime: "Старт {start} · Готови около {end}",
      depositRequired: "Изисква се депозит от",
      paymentFrom: "Плащане от",
      securePayment: "Защитено плащане чрез",
      back: "Назад",
      continue: "Продължи",
      sendRequest: "Изпрати заявка",
      payAndBook: "Плати и резервирай",
      disclaimerPre: "За да завършиш резервацията са нужни име, телефон и имейл — използваме ги само за управление на резервацията, потвърждения и напомняния.",
      disclaimerAccept: "С изпращането приемаш"
    },
    success: {
      confirmed: "Резервацията е потвърдена",
      waitingAt: "Очакваме ви в",
      labelService: "Услуга",
      labelWhen: "Кога",
      timeFormat: "{date}, {time} ч.",
      done: "Готово"
    },
    errors: {
      noService: "Моля, изберете поне една услуга.",
      noName: "Моля, въведете вашето име.",
      noPhone: "Моля, въведете телефонен номер.",
      noEmail: "Моля, въведете имейл.",
      noDate: "Моля, изберете дата.",
      noTime: "Моля, изберете час.",
      saveFailed: "Резервацията не можа да бъде записана. Моля опитайте отново.",
      httpError: "Грешка {status}",
      paymentFailed: "Грешка при инициализиране на плащането.",
      generic: "Грешка при резервация."
    }
  },
  adminAuth: {
    loading: "Зареждане…",
    signIn: {
      title: "Вход",
      subtitle: "Въведете имейл и парола за достъп до панела.",
      emailLabel: "Имейл",
      emailPlaceholder: "ime@example.com",
      passwordLabel: "Парола",
      passwordPlaceholder: "••••••••",
      showPassword: "Покажи паролата",
      hidePassword: "Скрий паролата",
      submit: "Влез",
      submitting: "Влизане…",
      forgot: "Забравена парола?",
      errorGeneric: "Грешка",
      errorLogin: "Грешка при вход"
    },
    forgot: {
      back: "← Назад",
      title: "Забравена парола",
      subtitle: "Въведете имейла на акаунта. Ще изпратим линк за задаване на нова парола.",
      submit: "Изпрати линк",
      submitting: "Изпращане…",
      sentTitle: "Провери пощата си",
      sentBody: "Изпратихме линк за задаване на нова парола.",
      backToSignIn: "Назад към вход"
    },
    setPassword: {
      invalidLink: "Невалиден линк.",
      invalidLinkHint: "Поискайте нов от страницата за вход.",
      titleCreate: "Задай парола",
      titleReset: "Нова парола",
      subtitleCreate: "Въведи името си и избери парола за достъп до панела.",
      subtitleReset: "Въведи нова парола за твоя панел.",
      nameLabel: "Име",
      namePlaceholder: "Вашето име",
      emailLabel: "Имейл",
      emailPlaceholder: "ime@example.com",
      passwordLabel: "Парола",
      passwordPlaceholder: "Поне 8 символа",
      confirmLabel: "Потвърди паролата",
      confirmPlaceholder: "Повтори паролата",
      show: "Покажи",
      hide: "Скрий",
      submitCreate: "Създай акаунт →",
      submitReset: "Смени паролата →",
      submittingCreate: "Създаване…",
      submittingReset: "Запазване…",
      mismatch: "Паролите не съвпадат.",
      doneCreate: "Акаунтът е създаден!",
      doneReset: "Паролата е сменена!",
      doneRedirect: "Влизаш в панела…",
      haveAccount: "Вече имаш акаунт?",
      signInLink: "Влез",
      errorGeneric: "Грешка"
    }
  },
  common: {
    days: {
      monday: "Понеделник",
      tuesday: "Вторник",
      wednesday: "Сряда",
      thursday: "Четвъртък",
      friday: "Петък",
      saturday: "Събота",
      sunday: "Неделя"
    }
  },
  adminDashboard: {
    navigation: "Навигация",
    tabs: {
      site: "Сайт",
      images: "Снимки за сайта",
      specialist: "Профил на собственика",
      staff: "Екип",
      services: "Услуги за резервации",
      offers: "Оферти",
      brands: "Брандове",
      blog: "Блог",
      hours: "Работно време",
      bookings: "Резервации",
      clients: "Клиенти",
      domain: "Собствен домейн",
      payments: "Плащания",
      integrations: "Интеграции",
      marketing: "Маркетинг",
      legal: "Правни",
      account: "Акаунт"
    },
    groups: {
      navigation: "Навигация",
      content: "Съдържание",
      team: "Екип",
      settings: "Настройки",
      site: "Сайт",
      engine: "Резервационен модул",
      publicSite: "Публичен сайт",
      delivery: "Доставка и домейн",
      account: "Акаунт"
    },
    actions: {
      save: "Запази",
      copyLink: "Копирай линка",
      qrCode: "QR код",
      closeMenu: "Затвори менюто"
    },
    notices: {
      siteSaved: "Информацията е запазена.",
      profileSaved: "Профилът е запазен.",
      imagesSaved: "Снимките са запазени.",
      imagesUploadNeedsSave: 'Снимките са качени, но не успяхме да ги запазим. Натисни „Запази".',
      servicesSaved: "Услугите са запазени.",
      hoursSaved: "Работното време е запазено.",
      linkCopied: "Линкът е копиран!"
    },
    siteTab: {
      sections: {
        basics: "Контакти",
        address: "WWW.",
        addressMobile: "Адрес / WWW",
        about: "За салона",
        faq: "FAQ",
        amenities: "Удобства",
        amenitiesMobile: "Удобства"
      },
      fields: {
        salonName: "Име на салона",
        phone: "Телефон",
        email: "Имейл",
        city: "Град",
        language: "Език",
        address: "Адрес",
        heroTitle: "Заглавие на началната страница",
        heroTitleHint: "По избор. Ако оставиш празно, ще се покаже името на салона.",
        heroSubtitle: "Подзаглавие / tagline",
        heroSubtitleHint: 'Кратък текст под заглавието (напр. „Красота, която те кара да се чувстваш у дома").'
      },
      languageOptions: {
        bg: "Български",
        en: "Английски"
      },
      locationFallback: "Локация",
      viewAppleMaps: "Виж в Apple Maps",
      socialPlaceholder: "salonnaprimer",
      connectedDomain: "Свързан домейн",
      manage: "Управлявай",
      connectOwnDomain: "Свържи собствен домейн",
      connectOwnDomainHint: "Въведи домейн, който вече си купил, и го насочи към сайта."
    }
  }
}, tf = {
  booking: {
    modal: {
      ariaLabel: "Booking",
      titleDefault: "Book",
      titleWithStaff: "with {name}",
      closeAria: "Close",
      confirmClose: "Are you sure you want to close the booking?",
      stepService: "Service",
      stepSpecialist: "Specialist",
      stepTime: "Time",
      stepDetails: "Details",
      stepAria: "Step {n}: {label}",
      selectedServices: "Selected services",
      services: "Services",
      serviceCountOne: "{count} service",
      serviceCountMany: "{count} services",
      minSuffix: "min",
      remove: "Remove",
      removeAria: "Remove service",
      addMoreServices: "Add more services",
      hideList: "Hide list · {count} selected",
      add: "Add",
      addService: "Add service",
      noServicesInCategory: "No services in this category.",
      selectSpecialist: "Choose a specialist",
      availableFor: "Available for",
      serviceUnavailable: "This service is not available for booking right now.",
      selectOtherService: "Choose a different service",
      dateTime: "Date & time",
      timeWithStaff: "Time with {name}",
      date: "Date",
      time: "Time",
      selectDateFirst: "Please select a date first.",
      dayClosed: "The salon is closed on this day.",
      noSlots: "No available slots for the selected services.",
      selectServiceFirst: "Please select a service first.",
      contactDetails: "Your details",
      name: "Name",
      phone: "Phone",
      email: "Email",
      notes: "Notes (optional)",
      smsConsentPre: "I agree to receive SMS reminders for this booking from",
      smsConsentPost: "to the phone number provided. I have read the",
      smsConsentAnd: "and",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      smsConsentNote: "Without this, your booking is still valid — you just won't receive SMS reminders from the salon.",
      totalDuration: "Total: {min} min",
      totalPrice: "Total: {price}",
      startTime: "Starts {start} · Done around {end}",
      depositRequired: "Deposit required:",
      paymentFrom: "Payment of",
      securePayment: "Secure payment via",
      back: "Back",
      continue: "Continue",
      sendRequest: "Request booking",
      payAndBook: "Pay & book",
      disclaimerPre: "To complete your booking we need your name, phone and email — used only to manage your appointment, send confirmations and reminders.",
      disclaimerAccept: "By submitting you accept the"
    },
    success: {
      confirmed: "Booking confirmed",
      waitingAt: "We'll see you at",
      labelService: "Service",
      labelWhen: "When",
      timeFormat: "{date} at {time}",
      done: "Done"
    },
    errors: {
      noService: "Please select at least one service.",
      noName: "Please enter your name.",
      noPhone: "Please enter your phone number.",
      noEmail: "Please enter your email.",
      noDate: "Please select a date.",
      noTime: "Please select a time.",
      saveFailed: "Your booking could not be saved. Please try again.",
      httpError: "Error {status}",
      paymentFailed: "Could not initialise payment. Please try again.",
      generic: "Something went wrong. Please try again."
    }
  },
  adminAuth: {
    loading: "Loading…",
    signIn: {
      title: "Sign in",
      subtitle: "Enter your email and password to access the panel.",
      emailLabel: "Email",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      showPassword: "Show password",
      hidePassword: "Hide password",
      submit: "Sign in",
      submitting: "Signing in…",
      forgot: "Forgot password?",
      errorGeneric: "Error",
      errorLogin: "Sign-in failed"
    },
    forgot: {
      back: "← Back",
      title: "Forgot password",
      subtitle: "Enter the account email. We will send a link to set a new password.",
      submit: "Send link",
      submitting: "Sending…",
      sentTitle: "Check your inbox",
      sentBody: "We sent a link to set a new password.",
      backToSignIn: "Back to sign in"
    },
    setPassword: {
      invalidLink: "Invalid link.",
      invalidLinkHint: "Request a new one from the sign-in page.",
      titleCreate: "Set password",
      titleReset: "New password",
      subtitleCreate: "Enter your name and choose a password to access the panel.",
      subtitleReset: "Enter a new password for your panel.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "At least 8 characters",
      confirmLabel: "Confirm password",
      confirmPlaceholder: "Repeat the password",
      show: "Show",
      hide: "Hide",
      submitCreate: "Create account →",
      submitReset: "Change password →",
      submittingCreate: "Creating…",
      submittingReset: "Saving…",
      mismatch: "Passwords do not match.",
      doneCreate: "Account created!",
      doneReset: "Password changed!",
      doneRedirect: "Signing you in…",
      haveAccount: "Already have an account?",
      signInLink: "Sign in",
      errorGeneric: "Error"
    }
  },
  common: {
    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday"
    }
  },
  adminDashboard: {
    navigation: "Navigation",
    tabs: {
      site: "Website",
      images: "Site images",
      specialist: "Owner profile",
      staff: "Team",
      services: "Booking services",
      offers: "Offers",
      brands: "Brands",
      blog: "Blog",
      hours: "Working hours",
      bookings: "Booking",
      clients: "Clients",
      domain: "Custom domain",
      payments: "Payments",
      integrations: "Integrations",
      marketing: "Marketing",
      legal: "Legal",
      account: "Account"
    },
    groups: {
      navigation: "Navigation",
      content: "Content",
      team: "Team",
      settings: "Settings",
      site: "Site",
      engine: "Booking engine",
      publicSite: "Public site",
      delivery: "Delivery",
      account: "Account"
    },
    actions: {
      save: "Save",
      copyLink: "Copy link",
      qrCode: "QR code",
      closeMenu: "Close menu"
    },
    notices: {
      siteSaved: "Information saved.",
      profileSaved: "Profile saved.",
      imagesSaved: "Images saved.",
      imagesUploadNeedsSave: 'The images were uploaded, but we could not save them. Press "Save".',
      servicesSaved: "Services saved.",
      hoursSaved: "Working hours saved.",
      linkCopied: "Link copied!"
    },
    siteTab: {
      sections: {
        basics: "Contacts",
        address: "WWW.",
        addressMobile: "Address / WWW",
        about: "About",
        faq: "FAQ",
        amenities: "Amenities",
        amenitiesMobile: "Amenities"
      },
      fields: {
        salonName: "Salon name",
        phone: "Phone",
        email: "Email",
        city: "City",
        language: "Language",
        address: "Address",
        heroTitle: "Hero title",
        heroTitleHint: "Optional. If left blank, the salon name will be shown.",
        heroSubtitle: "Hero subtitle / tagline",
        heroSubtitleHint: 'A short line under the title (e.g. "Beauty that feels like home").'
      },
      languageOptions: {
        bg: "Bulgarian",
        en: "English"
      },
      locationFallback: "Location",
      viewAppleMaps: "View in Apple Maps",
      socialPlaceholder: "salonexample",
      connectedDomain: "Connected domain",
      manage: "Manage",
      connectOwnDomain: "Connect your own domain",
      connectOwnDomainHint: "Enter a domain you already bought and point it to the site."
    }
  }
}, zl = { bg: ef, en: tf };
function Ks(e, t) {
  let n = e;
  for (const u of t) {
    if (n == null || typeof n != "object") return;
    n = n[u];
  }
  return typeof n == "string" ? n : void 0;
}
function nf(e, t) {
  return e.replace(/\{(\w+)\}/g, (n, u) => String(t[u] ?? `{${u}}`));
}
function uf(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "en" || t.startsWith("en-") ? "en" : "bg";
}
function vc(e) {
  const t = zl[e] ?? zl.bg;
  return function(u, r) {
    const l = u.split(".");
    let o = Ks(t, l);
    return o === void 0 && (o = Ks(zl.bg, l) ?? u), r ? nf(o, r) : o;
  };
}
var gc = k.createContext(vc("bg"));
function rf({ locale: e, children: t }) {
  const n = vc(e);
  return /* @__PURE__ */ p.jsx(gc.Provider, { value: n, children: t });
}
function Li() {
  return k.useContext(gc);
}
function Ys(e) {
  const t = new Uint8Array(e);
  return globalThis.crypto.getRandomValues(t), Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Gs(...e) {
  for (const t of e) {
    const n = String(t ?? "").trim();
    if (n) return n;
  }
  return "";
}
function lf(e) {
  return /^svc-\d/.test(e);
}
function of(e, t) {
  const n = e.trim();
  if (n && !lf(n) && !t.has(n))
    return t.add(n), n;
  let u = Ys(4);
  for (; t.has(u); ) u = Ys(4);
  return t.add(u), u;
}
function sf(e) {
  if (typeof e == "string")
    try {
      e = JSON.parse(e);
    } catch {
      return [];
    }
  let t = [];
  if (Array.isArray(e))
    t = e;
  else if (e && typeof e == "object")
    t = Object.values(e);
  else
    return [];
  const n = /* @__PURE__ */ new Set(), u = [];
  return t.forEach((r, l) => {
    const o = r, i = Gs(o.name, o.service_name, o.serviceName, o.title);
    if (!i) return;
    const s = of(String(o.id ?? ""), n), c = Number(o.duration ?? o.duration_min ?? o.durationMin ?? 30) || 30, v = o.price ?? o.service_price ?? o.servicePrice, g = v != null ? Number(v) : void 0, h = Array.isArray(o.variants) ? o.variants.map((_) => {
      if (!_ || typeof _ != "object") return null;
      const P = _, $ = String(P.label ?? "").trim();
      if (!$) return null;
      const j = Number(P.price ?? NaN);
      if (!Number.isFinite(j)) return null;
      const R = Number(P.duration ?? NaN);
      return {
        label: $,
        price: Math.max(0, j),
        duration: Number.isFinite(R) ? Math.max(5, Math.round(R)) : void 0
      };
    }).filter((_) => _ !== null) : void 0, x = Array.isArray(o.images) ? o.images.map((_) => String(_ ?? "").trim()).filter(Boolean) : void 0, w = Array.isArray(o.assignedTeamMemberIds) ? [...new Set(o.assignedTeamMemberIds.map((_) => String(_ ?? "").trim()).filter(Boolean))] : void 0, C = String(o.payment_type ?? ""), M = ["none", "deposit", "full"].includes(C) ? C : void 0, f = Number(o.deposit_amount ?? NaN), a = Number.isFinite(f) ? Math.max(0, f) : void 0, d = Number(o.cancel_policy_hours ?? NaN), m = Number.isFinite(d) && d > 0 ? d : void 0, S = String(o.cancel_policy_action ?? ""), E = ["full_refund", "keep_deposit", "keep_full"].includes(S) ? S : void 0;
    u.push({
      id: s,
      name: i,
      nameEn: String(o.nameEn ?? "").trim() || void 0,
      description: String(o.description ?? "").trim() || void 0,
      descriptionEn: String(o.descriptionEn ?? "").trim() || void 0,
      category: Gs(
        o.category,
        o.category_name,
        o.categoryName,
        o.service_category,
        o.serviceCategory
      ) || void 0,
      price: g != null && Number.isFinite(g) ? g : void 0,
      duration: c,
      images: x,
      variants: h && h.length > 0 ? h : void 0,
      ...w && w.length > 0 ? { assignedTeamMemberIds: w } : {},
      ...M !== void 0 ? { payment_type: M } : {},
      ...a !== void 0 ? { deposit_amount: a } : {},
      ...o.requires_confirmation === !0 ? { requires_confirmation: !0 } : {},
      ...m !== void 0 ? { cancel_policy_hours: m } : {},
      ...E !== void 0 ? { cancel_policy_action: E } : {}
    });
  }), u;
}
function af(e, t) {
  var r, l;
  if (t !== "en") return e;
  const n = ((r = e.nameEn) == null ? void 0 : r.trim()) || e.name, u = ((l = e.descriptionEn) == null ? void 0 : l.trim()) || e.description;
  return { ...e, name: n, description: u };
}
var Bo = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], cf = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday"
};
function df(e, t) {
  const n = {};
  for (const r of Bo) n[r] = null;
  const u = ff(t);
  if (u) {
    for (const r of Bo)
      u[r] !== void 0 && (n[r] = u[r]);
    return n;
  }
  if (e && typeof e == "object")
    for (const [r, l] of Object.entries(e)) {
      const o = cf[r.toLowerCase()];
      o && (!l || l.closed || !l.open || !l.close ? n[o] = null : n[o] = { open: l.open, close: l.close });
    }
  return n;
}
function ff(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return null;
  const t = e, n = {};
  let u = !1;
  for (const r of Bo) {
    const l = t[r];
    if (l && typeof l == "object" && !Array.isArray(l)) {
      const o = String(l.open ?? ""), i = String(l.close ?? "");
      o && i ? (n[r] = { open: o, close: i }, u = !0) : n[r] = null;
    }
  }
  return u ? n : null;
}
function pf(e) {
  return /^\d{4}-\d{2}-\d{2}$/.test(e);
}
function To(e) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(e);
}
function gu(e) {
  const [t, n] = e.split(":").map(Number);
  return t * 60 + n;
}
function mf(e) {
  if (!Array.isArray(e)) return [];
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const u = n, r = String(u.date ?? "").trim();
    if (!pf(r)) continue;
    const l = u.allDay === !0, o = String(u.start ?? "").trim(), i = String(u.end ?? "").trim(), s = String(u.note ?? "").trim();
    if (!l) {
      if (!To(o) || !To(i) || gu(i) <= gu(o)) continue;
      t.push({ date: r, allDay: !1, start: o, end: i, ...s ? { note: s } : {} });
      continue;
    }
    t.push({ date: r, allDay: !0, ...s ? { note: s } : {} });
  }
  return t.sort((n, u) => `${n.date}-${n.start ?? ""}`.localeCompare(`${u.date}-${u.start ?? ""}`)), t;
}
function yc(e, t) {
  return e.some((n) => n.date === t && n.allDay);
}
function hf(e, t, n, u) {
  if (yc(e, t)) return !0;
  if (!To(n)) return !1;
  const r = gu(n), l = r + Math.max(1, u);
  for (const o of e) {
    if (o.date !== t || o.allDay || !o.start || !o.end) continue;
    const i = gu(o.start), s = gu(o.end);
    if (r < s && l > i) return !0;
  }
  return !1;
}
var zo = "tracking_booking_started";
function vf() {
  var e;
  typeof sessionStorage > "u" || sessionStorage.getItem(zo) || (sessionStorage.setItem(zo, "1"), (e = window.gtag) == null || e.call(window, "event", "booking_started"));
}
function gf({ serviceName: e, value: t, currency: n = "EUR" } = {}) {
  var l, o, i;
  typeof sessionStorage < "u" && sessionStorage.removeItem(zo);
  const u = {};
  t != null && t > 0 && (u.value = t, u.currency = n), e && (u.content_name = e), (l = window.fbq) == null || l.call(window, "track", "Schedule", u), (o = window.fbq) == null || o.call(window, "trackCustom", "BookingCompleted", { ...u, service_name: e });
  const r = {};
  t != null && t > 0 && (r.value = t, r.currency = n), e && (r.service_name = e), (i = window.gtag) == null || i.call(window, "event", "booking_completed", r);
}
var yf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function Xs(e) {
  return String(e).padStart(2, "0");
}
function Zs(e) {
  return new Date(e.getTime() - e.getTimezoneOffset() * 6e4).toISOString().split("T")[0];
}
function kf({
  slug: e,
  openingHours: t,
  bookingBlocks: n,
  slotIntervalMin: u,
  bookingAdvanceDays: r,
  bookingServices: l,
  engineUrl: o = "",
  apiKey: i,
  successUrl: s,
  cancelUrl: c,
  locale: v = "bg-BG",
  onEvent: g
}) {
  const h = Li(), x = o.replace(/\/$/, ""), w = `/api/public/v1/salons/${encodeURIComponent(e)}`, C = k.useMemo(
    () => ({
      "Content-Type": "application/json",
      ...i ? { "X-API-Key": i } : {}
    }),
    [i]
  ), [M, f] = k.useState(!1), [a, d] = k.useState([]), [m, S] = k.useState(""), [E, _] = k.useState(""), [P, $] = k.useState({}), [j, R] = k.useState(""), [De, oe] = k.useState(""), [U, Pe] = k.useState(""), [Y, Te] = k.useState(""), [D, B] = k.useState(""), [z, V] = k.useState(""), [ue, Pt] = k.useState([]), [G, Oe] = k.useState(null), pe = k.useRef(!1), [at, A] = k.useState(!1), [qt, Fe] = k.useState(""), [Yn, ct] = k.useState(""), [ve, ie] = k.useState(null);
  k.useEffect(() => {
    const L = /* @__PURE__ */ new Date();
    R(Zs(L));
    const W = new Date(L);
    W.setDate(L.getDate() + Math.max(1, r)), oe(Zs(W));
  }, [r]), k.useEffect(() => {
    !M || pe.current || (pe.current = !0, fetch(`${x}${w}/staff`, {
      cache: "no-store",
      headers: C
    }).then((L) => L.json()).then((L) => {
      Array.isArray(L.staff) && Pt(L.staff);
    }).catch(() => {
    }));
  }, [x, M, C, w]), k.useEffect(() => {
    if (!m) return;
    let L = !1;
    const W = G ? `&staffMemberId=${encodeURIComponent(G)}` : "";
    return fetch(
      `${x}${w}/slots?date=${encodeURIComponent(m)}${W}`,
      { cache: "no-store", headers: C }
    ).then((se) => se.json()).then((se) => {
      if (L || !Array.isArray(se.occupied)) return;
      const Q = se.occupied.map((ce) => ({
        time: String((ce == null ? void 0 : ce.time) ?? ""),
        duration: Math.max(5, Number((ce == null ? void 0 : ce.duration) ?? 30) || 30)
      })).filter((ce) => ce.time.length >= 4), ge = G ? `${m}:${G}` : m;
      L || $((ce) => ({ ...ce, [ge]: Q }));
    }).catch(() => {
    }), () => {
      L = !0;
    };
  }, [x, C, m, G, w]);
  const we = k.useMemo(
    () => a.map((L) => l[L]).filter((L) => !!L),
    [a, l]
  ), Ye = k.useMemo(
    () => we.reduce((L, W) => L + (Number(W.duration) || 0), 0),
    [we]
  ), dt = k.useMemo(
    () => we.reduce((L, W) => L + (Number(W.price) || 0), 0),
    [we]
  ), Ou = k.useCallback(
    (L, W) => {
      if (!L) return null;
      const se = yf[(/* @__PURE__ */ new Date(`${L}T12:00:00`)).getDay()], Q = t[se];
      if (!(Q != null && Q.open) || !(Q != null && Q.close) || yc(n, L)) return "closed";
      const ge = Math.max(5, W || 30), ce = G ? `${L}:${G}` : L, At = P[ce] ?? [], [gn = 0, be = 0] = Q.open.split(":").map(Number), [Lt = 0, y = 0] = Q.close.split(":").map(Number), T = gn * 60 + be, X = Lt * 60 + y - ge, O = [];
      for (let Se = T; Se <= X; Se += u) {
        const Hu = `${Xs(Math.floor(Se / 60))}:${Xs(Se % 60)}`, gt = Se + ge;
        !At.some(({ time: wc, duration: Sc }) => {
          const [Ec = 0, Cc = 0] = wc.split(":").map(Number), Mi = Ec * 60 + Cc, Nc = Mi + Math.max(5, Sc);
          return Mi < gt && Nc > Se;
        }) && !hf(n, L, Hu, ge) && O.push(Hu);
      }
      return O;
    },
    [t, n, P, G, u]
  ), en = k.useMemo(
    () => a.length === 0 ? null : Ou(m, Ye || 30),
    [a.length, Ou, m, Ye]
  ), bu = k.useCallback((L) => {
    if (Fe(""), ct(""), ie(null), L) {
      const W = l.findIndex((se) => se.id === L);
      d(W >= 0 ? [W] : []);
    } else
      d([]);
    S(""), _(""), Pe(""), Te(""), B(""), V(""), f(!0), g ? g("booking_started") : vf();
  }, [l, g]), Uu = k.useCallback(() => {
    f(!1), ie(null), Oe(null), S(""), _("");
  }, []), sl = k.useCallback((L) => {
    d((W) => W.includes(L) ? W.filter((Q) => Q !== L) : [...W, L]), _("");
  }, []), Gn = k.useCallback((L) => {
    S(L), _("");
  }, []), Wu = k.useCallback((L) => {
    Oe(L), S(""), _("");
  }, []), Ft = k.useCallback((L, W, se) => {
    if (!L || !W) return;
    const Q = Math.max(5, Number(se) || 30);
    $((ge) => {
      const ce = ge[L] ?? [];
      return ce.some((At) => At.time === W) ? ge : { ...ge, [L]: [...ce, { time: W, duration: Q }] };
    });
  }, []), jt = k.useCallback(async (L) => {
    if (L.preventDefault(), Fe(""), ct(""), we.length === 0) {
      Fe(h("booking.errors.noService"));
      return;
    }
    if (!U.trim()) {
      Fe(h("booking.errors.noName"));
      return;
    }
    if (!Y.trim()) {
      Fe(h("booking.errors.noPhone"));
      return;
    }
    if (!D.trim()) {
      Fe(h("booking.errors.noEmail"));
      return;
    }
    if (!m) {
      Fe(h("booking.errors.noDate"));
      return;
    }
    if (!E) {
      Fe(h("booking.errors.noTime"));
      return;
    }
    const W = we.map((be) => be.name).join(" + "), se = Ye || 30, Q = we[0], ge = (Q == null ? void 0 : Q.payment_type) ?? "none", ce = (Q == null ? void 0 : Q.deposit_amount) ?? 0, At = ge === "deposit" ? ce : ge === "full" ? dt ?? 0 : 0, gn = ge !== "none" && At > 0;
    A(!0);
    try {
      const be = await fetch(`${x}${w}/bookings`, {
        method: "POST",
        headers: C,
        body: JSON.stringify({
          clientName: U.trim(),
          clientPhone: Y.trim(),
          clientEmail: D.trim().toLowerCase(),
          serviceName: W,
          servicePrice: dt,
          serviceDuration: se,
          date: m,
          time: E,
          notes: z.trim() || void 0,
          requiresPayment: gn,
          staffMemberId: G ?? void 0
        })
      }), Lt = await be.json().catch(() => ({}));
      if (!be.ok)
        throw new Error(
          Lt.error ?? (be.status === 500 ? h("booking.errors.saveFailed") : h("booking.errors.httpError", { status: be.status }))
        );
      const y = Lt.bookingId ?? Lt.id;
      if (gn && y) {
        const O = await fetch(`${x}${w}/booking-checkout`, {
          method: "POST",
          headers: C,
          body: JSON.stringify({
            bookingId: y,
            salonSlug: e,
            serviceName: W,
            amountEuros: At,
            paymentType: ge,
            successUrl: s,
            cancelUrl: c
          })
        }), Se = await O.json().catch(() => ({}));
        if (!O.ok || !Se.checkoutUrl)
          throw new Error(Se.error ?? h("booking.errors.paymentFailed"));
        window.location.href = Se.checkoutUrl;
        return;
      }
      const T = (/* @__PURE__ */ new Date(`${m}T12:00:00`)).toLocaleDateString(v, {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      Ft(m, E, se), ie({ serviceName: W, dateLabel: T, time: E }), ct(`${W} — ${T} ${E}`);
      const X = {
        serviceName: W,
        value: dt > 0 ? dt : void 0,
        currency: "EUR"
      };
      g ? g("booking_completed", X) : gf(X);
    } catch (be) {
      Fe(be instanceof Error ? be.message : h("booking.errors.generic"));
    } finally {
      A(!1);
    }
  }, [
    x,
    c,
    D,
    U,
    Y,
    v,
    Ft,
    z,
    g,
    C,
    m,
    we,
    G,
    E,
    e,
    w,
    s,
    h,
    Ye,
    dt
  ]);
  return {
    bookingOpen: M,
    open: bu,
    close: Uu,
    selectedServiceIdxs: a,
    toggleService: sl,
    totalDuration: Ye,
    totalPrice: dt,
    selectedServices: we,
    selectedDate: m,
    setDate: Gn,
    selectedTime: E,
    setTime: _,
    timeSlots: en,
    minDate: j,
    maxDate: De,
    clientName: U,
    setClientName: Pe,
    clientPhone: Y,
    setClientPhone: Te,
    clientEmail: D,
    setClientEmail: B,
    notes: z,
    setNotes: V,
    staffMembers: ue,
    selectedStaffMemberId: G,
    setStaffMemberId: Wu,
    isSubmitting: at,
    bookingError: qt,
    bookingSuccess: Yn,
    bookingSuccessDetails: ve,
    submit: jt
  };
}
var xf = k.lazy(
  () => Promise.resolve().then(() => t3).then((e) => ({ default: e.SalonBookingModal }))
);
function wf({
  forwardedRef: e,
  slug: t,
  openingHours: n,
  bookingBlocks: u,
  slotIntervalMin: r,
  bookingAdvanceDays: l,
  bookingServices: o,
  serviceCatalog: i,
  categoryTabs: s,
  engineUrl: c,
  apiKey: v,
  primaryColor: g,
  accentGradient: h,
  successUrl: x,
  cancelUrl: w,
  locale: C,
  formatPrice: M,
  onEvent: f,
  salonName: a,
  basePath: d
}) {
  const m = kf({
    slug: t,
    openingHours: n,
    bookingBlocks: u,
    slotIntervalMin: r,
    bookingAdvanceDays: l,
    bookingServices: o,
    engineUrl: c,
    apiKey: v,
    successUrl: x,
    cancelUrl: w,
    locale: C,
    onEvent: f
  });
  k.useImperativeHandle(e, () => ({
    open: (E) => m.open(E),
    close: () => m.close()
  }), [m.open, m.close]);
  const S = m.selectedServices[0];
  return /* @__PURE__ */ p.jsx(k.Suspense, { fallback: null, children: /* @__PURE__ */ p.jsx(
    xf,
    {
      open: m.bookingOpen,
      primaryColor: g,
      accentGradient: h,
      locale: C,
      formatPrice: M,
      serviceCatalog: i,
      categoryTabs: s,
      services: o,
      selectedServiceIdxs: m.selectedServiceIdxs,
      selectedDate: m.selectedDate,
      selectedTime: m.selectedTime,
      totalDuration: m.totalDuration,
      totalPrice: m.totalPrice,
      clientName: m.clientName,
      clientPhone: m.clientPhone,
      clientEmail: m.clientEmail,
      notes: m.notes,
      salonName: a,
      termsHref: `${d}/terms`,
      privacyHref: `${d}/privacy`,
      minDate: m.minDate,
      maxDate: m.maxDate,
      timeSlots: m.timeSlots,
      paymentType: (S == null ? void 0 : S.payment_type) ?? "none",
      depositAmount: S == null ? void 0 : S.deposit_amount,
      cancelPolicyHours: S == null ? void 0 : S.cancel_policy_hours,
      cancelPolicyAction: S == null ? void 0 : S.cancel_policy_action,
      isSubmitting: m.isSubmitting,
      bookingError: m.bookingError,
      bookingSuccess: m.bookingSuccess,
      bookingSuccessDetails: m.bookingSuccessDetails,
      staffMembers: m.staffMembers,
      selectedStaffMemberId: m.selectedStaffMemberId,
      onClose: m.close,
      onToggleService: m.toggleService,
      onDateChange: m.setDate,
      onTimeChange: m.setTime,
      onClientNameChange: m.setClientName,
      onClientPhoneChange: m.setClientPhone,
      onClientEmailChange: m.setClientEmail,
      onNotesChange: m.setNotes,
      onStaffMemberChange: m.setStaffMemberId,
      onSubmit: m.submit
    }
  ) });
}
var Sf = k.forwardRef(
  function({ slug: t, salon: n, openingHours: u, bookingBlocks: r, basePath: l = "", engineUrl: o = "", apiKey: i, accentGradient: s, successUrl: c, cancelUrl: v, locale: g, formatPrice: h, onEvent: x }, w) {
    const C = k.useMemo(
      () => df(
        n.working_hours,
        n.opening_hours
      ),
      [n.working_hours, n.opening_hours]
    ), M = u ?? C, f = r ?? mf(
      n.opening_hours && typeof n.opening_hours == "object" ? n.opening_hours.booking_blocks : null
    ), a = k.useMemo(() => {
      const j = n.opening_hours;
      if (j && typeof j == "object") {
        const R = Number(j.slot_interval_min);
        if ([15, 20, 30, 45, 60].includes(R)) return R;
      }
      return 30;
    }, [n.opening_hours]), d = k.useMemo(() => {
      const j = n.opening_hours;
      if (j && typeof j == "object") {
        const R = Number(j.booking_advance_days);
        if (Number.isFinite(R) && R >= 1) return Math.round(R);
      }
      return 60;
    }, [n.opening_hours]), m = uf(
      g ?? (typeof n.language == "string" ? n.language : "bg")
    ), S = g ?? (m === "en" ? "en-US" : "bg-BG"), E = k.useMemo(
      () => Jd(
        sf(n.services).map((j) => af(j, m))
      ),
      [n.services, m]
    ), _ = k.useMemo(
      () => qd(E),
      [E]
    ), P = k.useMemo(() => {
      const j = [];
      for (const R of E) {
        const De = Array.isArray(R.variants) ? R.variants : [];
        if (De.length === 0) {
          j.push(R);
          continue;
        }
        for (const oe of De)
          j.push({
            ...R,
            id: `${R.id}::${oe.label}`,
            name: `${R.name} – ${oe.label}`,
            price: Number(oe.price ?? R.price ?? 0) || 0,
            duration: Math.max(5, Number(oe.duration ?? R.duration ?? 30) || 30),
            variants: void 0
          });
      }
      return j;
    }, [E]), $ = typeof n.primary_color == "string" && n.primary_color ? n.primary_color : "#5B21B6";
    return /* @__PURE__ */ p.jsx(rf, { locale: m, children: /* @__PURE__ */ p.jsx(
      wf,
      {
        forwardedRef: w,
        slug: t,
        openingHours: M,
        bookingBlocks: f,
        slotIntervalMin: a,
        bookingAdvanceDays: d,
        bookingServices: P,
        serviceCatalog: E,
        categoryTabs: _,
        engineUrl: o,
        apiKey: i,
        primaryColor: $,
        accentGradient: s,
        successUrl: c,
        cancelUrl: v,
        locale: S,
        formatPrice: h,
        onEvent: x,
        salonName: String(n.name ?? ""),
        basePath: l
      }
    ) });
  }
), kc = k.createContext(null);
function Bi(e) {
  if (typeof window > "u") return;
  const t = window[e];
  return typeof t == "string" && t ? t : void 0;
}
function Ti(e) {
  var t;
  if (!(typeof document > "u"))
    return ((t = document.querySelector(`meta[name="${e}"]`)) == null ? void 0 : t.content) || void 0;
}
function an(e) {
  var t;
  try {
    const n = typeof process < "u" ? process : void 0, u = (t = n == null ? void 0 : n.env) == null ? void 0 : t[e];
    return typeof u == "string" && u ? u : void 0;
  } catch {
    return;
  }
}
function Ef(e) {
  return e || Bi("__CLICKA_SALON_SLUG") || Ti("clicka:salon") || an("NEXT_PUBLIC_SALON_SLUG") || an("NEXT_PUBLIC_CLICKA_SALON");
}
function Cf(e) {
  return e || Bi("__CLICKA_ENGINE_URL") || Ti("clicka:engine") || an("NEXT_PUBLIC_ENGINE_URL") || an("NEXT_PUBLIC_CLICKA_ENGINE") || an("NEXT_PUBLIC_CLICKA_API_URL") || // Canonical engine host. Avoid bare-domain redirects in cross-origin fetches
  // which kills cross-origin fetches because the redirect response itself
  // carries no CORS headers — browsers reject the whole chain.
  "https://app.alternine.co";
}
function Nf(e) {
  return e || Bi("__CLICKA_BOOKING_API_KEY") || Ti("clicka:api-key") || an("NEXT_PUBLIC_BOOKING_API_KEY") || an("NEXT_PUBLIC_CLICKA_BOOKING_API_KEY");
}
function _f(e) {
  var t, n, u, r;
  if (e) return e;
  if (typeof document < "u") {
    const l = (t = document.documentElement.lang) == null ? void 0 : t.trim();
    if (l)
      return l === "bg" ? "bg-BG" : l === "en" ? "en-US" : l;
    const o = (r = (u = (n = document.body) == null ? void 0 : n.dataset) == null ? void 0 : u.lang) == null ? void 0 : r.trim();
    if (o) return o === "bg" ? "bg-BG" : "en-US";
  }
  return typeof navigator < "u" && navigator.language ? navigator.language : "bg-BG";
}
function Js(e) {
  if (!(typeof window > "u"))
    return `${location.origin}${location.pathname}?${e}=1`;
}
function Df({
  children: e,
  salonSlug: t,
  engineUrl: n,
  apiKey: u,
  locale: r,
  successUrl: l,
  cancelUrl: o,
  accentGradient: i,
  formatPrice: s,
  onEvent: c,
  basePath: v,
  autoTriggers: g = !0,
  honorUrlParams: h = !0
}) {
  const x = k.useMemo(() => Ef(t), [t]), w = k.useMemo(() => Cf(n), [n]), C = k.useMemo(() => Nf(u), [u]), M = k.useMemo(() => _f(r), [r]), f = k.useMemo(
    () => l ?? Js("booked"),
    [l]
  ), a = k.useMemo(
    () => o ?? Js("cancelled"),
    [o]
  ), d = k.useRef(null), m = k.useRef(void 0), S = k.useRef(!1), [E, _] = k.useState(null), [P, $] = k.useState(null);
  k.useEffect(() => {
    if (!x) {
      console.error(
        '[@clicka1/booking] BookingProvider has no salon slug. Pass `salonSlug` or set NEXT_PUBLIC_SALON_SLUG / <meta name="clicka:salon"> / window.__CLICKA_SALON_SLUG.'
      );
      return;
    }
    let U = !1;
    const Pe = `${w.replace(/\/$/, "")}/api/public/v1/salons/${encodeURIComponent(x)}`;
    return fetch(Pe, {
      cache: "no-store",
      headers: C ? { "X-API-Key": C } : void 0
    }).then((Y) => {
      if (!Y.ok) throw new Error(`Salon fetch failed: HTTP ${Y.status}`);
      return Y.json();
    }).then((Y) => {
      if (!U) {
        if (!Y.salon) throw new Error("Empty salon response");
        _(Y.salon), $(null);
      }
    }).catch((Y) => {
      if (U) return;
      const Te = Y instanceof Error ? Y : new Error(String(Y));
      console.error("[@clicka1/booking] salon fetch failed:", Te), $(Te);
    }), () => {
      U = !0;
    };
  }, [C, w, x]);
  const j = k.useCallback(
    (U) => {
      d.current && E ? d.current.open(U || void 0) : m.current = U ?? null;
    },
    [E]
  ), R = k.useCallback(() => {
    var U;
    return (U = d.current) == null ? void 0 : U.close();
  }, []);
  k.useEffect(() => {
    if (E && d.current && m.current !== void 0) {
      const U = m.current;
      m.current = void 0, d.current.open(U || void 0);
    }
  }, [E]), k.useEffect(() => {
    if (!g || typeof document > "u") return;
    const U = "[data-clicka-book],[data-book-service],[data-book]", Pe = (Y) => {
      const Te = Y.target;
      if (!Te) return;
      const D = Te.closest(U);
      if (!D) return;
      Y.preventDefault();
      const B = D.getAttribute("data-clicka-book") ?? D.getAttribute("data-book-service") ?? D.getAttribute("data-book") ?? "";
      j(B && B !== "true" ? B : void 0);
    };
    return document.addEventListener("click", Pe), () => document.removeEventListener("click", Pe);
  }, [g, j]), k.useEffect(() => {
    if (!h || !E || S.current || typeof location > "u") return;
    const U = new URLSearchParams(location.search), Pe = U.get("service");
    (Pe || U.has("book")) && (S.current = !0, j(Pe || void 0));
  }, [h, E, j]);
  const De = k.useMemo(
    () => ({ open: j, close: R, isReady: !!E, error: P, salon: E }),
    [j, R, E, P]
  ), oe = E && x ? /* @__PURE__ */ p.jsx(
    Sf,
    {
      ref: d,
      slug: x,
      salon: E,
      engineUrl: w,
      apiKey: C,
      locale: M,
      successUrl: f,
      cancelUrl: a,
      accentGradient: i,
      formatPrice: s,
      onEvent: c,
      basePath: v
    }
  ) : null;
  return /* @__PURE__ */ p.jsxs(kc.Provider, { value: De, children: [
    e,
    oe && typeof document < "u" ? mc.createPortal(oe, document.body) : oe
  ] });
}
function Pf() {
  const e = k.useContext(kc);
  if (!e)
    throw new Error(
      "[@clicka1/booking] useBooking() must be called inside <BookingProvider>."
    );
  return e;
}
var Ff = k.forwardRef(
  function({ service: t, onClick: n, type: u = "button", children: r, ...l }, o) {
    const { open: i } = Pf();
    return /* @__PURE__ */ p.jsx(
      "button",
      {
        ref: o,
        type: u,
        onClick: (s) => {
          n == null || n(s), s.defaultPrevented || i(t);
        },
        ...l,
        children: r
      }
    );
  }
);
const jf = "", Af = "";
function qs() {
  if (window.__clickaBookingMounted) return;
  window.__clickaBookingMounted = !0;
  const e = document.getElementById("clicka_booking");
  let t = e;
  t ? t.innerHTML = "" : (t = document.createElement("div"), t.id = "clicka_booking_root", document.body.appendChild(t));
  const u = (document.documentElement.lang === "bg" ? "bg" : "en") === "bg" ? "Запази" : "Reserve";
  hc(t).render(
    /* @__PURE__ */ p.jsx(
      Df,
      {
        salonSlug: "urban-by-delyana",
        engineUrl: jf,
        apiKey: Af,
        successUrl: void 0,
        cancelUrl: void 0,
        children: e ? /* @__PURE__ */ p.jsx(Ff, { className: "btn btn_solid", children: /* @__PURE__ */ p.jsx("span", { children: u }) }) : null
      }
    )
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", qs, { once: !0 }) : qs();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = (...e) => e.filter((t, n, u) => !!t && t.trim() !== "" && u.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, u) => u ? u.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = (e) => {
  const t = Bf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ml = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tf = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, zf = k.createContext({}), Mf = () => k.useContext(zf), Rf = k.forwardRef(
  ({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: u, className: r = "", children: l, iconNode: o, ...i }, s) => {
    const {
      size: c = 24,
      strokeWidth: v = 2,
      absoluteStrokeWidth: g = !1,
      color: h = "currentColor",
      className: x = ""
    } = Mf() ?? {}, w = u ?? g ? Number(n ?? v) * 24 / Number(t ?? c) : n ?? v;
    return k.createElement(
      "svg",
      {
        ref: s,
        ...Ml,
        width: t ?? c ?? Ml.width,
        height: t ?? c ?? Ml.height,
        stroke: e ?? h,
        strokeWidth: w,
        className: xc("lucide", x, r),
        ...!l && !Tf(i) && { "aria-hidden": "true" },
        ...i
      },
      [
        ...o.map(([C, M]) => k.createElement(C, M)),
        ...Array.isArray(l) ? l : [l]
      ]
    );
  }
);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = (e, t) => {
  const n = k.forwardRef(
    ({ className: u, ...r }, l) => k.createElement(Rf, {
      ref: l,
      iconNode: t,
      className: xc(
        `lucide-${Lf(ea(e))}`,
        `lucide-${e}`,
        u
      ),
      ...r
    })
  );
  return n.displayName = ea(e), n;
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], $f = Kn("check", If);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], bf = Kn("chevron-down", Of);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Wf = Kn("loader-circle", Uf);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Rl = Kn("plus", Hf);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Qf = Kn("user", Vf);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Il = Kn("x", Kf);
function Mo(e, t, n) {
  if (n)
    return e.findIndex((r) => r.id === `${t}::${n}`);
  const u = e.findIndex((r) => r.id === t);
  return u >= 0 ? u : e.findIndex((r) => r.id.startsWith(`${t}::`));
}
function Yf(e, t, n, u) {
  var l, o;
  if ((l = n.variants) != null && l.length) {
    const i = u ?? ((o = n.variants[0]) == null ? void 0 : o.label), s = i ? Mo(t, n.id, i) : -1;
    return s >= 0 && e.includes(s);
  }
  const r = Mo(t, n.id);
  return r >= 0 && e.includes(r);
}
function Gf(e, t) {
  const n = e.variants ?? [];
  if (n.length > 0) {
    const u = t ?? n[0].label, r = n.find((l) => l.label === u) ?? n[0];
    return {
      price: Number(r.price ?? e.price ?? 0) || 0,
      duration: Math.max(5, Number(r.duration ?? e.duration ?? 30) || 30)
    };
  }
  return {
    price: Number(e.price ?? 0) || 0,
    duration: Math.max(5, Number(e.duration ?? 30) || 30)
  };
}
function Xf(e) {
  const { cancelPolicyHours: t, cancelPolicyAction: n, depositAmountEuros: u } = e, r = t >= 48 ? `${Math.round(t / 24)} дни` : `${t} часа`;
  if (n === "full_refund")
    return `Безплатно отказване до ${r} преди часа. След срока — пълен refund.`;
  if (n === "keep_full")
    return `Безплатно отказване до ${r} преди часа. След срока платената сума не се връща.`;
  const l = u ? ` (€${u})` : "";
  return `Безплатно отказване до ${r} преди часа. След срока депозитът${l} се задържа.`;
}
function Zf({
  categories: e,
  selectedId: t,
  onSelect: n,
  size: u = "md",
  className: r = "",
  accentFill: l = "#111111"
}) {
  if (e.filter((s) => s.id != null).length === 0) return null;
  const i = u === "sm" ? "text-[12px]" : "text-sm";
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `flex items-center gap-4 overflow-x-auto pb-0.5 scrollbar-none ${i} ${r}`.trim(),
      role: "tablist",
      "aria-label": "Категории услуги",
      children: e.map((s) => {
        const c = t === s.id;
        return /* @__PURE__ */ p.jsxs(
          "span",
          {
            role: "tab",
            "aria-selected": c,
            tabIndex: 0,
            onClick: () => n(s.id),
            onKeyDown: (v) => {
              (v.key === "Enter" || v.key === " ") && (v.preventDefault(), n(s.id));
            },
            className: `relative inline-block shrink-0 cursor-pointer select-none whitespace-nowrap pb-1.5 font-bold text-black transition ${c ? "" : "hover:opacity-80"}`,
            children: [
              s.label,
              /* @__PURE__ */ p.jsx(
                "span",
                {
                  "aria-hidden": !0,
                  className: "absolute bottom-0 left-0 h-[2px] rounded-full transition-[width,opacity] duration-200",
                  style: {
                    width: c ? "100%" : "0%",
                    opacity: c ? 1 : 0,
                    backgroundImage: l
                  }
                }
              )
            ]
          },
          s.id ?? "all"
        );
      })
    }
  );
}
function Jf({
  serviceName: e,
  dateLabel: t,
  time: n,
  salonName: u,
  onClose: r
}) {
  const l = Li(), [o, i] = k.useState(!1);
  return k.useEffect(() => {
    const s = setTimeout(() => i(!0), 50);
    return () => clearTimeout(s);
  }, []), /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 flex-col items-center justify-center px-6 py-10", children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: `flex flex-col items-center transition-all duration-700 ease-out ${o ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: `flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 ease-out ${o ? "scale-100" : "scale-50"}`,
              style: { background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" },
              children: /* @__PURE__ */ p.jsx(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "h-10 w-10",
                  "aria-hidden": !0,
                  children: /* @__PURE__ */ p.jsx(
                    "path",
                    {
                      d: "M5 13l4 4L19 7",
                      stroke: "white",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      className: o ? "animate-[draw_0.5s_ease-out_0.3s_forwards]" : "",
                      style: {
                        strokeDasharray: 24,
                        strokeDashoffset: o ? 0 : 24,
                        transition: "stroke-dashoffset 0.5s ease-out 0.3s"
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-full transition-all duration-700 ease-out ${o ? "scale-150 opacity-0" : "scale-100 opacity-30"}`,
              style: { background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" },
              "aria-hidden": !0
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx(
          "h3",
          {
            className: `text-center text-[22px] font-semibold leading-tight tracking-tight text-[#111] transition-all delay-200 duration-500 ${o ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: l("booking.success.confirmed")
          }
        ),
        /* @__PURE__ */ p.jsxs(
          "p",
          {
            className: `mt-2 text-center text-[15px] leading-relaxed text-black/45 transition-all delay-300 duration-500 ${o ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: [
              l("booking.success.waitingAt"),
              " ",
              /* @__PURE__ */ p.jsx("span", { className: "font-medium text-black/60", children: u })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            className: `mt-6 w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all delay-[400ms] duration-500 ${o ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3 px-5 py-4", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ p.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/[0.04]", children: /* @__PURE__ */ p.jsxs("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4 text-black/40", "aria-hidden": !0, children: [
                  /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z", clipRule: "evenodd" }),
                  /* @__PURE__ */ p.jsx("path", { d: "M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" })
                ] }) }),
                /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ p.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: l("booking.success.labelService") }),
                  /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: e })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("div", { className: "h-px bg-black/[0.05]" }),
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ p.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/[0.04]", children: /* @__PURE__ */ p.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4 text-black/40", "aria-hidden": !0, children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ p.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: l("booking.success.labelWhen") }),
                  /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: l("booking.success.timeFormat", { date: t, time: n }) })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            onClick: r,
            className: `mt-8 w-full max-w-[320px] rounded-full bg-[#111] py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all delay-500 duration-500 active:scale-[0.98] ${o ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: l("booking.success.done")
          }
        )
      ]
    }
  ) });
}
var Ge = "shadow-[0_2px_6px_rgba(0,0,0,0.14),0_10px_32px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.1)]", sr = "shadow-[0_8px_28px_rgba(0,0,0,0.18)]", $l = "shadow-[0_2px_10px_rgba(0,0,0,0.08)]", ar = `mt-1.5 block w-full min-w-0 max-w-full box-border rounded-2xl border border-black/[0.06] bg-white px-3.5 py-3 text-[16px] leading-tight text-[#111] touch-manipulation ${Ge} outline-none transition focus:border-[color:var(--salon-primary)]/40 focus:ring-2 focus:ring-[color:var(--salon-primary)]/12`;
function qf(e, t) {
  const [n, u] = e.split(":").map(Number);
  if (!Number.isFinite(n) || !Number.isFinite(u)) return e;
  const r = n * 60 + u + t, l = Math.floor(r / 60) % 24, o = r % 60;
  return `${String(l).padStart(2, "0")}:${String(o).padStart(2, "0")}`;
}
function ta({ text: e }) {
  const t = e == null ? void 0 : e.trim();
  return t ? /* @__PURE__ */ p.jsx("p", { className: "mt-1 line-clamp-3 text-[12px] leading-relaxed text-black/50", children: t }) : null;
}
function e3({
  open: e,
  primaryColor: t,
  accentGradient: n,
  locale: u = "bg-BG",
  formatPrice: r,
  serviceCatalog: l,
  services: o,
  categoryTabs: i,
  selectedServiceIdxs: s,
  selectedDate: c,
  selectedTime: v,
  totalDuration: g,
  totalPrice: h,
  clientName: x,
  clientPhone: w,
  clientEmail: C,
  notes: M,
  salonName: f,
  termsHref: a,
  privacyHref: d,
  minDate: m,
  maxDate: S,
  timeSlots: E,
  paymentType: _ = "none",
  depositAmount: P,
  cancelPolicyHours: $,
  cancelPolicyAction: j,
  isSubmitting: R,
  bookingError: De,
  bookingSuccess: oe,
  bookingSuccessDetails: U,
  onClose: Pe,
  onToggleService: Y,
  onDateChange: Te,
  onTimeChange: D,
  onClientNameChange: B,
  onClientPhoneChange: z,
  onClientEmailChange: V,
  onNotesChange: ue,
  onSubmit: Pt,
  staffMembers: G = [],
  selectedStaffMemberId: Oe,
  onStaffMemberChange: pe,
  directStaffName: at
}) {
  var Lt;
  const A = Li(), qt = k.useMemo(
    () => n ?? `linear-gradient(135deg, ${t}, ${t})`,
    [n, t]
  ), Fe = k.useMemo(
    () => ({ backgroundImage: qt }),
    [qt]
  ), Yn = k.useMemo(
    () => ({
      border: "1px solid transparent",
      backgroundImage: `linear-gradient(#ffffff, #ffffff), ${qt}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box"
    }),
    [qt]
  ), ct = k.useMemo(
    () => r ?? ((y) => `${Number.isInteger(y) ? y : y.toFixed(2)} €`),
    [r]
  ), ve = G.length > 0 && !at, [ie, we] = k.useState(1), [Ye, dt] = k.useState(null), [Ou, en] = k.useState(!0), [bu, Uu] = k.useState({}), [sl, Gn] = k.useState(null), Wu = k.useRef(!1);
  k.useEffect(() => {
    if (!e) return;
    we(1), dt(null), Gn(null);
    const y = {};
    for (const T of l) {
      const X = T.variants ?? [];
      X.length > 0 && (y[T.id] = X[0].label);
    }
    Uu(y);
  }, [e, l]);
  const Ft = k.useMemo(() => s.map((y) => {
    var T;
    return (T = o[y]) == null ? void 0 : T.id;
  }).filter((y) => !!y), [s, o]), jt = k.useMemo(() => ve ? Ft.length === 0 ? G : G.filter(
    (y) => Ft.every((T) => y.serviceIds.includes(T))
  ) : [], [ve, G, Ft]);
  k.useEffect(() => {
    !ve || jt.length !== 1 || pe == null || pe(jt[0].id);
  }, [ve, jt, pe]), k.useEffect(() => {
    e && !Wu.current && en(s.length === 0), Wu.current = e;
  }, [e, s.length]), k.useEffect(() => {
    s.length === 0 ? en(!0) : en(!1);
  }, [s.length]);
  const L = s.length > 0, W = k.useMemo(
    () => v ? qf(v, Math.max(5, g || 0)) : "",
    [v, g]
  ), se = k.useMemo(
    () => s.map((y) => o[y]).filter((y) => !!y),
    [s, o]
  ), Q = k.useMemo(
    () => l.filter((y) => Qs(y, Ye)),
    [l, Ye]
  );
  k.useEffect(() => {
    if (!Ye) return;
    l.some((T) => Qs(T, Ye)) || dt(null);
  }, [l, Ye]);
  function ge(y) {
    const T = y.variants ?? [], X = T.length > 0 ? bu[y.id] ?? T[0].label : null, O = Mo(o, y.id, X);
    O < 0 || Y(O);
  }
  const ce = k.useMemo(() => {
    if (!m || !S) return [];
    const y = [], T = /* @__PURE__ */ new Date(`${m}T12:00:00`), X = /* @__PURE__ */ new Date(`${S}T12:00:00`), O = new Date(T);
    for (; O <= X && y.length < 45; ) {
      const Se = `${O.getFullYear()}-${String(O.getMonth() + 1).padStart(2, "0")}-${String(O.getDate()).padStart(2, "0")}`;
      y.push({
        iso: Se,
        weekday: O.toLocaleDateString(u, { weekday: "short" }),
        day: O.toLocaleDateString(u, { day: "numeric", month: "short" })
      }), O.setDate(O.getDate() + 1);
    }
    return y;
  }, [m, S, u]);
  function At(y) {
    if (ve) {
      if (y >= 2 && !L || y >= 3 && !Oe || y >= 4 && (!L || !v)) return;
    } else if (y >= 2 && !L || y >= 3 && (!L || !v)) return;
    we(y);
  }
  const gn = ve ? [
    { n: 1, label: A("booking.modal.stepService") },
    { n: 2, label: A("booking.modal.stepSpecialist") },
    { n: 3, label: A("booking.modal.stepTime") },
    { n: 4, label: A("booking.modal.stepDetails") }
  ] : [
    { n: 1, label: A("booking.modal.stepService") },
    { n: 2, label: A("booking.modal.stepTime") },
    { n: 3, label: A("booking.modal.stepDetails") }
  ];
  function be() {
    typeof window < "u" && !window.confirm(A("booking.modal.confirmClose")) || Pe();
  }
  return k.useEffect(() => {
    if (!e || typeof document > "u") return;
    document.documentElement.style.setProperty("overflow", "hidden"), document.documentElement.style.setProperty("background-color", "#ffffff"), document.body.style.setProperty("overflow", "hidden"), document.body.style.setProperty("position", "fixed"), document.body.style.setProperty("inset", "0"), document.body.style.setProperty("width", "100%"), document.body.style.setProperty("background-color", "#ffffff");
    const y = window.scrollY;
    return document.body.style.setProperty("top", `-${y}px`), () => {
      document.documentElement.style.removeProperty("overflow"), document.documentElement.style.removeProperty("background-color"), document.body.style.removeProperty("overflow"), document.body.style.removeProperty("position"), document.body.style.removeProperty("inset"), document.body.style.removeProperty("width"), document.body.style.removeProperty("background-color"), document.body.style.removeProperty("top"), window.scrollTo(0, y);
    };
  }, [e]), e ? /* @__PURE__ */ p.jsxs("div", { className: "fixed inset-0 z-[110] overflow-hidden bg-white sm:bg-transparent", role: "presentation", children: [
    /* @__PURE__ */ p.jsx("div", { className: "absolute inset-0 hidden bg-black/30 backdrop-blur-sm sm:block", "aria-hidden": !0 }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": !0,
        "aria-label": A("booking.modal.ariaLabel"),
        className: "absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[100dvh] w-full max-w-none flex-col overflow-hidden bg-white sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.6rem] sm:bg-white sm:shadow-[0_25px_60px_rgba(0,0,0,0.12)]",
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-black/10 sm:hidden", "aria-hidden": !0 }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative z-[1] flex shrink-0 items-center justify-between gap-2 bg-white px-4 pb-3 pt-3.5 sm:px-5", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
              /* @__PURE__ */ p.jsx("h3", { className: "text-[17px] font-semibold tracking-tight text-black", children: at ? A("booking.modal.titleWithStaff", { name: at }) : A("booking.modal.titleDefault") }),
              /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-1.5", children: gn.map(({ n: y, label: T }) => {
                const X = ie === y, O = ie > y, Se = ve ? y >= 2 && !L || y >= 3 && !Oe || y >= 4 && (!L || !v) : y >= 2 && !L || y >= 3 && (!L || !v);
                return /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: Se,
                    onClick: () => At(y),
                    className: `inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2.5 text-[11px] font-bold transition disabled:opacity-20 ${X || O ? `text-white ${sr}` : `bg-white text-black/50 ${Ge}`}`,
                    style: X || O ? Fe : void 0,
                    title: T,
                    "aria-label": A("booking.modal.stepAria", { n: y, label: T }),
                    children: O && !X ? "✓" : y
                  },
                  `header-step-${y}`
                );
              }) })
            ] }),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                className: `shrink-0 rounded-full bg-white p-2 text-black/40 transition active:bg-black/[0.03] ${Ge}`,
                onClick: be,
                "aria-label": A("booking.modal.closeAria"),
                children: /* @__PURE__ */ p.jsx(Il, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "relative z-[1] min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white px-4 py-5 sm:px-5", children: oe ? U ? /* @__PURE__ */ p.jsx(
            Jf,
            {
              serviceName: U.serviceName,
              dateLabel: U.dateLabel,
              time: U.time,
              salonName: f,
              onClose: Pe
            }
          ) : /* @__PURE__ */ p.jsx("p", { className: "rounded-2xl bg-emerald-50 px-3.5 py-3 text-sm leading-relaxed text-emerald-700", children: oe }) : /* @__PURE__ */ p.jsxs("form", { id: "salon-booking-form", onSubmit: Pt, className: "min-w-0 space-y-3.5 bg-white", children: [
            ie === 1 ? /* @__PURE__ */ p.jsx("div", { className: "space-y-3", children: L && !Ou ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: A("booking.modal.selectedServices") }),
                /* @__PURE__ */ p.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: A(se.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: se.length }) })
              ] }),
              s.map((y) => {
                const T = o[y];
                return T ? /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `rounded-2xl p-px transition ${$l}`,
                    style: Yn,
                    children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-[15px] bg-white px-3.5 py-3.5", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ p.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: T.name }),
                        /* @__PURE__ */ p.jsx(ta, { text: T.description }),
                        /* @__PURE__ */ p.jsxs("p", { className: "mt-1 text-[13px] tabular-nums text-black/70", children: [
                          T.duration,
                          " ",
                          A("booking.modal.minSuffix"),
                          " · ",
                          ct(Number(T.price ?? 0))
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => Y(y),
                          className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${Ge}`,
                          "aria-label": A("booking.modal.removeAria"),
                          children: [
                            /* @__PURE__ */ p.jsx(Il, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                            A("booking.modal.remove")
                          ]
                        }
                      )
                    ] })
                  },
                  `selected-${T.id}-${y}`
                ) : null;
              }),
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => en(!0),
                  className: `flex w-full items-center justify-center gap-1.5 rounded-2xl bg-white px-3.5 py-3 text-sm font-semibold text-black ${Ge}`,
                  children: [
                    /* @__PURE__ */ p.jsx(Rl, { className: "h-4 w-4", "aria-hidden": !0 }),
                    A("booking.modal.addMoreServices")
                  ]
                }
              )
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: A("booking.modal.services") }),
                /* @__PURE__ */ p.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: A(Q.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: Q.length }) })
              ] }),
              L ? /* @__PURE__ */ p.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => en(!1),
                  className: "text-[12px] font-semibold text-black underline underline-offset-2",
                  children: A("booking.modal.hideList", { count: se.length })
                }
              ) : null,
              /* @__PURE__ */ p.jsx(
                Zf,
                {
                  categories: i,
                  selectedId: Ye,
                  onSelect: dt,
                  size: "sm",
                  className: "-mx-1 px-1",
                  accentFill: qt
                }
              ),
              Q.map((y) => {
                const T = y.variants ?? [], X = T.length > 0 ? bu[y.id] ?? T[0].label : null, O = Yf(
                  s,
                  o,
                  y,
                  X
                ), { price: Se, duration: Hu } = Gf(y, X);
                return /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `rounded-2xl transition ${O ? `p-px ${$l}` : `bg-white ${Ge}`}`,
                    style: O ? Yn : void 0,
                    children: /* @__PURE__ */ p.jsxs(
                      "div",
                      {
                        className: `flex items-start justify-between gap-3 ${O ? "rounded-[15px] bg-white px-3.5 py-3.5" : "px-3.5 py-3.5"}`,
                        children: [
                          /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ p.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: y.name }),
                            /* @__PURE__ */ p.jsx(ta, { text: y.description }),
                            T.length > 0 ? /* @__PURE__ */ p.jsxs("div", { className: "relative mt-1.5 max-w-full", children: [
                              /* @__PURE__ */ p.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => Gn(
                                    (gt) => gt === y.id ? null : y.id
                                  ),
                                  className: "flex w-full items-center justify-between rounded-full border border-black/12 bg-white px-3 py-1.5 text-left text-xs transition hover:border-black/25",
                                  children: [
                                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: X }),
                                    /* @__PURE__ */ p.jsx(bf, { className: "ml-1 h-3.5 w-3.5 shrink-0 text-black/45", "aria-hidden": !0 })
                                  ]
                                }
                              ),
                              sl === y.id ? /* @__PURE__ */ p.jsx("div", { className: "absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]", children: T.map((gt) => /* @__PURE__ */ p.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    Uu((zi) => ({
                                      ...zi,
                                      [y.id]: gt.label
                                    })), Gn(null);
                                  },
                                  className: `w-full px-3 py-2 text-left text-xs hover:bg-black/[0.04] ${X === gt.label ? "font-semibold text-black" : "text-black/70"}`,
                                  children: [
                                    gt.label,
                                    " · ",
                                    ct(Number(gt.price) || 0)
                                  ]
                                },
                                gt.label
                              )) }) : null
                            ] }) : null,
                            /* @__PURE__ */ p.jsxs("p", { className: "mt-1.5 text-[13px] tabular-nums text-black/45", children: [
                              Hu,
                              " ",
                              A("booking.modal.minSuffix"),
                              " · ",
                              ct(Number(Se) || 0)
                            ] })
                          ] }),
                          O ? /* @__PURE__ */ p.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ge(y),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${Ge}`,
                              "aria-label": A("booking.modal.removeAria"),
                              children: [
                                /* @__PURE__ */ p.jsx(Il, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                A("booking.modal.remove")
                              ]
                            }
                          ) : /* @__PURE__ */ p.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ge(y),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white transition ${sr}`,
                              style: Fe,
                              children: [
                                /* @__PURE__ */ p.jsx(Rl, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                A("booking.modal.add")
                              ]
                            }
                          )
                        ]
                      }
                    )
                  },
                  y.id
                );
              }),
              Q.length === 0 ? /* @__PURE__ */ p.jsx("p", { className: `rounded-2xl bg-white px-3.5 py-3 text-sm text-black/40 ${Ge}`, children: A("booking.modal.noServicesInCategory") }) : null
            ] }) }) : null,
            ie === 2 && ve ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: A("booking.modal.selectSpecialist") }),
              Ft.length > 0 && /* @__PURE__ */ p.jsxs("p", { className: "text-[12px] text-black/45", children: [
                A("booking.modal.availableFor"),
                " ",
                /* @__PURE__ */ p.jsx("span", { className: "font-medium text-black/70", children: Ft.map((y) => {
                  var T;
                  return ((T = l.find((X) => X.id === y)) == null ? void 0 : T.name) ?? y;
                }).join(" + ") })
              ] }),
              jt.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: `rounded-2xl bg-white px-4 py-5 text-center ${Ge}`, children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[14px] font-medium text-black/50", children: A("booking.modal.serviceUnavailable") }),
                /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => we(1),
                    className: "mt-3 text-[13px] font-semibold text-[color:var(--salon-primary)] underline underline-offset-2",
                    children: A("booking.modal.selectOtherService")
                  }
                )
              ] }) : /* @__PURE__ */ p.jsx("div", { className: "space-y-2.5", children: jt.map((y) => {
                const T = Oe === y.id;
                return /* @__PURE__ */ p.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => pe == null ? void 0 : pe(y.id),
                    className: `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition ${T ? `p-px ${$l}` : `bg-white ${Ge}`}`,
                    style: T ? Yn : void 0,
                    children: [
                      T ? /* @__PURE__ */ p.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white", style: Fe, children: /* @__PURE__ */ p.jsx($f, { className: "h-4 w-4", "aria-hidden": !0 }) }) : /* @__PURE__ */ p.jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black/30 ${Ge}`, children: /* @__PURE__ */ p.jsx(Qf, { className: "h-4 w-4", "aria-hidden": !0 }) }),
                      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ p.jsx("p", { className: "text-[15px] font-semibold text-black", children: y.name }),
                        y.bio && /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 truncate text-[12px] text-black/45", children: y.bio })
                      ] })
                    ]
                  },
                  y.id
                );
              }) })
            ] }) : null,
            ve && ie === 3 || !ve && ie === 2 ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: Oe ? A("booking.modal.timeWithStaff", { name: ((Lt = G.find((y) => y.id === Oe)) == null ? void 0 : Lt.name) ?? "" }) : A("booking.modal.dateTime") }),
                /* @__PURE__ */ p.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => we(1),
                    className: `inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--salon-primary)] ${Ge} active:bg-black/[0.03]`,
                    children: [
                      /* @__PURE__ */ p.jsx(Rl, { className: "h-3.5 w-3.5" }),
                      A("booking.modal.addService")
                    ]
                  }
                )
              ] }),
              L ? /* @__PURE__ */ p.jsx("p", { className: "text-[15px] font-semibold text-black", children: se.map((y) => y.name).join(" + ") }) : null,
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.date") }),
                /* @__PURE__ */ p.jsx("div", { className: "-mx-1 mt-2 flex gap-2.5 overflow-x-auto px-1 pb-1.5 scrollbar-none", children: ce.map((y) => {
                  const T = c === y.iso;
                  return /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => Te(y.iso),
                      className: `flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-2xl text-center transition ${T ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black/60 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]"}`,
                      style: T ? { backgroundColor: "#000" } : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("span", { className: "text-[10px] font-medium uppercase leading-none tabular-nums opacity-75", children: y.weekday }),
                        /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-[12px] font-bold leading-tight tabular-nums", children: y.day })
                      ]
                    },
                    y.iso
                  );
                }) })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.time") }),
                c ? E === "closed" ? /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: A("booking.modal.dayClosed") }) : Array.isArray(E) && E.length === 0 ? /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: A("booking.modal.noSlots") }) : Array.isArray(E) ? /* @__PURE__ */ p.jsx("div", { className: "mt-2 grid w-full max-w-full grid-cols-3 gap-2.5 sm:grid-cols-4", children: E.map((y) => {
                  const T = v === y;
                  return /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => D(y),
                      className: `min-w-0 touch-manipulation rounded-2xl px-2 py-3 text-center text-[14px] font-semibold tabular-nums transition ${T ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]" : "border border-black/[0.08] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)] active:bg-black/[0.03] active:shadow-[0_1px_2px_rgba(0,0,0,0.10)]"}`,
                      style: T ? { backgroundColor: "#000" } : void 0,
                      children: y
                    },
                    y
                  );
                }) }) : /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: A("booking.modal.selectServiceFirst") }) : /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: A("booking.modal.selectDateFirst") })
              ] })
            ] }) : null,
            ve && ie === 4 || !ve && ie === 3 ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: A("booking.modal.contactDetails") }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.name") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    className: ar,
                    value: x,
                    onChange: (y) => B(y.target.value),
                    autoComplete: "name",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.phone") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "tel",
                    className: ar,
                    value: w,
                    onChange: (y) => z(y.target.value),
                    autoComplete: "tel",
                    inputMode: "tel",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.email") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "email",
                    inputMode: "email",
                    autoComplete: "email",
                    className: ar,
                    value: C,
                    onChange: (y) => V(y.target.value),
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: A("booking.modal.notes") }),
                /* @__PURE__ */ p.jsx(
                  "textarea",
                  {
                    className: `${ar} resize-none`,
                    rows: 2,
                    value: M,
                    onChange: (y) => ue(y.target.value)
                  }
                )
              ] })
            ] }) : null,
            De ? /* @__PURE__ */ p.jsx("p", { className: "rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700", role: "alert", children: De }) : null
          ] }) }),
          !oe && !U ? /* @__PURE__ */ p.jsxs("div", { className: "relative z-[2] shrink-0 border-t border-black/[0.06] bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-5", children: [
            L ? /* @__PURE__ */ p.jsxs("div", { className: "mb-3 px-1", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] tabular-nums text-black/50", children: A("booking.modal.totalDuration", { min: Math.max(0, g) }) }),
              /* @__PURE__ */ p.jsx("p", { className: "text-[17px] font-semibold tabular-nums text-black/70 leading-tight", children: A("booking.modal.totalPrice", { price: ct(h) }) }),
              v ? /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 text-[13px] font-semibold tabular-nums text-black", children: A("booking.modal.startTime", { start: v, end: W }) }) : ie > 1 ? /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 truncate text-[13px] font-semibold text-black", children: se.map((y) => y.name).join(" + ") }) : null
            ] }) : null,
            ie === 3 && _ !== "none" && /* @__PURE__ */ p.jsxs("div", { className: "mb-2.5 space-y-1 text-center", children: [
              /* @__PURE__ */ p.jsxs("p", { className: "flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[#635BFF]", children: [
                /* @__PURE__ */ p.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 60 60", fill: "none", "aria-hidden": !0, children: [
                  /* @__PURE__ */ p.jsx("rect", { width: "60", height: "60", rx: "8", fill: "#635BFF" }),
                  /* @__PURE__ */ p.jsx("path", { d: "M27.5 22.5c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.4 2.7v-9.8c-3.5-1.4-7-2-10.4-2C23.1 11 18 15.2 18 22.9c0 12.1 16.6 10.2 16.6 15.4 0 2-1.7 2.7-4.1 2.7-3.5 0-8-1.5-11.5-3.5v9.9c3.9 1.7 7.9 2.4 11.5 2.4 8.8 0 14.8-4.3 14.8-12.2C45.3 25.4 27.5 27.6 27.5 22.5z", fill: "white" })
                ] }),
                _ === "deposit" && P && P > 0 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                  A("booking.modal.depositRequired"),
                  " ",
                  /* @__PURE__ */ p.jsx("strong", { className: "mx-0.5", children: ct(Number(P) || 0) })
                ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                  A("booking.modal.paymentFrom"),
                  " ",
                  /* @__PURE__ */ p.jsx("strong", { className: "mx-0.5", children: ct(h) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsxs("p", { className: "text-[11px] text-black/35", children: [
                A("booking.modal.securePayment"),
                " ",
                /* @__PURE__ */ p.jsx("span", { className: "font-bold text-[#635BFF]", children: "Stripe" })
              ] }),
              $ ? /* @__PURE__ */ p.jsx("p", { className: "mx-auto max-w-[320px] text-[11px] leading-relaxed text-black/45", children: Xf({
                cancelPolicyHours: $,
                cancelPolicyAction: j ?? "keep_deposit",
                depositAmountEuros: P
              }) }) : null
            ] }),
            (() => {
              const y = ve ? 4 : 3, T = ie === y, X = ie === 1 && !L || ve && ie === 2 && (!Oe || jt.length === 0) || (ve ? ie === 3 : ie === 2) && (!c || !v);
              return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => we((O) => O > 1 ? O - 1 : O),
                      disabled: ie === 1,
                      className: "rounded-full border border-black/10 bg-white py-2.5 text-[14px] font-medium text-black/60 transition disabled:opacity-25 active:scale-[0.98]",
                      children: A("booking.modal.back")
                    }
                  ),
                  T ? /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      type: "submit",
                      form: "salon-booking-form",
                      disabled: R || !v || !L,
                      className: `flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${sr}`,
                      style: Fe,
                      children: [
                        R ? /* @__PURE__ */ p.jsx(Wf, { className: "h-4 w-4 animate-spin", "aria-hidden": !0 }) : null,
                        A(_ !== "none" ? "booking.modal.payAndBook" : "booking.modal.sendRequest")
                      ]
                    }
                  ) : /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        X || we((O) => O < y ? O + 1 : O);
                      },
                      disabled: X,
                      className: `rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${sr}`,
                      style: Fe,
                      children: A("booking.modal.continue")
                    }
                  )
                ] }),
                T ? /* @__PURE__ */ p.jsxs("p", { className: "mt-2.5 text-center text-[10.5px] leading-snug text-black/35", children: [
                  A("booking.modal.disclaimerPre"),
                  " ",
                  A("booking.modal.disclaimerAccept"),
                  " ",
                  /* @__PURE__ */ p.jsx("a", { href: a, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: A("booking.modal.terms") }),
                  " ",
                  A("booking.modal.smsConsentAnd"),
                  " ",
                  /* @__PURE__ */ p.jsx("a", { href: d, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: A("booking.modal.privacy") }),
                  "."
                ] }) : null
              ] });
            })()
          ] }) : null
        ]
      }
    )
  ] }) : null;
}
const t3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SalonBookingModal: e3
}, Symbol.toStringTag, { value: "Module" }));
