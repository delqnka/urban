var C4 = { exports: {} }, Zp = {}, b4 = { exports: {} }, Bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dx;
function Cw() {
  if (dx) return Bt;
  dx = 1;
  var b = Symbol.for("react.element"), w = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), y = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ae = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), J = Symbol.iterator;
  function pe(N) {
    return N === null || typeof N != "object" ? null : (N = J && N[J] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var ce = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fe = Object.assign, lt = {};
  function qe(N, P, Xe) {
    this.props = N, this.context = P, this.refs = lt, this.updater = Xe || ce;
  }
  qe.prototype.isReactComponent = {}, qe.prototype.setState = function(N, P) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, P, "setState");
  }, qe.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function Ft() {
  }
  Ft.prototype = qe.prototype;
  function He(N, P, Xe) {
    this.props = N, this.context = P, this.refs = lt, this.updater = Xe || ce;
  }
  var ie = He.prototype = new Ft();
  ie.constructor = He, Fe(ie, qe.prototype), ie.isPureReactComponent = !0;
  var Oe = Array.isArray, ge = Object.prototype.hasOwnProperty, Ke = { current: null }, De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function zt(N, P, Xe) {
    var Ve, st = {}, tt = null, ft = null;
    if (P != null) for (Ve in P.ref !== void 0 && (ft = P.ref), P.key !== void 0 && (tt = "" + P.key), P) ge.call(P, Ve) && !De.hasOwnProperty(Ve) && (st[Ve] = P[Ve]);
    var G = arguments.length - 2;
    if (G === 1) st.children = Xe;
    else if (1 < G) {
      for (var dt = Array(G), At = 0; At < G; At++) dt[At] = arguments[At + 2];
      st.children = dt;
    }
    if (N && N.defaultProps) for (Ve in G = N.defaultProps, G) st[Ve] === void 0 && (st[Ve] = G[Ve]);
    return { $$typeof: b, type: N, key: tt, ref: ft, props: st, _owner: Ke.current };
  }
  function it(N, P) {
    return { $$typeof: b, type: N.type, key: P, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ot(N) {
    return typeof N == "object" && N !== null && N.$$typeof === b;
  }
  function Pt(N) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(Xe) {
      return P[Xe];
    });
  }
  var yt = /\/+/g;
  function Be(N, P) {
    return typeof N == "object" && N !== null && N.key != null ? Pt("" + N.key) : P.toString(36);
  }
  function wt(N, P, Xe, Ve, st) {
    var tt = typeof N;
    (tt === "undefined" || tt === "boolean") && (N = null);
    var ft = !1;
    if (N === null) ft = !0;
    else switch (tt) {
      case "string":
      case "number":
        ft = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case b:
          case w:
            ft = !0;
        }
    }
    if (ft) return ft = N, st = st(ft), N = Ve === "" ? "." + Be(ft, 0) : Ve, Oe(st) ? (Xe = "", N != null && (Xe = N.replace(yt, "$&/") + "/"), wt(st, P, Xe, "", function(At) {
      return At;
    })) : st != null && (ot(st) && (st = it(st, Xe + (!st.key || ft && ft.key === st.key ? "" : ("" + st.key).replace(yt, "$&/") + "/") + N)), P.push(st)), 1;
    if (ft = 0, Ve = Ve === "" ? "." : Ve + ":", Oe(N)) for (var G = 0; G < N.length; G++) {
      tt = N[G];
      var dt = Ve + Be(tt, G);
      ft += wt(tt, P, Xe, dt, st);
    }
    else if (dt = pe(N), typeof dt == "function") for (N = dt.call(N), G = 0; !(tt = N.next()).done; ) tt = tt.value, dt = Ve + Be(tt, G++), ft += wt(tt, P, Xe, dt, st);
    else if (tt === "object") throw P = String(N), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function Lt(N, P, Xe) {
    if (N == null) return N;
    var Ve = [], st = 0;
    return wt(N, Ve, "", "", function(tt) {
      return P.call(Xe, tt, st++);
    }), Ve;
  }
  function Dt(N) {
    if (N._status === -1) {
      var P = N._result;
      P = P(), P.then(function(Xe) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = Xe);
      }, function(Xe) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = Xe);
      }), N._status === -1 && (N._status = 0, N._result = P);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var Le = { current: null }, oe = { transition: null }, Ae = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: oe, ReactCurrentOwner: Ke };
  function de() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Bt.Children = { map: Lt, forEach: function(N, P, Xe) {
    Lt(N, function() {
      P.apply(this, arguments);
    }, Xe);
  }, count: function(N) {
    var P = 0;
    return Lt(N, function() {
      P++;
    }), P;
  }, toArray: function(N) {
    return Lt(N, function(P) {
      return P;
    }) || [];
  }, only: function(N) {
    if (!ot(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Bt.Component = qe, Bt.Fragment = E, Bt.Profiler = q, Bt.PureComponent = He, Bt.StrictMode = Y, Bt.Suspense = Q, Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ae, Bt.act = de, Bt.cloneElement = function(N, P, Xe) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var Ve = Fe({}, N.props), st = N.key, tt = N.ref, ft = N._owner;
    if (P != null) {
      if (P.ref !== void 0 && (tt = P.ref, ft = Ke.current), P.key !== void 0 && (st = "" + P.key), N.type && N.type.defaultProps) var G = N.type.defaultProps;
      for (dt in P) ge.call(P, dt) && !De.hasOwnProperty(dt) && (Ve[dt] = P[dt] === void 0 && G !== void 0 ? G[dt] : P[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Ve.children = Xe;
    else if (1 < dt) {
      G = Array(dt);
      for (var At = 0; At < dt; At++) G[At] = arguments[At + 2];
      Ve.children = G;
    }
    return { $$typeof: b, type: N.type, key: st, ref: tt, props: Ve, _owner: ft };
  }, Bt.createContext = function(N) {
    return N = { $$typeof: y, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: X, _context: N }, N.Consumer = N;
  }, Bt.createElement = zt, Bt.createFactory = function(N) {
    var P = zt.bind(null, N);
    return P.type = N, P;
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(N) {
    return { $$typeof: we, render: N };
  }, Bt.isValidElement = ot, Bt.lazy = function(N) {
    return { $$typeof: xe, _payload: { _status: -1, _result: N }, _init: Dt };
  }, Bt.memo = function(N, P) {
    return { $$typeof: ae, type: N, compare: P === void 0 ? null : P };
  }, Bt.startTransition = function(N) {
    var P = oe.transition;
    oe.transition = {};
    try {
      N();
    } finally {
      oe.transition = P;
    }
  }, Bt.unstable_act = de, Bt.useCallback = function(N, P) {
    return Le.current.useCallback(N, P);
  }, Bt.useContext = function(N) {
    return Le.current.useContext(N);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(N) {
    return Le.current.useDeferredValue(N);
  }, Bt.useEffect = function(N, P) {
    return Le.current.useEffect(N, P);
  }, Bt.useId = function() {
    return Le.current.useId();
  }, Bt.useImperativeHandle = function(N, P, Xe) {
    return Le.current.useImperativeHandle(N, P, Xe);
  }, Bt.useInsertionEffect = function(N, P) {
    return Le.current.useInsertionEffect(N, P);
  }, Bt.useLayoutEffect = function(N, P) {
    return Le.current.useLayoutEffect(N, P);
  }, Bt.useMemo = function(N, P) {
    return Le.current.useMemo(N, P);
  }, Bt.useReducer = function(N, P, Xe) {
    return Le.current.useReducer(N, P, Xe);
  }, Bt.useRef = function(N) {
    return Le.current.useRef(N);
  }, Bt.useState = function(N) {
    return Le.current.useState(N);
  }, Bt.useSyncExternalStore = function(N, P, Xe) {
    return Le.current.useSyncExternalStore(N, P, Xe);
  }, Bt.useTransition = function() {
    return Le.current.useTransition();
  }, Bt.version = "18.3.1", Bt;
}
var tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
tv.exports;
var px;
function bw() {
  return px || (px = 1, function(b, w) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", Y = Symbol.for("react.element"), q = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ae = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), qe = Symbol.iterator, Ft = "@@iterator";
      function He(m) {
        if (m === null || typeof m != "object")
          return null;
        var C = qe && m[qe] || m[Ft];
        return typeof C == "function" ? C : null;
      }
      var ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Oe = {
        transition: null
      }, ge = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {}, zt = null;
      function it(m) {
        zt = m;
      }
      De.setExtraStackFrame = function(m) {
        zt = m;
      }, De.getCurrentStack = null, De.getStackAddendum = function() {
        var m = "";
        zt && (m += zt);
        var C = De.getCurrentStack;
        return C && (m += C() || ""), m;
      };
      var ot = !1, Pt = !1, yt = !1, Be = !1, wt = !1, Lt = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: Oe,
        ReactCurrentOwner: Ke
      };
      Lt.ReactDebugCurrentFrame = De, Lt.ReactCurrentActQueue = ge;
      function Dt(m) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), V = 1; V < C; V++)
            z[V - 1] = arguments[V];
          oe("warn", m, z);
        }
      }
      function Le(m) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), V = 1; V < C; V++)
            z[V - 1] = arguments[V];
          oe("error", m, z);
        }
      }
      function oe(m, C, z) {
        {
          var V = Lt.ReactDebugCurrentFrame, se = V.getStackAddendum();
          se !== "" && (C += "%s", z = z.concat([se]));
          var Je = z.map(function(he) {
            return String(he);
          });
          Je.unshift("Warning: " + C), Function.prototype.apply.call(console[m], console, Je);
        }
      }
      var Ae = {};
      function de(m, C) {
        {
          var z = m.constructor, V = z && (z.displayName || z.name) || "ReactClass", se = V + "." + C;
          if (Ae[se])
            return;
          Le("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, V), Ae[se] = !0;
        }
      }
      var N = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, C, z) {
          de(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, C, z, V) {
          de(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, C, z, V) {
          de(m, "setState");
        }
      }, P = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Ve(m, C, z) {
        this.props = m, this.context = C, this.refs = Xe, this.updater = z || N;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(m, C) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, C, "setState");
      }, Ve.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var st = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(m, C) {
          Object.defineProperty(Ve.prototype, m, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in st)
          st.hasOwnProperty(ft) && tt(ft, st[ft]);
      }
      function G() {
      }
      G.prototype = Ve.prototype;
      function dt(m, C, z) {
        this.props = m, this.context = C, this.refs = Xe, this.updater = z || N;
      }
      var At = dt.prototype = new G();
      At.constructor = dt, P(At, Ve.prototype), At.isPureReactComponent = !0;
      function gn() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Sn = Array.isArray;
      function mt(m) {
        return Sn(m);
      }
      function Nt(m) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return z;
        }
      }
      function Kt(m) {
        try {
          return cn(m), !1;
        } catch {
          return !0;
        }
      }
      function cn(m) {
        return "" + m;
      }
      function Gn(m) {
        if (Kt(m))
          return Le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(m)), cn(m);
      }
      function Zr(m, C, z) {
        var V = m.displayName;
        if (V)
          return V;
        var se = C.displayName || C.name || "";
        return se !== "" ? z + "(" + se + ")" : z;
      }
      function Hn(m) {
        return m.displayName || "Context";
      }
      function Dn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && Le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case X:
            return "Fragment";
          case q:
            return "Portal";
          case we:
            return "Profiler";
          case y:
            return "StrictMode";
          case J:
            return "Suspense";
          case pe:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case ae:
              var C = m;
              return Hn(C) + ".Consumer";
            case Q:
              var z = m;
              return Hn(z._context) + ".Provider";
            case xe:
              return Zr(m, m.render, "ForwardRef");
            case ce:
              var V = m.displayName || null;
              return V !== null ? V : Dn(m.type) || "Memo";
            case Fe: {
              var se = m, Je = se._payload, he = se._init;
              try {
                return Dn(he(Je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var En = Object.prototype.hasOwnProperty, Nn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, On, Nr, be;
      be = {};
      function at(m) {
        if (En.call(m, "ref")) {
          var C = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function Rt(m) {
        if (En.call(m, "key")) {
          var C = Object.getOwnPropertyDescriptor(m, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function Vt(m, C) {
        var z = function() {
          On || (On = !0, Le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: z,
          configurable: !0
        });
      }
      function un(m, C) {
        var z = function() {
          Nr || (Nr = !0, Le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: z,
          configurable: !0
        });
      }
      function Z(m) {
        if (typeof m.ref == "string" && Ke.current && m.__self && Ke.current.stateNode !== m.__self) {
          var C = Dn(Ke.current.type);
          be[C] || (Le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, m.ref), be[C] = !0);
        }
      }
      var ke = function(m, C, z, V, se, Je, he) {
        var nt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Y,
          // Built-in properties that belong on the element
          type: m,
          key: C,
          ref: z,
          props: he,
          // Record the component responsible for creating this element.
          _owner: Je
        };
        return nt._store = {}, Object.defineProperty(nt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(nt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: V
        }), Object.defineProperty(nt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: se
        }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
      };
      function pt(m, C, z) {
        var V, se = {}, Je = null, he = null, nt = null, jt = null;
        if (C != null) {
          at(C) && (he = C.ref, Z(C)), Rt(C) && (Gn(C.key), Je = "" + C.key), nt = C.__self === void 0 ? null : C.__self, jt = C.__source === void 0 ? null : C.__source;
          for (V in C)
            En.call(C, V) && !Nn.hasOwnProperty(V) && (se[V] = C[V]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          se.children = z;
        else if (qt > 1) {
          for (var Cn = Array(qt), dn = 0; dn < qt; dn++)
            Cn[dn] = arguments[dn + 2];
          Object.freeze && Object.freeze(Cn), se.children = Cn;
        }
        if (m && m.defaultProps) {
          var _t = m.defaultProps;
          for (V in _t)
            se[V] === void 0 && (se[V] = _t[V]);
        }
        if (Je || he) {
          var pn = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Je && Vt(se, pn), he && un(se, pn);
        }
        return ke(m, Je, he, nt, jt, Ke.current, se);
      }
      function Et(m, C) {
        var z = ke(m.type, C, m.ref, m._self, m._source, m._owner, m.props);
        return z;
      }
      function Qt(m, C, z) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var V, se = P({}, m.props), Je = m.key, he = m.ref, nt = m._self, jt = m._source, qt = m._owner;
        if (C != null) {
          at(C) && (he = C.ref, qt = Ke.current), Rt(C) && (Gn(C.key), Je = "" + C.key);
          var Cn;
          m.type && m.type.defaultProps && (Cn = m.type.defaultProps);
          for (V in C)
            En.call(C, V) && !Nn.hasOwnProperty(V) && (C[V] === void 0 && Cn !== void 0 ? se[V] = Cn[V] : se[V] = C[V]);
        }
        var dn = arguments.length - 2;
        if (dn === 1)
          se.children = z;
        else if (dn > 1) {
          for (var _t = Array(dn), pn = 0; pn < dn; pn++)
            _t[pn] = arguments[pn + 2];
          se.children = _t;
        }
        return ke(m.type, Je, he, nt, jt, qt, se);
      }
      function ln(m) {
        return typeof m == "object" && m !== null && m.$$typeof === Y;
      }
      var Xt = ".", B = ":";
      function ve(m) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, V = m.replace(C, function(se) {
          return z[se];
        });
        return "$" + V;
      }
      var $e = !1, Ie = /\/+/g;
      function Pn(m) {
        return m.replace(Ie, "$&/");
      }
      function ar(m, C) {
        return typeof m == "object" && m !== null && m.key != null ? (Gn(m.key), ve("" + m.key)) : C.toString(36);
      }
      function zn(m, C, z, V, se) {
        var Je = typeof m;
        (Je === "undefined" || Je === "boolean") && (m = null);
        var he = !1;
        if (m === null)
          he = !0;
        else
          switch (Je) {
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case Y:
                case q:
                  he = !0;
              }
          }
        if (he) {
          var nt = m, jt = se(nt), qt = V === "" ? Xt + ar(nt, 0) : V;
          if (mt(jt)) {
            var Cn = "";
            qt != null && (Cn = Pn(qt) + "/"), zn(jt, C, Cn, "", function(Xf) {
              return Xf;
            });
          } else jt != null && (ln(jt) && (jt.key && (!nt || nt.key !== jt.key) && Gn(jt.key), jt = Et(
            jt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (jt.key && (!nt || nt.key !== jt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Pn("" + jt.key) + "/"
            ) : "") + qt
          )), C.push(jt));
          return 1;
        }
        var dn, _t, pn = 0, Mn = V === "" ? Xt : V + B;
        if (mt(m))
          for (var Tu = 0; Tu < m.length; Tu++)
            dn = m[Tu], _t = Mn + ar(dn, Tu), pn += zn(dn, C, z, _t, se);
        else {
          var Ko = He(m);
          if (typeof Ko == "function") {
            var Qi = m;
            Ko === Qi.entries && ($e || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $e = !0);
            for (var Xo = Ko.call(Qi), sl, Kf = 0; !(sl = Xo.next()).done; )
              dn = sl.value, _t = Mn + ar(dn, Kf++), pn += zn(dn, C, z, _t, se);
          } else if (Je === "object") {
            var sc = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pn;
      }
      function ya(m, C, z) {
        if (m == null)
          return m;
        var V = [], se = 0;
        return zn(m, V, "", "", function(Je) {
          return C.call(z, Je, se++);
        }), V;
      }
      function $i(m) {
        var C = 0;
        return ya(m, function() {
          C++;
        }), C;
      }
      function Ii(m, C, z) {
        ya(m, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Ka(m) {
        return ya(m, function(C) {
          return C;
        }) || [];
      }
      function vi(m) {
        if (!ln(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function nl(m) {
        var C = {
          $$typeof: ae,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Q,
          _context: C
        };
        var z = !1, V = !1, se = !1;
        {
          var Je = {
            $$typeof: ae,
            _context: C
          };
          Object.defineProperties(Je, {
            Provider: {
              get: function() {
                return V || (V = !0, Le("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(he) {
                C.Provider = he;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(he) {
                C._currentValue = he;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(he) {
                C._currentValue2 = he;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(he) {
                C._threadCount = he;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Le("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(he) {
                se || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), se = !0);
              }
            }
          }), C.Consumer = Je;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ur = -1, jr = 0, mr = 1, mi = 2;
      function Xa(m) {
        if (m._status === Ur) {
          var C = m._result, z = C();
          if (z.then(function(Je) {
            if (m._status === jr || m._status === Ur) {
              var he = m;
              he._status = mr, he._result = Je;
            }
          }, function(Je) {
            if (m._status === jr || m._status === Ur) {
              var he = m;
              he._status = mi, he._result = Je;
            }
          }), m._status === Ur) {
            var V = m;
            V._status = jr, V._result = z;
          }
        }
        if (m._status === mr) {
          var se = m._result;
          return se === void 0 && Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, se), "default" in se || Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, se), se.default;
        } else
          throw m._result;
      }
      function hi(m) {
        var C = {
          // We use these fields to store the result.
          _status: Ur,
          _result: m
        }, z = {
          $$typeof: Fe,
          _payload: C,
          _init: Xa
        };
        {
          var V, se;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(Je) {
                Le("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = Je, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return se;
              },
              set: function(Je) {
                Le("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), se = Je, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function yi(m) {
        m != null && m.$$typeof === ce ? Le("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? Le("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && Le("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && Le("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: xe,
          render: m
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(V) {
              z = V, !m.name && !m.displayName && (m.displayName = V);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function K(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === X || m === we || wt || m === y || m === J || m === pe || Be || m === lt || ot || Pt || yt || typeof m == "object" && m !== null && (m.$$typeof === Fe || m.$$typeof === ce || m.$$typeof === Q || m.$$typeof === ae || m.$$typeof === xe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === R || m.getModuleId !== void 0));
      }
      function ye(m, C) {
        K(m) || Le("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var z = {
          $$typeof: ce,
          type: m,
          compare: C === void 0 ? null : C
        };
        {
          var V;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(se) {
              V = se, !m.name && !m.displayName && (m.displayName = se);
            }
          });
        }
        return z;
      }
      function Me() {
        var m = ie.current;
        return m === null && Le(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Ct(m) {
        var C = Me();
        if (m._context !== void 0) {
          var z = m._context;
          z.Consumer === m ? Le("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === m && Le("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(m);
      }
      function gt(m) {
        var C = Me();
        return C.useState(m);
      }
      function Ut(m, C, z) {
        var V = Me();
        return V.useReducer(m, C, z);
      }
      function Ot(m) {
        var C = Me();
        return C.useRef(m);
      }
      function Bn(m, C) {
        var z = Me();
        return z.useEffect(m, C);
      }
      function xn(m, C) {
        var z = Me();
        return z.useInsertionEffect(m, C);
      }
      function Rn(m, C) {
        var z = Me();
        return z.useLayoutEffect(m, C);
      }
      function hr(m, C) {
        var z = Me();
        return z.useCallback(m, C);
      }
      function Ja(m, C) {
        var z = Me();
        return z.useMemo(m, C);
      }
      function Za(m, C, z) {
        var V = Me();
        return V.useImperativeHandle(m, C, z);
      }
      function bt(m, C) {
        {
          var z = Me();
          return z.useDebugValue(m, C);
        }
      }
      function kt() {
        var m = Me();
        return m.useTransition();
      }
      function ei(m) {
        var C = Me();
        return C.useDeferredValue(m);
      }
      function rl() {
        var m = Me();
        return m.useId();
      }
      function al(m, C, z) {
        var V = Me();
        return V.useSyncExternalStore(m, C, z);
      }
      var gu = 0, Gl, Su, ea, Wo, zr, lc, oc;
      function ql() {
      }
      ql.__reactDisabledLog = !0;
      function Eu() {
        {
          if (gu === 0) {
            Gl = console.log, Su = console.info, ea = console.warn, Wo = console.error, zr = console.group, lc = console.groupCollapsed, oc = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: ql,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          gu++;
        }
      }
      function ga() {
        {
          if (gu--, gu === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, m, {
                value: Gl
              }),
              info: P({}, m, {
                value: Su
              }),
              warn: P({}, m, {
                value: ea
              }),
              error: P({}, m, {
                value: Wo
              }),
              group: P({}, m, {
                value: zr
              }),
              groupCollapsed: P({}, m, {
                value: lc
              }),
              groupEnd: P({}, m, {
                value: oc
              })
            });
          }
          gu < 0 && Le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = Lt.ReactCurrentDispatcher, ni;
      function Kl(m, C, z) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (se) {
              var V = se.stack.trim().match(/\n( *(at )?)/);
              ni = V && V[1] || "";
            }
          return `
` + ni + m;
        }
      }
      var il = !1, xu;
      {
        var Xl = typeof WeakMap == "function" ? WeakMap : Map;
        xu = new Xl();
      }
      function Jl(m, C) {
        if (!m || il)
          return "";
        {
          var z = xu.get(m);
          if (z !== void 0)
            return z;
        }
        var V;
        il = !0;
        var se = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = ti.current, ti.current = null, Eu();
        try {
          if (C) {
            var he = function() {
              throw Error();
            };
            if (Object.defineProperty(he.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(he, []);
              } catch (Mn) {
                V = Mn;
              }
              Reflect.construct(m, [], he);
            } else {
              try {
                he.call();
              } catch (Mn) {
                V = Mn;
              }
              m.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Mn) {
              V = Mn;
            }
            m();
          }
        } catch (Mn) {
          if (Mn && V && typeof Mn.stack == "string") {
            for (var nt = Mn.stack.split(`
`), jt = V.stack.split(`
`), qt = nt.length - 1, Cn = jt.length - 1; qt >= 1 && Cn >= 0 && nt[qt] !== jt[Cn]; )
              Cn--;
            for (; qt >= 1 && Cn >= 0; qt--, Cn--)
              if (nt[qt] !== jt[Cn]) {
                if (qt !== 1 || Cn !== 1)
                  do
                    if (qt--, Cn--, Cn < 0 || nt[qt] !== jt[Cn]) {
                      var dn = `
` + nt[qt].replace(" at new ", " at ");
                      return m.displayName && dn.includes("<anonymous>") && (dn = dn.replace("<anonymous>", m.displayName)), typeof m == "function" && xu.set(m, dn), dn;
                    }
                  while (qt >= 1 && Cn >= 0);
                break;
              }
          }
        } finally {
          il = !1, ti.current = Je, ga(), Error.prepareStackTrace = se;
        }
        var _t = m ? m.displayName || m.name : "", pn = _t ? Kl(_t) : "";
        return typeof m == "function" && xu.set(m, pn), pn;
      }
      function Yi(m, C, z) {
        return Jl(m, !1);
      }
      function Gf(m) {
        var C = m.prototype;
        return !!(C && C.isReactComponent);
      }
      function Wi(m, C, z) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return Jl(m, Gf(m));
        if (typeof m == "string")
          return Kl(m);
        switch (m) {
          case J:
            return Kl("Suspense");
          case pe:
            return Kl("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case xe:
              return Yi(m.render);
            case ce:
              return Wi(m.type, C, z);
            case Fe: {
              var V = m, se = V._payload, Je = V._init;
              try {
                return Wi(Je(se), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Zt = {}, Zl = Lt.ReactDebugCurrentFrame;
      function Gt(m) {
        if (m) {
          var C = m._owner, z = Wi(m.type, m._source, C ? C.type : null);
          Zl.setExtraStackFrame(z);
        } else
          Zl.setExtraStackFrame(null);
      }
      function Qo(m, C, z, V, se) {
        {
          var Je = Function.call.bind(En);
          for (var he in m)
            if (Je(m, he)) {
              var nt = void 0;
              try {
                if (typeof m[he] != "function") {
                  var jt = Error((V || "React class") + ": " + z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw jt.name = "Invariant Violation", jt;
                }
                nt = m[he](C, he, V, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (qt) {
                nt = qt;
              }
              nt && !(nt instanceof Error) && (Gt(se), Le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", z, he, typeof nt), Gt(null)), nt instanceof Error && !(nt.message in Zt) && (Zt[nt.message] = !0, Gt(se), Le("Failed %s type: %s", z, nt.message), Gt(null));
            }
        }
      }
      function gi(m) {
        if (m) {
          var C = m._owner, z = Wi(m.type, m._source, C ? C.type : null);
          it(z);
        } else
          it(null);
      }
      var ht;
      ht = !1;
      function eo() {
        if (Ke.current) {
          var m = Dn(Ke.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function yr(m) {
        if (m !== void 0) {
          var C = m.fileName.replace(/^.*[\\\/]/, ""), z = m.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Si(m) {
        return m != null ? yr(m.__source) : "";
      }
      var Fr = {};
      function Ei(m) {
        var C = eo();
        if (!C) {
          var z = typeof m == "string" ? m : m.displayName || m.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function Tn(m, C) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var z = Ei(C);
          if (!Fr[z]) {
            Fr[z] = !0;
            var V = "";
            m && m._owner && m._owner !== Ke.current && (V = " It was passed a child from " + Dn(m._owner.type) + "."), gi(m), Le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, V), gi(null);
          }
        }
      }
      function fn(m, C) {
        if (typeof m == "object") {
          if (mt(m))
            for (var z = 0; z < m.length; z++) {
              var V = m[z];
              ln(V) && Tn(V, C);
            }
          else if (ln(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var se = He(m);
            if (typeof se == "function" && se !== m.entries)
              for (var Je = se.call(m), he; !(he = Je.next()).done; )
                ln(he.value) && Tn(he.value, C);
          }
        }
      }
      function Cu(m) {
        {
          var C = m.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === xe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ce))
            z = C.propTypes;
          else
            return;
          if (z) {
            var V = Dn(C);
            Qo(z, m.props, "prop", V, m);
          } else if (C.PropTypes !== void 0 && !ht) {
            ht = !0;
            var se = Dn(C);
            Le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ir(m) {
        {
          for (var C = Object.keys(m.props), z = 0; z < C.length; z++) {
            var V = C[z];
            if (V !== "children" && V !== "key") {
              gi(m), Le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), gi(null);
              break;
            }
          }
          m.ref !== null && (gi(m), Le("Invalid attribute `ref` supplied to `React.Fragment`."), gi(null));
        }
      }
      function Hr(m, C, z) {
        var V = K(m);
        if (!V) {
          var se = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Si(C);
          Je ? se += Je : se += eo();
          var he;
          m === null ? he = "null" : mt(m) ? he = "array" : m !== void 0 && m.$$typeof === Y ? (he = "<" + (Dn(m.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : he = typeof m, Le("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, se);
        }
        var nt = pt.apply(this, arguments);
        if (nt == null)
          return nt;
        if (V)
          for (var jt = 2; jt < arguments.length; jt++)
            fn(arguments[jt], m);
        return m === X ? ir(nt) : Cu(nt), nt;
      }
      var Na = !1;
      function ul(m) {
        var C = Hr.bind(null, m);
        return C.type = m, Na || (Na = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), C;
      }
      function Go(m, C, z) {
        for (var V = Qt.apply(this, arguments), se = 2; se < arguments.length; se++)
          fn(arguments[se], V.type);
        return Cu(V), V;
      }
      function qo(m, C) {
        var z = Oe.transition;
        Oe.transition = {};
        var V = Oe.transition;
        Oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (Oe.transition = z, z === null && V._updatedFibers) {
            var se = V._updatedFibers.size;
            se > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), V._updatedFibers.clear();
          }
        }
      }
      var bu = !1, ll = null;
      function qf(m) {
        if (ll === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = b && b[C];
            ll = z.call(b, "timers").setImmediate;
          } catch {
            ll = function(se) {
              bu === !1 && (bu = !0, typeof MessageChannel > "u" && Le("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = se, Je.port2.postMessage(void 0);
            };
          }
        return ll(m);
      }
      var Oa = 0, ri = !1;
      function xi(m) {
        {
          var C = Oa;
          Oa++, ge.current === null && (ge.current = []);
          var z = ge.isBatchingLegacy, V;
          try {
            if (ge.isBatchingLegacy = !0, V = m(), !z && ge.didScheduleLegacyUpdate) {
              var se = ge.current;
              se !== null && (ge.didScheduleLegacyUpdate = !1, Ru(se));
            }
          } catch (_t) {
            throw Ma(C), _t;
          } finally {
            ge.isBatchingLegacy = z;
          }
          if (V !== null && typeof V == "object" && typeof V.then == "function") {
            var Je = V, he = !1, nt = {
              then: function(_t, pn) {
                he = !0, Je.then(function(Mn) {
                  Ma(C), Oa === 0 ? to(Mn, _t, pn) : _t(Mn);
                }, function(Mn) {
                  Ma(C), pn(Mn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (ri = !0, Le("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var jt = V;
            if (Ma(C), Oa === 0) {
              var qt = ge.current;
              qt !== null && (Ru(qt), ge.current = null);
              var Cn = {
                then: function(_t, pn) {
                  ge.current === null ? (ge.current = [], to(jt, _t, pn)) : _t(jt);
                }
              };
              return Cn;
            } else {
              var dn = {
                then: function(_t, pn) {
                  _t(jt);
                }
              };
              return dn;
            }
          }
        }
      }
      function Ma(m) {
        m !== Oa - 1 && Le("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = m;
      }
      function to(m, C, z) {
        {
          var V = ge.current;
          if (V !== null)
            try {
              Ru(V), qf(function() {
                V.length === 0 ? (ge.current = null, C(m)) : to(m, C, z);
              });
            } catch (se) {
              z(se);
            }
          else
            C(m);
        }
      }
      var no = !1;
      function Ru(m) {
        if (!no) {
          no = !0;
          var C = 0;
          try {
            for (; C < m.length; C++) {
              var z = m[C];
              do
                z = z(!0);
              while (z !== null);
            }
            m.length = 0;
          } catch (V) {
            throw m = m.slice(C + 1), V;
          } finally {
            no = !1;
          }
        }
      }
      var ol = Hr, ro = Go, ao = ul, ai = {
        map: ya,
        forEach: Ii,
        count: $i,
        toArray: Ka,
        only: vi
      };
      w.Children = ai, w.Component = Ve, w.Fragment = X, w.Profiler = we, w.PureComponent = dt, w.StrictMode = y, w.Suspense = J, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, w.act = xi, w.cloneElement = ro, w.createContext = nl, w.createElement = ol, w.createFactory = ao, w.createRef = gn, w.forwardRef = yi, w.isValidElement = ln, w.lazy = hi, w.memo = ye, w.startTransition = qo, w.unstable_act = xi, w.useCallback = hr, w.useContext = Ct, w.useDebugValue = bt, w.useDeferredValue = ei, w.useEffect = Bn, w.useId = rl, w.useImperativeHandle = Za, w.useInsertionEffect = xn, w.useLayoutEffect = Rn, w.useMemo = Ja, w.useReducer = Ut, w.useRef = Ot, w.useState = gt, w.useSyncExternalStore = al, w.useTransition = kt, w.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
process.env.NODE_ENV === "production" ? b4.exports = Cw() : b4.exports = bw();
var fe = b4.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vx;
function Rw() {
  if (vx) return Zp;
  vx = 1;
  var b = fe, w = Symbol.for("react.element"), E = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, q = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(we, Q, ae) {
    var xe, J = {}, pe = null, ce = null;
    ae !== void 0 && (pe = "" + ae), Q.key !== void 0 && (pe = "" + Q.key), Q.ref !== void 0 && (ce = Q.ref);
    for (xe in Q) Y.call(Q, xe) && !X.hasOwnProperty(xe) && (J[xe] = Q[xe]);
    if (we && we.defaultProps) for (xe in Q = we.defaultProps, Q) J[xe] === void 0 && (J[xe] = Q[xe]);
    return { $$typeof: w, type: we, key: pe, ref: ce, props: J, _owner: q.current };
  }
  return Zp.Fragment = E, Zp.jsx = y, Zp.jsxs = y, Zp;
}
var ev = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mx;
function Tw() {
  return mx || (mx = 1, process.env.NODE_ENV !== "production" && function() {
    var b = fe, w = Symbol.for("react.element"), E = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), we = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), Fe = Symbol.iterator, lt = "@@iterator";
    function qe(R) {
      if (R === null || typeof R != "object")
        return null;
      var K = Fe && R[Fe] || R[lt];
      return typeof K == "function" ? K : null;
    }
    var Ft = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function He(R) {
      {
        for (var K = arguments.length, ye = new Array(K > 1 ? K - 1 : 0), Me = 1; Me < K; Me++)
          ye[Me - 1] = arguments[Me];
        ie("error", R, ye);
      }
    }
    function ie(R, K, ye) {
      {
        var Me = Ft.ReactDebugCurrentFrame, Ct = Me.getStackAddendum();
        Ct !== "" && (K += "%s", ye = ye.concat([Ct]));
        var gt = ye.map(function(Ut) {
          return String(Ut);
        });
        gt.unshift("Warning: " + K), Function.prototype.apply.call(console[R], console, gt);
      }
    }
    var Oe = !1, ge = !1, Ke = !1, De = !1, zt = !1, it;
    it = Symbol.for("react.module.reference");
    function ot(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Y || R === X || zt || R === q || R === ae || R === xe || De || R === ce || Oe || ge || Ke || typeof R == "object" && R !== null && (R.$$typeof === pe || R.$$typeof === J || R.$$typeof === y || R.$$typeof === we || R.$$typeof === Q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === it || R.getModuleId !== void 0));
    }
    function Pt(R, K, ye) {
      var Me = R.displayName;
      if (Me)
        return Me;
      var Ct = K.displayName || K.name || "";
      return Ct !== "" ? ye + "(" + Ct + ")" : ye;
    }
    function yt(R) {
      return R.displayName || "Context";
    }
    function Be(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && He("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Y:
          return "Fragment";
        case E:
          return "Portal";
        case X:
          return "Profiler";
        case q:
          return "StrictMode";
        case ae:
          return "Suspense";
        case xe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case we:
            var K = R;
            return yt(K) + ".Consumer";
          case y:
            var ye = R;
            return yt(ye._context) + ".Provider";
          case Q:
            return Pt(R, R.render, "ForwardRef");
          case J:
            var Me = R.displayName || null;
            return Me !== null ? Me : Be(R.type) || "Memo";
          case pe: {
            var Ct = R, gt = Ct._payload, Ut = Ct._init;
            try {
              return Be(Ut(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var wt = Object.assign, Lt = 0, Dt, Le, oe, Ae, de, N, P;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Lt === 0) {
          Dt = console.log, Le = console.info, oe = console.warn, Ae = console.error, de = console.group, N = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Lt++;
      }
    }
    function st() {
      {
        if (Lt--, Lt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, R, {
              value: Dt
            }),
            info: wt({}, R, {
              value: Le
            }),
            warn: wt({}, R, {
              value: oe
            }),
            error: wt({}, R, {
              value: Ae
            }),
            group: wt({}, R, {
              value: de
            }),
            groupCollapsed: wt({}, R, {
              value: N
            }),
            groupEnd: wt({}, R, {
              value: P
            })
          });
        }
        Lt < 0 && He("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = Ft.ReactCurrentDispatcher, ft;
    function G(R, K, ye) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Me = Ct.stack.trim().match(/\n( *(at )?)/);
            ft = Me && Me[1] || "";
          }
        return `
` + ft + R;
      }
    }
    var dt = !1, At;
    {
      var gn = typeof WeakMap == "function" ? WeakMap : Map;
      At = new gn();
    }
    function Sn(R, K) {
      if (!R || dt)
        return "";
      {
        var ye = At.get(R);
        if (ye !== void 0)
          return ye;
      }
      var Me;
      dt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = tt.current, tt.current = null, Ve();
      try {
        if (K) {
          var Ut = function() {
            throw Error();
          };
          if (Object.defineProperty(Ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ut, []);
            } catch (bt) {
              Me = bt;
            }
            Reflect.construct(R, [], Ut);
          } else {
            try {
              Ut.call();
            } catch (bt) {
              Me = bt;
            }
            R.call(Ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            Me = bt;
          }
          R();
        }
      } catch (bt) {
        if (bt && Me && typeof bt.stack == "string") {
          for (var Ot = bt.stack.split(`
`), Bn = Me.stack.split(`
`), xn = Ot.length - 1, Rn = Bn.length - 1; xn >= 1 && Rn >= 0 && Ot[xn] !== Bn[Rn]; )
            Rn--;
          for (; xn >= 1 && Rn >= 0; xn--, Rn--)
            if (Ot[xn] !== Bn[Rn]) {
              if (xn !== 1 || Rn !== 1)
                do
                  if (xn--, Rn--, Rn < 0 || Ot[xn] !== Bn[Rn]) {
                    var hr = `
` + Ot[xn].replace(" at new ", " at ");
                    return R.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", R.displayName)), typeof R == "function" && At.set(R, hr), hr;
                  }
                while (xn >= 1 && Rn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, tt.current = gt, st(), Error.prepareStackTrace = Ct;
      }
      var Ja = R ? R.displayName || R.name : "", Za = Ja ? G(Ja) : "";
      return typeof R == "function" && At.set(R, Za), Za;
    }
    function mt(R, K, ye) {
      return Sn(R, !1);
    }
    function Nt(R) {
      var K = R.prototype;
      return !!(K && K.isReactComponent);
    }
    function Kt(R, K, ye) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Sn(R, Nt(R));
      if (typeof R == "string")
        return G(R);
      switch (R) {
        case ae:
          return G("Suspense");
        case xe:
          return G("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Q:
            return mt(R.render);
          case J:
            return Kt(R.type, K, ye);
          case pe: {
            var Me = R, Ct = Me._payload, gt = Me._init;
            try {
              return Kt(gt(Ct), K, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var cn = Object.prototype.hasOwnProperty, Gn = {}, Zr = Ft.ReactDebugCurrentFrame;
    function Hn(R) {
      if (R) {
        var K = R._owner, ye = Kt(R.type, R._source, K ? K.type : null);
        Zr.setExtraStackFrame(ye);
      } else
        Zr.setExtraStackFrame(null);
    }
    function Dn(R, K, ye, Me, Ct) {
      {
        var gt = Function.call.bind(cn);
        for (var Ut in R)
          if (gt(R, Ut)) {
            var Ot = void 0;
            try {
              if (typeof R[Ut] != "function") {
                var Bn = Error((Me || "React class") + ": " + ye + " type `" + Ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Bn.name = "Invariant Violation", Bn;
              }
              Ot = R[Ut](K, Ut, Me, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xn) {
              Ot = xn;
            }
            Ot && !(Ot instanceof Error) && (Hn(Ct), He("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", ye, Ut, typeof Ot), Hn(null)), Ot instanceof Error && !(Ot.message in Gn) && (Gn[Ot.message] = !0, Hn(Ct), He("Failed %s type: %s", ye, Ot.message), Hn(null));
          }
      }
    }
    var En = Array.isArray;
    function Nn(R) {
      return En(R);
    }
    function On(R) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ye = K && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ye;
      }
    }
    function Nr(R) {
      try {
        return be(R), !1;
      } catch {
        return !0;
      }
    }
    function be(R) {
      return "" + R;
    }
    function at(R) {
      if (Nr(R))
        return He("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(R)), be(R);
    }
    var Rt = Ft.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, Z;
    function ke(R) {
      if (cn.call(R, "ref")) {
        var K = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function pt(R) {
      if (cn.call(R, "key")) {
        var K = Object.getOwnPropertyDescriptor(R, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Et(R, K) {
      typeof R.ref == "string" && Rt.current;
    }
    function Qt(R, K) {
      {
        var ye = function() {
          un || (un = !0, He("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ye.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function ln(R, K) {
      {
        var ye = function() {
          Z || (Z = !0, He("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ye.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var Xt = function(R, K, ye, Me, Ct, gt, Ut) {
      var Ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: R,
        key: K,
        ref: ye,
        props: Ut,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return Ot._store = {}, Object.defineProperty(Ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(Ot.props), Object.freeze(Ot)), Ot;
    };
    function B(R, K, ye, Me, Ct) {
      {
        var gt, Ut = {}, Ot = null, Bn = null;
        ye !== void 0 && (at(ye), Ot = "" + ye), pt(K) && (at(K.key), Ot = "" + K.key), ke(K) && (Bn = K.ref, Et(K, Ct));
        for (gt in K)
          cn.call(K, gt) && !Vt.hasOwnProperty(gt) && (Ut[gt] = K[gt]);
        if (R && R.defaultProps) {
          var xn = R.defaultProps;
          for (gt in xn)
            Ut[gt] === void 0 && (Ut[gt] = xn[gt]);
        }
        if (Ot || Bn) {
          var Rn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ot && Qt(Ut, Rn), Bn && ln(Ut, Rn);
        }
        return Xt(R, Ot, Bn, Ct, Me, Rt.current, Ut);
      }
    }
    var ve = Ft.ReactCurrentOwner, $e = Ft.ReactDebugCurrentFrame;
    function Ie(R) {
      if (R) {
        var K = R._owner, ye = Kt(R.type, R._source, K ? K.type : null);
        $e.setExtraStackFrame(ye);
      } else
        $e.setExtraStackFrame(null);
    }
    var Pn;
    Pn = !1;
    function ar(R) {
      return typeof R == "object" && R !== null && R.$$typeof === w;
    }
    function zn() {
      {
        if (ve.current) {
          var R = Be(ve.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ya(R) {
      return "";
    }
    var $i = {};
    function Ii(R) {
      {
        var K = zn();
        if (!K) {
          var ye = typeof R == "string" ? R : R.displayName || R.name;
          ye && (K = `

Check the top-level render call using <` + ye + ">.");
        }
        return K;
      }
    }
    function Ka(R, K) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ye = Ii(K);
        if ($i[ye])
          return;
        $i[ye] = !0;
        var Me = "";
        R && R._owner && R._owner !== ve.current && (Me = " It was passed a child from " + Be(R._owner.type) + "."), Ie(R), He('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Me), Ie(null);
      }
    }
    function vi(R, K) {
      {
        if (typeof R != "object")
          return;
        if (Nn(R))
          for (var ye = 0; ye < R.length; ye++) {
            var Me = R[ye];
            ar(Me) && Ka(Me, K);
          }
        else if (ar(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ct = qe(R);
          if (typeof Ct == "function" && Ct !== R.entries)
            for (var gt = Ct.call(R), Ut; !(Ut = gt.next()).done; )
              ar(Ut.value) && Ka(Ut.value, K);
        }
      }
    }
    function nl(R) {
      {
        var K = R.type;
        if (K == null || typeof K == "string")
          return;
        var ye;
        if (typeof K == "function")
          ye = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === Q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === J))
          ye = K.propTypes;
        else
          return;
        if (ye) {
          var Me = Be(K);
          Dn(ye, R.props, "prop", Me, R);
        } else if (K.PropTypes !== void 0 && !Pn) {
          Pn = !0;
          var Ct = Be(K);
          He("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && He("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(R) {
      {
        for (var K = Object.keys(R.props), ye = 0; ye < K.length; ye++) {
          var Me = K[ye];
          if (Me !== "children" && Me !== "key") {
            Ie(R), He("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Ie(null);
            break;
          }
        }
        R.ref !== null && (Ie(R), He("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var jr = {};
    function mr(R, K, ye, Me, Ct, gt) {
      {
        var Ut = ot(R);
        if (!Ut) {
          var Ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Bn = ya();
          Bn ? Ot += Bn : Ot += zn();
          var xn;
          R === null ? xn = "null" : Nn(R) ? xn = "array" : R !== void 0 && R.$$typeof === w ? (xn = "<" + (Be(R.type) || "Unknown") + " />", Ot = " Did you accidentally export a JSX literal instead of a component?") : xn = typeof R, He("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xn, Ot);
        }
        var Rn = B(R, K, ye, Ct, gt);
        if (Rn == null)
          return Rn;
        if (Ut) {
          var hr = K.children;
          if (hr !== void 0)
            if (Me)
              if (Nn(hr)) {
                for (var Ja = 0; Ja < hr.length; Ja++)
                  vi(hr[Ja], R);
                Object.freeze && Object.freeze(hr);
              } else
                He("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vi(hr, R);
        }
        if (cn.call(K, "key")) {
          var Za = Be(R), bt = Object.keys(K).filter(function(rl) {
            return rl !== "key";
          }), kt = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jr[Za + kt]) {
            var ei = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            He(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kt, Za, ei, Za), jr[Za + kt] = !0;
          }
        }
        return R === Y ? Ur(Rn) : nl(Rn), Rn;
      }
    }
    function mi(R, K, ye) {
      return mr(R, K, ye, !0);
    }
    function Xa(R, K, ye) {
      return mr(R, K, ye, !1);
    }
    var hi = Xa, yi = mi;
    ev.Fragment = Y, ev.jsx = hi, ev.jsxs = yi;
  }()), ev;
}
process.env.NODE_ENV === "production" ? C4.exports = Rw() : C4.exports = Tw();
var O = C4.exports, R4 = { exports: {} }, Ga = {}, Gh = { exports: {} }, m4 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function ww() {
  return hx || (hx = 1, function(b) {
    function w(oe, Ae) {
      var de = oe.length;
      oe.push(Ae);
      e: for (; 0 < de; ) {
        var N = de - 1 >>> 1, P = oe[N];
        if (0 < q(P, Ae)) oe[N] = Ae, oe[de] = P, de = N;
        else break e;
      }
    }
    function E(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function Y(oe) {
      if (oe.length === 0) return null;
      var Ae = oe[0], de = oe.pop();
      if (de !== Ae) {
        oe[0] = de;
        e: for (var N = 0, P = oe.length, Xe = P >>> 1; N < Xe; ) {
          var Ve = 2 * (N + 1) - 1, st = oe[Ve], tt = Ve + 1, ft = oe[tt];
          if (0 > q(st, de)) tt < P && 0 > q(ft, st) ? (oe[N] = ft, oe[tt] = de, N = tt) : (oe[N] = st, oe[Ve] = de, N = Ve);
          else if (tt < P && 0 > q(ft, de)) oe[N] = ft, oe[tt] = de, N = tt;
          else break e;
        }
      }
      return Ae;
    }
    function q(oe, Ae) {
      var de = oe.sortIndex - Ae.sortIndex;
      return de !== 0 ? de : oe.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var X = performance;
      b.unstable_now = function() {
        return X.now();
      };
    } else {
      var y = Date, we = y.now();
      b.unstable_now = function() {
        return y.now() - we;
      };
    }
    var Q = [], ae = [], xe = 1, J = null, pe = 3, ce = !1, Fe = !1, lt = !1, qe = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(oe) {
      for (var Ae = E(ae); Ae !== null; ) {
        if (Ae.callback === null) Y(ae);
        else if (Ae.startTime <= oe) Y(ae), Ae.sortIndex = Ae.expirationTime, w(Q, Ae);
        else break;
        Ae = E(ae);
      }
    }
    function Oe(oe) {
      if (lt = !1, ie(oe), !Fe) if (E(Q) !== null) Fe = !0, Dt(ge);
      else {
        var Ae = E(ae);
        Ae !== null && Le(Oe, Ae.startTime - oe);
      }
    }
    function ge(oe, Ae) {
      Fe = !1, lt && (lt = !1, Ft(zt), zt = -1), ce = !0;
      var de = pe;
      try {
        for (ie(Ae), J = E(Q); J !== null && (!(J.expirationTime > Ae) || oe && !Pt()); ) {
          var N = J.callback;
          if (typeof N == "function") {
            J.callback = null, pe = J.priorityLevel;
            var P = N(J.expirationTime <= Ae);
            Ae = b.unstable_now(), typeof P == "function" ? J.callback = P : J === E(Q) && Y(Q), ie(Ae);
          } else Y(Q);
          J = E(Q);
        }
        if (J !== null) var Xe = !0;
        else {
          var Ve = E(ae);
          Ve !== null && Le(Oe, Ve.startTime - Ae), Xe = !1;
        }
        return Xe;
      } finally {
        J = null, pe = de, ce = !1;
      }
    }
    var Ke = !1, De = null, zt = -1, it = 5, ot = -1;
    function Pt() {
      return !(b.unstable_now() - ot < it);
    }
    function yt() {
      if (De !== null) {
        var oe = b.unstable_now();
        ot = oe;
        var Ae = !0;
        try {
          Ae = De(!0, oe);
        } finally {
          Ae ? Be() : (Ke = !1, De = null);
        }
      } else Ke = !1;
    }
    var Be;
    if (typeof He == "function") Be = function() {
      He(yt);
    };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), Lt = wt.port2;
      wt.port1.onmessage = yt, Be = function() {
        Lt.postMessage(null);
      };
    } else Be = function() {
      qe(yt, 0);
    };
    function Dt(oe) {
      De = oe, Ke || (Ke = !0, Be());
    }
    function Le(oe, Ae) {
      zt = qe(function() {
        oe(b.unstable_now());
      }, Ae);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, b.unstable_continueExecution = function() {
      Fe || ce || (Fe = !0, Dt(ge));
    }, b.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return pe;
    }, b.unstable_getFirstCallbackNode = function() {
      return E(Q);
    }, b.unstable_next = function(oe) {
      switch (pe) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = pe;
      }
      var de = pe;
      pe = Ae;
      try {
        return oe();
      } finally {
        pe = de;
      }
    }, b.unstable_pauseExecution = function() {
    }, b.unstable_requestPaint = function() {
    }, b.unstable_runWithPriority = function(oe, Ae) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          oe = 3;
      }
      var de = pe;
      pe = oe;
      try {
        return Ae();
      } finally {
        pe = de;
      }
    }, b.unstable_scheduleCallback = function(oe, Ae, de) {
      var N = b.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? N + de : N) : de = N, oe) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = de + P, oe = { id: xe++, callback: Ae, priorityLevel: oe, startTime: de, expirationTime: P, sortIndex: -1 }, de > N ? (oe.sortIndex = de, w(ae, oe), E(Q) === null && oe === E(ae) && (lt ? (Ft(zt), zt = -1) : lt = !0, Le(Oe, de - N))) : (oe.sortIndex = P, w(Q, oe), Fe || ce || (Fe = !0, Dt(ge))), oe;
    }, b.unstable_shouldYield = Pt, b.unstable_wrapCallback = function(oe) {
      var Ae = pe;
      return function() {
        var de = pe;
        pe = Ae;
        try {
          return oe.apply(this, arguments);
        } finally {
          pe = de;
        }
      };
    };
  }(m4)), m4;
}
var h4 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx;
function kw() {
  return yx || (yx = 1, function(b) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, E = 5;
      function Y(Z, ke) {
        var pt = Z.length;
        Z.push(ke), y(Z, ke, pt);
      }
      function q(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function X(Z) {
        if (Z.length === 0)
          return null;
        var ke = Z[0], pt = Z.pop();
        return pt !== ke && (Z[0] = pt, we(Z, pt, 0)), ke;
      }
      function y(Z, ke, pt) {
        for (var Et = pt; Et > 0; ) {
          var Qt = Et - 1 >>> 1, ln = Z[Qt];
          if (Q(ln, ke) > 0)
            Z[Qt] = ke, Z[Et] = ln, Et = Qt;
          else
            return;
        }
      }
      function we(Z, ke, pt) {
        for (var Et = pt, Qt = Z.length, ln = Qt >>> 1; Et < ln; ) {
          var Xt = (Et + 1) * 2 - 1, B = Z[Xt], ve = Xt + 1, $e = Z[ve];
          if (Q(B, ke) < 0)
            ve < Qt && Q($e, B) < 0 ? (Z[Et] = $e, Z[ve] = ke, Et = ve) : (Z[Et] = B, Z[Xt] = ke, Et = Xt);
          else if (ve < Qt && Q($e, ke) < 0)
            Z[Et] = $e, Z[ve] = ke, Et = ve;
          else
            return;
        }
      }
      function Q(Z, ke) {
        var pt = Z.sortIndex - ke.sortIndex;
        return pt !== 0 ? pt : Z.id - ke.id;
      }
      var ae = 1, xe = 2, J = 3, pe = 4, ce = 5;
      function Fe(Z, ke) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var qe = performance;
        b.unstable_now = function() {
          return qe.now();
        };
      } else {
        var Ft = Date, He = Ft.now();
        b.unstable_now = function() {
          return Ft.now() - He;
        };
      }
      var ie = 1073741823, Oe = -1, ge = 250, Ke = 5e3, De = 1e4, zt = ie, it = [], ot = [], Pt = 1, yt = null, Be = J, wt = !1, Lt = !1, Dt = !1, Le = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function de(Z) {
        for (var ke = q(ot); ke !== null; ) {
          if (ke.callback === null)
            X(ot);
          else if (ke.startTime <= Z)
            X(ot), ke.sortIndex = ke.expirationTime, Y(it, ke);
          else
            return;
          ke = q(ot);
        }
      }
      function N(Z) {
        if (Dt = !1, de(Z), !Lt)
          if (q(it) !== null)
            Lt = !0, be(P);
          else {
            var ke = q(ot);
            ke !== null && at(N, ke.startTime - Z);
          }
      }
      function P(Z, ke) {
        Lt = !1, Dt && (Dt = !1, Rt()), wt = !0;
        var pt = Be;
        try {
          var Et;
          if (!w) return Xe(Z, ke);
        } finally {
          yt = null, Be = pt, wt = !1;
        }
      }
      function Xe(Z, ke) {
        var pt = ke;
        for (de(pt), yt = q(it); yt !== null && !(yt.expirationTime > pt && (!Z || Zr())); ) {
          var Et = yt.callback;
          if (typeof Et == "function") {
            yt.callback = null, Be = yt.priorityLevel;
            var Qt = yt.expirationTime <= pt, ln = Et(Qt);
            pt = b.unstable_now(), typeof ln == "function" ? yt.callback = ln : yt === q(it) && X(it), de(pt);
          } else
            X(it);
          yt = q(it);
        }
        if (yt !== null)
          return !0;
        var Xt = q(ot);
        return Xt !== null && at(N, Xt.startTime - pt), !1;
      }
      function Ve(Z, ke) {
        switch (Z) {
          case ae:
          case xe:
          case J:
          case pe:
          case ce:
            break;
          default:
            Z = J;
        }
        var pt = Be;
        Be = Z;
        try {
          return ke();
        } finally {
          Be = pt;
        }
      }
      function st(Z) {
        var ke;
        switch (Be) {
          case ae:
          case xe:
          case J:
            ke = J;
            break;
          default:
            ke = Be;
            break;
        }
        var pt = Be;
        Be = ke;
        try {
          return Z();
        } finally {
          Be = pt;
        }
      }
      function tt(Z) {
        var ke = Be;
        return function() {
          var pt = Be;
          Be = ke;
          try {
            return Z.apply(this, arguments);
          } finally {
            Be = pt;
          }
        };
      }
      function ft(Z, ke, pt) {
        var Et = b.unstable_now(), Qt;
        if (typeof pt == "object" && pt !== null) {
          var ln = pt.delay;
          typeof ln == "number" && ln > 0 ? Qt = Et + ln : Qt = Et;
        } else
          Qt = Et;
        var Xt;
        switch (Z) {
          case ae:
            Xt = Oe;
            break;
          case xe:
            Xt = ge;
            break;
          case ce:
            Xt = zt;
            break;
          case pe:
            Xt = De;
            break;
          case J:
          default:
            Xt = Ke;
            break;
        }
        var B = Qt + Xt, ve = {
          id: Pt++,
          callback: ke,
          priorityLevel: Z,
          startTime: Qt,
          expirationTime: B,
          sortIndex: -1
        };
        return Qt > Et ? (ve.sortIndex = Qt, Y(ot, ve), q(it) === null && ve === q(ot) && (Dt ? Rt() : Dt = !0, at(N, Qt - Et))) : (ve.sortIndex = B, Y(it, ve), !Lt && !wt && (Lt = !0, be(P))), ve;
      }
      function G() {
      }
      function dt() {
        !Lt && !wt && (Lt = !0, be(P));
      }
      function At() {
        return q(it);
      }
      function gn(Z) {
        Z.callback = null;
      }
      function Sn() {
        return Be;
      }
      var mt = !1, Nt = null, Kt = -1, cn = E, Gn = -1;
      function Zr() {
        var Z = b.unstable_now() - Gn;
        return !(Z < cn);
      }
      function Hn() {
      }
      function Dn(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? cn = Math.floor(1e3 / Z) : cn = E;
      }
      var En = function() {
        if (Nt !== null) {
          var Z = b.unstable_now();
          Gn = Z;
          var ke = !0, pt = !0;
          try {
            pt = Nt(ke, Z);
          } finally {
            pt ? Nn() : (mt = !1, Nt = null);
          }
        } else
          mt = !1;
      }, Nn;
      if (typeof Ae == "function")
        Nn = function() {
          Ae(En);
        };
      else if (typeof MessageChannel < "u") {
        var On = new MessageChannel(), Nr = On.port2;
        On.port1.onmessage = En, Nn = function() {
          Nr.postMessage(null);
        };
      } else
        Nn = function() {
          Le(En, 0);
        };
      function be(Z) {
        Nt = Z, mt || (mt = !0, Nn());
      }
      function at(Z, ke) {
        Kt = Le(function() {
          Z(b.unstable_now());
        }, ke);
      }
      function Rt() {
        oe(Kt), Kt = -1;
      }
      var Vt = Hn, un = null;
      b.unstable_IdlePriority = ce, b.unstable_ImmediatePriority = ae, b.unstable_LowPriority = pe, b.unstable_NormalPriority = J, b.unstable_Profiling = un, b.unstable_UserBlockingPriority = xe, b.unstable_cancelCallback = gn, b.unstable_continueExecution = dt, b.unstable_forceFrameRate = Dn, b.unstable_getCurrentPriorityLevel = Sn, b.unstable_getFirstCallbackNode = At, b.unstable_next = st, b.unstable_pauseExecution = G, b.unstable_requestPaint = Vt, b.unstable_runWithPriority = Ve, b.unstable_scheduleCallback = ft, b.unstable_shouldYield = Zr, b.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(h4)), h4;
}
var gx;
function Nx() {
  return gx || (gx = 1, process.env.NODE_ENV === "production" ? Gh.exports = ww() : Gh.exports = kw()), Gh.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function _w() {
  if (Sx) return Ga;
  Sx = 1;
  var b = fe, w = Nx();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Y = /* @__PURE__ */ new Set(), q = {};
  function X(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (q[n] = r, n = 0; n < r.length; n++) Y.add(r[n]);
  }
  var we = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, ae = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xe = {}, J = {};
  function pe(n) {
    return Q.call(J, n) ? !0 : Q.call(xe, n) ? !1 : ae.test(n) ? J[n] = !0 : (xe[n] = !0, !1);
  }
  function ce(n, r, u, o) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Fe(n, r, u, o) {
    if (r === null || typeof r > "u" || ce(n, r, u, o)) return !0;
    if (o) return !1;
    if (u !== null) switch (u.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function lt(n, r, u, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var qe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    qe[n] = new lt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    qe[r] = new lt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    qe[n] = new lt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    qe[n] = new lt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    qe[n] = new lt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    qe[n] = new lt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    qe[n] = new lt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    qe[n] = new lt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    qe[n] = new lt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ft = /[\-:]([a-z])/g;
  function He(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ft,
      He
    );
    qe[r] = new lt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ft, He);
    qe[r] = new lt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ft, He);
    qe[r] = new lt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    qe[n] = new lt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), qe.xlinkHref = new lt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    qe[n] = new lt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ie(n, r, u, o) {
    var c = qe.hasOwnProperty(r) ? qe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Fe(r, u, c, o) && (u = null), o || c === null ? pe(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, o = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, o ? n.setAttributeNS(o, r, u) : n.setAttribute(r, u))));
  }
  var Oe = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = Symbol.for("react.element"), Ke = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), zt = Symbol.for("react.strict_mode"), it = Symbol.for("react.profiler"), ot = Symbol.for("react.provider"), Pt = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), wt = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), oe = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var de = Object.assign, N;
  function P(n) {
    if (N === void 0) try {
      throw Error();
    } catch (u) {
      var r = u.stack.trim().match(/\n( *(at )?)/);
      N = r && r[1] || "";
    }
    return `
` + N + n;
  }
  var Xe = !1;
  function Ve(n, r) {
    if (!n || Xe) return "";
    Xe = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var o = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          o = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, x = d.length - 1; 1 <= h && 0 <= x && c[h] !== d[x]; ) x--;
        for (; 1 <= h && 0 <= x; h--, x--) if (c[h] !== d[x]) {
          if (h !== 1 || x !== 1)
            do
              if (h--, x--, 0 > x || c[h] !== d[x]) {
                var T = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= h && 0 <= x);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function st(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case De:
        return "Fragment";
      case Ke:
        return "Portal";
      case it:
        return "Profiler";
      case zt:
        return "StrictMode";
      case Be:
        return "Suspense";
      case wt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Pt:
        return (n.displayName || "Context") + ".Consumer";
      case ot:
        return (n._context.displayName || "Context") + ".Provider";
      case yt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Lt:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === zt ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function G(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function dt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function At(n) {
    var r = dt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var c = u.get, d = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function gn(n) {
    n._valueTracker || (n._valueTracker = At(n));
  }
  function Sn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var u = r.getValue(), o = "";
    return n && (o = dt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== u ? (r.setValue(n), !0) : !1;
  }
  function mt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Nt(n, r) {
    var u = r.checked;
    return de({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Kt(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    u = G(r.value != null ? r.value : u), n._wrapperState = { initialChecked: o, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function cn(n, r) {
    r = r.checked, r != null && ie(n, "checked", r, !1);
  }
  function Gn(n, r) {
    cn(n, r);
    var u = G(r.value), o = r.type;
    if (u != null) o === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Hn(n, r.type, u) : r.hasOwnProperty("defaultValue") && Hn(n, r.type, G(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Zr(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Hn(n, r, u) {
    (r !== "number" || mt(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var Dn = Array.isArray;
  function En(n, r, u, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < u.length; c++) r["$" + u[c]] = !0;
      for (u = 0; u < n.length; u++) c = r.hasOwnProperty("$" + n[u].value), n[u].selected !== c && (n[u].selected = c), c && o && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + G(u), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === u) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Nn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return de({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function On(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null) throw Error(E(92));
        if (Dn(u)) {
          if (1 < u.length) throw Error(E(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: G(u) };
  }
  function Nr(n, r) {
    var u = G(r.value), o = G(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), o != null && (n.defaultValue = "" + o);
  }
  function be(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function at(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? at(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Vt, un = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Vt = Vt || document.createElement("div"), Vt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Vt.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Z(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ke = {
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
  }, pt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ke).forEach(function(n) {
    pt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ke[r] = ke[n];
    });
  });
  function Et(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || ke.hasOwnProperty(n) && ke[n] ? ("" + r).trim() : r + "px";
  }
  function Qt(n, r) {
    n = n.style;
    for (var u in r) if (r.hasOwnProperty(u)) {
      var o = u.indexOf("--") === 0, c = Et(u, r[u], o);
      u === "float" && (u = "cssFloat"), o ? n.setProperty(u, c) : n[u] = c;
    }
  }
  var ln = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xt(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(E(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(E(62));
    }
  }
  function B(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var ve = null;
  function $e(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ie = null, Pn = null, ar = null;
  function zn(n) {
    if (n = Qe(n)) {
      if (typeof Ie != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = Ln(r), Ie(n.stateNode, n.type, r));
    }
  }
  function ya(n) {
    Pn ? ar ? ar.push(n) : ar = [n] : Pn = n;
  }
  function $i() {
    if (Pn) {
      var n = Pn, r = ar;
      if (ar = Pn = null, zn(n), r) for (n = 0; n < r.length; n++) zn(r[n]);
    }
  }
  function Ii(n, r) {
    return n(r);
  }
  function Ka() {
  }
  var vi = !1;
  function nl(n, r, u) {
    if (vi) return n(r, u);
    vi = !0;
    try {
      return Ii(n, r, u);
    } finally {
      vi = !1, (Pn !== null || ar !== null) && (Ka(), $i());
    }
  }
  function Ur(n, r) {
    var u = n.stateNode;
    if (u === null) return null;
    var o = Ln(u);
    if (o === null) return null;
    u = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (u && typeof u != "function") throw Error(E(231, r, typeof u));
    return u;
  }
  var jr = !1;
  if (we) try {
    var mr = {};
    Object.defineProperty(mr, "passive", { get: function() {
      jr = !0;
    } }), window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
  } catch {
    jr = !1;
  }
  function mi(n, r, u, o, c, d, h, x, T) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, F);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var Xa = !1, hi = null, yi = !1, R = null, K = { onError: function(n) {
    Xa = !0, hi = n;
  } };
  function ye(n, r, u, o, c, d, h, x, T) {
    Xa = !1, hi = null, mi.apply(K, arguments);
  }
  function Me(n, r, u, o, c, d, h, x, T) {
    if (ye.apply(this, arguments), Xa) {
      if (Xa) {
        var F = hi;
        Xa = !1, hi = null;
      } else throw Error(E(198));
      yi || (yi = !0, R = F);
    }
  }
  function Ct(n) {
    var r = n, u = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ut(n) {
    if (Ct(n) !== n) throw Error(E(188));
  }
  function Ot(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ct(n), r === null) throw Error(E(188));
      return r !== n ? null : n;
    }
    for (var u = n, o = r; ; ) {
      var c = u.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          u = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === u) return Ut(c), n;
          if (d === o) return Ut(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (u.return !== o.return) u = c, o = d;
      else {
        for (var h = !1, x = c.child; x; ) {
          if (x === u) {
            h = !0, u = c, o = d;
            break;
          }
          if (x === o) {
            h = !0, o = c, u = d;
            break;
          }
          x = x.sibling;
        }
        if (!h) {
          for (x = d.child; x; ) {
            if (x === u) {
              h = !0, u = d, o = c;
              break;
            }
            if (x === o) {
              h = !0, o = d, u = c;
              break;
            }
            x = x.sibling;
          }
          if (!h) throw Error(E(189));
        }
      }
      if (u.alternate !== o) throw Error(E(190));
    }
    if (u.tag !== 3) throw Error(E(188));
    return u.stateNode.current === u ? n : r;
  }
  function Bn(n) {
    return n = Ot(n), n !== null ? xn(n) : null;
  }
  function xn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = xn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Rn = w.unstable_scheduleCallback, hr = w.unstable_cancelCallback, Ja = w.unstable_shouldYield, Za = w.unstable_requestPaint, bt = w.unstable_now, kt = w.unstable_getCurrentPriorityLevel, ei = w.unstable_ImmediatePriority, rl = w.unstable_UserBlockingPriority, al = w.unstable_NormalPriority, gu = w.unstable_LowPriority, Gl = w.unstable_IdlePriority, Su = null, ea = null;
  function Wo(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function") try {
      ea.onCommitFiberRoot(Su, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var zr = Math.clz32 ? Math.clz32 : ql, lc = Math.log, oc = Math.LN2;
  function ql(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / oc | 0) | 0;
  }
  var Eu = 64, ga = 4194304;
  function ti(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ni(n, r) {
    var u = n.pendingLanes;
    if (u === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = u & 268435455;
    if (h !== 0) {
      var x = h & ~c;
      x !== 0 ? o = ti(x) : (d &= h, d !== 0 && (o = ti(d)));
    } else h = u & ~c, h !== 0 ? o = ti(h) : d !== 0 && (o = ti(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= u & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) u = 31 - zr(r), c = 1 << u, o |= n[u], r &= ~c;
    return o;
  }
  function Kl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function il(n, r) {
    for (var u = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - zr(d), x = 1 << h, T = c[h];
      T === -1 ? (!(x & u) || x & o) && (c[h] = Kl(x, r)) : T <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function xu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xl() {
    var n = Eu;
    return Eu <<= 1, !(Eu & 4194240) && (Eu = 64), n;
  }
  function Jl(n) {
    for (var r = [], u = 0; 31 > u; u++) r.push(n);
    return r;
  }
  function Yi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - zr(r), n[r] = u;
  }
  function Gf(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - zr(u), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function Wi(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var o = 31 - zr(u), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), u &= ~c;
    }
  }
  var Zt = 0;
  function Zl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gt, Qo, gi, ht, eo, yr = !1, Si = [], Fr = null, Ei = null, Tn = null, fn = /* @__PURE__ */ new Map(), Cu = /* @__PURE__ */ new Map(), ir = [], Hr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Fr = null;
        break;
      case "dragenter":
      case "dragleave":
        Ei = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        fn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cu.delete(r.pointerId);
    }
  }
  function ul(n, r, u, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Qe(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Go(n, r, u, o, c) {
    switch (r) {
      case "focusin":
        return Fr = ul(Fr, n, r, u, o, c), !0;
      case "dragenter":
        return Ei = ul(Ei, n, r, u, o, c), !0;
      case "mouseover":
        return Tn = ul(Tn, n, r, u, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return fn.set(d, ul(fn.get(d) || null, n, r, u, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cu.set(d, ul(Cu.get(d) || null, n, r, u, o, c)), !0;
    }
    return !1;
  }
  function qo(n) {
    var r = ml(n.target);
    if (r !== null) {
      var u = Ct(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = gt(u), r !== null) {
            n.blockedOn = r, eo(n.priority, function() {
              gi(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function bu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = ro(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var o = new u.constructor(u.type, u);
        ve = o, u.target.dispatchEvent(o), ve = null;
      } else return r = Qe(u), r !== null && Qo(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function ll(n, r, u) {
    bu(n) && u.delete(r);
  }
  function qf() {
    yr = !1, Fr !== null && bu(Fr) && (Fr = null), Ei !== null && bu(Ei) && (Ei = null), Tn !== null && bu(Tn) && (Tn = null), fn.forEach(ll), Cu.forEach(ll);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, yr || (yr = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, qf)));
  }
  function ri(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < Si.length) {
      Oa(Si[0], n);
      for (var u = 1; u < Si.length; u++) {
        var o = Si[u];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Fr !== null && Oa(Fr, n), Ei !== null && Oa(Ei, n), Tn !== null && Oa(Tn, n), fn.forEach(r), Cu.forEach(r), u = 0; u < ir.length; u++) o = ir[u], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ir.length && (u = ir[0], u.blockedOn === null); ) qo(u), u.blockedOn === null && ir.shift();
  }
  var xi = Oe.ReactCurrentBatchConfig, Ma = !0;
  function to(n, r, u, o) {
    var c = Zt, d = xi.transition;
    xi.transition = null;
    try {
      Zt = 1, Ru(n, r, u, o);
    } finally {
      Zt = c, xi.transition = d;
    }
  }
  function no(n, r, u, o) {
    var c = Zt, d = xi.transition;
    xi.transition = null;
    try {
      Zt = 4, Ru(n, r, u, o);
    } finally {
      Zt = c, xi.transition = d;
    }
  }
  function Ru(n, r, u, o) {
    if (Ma) {
      var c = ro(n, r, u, o);
      if (c === null) Ec(n, r, o, ol, u), Na(n, o);
      else if (Go(c, n, r, u, o)) o.stopPropagation();
      else if (Na(n, o), r & 4 && -1 < Hr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Qe(c);
          if (d !== null && Gt(d), d = ro(n, r, u, o), d === null && Ec(n, r, o, ol, u), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ec(n, r, o, null, u);
    }
  }
  var ol = null;
  function ro(n, r, u, o) {
    if (ol = null, n = $e(o), n = ml(n), n !== null) if (r = Ct(n), r === null) n = null;
    else if (u = r.tag, u === 13) {
      if (n = gt(r), n !== null) return n;
      n = null;
    } else if (u === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ol = n, null;
  }
  function ao(n) {
    switch (n) {
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
        switch (kt()) {
          case ei:
            return 1;
          case rl:
            return 4;
          case al:
          case gu:
            return 16;
          case Gl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, m = null, C = null;
  function z() {
    if (C) return C;
    var n, r = m, u = r.length, o, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++) ;
    var h = u - n;
    for (o = 1; o <= h && r[u - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function V(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function se() {
    return !0;
  }
  function Je() {
    return !1;
  }
  function he(n) {
    function r(u, o, c, d, h) {
      this._reactName = u, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (u = n[x], this[x] = u ? u(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? se : Je, this.isPropagationStopped = Je, this;
    }
    return de(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = se);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = se);
    }, persist: function() {
    }, isPersistent: se }), r;
  }
  var nt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, jt = he(nt), qt = de({}, nt, { view: 0, detail: 0 }), Cn = he(qt), dn, _t, pn, Mn = de({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pn && (pn && n.type === "mousemove" ? (dn = n.screenX - pn.screenX, _t = n.screenY - pn.screenY) : _t = dn = 0, pn = n), dn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : _t;
  } }), Tu = he(Mn), Ko = de({}, Mn, { dataTransfer: 0 }), Qi = he(Ko), Xo = de({}, qt, { relatedTarget: 0 }), sl = he(Xo), Kf = de({}, nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = he(Kf), Xf = de({}, nt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), rv = he(Xf), Jf = de({}, nt, { data: 0 }), Zf = he(Jf), av = {
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
  }, iv = {
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
  }, Zh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zh[n]) ? !!r[n] : !1;
  }
  function ed() {
    return Gi;
  }
  var td = de({}, qt, { key: function(n) {
    if (n.key) {
      var r = av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = V(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? iv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ed, charCode: function(n) {
    return n.type === "keypress" ? V(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? V(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), nd = he(td), rd = de({}, Mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uv = he(rd), cc = de({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), lv = he(cc), ta = de({}, nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qi = he(ta), qn = de({}, Mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = he(qn), ad = [9, 13, 27, 32], io = we && "CompositionEvent" in window, Jo = null;
  we && "documentMode" in document && (Jo = document.documentMode);
  var Zo = we && "TextEvent" in window && !Jo, ov = we && (!io || Jo && 8 < Jo && 11 >= Jo), sv = " ", fc = !1;
  function cv(n, r) {
    switch (n) {
      case "keyup":
        return ad.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function fv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uo = !1;
  function dv(n, r) {
    switch (n) {
      case "compositionend":
        return fv(r);
      case "keypress":
        return r.which !== 32 ? null : (fc = !0, sv);
      case "textInput":
        return n = r.data, n === sv && fc ? null : n;
      default:
        return null;
    }
  }
  function ey(n, r) {
    if (uo) return n === "compositionend" || !io && cv(n, r) ? (n = z(), C = m = ai = null, uo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ty = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ty[n.type] : r === "textarea";
  }
  function id(n, r, u, o) {
    ya(o), r = is(r, "onChange"), 0 < r.length && (u = new jt("onChange", "change", null, u, o), n.push({ event: u, listeners: r }));
  }
  var Ci = null, cl = null;
  function vv(n) {
    pl(n, 0);
  }
  function es(n) {
    var r = ui(n);
    if (Sn(r)) return n;
  }
  function ny(n, r) {
    if (n === "change") return r;
  }
  var mv = !1;
  if (we) {
    var ud;
    if (we) {
      var ld = "oninput" in document;
      if (!ld) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), ld = typeof hv.oninput == "function";
      }
      ud = ld;
    } else ud = !1;
    mv = ud && (!document.documentMode || 9 < document.documentMode);
  }
  function yv() {
    Ci && (Ci.detachEvent("onpropertychange", gv), cl = Ci = null);
  }
  function gv(n) {
    if (n.propertyName === "value" && es(cl)) {
      var r = [];
      id(r, cl, n, $e(n)), nl(vv, r);
    }
  }
  function ry(n, r, u) {
    n === "focusin" ? (yv(), Ci = r, cl = u, Ci.attachEvent("onpropertychange", gv)) : n === "focusout" && yv();
  }
  function Sv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(cl);
  }
  function ay(n, r) {
    if (n === "click") return es(r);
  }
  function Ev(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function iy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : iy;
  function ts(n, r) {
    if (ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var u = Object.keys(n), o = Object.keys(r);
    if (u.length !== o.length) return !1;
    for (o = 0; o < u.length; o++) {
      var c = u[o];
      if (!Q.call(r, c) || !ii(n[c], r[c])) return !1;
    }
    return !0;
  }
  function xv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function dc(n, r) {
    var u = xv(n);
    n = 0;
    for (var o; u; ) {
      if (u.nodeType === 3) {
        if (o = n + u.textContent.length, n <= r && o >= r) return { node: u, offset: r - n };
        n = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = xv(u);
    }
  }
  function wu(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? wu(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ns() {
    for (var n = window, r = mt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) n = r.contentWindow;
      else break;
      r = mt(n.document);
    }
    return r;
  }
  function pc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ns(), u = n.focusedElem, o = n.selectionRange;
    if (r !== u && u && u.ownerDocument && wu(u.ownerDocument.documentElement, u)) {
      if (o !== null && pc(u)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in u) u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = u.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dc(u, d);
          var h = dc(
            u,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++) n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uy = we && "documentMode" in document && 11 >= document.documentMode, oo = null, od = null, rs = null, sd = !1;
  function cd(n, r, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    sd || oo == null || oo !== mt(o) || (o = oo, "selectionStart" in o && pc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ts(rs, o) || (rs = o, o = is(od, "onSelect"), 0 < o.length && (r = new jt("onSelect", "select", null, r, u), n.push({ event: r, listeners: o }), r.target = oo)));
  }
  function vc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var fl = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, gr = {}, fd = {};
  we && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function mc(n) {
    if (gr[n]) return gr[n];
    if (!fl[n]) return n;
    var r = fl[n], u;
    for (u in r) if (r.hasOwnProperty(u) && u in fd) return gr[n] = r[u];
    return n;
  }
  var Cv = mc("animationend"), bv = mc("animationiteration"), Rv = mc("animationstart"), Tv = mc("transitionend"), dd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function La(n, r) {
    dd.set(n, r), X(r, [n]);
  }
  for (var pd = 0; pd < hc.length; pd++) {
    var dl = hc[pd], ly = dl.toLowerCase(), oy = dl[0].toUpperCase() + dl.slice(1);
    La(ly, "on" + oy);
  }
  La(Cv, "onAnimationEnd"), La(bv, "onAnimationIteration"), La(Rv, "onAnimationStart"), La("dblclick", "onDoubleClick"), La("focusin", "onFocus"), La("focusout", "onBlur"), La(Tv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), X("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), X("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), X("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), X("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), X("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), X("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function yc(n, r, u) {
    var o = n.type || "unknown-event";
    n.currentTarget = u, Me(o, r, void 0, n), n.currentTarget = null;
  }
  function pl(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var x = o[h], T = x.instance, F = x.currentTarget;
          if (x = x.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, x, F), d = T;
        }
        else for (h = 0; h < o.length; h++) {
          if (x = o[h], T = x.instance, F = x.currentTarget, x = x.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, x, F), d = T;
        }
      }
    }
    if (yi) throw n = R, yi = !1, R = null, n;
  }
  function on(n, r) {
    var u = r[os];
    u === void 0 && (u = r[os] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (wv(r, n, 2, !1), u.add(o));
  }
  function gc(n, r, u) {
    var o = 0;
    r && (o |= 4), wv(u, n, o, r);
  }
  var Sc = "_reactListening" + Math.random().toString(36).slice(2);
  function so(n) {
    if (!n[Sc]) {
      n[Sc] = !0, Y.forEach(function(u) {
        u !== "selectionchange" && (vd.has(u) || gc(u, !1, n), gc(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Sc] || (r[Sc] = !0, gc("selectionchange", !1, r));
    }
  }
  function wv(n, r, u, o) {
    switch (ao(r)) {
      case 1:
        var c = to;
        break;
      case 4:
        c = no;
        break;
      default:
        c = Ru;
    }
    u = c.bind(null, r, u, n), c = void 0, !jr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
  }
  function Ec(n, r, u, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var x = o.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var T = h.tag;
          if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          h = h.return;
        }
        for (; x !== null; ) {
          if (h = ml(x), h === null) return;
          if (T = h.tag, T === 5 || T === 6) {
            o = d = h;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    nl(function() {
      var F = d, ne = $e(u), ue = [];
      e: {
        var te = dd.get(n);
        if (te !== void 0) {
          var Re = jt, Ue = n;
          switch (n) {
            case "keypress":
              if (V(u) === 0) break e;
            case "keydown":
            case "keyup":
              Re = nd;
              break;
            case "focusin":
              Ue = "focus", Re = sl;
              break;
            case "focusout":
              Ue = "blur", Re = sl;
              break;
            case "beforeblur":
            case "afterblur":
              Re = sl;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Re = Tu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Re = Qi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = lv;
              break;
            case Cv:
            case bv:
            case Rv:
              Re = sc;
              break;
            case Tv:
              Re = qi;
              break;
            case "scroll":
              Re = Cn;
              break;
            case "wheel":
              Re = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              Re = rv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = uv;
          }
          var Pe = (r & 4) !== 0, Wn = !Pe && n === "scroll", M = Pe ? te !== null ? te + "Capture" : null : te;
          Pe = [];
          for (var _ = F, U; _ !== null; ) {
            U = _;
            var re = U.stateNode;
            if (U.tag === 5 && re !== null && (U = re, M !== null && (re = Ur(_, M), re != null && Pe.push(co(_, re, U)))), Wn) break;
            _ = _.return;
          }
          0 < Pe.length && (te = new Re(te, Ue, null, u, ne), ue.push({ event: te, listeners: Pe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", te && u !== ve && (Ue = u.relatedTarget || u.fromElement) && (ml(Ue) || Ue[Xi])) break e;
          if ((Re || te) && (te = ne.window === ne ? ne : (te = ne.ownerDocument) ? te.defaultView || te.parentWindow : window, Re ? (Ue = u.relatedTarget || u.toElement, Re = F, Ue = Ue ? ml(Ue) : null, Ue !== null && (Wn = Ct(Ue), Ue !== Wn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (Re = null, Ue = F), Re !== Ue)) {
            if (Pe = Tu, re = "onMouseLeave", M = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Pe = uv, re = "onPointerLeave", M = "onPointerEnter", _ = "pointer"), Wn = Re == null ? te : ui(Re), U = Ue == null ? te : ui(Ue), te = new Pe(re, _ + "leave", Re, u, ne), te.target = Wn, te.relatedTarget = U, re = null, ml(ne) === F && (Pe = new Pe(M, _ + "enter", Ue, u, ne), Pe.target = U, Pe.relatedTarget = Wn, re = Pe), Wn = re, Re && Ue) t: {
              for (Pe = Re, M = Ue, _ = 0, U = Pe; U; U = ku(U)) _++;
              for (U = 0, re = M; re; re = ku(re)) U++;
              for (; 0 < _ - U; ) Pe = ku(Pe), _--;
              for (; 0 < U - _; ) M = ku(M), U--;
              for (; _--; ) {
                if (Pe === M || M !== null && Pe === M.alternate) break t;
                Pe = ku(Pe), M = ku(M);
              }
              Pe = null;
            }
            else Pe = null;
            Re !== null && kv(ue, te, Re, Pe, !1), Ue !== null && Wn !== null && kv(ue, Wn, Ue, Pe, !0);
          }
        }
        e: {
          if (te = F ? ui(F) : window, Re = te.nodeName && te.nodeName.toLowerCase(), Re === "select" || Re === "input" && te.type === "file") var je = ny;
          else if (pv(te)) if (mv) je = Ev;
          else {
            je = Sv;
            var et = ry;
          }
          else (Re = te.nodeName) && Re.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (je = ay);
          if (je && (je = je(n, F))) {
            id(ue, je, u, ne);
            break e;
          }
          et && et(n, te, F), n === "focusout" && (et = te._wrapperState) && et.controlled && te.type === "number" && Hn(te, "number", te.value);
        }
        switch (et = F ? ui(F) : window, n) {
          case "focusin":
            (pv(et) || et.contentEditable === "true") && (oo = et, od = F, rs = null);
            break;
          case "focusout":
            rs = od = oo = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, cd(ue, u, ne);
            break;
          case "selectionchange":
            if (uy) break;
          case "keydown":
          case "keyup":
            cd(ue, u, ne);
        }
        var rt;
        if (io) e: {
          switch (n) {
            case "compositionstart":
              var vt = "onCompositionStart";
              break e;
            case "compositionend":
              vt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              vt = "onCompositionUpdate";
              break e;
          }
          vt = void 0;
        }
        else uo ? cv(n, u) && (vt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (vt = "onCompositionStart");
        vt && (ov && u.locale !== "ko" && (uo || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && uo && (rt = z()) : (ai = ne, m = "value" in ai ? ai.value : ai.textContent, uo = !0)), et = is(F, vt), 0 < et.length && (vt = new Zf(vt, n, null, u, ne), ue.push({ event: vt, listeners: et }), rt ? vt.data = rt : (rt = fv(u), rt !== null && (vt.data = rt)))), (rt = Zo ? dv(n, u) : ey(n, u)) && (F = is(F, "onBeforeInput"), 0 < F.length && (ne = new Zf("onBeforeInput", "beforeinput", null, u, ne), ue.push({ event: ne, listeners: F }), ne.data = rt));
      }
      pl(ue, r);
    });
  }
  function co(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function is(n, r) {
    for (var u = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ur(n, u), d != null && o.unshift(co(n, d, c)), d = Ur(n, r), d != null && o.push(co(n, d, c))), n = n.return;
    }
    return o;
  }
  function ku(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kv(n, r, u, o, c) {
    for (var d = r._reactName, h = []; u !== null && u !== o; ) {
      var x = u, T = x.alternate, F = x.stateNode;
      if (T !== null && T === o) break;
      x.tag === 5 && F !== null && (x = F, c ? (T = Ur(u, d), T != null && h.unshift(co(u, T, x))) : c || (T = Ur(u, d), T != null && h.push(co(u, T, x)))), u = u.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var _v = /\r\n?/g, sy = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(_v, `
`).replace(sy, "");
  }
  function xc(n, r, u) {
    if (r = Dv(r), Dv(n) !== r && u) throw Error(E(425));
  }
  function _u() {
  }
  var us = null, vl = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var bc = typeof setTimeout == "function" ? setTimeout : void 0, md = typeof clearTimeout == "function" ? clearTimeout : void 0, Nv = typeof Promise == "function" ? Promise : void 0, fo = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nv < "u" ? function(n) {
    return Nv.resolve(null).then(n).catch(Rc);
  } : bc;
  function Rc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function po(n, r) {
    var u = r, o = 0;
    do {
      var c = u.nextSibling;
      if (n.removeChild(u), c && c.nodeType === 8) if (u = c.data, u === "/$") {
        if (o === 0) {
          n.removeChild(c), ri(r);
          return;
        }
        o--;
      } else u !== "$" && u !== "$?" && u !== "$!" || o++;
      u = c;
    } while (u);
    ri(r);
  }
  function bi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ov(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0) return n;
          r--;
        } else u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Du = Math.random().toString(36).slice(2), Ri = "__reactFiber$" + Du, ls = "__reactProps$" + Du, Xi = "__reactContainer$" + Du, os = "__reactEvents$" + Du, vo = "__reactListeners$" + Du, cy = "__reactHandles$" + Du;
  function ml(n) {
    var r = n[Ri];
    if (r) return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Xi] || u[Ri]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null) for (n = Ov(n); n !== null; ) {
          if (u = n[Ri]) return u;
          n = Ov(n);
        }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Qe(n) {
    return n = n[Ri] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ui(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function Ln(n) {
    return n[ls] || null;
  }
  var $t = [], Aa = -1;
  function Ua(n) {
    return { current: n };
  }
  function bn(n) {
    0 > Aa || (n.current = $t[Aa], $t[Aa] = null, Aa--);
  }
  function We(n, r) {
    Aa++, $t[Aa] = n.current, n.current = r;
  }
  var Or = {}, Fn = Ua(Or), ur = Ua(!1), na = Or;
  function ra(n, r) {
    var u = n.type.contextTypes;
    if (!u) return Or;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in u) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Kn(n) {
    return n = n.childContextTypes, n != null;
  }
  function mo() {
    bn(ur), bn(Fn);
  }
  function Mv(n, r, u) {
    if (Fn.current !== Or) throw Error(E(168));
    We(Fn, r), We(ur, u);
  }
  function ss(n, r, u) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return u;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(E(108, ft(n) || "Unknown", c));
    return de({}, u, o);
  }
  function cr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Or, na = Fn.current, We(Fn, n), We(ur, ur.current), !0;
  }
  function Tc(n, r, u) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    u ? (n = ss(n, r, na), o.__reactInternalMemoizedMergedChildContext = n, bn(ur), bn(Fn), We(Fn, n)) : bn(ur), We(ur, u);
  }
  var Ti = null, ho = !1, Ji = !1;
  function wc(n) {
    Ti === null ? Ti = [n] : Ti.push(n);
  }
  function Nu(n) {
    ho = !0, wc(n);
  }
  function wi() {
    if (!Ji && Ti !== null) {
      Ji = !0;
      var n = 0, r = Zt;
      try {
        var u = Ti;
        for (Zt = 1; n < u.length; n++) {
          var o = u[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ti = null, ho = !1;
      } catch (c) {
        throw Ti !== null && (Ti = Ti.slice(n + 1)), Rn(ei, wi), c;
      } finally {
        Zt = r, Ji = !1;
      }
    }
    return null;
  }
  var Ou = [], Mu = 0, Lu = null, Zi = 0, Xn = [], ja = 0, Sa = null, ki = 1, _i = "";
  function hl(n, r) {
    Ou[Mu++] = Zi, Ou[Mu++] = Lu, Lu = n, Zi = r;
  }
  function Lv(n, r, u) {
    Xn[ja++] = ki, Xn[ja++] = _i, Xn[ja++] = Sa, Sa = n;
    var o = ki;
    n = _i;
    var c = 32 - zr(o) - 1;
    o &= ~(1 << c), u += 1;
    var d = 32 - zr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, ki = 1 << 32 - zr(r) + c | u << c | o, _i = d + n;
    } else ki = 1 << d | u << c | o, _i = n;
  }
  function kc(n) {
    n.return !== null && (hl(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Lu; ) Lu = Ou[--Mu], Ou[Mu] = null, Zi = Ou[--Mu], Ou[Mu] = null;
    for (; n === Sa; ) Sa = Xn[--ja], Xn[ja] = null, _i = Xn[--ja], Xn[ja] = null, ki = Xn[--ja], Xn[ja] = null;
  }
  var aa = null, ia = null, kn = !1, za = null;
  function hd(n, r) {
    var u = Va(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Av(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, aa = n, ia = bi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, aa = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Sa !== null ? { id: ki, overflow: _i } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Va(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, aa = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gd(n) {
    if (kn) {
      var r = ia;
      if (r) {
        var u = r;
        if (!Av(n, r)) {
          if (yd(n)) throw Error(E(418));
          r = bi(u.nextSibling);
          var o = aa;
          r && Av(n, r) ? hd(o, u) : (n.flags = n.flags & -4097 | 2, kn = !1, aa = n);
        }
      } else {
        if (yd(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, kn = !1, aa = n;
      }
    }
  }
  function lr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    aa = n;
  }
  function Dc(n) {
    if (n !== aa) return !1;
    if (!kn) return lr(n), kn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = ia)) {
      if (yd(n)) throw cs(), Error(E(418));
      for (; r; ) hd(n, r), r = bi(r.nextSibling);
    }
    if (lr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                ia = bi(n.nextSibling);
                break e;
              }
              r--;
            } else u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else ia = aa ? bi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function cs() {
    for (var n = ia; n; ) n = bi(n.nextSibling);
  }
  function Au() {
    ia = aa = null, kn = !1;
  }
  function eu(n) {
    za === null ? za = [n] : za.push(n);
  }
  var fy = Oe.ReactCurrentBatchConfig;
  function yl(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(E(309));
          var o = u.stateNode;
        }
        if (!o) throw Error(E(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var x = c.refs;
          h === null ? delete x[d] : x[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(E(284));
      if (!u._owner) throw Error(E(290, n));
    }
    return n;
  }
  function Nc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(E(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function gl(n) {
    function r(M, _) {
      if (n) {
        var U = M.deletions;
        U === null ? (M.deletions = [_], M.flags |= 16) : U.push(_);
      }
    }
    function u(M, _) {
      if (!n) return null;
      for (; _ !== null; ) r(M, _), _ = _.sibling;
      return null;
    }
    function o(M, _) {
      for (M = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? M.set(_.key, _) : M.set(_.index, _), _ = _.sibling;
      return M;
    }
    function c(M, _) {
      return M = Vu(M, _), M.index = 0, M.sibling = null, M;
    }
    function d(M, _, U) {
      return M.index = U, n ? (U = M.alternate, U !== null ? (U = U.index, U < _ ? (M.flags |= 2, _) : U) : (M.flags |= 2, _)) : (M.flags |= 1048576, _);
    }
    function h(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function x(M, _, U, re) {
      return _ === null || _.tag !== 6 ? (_ = qd(U, M.mode, re), _.return = M, _) : (_ = c(_, U), _.return = M, _);
    }
    function T(M, _, U, re) {
      var je = U.type;
      return je === De ? ne(M, _, U.props.children, re, U.key) : _ !== null && (_.elementType === je || typeof je == "object" && je !== null && je.$$typeof === Dt && Uv(je) === _.type) ? (re = c(_, U.props), re.ref = yl(M, _, U), re.return = M, re) : (re = Ps(U.type, U.key, U.props, null, M.mode, re), re.ref = yl(M, _, U), re.return = M, re);
    }
    function F(M, _, U, re) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== U.containerInfo || _.stateNode.implementation !== U.implementation ? (_ = cf(U, M.mode, re), _.return = M, _) : (_ = c(_, U.children || []), _.return = M, _);
    }
    function ne(M, _, U, re, je) {
      return _ === null || _.tag !== 7 ? (_ = uu(U, M.mode, re, je), _.return = M, _) : (_ = c(_, U), _.return = M, _);
    }
    function ue(M, _, U) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = qd("" + _, M.mode, U), _.return = M, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ge:
            return U = Ps(_.type, _.key, _.props, null, M.mode, U), U.ref = yl(M, null, _), U.return = M, U;
          case Ke:
            return _ = cf(_, M.mode, U), _.return = M, _;
          case Dt:
            var re = _._init;
            return ue(M, re(_._payload), U);
        }
        if (Dn(_) || Ae(_)) return _ = uu(_, M.mode, U, null), _.return = M, _;
        Nc(M, _);
      }
      return null;
    }
    function te(M, _, U, re) {
      var je = _ !== null ? _.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return je !== null ? null : x(M, _, "" + U, re);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ge:
            return U.key === je ? T(M, _, U, re) : null;
          case Ke:
            return U.key === je ? F(M, _, U, re) : null;
          case Dt:
            return je = U._init, te(
              M,
              _,
              je(U._payload),
              re
            );
        }
        if (Dn(U) || Ae(U)) return je !== null ? null : ne(M, _, U, re, null);
        Nc(M, U);
      }
      return null;
    }
    function Re(M, _, U, re, je) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return M = M.get(U) || null, x(_, M, "" + re, je);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case ge:
            return M = M.get(re.key === null ? U : re.key) || null, T(_, M, re, je);
          case Ke:
            return M = M.get(re.key === null ? U : re.key) || null, F(_, M, re, je);
          case Dt:
            var et = re._init;
            return Re(M, _, U, et(re._payload), je);
        }
        if (Dn(re) || Ae(re)) return M = M.get(U) || null, ne(_, M, re, je, null);
        Nc(_, re);
      }
      return null;
    }
    function Ue(M, _, U, re) {
      for (var je = null, et = null, rt = _, vt = _ = 0, pr = null; rt !== null && vt < U.length; vt++) {
        rt.index > vt ? (pr = rt, rt = null) : pr = rt.sibling;
        var nn = te(M, rt, U[vt], re);
        if (nn === null) {
          rt === null && (rt = pr);
          break;
        }
        n && rt && nn.alternate === null && r(M, rt), _ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn, rt = pr;
      }
      if (vt === U.length) return u(M, rt), kn && hl(M, vt), je;
      if (rt === null) {
        for (; vt < U.length; vt++) rt = ue(M, U[vt], re), rt !== null && (_ = d(rt, _, vt), et === null ? je = rt : et.sibling = rt, et = rt);
        return kn && hl(M, vt), je;
      }
      for (rt = o(M, rt); vt < U.length; vt++) pr = Re(rt, M, vt, U[vt], re), pr !== null && (n && pr.alternate !== null && rt.delete(pr.key === null ? vt : pr.key), _ = d(pr, _, vt), et === null ? je = pr : et.sibling = pr, et = pr);
      return n && rt.forEach(function(Yu) {
        return r(M, Yu);
      }), kn && hl(M, vt), je;
    }
    function Pe(M, _, U, re) {
      var je = Ae(U);
      if (typeof je != "function") throw Error(E(150));
      if (U = je.call(U), U == null) throw Error(E(151));
      for (var et = je = null, rt = _, vt = _ = 0, pr = null, nn = U.next(); rt !== null && !nn.done; vt++, nn = U.next()) {
        rt.index > vt ? (pr = rt, rt = null) : pr = rt.sibling;
        var Yu = te(M, rt, nn.value, re);
        if (Yu === null) {
          rt === null && (rt = pr);
          break;
        }
        n && rt && Yu.alternate === null && r(M, rt), _ = d(Yu, _, vt), et === null ? je = Yu : et.sibling = Yu, et = Yu, rt = pr;
      }
      if (nn.done) return u(
        M,
        rt
      ), kn && hl(M, vt), je;
      if (rt === null) {
        for (; !nn.done; vt++, nn = U.next()) nn = ue(M, nn.value, re), nn !== null && (_ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn);
        return kn && hl(M, vt), je;
      }
      for (rt = o(M, rt); !nn.done; vt++, nn = U.next()) nn = Re(rt, M, vt, nn.value, re), nn !== null && (n && nn.alternate !== null && rt.delete(nn.key === null ? vt : nn.key), _ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn);
      return n && rt.forEach(function(ym) {
        return r(M, ym);
      }), kn && hl(M, vt), je;
    }
    function Wn(M, _, U, re) {
      if (typeof U == "object" && U !== null && U.type === De && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ge:
            e: {
              for (var je = U.key, et = _; et !== null; ) {
                if (et.key === je) {
                  if (je = U.type, je === De) {
                    if (et.tag === 7) {
                      u(M, et.sibling), _ = c(et, U.props.children), _.return = M, M = _;
                      break e;
                    }
                  } else if (et.elementType === je || typeof je == "object" && je !== null && je.$$typeof === Dt && Uv(je) === et.type) {
                    u(M, et.sibling), _ = c(et, U.props), _.ref = yl(M, et, U), _.return = M, M = _;
                    break e;
                  }
                  u(M, et);
                  break;
                } else r(M, et);
                et = et.sibling;
              }
              U.type === De ? (_ = uu(U.props.children, M.mode, re, U.key), _.return = M, M = _) : (re = Ps(U.type, U.key, U.props, null, M.mode, re), re.ref = yl(M, _, U), re.return = M, M = re);
            }
            return h(M);
          case Ke:
            e: {
              for (et = U.key; _ !== null; ) {
                if (_.key === et) if (_.tag === 4 && _.stateNode.containerInfo === U.containerInfo && _.stateNode.implementation === U.implementation) {
                  u(M, _.sibling), _ = c(_, U.children || []), _.return = M, M = _;
                  break e;
                } else {
                  u(M, _);
                  break;
                }
                else r(M, _);
                _ = _.sibling;
              }
              _ = cf(U, M.mode, re), _.return = M, M = _;
            }
            return h(M);
          case Dt:
            return et = U._init, Wn(M, _, et(U._payload), re);
        }
        if (Dn(U)) return Ue(M, _, U, re);
        if (Ae(U)) return Pe(M, _, U, re);
        Nc(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, _ !== null && _.tag === 6 ? (u(M, _.sibling), _ = c(_, U), _.return = M, M = _) : (u(M, _), _ = qd(U, M.mode, re), _.return = M, M = _), h(M)) : u(M, _);
    }
    return Wn;
  }
  var Vn = gl(!0), Se = gl(!1), Ea = Ua(null), ua = null, yo = null, Sd = null;
  function Ed() {
    Sd = yo = ua = null;
  }
  function xd(n) {
    var r = Ea.current;
    bn(Ea), n._currentValue = r;
  }
  function Cd(n, r, u) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === u) break;
      n = n.return;
    }
  }
  function An(n, r) {
    ua = n, Sd = yo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Zn = !0), n.firstContext = null);
  }
  function Fa(n) {
    var r = n._currentValue;
    if (Sd !== n) if (n = { context: n, memoizedValue: r, next: null }, yo === null) {
      if (ua === null) throw Error(E(308));
      yo = n, ua.dependencies = { lanes: 0, firstContext: n };
    } else yo = yo.next = n;
    return r;
  }
  var Sl = null;
  function bd(n) {
    Sl === null ? Sl = [n] : Sl.push(n);
  }
  function Rd(n, r, u, o) {
    var c = r.interleaved;
    return c === null ? (u.next = u, bd(r)) : (u.next = c.next, c.next = u), r.interleaved = u, xa(n, o);
  }
  function xa(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; ) n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Ca = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function tu(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Uu(n, r, u) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, It & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, xa(n, u);
    }
    return c = o.interleaved, c === null ? (r.next = r, bd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, xa(n, u);
  }
  function Oc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, Wi(n, u);
    }
  }
  function zv(n, r) {
    var u = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, u === o)) {
      var c = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var h = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          d === null ? c = d = h : d = d.next = h, u = u.next;
        } while (u !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      u = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function fs(n, r, u, o) {
    var c = n.updateQueue;
    Ca = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var T = x, F = T.next;
      T.next = null, h === null ? d = F : h.next = F, h = T;
      var ne = n.alternate;
      ne !== null && (ne = ne.updateQueue, x = ne.lastBaseUpdate, x !== h && (x === null ? ne.firstBaseUpdate = F : x.next = F, ne.lastBaseUpdate = T));
    }
    if (d !== null) {
      var ue = c.baseState;
      h = 0, ne = F = T = null, x = d;
      do {
        var te = x.lane, Re = x.eventTime;
        if ((o & te) === te) {
          ne !== null && (ne = ne.next = {
            eventTime: Re,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ue = n, Pe = x;
            switch (te = r, Re = u, Pe.tag) {
              case 1:
                if (Ue = Pe.payload, typeof Ue == "function") {
                  ue = Ue.call(Re, ue, te);
                  break e;
                }
                ue = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = Pe.payload, te = typeof Ue == "function" ? Ue.call(Re, ue, te) : Ue, te == null) break e;
                ue = de({}, ue, te);
                break e;
              case 2:
                Ca = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [x] : te.push(x));
        } else Re = { eventTime: Re, lane: te, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ne === null ? (F = ne = Re, T = ue) : ne = ne.next = Re, h |= te;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          te = x, x = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (ne === null && (T = ue), c.baseState = T, c.firstBaseUpdate = F, c.lastBaseUpdate = ne, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= h, n.lanes = h, n.memoizedState = ue;
    }
  }
  function wd(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = u, typeof c != "function") throw Error(E(191, c));
        c.call(o);
      }
    }
  }
  var ds = {}, Di = Ua(ds), ps = Ua(ds), vs = Ua(ds);
  function El(n) {
    if (n === ds) throw Error(E(174));
    return n;
  }
  function kd(n, r) {
    switch (We(vs, r), We(ps, n), We(Di, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Rt(r, n);
    }
    bn(Di), We(Di, r);
  }
  function xl() {
    bn(Di), bn(ps), bn(vs);
  }
  function Fv(n) {
    El(vs.current);
    var r = El(Di.current), u = Rt(r, n.type);
    r !== u && (We(ps, n), We(Di, u));
  }
  function Mc(n) {
    ps.current === n && (bn(Di), bn(ps));
  }
  var Un = Ua(0);
  function Lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ms = [];
  function Ge() {
    for (var n = 0; n < ms.length; n++) ms[n]._workInProgressVersionPrimary = null;
    ms.length = 0;
  }
  var Mt = Oe.ReactCurrentDispatcher, en = Oe.ReactCurrentBatchConfig, vn = 0, tn = null, Jn = null, fr = null, Ac = !1, hs = !1, Cl = 0, ee = 0;
  function Jt() {
    throw Error(E(321));
  }
  function ut(n, r) {
    if (r === null) return !1;
    for (var u = 0; u < r.length && u < n.length; u++) if (!ii(n[u], r[u])) return !1;
    return !0;
  }
  function ju(n, r, u, o, c, d) {
    if (vn = d, tn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Mt.current = n === null || n.memoizedState === null ? qc : Cs, n = u(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cl = 0, 25 <= d) throw Error(E(301));
        d += 1, fr = Jn = null, r.updateQueue = null, Mt.current = Kc, n = u(o, c);
      } while (hs);
    }
    if (Mt.current = kl, r = Jn !== null && Jn.next !== null, vn = 0, fr = Jn = tn = null, Ac = !1, r) throw Error(E(300));
    return n;
  }
  function li() {
    var n = Cl !== 0;
    return Cl = 0, n;
  }
  function Mr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fr === null ? tn.memoizedState = fr = n : fr = fr.next = n, fr;
  }
  function $n() {
    if (Jn === null) {
      var n = tn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Jn.next;
    var r = fr === null ? tn.memoizedState : fr.next;
    if (r !== null) fr = r, Jn = n;
    else {
      if (n === null) throw Error(E(310));
      Jn = n, n = { memoizedState: Jn.memoizedState, baseState: Jn.baseState, baseQueue: Jn.baseQueue, queue: Jn.queue, next: null }, fr === null ? tn.memoizedState = fr = n : fr = fr.next = n;
    }
    return fr;
  }
  function nu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zu(n) {
    var r = $n(), u = r.queue;
    if (u === null) throw Error(E(311));
    u.lastRenderedReducer = n;
    var o = Jn, c = o.baseQueue, d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, u.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var x = h = null, T = null, F = d;
      do {
        var ne = F.lane;
        if ((vn & ne) === ne) T !== null && (T = T.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var ue = {
            lane: ne,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          T === null ? (x = T = ue, h = o) : T = T.next = ue, tn.lanes |= ne, Li |= ne;
        }
        F = F.next;
      } while (F !== null && F !== d);
      T === null ? h = o : T.next = x, ii(o, r.memoizedState) || (Zn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = T, u.lastRenderedState = o;
    }
    if (n = u.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, tn.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else c === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function bl(n) {
    var r = $n(), u = r.queue;
    if (u === null) throw Error(E(311));
    u.lastRenderedReducer = n;
    var o = u.dispatch, c = u.pending, d = r.memoizedState;
    if (c !== null) {
      u.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      ii(d, r.memoizedState) || (Zn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), u.lastRenderedState = d;
    }
    return [d, o];
  }
  function Uc() {
  }
  function jc(n, r) {
    var u = tn, o = $n(), c = r(), d = !ii(o.memoizedState, c);
    if (d && (o.memoizedState = c, Zn = !0), o = o.queue, ys(Hc.bind(null, u, o, n), [n]), o.getSnapshot !== r || d || fr !== null && fr.memoizedState.tag & 1) {
      if (u.flags |= 2048, Rl(9, Fc.bind(null, u, o, c, r), void 0, null), or === null) throw Error(E(349));
      vn & 30 || zc(u, r, c);
    }
    return c;
  }
  function zc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tn.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Fc(n, r, u, o) {
    r.value = u, r.getSnapshot = o, Pc(r) && Bc(n);
  }
  function Hc(n, r, u) {
    return u(function() {
      Pc(r) && Bc(n);
    });
  }
  function Pc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !ii(n, u);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = xa(n, 1);
    r !== null && $r(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Mr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nu, lastRenderedState: n }, r.queue = n, n = n.dispatch = wl.bind(null, tn, n), [r.memoizedState, n];
  }
  function Rl(n, r, u, o) {
    return n = { tag: n, create: r, destroy: u, deps: o, next: null }, r = tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function $c() {
    return $n().memoizedState;
  }
  function go(n, r, u, o) {
    var c = Mr();
    tn.flags |= n, c.memoizedState = Rl(1 | r, u, void 0, o === void 0 ? null : o);
  }
  function So(n, r, u, o) {
    var c = $n();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Jn !== null) {
      var h = Jn.memoizedState;
      if (d = h.destroy, o !== null && ut(o, h.deps)) {
        c.memoizedState = Rl(r, u, d, o);
        return;
      }
    }
    tn.flags |= n, c.memoizedState = Rl(1 | r, u, d, o);
  }
  function Ic(n, r) {
    return go(8390656, 8, n, r);
  }
  function ys(n, r) {
    return So(2048, 8, n, r);
  }
  function Yc(n, r) {
    return So(4, 2, n, r);
  }
  function gs(n, r) {
    return So(4, 4, n, r);
  }
  function Tl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, u) {
    return u = u != null ? u.concat([n]) : null, So(4, 4, Tl.bind(null, r, n), u);
  }
  function Ss() {
  }
  function Qc(n, r) {
    var u = $n();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && ut(r, o[1]) ? o[0] : (u.memoizedState = [n, r], n);
  }
  function Gc(n, r) {
    var u = $n();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && ut(r, o[1]) ? o[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function _d(n, r, u) {
    return vn & 21 ? (ii(u, r) || (u = Xl(), tn.lanes |= u, Li |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Zn = !0), n.memoizedState = u);
  }
  function Es(n, r) {
    var u = Zt;
    Zt = u !== 0 && 4 > u ? u : 4, n(!0);
    var o = en.transition;
    en.transition = {};
    try {
      n(!1), r();
    } finally {
      Zt = u, en.transition = o;
    }
  }
  function Dd() {
    return $n().memoizedState;
  }
  function xs(n, r, u) {
    var o = Ai(n);
    if (u = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null }, la(n)) Hv(r, u);
    else if (u = Rd(n, r, u, o), u !== null) {
      var c = nr();
      $r(u, n, o, c), yn(u, r, o);
    }
  }
  function wl(n, r, u) {
    var o = Ai(n), c = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (la(n)) Hv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, x = d(h, u);
        if (c.hasEagerState = !0, c.eagerState = x, ii(x, h)) {
          var T = r.interleaved;
          T === null ? (c.next = c, bd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      u = Rd(n, r, c, o), u !== null && (c = nr(), $r(u, n, o, c), yn(u, r, o));
    }
  }
  function la(n) {
    var r = n.alternate;
    return n === tn || r !== null && r === tn;
  }
  function Hv(n, r) {
    hs = Ac = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function yn(n, r, u) {
    if (u & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, Wi(n, u);
    }
  }
  var kl = { readContext: Fa, useCallback: Jt, useContext: Jt, useEffect: Jt, useImperativeHandle: Jt, useInsertionEffect: Jt, useLayoutEffect: Jt, useMemo: Jt, useReducer: Jt, useRef: Jt, useState: Jt, useDebugValue: Jt, useDeferredValue: Jt, useTransition: Jt, useMutableSource: Jt, useSyncExternalStore: Jt, useId: Jt, unstable_isNewReconciler: !1 }, qc = { readContext: Fa, useCallback: function(n, r) {
    return Mr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fa, useEffect: Ic, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, go(
      4194308,
      4,
      Tl.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return go(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return go(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Mr();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var o = Mr();
    return r = u !== void 0 ? u(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = xs.bind(null, tn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Mr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: Ss, useDeferredValue: function(n) {
    return Mr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Es.bind(null, n[1]), Mr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var o = tn, c = Mr();
    if (kn) {
      if (u === void 0) throw Error(E(407));
      u = u();
    } else {
      if (u = r(), or === null) throw Error(E(349));
      vn & 30 || zc(o, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, Ic(Hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Rl(9, Fc.bind(null, o, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Mr(), r = or.identifierPrefix;
    if (kn) {
      var u = _i, o = ki;
      u = (o & ~(1 << 32 - zr(o) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Cl++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else u = ee++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Fa,
    useCallback: Qc,
    useContext: Fa,
    useEffect: ys,
    useImperativeHandle: Wc,
    useInsertionEffect: Yc,
    useLayoutEffect: gs,
    useMemo: Gc,
    useReducer: zu,
    useRef: $c,
    useState: function() {
      return zu(nu);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = $n();
      return _d(r, Jn.memoizedState, n);
    },
    useTransition: function() {
      var n = zu(nu)[0], r = $n().memoizedState;
      return [n, r];
    },
    useMutableSource: Uc,
    useSyncExternalStore: jc,
    useId: Dd,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Fa, useCallback: Qc, useContext: Fa, useEffect: ys, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: gs, useMemo: Gc, useReducer: bl, useRef: $c, useState: function() {
    return bl(nu);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = $n();
    return Jn === null ? r.memoizedState = n : _d(r, Jn.memoizedState, n);
  }, useTransition: function() {
    var n = bl(nu)[0], r = $n().memoizedState;
    return [n, r];
  }, useMutableSource: Uc, useSyncExternalStore: jc, useId: Dd, unstable_isNewReconciler: !1 };
  function oi(n, r) {
    if (n && n.defaultProps) {
      r = de({}, r), n = n.defaultProps;
      for (var u in n) r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  function Nd(n, r, u, o) {
    r = n.memoizedState, u = u(o, r), u = u == null ? r : de({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ct(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var o = nr(), c = Ai(n), d = tu(o, c);
    d.payload = r, u != null && (d.callback = u), r = Uu(n, d, c), r !== null && ($r(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var o = nr(), c = Ai(n), d = tu(o, c);
    d.tag = 1, d.payload = r, u != null && (d.callback = u), r = Uu(n, d, c), r !== null && ($r(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = nr(), o = Ai(n), c = tu(u, o);
    c.tag = 2, r != null && (c.callback = r), r = Uu(n, c, o), r !== null && ($r(r, n, o, u), Oc(r, n, o));
  } };
  function Pv(n, r, u, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ts(u, o) || !ts(c, d) : !0;
  }
  function Jc(n, r, u) {
    var o = !1, c = Or, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Fa(d) : (c = Kn(r) ? na : Fn.current, o = r.contextTypes, d = (o = o != null) ? ra(n, c) : Or), r = new r(u, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, u, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function bs(n, r, u, o) {
    var c = n.stateNode;
    c.props = u, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Fa(d) : (d = Kn(r) ? na : Fn.current, c.context = ra(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Nd(n, r, d, u), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), fs(n, u, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var u = "", o = r;
      do
        u += st(o), o = o.return;
      while (o);
      var c = u;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Od(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function Md(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Zc = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, u) {
    u = tu(-1, u), u.tag = 3, u.payload = { element: null };
    var o = r.value;
    return u.callback = function() {
      To || (To = !0, Ol = o), Md(n, r);
    }, u;
  }
  function Ld(n, r, u) {
    u = tu(-1, u), u.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      u.payload = function() {
        return o(c);
      }, u.callback = function() {
        Md(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (u.callback = function() {
      Md(n, r), typeof o != "function" && (Pu === null ? Pu = /* @__PURE__ */ new Set([this]) : Pu.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), u;
  }
  function Ad(n, r, u) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Zc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(u) || (c.add(u), n = gy.bind(null, n, r, u), r.then(n, n));
  }
  function $v(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Fu(n, r, u, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = tu(-1, 1), r.tag = 2, Uu(u, r, 1))), u.lanes |= 1), n);
  }
  var Rs = Oe.ReactCurrentOwner, Zn = !1;
  function Sr(n, r, u, o) {
    r.child = n === null ? Se(r, null, u, o) : Vn(r, n.child, u, o);
  }
  function oa(n, r, u, o, c) {
    u = u.render;
    var d = r.ref;
    return An(r, c), o = ju(n, r, u, o, d, c), u = li(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (kn && u && kc(r), r.flags |= 1, Sr(n, r, o, c), r.child);
  }
  function Dl(n, r, u, o, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, Tt(n, r, d, o, c)) : (n = Ps(u.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ts, u(h, o) && n.ref === r.ref) return Pa(n, r, c);
    }
    return r.flags |= 1, n = Vu(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Tt(n, r, u, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref) if (Zn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Zn = !0);
      else return r.lanes = n.lanes, Pa(n, r, c);
    }
    return Iv(n, r, u, o, c);
  }
  function Ts(n, r, u) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, We(Co, ba), ba |= u;
    else {
      if (!(u & 1073741824)) return n = d !== null ? d.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, We(Co, ba), ba |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : u, We(Co, ba), ba |= o;
    }
    else d !== null ? (o = d.baseLanes | u, r.memoizedState = null) : o = u, We(Co, ba), ba |= o;
    return Sr(n, r, c, u), r.child;
  }
  function Ud(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Iv(n, r, u, o, c) {
    var d = Kn(u) ? na : Fn.current;
    return d = ra(r, d), An(r, c), u = ju(n, r, u, o, d, c), o = li(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (kn && o && kc(r), r.flags |= 1, Sr(n, r, u, c), r.child);
  }
  function Yv(n, r, u, o, c) {
    if (Kn(u)) {
      var d = !0;
      cr(r);
    } else d = !1;
    if (An(r, c), r.stateNode === null) Ha(n, r), Jc(r, u, o), bs(r, u, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, x = r.memoizedProps;
      h.props = x;
      var T = h.context, F = u.contextType;
      typeof F == "object" && F !== null ? F = Fa(F) : (F = Kn(u) ? na : Fn.current, F = ra(r, F));
      var ne = u.getDerivedStateFromProps, ue = typeof ne == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      ue || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== o || T !== F) && Bv(r, h, o, F), Ca = !1;
      var te = r.memoizedState;
      h.state = te, fs(r, o, h, c), T = r.memoizedState, x !== o || te !== T || ur.current || Ca ? (typeof ne == "function" && (Nd(r, u, ne, o), T = r.memoizedState), (x = Ca || Pv(r, u, x, o, te, T, F)) ? (ue || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), h.props = o, h.state = T, h.context = F, o = x) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, jv(n, r), x = r.memoizedProps, F = r.type === r.elementType ? x : oi(r.type, x), h.props = F, ue = r.pendingProps, te = h.context, T = u.contextType, typeof T == "object" && T !== null ? T = Fa(T) : (T = Kn(u) ? na : Fn.current, T = ra(r, T));
      var Re = u.getDerivedStateFromProps;
      (ne = typeof Re == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== ue || te !== T) && Bv(r, h, o, T), Ca = !1, te = r.memoizedState, h.state = te, fs(r, o, h, c);
      var Ue = r.memoizedState;
      x !== ue || te !== Ue || ur.current || Ca ? (typeof Re == "function" && (Nd(r, u, Re, o), Ue = r.memoizedState), (F = Ca || Pv(r, u, F, o, te, Ue, T) || !1) ? (ne || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, Ue, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, Ue, T)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ue), h.props = o, h.state = Ue, h.context = T, o = F) : (typeof h.componentDidUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, u, o, d, c);
  }
  function ws(n, r, u, o, c, d) {
    Ud(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && Tc(r, u, !1), Pa(n, r, d);
    o = r.stateNode, Rs.current = r;
    var x = h && typeof u.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Vn(r, n.child, null, d), r.child = Vn(r, null, x, d)) : Sr(n, r, x, d), r.memoizedState = o.state, c && Tc(r, u, !0), r.child;
  }
  function Eo(n) {
    var r = n.stateNode;
    r.pendingContext ? Mv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mv(n, r.context, !1), kd(n, r.containerInfo);
  }
  function Wv(n, r, u, o, c) {
    return Au(), eu(c), r.flags |= 256, Sr(n, r, u, o), r.child;
  }
  var ef = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function tf(n, r, u) {
    var o = r.pendingProps, c = Un.current, d = !1, h = (r.flags & 128) !== 0, x;
    if ((x = h) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), We(Un, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = $u(h, o, 0, null), n = uu(n, o, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = jd(u), r.memoizedState = ef, n) : zd(r, h));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return Qv(n, r, h, o, x, c, u);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, x = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Vu(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Vu(x, d) : (d = uu(d, h, u, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? jd(u) : { baseLanes: h.baseLanes | u, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~u, r.memoizedState = ef, o;
    }
    return d = n.child, n = d.sibling, o = Vu(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = u), o.return = r, o.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function zd(n, r) {
    return r = $u({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ks(n, r, u, o) {
    return o !== null && eu(o), Vn(r, n.child, null, u), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, u, o, c, d, h) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(E(422))), ks(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = $u({ mode: "visible", children: o.children }, c, 0, null), d = uu(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Vn(r, n.child, null, h), r.child.memoizedState = jd(h), r.memoizedState = ef, d);
    if (!(r.mode & 1)) return ks(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var x = o.dgst;
      return o = x, d = Error(E(419)), o = Od(d, o, void 0), ks(n, r, h, o);
    }
    if (x = (h & n.childLanes) !== 0, Zn || x) {
      if (o = or, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, xa(n, c), $r(o, n, c, -1));
      }
      return Qd(), o = Od(Error(E(421))), ks(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = bi(c.nextSibling), aa = r, kn = !0, za = null, n !== null && (Xn[ja++] = ki, Xn[ja++] = _i, Xn[ja++] = Sa, ki = n.id, _i = n.overflow, Sa = r), r = zd(r, o.children), r.flags |= 4096, r);
  }
  function Fd(n, r, u) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, u);
  }
  function Pr(n, r, u, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: u, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = u, d.tailMode = c);
  }
  function Ni(n, r, u) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Sr(n, r, o.children, u), o = Un.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fd(n, u, r);
        else if (n.tag === 19) Fd(n, u, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (We(Un, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (u = r.child, c = null; u !== null; ) n = u.alternate, n !== null && Lc(n) === null && (c = u), u = u.sibling;
        u = c, u === null ? (c = r.child, r.child = null) : (c = u.sibling, u.sibling = null), Pr(r, !1, c, u, d);
        break;
      case "backwards":
        for (u = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = u, u = c, c = n;
        }
        Pr(r, !0, u, null, d);
        break;
      case "together":
        Pr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ha(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pa(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, !(u & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(E(153));
    if (r.child !== null) {
      for (n = r.child, u = Vu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; ) n = n.sibling, u = u.sibling = Vu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, u) {
    switch (r.tag) {
      case 3:
        Eo(r), Au();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Kn(r.type) && cr(r);
        break;
      case 4:
        kd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        We(Ea, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (We(Un, Un.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? tf(n, r, u) : (We(Un, Un.current & 1), n = Pa(n, r, u), n !== null ? n.sibling : null);
        We(Un, Un.current & 1);
        break;
      case 19:
        if (o = (u & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ni(n, r, u);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), We(Un, Un.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ts(n, r, u);
    }
    return Pa(n, r, u);
  }
  var Ba, er, Gv, qv;
  Ba = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r) return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, er = function() {
  }, Gv = function(n, r, u, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, El(Di.current);
      var d = null;
      switch (u) {
        case "input":
          c = Nt(n, c), o = Nt(n, o), d = [];
          break;
        case "select":
          c = de({}, c, { value: void 0 }), o = de({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Nn(n, c), o = Nn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = _u);
      }
      Xt(u, o);
      var h;
      u = null;
      for (F in c) if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var x = c[F];
        for (h in x) x.hasOwnProperty(h) && (u || (u = {}), u[h] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (q.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var T = o[F];
        if (x = c != null ? c[F] : void 0, o.hasOwnProperty(F) && T !== x && (T != null || x != null)) if (F === "style") if (x) {
          for (h in x) !x.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (u || (u = {}), u[h] = "");
          for (h in T) T.hasOwnProperty(h) && x[h] !== T[h] && (u || (u = {}), u[h] = T[h]);
        } else u || (d || (d = []), d.push(
          F,
          u
        )), u = T;
        else F === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, x = x ? x.__html : void 0, T != null && x !== T && (d = d || []).push(F, T)) : F === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(F, "" + T) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (q.hasOwnProperty(F) ? (T != null && F === "onScroll" && on("scroll", n), d || x === T || (d = [])) : (d = d || []).push(F, T));
      }
      u && (d = d || []).push("style", u);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, qv = function(n, r, u, o) {
    u !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!kn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var u = null; r !== null; ) r.alternate !== null && (u = r), r = r.sibling;
        u === null ? n.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = n.tail;
        for (var o = null; u !== null; ) u.alternate !== null && (o = u), u = u.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function dr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) u |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) u |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = u, r;
  }
  function Kv(n, r, u) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return dr(r), null;
      case 1:
        return Kn(r.type) && mo(), dr(r), null;
      case 3:
        return o = r.stateNode, xl(), bn(ur), bn(Fn), Ge(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (Ml(za), za = null))), er(n, r), dr(r), null;
      case 5:
        Mc(r);
        var c = El(vs.current);
        if (u = r.type, n !== null && r.stateNode != null) Gv(n, r, u, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(E(166));
            return dr(r), null;
          }
          if (n = El(Di.current), Dc(r)) {
            o = r.stateNode, u = r.type;
            var d = r.memoizedProps;
            switch (o[Ri] = r, o[ls] = d, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                on("cancel", o), on("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                on("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) on(as[c], o);
                break;
              case "source":
                on("error", o);
                break;
              case "img":
              case "image":
              case "link":
                on(
                  "error",
                  o
                ), on("load", o);
                break;
              case "details":
                on("toggle", o);
                break;
              case "input":
                Kt(o, d), on("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, on("invalid", o);
                break;
              case "textarea":
                On(o, d), on("invalid", o);
            }
            Xt(u, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var x = d[h];
              h === "children" ? typeof x == "string" ? o.textContent !== x && (d.suppressHydrationWarning !== !0 && xc(o.textContent, x, n), c = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && xc(
                o.textContent,
                x,
                n
              ), c = ["children", "" + x]) : q.hasOwnProperty(h) && x != null && h === "onScroll" && on("scroll", o);
            }
            switch (u) {
              case "input":
                gn(o), Zr(o, d, !0);
                break;
              case "textarea":
                gn(o), be(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = _u);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = at(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(u, { is: o.is }) : (n = h.createElement(u), u === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, u), n[Ri] = r, n[ls] = o, Ba(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = B(u, o), u) {
                case "dialog":
                  on("cancel", n), on("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  on("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) on(as[c], n);
                  c = o;
                  break;
                case "source":
                  on("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  on(
                    "error",
                    n
                  ), on("load", n), c = o;
                  break;
                case "details":
                  on("toggle", n), c = o;
                  break;
                case "input":
                  Kt(n, o), c = Nt(n, o), on("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = de({}, o, { value: void 0 }), on("invalid", n);
                  break;
                case "textarea":
                  On(n, o), c = Nn(n, o), on("invalid", n);
                  break;
                default:
                  c = o;
              }
              Xt(u, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var T = x[d];
                d === "style" ? Qt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && un(n, T)) : d === "children" ? typeof T == "string" ? (u !== "textarea" || T !== "") && Z(n, T) : typeof T == "number" && Z(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (q.hasOwnProperty(d) ? T != null && d === "onScroll" && on("scroll", n) : T != null && ie(n, d, T, h));
              }
              switch (u) {
                case "input":
                  gn(n), Zr(n, o, !1);
                  break;
                case "textarea":
                  gn(n), be(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + G(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? En(n, !!o.multiple, d, !1) : o.defaultValue != null && En(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = _u);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return dr(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(E(166));
          if (u = El(vs.current), El(Di.current), Dc(r)) {
            if (o = r.stateNode, u = r.memoizedProps, o[Ri] = r, (d = o.nodeValue !== u) && (n = aa, n !== null)) switch (n.tag) {
              case 3:
                xc(o.nodeValue, u, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(o.nodeValue, u, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(o), o[Ri] = r, r.stateNode = o;
        }
        return dr(r), null;
      case 13:
        if (bn(Un), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kn && ia !== null && r.mode & 1 && !(r.flags & 128)) cs(), Au(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[Ri] = r;
            } else Au(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            dr(r), d = !1;
          } else za !== null && (Ml(za), za = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Un.current & 1 ? Yn === 0 && (Yn = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), dr(r), null);
      case 4:
        return xl(), er(n, r), n === null && so(r.stateNode.containerInfo), dr(r), null;
      case 10:
        return xd(r.type._context), dr(r), null;
      case 17:
        return Kn(r.type) && mo(), dr(r), null;
      case 19:
        if (bn(Un), d = r.memoizedState, d === null) return dr(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Ds(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = Lc(n), h !== null) {
              for (r.flags |= 128, Ds(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = u, u = r.child; u !== null; ) d = u, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
              return We(Un, Un.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && bt() > Ro && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(h), n !== null) {
            if (r.flags |= 128, o = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !kn) return dr(r), null;
          } else 2 * bt() - d.renderingStartTime > Ro && u !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (u = d.last, u !== null ? u.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = bt(), r.sibling = null, u = Un.current, We(Un, o ? u & 1 | 2 : u & 1), r) : (dr(r), null);
      case 22:
      case 23:
        return Wd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ba & 1073741824 && (dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(E(156, r.tag));
  }
  function nf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Kn(r.type) && mo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), bn(ur), bn(Fn), Ge(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (bn(Un), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          Au();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return bn(Un), null;
      case 4:
        return xl(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return Wd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ns = !1, Lr = !1, dy = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
  function xo(n, r) {
    var u = n.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (o) {
      _n(n, r, o);
    }
    else u.current = null;
  }
  function rf(n, r, u) {
    try {
      u();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Xv = !1;
  function Jv(n, r) {
    if (us = Ma, n = ns(), pc(n)) {
      if ("selectionStart" in n) var u = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        u = (u = n.ownerDocument) && u.defaultView || window;
        var o = u.getSelection && u.getSelection();
        if (o && o.rangeCount !== 0) {
          u = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            u.nodeType, d.nodeType;
          } catch {
            u = null;
            break e;
          }
          var h = 0, x = -1, T = -1, F = 0, ne = 0, ue = n, te = null;
          t: for (; ; ) {
            for (var Re; ue !== u || c !== 0 && ue.nodeType !== 3 || (x = h + c), ue !== d || o !== 0 && ue.nodeType !== 3 || (T = h + o), ue.nodeType === 3 && (h += ue.nodeValue.length), (Re = ue.firstChild) !== null; )
              te = ue, ue = Re;
            for (; ; ) {
              if (ue === n) break t;
              if (te === u && ++F === c && (x = h), te === d && ++ne === o && (T = h), (Re = ue.nextSibling) !== null) break;
              ue = te, te = ue.parentNode;
            }
            ue = Re;
          }
          u = x === -1 || T === -1 ? null : { start: x, end: T };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (vl = { focusedElem: n, selectionRange: u }, Ma = !1, Ne = r; Ne !== null; ) if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ne = n;
    else for (; Ne !== null; ) {
      r = Ne;
      try {
        var Ue = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ue !== null) {
              var Pe = Ue.memoizedProps, Wn = Ue.memoizedState, M = r.stateNode, _ = M.getSnapshotBeforeUpdate(r.elementType === r.type ? Pe : oi(r.type, Pe), Wn);
              M.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var U = r.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(E(163));
        }
      } catch (re) {
        _n(r, r.return, re);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ne = n;
        break;
      }
      Ne = r.return;
    }
    return Ue = Xv, Xv = !1, Ue;
  }
  function Os(n, r, u) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && rf(r, u, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var o = u.create;
          u.destroy = o();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function Hd(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function af(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, af(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ri], delete r[ls], delete r[os], delete r[vo], delete r[cy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ls(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ru(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ls(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Oi(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = _u));
    else if (o !== 4 && (n = n.child, n !== null)) for (Oi(n, r, u), n = n.sibling; n !== null; ) Oi(n, r, u), n = n.sibling;
  }
  function Mi(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Mi(n, r, u), n = n.sibling; n !== null; ) Mi(n, r, u), n = n.sibling;
  }
  var In = null, Br = !1;
  function Vr(n, r, u) {
    for (u = u.child; u !== null; ) Zv(n, r, u), u = u.sibling;
  }
  function Zv(n, r, u) {
    if (ea && typeof ea.onCommitFiberUnmount == "function") try {
      ea.onCommitFiberUnmount(Su, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Lr || xo(u, r);
      case 6:
        var o = In, c = Br;
        In = null, Vr(n, r, u), In = o, Br = c, In !== null && (Br ? (n = In, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : In.removeChild(u.stateNode));
        break;
      case 18:
        In !== null && (Br ? (n = In, u = u.stateNode, n.nodeType === 8 ? po(n.parentNode, u) : n.nodeType === 1 && po(n, u), ri(n)) : po(In, u.stateNode));
        break;
      case 4:
        o = In, c = Br, In = u.stateNode.containerInfo, Br = !0, Vr(n, r, u), In = o, Br = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Lr && (o = u.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && rf(u, r, h), c = c.next;
          } while (c !== o);
        }
        Vr(n, r, u);
        break;
      case 1:
        if (!Lr && (xo(u, r), o = u.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = u.memoizedProps, o.state = u.memoizedState, o.componentWillUnmount();
        } catch (x) {
          _n(u, r, x);
        }
        Vr(n, r, u);
        break;
      case 21:
        Vr(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Lr = (o = Lr) || u.memoizedState !== null, Vr(n, r, u), Lr = o) : Vr(n, r, u);
        break;
      default:
        Vr(n, r, u);
    }
  }
  function em(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new dy()), r.forEach(function(o) {
        var c = sm.bind(null, n, o);
        u.has(o) || (u.add(o), o.then(c, c));
      });
    }
  }
  function si(n, r) {
    var u = r.deletions;
    if (u !== null) for (var o = 0; o < u.length; o++) {
      var c = u[o];
      try {
        var d = n, h = r, x = h;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              In = x.stateNode, Br = !1;
              break e;
            case 3:
              In = x.stateNode.containerInfo, Br = !0;
              break e;
            case 4:
              In = x.stateNode.containerInfo, Br = !0;
              break e;
          }
          x = x.return;
        }
        if (In === null) throw Error(E(160));
        Zv(d, h, c), In = null, Br = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (F) {
        _n(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Pd(r, n), r = r.sibling;
  }
  function Pd(n, r) {
    var u = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), sa(n), o & 4) {
          try {
            Os(3, n, n.return), Ms(3, n);
          } catch (Pe) {
            _n(n, n.return, Pe);
          }
          try {
            Os(5, n, n.return);
          } catch (Pe) {
            _n(n, n.return, Pe);
          }
        }
        break;
      case 1:
        si(r, n), sa(n), o & 512 && u !== null && xo(u, u.return);
        break;
      case 5:
        if (si(r, n), sa(n), o & 512 && u !== null && xo(u, u.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Z(c, "");
          } catch (Pe) {
            _n(n, n.return, Pe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = u !== null ? u.memoizedProps : d, x = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            x === "input" && d.type === "radio" && d.name != null && cn(c, d), B(x, h);
            var F = B(x, d);
            for (h = 0; h < T.length; h += 2) {
              var ne = T[h], ue = T[h + 1];
              ne === "style" ? Qt(c, ue) : ne === "dangerouslySetInnerHTML" ? un(c, ue) : ne === "children" ? Z(c, ue) : ie(c, ne, ue, F);
            }
            switch (x) {
              case "input":
                Gn(c, d);
                break;
              case "textarea":
                Nr(c, d);
                break;
              case "select":
                var te = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Re = d.value;
                Re != null ? En(c, !!d.multiple, Re, !1) : te !== !!d.multiple && (d.defaultValue != null ? En(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : En(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Pe) {
            _n(n, n.return, Pe);
          }
        }
        break;
      case 6:
        if (si(r, n), sa(n), o & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Pe) {
            _n(n, n.return, Pe);
          }
        }
        break;
      case 3:
        if (si(r, n), sa(n), o & 4 && u !== null && u.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (Pe) {
          _n(n, n.return, Pe);
        }
        break;
      case 4:
        si(r, n), sa(n);
        break;
      case 13:
        si(r, n), sa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($d = bt())), o & 4 && em(n);
        break;
      case 22:
        if (ne = u !== null && u.memoizedState !== null, n.mode & 1 ? (Lr = (F = Lr) || ne, si(r, n), Lr = F) : si(r, n), sa(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !ne && n.mode & 1) for (Ne = n, ne = n.child; ne !== null; ) {
            for (ue = Ne = ne; Ne !== null; ) {
              switch (te = Ne, Re = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, te, te.return);
                  break;
                case 1:
                  xo(te, te.return);
                  var Ue = te.stateNode;
                  if (typeof Ue.componentWillUnmount == "function") {
                    o = te, u = te.return;
                    try {
                      r = o, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                    } catch (Pe) {
                      _n(o, u, Pe);
                    }
                  }
                  break;
                case 5:
                  xo(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    As(ue);
                    continue;
                  }
              }
              Re !== null ? (Re.return = te, Ne = Re) : As(ue);
            }
            ne = ne.sibling;
          }
          e: for (ne = null, ue = n; ; ) {
            if (ue.tag === 5) {
              if (ne === null) {
                ne = ue;
                try {
                  c = ue.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = ue.stateNode, T = ue.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, x.style.display = Et("display", h));
                } catch (Pe) {
                  _n(n, n.return, Pe);
                }
              }
            } else if (ue.tag === 6) {
              if (ne === null) try {
                ue.stateNode.nodeValue = F ? "" : ue.memoizedProps;
              } catch (Pe) {
                _n(n, n.return, Pe);
              }
            } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
              ue.child.return = ue, ue = ue.child;
              continue;
            }
            if (ue === n) break e;
            for (; ue.sibling === null; ) {
              if (ue.return === null || ue.return === n) break e;
              ne === ue && (ne = null), ue = ue.return;
            }
            ne === ue && (ne = null), ue.sibling.return = ue.return, ue = ue.sibling;
          }
        }
        break;
      case 19:
        si(r, n), sa(n), o & 4 && em(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), sa(n);
    }
  }
  function sa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (Ls(u)) {
              var o = u;
              break e;
            }
            u = u.return;
          }
          throw Error(E(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Z(c, ""), o.flags &= -33);
            var d = ru(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, x = ru(n);
            Oi(n, x, h);
            break;
          default:
            throw Error(E(161));
        }
      } catch (T) {
        _n(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function py(n, r, u) {
    Ne = n, Bd(n);
  }
  function Bd(n, r, u) {
    for (var o = (n.mode & 1) !== 0; Ne !== null; ) {
      var c = Ne, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Ns;
        if (!h) {
          var x = c.alternate, T = x !== null && x.memoizedState !== null || Lr;
          x = Ns;
          var F = Lr;
          if (Ns = h, (Lr = T) && !F) for (Ne = c; Ne !== null; ) h = Ne, T = h.child, h.tag === 22 && h.memoizedState !== null ? Vd(c) : T !== null ? (T.return = h, Ne = T) : Vd(c);
          for (; d !== null; ) Ne = d, Bd(d), d = d.sibling;
          Ne = c, Ns = x, Lr = F;
        }
        tm(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ne = d) : tm(n);
    }
  }
  function tm(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Lr || Ms(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Lr) if (u === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? u.memoizedProps : oi(r.type, u.memoizedProps);
                o.componentDidUpdate(c, u.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var h = r.updateQueue;
              if (h !== null) {
                if (u = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    u = r.child.stateNode;
                    break;
                  case 1:
                    u = r.child.stateNode;
                }
                wd(r, h, u);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (u === null && r.flags & 4) {
                u = x;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && u.focus();
                    break;
                  case "img":
                    T.src && (u.src = T.src);
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
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var ne = F.memoizedState;
                  if (ne !== null) {
                    var ue = ne.dehydrated;
                    ue !== null && ri(ue);
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
              throw Error(E(163));
          }
          Lr || r.flags & 512 && Hd(r);
        } catch (te) {
          _n(r, r.return, te);
        }
      }
      if (r === n) {
        Ne = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, Ne = u;
        break;
      }
      Ne = r.return;
    }
  }
  function As(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r === n) {
        Ne = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, Ne = u;
        break;
      }
      Ne = r.return;
    }
  }
  function Vd(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Ms(4, r);
            } catch (T) {
              _n(r, u, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                _n(r, c, T);
              }
            }
            var d = r.return;
            try {
              Hd(r);
            } catch (T) {
              _n(r, d, T);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Hd(r);
            } catch (T) {
              _n(r, h, T);
            }
        }
      } catch (T) {
        _n(r, r.return, T);
      }
      if (r === n) {
        Ne = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ne = x;
        break;
      }
      Ne = r.return;
    }
  }
  var vy = Math.ceil, Hu = Oe.ReactCurrentDispatcher, Nl = Oe.ReactCurrentOwner, Er = Oe.ReactCurrentBatchConfig, It = 0, or = null, tr = null, xr = 0, ba = 0, Co = Ua(0), Yn = 0, Us = null, Li = 0, bo = 0, uf = 0, js = null, ca = null, $d = 0, Ro = 1 / 0, Ra = null, To = !1, Ol = null, Pu = null, lf = !1, au = null, zs = 0, Bu = 0, wo = null, Fs = -1, Ar = 0;
  function nr() {
    return It & 6 ? bt() : Fs !== -1 ? Fs : Fs = bt();
  }
  function Ai(n) {
    return n.mode & 1 ? It & 2 && xr !== 0 ? xr & -xr : fy.transition !== null ? (Ar === 0 && (Ar = Xl()), Ar) : (n = Zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ao(n.type)), n) : 1;
  }
  function $r(n, r, u, o) {
    if (50 < Bu) throw Bu = 0, wo = null, Error(E(185));
    Yi(n, u, o), (!(It & 2) || n !== or) && (n === or && (!(It & 2) && (bo |= u), Yn === 4 && ci(n, xr)), fa(n, o), u === 1 && It === 0 && !(r.mode & 1) && (Ro = bt() + 500, ho && wi()));
  }
  function fa(n, r) {
    var u = n.callbackNode;
    il(n, r);
    var o = ni(n, n === or ? xr : 0);
    if (o === 0) u !== null && hr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (u != null && hr(u), r === 1) n.tag === 0 ? Nu(Id.bind(null, n)) : wc(Id.bind(null, n)), fo(function() {
        !(It & 6) && wi();
      }), u = null;
      else {
        switch (Zl(o)) {
          case 1:
            u = ei;
            break;
          case 4:
            u = rl;
            break;
          case 16:
            u = al;
            break;
          case 536870912:
            u = Gl;
            break;
          default:
            u = al;
        }
        u = fm(u, of.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function of(n, r) {
    if (Fs = -1, Ar = 0, It & 6) throw Error(E(327));
    var u = n.callbackNode;
    if (ko() && n.callbackNode !== u) return null;
    var o = ni(n, n === or ? xr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = It;
      It |= 2;
      var d = rm();
      (or !== n || xr !== r) && (Ra = null, Ro = bt() + 500, iu(n, r));
      do
        try {
          am();
          break;
        } catch (x) {
          nm(n, x);
        }
      while (!0);
      Ed(), Hu.current = d, It = c, tr !== null ? r = 0 : (or = null, xr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xu(n), c !== 0 && (o = c, r = Hs(n, c))), r === 1) throw u = Us, iu(n, 0), ci(n, o), fa(n, bt()), u;
      if (r === 6) ci(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !my(c) && (r = sf(n, o), r === 2 && (d = xu(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw u = Us, iu(n, 0), ci(n, o), fa(n, bt()), u;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Al(n, ca, Ra);
            break;
          case 3:
            if (ci(n, o), (o & 130023424) === o && (r = $d + 500 - bt(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = bc(Al.bind(null, n, ca, Ra), r);
              break;
            }
            Al(n, ca, Ra);
            break;
          case 4:
            if (ci(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - zr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * vy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = bc(Al.bind(null, n, ca, Ra), o);
              break;
            }
            Al(n, ca, Ra);
            break;
          case 5:
            Al(n, ca, Ra);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return fa(n, bt()), n.callbackNode === u ? of.bind(null, n) : null;
  }
  function Hs(n, r) {
    var u = js;
    return n.current.memoizedState.isDehydrated && (iu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = ca, ca = u, r !== null && Ml(r)), n;
  }
  function Ml(n) {
    ca === null ? ca = n : ca.push.apply(ca, n);
  }
  function my(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var o = 0; o < u.length; o++) {
          var c = u[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ii(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null) u.return = r, r = u;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ci(n, r) {
    for (r &= ~uf, r &= ~bo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - zr(r), o = 1 << u;
      n[u] = -1, r &= ~o;
    }
  }
  function Id(n) {
    if (It & 6) throw Error(E(327));
    ko();
    var r = ni(n, 0);
    if (!(r & 1)) return fa(n, bt()), null;
    var u = sf(n, r);
    if (n.tag !== 0 && u === 2) {
      var o = xu(n);
      o !== 0 && (r = o, u = Hs(n, o));
    }
    if (u === 1) throw u = Us, iu(n, 0), ci(n, r), fa(n, bt()), u;
    if (u === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Al(n, ca, Ra), fa(n, bt()), null;
  }
  function Yd(n, r) {
    var u = It;
    It |= 1;
    try {
      return n(r);
    } finally {
      It = u, It === 0 && (Ro = bt() + 500, ho && wi());
    }
  }
  function Ll(n) {
    au !== null && au.tag === 0 && !(It & 6) && ko();
    var r = It;
    It |= 1;
    var u = Er.transition, o = Zt;
    try {
      if (Er.transition = null, Zt = 1, n) return n();
    } finally {
      Zt = o, Er.transition = u, It = r, !(It & 6) && wi();
    }
  }
  function Wd() {
    ba = Co.current, bn(Co);
  }
  function iu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, md(u)), tr !== null) for (u = tr.return; u !== null; ) {
      var o = u;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mo();
          break;
        case 3:
          xl(), bn(ur), bn(Fn), Ge();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          xl();
          break;
        case 13:
          bn(Un);
          break;
        case 19:
          bn(Un);
          break;
        case 10:
          xd(o.type._context);
          break;
        case 22:
        case 23:
          Wd();
      }
      u = u.return;
    }
    if (or = n, tr = n = Vu(n.current, null), xr = ba = r, Yn = 0, Us = null, uf = bo = Li = 0, ca = js = null, Sl !== null) {
      for (r = 0; r < Sl.length; r++) if (u = Sl[r], o = u.interleaved, o !== null) {
        u.interleaved = null;
        var c = o.next, d = u.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        u.pending = o;
      }
      Sl = null;
    }
    return n;
  }
  function nm(n, r) {
    do {
      var u = tr;
      try {
        if (Ed(), Mt.current = kl, Ac) {
          for (var o = tn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ac = !1;
        }
        if (vn = 0, fr = Jn = tn = null, hs = !1, Cl = 0, Nl.current = null, u === null || u.return === null) {
          Yn = 1, Us = r, tr = null;
          break;
        }
        e: {
          var d = n, h = u.return, x = u, T = r;
          if (r = xr, x.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var F = T, ne = x, ue = ne.tag;
            if (!(ne.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var te = ne.alternate;
              te ? (ne.updateQueue = te.updateQueue, ne.memoizedState = te.memoizedState, ne.lanes = te.lanes) : (ne.updateQueue = null, ne.memoizedState = null);
            }
            var Re = $v(h);
            if (Re !== null) {
              Re.flags &= -257, Fu(Re, h, x, d, r), Re.mode & 1 && Ad(d, F, r), r = Re, T = F;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var Pe = /* @__PURE__ */ new Set();
                Pe.add(T), r.updateQueue = Pe;
              } else Ue.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ad(d, F, r), Qd();
                break e;
              }
              T = Error(E(426));
            }
          } else if (kn && x.mode & 1) {
            var Wn = $v(h);
            if (Wn !== null) {
              !(Wn.flags & 65536) && (Wn.flags |= 256), Fu(Wn, h, x, d, r), eu(_l(T, x));
              break e;
            }
          }
          d = T = _l(T, x), Yn !== 4 && (Yn = 2), js === null ? js = [d] : js.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var M = Vv(d, T, r);
                zv(d, M);
                break e;
              case 1:
                x = T;
                var _ = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Pu === null || !Pu.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var re = Ld(d, x, r);
                  zv(d, re);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        um(u);
      } catch (je) {
        r = je, tr === u && u !== null && (tr = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rm() {
    var n = Hu.current;
    return Hu.current = kl, n === null ? kl : n;
  }
  function Qd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), or === null || !(Li & 268435455) && !(bo & 268435455) || ci(or, xr);
  }
  function sf(n, r) {
    var u = It;
    It |= 2;
    var o = rm();
    (or !== n || xr !== r) && (Ra = null, iu(n, r));
    do
      try {
        hy();
        break;
      } catch (c) {
        nm(n, c);
      }
    while (!0);
    if (Ed(), It = u, Hu.current = o, tr !== null) throw Error(E(261));
    return or = null, xr = 0, Yn;
  }
  function hy() {
    for (; tr !== null; ) im(tr);
  }
  function am() {
    for (; tr !== null && !Ja(); ) im(tr);
  }
  function im(n) {
    var r = cm(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? um(n) : tr = r, Nl.current = null;
  }
  function um(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = nf(u, r), u !== null) {
          u.flags &= 32767, tr = u;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, tr = null;
          return;
        }
      } else if (u = Kv(u, r, ba), u !== null) {
        tr = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        tr = r;
        return;
      }
      tr = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Al(n, r, u) {
    var o = Zt, c = Er.transition;
    try {
      Er.transition = null, Zt = 1, yy(n, r, u, o);
    } finally {
      Er.transition = c, Zt = o;
    }
    return null;
  }
  function yy(n, r, u, o) {
    do
      ko();
    while (au !== null);
    if (It & 6) throw Error(E(327));
    u = n.finishedWork;
    var c = n.finishedLanes;
    if (u === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = u.lanes | u.childLanes;
    if (Gf(n, d), n === or && (tr = or = null, xr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || lf || (lf = !0, fm(al, function() {
      return ko(), null;
    })), d = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var h = Zt;
      Zt = 1;
      var x = It;
      It |= 4, Nl.current = null, Jv(n, u), Pd(u, n), lo(vl), Ma = !!us, vl = us = null, n.current = u, py(u), Za(), It = x, Zt = h, Er.transition = d;
    } else n.current = u;
    if (lf && (lf = !1, au = n, zs = c), d = n.pendingLanes, d === 0 && (Pu = null), Wo(u.stateNode), fa(n, bt()), r !== null) for (o = n.onRecoverableError, u = 0; u < r.length; u++) c = r[u], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (To) throw To = !1, n = Ol, Ol = null, n;
    return zs & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === wo ? Bu++ : (Bu = 0, wo = n) : Bu = 0, wi(), null;
  }
  function ko() {
    if (au !== null) {
      var n = Zl(zs), r = Er.transition, u = Zt;
      try {
        if (Er.transition = null, Zt = 16 > n ? 16 : n, au === null) var o = !1;
        else {
          if (n = au, au = null, zs = 0, It & 6) throw Error(E(331));
          var c = It;
          for (It |= 4, Ne = n.current; Ne !== null; ) {
            var d = Ne, h = d.child;
            if (Ne.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var T = 0; T < x.length; T++) {
                  var F = x[T];
                  for (Ne = F; Ne !== null; ) {
                    var ne = Ne;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, ne, d);
                    }
                    var ue = ne.child;
                    if (ue !== null) ue.return = ne, Ne = ue;
                    else for (; Ne !== null; ) {
                      ne = Ne;
                      var te = ne.sibling, Re = ne.return;
                      if (af(ne), ne === F) {
                        Ne = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = Re, Ne = te;
                        break;
                      }
                      Ne = Re;
                    }
                  }
                }
                var Ue = d.alternate;
                if (Ue !== null) {
                  var Pe = Ue.child;
                  if (Pe !== null) {
                    Ue.child = null;
                    do {
                      var Wn = Pe.sibling;
                      Pe.sibling = null, Pe = Wn;
                    } while (Pe !== null);
                  }
                }
                Ne = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) h.return = d, Ne = h;
            else e: for (; Ne !== null; ) {
              if (d = Ne, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var M = d.sibling;
              if (M !== null) {
                M.return = d.return, Ne = M;
                break e;
              }
              Ne = d.return;
            }
          }
          var _ = n.current;
          for (Ne = _; Ne !== null; ) {
            h = Ne;
            var U = h.child;
            if (h.subtreeFlags & 2064 && U !== null) U.return = h, Ne = U;
            else e: for (h = _; Ne !== null; ) {
              if (x = Ne, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, x);
                }
              } catch (je) {
                _n(x, x.return, je);
              }
              if (x === h) {
                Ne = null;
                break e;
              }
              var re = x.sibling;
              if (re !== null) {
                re.return = x.return, Ne = re;
                break e;
              }
              Ne = x.return;
            }
          }
          if (It = c, wi(), ea && typeof ea.onPostCommitFiberRoot == "function") try {
            ea.onPostCommitFiberRoot(Su, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Zt = u, Er.transition = r;
      }
    }
    return !1;
  }
  function lm(n, r, u) {
    r = _l(u, r), r = Vv(n, r, 1), n = Uu(n, r, 1), r = nr(), n !== null && (Yi(n, 1, r), fa(n, r));
  }
  function _n(n, r, u) {
    if (n.tag === 3) lm(n, n, u);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lm(r, n, u);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pu === null || !Pu.has(o))) {
          n = _l(u, n), n = Ld(r, n, 1), r = Uu(r, n, 1), n = nr(), r !== null && (Yi(r, 1, n), fa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function gy(n, r, u) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & u, or === n && (xr & u) === u && (Yn === 4 || Yn === 3 && (xr & 130023424) === xr && 500 > bt() - $d ? iu(n, 0) : uf |= u), fa(n, r);
  }
  function om(n, r) {
    r === 0 && (n.mode & 1 ? (r = ga, ga <<= 1, !(ga & 130023424) && (ga = 4194304)) : r = 1);
    var u = nr();
    n = xa(n, r), n !== null && (Yi(n, r, u), fa(n, u));
  }
  function Sy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), om(n, u);
  }
  function sm(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (u = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(E(314));
    }
    o !== null && o.delete(r), om(n, u);
  }
  var cm;
  cm = function(n, r, u) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || ur.current) Zn = !0;
    else {
      if (!(n.lanes & u) && !(r.flags & 128)) return Zn = !1, _s(n, r, u);
      Zn = !!(n.flags & 131072);
    }
    else Zn = !1, kn && r.flags & 1048576 && Lv(r, Zi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ha(n, r), n = r.pendingProps;
        var c = ra(r, Fn.current);
        An(r, u), c = ju(null, r, o, n, c, u);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kn(o) ? (d = !0, cr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, bs(r, o, n, u), r = ws(null, r, o, !0, d, u)) : (r.tag = 0, kn && d && kc(r), Sr(null, r, c, u), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = xy(o), n = oi(o, n), c) {
            case 0:
              r = Iv(null, r, o, n, u);
              break e;
            case 1:
              r = Yv(null, r, o, n, u);
              break e;
            case 11:
              r = oa(null, r, o, n, u);
              break e;
            case 14:
              r = Dl(null, r, o, oi(o.type, n), u);
              break e;
          }
          throw Error(E(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), Iv(n, r, o, c, u);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), Yv(n, r, o, c, u);
      case 3:
        e: {
          if (Eo(r), n === null) throw Error(E(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jv(n, r), fs(r, o, null, u);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(E(423)), r), r = Wv(n, r, o, u, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(E(424)), r), r = Wv(n, r, o, u, c);
            break e;
          } else for (ia = bi(r.stateNode.containerInfo.firstChild), aa = r, kn = !0, za = null, u = Se(r, null, o, u), r.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Au(), o === c) {
              r = Pa(n, r, u);
              break e;
            }
            Sr(n, r, o, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && gd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Cc(o, c) ? h = null : d !== null && Cc(o, d) && (r.flags |= 32), Ud(n, r), Sr(n, r, h, u), r.child;
      case 6:
        return n === null && gd(r), null;
      case 13:
        return tf(n, r, u);
      case 4:
        return kd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Vn(r, null, o, u) : Sr(n, r, o, u), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), oa(n, r, o, c, u);
      case 7:
        return Sr(n, r, r.pendingProps, u), r.child;
      case 8:
        return Sr(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return Sr(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, We(Ea, o._currentValue), o._currentValue = h, d !== null) if (ii(d.value, h)) {
            if (d.children === c.children && !ur.current) {
              r = Pa(n, r, u);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              h = d.child;
              for (var T = x.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = tu(-1, u & -u), T.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var ne = F.pending;
                      ne === null ? T.next = T : (T.next = ne.next, ne.next = T), F.pending = T;
                    }
                  }
                  d.lanes |= u, T = d.alternate, T !== null && (T.lanes |= u), Cd(
                    d.return,
                    u,
                    r
                  ), x.lanes |= u;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(E(341));
              h.lanes |= u, x = h.alternate, x !== null && (x.lanes |= u), Cd(h, u, r), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === r) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          Sr(n, r, c.children, u), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, An(r, u), c = Fa(c), o = o(c), r.flags |= 1, Sr(n, r, o, u), r.child;
      case 14:
        return o = r.type, c = oi(o, r.pendingProps), c = oi(o.type, c), Dl(n, r, o, c, u);
      case 15:
        return Tt(n, r, r.type, r.pendingProps, u);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), Ha(n, r), r.tag = 1, Kn(o) ? (n = !0, cr(r)) : n = !1, An(r, u), Jc(r, o, c), bs(r, o, c, u), ws(null, r, o, !0, n, u);
      case 19:
        return Ni(n, r, u);
      case 22:
        return Ts(n, r, u);
    }
    throw Error(E(156, r.tag));
  };
  function fm(n, r) {
    return Rn(n, r);
  }
  function Ey(n, r, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, u, o) {
    return new Ey(n, r, u, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function xy(n) {
    if (typeof n == "function") return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === yt) return 11;
      if (n === Lt) return 14;
    }
    return 2;
  }
  function Vu(n, r) {
    var u = n.alternate;
    return u === null ? (u = Va(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Ps(n, r, u, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Gd(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case De:
        return uu(u.children, c, d, r);
      case zt:
        h = 8, c |= 8;
        break;
      case it:
        return n = Va(12, u, r, c | 2), n.elementType = it, n.lanes = d, n;
      case Be:
        return n = Va(13, u, r, c), n.elementType = Be, n.lanes = d, n;
      case wt:
        return n = Va(19, u, r, c), n.elementType = wt, n.lanes = d, n;
      case Le:
        return $u(u, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ot:
            h = 10;
            break e;
          case Pt:
            h = 9;
            break e;
          case yt:
            h = 11;
            break e;
          case Lt:
            h = 14;
            break e;
          case Dt:
            h = 16, o = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = Va(h, u, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function uu(n, r, u, o) {
    return n = Va(7, n, o, r), n.lanes = u, n;
  }
  function $u(n, r, u, o) {
    return n = Va(22, n, o, r), n.elementType = Le, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function qd(n, r, u) {
    return n = Va(6, n, null, r), n.lanes = u, n;
  }
  function cf(n, r, u) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function dm(n, r, u, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, u, o, c, d, h, x, T) {
    return n = new dm(n, r, u, x, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function Cy(n, r, u) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ke, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: u };
  }
  function Kd(n) {
    if (!n) return Or;
    n = n._reactInternals;
    e: {
      if (Ct(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Kn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(E(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Kn(u)) return ss(n, u, r);
    }
    return r;
  }
  function pm(n, r, u, o, c, d, h, x, T) {
    return n = ff(u, o, !0, n, c, d, h, x, T), n.context = Kd(null), u = n.current, o = nr(), c = Ai(u), d = tu(o, c), d.callback = r ?? null, Uu(u, d, c), n.current.lanes = c, Yi(n, c, o), fa(n, o), n;
  }
  function df(n, r, u, o) {
    var c = r.current, d = nr(), h = Ai(c);
    return u = Kd(u), r.context === null ? r.context = u : r.pendingContext = u, r = tu(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Uu(c, r, h), n !== null && ($r(n, c, h, d), Oc(n, c, h)), h;
  }
  function pf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function vf(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function vm() {
    return null;
  }
  var Ul = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jd(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Jd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(E(409));
    df(n, r, null, null);
  }, mf.prototype.unmount = Jd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ll(function() {
        df(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ht();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < ir.length && r !== 0 && r < ir[u].priority; u++) ;
      ir.splice(u, 0, n), u === 0 && qo(n);
    }
  };
  function Zd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function mm() {
  }
  function by(n, r, u, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = pf(h);
          d.call(F);
        };
      }
      var h = pm(r, o, n, 0, null, !1, !1, "", mm);
      return n._reactRootContainer = h, n[Xi] = h.current, so(n.nodeType === 8 ? n.parentNode : n), Ll(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var x = o;
      o = function() {
        var F = pf(T);
        x.call(F);
      };
    }
    var T = ff(n, 0, !1, null, null, !1, !1, "", mm);
    return n._reactRootContainer = T, n[Xi] = T.current, so(n.nodeType === 8 ? n.parentNode : n), Ll(function() {
      df(r, T, u, o);
    }), T;
  }
  function Bs(n, r, u, o, c) {
    var d = u._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var T = pf(h);
          x.call(T);
        };
      }
      df(r, h, n, c);
    } else h = by(u, r, n, c, o);
    return pf(h);
  }
  Gt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ti(r.pendingLanes);
          u !== 0 && (Wi(r, u | 1), fa(r, bt()), !(It & 6) && (Ro = bt() + 500, wi()));
        }
        break;
      case 13:
        Ll(function() {
          var o = xa(n, 1);
          if (o !== null) {
            var c = nr();
            $r(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = xa(n, 134217728);
      if (r !== null) {
        var u = nr();
        $r(r, n, 134217728, u);
      }
      vf(n, 134217728);
    }
  }, gi = function(n) {
    if (n.tag === 13) {
      var r = Ai(n), u = xa(n, r);
      if (u !== null) {
        var o = nr();
        $r(u, n, r, o);
      }
      vf(n, r);
    }
  }, ht = function() {
    return Zt;
  }, eo = function(n, r) {
    var u = Zt;
    try {
      return Zt = n, r();
    } finally {
      Zt = u;
    }
  }, Ie = function(n, r, u) {
    switch (r) {
      case "input":
        if (Gn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; ) u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var o = u[r];
            if (o !== n && o.form === n.form) {
              var c = Ln(o);
              if (!c) throw Error(E(90));
              Sn(o), Gn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Nr(n, u);
        break;
      case "select":
        r = u.value, r != null && En(n, !!u.multiple, r, !1);
    }
  }, Ii = Yd, Ka = Ll;
  var Ry = { usingClientEntryPoint: !1, Events: [Qe, ui, Ln, ya, $i, Yd] }, Vs = { findFiberByHostInstance: ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hm = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber) try {
      Su = Iu.inject(hm), ea = Iu;
    } catch {
    }
  }
  return Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Ga.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r)) throw Error(E(200));
    return Cy(n, r, null, u);
  }, Ga.createRoot = function(n, r) {
    if (!Zd(n)) throw Error(E(299));
    var u = !1, o = "", c = Ul;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, u, !1, o, c), n[Xi] = r.current, so(n.nodeType === 8 ? n.parentNode : n), new Jd(r);
  }, Ga.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = Bn(r), n = n === null ? null : n.stateNode, n;
  }, Ga.flushSync = function(n) {
    return Ll(n);
  }, Ga.hydrate = function(n, r, u) {
    if (!hf(r)) throw Error(E(200));
    return Bs(null, n, r, !0, u);
  }, Ga.hydrateRoot = function(n, r, u) {
    if (!Zd(n)) throw Error(E(405));
    var o = u != null && u.hydratedSources || null, c = !1, d = "", h = Ul;
    if (u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onRecoverableError !== void 0 && (h = u.onRecoverableError)), r = pm(r, null, n, 1, u ?? null, c, !1, d, h), n[Xi] = r.current, so(n), o) for (n = 0; n < o.length; n++) u = o[n], c = u._getVersion, c = c(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, c] : r.mutableSourceEagerHydrationData.push(
      u,
      c
    );
    return new mf(r);
  }, Ga.render = function(n, r, u) {
    if (!hf(r)) throw Error(E(200));
    return Bs(null, n, r, !1, u);
  }, Ga.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(E(40));
    return n._reactRootContainer ? (Ll(function() {
      Bs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Ga.unstable_batchedUpdates = Yd, Ga.unstable_renderSubtreeIntoContainer = function(n, r, u, o) {
    if (!hf(u)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return Bs(n, r, u, !1, o);
  }, Ga.version = "18.3.1-next-f1338f8080-20240426", Ga;
}
var qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function Dw() {
  return Ex || (Ex = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var b = fe, w = Nx(), E = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = !1;
    function q(e) {
      Y = e;
    }
    function X(e) {
      if (!Y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        we("warn", e, a);
      }
    }
    function y(e) {
      if (!Y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        we("error", e, a);
      }
    }
    function we(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Q = 0, ae = 1, xe = 2, J = 3, pe = 4, ce = 5, Fe = 6, lt = 7, qe = 8, Ft = 9, He = 10, ie = 11, Oe = 12, ge = 13, Ke = 14, De = 15, zt = 16, it = 17, ot = 18, Pt = 19, yt = 21, Be = 22, wt = 23, Lt = 24, Dt = 25, Le = !0, oe = !1, Ae = !1, de = !1, N = !1, P = !0, Xe = !0, Ve = !0, st = !0, tt = /* @__PURE__ */ new Set(), ft = {}, G = {};
    function dt(e, t) {
      At(e, t), At(e + "Capture", t);
    }
    function At(e, t) {
      ft[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ft[e] = t;
      {
        var a = e.toLowerCase();
        G[a] = e, e === "onDoubleClick" && (G.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Sn = Object.prototype.hasOwnProperty;
    function mt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Nt(e) {
      try {
        return Kt(e), !1;
      } catch {
        return !0;
      }
    }
    function Kt(e) {
      return "" + e;
    }
    function cn(e, t) {
      if (Nt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mt(e)), Kt(e);
    }
    function Gn(e) {
      if (Nt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Kt(e);
    }
    function Zr(e, t) {
      if (Nt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mt(e)), Kt(e);
    }
    function Hn(e, t) {
      if (Nt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mt(e)), Kt(e);
    }
    function Dn(e) {
      if (Nt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Kt(e);
    }
    function En(e) {
      if (Nt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", mt(e)), Kt(e);
    }
    var Nn = 0, On = 1, Nr = 2, be = 3, at = 4, Rt = 5, Vt = 6, un = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Z = un + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ke = new RegExp("^[" + un + "][" + Z + "]*$"), pt = {}, Et = {};
    function Qt(e) {
      return Sn.call(Et, e) ? !0 : Sn.call(pt, e) ? !1 : ke.test(e) ? (Et[e] = !0, !0) : (pt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function ln(e, t, a) {
      return t !== null ? t.type === Nn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Xt(e, t, a, i) {
      if (a !== null && a.type === Nn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function B(e, t, a, i) {
      if (t === null || typeof t > "u" || Xt(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case be:
            return !t;
          case at:
            return t === !1;
          case Rt:
            return isNaN(t);
          case Vt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ve(e) {
      return Ie.hasOwnProperty(e) ? Ie[e] : null;
    }
    function $e(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Nr || t === be || t === at, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ie = {}, Pn = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Pn.forEach(function(e) {
      Ie[e] = new $e(
        e,
        Nn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ie[t] = new $e(
        t,
        On,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ie[e] = new $e(
        e,
        Nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ie[e] = new $e(
        e,
        Nr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ie[e] = new $e(
        e,
        be,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ie[e] = new $e(
        e,
        be,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ie[e] = new $e(
        e,
        at,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ie[e] = new $e(
        e,
        Vt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ie[e] = new $e(
        e,
        Rt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ar = /[\-\:]([a-z])/g, zn = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, zn);
      Ie[t] = new $e(
        t,
        On,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, zn);
      Ie[t] = new $e(
        t,
        On,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, zn);
      Ie[t] = new $e(
        t,
        On,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ie[e] = new $e(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ya = "xlinkHref";
    Ie[ya] = new $e(
      "xlinkHref",
      On,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ie[e] = new $e(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var $i = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ii = !1;
    function Ka(e) {
      !Ii && $i.test(e) && (Ii = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vi(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        cn(a, t), i.sanitizeURL && Ka("" + a);
        var s = i.attributeName, f = null;
        if (i.type === at) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : B(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (B(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === be)
            return a;
          f = e.getAttribute(s);
        }
        return B(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function nl(e, t, a, i) {
      {
        if (!Qt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return cn(a, t), l === "" + a ? a : l;
      }
    }
    function Ur(e, t, a, i) {
      var l = ve(t);
      if (!ln(t, l, i)) {
        if (B(t, a, l, i) && (a = null), i || l === null) {
          if (Qt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (cn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var v = l.type;
            e[p] = v === be ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = l.attributeName, S = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = l.type, k;
          D === be || D === at && a === !0 ? k = "" : (cn(a, g), k = "" + a, l.sanitizeURL && Ka(k.toString())), S ? e.setAttributeNS(S, g, k) : e.setAttribute(g, k);
        }
      }
    }
    var jr = Symbol.for("react.element"), mr = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), R = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), Ut = Symbol.for("react.scope"), Ot = Symbol.for("react.debug_trace_mode"), Bn = Symbol.for("react.offscreen"), xn = Symbol.for("react.legacy_hidden"), Rn = Symbol.for("react.cache"), hr = Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function bt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var kt = Object.assign, ei = 0, rl, al, gu, Gl, Su, ea, Wo;
    function zr() {
    }
    zr.__reactDisabledLog = !0;
    function lc() {
      {
        if (ei === 0) {
          rl = console.log, al = console.info, gu = console.warn, Gl = console.error, Su = console.group, ea = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ei++;
      }
    }
    function oc() {
      {
        if (ei--, ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: kt({}, e, {
              value: rl
            }),
            info: kt({}, e, {
              value: al
            }),
            warn: kt({}, e, {
              value: gu
            }),
            error: kt({}, e, {
              value: Gl
            }),
            group: kt({}, e, {
              value: Su
            }),
            groupCollapsed: kt({}, e, {
              value: ea
            }),
            groupEnd: kt({}, e, {
              value: Wo
            })
          });
        }
        ei < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ql = E.ReactCurrentDispatcher, Eu;
    function ga(e, t, a) {
      {
        if (Eu === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Eu = i && i[1] || "";
          }
        return `
` + Eu + e;
      }
    }
    var ti = !1, ni;
    {
      var Kl = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new Kl();
    }
    function il(e, t) {
      if (!e || ti)
        return "";
      {
        var a = ni.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ti = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ql.current, ql.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), v = i.stack.split(`
`), g = p.length - 1, S = v.length - 1; g >= 1 && S >= 0 && p[g] !== v[S]; )
            S--;
          for (; g >= 1 && S >= 0; g--, S--)
            if (p[g] !== v[S]) {
              if (g !== 1 || S !== 1)
                do
                  if (g--, S--, S < 0 || p[g] !== v[S]) {
                    var D = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, D), D;
                  }
                while (g >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ti = !1, ql.current = s, oc(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", j = k ? ga(k) : "";
      return typeof e == "function" && ni.set(e, j), j;
    }
    function xu(e, t, a) {
      return il(e, !0);
    }
    function Xl(e, t, a) {
      return il(e, !1);
    }
    function Jl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return il(e, Jl(e));
      if (typeof e == "string")
        return ga(e);
      switch (e) {
        case ye:
          return ga("Suspense");
        case Me:
          return ga("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            return Xl(e.render);
          case Ct:
            return Yi(e.type, t, a);
          case gt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Yi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ce:
          return ga(e.type);
        case zt:
          return ga("Lazy");
        case ge:
          return ga("Suspense");
        case Pt:
          return ga("SuspenseList");
        case Q:
        case xe:
        case De:
          return Xl(e.type);
        case ie:
          return Xl(e.type.render);
        case ae:
          return xu(e.type);
        default:
          return "";
      }
    }
    function Wi(e) {
      try {
        var t = "", a = e;
        do
          t += Gf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Zt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Zl(e) {
      return e.displayName || "Context";
    }
    function Gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case mr:
          return "Portal";
        case hi:
          return "Profiler";
        case Xa:
          return "StrictMode";
        case ye:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Zl(t) + ".Consumer";
          case yi:
            var a = e;
            return Zl(a._context) + ".Provider";
          case K:
            return Zt(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : Gt(e.type) || "Memo";
          case gt: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function gi(e) {
      return e.displayName || "Context";
    }
    function ht(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Lt:
          return "Cache";
        case Ft:
          var i = a;
          return gi(i) + ".Consumer";
        case He:
          var l = a;
          return gi(l._context) + ".Provider";
        case ot:
          return "DehydratedFragment";
        case ie:
          return Qo(a, a.render, "ForwardRef");
        case lt:
          return "Fragment";
        case ce:
          return a;
        case pe:
          return "Portal";
        case J:
          return "Root";
        case Fe:
          return "Text";
        case zt:
          return Gt(a);
        case qe:
          return a === Xa ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case Oe:
          return "Profiler";
        case yt:
          return "Scope";
        case ge:
          return "Suspense";
        case Pt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case ae:
        case Q:
        case it:
        case xe:
        case Ke:
        case De:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = E.ReactDebugCurrentFrame, yr = null, Si = !1;
    function Fr() {
      {
        if (yr === null)
          return null;
        var e = yr._debugOwner;
        if (e !== null && typeof e < "u")
          return ht(e);
      }
      return null;
    }
    function Ei() {
      return yr === null ? "" : Wi(yr);
    }
    function Tn() {
      eo.getCurrentStack = null, yr = null, Si = !1;
    }
    function fn(e) {
      eo.getCurrentStack = e === null ? null : Ei, yr = e, Si = !1;
    }
    function Cu() {
      return yr;
    }
    function ir(e) {
      Si = e;
    }
    function Hr(e) {
      return "" + e;
    }
    function Na(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return En(e), e;
        default:
          return "";
      }
    }
    var ul = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Go(e, t) {
      ul[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bu(e) {
      return e._valueTracker;
    }
    function ll(e) {
      e._valueTracker = null;
    }
    function qf(e) {
      var t = "";
      return e && (qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      En(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            En(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            En(p), i = "" + p;
          },
          stopTracking: function() {
            ll(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ri(e) {
      bu(e) || (e._valueTracker = Oa(e));
    }
    function xi(e) {
      if (!e)
        return !1;
      var t = bu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ma(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var to = !1, no = !1, Ru = !1, ol = !1;
    function ro(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ao(e, t) {
      var a = e, i = t.checked, l = kt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ai(e, t) {
      Go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !no && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), no = !0), t.value !== void 0 && t.defaultValue !== void 0 && !to && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), to = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Na(t.value != null ? t.value : i),
        controlled: ro(t)
      };
    }
    function m(e, t) {
      var a = e, i = t.checked;
      i != null && Ur(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = ro(t);
        !a._wrapperState.controlled && i && !ol && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ol = !0), a._wrapperState.controlled && !i && !Ru && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ru = !0);
      }
      m(e, t);
      var l = Na(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Hr(l)) : a.value !== Hr(l) && (a.value = Hr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Je(a, t.type, l) : t.hasOwnProperty("defaultValue") && Je(a, t.type, Na(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Hr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function V(e, t) {
      var a = e;
      C(a, t), se(a, t);
    }
    function se(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        cn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Am(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            xi(f), C(f, p);
          }
        }
      }
    }
    function Je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ma(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Hr(e._wrapperState.initialValue) : e.defaultValue !== Hr(a) && (e.defaultValue = Hr(a)));
    }
    var he = !1, nt = !1, jt = !1;
    function qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? b.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || nt || (nt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jt || (jt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !he && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), he = !0);
    }
    function Cn(e, t) {
      t.value != null && e.setAttribute("value", Hr(Na(t.value)));
    }
    var dn = Array.isArray;
    function _t(e) {
      return dn(e);
    }
    var pn;
    pn = !1;
    function Mn() {
      var e = Fr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Tu = ["value", "defaultValue"];
    function Ko(e) {
      {
        Go("select", e);
        for (var t = 0; t < Tu.length; t++) {
          var a = Tu[t];
          if (e[a] != null) {
            var i = _t(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Mn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Mn());
          }
        }
      }
    }
    function Qi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < l.length; v++) {
          var g = f.hasOwnProperty("$" + l[v].value);
          l[v].selected !== g && (l[v].selected = g), g && i && (l[v].defaultSelected = !0);
        }
      } else {
        for (var S = Hr(Na(a)), D = null, k = 0; k < l.length; k++) {
          if (l[k].value === S) {
            l[k].selected = !0, i && (l[k].defaultSelected = !0);
            return;
          }
          D === null && !l[k].disabled && (D = l[k]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Xo(e, t) {
      return kt({}, t, {
        value: void 0
      });
    }
    function sl(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !pn && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), pn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Qi(a, !!t.multiple, i, !1) : t.defaultValue != null && Qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Qi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Qi(a, !!t.multiple, t.defaultValue, !0) : Qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Qi(a, !!t.multiple, i, !1);
    }
    var rv = !1;
    function Jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = kt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Hr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zf(e, t) {
      var a = e;
      Go("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component"), rv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_t(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Na(i)
      };
    }
    function av(e, t) {
      var a = e, i = Na(t.value), l = Na(t.defaultValue);
      if (i != null) {
        var s = Hr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Hr(l));
    }
    function iv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zh(e, t) {
      av(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", ed = "http://www.w3.org/1998/Math/MathML", td = "http://www.w3.org/2000/svg";
    function nd(e) {
      switch (e) {
        case "svg":
          return td;
        case "math":
          return ed;
        default:
          return Gi;
      }
    }
    function rd(e, t) {
      return e == null || e === Gi ? nd(t) : e === td && t === "foreignObject" ? Gi : e;
    }
    var uv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, cc, lv = uv(function(e, t) {
      if (e.namespaceURI === td && !("innerHTML" in e)) {
        cc = cc || document.createElement("div"), cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ta = 1, qi = 3, qn = 8, Ki = 9, ad = 11, io = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      sv.forEach(function(t) {
        Zo[ov(t, e)] = Zo[e];
      });
    });
    function fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (Hn(t, e), ("" + t).trim());
    }
    var cv = /([A-Z])/g, fv = /^ms-/;
    function uo(e) {
      return e.replace(cv, "-$1").toLowerCase().replace(fv, "-ms-");
    }
    var dv = function() {
    };
    {
      var ey = /^(?:webkit|moz|o)[A-Z]/, ty = /^-ms-/, pv = /-(.)/g, id = /;\s*$/, Ci = {}, cl = {}, vv = !1, es = !1, ny = function(e) {
        return e.replace(pv, function(t, a) {
          return a.toUpperCase();
        });
      }, mv = function(e) {
        Ci.hasOwnProperty(e) && Ci[e] || (Ci[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ny(e.replace(ty, "ms-"))
        ));
      }, ud = function(e) {
        Ci.hasOwnProperty(e) && Ci[e] || (Ci[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ld = function(e, t) {
        cl.hasOwnProperty(t) && cl[t] || (cl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(id, "")));
      }, hv = function(e, t) {
        vv || (vv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, yv = function(e, t) {
        es || (es = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      dv = function(e, t) {
        e.indexOf("-") > -1 ? mv(e) : ey.test(e) ? ud(e) : id.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || yv(e, t));
      };
    }
    var gv = dv;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : uo(i)) + ":", t += fc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Sv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || gv(i, t[i]);
          var s = fc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ev(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function iy(e, t) {
      {
        if (!t)
          return;
        var a = Ev(e), i = Ev(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (l[v])
              continue;
            l[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ay(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ii = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ts = kt({
      menuitem: !0
    }, ii), xv = "__html";
    function dc(e, t) {
      if (t) {
        if (ts[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(xv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function wu(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ns = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, uy = new RegExp("^(aria)-[" + Z + "]*$"), oo = new RegExp("^(aria)[A-Z][" + Z + "]*$");
    function od(e, t) {
      {
        if (Sn.call(lo, t) && lo[t])
          return !0;
        if (oo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (uy.test(t)) {
          var l = t.toLowerCase(), s = pc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function rs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = od(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function sd(e, t) {
      wu(e, t) || rs(e, t);
    }
    var cd = !1;
    function vc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !cd && (cd = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fl = function() {
    };
    {
      var gr = {}, fd = /^on./, mc = /^on[^A-Z]/, Cv = new RegExp("^(aria)-[" + Z + "]*$"), bv = new RegExp("^(aria)[A-Z][" + Z + "]*$");
      fl = function(e, t, a, i) {
        if (Sn.call(gr, t) && gr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), gr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), gr[t] = !0, !0;
          if (fd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), gr[t] = !0, !0;
        } else if (fd.test(t))
          return mc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), gr[t] = !0, !0;
        if (Cv.test(t) || bv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), gr[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), gr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), gr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), gr[t] = !0, !0;
        var v = ve(t), g = v !== null && v.type === Nn;
        if (ns.hasOwnProperty(l)) {
          var S = ns[l];
          if (S !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, S), gr[t] = !0, !0;
        } else if (!g && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), gr[t] = !0, !0;
        return typeof a == "boolean" && Xt(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), gr[t] = !0, !0) : g ? !0 : Xt(t, a, v, !1) ? (gr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === be && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), gr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = fl(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      wu(e, t) || Rv(e, t, a);
    }
    var dd = 1, hc = 2, La = 4, pd = dd | hc | La, dl = null;
    function ly(e) {
      dl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), dl = e;
    }
    function oy() {
      dl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), dl = null;
    }
    function as(e) {
      return e === dl;
    }
    function vd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qi ? t.parentNode : t;
    }
    var yc = null, pl = null, on = null;
    function gc(e) {
      var t = No(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Am(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function Sc(e) {
      yc = e;
    }
    function so(e) {
      pl ? on ? on.push(e) : on = [e] : pl = e;
    }
    function wv() {
      return pl !== null || on !== null;
    }
    function Ec() {
      if (pl) {
        var e = pl, t = on;
        if (pl = null, on = null, gc(e), t)
          for (var a = 0; a < t.length; a++)
            gc(t[a]);
      }
    }
    var co = function(e, t) {
      return e(t);
    }, is = function() {
    }, ku = !1;
    function kv() {
      var e = wv();
      e && (is(), Ec());
    }
    function _v(e, t, a) {
      if (ku)
        return e(t, a);
      ku = !0;
      try {
        return co(e, t, a);
      } finally {
        ku = !1, kv();
      }
    }
    function sy(e, t, a) {
      co = e, is = a;
    }
    function Dv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Dv(t));
        default:
          return !1;
      }
    }
    function _u(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Am(a);
      if (i === null)
        return null;
      var l = i[t];
      if (xc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var us = !1;
    if (gn)
      try {
        var vl = {};
        Object.defineProperty(vl, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", vl, vl), window.removeEventListener("test", vl, vl);
      } catch {
        us = !1;
      }
    function Cc(e, t, a, i, l, s, f, p, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, g);
      } catch (S) {
        this.onError(S);
      }
    }
    var bc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var md = document.createElement("react");
      bc = function(t, a, i, l, s, f, p, v, g) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), D = !1, k = !0, j = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function $() {
          md.removeEventListener(I, Ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var Ee = Array.prototype.slice.call(arguments, 3);
        function Ze() {
          D = !0, $(), a.apply(i, Ee), k = !1;
        }
        var Ye, Wt = !1, Ht = !1;
        function L(A) {
          if (Ye = A.error, Wt = !0, Ye === null && A.colno === 0 && A.lineno === 0 && (Ht = !0), A.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var I = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), md.addEventListener(I, Ze, !1), S.initEvent(I, !1, !1), md.dispatchEvent(S), H && Object.defineProperty(window, "event", H), D && k && (Wt ? Ht && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", L), !D)
          return $(), Cc.apply(this, arguments);
      };
    }
    var Nv = bc, fo = !1, Rc = null, po = !1, bi = null, Ov = {
      onError: function(e) {
        fo = !0, Rc = e;
      }
    };
    function Du(e, t, a, i, l, s, f, p, v) {
      fo = !1, Rc = null, Nv.apply(Ov, arguments);
    }
    function Ri(e, t, a, i, l, s, f, p, v) {
      if (Du.apply(this, arguments), fo) {
        var g = os();
        po || (po = !0, bi = g);
      }
    }
    function ls() {
      if (po) {
        var e = bi;
        throw po = !1, bi = null, e;
      }
    }
    function Xi() {
      return fo;
    }
    function os() {
      if (fo) {
        var e = Rc;
        return fo = !1, Rc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vo(e) {
      return e._reactInternals;
    }
    function cy(e) {
      return e._reactInternals !== void 0;
    }
    function ml(e, t) {
      e._reactInternals = t;
    }
    var Qe = (
      /*                      */
      0
    ), ui = (
      /*                */
      1
    ), Ln = (
      /*                    */
      2
    ), $t = (
      /*                       */
      4
    ), Aa = (
      /*                */
      16
    ), Ua = (
      /*                 */
      32
    ), bn = (
      /*                     */
      64
    ), We = (
      /*                   */
      128
    ), Or = (
      /*            */
      256
    ), Fn = (
      /*                          */
      512
    ), ur = (
      /*                     */
      1024
    ), na = (
      /*                      */
      2048
    ), ra = (
      /*                    */
      4096
    ), Kn = (
      /*                   */
      8192
    ), mo = (
      /*             */
      16384
    ), Mv = (
      /*               */
      32767
    ), ss = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), Tc = (
      /* */
      131072
    ), Ti = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), wc = (
      /*                */
      8388608
    ), Nu = (
      /*               */
      16777216
    ), wi = (
      /*              */
      33554432
    ), Ou = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      $t | ur | 0
    ), Mu = Ln | $t | Aa | Ua | Fn | ra | Kn, Lu = $t | bn | Fn | Kn, Zi = na | Aa, Xn = Ji | wc | ho, ja = E.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Ln | ra)) !== Qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function ki(e) {
      if (e.tag === ge) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function _i(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hl(e) {
      return Sa(e) === e;
    }
    function Lv(e) {
      {
        var t = ja.current;
        if (t !== null && t.tag === ae) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ht(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = vo(e);
      return l ? Sa(l) === l : !1;
    }
    function kc(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = Sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return kc(s), e;
            if (v === l)
              return kc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var g = !1, S = s.child; S; ) {
            if (S === i) {
              g = !0, i = s, l = f;
              break;
            }
            if (S === l) {
              g = !0, l = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!g) {
            for (S = f.child; S; ) {
              if (S === i) {
                g = !0, i = f, l = s;
                break;
              }
              if (S === l) {
                g = !0, l = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!g)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function aa(e) {
      var t = _c(e);
      return t !== null ? ia(t) : null;
    }
    function ia(e) {
      if (e.tag === ce || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ia(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function kn(e) {
      var t = _c(e);
      return t !== null ? za(t) : null;
    }
    function za(e) {
      if (e.tag === ce || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== pe) {
          var a = za(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = w.unstable_scheduleCallback, Av = w.unstable_cancelCallback, yd = w.unstable_shouldYield, gd = w.unstable_requestPaint, lr = w.unstable_now, Dc = w.unstable_getCurrentPriorityLevel, cs = w.unstable_ImmediatePriority, Au = w.unstable_UserBlockingPriority, eu = w.unstable_NormalPriority, fy = w.unstable_LowPriority, yl = w.unstable_IdlePriority, Nc = w.unstable_yieldValue, Uv = w.unstable_setDisableYieldValue, gl = null, Vn = null, Se = null, Ea = !1, ua = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = kt({}, e, {
          getLaneLabelMap: Sl,
          injectProfilingHooks: Fa
        })), gl = t.inject(e), Vn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(gl, e, t);
        } catch (a) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & We) === We;
          if (Ve) {
            var i;
            switch (t) {
              case Pr:
                i = cs;
                break;
              case Ni:
                i = Au;
                break;
              case Ha:
                i = eu;
                break;
              case Pa:
                i = yl;
                break;
              default:
                i = eu;
                break;
            }
            Vn.onCommitFiberRoot(gl, e, i, a);
          }
        } catch (l) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function xd(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(gl, e);
        } catch (t) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(gl, e);
        } catch (t) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Nc == "function" && (Uv(e), q(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(gl, e);
        } catch (t) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Fa(e) {
      Se = e;
    }
    function Sl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cl; a++) {
          var i = Hv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bd(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function Rd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function xa(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function Ca() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function Td(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function jv() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function tu(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Uu() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function zv() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function Di(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function vs() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function El(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function kd() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function xl(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function Fv() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Mc() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function Un(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Lc(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), Mt = (
      /*                 */
      1
    ), en = (
      /*                    */
      2
    ), vn = (
      /*               */
      8
    ), tn = (
      /*              */
      16
    ), Jn = Math.clz32 ? Math.clz32 : hs, fr = Math.log, Ac = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (fr(t) / Ac | 0) | 0;
    }
    var Cl = 31, ee = (
      /*                        */
      0
    ), Jt = (
      /*                          */
      0
    ), ut = (
      /*                        */
      1
    ), ju = (
      /*    */
      2
    ), li = (
      /*             */
      4
    ), Mr = (
      /*            */
      8
    ), $n = (
      /*                     */
      16
    ), nu = (
      /*                */
      32
    ), zu = (
      /*                       */
      4194240
    ), bl = (
      /*                        */
      64
    ), Uc = (
      /*                        */
      128
    ), jc = (
      /*                        */
      256
    ), zc = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), Hc = (
      /*                        */
      2048
    ), Pc = (
      /*                        */
      4096
    ), Bc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Rl = (
      /*                       */
      32768
    ), $c = (
      /*                       */
      65536
    ), go = (
      /*                       */
      131072
    ), So = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), ys = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), Tl = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Gc = (
      /*                             */
      67108864
    ), _d = Tl, Es = (
      /*          */
      134217728
    ), Dd = (
      /*                          */
      268435455
    ), xs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), la = (
      /*                   */
      1073741824
    );
    function Hv(e) {
      {
        if (e & ut)
          return "Sync";
        if (e & ju)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & Mr)
          return "DefaultHydration";
        if (e & $n)
          return "Default";
        if (e & nu)
          return "TransitionHydration";
        if (e & zu)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & xs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & la)
          return "Offscreen";
      }
    }
    var yn = -1, kl = bl, qc = Tl;
    function Cs(e) {
      switch (Fu(e)) {
        case ut:
          return ut;
        case ju:
          return ju;
        case li:
          return li;
        case Mr:
          return Mr;
        case $n:
          return $n;
        case nu:
          return nu;
        case bl:
        case Uc:
        case jc:
        case zc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Rl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
          return e & zu;
        case Tl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          return e & gs;
        case Es:
          return Es;
        case xs:
          return xs;
        case wl:
          return wl;
        case la:
          return la;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, l = e.suspendedLanes, s = e.pingedLanes, f = a & Dd;
      if (f !== ee) {
        var p = f & ~l;
        if (p !== ee)
          i = Cs(p);
        else {
          var v = f & s;
          v !== ee && (i = Cs(v));
        }
      } else {
        var g = a & ~l;
        g !== ee ? i = Cs(g) : s !== ee && (i = Cs(s));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ee) {
        var S = Fu(i), D = Fu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === $n && (D & zu) !== ee
        )
          return t;
      }
      (i & li) !== ee && (i |= a & $n);
      var k = e.entangledLanes;
      if (k !== ee)
        for (var j = e.entanglements, H = i & k; H > 0; ) {
          var $ = Zn(H), Ee = 1 << $;
          i |= j[$], H &= ~Ee;
        }
      return i;
    }
    function oi(e, t) {
      for (var a = e.eventTimes, i = yn; t > 0; ) {
        var l = Zn(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Nd(e, t) {
      switch (e) {
        case ut:
        case ju:
        case li:
          return t + 250;
        case Mr:
        case $n:
        case nu:
        case bl:
        case Uc:
        case jc:
        case zc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Rl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
          return t + 5e3;
        case Tl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          return yn;
        case Es:
        case xs:
        case wl:
        case la:
          return yn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), yn;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Zn(f), v = 1 << p, g = s[p];
        g === yn ? ((v & i) === ee || (v & l) !== ee) && (s[p] = Nd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Pv(e) {
      return Cs(e.pendingLanes);
    }
    function Jc(e) {
      var t = e.pendingLanes & ~la;
      return t !== ee ? t : t & la ? la : ee;
    }
    function Bv(e) {
      return (e & ut) !== ee;
    }
    function bs(e) {
      return (e & Dd) !== ee;
    }
    function _l(e) {
      return (e & gs) === e;
    }
    function Od(e) {
      var t = ut | li | $n;
      return (e & t) === ee;
    }
    function Md(e) {
      return (e & zu) === e;
    }
    function Zc(e, t) {
      var a = ju | li | Mr | $n;
      return (t & a) !== ee;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Ld(e) {
      return (e & zu) !== ee;
    }
    function Ad() {
      var e = kl;
      return kl <<= 1, (kl & zu) === ee && (kl = bl), e;
    }
    function $v() {
      var e = qc;
      return qc <<= 1, (qc & gs) === ee && (qc = Tl), e;
    }
    function Fu(e) {
      return e & -e;
    }
    function Rs(e) {
      return Fu(e);
    }
    function Zn(e) {
      return 31 - Jn(e);
    }
    function Sr(e) {
      return Zn(e);
    }
    function oa(e, t) {
      return (e & t) !== ee;
    }
    function Dl(e, t) {
      return (e & t) === t;
    }
    function Tt(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      return e & ~t;
    }
    function Ud(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Jt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Cl; a++)
        t.push(e);
      return t;
    }
    function Eo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, l = Sr(t);
      i[l] = a;
    }
    function Wv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Zn(i), s = 1 << l;
        a[l] = yn, i &= ~s;
      }
    }
    function ef(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function jd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Zn(f), v = 1 << p;
        i[p] = ee, l[p] = yn, s[p] = yn, f &= ~v;
      }
    }
    function tf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Zn(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function zd(e, t) {
      var a = Fu(t), i;
      switch (a) {
        case li:
          i = ju;
          break;
        case $n:
          i = Mr;
          break;
        case bl:
        case Uc:
        case jc:
        case zc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Rl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
        case Tl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          i = nu;
          break;
        case wl:
          i = xs;
          break;
        default:
          i = Jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Jt ? Jt : i;
    }
    function ks(e, t, a) {
      if (ua)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Sr(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Qv(e, t) {
      if (ua)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Sr(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Fd(e, t) {
      return null;
    }
    var Pr = ut, Ni = li, Ha = $n, Pa = wl, _s = Jt;
    function Ba() {
      return _s;
    }
    function er(e) {
      _s = e;
    }
    function Gv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ds(e, t) {
      return e > t ? e : t;
    }
    function dr(e, t) {
      return e !== 0 && e < t;
    }
    function Kv(e) {
      var t = Fu(e);
      return dr(Pr, t) ? dr(Ni, t) ? bs(t) ? Ha : Pa : Ni : Pr;
    }
    function nf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ns;
    function Lr(e) {
      Ns = e;
    }
    function dy(e) {
      Ns(e);
    }
    var Ne;
    function xo(e) {
      Ne = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var Jv;
    function Os(e) {
      Jv = e;
    }
    var Ms;
    function Hd(e) {
      Ms = e;
    }
    var af = !1, Ls = [], ru = null, Oi = null, Mi = null, In = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map(), Vr = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function em(e) {
      return Zv.indexOf(e) > -1;
    }
    function si(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Pd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ru = null;
          break;
        case "dragenter":
        case "dragleave":
          Oi = null;
          break;
        case "mouseover":
        case "mouseout":
          Mi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          In.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Br.delete(i);
          break;
        }
      }
    }
    function sa(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = si(t, a, i, l, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Ne(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return l !== null && v.indexOf(l) === -1 && v.push(l), e;
    }
    function py(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ru = sa(ru, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Oi = sa(Oi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Mi = sa(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = l, g = v.pointerId;
          return In.set(g, sa(In.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = l, D = S.pointerId;
          return Br.set(D, sa(Br.get(D) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function Bd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ge) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Ms(e.priority, function() {
                rf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (nf(s)) {
              e.blockedOn = _i(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function tm(e) {
      for (var t = Jv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Vr.length && dr(t, Vr[i].priority); i++)
        ;
      Vr.splice(i, 0, a), i === 0 && Bd(a);
    }
    function As(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = bo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          ly(s), l.target.dispatchEvent(s), oy();
        } else {
          var f = No(i);
          return f !== null && Ne(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      As(e) && a.delete(t);
    }
    function vy() {
      af = !1, ru !== null && As(ru) && (ru = null), Oi !== null && As(Oi) && (Oi = null), Mi !== null && As(Mi) && (Mi = null), In.forEach(Vd), Br.forEach(Vd);
    }
    function Hu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, vy)));
    }
    function Nl(e) {
      if (Ls.length > 0) {
        Hu(Ls[0], e);
        for (var t = 1; t < Ls.length; t++) {
          var a = Ls[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ru !== null && Hu(ru, e), Oi !== null && Hu(Oi, e), Mi !== null && Hu(Mi, e);
      var i = function(p) {
        return Hu(p, e);
      };
      In.forEach(i), Br.forEach(i);
      for (var l = 0; l < Vr.length; l++) {
        var s = Vr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Vr.length > 0; ) {
        var f = Vr[0];
        if (f.blockedOn !== null)
          break;
        Bd(f), f.blockedOn === null && Vr.shift();
      }
    }
    var Er = E.ReactCurrentBatchConfig, It = !0;
    function or(e) {
      It = !!e;
    }
    function tr() {
      return It;
    }
    function xr(e, t, a) {
      var i = uf(t), l;
      switch (i) {
        case Pr:
          l = ba;
          break;
        case Ni:
          l = Co;
          break;
        case Ha:
        default:
          l = Yn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function ba(e, t, a, i) {
      var l = Ba(), s = Er.transition;
      Er.transition = null;
      try {
        er(Pr), Yn(e, t, a, i);
      } finally {
        er(l), Er.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var l = Ba(), s = Er.transition;
      Er.transition = null;
      try {
        er(Ni), Yn(e, t, a, i);
      } finally {
        er(l), Er.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      It && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var l = bo(e, t, a, i);
      if (l === null) {
        Oy(e, t, i, Li, a), Pd(e, i);
        return;
      }
      if (py(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & La && em(e)) {
        for (; l !== null; ) {
          var s = No(l);
          s !== null && dy(s);
          var f = bo(e, t, a, i);
          if (f === null && Oy(e, t, i, Li, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var Li = null;
    function bo(e, t, a, i) {
      Li = null;
      var l = vd(i), s = Ys(l);
      if (s !== null) {
        var f = Sa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ge) {
            var v = ki(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var g = f.stateNode;
            if (nf(g))
              return _i(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Li = s, null;
    }
    function uf(e) {
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
          return Pr;
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
          return Ni;
        case "message": {
          var t = Dc();
          switch (t) {
            case cs:
              return Pr;
            case Au:
              return Ni;
            case eu:
            case fy:
              return Ha;
            case yl:
              return Pa;
            default:
              return Ha;
          }
        }
        default:
          return Ha;
      }
    }
    function js(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ca(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function $d(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ra = null, To = null, Ol = null;
    function Pu(e) {
      return Ra = e, To = zs(), !0;
    }
    function lf() {
      Ra = null, To = null, Ol = null;
    }
    function au() {
      if (Ol)
        return Ol;
      var e, t = To, a = t.length, i, l = zs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ol = l.slice(e, p), Ol;
    }
    function zs() {
      return "value" in Ra ? Ra.value : Ra.textContent;
    }
    function Bu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function Fs() {
      return !1;
    }
    function Ar(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = wo : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return kt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ai = Ar(nr), $r = kt({}, nr, {
      view: 0,
      detail: 0
    }), fa = Ar($r), of, Hs, Ml;
    function my(e) {
      e !== Ml && (Ml && e.type === "mousemove" ? (of = e.screenX - Ml.screenX, Hs = e.screenY - Ml.screenY) : (of = 0, Hs = 0), Ml = e);
    }
    var ci = kt({}, $r, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _n,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (my(e), of);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hs;
      }
    }), Id = Ar(ci), Yd = kt({}, ci, {
      dataTransfer: 0
    }), Ll = Ar(Yd), Wd = kt({}, $r, {
      relatedTarget: 0
    }), iu = Ar(Wd), nm = kt({}, nr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rm = Ar(nm), Qd = kt({}, nr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sf = Ar(Qd), hy = kt({}, nr, {
      data: 0
    }), am = Ar(hy), im = am, um = {
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
    }, Al = {
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
    };
    function yy(e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Bu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Al[e.keyCode] || "Unidentified" : "";
    }
    var ko = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ko[e];
      return i ? !!a[i] : !1;
    }
    function _n(e) {
      return lm;
    }
    var gy = kt({}, $r, {
      key: yy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _n,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Bu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), om = Ar(gy), Sy = kt({}, ci, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), sm = Ar(Sy), cm = kt({}, $r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _n
    }), fm = Ar(cm), Ey = kt({}, nr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Va = Ar(Ey), Gd = kt({}, ci, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), xy = Ar(Gd), Vu = [9, 13, 27, 32], Ps = 229, uu = gn && "CompositionEvent" in window, $u = null;
    gn && "documentMode" in document && ($u = document.documentMode);
    var qd = gn && "TextEvent" in window && !$u, cf = gn && (!uu || $u && $u > 8 && $u <= 11), dm = 32, ff = String.fromCharCode(dm);
    function Cy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function pm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function df(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function pf(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function Xd(e, t) {
      switch (e) {
        case "keyup":
          return Vu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function vm(e) {
      return e.locale === "ko";
    }
    var Ul = !1;
    function Jd(e, t, a, i, l) {
      var s, f;
      if (uu ? s = df(t) : Ul ? Xd(t, i) && (s = "onCompositionEnd") : pf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      cf && !vm(i) && (!Ul && s === "onCompositionStart" ? Ul = Pu(l) : s === "onCompositionEnd" && Ul && (f = au()));
      var p = xm(a, s);
      if (p.length > 0) {
        var v = new am(s, t, null, i, l);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var g = vf(i);
          g !== null && (v.data = g);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return vf(t);
        case "keypress":
          var a = t.which;
          return a !== dm ? null : (Kd = !0, ff);
        case "textInput":
          var i = t.data;
          return i === ff && Kd ? null : i;
        default:
          return null;
      }
    }
    function Zd(e, t) {
      if (Ul) {
        if (e === "compositionend" || !uu && Xd(e, t)) {
          var a = au();
          return lf(), Ul = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return cf && !vm(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, l) {
      var s;
      if (qd ? s = mf(t, i) : s = Zd(t, i), !s)
        return null;
      var f = xm(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new im("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function mm(e, t, a, i, l, s, f) {
      Jd(e, t, a, i, l), hf(e, t, a, i, l);
    }
    var by = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Bs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!by[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ry(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function hm(e, t, a, i) {
      so(i);
      var l = xm(t, "onChange");
      if (l.length > 0) {
        var s = new Ai("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Iu = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      hm(t, n, e, vd(e)), _v(o, t);
    }
    function o(e) {
      $4(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (xi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    gn && (h = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Iu = e, n = t, Iu.attachEvent("onpropertychange", F);
    }
    function T() {
      Iu && (Iu.detachEvent("onpropertychange", F), Iu = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && u(e);
    }
    function ne(e, t, a) {
      e === "focusin" ? (T(), x(t, a)) : e === "focusout" && T();
    }
    function ue(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function te(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Re(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ue(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Pe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Je(e, "number", e.value);
    }
    function Wn(e, t, a, i, l, s, f) {
      var p = a ? Cf(a) : window, v, g;
      if (r(p) ? v = d : Bs(p) ? h ? v = Ue : (v = ue, g = ne) : te(p) && (v = Re), v) {
        var S = v(t, a);
        if (S) {
          hm(e, S, i, l);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && Pe(p);
    }
    function M() {
      At("onMouseEnter", ["mouseout", "mouseover"]), At("onMouseLeave", ["mouseout", "mouseover"]), At("onPointerEnter", ["pointerout", "pointerover"]), At("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function _(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !as(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (Ys(g) || pp(g)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (l.window === l)
          S = l;
        else {
          var D = l.ownerDocument;
          D ? S = D.defaultView || D.parentWindow : S = window;
        }
        var k, j;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (k = a, j = H ? Ys(H) : null, j !== null) {
            var $ = Sa(j);
            (j !== $ || j.tag !== ce && j.tag !== Fe) && (j = null);
          }
        } else
          k = null, j = a;
        if (k !== j) {
          var Ee = Id, Ze = "onMouseLeave", Ye = "onMouseEnter", Wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ee = sm, Ze = "onPointerLeave", Ye = "onPointerEnter", Wt = "pointer");
          var Ht = k == null ? S : Cf(k), L = j == null ? S : Cf(j), I = new Ee(Ze, Wt + "leave", k, i, l);
          I.target = Ht, I.relatedTarget = L;
          var A = null, le = Ys(l);
          if (le === a) {
            var _e = new Ee(Ye, Wt + "enter", j, i, l);
            _e.target = L, _e.relatedTarget = Ht, A = _e;
          }
          eC(e, I, A, k, j);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var re = typeof Object.is == "function" ? Object.is : U;
    function je(e, t) {
      if (re(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Sn.call(t, s) || !re(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function et(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function vt(e, t) {
      for (var a = et(e), i = 0, l = 0; a; ) {
        if (a.nodeType === qi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = et(rt(a));
      }
    }
    function pr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return nn(e, l, s, f, p);
    }
    function nn(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, S = e, D = null;
      e: for (; ; ) {
        for (var k = null; S === t && (a === 0 || S.nodeType === qi) && (f = s + a), S === i && (l === 0 || S.nodeType === qi) && (p = s + l), S.nodeType === qi && (s += S.nodeValue.length), (k = S.firstChild) !== null; )
          D = S, S = k;
        for (; ; ) {
          if (S === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++g === l && (p = s), (k = S.nextSibling) !== null)
            break;
          S = D, D = S.parentNode;
        }
        S = k;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Yu(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var g = vt(e, f), S = vt(e, p);
        if (g && S) {
          if (l.rangeCount === 1 && l.anchorNode === g.node && l.anchorOffset === g.offset && l.focusNode === S.node && l.focusOffset === S.offset)
            return;
          var D = a.createRange();
          D.setStart(g.node, g.offset), l.removeAllRanges(), f > p ? (l.addRange(D), l.extend(S.node, S.offset)) : (D.setEnd(S.node, S.offset), l.addRange(D));
        }
      }
    }
    function ym(e) {
      return e && e.nodeType === qi;
    }
    function M4(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ym(e) ? !1 : ym(t) ? M4(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jx(e) {
      return e && e.ownerDocument && M4(e.ownerDocument.documentElement, e);
    }
    function zx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function L4() {
      for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
        if (zx(t))
          e = t.contentWindow;
        else
          return t;
        t = Ma(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Fx() {
      var e = L4();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? Px(e) : null
      };
    }
    function Hx(e) {
      var t = L4(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jx(a)) {
        i !== null && Ty(a) && Bx(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ta && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Px(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pr(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Yu(e, t);
    }
    var Vx = gn && "documentMode" in document && document.documentMode <= 11;
    function $x() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, wy = null, ep = null, ky = !1;
    function Ix(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Yx(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function A4(e, t, a) {
      var i = Yx(a);
      if (!(ky || yf == null || yf !== Ma(i))) {
        var l = Ix(yf);
        if (!ep || !je(ep, l)) {
          ep = l;
          var s = xm(wy, "onSelect");
          if (s.length > 0) {
            var f = new Ai("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function Wx(e, t, a, i, l, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Bs(p) || p.contentEditable === "true") && (yf = p, wy = a, ep = null);
          break;
        case "focusout":
          yf = null, wy = null, ep = null;
          break;
        case "mousedown":
          ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ky = !1, A4(e, i, l);
          break;
        case "selectionchange":
          if (Vx)
            break;
        case "keydown":
        case "keyup":
          A4(e, i, l);
      }
    }
    function gm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: gm("Animation", "AnimationEnd"),
      animationiteration: gm("Animation", "AnimationIteration"),
      animationstart: gm("Animation", "AnimationStart"),
      transitionend: gm("Transition", "TransitionEnd")
    }, _y = {}, U4 = {};
    gn && (U4 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function Sm(e) {
      if (_y[e])
        return _y[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in U4)
          return _y[e] = t[a];
      return e;
    }
    var j4 = Sm("animationend"), z4 = Sm("animationiteration"), F4 = Sm("animationstart"), H4 = Sm("transitionend"), P4 = /* @__PURE__ */ new Map(), B4 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      P4.set(e, t), dt(t, [e]);
    }
    function Qx() {
      for (var e = 0; e < B4.length; e++) {
        var t = B4[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(j4, "onAnimationEnd"), _o(z4, "onAnimationIteration"), _o(F4, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(H4, "onTransitionEnd");
    }
    function Gx(e, t, a, i, l, s, f) {
      var p = P4.get(t);
      if (p !== void 0) {
        var v = Ai, g = t;
        switch (t) {
          case "keypress":
            if (Bu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = om;
            break;
          case "focusin":
            g = "focus", v = iu;
            break;
          case "focusout":
            g = "blur", v = iu;
            break;
          case "beforeblur":
          case "afterblur":
            v = iu;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Id;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ll;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = fm;
            break;
          case j4:
          case z4:
          case F4:
            v = rm;
            break;
          case H4:
            v = Va;
            break;
          case "scroll":
            v = fa;
            break;
          case "wheel":
            v = xy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = sm;
            break;
        }
        var S = (s & La) !== 0;
        {
          var D = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = Jx(a, p, i.type, S, D);
          if (k.length > 0) {
            var j = new v(p, g, null, i, l);
            e.push({
              event: j,
              listeners: k
            });
          }
        }
      }
    }
    Qx(), M(), Vs(), $x(), Cy();
    function qx(e, t, a, i, l, s, f) {
      Gx(e, t, a, i, l, s);
      var p = (s & pd) === 0;
      p && (_(e, t, a, i, l), Wn(e, t, a, i, l), Wx(e, t, a, i, l), mm(e, t, a, i, l));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function V4(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function Kx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          V4(e, v, p), i = f;
        }
      else
        for (var g = 0; g < t.length; g++) {
          var S = t[g], D = S.instance, k = S.currentTarget, j = S.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          V4(e, j, k), i = D;
        }
    }
    function $4(e, t) {
      for (var a = (t & La) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        Kx(s, f, a);
      }
      ls();
    }
    function Xx(e, t, a, i, l) {
      var s = vd(a), f = [];
      qx(f, e, i, a, s, t), $4(f, t);
    }
    function jn(e, t) {
      Dy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kb(t), l = tC(e);
      i.has(l) || (I4(t, e, hc, a), i.add(l));
    }
    function Ny(e, t, a) {
      Dy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= La), I4(a, e, i, t);
    }
    var Em = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[Em]) {
        e[Em] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[Em] || (t[Em] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function I4(e, t, a, i, l) {
      var s = xr(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? $d(e, t, s, f) : ca(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : js(e, t, s);
    }
    function Y4(e, t) {
      return e === t || e.nodeType === qn && e.parentNode === t;
    }
    function Oy(e, t, a, i, l) {
      var s = i;
      if (!(t & dd) && !(t & hc)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === pe) {
              var g = p.stateNode.containerInfo;
              if (Y4(g, f))
                break;
              if (v === pe)
                for (var S = p.return; S !== null; ) {
                  var D = S.tag;
                  if (D === J || D === pe) {
                    var k = S.stateNode.containerInfo;
                    if (Y4(k, f))
                      return;
                  }
                  S = S.return;
                }
              for (; g !== null; ) {
                var j = Ys(g);
                if (j === null)
                  return;
                var H = j.tag;
                if (H === ce || H === Fe) {
                  p = s = j;
                  continue e;
                }
                g = g.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return Xx(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Jx(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, S = null; g !== null; ) {
        var D = g, k = D.stateNode, j = D.tag;
        if (j === ce && k !== null && (S = k, p !== null)) {
          var H = _u(g, p);
          H != null && v.push(rp(g, H, S));
        }
        if (l)
          break;
        g = g.return;
      }
      return v;
    }
    function xm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === ce && f !== null) {
          var v = f, g = _u(l, a);
          g != null && i.unshift(rp(l, g, v));
          var S = _u(l, t);
          S != null && i.push(rp(l, S, v));
        }
        l = l.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ce);
      return e || null;
    }
    function Zx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Sf(s))
        l++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; l - f > 0; )
        a = Sf(a), l--;
      for (; f - l > 0; )
        i = Sf(i), f--;
      for (var v = l; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function W4(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, S = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === ce && S !== null) {
          var k = S;
          if (l) {
            var j = _u(p, s);
            j != null && f.unshift(rp(p, j, k));
          } else if (!l) {
            var H = _u(p, s);
            H != null && f.push(rp(p, H, k));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function eC(e, t, a, i, l) {
      var s = i && l ? Zx(i, l) : null;
      i !== null && W4(e, t, i, s, !1), l !== null && a !== null && W4(e, a, l, s, !0);
    }
    function tC(e, t) {
      return e + "__bubble";
    }
    var $a = !1, ap = "dangerouslySetInnerHTML", Cm = "suppressContentEditableWarning", Do = "suppressHydrationWarning", Q4 = "autoFocus", $s = "children", Is = "style", bm = "__html", My, Rm, ip, G4, Tm, q4, K4;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rm = function(e, t) {
      sd(e, t), vc(e, t), Tv(e, t, {
        registrationNameDependencies: ft,
        possibleRegistrationNames: G
      });
    }, q4 = gn && !document.documentMode, ip = function(e, t, a) {
      if (!$a) {
        var i = wm(a), l = wm(t);
        l !== i && ($a = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, G4 = function(e) {
      if (!$a) {
        $a = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Tm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, K4 = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nC = /\r\n?/g, rC = /\u0000|\uFFFD/g;
    function wm(e) {
      Dn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nC, `
`).replace(rC, "");
    }
    function km(e, t, a, i) {
      var l = wm(t), s = wm(e);
      if (s !== l && (i && ($a || ($a = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Le))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function X4(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function aC() {
    }
    function _m(e) {
      e.onclick = aC;
    }
    function iC(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), Sv(t, f);
          else if (s === ap) {
            var p = f ? f[bm] : void 0;
            p != null && lv(t, p);
          } else if (s === $s)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && io(t, f);
            } else typeof f == "number" && io(t, "" + f);
          else s === Cm || s === Do || s === Q4 || (ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && Tm(s, f), s === "onScroll" && jn("scroll", t)) : f != null && Ur(t, s, f, l));
        }
    }
    function uC(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Is ? Sv(e, f) : s === ap ? lv(e, f) : s === $s ? io(e, f) : Ur(e, s, f, i);
      }
    }
    function lC(e, t, a, i) {
      var l, s = X4(a), f, p = i;
      if (p === Gi && (p = nd(e)), p === Gi) {
        if (l = wu(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var g = v.firstChild;
          f = v.removeChild(g);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Gi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Sn.call(My, e) && (My[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function oC(e, t) {
      return X4(t).createTextNode(e);
    }
    function sC(e, t, a, i) {
      var l = wu(t, a);
      Rm(t, a);
      var s;
      switch (t) {
        case "dialog":
          jn("cancel", e), jn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          jn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            jn(tp[f], e);
          s = a;
          break;
        case "source":
          jn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          jn("error", e), jn("load", e), s = a;
          break;
        case "details":
          jn("toggle", e), s = a;
          break;
        case "input":
          ai(e, a), s = ao(e, a), jn("invalid", e);
          break;
        case "option":
          qt(e, a), s = a;
          break;
        case "select":
          sl(e, a), s = Xo(e, a), jn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), s = Jf(e, a), jn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (dc(t, s), iC(t, e, i, s, l), t) {
        case "input":
          ri(e), z(e, a, !1);
          break;
        case "textarea":
          ri(e), iv(e);
          break;
        case "option":
          Cn(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _m(e);
          break;
      }
    }
    function cC(e, t, a, i, l) {
      Rm(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ao(e, a), p = ao(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Jf(e, a), p = Jf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _m(e);
          break;
      }
      dc(t, p);
      var v, g, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var D = f[v];
            for (g in D)
              D.hasOwnProperty(g) && (S || (S = {}), S[g] = "");
          } else v === ap || v === $s || v === Cm || v === Do || v === Q4 || (ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var k = p[v], j = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || k === j || k == null && j == null))
          if (v === Is)
            if (k && Object.freeze(k), j) {
              for (g in j)
                j.hasOwnProperty(g) && (!k || !k.hasOwnProperty(g)) && (S || (S = {}), S[g] = "");
              for (g in k)
                k.hasOwnProperty(g) && j[g] !== k[g] && (S || (S = {}), S[g] = k[g]);
            } else
              S || (s || (s = []), s.push(v, S)), S = k;
          else if (v === ap) {
            var H = k ? k[bm] : void 0, $ = j ? j[bm] : void 0;
            H != null && $ !== H && (s = s || []).push(v, H);
          } else v === $s ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(v, "" + k) : v === Cm || v === Do || (ft.hasOwnProperty(v) ? (k != null && (typeof k != "function" && Tm(v, k), v === "onScroll" && jn("scroll", e)), !s && j !== k && (s = [])) : (s = s || []).push(v, k));
      }
      return S && (iy(S, p[Is]), (s = s || []).push(Is, S)), s;
    }
    function fC(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && m(e, l);
      var s = wu(a, i), f = wu(a, l);
      switch (uC(e, t, s, f), a) {
        case "input":
          C(e, l);
          break;
        case "textarea":
          av(e, l);
          break;
        case "select":
          sc(e, l);
          break;
      }
    }
    function dC(e) {
      {
        var t = e.toLowerCase();
        return ns.hasOwnProperty(t) && ns[t] || null;
      }
    }
    function pC(e, t, a, i, l, s, f) {
      var p, v;
      switch (p = wu(t, a), Rm(t, a), t) {
        case "dialog":
          jn("cancel", e), jn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          jn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < tp.length; g++)
            jn(tp[g], e);
          break;
        case "source":
          jn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          jn("error", e), jn("load", e);
          break;
        case "details":
          jn("toggle", e);
          break;
        case "input":
          ai(e, a), jn("invalid", e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          sl(e, a), jn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), jn("invalid", e);
          break;
      }
      dc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, D = 0; D < S.length; D++) {
          var k = S[D].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[D].name);
          }
        }
      }
      var j = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var $ = a[H];
          if (H === $s)
            typeof $ == "string" ? e.textContent !== $ && (a[Do] !== !0 && km(e.textContent, $, s, f), j = [$s, $]) : typeof $ == "number" && e.textContent !== "" + $ && (a[Do] !== !0 && km(e.textContent, $, s, f), j = [$s, "" + $]);
          else if (ft.hasOwnProperty(H))
            $ != null && (typeof $ != "function" && Tm(H, $), H === "onScroll" && jn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ee = void 0, Ze = ve(H);
            if (a[Do] !== !0) {
              if (!(H === Cm || H === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === ap) {
                  var Ye = e.innerHTML, Wt = $ ? $[bm] : void 0;
                  if (Wt != null) {
                    var Ht = K4(e, Wt);
                    Ht !== Ye && ip(H, Ye, Ht);
                  }
                } else if (H === Is) {
                  if (v.delete(H), q4) {
                    var L = ry($);
                    Ee = e.getAttribute("style"), L !== Ee && ip(H, Ee, L);
                  }
                } else if (p && !N)
                  v.delete(H.toLowerCase()), Ee = nl(e, H, $), $ !== Ee && ip(H, Ee, $);
                else if (!ln(H, Ze, p) && !B(H, $, Ze, p)) {
                  var I = !1;
                  if (Ze !== null)
                    v.delete(Ze.attributeName), Ee = vi(e, H, $, Ze);
                  else {
                    var A = i;
                    if (A === Gi && (A = nd(t)), A === Gi)
                      v.delete(H.toLowerCase());
                    else {
                      var le = dC(H);
                      le !== null && le !== H && (I = !0, v.delete(le)), v.delete(H);
                    }
                    Ee = nl(e, H, $);
                  }
                  var _e = N;
                  !_e && $ !== Ee && !I && ip(H, Ee, $);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && G4(v), t) {
        case "input":
          ri(e), z(e, a, !0);
          break;
        case "textarea":
          ri(e), iv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _m(e);
          break;
      }
      return j;
    }
    function vC(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if ($a)
          return;
        $a = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if ($a)
          return;
        $a = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t, a) {
      {
        if ($a)
          return;
        $a = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (t === "" || $a)
          return;
        $a = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mC(e, t, a) {
      switch (t) {
        case "input":
          V(e, a);
          return;
        case "textarea":
          Zh(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var up = function() {
    }, lp = function() {
    };
    {
      var hC = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], J4 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], yC = J4.concat(["button"]), gC = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Z4 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = kt({}, e || Z4), i = {
          tag: t
        };
        return J4.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yC.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hC.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var SC = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return gC.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, EC = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, eS = {};
      up = function(e, t, a) {
        a = a || Z4;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = SC(e, l) ? null : i, f = s ? null : EC(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!eS[g]) {
            eS[g] = !0;
            var S = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var k = "";
              v === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, D, k);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var Dm = "suppressHydrationWarning", Nm = "$", Om = "/$", op = "$?", sp = "$!", xC = "style", zy = null, Fy = null;
    function CC(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case ad: {
          t = i === Ki ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : rd(null, "");
          break;
        }
        default: {
          var s = i === qn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = rd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function bC(e, t, a) {
      {
        var i = e, l = rd(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function kk(e) {
      return e;
    }
    function RC(e) {
      zy = tr(), Fy = Fx();
      var t = null;
      return or(!1), t;
    }
    function TC(e) {
      Hx(Fy), or(zy), zy = null, Fy = null;
    }
    function wC(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (up(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          up(null, p, v);
        }
        s = f.namespace;
      }
      var g = lC(e, t, a, s);
      return dp(l, g), Wy(g, t), g;
    }
    function kC(e, t) {
      e.appendChild(t);
    }
    function _C(e, t, a, i, l) {
      switch (sC(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function DC(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          up(null, p, v);
        }
      }
      return cC(e, t, a, i);
    }
    function Hy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function NC(e, t, a, i) {
      {
        var l = a;
        up(null, e, l.ancestorInfo);
      }
      var s = oC(e, t);
      return dp(i, s), s;
    }
    function OC() {
      var e = window.event;
      return e === void 0 ? Ha : uf(e.type);
    }
    var Py = typeof setTimeout == "function" ? setTimeout : void 0, MC = typeof clearTimeout == "function" ? clearTimeout : void 0, By = -1, tS = typeof Promise == "function" ? Promise : void 0, LC = typeof queueMicrotask == "function" ? queueMicrotask : typeof tS < "u" ? function(e) {
      return tS.resolve(null).then(e).catch(AC);
    } : Py;
    function AC(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function UC(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function jC(e, t, a, i, l, s) {
      fC(e, t, a, i, l), Wy(e, l);
    }
    function nS(e) {
      io(e, "");
    }
    function zC(e, t, a) {
      e.nodeValue = a;
    }
    function FC(e, t) {
      e.appendChild(t);
    }
    function HC(e, t) {
      var a;
      e.nodeType === qn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _m(a);
    }
    function PC(e, t, a) {
      e.insertBefore(t, a);
    }
    function BC(e, t, a) {
      e.nodeType === qn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function VC(e, t) {
      e.removeChild(t);
    }
    function $C(e, t) {
      e.nodeType === qn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === qn) {
          var s = l.data;
          if (s === Om)
            if (i === 0) {
              e.removeChild(l), Nl(t);
              return;
            } else
              i--;
          else (s === Nm || s === op || s === sp) && i++;
        }
        a = l;
      } while (a);
      Nl(t);
    }
    function IC(e, t) {
      e.nodeType === qn ? Vy(e.parentNode, t) : e.nodeType === ta && Vy(e, t), Nl(e);
    }
    function YC(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WC(e) {
      e.nodeValue = "";
    }
    function QC(e, t) {
      e = e;
      var a = t[xC], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = fc("display", i);
    }
    function GC(e, t) {
      e.nodeValue = t;
    }
    function qC(e) {
      e.nodeType === ta ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function KC(e, t, a) {
      return e.nodeType !== ta || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function XC(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function JC(e) {
      return e.nodeType !== qn ? null : e;
    }
    function rS(e) {
      return e.data === op;
    }
    function $y(e) {
      return e.data === sp;
    }
    function ZC(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function eb(e, t) {
      e._reactRetry = t;
    }
    function Mm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ta || t === qi)
          break;
        if (t === qn) {
          var a = e.data;
          if (a === Nm || a === sp || a === op)
            break;
          if (a === Om)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return Mm(e.nextSibling);
    }
    function tb(e) {
      return Mm(e.firstChild);
    }
    function nb(e) {
      return Mm(e.firstChild);
    }
    function rb(e) {
      return Mm(e.nextSibling);
    }
    function ab(e, t, a, i, l, s, f) {
      dp(s, e), Wy(e, a);
      var p;
      {
        var v = l;
        p = v.namespace;
      }
      var g = (s.mode & Mt) !== Ge;
      return pC(e, t, a, p, i, g, f);
    }
    function ib(e, t, a, i) {
      return dp(a, e), a.mode & Mt, vC(e, t);
    }
    function ub(e, t) {
      dp(t, e);
    }
    function lb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === qn) {
          var i = t.data;
          if (i === Om) {
            if (a === 0)
              return cp(t);
            a--;
          } else (i === Nm || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === qn) {
          var i = t.data;
          if (i === Nm || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else i === Om && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ob(e) {
      Nl(e);
    }
    function sb(e) {
      Nl(e);
    }
    function cb(e) {
      return e !== "head" && e !== "body";
    }
    function fb(e, t, a, i) {
      var l = !0;
      km(t.nodeValue, a, i, l);
    }
    function db(e, t, a, i, l, s) {
      if (t[Dm] !== !0) {
        var f = !0;
        km(i.nodeValue, l, s, f);
      }
    }
    function pb(e, t) {
      t.nodeType === ta ? Ly(e, t) : t.nodeType === qn || Ay(e, t);
    }
    function vb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? Ly(a, t) : t.nodeType === qn || Ay(a, t));
      }
    }
    function mb(e, t, a, i, l) {
      (l || t[Dm] !== !0) && (i.nodeType === ta ? Ly(a, i) : i.nodeType === qn || Ay(a, i));
    }
    function hb(e, t, a) {
      Uy(e, t);
    }
    function yb(e, t) {
      jy(e, t);
    }
    function gb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Uy(i, t);
      }
    }
    function Sb(e, t) {
      {
        var a = e.parentNode;
        a !== null && jy(a, t);
      }
    }
    function Eb(e, t, a, i, l, s) {
      (s || t[Dm] !== !0) && Uy(a, i);
    }
    function xb(e, t, a, i, l) {
      (l || t[Dm] !== !0) && jy(a, i);
    }
    function Cb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bb(e) {
      np(e);
    }
    var Ef = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Ef, Iy = "__reactProps$" + Ef, fp = "__reactContainer$" + Ef, Yy = "__reactEvents$" + Ef, Rb = "__reactListeners$" + Ef, Tb = "__reactHandles$" + Ef;
    function wb(e) {
      delete e[xf], delete e[Iy], delete e[Yy], delete e[Rb], delete e[Tb];
    }
    function dp(e, t) {
      t[xf] = e;
    }
    function Lm(e, t) {
      t[fp] = e;
    }
    function iS(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function Ys(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = aS(e); l !== null; ) {
              var s = l[xf];
              if (s)
                return s;
              l = aS(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[xf] || e[fp];
      return t && (t.tag === ce || t.tag === Fe || t.tag === ge || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ce || e.tag === Fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Am(e) {
      return e[Iy] || null;
    }
    function Wy(e, t) {
      e[Iy] = t;
    }
    function kb(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var uS = {}, lS = E.ReactDebugCurrentFrame;
    function Um(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        lS.setExtraStackFrame(a);
      } else
        lS.setExtraStackFrame(null);
    }
    function lu(e, t, a, i, l) {
      {
        var s = Function.call.bind(Sn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              p = g;
            }
            p && !(p instanceof Error) && (Um(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Um(null)), p instanceof Error && !(p.message in uS) && (uS[p.message] = !0, Um(l), y("Failed %s type: %s", a, p.message), Um(null));
          }
      }
    }
    var Qy = [], jm;
    jm = [];
    var jl = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function da(e, t) {
      if (jl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== jm[jl] && y("Unexpected Fiber popped."), e.current = Qy[jl], Qy[jl] = null, jm[jl] = null, jl--;
    }
    function pa(e, t, a) {
      jl++, Qy[jl] = e.current, jm[jl] = a, e.current = t;
    }
    var Gy;
    Gy = {};
    var fi = {};
    Object.freeze(fi);
    var zl = Oo(fi), Wu = Oo(!1), qy = fi;
    function bf(e, t, a) {
      return a && Qu(t) ? qy : zl.current;
    }
    function oS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Rf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return fi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = ht(e) || "Unknown";
          lu(i, s, "context", p);
        }
        return l && oS(e, t, s), s;
      }
    }
    function zm() {
      return Wu.current;
    }
    function Qu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fm(e) {
      da(Wu, e), da(zl, e);
    }
    function Ky(e) {
      da(Wu, e), da(zl, e);
    }
    function sS(e, t, a) {
      {
        if (zl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pa(zl, t, e), pa(Wu, a, e);
      }
    }
    function cS(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ht(e) || "Unknown";
            Gy[s] || (Gy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((ht(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = ht(e) || "Unknown";
          lu(l, f, "child context", v);
        }
        return kt({}, a, f);
      }
    }
    function Hm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return qy = zl.current, pa(zl, a, e), pa(Wu, Wu.current, e), !0;
      }
    }
    function fS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = cS(e, t, qy);
          i.__reactInternalMemoizedMergedChildContext = l, da(Wu, e), da(zl, e), pa(zl, l, e), pa(Wu, a, e);
        } else
          da(Wu, e), pa(Wu, a, e);
      }
    }
    function _b(e) {
      {
        if (!hl(e) || e.tag !== ae)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case ae: {
              var a = t.type;
              if (Qu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, Pm = 1, Fl = null, Xy = !1, Jy = !1;
    function dS(e) {
      Fl === null ? Fl = [e] : Fl.push(e);
    }
    function Db(e) {
      Xy = !0, dS(e);
    }
    function pS() {
      Xy && Lo();
    }
    function Lo() {
      if (!Jy && Fl !== null) {
        Jy = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Fl;
          for (er(Pr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Fl = null, Xy = !1;
        } catch (s) {
          throw Fl !== null && (Fl = Fl.slice(e + 1)), hd(cs, Lo), s;
        } finally {
          er(t), Jy = !1;
        }
      }
      return null;
    }
    var Tf = [], wf = 0, Bm = null, Vm = 0, Ui = [], ji = 0, Ws = null, Hl = 1, Pl = "";
    function Nb(e) {
      return Gs(), (e.flags & Ti) !== Qe;
    }
    function Ob(e) {
      return Gs(), Vm;
    }
    function Mb() {
      var e = Pl, t = Hl, a = t & ~Lb(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Gs(), Tf[wf++] = Vm, Tf[wf++] = Bm, Bm = e, Vm = t;
    }
    function vS(e, t, a) {
      Gs(), Ui[ji++] = Hl, Ui[ji++] = Pl, Ui[ji++] = Ws, Ws = e;
      var i = Hl, l = Pl, s = $m(i) - 1, f = i & ~(1 << s), p = a + 1, v = $m(t) + s;
      if (v > 30) {
        var g = s - s % 5, S = (1 << g) - 1, D = (f & S).toString(32), k = f >> g, j = s - g, H = $m(t) + j, $ = p << j, Ee = $ | k, Ze = D + l;
        Hl = 1 << H | Ee, Pl = Ze;
      } else {
        var Ye = p << s, Wt = Ye | f, Ht = l;
        Hl = 1 << v | Wt, Pl = Ht;
      }
    }
    function Zy(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), vS(e, a, i);
      }
    }
    function $m(e) {
      return 32 - Jn(e);
    }
    function Lb(e) {
      return 1 << $m(e) - 1;
    }
    function e0(e) {
      for (; e === Bm; )
        Bm = Tf[--wf], Tf[wf] = null, Vm = Tf[--wf], Tf[wf] = null;
      for (; e === Ws; )
        Ws = Ui[--ji], Ui[ji] = null, Pl = Ui[--ji], Ui[ji] = null, Hl = Ui[--ji], Ui[ji] = null;
    }
    function Ab() {
      return Gs(), Ws !== null ? {
        id: Hl,
        overflow: Pl
      } : null;
    }
    function Ub(e, t) {
      Gs(), Ui[ji++] = Hl, Ui[ji++] = Pl, Ui[ji++] = Ws, Hl = t.id, Pl = t.overflow, Ws = e;
    }
    function Gs() {
      Yr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ir = null, zi = null, ou = !1, qs = !1, Ao = null;
    function jb() {
      ou && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mS() {
      qs = !0;
    }
    function zb() {
      return qs;
    }
    function Fb(e) {
      var t = e.stateNode.containerInfo;
      return zi = nb(t), Ir = e, ou = !0, Ao = null, qs = !1, !0;
    }
    function Hb(e, t, a) {
      return zi = rb(t), Ir = e, ou = !0, Ao = null, qs = !1, a !== null && Ub(e, a), !0;
    }
    function hS(e, t) {
      switch (e.tag) {
        case J: {
          pb(e.stateNode.containerInfo, t);
          break;
        }
        case ce: {
          var a = (e.mode & Mt) !== Ge;
          mb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ge: {
          var i = e.memoizedState;
          i.dehydrated !== null && vb(i.dehydrated, t);
          break;
        }
      }
    }
    function yS(e, t) {
      hS(e, t);
      var a = $T();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Aa) : i.push(a);
    }
    function t0(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ce:
                var i = t.type;
                t.pendingProps, hb(a, i);
                break;
              case Fe:
                var l = t.pendingProps;
                yb(a, l);
                break;
            }
            break;
          }
          case ce: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ce: {
                var v = t.type, g = t.pendingProps, S = (e.mode & Mt) !== Ge;
                Eb(
                  s,
                  f,
                  p,
                  v,
                  g,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case Fe: {
                var D = t.pendingProps, k = (e.mode & Mt) !== Ge;
                xb(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case ge: {
            var j = e.memoizedState, H = j.dehydrated;
            if (H !== null) switch (t.tag) {
              case ce:
                var $ = t.type;
                t.pendingProps, gb(H, $);
                break;
              case Fe:
                var Ee = t.pendingProps;
                Sb(H, Ee);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function gS(e, t) {
      t.flags = t.flags & ~ra | Ln, t0(e, t);
    }
    function SS(e, t) {
      switch (e.tag) {
        case ce: {
          var a = e.type;
          e.pendingProps;
          var i = KC(t, a);
          return i !== null ? (e.stateNode = i, Ir = e, zi = tb(i), !0) : !1;
        }
        case Fe: {
          var l = e.pendingProps, s = XC(t, l);
          return s !== null ? (e.stateNode = s, Ir = e, zi = null, !0) : !1;
        }
        case ge: {
          var f = JC(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ab(),
              retryLane: la
            };
            e.memoizedState = p;
            var v = IT(f);
            return v.return = e, e.child = v, Ir = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function n0(e) {
      return (e.mode & Mt) !== Ge && (e.flags & We) === Qe;
    }
    function r0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function a0(e) {
      if (ou) {
        var t = zi;
        if (!t) {
          n0(e) && (t0(Ir, e), r0()), gS(Ir, e), ou = !1, Ir = e;
          return;
        }
        var a = t;
        if (!SS(e, t)) {
          n0(e) && (t0(Ir, e), r0()), t = cp(a);
          var i = Ir;
          if (!t || !SS(e, t)) {
            gS(Ir, e), ou = !1, Ir = e;
            return;
          }
          yS(i, a);
        }
      }
    }
    function Pb(e, t, a) {
      var i = e.stateNode, l = !qs, s = ab(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Bb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ib(t, a, e);
      if (i) {
        var l = Ir;
        if (l !== null)
          switch (l.tag) {
            case J: {
              var s = l.stateNode.containerInfo, f = (l.mode & Mt) !== Ge;
              fb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ce: {
              var p = l.type, v = l.memoizedProps, g = l.stateNode, S = (l.mode & Mt) !== Ge;
              db(
                p,
                v,
                g,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function Vb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ub(a, e);
    }
    function $b(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return lb(a);
    }
    function ES(e) {
      for (var t = e.return; t !== null && t.tag !== ce && t.tag !== J && t.tag !== ge; )
        t = t.return;
      Ir = t;
    }
    function Im(e) {
      if (e !== Ir)
        return !1;
      if (!ou)
        return ES(e), ou = !0, !1;
      if (e.tag !== J && (e.tag !== ce || cb(e.type) && !Hy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (n0(e))
            xS(e), r0();
          else
            for (; t; )
              yS(e, t), t = cp(t);
      }
      return ES(e), e.tag === ge ? zi = $b(e) : zi = Ir ? cp(e.stateNode) : null, !0;
    }
    function Ib() {
      return ou && zi !== null;
    }
    function xS(e) {
      for (var t = zi; t; )
        hS(e, t), t = cp(t);
    }
    function kf() {
      Ir = null, zi = null, ou = !1, qs = !1;
    }
    function CS() {
      Ao !== null && (m1(Ao), Ao = null);
    }
    function Yr() {
      return ou;
    }
    function i0(e) {
      Ao === null ? Ao = [e] : Ao.push(e);
    }
    var Yb = E.ReactCurrentBatchConfig, Wb = null;
    function Qb() {
      return Yb.transition;
    }
    var su = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Gb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & vn && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], mp = [], hp = [], yp = [], gp = [], Sp = [], Xs = /* @__PURE__ */ new Set();
      su.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & vn && typeof t.UNSAFE_componentWillMount == "function" && mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & vn && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & vn && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, su.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(k) {
          e.add(ht(k) || "Component"), Xs.add(k.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(k) {
          t.add(ht(k) || "Component"), Xs.add(k.type);
        }), mp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(k) {
          a.add(ht(k) || "Component"), Xs.add(k.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(k) {
          i.add(ht(k) || "Component"), Xs.add(k.type);
        }), yp = []);
        var l = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(k) {
          l.add(ht(k) || "Component"), Xs.add(k.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(k) {
          s.add(ht(k) || "Component"), Xs.add(k.type);
        }), Sp = []), t.size > 0) {
          var f = Ks(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var g = Ks(e);
          X(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var S = Ks(a);
          X(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (l.size > 0) {
          var D = Ks(l);
          X(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Ym = /* @__PURE__ */ new Map(), bS = /* @__PURE__ */ new Set();
      su.recordLegacyContextWarning = function(e, t) {
        var a = Gb(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!bS.has(e.type)) {
          var i = Ym.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ym.set(a, i)), i.push(e));
        }
      }, su.flushLegacyContextWarning = function() {
        Ym.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ht(s) || "Component"), bS.add(s.type);
            });
            var l = Ks(i);
            try {
              fn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Tn();
            }
          }
        });
      }, su.discardPendingWarnings = function() {
        vp = [], mp = [], hp = [], yp = [], gp = [], Sp = [], Ym = /* @__PURE__ */ new Map();
      };
    }
    var u0, l0, o0, s0, c0, RS = function(e, t) {
    };
    u0 = !1, l0 = !1, o0 = {}, s0 = {}, c0 = {}, RS = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        s0[a] || (s0[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function qb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & vn || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ae) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !qb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ht(e) || "Component";
          o0[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), o0[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ae)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Zr(i, "ref");
          var g = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === g)
            return t.ref;
          var S = function(D) {
            var k = v.refs;
            D === null ? delete k[g] : k[g] = D;
          };
          return S._stringRef = g, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Wm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qm(e) {
      {
        var t = ht(e) || "Component";
        if (c0[t])
          return;
        c0[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TS(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function wS(e) {
      function t(L, I) {
        if (e) {
          var A = L.deletions;
          A === null ? (L.deletions = [I], L.flags |= Aa) : A.push(I);
        }
      }
      function a(L, I) {
        if (!e)
          return null;
        for (var A = I; A !== null; )
          t(L, A), A = A.sibling;
        return null;
      }
      function i(L, I) {
        for (var A = /* @__PURE__ */ new Map(), le = I; le !== null; )
          le.key !== null ? A.set(le.key, le) : A.set(le.index, le), le = le.sibling;
        return A;
      }
      function l(L, I) {
        var A = uc(L, I);
        return A.index = 0, A.sibling = null, A;
      }
      function s(L, I, A) {
        if (L.index = A, !e)
          return L.flags |= Ti, I;
        var le = L.alternate;
        if (le !== null) {
          var _e = le.index;
          return _e < I ? (L.flags |= Ln, I) : _e;
        } else
          return L.flags |= Ln, I;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= Ln), L;
      }
      function p(L, I, A, le) {
        if (I === null || I.tag !== Fe) {
          var _e = i4(A, L.mode, le);
          return _e.return = L, _e;
        } else {
          var Ce = l(I, A);
          return Ce.return = L, Ce;
        }
      }
      function v(L, I, A, le) {
        var _e = A.type;
        if (_e === mi)
          return S(L, I, A.props.children, le, A.key);
        if (I !== null && (I.elementType === _e || // Keep this check inline so it only runs on the false path:
        O1(I, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === gt && TS(_e) === I.type)) {
          var Ce = l(I, A.props);
          return Ce.ref = Ep(L, I, A), Ce.return = L, Ce._debugSource = A._source, Ce._debugOwner = A._owner, Ce;
        }
        var ct = a4(A, L.mode, le);
        return ct.ref = Ep(L, I, A), ct.return = L, ct;
      }
      function g(L, I, A, le) {
        if (I === null || I.tag !== pe || I.stateNode.containerInfo !== A.containerInfo || I.stateNode.implementation !== A.implementation) {
          var _e = u4(A, L.mode, le);
          return _e.return = L, _e;
        } else {
          var Ce = l(I, A.children || []);
          return Ce.return = L, Ce;
        }
      }
      function S(L, I, A, le, _e) {
        if (I === null || I.tag !== lt) {
          var Ce = Yo(A, L.mode, le, _e);
          return Ce.return = L, Ce;
        } else {
          var ct = l(I, A);
          return ct.return = L, ct;
        }
      }
      function D(L, I, A) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var le = i4("" + I, L.mode, A);
          return le.return = L, le;
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case jr: {
              var _e = a4(I, L.mode, A);
              return _e.ref = Ep(L, null, I), _e.return = L, _e;
            }
            case mr: {
              var Ce = u4(I, L.mode, A);
              return Ce.return = L, Ce;
            }
            case gt: {
              var ct = I._payload, xt = I._init;
              return D(L, xt(ct), A);
            }
          }
          if (_t(I) || bt(I)) {
            var hn = Yo(I, L.mode, A, null);
            return hn.return = L, hn;
          }
          Wm(L, I);
        }
        return typeof I == "function" && Qm(L), null;
      }
      function k(L, I, A, le) {
        var _e = I !== null ? I.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return _e !== null ? null : p(L, I, "" + A, le);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case jr:
              return A.key === _e ? v(L, I, A, le) : null;
            case mr:
              return A.key === _e ? g(L, I, A, le) : null;
            case gt: {
              var Ce = A._payload, ct = A._init;
              return k(L, I, ct(Ce), le);
            }
          }
          if (_t(A) || bt(A))
            return _e !== null ? null : S(L, I, A, le, null);
          Wm(L, A);
        }
        return typeof A == "function" && Qm(L), null;
      }
      function j(L, I, A, le, _e) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Ce = L.get(A) || null;
          return p(I, Ce, "" + le, _e);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case jr: {
              var ct = L.get(le.key === null ? A : le.key) || null;
              return v(I, ct, le, _e);
            }
            case mr: {
              var xt = L.get(le.key === null ? A : le.key) || null;
              return g(I, xt, le, _e);
            }
            case gt:
              var hn = le._payload, rn = le._init;
              return j(L, I, A, rn(hn), _e);
          }
          if (_t(le) || bt(le)) {
            var sr = L.get(A) || null;
            return S(I, sr, le, _e, null);
          }
          Wm(I, le);
        }
        return typeof le == "function" && Qm(I), null;
      }
      function H(L, I, A) {
        {
          if (typeof L != "object" || L === null)
            return I;
          switch (L.$$typeof) {
            case jr:
            case mr:
              RS(L, A);
              var le = L.key;
              if (typeof le != "string")
                break;
              if (I === null) {
                I = /* @__PURE__ */ new Set(), I.add(le);
                break;
              }
              if (!I.has(le)) {
                I.add(le);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case gt:
              var _e = L._payload, Ce = L._init;
              H(Ce(_e), I, A);
              break;
          }
        }
        return I;
      }
      function $(L, I, A, le) {
        for (var _e = null, Ce = 0; Ce < A.length; Ce++) {
          var ct = A[Ce];
          _e = H(ct, _e, L);
        }
        for (var xt = null, hn = null, rn = I, sr = 0, an = 0, rr = null; rn !== null && an < A.length; an++) {
          rn.index > an ? (rr = rn, rn = null) : rr = rn.sibling;
          var ma = k(L, rn, A[an], le);
          if (ma === null) {
            rn === null && (rn = rr);
            break;
          }
          e && rn && ma.alternate === null && t(L, rn), sr = s(ma, sr, an), hn === null ? xt = ma : hn.sibling = ma, hn = ma, rn = rr;
        }
        if (an === A.length) {
          if (a(L, rn), Yr()) {
            var Jr = an;
            Qs(L, Jr);
          }
          return xt;
        }
        if (rn === null) {
          for (; an < A.length; an++) {
            var pi = D(L, A[an], le);
            pi !== null && (sr = s(pi, sr, an), hn === null ? xt = pi : hn.sibling = pi, hn = pi);
          }
          if (Yr()) {
            var _a = an;
            Qs(L, _a);
          }
          return xt;
        }
        for (var Da = i(L, rn); an < A.length; an++) {
          var ha = j(Da, L, an, A[an], le);
          ha !== null && (e && ha.alternate !== null && Da.delete(ha.key === null ? an : ha.key), sr = s(ha, sr, an), hn === null ? xt = ha : hn.sibling = ha, hn = ha);
        }
        if (e && Da.forEach(function(Wf) {
          return t(L, Wf);
        }), Yr()) {
          var Ql = an;
          Qs(L, Ql);
        }
        return xt;
      }
      function Ee(L, I, A, le) {
        var _e = bt(A);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (l0 || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), l0 = !0), A.entries === _e && (u0 || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), u0 = !0);
          var Ce = _e.call(A);
          if (Ce)
            for (var ct = null, xt = Ce.next(); !xt.done; xt = Ce.next()) {
              var hn = xt.value;
              ct = H(hn, ct, L);
            }
        }
        var rn = _e.call(A);
        if (rn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var sr = null, an = null, rr = I, ma = 0, Jr = 0, pi = null, _a = rn.next(); rr !== null && !_a.done; Jr++, _a = rn.next()) {
          rr.index > Jr ? (pi = rr, rr = null) : pi = rr.sibling;
          var Da = k(L, rr, _a.value, le);
          if (Da === null) {
            rr === null && (rr = pi);
            break;
          }
          e && rr && Da.alternate === null && t(L, rr), ma = s(Da, ma, Jr), an === null ? sr = Da : an.sibling = Da, an = Da, rr = pi;
        }
        if (_a.done) {
          if (a(L, rr), Yr()) {
            var ha = Jr;
            Qs(L, ha);
          }
          return sr;
        }
        if (rr === null) {
          for (; !_a.done; Jr++, _a = rn.next()) {
            var Ql = D(L, _a.value, le);
            Ql !== null && (ma = s(Ql, ma, Jr), an === null ? sr = Ql : an.sibling = Ql, an = Ql);
          }
          if (Yr()) {
            var Wf = Jr;
            Qs(L, Wf);
          }
          return sr;
        }
        for (var Jp = i(L, rr); !_a.done; Jr++, _a = rn.next()) {
          var tl = j(Jp, L, Jr, _a.value, le);
          tl !== null && (e && tl.alternate !== null && Jp.delete(tl.key === null ? Jr : tl.key), ma = s(tl, ma, Jr), an === null ? sr = tl : an.sibling = tl, an = tl);
        }
        if (e && Jp.forEach(function(xw) {
          return t(L, xw);
        }), Yr()) {
          var Ew = Jr;
          Qs(L, Ew);
        }
        return sr;
      }
      function Ze(L, I, A, le) {
        if (I !== null && I.tag === Fe) {
          a(L, I.sibling);
          var _e = l(I, A);
          return _e.return = L, _e;
        }
        a(L, I);
        var Ce = i4(A, L.mode, le);
        return Ce.return = L, Ce;
      }
      function Ye(L, I, A, le) {
        for (var _e = A.key, Ce = I; Ce !== null; ) {
          if (Ce.key === _e) {
            var ct = A.type;
            if (ct === mi) {
              if (Ce.tag === lt) {
                a(L, Ce.sibling);
                var xt = l(Ce, A.props.children);
                return xt.return = L, xt._debugSource = A._source, xt._debugOwner = A._owner, xt;
              }
            } else if (Ce.elementType === ct || // Keep this check inline so it only runs on the false path:
            O1(Ce, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ct == "object" && ct !== null && ct.$$typeof === gt && TS(ct) === Ce.type) {
              a(L, Ce.sibling);
              var hn = l(Ce, A.props);
              return hn.ref = Ep(L, Ce, A), hn.return = L, hn._debugSource = A._source, hn._debugOwner = A._owner, hn;
            }
            a(L, Ce);
            break;
          } else
            t(L, Ce);
          Ce = Ce.sibling;
        }
        if (A.type === mi) {
          var rn = Yo(A.props.children, L.mode, le, A.key);
          return rn.return = L, rn;
        } else {
          var sr = a4(A, L.mode, le);
          return sr.ref = Ep(L, I, A), sr.return = L, sr;
        }
      }
      function Wt(L, I, A, le) {
        for (var _e = A.key, Ce = I; Ce !== null; ) {
          if (Ce.key === _e)
            if (Ce.tag === pe && Ce.stateNode.containerInfo === A.containerInfo && Ce.stateNode.implementation === A.implementation) {
              a(L, Ce.sibling);
              var ct = l(Ce, A.children || []);
              return ct.return = L, ct;
            } else {
              a(L, Ce);
              break;
            }
          else
            t(L, Ce);
          Ce = Ce.sibling;
        }
        var xt = u4(A, L.mode, le);
        return xt.return = L, xt;
      }
      function Ht(L, I, A, le) {
        var _e = typeof A == "object" && A !== null && A.type === mi && A.key === null;
        if (_e && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case jr:
              return f(Ye(L, I, A, le));
            case mr:
              return f(Wt(L, I, A, le));
            case gt:
              var Ce = A._payload, ct = A._init;
              return Ht(L, I, ct(Ce), le);
          }
          if (_t(A))
            return $(L, I, A, le);
          if (bt(A))
            return Ee(L, I, A, le);
          Wm(L, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(Ze(L, I, "" + A, le)) : (typeof A == "function" && Qm(L), a(L, I));
      }
      return Ht;
    }
    var _f = wS(!0), kS = wS(!1);
    function Kb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = uc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = uc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Xb(e, t) {
      for (var a = e.child; a !== null; )
        FT(a, t), a = a.sibling;
    }
    var f0 = Oo(null), d0;
    d0 = {};
    var Gm = null, Df = null, p0 = null, qm = !1;
    function Km() {
      Gm = null, Df = null, p0 = null, qm = !1;
    }
    function _S() {
      qm = !0;
    }
    function DS() {
      qm = !1;
    }
    function NS(e, t, a) {
      pa(f0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== d0 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = d0;
    }
    function v0(e, t) {
      var a = f0.current;
      da(f0, t), e._currentValue = a;
    }
    function m0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Dl(i.childLanes, t) ? l !== null && !Dl(l.childLanes, t) && (l.childLanes = Tt(l.childLanes, t)) : (i.childLanes = Tt(i.childLanes, t), l !== null && (l.childLanes = Tt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jb(e, t, a) {
      Zb(e, t, a);
    }
    function Zb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ae) {
                var p = Rs(a), v = Bl(yn, p);
                v.tag = Jm;
                var g = i.updateQueue;
                if (g !== null) {
                  var S = g.shared, D = S.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), S.pending = v;
                }
              }
              i.lanes = Tt(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = Tt(k.lanes, a)), m0(i.return, a, e), s.lanes = Tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === He)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === ot) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = Tt(j.lanes, a);
          var H = j.alternate;
          H !== null && (H.lanes = Tt(H.lanes, a)), m0(j, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var $ = l.sibling;
            if ($ !== null) {
              $.return = l.return, l = $;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Nf(e, t) {
      Gm = e, Df = null, p0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Up(), a.firstContext = null);
      }
    }
    function vr(e) {
      qm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (p0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Df === null) {
          if (Gm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Df = a, Gm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          Df = Df.next = a;
      }
      return t;
    }
    var Js = null;
    function h0(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function e3() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function OS(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, h0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Xm(e, i);
    }
    function t3(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, h0(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function n3(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, h0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Xm(e, i);
    }
    function Ia(e, t) {
      return Xm(e, t);
    }
    var r3 = Xm;
    function Xm(e, t) {
      e.lanes = Tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Tt(a.lanes, t)), a === null && (e.flags & (Ln | ra)) !== Qe && k1(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Tt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Tt(a.childLanes, t) : (l.flags & (Ln | ra)) !== Qe && k1(e), i = l, l = l.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var MS = 0, LS = 1, Jm = 2, y0 = 3, Zm = !1, g0, eh;
    g0 = !1, eh = null;
    function S0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function AS(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Bl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: MS,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (eh === l && !g0 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), g0 = !0), tT()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, r3(e, a);
      } else
        return n3(e, l, t, a);
    }
    function th(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Ld(a)) {
          var s = l.lanes;
          s = Ud(s, e.pendingLanes);
          var f = Tt(s, a);
          l.lanes = f, tf(e, f);
        }
      }
    }
    function E0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var g = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = g : (f.next = g, f = g), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function a3(e, t, a, i, l, s) {
      switch (a.tag) {
        case LS: {
          var f = a.payload;
          if (typeof f == "function") {
            _S();
            var p = f.call(s, i, l);
            {
              if (e.mode & vn) {
                An(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  An(!1);
                }
              }
              DS();
            }
            return p;
          }
          return f;
        }
        case y0:
          e.flags = e.flags & ~cr | We;
        case MS: {
          var v = a.payload, g;
          if (typeof v == "function") {
            _S(), g = v.call(s, i, l);
            {
              if (e.mode & vn) {
                An(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  An(!1);
                }
              }
              DS();
            }
          } else
            g = v;
          return g == null ? i : kt({}, i, g);
        }
        case Jm:
          return Zm = !0, i;
      }
      return i;
    }
    function nh(e, t, a, i) {
      var l = e.updateQueue;
      Zm = !1, eh = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var v = p, g = v.next;
        v.next = null, f === null ? s = g : f.next = g, f = v;
        var S = e.alternate;
        if (S !== null) {
          var D = S.updateQueue, k = D.lastBaseUpdate;
          k !== f && (k === null ? D.firstBaseUpdate = g : k.next = g, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var j = l.baseState, H = ee, $ = null, Ee = null, Ze = null, Ye = s;
        do {
          var Wt = Ye.lane, Ht = Ye.eventTime;
          if (Dl(i, Wt)) {
            if (Ze !== null) {
              var I = {
                eventTime: Ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Ze = Ze.next = I;
            }
            j = a3(e, l, Ye, j, t, a);
            var A = Ye.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== Jt) {
              e.flags |= bn;
              var le = l.effects;
              le === null ? l.effects = [Ye] : le.push(Ye);
            }
          } else {
            var L = {
              eventTime: Ht,
              lane: Wt,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Ze === null ? (Ee = Ze = L, $ = j) : Ze = Ze.next = L, H = Tt(H, Wt);
          }
          if (Ye = Ye.next, Ye === null) {
            if (p = l.shared.pending, p === null)
              break;
            var _e = p, Ce = _e.next;
            _e.next = null, Ye = Ce, l.lastBaseUpdate = _e, l.shared.pending = null;
          }
        } while (!0);
        Ze === null && ($ = j), l.baseState = $, l.firstBaseUpdate = Ee, l.lastBaseUpdate = Ze;
        var ct = l.shared.interleaved;
        if (ct !== null) {
          var xt = ct;
          do
            H = Tt(H, xt.lane), xt = xt.next;
          while (xt !== ct);
        } else s === null && (l.shared.lanes = ee);
        Qp(H), e.lanes = H, e.memoizedState = j;
      }
      eh = null;
    }
    function i3(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function US() {
      Zm = !1;
    }
    function rh() {
      return Zm;
    }
    function jS(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, i3(f, a));
        }
    }
    var xp = {}, jo = Oo(xp), Cp = Oo(xp), ah = Oo(xp);
    function ih(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function zS() {
      var e = ih(ah.current);
      return e;
    }
    function x0(e, t) {
      pa(ah, t, e), pa(Cp, e, e), pa(jo, xp, e);
      var a = CC(t);
      da(jo, e), pa(jo, a, e);
    }
    function Of(e) {
      da(jo, e), da(Cp, e), da(ah, e);
    }
    function C0() {
      var e = ih(jo.current);
      return e;
    }
    function FS(e) {
      ih(ah.current);
      var t = ih(jo.current), a = bC(t, e.type);
      t !== a && (pa(Cp, e, e), pa(jo, a, e));
    }
    function b0(e) {
      Cp.current === e && (da(jo, e), da(Cp, e));
    }
    var u3 = 0, HS = 1, PS = 1, bp = 2, cu = Oo(u3);
    function R0(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & HS;
    }
    function T0(e, t) {
      return e & HS | t;
    }
    function l3(e, t) {
      return e | t;
    }
    function zo(e, t) {
      pa(cu, t, e);
    }
    function Lf(e) {
      da(cu, e);
    }
    function o3(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function uh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ge) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || rS(i) || $y(i))
              return t;
          }
        } else if (t.tag === Pt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & We) !== Qe;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ya = (
      /*   */
      0
    ), Cr = (
      /* */
      1
    ), Gu = (
      /*  */
      2
    ), br = (
      /*    */
      4
    ), Wr = (
      /*   */
      8
    ), w0 = [];
    function k0() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e];
        t._workInProgressVersionPrimary = null;
      }
      w0.length = 0;
    }
    function s3(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Te = E.ReactCurrentDispatcher, Rp = E.ReactCurrentBatchConfig, _0, Af;
    _0 = /* @__PURE__ */ new Set();
    var Zs = ee, mn = null, Rr = null, Tr = null, lh = !1, Tp = !1, wp = 0, c3 = 0, f3 = 25, W = null, Fi = null, Fo = -1, D0 = !1;
    function sn() {
      {
        var e = W;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function me() {
      {
        var e = W;
        Fi !== null && (Fo++, Fi[Fo] !== e && d3(e));
      }
    }
    function Uf(e) {
      e != null && !_t(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", W, typeof e);
    }
    function d3(e) {
      {
        var t = ht(mn);
        if (!_0.has(t) && (_0.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Fo; l++) {
            for (var s = Fi[l], f = l === Fo ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function va() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function N0(e, t) {
      if (D0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", W), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, W, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!re(e[a], t[a]))
          return !1;
      return !0;
    }
    function jf(e, t, a, i, l, s) {
      Zs = s, mn = t, Fi = e !== null ? e._debugHookTypes : null, Fo = -1, D0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Te.current = oE : Fi !== null ? Te.current = lE : Te.current = uE;
      var f = a(i, l);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= f3)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, D0 = !1, Rr = null, Tr = null, t.updateQueue = null, Fo = -1, Te.current = sE, f = a(i, l);
        } while (Tp);
      }
      Te.current = Eh, t._debugHookTypes = Fi;
      var v = Rr !== null && Rr.next !== null;
      if (Zs = ee, mn = null, Rr = null, Tr = null, W = null, Fi = null, Fo = -1, e !== null && (e.flags & Xn) !== (t.flags & Xn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Mt) !== Ge && y("Internal React error: Expected static flag was missing. Please notify the React team."), lh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function zf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function BS(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & tn) !== Ge ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ts(e.lanes, a);
    }
    function VS() {
      if (Te.current = Eh, lh) {
        for (var e = mn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lh = !1;
      }
      Zs = ee, mn = null, Rr = null, Tr = null, Fi = null, Fo = -1, W = null, tE = !1, Tp = !1, wp = 0;
    }
    function qu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tr === null ? mn.memoizedState = Tr = e : Tr = Tr.next = e, Tr;
    }
    function Hi() {
      var e;
      if (Rr === null) {
        var t = mn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Rr.next;
      var a;
      if (Tr === null ? a = mn.memoizedState : a = Tr.next, a !== null)
        Tr = a, a = Tr.next, Rr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Rr = e;
        var i = {
          memoizedState: Rr.memoizedState,
          baseState: Rr.baseState,
          baseQueue: Rr.baseQueue,
          queue: Rr.queue,
          next: null
        };
        Tr === null ? mn.memoizedState = Tr = i : Tr = Tr.next = i;
      }
      return Tr;
    }
    function $S() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function O0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function M0(e, t, a) {
      var i = qu(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = h3.bind(null, mn, s);
      return [i.memoizedState, f];
    }
    function L0(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Rr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var S = f.next, D = s.baseState, k = null, j = null, H = null, $ = S;
        do {
          var Ee = $.lane;
          if (Dl(Zs, Ee)) {
            if (H !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null
              };
              H = H.next = Ye;
            }
            if ($.hasEagerState)
              D = $.eagerState;
            else {
              var Wt = $.action;
              D = e(D, Wt);
            }
          } else {
            var Ze = {
              lane: Ee,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            };
            H === null ? (j = H = Ze, k = D) : H = H.next = Ze, mn.lanes = Tt(mn.lanes, Ee), Qp(Ee);
          }
          $ = $.next;
        } while ($ !== null && $ !== S);
        H === null ? k = D : H.next = j, re(D, i.memoizedState) || Up(), i.memoizedState = D, i.baseState = k, i.baseQueue = H, l.lastRenderedState = D;
      }
      var Ht = l.interleaved;
      if (Ht !== null) {
        var L = Ht;
        do {
          var I = L.lane;
          mn.lanes = Tt(mn.lanes, I), Qp(I), L = L.next;
        } while (L !== Ht);
      } else f === null && (l.lanes = ee);
      var A = l.dispatch;
      return [i.memoizedState, A];
    }
    function A0(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var v = f.next, g = v;
        do {
          var S = g.action;
          p = e(p, S), g = g.next;
        } while (g !== v);
        re(p, i.memoizedState) || Up(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function _k(e, t, a) {
    }
    function Dk(e, t, a) {
    }
    function U0(e, t, a) {
      var i = mn, l = qu(), s, f = Yr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          re(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Hh();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(v, Zs) || IS(i, t, s);
      }
      l.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return l.queue = g, dh(WS.bind(null, i, g, e), [e]), i.flags |= na, kp(Cr | Wr, YS.bind(null, i, g, s, t), void 0, null), s;
    }
    function oh(e, t, a) {
      var i = mn, l = Hi(), s = t();
      if (!Af) {
        var f = t();
        re(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = l.memoizedState, v = !re(p, s);
      v && (l.memoizedState = s, Up());
      var g = l.queue;
      if (Dp(WS.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Tr !== null && Tr.memoizedState.tag & Cr) {
        i.flags |= na, kp(Cr | Wr, YS.bind(null, i, g, s, t), void 0, null);
        var S = Hh();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(S, Zs) || IS(i, t, s);
      }
      return s;
    }
    function IS(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, l = mn.updateQueue;
      if (l === null)
        l = $S(), mn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function YS(e, t, a, i) {
      t.value = a, t.getSnapshot = i, QS(t) && GS(e);
    }
    function WS(e, t, a) {
      var i = function() {
        QS(t) && GS(e);
      };
      return a(i);
    }
    function QS(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !re(a, i);
      } catch {
        return !0;
      }
    }
    function GS(e) {
      var t = Ia(e, ut);
      t !== null && Dr(t, e, ut, yn);
    }
    function sh(e) {
      var t = qu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: O0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = y3.bind(null, mn, a);
      return [t.memoizedState, i];
    }
    function j0(e) {
      return L0(O0);
    }
    function z0(e) {
      return A0(O0);
    }
    function kp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = mn.updateQueue;
      if (s === null)
        s = $S(), mn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function F0(e) {
      var t = qu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ch(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var l = qu(), s = i === void 0 ? null : i;
      mn.flags |= e, l.memoizedState = kp(Cr | t, a, void 0, s);
    }
    function fh(e, t, a, i) {
      var l = Hi(), s = i === void 0 ? null : i, f = void 0;
      if (Rr !== null) {
        var p = Rr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (N0(s, v)) {
            l.memoizedState = kp(t, a, f, s);
            return;
          }
        }
      }
      mn.flags |= e, l.memoizedState = kp(Cr | t, a, f, s);
    }
    function dh(e, t) {
      return (mn.mode & tn) !== Ge ? _p(wi | na | wc, Wr, e, t) : _p(na | wc, Wr, e, t);
    }
    function Dp(e, t) {
      return fh(na, Wr, e, t);
    }
    function H0(e, t) {
      return _p($t, Gu, e, t);
    }
    function ph(e, t) {
      return fh($t, Gu, e, t);
    }
    function P0(e, t) {
      var a = $t;
      return a |= Ji, (mn.mode & tn) !== Ge && (a |= Nu), _p(a, br, e, t);
    }
    function vh(e, t) {
      return fh($t, br, e, t);
    }
    function qS(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function B0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = $t;
      return l |= Ji, (mn.mode & tn) !== Ge && (l |= Nu), _p(l, br, qS.bind(null, t, e), i);
    }
    function mh(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return fh($t, br, qS.bind(null, t, e), i);
    }
    function p3(e, t) {
    }
    var hh = p3;
    function V0(e, t) {
      var a = qu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function yh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (N0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function $0(e, t) {
      var a = qu(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function gh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (N0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function I0(e) {
      var t = qu();
      return t.memoizedState = e, e;
    }
    function KS(e) {
      var t = Hi(), a = Rr, i = a.memoizedState;
      return JS(t, i, e);
    }
    function XS(e) {
      var t = Hi();
      if (Rr === null)
        return t.memoizedState = e, e;
      var a = Rr.memoizedState;
      return JS(t, a, e);
    }
    function JS(e, t, a) {
      var i = !Od(Zs);
      if (i) {
        if (!re(a, t)) {
          var l = Ad();
          mn.lanes = Tt(mn.lanes, l), Qp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Up()), e.memoizedState = a, a;
    }
    function v3(e, t, a) {
      var i = Ba();
      er(qv(i, Ni)), e(!0);
      var l = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (er(i), Rp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && X("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Y0() {
      var e = sh(!1), t = e[0], a = e[1], i = v3.bind(null, a), l = qu();
      return l.memoizedState = i, [t, i];
    }
    function ZS() {
      var e = j0(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function eE() {
      var e = z0(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var tE = !1;
    function m3() {
      return tE;
    }
    function W0() {
      var e = qu(), t = Hh(), a = t.identifierPrefix, i;
      if (Yr()) {
        var l = Mb();
        i = ":" + a + "R" + l;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = c3++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Sh() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function h3(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nE(e))
        rE(t, l);
      else {
        var s = OS(e, t, l, i);
        if (s !== null) {
          var f = ka();
          Dr(s, e, i, f), aE(s, t, i);
        }
      }
      iE(e, i);
    }
    function y3(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nE(e))
        rE(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Te.current, Te.current = fu;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (l.hasEagerState = !0, l.eagerState = g, re(g, v)) {
                t3(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Te.current = p;
            }
          }
        }
        var S = OS(e, t, l, i);
        if (S !== null) {
          var D = ka();
          Dr(S, e, i, D), aE(S, t, i);
        }
      }
      iE(e, i);
    }
    function nE(e) {
      var t = e.alternate;
      return e === mn || t !== null && t === mn;
    }
    function rE(e, t) {
      Tp = lh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function aE(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Ud(i, e.pendingLanes);
        var l = Tt(i, a);
        t.lanes = l, tf(e, l);
      }
    }
    function iE(e, t, a) {
      ms(e, t);
    }
    var Eh = {
      readContext: vr,
      useCallback: va,
      useContext: va,
      useEffect: va,
      useImperativeHandle: va,
      useInsertionEffect: va,
      useLayoutEffect: va,
      useMemo: va,
      useReducer: va,
      useRef: va,
      useState: va,
      useDebugValue: va,
      useDeferredValue: va,
      useTransition: va,
      useMutableSource: va,
      useSyncExternalStore: va,
      useId: va,
      unstable_isNewReconciler: oe
    }, uE = null, lE = null, oE = null, sE = null, Ku = null, fu = null, xh = null;
    {
      var Q0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", sn(), Uf(t), V0(e, t);
        },
        useContext: function(e) {
          return W = "useContext", sn(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", sn(), Uf(t), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", sn(), Uf(a), B0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", sn(), Uf(t), H0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", sn(), Uf(t), P0(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", sn(), Uf(t);
          var a = Te.current;
          Te.current = Ku;
          try {
            return $0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", sn();
          var i = Te.current;
          Te.current = Ku;
          try {
            return M0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", sn(), F0(e);
        },
        useState: function(e) {
          W = "useState", sn();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", sn(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", sn(), I0(e);
        },
        useTransition: function() {
          return W = "useTransition", sn(), Y0();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", sn(), U0(e, t, a);
        },
        useId: function() {
          return W = "useId", sn(), W0();
        },
        unstable_isNewReconciler: oe
      }, lE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", me(), V0(e, t);
        },
        useContext: function(e) {
          return W = "useContext", me(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", me(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", me(), B0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", me(), H0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", me(), P0(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", me();
          var a = Te.current;
          Te.current = Ku;
          try {
            return $0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", me();
          var i = Te.current;
          Te.current = Ku;
          try {
            return M0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", me(), F0(e);
        },
        useState: function(e) {
          W = "useState", me();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", me(), I0(e);
        },
        useTransition: function() {
          return W = "useTransition", me(), Y0();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", me(), U0(e, t, a);
        },
        useId: function() {
          return W = "useId", me(), W0();
        },
        unstable_isNewReconciler: oe
      }, oE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", me(), yh(e, t);
        },
        useContext: function(e) {
          return W = "useContext", me(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", me(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", me(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", me(), vh(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", me();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", me();
          var i = Te.current;
          Te.current = fu;
          try {
            return L0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", me(), ch();
        },
        useState: function(e) {
          W = "useState", me();
          var t = Te.current;
          Te.current = fu;
          try {
            return j0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", me(), hh();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", me(), KS(e);
        },
        useTransition: function() {
          return W = "useTransition", me(), ZS();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", me(), oh(e, t);
        },
        useId: function() {
          return W = "useId", me(), Sh();
        },
        unstable_isNewReconciler: oe
      }, sE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", me(), yh(e, t);
        },
        useContext: function(e) {
          return W = "useContext", me(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", me(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", me(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", me(), vh(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", me();
          var a = Te.current;
          Te.current = xh;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", me();
          var i = Te.current;
          Te.current = xh;
          try {
            return A0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", me(), ch();
        },
        useState: function(e) {
          W = "useState", me();
          var t = Te.current;
          Te.current = xh;
          try {
            return z0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", me(), hh();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", me(), XS(e);
        },
        useTransition: function() {
          return W = "useTransition", me(), eE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", me(), oh(e, t);
        },
        useId: function() {
          return W = "useId", me(), Sh();
        },
        unstable_isNewReconciler: oe
      }, Ku = {
        readContext: function(e) {
          return Q0(), vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", St(), sn(), V0(e, t);
        },
        useContext: function(e) {
          return W = "useContext", St(), sn(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", St(), sn(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", St(), sn(), B0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", St(), sn(), H0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", St(), sn(), P0(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", St(), sn();
          var a = Te.current;
          Te.current = Ku;
          try {
            return $0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", St(), sn();
          var i = Te.current;
          Te.current = Ku;
          try {
            return M0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", St(), sn(), F0(e);
        },
        useState: function(e) {
          W = "useState", St(), sn();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", St(), sn(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", St(), sn(), I0(e);
        },
        useTransition: function() {
          return W = "useTransition", St(), sn(), Y0();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", St(), sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", St(), sn(), U0(e, t, a);
        },
        useId: function() {
          return W = "useId", St(), sn(), W0();
        },
        unstable_isNewReconciler: oe
      }, fu = {
        readContext: function(e) {
          return Q0(), vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", St(), me(), yh(e, t);
        },
        useContext: function(e) {
          return W = "useContext", St(), me(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", St(), me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", St(), me(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", St(), me(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", St(), me(), vh(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", St(), me();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", St(), me();
          var i = Te.current;
          Te.current = fu;
          try {
            return L0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", St(), me(), ch();
        },
        useState: function(e) {
          W = "useState", St(), me();
          var t = Te.current;
          Te.current = fu;
          try {
            return j0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", St(), me(), hh();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", St(), me(), KS(e);
        },
        useTransition: function() {
          return W = "useTransition", St(), me(), ZS();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", St(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", St(), me(), oh(e, t);
        },
        useId: function() {
          return W = "useId", St(), me(), Sh();
        },
        unstable_isNewReconciler: oe
      }, xh = {
        readContext: function(e) {
          return Q0(), vr(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", St(), me(), yh(e, t);
        },
        useContext: function(e) {
          return W = "useContext", St(), me(), vr(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", St(), me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", St(), me(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", St(), me(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", St(), me(), vh(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", St(), me();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", St(), me();
          var i = Te.current;
          Te.current = fu;
          try {
            return A0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", St(), me(), ch();
        },
        useState: function(e) {
          W = "useState", St(), me();
          var t = Te.current;
          Te.current = fu;
          try {
            return z0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", St(), me(), hh();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", St(), me(), XS(e);
        },
        useTransition: function() {
          return W = "useTransition", St(), me(), eE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", St(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", St(), me(), oh(e, t);
        },
        useId: function() {
          return W = "useId", St(), me(), Sh();
        },
        unstable_isNewReconciler: oe
      };
    }
    var Ho = w.unstable_now, cE = 0, Ch = -1, Np = -1, bh = -1, G0 = !1, Rh = !1;
    function fE() {
      return G0;
    }
    function g3() {
      Rh = !0;
    }
    function S3() {
      G0 = !1, Rh = !1;
    }
    function E3() {
      G0 = Rh, Rh = !1;
    }
    function dE() {
      return cE;
    }
    function pE() {
      cE = Ho();
    }
    function q0(e) {
      Np = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function vE(e) {
      Np = -1;
    }
    function Th(e, t) {
      if (Np >= 0) {
        var a = Ho() - Np;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Np = -1;
      }
    }
    function Xu(e) {
      if (Ch >= 0) {
        var t = Ho() - Ch;
        Ch = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Oe:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function K0(e) {
      if (bh >= 0) {
        var t = Ho() - bh;
        bh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Oe:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ju() {
      Ch = Ho();
    }
    function X0() {
      bh = Ho();
    }
    function J0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function du(e, t) {
      if (e && e.defaultProps) {
        var a = kt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Z0 = {}, eg, tg, ng, rg, ag, mE, wh, ig, ug, lg, Op;
    {
      eg = /* @__PURE__ */ new Set(), tg = /* @__PURE__ */ new Set(), ng = /* @__PURE__ */ new Set(), rg = /* @__PURE__ */ new Set(), ig = /* @__PURE__ */ new Set(), ag = /* @__PURE__ */ new Set(), ug = /* @__PURE__ */ new Set(), lg = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var hE = /* @__PURE__ */ new Set();
      wh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          hE.has(a) || (hE.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mE = function(e, t) {
        if (t === void 0) {
          var a = Gt(e) || "Component";
          ag.has(a) || (ag.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Z0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Z0);
    }
    function og(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & vn) {
          An(!0);
          try {
            s = a(i, l);
          } finally {
            An(!1);
          }
        }
        mE(t, s);
      }
      var f = s == null ? l : kt({}, l, s);
      if (e.memoizedState = f, e.lanes === ee) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var sg = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = vo(e), l = ka(), s = $o(i), f = Bl(l, s);
        f.payload = t, a != null && (wh(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (Dr(p, i, s, l), th(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vo(e), l = ka(), s = $o(i), f = Bl(l, s);
        f.tag = LS, f.payload = t, a != null && (wh(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (Dr(p, i, s, l), th(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vo(e), i = ka(), l = $o(a), s = Bl(i, l);
        s.tag = Jm, t != null && (wh(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, l);
        f !== null && (Dr(f, a, l, i), th(f, a, l)), Lc(a, l);
      }
    };
    function yE(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & vn) {
            An(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(l, s) : !0;
    }
    function x3(e, t, a) {
      var i = e.stateNode;
      {
        var l = Gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & vn) === Ge && (Op.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & vn) === Ge && (Op.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !ug.has(t) && (ug.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !ng.has(t) && (ng.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Gt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || _t(p)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function gE(e, t) {
      t.updater = sg, e.stateNode = t, ml(t, e), t._reactInternalInstance = Z0;
    }
    function SE(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !lg.has(t)) {
          lg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === yi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = vr(f);
      else {
        l = bf(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? Rf(e, l) : fi;
      }
      var S = new t(a, s);
      if (e.mode & vn) {
        An(!0);
        try {
          S = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var D = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      gE(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var k = Gt(t) || "Component";
          tg.has(k) || (tg.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, S.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var j = null, H = null, $ = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? $ = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && ($ = "UNSAFE_componentWillUpdate"), j !== null || H !== null || $ !== null) {
            var Ee = Gt(t) || "Component", Ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            rg.has(Ee) || (rg.add(Ee), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ee, Ze, j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : "", $ !== null ? `
  ` + $ : ""));
          }
        }
      }
      return i && oS(e, l, s), S;
    }
    function C3(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), sg.enqueueReplaceState(t, t.state, null));
    }
    function EE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ht(e) || "Component";
          eg.has(s) || (eg.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        sg.enqueueReplaceState(t, t.state, null);
      }
    }
    function cg(e, t, a, i) {
      x3(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, S0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = vr(s);
      else {
        var f = bf(e, t, !0);
        l.context = Rf(e, f);
      }
      {
        if (l.state === a) {
          var p = Gt(t) || "Component";
          ig.has(p) || (ig.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & vn && su.recordLegacyContextWarning(e, l), su.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (og(e, t, v, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (C3(e, l), nh(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var g = $t;
        g |= Ji, (e.mode & tn) !== Ge && (g |= Nu), e.flags |= g;
      }
    }
    function b3(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, v = fi;
      if (typeof p == "object" && p !== null)
        v = vr(p);
      else {
        var g = bf(e, t, !0);
        v = Rf(e, g);
      }
      var S = t.getDerivedStateFromProps, D = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !D && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== v) && EE(e, l, a, v), US();
      var k = e.memoizedState, j = l.state = k;
      if (nh(e, a, l, i), j = e.memoizedState, s === a && k === j && !zm() && !rh()) {
        if (typeof l.componentDidMount == "function") {
          var H = $t;
          H |= Ji, (e.mode & tn) !== Ge && (H |= Nu), e.flags |= H;
        }
        return !1;
      }
      typeof S == "function" && (og(e, t, S, a), j = e.memoizedState);
      var $ = rh() || yE(e, t, s, a, k, j, v);
      if ($) {
        if (!D && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Ee = $t;
          Ee |= Ji, (e.mode & tn) !== Ge && (Ee |= Nu), e.flags |= Ee;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ze = $t;
          Ze |= Ji, (e.mode & tn) !== Ge && (Ze |= Nu), e.flags |= Ze;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return l.props = a, l.state = j, l.context = v, $;
    }
    function R3(e, t, a, i, l) {
      var s = t.stateNode;
      AS(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : du(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, S = a.contextType, D = fi;
      if (typeof S == "object" && S !== null)
        D = vr(S);
      else {
        var k = bf(t, a, !0);
        D = Rf(t, k);
      }
      var j = a.getDerivedStateFromProps, H = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && EE(t, s, i, D), US();
      var $ = t.memoizedState, Ee = s.state = $;
      if (nh(t, i, s, l), Ee = t.memoizedState, f === v && $ === Ee && !zm() && !rh() && !Ae)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= ur), !1;
      typeof j == "function" && (og(t, a, j, i), Ee = t.memoizedState);
      var Ze = rh() || yE(t, a, p, i, $, Ee, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return Ze ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ee, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ee, D)), typeof s.componentDidUpdate == "function" && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ur)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= ur), t.memoizedProps = i, t.memoizedState = Ee), s.props = i, s.state = Ee, s.context = D, Ze;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Wi(t),
        digest: null
      };
    }
    function fg(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function T3(e, t) {
      return !0;
    }
    function dg(e, t) {
      try {
        var a = T3(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ae)
            return;
          console.error(i);
        }
        var p = l ? ht(l) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === J)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = ht(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var D = v + `
` + f + `

` + ("" + g);
        console.error(D);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var w3 = typeof WeakMap == "function" ? WeakMap : Map;
    function xE(e, t, a) {
      var i = Bl(yn, a);
      i.tag = y0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        gT(l), dg(e, t);
      }, i;
    }
    function pg(e, t, a) {
      var i = Bl(yn, a);
      i.tag = y0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          M1(e), dg(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        M1(e), dg(e, t), typeof l != "function" && hT(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof l != "function" && (oa(e.lanes, ut) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function CE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new w3(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = ST.bind(null, e, t, a);
        ua && Gp(e, a), t.then(s, s);
      }
    }
    function k3(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function _3(e, t) {
      var a = e.tag;
      if ((e.mode & Mt) === Ge && (a === Q || a === ie || a === De)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function bE(e) {
      var t = e;
      do {
        if (t.tag === ge && o3(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function RE(e, t, a, i, l) {
      if ((e.mode & Mt) === Ge) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= We, a.flags |= Tc, a.flags &= -52805, a.tag === ae) {
            var s = a.alternate;
            if (s === null)
              a.tag = it;
            else {
              var f = Bl(yn, ut);
              f.tag = Jm, Uo(a, f, ut);
            }
          }
          a.lanes = Tt(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = l, e;
    }
    function D3(e, t, a, i, l) {
      if (a.flags |= ss, ua && Gp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        _3(a), Yr() && a.mode & Mt && mS();
        var f = bE(t);
        if (f !== null) {
          f.flags &= ~Or, RE(f, t, a, e, l), f.mode & Mt && CE(e, s, l), k3(f, e, s);
          return;
        } else {
          if (!Bv(l)) {
            CE(e, s, l), Wg();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Yr() && a.mode & Mt) {
        mS();
        var v = bE(t);
        if (v !== null) {
          (v.flags & cr) === Qe && (v.flags |= Or), RE(v, t, a, e, l), i0(ec(i, a));
          return;
        }
      }
      i = ec(i, a), oT(i);
      var g = t;
      do {
        switch (g.tag) {
          case J: {
            var S = i;
            g.flags |= cr;
            var D = Rs(l);
            g.lanes = Tt(g.lanes, D);
            var k = xE(g, S, D);
            E0(g, k);
            return;
          }
          case ae:
            var j = i, H = g.type, $ = g.stateNode;
            if ((g.flags & We) === Qe && (typeof H.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && !b1($))) {
              g.flags |= cr;
              var Ee = Rs(l);
              g.lanes = Tt(g.lanes, Ee);
              var Ze = pg(g, j, Ee);
              E0(g, Ze);
              return;
            }
            break;
        }
        g = g.return;
      } while (g !== null);
    }
    function N3() {
      return null;
    }
    var Mp = E.ReactCurrentOwner, pu = !1, vg, Lp, mg, hg, yg, tc, gg, kh, Ap;
    vg = {}, Lp = {}, mg = {}, hg = {}, yg = {}, tc = !1, gg = {}, kh = {}, Ap = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = kS(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function O3(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function TE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && lu(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      Nf(t, l), xa(t);
      {
        if (Mp.current = t, ir(!0), v = jf(e, t, f, i, p, l), g = zf(), t.mode & vn) {
          An(!0);
          try {
            v = jf(e, t, f, i, p, l), g = zf();
          } finally {
            An(!1);
          }
        }
        ir(!1);
      }
      return Ca(), e !== null && !pu ? (BS(e, t, l), Vl(e, t, l)) : (Yr() && g && Zy(t), t.flags |= ui, Ta(e, t, v, l), t.child);
    }
    function wE(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (jT(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = De, t.type = f, xg(t, s), kE(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && lu(
            p,
            i,
            // Resolved props
            "prop",
            Gt(s)
          ), a.defaultProps !== void 0) {
            var v = Gt(s) || "Unknown";
            Ap[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Ap[v] = !0);
          }
        }
        var g = r4(a.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var S = a.type, D = S.propTypes;
        D && lu(
          D,
          i,
          // Resolved props
          "prop",
          Gt(S)
        );
      }
      var k = e.child, j = kg(e, l);
      if (!j) {
        var H = k.memoizedProps, $ = a.compare;
        if ($ = $ !== null ? $ : je, $(H, i) && e.ref === t.ref)
          return Vl(e, t, l);
      }
      t.flags |= ui;
      var Ee = uc(k, i);
      return Ee.ref = t.ref, Ee.return = t, t.child = Ee, Ee;
    }
    function kE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === gt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && lu(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Gt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (je(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (pu = !1, t.pendingProps = i = S, kg(e, l))
            (e.flags & Tc) !== Qe && (pu = !0);
          else return t.lanes = e.lanes, Vl(e, t, l);
      }
      return Sg(e, t, a, i, l);
    }
    function _E(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || de)
        if ((t.mode & Mt) === Ge) {
          var f = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Ph(t, a);
        } else if (oa(a, la)) {
          var D = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var k = s !== null ? s.baseLanes : a;
          Ph(t, k);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = Tt(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = la;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, Ph(t, v), null;
        }
      else {
        var j;
        s !== null ? (j = Tt(s.baseLanes, a), t.memoizedState = null) : j = a, Ph(t, j);
      }
      return Ta(e, t, l, a), t.child;
    }
    function M3(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function L3(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function A3(e, t, a) {
      {
        t.flags |= $t;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ta(e, t, s, a), t.child;
    }
    function DE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ho);
    }
    function Sg(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && lu(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var f;
      {
        var p = bf(t, a, !0);
        f = Rf(t, p);
      }
      var v, g;
      Nf(t, l), xa(t);
      {
        if (Mp.current = t, ir(!0), v = jf(e, t, a, i, f, l), g = zf(), t.mode & vn) {
          An(!0);
          try {
            v = jf(e, t, a, i, f, l), g = zf();
          } finally {
            An(!1);
          }
        }
        ir(!1);
      }
      return Ca(), e !== null && !pu ? (BS(e, t, l), Vl(e, t, l)) : (Yr() && g && Zy(t), t.flags |= ui, Ta(e, t, v, l), t.child);
    }
    function NE(e, t, a, i, l) {
      {
        switch (XT(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= cr;
            var g = new Error("Simulated error coming from DevTools"), S = Rs(l);
            t.lanes = Tt(t.lanes, S);
            var D = pg(t, ec(g, t), S);
            E0(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && lu(
            k,
            i,
            // Resolved props
            "prop",
            Gt(a)
          );
        }
      }
      var j;
      Qu(a) ? (j = !0, Hm(t)) : j = !1, Nf(t, l);
      var H = t.stateNode, $;
      H === null ? (Dh(e, t), SE(t, a, i), cg(t, a, i, l), $ = !0) : e === null ? $ = b3(t, a, i, l) : $ = R3(e, t, a, i, l);
      var Ee = Eg(e, t, a, $, j, l);
      {
        var Ze = t.stateNode;
        $ && Ze.props !== i && (tc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), tc = !0);
      }
      return Ee;
    }
    function Eg(e, t, a, i, l, s) {
      DE(e, t);
      var f = (t.flags & We) !== Qe;
      if (!i && !f)
        return l && fS(t, a, !1), Vl(e, t, s);
      var p = t.stateNode;
      Mp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, vE();
      else {
        xa(t);
        {
          if (ir(!0), v = p.render(), t.mode & vn) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          ir(!1);
        }
        Ca();
      }
      return t.flags |= ui, e !== null && f ? O3(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, l && fS(t, a, !0), t.child;
    }
    function OE(e) {
      var t = e.stateNode;
      t.pendingContext ? sS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sS(e, t.context, !1), x0(e, t.containerInfo);
    }
    function U3(e, t, a) {
      if (OE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      AS(e, t), nh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, g = t.updateQueue;
        if (g.baseState = v, t.memoizedState = v, t.flags & Or) {
          var S = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ME(e, t, p, a, S);
        } else if (p !== s) {
          var D = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ME(e, t, p, a, D);
        } else {
          Fb(t);
          var k = kS(t, null, p, a);
          t.child = k;
          for (var j = k; j; )
            j.flags = j.flags & ~Ln | ra, j = j.sibling;
        }
      } else {
        if (kf(), p === s)
          return Vl(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function ME(e, t, a, i, l) {
      return kf(), i0(l), t.flags |= Or, Ta(e, t, a, i), t.child;
    }
    function j3(e, t, a) {
      FS(t), e === null && a0(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = Hy(i, l);
      return p ? f = null : s !== null && Hy(i, s) && (t.flags |= Ua), DE(e, t), Ta(e, t, f, a), t.child;
    }
    function z3(e, t) {
      return e === null && a0(t), null;
    }
    function F3(e, t, a, i) {
      Dh(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = zT(v), S = du(v, l), D;
      switch (g) {
        case Q:
          return xg(t, v), t.type = v = Yf(v), D = Sg(null, t, v, S, i), D;
        case ae:
          return t.type = v = Xg(v), D = NE(null, t, v, S, i), D;
        case ie:
          return t.type = v = Jg(v), D = TE(null, t, v, S, i), D;
        case Ke: {
          if (t.type !== t.elementType) {
            var k = v.propTypes;
            k && lu(
              k,
              S,
              // Resolved for outer only
              "prop",
              Gt(v)
            );
          }
          return D = wE(
            null,
            t,
            v,
            du(v.type, S),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var j = "";
      throw v !== null && typeof v == "object" && v.$$typeof === gt && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function H3(e, t, a, i, l) {
      Dh(e, t), t.tag = ae;
      var s;
      return Qu(a) ? (s = !0, Hm(t)) : s = !1, Nf(t, l), SE(t, a, i), cg(t, a, i, l), Eg(null, t, a, !0, s, l);
    }
    function P3(e, t, a, i) {
      Dh(e, t);
      var l = t.pendingProps, s;
      {
        var f = bf(t, a, !1);
        s = Rf(t, f);
      }
      Nf(t, i);
      var p, v;
      xa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = Gt(a) || "Unknown";
          vg[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), vg[g] = !0);
        }
        t.mode & vn && su.recordLegacyContextWarning(t, null), ir(!0), Mp.current = t, p = jf(null, t, a, l, s, i), v = zf(), ir(!1);
      }
      if (Ca(), t.flags |= ui, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = Gt(a) || "Unknown";
        Lp[S] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Lp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Gt(a) || "Unknown";
          Lp[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Lp[D] = !0);
        }
        t.tag = ae, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Qu(a) ? (k = !0, Hm(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, S0(t), gE(t, p), cg(t, a, l, i), Eg(null, t, a, !0, k, i);
      } else {
        if (t.tag = Q, t.mode & vn) {
          An(!0);
          try {
            p = jf(null, t, a, l, s, i), v = zf();
          } finally {
            An(!1);
          }
        }
        return Yr() && v && Zy(t), Ta(null, t, p, i), xg(t, a), t.child;
      }
    }
    function xg(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Fr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), yg[l] || (yg[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Gt(t) || "Unknown";
          Ap[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Ap[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Gt(t) || "Unknown";
          hg[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), hg[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Gt(t) || "Unknown";
          mg[v] || (y("%s: Function components do not support contextType.", v), mg[v] = !0);
        }
      }
    }
    var Cg = {
      dehydrated: null,
      treeContext: null,
      retryLane: Jt
    };
    function bg(e) {
      return {
        baseLanes: e,
        cachePool: N3(),
        transitions: null
      };
    }
    function B3(e, t) {
      var a = null;
      return {
        baseLanes: Tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function V3(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return R0(e, bp);
    }
    function $3(e, t) {
      return Ts(e.childLanes, t);
    }
    function LE(e, t, a) {
      var i = t.pendingProps;
      JT(t) && (t.flags |= We);
      var l = cu.current, s = !1, f = (t.flags & We) !== Qe;
      if (f || V3(l, e) ? (s = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (l = l3(l, PS)), l = Mf(l), zo(t, l), e === null) {
        a0(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return G3(t, v);
        }
        var g = i.children, S = i.fallback;
        if (s) {
          var D = I3(t, g, S, a), k = t.child;
          return k.memoizedState = bg(a), t.memoizedState = Cg, D;
        } else
          return Rg(t, g);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var H = j.dehydrated;
          if (H !== null)
            return q3(e, t, f, i, H, j, a);
        }
        if (s) {
          var $ = i.fallback, Ee = i.children, Ze = W3(e, t, Ee, $, a), Ye = t.child, Wt = e.child.memoizedState;
          return Ye.memoizedState = Wt === null ? bg(a) : B3(Wt, a), Ye.childLanes = $3(e, a), t.memoizedState = Cg, Ze;
        } else {
          var Ht = i.children, L = Y3(e, t, Ht, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function Rg(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = Tg(l, i);
      return s.return = e, e.child = s, s;
    }
    function I3(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (l & Mt) === Ge && s !== null ? (p = s, p.childLanes = ee, p.pendingProps = f, e.mode & en && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, l, i, null)) : (p = Tg(f, l), v = Yo(a, l, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function Tg(e, t, a) {
      return A1(e, t, ee, null);
    }
    function AE(e, t) {
      return uc(e, t);
    }
    function Y3(e, t, a, i) {
      var l = e.child, s = l.sibling, f = AE(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Mt) === Ge && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Aa) : p.push(s);
      }
      return t.child = f, f;
    }
    function W3(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Mt) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        g = S, g.childLanes = ee, g.pendingProps = v, t.mode & en && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = AE(f, v), g.subtreeFlags = f.subtreeFlags & Xn;
      var D;
      return p !== null ? D = uc(p, i) : (D = Yo(i, s, l, null), D.flags |= Ln), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function _h(e, t, a, i) {
      i !== null && i0(i), _f(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = Rg(t, s);
      return f.flags |= Ln, t.memoizedState = null, f;
    }
    function Q3(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = Tg(f, s), v = Yo(i, s, l, null);
      return v.flags |= Ln, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Mt) !== Ge && _f(t, e.child, null, l), v;
    }
    function G3(e, t, a) {
      return (e.mode & Mt) === Ge ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : $y(t) ? e.lanes = Mr : e.lanes = la, null;
    }
    function q3(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Or) {
          t.flags &= ~Or;
          var L = fg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _h(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var I = i.children, A = i.fallback, le = Q3(e, t, I, A, f), _e = t.child;
          return _e.memoizedState = bg(f), t.memoizedState = Cg, le;
        }
      else {
        if (jb(), (t.mode & Mt) === Ge)
          return _h(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if ($y(l)) {
          var p, v, g;
          {
            var S = ZC(l);
            p = S.digest, v = S.message, g = S.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = fg(D, p, g);
          return _h(e, t, f, k);
        }
        var j = oa(f, e.childLanes);
        if (pu || j) {
          var H = Hh();
          if (H !== null) {
            var $ = zd(H, f);
            if ($ !== Jt && $ !== s.retryLane) {
              s.retryLane = $;
              var Ee = yn;
              Ia(e, $), Dr(H, e, $, Ee);
            }
          }
          Wg();
          var Ze = fg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _h(e, t, f, Ze);
        } else if (rS(l)) {
          t.flags |= We, t.child = e.child;
          var Ye = ET.bind(null, e);
          return eb(l, Ye), null;
        } else {
          Hb(t, l, s.treeContext);
          var Wt = i.children, Ht = Rg(t, Wt);
          return Ht.flags |= ra, Ht;
        }
      }
    }
    function UE(e, t, a) {
      e.lanes = Tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Tt(i.lanes, t)), m0(e.return, t, a);
    }
    function K3(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ge) {
          var l = i.memoizedState;
          l !== null && UE(i, a, e);
        } else if (i.tag === Pt)
          UE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function X3(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && uh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function J3(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !gg[e])
        if (gg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Z3(e, t) {
      e !== void 0 && !kh[e] && (e !== "collapsed" && e !== "hidden" ? (kh[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (kh[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function jE(e, t) {
      {
        var a = _t(e), i = !a && typeof bt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function eR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jE(e[a], a))
              return;
        } else {
          var i = bt(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!jE(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wg(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function zE(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      J3(l), Z3(s, l), eR(f, l), Ta(e, t, f, a);
      var p = cu.current, v = R0(p, bp);
      if (v)
        p = T0(p, bp), t.flags |= We;
      else {
        var g = e !== null && (e.flags & We) !== Qe;
        g && K3(t, t.child, a), p = Mf(p);
      }
      if (zo(t, p), (t.mode & Mt) === Ge)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var S = X3(t.child), D;
            S === null ? (D = t.child, t.child = null) : (D = S.sibling, S.sibling = null), wg(
              t,
              !1,
              // isBackwards
              D,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var H = j.alternate;
              if (H !== null && uh(H) === null) {
                t.child = j;
                break;
              }
              var $ = j.sibling;
              j.sibling = k, k = j, j = $;
            }
            wg(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            wg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function tR(e, t, a) {
      x0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var FE = !1;
    function nR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || FE || (FE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && lu(v, s, "prop", "Context.Provider");
      }
      if (NS(t, l, p), f !== null) {
        var g = f.value;
        if (re(g, p)) {
          if (f.children === s.children && !zm())
            return Vl(e, t, a);
        } else
          Jb(t, l, a);
      }
      var S = s.children;
      return Ta(e, t, S, a), t.child;
    }
    var HE = !1;
    function rR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (HE || (HE = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = vr(i);
      xa(t);
      var p;
      return Mp.current = t, ir(!0), p = s(f), ir(!1), Ca(), t.flags |= ui, Ta(e, t, p, a), t.child;
    }
    function Up() {
      pu = !0;
    }
    function Dh(e, t) {
      (t.mode & Mt) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Ln);
    }
    function Vl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), vE(), Qp(t.lanes), oa(a, t.childLanes) ? (Kb(e, t), t.child) : null;
    }
    function aR(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Aa) : s.push(e), a.flags |= Ln, a;
      }
    }
    function kg(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function iR(e, t, a) {
      switch (t.tag) {
        case J:
          OE(t), t.stateNode, kf();
          break;
        case ce:
          FS(t);
          break;
        case ae: {
          var i = t.type;
          Qu(i) && Hm(t);
          break;
        }
        case pe:
          x0(t, t.stateNode.containerInfo);
          break;
        case He: {
          var l = t.memoizedProps.value, s = t.type._context;
          NS(t, s, l);
          break;
        }
        case Oe:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= $t);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ge: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Mf(cu.current)), t.flags |= We, null;
            var g = t.child, S = g.childLanes;
            if (oa(a, S))
              return LE(e, t, a);
            zo(t, Mf(cu.current));
            var D = Vl(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            zo(t, Mf(cu.current));
          break;
        }
        case Pt: {
          var k = (e.flags & We) !== Qe, j = oa(a, t.childLanes);
          if (k) {
            if (j)
              return zE(e, t, a);
            t.flags |= We;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), zo(t, cu.current), j)
            break;
          return null;
        }
        case Be:
        case wt:
          return t.lanes = ee, _E(e, t, a);
      }
      return Vl(e, t, a);
    }
    function PE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return aR(e, t, r4(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || zm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pu = !0;
        else {
          var s = kg(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Qe)
            return pu = !1, iR(e, t, a);
          (e.flags & Tc) !== Qe ? pu = !0 : pu = !1;
        }
      } else if (pu = !1, Yr() && Nb(t)) {
        var f = t.index, p = Ob();
        vS(t, p, f);
      }
      switch (t.lanes = ee, t.tag) {
        case xe:
          return P3(e, t, t.type, a);
        case zt: {
          var v = t.elementType;
          return F3(e, t, v, a);
        }
        case Q: {
          var g = t.type, S = t.pendingProps, D = t.elementType === g ? S : du(g, S);
          return Sg(e, t, g, D, a);
        }
        case ae: {
          var k = t.type, j = t.pendingProps, H = t.elementType === k ? j : du(k, j);
          return NE(e, t, k, H, a);
        }
        case J:
          return U3(e, t, a);
        case ce:
          return j3(e, t, a);
        case Fe:
          return z3(e, t);
        case ge:
          return LE(e, t, a);
        case pe:
          return tR(e, t, a);
        case ie: {
          var $ = t.type, Ee = t.pendingProps, Ze = t.elementType === $ ? Ee : du($, Ee);
          return TE(e, t, $, Ze, a);
        }
        case lt:
          return M3(e, t, a);
        case qe:
          return L3(e, t, a);
        case Oe:
          return A3(e, t, a);
        case He:
          return nR(e, t, a);
        case Ft:
          return rR(e, t, a);
        case Ke: {
          var Ye = t.type, Wt = t.pendingProps, Ht = du(Ye, Wt);
          if (t.type !== t.elementType) {
            var L = Ye.propTypes;
            L && lu(
              L,
              Ht,
              // Resolved for outer only
              "prop",
              Gt(Ye)
            );
          }
          return Ht = du(Ye.type, Ht), wE(e, t, Ye, Ht, a);
        }
        case De:
          return kE(e, t, t.type, t.pendingProps, a);
        case it: {
          var I = t.type, A = t.pendingProps, le = t.elementType === I ? A : du(I, A);
          return H3(e, t, I, le, a);
        }
        case Pt:
          return zE(e, t, a);
        case yt:
          break;
        case Be:
          return _E(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= $t;
    }
    function BE(e) {
      e.flags |= Fn, e.flags |= ho;
    }
    var VE, _g, $E, IE;
    VE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === ce || l.tag === Fe)
          kC(e, l.stateNode);
        else if (l.tag !== pe) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, _g = function(e, t) {
    }, $E = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = C0(), v = DC(f, a, s, i, l, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, IE = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function jp(e, t) {
      if (!Yr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = Qe;
      if (t) {
        if ((e.mode & en) !== Ge) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = Tt(a, Tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Xn, i |= g.flags & Xn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = Tt(a, Tt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Xn, i |= S.flags & Xn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & en) !== Ge) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Tt(a, Tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Tt(a, Tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function uR(e, t, a) {
      if (Ib() && (t.mode & Mt) !== Ge && (t.flags & We) === Qe)
        return xS(t), kf(), t.flags |= Or | ss | cr, !1;
      var i = Im(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Vb(t), Qr(t), (t.mode & en) !== Ge) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & We) === Qe && (t.memoizedState = null), t.flags |= $t, Qr(t), (t.mode & en) !== Ge) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return CS(), !0;
    }
    function YE(e, t, a) {
      var i = t.pendingProps;
      switch (e0(t), t.tag) {
        case xe:
        case zt:
        case De:
        case Q:
        case ie:
        case lt:
        case qe:
        case Oe:
        case Ft:
        case Ke:
          return Qr(t), null;
        case ae: {
          var l = t.type;
          return Qu(l) && Fm(t), Qr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), Ky(t), k0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Im(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Or) !== Qe) && (t.flags |= ur, CS());
            }
          }
          return _g(e, t), Qr(t), null;
        }
        case ce: {
          b0(t);
          var v = zS(), g = t.type;
          if (e !== null && t.stateNode != null)
            $E(e, t, g, i, v), e.ref !== t.ref && BE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Qr(t), null;
            }
            var S = C0(), D = Im(t);
            if (D)
              Pb(t, v, S) && Ff(t);
            else {
              var k = wC(g, i, v, S, t);
              VE(k, t, !1, !1), t.stateNode = k, _C(k, g, i, v) && Ff(t);
            }
            t.ref !== null && BE(t);
          }
          return Qr(t), null;
        }
        case Fe: {
          var j = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            IE(e, t, H, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var $ = zS(), Ee = C0(), Ze = Im(t);
            Ze ? Bb(t) && Ff(t) : t.stateNode = NC(j, $, Ee, t);
          }
          return Qr(t), null;
        }
        case ge: {
          Lf(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Wt = uR(e, t, Ye);
            if (!Wt)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & We) !== Qe)
            return t.lanes = a, (t.mode & en) !== Ge && J0(t), t;
          var Ht = Ye !== null, L = e !== null && e.memoizedState !== null;
          if (Ht !== L && Ht) {
            var I = t.child;
            if (I.flags |= Kn, (t.mode & Mt) !== Ge) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              A || R0(cu.current, PS) ? lT() : Wg();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= $t), Qr(t), (t.mode & en) !== Ge && Ht) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case pe:
          return Of(t), _g(e, t), e === null && bb(t.stateNode.containerInfo), Qr(t), null;
        case He:
          var Ce = t.type._context;
          return v0(Ce, t), Qr(t), null;
        case it: {
          var ct = t.type;
          return Qu(ct) && Fm(t), Qr(t), null;
        }
        case Pt: {
          Lf(t);
          var xt = t.memoizedState;
          if (xt === null)
            return Qr(t), null;
          var hn = (t.flags & We) !== Qe, rn = xt.rendering;
          if (rn === null)
            if (hn)
              jp(xt, !1);
            else {
              var sr = sT() && (e === null || (e.flags & We) === Qe);
              if (!sr)
                for (var an = t.child; an !== null; ) {
                  var rr = uh(an);
                  if (rr !== null) {
                    hn = !0, t.flags |= We, jp(xt, !1);
                    var ma = rr.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= $t), t.subtreeFlags = Qe, Xb(t, a), zo(t, T0(cu.current, bp)), t.child;
                  }
                  an = an.sibling;
                }
              xt.tail !== null && lr() > d1() && (t.flags |= We, hn = !0, jp(xt, !1), t.lanes = _d);
            }
          else {
            if (!hn) {
              var Jr = uh(rn);
              if (Jr !== null) {
                t.flags |= We, hn = !0;
                var pi = Jr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= $t), jp(xt, !0), xt.tail === null && xt.tailMode === "hidden" && !rn.alternate && !Yr())
                  return Qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              lr() * 2 - xt.renderingStartTime > d1() && a !== la && (t.flags |= We, hn = !0, jp(xt, !1), t.lanes = _d);
            }
            if (xt.isBackwards)
              rn.sibling = t.child, t.child = rn;
            else {
              var _a = xt.last;
              _a !== null ? _a.sibling = rn : t.child = rn, xt.last = rn;
            }
          }
          if (xt.tail !== null) {
            var Da = xt.tail;
            xt.rendering = Da, xt.tail = Da.sibling, xt.renderingStartTime = lr(), Da.sibling = null;
            var ha = cu.current;
            return hn ? ha = T0(ha, bp) : ha = Mf(ha), zo(t, ha), Da;
          }
          return Qr(t), null;
        }
        case yt:
          break;
        case Be:
        case wt: {
          Yg(t);
          var Ql = t.memoizedState, Wf = Ql !== null;
          if (e !== null) {
            var Jp = e.memoizedState, tl = Jp !== null;
            tl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !de && (t.flags |= Kn);
          }
          return !Wf || (t.mode & Mt) === Ge ? Qr(t) : oa(el, la) && (Qr(t), t.subtreeFlags & (Ln | $t) && (t.flags |= Kn)), null;
        }
        case Lt:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lR(e, t, a) {
      switch (e0(t), t.tag) {
        case ae: {
          var i = t.type;
          Qu(i) && Fm(t);
          var l = t.flags;
          return l & cr ? (t.flags = l & ~cr | We, (t.mode & en) !== Ge && J0(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), Ky(t), k0();
          var s = t.flags;
          return (s & cr) !== Qe && (s & We) === Qe ? (t.flags = s & ~cr | We, t) : null;
        }
        case ce:
          return b0(t), null;
        case ge: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & cr ? (t.flags = p & ~cr | We, (t.mode & en) !== Ge && J0(t), t) : null;
        }
        case Pt:
          return Lf(t), null;
        case pe:
          return Of(t), null;
        case He:
          var v = t.type._context;
          return v0(v, t), null;
        case Be:
        case wt:
          return Yg(t), null;
        case Lt:
          return null;
        default:
          return null;
      }
    }
    function WE(e, t, a) {
      switch (e0(t), t.tag) {
        case ae: {
          var i = t.type.childContextTypes;
          i != null && Fm(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), Ky(t), k0();
          break;
        }
        case ce: {
          b0(t);
          break;
        }
        case pe:
          Of(t);
          break;
        case ge:
          Lf(t);
          break;
        case Pt:
          Lf(t);
          break;
        case He:
          var l = t.type._context;
          v0(l, t);
          break;
        case Be:
        case wt:
          Yg(t);
          break;
      }
    }
    var QE = null;
    QE = /* @__PURE__ */ new Set();
    var Nh = !1, Gr = !1, oR = typeof WeakSet == "function" ? WeakSet : Set, ze = null, Hf = null, Pf = null;
    function sR(e) {
      Du(null, function() {
        throw e;
      }), os();
    }
    var cR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & en)
        try {
          Ju(), t.componentWillUnmount();
        } finally {
          Xu(e);
        }
      else
        t.componentWillUnmount();
    };
    function GE(e, t) {
      try {
        Po(br, e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function Dg(e, t, a) {
      try {
        cR(e, a);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function fR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        wn(e, t, i);
      }
    }
    function qE(e, t) {
      try {
        XE(e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function Bf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && st && e.mode & en)
              try {
                Ju(), i = a(null);
              } finally {
                Xu(e);
              }
            else
              i = a(null);
          } catch (l) {
            wn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          a.current = null;
    }
    function Oh(e, t, a) {
      try {
        a();
      } catch (i) {
        wn(e, t, i);
      }
    }
    var KE = !1;
    function dR(e, t) {
      RC(e.containerInfo), ze = t, pR();
      var a = KE;
      return KE = !1, a;
    }
    function pR() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & Ou) !== Qe && t !== null ? (t.return = e, ze = t) : vR();
      }
    }
    function vR() {
      for (; ze !== null; ) {
        var e = ze;
        fn(e);
        try {
          mR(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function mR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ur) !== Qe) {
        switch (fn(e), e.tag) {
          case Q:
          case ie:
          case De:
            break;
          case ae: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : du(e.type, i), l);
              {
                var p = QE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              qC(v.containerInfo);
            }
            break;
          }
          case ce:
          case Fe:
          case pe:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function vu(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Wr) !== Ya ? tu(t) : (e & br) !== Ya && fs(t), (e & Gu) !== Ya && qp(!0), Oh(t, a, p), (e & Gu) !== Ya && qp(!1), (e & Wr) !== Ya ? Uu() : (e & br) !== Ya && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Po(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Wr) !== Ya ? Td(t) : (e & br) !== Ya && Oc(t);
            var f = s.create;
            (e & Gu) !== Ya && qp(!0), s.destroy = f(), (e & Gu) !== Ya && qp(!1), (e & Wr) !== Ya ? jv() : (e & br) !== Ya && zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & br) !== Qe ? v = "useLayoutEffect" : (s.tag & Gu) !== Qe ? v = "useInsertionEffect" : v = "useEffect";
                var g = void 0;
                p === null ? g = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? g = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : g = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, g);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function hR(e, t) {
      if ((t.flags & $t) !== Qe)
        switch (t.tag) {
          case Oe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = dE(), p = t.alternate === null ? "mount" : "update";
            fE() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case Oe:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function yR(e, t, a, i) {
      if ((a.flags & Lu) !== Qe)
        switch (a.tag) {
          case Q:
          case ie:
          case De: {
            if (!Gr)
              if (a.mode & en)
                try {
                  Ju(), Po(br | Cr, a);
                } finally {
                  Xu(a);
                }
              else
                Po(br | Cr, a);
            break;
          }
          case ae: {
            var l = a.stateNode;
            if (a.flags & $t && !Gr)
              if (t === null)
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & en)
                  try {
                    Ju(), l.componentDidMount();
                  } finally {
                    Xu(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : du(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & en)
                  try {
                    Ju(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xu(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), jS(a, p, l));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ce:
                    g = a.child.stateNode;
                    break;
                  case ae:
                    g = a.child.stateNode;
                    break;
                }
              jS(a, v, g);
            }
            break;
          }
          case ce: {
            var S = a.stateNode;
            if (t === null && a.flags & $t) {
              var D = a.type, k = a.memoizedProps;
              UC(S, D, k);
            }
            break;
          }
          case Fe:
            break;
          case pe:
            break;
          case Oe: {
            {
              var j = a.memoizedProps, H = j.onCommit, $ = j.onRender, Ee = a.stateNode.effectDuration, Ze = dE(), Ye = t === null ? "mount" : "update";
              fE() && (Ye = "nested-update"), typeof $ == "function" && $(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ze);
              {
                typeof H == "function" && H(a.memoizedProps.id, Ye, Ee, Ze), vT(a);
                var Wt = a.return;
                e: for (; Wt !== null; ) {
                  switch (Wt.tag) {
                    case J:
                      var Ht = Wt.stateNode;
                      Ht.effectDuration += Ee;
                      break e;
                    case Oe:
                      var L = Wt.stateNode;
                      L.effectDuration += Ee;
                      break e;
                  }
                  Wt = Wt.return;
                }
              }
            }
            break;
          }
          case ge: {
            TR(e, a);
            break;
          }
          case Pt:
          case it:
          case yt:
          case Be:
          case wt:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gr || a.flags & Fn && XE(a);
    }
    function gR(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          if (e.mode & en)
            try {
              Ju(), GE(e, e.return);
            } finally {
              Xu(e);
            }
          else
            GE(e, e.return);
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && fR(e, e.return, t), qE(e, e.return);
          break;
        }
        case ce: {
          qE(e, e.return);
          break;
        }
      }
    }
    function SR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ce) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? YC(l) : QC(i.stateNode, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
          }
        } else if (i.tag === Fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WC(s) : GC(s, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === wt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function XE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ce:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & en)
            try {
              Ju(), l = t(i);
            } finally {
              Xu(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ht(e)), t.current = i;
      }
    }
    function ER(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ce) {
          var a = e.stateNode;
          a !== null && wb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xR(e) {
      for (var t = e.return; t !== null; ) {
        if (ZE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ZE(e) {
      return e.tag === ce || e.tag === J || e.tag === pe;
    }
    function e1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ZE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ce && t.tag !== Fe && t.tag !== ot; ) {
          if (t.flags & Ln || t.child === null || t.tag === pe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Ln))
          return t.stateNode;
      }
    }
    function CR(e) {
      var t = xR(e);
      switch (t.tag) {
        case ce: {
          var a = t.stateNode;
          t.flags & Ua && (nS(a), t.flags &= ~Ua);
          var i = e1(e);
          Og(e, i, a);
          break;
        }
        case J:
        case pe: {
          var l = t.stateNode.containerInfo, s = e1(e);
          Ng(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Ng(e, t, a) {
      var i = e.tag, l = i === ce || i === Fe;
      if (l) {
        var s = e.stateNode;
        t ? BC(a, s, t) : HC(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          Ng(f, t, a);
          for (var p = f.sibling; p !== null; )
            Ng(p, t, a), p = p.sibling;
        }
      }
    }
    function Og(e, t, a) {
      var i = e.tag, l = i === ce || i === Fe;
      if (l) {
        var s = e.stateNode;
        t ? PC(a, s, t) : FC(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          Og(f, t, a);
          for (var p = f.sibling; p !== null; )
            Og(p, t, a), p = p.sibling;
        }
      }
    }
    var qr = null, mu = !1;
    function bR(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ce: {
              qr = i.stateNode, mu = !1;
              break e;
            }
            case J: {
              qr = i.stateNode.containerInfo, mu = !0;
              break e;
            }
            case pe: {
              qr = i.stateNode.containerInfo, mu = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        t1(e, t, a), qr = null, mu = !1;
      }
      ER(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        t1(e, t, i), i = i.sibling;
    }
    function t1(e, t, a) {
      switch (Cd(a), a.tag) {
        case ce:
          Gr || Bf(a, t);
        case Fe: {
          {
            var i = qr, l = mu;
            qr = null, Bo(e, t, a), qr = i, mu = l, qr !== null && (mu ? $C(qr, a.stateNode) : VC(qr, a.stateNode));
          }
          return;
        }
        case ot: {
          qr !== null && (mu ? IC(qr, a.stateNode) : Vy(qr, a.stateNode));
          return;
        }
        case pe: {
          {
            var s = qr, f = mu;
            qr = a.stateNode.containerInfo, mu = !0, Bo(e, t, a), qr = s, mu = f;
          }
          return;
        }
        case Q:
        case ie:
        case Ke:
        case De: {
          if (!Gr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, S = g;
                do {
                  var D = S, k = D.destroy, j = D.tag;
                  k !== void 0 && ((j & Gu) !== Ya ? Oh(a, t, k) : (j & br) !== Ya && (fs(a), a.mode & en ? (Ju(), Oh(a, t, k), Xu(a)) : Oh(a, t, k), wd())), S = S.next;
                } while (S !== g);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case ae: {
          if (!Gr) {
            Bf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && Dg(a, t, H);
          }
          Bo(e, t, a);
          return;
        }
        case yt: {
          Bo(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & Mt
          ) {
            var $ = Gr;
            Gr = $ || a.memoizedState !== null, Bo(e, t, a), Gr = $;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function RR(e) {
      e.memoizedState;
    }
    function TR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && sb(s);
          }
        }
      }
    }
    function n1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new oR()), t.forEach(function(i) {
          var l = xT.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ua)
              if (Hf !== null && Pf !== null)
                Gp(Pf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function wR(e, t, a) {
      Hf = a, Pf = e, fn(t), r1(t, e), fn(t), Hf = null, Pf = null;
    }
    function hu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            bR(e, t, s);
          } catch (v) {
            wn(s, t, v);
          }
        }
      var f = Cu();
      if (t.subtreeFlags & Mu)
        for (var p = t.child; p !== null; )
          fn(p), r1(p, e), p = p.sibling;
      fn(f);
    }
    function r1(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case Q:
        case ie:
        case Ke:
        case De: {
          if (hu(t, e), Zu(e), l & $t) {
            try {
              vu(Gu | Cr, e, e.return), Po(Gu | Cr, e);
            } catch (ct) {
              wn(e, e.return, ct);
            }
            if (e.mode & en) {
              try {
                Ju(), vu(br | Cr, e, e.return);
              } catch (ct) {
                wn(e, e.return, ct);
              }
              Xu(e);
            } else
              try {
                vu(br | Cr, e, e.return);
              } catch (ct) {
                wn(e, e.return, ct);
              }
          }
          return;
        }
        case ae: {
          hu(t, e), Zu(e), l & Fn && i !== null && Bf(i, i.return);
          return;
        }
        case ce: {
          hu(t, e), Zu(e), l & Fn && i !== null && Bf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                nS(s);
              } catch (ct) {
                wn(e, e.return, ct);
              }
            }
            if (l & $t) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    jC(f, S, g, v, p, e);
                  } catch (ct) {
                    wn(e, e.return, ct);
                  }
              }
            }
          }
          return;
        }
        case Fe: {
          if (hu(t, e), Zu(e), l & $t) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, k = e.memoizedProps, j = i !== null ? i.memoizedProps : k;
            try {
              zC(D, j, k);
            } catch (ct) {
              wn(e, e.return, ct);
            }
          }
          return;
        }
        case J: {
          if (hu(t, e), Zu(e), l & $t && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                ob(t.containerInfo);
              } catch (ct) {
                wn(e, e.return, ct);
              }
          }
          return;
        }
        case pe: {
          hu(t, e), Zu(e);
          return;
        }
        case ge: {
          hu(t, e), Zu(e);
          var $ = e.child;
          if ($.flags & Kn) {
            var Ee = $.stateNode, Ze = $.memoizedState, Ye = Ze !== null;
            if (Ee.isHidden = Ye, Ye) {
              var Wt = $.alternate !== null && $.alternate.memoizedState !== null;
              Wt || uT();
            }
          }
          if (l & $t) {
            try {
              RR(e);
            } catch (ct) {
              wn(e, e.return, ct);
            }
            n1(e);
          }
          return;
        }
        case Be: {
          var Ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Mt
          ) {
            var L = Gr;
            Gr = L || Ht, hu(t, e), Gr = L;
          } else
            hu(t, e);
          if (Zu(e), l & Kn) {
            var I = e.stateNode, A = e.memoizedState, le = A !== null, _e = e;
            if (I.isHidden = le, le && !Ht && (_e.mode & Mt) !== Ge) {
              ze = _e;
              for (var Ce = _e.child; Ce !== null; )
                ze = Ce, _R(Ce), Ce = Ce.sibling;
            }
            SR(_e, le);
          }
          return;
        }
        case Pt: {
          hu(t, e), Zu(e), l & $t && n1(e);
          return;
        }
        case yt:
          return;
        default: {
          hu(t, e), Zu(e);
          return;
        }
      }
    }
    function Zu(e) {
      var t = e.flags;
      if (t & Ln) {
        try {
          CR(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        e.flags &= ~Ln;
      }
      t & ra && (e.flags &= ~ra);
    }
    function kR(e, t, a) {
      Hf = a, Pf = t, ze = e, a1(e, t, a), Hf = null, Pf = null;
    }
    function a1(e, t, a) {
      for (var i = (e.mode & Mt) !== Ge; ze !== null; ) {
        var l = ze, s = l.child;
        if (l.tag === Be && i) {
          var f = l.memoizedState !== null, p = f || Nh;
          if (p) {
            Mg(e, t, a);
            continue;
          } else {
            var v = l.alternate, g = v !== null && v.memoizedState !== null, S = g || Gr, D = Nh, k = Gr;
            Nh = p, Gr = S, Gr && !k && (ze = l, DR(l));
            for (var j = s; j !== null; )
              ze = j, a1(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            ze = l, Nh = D, Gr = k, Mg(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Lu) !== Qe && s !== null ? (s.return = l, ze = s) : Mg(e, t, a);
      }
    }
    function Mg(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & Lu) !== Qe) {
          var l = i.alternate;
          fn(i);
          try {
            yR(t, l, i, a);
          } catch (f) {
            wn(i, i.return, f);
          }
          Tn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ze = s;
          return;
        }
        ze = i.return;
      }
    }
    function _R(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case Q:
          case ie:
          case Ke:
          case De: {
            if (t.mode & en)
              try {
                Ju(), vu(br, t, t.return);
              } finally {
                Xu(t);
              }
            else
              vu(br, t, t.return);
            break;
          }
          case ae: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Dg(t, t.return, i);
            break;
          }
          case ce: {
            Bf(t, t.return);
            break;
          }
          case Be: {
            var l = t.memoizedState !== null;
            if (l) {
              i1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : i1(e);
      }
    }
    function i1(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function DR(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            u1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : u1(e);
      }
    }
    function u1(e) {
      for (; ze !== null; ) {
        var t = ze;
        fn(t);
        try {
          gR(t);
        } catch (i) {
          wn(t, t.return, i);
        }
        if (Tn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function NR(e, t, a, i) {
      ze = t, OR(t, e, a, i);
    }
    function OR(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze, s = l.child;
        (l.subtreeFlags & Zi) !== Qe && s !== null ? (s.return = l, ze = s) : MR(e, t, a, i);
      }
    }
    function MR(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze;
        if ((l.flags & na) !== Qe) {
          fn(l);
          try {
            LR(t, l, a, i);
          } catch (f) {
            wn(l, l.return, f);
          }
          Tn();
        }
        if (l === e) {
          ze = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, ze = s;
          return;
        }
        ze = l.return;
      }
    }
    function LR(e, t, a, i) {
      switch (t.tag) {
        case Q:
        case ie:
        case De: {
          if (t.mode & en) {
            X0();
            try {
              Po(Wr | Cr, t);
            } finally {
              K0(t);
            }
          } else
            Po(Wr | Cr, t);
          break;
        }
      }
    }
    function AR(e) {
      ze = e, UR();
    }
    function UR() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Aa) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              ze = l, FR(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & Zi) !== Qe && t !== null ? (t.return = e, ze = t) : jR();
      }
    }
    function jR() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & na) !== Qe && (fn(e), zR(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function zR(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          e.mode & en ? (X0(), vu(Wr | Cr, e, e.return), K0(e)) : vu(Wr | Cr, e, e.return);
          break;
        }
      }
    }
    function FR(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        fn(a), PR(a, t), Tn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : HR(e);
      }
    }
    function HR(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (JE(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function PR(e, t) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          e.mode & en ? (X0(), vu(Wr, e, t), K0(e)) : vu(Wr, e, t);
          break;
        }
      }
    }
    function BR(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          try {
            Po(br | Cr, e);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
      }
    }
    function VR(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          try {
            Po(Wr | Cr, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $R(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De: {
          try {
            vu(br | Cr, e, e.return);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Dg(e, e.return, t);
          break;
        }
      }
    }
    function IR(e) {
      switch (e.tag) {
        case Q:
        case ie:
        case De:
          try {
            vu(Wr | Cr, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var YR = [];
    function WR() {
      YR.forEach(function(e) {
        return e();
      });
    }
    var QR = E.ReactCurrentActQueue;
    function GR(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function l1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && QR.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var qR = Math.ceil, Lg = E.ReactCurrentDispatcher, Ag = E.ReactCurrentOwner, Kr = E.ReactCurrentBatchConfig, yu = E.ReactCurrentActQueue, wr = (
      /*             */
      0
    ), o1 = (
      /*               */
      1
    ), Xr = (
      /*                */
      2
    ), Pi = (
      /*                */
      4
    ), $l = 0, Fp = 1, nc = 2, Mh = 3, Hp = 4, s1 = 5, Ug = 6, Yt = wr, wa = null, Qn = null, kr = ee, el = ee, jg = Oo(ee), _r = $l, Pp = null, Lh = ee, Bp = ee, Ah = ee, Vp = null, Wa = null, zg = 0, c1 = 500, f1 = 1 / 0, KR = 500, Il = null;
    function $p() {
      f1 = lr() + KR;
    }
    function d1() {
      return f1;
    }
    var Uh = !1, Fg = null, Vf = null, rc = !1, Vo = null, Ip = ee, Hg = [], Pg = null, XR = 50, Yp = 0, Bg = null, Vg = !1, jh = !1, JR = 50, $f = 0, zh = null, Wp = yn, Fh = ee, p1 = !1;
    function Hh() {
      return wa;
    }
    function ka() {
      return (Yt & (Xr | Pi)) !== wr ? lr() : (Wp !== yn || (Wp = lr()), Wp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & Mt) === Ge)
        return ut;
      if ((Yt & Xr) !== wr && kr !== ee)
        return Rs(kr);
      var a = Qb() !== Wb;
      if (a) {
        if (Kr.transition !== null) {
          var i = Kr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Fh === Jt && (Fh = Ad()), Fh;
      }
      var l = Ba();
      if (l !== Jt)
        return l;
      var s = OC();
      return s;
    }
    function ZR(e) {
      var t = e.mode;
      return (t & Mt) === Ge ? ut : $v();
    }
    function Dr(e, t, a, i) {
      bT(), p1 && y("useInsertionEffect must not schedule updates."), Vg && (jh = !0), Eo(e, a, i), (Yt & Xr) !== ee && e === wa ? wT(t) : (ua && ks(e, t, a), kT(t), e === wa && ((Yt & Xr) === wr && (Bp = Tt(Bp, a)), _r === Hp && Io(e, kr)), Qa(e, i), a === ut && Yt === wr && (t.mode & Mt) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yu.isBatchingLegacy && ($p(), pS()));
    }
    function eT(e, t, a) {
      var i = e.current;
      i.lanes = t, Eo(e, t, a), Qa(e, a);
    }
    function tT(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Yt & Xr) !== wr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = Kc(e, e === wa ? kr : ee);
      if (i === ee) {
        a !== null && D1(a), e.callbackNode = null, e.callbackPriority = Jt;
        return;
      }
      var l = Fu(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yu.current !== null && a !== qg)) {
        a == null && s !== ut && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && D1(a);
      var f;
      if (l === ut)
        e.tag === Mo ? (yu.isBatchingLegacy !== null && (yu.didScheduleLegacyUpdate = !0), Db(h1.bind(null, e))) : dS(h1.bind(null, e)), yu.current !== null ? yu.current.push(Lo) : LC(function() {
          (Yt & (Xr | Pi)) === wr && Lo();
        }), f = null;
      else {
        var p;
        switch (Kv(i)) {
          case Pr:
            p = cs;
            break;
          case Ni:
            p = Au;
            break;
          case Ha:
            p = eu;
            break;
          case Pa:
            p = yl;
            break;
          default:
            p = eu;
            break;
        }
        f = Kg(p, v1.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function v1(e, t) {
      if (S3(), Wp = yn, Fh = ee, (Yt & (Xr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Kc(e, e === wa ? kr : ee);
      if (l === ee)
        return null;
      var s = !Zc(e, l) && !Vv(e, l) && !t, f = s ? fT(e, l) : Bh(e, l);
      if (f !== $l) {
        if (f === nc) {
          var p = Jc(e);
          p !== ee && (l = p, f = $g(e, p));
        }
        if (f === Fp) {
          var v = Pp;
          throw ac(e, ee), Io(e, l), Qa(e, lr()), v;
        }
        if (f === Ug)
          Io(e, l);
        else {
          var g = !Zc(e, l), S = e.current.alternate;
          if (g && !rT(S)) {
            if (f = Bh(e, l), f === nc) {
              var D = Jc(e);
              D !== ee && (l = D, f = $g(e, D));
            }
            if (f === Fp) {
              var k = Pp;
              throw ac(e, ee), Io(e, l), Qa(e, lr()), k;
            }
          }
          e.finishedWork = S, e.finishedLanes = l, nT(e, f, l);
        }
      }
      return Qa(e, lr()), e.callbackNode === a ? v1.bind(null, e) : null;
    }
    function $g(e, t) {
      var a = Vp;
      if (nf(e)) {
        var i = ac(e, t);
        i.flags |= Or, Cb(e.containerInfo);
      }
      var l = Bh(e, t);
      if (l !== nc) {
        var s = Wa;
        Wa = a, s !== null && m1(s);
      }
      return l;
    }
    function m1(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function nT(e, t, a) {
      switch (t) {
        case $l:
        case Fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Wa, Il);
          break;
        }
        case Mh: {
          if (Io(e, a), _l(a) && // do not delay if we're inside an act() scope
          !N1()) {
            var i = zg + c1 - lr();
            if (i > 10) {
              var l = Kc(e, ee);
              if (l !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Dl(s, a)) {
                ka(), ef(e, s);
                break;
              }
              e.timeoutHandle = Py(ic.bind(null, e, Wa, Il), i);
              break;
            }
          }
          ic(e, Wa, Il);
          break;
        }
        case Hp: {
          if (Io(e, a), Md(a))
            break;
          if (!N1()) {
            var f = oi(e, a), p = f, v = lr() - p, g = CT(v) - v;
            if (g > 10) {
              e.timeoutHandle = Py(ic.bind(null, e, Wa, Il), g);
              break;
            }
          }
          ic(e, Wa, Il);
          break;
        }
        case s1: {
          ic(e, Wa, Il);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function rT(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!re(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Io(e, t) {
      t = Ts(t, Ah), t = Ts(t, Bp), Wv(e, t);
    }
    function h1(e) {
      if (E3(), (Yt & (Xr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      Wl();
      var t = Kc(e, ee);
      if (!oa(t, ut))
        return Qa(e, lr()), null;
      var a = Bh(e, t);
      if (e.tag !== Mo && a === nc) {
        var i = Jc(e);
        i !== ee && (t = i, a = $g(e, i));
      }
      if (a === Fp) {
        var l = Pp;
        throw ac(e, ee), Io(e, t), Qa(e, lr()), l;
      }
      if (a === Ug)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Wa, Il), Qa(e, lr()), null;
    }
    function aT(e, t) {
      t !== ee && (tf(e, Tt(t, ut)), Qa(e, lr()), (Yt & (Xr | Pi)) === wr && ($p(), Lo()));
    }
    function Ig(e, t) {
      var a = Yt;
      Yt |= o1;
      try {
        return e(t);
      } finally {
        Yt = a, Yt === wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yu.isBatchingLegacy && ($p(), pS());
      }
    }
    function iT(e, t, a, i, l) {
      var s = Ba(), f = Kr.transition;
      try {
        return Kr.transition = null, er(Pr), e(t, a, i, l);
      } finally {
        er(s), Kr.transition = f, Yt === wr && $p();
      }
    }
    function Yl(e) {
      Vo !== null && Vo.tag === Mo && (Yt & (Xr | Pi)) === wr && Wl();
      var t = Yt;
      Yt |= o1;
      var a = Kr.transition, i = Ba();
      try {
        return Kr.transition = null, er(Pr), e ? e() : void 0;
      } finally {
        er(i), Kr.transition = a, Yt = t, (Yt & (Xr | Pi)) === wr && Lo();
      }
    }
    function y1() {
      return (Yt & (Xr | Pi)) !== wr;
    }
    function Ph(e, t) {
      pa(jg, el, e), el = Tt(el, t);
    }
    function Yg(e) {
      el = jg.current, da(jg, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== By && (e.timeoutHandle = By, MC(a)), Qn !== null)
        for (var i = Qn.return; i !== null; ) {
          var l = i.alternate;
          WE(l, i), i = i.return;
        }
      wa = e;
      var s = uc(e.current, null);
      return Qn = s, kr = el = t, _r = $l, Pp = null, Lh = ee, Bp = ee, Ah = ee, Vp = null, Wa = null, e3(), su.discardPendingWarnings(), s;
    }
    function g1(e, t) {
      do {
        var a = Qn;
        try {
          if (Km(), VS(), Tn(), Ag.current = null, a === null || a.return === null) {
            _r = Fp, Pp = t, Qn = null;
            return;
          }
          if (Ve && a.mode & en && Th(a, !0), Xe)
            if (Ca(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Di(a, i, kr);
            } else
              ds(a, t, kr);
          D3(e, a.return, a, t, kr), C1(a);
        } catch (l) {
          t = l, Qn === a && a !== null ? (a = a.return, Qn = a) : a = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function S1() {
      var e = Lg.current;
      return Lg.current = Eh, e === null ? Eh : e;
    }
    function E1(e) {
      Lg.current = e;
    }
    function uT() {
      zg = lr();
    }
    function Qp(e) {
      Lh = Tt(e, Lh);
    }
    function lT() {
      _r === $l && (_r = Mh);
    }
    function Wg() {
      (_r === $l || _r === Mh || _r === nc) && (_r = Hp), wa !== null && (bs(Lh) || bs(Bp)) && Io(wa, kr);
    }
    function oT(e) {
      _r !== Hp && (_r = nc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function sT() {
      return _r === $l;
    }
    function Bh(e, t) {
      var a = Yt;
      Yt |= Xr;
      var i = S1();
      if (wa !== e || kr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, kr), l.clear()), Qv(e, t);
        }
        Il = Fd(), ac(e, t);
      }
      xl(t);
      do
        try {
          cT();
          break;
        } catch (s) {
          g1(e, s);
        }
      while (!0);
      if (Km(), Yt = a, E1(i), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), wa = null, kr = ee, _r;
    }
    function cT() {
      for (; Qn !== null; )
        x1(Qn);
    }
    function fT(e, t) {
      var a = Yt;
      Yt |= Xr;
      var i = S1();
      if (wa !== e || kr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, kr), l.clear()), Qv(e, t);
        }
        Il = Fd(), $p(), ac(e, t);
      }
      xl(t);
      do
        try {
          dT();
          break;
        } catch (s) {
          g1(e, s);
        }
      while (!0);
      return Km(), E1(i), Yt = a, Qn !== null ? (Fv(), $l) : (Mc(), wa = null, kr = ee, _r);
    }
    function dT() {
      for (; Qn !== null && !yd(); )
        x1(Qn);
    }
    function x1(e) {
      var t = e.alternate;
      fn(e);
      var a;
      (e.mode & en) !== Ge ? (q0(e), a = Qg(t, e, el), Th(e, !0)) : a = Qg(t, e, el), Tn(), e.memoizedProps = e.pendingProps, a === null ? C1(e) : Qn = a, Ag.current = null;
    }
    function C1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === Qe) {
          fn(t);
          var l = void 0;
          if ((t.mode & en) === Ge ? l = YE(a, t, el) : (q0(t), l = YE(a, t, el), Th(t, !1)), Tn(), l !== null) {
            Qn = l;
            return;
          }
        } else {
          var s = lR(a, t);
          if (s !== null) {
            s.flags &= Mv, Qn = s;
            return;
          }
          if ((t.mode & en) !== Ge) {
            Th(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = Qe, i.deletions = null;
          else {
            _r = Ug, Qn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Qn = v;
          return;
        }
        t = i, Qn = t;
      } while (t !== null);
      _r === $l && (_r = s1);
    }
    function ic(e, t, a) {
      var i = Ba(), l = Kr.transition;
      try {
        Kr.transition = null, er(Pr), pT(e, t, a, i);
      } finally {
        Kr.transition = l, er(i);
      }
      return null;
    }
    function pT(e, t, a, i) {
      do
        Wl();
      while (Vo !== null);
      if (RT(), (Yt & (Xr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (bd(s), l === null)
        return Rd(), null;
      if (s === ee && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Jt;
      var f = Tt(l.lanes, l.childLanes);
      jd(e, f), e === wa && (wa = null, Qn = null, kr = ee), ((l.subtreeFlags & Zi) !== Qe || (l.flags & Zi) !== Qe) && (rc || (rc = !0, Pg = a, Kg(eu, function() {
        return Wl(), null;
      })));
      var p = (l.subtreeFlags & (Ou | Mu | Lu | Zi)) !== Qe, v = (l.flags & (Ou | Mu | Lu | Zi)) !== Qe;
      if (p || v) {
        var g = Kr.transition;
        Kr.transition = null;
        var S = Ba();
        er(Pr);
        var D = Yt;
        Yt |= Pi, Ag.current = null, dR(e, l), pE(), wR(e, l, s), TC(e.containerInfo), e.current = l, ps(s), kR(l, e, s), vs(), gd(), Yt = D, er(S), Kr.transition = g;
      } else
        e.current = l, pE();
      var k = rc;
      if (rc ? (rc = !1, Vo = e, Ip = s) : ($f = 0, zh = null), f = e.pendingLanes, f === ee && (Vf = null), k || w1(e.current, !1), Ed(l.stateNode, i), ua && e.memoizedUpdaters.clear(), WR(), Qa(e, lr()), t !== null)
        for (var j = e.onRecoverableError, H = 0; H < t.length; H++) {
          var $ = t[H], Ee = $.stack, Ze = $.digest;
          j($.value, {
            componentStack: Ee,
            digest: Ze
          });
        }
      if (Uh) {
        Uh = !1;
        var Ye = Fg;
        throw Fg = null, Ye;
      }
      return oa(Ip, ut) && e.tag !== Mo && Wl(), f = e.pendingLanes, oa(f, ut) ? (g3(), e === Bg ? Yp++ : (Yp = 0, Bg = e)) : Yp = 0, Lo(), Rd(), null;
    }
    function Wl() {
      if (Vo !== null) {
        var e = Kv(Ip), t = Ds(Ha, e), a = Kr.transition, i = Ba();
        try {
          return Kr.transition = null, er(t), mT();
        } finally {
          er(i), Kr.transition = a;
        }
      }
      return !1;
    }
    function vT(e) {
      Hg.push(e), rc || (rc = !0, Kg(eu, function() {
        return Wl(), null;
      }));
    }
    function mT() {
      if (Vo === null)
        return !1;
      var e = Pg;
      Pg = null;
      var t = Vo, a = Ip;
      if (Vo = null, Ip = ee, (Yt & (Xr | Pi)) !== wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      Vg = !0, jh = !1, El(a);
      var i = Yt;
      Yt |= Pi, AR(t.current), NR(t, t.current, a, e);
      {
        var l = Hg;
        Hg = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          hR(t, f);
        }
      }
      kd(), w1(t.current, !0), Yt = i, Lo(), jh ? t === zh ? $f++ : ($f = 0, zh = t) : $f = 0, Vg = !1, jh = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function b1(e) {
      return Vf !== null && Vf.has(e);
    }
    function hT(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function yT(e) {
      Uh || (Uh = !0, Fg = e);
    }
    var gT = yT;
    function R1(e, t, a) {
      var i = ec(a, t), l = xE(e, i, ut), s = Uo(e, l, ut), f = ka();
      s !== null && (Eo(s, ut, f), Qa(s, f));
    }
    function wn(e, t, a) {
      if (sR(a), qp(!1), e.tag === J) {
        R1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          R1(i, e, a);
          return;
        } else if (i.tag === ae) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !b1(s)) {
            var f = ec(a, e), p = pg(i, f, ut), v = Uo(i, p, ut), g = ka();
            v !== null && (Eo(v, ut, g), Qa(v, g));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ST(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ka();
      ef(e, a), _T(e), wa === e && Dl(kr, a) && (_r === Hp || _r === Mh && _l(kr) && lr() - zg < c1 ? ac(e, ee) : Ah = Tt(Ah, a)), Qa(e, l);
    }
    function T1(e, t) {
      t === Jt && (t = ZR(e));
      var a = ka(), i = Ia(e, t);
      i !== null && (Eo(i, t, a), Qa(i, a));
    }
    function ET(e) {
      var t = e.memoizedState, a = Jt;
      t !== null && (a = t.retryLane), T1(e, a);
    }
    function xT(e, t) {
      var a = Jt, i;
      switch (e.tag) {
        case ge:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Pt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), T1(e, a);
    }
    function CT(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : qR(e / 1960) * 1960;
    }
    function bT() {
      if (Yp > XR)
        throw Yp = 0, Bg = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > JR && ($f = 0, zh = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function RT() {
      su.flushLegacyContextWarning(), su.flushPendingUnsafeLifecycleWarnings();
    }
    function w1(e, t) {
      fn(e), Vh(e, Nu, $R), t && Vh(e, wi, IR), Vh(e, Nu, BR), t && Vh(e, wi, VR), Tn();
    }
    function Vh(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var $h = null;
    function k1(e) {
      {
        if ((Yt & Xr) !== wr || !(e.mode & Mt))
          return;
        var t = e.tag;
        if (t !== xe && t !== J && t !== ae && t !== Q && t !== ie && t !== Ke && t !== De)
          return;
        var a = ht(e) || "ReactComponent";
        if ($h !== null) {
          if ($h.has(a))
            return;
          $h.add(a);
        } else
          $h = /* @__PURE__ */ new Set([a]);
        var i = yr;
        try {
          fn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? fn(e) : Tn();
        }
      }
    }
    var Qg;
    {
      var TT = null;
      Qg = function(e, t, a) {
        var i = U1(TT, t);
        try {
          return PE(e, t, a);
        } catch (s) {
          if (zb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Km(), VS(), WE(e, t), U1(t, i), t.mode & en && q0(t), Du(null, PE, null, e, t, a), Xi()) {
            var l = os();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var _1 = !1, Gg;
    Gg = /* @__PURE__ */ new Set();
    function wT(e) {
      if (Si && !m3())
        switch (e.tag) {
          case Q:
          case ie:
          case De: {
            var t = Qn && ht(Qn) || "Unknown", a = t;
            if (!Gg.has(a)) {
              Gg.add(a);
              var i = ht(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ae: {
            _1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), _1 = !0);
            break;
          }
        }
    }
    function Gp(e, t) {
      if (ua) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ks(e, i, t);
        });
      }
    }
    var qg = {};
    function Kg(e, t) {
      {
        var a = yu.current;
        return a !== null ? (a.push(t), qg) : hd(e, t);
      }
    }
    function D1(e) {
      if (e !== qg)
        return Av(e);
    }
    function N1() {
      return yu.current !== null;
    }
    function kT(e) {
      {
        if (e.mode & Mt) {
          if (!l1())
            return;
        } else if (!GR() || Yt !== wr || e.tag !== Q && e.tag !== ie && e.tag !== De)
          return;
        if (yu.current === null) {
          var t = yr;
          try {
            fn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ht(e));
          } finally {
            t ? fn(e) : Tn();
          }
        }
      }
    }
    function _T(e) {
      e.tag !== Mo && l1() && yu.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      p1 = e;
    }
    var Bi = null, If = null, DT = function(e) {
      Bi = e;
    };
    function Yf(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Xg(e) {
      return Yf(e);
    }
    function Jg(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: K,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function O1(e, t) {
      {
        if (Bi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ae: {
            typeof i == "function" && (l = !0);
            break;
          }
          case Q: {
            (typeof i == "function" || s === gt) && (l = !0);
            break;
          }
          case ie: {
            (s === K || s === gt) && (l = !0);
            break;
          }
          case Ke:
          case De: {
            (s === Ct || s === gt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Bi(a);
          if (f !== void 0 && f === Bi(i))
            return !0;
        }
        return !1;
      }
    }
    function M1(e) {
      {
        if (Bi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var NT = function(e, t) {
      {
        if (Bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wl(), Yl(function() {
          Zg(e.current, i, a);
        });
      }
    }, OT = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Wl(), Yl(function() {
          Kp(t, e, null, null);
        });
      }
    };
    function Zg(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Q:
          case De:
          case ae:
            v = p;
            break;
          case ie:
            v = p.render;
            break;
        }
        if (Bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, S = !1;
        if (v !== null) {
          var D = Bi(v);
          D !== void 0 && (a.has(D) ? S = !0 : t.has(D) && (f === ae ? S = !0 : g = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || g) {
          var k = Ia(e, ut);
          k !== null && Dr(k, e, ut, yn);
        }
        l !== null && !S && Zg(l, t, a), s !== null && Zg(s, t, a);
      }
    }
    var MT = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return e4(e.current, i, a), a;
      }
    };
    function e4(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Q:
          case De:
          case ae:
            p = f;
            break;
          case ie:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? LT(e, a) : i !== null && e4(i, t, a), l !== null && e4(l, t, a);
      }
    }
    function LT(e, t) {
      {
        var a = AT(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ce:
              t.add(i.stateNode);
              return;
            case pe:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function AT(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ce)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var t4;
    {
      t4 = !1;
      try {
        var L1 = Object.preventExtensions({});
      } catch {
        t4 = !0;
      }
    }
    function UT(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !t4 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new UT(e, t, a, i);
    };
    function n4(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function jT(e) {
      return typeof e == "function" && !n4(e) && e.defaultProps === void 0;
    }
    function zT(e) {
      if (typeof e == "function")
        return n4(e) ? ae : Q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === K)
          return ie;
        if (t === Ct)
          return Ke;
      }
      return xe;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Xn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case xe:
        case Q:
        case De:
          a.type = Yf(e.type);
          break;
        case ae:
          a.type = Xg(e.type);
          break;
        case ie:
          a.type = Jg(e.type);
          break;
      }
      return a;
    }
    function FT(e, t) {
      e.flags &= Xn | Ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function HT(e, t, a) {
      var i;
      return e === Pm ? (i = Mt, t === !0 && (i |= vn, i |= tn)) : i = Ge, ua && (i |= en), di(J, null, null, i);
    }
    function r4(e, t, a, i, l, s) {
      var f = xe, p = e;
      if (typeof e == "function")
        n4(e) ? (f = ae, p = Xg(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = ce;
      else
        e: switch (e) {
          case mi:
            return Yo(a.children, l, s, t);
          case Xa:
            f = qe, l |= vn, (l & Mt) !== Ge && (l |= tn);
            break;
          case hi:
            return PT(a, l, s, t);
          case ye:
            return BT(a, l, s, t);
          case Me:
            return VT(a, l, s, t);
          case Bn:
            return A1(a, l, s, t);
          case xn:
          case Ut:
          case Rn:
          case hr:
          case Ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case yi:
                  f = He;
                  break e;
                case R:
                  f = Ft;
                  break e;
                case K:
                  f = ie, p = Jg(p);
                  break e;
                case Ct:
                  f = Ke;
                  break e;
                case gt:
                  f = zt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? ht(i) : null;
              g && (v += `

Check the render method of \`` + g + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var S = di(f, a, t, l);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function a4(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = r4(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var l = di(lt, e, i, t);
      return l.lanes = a, l;
    }
    function PT(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(Oe, e, i, t | en);
      return l.elementType = hi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function BT(e, t, a, i) {
      var l = di(ge, e, i, t);
      return l.elementType = ye, l.lanes = a, l;
    }
    function VT(e, t, a, i) {
      var l = di(Pt, e, i, t);
      return l.elementType = Me, l.lanes = a, l;
    }
    function A1(e, t, a, i) {
      var l = di(Be, e, i, t);
      l.elementType = Bn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function i4(e, t, a) {
      var i = di(Fe, e, null, t);
      return i.lanes = a, i;
    }
    function $T() {
      var e = di(ce, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function IT(e) {
      var t = di(ot, null, null, Ge);
      return t.stateNode = e, t;
    }
    function u4(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(pe, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function U1(e, t) {
      return e === null && (e = di(xe, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function YT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = By, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Jt, this.eventTimes = ws(ee), this.expirationTimes = ws(yn), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = ws(ee), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function j1(e, t, a, i, l, s, f, p, v, g) {
      var S = new YT(e, t, a, p, v), D = HT(t, s);
      S.current = D, D.stateNode = S;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = k;
      }
      return S0(D), S;
    }
    var l4 = "18.3.1";
    function WT(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Gn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var o4, s4;
    o4 = !1, s4 = {};
    function z1(e) {
      if (!e)
        return fi;
      var t = vo(e), a = _b(t);
      if (t.tag === ae) {
        var i = t.type;
        if (Qu(i))
          return cS(t, i, a);
      }
      return a;
    }
    function QT(e, t) {
      {
        var a = vo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = aa(a);
        if (l === null)
          return null;
        if (l.mode & vn) {
          var s = ht(a) || "Component";
          if (!s4[s]) {
            s4[s] = !0;
            var f = yr;
            try {
              fn(l), a.mode & vn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? fn(f) : Tn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function F1(e, t, a, i, l, s, f, p) {
      var v = !1, g = null;
      return j1(e, t, v, g, a, i, l, s, f);
    }
    function H1(e, t, a, i, l, s, f, p, v, g) {
      var S = !0, D = j1(a, i, S, e, l, s, f, p, v);
      D.context = z1(null);
      var k = D.current, j = ka(), H = $o(k), $ = Bl(j, H);
      return $.callback = t ?? null, Uo(k, $, H), eT(D, H, j), D;
    }
    function Kp(e, t, a, i) {
      Sd(t, e);
      var l = t.current, s = ka(), f = $o(l);
      Un(f);
      var p = z1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Si && yr !== null && !o4 && (o4 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ht(yr) || "Unknown"));
      var v = Bl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = Uo(l, v, f);
      return g !== null && (Dr(g, l, f, s), th(g, l, f)), f;
    }
    function Ih(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ce:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function GT(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (nf(t)) {
            var a = Pv(t);
            aT(t, a);
          }
          break;
        }
        case ge: {
          Yl(function() {
            var l = Ia(e, ut);
            if (l !== null) {
              var s = ka();
              Dr(l, e, ut, s);
            }
          });
          var i = ut;
          c4(e, i);
          break;
        }
      }
    }
    function P1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function c4(e, t) {
      P1(e, t);
      var a = e.alternate;
      a && P1(a, t);
    }
    function qT(e) {
      if (e.tag === ge) {
        var t = Es, a = Ia(e, t);
        if (a !== null) {
          var i = ka();
          Dr(a, e, t, i);
        }
        c4(e, t);
      }
    }
    function KT(e) {
      if (e.tag === ge) {
        var t = $o(e), a = Ia(e, t);
        if (a !== null) {
          var i = ka();
          Dr(a, e, t, i);
        }
        c4(e, t);
      }
    }
    function B1(e) {
      var t = kn(e);
      return t === null ? null : t.stateNode;
    }
    var V1 = function(e) {
      return null;
    };
    function XT(e) {
      return V1(e);
    }
    var $1 = function(e) {
      return !1;
    };
    function JT(e) {
      return $1(e);
    }
    var I1 = null, Y1 = null, W1 = null, Q1 = null, G1 = null, q1 = null, K1 = null, X1 = null, J1 = null;
    {
      var Z1 = function(e, t, a) {
        var i = t[a], l = _t(e) ? e.slice() : kt({}, e);
        return a + 1 === t.length ? (_t(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Z1(e[i], t, a + 1), l);
      }, ex = function(e, t) {
        return Z1(e, t, 0);
      }, tx = function(e, t, a, i) {
        var l = t[i], s = _t(e) ? e.slice() : kt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], _t(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = tx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, nx = function(e, t, a) {
        if (t.length !== a.length) {
          X("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              X("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return tx(e, t, a, 0);
      }, rx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = _t(e) ? e.slice() : kt({}, e);
        return s[l] = rx(e[l], t, a + 1, i), s;
      }, ax = function(e, t, a) {
        return rx(e, t, 0, a);
      }, f4 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      I1 = function(e, t, a, i) {
        var l = f4(e, t);
        if (l !== null) {
          var s = ax(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = kt({}, e.memoizedProps);
          var f = Ia(e, ut);
          f !== null && Dr(f, e, ut, yn);
        }
      }, Y1 = function(e, t, a) {
        var i = f4(e, t);
        if (i !== null) {
          var l = ex(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = kt({}, e.memoizedProps);
          var s = Ia(e, ut);
          s !== null && Dr(s, e, ut, yn);
        }
      }, W1 = function(e, t, a, i) {
        var l = f4(e, t);
        if (l !== null) {
          var s = nx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = kt({}, e.memoizedProps);
          var f = Ia(e, ut);
          f !== null && Dr(f, e, ut, yn);
        }
      }, Q1 = function(e, t, a) {
        e.pendingProps = ax(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, ut);
        i !== null && Dr(i, e, ut, yn);
      }, G1 = function(e, t) {
        e.pendingProps = ex(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ia(e, ut);
        a !== null && Dr(a, e, ut, yn);
      }, q1 = function(e, t, a) {
        e.pendingProps = nx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, ut);
        i !== null && Dr(i, e, ut, yn);
      }, K1 = function(e) {
        var t = Ia(e, ut);
        t !== null && Dr(t, e, ut, yn);
      }, X1 = function(e) {
        V1 = e;
      }, J1 = function(e) {
        $1 = e;
      };
    }
    function ZT(e) {
      var t = aa(e);
      return t === null ? null : t.stateNode;
    }
    function ew(e) {
      return null;
    }
    function tw() {
      return yr;
    }
    function nw(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return yo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: I1,
        overrideHookStateDeletePath: Y1,
        overrideHookStateRenamePath: W1,
        overrideProps: Q1,
        overridePropsDeletePath: G1,
        overridePropsRenamePath: q1,
        setErrorHandler: X1,
        setSuspenseHandler: J1,
        scheduleUpdate: K1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ZT,
        findFiberByHostInstance: t || ew,
        // React Refresh
        findHostInstancesForRefresh: MT,
        scheduleRefresh: NT,
        scheduleRoot: OT,
        setRefreshHandler: DT,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tw,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: l4
      });
    }
    var ix = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function d4(e) {
      this._internalRoot = e;
    }
    Yh.prototype.render = d4.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Wh(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== qn) {
          var i = B1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Kp(e, t, null, null);
    }, Yh.prototype.unmount = d4.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        y1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yl(function() {
          Kp(null, e, null, null);
        }), iS(t);
      }
    };
    function rw(e, t) {
      if (!Wh(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ux(e);
      var a = !1, i = !1, l = "", s = ix;
      t != null && (t.hydrate ? X("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = F1(e, Pm, null, a, i, l, s);
      Lm(f.current, e);
      var p = e.nodeType === qn ? e.parentNode : e;
      return np(p), new d4(f);
    }
    function Yh(e) {
      this._internalRoot = e;
    }
    function aw(e) {
      e && tm(e);
    }
    Yh.prototype.unstable_scheduleHydration = aw;
    function iw(e, t, a) {
      if (!Wh(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ux(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = ix;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var g = H1(t, null, e, Pm, i, s, f, p, v);
      if (Lm(g.current, e), np(e), l)
        for (var S = 0; S < l.length; S++) {
          var D = l[S];
          s3(g, D);
        }
      return new Yh(g);
    }
    function Wh(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === Ki || e.nodeType === ad));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === Ki || e.nodeType === ad || e.nodeType === qn && e.nodeValue === " react-mount-point-unstable "));
    }
    function ux(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uw = E.ReactCurrentOwner, lx;
    lx = function(e) {
      if (e._reactRootContainer && e.nodeType !== qn) {
        var t = B1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = p4(e), l = !!(i && No(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function p4(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function ox() {
    }
    function lw(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = Ih(f);
            s.call(k);
          };
        }
        var f = H1(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ox
        );
        e._reactRootContainer = f, Lm(f.current, e);
        var p = e.nodeType === qn ? e.parentNode : e;
        return np(p), Yl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var k = Ih(S);
            g.call(k);
          };
        }
        var S = F1(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ox
        );
        e._reactRootContainer = S, Lm(S.current, e);
        var D = e.nodeType === qn ? e.parentNode : e;
        return np(D), Yl(function() {
          Kp(t, S, a, i);
        }), S;
      }
    }
    function ow(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qh(e, t, a, i, l) {
      lx(a), ow(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = lw(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var v = Ih(f);
            p.call(v);
          };
        }
        Kp(t, f, e, l);
      }
      return Ih(f);
    }
    var sx = !1;
    function sw(e) {
      {
        sx || (sx = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uw.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : QT(e, "findDOMNode");
    }
    function cw(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qh(null, e, t, !0, a);
    }
    function fw(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qh(null, e, t, !1, a);
    }
    function dw(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !cy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qh(e, t, a, !1, i);
    }
    var cx = !1;
    function pw(e) {
      if (cx || (cx = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = p4(e), i = a && !No(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yl(function() {
          Qh(null, null, e, !1, function() {
            e._reactRootContainer = null, iS(e);
          });
        }), !0;
      } else {
        {
          var l = p4(e), s = !!(l && No(l)), f = e.nodeType === ta && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Lr(GT), xo(qT), Xv(KT), Os(Ba), Hd(Gv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Sc(mC), sy(Ig, iT, Yl);
    function vw(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wh(t))
        throw new Error("Target container is not a DOM element.");
      return WT(e, t, null, a);
    }
    function mw(e, t, a, i) {
      return dw(e, t, a, i);
    }
    var v4 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, Cf, Am, so, Ec, Ig]
    };
    function hw(e, t) {
      return v4.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rw(e, t);
    }
    function yw(e, t, a) {
      return v4.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iw(e, t, a);
    }
    function gw(e) {
      return y1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yl(e);
    }
    var Sw = nw({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: l4,
      rendererPackageName: "react-dom"
    });
    if (!Sw && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var fx = window.location.protocol;
      /^(https?|file):$/.test(fx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (fx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v4, qa.createPortal = vw, qa.createRoot = hw, qa.findDOMNode = sw, qa.flushSync = gw, qa.hydrate = cw, qa.hydrateRoot = yw, qa.render = fw, qa.unmountComponentAtNode = pw, qa.unstable_batchedUpdates = Ig, qa.unstable_renderSubtreeIntoContainer = mw, qa.version = l4, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qa;
}
function Ox() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox);
    } catch (b) {
      console.error(b);
    }
  }
}
process.env.NODE_ENV === "production" ? (Ox(), R4.exports = _w()) : R4.exports = Dw();
var Nw = R4.exports, T4, qh = Nw;
if (process.env.NODE_ENV === "production")
  T4 = qh.createRoot, qh.hydrateRoot;
else {
  var xx = qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  T4 = function(b, w) {
    xx.usingClientEntryPoint = !0;
    try {
      return qh.createRoot(b, w);
    } finally {
      xx.usingClientEntryPoint = !1;
    }
  };
}
function Ow(b) {
  const w = b.trim().replace(/\s+/g, " ");
  return w ? w.charAt(0).toUpperCase() + w.slice(1) : "";
}
function N4(b) {
  return Ow(b.category ?? "");
}
function Mw(b) {
  const w = b.map((Y) => ({
    ...Y,
    category: N4(Y) || void 0
  }));
  let E = "";
  for (const Y of w)
    Y.category ? E = Y.category : E && (Y.category = E);
  return w;
}
function Lw(b) {
  const w = /* @__PURE__ */ new Set();
  for (const Y of b) {
    const q = N4(Y);
    q && w.add(q);
  }
  const E = [...w].sort((Y, q) => Y.localeCompare(q, "bg"));
  return [{ id: null, label: "Всички" }, ...E.map((Y) => ({ id: Y, label: Y }))];
}
function Cx(b, w) {
  return w ? N4(b) === w : !0;
}
var Aw = {
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
}, Uw = {
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
}, y4 = { bg: Aw, en: Uw };
function bx(b, w) {
  let E = b;
  for (const Y of w) {
    if (E == null || typeof E != "object") return;
    E = E[Y];
  }
  return typeof E == "string" ? E : void 0;
}
function jw(b, w) {
  return b.replace(/\{(\w+)\}/g, (E, Y) => String(w[Y] ?? `{${Y}}`));
}
function Mx(b) {
  const w = y4[b] ?? y4.bg;
  return function(Y, q) {
    const X = Y.split(".");
    let y = bx(w, X);
    return y === void 0 && (y = bx(y4.bg, X) ?? Y), q ? jw(y, q) : y;
  };
}
var Lx = fe.createContext(Mx("bg"));
function zw({ locale: b, children: w }) {
  const E = Mx(b);
  return /* @__PURE__ */ O.jsx(Lx.Provider, { value: E, children: w });
}
function O4() {
  return fe.useContext(Lx);
}
function Rx(b) {
  const w = new Uint8Array(b);
  return globalThis.crypto.getRandomValues(w), Array.from(w, (E) => E.toString(16).padStart(2, "0")).join("");
}
function Tx(...b) {
  for (const w of b) {
    const E = String(w ?? "").trim();
    if (E) return E;
  }
  return "";
}
function Fw(b) {
  return /^svc-\d/.test(b);
}
function Hw(b, w) {
  const E = b.trim();
  if (E && !Fw(E) && !w.has(E))
    return w.add(E), E;
  let Y = Rx(4);
  for (; w.has(Y); ) Y = Rx(4);
  return w.add(Y), Y;
}
function Pw(b) {
  if (typeof b == "string")
    try {
      b = JSON.parse(b);
    } catch {
      return [];
    }
  let w = [];
  if (Array.isArray(b))
    w = b;
  else if (b && typeof b == "object")
    w = Object.values(b);
  else
    return [];
  const E = /* @__PURE__ */ new Set(), Y = [];
  return w.forEach((q, X) => {
    const y = q, we = Tx(y.name, y.service_name, y.serviceName, y.title);
    if (!we) return;
    const Q = Hw(String(y.id ?? ""), E), ae = Number(y.duration ?? y.duration_min ?? y.durationMin ?? 30) || 30, xe = y.price ?? y.service_price ?? y.servicePrice, J = xe != null ? Number(xe) : void 0, pe = Array.isArray(y.variants) ? y.variants.map((De) => {
      if (!De || typeof De != "object") return null;
      const zt = De, it = String(zt.label ?? "").trim();
      if (!it) return null;
      const ot = Number(zt.price ?? NaN);
      if (!Number.isFinite(ot)) return null;
      const Pt = Number(zt.duration ?? NaN);
      return {
        label: it,
        price: Math.max(0, ot),
        duration: Number.isFinite(Pt) ? Math.max(5, Math.round(Pt)) : void 0
      };
    }).filter((De) => De !== null) : void 0, ce = Array.isArray(y.images) ? y.images.map((De) => String(De ?? "").trim()).filter(Boolean) : void 0, Fe = Array.isArray(y.assignedTeamMemberIds) ? [...new Set(y.assignedTeamMemberIds.map((De) => String(De ?? "").trim()).filter(Boolean))] : void 0, lt = String(y.payment_type ?? ""), qe = ["none", "deposit", "full"].includes(lt) ? lt : void 0, Ft = Number(y.deposit_amount ?? NaN), He = Number.isFinite(Ft) ? Math.max(0, Ft) : void 0, ie = Number(y.cancel_policy_hours ?? NaN), Oe = Number.isFinite(ie) && ie > 0 ? ie : void 0, ge = String(y.cancel_policy_action ?? ""), Ke = ["full_refund", "keep_deposit", "keep_full"].includes(ge) ? ge : void 0;
    Y.push({
      id: Q,
      name: we,
      description: String(y.description ?? "").trim() || void 0,
      category: Tx(
        y.category,
        y.category_name,
        y.categoryName,
        y.service_category,
        y.serviceCategory
      ) || void 0,
      price: J != null && Number.isFinite(J) ? J : void 0,
      duration: ae,
      images: ce,
      variants: pe && pe.length > 0 ? pe : void 0,
      ...Fe && Fe.length > 0 ? { assignedTeamMemberIds: Fe } : {},
      ...qe !== void 0 ? { payment_type: qe } : {},
      ...He !== void 0 ? { deposit_amount: He } : {},
      ...y.requires_confirmation === !0 ? { requires_confirmation: !0 } : {},
      ...Oe !== void 0 ? { cancel_policy_hours: Oe } : {},
      ...Ke !== void 0 ? { cancel_policy_action: Ke } : {}
    });
  }), Y;
}
var w4 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Bw = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday"
};
function Vw(b, w) {
  const E = {};
  for (const q of w4) E[q] = null;
  const Y = $w(w);
  if (Y) {
    for (const q of w4)
      Y[q] !== void 0 && (E[q] = Y[q]);
    return E;
  }
  if (b && typeof b == "object")
    for (const [q, X] of Object.entries(b)) {
      const y = Bw[q.toLowerCase()];
      y && (!X || X.closed || !X.open || !X.close ? E[y] = null : E[y] = { open: X.open, close: X.close });
    }
  return E;
}
function $w(b) {
  if (!b || typeof b != "object" || Array.isArray(b)) return null;
  const w = b, E = {};
  let Y = !1;
  for (const q of w4) {
    const X = w[q];
    if (X && typeof X == "object" && !Array.isArray(X)) {
      const y = String(X.open ?? ""), we = String(X.close ?? "");
      y && we ? (E[q] = { open: y, close: we }, Y = !0) : E[q] = null;
    }
  }
  return Y ? E : null;
}
function Iw(b) {
  return /^\d{4}-\d{2}-\d{2}$/.test(b);
}
function k4(b) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(b);
}
function nv(b) {
  const [w, E] = b.split(":").map(Number);
  return w * 60 + E;
}
function Yw(b) {
  if (!Array.isArray(b)) return [];
  const w = [];
  for (const E of b) {
    if (!E || typeof E != "object") continue;
    const Y = E, q = String(Y.date ?? "").trim();
    if (!Iw(q)) continue;
    const X = Y.allDay === !0, y = String(Y.start ?? "").trim(), we = String(Y.end ?? "").trim(), Q = String(Y.note ?? "").trim();
    if (!X) {
      if (!k4(y) || !k4(we) || nv(we) <= nv(y)) continue;
      w.push({ date: q, allDay: !1, start: y, end: we, ...Q ? { note: Q } : {} });
      continue;
    }
    w.push({ date: q, allDay: !0, ...Q ? { note: Q } : {} });
  }
  return w.sort((E, Y) => `${E.date}-${E.start ?? ""}`.localeCompare(`${Y.date}-${Y.start ?? ""}`)), w;
}
function Ax(b, w) {
  return b.some((E) => E.date === w && E.allDay);
}
function Ww(b, w, E, Y) {
  if (Ax(b, w)) return !0;
  if (!k4(E)) return !1;
  const q = nv(E), X = q + Math.max(1, Y);
  for (const y of b) {
    if (y.date !== w || y.allDay || !y.start || !y.end) continue;
    const we = nv(y.start), Q = nv(y.end);
    if (q < Q && X > we) return !0;
  }
  return !1;
}
var _4 = "tracking_booking_started";
function Qw() {
  var b;
  typeof sessionStorage > "u" || sessionStorage.getItem(_4) || (sessionStorage.setItem(_4, "1"), (b = window.gtag) == null || b.call(window, "event", "booking_started"));
}
function Gw({ serviceName: b, value: w, currency: E = "EUR" } = {}) {
  var X, y, we;
  typeof sessionStorage < "u" && sessionStorage.removeItem(_4);
  const Y = {};
  w != null && w > 0 && (Y.value = w, Y.currency = E), b && (Y.content_name = b), (X = window.fbq) == null || X.call(window, "track", "Schedule", Y), (y = window.fbq) == null || y.call(window, "trackCustom", "BookingCompleted", { ...Y, service_name: b });
  const q = {};
  w != null && w > 0 && (q.value = w, q.currency = E), b && (q.service_name = b), (we = window.gtag) == null || we.call(window, "event", "booking_completed", q);
}
var qw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function wx(b) {
  return String(b).padStart(2, "0");
}
function kx(b) {
  return new Date(b.getTime() - b.getTimezoneOffset() * 6e4).toISOString().split("T")[0];
}
function Kw({
  slug: b,
  openingHours: w,
  bookingBlocks: E,
  slotIntervalMin: Y,
  bookingAdvanceDays: q,
  bookingServices: X,
  engineUrl: y = "",
  successUrl: we,
  cancelUrl: Q,
  locale: ae = "bg-BG",
  onEvent: xe
}) {
  const J = O4(), pe = y.replace(/\/$/, ""), ce = `/api/public/v1/salons/${encodeURIComponent(b)}`, [Fe, lt] = fe.useState(!1), [qe, Ft] = fe.useState([]), [He, ie] = fe.useState(""), [Oe, ge] = fe.useState(""), [Ke, De] = fe.useState({}), [zt, it] = fe.useState(""), [ot, Pt] = fe.useState(""), [yt, Be] = fe.useState(""), [wt, Lt] = fe.useState(""), [Dt, Le] = fe.useState(""), [oe, Ae] = fe.useState(""), [de, N] = fe.useState([]), [P, Xe] = fe.useState(null), Ve = fe.useRef(!1), [st, tt] = fe.useState(!1), [ft, G] = fe.useState(""), [dt, At] = fe.useState(""), [gn, Sn] = fe.useState(null);
  fe.useEffect(() => {
    const be = /* @__PURE__ */ new Date();
    it(kx(be));
    const at = new Date(be);
    at.setDate(be.getDate() + Math.max(1, q)), Pt(kx(at));
  }, [q]), fe.useEffect(() => {
    !Fe || Ve.current || (Ve.current = !0, fetch(`${pe}${ce}/staff`, { cache: "no-store" }).then((be) => be.json()).then((be) => {
      Array.isArray(be.staff) && N(be.staff);
    }).catch(() => {
    }));
  }, [Fe, b]), fe.useEffect(() => {
    if (!He) return;
    let be = !1;
    const at = P ? `&staffMemberId=${encodeURIComponent(P)}` : "";
    return fetch(
      `${pe}${ce}/slots?date=${encodeURIComponent(He)}${at}`,
      { cache: "no-store" }
    ).then((Rt) => Rt.json()).then((Rt) => {
      if (be || !Array.isArray(Rt.occupied)) return;
      const Vt = Rt.occupied.map((Z) => ({
        time: String((Z == null ? void 0 : Z.time) ?? ""),
        duration: Math.max(5, Number((Z == null ? void 0 : Z.duration) ?? 30) || 30)
      })).filter((Z) => Z.time.length >= 4), un = P ? `${He}:${P}` : He;
      be || De((Z) => ({ ...Z, [un]: Vt }));
    }).catch(() => {
    }), () => {
      be = !0;
    };
  }, [b, He, P]);
  const mt = fe.useMemo(
    () => qe.map((be) => X[be]).filter((be) => !!be),
    [qe, X]
  ), Nt = fe.useMemo(
    () => mt.reduce((be, at) => be + (Number(at.duration) || 0), 0),
    [mt]
  ), Kt = fe.useMemo(
    () => mt.reduce((be, at) => be + (Number(at.price) || 0), 0),
    [mt]
  ), cn = fe.useCallback(
    (be, at) => {
      if (!be) return null;
      const Rt = qw[(/* @__PURE__ */ new Date(`${be}T12:00:00`)).getDay()], Vt = w[Rt];
      if (!(Vt != null && Vt.open) || !(Vt != null && Vt.close) || Ax(E, be)) return "closed";
      const un = Math.max(5, at || 30), Z = P ? `${be}:${P}` : be, ke = Ke[Z] ?? [], [pt = 0, Et = 0] = Vt.open.split(":").map(Number), [Qt = 0, ln = 0] = Vt.close.split(":").map(Number), Xt = pt * 60 + Et, B = Qt * 60 + ln - un, ve = [];
      for (let $e = Xt; $e <= B; $e += Y) {
        const Ie = `${wx(Math.floor($e / 60))}:${wx($e % 60)}`, Pn = $e + un;
        !ke.some(({ time: zn, duration: ya }) => {
          const [$i = 0, Ii = 0] = zn.split(":").map(Number), Ka = $i * 60 + Ii, vi = Ka + Math.max(5, ya);
          return Ka < Pn && vi > $e;
        }) && !Ww(E, be, Ie, un) && ve.push(Ie);
      }
      return ve;
    },
    [w, E, Ke, P, Y]
  ), Gn = fe.useMemo(
    () => qe.length === 0 ? null : cn(He, Nt || 30),
    [qe.length, cn, He, Nt]
  ), Zr = fe.useCallback((be) => {
    if (G(""), At(""), Sn(null), be) {
      const at = X.findIndex((Rt) => Rt.id === be);
      Ft(at >= 0 ? [at] : []);
    } else
      Ft([]);
    ie(""), ge(""), Be(""), Lt(""), Le(""), Ae(""), lt(!0), xe ? xe("booking_started") : Qw();
  }, [X, xe]), Hn = fe.useCallback(() => {
    lt(!1), Sn(null), Xe(null), ie(""), ge("");
  }, []), Dn = fe.useCallback((be) => {
    Ft((at) => at.includes(be) ? at.filter((Vt) => Vt !== be) : [...at, be]), ge("");
  }, []), En = fe.useCallback((be) => {
    ie(be), ge("");
  }, []), Nn = fe.useCallback((be) => {
    Xe(be), ie(""), ge("");
  }, []), On = fe.useCallback((be, at, Rt) => {
    if (!be || !at) return;
    const Vt = Math.max(5, Number(Rt) || 30);
    De((un) => {
      const Z = un[be] ?? [];
      return Z.some((ke) => ke.time === at) ? un : { ...un, [be]: [...Z, { time: at, duration: Vt }] };
    });
  }, []), Nr = fe.useCallback(async (be) => {
    if (be.preventDefault(), G(""), At(""), mt.length === 0) {
      G(J("booking.errors.noService"));
      return;
    }
    if (!yt.trim()) {
      G(J("booking.errors.noName"));
      return;
    }
    if (!wt.trim()) {
      G(J("booking.errors.noPhone"));
      return;
    }
    if (!Dt.trim()) {
      G(J("booking.errors.noEmail"));
      return;
    }
    if (!He) {
      G(J("booking.errors.noDate"));
      return;
    }
    if (!Oe) {
      G(J("booking.errors.noTime"));
      return;
    }
    const at = mt.map((Et) => Et.name).join(" + "), Rt = Nt || 30, Vt = mt[0], un = (Vt == null ? void 0 : Vt.payment_type) ?? "none", Z = (Vt == null ? void 0 : Vt.deposit_amount) ?? 0, ke = un === "deposit" ? Z : un === "full" ? Kt ?? 0 : 0, pt = un !== "none" && ke > 0;
    tt(!0);
    try {
      const Et = await fetch(`${pe}${ce}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: yt.trim(),
          clientPhone: wt.trim(),
          clientEmail: Dt.trim().toLowerCase(),
          serviceName: at,
          servicePrice: Kt,
          serviceDuration: Rt,
          date: He,
          time: Oe,
          notes: oe.trim() || void 0,
          requiresPayment: pt,
          staffMemberId: P ?? void 0
        })
      }), Qt = await Et.json().catch(() => ({}));
      if (!Et.ok)
        throw new Error(
          Qt.error ?? (Et.status === 500 ? J("booking.errors.saveFailed") : J("booking.errors.httpError", { status: Et.status }))
        );
      const ln = Qt.bookingId ?? Qt.id;
      if (pt && ln) {
        const ve = await fetch(`${pe}${ce}/booking-checkout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: ln,
            salonSlug: b,
            serviceName: at,
            amountEuros: ke,
            paymentType: un,
            successUrl: we,
            cancelUrl: Q
          })
        }), $e = await ve.json().catch(() => ({}));
        if (!ve.ok || !$e.checkoutUrl)
          throw new Error($e.error ?? J("booking.errors.paymentFailed"));
        window.location.href = $e.checkoutUrl;
        return;
      }
      const Xt = (/* @__PURE__ */ new Date(`${He}T12:00:00`)).toLocaleDateString(ae, {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      On(He, Oe, Rt), Sn({ serviceName: at, dateLabel: Xt, time: Oe }), At(`${at} — ${Xt} ${Oe}`);
      const B = {
        serviceName: at,
        value: Kt > 0 ? Kt : void 0,
        currency: "EUR"
      };
      xe ? xe("booking_completed", B) : Gw(B);
    } catch (Et) {
      G(Et instanceof Error ? Et.message : J("booking.errors.generic"));
    } finally {
      tt(!1);
    }
  }, [
    b,
    mt,
    yt,
    wt,
    Dt,
    He,
    Oe,
    oe,
    Nt,
    Kt,
    P,
    On,
    we,
    Q,
    ae,
    xe
  ]);
  return {
    bookingOpen: Fe,
    open: Zr,
    close: Hn,
    selectedServiceIdxs: qe,
    toggleService: Dn,
    totalDuration: Nt,
    totalPrice: Kt,
    selectedServices: mt,
    selectedDate: He,
    setDate: En,
    selectedTime: Oe,
    setTime: ge,
    timeSlots: Gn,
    minDate: zt,
    maxDate: ot,
    clientName: yt,
    setClientName: Be,
    clientPhone: wt,
    setClientPhone: Lt,
    clientEmail: Dt,
    setClientEmail: Le,
    notes: oe,
    setNotes: Ae,
    staffMembers: de,
    selectedStaffMemberId: P,
    setStaffMemberId: Nn,
    isSubmitting: st,
    bookingError: ft,
    bookingSuccess: dt,
    bookingSuccessDetails: gn,
    submit: Nr
  };
}
var Xw = fe.lazy(
  () => Promise.resolve().then(() => wk).then((b) => ({ default: b.SalonBookingModal }))
);
function Jw({
  forwardedRef: b,
  slug: w,
  openingHours: E,
  bookingBlocks: Y,
  slotIntervalMin: q,
  bookingAdvanceDays: X,
  bookingServices: y,
  serviceCatalog: we,
  categoryTabs: Q,
  engineUrl: ae,
  primaryColor: xe,
  accentGradient: J,
  successUrl: pe,
  cancelUrl: ce,
  locale: Fe,
  formatPrice: lt,
  onEvent: qe,
  salonName: Ft,
  basePath: He
}) {
  const ie = Kw({
    slug: w,
    openingHours: E,
    bookingBlocks: Y,
    slotIntervalMin: q,
    bookingAdvanceDays: X,
    bookingServices: y,
    engineUrl: ae,
    successUrl: pe,
    cancelUrl: ce,
    locale: Fe,
    onEvent: qe
  });
  fe.useImperativeHandle(b, () => ({
    open: (ge) => ie.open(ge),
    close: () => ie.close()
  }), [ie.open, ie.close]);
  const Oe = ie.selectedServices[0];
  return /* @__PURE__ */ O.jsx(fe.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(
    Xw,
    {
      open: ie.bookingOpen,
      primaryColor: xe,
      accentGradient: J,
      locale: Fe,
      formatPrice: lt,
      serviceCatalog: we,
      categoryTabs: Q,
      services: y,
      selectedServiceIdxs: ie.selectedServiceIdxs,
      selectedDate: ie.selectedDate,
      selectedTime: ie.selectedTime,
      totalDuration: ie.totalDuration,
      totalPrice: ie.totalPrice,
      clientName: ie.clientName,
      clientPhone: ie.clientPhone,
      clientEmail: ie.clientEmail,
      notes: ie.notes,
      salonName: Ft,
      termsHref: `${He}/terms`,
      privacyHref: `${He}/privacy`,
      minDate: ie.minDate,
      maxDate: ie.maxDate,
      timeSlots: ie.timeSlots,
      paymentType: (Oe == null ? void 0 : Oe.payment_type) ?? "none",
      depositAmount: Oe == null ? void 0 : Oe.deposit_amount,
      cancelPolicyHours: Oe == null ? void 0 : Oe.cancel_policy_hours,
      cancelPolicyAction: Oe == null ? void 0 : Oe.cancel_policy_action,
      isSubmitting: ie.isSubmitting,
      bookingError: ie.bookingError,
      bookingSuccess: ie.bookingSuccess,
      bookingSuccessDetails: ie.bookingSuccessDetails,
      staffMembers: ie.staffMembers,
      selectedStaffMemberId: ie.selectedStaffMemberId,
      onClose: ie.close,
      onToggleService: ie.toggleService,
      onDateChange: ie.setDate,
      onTimeChange: ie.setTime,
      onClientNameChange: ie.setClientName,
      onClientPhoneChange: ie.setClientPhone,
      onClientEmailChange: ie.setClientEmail,
      onNotesChange: ie.setNotes,
      onStaffMemberChange: ie.setStaffMemberId,
      onSubmit: ie.submit
    }
  ) });
}
var Zw = fe.forwardRef(
  function({ slug: w, salon: E, openingHours: Y, bookingBlocks: q, basePath: X = "", engineUrl: y = "", accentGradient: we, successUrl: Q, cancelUrl: ae, locale: xe, formatPrice: J, onEvent: pe }, ce) {
    const Fe = fe.useMemo(
      () => Vw(
        E.working_hours,
        E.opening_hours
      ),
      [E.working_hours, E.opening_hours]
    ), lt = Y ?? Fe, qe = q ?? Yw(
      E.opening_hours && typeof E.opening_hours == "object" ? E.opening_hours.booking_blocks : null
    ), Ft = fe.useMemo(() => {
      const it = E.opening_hours;
      if (it && typeof it == "object") {
        const ot = Number(it.slot_interval_min);
        if ([15, 20, 30, 45, 60].includes(ot)) return ot;
      }
      return 30;
    }, [E.opening_hours]), He = fe.useMemo(() => {
      const it = E.opening_hours;
      if (it && typeof it == "object") {
        const ot = Number(it.booking_advance_days);
        if (Number.isFinite(ot) && ot >= 1) return Math.round(ot);
      }
      return 60;
    }, [E.opening_hours]), ie = fe.useMemo(
      () => Mw(Pw(E.services)),
      [E.services]
    ), Oe = fe.useMemo(
      () => Lw(ie),
      [ie]
    ), ge = fe.useMemo(() => {
      const it = [];
      for (const ot of ie) {
        const Pt = Array.isArray(ot.variants) ? ot.variants : [];
        if (Pt.length === 0) {
          it.push(ot);
          continue;
        }
        for (const yt of Pt)
          it.push({
            ...ot,
            id: `${ot.id}::${yt.label}`,
            name: `${ot.name} – ${yt.label}`,
            price: Number(yt.price ?? ot.price ?? 0) || 0,
            duration: Math.max(5, Number(yt.duration ?? ot.duration ?? 30) || 30),
            variants: void 0
          });
      }
      return it;
    }, [ie]), Ke = typeof E.language == "string" ? E.language : "bg", De = xe ?? (Ke === "en" ? "en-US" : "bg-BG"), zt = typeof E.primary_color == "string" && E.primary_color ? E.primary_color : "#5B21B6";
    return /* @__PURE__ */ O.jsx(zw, { locale: Ke, children: /* @__PURE__ */ O.jsx(
      Jw,
      {
        forwardedRef: ce,
        slug: w,
        openingHours: lt,
        bookingBlocks: qe,
        slotIntervalMin: Ft,
        bookingAdvanceDays: He,
        bookingServices: ge,
        serviceCatalog: ie,
        categoryTabs: Oe,
        engineUrl: y,
        primaryColor: zt,
        accentGradient: we,
        successUrl: Q,
        cancelUrl: ae,
        locale: De,
        formatPrice: J,
        onEvent: pe,
        salonName: String(E.name ?? ""),
        basePath: X
      }
    ) });
  }
);
const ek = {
  en: { open: "Reserve", loading: "Loading…", error: "Booking is temporarily unavailable." },
  bg: { open: "Запази", loading: "Зареждане…", error: "Резервациите временно не са достъпни." }
};
function tk(b) {
  const w = new URLSearchParams(location.search), E = document.body.dataset.lang || "en", Y = (q) => {
    var X;
    return (X = document.querySelector(`meta[name="${q}"]`)) == null ? void 0 : X.content;
  };
  return {
    lang: E,
    engineUrl: b.dataset.engine || Y("clicka:engine") || "https://clicka.bg",
    salonSlug: b.dataset.salon || Y("clicka:salon") || "urban-by-delyana",
    initialService: w.get("service") || b.dataset.service || "",
    successUrl: b.dataset.successUrl || `${location.origin}${location.pathname}?booked=1`,
    cancelUrl: b.dataset.cancelUrl || `${location.origin}${location.pathname}?cancelled=1`
  };
}
function nk({ config: b }) {
  const w = ek[b.lang], E = fe.useRef(null), [Y, q] = fe.useState(null), [X, y] = fe.useState(null);
  return fe.useEffect(() => {
    let we = !1;
    const Q = `${b.engineUrl.replace(/\/$/, "")}/api/public/v1/salons/${encodeURIComponent(b.salonSlug)}`;
    return fetch(Q, { cache: "no-store" }).then((ae) => {
      if (!ae.ok) throw new Error(`HTTP ${ae.status}`);
      return ae.json();
    }).then((ae) => {
      if (!we) {
        if (!ae.salon) throw new Error("Empty salon response");
        q(ae.salon);
      }
    }).catch((ae) => {
      we || (console.error("[booking] salon fetch failed:", ae), y(w.error));
    }), () => {
      we = !0;
    };
  }, [b.engineUrl, b.salonSlug, w.error]), X ? /* @__PURE__ */ O.jsx("p", { className: "book_note", children: X }) : Y ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsx(
      "button",
      {
        type: "button",
        className: "btn btn_solid",
        onClick: () => {
          var we;
          return (we = E.current) == null ? void 0 : we.open(b.initialService || void 0);
        },
        children: /* @__PURE__ */ O.jsx("span", { children: w.open })
      }
    ),
    /* @__PURE__ */ O.jsx(
      Zw,
      {
        ref: E,
        slug: b.salonSlug,
        salon: Y,
        engineUrl: b.engineUrl,
        successUrl: b.successUrl,
        cancelUrl: b.cancelUrl,
        locale: b.lang === "bg" ? "bg-BG" : "en-US"
      }
    )
  ] }) : /* @__PURE__ */ O.jsx("p", { className: "book_note", children: w.loading });
}
const Kh = document.getElementById("clicka_booking");
if (Kh) {
  const b = tk(Kh);
  Kh.innerHTML = "", T4(Kh).render(/* @__PURE__ */ O.jsx(nk, { config: b }));
}
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = (...b) => b.filter((w, E, Y) => !!w && w.trim() !== "" && Y.indexOf(w) === E).join(" ").trim();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = (b) => b.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (w, E, Y) => Y ? Y.toUpperCase() : E.toLowerCase()
);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = (b) => {
  const w = ak(b);
  return w.charAt(0).toUpperCase() + w.slice(1);
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g4 = {
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
const ik = (b) => {
  for (const w in b)
    if (w.startsWith("aria-") || w === "role" || w === "title")
      return !0;
  return !1;
}, uk = fe.createContext({}), lk = () => fe.useContext(uk), ok = fe.forwardRef(
  ({ color: b, size: w, strokeWidth: E, absoluteStrokeWidth: Y, className: q = "", children: X, iconNode: y, ...we }, Q) => {
    const {
      size: ae = 24,
      strokeWidth: xe = 2,
      absoluteStrokeWidth: J = !1,
      color: pe = "currentColor",
      className: ce = ""
    } = lk() ?? {}, Fe = Y ?? J ? Number(E ?? xe) * 24 / Number(w ?? ae) : E ?? xe;
    return fe.createElement(
      "svg",
      {
        ref: Q,
        ...g4,
        width: w ?? ae ?? g4.width,
        height: w ?? ae ?? g4.height,
        stroke: b ?? pe,
        strokeWidth: Fe,
        className: Ux("lucide", ce, q),
        ...!X && !ik(we) && { "aria-hidden": "true" },
        ...we
      },
      [
        ...y.map(([lt, qe]) => fe.createElement(lt, qe)),
        ...Array.isArray(X) ? X : [X]
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
const Qf = (b, w) => {
  const E = fe.forwardRef(
    ({ className: Y, ...q }, X) => fe.createElement(ok, {
      ref: X,
      iconNode: w,
      className: Ux(
        `lucide-${rk(_x(b))}`,
        `lucide-${b}`,
        Y
      ),
      ...q
    })
  );
  return E.displayName = _x(b), E;
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ck = Qf("check", sk);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], dk = Qf("chevron-down", fk);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], vk = Qf("loader-circle", pk);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], S4 = Qf("plus", mk);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], yk = Qf("user", hk);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], E4 = Qf("x", gk);
function D4(b, w, E) {
  if (E)
    return b.findIndex((q) => q.id === `${w}::${E}`);
  const Y = b.findIndex((q) => q.id === w);
  return Y >= 0 ? Y : b.findIndex((q) => q.id.startsWith(`${w}::`));
}
function Sk(b, w, E, Y) {
  var X, y;
  if ((X = E.variants) != null && X.length) {
    const we = Y ?? ((y = E.variants[0]) == null ? void 0 : y.label), Q = we ? D4(w, E.id, we) : -1;
    return Q >= 0 && b.includes(Q);
  }
  const q = D4(w, E.id);
  return q >= 0 && b.includes(q);
}
function Ek(b, w) {
  const E = b.variants ?? [];
  if (E.length > 0) {
    const Y = w ?? E[0].label, q = E.find((X) => X.label === Y) ?? E[0];
    return {
      price: Number(q.price ?? b.price ?? 0) || 0,
      duration: Math.max(5, Number(q.duration ?? b.duration ?? 30) || 30)
    };
  }
  return {
    price: Number(b.price ?? 0) || 0,
    duration: Math.max(5, Number(b.duration ?? 30) || 30)
  };
}
function xk(b) {
  const { cancelPolicyHours: w, cancelPolicyAction: E, depositAmountEuros: Y } = b, q = w >= 48 ? `${Math.round(w / 24)} дни` : `${w} часа`;
  if (E === "full_refund")
    return `Безплатно отказване до ${q} преди часа. След срока — пълен refund.`;
  if (E === "keep_full")
    return `Безплатно отказване до ${q} преди часа. След срока платената сума не се връща.`;
  const X = Y ? ` (€${Y})` : "";
  return `Безплатно отказване до ${q} преди часа. След срока депозитът${X} се задържа.`;
}
function Ck({
  categories: b,
  selectedId: w,
  onSelect: E,
  size: Y = "md",
  className: q = "",
  accentFill: X = "#111111"
}) {
  if (b.filter((Q) => Q.id != null).length === 0) return null;
  const we = Y === "sm" ? "text-[12px]" : "text-sm";
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `flex items-center gap-4 overflow-x-auto pb-0.5 scrollbar-none ${we} ${q}`.trim(),
      role: "tablist",
      "aria-label": "Категории услуги",
      children: b.map((Q) => {
        const ae = w === Q.id;
        return /* @__PURE__ */ O.jsxs(
          "span",
          {
            role: "tab",
            "aria-selected": ae,
            tabIndex: 0,
            onClick: () => E(Q.id),
            onKeyDown: (xe) => {
              (xe.key === "Enter" || xe.key === " ") && (xe.preventDefault(), E(Q.id));
            },
            className: `relative inline-block shrink-0 cursor-pointer select-none whitespace-nowrap pb-1.5 font-bold text-black transition ${ae ? "" : "hover:opacity-80"}`,
            children: [
              Q.label,
              /* @__PURE__ */ O.jsx(
                "span",
                {
                  "aria-hidden": !0,
                  className: "absolute bottom-0 left-0 h-[2px] rounded-full transition-[width,opacity] duration-200",
                  style: {
                    width: ae ? "100%" : "0%",
                    opacity: ae ? 1 : 0,
                    backgroundImage: X
                  }
                }
              )
            ]
          },
          Q.id ?? "all"
        );
      })
    }
  );
}
function bk({
  serviceName: b,
  dateLabel: w,
  time: E,
  salonName: Y,
  onClose: q
}) {
  const X = O4(), [y, we] = fe.useState(!1);
  return fe.useEffect(() => {
    const Q = setTimeout(() => we(!0), 50);
    return () => clearTimeout(Q);
  }, []), /* @__PURE__ */ O.jsx("div", { className: "flex flex-1 flex-col items-center justify-center px-6 py-10", children: /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: `flex flex-col items-center transition-all duration-700 ease-out ${y ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
      children: [
        /* @__PURE__ */ O.jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: `flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 ease-out ${y ? "scale-100" : "scale-50"}`,
              style: { background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" },
              children: /* @__PURE__ */ O.jsx(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "h-10 w-10",
                  "aria-hidden": !0,
                  children: /* @__PURE__ */ O.jsx(
                    "path",
                    {
                      d: "M5 13l4 4L19 7",
                      stroke: "white",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      className: y ? "animate-[draw_0.5s_ease-out_0.3s_forwards]" : "",
                      style: {
                        strokeDasharray: 24,
                        strokeDashoffset: y ? 0 : 24,
                        transition: "stroke-dashoffset 0.5s ease-out 0.3s"
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-full transition-all duration-700 ease-out ${y ? "scale-150 opacity-0" : "scale-100 opacity-30"}`,
              style: { background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" },
              "aria-hidden": !0
            }
          )
        ] }),
        /* @__PURE__ */ O.jsx(
          "h3",
          {
            className: `text-center text-[22px] font-semibold leading-tight tracking-tight text-[#111] transition-all delay-200 duration-500 ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: X("booking.success.confirmed")
          }
        ),
        /* @__PURE__ */ O.jsxs(
          "p",
          {
            className: `mt-2 text-center text-[15px] leading-relaxed text-black/45 transition-all delay-300 duration-500 ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: [
              X("booking.success.waitingAt"),
              " ",
              /* @__PURE__ */ O.jsx("span", { className: "font-medium text-black/60", children: Y })
            ]
          }
        ),
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `mt-6 w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all delay-[400ms] duration-500 ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: /* @__PURE__ */ O.jsxs("div", { className: "space-y-3 px-5 py-4", children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ O.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/[0.04]", children: /* @__PURE__ */ O.jsxs("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4 text-black/40", "aria-hidden": !0, children: [
                  /* @__PURE__ */ O.jsx("path", { fillRule: "evenodd", d: "M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z", clipRule: "evenodd" }),
                  /* @__PURE__ */ O.jsx("path", { d: "M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" })
                ] }) }),
                /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ O.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: X("booking.success.labelService") }),
                  /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: b })
                ] })
              ] }),
              /* @__PURE__ */ O.jsx("div", { className: "h-px bg-black/[0.05]" }),
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ O.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/[0.04]", children: /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4 text-black/40", "aria-hidden": !0, children: /* @__PURE__ */ O.jsx("path", { fillRule: "evenodd", d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ O.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: X("booking.success.labelWhen") }),
                  /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: X("booking.success.timeFormat", { date: w, time: E }) })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            onClick: q,
            className: `mt-8 w-full max-w-[320px] rounded-full bg-[#111] py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all delay-500 duration-500 active:scale-[0.98] ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: X("booking.success.done")
          }
        )
      ]
    }
  ) });
}
var Vi = "shadow-[0_2px_6px_rgba(0,0,0,0.14),0_10px_32px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.1)]", Xh = "shadow-[0_8px_28px_rgba(0,0,0,0.18)]", x4 = "shadow-[0_2px_10px_rgba(0,0,0,0.08)]", Jh = `mt-1.5 block w-full min-w-0 max-w-full box-border rounded-2xl border border-black/[0.06] bg-white px-3.5 py-3 text-[16px] leading-tight text-[#111] touch-manipulation ${Vi} outline-none transition focus:border-[color:var(--salon-primary)]/40 focus:ring-2 focus:ring-[color:var(--salon-primary)]/12`;
function Rk(b, w) {
  const [E, Y] = b.split(":").map(Number);
  if (!Number.isFinite(E) || !Number.isFinite(Y)) return b;
  const q = E * 60 + Y + w, X = Math.floor(q / 60) % 24, y = q % 60;
  return `${String(X).padStart(2, "0")}:${String(y).padStart(2, "0")}`;
}
function Dx({ text: b }) {
  const w = b == null ? void 0 : b.trim();
  return w ? /* @__PURE__ */ O.jsx("p", { className: "mt-1 line-clamp-3 text-[12px] leading-relaxed text-black/50", children: w }) : null;
}
function Tk({
  open: b,
  primaryColor: w,
  accentGradient: E,
  locale: Y = "bg-BG",
  formatPrice: q,
  serviceCatalog: X,
  services: y,
  categoryTabs: we,
  selectedServiceIdxs: Q,
  selectedDate: ae,
  selectedTime: xe,
  totalDuration: J,
  totalPrice: pe,
  clientName: ce,
  clientPhone: Fe,
  clientEmail: lt,
  notes: qe,
  salonName: Ft,
  termsHref: He,
  privacyHref: ie,
  minDate: Oe,
  maxDate: ge,
  timeSlots: Ke,
  paymentType: De = "none",
  depositAmount: zt,
  cancelPolicyHours: it,
  cancelPolicyAction: ot,
  isSubmitting: Pt,
  bookingError: yt,
  bookingSuccess: Be,
  bookingSuccessDetails: wt,
  onClose: Lt,
  onToggleService: Dt,
  onDateChange: Le,
  onTimeChange: oe,
  onClientNameChange: Ae,
  onClientPhoneChange: de,
  onClientEmailChange: N,
  onNotesChange: P,
  onSubmit: Xe,
  staffMembers: Ve = [],
  selectedStaffMemberId: st,
  onStaffMemberChange: tt,
  directStaffName: ft
}) {
  var Xt;
  const G = O4(), dt = fe.useMemo(
    () => E ?? `linear-gradient(135deg, ${w}, ${w})`,
    [E, w]
  ), At = fe.useMemo(
    () => ({ backgroundImage: dt }),
    [dt]
  ), gn = fe.useMemo(
    () => ({
      border: "1px solid transparent",
      backgroundImage: `linear-gradient(#ffffff, #ffffff), ${dt}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box"
    }),
    [dt]
  ), Sn = fe.useMemo(
    () => q ?? ((B) => `${Number.isInteger(B) ? B : B.toFixed(2)} €`),
    [q]
  ), mt = Ve.length > 0 && !ft, [Nt, Kt] = fe.useState(1), [cn, Gn] = fe.useState(null), [Zr, Hn] = fe.useState(!0), [Dn, En] = fe.useState({}), [Nn, On] = fe.useState(null), Nr = fe.useRef(!1);
  fe.useEffect(() => {
    if (!b) return;
    Kt(1), Gn(null), On(null);
    const B = {};
    for (const ve of X) {
      const $e = ve.variants ?? [];
      $e.length > 0 && (B[ve.id] = $e[0].label);
    }
    En(B);
  }, [b, X]);
  const be = fe.useMemo(() => Q.map((B) => {
    var ve;
    return (ve = y[B]) == null ? void 0 : ve.id;
  }).filter((B) => !!B), [Q, y]), at = fe.useMemo(() => mt ? be.length === 0 ? Ve : Ve.filter(
    (B) => be.every((ve) => B.serviceIds.includes(ve))
  ) : [], [mt, Ve, be]);
  fe.useEffect(() => {
    !mt || at.length !== 1 || tt == null || tt(at[0].id);
  }, [mt, at, tt]), fe.useEffect(() => {
    b && !Nr.current && Hn(Q.length === 0), Nr.current = b;
  }, [b, Q.length]), fe.useEffect(() => {
    Q.length === 0 ? Hn(!0) : Hn(!1);
  }, [Q.length]);
  const Rt = Q.length > 0, Vt = fe.useMemo(
    () => xe ? Rk(xe, Math.max(5, J || 0)) : "",
    [xe, J]
  ), un = fe.useMemo(
    () => Q.map((B) => y[B]).filter((B) => !!B),
    [Q, y]
  ), Z = fe.useMemo(
    () => X.filter((B) => Cx(B, cn)),
    [X, cn]
  );
  fe.useEffect(() => {
    if (!cn) return;
    X.some((ve) => Cx(ve, cn)) || Gn(null);
  }, [X, cn]);
  function ke(B) {
    const ve = B.variants ?? [], $e = ve.length > 0 ? Dn[B.id] ?? ve[0].label : null, Ie = D4(y, B.id, $e);
    Ie < 0 || Dt(Ie);
  }
  const pt = fe.useMemo(() => {
    if (!Oe || !ge) return [];
    const B = [], ve = /* @__PURE__ */ new Date(`${Oe}T12:00:00`), $e = /* @__PURE__ */ new Date(`${ge}T12:00:00`), Ie = new Date(ve);
    for (; Ie <= $e && B.length < 45; ) {
      const Pn = `${Ie.getFullYear()}-${String(Ie.getMonth() + 1).padStart(2, "0")}-${String(Ie.getDate()).padStart(2, "0")}`;
      B.push({
        iso: Pn,
        weekday: Ie.toLocaleDateString(Y, { weekday: "short" }),
        day: Ie.toLocaleDateString(Y, { day: "numeric", month: "short" })
      }), Ie.setDate(Ie.getDate() + 1);
    }
    return B;
  }, [Oe, ge, Y]);
  function Et(B) {
    if (mt) {
      if (B >= 2 && !Rt || B >= 3 && !st || B >= 4 && (!Rt || !xe)) return;
    } else if (B >= 2 && !Rt || B >= 3 && (!Rt || !xe)) return;
    Kt(B);
  }
  const Qt = mt ? [
    { n: 1, label: G("booking.modal.stepService") },
    { n: 2, label: G("booking.modal.stepSpecialist") },
    { n: 3, label: G("booking.modal.stepTime") },
    { n: 4, label: G("booking.modal.stepDetails") }
  ] : [
    { n: 1, label: G("booking.modal.stepService") },
    { n: 2, label: G("booking.modal.stepTime") },
    { n: 3, label: G("booking.modal.stepDetails") }
  ];
  function ln() {
    typeof window < "u" && !window.confirm(G("booking.modal.confirmClose")) || Lt();
  }
  return fe.useEffect(() => {
    if (!b || typeof document > "u") return;
    document.documentElement.style.setProperty("overflow", "hidden"), document.documentElement.style.setProperty("background-color", "#ffffff"), document.body.style.setProperty("overflow", "hidden"), document.body.style.setProperty("position", "fixed"), document.body.style.setProperty("inset", "0"), document.body.style.setProperty("width", "100%"), document.body.style.setProperty("background-color", "#ffffff");
    const B = window.scrollY;
    return document.body.style.setProperty("top", `-${B}px`), () => {
      document.documentElement.style.removeProperty("overflow"), document.documentElement.style.removeProperty("background-color"), document.body.style.removeProperty("overflow"), document.body.style.removeProperty("position"), document.body.style.removeProperty("inset"), document.body.style.removeProperty("width"), document.body.style.removeProperty("background-color"), document.body.style.removeProperty("top"), window.scrollTo(0, B);
    };
  }, [b]), b ? /* @__PURE__ */ O.jsxs("div", { className: "fixed inset-0 z-[110] overflow-hidden bg-white sm:bg-transparent", role: "presentation", children: [
    /* @__PURE__ */ O.jsx("div", { className: "absolute inset-0 hidden bg-black/30 backdrop-blur-sm sm:block", "aria-hidden": !0 }),
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": !0,
        "aria-label": G("booking.modal.ariaLabel"),
        className: "absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[100dvh] w-full max-w-none flex-col overflow-hidden bg-white sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.6rem] sm:bg-white sm:shadow-[0_25px_60px_rgba(0,0,0,0.12)]",
        onClick: (B) => B.stopPropagation(),
        children: [
          /* @__PURE__ */ O.jsx("div", { className: "mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-black/10 sm:hidden", "aria-hidden": !0 }),
          /* @__PURE__ */ O.jsxs("div", { className: "relative z-[1] flex shrink-0 items-center justify-between gap-2 bg-white px-4 pb-3 pt-3.5 sm:px-5", children: [
            /* @__PURE__ */ O.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
              /* @__PURE__ */ O.jsx("h3", { className: "text-[17px] font-semibold tracking-tight text-black", children: ft ? G("booking.modal.titleWithStaff", { name: ft }) : G("booking.modal.titleDefault") }),
              /* @__PURE__ */ O.jsx("div", { className: "flex items-center gap-1.5", children: Qt.map(({ n: B, label: ve }) => {
                const $e = Nt === B, Ie = Nt > B, Pn = mt ? B >= 2 && !Rt || B >= 3 && !st || B >= 4 && (!Rt || !xe) : B >= 2 && !Rt || B >= 3 && (!Rt || !xe);
                return /* @__PURE__ */ O.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: Pn,
                    onClick: () => Et(B),
                    className: `inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2.5 text-[11px] font-bold transition disabled:opacity-20 ${$e || Ie ? `text-white ${Xh}` : `bg-white text-black/50 ${Vi}`}`,
                    style: $e || Ie ? At : void 0,
                    title: ve,
                    "aria-label": G("booking.modal.stepAria", { n: B, label: ve }),
                    children: Ie && !$e ? "✓" : B
                  },
                  `header-step-${B}`
                );
              }) })
            ] }),
            /* @__PURE__ */ O.jsx(
              "button",
              {
                type: "button",
                className: `shrink-0 rounded-full bg-white p-2 text-black/40 transition active:bg-black/[0.03] ${Vi}`,
                onClick: ln,
                "aria-label": G("booking.modal.closeAria"),
                children: /* @__PURE__ */ O.jsx(E4, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ O.jsx("div", { className: "relative z-[1] min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white px-4 py-5 sm:px-5", children: Be ? wt ? /* @__PURE__ */ O.jsx(
            bk,
            {
              serviceName: wt.serviceName,
              dateLabel: wt.dateLabel,
              time: wt.time,
              salonName: Ft,
              onClose: Lt
            }
          ) : /* @__PURE__ */ O.jsx("p", { className: "rounded-2xl bg-emerald-50 px-3.5 py-3 text-sm leading-relaxed text-emerald-700", children: Be }) : /* @__PURE__ */ O.jsxs("form", { id: "salon-booking-form", onSubmit: Xe, className: "min-w-0 space-y-3.5 bg-white", children: [
            Nt === 1 ? /* @__PURE__ */ O.jsx("div", { className: "space-y-3", children: Rt && !Zr ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: G("booking.modal.selectedServices") }),
                /* @__PURE__ */ O.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: G(un.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: un.length }) })
              ] }),
              Q.map((B) => {
                const ve = y[B];
                return ve ? /* @__PURE__ */ O.jsx(
                  "div",
                  {
                    className: `rounded-2xl p-px transition ${x4}`,
                    style: gn,
                    children: /* @__PURE__ */ O.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-[15px] bg-white px-3.5 py-3.5", children: [
                      /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ O.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: ve.name }),
                        /* @__PURE__ */ O.jsx(Dx, { text: ve.description }),
                        /* @__PURE__ */ O.jsxs("p", { className: "mt-1 text-[13px] tabular-nums text-black/70", children: [
                          ve.duration,
                          " ",
                          G("booking.modal.minSuffix"),
                          " · ",
                          Sn(Number(ve.price ?? 0))
                        ] })
                      ] }),
                      /* @__PURE__ */ O.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => Dt(B),
                          className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${Vi}`,
                          "aria-label": G("booking.modal.removeAria"),
                          children: [
                            /* @__PURE__ */ O.jsx(E4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                            G("booking.modal.remove")
                          ]
                        }
                      )
                    ] })
                  },
                  `selected-${ve.id}-${B}`
                ) : null;
              }),
              /* @__PURE__ */ O.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Hn(!0),
                  className: `flex w-full items-center justify-center gap-1.5 rounded-2xl bg-white px-3.5 py-3 text-sm font-semibold text-black ${Vi}`,
                  children: [
                    /* @__PURE__ */ O.jsx(S4, { className: "h-4 w-4", "aria-hidden": !0 }),
                    G("booking.modal.addMoreServices")
                  ]
                }
              )
            ] }) : /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: G("booking.modal.services") }),
                /* @__PURE__ */ O.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: G(Z.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: Z.length }) })
              ] }),
              Rt ? /* @__PURE__ */ O.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Hn(!1),
                  className: "text-[12px] font-semibold text-black underline underline-offset-2",
                  children: G("booking.modal.hideList", { count: un.length })
                }
              ) : null,
              /* @__PURE__ */ O.jsx(
                Ck,
                {
                  categories: we,
                  selectedId: cn,
                  onSelect: Gn,
                  size: "sm",
                  className: "-mx-1 px-1",
                  accentFill: dt
                }
              ),
              Z.map((B) => {
                const ve = B.variants ?? [], $e = ve.length > 0 ? Dn[B.id] ?? ve[0].label : null, Ie = Sk(
                  Q,
                  y,
                  B,
                  $e
                ), { price: Pn, duration: ar } = Ek(B, $e);
                return /* @__PURE__ */ O.jsx(
                  "div",
                  {
                    className: `rounded-2xl transition ${Ie ? `p-px ${x4}` : `bg-white ${Vi}`}`,
                    style: Ie ? gn : void 0,
                    children: /* @__PURE__ */ O.jsxs(
                      "div",
                      {
                        className: `flex items-start justify-between gap-3 ${Ie ? "rounded-[15px] bg-white px-3.5 py-3.5" : "px-3.5 py-3.5"}`,
                        children: [
                          /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ O.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: B.name }),
                            /* @__PURE__ */ O.jsx(Dx, { text: B.description }),
                            ve.length > 0 ? /* @__PURE__ */ O.jsxs("div", { className: "relative mt-1.5 max-w-full", children: [
                              /* @__PURE__ */ O.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => On(
                                    (zn) => zn === B.id ? null : B.id
                                  ),
                                  className: "flex w-full items-center justify-between rounded-full border border-black/12 bg-white px-3 py-1.5 text-left text-xs transition hover:border-black/25",
                                  children: [
                                    /* @__PURE__ */ O.jsx("span", { className: "truncate", children: $e }),
                                    /* @__PURE__ */ O.jsx(dk, { className: "ml-1 h-3.5 w-3.5 shrink-0 text-black/45", "aria-hidden": !0 })
                                  ]
                                }
                              ),
                              Nn === B.id ? /* @__PURE__ */ O.jsx("div", { className: "absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]", children: ve.map((zn) => /* @__PURE__ */ O.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    En((ya) => ({
                                      ...ya,
                                      [B.id]: zn.label
                                    })), On(null);
                                  },
                                  className: `w-full px-3 py-2 text-left text-xs hover:bg-black/[0.04] ${$e === zn.label ? "font-semibold text-black" : "text-black/70"}`,
                                  children: [
                                    zn.label,
                                    " · ",
                                    Sn(Number(zn.price) || 0)
                                  ]
                                },
                                zn.label
                              )) }) : null
                            ] }) : null,
                            /* @__PURE__ */ O.jsxs("p", { className: "mt-1.5 text-[13px] tabular-nums text-black/45", children: [
                              ar,
                              " ",
                              G("booking.modal.minSuffix"),
                              " · ",
                              Sn(Number(Pn) || 0)
                            ] })
                          ] }),
                          Ie ? /* @__PURE__ */ O.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ke(B),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${Vi}`,
                              "aria-label": G("booking.modal.removeAria"),
                              children: [
                                /* @__PURE__ */ O.jsx(E4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                G("booking.modal.remove")
                              ]
                            }
                          ) : /* @__PURE__ */ O.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ke(B),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white transition ${Xh}`,
                              style: At,
                              children: [
                                /* @__PURE__ */ O.jsx(S4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                G("booking.modal.add")
                              ]
                            }
                          )
                        ]
                      }
                    )
                  },
                  B.id
                );
              }),
              Z.length === 0 ? /* @__PURE__ */ O.jsx("p", { className: `rounded-2xl bg-white px-3.5 py-3 text-sm text-black/40 ${Vi}`, children: G("booking.modal.noServicesInCategory") }) : null
            ] }) }) : null,
            Nt === 2 && mt ? /* @__PURE__ */ O.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: G("booking.modal.selectSpecialist") }),
              be.length > 0 && /* @__PURE__ */ O.jsxs("p", { className: "text-[12px] text-black/45", children: [
                G("booking.modal.availableFor"),
                " ",
                /* @__PURE__ */ O.jsx("span", { className: "font-medium text-black/70", children: be.map((B) => {
                  var ve;
                  return ((ve = X.find(($e) => $e.id === B)) == null ? void 0 : ve.name) ?? B;
                }).join(" + ") })
              ] }),
              at.length === 0 ? /* @__PURE__ */ O.jsxs("div", { className: `rounded-2xl bg-white px-4 py-5 text-center ${Vi}`, children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[14px] font-medium text-black/50", children: G("booking.modal.serviceUnavailable") }),
                /* @__PURE__ */ O.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => Kt(1),
                    className: "mt-3 text-[13px] font-semibold text-[color:var(--salon-primary)] underline underline-offset-2",
                    children: G("booking.modal.selectOtherService")
                  }
                )
              ] }) : /* @__PURE__ */ O.jsx("div", { className: "space-y-2.5", children: at.map((B) => {
                const ve = st === B.id;
                return /* @__PURE__ */ O.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => tt == null ? void 0 : tt(B.id),
                    className: `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition ${ve ? `p-px ${x4}` : `bg-white ${Vi}`}`,
                    style: ve ? gn : void 0,
                    children: [
                      ve ? /* @__PURE__ */ O.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white", style: At, children: /* @__PURE__ */ O.jsx(ck, { className: "h-4 w-4", "aria-hidden": !0 }) }) : /* @__PURE__ */ O.jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black/30 ${Vi}`, children: /* @__PURE__ */ O.jsx(yk, { className: "h-4 w-4", "aria-hidden": !0 }) }),
                      /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ O.jsx("p", { className: "text-[15px] font-semibold text-black", children: B.name }),
                        B.bio && /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 truncate text-[12px] text-black/45", children: B.bio })
                      ] })
                    ]
                  },
                  B.id
                );
              }) })
            ] }) : null,
            mt && Nt === 3 || !mt && Nt === 2 ? /* @__PURE__ */ O.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: st ? G("booking.modal.timeWithStaff", { name: ((Xt = Ve.find((B) => B.id === st)) == null ? void 0 : Xt.name) ?? "" }) : G("booking.modal.dateTime") }),
                /* @__PURE__ */ O.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => Kt(1),
                    className: `inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--salon-primary)] ${Vi} active:bg-black/[0.03]`,
                    children: [
                      /* @__PURE__ */ O.jsx(S4, { className: "h-3.5 w-3.5" }),
                      G("booking.modal.addService")
                    ]
                  }
                )
              ] }),
              Rt ? /* @__PURE__ */ O.jsx("p", { className: "text-[15px] font-semibold text-black", children: un.map((B) => B.name).join(" + ") }) : null,
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.date") }),
                /* @__PURE__ */ O.jsx("div", { className: "-mx-1 mt-2 flex gap-2.5 overflow-x-auto px-1 pb-1.5 scrollbar-none", children: pt.map((B) => {
                  const ve = ae === B.iso;
                  return /* @__PURE__ */ O.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => Le(B.iso),
                      className: `flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-2xl text-center transition ${ve ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black/60 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]"}`,
                      style: ve ? { backgroundColor: "#000" } : void 0,
                      children: [
                        /* @__PURE__ */ O.jsx("span", { className: "text-[10px] font-medium uppercase leading-none tabular-nums opacity-75", children: B.weekday }),
                        /* @__PURE__ */ O.jsx("span", { className: "mt-1 text-[12px] font-bold leading-tight tabular-nums", children: B.day })
                      ]
                    },
                    B.iso
                  );
                }) })
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.time") }),
                ae ? Ke === "closed" ? /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: G("booking.modal.dayClosed") }) : Array.isArray(Ke) && Ke.length === 0 ? /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: G("booking.modal.noSlots") }) : Array.isArray(Ke) ? /* @__PURE__ */ O.jsx("div", { className: "mt-2 grid w-full max-w-full grid-cols-3 gap-2.5 sm:grid-cols-4", children: Ke.map((B) => {
                  const ve = xe === B;
                  return /* @__PURE__ */ O.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => oe(B),
                      className: `min-w-0 touch-manipulation rounded-2xl px-2 py-3 text-center text-[14px] font-semibold tabular-nums transition ${ve ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]" : "border border-black/[0.08] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)] active:bg-black/[0.03] active:shadow-[0_1px_2px_rgba(0,0,0,0.10)]"}`,
                      style: ve ? { backgroundColor: "#000" } : void 0,
                      children: B
                    },
                    B
                  );
                }) }) : /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: G("booking.modal.selectServiceFirst") }) : /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: G("booking.modal.selectDateFirst") })
              ] })
            ] }) : null,
            mt && Nt === 4 || !mt && Nt === 3 ? /* @__PURE__ */ O.jsxs("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: G("booking.modal.contactDetails") }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.name") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    className: Jh,
                    value: ce,
                    onChange: (B) => Ae(B.target.value),
                    autoComplete: "name",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.phone") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    type: "tel",
                    className: Jh,
                    value: Fe,
                    onChange: (B) => de(B.target.value),
                    autoComplete: "tel",
                    inputMode: "tel",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.email") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    type: "email",
                    inputMode: "email",
                    autoComplete: "email",
                    className: Jh,
                    value: lt,
                    onChange: (B) => N(B.target.value),
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: G("booking.modal.notes") }),
                /* @__PURE__ */ O.jsx(
                  "textarea",
                  {
                    className: `${Jh} resize-none`,
                    rows: 2,
                    value: qe,
                    onChange: (B) => P(B.target.value)
                  }
                )
              ] })
            ] }) : null,
            yt ? /* @__PURE__ */ O.jsx("p", { className: "rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700", role: "alert", children: yt }) : null
          ] }) }),
          !Be && !wt ? /* @__PURE__ */ O.jsxs("div", { className: "relative z-[2] shrink-0 border-t border-black/[0.06] bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-5", children: [
            Rt ? /* @__PURE__ */ O.jsxs("div", { className: "mb-3 px-1", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] tabular-nums text-black/50", children: G("booking.modal.totalDuration", { min: Math.max(0, J) }) }),
              /* @__PURE__ */ O.jsx("p", { className: "text-[17px] font-semibold tabular-nums text-black/70 leading-tight", children: G("booking.modal.totalPrice", { price: Sn(pe) }) }),
              xe ? /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[13px] font-semibold tabular-nums text-black", children: G("booking.modal.startTime", { start: xe, end: Vt }) }) : Nt > 1 ? /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 truncate text-[13px] font-semibold text-black", children: un.map((B) => B.name).join(" + ") }) : null
            ] }) : null,
            Nt === 3 && De !== "none" && /* @__PURE__ */ O.jsxs("div", { className: "mb-2.5 space-y-1 text-center", children: [
              /* @__PURE__ */ O.jsxs("p", { className: "flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[#635BFF]", children: [
                /* @__PURE__ */ O.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 60 60", fill: "none", "aria-hidden": !0, children: [
                  /* @__PURE__ */ O.jsx("rect", { width: "60", height: "60", rx: "8", fill: "#635BFF" }),
                  /* @__PURE__ */ O.jsx("path", { d: "M27.5 22.5c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.4 2.7v-9.8c-3.5-1.4-7-2-10.4-2C23.1 11 18 15.2 18 22.9c0 12.1 16.6 10.2 16.6 15.4 0 2-1.7 2.7-4.1 2.7-3.5 0-8-1.5-11.5-3.5v9.9c3.9 1.7 7.9 2.4 11.5 2.4 8.8 0 14.8-4.3 14.8-12.2C45.3 25.4 27.5 27.6 27.5 22.5z", fill: "white" })
                ] }),
                De === "deposit" && zt && zt > 0 ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                  G("booking.modal.depositRequired"),
                  " ",
                  /* @__PURE__ */ O.jsx("strong", { className: "mx-0.5", children: Sn(Number(zt) || 0) })
                ] }) : /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                  G("booking.modal.paymentFrom"),
                  " ",
                  /* @__PURE__ */ O.jsx("strong", { className: "mx-0.5", children: Sn(pe) })
                ] })
              ] }),
              /* @__PURE__ */ O.jsxs("p", { className: "text-[11px] text-black/35", children: [
                G("booking.modal.securePayment"),
                " ",
                /* @__PURE__ */ O.jsx("span", { className: "font-bold text-[#635BFF]", children: "Stripe" })
              ] }),
              it ? /* @__PURE__ */ O.jsx("p", { className: "mx-auto max-w-[320px] text-[11px] leading-relaxed text-black/45", children: xk({
                cancelPolicyHours: it,
                cancelPolicyAction: ot ?? "keep_deposit",
                depositAmountEuros: zt
              }) }) : null
            ] }),
            (() => {
              const B = mt ? 4 : 3, ve = Nt === B, $e = Nt === 1 && !Rt || mt && Nt === 2 && (!st || at.length === 0) || (mt ? Nt === 3 : Nt === 2) && (!ae || !xe);
              return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                /* @__PURE__ */ O.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ O.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => Kt((Ie) => Ie > 1 ? Ie - 1 : Ie),
                      disabled: Nt === 1,
                      className: "rounded-full border border-black/10 bg-white py-2.5 text-[14px] font-medium text-black/60 transition disabled:opacity-25 active:scale-[0.98]",
                      children: G("booking.modal.back")
                    }
                  ),
                  ve ? /* @__PURE__ */ O.jsxs(
                    "button",
                    {
                      type: "submit",
                      form: "salon-booking-form",
                      disabled: Pt || !xe || !Rt,
                      className: `flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${Xh}`,
                      style: At,
                      children: [
                        Pt ? /* @__PURE__ */ O.jsx(vk, { className: "h-4 w-4 animate-spin", "aria-hidden": !0 }) : null,
                        G(De !== "none" ? "booking.modal.payAndBook" : "booking.modal.sendRequest")
                      ]
                    }
                  ) : /* @__PURE__ */ O.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        $e || Kt((Ie) => Ie < B ? Ie + 1 : Ie);
                      },
                      disabled: $e,
                      className: `rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${Xh}`,
                      style: At,
                      children: G("booking.modal.continue")
                    }
                  )
                ] }),
                ve ? /* @__PURE__ */ O.jsxs("p", { className: "mt-2.5 text-center text-[10.5px] leading-snug text-black/35", children: [
                  G("booking.modal.disclaimerPre"),
                  " ",
                  G("booking.modal.disclaimerAccept"),
                  " ",
                  /* @__PURE__ */ O.jsx("a", { href: He, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: G("booking.modal.terms") }),
                  " ",
                  G("booking.modal.smsConsentAnd"),
                  " ",
                  /* @__PURE__ */ O.jsx("a", { href: ie, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: G("booking.modal.privacy") }),
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
const wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SalonBookingModal: Tk
}, Symbol.toStringTag, { value: "Module" }));
