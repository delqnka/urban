var ea = { exports: {} }, Hu = {}, ta = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = Symbol.for("react.element"), Ed = Symbol.for("react.portal"), Cd = Symbol.for("react.fragment"), Nd = Symbol.for("react.strict_mode"), _d = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), Pd = Symbol.for("react.context"), Dd = Symbol.for("react.forward_ref"), Fd = Symbol.for("react.suspense"), Td = Symbol.for("react.memo"), Ld = Symbol.for("react.lazy"), Ai = Symbol.iterator;
function zd(e) {
  return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var na = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ra = Object.assign, ua = {};
function Wn(e, t, n) {
  this.props = e, this.context = t, this.refs = ua, this.updater = n || na;
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function la() {
}
la.prototype = Wn.prototype;
function Ro(e, t, n) {
  this.props = e, this.context = t, this.refs = ua, this.updater = n || na;
}
var $o = Ro.prototype = new la();
$o.constructor = Ro;
ra($o, Wn.prototype);
$o.isPureReactComponent = !0;
var Bi = Array.isArray, oa = Object.prototype.hasOwnProperty, Oo = { current: null }, ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function sa(e, t, n) {
  var r, u = {}, l = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) oa.call(t, r) && !ia.hasOwnProperty(r) && (u[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) u.children = n;
  else if (1 < i) {
    for (var s = Array(i), d = 0; d < i; d++) s[d] = arguments[d + 2];
    u.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) u[r] === void 0 && (u[r] = i[r]);
  return { $$typeof: Mr, type: e, key: l, ref: o, props: u, _owner: Oo.current };
}
function Md(e, t) {
  return { $$typeof: Mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Io(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function Ad(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ri = /\/+/g;
function al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ad("" + e.key) : t.toString(36);
}
function iu(e, t, n, r, u) {
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
        case Mr:
        case Ed:
          o = !0;
      }
  }
  if (o) return o = e, u = u(o), e = r === "" ? "." + al(o, 0) : r, Bi(u) ? (n = "", e != null && (n = e.replace(Ri, "$&/") + "/"), iu(u, t, n, "", function(d) {
    return d;
  })) : u != null && (Io(u) && (u = Md(u, n + (!u.key || o && o.key === u.key ? "" : ("" + u.key).replace(Ri, "$&/") + "/") + e)), t.push(u)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bi(e)) for (var i = 0; i < e.length; i++) {
    l = e[i];
    var s = r + al(l, i);
    o += iu(l, t, n, s, u);
  }
  else if (s = zd(e), typeof s == "function") for (e = s.call(e), i = 0; !(l = e.next()).done; ) l = l.value, s = r + al(l, i++), o += iu(l, t, n, s, u);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Vr(e, t, n) {
  if (e == null) return e;
  var r = [], u = 0;
  return iu(e, r, "", "", function(l) {
    return t.call(n, l, u++);
  }), r;
}
function Bd(e) {
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
var Pe = { current: null }, su = { transition: null }, Rd = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: su, ReactCurrentOwner: Oo };
function aa() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: Vr, forEach: function(e, t, n) {
  Vr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Io(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = Wn;
O.Fragment = Cd;
O.Profiler = _d;
O.PureComponent = Ro;
O.StrictMode = Nd;
O.Suspense = Fd;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
O.act = aa;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ra({}, e.props), u = e.key, l = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, o = Oo.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) oa.call(t, s) && !ia.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var d = 0; d < s; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Mr, type: e.type, key: u, ref: l, props: r, _owner: o };
};
O.createContext = function(e) {
  return e = { $$typeof: Pd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jd, _context: e }, e.Consumer = e;
};
O.createElement = sa;
O.createFactory = function(e) {
  var t = sa.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Dd, render: e };
};
O.isValidElement = Io;
O.lazy = function(e) {
  return { $$typeof: Ld, _payload: { _status: -1, _result: e }, _init: Bd };
};
O.memo = function(e, t) {
  return { $$typeof: Td, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = su.transition;
  su.transition = {};
  try {
    e();
  } finally {
    su.transition = t;
  }
};
O.unstable_act = aa;
O.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
O.useContext = function(e) {
  return Pe.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
O.useId = function() {
  return Pe.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return Pe.current.useRef(e);
};
O.useState = function(e) {
  return Pe.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return Pe.current.useTransition();
};
O.version = "18.3.1";
ta.exports = O;
var x = ta.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d = x, Od = Symbol.for("react.element"), Id = Symbol.for("react.fragment"), Ud = Object.prototype.hasOwnProperty, Vd = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ca(e, t, n) {
  var r, u = {}, l = null, o = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ud.call(t, r) && !Wd.hasOwnProperty(r) && (u[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) u[r] === void 0 && (u[r] = t[r]);
  return { $$typeof: Od, type: e, key: l, ref: o, props: u, _owner: Vd.current };
}
Hu.Fragment = Id;
Hu.jsx = ca;
Hu.jsxs = ca;
ea.exports = Hu;
var p = ea.exports, da = { exports: {} }, Ue = {}, fa = { exports: {} }, pa = {};
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
  function t(P, M) {
    var R = P.length;
    P.push(M);
    e: for (; 0 < R; ) {
      var X = R - 1 >>> 1, V = P[X];
      if (0 < u(V, M)) P[X] = M, P[R] = V, R = X;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var M = P[0], R = P.pop();
    if (R !== M) {
      P[0] = R;
      e: for (var X = 0, V = P.length, pt = V >>> 1; X < pt; ) {
        var ke = 2 * (X + 1) - 1, He = P[ke], me = ke + 1, lt = P[me];
        if (0 > u(He, R)) me < V && 0 > u(lt, He) ? (P[X] = lt, P[me] = R, X = me) : (P[X] = He, P[ke] = R, X = ke);
        else if (me < V && 0 > u(lt, R)) P[X] = lt, P[me] = R, X = me;
        else break e;
      }
    }
    return M;
  }
  function u(P, M) {
    var R = P.sortIndex - M.sortIndex;
    return R !== 0 ? R : P.id - M.id;
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
  var s = [], d = [], h = 1, v = null, m = 3, k = !1, S = !1, E = !1, B = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(P) {
    for (var M = n(d); M !== null; ) {
      if (M.callback === null) r(d);
      else if (M.startTime <= P) r(d), M.sortIndex = M.expirationTime, t(s, M);
      else break;
      M = n(d);
    }
  }
  function y(P) {
    if (E = !1, c(P), !S) if (n(s) !== null) S = !0, Ne(C);
    else {
      var M = n(d);
      M !== null && ft(y, M.startTime - P);
    }
  }
  function C(P, M) {
    S = !1, E && (E = !1, f(j), j = -1), k = !0;
    var R = m;
    try {
      for (c(M), v = n(s); v !== null && (!(v.expirationTime > M) || P && !$()); ) {
        var X = v.callback;
        if (typeof X == "function") {
          v.callback = null, m = v.priorityLevel;
          var V = X(v.expirationTime <= M);
          M = e.unstable_now(), typeof V == "function" ? v.callback = V : v === n(s) && r(s), c(M);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var pt = !0;
      else {
        var ke = n(d);
        ke !== null && ft(y, ke.startTime - M), pt = !1;
      }
      return pt;
    } finally {
      v = null, m = R, k = !1;
    }
  }
  var _ = !1, N = null, j = -1, A = 5, T = -1;
  function $() {
    return !(e.unstable_now() - T < A);
  }
  function K() {
    if (N !== null) {
      var P = e.unstable_now();
      T = P;
      var M = !0;
      try {
        M = N(!0, P);
      } finally {
        M ? Y() : (_ = !1, N = null);
      }
    } else _ = !1;
  }
  var Y;
  if (typeof a == "function") Y = function() {
    a(K);
  };
  else if (typeof MessageChannel < "u") {
    var de = new MessageChannel(), We = de.port2;
    de.port1.onmessage = K, Y = function() {
      We.postMessage(null);
    };
  } else Y = function() {
    B(K, 0);
  };
  function Ne(P) {
    N = P, _ || (_ = !0, Y());
  }
  function ft(P, M) {
    j = B(function() {
      P(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    S || k || (S = !0, Ne(C));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = m;
    }
    var R = m;
    m = M;
    try {
      return P();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, M) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var R = m;
    m = P;
    try {
      return M();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(P, M, R) {
    var X = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? X + R : X) : R = X, P) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = R + V, P = { id: h++, callback: M, priorityLevel: P, startTime: R, expirationTime: V, sortIndex: -1 }, R > X ? (P.sortIndex = R, t(d, P), n(s) === null && P === n(d) && (E ? (f(j), j = -1) : E = !0, ft(y, R - X))) : (P.sortIndex = V, t(s, P), S || k || (S = !0, Ne(C))), P;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(P) {
    var M = m;
    return function() {
      var R = m;
      m = M;
      try {
        return P.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(pa);
fa.exports = pa;
var Hd = fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd = x, Ie = Hd;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ma = /* @__PURE__ */ new Set(), yr = {};
function fn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) ma.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Il = Object.prototype.hasOwnProperty, Qd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $i = {}, Oi = {};
function Kd(e) {
  return Il.call(Oi, e) ? !0 : Il.call($i, e) ? !1 : Qd.test(e) ? Oi[e] = !0 : ($i[e] = !0, !1);
}
function Yd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gd(e, t, n, r) {
  if (t === null || typeof t > "u" || Yd(e, t, n, r)) return !0;
  if (r) return !1;
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
function De(e, t, n, r, u, l, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = u, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uo = /[\-:]([a-z])/g;
function Vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Uo,
    Vo
  );
  xe[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Uo, Vo);
  xe[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Uo, Vo);
  xe[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wo(e, t, n, r) {
  var u = xe.hasOwnProperty(t) ? xe[t] : null;
  (u !== null ? u.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gd(t, n, u, r) && (n = null), r || u === null ? Kd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : u.mustUseProperty ? e[u.propertyName] = n === null ? u.type === 3 ? !1 : "" : n : (t = u.attributeName, r = u.attributeNamespace, n === null ? e.removeAttribute(t) : (u = u.type, n = u === 3 || u === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wr = Symbol.for("react.element"), gn = Symbol.for("react.portal"), xn = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), Ul = Symbol.for("react.profiler"), ha = Symbol.for("react.provider"), va = Symbol.for("react.context"), bo = Symbol.for("react.forward_ref"), Vl = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), Qo = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), ya = Symbol.for("react.offscreen"), Ii = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object" ? null : (e = Ii && e[Ii] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ue = Object.assign, cl;
function rr(e) {
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
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var u = d.stack.split(`
`), l = r.stack.split(`
`), o = u.length - 1, i = l.length - 1; 1 <= o && 0 <= i && u[o] !== l[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (u[o] !== l[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || u[o] !== l[i]) {
              var s = `
` + u[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    dl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function Xd(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
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
    case gn:
      return "Portal";
    case Ul:
      return "Profiler";
    case Ho:
      return "StrictMode";
    case Vl:
      return "Suspense";
    case Wl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case va:
      return (e.displayName || "Context") + ".Consumer";
    case ha:
      return (e._context.displayName || "Context") + ".Provider";
    case bo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qo:
      return t = e.displayName || null, t !== null ? t : Hl(e.type) || "Memo";
    case Dt:
      t = e._payload, e = e._init;
      try {
        return Hl(e(t));
      } catch {
      }
  }
  return null;
}
function Zd(e) {
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
function Wt(e) {
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
function ga(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jd(e) {
  var t = ga(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var u = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return u.call(this);
    }, set: function(o) {
      r = "" + o, l.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = Jd(e));
}
function xa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ga(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function xu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ui(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ka(e, t) {
  t = t.checked, t != null && Wo(e, "checked", t, !1);
}
function Ql(e, t) {
  ka(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kl(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Kl(e, t, n) {
  (t !== "number" || xu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Fn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
    for (n = 0; n < e.length; n++) u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, u = 0; u < e.length; u++) {
      if (e[u].value === n) {
        e[u].selected = !0, r && (e[u].defaultSelected = !0);
        return;
      }
      t !== null || e[u].disabled || (t = e[u]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Wi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function wa(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Hi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sa(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var br, Ea = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, u) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, u);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = br.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ir = {
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
}, qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function(e) {
  qd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
  });
});
function Ca(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
}
function Na(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, u = Ca(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, u) : e[n] = u;
  }
}
var ef = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xl(e, t) {
  if (t) {
    if (ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
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
var ql = null, Tn = null, Ln = null;
function bi(e) {
  if (e = Rr(e)) {
    if (typeof ql != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = Gu(t), ql(e.stateNode, e.type, t));
  }
}
function _a(e) {
  Tn ? Ln ? Ln.push(e) : Ln = [e] : Tn = e;
}
function ja() {
  if (Tn) {
    var e = Tn, t = Ln;
    if (Ln = Tn = null, bi(e), t) for (e = 0; e < t.length; e++) bi(t[e]);
  }
}
function Pa(e, t) {
  return e(t);
}
function Da() {
}
var pl = !1;
function Fa(e, t, n) {
  if (pl) return e(t, n);
  pl = !0;
  try {
    return Pa(e, t, n);
  } finally {
    pl = !1, (Tn !== null || Ln !== null) && (Da(), ja());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gu(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var eo = !1;
if (Et) try {
  var Xn = {};
  Object.defineProperty(Xn, "passive", { get: function() {
    eo = !0;
  } }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
} catch {
  eo = !1;
}
function tf(e, t, n, r, u, l, o, i, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var sr = !1, ku = null, wu = !1, to = null, nf = { onError: function(e) {
  sr = !0, ku = e;
} };
function rf(e, t, n, r, u, l, o, i, s) {
  sr = !1, ku = null, tf.apply(nf, arguments);
}
function uf(e, t, n, r, u, l, o, i, s) {
  if (rf.apply(this, arguments), sr) {
    if (sr) {
      var d = ku;
      sr = !1, ku = null;
    } else throw Error(w(198));
    wu || (wu = !0, to = d);
  }
}
function pn(e) {
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
function Ta(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (pn(e) !== e) throw Error(w(188));
}
function lf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = pn(e), t === null) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var u = n.return;
    if (u === null) break;
    var l = u.alternate;
    if (l === null) {
      if (r = u.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (u.child === l.child) {
      for (l = u.child; l; ) {
        if (l === n) return Qi(u), e;
        if (l === r) return Qi(u), t;
        l = l.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = u, r = l;
    else {
      for (var o = !1, i = u.child; i; ) {
        if (i === n) {
          o = !0, n = u, r = l;
          break;
        }
        if (i === r) {
          o = !0, r = u, n = l;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = l.child; i; ) {
          if (i === n) {
            o = !0, n = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, n = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function La(e) {
  return e = lf(e), e !== null ? za(e) : null;
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
var Ma = Ie.unstable_scheduleCallback, Ki = Ie.unstable_cancelCallback, of = Ie.unstable_shouldYield, sf = Ie.unstable_requestPaint, se = Ie.unstable_now, af = Ie.unstable_getCurrentPriorityLevel, Yo = Ie.unstable_ImmediatePriority, Aa = Ie.unstable_UserBlockingPriority, Su = Ie.unstable_NormalPriority, cf = Ie.unstable_LowPriority, Ba = Ie.unstable_IdlePriority, bu = null, ct = null;
function df(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function") try {
    ct.onCommitFiberRoot(bu, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var nt = Math.clz32 ? Math.clz32 : mf, ff = Math.log, pf = Math.LN2;
function mf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ff(e) / pf | 0) | 0;
}
var Qr = 64, Kr = 4194304;
function lr(e) {
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
function Eu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, u = e.suspendedLanes, l = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~u;
    i !== 0 ? r = lr(i) : (l &= o, l !== 0 && (r = lr(l)));
  } else o = n & ~u, o !== 0 ? r = lr(o) : l !== 0 && (r = lr(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & u) && (u = r & -r, l = t & -t, u >= l || u === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - nt(t), u = 1 << n, r |= e[n], t &= ~u;
  return r;
}
function hf(e, t) {
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
function vf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, u = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var o = 31 - nt(l), i = 1 << o, s = u[o];
    s === -1 ? (!(i & n) || i & r) && (u[o] = hf(i, t)) : s <= t && (e.expiredLanes |= i), l &= ~i;
  }
}
function no(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ra() {
  var e = Qr;
  return Qr <<= 1, !(Qr & 4194240) && (Qr = 64), e;
}
function ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ar(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function yf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var u = 31 - nt(n), l = 1 << u;
    t[u] = 0, r[u] = -1, e[u] = -1, n &= ~l;
  }
}
function Go(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), u = 1 << r;
    u & t | e[r] & t && (e[r] |= t), n &= ~u;
  }
}
var Q = 0;
function $a(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Oa, Xo, Ia, Ua, Va, ro = !1, Yr = [], At = null, Bt = null, Rt = null, kr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Tt = [], gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Zn(e, t, n, r, u, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [u] }, t !== null && (t = Rr(t), t !== null && Xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
}
function xf(e, t, n, r, u) {
  switch (t) {
    case "focusin":
      return At = Zn(At, e, t, n, r, u), !0;
    case "dragenter":
      return Bt = Zn(Bt, e, t, n, r, u), !0;
    case "mouseover":
      return Rt = Zn(Rt, e, t, n, r, u), !0;
    case "pointerover":
      var l = u.pointerId;
      return kr.set(l, Zn(kr.get(l) || null, e, t, n, r, u)), !0;
    case "gotpointercapture":
      return l = u.pointerId, wr.set(l, Zn(wr.get(l) || null, e, t, n, r, u)), !0;
  }
  return !1;
}
function Wa(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ta(n), t !== null) {
          e.blockedOn = t, Va(e.priority, function() {
            Ia(n);
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
function au(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Jl = r, n.target.dispatchEvent(r), Jl = null;
    } else return t = Rr(n), t !== null && Xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  au(e) && n.delete(t);
}
function kf() {
  ro = !1, At !== null && au(At) && (At = null), Bt !== null && au(Bt) && (Bt = null), Rt !== null && au(Rt) && (Rt = null), kr.forEach(Gi), wr.forEach(Gi);
}
function Jn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ro || (ro = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, kf)));
}
function Sr(e) {
  function t(u) {
    return Jn(u, e);
  }
  if (0 < Yr.length) {
    Jn(Yr[0], e);
    for (var n = 1; n < Yr.length; n++) {
      var r = Yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && Jn(At, e), Bt !== null && Jn(Bt, e), Rt !== null && Jn(Rt, e), kr.forEach(t), wr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Wa(n), n.blockedOn === null && Tt.shift();
}
var zn = jt.ReactCurrentBatchConfig, Cu = !0;
function wf(e, t, n, r) {
  var u = Q, l = zn.transition;
  zn.transition = null;
  try {
    Q = 1, Zo(e, t, n, r);
  } finally {
    Q = u, zn.transition = l;
  }
}
function Sf(e, t, n, r) {
  var u = Q, l = zn.transition;
  zn.transition = null;
  try {
    Q = 4, Zo(e, t, n, r);
  } finally {
    Q = u, zn.transition = l;
  }
}
function Zo(e, t, n, r) {
  if (Cu) {
    var u = uo(e, t, n, r);
    if (u === null) Cl(e, t, r, Nu, n), Yi(e, r);
    else if (xf(u, e, t, n, r)) r.stopPropagation();
    else if (Yi(e, r), t & 4 && -1 < gf.indexOf(e)) {
      for (; u !== null; ) {
        var l = Rr(u);
        if (l !== null && Oa(l), l = uo(e, t, n, r), l === null && Cl(e, t, r, Nu, n), l === u) break;
        u = l;
      }
      u !== null && r.stopPropagation();
    } else Cl(e, t, r, null, n);
  }
}
var Nu = null;
function uo(e, t, n, r) {
  if (Nu = null, e = Ko(r), e = tn(e), e !== null) if (t = pn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ta(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Nu = e, null;
}
function Ha(e) {
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
      switch (af()) {
        case Yo:
          return 1;
        case Aa:
          return 4;
        case Su:
        case cf:
          return 16;
        case Ba:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, Jo = null, cu = null;
function ba() {
  if (cu) return cu;
  var e, t = Jo, n = t.length, r, u = "value" in zt ? zt.value : zt.textContent, l = u.length;
  for (e = 0; e < n && t[e] === u[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === u[l - r]; r++) ;
  return cu = u.slice(e, 1 < r ? 1 - r : void 0);
}
function du(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Gr() {
  return !0;
}
function Xi() {
  return !1;
}
function Ve(e) {
  function t(n, r, u, l, o) {
    this._reactName = n, this._targetInst = u, this.type = r, this.nativeEvent = l, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(l) : l[i]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Gr : Xi, this.isPropagationStopped = Xi, this;
  }
  return ue(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gr);
  }, persist: function() {
  }, isPersistent: Gr }), t;
}
var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qo = Ve(Hn), Br = ue({}, Hn, { view: 0, detail: 0 }), Ef = Ve(Br), hl, vl, qn, Qu = ue({}, Br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ei, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (hl = e.screenX - qn.screenX, vl = e.screenY - qn.screenY) : vl = hl = 0, qn = e), hl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vl;
} }), Zi = Ve(Qu), Cf = ue({}, Qu, { dataTransfer: 0 }), Nf = Ve(Cf), _f = ue({}, Br, { relatedTarget: 0 }), yl = Ve(_f), jf = ue({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = Ve(jf), Df = ue({}, Hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ff = Ve(Df), Tf = ue({}, Hn, { data: 0 }), Ji = Ve(Tf), Lf = {
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
}, zf = {
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
}, Mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mf[e]) ? !!t[e] : !1;
}
function ei() {
  return Af;
}
var Bf = ue({}, Br, { key: function(e) {
  if (e.key) {
    var t = Lf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = du(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ei, charCode: function(e) {
  return e.type === "keypress" ? du(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? du(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = Ve(Bf), $f = ue({}, Qu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qi = Ve($f), Of = ue({}, Br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ei }), If = Ve(Of), Uf = ue({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vf = Ve(Uf), Wf = ue({}, Qu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hf = Ve(Wf), bf = [9, 13, 27, 32], ti = Et && "CompositionEvent" in window, ar = null;
Et && "documentMode" in document && (ar = document.documentMode);
var Qf = Et && "TextEvent" in window && !ar, Qa = Et && (!ti || ar && 8 < ar && 11 >= ar), es = " ", ts = !1;
function Ka(e, t) {
  switch (e) {
    case "keyup":
      return bf.indexOf(t.keyCode) !== -1;
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
function Ya(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function Kf(e, t) {
  switch (e) {
    case "compositionend":
      return Ya(t);
    case "keypress":
      return t.which !== 32 ? null : (ts = !0, es);
    case "textInput":
      return e = t.data, e === es && ts ? null : e;
    default:
      return null;
  }
}
function Yf(e, t) {
  if (kn) return e === "compositionend" || !ti && Ka(e, t) ? (e = ba(), cu = Jo = zt = null, kn = !1, e) : null;
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
      return Qa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gf[e.type] : t === "textarea";
}
function Ga(e, t, n, r) {
  _a(r), t = _u(t, "onChange"), 0 < t.length && (n = new qo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var cr = null, Er = null;
function Xf(e) {
  oc(e, 0);
}
function Ku(e) {
  var t = En(e);
  if (xa(t)) return e;
}
function Zf(e, t) {
  if (e === "change") return t;
}
var Xa = !1;
if (Et) {
  var gl;
  if (Et) {
    var xl = "oninput" in document;
    if (!xl) {
      var rs = document.createElement("div");
      rs.setAttribute("oninput", "return;"), xl = typeof rs.oninput == "function";
    }
    gl = xl;
  } else gl = !1;
  Xa = gl && (!document.documentMode || 9 < document.documentMode);
}
function us() {
  cr && (cr.detachEvent("onpropertychange", Za), Er = cr = null);
}
function Za(e) {
  if (e.propertyName === "value" && Ku(Er)) {
    var t = [];
    Ga(t, Er, e, Ko(e)), Fa(Xf, t);
  }
}
function Jf(e, t, n) {
  e === "focusin" ? (us(), cr = t, Er = n, cr.attachEvent("onpropertychange", Za)) : e === "focusout" && us();
}
function qf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ku(Er);
}
function e0(e, t) {
  if (e === "click") return Ku(t);
}
function t0(e, t) {
  if (e === "input" || e === "change") return Ku(t);
}
function n0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : n0;
function Cr(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var u = n[r];
    if (!Il.call(t, u) || !ut(e[u], t[u])) return !1;
  }
  return !0;
}
function ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function os(e, t) {
  var n = ls(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
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
    n = ls(n);
  }
}
function Ja(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ja(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qa() {
  for (var e = window, t = xu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xu(e.document);
  }
  return t;
}
function ni(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function r0(e) {
  var t = qa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ja(n.ownerDocument.documentElement, n)) {
    if (r !== null && ni(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var u = n.textContent.length, l = Math.min(r.start, u);
        r = r.end === void 0 ? l : Math.min(r.end, u), !e.extend && l > r && (u = r, r = l, l = u), u = os(n, l);
        var o = os(
          n,
          r
        );
        u && o && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var u0 = Et && "documentMode" in document && 11 >= document.documentMode, wn = null, lo = null, dr = null, oo = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oo || wn == null || wn !== xu(r) || (r = wn, "selectionStart" in r && ni(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), dr && Cr(dr, r) || (dr = r, r = _u(lo, "onSelect"), 0 < r.length && (t = new qo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = wn)));
}
function Xr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Sn = { animationend: Xr("Animation", "AnimationEnd"), animationiteration: Xr("Animation", "AnimationIteration"), animationstart: Xr("Animation", "AnimationStart"), transitionend: Xr("Transition", "TransitionEnd") }, kl = {}, ec = {};
Et && (ec = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
function Yu(e) {
  if (kl[e]) return kl[e];
  if (!Sn[e]) return e;
  var t = Sn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ec) return kl[e] = t[n];
  return e;
}
var tc = Yu("animationend"), nc = Yu("animationiteration"), rc = Yu("animationstart"), uc = Yu("transitionend"), lc = /* @__PURE__ */ new Map(), ss = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bt(e, t) {
  lc.set(e, t), fn(t, [e]);
}
for (var wl = 0; wl < ss.length; wl++) {
  var Sl = ss[wl], l0 = Sl.toLowerCase(), o0 = Sl[0].toUpperCase() + Sl.slice(1);
  bt(l0, "on" + o0);
}
bt(tc, "onAnimationEnd");
bt(nc, "onAnimationIteration");
bt(rc, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(uc, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), i0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function as(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, uf(r, t, void 0, e), e.currentTarget = null;
}
function oc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], u = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], s = i.instance, d = i.currentTarget;
        if (i = i.listener, s !== l && u.isPropagationStopped()) break e;
        as(u, i, d), l = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], s = i.instance, d = i.currentTarget, i = i.listener, s !== l && u.isPropagationStopped()) break e;
        as(u, i, d), l = s;
      }
    }
  }
  if (wu) throw e = to, wu = !1, to = null, e;
}
function J(e, t) {
  var n = t[fo];
  n === void 0 && (n = t[fo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ic(t, e, 2, !1), n.add(r));
}
function El(e, t, n) {
  var r = 0;
  t && (r |= 4), ic(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[Zr]) {
    e[Zr] = !0, ma.forEach(function(n) {
      n !== "selectionchange" && (i0.has(n) || El(n, !1, e), El(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || (t[Zr] = !0, El("selectionchange", !1, t));
  }
}
function ic(e, t, n, r) {
  switch (Ha(t)) {
    case 1:
      var u = wf;
      break;
    case 4:
      u = Sf;
      break;
    default:
      u = Zo;
  }
  n = u.bind(null, t, n, e), u = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), r ? u !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: u }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, { passive: u }) : e.addEventListener(t, n, !1);
}
function Cl(e, t, n, r, u) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === u || i.nodeType === 8 && i.parentNode === u) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === u || s.nodeType === 8 && s.parentNode === u)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = tn(i), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = l = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Fa(function() {
    var d = l, h = Ko(n), v = [];
    e: {
      var m = lc.get(e);
      if (m !== void 0) {
        var k = qo, S = e;
        switch (e) {
          case "keypress":
            if (du(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Rf;
            break;
          case "focusin":
            S = "focus", k = yl;
            break;
          case "focusout":
            S = "blur", k = yl;
            break;
          case "beforeblur":
          case "afterblur":
            k = yl;
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
            k = Zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = If;
            break;
          case tc:
          case nc:
          case rc:
            k = Pf;
            break;
          case uc:
            k = Vf;
            break;
          case "scroll":
            k = Ef;
            break;
          case "wheel":
            k = Hf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = qi;
        }
        var E = (t & 4) !== 0, B = !E && e === "scroll", f = E ? m !== null ? m + "Capture" : null : m;
        E = [];
        for (var a = d, c; a !== null; ) {
          c = a;
          var y = c.stateNode;
          if (c.tag === 5 && y !== null && (c = y, f !== null && (y = xr(a, f), y != null && E.push(_r(a, y, c)))), B) break;
          a = a.return;
        }
        0 < E.length && (m = new k(m, S, null, n, h), v.push({ event: m, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", m && n !== Jl && (S = n.relatedTarget || n.fromElement) && (tn(S) || S[Ct])) break e;
        if ((k || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = d, S = S ? tn(S) : null, S !== null && (B = pn(S), S !== B || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = d), k !== S)) {
          if (E = Zi, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (E = qi, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), B = k == null ? m : En(k), c = S == null ? m : En(S), m = new E(y, a + "leave", k, n, h), m.target = B, m.relatedTarget = c, y = null, tn(h) === d && (E = new E(f, a + "enter", S, n, h), E.target = c, E.relatedTarget = B, y = E), B = y, k && S) t: {
            for (E = k, f = S, a = 0, c = E; c; c = yn(c)) a++;
            for (c = 0, y = f; y; y = yn(y)) c++;
            for (; 0 < a - c; ) E = yn(E), a--;
            for (; 0 < c - a; ) f = yn(f), c--;
            for (; a--; ) {
              if (E === f || f !== null && E === f.alternate) break t;
              E = yn(E), f = yn(f);
            }
            E = null;
          }
          else E = null;
          k !== null && cs(v, m, k, E, !1), S !== null && B !== null && cs(v, B, S, E, !0);
        }
      }
      e: {
        if (m = d ? En(d) : window, k = m.nodeName && m.nodeName.toLowerCase(), k === "select" || k === "input" && m.type === "file") var C = Zf;
        else if (ns(m)) if (Xa) C = t0;
        else {
          C = qf;
          var _ = Jf;
        }
        else (k = m.nodeName) && k.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = e0);
        if (C && (C = C(e, d))) {
          Ga(v, C, n, h);
          break e;
        }
        _ && _(e, m, d), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && Kl(m, "number", m.value);
      }
      switch (_ = d ? En(d) : window, e) {
        case "focusin":
          (ns(_) || _.contentEditable === "true") && (wn = _, lo = d, dr = null);
          break;
        case "focusout":
          dr = lo = wn = null;
          break;
        case "mousedown":
          oo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          oo = !1, is(v, n, h);
          break;
        case "selectionchange":
          if (u0) break;
        case "keydown":
        case "keyup":
          is(v, n, h);
      }
      var N;
      if (ti) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e;
        }
        j = void 0;
      }
      else kn ? Ka(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Qa && n.locale !== "ko" && (kn || j !== "onCompositionStart" ? j === "onCompositionEnd" && kn && (N = ba()) : (zt = h, Jo = "value" in zt ? zt.value : zt.textContent, kn = !0)), _ = _u(d, j), 0 < _.length && (j = new Ji(j, e, null, n, h), v.push({ event: j, listeners: _ }), N ? j.data = N : (N = Ya(n), N !== null && (j.data = N)))), (N = Qf ? Kf(e, n) : Yf(e, n)) && (d = _u(d, "onBeforeInput"), 0 < d.length && (h = new Ji("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = N));
    }
    oc(v, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _u(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var u = e, l = u.stateNode;
    u.tag === 5 && l !== null && (u = l, l = xr(e, n), l != null && r.unshift(_r(e, l, u)), l = xr(e, t), l != null && r.push(_r(e, l, u))), e = e.return;
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cs(e, t, n, r, u) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, d = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && d !== null && (i = d, u ? (s = xr(n, l), s != null && o.unshift(_r(n, s, i))) : u || (s = xr(n, l), s != null && o.push(_r(n, s, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var s0 = /\r\n?/g, a0 = /\u0000|\uFFFD/g;
function ds(e) {
  return (typeof e == "string" ? e : "" + e).replace(s0, `
`).replace(a0, "");
}
function Jr(e, t, n) {
  if (t = ds(t), ds(e) !== t && n) throw Error(w(425));
}
function ju() {
}
var io = null, so = null;
function ao(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var co = typeof setTimeout == "function" ? setTimeout : void 0, c0 = typeof clearTimeout == "function" ? clearTimeout : void 0, fs = typeof Promise == "function" ? Promise : void 0, d0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof fs < "u" ? function(e) {
  return fs.resolve(null).then(e).catch(f0);
} : co;
function f0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Nl(e, t) {
  var n = t, r = 0;
  do {
    var u = n.nextSibling;
    if (e.removeChild(n), u && u.nodeType === 8) if (n = u.data, n === "/$") {
      if (r === 0) {
        e.removeChild(u), Sr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = u;
  } while (n);
  Sr(t);
}
function $t(e) {
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
function ps(e) {
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
var bn = Math.random().toString(36).slice(2), at = "__reactFiber$" + bn, jr = "__reactProps$" + bn, Ct = "__reactContainer$" + bn, fo = "__reactEvents$" + bn, p0 = "__reactListeners$" + bn, m0 = "__reactHandles$" + bn;
function tn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ps(e); e !== null; ) {
        if (n = e[at]) return n;
        e = ps(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rr(e) {
  return e = e[at] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Gu(e) {
  return e[jr] || null;
}
var po = [], Cn = -1;
function Qt(e) {
  return { current: e };
}
function q(e) {
  0 > Cn || (e.current = po[Cn], po[Cn] = null, Cn--);
}
function G(e, t) {
  Cn++, po[Cn] = e.current, e.current = t;
}
var Ht = {}, Ce = Qt(Ht), Le = Qt(!1), on = Ht;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var u = {}, l;
  for (l in n) u[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function Pu() {
  q(Le), q(Ce);
}
function ms(e, t, n) {
  if (Ce.current !== Ht) throw Error(w(168));
  G(Ce, t), G(Le, n);
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var u in r) if (!(u in t)) throw Error(w(108, Zd(e) || "Unknown", u));
  return ue({}, n, r);
}
function Du(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, on = Ce.current, G(Ce, e), G(Le, Le.current), !0;
}
function hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = sc(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, q(Le), q(Ce), G(Ce, e)) : q(Le), G(Le, n);
}
var xt = null, Xu = !1, _l = !1;
function ac(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function h0(e) {
  Xu = !0, ac(e);
}
function Kt() {
  if (!_l && xt !== null) {
    _l = !0;
    var e = 0, t = Q;
    try {
      var n = xt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Xu = !1;
    } catch (u) {
      throw xt !== null && (xt = xt.slice(e + 1)), Ma(Yo, Kt), u;
    } finally {
      Q = t, _l = !1;
    }
  }
  return null;
}
var Nn = [], _n = 0, Fu = null, Tu = 0, Qe = [], Ke = 0, sn = null, kt = 1, wt = "";
function qt(e, t) {
  Nn[_n++] = Tu, Nn[_n++] = Fu, Fu = e, Tu = t;
}
function cc(e, t, n) {
  Qe[Ke++] = kt, Qe[Ke++] = wt, Qe[Ke++] = sn, sn = e;
  var r = kt;
  e = wt;
  var u = 32 - nt(r) - 1;
  r &= ~(1 << u), n += 1;
  var l = 32 - nt(t) + u;
  if (30 < l) {
    var o = u - u % 5;
    l = (r & (1 << o) - 1).toString(32), r >>= o, u -= o, kt = 1 << 32 - nt(t) + u | n << u | r, wt = l + e;
  } else kt = 1 << l | n << u | r, wt = e;
}
function ri(e) {
  e.return !== null && (qt(e, 1), cc(e, 1, 0));
}
function ui(e) {
  for (; e === Fu; ) Fu = Nn[--_n], Nn[_n] = null, Tu = Nn[--_n], Nn[_n] = null;
  for (; e === sn; ) sn = Qe[--Ke], Qe[Ke] = null, wt = Qe[--Ke], Qe[Ke] = null, kt = Qe[--Ke], Qe[Ke] = null;
}
var Oe = null, $e = null, ee = !1, tt = null;
function dc(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = $t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: kt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ho(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!vs(e, t)) {
        if (mo(e)) throw Error(w(418));
        t = $t(n.nextSibling);
        var r = Oe;
        t && vs(e, t) ? dc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Oe = e);
      }
    } else {
      if (mo(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Oe = e;
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function qr(e) {
  if (e !== Oe) return !1;
  if (!ee) return ys(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ao(e.type, e.memoizedProps)), t && (t = $e)) {
    if (mo(e)) throw fc(), Error(w(418));
    for (; t; ) dc(e, t), t = $t(t.nextSibling);
  }
  if (ys(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = $t(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function fc() {
  for (var e = $e; e; ) e = $t(e.nextSibling);
}
function $n() {
  $e = Oe = null, ee = !1;
}
function li(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var v0 = jt.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var u = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(o) {
        var i = u.refs;
        o === null ? delete i[l] : i[l] = o;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function eu(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function pc(e) {
  function t(f, a) {
    if (e) {
      var c = f.deletions;
      c === null ? (f.deletions = [a], f.flags |= 16) : c.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function u(f, a) {
    return f = Vt(f, a), f.index = 0, f.sibling = null, f;
  }
  function l(f, a, c) {
    return f.index = c, e ? (c = f.alternate, c !== null ? (c = c.index, c < a ? (f.flags |= 2, a) : c) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, c, y) {
    return a === null || a.tag !== 6 ? (a = zl(c, f.mode, y), a.return = f, a) : (a = u(a, c), a.return = f, a);
  }
  function s(f, a, c, y) {
    var C = c.type;
    return C === xn ? h(f, a, c.props.children, y, c.key) : a !== null && (a.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dt && gs(C) === a.type) ? (y = u(a, c.props), y.ref = er(f, a, c), y.return = f, y) : (y = gu(c.type, c.key, c.props, null, f.mode, y), y.ref = er(f, a, c), y.return = f, y);
  }
  function d(f, a, c, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation ? (a = Ml(c, f.mode, y), a.return = f, a) : (a = u(a, c.children || []), a.return = f, a);
  }
  function h(f, a, c, y, C) {
    return a === null || a.tag !== 7 ? (a = ln(c, f.mode, y, C), a.return = f, a) : (a = u(a, c), a.return = f, a);
  }
  function v(f, a, c) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = zl("" + a, f.mode, c), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Wr:
          return c = gu(a.type, a.key, a.props, null, f.mode, c), c.ref = er(f, null, a), c.return = f, c;
        case gn:
          return a = Ml(a, f.mode, c), a.return = f, a;
        case Dt:
          var y = a._init;
          return v(f, y(a._payload), c);
      }
      if (ur(a) || Gn(a)) return a = ln(a, f.mode, c, null), a.return = f, a;
      eu(f, a);
    }
    return null;
  }
  function m(f, a, c, y) {
    var C = a !== null ? a.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return C !== null ? null : i(f, a, "" + c, y);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Wr:
          return c.key === C ? s(f, a, c, y) : null;
        case gn:
          return c.key === C ? d(f, a, c, y) : null;
        case Dt:
          return C = c._init, m(
            f,
            a,
            C(c._payload),
            y
          );
      }
      if (ur(c) || Gn(c)) return C !== null ? null : h(f, a, c, y, null);
      eu(f, c);
    }
    return null;
  }
  function k(f, a, c, y, C) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(c) || null, i(a, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wr:
          return f = f.get(y.key === null ? c : y.key) || null, s(a, f, y, C);
        case gn:
          return f = f.get(y.key === null ? c : y.key) || null, d(a, f, y, C);
        case Dt:
          var _ = y._init;
          return k(f, a, c, _(y._payload), C);
      }
      if (ur(y) || Gn(y)) return f = f.get(c) || null, h(a, f, y, C, null);
      eu(a, y);
    }
    return null;
  }
  function S(f, a, c, y) {
    for (var C = null, _ = null, N = a, j = a = 0, A = null; N !== null && j < c.length; j++) {
      N.index > j ? (A = N, N = null) : A = N.sibling;
      var T = m(f, N, c[j], y);
      if (T === null) {
        N === null && (N = A);
        break;
      }
      e && N && T.alternate === null && t(f, N), a = l(T, a, j), _ === null ? C = T : _.sibling = T, _ = T, N = A;
    }
    if (j === c.length) return n(f, N), ee && qt(f, j), C;
    if (N === null) {
      for (; j < c.length; j++) N = v(f, c[j], y), N !== null && (a = l(N, a, j), _ === null ? C = N : _.sibling = N, _ = N);
      return ee && qt(f, j), C;
    }
    for (N = r(f, N); j < c.length; j++) A = k(N, f, j, c[j], y), A !== null && (e && A.alternate !== null && N.delete(A.key === null ? j : A.key), a = l(A, a, j), _ === null ? C = A : _.sibling = A, _ = A);
    return e && N.forEach(function($) {
      return t(f, $);
    }), ee && qt(f, j), C;
  }
  function E(f, a, c, y) {
    var C = Gn(c);
    if (typeof C != "function") throw Error(w(150));
    if (c = C.call(c), c == null) throw Error(w(151));
    for (var _ = C = null, N = a, j = a = 0, A = null, T = c.next(); N !== null && !T.done; j++, T = c.next()) {
      N.index > j ? (A = N, N = null) : A = N.sibling;
      var $ = m(f, N, T.value, y);
      if ($ === null) {
        N === null && (N = A);
        break;
      }
      e && N && $.alternate === null && t(f, N), a = l($, a, j), _ === null ? C = $ : _.sibling = $, _ = $, N = A;
    }
    if (T.done) return n(
      f,
      N
    ), ee && qt(f, j), C;
    if (N === null) {
      for (; !T.done; j++, T = c.next()) T = v(f, T.value, y), T !== null && (a = l(T, a, j), _ === null ? C = T : _.sibling = T, _ = T);
      return ee && qt(f, j), C;
    }
    for (N = r(f, N); !T.done; j++, T = c.next()) T = k(N, f, j, T.value, y), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? j : T.key), a = l(T, a, j), _ === null ? C = T : _.sibling = T, _ = T);
    return e && N.forEach(function(K) {
      return t(f, K);
    }), ee && qt(f, j), C;
  }
  function B(f, a, c, y) {
    if (typeof c == "object" && c !== null && c.type === xn && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Wr:
          e: {
            for (var C = c.key, _ = a; _ !== null; ) {
              if (_.key === C) {
                if (C = c.type, C === xn) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = u(_, c.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dt && gs(C) === _.type) {
                  n(f, _.sibling), a = u(_, c.props), a.ref = er(f, _, c), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            c.type === xn ? (a = ln(c.props.children, f.mode, y, c.key), a.return = f, f = a) : (y = gu(c.type, c.key, c.props, null, f.mode, y), y.ref = er(f, a, c), y.return = f, f = y);
          }
          return o(f);
        case gn:
          e: {
            for (_ = c.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === c.containerInfo && a.stateNode.implementation === c.implementation) {
                n(f, a.sibling), a = u(a, c.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Ml(c, f.mode, y), a.return = f, f = a;
          }
          return o(f);
        case Dt:
          return _ = c._init, B(f, a, _(c._payload), y);
      }
      if (ur(c)) return S(f, a, c, y);
      if (Gn(c)) return E(f, a, c, y);
      eu(f, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, a !== null && a.tag === 6 ? (n(f, a.sibling), a = u(a, c), a.return = f, f = a) : (n(f, a), a = zl(c, f.mode, y), a.return = f, f = a), o(f)) : n(f, a);
  }
  return B;
}
var On = pc(!0), mc = pc(!1), Lu = Qt(null), zu = null, jn = null, oi = null;
function ii() {
  oi = jn = zu = null;
}
function si(e) {
  var t = Lu.current;
  q(Lu), e._currentValue = t;
}
function vo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  zu = e, oi = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (oi !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (zu === null) throw Error(w(308));
    jn = e, zu.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var nn = null;
function ai(e) {
  nn === null ? nn = [e] : nn.push(e);
}
function hc(e, t, n, r) {
  var u = t.interleaved;
  return u === null ? (n.next = n, ai(t)) : (n.next = u.next, u.next = n), t.interleaved = n, Nt(e, r);
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function ci(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var u = r.pending;
    return u === null ? t.next = t : (t.next = u.next, u.next = t), r.pending = t, Nt(e, n);
  }
  return u = r.interleaved, u === null ? (t.next = t, ai(r)) : (t.next = u.next, u.next = t), r.interleaved = t, Nt(e, n);
}
function fu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Go(e, n);
  }
}
function xs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var u = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? u = l = o : l = l.next = o, n = n.next;
      } while (n !== null);
      l === null ? u = l = t : l = l.next = t;
    } else u = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: u, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Mu(e, t, n, r) {
  var u = e.updateQueue;
  Ft = !1;
  var l = u.firstBaseUpdate, o = u.lastBaseUpdate, i = u.shared.pending;
  if (i !== null) {
    u.shared.pending = null;
    var s = i, d = s.next;
    s.next = null, o === null ? l = d : o.next = d, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = s));
  }
  if (l !== null) {
    var v = u.baseState;
    o = 0, h = d = s = null, i = l;
    do {
      var m = i.lane, k = i.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var S = e, E = i;
          switch (m = t, k = n, E.tag) {
            case 1:
              if (S = E.payload, typeof S == "function") {
                v = S.call(k, v, m);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = E.payload, m = typeof S == "function" ? S.call(k, v, m) : S, m == null) break e;
              v = ue({}, v, m);
              break e;
            case 2:
              Ft = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, m = u.effects, m === null ? u.effects = [i] : m.push(i));
      } else k = { eventTime: k, lane: m, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = k, s = v) : h = h.next = k, o |= m;
      if (i = i.next, i === null) {
        if (i = u.shared.pending, i === null) break;
        m = i, i = m.next, m.next = null, u.lastBaseUpdate = m, u.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = v), u.baseState = s, u.firstBaseUpdate = d, u.lastBaseUpdate = h, t = u.shared.interleaved, t !== null) {
      u = t;
      do
        o |= u.lane, u = u.next;
      while (u !== t);
    } else l === null && (u.shared.lanes = 0);
    cn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function ks(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], u = r.callback;
    if (u !== null) {
      if (r.callback = null, r = n, typeof u != "function") throw Error(w(191, u));
      u.call(r);
    }
  }
}
var $r = {}, dt = Qt($r), Pr = Qt($r), Dr = Qt($r);
function rn(e) {
  if (e === $r) throw Error(w(174));
  return e;
}
function di(e, t) {
  switch (G(Dr, t), G(Pr, e), G(dt, $r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gl(t, e);
  }
  q(dt), G(dt, t);
}
function In() {
  q(dt), q(Pr), q(Dr);
}
function yc(e) {
  rn(Dr.current);
  var t = rn(dt.current), n = Gl(t, e.type);
  t !== n && (G(Pr, e), G(dt, n));
}
function fi(e) {
  Pr.current === e && (q(dt), q(Pr));
}
var ne = Qt(0);
function Au(e) {
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
var jl = [];
function pi() {
  for (var e = 0; e < jl.length; e++) jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var pu = jt.ReactCurrentDispatcher, Pl = jt.ReactCurrentBatchConfig, an = 0, re = null, fe = null, he = null, Bu = !1, fr = !1, Fr = 0, y0 = 0;
function we() {
  throw Error(w(321));
}
function mi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function hi(e, t, n, r, u, l) {
  if (an = l, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pu.current = e === null || e.memoizedState === null ? w0 : S0, e = n(r, u), fr) {
    l = 0;
    do {
      if (fr = !1, Fr = 0, 25 <= l) throw Error(w(301));
      l += 1, he = fe = null, t.updateQueue = null, pu.current = E0, e = n(r, u);
    } while (fr);
  }
  if (pu.current = Ru, t = fe !== null && fe.next !== null, an = 0, he = fe = re = null, Bu = !1, t) throw Error(w(300));
  return e;
}
function vi() {
  var e = Fr !== 0;
  return Fr = 0, e;
}
function st() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? re.memoizedState = he = e : he = he.next = e, he;
}
function Ze() {
  if (fe === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? re.memoizedState : he.next;
  if (t !== null) he = t, fe = e;
  else {
    if (e === null) throw Error(w(310));
    fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, he === null ? re.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function Tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dl(e) {
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = fe, u = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (u !== null) {
      var o = u.next;
      u.next = l.next, l.next = o;
    }
    r.baseQueue = u = l, n.pending = null;
  }
  if (u !== null) {
    l = u.next, r = r.baseState;
    var i = o = null, s = null, d = l;
    do {
      var h = d.lane;
      if ((an & h) === h) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        s === null ? (i = s = v, o = r) : s = s.next = v, re.lanes |= h, cn |= h;
      }
      d = d.next;
    } while (d !== null && d !== l);
    s === null ? o = r : s.next = i, ut(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    u = e;
    do
      l = u.lane, re.lanes |= l, cn |= l, u = u.next;
    while (u !== e);
  } else u === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fl(e) {
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, u = n.pending, l = t.memoizedState;
  if (u !== null) {
    n.pending = null;
    var o = u = u.next;
    do
      l = e(l, o.action), o = o.next;
    while (o !== u);
    ut(l, t.memoizedState) || (Te = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function gc() {
}
function xc(e, t) {
  var n = re, r = Ze(), u = t(), l = !ut(r.memoizedState, u);
  if (l && (r.memoizedState = u, Te = !0), r = r.queue, yi(Sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Lr(9, wc.bind(null, n, r, u, t), void 0, null), ve === null) throw Error(w(349));
    an & 30 || kc(n, t, u);
  }
  return u;
}
function kc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ec(t) && Cc(e);
}
function Sc(e, t, n) {
  return n(function() {
    Ec(t) && Cc(e);
  });
}
function Ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function Cc(e) {
  var t = Nt(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function ws(e) {
  var t = st();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = k0.bind(null, re, e), [t.memoizedState, e];
}
function Lr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nc() {
  return Ze().memoizedState;
}
function mu(e, t, n, r) {
  var u = st();
  re.flags |= e, u.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zu(e, t, n, r) {
  var u = Ze();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (fe !== null) {
    var o = fe.memoizedState;
    if (l = o.destroy, r !== null && mi(r, o.deps)) {
      u.memoizedState = Lr(t, n, l, r);
      return;
    }
  }
  re.flags |= e, u.memoizedState = Lr(1 | t, n, l, r);
}
function Ss(e, t) {
  return mu(8390656, 8, e, t);
}
function yi(e, t) {
  return Zu(2048, 8, e, t);
}
function _c(e, t) {
  return Zu(4, 2, e, t);
}
function jc(e, t) {
  return Zu(4, 4, e, t);
}
function Pc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zu(4, 4, Pc.bind(null, t, e), n);
}
function gi() {
}
function Fc(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tc(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lc(e, t, n) {
  return an & 21 ? (ut(n, t) || (n = Ra(), re.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function g0(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Pl.transition = r;
  }
}
function zc() {
  return Ze().memoizedState;
}
function x0(e, t, n) {
  var r = Ut(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mc(e)) Ac(t, n);
  else if (n = hc(e, t, n, r), n !== null) {
    var u = je();
    rt(n, e, r, u), Bc(n, t, r);
  }
}
function k0(e, t, n) {
  var r = Ut(e), u = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mc(e)) Ac(t, u);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var o = t.lastRenderedState, i = l(o, n);
      if (u.hasEagerState = !0, u.eagerState = i, ut(i, o)) {
        var s = t.interleaved;
        s === null ? (u.next = u, ai(t)) : (u.next = s.next, s.next = u), t.interleaved = u;
        return;
      }
    } catch {
    } finally {
    }
    n = hc(e, t, u, r), n !== null && (u = je(), rt(n, e, r, u), Bc(n, t, r));
  }
}
function Mc(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Ac(e, t) {
  fr = Bu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Go(e, n);
  }
}
var Ru = { readContext: Xe, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, w0 = { readContext: Xe, useCallback: function(e, t) {
  return st().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: Ss, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mu(
    4194308,
    4,
    Pc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return mu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return mu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = st();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = st();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = x0.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = st();
  return e = { current: e }, t.memoizedState = e;
}, useState: ws, useDebugValue: gi, useDeferredValue: function(e) {
  return st().memoizedState = e;
}, useTransition: function() {
  var e = ws(!1), t = e[0];
  return e = g0.bind(null, e[1]), st().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, u = st();
  if (ee) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(w(349));
    an & 30 || kc(r, t, n);
  }
  u.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return u.queue = l, Ss(Sc.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Lr(9, wc.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = st(), t = ve.identifierPrefix;
  if (ee) {
    var n = wt, r = kt;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = y0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, S0 = {
  readContext: Xe,
  useCallback: Fc,
  useContext: Xe,
  useEffect: yi,
  useImperativeHandle: Dc,
  useInsertionEffect: _c,
  useLayoutEffect: jc,
  useMemo: Tc,
  useReducer: Dl,
  useRef: Nc,
  useState: function() {
    return Dl(Tr);
  },
  useDebugValue: gi,
  useDeferredValue: function(e) {
    var t = Ze();
    return Lc(t, fe.memoizedState, e);
  },
  useTransition: function() {
    var e = Dl(Tr)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: gc,
  useSyncExternalStore: xc,
  useId: zc,
  unstable_isNewReconciler: !1
}, E0 = { readContext: Xe, useCallback: Fc, useContext: Xe, useEffect: yi, useImperativeHandle: Dc, useInsertionEffect: _c, useLayoutEffect: jc, useMemo: Tc, useReducer: Fl, useRef: Nc, useState: function() {
  return Fl(Tr);
}, useDebugValue: gi, useDeferredValue: function(e) {
  var t = Ze();
  return fe === null ? t.memoizedState = e : Lc(t, fe.memoizedState, e);
}, useTransition: function() {
  var e = Fl(Tr)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: gc, useSyncExternalStore: xc, useId: zc, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = ue({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ju = { isMounted: function(e) {
  return (e = e._reactInternals) ? pn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), u = Ut(e), l = St(r, u);
  l.payload = t, n != null && (l.callback = n), t = Ot(e, l, u), t !== null && (rt(t, e, u, r), fu(t, e, u));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), u = Ut(e), l = St(r, u);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ot(e, l, u), t !== null && (rt(t, e, u, r), fu(t, e, u));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = Ut(e), u = St(n, r);
  u.tag = 2, t != null && (u.callback = t), t = Ot(e, u, r), t !== null && (rt(t, e, r, n), fu(t, e, r));
} };
function Es(e, t, n, r, u, l, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(u, l) : !0;
}
function Rc(e, t, n) {
  var r = !1, u = Ht, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Xe(l) : (u = ze(t) ? on : Ce.current, r = t.contextTypes, l = (r = r != null) ? Rn(e, u) : Ht), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ju, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Cs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ju.enqueueReplaceState(t, t.state, null);
}
function go(e, t, n, r) {
  var u = e.stateNode;
  u.props = n, u.state = e.memoizedState, u.refs = {}, ci(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? u.context = Xe(l) : (l = ze(t) ? on : Ce.current, u.context = Rn(e, l)), u.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (yo(e, t, l, n), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Ju.enqueueReplaceState(u, u.state, null), Mu(e, n, u, r), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xd(r), r = r.return;
    while (r);
    var u = n;
  } catch (l) {
    u = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: u, digest: null };
}
function Tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var C0 = typeof WeakMap == "function" ? WeakMap : Map;
function $c(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ou || (Ou = !0, Do = r), xo(e, t);
  }, n;
}
function Oc(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var u = t.value;
    n.payload = function() {
      return r(u);
    }, n.callback = function() {
      xo(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    xo(e, t), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ns(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new C0();
    var u = /* @__PURE__ */ new Set();
    r.set(t, u);
  } else u = r.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(t, u));
  u.has(n) || (u.add(n), e = $0.bind(null, e, t, n), t.then(e, e));
}
function _s(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function js(e, t, n, r, u) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = u, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var N0 = jt.ReactCurrentOwner, Te = !1;
function _e(e, t, n, r) {
  t.child = e === null ? mc(t, null, n, r) : On(t, e.child, n, r);
}
function Ps(e, t, n, r, u) {
  n = n.render;
  var l = t.ref;
  return Mn(t, u), r = hi(e, t, n, r, l, u), n = vi(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, _t(e, t, u)) : (ee && n && ri(t), t.flags |= 1, _e(e, t, r, u), t.child);
}
function Ds(e, t, n, r, u) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !_i(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Ic(e, t, l, r, u)) : (e = gu(n.type, null, r, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & u)) {
    var o = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Cr, n(o, r) && e.ref === t.ref) return _t(e, t, u);
  }
  return t.flags |= 1, e = Vt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ic(e, t, n, r, u) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Cr(l, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = l, (e.lanes & u) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, _t(e, t, u);
  }
  return ko(e, t, n, r, u);
}
function Uc(e, t, n) {
  var r = t.pendingProps, u = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Dn, Re), Re |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Dn, Re), Re |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, G(Dn, Re), Re |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, G(Dn, Re), Re |= r;
  return _e(e, t, u, n), t.child;
}
function Vc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ko(e, t, n, r, u) {
  var l = ze(n) ? on : Ce.current;
  return l = Rn(t, l), Mn(t, u), n = hi(e, t, n, r, l, u), r = vi(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, _t(e, t, u)) : (ee && r && ri(t), t.flags |= 1, _e(e, t, n, u), t.child);
}
function Fs(e, t, n, r, u) {
  if (ze(n)) {
    var l = !0;
    Du(t);
  } else l = !1;
  if (Mn(t, u), t.stateNode === null) hu(e, t), Rc(t, n, r), go(t, n, r, u), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var s = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Xe(d) : (d = ze(n) ? on : Ce.current, d = Rn(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== d) && Cs(t, o, r, d), Ft = !1;
    var m = t.memoizedState;
    o.state = m, Mu(t, r, o, u), s = t.memoizedState, i !== r || m !== s || Le.current || Ft ? (typeof h == "function" && (yo(t, n, h, r), s = t.memoizedState), (i = Ft || Es(t, n, i, r, m, s, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, vc(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : qe(t.type, i), o.props = d, v = t.pendingProps, m = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = ze(n) ? on : Ce.current, s = Rn(t, s));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || m !== s) && Cs(t, o, r, s), Ft = !1, m = t.memoizedState, o.state = m, Mu(t, r, o, u);
    var S = t.memoizedState;
    i !== v || m !== S || Le.current || Ft ? (typeof k == "function" && (yo(t, n, k, r), S = t.memoizedState), (d = Ft || Es(t, n, d, r, m, S, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return wo(e, t, n, r, l, u);
}
function wo(e, t, n, r, u, l) {
  Vc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return u && hs(t, n, !1), _t(e, t, l);
  r = t.stateNode, N0.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = On(t, e.child, null, l), t.child = On(t, null, i, l)) : _e(e, t, i, l), t.memoizedState = r.state, u && hs(t, n, !0), t.child;
}
function Wc(e) {
  var t = e.stateNode;
  t.pendingContext ? ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ms(e, t.context, !1), di(e, t.containerInfo);
}
function Ts(e, t, n, r, u) {
  return $n(), li(u), t.flags |= 256, _e(e, t, n, r), t.child;
}
var So = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hc(e, t, n) {
  var r = t.pendingProps, u = ne.current, l = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), i ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), G(ne, u & 1), e === null)
    return ho(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, o = { mode: "hidden", children: o }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = tl(o, r, 0, null), e = ln(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Eo(n), t.memoizedState = So, e) : xi(t, o));
  if (u = e.memoizedState, u !== null && (i = u.dehydrated, i !== null)) return _0(e, t, o, r, i, u, n);
  if (l) {
    l = r.fallback, o = t.mode, u = e.child, i = u.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== u ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Vt(u, s), r.subtreeFlags = u.subtreeFlags & 14680064), i !== null ? l = Vt(i, l) : (l = ln(l, o, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, o = e.child.memoizedState, o = o === null ? Eo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, l.memoizedState = o, l.childLanes = e.childLanes & ~n, t.memoizedState = So, r;
  }
  return l = e.child, e = l.sibling, r = Vt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xi(e, t) {
  return t = tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function tu(e, t, n, r) {
  return r !== null && li(r), On(t, e.child, null, n), e = xi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _0(e, t, n, r, u, l, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tl(Error(w(422))), tu(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, u = t.mode, r = tl({ mode: "visible", children: r.children }, u, 0, null), l = ln(l, u, o, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && On(t, e.child, null, o), t.child.memoizedState = Eo(o), t.memoizedState = So, l);
  if (!(t.mode & 1)) return tu(e, t, o, null);
  if (u.data === "$!") {
    if (r = u.nextSibling && u.nextSibling.dataset, r) var i = r.dgst;
    return r = i, l = Error(w(419)), r = Tl(l, r, void 0), tu(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Te || i) {
    if (r = ve, r !== null) {
      switch (o & -o) {
        case 4:
          u = 2;
          break;
        case 16:
          u = 8;
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
          u = 32;
          break;
        case 536870912:
          u = 268435456;
          break;
        default:
          u = 0;
      }
      u = u & (r.suspendedLanes | o) ? 0 : u, u !== 0 && u !== l.retryLane && (l.retryLane = u, Nt(e, u), rt(r, e, u, -1));
    }
    return Ni(), r = Tl(Error(w(421))), tu(e, t, o, r);
  }
  return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = O0.bind(null, e), u._reactRetry = t, null) : (e = l.treeContext, $e = $t(u.nextSibling), Oe = t, ee = !0, tt = null, e !== null && (Qe[Ke++] = kt, Qe[Ke++] = wt, Qe[Ke++] = sn, kt = e.id, wt = e.overflow, sn = t), t = xi(t, r.children), t.flags |= 4096, t);
}
function Ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vo(e.return, t, n);
}
function Ll(e, t, n, r, u) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: u } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = u);
}
function bc(e, t, n) {
  var r = t.pendingProps, u = r.revealOrder, l = r.tail;
  if (_e(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ls(e, n, t);
      else if (e.tag === 19) Ls(e, n, t);
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
    r &= 1;
  }
  if (G(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (u) {
    case "forwards":
      for (n = t.child, u = null; n !== null; ) e = n.alternate, e !== null && Au(e) === null && (u = n), n = n.sibling;
      n = u, n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), Ll(t, !1, u, n, l);
      break;
    case "backwards":
      for (n = null, u = t.child, t.child = null; u !== null; ) {
        if (e = u.alternate, e !== null && Au(e) === null) {
          t.child = u;
          break;
        }
        e = u.sibling, u.sibling = n, n = u, u = e;
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
function hu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function _t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Vt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function j0(e, t, n) {
  switch (t.tag) {
    case 3:
      Wc(t), $n();
      break;
    case 5:
      yc(t);
      break;
    case 1:
      ze(t.type) && Du(t);
      break;
    case 4:
      di(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, u = t.memoizedProps.value;
      G(Lu, r._currentValue), r._currentValue = u;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hc(e, t, n) : (G(ne, ne.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
      G(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return bc(e, t, n);
        t.flags |= 128;
      }
      if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), G(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uc(e, t, n);
  }
  return _t(e, t, n);
}
var Qc, Co, Kc, Yc;
Qc = function(e, t) {
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
Kc = function(e, t, n, r) {
  var u = e.memoizedProps;
  if (u !== r) {
    e = t.stateNode, rn(dt.current);
    var l = null;
    switch (n) {
      case "input":
        u = bl(e, u), r = bl(e, r), l = [];
        break;
      case "select":
        u = ue({}, u, { value: void 0 }), r = ue({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        u = Yl(e, u), r = Yl(e, r), l = [];
        break;
      default:
        typeof u.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ju);
    }
    Xl(n, r);
    var o;
    n = null;
    for (d in u) if (!r.hasOwnProperty(d) && u.hasOwnProperty(d) && u[d] != null) if (d === "style") {
      var i = u[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (yr.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (i = u != null ? u[d] : void 0, r.hasOwnProperty(d) && s !== i && (s != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (l || (l = []), l.push(
        d,
        n
      )), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (l = l || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (yr.hasOwnProperty(d) ? (s != null && d === "onScroll" && J("scroll", e), l || i === s || (l = [])) : (l = l || []).push(d, s));
    }
    n && (l = l || []).push("style", n);
    var d = l;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Yc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!ee) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var u = e.child; u !== null; ) n |= u.lanes | u.childLanes, r |= u.subtreeFlags & 14680064, r |= u.flags & 14680064, u.return = e, u = u.sibling;
  else for (u = e.child; u !== null; ) n |= u.lanes | u.childLanes, r |= u.subtreeFlags, r |= u.flags, u.return = e, u = u.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function P0(e, t, n) {
  var r = t.pendingProps;
  switch (ui(t), t.tag) {
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
      return Se(t), null;
    case 1:
      return ze(t.type) && Pu(), Se(t), null;
    case 3:
      return r = t.stateNode, In(), q(Le), q(Ce), pi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (Lo(tt), tt = null))), Co(e, t), Se(t), null;
    case 5:
      fi(t);
      var u = rn(Dr.current);
      if (n = t.type, e !== null && t.stateNode != null) Kc(e, t, n, r, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return Se(t), null;
        }
        if (e = rn(dt.current), qr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[at] = t, r[jr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (u = 0; u < or.length; u++) J(or[u], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ui(r, l), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, J("invalid", r);
              break;
            case "textarea":
              Wi(r, l), J("invalid", r);
          }
          Xl(n, l), u = null;
          for (var o in l) if (l.hasOwnProperty(o)) {
            var i = l[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (l.suppressHydrationWarning !== !0 && Jr(r.textContent, i, e), u = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (l.suppressHydrationWarning !== !0 && Jr(
              r.textContent,
              i,
              e
            ), u = ["children", "" + i]) : yr.hasOwnProperty(o) && i != null && o === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              Hr(r), Vi(r, l, !0);
              break;
            case "textarea":
              Hr(r), Hi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ju);
          }
          r = u, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[at] = t, e[jr] = r, Qc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Zl(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), u = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), u = r;
                break;
              case "video":
              case "audio":
                for (u = 0; u < or.length; u++) J(or[u], e);
                u = r;
                break;
              case "source":
                J("error", e), u = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), u = r;
                break;
              case "details":
                J("toggle", e), u = r;
                break;
              case "input":
                Ui(e, r), u = bl(e, r), J("invalid", e);
                break;
              case "option":
                u = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, u = ue({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                Wi(e, r), u = Yl(e, r), J("invalid", e);
                break;
              default:
                u = r;
            }
            Xl(n, u), i = u;
            for (l in i) if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "style" ? Na(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ea(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && gr(e, s) : typeof s == "number" && gr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (yr.hasOwnProperty(l) ? s != null && l === "onScroll" && J("scroll", e) : s != null && Wo(e, l, s, o));
            }
            switch (n) {
              case "input":
                Hr(e), Vi(e, r, !1);
                break;
              case "textarea":
                Hr(e), Hi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Fn(e, !!r.multiple, l, !1) : r.defaultValue != null && Fn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof u.onClick == "function" && (e.onclick = ju);
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
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) Yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = rn(Dr.current), rn(dt.current), qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (l = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              Jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (q(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128)) fc(), $n(), t.flags |= 98560, l = !1;
        else if (l = qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(w(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(w(317));
            l[at] = t;
          } else $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), l = !1;
        } else tt !== null && (Lo(tt), tt = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? pe === 0 && (pe = 3) : Ni())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return In(), Co(e, t), e === null && Nr(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return si(t.type._context), Se(t), null;
    case 17:
      return ze(t.type) && Pu(), Se(t), null;
    case 19:
      if (q(ne), l = t.memoizedState, l === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, o = l.rendering, o === null) if (r) tr(l, !1);
      else {
        if (pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Au(e), o !== null) {
            for (t.flags |= 128, tr(l, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && se() > Vn && (t.flags |= 128, r = !0, tr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Au(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !ee) return Se(t), null;
        } else 2 * se() - l.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, tr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = se(), t.sibling = null, n = ne.current, G(ne, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return Ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function D0(e, t) {
  switch (ui(t), t.tag) {
    case 1:
      return ze(t.type) && Pu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return In(), q(Le), q(Ce), pi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return fi(t), null;
    case 13:
      if (q(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return q(ne), null;
    case 4:
      return In(), null;
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
var nu = !1, Ee = !1, F0 = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function No(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var zs = !1;
function T0(e, t) {
  if (io = Cu, e = qa(), ni(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var u = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, s = -1, d = 0, h = 0, v = e, m = null;
        t: for (; ; ) {
          for (var k; v !== n || u !== 0 && v.nodeType !== 3 || (i = o + u), v !== l || r !== 0 && v.nodeType !== 3 || (s = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            m = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (m === n && ++d === u && (i = o), m === l && ++h === r && (s = o), (k = v.nextSibling) !== null) break;
            v = m, m = v.parentNode;
          }
          v = k;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (so = { focusedElem: e, selectionRange: n }, Cu = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var E = S.memoizedProps, B = S.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? E : qe(t.type, E), B);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var c = t.stateNode.containerInfo;
          c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(w(163));
      }
    } catch (y) {
      ie(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return S = zs, zs = !1, S;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var u = r = r.next;
    do {
      if ((u.tag & e) === e) {
        var l = u.destroy;
        u.destroy = void 0, l !== void 0 && No(t, n, l);
      }
      u = u.next;
    } while (u !== r);
  }
}
function qu(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
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
function Gc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[jr], delete t[fo], delete t[p0], delete t[m0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ms(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ju));
  else if (r !== 4 && (e = e.child, e !== null)) for (jo(e, t, n), e = e.sibling; e !== null; ) jo(e, t, n), e = e.sibling;
}
function Po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Po(e, t, n), e = e.sibling; e !== null; ) Po(e, t, n), e = e.sibling;
}
var ye = null, et = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) Zc(e, t, n), n = n.sibling;
}
function Zc(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function") try {
    ct.onCommitFiberUnmount(bu, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ee || Pn(n, t);
    case 6:
      var r = ye, u = et;
      ye = null, Pt(e, t, n), ye = r, et = u, ye !== null && (et ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (et ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n), Sr(e)) : Nl(ye, n.stateNode));
      break;
    case 4:
      r = ye, u = et, ye = n.stateNode.containerInfo, et = !0, Pt(e, t, n), ye = r, et = u;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        u = r = r.next;
        do {
          var l = u, o = l.destroy;
          l = l.tag, o !== void 0 && (l & 2 || l & 4) && No(n, t, o), u = u.next;
        } while (u !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (!Ee && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        ie(n, t, i);
      }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Pt(e, t, n), Ee = r) : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function As(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new F0()), t.forEach(function(r) {
      var u = I0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(u, u));
    });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var u = n[r];
    try {
      var l = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ye = i.stateNode, et = !1;
            break e;
          case 3:
            ye = i.stateNode.containerInfo, et = !0;
            break e;
          case 4:
            ye = i.stateNode.containerInfo, et = !0;
            break e;
        }
        i = i.return;
      }
      if (ye === null) throw Error(w(160));
      Zc(l, o, u), ye = null, et = !1;
      var s = u.alternate;
      s !== null && (s.return = null), u.return = null;
    } catch (d) {
      ie(u, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Jc(t, e), t = t.sibling;
}
function Jc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Je(t, e), it(e), r & 4) {
        try {
          pr(3, e, e.return), qu(3, e);
        } catch (E) {
          ie(e, e.return, E);
        }
        try {
          pr(5, e, e.return);
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 1:
      Je(t, e), it(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (Je(t, e), it(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
        var u = e.stateNode;
        try {
          gr(u, "");
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      if (r & 4 && (u = e.stateNode, u != null)) {
        var l = e.memoizedProps, o = n !== null ? n.memoizedProps : l, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && l.type === "radio" && l.name != null && ka(u, l), Zl(i, o);
          var d = Zl(i, l);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], v = s[o + 1];
            h === "style" ? Na(u, v) : h === "dangerouslySetInnerHTML" ? Ea(u, v) : h === "children" ? gr(u, v) : Wo(u, h, v, d);
          }
          switch (i) {
            case "input":
              Ql(u, l);
              break;
            case "textarea":
              wa(u, l);
              break;
            case "select":
              var m = u._wrapperState.wasMultiple;
              u._wrapperState.wasMultiple = !!l.multiple;
              var k = l.value;
              k != null ? Fn(u, !!l.multiple, k, !1) : m !== !!l.multiple && (l.defaultValue != null ? Fn(
                u,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Fn(u, !!l.multiple, l.multiple ? [] : "", !1));
          }
          u[jr] = l;
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Je(t, e), it(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        u = e.stateNode, l = e.memoizedProps;
        try {
          u.nodeValue = l;
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Je(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Sr(t.containerInfo);
      } catch (E) {
        ie(e, e.return, E);
      }
      break;
    case 4:
      Je(t, e), it(e);
      break;
    case 13:
      Je(t, e), it(e), u = e.child, u.flags & 8192 && (l = u.memoizedState !== null, u.stateNode.isHidden = l, !l || u.alternate !== null && u.alternate.memoizedState !== null || (Si = se())), r & 4 && As(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (d = Ee) || h, Je(t, e), Ee = d) : Je(t, e), it(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (F = e, h = e.child; h !== null; ) {
          for (v = F = h; F !== null; ) {
            switch (m = F, k = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                pr(4, m, m.return);
                break;
              case 1:
                Pn(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (E) {
                    ie(r, n, E);
                  }
                }
                break;
              case 5:
                Pn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Rs(v);
                  continue;
                }
            }
            k !== null ? (k.return = m, F = k) : Rs(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                u = v.stateNode, d ? (l = u.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (i = v.stateNode, s = v.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ca("display", o));
              } catch (E) {
                ie(e, e.return, E);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (E) {
              ie(e, e.return, E);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), v = v.return;
          }
          h === v && (h = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      Je(t, e), it(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      Je(
        t,
        e
      ), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var u = r.stateNode;
          r.flags & 32 && (gr(u, ""), r.flags &= -33);
          var l = Ms(e);
          Po(e, l, u);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Ms(e);
          jo(e, i, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L0(e, t, n) {
  F = e, qc(e);
}
function qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var u = F, l = u.child;
    if (u.tag === 22 && r) {
      var o = u.memoizedState !== null || nu;
      if (!o) {
        var i = u.alternate, s = i !== null && i.memoizedState !== null || Ee;
        i = nu;
        var d = Ee;
        if (nu = o, (Ee = s) && !d) for (F = u; F !== null; ) o = F, s = o.child, o.tag === 22 && o.memoizedState !== null ? $s(u) : s !== null ? (s.return = o, F = s) : $s(u);
        for (; l !== null; ) F = l, qc(l), l = l.sibling;
        F = u, nu = i, Ee = d;
      }
      Bs(e);
    } else u.subtreeFlags & 8772 && l !== null ? (l.return = u, F = l) : Bs(e);
  }
}
function Bs(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ee || qu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ee) if (n === null) r.componentDidMount();
            else {
              var u = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(u, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && ks(t, l, r);
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
              ks(t, o, n);
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
              var d = t.alternate;
              if (d !== null) {
                var h = d.memoizedState;
                if (h !== null) {
                  var v = h.dehydrated;
                  v !== null && Sr(v);
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
            throw Error(w(163));
        }
        Ee || t.flags & 512 && _o(t);
      } catch (m) {
        ie(t, t.return, m);
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
function Rs(e) {
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
function $s(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qu(4, t);
          } catch (s) {
            ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var u = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ie(t, u, s);
            }
          }
          var l = t.return;
          try {
            _o(t);
          } catch (s) {
            ie(t, l, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            _o(t);
          } catch (s) {
            ie(t, o, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
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
var z0 = Math.ceil, $u = jt.ReactCurrentDispatcher, ki = jt.ReactCurrentOwner, Ge = jt.ReactCurrentBatchConfig, U = 0, ve = null, ce = null, ge = 0, Re = 0, Dn = Qt(0), pe = 0, zr = null, cn = 0, el = 0, wi = 0, mr = null, Fe = null, Si = 0, Vn = 1 / 0, gt = null, Ou = !1, Do = null, It = null, ru = !1, Mt = null, Iu = 0, hr = 0, Fo = null, vu = -1, yu = 0;
function je() {
  return U & 6 ? se() : vu !== -1 ? vu : vu = se();
}
function Ut(e) {
  return e.mode & 1 ? U & 2 && ge !== 0 ? ge & -ge : v0.transition !== null ? (yu === 0 && (yu = Ra()), yu) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ha(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < hr) throw hr = 0, Fo = null, Error(w(185));
  Ar(e, n, r), (!(U & 2) || e !== ve) && (e === ve && (!(U & 2) && (el |= n), pe === 4 && Lt(e, ge)), Me(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Vn = se() + 500, Xu && Kt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  vf(e, t);
  var r = Eu(e, e === ve ? ge : 0);
  if (r === 0) n !== null && Ki(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ki(n), t === 1) e.tag === 0 ? h0(Os.bind(null, e)) : ac(Os.bind(null, e)), d0(function() {
      !(U & 6) && Kt();
    }), n = null;
    else {
      switch ($a(r)) {
        case 1:
          n = Yo;
          break;
        case 4:
          n = Aa;
          break;
        case 16:
          n = Su;
          break;
        case 536870912:
          n = Ba;
          break;
        default:
          n = Su;
      }
      n = id(n, ed.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ed(e, t) {
  if (vu = -1, yu = 0, U & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Eu(e, e === ve ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Uu(e, r);
  else {
    t = r;
    var u = U;
    U |= 2;
    var l = nd();
    (ve !== e || ge !== t) && (gt = null, Vn = se() + 500, un(e, t));
    do
      try {
        B0();
        break;
      } catch (i) {
        td(e, i);
      }
    while (!0);
    ii(), $u.current = l, U = u, ce !== null ? t = 0 : (ve = null, ge = 0, t = pe);
  }
  if (t !== 0) {
    if (t === 2 && (u = no(e), u !== 0 && (r = u, t = To(e, u))), t === 1) throw n = zr, un(e, 0), Lt(e, r), Me(e, se()), n;
    if (t === 6) Lt(e, r);
    else {
      if (u = e.current.alternate, !(r & 30) && !M0(u) && (t = Uu(e, r), t === 2 && (l = no(e), l !== 0 && (r = l, t = To(e, l))), t === 1)) throw n = zr, un(e, 0), Lt(e, r), Me(e, se()), n;
      switch (e.finishedWork = u, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          en(e, Fe, gt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = Si + 500 - se(), 10 < t)) {
            if (Eu(e, 0) !== 0) break;
            if (u = e.suspendedLanes, (u & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & u;
              break;
            }
            e.timeoutHandle = co(en.bind(null, e, Fe, gt), t);
            break;
          }
          en(e, Fe, gt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, u = -1; 0 < r; ) {
            var o = 31 - nt(r);
            l = 1 << o, o = t[o], o > u && (u = o), r &= ~l;
          }
          if (r = u, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * z0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = co(en.bind(null, e, Fe, gt), r);
            break;
          }
          en(e, Fe, gt);
          break;
        case 5:
          en(e, Fe, gt);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Me(e, se()), e.callbackNode === n ? ed.bind(null, e) : null;
}
function To(e, t) {
  var n = mr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Uu(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Lo(t)), e;
}
function Lo(e) {
  Fe === null ? Fe = e : Fe.push.apply(Fe, e);
}
function M0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var u = n[r], l = u.getSnapshot;
        u = u.value;
        try {
          if (!ut(l(), u)) return !1;
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
function Lt(e, t) {
  for (t &= ~wi, t &= ~el, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Os(e) {
  if (U & 6) throw Error(w(327));
  An();
  var t = Eu(e, 0);
  if (!(t & 1)) return Me(e, se()), null;
  var n = Uu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = no(e);
    r !== 0 && (t = r, n = To(e, r));
  }
  if (n === 1) throw n = zr, un(e, 0), Lt(e, t), Me(e, se()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, en(e, Fe, gt), Me(e, se()), null;
}
function Ei(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (Vn = se() + 500, Xu && Kt());
  }
}
function dn(e) {
  Mt !== null && Mt.tag === 0 && !(U & 6) && An();
  var t = U;
  U |= 1;
  var n = Ge.transition, r = Q;
  try {
    if (Ge.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, Ge.transition = n, U = t, !(U & 6) && Kt();
  }
}
function Ci() {
  Re = Dn.current, q(Dn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, c0(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (ui(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Pu();
        break;
      case 3:
        In(), q(Le), q(Ce), pi();
        break;
      case 5:
        fi(r);
        break;
      case 4:
        In();
        break;
      case 13:
        q(ne);
        break;
      case 19:
        q(ne);
        break;
      case 10:
        si(r.type._context);
        break;
      case 22:
      case 23:
        Ci();
    }
    n = n.return;
  }
  if (ve = e, ce = e = Vt(e.current, null), ge = Re = t, pe = 0, zr = null, wi = el = cn = 0, Fe = mr = null, nn !== null) {
    for (t = 0; t < nn.length; t++) if (n = nn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var u = r.next, l = n.pending;
      if (l !== null) {
        var o = l.next;
        l.next = u, r.next = o;
      }
      n.pending = r;
    }
    nn = null;
  }
  return e;
}
function td(e, t) {
  do {
    var n = ce;
    try {
      if (ii(), pu.current = Ru, Bu) {
        for (var r = re.memoizedState; r !== null; ) {
          var u = r.queue;
          u !== null && (u.pending = null), r = r.next;
        }
        Bu = !1;
      }
      if (an = 0, he = fe = re = null, fr = !1, Fr = 0, ki.current = null, n === null || n.return === null) {
        pe = 1, zr = t, ce = null;
        break;
      }
      e: {
        var l = e, o = n.return, i = n, s = t;
        if (t = ge, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = _s(o);
          if (k !== null) {
            k.flags &= -257, js(k, o, i, l, t), k.mode & 1 && Ns(l, d, t), t = k, s = d;
            var S = t.updateQueue;
            if (S === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(s), t.updateQueue = E;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ns(l, d, t), Ni();
              break e;
            }
            s = Error(w(426));
          }
        } else if (ee && i.mode & 1) {
          var B = _s(o);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), js(B, o, i, l, t), li(Un(s, i));
            break e;
          }
        }
        l = s = Un(s, i), pe !== 4 && (pe = 2), mr === null ? mr = [l] : mr.push(l), l = o;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = $c(l, s, t);
              xs(l, f);
              break e;
            case 1:
              i = s;
              var a = l.type, c = l.stateNode;
              if (!(l.flags & 128) && (typeof a.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (It === null || !It.has(c)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var y = Oc(l, i, t);
                xs(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ud(n);
    } catch (C) {
      t = C, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nd() {
  var e = $u.current;
  return $u.current = Ru, e === null ? Ru : e;
}
function Ni() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4), ve === null || !(cn & 268435455) && !(el & 268435455) || Lt(ve, ge);
}
function Uu(e, t) {
  var n = U;
  U |= 2;
  var r = nd();
  (ve !== e || ge !== t) && (gt = null, un(e, t));
  do
    try {
      A0();
      break;
    } catch (u) {
      td(e, u);
    }
  while (!0);
  if (ii(), U = n, $u.current = r, ce !== null) throw Error(w(261));
  return ve = null, ge = 0, pe;
}
function A0() {
  for (; ce !== null; ) rd(ce);
}
function B0() {
  for (; ce !== null && !of(); ) rd(ce);
}
function rd(e) {
  var t = od(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? ud(e) : ce = t, ki.current = null;
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = D0(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pe = 6, ce = null;
        return;
      }
    } else if (n = P0(n, t, Re), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function en(e, t, n) {
  var r = Q, u = Ge.transition;
  try {
    Ge.transition = null, Q = 1, R0(e, t, n, r);
  } finally {
    Ge.transition = u, Q = r;
  }
  return null;
}
function R0(e, t, n, r) {
  do
    An();
  while (Mt !== null);
  if (U & 6) throw Error(w(327));
  n = e.finishedWork;
  var u = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (yf(e, l), e === ve && (ce = ve = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ru || (ru = !0, id(Su, function() {
    return An(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Ge.transition, Ge.transition = null;
    var o = Q;
    Q = 1;
    var i = U;
    U |= 4, ki.current = null, T0(e, n), Jc(n, e), r0(so), Cu = !!io, so = io = null, e.current = n, L0(n), sf(), U = i, Q = o, Ge.transition = l;
  } else e.current = n;
  if (ru && (ru = !1, Mt = e, Iu = u), l = e.pendingLanes, l === 0 && (It = null), df(n.stateNode), Me(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) u = t[n], r(u.value, { componentStack: u.stack, digest: u.digest });
  if (Ou) throw Ou = !1, e = Do, Do = null, e;
  return Iu & 1 && e.tag !== 0 && An(), l = e.pendingLanes, l & 1 ? e === Fo ? hr++ : (hr = 0, Fo = e) : hr = 0, Kt(), null;
}
function An() {
  if (Mt !== null) {
    var e = $a(Iu), t = Ge.transition, n = Q;
    try {
      if (Ge.transition = null, Q = 16 > e ? 16 : e, Mt === null) var r = !1;
      else {
        if (e = Mt, Mt = null, Iu = 0, U & 6) throw Error(w(331));
        var u = U;
        for (U |= 4, F = e.current; F !== null; ) {
          var l = F, o = l.child;
          if (F.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var d = i[s];
                for (F = d; F !== null; ) {
                  var h = F;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, h, l);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, F = v;
                  else for (; F !== null; ) {
                    h = F;
                    var m = h.sibling, k = h.return;
                    if (Gc(h), h === d) {
                      F = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = k, F = m;
                      break;
                    }
                    F = k;
                  }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var E = S.child;
                if (E !== null) {
                  S.child = null;
                  do {
                    var B = E.sibling;
                    E.sibling = null, E = B;
                  } while (E !== null);
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
                pr(9, l, l.return);
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
          var c = o.child;
          if (o.subtreeFlags & 2064 && c !== null) c.return = o, F = c;
          else e: for (o = a; F !== null; ) {
            if (i = F, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  qu(9, i);
              }
            } catch (C) {
              ie(i, i.return, C);
            }
            if (i === o) {
              F = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, F = y;
              break e;
            }
            F = i.return;
          }
        }
        if (U = u, Kt(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
          ct.onPostCommitFiberRoot(bu, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Ge.transition = t;
    }
  }
  return !1;
}
function Is(e, t, n) {
  t = Un(n, t), t = $c(e, t, 1), e = Ot(e, t, 1), t = je(), e !== null && (Ar(e, 1, t), Me(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
        e = Un(n, e), e = Oc(t, e, 1), t = Ot(t, e, 1), e = je(), t !== null && (Ar(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (ge & n) === n && (pe === 4 || pe === 3 && (ge & 130023424) === ge && 500 > se() - Si ? un(e, 0) : wi |= n), Me(e, t);
}
function ld(e, t) {
  t === 0 && (e.mode & 1 ? (t = Kr, Kr <<= 1, !(Kr & 130023424) && (Kr = 4194304)) : t = 1);
  var n = je();
  e = Nt(e, t), e !== null && (Ar(e, t, n), Me(e, n));
}
function O0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ld(e, n);
}
function I0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, u = e.memoizedState;
      u !== null && (n = u.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), ld(e, n);
}
var od;
od = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, j0(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, ee && t.flags & 1048576 && cc(t, Tu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hu(e, t), e = t.pendingProps;
      var u = Rn(t, Ce.current);
      Mn(t, n), u = hi(null, t, r, e, u, n);
      var l = vi();
      return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (l = !0, Du(t)) : l = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, ci(t), u.updater = Ju, t.stateNode = u, u._reactInternals = t, go(t, r, e, n), t = wo(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && ri(t), _e(null, t, u, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hu(e, t), e = t.pendingProps, u = r._init, r = u(r._payload), t.type = r, u = t.tag = V0(r), e = qe(r, e), u) {
          case 0:
            t = ko(null, t, r, e, n);
            break e;
          case 1:
            t = Fs(null, t, r, e, n);
            break e;
          case 11:
            t = Ps(null, t, r, e, n);
            break e;
          case 14:
            t = Ds(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, u = t.pendingProps, u = t.elementType === r ? u : qe(r, u), ko(e, t, r, u, n);
    case 1:
      return r = t.type, u = t.pendingProps, u = t.elementType === r ? u : qe(r, u), Fs(e, t, r, u, n);
    case 3:
      e: {
        if (Wc(t), e === null) throw Error(w(387));
        r = t.pendingProps, l = t.memoizedState, u = l.element, vc(e, t), Mu(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          u = Un(Error(w(423)), t), t = Ts(e, t, r, n, u);
          break e;
        } else if (r !== u) {
          u = Un(Error(w(424)), t), t = Ts(e, t, r, n, u);
          break e;
        } else for ($e = $t(t.stateNode.containerInfo.firstChild), Oe = t, ee = !0, tt = null, n = mc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === u) {
            t = _t(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yc(t), e === null && ho(t), r = t.type, u = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = u.children, ao(r, u) ? o = null : l !== null && ao(r, l) && (t.flags |= 32), Vc(e, t), _e(e, t, o, n), t.child;
    case 6:
      return e === null && ho(t), null;
    case 13:
      return Hc(e, t, n);
    case 4:
      return di(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = On(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, u = t.pendingProps, u = t.elementType === r ? u : qe(r, u), Ps(e, t, r, u, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, u = t.pendingProps, l = t.memoizedProps, o = u.value, G(Lu, r._currentValue), r._currentValue = o, l !== null) if (ut(l.value, o)) {
          if (l.children === u.children && !Le.current) {
            t = _t(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var i = l.dependencies;
          if (i !== null) {
            o = l.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (l.tag === 1) {
                  s = St(-1, n & -n), s.tag = 2;
                  var d = l.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), d.pending = s;
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
            if (o = l.return, o === null) throw Error(w(341));
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
        _e(e, t, u.children, n), t = t.child;
      }
      return t;
    case 9:
      return u = t.type, r = t.pendingProps.children, Mn(t, n), u = Xe(u), r = r(u), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, u = qe(r, t.pendingProps), u = qe(r.type, u), Ds(e, t, r, u, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, u = t.pendingProps, u = t.elementType === r ? u : qe(r, u), hu(e, t), t.tag = 1, ze(r) ? (e = !0, Du(t)) : e = !1, Mn(t, n), Rc(t, r, u), go(t, r, u, n), wo(null, t, r, !0, e, n);
    case 19:
      return bc(e, t, n);
    case 22:
      return Uc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function id(e, t) {
  return Ma(e, t);
}
function U0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new U0(e, t, n, r);
}
function _i(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function V0(e) {
  if (typeof e == "function") return _i(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bo) return 11;
    if (e === Qo) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function gu(e, t, n, r, u, l) {
  var o = 2;
  if (r = e, typeof e == "function") _i(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case xn:
      return ln(n.children, u, l, t);
    case Ho:
      o = 8, u |= 8;
      break;
    case Ul:
      return e = Ye(12, n, t, u | 2), e.elementType = Ul, e.lanes = l, e;
    case Vl:
      return e = Ye(13, n, t, u), e.elementType = Vl, e.lanes = l, e;
    case Wl:
      return e = Ye(19, n, t, u), e.elementType = Wl, e.lanes = l, e;
    case ya:
      return tl(n, u, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ha:
          o = 10;
          break e;
        case va:
          o = 9;
          break e;
        case bo:
          o = 11;
          break e;
        case Qo:
          o = 14;
          break e;
        case Dt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(o, n, t, u), t.elementType = e, t.type = r, t.lanes = l, t;
}
function ln(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function tl(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = ya, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zl(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Ml(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function W0(e, t, n, r, u) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ml(0), this.expirationTimes = ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ml(0), this.identifierPrefix = r, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
}
function ji(e, t, n, r, u, l, o, i, s) {
  return e = new W0(e, t, n, i, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ye(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ci(l), e;
}
function H0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sd(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return sc(e, n, t);
  }
  return t;
}
function ad(e, t, n, r, u, l, o, i, s) {
  return e = ji(n, r, !0, e, u, l, o, i, s), e.context = sd(null), n = e.current, r = je(), u = Ut(n), l = St(r, u), l.callback = t ?? null, Ot(n, l, u), e.current.lanes = u, Ar(e, u, r), Me(e, r), e;
}
function nl(e, t, n, r) {
  var u = t.current, l = je(), o = Ut(u);
  return n = sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(l, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(u, t, o), e !== null && (rt(e, u, o, l), fu(e, u, o)), o;
}
function Vu(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Us(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pi(e, t) {
  Us(e, t), (e = e.alternate) && Us(e, t);
}
function b0() {
  return null;
}
var cd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Di(e) {
  this._internalRoot = e;
}
rl.prototype.render = Di.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  nl(e, t, null, null);
};
rl.prototype.unmount = Di.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function() {
      nl(null, e, null, null);
    }), t[Ct] = null;
  }
};
function rl(e) {
  this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ua();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Wa(e);
  }
};
function Fi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ul(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vs() {
}
function Q0(e, t, n, r, u) {
  if (u) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var d = Vu(o);
        l.call(d);
      };
    }
    var o = ad(t, r, e, 0, null, !1, !1, "", Vs);
    return e._reactRootContainer = o, e[Ct] = o.current, Nr(e.nodeType === 8 ? e.parentNode : e), dn(), o;
  }
  for (; u = e.lastChild; ) e.removeChild(u);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Vu(s);
      i.call(d);
    };
  }
  var s = ji(e, 0, !1, null, null, !1, !1, "", Vs);
  return e._reactRootContainer = s, e[Ct] = s.current, Nr(e.nodeType === 8 ? e.parentNode : e), dn(function() {
    nl(t, s, n, r);
  }), s;
}
function ll(e, t, n, r, u) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof u == "function") {
      var i = u;
      u = function() {
        var s = Vu(o);
        i.call(s);
      };
    }
    nl(t, o, e, u);
  } else o = Q0(n, t, e, u, r);
  return Vu(o);
}
Oa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lr(t.pendingLanes);
        n !== 0 && (Go(t, n | 1), Me(t, se()), !(U & 6) && (Vn = se() + 500, Kt()));
      }
      break;
    case 13:
      dn(function() {
        var r = Nt(e, 1);
        if (r !== null) {
          var u = je();
          rt(r, e, 1, u);
        }
      }), Pi(e, 1);
  }
};
Xo = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = je();
      rt(t, e, 134217728, n);
    }
    Pi(e, 134217728);
  }
};
Ia = function(e) {
  if (e.tag === 13) {
    var t = Ut(e), n = Nt(e, t);
    if (n !== null) {
      var r = je();
      rt(n, e, t, r);
    }
    Pi(e, t);
  }
};
Ua = function() {
  return Q;
};
Va = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
ql = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ql(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var u = Gu(r);
            if (!u) throw Error(w(90));
            xa(r), Ql(r, u);
          }
        }
      }
      break;
    case "textarea":
      wa(e, n);
      break;
    case "select":
      t = n.value, t != null && Fn(e, !!n.multiple, t, !1);
  }
};
Pa = Ei;
Da = dn;
var K0 = { usingClientEntryPoint: !1, Events: [Rr, En, Gu, _a, ja, Ei] }, nr = { findFiberByHostInstance: tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Y0 = { bundleType: nr.bundleType, version: nr.version, rendererPackageName: nr.rendererPackageName, rendererConfig: nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = La(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: nr.findFiberByHostInstance || b0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uu.isDisabled && uu.supportsFiber) try {
    bu = uu.inject(Y0), ct = uu;
  } catch {
  }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fi(t)) throw Error(w(200));
  return H0(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!Fi(e)) throw Error(w(299));
  var n = !1, r = "", u = cd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, u), e[Ct] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new Di(t);
};
Ue.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = La(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return dn(e);
};
Ue.hydrate = function(e, t, n) {
  if (!ul(t)) throw Error(w(200));
  return ll(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!Fi(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, u = !1, l = "", o = cd;
  if (n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ad(t, null, e, 1, n ?? null, u, !1, l, o), e[Ct] = t.current, Nr(e), r) for (e = 0; e < r.length; e++) n = r[e], u = n._getVersion, u = u(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, u] : t.mutableSourceEagerHydrationData.push(
    n,
    u
  );
  return new rl(t);
};
Ue.render = function(e, t, n) {
  if (!ul(t)) throw Error(w(200));
  return ll(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!ul(e)) throw Error(w(40));
  return e._reactRootContainer ? (dn(function() {
    ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = Ei;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ul(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return ll(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function dd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd);
    } catch (e) {
      console.error(e);
    }
}
dd(), da.exports = Ue;
var G0 = da.exports, fd, Ws = G0;
fd = Ws.createRoot, Ws.hydrateRoot;
function X0(e) {
  const t = e.trim().replace(/\s+/g, " ");
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function Ti(e) {
  return X0(e.category ?? "");
}
function Z0(e) {
  const t = e.map((r) => ({
    ...r,
    category: Ti(r) || void 0
  }));
  let n = "";
  for (const r of t)
    r.category ? n = r.category : n && (r.category = n);
  return t;
}
function J0(e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e) {
    const u = Ti(r);
    u && t.add(u);
  }
  const n = [...t].sort((r, u) => r.localeCompare(u, "bg"));
  return [{ id: null, label: "Всички" }, ...n.map((r) => ({ id: r, label: r }))];
}
function Hs(e, t) {
  return t ? Ti(e) === t : !0;
}
var q0 = {
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
  }
}, ep = {
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
  }
}, Al = { bg: q0, en: ep };
function bs(e, t) {
  let n = e;
  for (const r of t) {
    if (n == null || typeof n != "object") return;
    n = n[r];
  }
  return typeof n == "string" ? n : void 0;
}
function tp(e, t) {
  return e.replace(/\{(\w+)\}/g, (n, r) => String(t[r] ?? `{${r}}`));
}
function pd(e) {
  const t = Al[e] ?? Al.bg;
  return function(r, u) {
    const l = r.split(".");
    let o = bs(t, l);
    return o === void 0 && (o = bs(Al.bg, l) ?? r), u ? tp(o, u) : o;
  };
}
var md = x.createContext(pd("bg"));
function np({ locale: e, children: t }) {
  const n = pd(e);
  return /* @__PURE__ */ p.jsx(md.Provider, { value: n, children: t });
}
function Li() {
  return x.useContext(md);
}
function Qs(e) {
  const t = new Uint8Array(e);
  return globalThis.crypto.getRandomValues(t), Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Ks(...e) {
  for (const t of e) {
    const n = String(t ?? "").trim();
    if (n) return n;
  }
  return "";
}
function rp(e) {
  return /^svc-\d/.test(e);
}
function up(e, t) {
  const n = e.trim();
  if (n && !rp(n) && !t.has(n))
    return t.add(n), n;
  let r = Qs(4);
  for (; t.has(r); ) r = Qs(4);
  return t.add(r), r;
}
function lp(e) {
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
  const n = /* @__PURE__ */ new Set(), r = [];
  return t.forEach((u, l) => {
    const o = u, i = Ks(o.name, o.service_name, o.serviceName, o.title);
    if (!i) return;
    const s = up(String(o.id ?? ""), n), d = Number(o.duration ?? o.duration_min ?? o.durationMin ?? 30) || 30, h = o.price ?? o.service_price ?? o.servicePrice, v = h != null ? Number(h) : void 0, m = Array.isArray(o.variants) ? o.variants.map((N) => {
      if (!N || typeof N != "object") return null;
      const j = N, A = String(j.label ?? "").trim();
      if (!A) return null;
      const T = Number(j.price ?? NaN);
      if (!Number.isFinite(T)) return null;
      const $ = Number(j.duration ?? NaN);
      return {
        label: A,
        price: Math.max(0, T),
        duration: Number.isFinite($) ? Math.max(5, Math.round($)) : void 0
      };
    }).filter((N) => N !== null) : void 0, k = Array.isArray(o.images) ? o.images.map((N) => String(N ?? "").trim()).filter(Boolean) : void 0, S = Array.isArray(o.assignedTeamMemberIds) ? [...new Set(o.assignedTeamMemberIds.map((N) => String(N ?? "").trim()).filter(Boolean))] : void 0, E = String(o.payment_type ?? ""), B = ["none", "deposit", "full"].includes(E) ? E : void 0, f = Number(o.deposit_amount ?? NaN), a = Number.isFinite(f) ? Math.max(0, f) : void 0, c = Number(o.cancel_policy_hours ?? NaN), y = Number.isFinite(c) && c > 0 ? c : void 0, C = String(o.cancel_policy_action ?? ""), _ = ["full_refund", "keep_deposit", "keep_full"].includes(C) ? C : void 0;
    r.push({
      id: s,
      name: i,
      description: String(o.description ?? "").trim() || void 0,
      category: Ks(
        o.category,
        o.category_name,
        o.categoryName,
        o.service_category,
        o.serviceCategory
      ) || void 0,
      price: v != null && Number.isFinite(v) ? v : void 0,
      duration: d,
      images: k,
      variants: m && m.length > 0 ? m : void 0,
      ...S && S.length > 0 ? { assignedTeamMemberIds: S } : {},
      ...B !== void 0 ? { payment_type: B } : {},
      ...a !== void 0 ? { deposit_amount: a } : {},
      ...o.requires_confirmation === !0 ? { requires_confirmation: !0 } : {},
      ...y !== void 0 ? { cancel_policy_hours: y } : {},
      ..._ !== void 0 ? { cancel_policy_action: _ } : {}
    });
  }), r;
}
var zo = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], op = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday"
};
function ip(e, t) {
  const n = {};
  for (const u of zo) n[u] = null;
  const r = sp(t);
  if (r) {
    for (const u of zo)
      r[u] !== void 0 && (n[u] = r[u]);
    return n;
  }
  if (e && typeof e == "object")
    for (const [u, l] of Object.entries(e)) {
      const o = op[u.toLowerCase()];
      o && (!l || l.closed || !l.open || !l.close ? n[o] = null : n[o] = { open: l.open, close: l.close });
    }
  return n;
}
function sp(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return null;
  const t = e, n = {};
  let r = !1;
  for (const u of zo) {
    const l = t[u];
    if (l && typeof l == "object" && !Array.isArray(l)) {
      const o = String(l.open ?? ""), i = String(l.close ?? "");
      o && i ? (n[u] = { open: o, close: i }, r = !0) : n[u] = null;
    }
  }
  return r ? n : null;
}
function ap(e) {
  return /^\d{4}-\d{2}-\d{2}$/.test(e);
}
function Mo(e) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(e);
}
function vr(e) {
  const [t, n] = e.split(":").map(Number);
  return t * 60 + n;
}
function cp(e) {
  if (!Array.isArray(e)) return [];
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const r = n, u = String(r.date ?? "").trim();
    if (!ap(u)) continue;
    const l = r.allDay === !0, o = String(r.start ?? "").trim(), i = String(r.end ?? "").trim(), s = String(r.note ?? "").trim();
    if (!l) {
      if (!Mo(o) || !Mo(i) || vr(i) <= vr(o)) continue;
      t.push({ date: u, allDay: !1, start: o, end: i, ...s ? { note: s } : {} });
      continue;
    }
    t.push({ date: u, allDay: !0, ...s ? { note: s } : {} });
  }
  return t.sort((n, r) => `${n.date}-${n.start ?? ""}`.localeCompare(`${r.date}-${r.start ?? ""}`)), t;
}
function hd(e, t) {
  return e.some((n) => n.date === t && n.allDay);
}
function dp(e, t, n, r) {
  if (hd(e, t)) return !0;
  if (!Mo(n)) return !1;
  const u = vr(n), l = u + Math.max(1, r);
  for (const o of e) {
    if (o.date !== t || o.allDay || !o.start || !o.end) continue;
    const i = vr(o.start), s = vr(o.end);
    if (u < s && l > i) return !0;
  }
  return !1;
}
var Ao = "tracking_booking_started";
function fp() {
  var e;
  typeof sessionStorage > "u" || sessionStorage.getItem(Ao) || (sessionStorage.setItem(Ao, "1"), (e = window.gtag) == null || e.call(window, "event", "booking_started"));
}
function pp({ serviceName: e, value: t, currency: n = "EUR" } = {}) {
  var l, o, i;
  typeof sessionStorage < "u" && sessionStorage.removeItem(Ao);
  const r = {};
  t != null && t > 0 && (r.value = t, r.currency = n), e && (r.content_name = e), (l = window.fbq) == null || l.call(window, "track", "Schedule", r), (o = window.fbq) == null || o.call(window, "trackCustom", "BookingCompleted", { ...r, service_name: e });
  const u = {};
  t != null && t > 0 && (u.value = t, u.currency = n), e && (u.service_name = e), (i = window.gtag) == null || i.call(window, "event", "booking_completed", u);
}
var mp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function Ys(e) {
  return String(e).padStart(2, "0");
}
function Gs(e) {
  return new Date(e.getTime() - e.getTimezoneOffset() * 6e4).toISOString().split("T")[0];
}
function hp({
  slug: e,
  openingHours: t,
  bookingBlocks: n,
  slotIntervalMin: r,
  bookingAdvanceDays: u,
  bookingServices: l,
  engineUrl: o = "",
  successUrl: i,
  cancelUrl: s,
  locale: d = "bg-BG",
  onEvent: h
}) {
  const v = Li(), m = o.replace(/\/$/, ""), k = `/api/public/v1/salons/${encodeURIComponent(e)}`, [S, E] = x.useState(!1), [B, f] = x.useState([]), [a, c] = x.useState(""), [y, C] = x.useState(""), [_, N] = x.useState({}), [j, A] = x.useState(""), [T, $] = x.useState(""), [K, Y] = x.useState(""), [de, We] = x.useState(""), [Ne, ft] = x.useState(""), [P, M] = x.useState(""), [R, X] = x.useState([]), [V, pt] = x.useState(null), ke = x.useRef(!1), [He, me] = x.useState(!1), [lt, D] = x.useState(""), [Yt, mt] = x.useState(""), [Kn, ot] = x.useState(null);
  x.useEffect(() => {
    const z = /* @__PURE__ */ new Date();
    A(Gs(z));
    const I = new Date(z);
    I.setDate(z.getDate() + Math.max(1, u)), $(Gs(I));
  }, [u]), x.useEffect(() => {
    !S || ke.current || (ke.current = !0, fetch(`${m}${k}/staff`, { cache: "no-store" }).then((z) => z.json()).then((z) => {
      Array.isArray(z.staff) && X(z.staff);
    }).catch(() => {
    }));
  }, [S, e]), x.useEffect(() => {
    if (!a) return;
    let z = !1;
    const I = V ? `&staffMemberId=${encodeURIComponent(V)}` : "";
    return fetch(
      `${m}${k}/slots?date=${encodeURIComponent(a)}${I}`,
      { cache: "no-store" }
    ).then((b) => b.json()).then((b) => {
      if (z || !Array.isArray(b.occupied)) return;
      const te = b.occupied.map((oe) => ({
        time: String((oe == null ? void 0 : oe.time) ?? ""),
        duration: Math.max(5, Number((oe == null ? void 0 : oe.duration) ?? 30) || 30)
      })).filter((oe) => oe.time.length >= 4), ae = V ? `${a}:${V}` : a;
      z || N((oe) => ({ ...oe, [ae]: te }));
    }).catch(() => {
    }), () => {
      z = !0;
    };
  }, [e, a, V]);
  const Z = x.useMemo(
    () => B.map((z) => l[z]).filter((z) => !!z),
    [B, l]
  ), le = x.useMemo(
    () => Z.reduce((z, I) => z + (Number(I.duration) || 0), 0),
    [Z]
  ), Ae = x.useMemo(
    () => Z.reduce((z, I) => z + (Number(I.price) || 0), 0),
    [Z]
  ), ht = x.useCallback(
    (z, I) => {
      if (!z) return null;
      const b = mp[(/* @__PURE__ */ new Date(`${z}T12:00:00`)).getDay()], te = t[b];
      if (!(te != null && te.open) || !(te != null && te.close) || hd(n, z)) return "closed";
      const ae = Math.max(5, I || 30), oe = V ? `${z}:${V}` : z, vt = _[oe] ?? [], [hn = 0, Be = 0] = te.open.split(":").map(Number), [Xt = 0, vn = 0] = te.close.split(":").map(Number), Zt = hn * 60 + Be, g = Xt * 60 + vn - ae, L = [];
      for (let W = Zt; W <= g; W += r) {
        const H = `${Ys(Math.floor(W / 60))}:${Ys(W % 60)}`, Jt = W + ae;
        !vt.some(({ time: yt, duration: sl }) => {
          const [kd = 0, wd = 0] = yt.split(":").map(Number), Mi = kd * 60 + wd, Sd = Mi + Math.max(5, sl);
          return Mi < Jt && Sd > W;
        }) && !dp(n, z, H, ae) && L.push(H);
      }
      return L;
    },
    [t, n, _, V, r]
  ), Yn = x.useMemo(
    () => B.length === 0 ? null : ht(a, le || 30),
    [B.length, ht, a, le]
  ), ol = x.useCallback((z) => {
    if (D(""), mt(""), ot(null), z) {
      const I = l.findIndex((b) => b.id === z);
      f(I >= 0 ? [I] : []);
    } else
      f([]);
    c(""), C(""), Y(""), We(""), ft(""), M(""), E(!0), h ? h("booking_started") : fp();
  }, [l, h]), Gt = x.useCallback(() => {
    E(!1), ot(null), pt(null), c(""), C("");
  }, []), Or = x.useCallback((z) => {
    f((I) => I.includes(z) ? I.filter((te) => te !== z) : [...I, z]), C("");
  }, []), Ir = x.useCallback((z) => {
    c(z), C("");
  }, []), il = x.useCallback((z) => {
    pt(z), c(""), C("");
  }, []), mn = x.useCallback((z, I, b) => {
    if (!z || !I) return;
    const te = Math.max(5, Number(b) || 30);
    N((ae) => {
      const oe = ae[z] ?? [];
      return oe.some((vt) => vt.time === I) ? ae : { ...ae, [z]: [...oe, { time: I, duration: te }] };
    });
  }, []), Ur = x.useCallback(async (z) => {
    if (z.preventDefault(), D(""), mt(""), Z.length === 0) {
      D(v("booking.errors.noService"));
      return;
    }
    if (!K.trim()) {
      D(v("booking.errors.noName"));
      return;
    }
    if (!de.trim()) {
      D(v("booking.errors.noPhone"));
      return;
    }
    if (!Ne.trim()) {
      D(v("booking.errors.noEmail"));
      return;
    }
    if (!a) {
      D(v("booking.errors.noDate"));
      return;
    }
    if (!y) {
      D(v("booking.errors.noTime"));
      return;
    }
    const I = Z.map((Be) => Be.name).join(" + "), b = le || 30, te = Z[0], ae = (te == null ? void 0 : te.payment_type) ?? "none", oe = (te == null ? void 0 : te.deposit_amount) ?? 0, vt = ae === "deposit" ? oe : ae === "full" ? Ae ?? 0 : 0, hn = ae !== "none" && vt > 0;
    me(!0);
    try {
      const Be = await fetch(`${m}${k}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: K.trim(),
          clientPhone: de.trim(),
          clientEmail: Ne.trim().toLowerCase(),
          serviceName: I,
          servicePrice: Ae,
          serviceDuration: b,
          date: a,
          time: y,
          notes: P.trim() || void 0,
          requiresPayment: hn,
          staffMemberId: V ?? void 0
        })
      }), Xt = await Be.json().catch(() => ({}));
      if (!Be.ok)
        throw new Error(
          Xt.error ?? (Be.status === 500 ? v("booking.errors.saveFailed") : v("booking.errors.httpError", { status: Be.status }))
        );
      const vn = Xt.bookingId ?? Xt.id;
      if (hn && vn) {
        const L = await fetch(`${m}${k}/booking-checkout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: vn,
            salonSlug: e,
            serviceName: I,
            amountEuros: vt,
            paymentType: ae,
            successUrl: i,
            cancelUrl: s
          })
        }), W = await L.json().catch(() => ({}));
        if (!L.ok || !W.checkoutUrl)
          throw new Error(W.error ?? v("booking.errors.paymentFailed"));
        window.location.href = W.checkoutUrl;
        return;
      }
      const Zt = (/* @__PURE__ */ new Date(`${a}T12:00:00`)).toLocaleDateString(d, {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      mn(a, y, b), ot({ serviceName: I, dateLabel: Zt, time: y }), mt(`${I} — ${Zt} ${y}`);
      const g = {
        serviceName: I,
        value: Ae > 0 ? Ae : void 0,
        currency: "EUR"
      };
      h ? h("booking_completed", g) : pp(g);
    } catch (Be) {
      D(Be instanceof Error ? Be.message : v("booking.errors.generic"));
    } finally {
      me(!1);
    }
  }, [
    e,
    Z,
    K,
    de,
    Ne,
    a,
    y,
    P,
    le,
    Ae,
    V,
    mn,
    i,
    s,
    d,
    h
  ]);
  return {
    bookingOpen: S,
    open: ol,
    close: Gt,
    selectedServiceIdxs: B,
    toggleService: Or,
    totalDuration: le,
    totalPrice: Ae,
    selectedServices: Z,
    selectedDate: a,
    setDate: Ir,
    selectedTime: y,
    setTime: C,
    timeSlots: Yn,
    minDate: j,
    maxDate: T,
    clientName: K,
    setClientName: Y,
    clientPhone: de,
    setClientPhone: We,
    clientEmail: Ne,
    setClientEmail: ft,
    notes: P,
    setNotes: M,
    staffMembers: R,
    selectedStaffMemberId: V,
    setStaffMemberId: il,
    isSubmitting: He,
    bookingError: lt,
    bookingSuccess: Yt,
    bookingSuccessDetails: Kn,
    submit: Ur
  };
}
var vp = x.lazy(
  () => Promise.resolve().then(() => Yp).then((e) => ({ default: e.SalonBookingModal }))
);
function yp({
  forwardedRef: e,
  slug: t,
  openingHours: n,
  bookingBlocks: r,
  slotIntervalMin: u,
  bookingAdvanceDays: l,
  bookingServices: o,
  serviceCatalog: i,
  categoryTabs: s,
  engineUrl: d,
  primaryColor: h,
  accentGradient: v,
  successUrl: m,
  cancelUrl: k,
  locale: S,
  formatPrice: E,
  onEvent: B,
  salonName: f,
  basePath: a
}) {
  const c = hp({
    slug: t,
    openingHours: n,
    bookingBlocks: r,
    slotIntervalMin: u,
    bookingAdvanceDays: l,
    bookingServices: o,
    engineUrl: d,
    successUrl: m,
    cancelUrl: k,
    locale: S,
    onEvent: B
  });
  x.useImperativeHandle(e, () => ({
    open: (C) => c.open(C),
    close: () => c.close()
  }), [c.open, c.close]);
  const y = c.selectedServices[0];
  return /* @__PURE__ */ p.jsx(x.Suspense, { fallback: null, children: /* @__PURE__ */ p.jsx(
    vp,
    {
      open: c.bookingOpen,
      primaryColor: h,
      accentGradient: v,
      locale: S,
      formatPrice: E,
      serviceCatalog: i,
      categoryTabs: s,
      services: o,
      selectedServiceIdxs: c.selectedServiceIdxs,
      selectedDate: c.selectedDate,
      selectedTime: c.selectedTime,
      totalDuration: c.totalDuration,
      totalPrice: c.totalPrice,
      clientName: c.clientName,
      clientPhone: c.clientPhone,
      clientEmail: c.clientEmail,
      notes: c.notes,
      salonName: f,
      termsHref: `${a}/terms`,
      privacyHref: `${a}/privacy`,
      minDate: c.minDate,
      maxDate: c.maxDate,
      timeSlots: c.timeSlots,
      paymentType: (y == null ? void 0 : y.payment_type) ?? "none",
      depositAmount: y == null ? void 0 : y.deposit_amount,
      cancelPolicyHours: y == null ? void 0 : y.cancel_policy_hours,
      cancelPolicyAction: y == null ? void 0 : y.cancel_policy_action,
      isSubmitting: c.isSubmitting,
      bookingError: c.bookingError,
      bookingSuccess: c.bookingSuccess,
      bookingSuccessDetails: c.bookingSuccessDetails,
      staffMembers: c.staffMembers,
      selectedStaffMemberId: c.selectedStaffMemberId,
      onClose: c.close,
      onToggleService: c.toggleService,
      onDateChange: c.setDate,
      onTimeChange: c.setTime,
      onClientNameChange: c.setClientName,
      onClientPhoneChange: c.setClientPhone,
      onClientEmailChange: c.setClientEmail,
      onNotesChange: c.setNotes,
      onStaffMemberChange: c.setStaffMemberId,
      onSubmit: c.submit
    }
  ) });
}
var gp = x.forwardRef(
  function({ slug: t, salon: n, openingHours: r, bookingBlocks: u, basePath: l = "", engineUrl: o = "", accentGradient: i, successUrl: s, cancelUrl: d, locale: h, formatPrice: v, onEvent: m }, k) {
    const S = x.useMemo(
      () => ip(
        n.working_hours,
        n.opening_hours
      ),
      [n.working_hours, n.opening_hours]
    ), E = r ?? S, B = u ?? cp(
      n.opening_hours && typeof n.opening_hours == "object" ? n.opening_hours.booking_blocks : null
    ), f = x.useMemo(() => {
      const A = n.opening_hours;
      if (A && typeof A == "object") {
        const T = Number(A.slot_interval_min);
        if ([15, 20, 30, 45, 60].includes(T)) return T;
      }
      return 30;
    }, [n.opening_hours]), a = x.useMemo(() => {
      const A = n.opening_hours;
      if (A && typeof A == "object") {
        const T = Number(A.booking_advance_days);
        if (Number.isFinite(T) && T >= 1) return Math.round(T);
      }
      return 60;
    }, [n.opening_hours]), c = x.useMemo(
      () => Z0(lp(n.services)),
      [n.services]
    ), y = x.useMemo(
      () => J0(c),
      [c]
    ), C = x.useMemo(() => {
      const A = [];
      for (const T of c) {
        const $ = Array.isArray(T.variants) ? T.variants : [];
        if ($.length === 0) {
          A.push(T);
          continue;
        }
        for (const K of $)
          A.push({
            ...T,
            id: `${T.id}::${K.label}`,
            name: `${T.name} – ${K.label}`,
            price: Number(K.price ?? T.price ?? 0) || 0,
            duration: Math.max(5, Number(K.duration ?? T.duration ?? 30) || 30),
            variants: void 0
          });
      }
      return A;
    }, [c]), _ = typeof n.language == "string" ? n.language : "bg", N = h ?? (_ === "en" ? "en-US" : "bg-BG"), j = typeof n.primary_color == "string" && n.primary_color ? n.primary_color : "#5B21B6";
    return /* @__PURE__ */ p.jsx(np, { locale: _, children: /* @__PURE__ */ p.jsx(
      yp,
      {
        forwardedRef: k,
        slug: t,
        openingHours: E,
        bookingBlocks: B,
        slotIntervalMin: f,
        bookingAdvanceDays: a,
        bookingServices: C,
        serviceCatalog: c,
        categoryTabs: y,
        engineUrl: o,
        primaryColor: j,
        accentGradient: i,
        successUrl: s,
        cancelUrl: d,
        locale: N,
        formatPrice: v,
        onEvent: m,
        salonName: String(n.name ?? ""),
        basePath: l
      }
    ) });
  }
), vd = x.createContext(null);
function yd(e) {
  if (typeof window > "u") return;
  const t = window[e];
  return typeof t == "string" && t ? t : void 0;
}
function gd(e) {
  var t;
  if (!(typeof document > "u"))
    return ((t = document.querySelector(`meta[name="${e}"]`)) == null ? void 0 : t.content) || void 0;
}
function Wu(e) {
  var t;
  try {
    const n = typeof process < "u" ? process : void 0, r = (t = n == null ? void 0 : n.env) == null ? void 0 : t[e];
    return typeof r == "string" && r ? r : void 0;
  } catch {
    return;
  }
}
function xp(e) {
  return e || yd("__CLICKA_SALON_SLUG") || gd("clicka:salon") || Wu("NEXT_PUBLIC_SALON_SLUG") || Wu("NEXT_PUBLIC_CLICKA_SALON");
}
function kp(e) {
  return e || yd("__CLICKA_ENGINE_URL") || gd("clicka:engine") || Wu("NEXT_PUBLIC_CLICKA_ENGINE") || Wu("NEXT_PUBLIC_CLICKA_API_URL") || "https://clicka.bg";
}
function wp(e) {
  var t, n, r, u;
  if (e) return e;
  if (typeof document < "u") {
    const l = (t = document.documentElement.lang) == null ? void 0 : t.trim();
    if (l)
      return l === "bg" ? "bg-BG" : l === "en" ? "en-US" : l;
    const o = (u = (r = (n = document.body) == null ? void 0 : n.dataset) == null ? void 0 : r.lang) == null ? void 0 : u.trim();
    if (o) return o === "bg" ? "bg-BG" : "en-US";
  }
  return typeof navigator < "u" && navigator.language ? navigator.language : "bg-BG";
}
function Xs(e) {
  if (!(typeof window > "u"))
    return `${location.origin}${location.pathname}?${e}=1`;
}
function Sp({
  children: e,
  salonSlug: t,
  engineUrl: n,
  locale: r,
  successUrl: u,
  cancelUrl: l,
  accentGradient: o,
  formatPrice: i,
  onEvent: s,
  basePath: d,
  autoTriggers: h = !0,
  honorUrlParams: v = !0
}) {
  const m = x.useMemo(() => xp(t), [t]), k = x.useMemo(() => kp(n), [n]), S = x.useMemo(() => wp(r), [r]), E = x.useMemo(
    () => u ?? Xs("booked"),
    [u]
  ), B = x.useMemo(
    () => l ?? Xs("cancelled"),
    [l]
  ), f = x.useRef(null), a = x.useRef(void 0), c = x.useRef(!1), [y, C] = x.useState(null), [_, N] = x.useState(null);
  x.useEffect(() => {
    if (!m) {
      console.error(
        '[@clicka/booking] BookingProvider has no salon slug. Pass `salonSlug` or set NEXT_PUBLIC_SALON_SLUG / <meta name="clicka:salon"> / window.__CLICKA_SALON_SLUG.'
      );
      return;
    }
    let $ = !1;
    const K = `${k.replace(/\/$/, "")}/api/public/v1/salons/${encodeURIComponent(m)}`;
    return fetch(K, { cache: "no-store" }).then((Y) => {
      if (!Y.ok) throw new Error(`Salon fetch failed: HTTP ${Y.status}`);
      return Y.json();
    }).then((Y) => {
      if (!$) {
        if (!Y.salon) throw new Error("Empty salon response");
        C(Y.salon), N(null);
      }
    }).catch((Y) => {
      if ($) return;
      const de = Y instanceof Error ? Y : new Error(String(Y));
      console.error("[@clicka/booking] salon fetch failed:", de), N(de);
    }), () => {
      $ = !0;
    };
  }, [k, m]);
  const j = x.useCallback(
    ($) => {
      f.current && y ? f.current.open($ || void 0) : a.current = $ ?? null;
    },
    [y]
  ), A = x.useCallback(() => {
    var $;
    return ($ = f.current) == null ? void 0 : $.close();
  }, []);
  x.useEffect(() => {
    if (y && f.current && a.current !== void 0) {
      const $ = a.current;
      a.current = void 0, f.current.open($ || void 0);
    }
  }, [y]), x.useEffect(() => {
    if (!h || typeof document > "u") return;
    const $ = "[data-clicka-book],[data-book-service],[data-book]", K = (Y) => {
      const de = Y.target;
      if (!de) return;
      const We = de.closest($);
      if (!We) return;
      Y.preventDefault();
      const Ne = We.getAttribute("data-clicka-book") ?? We.getAttribute("data-book-service") ?? We.getAttribute("data-book") ?? "";
      j(Ne && Ne !== "true" ? Ne : void 0);
    };
    return document.addEventListener("click", K), () => document.removeEventListener("click", K);
  }, [h, j]), x.useEffect(() => {
    if (!v || !y || c.current || typeof location > "u") return;
    const $ = new URLSearchParams(location.search), K = $.get("service");
    (K || $.has("book")) && (c.current = !0, j(K || void 0));
  }, [v, y, j]);
  const T = x.useMemo(
    () => ({ open: j, close: A, isReady: !!y, error: _, salon: y }),
    [j, A, y, _]
  );
  return /* @__PURE__ */ p.jsxs(vd.Provider, { value: T, children: [
    e,
    y && m ? /* @__PURE__ */ p.jsx(
      gp,
      {
        ref: f,
        slug: m,
        salon: y,
        engineUrl: k,
        locale: S,
        successUrl: E,
        cancelUrl: B,
        accentGradient: o,
        formatPrice: i,
        onEvent: s,
        basePath: d
      }
    ) : null
  ] });
}
function Ep() {
  const e = x.useContext(vd);
  if (!e)
    throw new Error(
      "[@clicka/booking] useBooking() must be called inside <BookingProvider>."
    );
  return e;
}
var Cp = x.forwardRef(
  function({ service: t, onClick: n, type: r = "button", children: u, ...l }, o) {
    const { open: i } = Ep();
    return /* @__PURE__ */ p.jsx(
      "button",
      {
        ref: o,
        type: r,
        onClick: (s) => {
          n == null || n(s), s.defaultPrevented || i(t);
        },
        ...l,
        children: u
      }
    );
  }
);
function Zs() {
  if (window.__clickaBookingMounted) return;
  window.__clickaBookingMounted = !0;
  const e = document.getElementById("clicka_booking");
  let t = e;
  t ? t.innerHTML = "" : (t = document.createElement("div"), t.id = "clicka_booking_root", document.body.appendChild(t));
  const r = (document.documentElement.lang === "bg" ? "bg" : "en") === "bg" ? "Запази" : "Reserve";
  fd(t).render(
    /* @__PURE__ */ p.jsx(Sp, { salonSlug: "urban-by-delyana", children: e ? /* @__PURE__ */ p.jsx(Cp, { className: "btn btn_solid", children: /* @__PURE__ */ p.jsx("span", { children: r }) }) : null })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Zs, { once: !0 }) : Zs();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = (e) => {
  const t = _p(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bl = {
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
const jp = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, Pp = x.createContext({}), Dp = () => x.useContext(Pp), Fp = x.forwardRef(
  ({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: u = "", children: l, iconNode: o, ...i }, s) => {
    const {
      size: d = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: v = !1,
      color: m = "currentColor",
      className: k = ""
    } = Dp() ?? {}, S = r ?? v ? Number(n ?? h) * 24 / Number(t ?? d) : n ?? h;
    return x.createElement(
      "svg",
      {
        ref: s,
        ...Bl,
        width: t ?? d ?? Bl.width,
        height: t ?? d ?? Bl.height,
        stroke: e ?? m,
        strokeWidth: S,
        className: xd("lucide", k, u),
        ...!l && !jp(i) && { "aria-hidden": "true" },
        ...i
      },
      [
        ...o.map(([E, B]) => x.createElement(E, B)),
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
const Qn = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...u }, l) => x.createElement(Fp, {
      ref: l,
      iconNode: t,
      className: xd(
        `lucide-${Np(Js(e))}`,
        `lucide-${e}`,
        r
      ),
      ...u
    })
  );
  return n.displayName = Js(e), n;
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lp = Qn("check", Tp);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Mp = Qn("chevron-down", zp);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Bp = Qn("loader-circle", Ap);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Rl = Qn("plus", Rp);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Op = Qn("user", $p);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], $l = Qn("x", Ip);
function Bo(e, t, n) {
  if (n)
    return e.findIndex((u) => u.id === `${t}::${n}`);
  const r = e.findIndex((u) => u.id === t);
  return r >= 0 ? r : e.findIndex((u) => u.id.startsWith(`${t}::`));
}
function Up(e, t, n, r) {
  var l, o;
  if ((l = n.variants) != null && l.length) {
    const i = r ?? ((o = n.variants[0]) == null ? void 0 : o.label), s = i ? Bo(t, n.id, i) : -1;
    return s >= 0 && e.includes(s);
  }
  const u = Bo(t, n.id);
  return u >= 0 && e.includes(u);
}
function Vp(e, t) {
  const n = e.variants ?? [];
  if (n.length > 0) {
    const r = t ?? n[0].label, u = n.find((l) => l.label === r) ?? n[0];
    return {
      price: Number(u.price ?? e.price ?? 0) || 0,
      duration: Math.max(5, Number(u.duration ?? e.duration ?? 30) || 30)
    };
  }
  return {
    price: Number(e.price ?? 0) || 0,
    duration: Math.max(5, Number(e.duration ?? 30) || 30)
  };
}
function Wp(e) {
  const { cancelPolicyHours: t, cancelPolicyAction: n, depositAmountEuros: r } = e, u = t >= 48 ? `${Math.round(t / 24)} дни` : `${t} часа`;
  if (n === "full_refund")
    return `Безплатно отказване до ${u} преди часа. След срока — пълен refund.`;
  if (n === "keep_full")
    return `Безплатно отказване до ${u} преди часа. След срока платената сума не се връща.`;
  const l = r ? ` (€${r})` : "";
  return `Безплатно отказване до ${u} преди часа. След срока депозитът${l} се задържа.`;
}
function Hp({
  categories: e,
  selectedId: t,
  onSelect: n,
  size: r = "md",
  className: u = "",
  accentFill: l = "#111111"
}) {
  if (e.filter((s) => s.id != null).length === 0) return null;
  const i = r === "sm" ? "text-[12px]" : "text-sm";
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `flex items-center gap-4 overflow-x-auto pb-0.5 scrollbar-none ${i} ${u}`.trim(),
      role: "tablist",
      "aria-label": "Категории услуги",
      children: e.map((s) => {
        const d = t === s.id;
        return /* @__PURE__ */ p.jsxs(
          "span",
          {
            role: "tab",
            "aria-selected": d,
            tabIndex: 0,
            onClick: () => n(s.id),
            onKeyDown: (h) => {
              (h.key === "Enter" || h.key === " ") && (h.preventDefault(), n(s.id));
            },
            className: `relative inline-block shrink-0 cursor-pointer select-none whitespace-nowrap pb-1.5 font-bold text-black transition ${d ? "" : "hover:opacity-80"}`,
            children: [
              s.label,
              /* @__PURE__ */ p.jsx(
                "span",
                {
                  "aria-hidden": !0,
                  className: "absolute bottom-0 left-0 h-[2px] rounded-full transition-[width,opacity] duration-200",
                  style: {
                    width: d ? "100%" : "0%",
                    opacity: d ? 1 : 0,
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
function bp({
  serviceName: e,
  dateLabel: t,
  time: n,
  salonName: r,
  onClose: u
}) {
  const l = Li(), [o, i] = x.useState(!1);
  return x.useEffect(() => {
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
              /* @__PURE__ */ p.jsx("span", { className: "font-medium text-black/60", children: r })
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
            onClick: u,
            className: `mt-8 w-full max-w-[320px] rounded-full bg-[#111] py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all delay-500 duration-500 active:scale-[0.98] ${o ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: l("booking.success.done")
          }
        )
      ]
    }
  ) });
}
var be = "shadow-[0_2px_6px_rgba(0,0,0,0.14),0_10px_32px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.1)]", lu = "shadow-[0_8px_28px_rgba(0,0,0,0.18)]", Ol = "shadow-[0_2px_10px_rgba(0,0,0,0.08)]", ou = `mt-1.5 block w-full min-w-0 max-w-full box-border rounded-2xl border border-black/[0.06] bg-white px-3.5 py-3 text-[16px] leading-tight text-[#111] touch-manipulation ${be} outline-none transition focus:border-[color:var(--salon-primary)]/40 focus:ring-2 focus:ring-[color:var(--salon-primary)]/12`;
function Qp(e, t) {
  const [n, r] = e.split(":").map(Number);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return e;
  const u = n * 60 + r + t, l = Math.floor(u / 60) % 24, o = u % 60;
  return `${String(l).padStart(2, "0")}:${String(o).padStart(2, "0")}`;
}
function qs({ text: e }) {
  const t = e == null ? void 0 : e.trim();
  return t ? /* @__PURE__ */ p.jsx("p", { className: "mt-1 line-clamp-3 text-[12px] leading-relaxed text-black/50", children: t }) : null;
}
function Kp({
  open: e,
  primaryColor: t,
  accentGradient: n,
  locale: r = "bg-BG",
  formatPrice: u,
  serviceCatalog: l,
  services: o,
  categoryTabs: i,
  selectedServiceIdxs: s,
  selectedDate: d,
  selectedTime: h,
  totalDuration: v,
  totalPrice: m,
  clientName: k,
  clientPhone: S,
  clientEmail: E,
  notes: B,
  salonName: f,
  termsHref: a,
  privacyHref: c,
  minDate: y,
  maxDate: C,
  timeSlots: _,
  paymentType: N = "none",
  depositAmount: j,
  cancelPolicyHours: A,
  cancelPolicyAction: T,
  isSubmitting: $,
  bookingError: K,
  bookingSuccess: Y,
  bookingSuccessDetails: de,
  onClose: We,
  onToggleService: Ne,
  onDateChange: ft,
  onTimeChange: P,
  onClientNameChange: M,
  onClientPhoneChange: R,
  onClientEmailChange: X,
  onNotesChange: V,
  onSubmit: pt,
  staffMembers: ke = [],
  selectedStaffMemberId: He,
  onStaffMemberChange: me,
  directStaffName: lt
}) {
  var Zt;
  const D = Li(), Yt = x.useMemo(
    () => n ?? `linear-gradient(135deg, ${t}, ${t})`,
    [n, t]
  ), mt = x.useMemo(
    () => ({ backgroundImage: Yt }),
    [Yt]
  ), Kn = x.useMemo(
    () => ({
      border: "1px solid transparent",
      backgroundImage: `linear-gradient(#ffffff, #ffffff), ${Yt}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box"
    }),
    [Yt]
  ), ot = x.useMemo(
    () => u ?? ((g) => `${Number.isInteger(g) ? g : g.toFixed(2)} €`),
    [u]
  ), Z = ke.length > 0 && !lt, [le, Ae] = x.useState(1), [ht, Yn] = x.useState(null), [ol, Gt] = x.useState(!0), [Or, Ir] = x.useState({}), [il, mn] = x.useState(null), Ur = x.useRef(!1);
  x.useEffect(() => {
    if (!e) return;
    Ae(1), Yn(null), mn(null);
    const g = {};
    for (const L of l) {
      const W = L.variants ?? [];
      W.length > 0 && (g[L.id] = W[0].label);
    }
    Ir(g);
  }, [e, l]);
  const z = x.useMemo(() => s.map((g) => {
    var L;
    return (L = o[g]) == null ? void 0 : L.id;
  }).filter((g) => !!g), [s, o]), I = x.useMemo(() => Z ? z.length === 0 ? ke : ke.filter(
    (g) => z.every((L) => g.serviceIds.includes(L))
  ) : [], [Z, ke, z]);
  x.useEffect(() => {
    !Z || I.length !== 1 || me == null || me(I[0].id);
  }, [Z, I, me]), x.useEffect(() => {
    e && !Ur.current && Gt(s.length === 0), Ur.current = e;
  }, [e, s.length]), x.useEffect(() => {
    s.length === 0 ? Gt(!0) : Gt(!1);
  }, [s.length]);
  const b = s.length > 0, te = x.useMemo(
    () => h ? Qp(h, Math.max(5, v || 0)) : "",
    [h, v]
  ), ae = x.useMemo(
    () => s.map((g) => o[g]).filter((g) => !!g),
    [s, o]
  ), oe = x.useMemo(
    () => l.filter((g) => Hs(g, ht)),
    [l, ht]
  );
  x.useEffect(() => {
    if (!ht) return;
    l.some((L) => Hs(L, ht)) || Yn(null);
  }, [l, ht]);
  function vt(g) {
    const L = g.variants ?? [], W = L.length > 0 ? Or[g.id] ?? L[0].label : null, H = Bo(o, g.id, W);
    H < 0 || Ne(H);
  }
  const hn = x.useMemo(() => {
    if (!y || !C) return [];
    const g = [], L = /* @__PURE__ */ new Date(`${y}T12:00:00`), W = /* @__PURE__ */ new Date(`${C}T12:00:00`), H = new Date(L);
    for (; H <= W && g.length < 45; ) {
      const Jt = `${H.getFullYear()}-${String(H.getMonth() + 1).padStart(2, "0")}-${String(H.getDate()).padStart(2, "0")}`;
      g.push({
        iso: Jt,
        weekday: H.toLocaleDateString(r, { weekday: "short" }),
        day: H.toLocaleDateString(r, { day: "numeric", month: "short" })
      }), H.setDate(H.getDate() + 1);
    }
    return g;
  }, [y, C, r]);
  function Be(g) {
    if (Z) {
      if (g >= 2 && !b || g >= 3 && !He || g >= 4 && (!b || !h)) return;
    } else if (g >= 2 && !b || g >= 3 && (!b || !h)) return;
    Ae(g);
  }
  const Xt = Z ? [
    { n: 1, label: D("booking.modal.stepService") },
    { n: 2, label: D("booking.modal.stepSpecialist") },
    { n: 3, label: D("booking.modal.stepTime") },
    { n: 4, label: D("booking.modal.stepDetails") }
  ] : [
    { n: 1, label: D("booking.modal.stepService") },
    { n: 2, label: D("booking.modal.stepTime") },
    { n: 3, label: D("booking.modal.stepDetails") }
  ];
  function vn() {
    typeof window < "u" && !window.confirm(D("booking.modal.confirmClose")) || We();
  }
  return x.useEffect(() => {
    if (!e || typeof document > "u") return;
    document.documentElement.style.setProperty("overflow", "hidden"), document.documentElement.style.setProperty("background-color", "#ffffff"), document.body.style.setProperty("overflow", "hidden"), document.body.style.setProperty("position", "fixed"), document.body.style.setProperty("inset", "0"), document.body.style.setProperty("width", "100%"), document.body.style.setProperty("background-color", "#ffffff");
    const g = window.scrollY;
    return document.body.style.setProperty("top", `-${g}px`), () => {
      document.documentElement.style.removeProperty("overflow"), document.documentElement.style.removeProperty("background-color"), document.body.style.removeProperty("overflow"), document.body.style.removeProperty("position"), document.body.style.removeProperty("inset"), document.body.style.removeProperty("width"), document.body.style.removeProperty("background-color"), document.body.style.removeProperty("top"), window.scrollTo(0, g);
    };
  }, [e]), e ? /* @__PURE__ */ p.jsxs("div", { className: "fixed inset-0 z-[110] overflow-hidden bg-white sm:bg-transparent", role: "presentation", children: [
    /* @__PURE__ */ p.jsx("div", { className: "absolute inset-0 hidden bg-black/30 backdrop-blur-sm sm:block", "aria-hidden": !0 }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": !0,
        "aria-label": D("booking.modal.ariaLabel"),
        className: "absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[100dvh] w-full max-w-none flex-col overflow-hidden bg-white sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.6rem] sm:bg-white sm:shadow-[0_25px_60px_rgba(0,0,0,0.12)]",
        onClick: (g) => g.stopPropagation(),
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-black/10 sm:hidden", "aria-hidden": !0 }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative z-[1] flex shrink-0 items-center justify-between gap-2 bg-white px-4 pb-3 pt-3.5 sm:px-5", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
              /* @__PURE__ */ p.jsx("h3", { className: "text-[17px] font-semibold tracking-tight text-black", children: lt ? D("booking.modal.titleWithStaff", { name: lt }) : D("booking.modal.titleDefault") }),
              /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-1.5", children: Xt.map(({ n: g, label: L }) => {
                const W = le === g, H = le > g, Jt = Z ? g >= 2 && !b || g >= 3 && !He || g >= 4 && (!b || !h) : g >= 2 && !b || g >= 3 && (!b || !h);
                return /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: Jt,
                    onClick: () => Be(g),
                    className: `inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2.5 text-[11px] font-bold transition disabled:opacity-20 ${W || H ? `text-white ${lu}` : `bg-white text-black/50 ${be}`}`,
                    style: W || H ? mt : void 0,
                    title: L,
                    "aria-label": D("booking.modal.stepAria", { n: g, label: L }),
                    children: H && !W ? "✓" : g
                  },
                  `header-step-${g}`
                );
              }) })
            ] }),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                className: `shrink-0 rounded-full bg-white p-2 text-black/40 transition active:bg-black/[0.03] ${be}`,
                onClick: vn,
                "aria-label": D("booking.modal.closeAria"),
                children: /* @__PURE__ */ p.jsx($l, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "relative z-[1] min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white px-4 py-5 sm:px-5", children: Y ? de ? /* @__PURE__ */ p.jsx(
            bp,
            {
              serviceName: de.serviceName,
              dateLabel: de.dateLabel,
              time: de.time,
              salonName: f,
              onClose: We
            }
          ) : /* @__PURE__ */ p.jsx("p", { className: "rounded-2xl bg-emerald-50 px-3.5 py-3 text-sm leading-relaxed text-emerald-700", children: Y }) : /* @__PURE__ */ p.jsxs("form", { id: "salon-booking-form", onSubmit: pt, className: "min-w-0 space-y-3.5 bg-white", children: [
            le === 1 ? /* @__PURE__ */ p.jsx("div", { className: "space-y-3", children: b && !ol ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: D("booking.modal.selectedServices") }),
                /* @__PURE__ */ p.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: D(ae.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: ae.length }) })
              ] }),
              s.map((g) => {
                const L = o[g];
                return L ? /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `rounded-2xl p-px transition ${Ol}`,
                    style: Kn,
                    children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-[15px] bg-white px-3.5 py-3.5", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ p.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: L.name }),
                        /* @__PURE__ */ p.jsx(qs, { text: L.description }),
                        /* @__PURE__ */ p.jsxs("p", { className: "mt-1 text-[13px] tabular-nums text-black/70", children: [
                          L.duration,
                          " ",
                          D("booking.modal.minSuffix"),
                          " · ",
                          ot(Number(L.price ?? 0))
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => Ne(g),
                          className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${be}`,
                          "aria-label": D("booking.modal.removeAria"),
                          children: [
                            /* @__PURE__ */ p.jsx($l, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                            D("booking.modal.remove")
                          ]
                        }
                      )
                    ] })
                  },
                  `selected-${L.id}-${g}`
                ) : null;
              }),
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Gt(!0),
                  className: `flex w-full items-center justify-center gap-1.5 rounded-2xl bg-white px-3.5 py-3 text-sm font-semibold text-black ${be}`,
                  children: [
                    /* @__PURE__ */ p.jsx(Rl, { className: "h-4 w-4", "aria-hidden": !0 }),
                    D("booking.modal.addMoreServices")
                  ]
                }
              )
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: D("booking.modal.services") }),
                /* @__PURE__ */ p.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: D(oe.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: oe.length }) })
              ] }),
              b ? /* @__PURE__ */ p.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Gt(!1),
                  className: "text-[12px] font-semibold text-black underline underline-offset-2",
                  children: D("booking.modal.hideList", { count: ae.length })
                }
              ) : null,
              /* @__PURE__ */ p.jsx(
                Hp,
                {
                  categories: i,
                  selectedId: ht,
                  onSelect: Yn,
                  size: "sm",
                  className: "-mx-1 px-1",
                  accentFill: Yt
                }
              ),
              oe.map((g) => {
                const L = g.variants ?? [], W = L.length > 0 ? Or[g.id] ?? L[0].label : null, H = Up(
                  s,
                  o,
                  g,
                  W
                ), { price: Jt, duration: zi } = Vp(g, W);
                return /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `rounded-2xl transition ${H ? `p-px ${Ol}` : `bg-white ${be}`}`,
                    style: H ? Kn : void 0,
                    children: /* @__PURE__ */ p.jsxs(
                      "div",
                      {
                        className: `flex items-start justify-between gap-3 ${H ? "rounded-[15px] bg-white px-3.5 py-3.5" : "px-3.5 py-3.5"}`,
                        children: [
                          /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ p.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: g.name }),
                            /* @__PURE__ */ p.jsx(qs, { text: g.description }),
                            L.length > 0 ? /* @__PURE__ */ p.jsxs("div", { className: "relative mt-1.5 max-w-full", children: [
                              /* @__PURE__ */ p.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => mn(
                                    (yt) => yt === g.id ? null : g.id
                                  ),
                                  className: "flex w-full items-center justify-between rounded-full border border-black/12 bg-white px-3 py-1.5 text-left text-xs transition hover:border-black/25",
                                  children: [
                                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: W }),
                                    /* @__PURE__ */ p.jsx(Mp, { className: "ml-1 h-3.5 w-3.5 shrink-0 text-black/45", "aria-hidden": !0 })
                                  ]
                                }
                              ),
                              il === g.id ? /* @__PURE__ */ p.jsx("div", { className: "absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]", children: L.map((yt) => /* @__PURE__ */ p.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    Ir((sl) => ({
                                      ...sl,
                                      [g.id]: yt.label
                                    })), mn(null);
                                  },
                                  className: `w-full px-3 py-2 text-left text-xs hover:bg-black/[0.04] ${W === yt.label ? "font-semibold text-black" : "text-black/70"}`,
                                  children: [
                                    yt.label,
                                    " · ",
                                    ot(Number(yt.price) || 0)
                                  ]
                                },
                                yt.label
                              )) }) : null
                            ] }) : null,
                            /* @__PURE__ */ p.jsxs("p", { className: "mt-1.5 text-[13px] tabular-nums text-black/45", children: [
                              zi,
                              " ",
                              D("booking.modal.minSuffix"),
                              " · ",
                              ot(Number(Jt) || 0)
                            ] })
                          ] }),
                          H ? /* @__PURE__ */ p.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => vt(g),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${be}`,
                              "aria-label": D("booking.modal.removeAria"),
                              children: [
                                /* @__PURE__ */ p.jsx($l, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                D("booking.modal.remove")
                              ]
                            }
                          ) : /* @__PURE__ */ p.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => vt(g),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white transition ${lu}`,
                              style: mt,
                              children: [
                                /* @__PURE__ */ p.jsx(Rl, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                D("booking.modal.add")
                              ]
                            }
                          )
                        ]
                      }
                    )
                  },
                  g.id
                );
              }),
              oe.length === 0 ? /* @__PURE__ */ p.jsx("p", { className: `rounded-2xl bg-white px-3.5 py-3 text-sm text-black/40 ${be}`, children: D("booking.modal.noServicesInCategory") }) : null
            ] }) }) : null,
            le === 2 && Z ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: D("booking.modal.selectSpecialist") }),
              z.length > 0 && /* @__PURE__ */ p.jsxs("p", { className: "text-[12px] text-black/45", children: [
                D("booking.modal.availableFor"),
                " ",
                /* @__PURE__ */ p.jsx("span", { className: "font-medium text-black/70", children: z.map((g) => {
                  var L;
                  return ((L = l.find((W) => W.id === g)) == null ? void 0 : L.name) ?? g;
                }).join(" + ") })
              ] }),
              I.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: `rounded-2xl bg-white px-4 py-5 text-center ${be}`, children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[14px] font-medium text-black/50", children: D("booking.modal.serviceUnavailable") }),
                /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => Ae(1),
                    className: "mt-3 text-[13px] font-semibold text-[color:var(--salon-primary)] underline underline-offset-2",
                    children: D("booking.modal.selectOtherService")
                  }
                )
              ] }) : /* @__PURE__ */ p.jsx("div", { className: "space-y-2.5", children: I.map((g) => {
                const L = He === g.id;
                return /* @__PURE__ */ p.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => me == null ? void 0 : me(g.id),
                    className: `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition ${L ? `p-px ${Ol}` : `bg-white ${be}`}`,
                    style: L ? Kn : void 0,
                    children: [
                      L ? /* @__PURE__ */ p.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white", style: mt, children: /* @__PURE__ */ p.jsx(Lp, { className: "h-4 w-4", "aria-hidden": !0 }) }) : /* @__PURE__ */ p.jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black/30 ${be}`, children: /* @__PURE__ */ p.jsx(Op, { className: "h-4 w-4", "aria-hidden": !0 }) }),
                      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ p.jsx("p", { className: "text-[15px] font-semibold text-black", children: g.name }),
                        g.bio && /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 truncate text-[12px] text-black/45", children: g.bio })
                      ] })
                    ]
                  },
                  g.id
                );
              }) })
            ] }) : null,
            Z && le === 3 || !Z && le === 2 ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: He ? D("booking.modal.timeWithStaff", { name: ((Zt = ke.find((g) => g.id === He)) == null ? void 0 : Zt.name) ?? "" }) : D("booking.modal.dateTime") }),
                /* @__PURE__ */ p.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => Ae(1),
                    className: `inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--salon-primary)] ${be} active:bg-black/[0.03]`,
                    children: [
                      /* @__PURE__ */ p.jsx(Rl, { className: "h-3.5 w-3.5" }),
                      D("booking.modal.addService")
                    ]
                  }
                )
              ] }),
              b ? /* @__PURE__ */ p.jsx("p", { className: "text-[15px] font-semibold text-black", children: ae.map((g) => g.name).join(" + ") }) : null,
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.date") }),
                /* @__PURE__ */ p.jsx("div", { className: "-mx-1 mt-2 flex gap-2.5 overflow-x-auto px-1 pb-1.5 scrollbar-none", children: hn.map((g) => {
                  const L = d === g.iso;
                  return /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => ft(g.iso),
                      className: `flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-2xl text-center transition ${L ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black/60 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]"}`,
                      style: L ? { backgroundColor: "#000" } : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("span", { className: "text-[10px] font-medium uppercase leading-none tabular-nums opacity-75", children: g.weekday }),
                        /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-[12px] font-bold leading-tight tabular-nums", children: g.day })
                      ]
                    },
                    g.iso
                  );
                }) })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.time") }),
                d ? _ === "closed" ? /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: D("booking.modal.dayClosed") }) : Array.isArray(_) && _.length === 0 ? /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: D("booking.modal.noSlots") }) : Array.isArray(_) ? /* @__PURE__ */ p.jsx("div", { className: "mt-2 grid w-full max-w-full grid-cols-3 gap-2.5 sm:grid-cols-4", children: _.map((g) => {
                  const L = h === g;
                  return /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => P(g),
                      className: `min-w-0 touch-manipulation rounded-2xl px-2 py-3 text-center text-[14px] font-semibold tabular-nums transition ${L ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]" : "border border-black/[0.08] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)] active:bg-black/[0.03] active:shadow-[0_1px_2px_rgba(0,0,0,0.10)]"}`,
                      style: L ? { backgroundColor: "#000" } : void 0,
                      children: g
                    },
                    g
                  );
                }) }) : /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: D("booking.modal.selectServiceFirst") }) : /* @__PURE__ */ p.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: D("booking.modal.selectDateFirst") })
              ] })
            ] }) : null,
            Z && le === 4 || !Z && le === 3 ? /* @__PURE__ */ p.jsxs("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] font-semibold text-black", children: D("booking.modal.contactDetails") }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.name") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    className: ou,
                    value: k,
                    onChange: (g) => M(g.target.value),
                    autoComplete: "name",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.phone") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "tel",
                    className: ou,
                    value: S,
                    onChange: (g) => R(g.target.value),
                    autoComplete: "tel",
                    inputMode: "tel",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.email") }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "email",
                    inputMode: "email",
                    autoComplete: "email",
                    className: ou,
                    value: E,
                    onChange: (g) => X(g.target.value),
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ p.jsx("label", { className: "block text-[13px] font-semibold text-black", children: D("booking.modal.notes") }),
                /* @__PURE__ */ p.jsx(
                  "textarea",
                  {
                    className: `${ou} resize-none`,
                    rows: 2,
                    value: B,
                    onChange: (g) => V(g.target.value)
                  }
                )
              ] })
            ] }) : null,
            K ? /* @__PURE__ */ p.jsx("p", { className: "rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700", role: "alert", children: K }) : null
          ] }) }),
          !Y && !de ? /* @__PURE__ */ p.jsxs("div", { className: "relative z-[2] shrink-0 border-t border-black/[0.06] bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-5", children: [
            b ? /* @__PURE__ */ p.jsxs("div", { className: "mb-3 px-1", children: [
              /* @__PURE__ */ p.jsx("p", { className: "text-[13px] tabular-nums text-black/50", children: D("booking.modal.totalDuration", { min: Math.max(0, v) }) }),
              /* @__PURE__ */ p.jsx("p", { className: "text-[17px] font-semibold tabular-nums text-black/70 leading-tight", children: D("booking.modal.totalPrice", { price: ot(m) }) }),
              h ? /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 text-[13px] font-semibold tabular-nums text-black", children: D("booking.modal.startTime", { start: h, end: te }) }) : le > 1 ? /* @__PURE__ */ p.jsx("p", { className: "mt-0.5 truncate text-[13px] font-semibold text-black", children: ae.map((g) => g.name).join(" + ") }) : null
            ] }) : null,
            le === 3 && N !== "none" && /* @__PURE__ */ p.jsxs("div", { className: "mb-2.5 space-y-1 text-center", children: [
              /* @__PURE__ */ p.jsxs("p", { className: "flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[#635BFF]", children: [
                /* @__PURE__ */ p.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 60 60", fill: "none", "aria-hidden": !0, children: [
                  /* @__PURE__ */ p.jsx("rect", { width: "60", height: "60", rx: "8", fill: "#635BFF" }),
                  /* @__PURE__ */ p.jsx("path", { d: "M27.5 22.5c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.4 2.7v-9.8c-3.5-1.4-7-2-10.4-2C23.1 11 18 15.2 18 22.9c0 12.1 16.6 10.2 16.6 15.4 0 2-1.7 2.7-4.1 2.7-3.5 0-8-1.5-11.5-3.5v9.9c3.9 1.7 7.9 2.4 11.5 2.4 8.8 0 14.8-4.3 14.8-12.2C45.3 25.4 27.5 27.6 27.5 22.5z", fill: "white" })
                ] }),
                N === "deposit" && j && j > 0 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                  D("booking.modal.depositRequired"),
                  " ",
                  /* @__PURE__ */ p.jsx("strong", { className: "mx-0.5", children: ot(Number(j) || 0) })
                ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                  D("booking.modal.paymentFrom"),
                  " ",
                  /* @__PURE__ */ p.jsx("strong", { className: "mx-0.5", children: ot(m) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsxs("p", { className: "text-[11px] text-black/35", children: [
                D("booking.modal.securePayment"),
                " ",
                /* @__PURE__ */ p.jsx("span", { className: "font-bold text-[#635BFF]", children: "Stripe" })
              ] }),
              A ? /* @__PURE__ */ p.jsx("p", { className: "mx-auto max-w-[320px] text-[11px] leading-relaxed text-black/45", children: Wp({
                cancelPolicyHours: A,
                cancelPolicyAction: T ?? "keep_deposit",
                depositAmountEuros: j
              }) }) : null
            ] }),
            (() => {
              const g = Z ? 4 : 3, L = le === g, W = le === 1 && !b || Z && le === 2 && (!He || I.length === 0) || (Z ? le === 3 : le === 2) && (!d || !h);
              return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => Ae((H) => H > 1 ? H - 1 : H),
                      disabled: le === 1,
                      className: "rounded-full border border-black/10 bg-white py-2.5 text-[14px] font-medium text-black/60 transition disabled:opacity-25 active:scale-[0.98]",
                      children: D("booking.modal.back")
                    }
                  ),
                  L ? /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      type: "submit",
                      form: "salon-booking-form",
                      disabled: $ || !h || !b,
                      className: `flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${lu}`,
                      style: mt,
                      children: [
                        $ ? /* @__PURE__ */ p.jsx(Bp, { className: "h-4 w-4 animate-spin", "aria-hidden": !0 }) : null,
                        D(N !== "none" ? "booking.modal.payAndBook" : "booking.modal.sendRequest")
                      ]
                    }
                  ) : /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        W || Ae((H) => H < g ? H + 1 : H);
                      },
                      disabled: W,
                      className: `rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${lu}`,
                      style: mt,
                      children: D("booking.modal.continue")
                    }
                  )
                ] }),
                L ? /* @__PURE__ */ p.jsxs("p", { className: "mt-2.5 text-center text-[10.5px] leading-snug text-black/35", children: [
                  D("booking.modal.disclaimerPre"),
                  " ",
                  D("booking.modal.disclaimerAccept"),
                  " ",
                  /* @__PURE__ */ p.jsx("a", { href: a, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: D("booking.modal.terms") }),
                  " ",
                  D("booking.modal.smsConsentAnd"),
                  " ",
                  /* @__PURE__ */ p.jsx("a", { href: c, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: D("booking.modal.privacy") }),
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
const Yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SalonBookingModal: Kp
}, Symbol.toStringTag, { value: "Module" }));
