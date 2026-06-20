var x4 = { exports: {} }, Zp = {}, C4 = { exports: {} }, Bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function CT() {
  if (fx) return Bt;
  fx = 1;
  var C = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), y = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), K = Symbol.iterator;
  function de(N) {
    return N === null || typeof N != "object" ? null : (N = K && N[K] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, be = Object.assign, lt = {};
  function qe(N, P, Xe) {
    this.props = N, this.context = P, this.refs = lt, this.updater = Xe || se;
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
    this.props = N, this.context = P, this.refs = lt, this.updater = Xe || se;
  }
  var ie = He.prototype = new Ft();
  ie.constructor = He, be(ie, qe.prototype), ie.isPureReactComponent = !0;
  var Me = Array.isArray, Se = Object.prototype.hasOwnProperty, Ke = { current: null }, De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function jt(N, P, Xe) {
    var Ve, st = {}, tt = null, ft = null;
    if (P != null) for (Ve in P.ref !== void 0 && (ft = P.ref), P.key !== void 0 && (tt = "" + P.key), P) Se.call(P, Ve) && !De.hasOwnProperty(Ve) && (st[Ve] = P[Ve]);
    var q = arguments.length - 2;
    if (q === 1) st.children = Xe;
    else if (1 < q) {
      for (var dt = Array(q), At = 0; At < q; At++) dt[At] = arguments[At + 2];
      st.children = dt;
    }
    if (N && N.defaultProps) for (Ve in q = N.defaultProps, q) st[Ve] === void 0 && (st[Ve] = q[Ve]);
    return { $$typeof: C, type: N, key: tt, ref: ft, props: st, _owner: Ke.current };
  }
  function it(N, P) {
    return { $$typeof: C, type: N.type, key: P, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ot(N) {
    return typeof N == "object" && N !== null && N.$$typeof === C;
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
  function Tt(N, P, Xe, Ve, st) {
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
          case C:
          case T:
            ft = !0;
        }
    }
    if (ft) return ft = N, st = st(ft), N = Ve === "" ? "." + Be(ft, 0) : Ve, Me(st) ? (Xe = "", N != null && (Xe = N.replace(yt, "$&/") + "/"), Tt(st, P, Xe, "", function(At) {
      return At;
    })) : st != null && (ot(st) && (st = it(st, Xe + (!st.key || ft && ft.key === st.key ? "" : ("" + st.key).replace(yt, "$&/") + "/") + N)), P.push(st)), 1;
    if (ft = 0, Ve = Ve === "" ? "." : Ve + ":", Me(N)) for (var q = 0; q < N.length; q++) {
      tt = N[q];
      var dt = Ve + Be(tt, q);
      ft += Tt(tt, P, Xe, dt, st);
    }
    else if (dt = de(N), typeof dt == "function") for (N = dt.call(N), q = 0; !(tt = N.next()).done; ) tt = tt.value, dt = Ve + Be(tt, q++), ft += Tt(tt, P, Xe, dt, st);
    else if (tt === "object") throw P = String(N), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function Lt(N, P, Xe) {
    if (N == null) return N;
    var Ve = [], st = 0;
    return Tt(N, Ve, "", "", function(tt) {
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
  var Ae = { current: null }, oe = { transition: null }, Ue = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: oe, ReactCurrentOwner: Ke };
  function pe() {
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
  } }, Bt.Component = qe, Bt.Fragment = E, Bt.Profiler = G, Bt.PureComponent = He, Bt.StrictMode = $, Bt.Suspense = W, Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ue, Bt.act = pe, Bt.cloneElement = function(N, P, Xe) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var Ve = be({}, N.props), st = N.key, tt = N.ref, ft = N._owner;
    if (P != null) {
      if (P.ref !== void 0 && (tt = P.ref, ft = Ke.current), P.key !== void 0 && (st = "" + P.key), N.type && N.type.defaultProps) var q = N.type.defaultProps;
      for (dt in P) Se.call(P, dt) && !De.hasOwnProperty(dt) && (Ve[dt] = P[dt] === void 0 && q !== void 0 ? q[dt] : P[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Ve.children = Xe;
    else if (1 < dt) {
      q = Array(dt);
      for (var At = 0; At < dt; At++) q[At] = arguments[At + 2];
      Ve.children = q;
    }
    return { $$typeof: C, type: N.type, key: st, ref: tt, props: Ve, _owner: ft };
  }, Bt.createContext = function(N) {
    return N = { $$typeof: y, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: J, _context: N }, N.Consumer = N;
  }, Bt.createElement = jt, Bt.createFactory = function(N) {
    var P = jt.bind(null, N);
    return P.type = N, P;
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(N) {
    return { $$typeof: Oe, render: N };
  }, Bt.isValidElement = ot, Bt.lazy = function(N) {
    return { $$typeof: ve, _payload: { _status: -1, _result: N }, _init: Dt };
  }, Bt.memo = function(N, P) {
    return { $$typeof: ne, type: N, compare: P === void 0 ? null : P };
  }, Bt.startTransition = function(N) {
    var P = oe.transition;
    oe.transition = {};
    try {
      N();
    } finally {
      oe.transition = P;
    }
  }, Bt.unstable_act = pe, Bt.useCallback = function(N, P) {
    return Ae.current.useCallback(N, P);
  }, Bt.useContext = function(N) {
    return Ae.current.useContext(N);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(N) {
    return Ae.current.useDeferredValue(N);
  }, Bt.useEffect = function(N, P) {
    return Ae.current.useEffect(N, P);
  }, Bt.useId = function() {
    return Ae.current.useId();
  }, Bt.useImperativeHandle = function(N, P, Xe) {
    return Ae.current.useImperativeHandle(N, P, Xe);
  }, Bt.useInsertionEffect = function(N, P) {
    return Ae.current.useInsertionEffect(N, P);
  }, Bt.useLayoutEffect = function(N, P) {
    return Ae.current.useLayoutEffect(N, P);
  }, Bt.useMemo = function(N, P) {
    return Ae.current.useMemo(N, P);
  }, Bt.useReducer = function(N, P, Xe) {
    return Ae.current.useReducer(N, P, Xe);
  }, Bt.useRef = function(N) {
    return Ae.current.useRef(N);
  }, Bt.useState = function(N) {
    return Ae.current.useState(N);
  }, Bt.useSyncExternalStore = function(N, P, Xe) {
    return Ae.current.useSyncExternalStore(N, P, Xe);
  }, Bt.useTransition = function() {
    return Ae.current.useTransition();
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
var dx;
function bT() {
  return dx || (dx = 1, function(C, T) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", $ = Symbol.for("react.element"), G = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), ne = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), qe = Symbol.iterator, Ft = "@@iterator";
      function He(m) {
        if (m === null || typeof m != "object")
          return null;
        var b = qe && m[qe] || m[Ft];
        return typeof b == "function" ? b : null;
      }
      var ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Me = {
        transition: null
      }, Se = {
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
      }, De = {}, jt = null;
      function it(m) {
        jt = m;
      }
      De.setExtraStackFrame = function(m) {
        jt = m;
      }, De.getCurrentStack = null, De.getStackAddendum = function() {
        var m = "";
        jt && (m += jt);
        var b = De.getCurrentStack;
        return b && (m += b() || ""), m;
      };
      var ot = !1, Pt = !1, yt = !1, Be = !1, Tt = !1, Lt = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: Me,
        ReactCurrentOwner: Ke
      };
      Lt.ReactDebugCurrentFrame = De, Lt.ReactCurrentActQueue = Se;
      function Dt(m) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), V = 1; V < b; V++)
            j[V - 1] = arguments[V];
          oe("warn", m, j);
        }
      }
      function Ae(m) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), V = 1; V < b; V++)
            j[V - 1] = arguments[V];
          oe("error", m, j);
        }
      }
      function oe(m, b, j) {
        {
          var V = Lt.ReactDebugCurrentFrame, ce = V.getStackAddendum();
          ce !== "" && (b += "%s", j = j.concat([ce]));
          var Je = j.map(function(ye) {
            return String(ye);
          });
          Je.unshift("Warning: " + b), Function.prototype.apply.call(console[m], console, Je);
        }
      }
      var Ue = {};
      function pe(m, b) {
        {
          var j = m.constructor, V = j && (j.displayName || j.name) || "ReactClass", ce = V + "." + b;
          if (Ue[ce])
            return;
          Ae("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", b, V), Ue[ce] = !0;
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
        enqueueForceUpdate: function(m, b, j) {
          pe(m, "forceUpdate");
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
        enqueueReplaceState: function(m, b, j, V) {
          pe(m, "replaceState");
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
        enqueueSetState: function(m, b, j, V) {
          pe(m, "setState");
        }
      }, P = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Ve(m, b, j) {
        this.props = m, this.context = b, this.refs = Xe, this.updater = j || N;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(m, b) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, b, "setState");
      }, Ve.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var st = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(m, b) {
          Object.defineProperty(Ve.prototype, m, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", b[0], b[1]);
            }
          });
        };
        for (var ft in st)
          st.hasOwnProperty(ft) && tt(ft, st[ft]);
      }
      function q() {
      }
      q.prototype = Ve.prototype;
      function dt(m, b, j) {
        this.props = m, this.context = b, this.refs = Xe, this.updater = j || N;
      }
      var At = dt.prototype = new q();
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
          var b = typeof Symbol == "function" && Symbol.toStringTag, j = b && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return j;
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
          return Ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(m)), cn(m);
      }
      function Zr(m, b, j) {
        var V = m.displayName;
        if (V)
          return V;
        var ce = b.displayName || b.name || "";
        return ce !== "" ? j + "(" + ce + ")" : j;
      }
      function Hn(m) {
        return m.displayName || "Context";
      }
      function Dn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && Ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case J:
            return "Fragment";
          case G:
            return "Portal";
          case Oe:
            return "Profiler";
          case y:
            return "StrictMode";
          case K:
            return "Suspense";
          case de:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case ne:
              var b = m;
              return Hn(b) + ".Consumer";
            case W:
              var j = m;
              return Hn(j._context) + ".Provider";
            case ve:
              return Zr(m, m.render, "ForwardRef");
            case se:
              var V = m.displayName || null;
              return V !== null ? V : Dn(m.type) || "Memo";
            case be: {
              var ce = m, Je = ce._payload, ye = ce._init;
              try {
                return Dn(ye(Je));
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
      }, On, Nr, we;
      we = {};
      function at(m) {
        if (En.call(m, "ref")) {
          var b = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function wt(m) {
        if (En.call(m, "key")) {
          var b = Object.getOwnPropertyDescriptor(m, "key").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function Vt(m, b) {
        var j = function() {
          On || (On = !0, Ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: j,
          configurable: !0
        });
      }
      function un(m, b) {
        var j = function() {
          Nr || (Nr = !0, Ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: j,
          configurable: !0
        });
      }
      function Z(m) {
        if (typeof m.ref == "string" && Ke.current && m.__self && Ke.current.stateNode !== m.__self) {
          var b = Dn(Ke.current.type);
          we[b] || (Ae('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b, m.ref), we[b] = !0);
        }
      }
      var ke = function(m, b, j, V, ce, Je, ye) {
        var nt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: $,
          // Built-in properties that belong on the element
          type: m,
          key: b,
          ref: j,
          props: ye,
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
          value: ce
        }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
      };
      function pt(m, b, j) {
        var V, ce = {}, Je = null, ye = null, nt = null, zt = null;
        if (b != null) {
          at(b) && (ye = b.ref, Z(b)), wt(b) && (Gn(b.key), Je = "" + b.key), nt = b.__self === void 0 ? null : b.__self, zt = b.__source === void 0 ? null : b.__source;
          for (V in b)
            En.call(b, V) && !Nn.hasOwnProperty(V) && (ce[V] = b[V]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ce.children = j;
        else if (qt > 1) {
          for (var Cn = Array(qt), dn = 0; dn < qt; dn++)
            Cn[dn] = arguments[dn + 2];
          Object.freeze && Object.freeze(Cn), ce.children = Cn;
        }
        if (m && m.defaultProps) {
          var _t = m.defaultProps;
          for (V in _t)
            ce[V] === void 0 && (ce[V] = _t[V]);
        }
        if (Je || ye) {
          var pn = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Je && Vt(ce, pn), ye && un(ce, pn);
        }
        return ke(m, Je, ye, nt, zt, Ke.current, ce);
      }
      function Et(m, b) {
        var j = ke(m.type, b, m.ref, m._self, m._source, m._owner, m.props);
        return j;
      }
      function Qt(m, b, j) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var V, ce = P({}, m.props), Je = m.key, ye = m.ref, nt = m._self, zt = m._source, qt = m._owner;
        if (b != null) {
          at(b) && (ye = b.ref, qt = Ke.current), wt(b) && (Gn(b.key), Je = "" + b.key);
          var Cn;
          m.type && m.type.defaultProps && (Cn = m.type.defaultProps);
          for (V in b)
            En.call(b, V) && !Nn.hasOwnProperty(V) && (b[V] === void 0 && Cn !== void 0 ? ce[V] = Cn[V] : ce[V] = b[V]);
        }
        var dn = arguments.length - 2;
        if (dn === 1)
          ce.children = j;
        else if (dn > 1) {
          for (var _t = Array(dn), pn = 0; pn < dn; pn++)
            _t[pn] = arguments[pn + 2];
          ce.children = _t;
        }
        return ke(m.type, Je, ye, nt, zt, qt, ce);
      }
      function ln(m) {
        return typeof m == "object" && m !== null && m.$$typeof === $;
      }
      var Xt = ".", B = ":";
      function me(m) {
        var b = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, V = m.replace(b, function(ce) {
          return j[ce];
        });
        return "$" + V;
      }
      var $e = !1, Ie = /\/+/g;
      function Pn(m) {
        return m.replace(Ie, "$&/");
      }
      function ar(m, b) {
        return typeof m == "object" && m !== null && m.key != null ? (Gn(m.key), me("" + m.key)) : b.toString(36);
      }
      function jn(m, b, j, V, ce) {
        var Je = typeof m;
        (Je === "undefined" || Je === "boolean") && (m = null);
        var ye = !1;
        if (m === null)
          ye = !0;
        else
          switch (Je) {
            case "string":
            case "number":
              ye = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case $:
                case G:
                  ye = !0;
              }
          }
        if (ye) {
          var nt = m, zt = ce(nt), qt = V === "" ? Xt + ar(nt, 0) : V;
          if (mt(zt)) {
            var Cn = "";
            qt != null && (Cn = Pn(qt) + "/"), jn(zt, b, Cn, "", function(Xf) {
              return Xf;
            });
          } else zt != null && (ln(zt) && (zt.key && (!nt || nt.key !== zt.key) && Gn(zt.key), zt = Et(
            zt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (zt.key && (!nt || nt.key !== zt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Pn("" + zt.key) + "/"
            ) : "") + qt
          )), b.push(zt));
          return 1;
        }
        var dn, _t, pn = 0, Mn = V === "" ? Xt : V + B;
        if (mt(m))
          for (var Ru = 0; Ru < m.length; Ru++)
            dn = m[Ru], _t = Mn + ar(dn, Ru), pn += jn(dn, b, j, _t, ce);
        else {
          var Ko = He(m);
          if (typeof Ko == "function") {
            var Qi = m;
            Ko === Qi.entries && ($e || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $e = !0);
            for (var Xo = Ko.call(Qi), sl, Kf = 0; !(sl = Xo.next()).done; )
              dn = sl.value, _t = Mn + ar(dn, Kf++), pn += jn(dn, b, j, _t, ce);
          } else if (Je === "object") {
            var sc = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pn;
      }
      function ya(m, b, j) {
        if (m == null)
          return m;
        var V = [], ce = 0;
        return jn(m, V, "", "", function(Je) {
          return b.call(j, Je, ce++);
        }), V;
      }
      function $i(m) {
        var b = 0;
        return ya(m, function() {
          b++;
        }), b;
      }
      function Ii(m, b, j) {
        ya(m, function() {
          b.apply(this, arguments);
        }, j);
      }
      function Ka(m) {
        return ya(m, function(b) {
          return b;
        }) || [];
      }
      function vi(m) {
        if (!ln(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function nl(m) {
        var b = {
          $$typeof: ne,
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
        b.Provider = {
          $$typeof: W,
          _context: b
        };
        var j = !1, V = !1, ce = !1;
        {
          var Je = {
            $$typeof: ne,
            _context: b
          };
          Object.defineProperties(Je, {
            Provider: {
              get: function() {
                return V || (V = !0, Ae("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), b.Provider;
              },
              set: function(ye) {
                b.Provider = ye;
              }
            },
            _currentValue: {
              get: function() {
                return b._currentValue;
              },
              set: function(ye) {
                b._currentValue = ye;
              }
            },
            _currentValue2: {
              get: function() {
                return b._currentValue2;
              },
              set: function(ye) {
                b._currentValue2 = ye;
              }
            },
            _threadCount: {
              get: function() {
                return b._threadCount;
              },
              set: function(ye) {
                b._threadCount = ye;
              }
            },
            Consumer: {
              get: function() {
                return j || (j = !0, Ae("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), b.Consumer;
              }
            },
            displayName: {
              get: function() {
                return b.displayName;
              },
              set: function(ye) {
                ce || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ye), ce = !0);
              }
            }
          }), b.Consumer = Je;
        }
        return b._currentRenderer = null, b._currentRenderer2 = null, b;
      }
      var Ur = -1, zr = 0, mr = 1, mi = 2;
      function Xa(m) {
        if (m._status === Ur) {
          var b = m._result, j = b();
          if (j.then(function(Je) {
            if (m._status === zr || m._status === Ur) {
              var ye = m;
              ye._status = mr, ye._result = Je;
            }
          }, function(Je) {
            if (m._status === zr || m._status === Ur) {
              var ye = m;
              ye._status = mi, ye._result = Je;
            }
          }), m._status === Ur) {
            var V = m;
            V._status = zr, V._result = j;
          }
        }
        if (m._status === mr) {
          var ce = m._result;
          return ce === void 0 && Ae(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || Ae(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw m._result;
      }
      function hi(m) {
        var b = {
          // We use these fields to store the result.
          _status: Ur,
          _result: m
        }, j = {
          $$typeof: be,
          _payload: b,
          _init: Xa
        };
        {
          var V, ce;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(Je) {
                Ae("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = Je, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Je) {
                Ae("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Je, Object.defineProperty(j, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return j;
      }
      function yi(m) {
        m != null && m.$$typeof === se ? Ae("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? Ae("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && Ae("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && Ae("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var b = {
          $$typeof: ve,
          render: m
        };
        {
          var j;
          Object.defineProperty(b, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(V) {
              j = V, !m.name && !m.displayName && (m.displayName = V);
            }
          });
        }
        return b;
      }
      var w;
      w = Symbol.for("react.module.reference");
      function X(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === J || m === Oe || Tt || m === y || m === K || m === de || Be || m === lt || ot || Pt || yt || typeof m == "object" && m !== null && (m.$$typeof === be || m.$$typeof === se || m.$$typeof === W || m.$$typeof === ne || m.$$typeof === ve || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === w || m.getModuleId !== void 0));
      }
      function ge(m, b) {
        X(m) || Ae("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var j = {
          $$typeof: se,
          type: m,
          compare: b === void 0 ? null : b
        };
        {
          var V;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(ce) {
              V = ce, !m.name && !m.displayName && (m.displayName = ce);
            }
          });
        }
        return j;
      }
      function Le() {
        var m = ie.current;
        return m === null && Ae(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Ct(m) {
        var b = Le();
        if (m._context !== void 0) {
          var j = m._context;
          j.Consumer === m ? Ae("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === m && Ae("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return b.useContext(m);
      }
      function gt(m) {
        var b = Le();
        return b.useState(m);
      }
      function Ut(m, b, j) {
        var V = Le();
        return V.useReducer(m, b, j);
      }
      function Ot(m) {
        var b = Le();
        return b.useRef(m);
      }
      function Bn(m, b) {
        var j = Le();
        return j.useEffect(m, b);
      }
      function xn(m, b) {
        var j = Le();
        return j.useInsertionEffect(m, b);
      }
      function wn(m, b) {
        var j = Le();
        return j.useLayoutEffect(m, b);
      }
      function hr(m, b) {
        var j = Le();
        return j.useCallback(m, b);
      }
      function Ja(m, b) {
        var j = Le();
        return j.useMemo(m, b);
      }
      function Za(m, b, j) {
        var V = Le();
        return V.useImperativeHandle(m, b, j);
      }
      function bt(m, b) {
        {
          var j = Le();
          return j.useDebugValue(m, b);
        }
      }
      function kt() {
        var m = Le();
        return m.useTransition();
      }
      function ei(m) {
        var b = Le();
        return b.useDeferredValue(m);
      }
      function rl() {
        var m = Le();
        return m.useId();
      }
      function al(m, b, j) {
        var V = Le();
        return V.useSyncExternalStore(m, b, j);
      }
      var gu = 0, Gl, Su, ea, Wo, jr, lc, oc;
      function ql() {
      }
      ql.__reactDisabledLog = !0;
      function Eu() {
        {
          if (gu === 0) {
            Gl = console.log, Su = console.info, ea = console.warn, Wo = console.error, jr = console.group, lc = console.groupCollapsed, oc = console.groupEnd;
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
                value: jr
              }),
              groupCollapsed: P({}, m, {
                value: lc
              }),
              groupEnd: P({}, m, {
                value: oc
              })
            });
          }
          gu < 0 && Ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = Lt.ReactCurrentDispatcher, ni;
      function Kl(m, b, j) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (ce) {
              var V = ce.stack.trim().match(/\n( *(at )?)/);
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
      function Jl(m, b) {
        if (!m || il)
          return "";
        {
          var j = xu.get(m);
          if (j !== void 0)
            return j;
        }
        var V;
        il = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = ti.current, ti.current = null, Eu();
        try {
          if (b) {
            var ye = function() {
              throw Error();
            };
            if (Object.defineProperty(ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ye, []);
              } catch (Mn) {
                V = Mn;
              }
              Reflect.construct(m, [], ye);
            } else {
              try {
                ye.call();
              } catch (Mn) {
                V = Mn;
              }
              m.call(ye.prototype);
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
`), zt = V.stack.split(`
`), qt = nt.length - 1, Cn = zt.length - 1; qt >= 1 && Cn >= 0 && nt[qt] !== zt[Cn]; )
              Cn--;
            for (; qt >= 1 && Cn >= 0; qt--, Cn--)
              if (nt[qt] !== zt[Cn]) {
                if (qt !== 1 || Cn !== 1)
                  do
                    if (qt--, Cn--, Cn < 0 || nt[qt] !== zt[Cn]) {
                      var dn = `
` + nt[qt].replace(" at new ", " at ");
                      return m.displayName && dn.includes("<anonymous>") && (dn = dn.replace("<anonymous>", m.displayName)), typeof m == "function" && xu.set(m, dn), dn;
                    }
                  while (qt >= 1 && Cn >= 0);
                break;
              }
          }
        } finally {
          il = !1, ti.current = Je, ga(), Error.prepareStackTrace = ce;
        }
        var _t = m ? m.displayName || m.name : "", pn = _t ? Kl(_t) : "";
        return typeof m == "function" && xu.set(m, pn), pn;
      }
      function Yi(m, b, j) {
        return Jl(m, !1);
      }
      function Gf(m) {
        var b = m.prototype;
        return !!(b && b.isReactComponent);
      }
      function Wi(m, b, j) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return Jl(m, Gf(m));
        if (typeof m == "string")
          return Kl(m);
        switch (m) {
          case K:
            return Kl("Suspense");
          case de:
            return Kl("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case ve:
              return Yi(m.render);
            case se:
              return Wi(m.type, b, j);
            case be: {
              var V = m, ce = V._payload, Je = V._init;
              try {
                return Wi(Je(ce), b, j);
              } catch {
              }
            }
          }
        return "";
      }
      var Zt = {}, Zl = Lt.ReactDebugCurrentFrame;
      function Gt(m) {
        if (m) {
          var b = m._owner, j = Wi(m.type, m._source, b ? b.type : null);
          Zl.setExtraStackFrame(j);
        } else
          Zl.setExtraStackFrame(null);
      }
      function Qo(m, b, j, V, ce) {
        {
          var Je = Function.call.bind(En);
          for (var ye in m)
            if (Je(m, ye)) {
              var nt = void 0;
              try {
                if (typeof m[ye] != "function") {
                  var zt = Error((V || "React class") + ": " + j + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw zt.name = "Invariant Violation", zt;
                }
                nt = m[ye](b, ye, V, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (qt) {
                nt = qt;
              }
              nt && !(nt instanceof Error) && (Gt(ce), Ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", j, ye, typeof nt), Gt(null)), nt instanceof Error && !(nt.message in Zt) && (Zt[nt.message] = !0, Gt(ce), Ae("Failed %s type: %s", j, nt.message), Gt(null));
            }
        }
      }
      function gi(m) {
        if (m) {
          var b = m._owner, j = Wi(m.type, m._source, b ? b.type : null);
          it(j);
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
          var b = m.fileName.replace(/^.*[\\\/]/, ""), j = m.lineNumber;
          return `

Check your code at ` + b + ":" + j + ".";
        }
        return "";
      }
      function Si(m) {
        return m != null ? yr(m.__source) : "";
      }
      var Fr = {};
      function Ei(m) {
        var b = eo();
        if (!b) {
          var j = typeof m == "string" ? m : m.displayName || m.name;
          j && (b = `

Check the top-level render call using <` + j + ">.");
        }
        return b;
      }
      function Rn(m, b) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var j = Ei(b);
          if (!Fr[j]) {
            Fr[j] = !0;
            var V = "";
            m && m._owner && m._owner !== Ke.current && (V = " It was passed a child from " + Dn(m._owner.type) + "."), gi(m), Ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, V), gi(null);
          }
        }
      }
      function fn(m, b) {
        if (typeof m == "object") {
          if (mt(m))
            for (var j = 0; j < m.length; j++) {
              var V = m[j];
              ln(V) && Rn(V, b);
            }
          else if (ln(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var ce = He(m);
            if (typeof ce == "function" && ce !== m.entries)
              for (var Je = ce.call(m), ye; !(ye = Je.next()).done; )
                ln(ye.value) && Rn(ye.value, b);
          }
        }
      }
      function Cu(m) {
        {
          var b = m.type;
          if (b == null || typeof b == "string")
            return;
          var j;
          if (typeof b == "function")
            j = b.propTypes;
          else if (typeof b == "object" && (b.$$typeof === ve || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          b.$$typeof === se))
            j = b.propTypes;
          else
            return;
          if (j) {
            var V = Dn(b);
            Qo(j, m.props, "prop", V, m);
          } else if (b.PropTypes !== void 0 && !ht) {
            ht = !0;
            var ce = Dn(b);
            Ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && Ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ir(m) {
        {
          for (var b = Object.keys(m.props), j = 0; j < b.length; j++) {
            var V = b[j];
            if (V !== "children" && V !== "key") {
              gi(m), Ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), gi(null);
              break;
            }
          }
          m.ref !== null && (gi(m), Ae("Invalid attribute `ref` supplied to `React.Fragment`."), gi(null));
        }
      }
      function Hr(m, b, j) {
        var V = X(m);
        if (!V) {
          var ce = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Si(b);
          Je ? ce += Je : ce += eo();
          var ye;
          m === null ? ye = "null" : mt(m) ? ye = "array" : m !== void 0 && m.$$typeof === $ ? (ye = "<" + (Dn(m.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof m, Ae("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ce);
        }
        var nt = pt.apply(this, arguments);
        if (nt == null)
          return nt;
        if (V)
          for (var zt = 2; zt < arguments.length; zt++)
            fn(arguments[zt], m);
        return m === J ? ir(nt) : Cu(nt), nt;
      }
      var Na = !1;
      function ul(m) {
        var b = Hr.bind(null, m);
        return b.type = m, Na || (Na = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(b, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), b;
      }
      function Go(m, b, j) {
        for (var V = Qt.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          fn(arguments[ce], V.type);
        return Cu(V), V;
      }
      function qo(m, b) {
        var j = Me.transition;
        Me.transition = {};
        var V = Me.transition;
        Me.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (Me.transition = j, j === null && V._updatedFibers) {
            var ce = V._updatedFibers.size;
            ce > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), V._updatedFibers.clear();
          }
        }
      }
      var bu = !1, ll = null;
      function qf(m) {
        if (ll === null)
          try {
            var b = ("require" + Math.random()).slice(0, 7), j = C && C[b];
            ll = j.call(C, "timers").setImmediate;
          } catch {
            ll = function(ce) {
              bu === !1 && (bu = !0, typeof MessageChannel > "u" && Ae("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = ce, Je.port2.postMessage(void 0);
            };
          }
        return ll(m);
      }
      var Oa = 0, ri = !1;
      function xi(m) {
        {
          var b = Oa;
          Oa++, Se.current === null && (Se.current = []);
          var j = Se.isBatchingLegacy, V;
          try {
            if (Se.isBatchingLegacy = !0, V = m(), !j && Se.didScheduleLegacyUpdate) {
              var ce = Se.current;
              ce !== null && (Se.didScheduleLegacyUpdate = !1, wu(ce));
            }
          } catch (_t) {
            throw Ma(b), _t;
          } finally {
            Se.isBatchingLegacy = j;
          }
          if (V !== null && typeof V == "object" && typeof V.then == "function") {
            var Je = V, ye = !1, nt = {
              then: function(_t, pn) {
                ye = !0, Je.then(function(Mn) {
                  Ma(b), Oa === 0 ? to(Mn, _t, pn) : _t(Mn);
                }, function(Mn) {
                  Ma(b), pn(Mn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ye || (ri = !0, Ae("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var zt = V;
            if (Ma(b), Oa === 0) {
              var qt = Se.current;
              qt !== null && (wu(qt), Se.current = null);
              var Cn = {
                then: function(_t, pn) {
                  Se.current === null ? (Se.current = [], to(zt, _t, pn)) : _t(zt);
                }
              };
              return Cn;
            } else {
              var dn = {
                then: function(_t, pn) {
                  _t(zt);
                }
              };
              return dn;
            }
          }
        }
      }
      function Ma(m) {
        m !== Oa - 1 && Ae("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = m;
      }
      function to(m, b, j) {
        {
          var V = Se.current;
          if (V !== null)
            try {
              wu(V), qf(function() {
                V.length === 0 ? (Se.current = null, b(m)) : to(m, b, j);
              });
            } catch (ce) {
              j(ce);
            }
          else
            b(m);
        }
      }
      var no = !1;
      function wu(m) {
        if (!no) {
          no = !0;
          var b = 0;
          try {
            for (; b < m.length; b++) {
              var j = m[b];
              do
                j = j(!0);
              while (j !== null);
            }
            m.length = 0;
          } catch (V) {
            throw m = m.slice(b + 1), V;
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
      T.Children = ai, T.Component = Ve, T.Fragment = J, T.Profiler = Oe, T.PureComponent = dt, T.StrictMode = y, T.Suspense = K, T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, T.act = xi, T.cloneElement = ro, T.createContext = nl, T.createElement = ol, T.createFactory = ao, T.createRef = gn, T.forwardRef = yi, T.isValidElement = ln, T.lazy = hi, T.memo = ge, T.startTransition = qo, T.unstable_act = xi, T.useCallback = hr, T.useContext = Ct, T.useDebugValue = bt, T.useDeferredValue = ei, T.useEffect = Bn, T.useId = rl, T.useImperativeHandle = Za, T.useInsertionEffect = xn, T.useLayoutEffect = wn, T.useMemo = Ja, T.useReducer = Ut, T.useRef = Ot, T.useState = gt, T.useSyncExternalStore = al, T.useTransition = kt, T.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
process.env.NODE_ENV === "production" ? C4.exports = CT() : C4.exports = bT();
var fe = C4.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px;
function wT() {
  if (px) return Zp;
  px = 1;
  var C = fe, T = Symbol.for("react.element"), E = Symbol.for("react.fragment"), $ = Object.prototype.hasOwnProperty, G = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(Oe, W, ne) {
    var ve, K = {}, de = null, se = null;
    ne !== void 0 && (de = "" + ne), W.key !== void 0 && (de = "" + W.key), W.ref !== void 0 && (se = W.ref);
    for (ve in W) $.call(W, ve) && !J.hasOwnProperty(ve) && (K[ve] = W[ve]);
    if (Oe && Oe.defaultProps) for (ve in W = Oe.defaultProps, W) K[ve] === void 0 && (K[ve] = W[ve]);
    return { $$typeof: T, type: Oe, key: de, ref: se, props: K, _owner: G.current };
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
var vx;
function RT() {
  return vx || (vx = 1, process.env.NODE_ENV !== "production" && function() {
    var C = fe, T = Symbol.for("react.element"), E = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), be = Symbol.iterator, lt = "@@iterator";
    function qe(w) {
      if (w === null || typeof w != "object")
        return null;
      var X = be && w[be] || w[lt];
      return typeof X == "function" ? X : null;
    }
    var Ft = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function He(w) {
      {
        for (var X = arguments.length, ge = new Array(X > 1 ? X - 1 : 0), Le = 1; Le < X; Le++)
          ge[Le - 1] = arguments[Le];
        ie("error", w, ge);
      }
    }
    function ie(w, X, ge) {
      {
        var Le = Ft.ReactDebugCurrentFrame, Ct = Le.getStackAddendum();
        Ct !== "" && (X += "%s", ge = ge.concat([Ct]));
        var gt = ge.map(function(Ut) {
          return String(Ut);
        });
        gt.unshift("Warning: " + X), Function.prototype.apply.call(console[w], console, gt);
      }
    }
    var Me = !1, Se = !1, Ke = !1, De = !1, jt = !1, it;
    it = Symbol.for("react.module.reference");
    function ot(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === $ || w === J || jt || w === G || w === ne || w === ve || De || w === se || Me || Se || Ke || typeof w == "object" && w !== null && (w.$$typeof === de || w.$$typeof === K || w.$$typeof === y || w.$$typeof === Oe || w.$$typeof === W || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === it || w.getModuleId !== void 0));
    }
    function Pt(w, X, ge) {
      var Le = w.displayName;
      if (Le)
        return Le;
      var Ct = X.displayName || X.name || "";
      return Ct !== "" ? ge + "(" + Ct + ")" : ge;
    }
    function yt(w) {
      return w.displayName || "Context";
    }
    function Be(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && He("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case $:
          return "Fragment";
        case E:
          return "Portal";
        case J:
          return "Profiler";
        case G:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case Oe:
            var X = w;
            return yt(X) + ".Consumer";
          case y:
            var ge = w;
            return yt(ge._context) + ".Provider";
          case W:
            return Pt(w, w.render, "ForwardRef");
          case K:
            var Le = w.displayName || null;
            return Le !== null ? Le : Be(w.type) || "Memo";
          case de: {
            var Ct = w, gt = Ct._payload, Ut = Ct._init;
            try {
              return Be(Ut(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Tt = Object.assign, Lt = 0, Dt, Ae, oe, Ue, pe, N, P;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Lt === 0) {
          Dt = console.log, Ae = console.info, oe = console.warn, Ue = console.error, pe = console.group, N = console.groupCollapsed, P = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        Lt++;
      }
    }
    function st() {
      {
        if (Lt--, Lt === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, w, {
              value: Dt
            }),
            info: Tt({}, w, {
              value: Ae
            }),
            warn: Tt({}, w, {
              value: oe
            }),
            error: Tt({}, w, {
              value: Ue
            }),
            group: Tt({}, w, {
              value: pe
            }),
            groupCollapsed: Tt({}, w, {
              value: N
            }),
            groupEnd: Tt({}, w, {
              value: P
            })
          });
        }
        Lt < 0 && He("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = Ft.ReactCurrentDispatcher, ft;
    function q(w, X, ge) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Le = Ct.stack.trim().match(/\n( *(at )?)/);
            ft = Le && Le[1] || "";
          }
        return `
` + ft + w;
      }
    }
    var dt = !1, At;
    {
      var gn = typeof WeakMap == "function" ? WeakMap : Map;
      At = new gn();
    }
    function Sn(w, X) {
      if (!w || dt)
        return "";
      {
        var ge = At.get(w);
        if (ge !== void 0)
          return ge;
      }
      var Le;
      dt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = tt.current, tt.current = null, Ve();
      try {
        if (X) {
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
              Le = bt;
            }
            Reflect.construct(w, [], Ut);
          } else {
            try {
              Ut.call();
            } catch (bt) {
              Le = bt;
            }
            w.call(Ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            Le = bt;
          }
          w();
        }
      } catch (bt) {
        if (bt && Le && typeof bt.stack == "string") {
          for (var Ot = bt.stack.split(`
`), Bn = Le.stack.split(`
`), xn = Ot.length - 1, wn = Bn.length - 1; xn >= 1 && wn >= 0 && Ot[xn] !== Bn[wn]; )
            wn--;
          for (; xn >= 1 && wn >= 0; xn--, wn--)
            if (Ot[xn] !== Bn[wn]) {
              if (xn !== 1 || wn !== 1)
                do
                  if (xn--, wn--, wn < 0 || Ot[xn] !== Bn[wn]) {
                    var hr = `
` + Ot[xn].replace(" at new ", " at ");
                    return w.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", w.displayName)), typeof w == "function" && At.set(w, hr), hr;
                  }
                while (xn >= 1 && wn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, tt.current = gt, st(), Error.prepareStackTrace = Ct;
      }
      var Ja = w ? w.displayName || w.name : "", Za = Ja ? q(Ja) : "";
      return typeof w == "function" && At.set(w, Za), Za;
    }
    function mt(w, X, ge) {
      return Sn(w, !1);
    }
    function Nt(w) {
      var X = w.prototype;
      return !!(X && X.isReactComponent);
    }
    function Kt(w, X, ge) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Sn(w, Nt(w));
      if (typeof w == "string")
        return q(w);
      switch (w) {
        case ne:
          return q("Suspense");
        case ve:
          return q("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case W:
            return mt(w.render);
          case K:
            return Kt(w.type, X, ge);
          case de: {
            var Le = w, Ct = Le._payload, gt = Le._init;
            try {
              return Kt(gt(Ct), X, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var cn = Object.prototype.hasOwnProperty, Gn = {}, Zr = Ft.ReactDebugCurrentFrame;
    function Hn(w) {
      if (w) {
        var X = w._owner, ge = Kt(w.type, w._source, X ? X.type : null);
        Zr.setExtraStackFrame(ge);
      } else
        Zr.setExtraStackFrame(null);
    }
    function Dn(w, X, ge, Le, Ct) {
      {
        var gt = Function.call.bind(cn);
        for (var Ut in w)
          if (gt(w, Ut)) {
            var Ot = void 0;
            try {
              if (typeof w[Ut] != "function") {
                var Bn = Error((Le || "React class") + ": " + ge + " type `" + Ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Bn.name = "Invariant Violation", Bn;
              }
              Ot = w[Ut](X, Ut, Le, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xn) {
              Ot = xn;
            }
            Ot && !(Ot instanceof Error) && (Hn(Ct), He("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", ge, Ut, typeof Ot), Hn(null)), Ot instanceof Error && !(Ot.message in Gn) && (Gn[Ot.message] = !0, Hn(Ct), He("Failed %s type: %s", ge, Ot.message), Hn(null));
          }
      }
    }
    var En = Array.isArray;
    function Nn(w) {
      return En(w);
    }
    function On(w) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, ge = X && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return ge;
      }
    }
    function Nr(w) {
      try {
        return we(w), !1;
      } catch {
        return !0;
      }
    }
    function we(w) {
      return "" + w;
    }
    function at(w) {
      if (Nr(w))
        return He("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(w)), we(w);
    }
    var wt = Ft.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, Z;
    function ke(w) {
      if (cn.call(w, "ref")) {
        var X = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function pt(w) {
      if (cn.call(w, "key")) {
        var X = Object.getOwnPropertyDescriptor(w, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Et(w, X) {
      typeof w.ref == "string" && wt.current;
    }
    function Qt(w, X) {
      {
        var ge = function() {
          un || (un = !0, He("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        ge.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function ln(w, X) {
      {
        var ge = function() {
          Z || (Z = !0, He("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        ge.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Xt = function(w, X, ge, Le, Ct, gt, Ut) {
      var Ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: w,
        key: X,
        ref: ge,
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
        value: Le
      }), Object.defineProperty(Ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(Ot.props), Object.freeze(Ot)), Ot;
    };
    function B(w, X, ge, Le, Ct) {
      {
        var gt, Ut = {}, Ot = null, Bn = null;
        ge !== void 0 && (at(ge), Ot = "" + ge), pt(X) && (at(X.key), Ot = "" + X.key), ke(X) && (Bn = X.ref, Et(X, Ct));
        for (gt in X)
          cn.call(X, gt) && !Vt.hasOwnProperty(gt) && (Ut[gt] = X[gt]);
        if (w && w.defaultProps) {
          var xn = w.defaultProps;
          for (gt in xn)
            Ut[gt] === void 0 && (Ut[gt] = xn[gt]);
        }
        if (Ot || Bn) {
          var wn = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          Ot && Qt(Ut, wn), Bn && ln(Ut, wn);
        }
        return Xt(w, Ot, Bn, Ct, Le, wt.current, Ut);
      }
    }
    var me = Ft.ReactCurrentOwner, $e = Ft.ReactDebugCurrentFrame;
    function Ie(w) {
      if (w) {
        var X = w._owner, ge = Kt(w.type, w._source, X ? X.type : null);
        $e.setExtraStackFrame(ge);
      } else
        $e.setExtraStackFrame(null);
    }
    var Pn;
    Pn = !1;
    function ar(w) {
      return typeof w == "object" && w !== null && w.$$typeof === T;
    }
    function jn() {
      {
        if (me.current) {
          var w = Be(me.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function ya(w) {
      return "";
    }
    var $i = {};
    function Ii(w) {
      {
        var X = jn();
        if (!X) {
          var ge = typeof w == "string" ? w : w.displayName || w.name;
          ge && (X = `

Check the top-level render call using <` + ge + ">.");
        }
        return X;
      }
    }
    function Ka(w, X) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var ge = Ii(X);
        if ($i[ge])
          return;
        $i[ge] = !0;
        var Le = "";
        w && w._owner && w._owner !== me.current && (Le = " It was passed a child from " + Be(w._owner.type) + "."), Ie(w), He('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Le), Ie(null);
      }
    }
    function vi(w, X) {
      {
        if (typeof w != "object")
          return;
        if (Nn(w))
          for (var ge = 0; ge < w.length; ge++) {
            var Le = w[ge];
            ar(Le) && Ka(Le, X);
          }
        else if (ar(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Ct = qe(w);
          if (typeof Ct == "function" && Ct !== w.entries)
            for (var gt = Ct.call(w), Ut; !(Ut = gt.next()).done; )
              ar(Ut.value) && Ka(Ut.value, X);
        }
      }
    }
    function nl(w) {
      {
        var X = w.type;
        if (X == null || typeof X == "string")
          return;
        var ge;
        if (typeof X == "function")
          ge = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === W || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === K))
          ge = X.propTypes;
        else
          return;
        if (ge) {
          var Le = Be(X);
          Dn(ge, w.props, "prop", Le, w);
        } else if (X.PropTypes !== void 0 && !Pn) {
          Pn = !0;
          var Ct = Be(X);
          He("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && He("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(w) {
      {
        for (var X = Object.keys(w.props), ge = 0; ge < X.length; ge++) {
          var Le = X[ge];
          if (Le !== "children" && Le !== "key") {
            Ie(w), He("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), Ie(null);
            break;
          }
        }
        w.ref !== null && (Ie(w), He("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var zr = {};
    function mr(w, X, ge, Le, Ct, gt) {
      {
        var Ut = ot(w);
        if (!Ut) {
          var Ot = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (Ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Bn = ya();
          Bn ? Ot += Bn : Ot += jn();
          var xn;
          w === null ? xn = "null" : Nn(w) ? xn = "array" : w !== void 0 && w.$$typeof === T ? (xn = "<" + (Be(w.type) || "Unknown") + " />", Ot = " Did you accidentally export a JSX literal instead of a component?") : xn = typeof w, He("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xn, Ot);
        }
        var wn = B(w, X, ge, Ct, gt);
        if (wn == null)
          return wn;
        if (Ut) {
          var hr = X.children;
          if (hr !== void 0)
            if (Le)
              if (Nn(hr)) {
                for (var Ja = 0; Ja < hr.length; Ja++)
                  vi(hr[Ja], w);
                Object.freeze && Object.freeze(hr);
              } else
                He("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vi(hr, w);
        }
        if (cn.call(X, "key")) {
          var Za = Be(w), bt = Object.keys(X).filter(function(rl) {
            return rl !== "key";
          }), kt = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zr[Za + kt]) {
            var ei = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            He(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kt, Za, ei, Za), zr[Za + kt] = !0;
          }
        }
        return w === $ ? Ur(wn) : nl(wn), wn;
      }
    }
    function mi(w, X, ge) {
      return mr(w, X, ge, !0);
    }
    function Xa(w, X, ge) {
      return mr(w, X, ge, !1);
    }
    var hi = Xa, yi = mi;
    ev.Fragment = $, ev.jsx = hi, ev.jsxs = yi;
  }()), ev;
}
process.env.NODE_ENV === "production" ? x4.exports = wT() : x4.exports = RT();
var O = x4.exports, b4 = { exports: {} }, Ga = {}, Gh = { exports: {} }, v4 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mx;
function TT() {
  return mx || (mx = 1, function(C) {
    function T(oe, Ue) {
      var pe = oe.length;
      oe.push(Ue);
      e: for (; 0 < pe; ) {
        var N = pe - 1 >>> 1, P = oe[N];
        if (0 < G(P, Ue)) oe[N] = Ue, oe[pe] = P, pe = N;
        else break e;
      }
    }
    function E(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function $(oe) {
      if (oe.length === 0) return null;
      var Ue = oe[0], pe = oe.pop();
      if (pe !== Ue) {
        oe[0] = pe;
        e: for (var N = 0, P = oe.length, Xe = P >>> 1; N < Xe; ) {
          var Ve = 2 * (N + 1) - 1, st = oe[Ve], tt = Ve + 1, ft = oe[tt];
          if (0 > G(st, pe)) tt < P && 0 > G(ft, st) ? (oe[N] = ft, oe[tt] = pe, N = tt) : (oe[N] = st, oe[Ve] = pe, N = Ve);
          else if (tt < P && 0 > G(ft, pe)) oe[N] = ft, oe[tt] = pe, N = tt;
          else break e;
        }
      }
      return Ue;
    }
    function G(oe, Ue) {
      var pe = oe.sortIndex - Ue.sortIndex;
      return pe !== 0 ? pe : oe.id - Ue.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      C.unstable_now = function() {
        return J.now();
      };
    } else {
      var y = Date, Oe = y.now();
      C.unstable_now = function() {
        return y.now() - Oe;
      };
    }
    var W = [], ne = [], ve = 1, K = null, de = 3, se = !1, be = !1, lt = !1, qe = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(oe) {
      for (var Ue = E(ne); Ue !== null; ) {
        if (Ue.callback === null) $(ne);
        else if (Ue.startTime <= oe) $(ne), Ue.sortIndex = Ue.expirationTime, T(W, Ue);
        else break;
        Ue = E(ne);
      }
    }
    function Me(oe) {
      if (lt = !1, ie(oe), !be) if (E(W) !== null) be = !0, Dt(Se);
      else {
        var Ue = E(ne);
        Ue !== null && Ae(Me, Ue.startTime - oe);
      }
    }
    function Se(oe, Ue) {
      be = !1, lt && (lt = !1, Ft(jt), jt = -1), se = !0;
      var pe = de;
      try {
        for (ie(Ue), K = E(W); K !== null && (!(K.expirationTime > Ue) || oe && !Pt()); ) {
          var N = K.callback;
          if (typeof N == "function") {
            K.callback = null, de = K.priorityLevel;
            var P = N(K.expirationTime <= Ue);
            Ue = C.unstable_now(), typeof P == "function" ? K.callback = P : K === E(W) && $(W), ie(Ue);
          } else $(W);
          K = E(W);
        }
        if (K !== null) var Xe = !0;
        else {
          var Ve = E(ne);
          Ve !== null && Ae(Me, Ve.startTime - Ue), Xe = !1;
        }
        return Xe;
      } finally {
        K = null, de = pe, se = !1;
      }
    }
    var Ke = !1, De = null, jt = -1, it = 5, ot = -1;
    function Pt() {
      return !(C.unstable_now() - ot < it);
    }
    function yt() {
      if (De !== null) {
        var oe = C.unstable_now();
        ot = oe;
        var Ue = !0;
        try {
          Ue = De(!0, oe);
        } finally {
          Ue ? Be() : (Ke = !1, De = null);
        }
      } else Ke = !1;
    }
    var Be;
    if (typeof He == "function") Be = function() {
      He(yt);
    };
    else if (typeof MessageChannel < "u") {
      var Tt = new MessageChannel(), Lt = Tt.port2;
      Tt.port1.onmessage = yt, Be = function() {
        Lt.postMessage(null);
      };
    } else Be = function() {
      qe(yt, 0);
    };
    function Dt(oe) {
      De = oe, Ke || (Ke = !0, Be());
    }
    function Ae(oe, Ue) {
      jt = qe(function() {
        oe(C.unstable_now());
      }, Ue);
    }
    C.unstable_IdlePriority = 5, C.unstable_ImmediatePriority = 1, C.unstable_LowPriority = 4, C.unstable_NormalPriority = 3, C.unstable_Profiling = null, C.unstable_UserBlockingPriority = 2, C.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, C.unstable_continueExecution = function() {
      be || se || (be = !0, Dt(Se));
    }, C.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, C.unstable_getCurrentPriorityLevel = function() {
      return de;
    }, C.unstable_getFirstCallbackNode = function() {
      return E(W);
    }, C.unstable_next = function(oe) {
      switch (de) {
        case 1:
        case 2:
        case 3:
          var Ue = 3;
          break;
        default:
          Ue = de;
      }
      var pe = de;
      de = Ue;
      try {
        return oe();
      } finally {
        de = pe;
      }
    }, C.unstable_pauseExecution = function() {
    }, C.unstable_requestPaint = function() {
    }, C.unstable_runWithPriority = function(oe, Ue) {
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
      var pe = de;
      de = oe;
      try {
        return Ue();
      } finally {
        de = pe;
      }
    }, C.unstable_scheduleCallback = function(oe, Ue, pe) {
      var N = C.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? N + pe : N) : pe = N, oe) {
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
      return P = pe + P, oe = { id: ve++, callback: Ue, priorityLevel: oe, startTime: pe, expirationTime: P, sortIndex: -1 }, pe > N ? (oe.sortIndex = pe, T(ne, oe), E(W) === null && oe === E(ne) && (lt ? (Ft(jt), jt = -1) : lt = !0, Ae(Me, pe - N))) : (oe.sortIndex = P, T(W, oe), be || se || (be = !0, Dt(Se))), oe;
    }, C.unstable_shouldYield = Pt, C.unstable_wrapCallback = function(oe) {
      var Ue = de;
      return function() {
        var pe = de;
        de = Ue;
        try {
          return oe.apply(this, arguments);
        } finally {
          de = pe;
        }
      };
    };
  }(v4)), v4;
}
var m4 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function kT() {
  return hx || (hx = 1, function(C) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var T = !1, E = 5;
      function $(Z, ke) {
        var pt = Z.length;
        Z.push(ke), y(Z, ke, pt);
      }
      function G(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function J(Z) {
        if (Z.length === 0)
          return null;
        var ke = Z[0], pt = Z.pop();
        return pt !== ke && (Z[0] = pt, Oe(Z, pt, 0)), ke;
      }
      function y(Z, ke, pt) {
        for (var Et = pt; Et > 0; ) {
          var Qt = Et - 1 >>> 1, ln = Z[Qt];
          if (W(ln, ke) > 0)
            Z[Qt] = ke, Z[Et] = ln, Et = Qt;
          else
            return;
        }
      }
      function Oe(Z, ke, pt) {
        for (var Et = pt, Qt = Z.length, ln = Qt >>> 1; Et < ln; ) {
          var Xt = (Et + 1) * 2 - 1, B = Z[Xt], me = Xt + 1, $e = Z[me];
          if (W(B, ke) < 0)
            me < Qt && W($e, B) < 0 ? (Z[Et] = $e, Z[me] = ke, Et = me) : (Z[Et] = B, Z[Xt] = ke, Et = Xt);
          else if (me < Qt && W($e, ke) < 0)
            Z[Et] = $e, Z[me] = ke, Et = me;
          else
            return;
        }
      }
      function W(Z, ke) {
        var pt = Z.sortIndex - ke.sortIndex;
        return pt !== 0 ? pt : Z.id - ke.id;
      }
      var ne = 1, ve = 2, K = 3, de = 4, se = 5;
      function be(Z, ke) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var qe = performance;
        C.unstable_now = function() {
          return qe.now();
        };
      } else {
        var Ft = Date, He = Ft.now();
        C.unstable_now = function() {
          return Ft.now() - He;
        };
      }
      var ie = 1073741823, Me = -1, Se = 250, Ke = 5e3, De = 1e4, jt = ie, it = [], ot = [], Pt = 1, yt = null, Be = K, Tt = !1, Lt = !1, Dt = !1, Ae = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, Ue = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function pe(Z) {
        for (var ke = G(ot); ke !== null; ) {
          if (ke.callback === null)
            J(ot);
          else if (ke.startTime <= Z)
            J(ot), ke.sortIndex = ke.expirationTime, $(it, ke);
          else
            return;
          ke = G(ot);
        }
      }
      function N(Z) {
        if (Dt = !1, pe(Z), !Lt)
          if (G(it) !== null)
            Lt = !0, we(P);
          else {
            var ke = G(ot);
            ke !== null && at(N, ke.startTime - Z);
          }
      }
      function P(Z, ke) {
        Lt = !1, Dt && (Dt = !1, wt()), Tt = !0;
        var pt = Be;
        try {
          var Et;
          if (!T) return Xe(Z, ke);
        } finally {
          yt = null, Be = pt, Tt = !1;
        }
      }
      function Xe(Z, ke) {
        var pt = ke;
        for (pe(pt), yt = G(it); yt !== null && !(yt.expirationTime > pt && (!Z || Zr())); ) {
          var Et = yt.callback;
          if (typeof Et == "function") {
            yt.callback = null, Be = yt.priorityLevel;
            var Qt = yt.expirationTime <= pt, ln = Et(Qt);
            pt = C.unstable_now(), typeof ln == "function" ? yt.callback = ln : yt === G(it) && J(it), pe(pt);
          } else
            J(it);
          yt = G(it);
        }
        if (yt !== null)
          return !0;
        var Xt = G(ot);
        return Xt !== null && at(N, Xt.startTime - pt), !1;
      }
      function Ve(Z, ke) {
        switch (Z) {
          case ne:
          case ve:
          case K:
          case de:
          case se:
            break;
          default:
            Z = K;
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
          case ne:
          case ve:
          case K:
            ke = K;
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
        var Et = C.unstable_now(), Qt;
        if (typeof pt == "object" && pt !== null) {
          var ln = pt.delay;
          typeof ln == "number" && ln > 0 ? Qt = Et + ln : Qt = Et;
        } else
          Qt = Et;
        var Xt;
        switch (Z) {
          case ne:
            Xt = Me;
            break;
          case ve:
            Xt = Se;
            break;
          case se:
            Xt = jt;
            break;
          case de:
            Xt = De;
            break;
          case K:
          default:
            Xt = Ke;
            break;
        }
        var B = Qt + Xt, me = {
          id: Pt++,
          callback: ke,
          priorityLevel: Z,
          startTime: Qt,
          expirationTime: B,
          sortIndex: -1
        };
        return Qt > Et ? (me.sortIndex = Qt, $(ot, me), G(it) === null && me === G(ot) && (Dt ? wt() : Dt = !0, at(N, Qt - Et))) : (me.sortIndex = B, $(it, me), !Lt && !Tt && (Lt = !0, we(P))), me;
      }
      function q() {
      }
      function dt() {
        !Lt && !Tt && (Lt = !0, we(P));
      }
      function At() {
        return G(it);
      }
      function gn(Z) {
        Z.callback = null;
      }
      function Sn() {
        return Be;
      }
      var mt = !1, Nt = null, Kt = -1, cn = E, Gn = -1;
      function Zr() {
        var Z = C.unstable_now() - Gn;
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
          var Z = C.unstable_now();
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
      if (typeof Ue == "function")
        Nn = function() {
          Ue(En);
        };
      else if (typeof MessageChannel < "u") {
        var On = new MessageChannel(), Nr = On.port2;
        On.port1.onmessage = En, Nn = function() {
          Nr.postMessage(null);
        };
      } else
        Nn = function() {
          Ae(En, 0);
        };
      function we(Z) {
        Nt = Z, mt || (mt = !0, Nn());
      }
      function at(Z, ke) {
        Kt = Ae(function() {
          Z(C.unstable_now());
        }, ke);
      }
      function wt() {
        oe(Kt), Kt = -1;
      }
      var Vt = Hn, un = null;
      C.unstable_IdlePriority = se, C.unstable_ImmediatePriority = ne, C.unstable_LowPriority = de, C.unstable_NormalPriority = K, C.unstable_Profiling = un, C.unstable_UserBlockingPriority = ve, C.unstable_cancelCallback = gn, C.unstable_continueExecution = dt, C.unstable_forceFrameRate = Dn, C.unstable_getCurrentPriorityLevel = Sn, C.unstable_getFirstCallbackNode = At, C.unstable_next = st, C.unstable_pauseExecution = q, C.unstable_requestPaint = Vt, C.unstable_runWithPriority = Ve, C.unstable_scheduleCallback = ft, C.unstable_shouldYield = Zr, C.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m4)), m4;
}
var yx;
function Nx() {
  return yx || (yx = 1, process.env.NODE_ENV === "production" ? Gh.exports = TT() : Gh.exports = kT()), Gh.exports;
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
var gx;
function _T() {
  if (gx) return Ga;
  gx = 1;
  var C = fe, T = Nx();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var $ = /* @__PURE__ */ new Set(), G = {};
  function J(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (G[n] = r, n = 0; n < r.length; n++) $.add(r[n]);
  }
  var Oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), W = Object.prototype.hasOwnProperty, ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, K = {};
  function de(n) {
    return W.call(K, n) ? !0 : W.call(ve, n) ? !1 : ne.test(n) ? K[n] = !0 : (ve[n] = !0, !1);
  }
  function se(n, r, u, o) {
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
  function be(n, r, u, o) {
    if (r === null || typeof r > "u" || se(n, r, u, o)) return !0;
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
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (be(r, u, c, o) && (u = null), o || c === null ? de(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, o = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, o ? n.setAttributeNS(o, r, u) : n.setAttribute(r, u))));
  }
  var Me = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Se = Symbol.for("react.element"), Ke = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), jt = Symbol.for("react.strict_mode"), it = Symbol.for("react.profiler"), ot = Symbol.for("react.provider"), Pt = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Tt = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Ae = Symbol.for("react.offscreen"), oe = Symbol.iterator;
  function Ue(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var pe = Object.assign, N;
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
                var R = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
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
      case jt:
        return "StrictMode";
      case Be:
        return "Suspense";
      case Tt:
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
        return r === jt ? "StrictMode" : "Mode";
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
  function q(n) {
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
    return pe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Kt(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    u = q(r.value != null ? r.value : u), n._wrapperState = { initialChecked: o, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function cn(n, r) {
    r = r.checked, r != null && ie(n, "checked", r, !1);
  }
  function Gn(n, r) {
    cn(n, r);
    var u = q(r.value), o = r.type;
    if (u != null) o === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Hn(n, r.type, u) : r.hasOwnProperty("defaultValue") && Hn(n, r.type, q(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (u = "" + q(u), r = null, c = 0; c < n.length; c++) {
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
    return pe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: q(u) };
  }
  function Nr(n, r) {
    var u = q(r.value), o = q(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), o != null && (n.defaultValue = "" + o);
  }
  function we(n) {
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
  function wt(n, r) {
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
  var ln = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var me = null;
  function $e(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ie = null, Pn = null, ar = null;
  function jn(n) {
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
      if (ar = Pn = null, jn(n), r) for (n = 0; n < r.length; n++) jn(r[n]);
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
  var zr = !1;
  if (Oe) try {
    var mr = {};
    Object.defineProperty(mr, "passive", { get: function() {
      zr = !0;
    } }), window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
  } catch {
    zr = !1;
  }
  function mi(n, r, u, o, c, d, h, x, R) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, F);
    } catch (re) {
      this.onError(re);
    }
  }
  var Xa = !1, hi = null, yi = !1, w = null, X = { onError: function(n) {
    Xa = !0, hi = n;
  } };
  function ge(n, r, u, o, c, d, h, x, R) {
    Xa = !1, hi = null, mi.apply(X, arguments);
  }
  function Le(n, r, u, o, c, d, h, x, R) {
    if (ge.apply(this, arguments), Xa) {
      if (Xa) {
        var F = hi;
        Xa = !1, hi = null;
      } else throw Error(E(198));
      yi || (yi = !0, w = F);
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
  var wn = T.unstable_scheduleCallback, hr = T.unstable_cancelCallback, Ja = T.unstable_shouldYield, Za = T.unstable_requestPaint, bt = T.unstable_now, kt = T.unstable_getCurrentPriorityLevel, ei = T.unstable_ImmediatePriority, rl = T.unstable_UserBlockingPriority, al = T.unstable_NormalPriority, gu = T.unstable_LowPriority, Gl = T.unstable_IdlePriority, Su = null, ea = null;
  function Wo(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function") try {
      ea.onCommitFiberRoot(Su, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var jr = Math.clz32 ? Math.clz32 : ql, lc = Math.log, oc = Math.LN2;
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
    if (o & 4 && (o |= u & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) u = 31 - jr(r), c = 1 << u, o |= n[u], r &= ~c;
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
      var h = 31 - jr(d), x = 1 << h, R = c[h];
      R === -1 ? (!(x & u) || x & o) && (c[h] = Kl(x, r)) : R <= r && (n.expiredLanes |= x), d &= ~x;
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - jr(r), n[r] = u;
  }
  function Gf(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - jr(u), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function Wi(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var o = 31 - jr(u), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), u &= ~c;
    }
  }
  var Zt = 0;
  function Zl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gt, Qo, gi, ht, eo, yr = !1, Si = [], Fr = null, Ei = null, Rn = null, fn = /* @__PURE__ */ new Map(), Cu = /* @__PURE__ */ new Map(), ir = [], Hr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Rn = null;
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
        return Rn = ul(Rn, n, r, u, o, c), !0;
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
        me = o, u.target.dispatchEvent(o), me = null;
      } else return r = Qe(u), r !== null && Qo(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function ll(n, r, u) {
    bu(n) && u.delete(r);
  }
  function qf() {
    yr = !1, Fr !== null && bu(Fr) && (Fr = null), Ei !== null && bu(Ei) && (Ei = null), Rn !== null && bu(Rn) && (Rn = null), fn.forEach(ll), Cu.forEach(ll);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, yr || (yr = !0, T.unstable_scheduleCallback(T.unstable_NormalPriority, qf)));
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
    for (Fr !== null && Oa(Fr, n), Ei !== null && Oa(Ei, n), Rn !== null && Oa(Rn, n), fn.forEach(r), Cu.forEach(r), u = 0; u < ir.length; u++) o = ir[u], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ir.length && (u = ir[0], u.blockedOn === null); ) qo(u), u.blockedOn === null && ir.shift();
  }
  var xi = Me.ReactCurrentBatchConfig, Ma = !0;
  function to(n, r, u, o) {
    var c = Zt, d = xi.transition;
    xi.transition = null;
    try {
      Zt = 1, wu(n, r, u, o);
    } finally {
      Zt = c, xi.transition = d;
    }
  }
  function no(n, r, u, o) {
    var c = Zt, d = xi.transition;
    xi.transition = null;
    try {
      Zt = 4, wu(n, r, u, o);
    } finally {
      Zt = c, xi.transition = d;
    }
  }
  function wu(n, r, u, o) {
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
  var ai = null, m = null, b = null;
  function j() {
    if (b) return b;
    var n, r = m, u = r.length, o, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++) ;
    var h = u - n;
    for (o = 1; o <= h && r[u - o] === c[d - o]; o++) ;
    return b = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function V(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ce() {
    return !0;
  }
  function Je() {
    return !1;
  }
  function ye(n) {
    function r(u, o, c, d, h) {
      this._reactName = u, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (u = n[x], this[x] = u ? u(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ce : Je, this.isPropagationStopped = Je, this;
    }
    return pe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ce);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ce);
    }, persist: function() {
    }, isPersistent: ce }), r;
  }
  var nt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, zt = ye(nt), qt = pe({}, nt, { view: 0, detail: 0 }), Cn = ye(qt), dn, _t, pn, Mn = pe({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pn && (pn && n.type === "mousemove" ? (dn = n.screenX - pn.screenX, _t = n.screenY - pn.screenY) : _t = dn = 0, pn = n), dn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : _t;
  } }), Ru = ye(Mn), Ko = pe({}, Mn, { dataTransfer: 0 }), Qi = ye(Ko), Xo = pe({}, qt, { relatedTarget: 0 }), sl = ye(Xo), Kf = pe({}, nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = ye(Kf), Xf = pe({}, nt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), rv = ye(Xf), Jf = pe({}, nt, { data: 0 }), Zf = ye(Jf), av = {
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
  }, Jh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Jh[n]) ? !!r[n] : !1;
  }
  function ed() {
    return Gi;
  }
  var td = pe({}, qt, { key: function(n) {
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
  } }), nd = ye(td), rd = pe({}, Mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uv = ye(rd), cc = pe({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), lv = ye(cc), ta = pe({}, nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qi = ye(ta), qn = pe({}, Mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = ye(qn), ad = [9, 13, 27, 32], io = Oe && "CompositionEvent" in window, Jo = null;
  Oe && "documentMode" in document && (Jo = document.documentMode);
  var Zo = Oe && "TextEvent" in window && !Jo, ov = Oe && (!io || Jo && 8 < Jo && 11 >= Jo), sv = " ", fc = !1;
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
  function Zh(n, r) {
    if (uo) return n === "compositionend" || !io && cv(n, r) ? (n = j(), b = m = ai = null, uo = !1, n) : null;
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
  var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ey[n.type] : r === "textarea";
  }
  function id(n, r, u, o) {
    ya(o), r = is(r, "onChange"), 0 < r.length && (u = new zt("onChange", "change", null, u, o), n.push({ event: u, listeners: r }));
  }
  var Ci = null, cl = null;
  function vv(n) {
    pl(n, 0);
  }
  function es(n) {
    var r = ui(n);
    if (Sn(r)) return n;
  }
  function ty(n, r) {
    if (n === "change") return r;
  }
  var mv = !1;
  if (Oe) {
    var ud;
    if (Oe) {
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
  function ny(n, r, u) {
    n === "focusin" ? (yv(), Ci = r, cl = u, Ci.attachEvent("onpropertychange", gv)) : n === "focusout" && yv();
  }
  function Sv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(cl);
  }
  function ry(n, r) {
    if (n === "click") return es(r);
  }
  function Ev(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : ay;
  function ts(n, r) {
    if (ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var u = Object.keys(n), o = Object.keys(r);
    if (u.length !== o.length) return !1;
    for (o = 0; o < u.length; o++) {
      var c = u[o];
      if (!W.call(r, c) || !ii(n[c], r[c])) return !1;
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
  function Tu(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tu(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
    if (r !== u && u && u.ownerDocument && Tu(u.ownerDocument.documentElement, u)) {
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
  var iy = Oe && "documentMode" in document && 11 >= document.documentMode, oo = null, od = null, rs = null, sd = !1;
  function cd(n, r, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    sd || oo == null || oo !== mt(o) || (o = oo, "selectionStart" in o && pc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ts(rs, o) || (rs = o, o = is(od, "onSelect"), 0 < o.length && (r = new zt("onSelect", "select", null, r, u), n.push({ event: r, listeners: o }), r.target = oo)));
  }
  function vc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var fl = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, gr = {}, fd = {};
  Oe && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function mc(n) {
    if (gr[n]) return gr[n];
    if (!fl[n]) return n;
    var r = fl[n], u;
    for (u in r) if (r.hasOwnProperty(u) && u in fd) return gr[n] = r[u];
    return n;
  }
  var Cv = mc("animationend"), bv = mc("animationiteration"), wv = mc("animationstart"), Rv = mc("transitionend"), dd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function La(n, r) {
    dd.set(n, r), J(r, [n]);
  }
  for (var pd = 0; pd < hc.length; pd++) {
    var dl = hc[pd], uy = dl.toLowerCase(), ly = dl[0].toUpperCase() + dl.slice(1);
    La(uy, "on" + ly);
  }
  La(Cv, "onAnimationEnd"), La(bv, "onAnimationIteration"), La(wv, "onAnimationStart"), La("dblclick", "onDoubleClick"), La("focusin", "onFocus"), La("focusout", "onBlur"), La(Rv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), J("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), J("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), J("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), J("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), J("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), J("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function yc(n, r, u) {
    var o = n.type || "unknown-event";
    n.currentTarget = u, Le(o, r, void 0, n), n.currentTarget = null;
  }
  function pl(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var x = o[h], R = x.instance, F = x.currentTarget;
          if (x = x.listener, R !== d && c.isPropagationStopped()) break e;
          yc(c, x, F), d = R;
        }
        else for (h = 0; h < o.length; h++) {
          if (x = o[h], R = x.instance, F = x.currentTarget, x = x.listener, R !== d && c.isPropagationStopped()) break e;
          yc(c, x, F), d = R;
        }
      }
    }
    if (yi) throw n = w, yi = !1, w = null, n;
  }
  function on(n, r) {
    var u = r[os];
    u === void 0 && (u = r[os] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (Tv(r, n, 2, !1), u.add(o));
  }
  function gc(n, r, u) {
    var o = 0;
    r && (o |= 4), Tv(u, n, o, r);
  }
  var Sc = "_reactListening" + Math.random().toString(36).slice(2);
  function so(n) {
    if (!n[Sc]) {
      n[Sc] = !0, $.forEach(function(u) {
        u !== "selectionchange" && (vd.has(u) || gc(u, !1, n), gc(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Sc] || (r[Sc] = !0, gc("selectionchange", !1, r));
    }
  }
  function Tv(n, r, u, o) {
    switch (ao(r)) {
      case 1:
        var c = to;
        break;
      case 4:
        c = no;
        break;
      default:
        c = wu;
    }
    u = c.bind(null, r, u, n), c = void 0, !zr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
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
          var R = h.tag;
          if ((R === 3 || R === 4) && (R = h.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          h = h.return;
        }
        for (; x !== null; ) {
          if (h = ml(x), h === null) return;
          if (R = h.tag, R === 5 || R === 6) {
            o = d = h;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    nl(function() {
      var F = d, re = $e(u), ue = [];
      e: {
        var te = dd.get(n);
        if (te !== void 0) {
          var Re = zt, ze = n;
          switch (n) {
            case "keypress":
              if (V(u) === 0) break e;
            case "keydown":
            case "keyup":
              Re = nd;
              break;
            case "focusin":
              ze = "focus", Re = sl;
              break;
            case "focusout":
              ze = "blur", Re = sl;
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
              Re = Ru;
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
            case wv:
              Re = sc;
              break;
            case Rv:
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
            var ae = U.stateNode;
            if (U.tag === 5 && ae !== null && (U = ae, M !== null && (ae = Ur(_, M), ae != null && Pe.push(co(_, ae, U)))), Wn) break;
            _ = _.return;
          }
          0 < Pe.length && (te = new Re(te, ze, null, u, re), ue.push({ event: te, listeners: Pe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", te && u !== me && (ze = u.relatedTarget || u.fromElement) && (ml(ze) || ze[Xi])) break e;
          if ((Re || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, Re ? (ze = u.relatedTarget || u.toElement, Re = F, ze = ze ? ml(ze) : null, ze !== null && (Wn = Ct(ze), ze !== Wn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (Re = null, ze = F), Re !== ze)) {
            if (Pe = Ru, ae = "onMouseLeave", M = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Pe = uv, ae = "onPointerLeave", M = "onPointerEnter", _ = "pointer"), Wn = Re == null ? te : ui(Re), U = ze == null ? te : ui(ze), te = new Pe(ae, _ + "leave", Re, u, re), te.target = Wn, te.relatedTarget = U, ae = null, ml(re) === F && (Pe = new Pe(M, _ + "enter", ze, u, re), Pe.target = U, Pe.relatedTarget = Wn, ae = Pe), Wn = ae, Re && ze) t: {
              for (Pe = Re, M = ze, _ = 0, U = Pe; U; U = ku(U)) _++;
              for (U = 0, ae = M; ae; ae = ku(ae)) U++;
              for (; 0 < _ - U; ) Pe = ku(Pe), _--;
              for (; 0 < U - _; ) M = ku(M), U--;
              for (; _--; ) {
                if (Pe === M || M !== null && Pe === M.alternate) break t;
                Pe = ku(Pe), M = ku(M);
              }
              Pe = null;
            }
            else Pe = null;
            Re !== null && kv(ue, te, Re, Pe, !1), ze !== null && Wn !== null && kv(ue, Wn, ze, Pe, !0);
          }
        }
        e: {
          if (te = F ? ui(F) : window, Re = te.nodeName && te.nodeName.toLowerCase(), Re === "select" || Re === "input" && te.type === "file") var je = ty;
          else if (pv(te)) if (mv) je = Ev;
          else {
            je = Sv;
            var et = ny;
          }
          else (Re = te.nodeName) && Re.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (je = ry);
          if (je && (je = je(n, F))) {
            id(ue, je, u, re);
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
            sd = !1, cd(ue, u, re);
            break;
          case "selectionchange":
            if (iy) break;
          case "keydown":
          case "keyup":
            cd(ue, u, re);
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
        vt && (ov && u.locale !== "ko" && (uo || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && uo && (rt = j()) : (ai = re, m = "value" in ai ? ai.value : ai.textContent, uo = !0)), et = is(F, vt), 0 < et.length && (vt = new Zf(vt, n, null, u, re), ue.push({ event: vt, listeners: et }), rt ? vt.data = rt : (rt = fv(u), rt !== null && (vt.data = rt)))), (rt = Zo ? dv(n, u) : Zh(n, u)) && (F = is(F, "onBeforeInput"), 0 < F.length && (re = new Zf("onBeforeInput", "beforeinput", null, u, re), ue.push({ event: re, listeners: F }), re.data = rt));
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
      var x = u, R = x.alternate, F = x.stateNode;
      if (R !== null && R === o) break;
      x.tag === 5 && F !== null && (x = F, c ? (R = Ur(u, d), R != null && h.unshift(co(u, R, x))) : c || (R = Ur(u, d), R != null && h.push(co(u, R, x)))), u = u.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var _v = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(_v, `
`).replace(oy, "");
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
    return Nv.resolve(null).then(n).catch(wc);
  } : bc;
  function wc(n) {
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
  var Du = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Du, ls = "__reactProps$" + Du, Xi = "__reactContainer$" + Du, os = "__reactEvents$" + Du, vo = "__reactListeners$" + Du, sy = "__reactHandles$" + Du;
  function ml(n) {
    var r = n[wi];
    if (r) return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Xi] || u[wi]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null) for (n = Ov(n); n !== null; ) {
          if (u = n[wi]) return u;
          n = Ov(n);
        }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Qe(n) {
    return n = n[wi] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
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
    return pe({}, u, o);
  }
  function cr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Or, na = Fn.current, We(Fn, n), We(ur, ur.current), !0;
  }
  function Rc(n, r, u) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    u ? (n = ss(n, r, na), o.__reactInternalMemoizedMergedChildContext = n, bn(ur), bn(Fn), We(Fn, n)) : bn(ur), We(ur, u);
  }
  var Ri = null, ho = !1, Ji = !1;
  function Tc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function Nu(n) {
    ho = !0, Tc(n);
  }
  function Ti() {
    if (!Ji && Ri !== null) {
      Ji = !0;
      var n = 0, r = Zt;
      try {
        var u = Ri;
        for (Zt = 1; n < u.length; n++) {
          var o = u[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), wn(ei, Ti), c;
      } finally {
        Zt = r, Ji = !1;
      }
    }
    return null;
  }
  var Ou = [], Mu = 0, Lu = null, Zi = 0, Xn = [], za = 0, Sa = null, ki = 1, _i = "";
  function hl(n, r) {
    Ou[Mu++] = Zi, Ou[Mu++] = Lu, Lu = n, Zi = r;
  }
  function Lv(n, r, u) {
    Xn[za++] = ki, Xn[za++] = _i, Xn[za++] = Sa, Sa = n;
    var o = ki;
    n = _i;
    var c = 32 - jr(o) - 1;
    o &= ~(1 << c), u += 1;
    var d = 32 - jr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, ki = 1 << 32 - jr(r) + c | u << c | o, _i = d + n;
    } else ki = 1 << d | u << c | o, _i = n;
  }
  function kc(n) {
    n.return !== null && (hl(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Lu; ) Lu = Ou[--Mu], Ou[Mu] = null, Zi = Ou[--Mu], Ou[Mu] = null;
    for (; n === Sa; ) Sa = Xn[--za], Xn[za] = null, _i = Xn[--za], Xn[za] = null, ki = Xn[--za], Xn[za] = null;
  }
  var aa = null, ia = null, kn = !1, ja = null;
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
    ja === null ? ja = [n] : ja.push(n);
  }
  var cy = Me.ReactCurrentBatchConfig;
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
    function x(M, _, U, ae) {
      return _ === null || _.tag !== 6 ? (_ = qd(U, M.mode, ae), _.return = M, _) : (_ = c(_, U), _.return = M, _);
    }
    function R(M, _, U, ae) {
      var je = U.type;
      return je === De ? re(M, _, U.props.children, ae, U.key) : _ !== null && (_.elementType === je || typeof je == "object" && je !== null && je.$$typeof === Dt && Uv(je) === _.type) ? (ae = c(_, U.props), ae.ref = yl(M, _, U), ae.return = M, ae) : (ae = Ps(U.type, U.key, U.props, null, M.mode, ae), ae.ref = yl(M, _, U), ae.return = M, ae);
    }
    function F(M, _, U, ae) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== U.containerInfo || _.stateNode.implementation !== U.implementation ? (_ = cf(U, M.mode, ae), _.return = M, _) : (_ = c(_, U.children || []), _.return = M, _);
    }
    function re(M, _, U, ae, je) {
      return _ === null || _.tag !== 7 ? (_ = uu(U, M.mode, ae, je), _.return = M, _) : (_ = c(_, U), _.return = M, _);
    }
    function ue(M, _, U) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = qd("" + _, M.mode, U), _.return = M, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Se:
            return U = Ps(_.type, _.key, _.props, null, M.mode, U), U.ref = yl(M, null, _), U.return = M, U;
          case Ke:
            return _ = cf(_, M.mode, U), _.return = M, _;
          case Dt:
            var ae = _._init;
            return ue(M, ae(_._payload), U);
        }
        if (Dn(_) || Ue(_)) return _ = uu(_, M.mode, U, null), _.return = M, _;
        Nc(M, _);
      }
      return null;
    }
    function te(M, _, U, ae) {
      var je = _ !== null ? _.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return je !== null ? null : x(M, _, "" + U, ae);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Se:
            return U.key === je ? R(M, _, U, ae) : null;
          case Ke:
            return U.key === je ? F(M, _, U, ae) : null;
          case Dt:
            return je = U._init, te(
              M,
              _,
              je(U._payload),
              ae
            );
        }
        if (Dn(U) || Ue(U)) return je !== null ? null : re(M, _, U, ae, null);
        Nc(M, U);
      }
      return null;
    }
    function Re(M, _, U, ae, je) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return M = M.get(U) || null, x(_, M, "" + ae, je);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case Se:
            return M = M.get(ae.key === null ? U : ae.key) || null, R(_, M, ae, je);
          case Ke:
            return M = M.get(ae.key === null ? U : ae.key) || null, F(_, M, ae, je);
          case Dt:
            var et = ae._init;
            return Re(M, _, U, et(ae._payload), je);
        }
        if (Dn(ae) || Ue(ae)) return M = M.get(U) || null, re(_, M, ae, je, null);
        Nc(_, ae);
      }
      return null;
    }
    function ze(M, _, U, ae) {
      for (var je = null, et = null, rt = _, vt = _ = 0, pr = null; rt !== null && vt < U.length; vt++) {
        rt.index > vt ? (pr = rt, rt = null) : pr = rt.sibling;
        var nn = te(M, rt, U[vt], ae);
        if (nn === null) {
          rt === null && (rt = pr);
          break;
        }
        n && rt && nn.alternate === null && r(M, rt), _ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn, rt = pr;
      }
      if (vt === U.length) return u(M, rt), kn && hl(M, vt), je;
      if (rt === null) {
        for (; vt < U.length; vt++) rt = ue(M, U[vt], ae), rt !== null && (_ = d(rt, _, vt), et === null ? je = rt : et.sibling = rt, et = rt);
        return kn && hl(M, vt), je;
      }
      for (rt = o(M, rt); vt < U.length; vt++) pr = Re(rt, M, vt, U[vt], ae), pr !== null && (n && pr.alternate !== null && rt.delete(pr.key === null ? vt : pr.key), _ = d(pr, _, vt), et === null ? je = pr : et.sibling = pr, et = pr);
      return n && rt.forEach(function(Yu) {
        return r(M, Yu);
      }), kn && hl(M, vt), je;
    }
    function Pe(M, _, U, ae) {
      var je = Ue(U);
      if (typeof je != "function") throw Error(E(150));
      if (U = je.call(U), U == null) throw Error(E(151));
      for (var et = je = null, rt = _, vt = _ = 0, pr = null, nn = U.next(); rt !== null && !nn.done; vt++, nn = U.next()) {
        rt.index > vt ? (pr = rt, rt = null) : pr = rt.sibling;
        var Yu = te(M, rt, nn.value, ae);
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
        for (; !nn.done; vt++, nn = U.next()) nn = ue(M, nn.value, ae), nn !== null && (_ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn);
        return kn && hl(M, vt), je;
      }
      for (rt = o(M, rt); !nn.done; vt++, nn = U.next()) nn = Re(rt, M, vt, nn.value, ae), nn !== null && (n && nn.alternate !== null && rt.delete(nn.key === null ? vt : nn.key), _ = d(nn, _, vt), et === null ? je = nn : et.sibling = nn, et = nn);
      return n && rt.forEach(function(ym) {
        return r(M, ym);
      }), kn && hl(M, vt), je;
    }
    function Wn(M, _, U, ae) {
      if (typeof U == "object" && U !== null && U.type === De && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Se:
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
              U.type === De ? (_ = uu(U.props.children, M.mode, ae, U.key), _.return = M, M = _) : (ae = Ps(U.type, U.key, U.props, null, M.mode, ae), ae.ref = yl(M, _, U), ae.return = M, M = ae);
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
              _ = cf(U, M.mode, ae), _.return = M, M = _;
            }
            return h(M);
          case Dt:
            return et = U._init, Wn(M, _, et(U._payload), ae);
        }
        if (Dn(U)) return ze(M, _, U, ae);
        if (Ue(U)) return Pe(M, _, U, ae);
        Nc(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, _ !== null && _.tag === 6 ? (u(M, _.sibling), _ = c(_, U), _.return = M, M = _) : (u(M, _), _ = qd(U, M.mode, ae), _.return = M, M = _), h(M)) : u(M, _);
    }
    return Wn;
  }
  var Vn = gl(!0), Ee = gl(!1), Ea = Ua(null), ua = null, yo = null, Sd = null;
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
  function wd(n, r, u, o) {
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
  function Rd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
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
  function jv(n, r) {
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
      var R = x, F = R.next;
      R.next = null, h === null ? d = F : h.next = F, h = R;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, x = re.lastBaseUpdate, x !== h && (x === null ? re.firstBaseUpdate = F : x.next = F, re.lastBaseUpdate = R));
    }
    if (d !== null) {
      var ue = c.baseState;
      h = 0, re = F = R = null, x = d;
      do {
        var te = x.lane, Re = x.eventTime;
        if ((o & te) === te) {
          re !== null && (re = re.next = {
            eventTime: Re,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var ze = n, Pe = x;
            switch (te = r, Re = u, Pe.tag) {
              case 1:
                if (ze = Pe.payload, typeof ze == "function") {
                  ue = ze.call(Re, ue, te);
                  break e;
                }
                ue = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Pe.payload, te = typeof ze == "function" ? ze.call(Re, ue, te) : ze, te == null) break e;
                ue = pe({}, ue, te);
                break e;
              case 2:
                Ca = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [x] : te.push(x));
        } else Re = { eventTime: Re, lane: te, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, re === null ? (F = re = Re, R = ue) : re = re.next = Re, h |= te;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          te = x, x = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (re === null && (R = ue), c.baseState = R, c.firstBaseUpdate = F, c.lastBaseUpdate = re, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= h, n.lanes = h, n.memoizedState = ue;
    }
  }
  function Td(n, r, u) {
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
        r = (r = r.documentElement) ? r.namespaceURI : wt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wt(r, n);
    }
    bn(Di), We(Di, r);
  }
  function xl() {
    bn(Di), bn(ps), bn(vs);
  }
  function Fv(n) {
    El(vs.current);
    var r = El(Di.current), u = wt(r, n.type);
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
  var Mt = Me.ReactCurrentDispatcher, en = Me.ReactCurrentBatchConfig, vn = 0, tn = null, Jn = null, fr = null, Ac = !1, hs = !1, Cl = 0, ee = 0;
  function Jt() {
    throw Error(E(321));
  }
  function ut(n, r) {
    if (r === null) return !1;
    for (var u = 0; u < r.length && u < n.length; u++) if (!ii(n[u], r[u])) return !1;
    return !0;
  }
  function zu(n, r, u, o, c, d) {
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
  function ju(n) {
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
      var x = h = null, R = null, F = d;
      do {
        var re = F.lane;
        if ((vn & re) === re) R !== null && (R = R.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var ue = {
            lane: re,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          R === null ? (x = R = ue, h = o) : R = R.next = ue, tn.lanes |= re, Li |= re;
        }
        F = F.next;
      } while (F !== null && F !== d);
      R === null ? h = o : R.next = x, ii(o, r.memoizedState) || (Zn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = R, u.lastRenderedState = o;
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
  function zc(n, r) {
    var u = tn, o = $n(), c = r(), d = !ii(o.memoizedState, c);
    if (d && (o.memoizedState = c, Zn = !0), o = o.queue, ys(Hc.bind(null, u, o, n), [n]), o.getSnapshot !== r || d || fr !== null && fr.memoizedState.tag & 1) {
      if (u.flags |= 2048, wl(9, Fc.bind(null, u, o, c, r), void 0, null), or === null) throw Error(E(349));
      vn & 30 || jc(u, r, c);
    }
    return c;
  }
  function jc(n, r, u) {
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Tl.bind(null, tn, n), [r.memoizedState, n];
  }
  function wl(n, r, u, o) {
    return n = { tag: n, create: r, destroy: u, deps: o, next: null }, r = tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function $c() {
    return $n().memoizedState;
  }
  function go(n, r, u, o) {
    var c = Mr();
    tn.flags |= n, c.memoizedState = wl(1 | r, u, void 0, o === void 0 ? null : o);
  }
  function So(n, r, u, o) {
    var c = $n();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Jn !== null) {
      var h = Jn.memoizedState;
      if (d = h.destroy, o !== null && ut(o, h.deps)) {
        c.memoizedState = wl(r, u, d, o);
        return;
      }
    }
    tn.flags |= n, c.memoizedState = wl(1 | r, u, d, o);
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
  function Rl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, u) {
    return u = u != null ? u.concat([n]) : null, So(4, 4, Rl.bind(null, r, n), u);
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
    else if (u = wd(n, r, u, o), u !== null) {
      var c = nr();
      $r(u, n, o, c), yn(u, r, o);
    }
  }
  function Tl(n, r, u) {
    var o = Ai(n), c = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (la(n)) Hv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, x = d(h, u);
        if (c.hasEagerState = !0, c.eagerState = x, ii(x, h)) {
          var R = r.interleaved;
          R === null ? (c.next = c, bd(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      u = wd(n, r, c, o), u !== null && (c = nr(), $r(u, n, o, c), yn(u, r, o));
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
      Rl.bind(null, r, n),
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
      vn & 30 || jc(o, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, Ic(Hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, wl(9, Fc.bind(null, o, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Mr(), r = or.identifierPrefix;
    if (kn) {
      var u = _i, o = ki;
      u = (o & ~(1 << 32 - jr(o) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Cl++, 0 < u && (r += "H" + u.toString(32)), r += ":";
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
    useReducer: ju,
    useRef: $c,
    useState: function() {
      return ju(nu);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = $n();
      return _d(r, Jn.memoizedState, n);
    },
    useTransition: function() {
      var n = ju(nu)[0], r = $n().memoizedState;
      return [n, r];
    },
    useMutableSource: Uc,
    useSyncExternalStore: zc,
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
  }, useMutableSource: Uc, useSyncExternalStore: zc, useId: Dd, unstable_isNewReconciler: !1 };
  function oi(n, r) {
    if (n && n.defaultProps) {
      r = pe({}, r), n = n.defaultProps;
      for (var u in n) r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  function Nd(n, r, u, o) {
    r = n.memoizedState, u = u(o, r), u = u == null ? r : pe({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
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
    c.props = u, c.state = n.memoizedState, c.refs = {}, Rd(n);
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
      Ro || (Ro = !0, Ol = o), Md(n, r);
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
    c.has(u) || (c.add(u), n = yy.bind(null, n, r, u), r.then(n, n));
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
  var ws = Me.ReactCurrentOwner, Zn = !1;
  function Sr(n, r, u, o) {
    r.child = n === null ? Ee(r, null, u, o) : Vn(r, n.child, u, o);
  }
  function oa(n, r, u, o, c) {
    u = u.render;
    var d = r.ref;
    return An(r, c), o = zu(n, r, u, o, d, c), u = li(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (kn && u && kc(r), r.flags |= 1, Sr(n, r, o, c), r.child);
  }
  function Dl(n, r, u, o, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, Rt(n, r, d, o, c)) : (n = Ps(u.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ts, u(h, o) && n.ref === r.ref) return Pa(n, r, c);
    }
    return r.flags |= 1, n = Vu(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Rt(n, r, u, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref) if (Zn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Zn = !0);
      else return r.lanes = n.lanes, Pa(n, r, c);
    }
    return Iv(n, r, u, o, c);
  }
  function Rs(n, r, u) {
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
    return d = ra(r, d), An(r, c), u = zu(n, r, u, o, d, c), o = li(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (kn && o && kc(r), r.flags |= 1, Sr(n, r, u, c), r.child);
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
      var R = h.context, F = u.contextType;
      typeof F == "object" && F !== null ? F = Fa(F) : (F = Kn(u) ? na : Fn.current, F = ra(r, F));
      var re = u.getDerivedStateFromProps, ue = typeof re == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      ue || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== o || R !== F) && Bv(r, h, o, F), Ca = !1;
      var te = r.memoizedState;
      h.state = te, fs(r, o, h, c), R = r.memoizedState, x !== o || te !== R || ur.current || Ca ? (typeof re == "function" && (Nd(r, u, re, o), R = r.memoizedState), (x = Ca || Pv(r, u, x, o, te, R, F)) ? (ue || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), h.props = o, h.state = R, h.context = F, o = x) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, zv(n, r), x = r.memoizedProps, F = r.type === r.elementType ? x : oi(r.type, x), h.props = F, ue = r.pendingProps, te = h.context, R = u.contextType, typeof R == "object" && R !== null ? R = Fa(R) : (R = Kn(u) ? na : Fn.current, R = ra(r, R));
      var Re = u.getDerivedStateFromProps;
      (re = typeof Re == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== ue || te !== R) && Bv(r, h, o, R), Ca = !1, te = r.memoizedState, h.state = te, fs(r, o, h, c);
      var ze = r.memoizedState;
      x !== ue || te !== ze || ur.current || Ca ? (typeof Re == "function" && (Nd(r, u, Re, o), ze = r.memoizedState), (F = Ca || Pv(r, u, F, o, te, ze, R) || !1) ? (re || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ze, R), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ze, R)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ze), h.props = o, h.state = ze, h.context = R, o = F) : (typeof h.componentDidUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ts(n, r, u, o, d, c);
  }
  function Ts(n, r, u, o, c, d) {
    Ud(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && Rc(r, u, !1), Pa(n, r, d);
    o = r.stateNode, ws.current = r;
    var x = h && typeof u.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Vn(r, n.child, null, d), r.child = Vn(r, null, x, d)) : Sr(n, r, x, d), r.memoizedState = o.state, c && Rc(r, u, !0), r.child;
  }
  function Eo(n) {
    var r = n.stateNode;
    r.pendingContext ? Mv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mv(n, r.context, !1), kd(n, r.containerInfo);
  }
  function Wv(n, r, u, o, c) {
    return Au(), eu(c), r.flags |= 256, Sr(n, r, u, o), r.child;
  }
  var ef = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function tf(n, r, u) {
    var o = r.pendingProps, c = Un.current, d = !1, h = (r.flags & 128) !== 0, x;
    if ((x = h) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), We(Un, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = $u(h, o, 0, null), n = uu(n, o, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(u), r.memoizedState = ef, n) : jd(r, h));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return Qv(n, r, h, o, x, c, u);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, x = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = Vu(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Vu(x, d) : (d = uu(d, h, u, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? zd(u) : { baseLanes: h.baseLanes | u, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~u, r.memoizedState = ef, o;
    }
    return d = n.child, n = d.sibling, o = Vu(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = u), o.return = r, o.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function jd(n, r) {
    return r = $u({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ks(n, r, u, o) {
    return o !== null && eu(o), Vn(r, n.child, null, u), n = jd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, u, o, c, d, h) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(E(422))), ks(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = $u({ mode: "visible", children: o.children }, c, 0, null), d = uu(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Vn(r, n.child, null, h), r.child.memoizedState = zd(h), r.memoizedState = ef, d);
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
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = bi(c.nextSibling), aa = r, kn = !0, ja = null, n !== null && (Xn[za++] = ki, Xn[za++] = _i, Xn[za++] = Sa, ki = n.id, _i = n.overflow, Sa = r), r = jd(r, o.children), r.flags |= 4096, r);
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
        return r.lanes = 0, Rs(n, r, u);
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
          c = pe({}, c, { value: void 0 }), o = pe({}, o, { value: void 0 }), d = [];
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
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (G.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var R = o[F];
        if (x = c != null ? c[F] : void 0, o.hasOwnProperty(F) && R !== x && (R != null || x != null)) if (F === "style") if (x) {
          for (h in x) !x.hasOwnProperty(h) || R && R.hasOwnProperty(h) || (u || (u = {}), u[h] = "");
          for (h in R) R.hasOwnProperty(h) && x[h] !== R[h] && (u || (u = {}), u[h] = R[h]);
        } else u || (d || (d = []), d.push(
          F,
          u
        )), u = R;
        else F === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, x = x ? x.__html : void 0, R != null && x !== R && (d = d || []).push(F, R)) : F === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(F, "" + R) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (G.hasOwnProperty(F) ? (R != null && F === "onScroll" && on("scroll", n), d || x === R || (d = [])) : (d = d || []).push(F, R));
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
        return o = r.stateNode, xl(), bn(ur), bn(Fn), Ge(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Ml(ja), ja = null))), er(n, r), dr(r), null;
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
            switch (o[wi] = r, o[ls] = d, n = (r.mode & 1) !== 0, u) {
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
              ), c = ["children", "" + x]) : G.hasOwnProperty(h) && x != null && h === "onScroll" && on("scroll", o);
            }
            switch (u) {
              case "input":
                gn(o), Zr(o, d, !0);
                break;
              case "textarea":
                gn(o), we(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = _u);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = at(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(u, { is: o.is }) : (n = h.createElement(u), u === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, u), n[wi] = r, n[ls] = o, Ba(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = pe({}, o, { value: void 0 }), on("invalid", n);
                  break;
                case "textarea":
                  On(n, o), c = Nn(n, o), on("invalid", n);
                  break;
                default:
                  c = o;
              }
              Xt(u, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var R = x[d];
                d === "style" ? Qt(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && un(n, R)) : d === "children" ? typeof R == "string" ? (u !== "textarea" || R !== "") && Z(n, R) : typeof R == "number" && Z(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (G.hasOwnProperty(d) ? R != null && d === "onScroll" && on("scroll", n) : R != null && ie(n, d, R, h));
              }
              switch (u) {
                case "input":
                  gn(n), Zr(n, o, !1);
                  break;
                case "textarea":
                  gn(n), we(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + q(o.value));
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
            if (o = r.stateNode, u = r.memoizedProps, o[wi] = r, (d = o.nodeValue !== u) && (n = aa, n !== null)) switch (n.tag) {
              case 3:
                xc(o.nodeValue, u, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(o.nodeValue, u, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(o), o[wi] = r, r.stateNode = o;
        }
        return dr(r), null;
      case 13:
        if (bn(Un), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kn && ia !== null && r.mode & 1 && !(r.flags & 128)) cs(), Au(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[wi] = r;
            } else Au(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            dr(r), d = !1;
          } else ja !== null && (Ml(ja), ja = null), d = !0;
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
          d.tail !== null && bt() > wo && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(h), n !== null) {
            if (r.flags |= 128, o = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !kn) return dr(r), null;
          } else 2 * bt() - d.renderingStartTime > wo && u !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
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
  var Ns = !1, Lr = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
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
          var h = 0, x = -1, R = -1, F = 0, re = 0, ue = n, te = null;
          t: for (; ; ) {
            for (var Re; ue !== u || c !== 0 && ue.nodeType !== 3 || (x = h + c), ue !== d || o !== 0 && ue.nodeType !== 3 || (R = h + o), ue.nodeType === 3 && (h += ue.nodeValue.length), (Re = ue.firstChild) !== null; )
              te = ue, ue = Re;
            for (; ; ) {
              if (ue === n) break t;
              if (te === u && ++F === c && (x = h), te === d && ++re === o && (R = h), (Re = ue.nextSibling) !== null) break;
              ue = te, te = ue.parentNode;
            }
            ue = Re;
          }
          u = x === -1 || R === -1 ? null : { start: x, end: R };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (vl = { focusedElem: n, selectionRange: u }, Ma = !1, Ne = r; Ne !== null; ) if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ne = n;
    else for (; Ne !== null; ) {
      r = Ne;
      try {
        var ze = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ze !== null) {
              var Pe = ze.memoizedProps, Wn = ze.memoizedState, M = r.stateNode, _ = M.getSnapshotBeforeUpdate(r.elementType === r.type ? Pe : oi(r.type, Pe), Wn);
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
      } catch (ae) {
        _n(r, r.return, ae);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ne = n;
        break;
      }
      Ne = r.return;
    }
    return ze = Xv, Xv = !1, ze;
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
    r !== null && (n.alternate = null, af(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[ls], delete r[os], delete r[vo], delete r[sy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
      u === null && (u = n.stateNode = new fy()), r.forEach(function(o) {
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
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
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
          var d = n.memoizedProps, h = u !== null ? u.memoizedProps : d, x = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            x === "input" && d.type === "radio" && d.name != null && cn(c, d), B(x, h);
            var F = B(x, d);
            for (h = 0; h < R.length; h += 2) {
              var re = R[h], ue = R[h + 1];
              re === "style" ? Qt(c, ue) : re === "dangerouslySetInnerHTML" ? un(c, ue) : re === "children" ? Z(c, ue) : ie(c, re, ue, F);
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
        if (re = u !== null && u.memoizedState !== null, n.mode & 1 ? (Lr = (F = Lr) || re, si(r, n), Lr = F) : si(r, n), sa(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !re && n.mode & 1) for (Ne = n, re = n.child; re !== null; ) {
            for (ue = Ne = re; Ne !== null; ) {
              switch (te = Ne, Re = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, te, te.return);
                  break;
                case 1:
                  xo(te, te.return);
                  var ze = te.stateNode;
                  if (typeof ze.componentWillUnmount == "function") {
                    o = te, u = te.return;
                    try {
                      r = o, ze.props = r.memoizedProps, ze.state = r.memoizedState, ze.componentWillUnmount();
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
            re = re.sibling;
          }
          e: for (re = null, ue = n; ; ) {
            if (ue.tag === 5) {
              if (re === null) {
                re = ue;
                try {
                  c = ue.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = ue.stateNode, R = ue.memoizedProps.style, h = R != null && R.hasOwnProperty("display") ? R.display : null, x.style.display = Et("display", h));
                } catch (Pe) {
                  _n(n, n.return, Pe);
                }
              }
            } else if (ue.tag === 6) {
              if (re === null) try {
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
              re === ue && (re = null), ue = ue.return;
            }
            re === ue && (re = null), ue.sibling.return = ue.return, ue = ue.sibling;
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
      } catch (R) {
        _n(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function dy(n, r, u) {
    Ne = n, Bd(n);
  }
  function Bd(n, r, u) {
    for (var o = (n.mode & 1) !== 0; Ne !== null; ) {
      var c = Ne, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Ns;
        if (!h) {
          var x = c.alternate, R = x !== null && x.memoizedState !== null || Lr;
          x = Ns;
          var F = Lr;
          if (Ns = h, (Lr = R) && !F) for (Ne = c; Ne !== null; ) h = Ne, R = h.child, h.tag === 22 && h.memoizedState !== null ? Vd(c) : R !== null ? (R.return = h, Ne = R) : Vd(c);
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
              d !== null && Td(r, d, o);
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
                Td(r, h, u);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (u === null && r.flags & 4) {
                u = x;
                var R = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && u.focus();
                    break;
                  case "img":
                    R.src && (u.src = R.src);
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
                  var re = F.memoizedState;
                  if (re !== null) {
                    var ue = re.dehydrated;
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
            } catch (R) {
              _n(r, u, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                _n(r, c, R);
              }
            }
            var d = r.return;
            try {
              Hd(r);
            } catch (R) {
              _n(r, d, R);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Hd(r);
            } catch (R) {
              _n(r, h, R);
            }
        }
      } catch (R) {
        _n(r, r.return, R);
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
  var py = Math.ceil, Hu = Me.ReactCurrentDispatcher, Nl = Me.ReactCurrentOwner, Er = Me.ReactCurrentBatchConfig, It = 0, or = null, tr = null, xr = 0, ba = 0, Co = Ua(0), Yn = 0, Us = null, Li = 0, bo = 0, uf = 0, zs = null, ca = null, $d = 0, wo = 1 / 0, wa = null, Ro = !1, Ol = null, Pu = null, lf = !1, au = null, js = 0, Bu = 0, To = null, Fs = -1, Ar = 0;
  function nr() {
    return It & 6 ? bt() : Fs !== -1 ? Fs : Fs = bt();
  }
  function Ai(n) {
    return n.mode & 1 ? It & 2 && xr !== 0 ? xr & -xr : cy.transition !== null ? (Ar === 0 && (Ar = Xl()), Ar) : (n = Zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ao(n.type)), n) : 1;
  }
  function $r(n, r, u, o) {
    if (50 < Bu) throw Bu = 0, To = null, Error(E(185));
    Yi(n, u, o), (!(It & 2) || n !== or) && (n === or && (!(It & 2) && (bo |= u), Yn === 4 && ci(n, xr)), fa(n, o), u === 1 && It === 0 && !(r.mode & 1) && (wo = bt() + 500, ho && Ti()));
  }
  function fa(n, r) {
    var u = n.callbackNode;
    il(n, r);
    var o = ni(n, n === or ? xr : 0);
    if (o === 0) u !== null && hr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (u != null && hr(u), r === 1) n.tag === 0 ? Nu(Id.bind(null, n)) : Tc(Id.bind(null, n)), fo(function() {
        !(It & 6) && Ti();
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
      (or !== n || xr !== r) && (wa = null, wo = bt() + 500, iu(n, r));
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
        if (c = n.current.alternate, !(o & 30) && !vy(c) && (r = sf(n, o), r === 2 && (d = xu(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw u = Us, iu(n, 0), ci(n, o), fa(n, bt()), u;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Al(n, ca, wa);
            break;
          case 3:
            if (ci(n, o), (o & 130023424) === o && (r = $d + 500 - bt(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = bc(Al.bind(null, n, ca, wa), r);
              break;
            }
            Al(n, ca, wa);
            break;
          case 4:
            if (ci(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - jr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * py(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = bc(Al.bind(null, n, ca, wa), o);
              break;
            }
            Al(n, ca, wa);
            break;
          case 5:
            Al(n, ca, wa);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return fa(n, bt()), n.callbackNode === u ? of.bind(null, n) : null;
  }
  function Hs(n, r) {
    var u = zs;
    return n.current.memoizedState.isDehydrated && (iu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = ca, ca = u, r !== null && Ml(r)), n;
  }
  function Ml(n) {
    ca === null ? ca = n : ca.push.apply(ca, n);
  }
  function vy(n) {
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
      var u = 31 - jr(r), o = 1 << u;
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
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Al(n, ca, wa), fa(n, bt()), null;
  }
  function Yd(n, r) {
    var u = It;
    It |= 1;
    try {
      return n(r);
    } finally {
      It = u, It === 0 && (wo = bt() + 500, ho && Ti());
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
      Zt = o, Er.transition = u, It = r, !(It & 6) && Ti();
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
    if (or = n, tr = n = Vu(n.current, null), xr = ba = r, Yn = 0, Us = null, uf = bo = Li = 0, ca = zs = null, Sl !== null) {
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
          var d = n, h = u.return, x = u, R = r;
          if (r = xr, x.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var F = R, re = x, ue = re.tag;
            if (!(re.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var Re = $v(h);
            if (Re !== null) {
              Re.flags &= -257, Fu(Re, h, x, d, r), Re.mode & 1 && Ad(d, F, r), r = Re, R = F;
              var ze = r.updateQueue;
              if (ze === null) {
                var Pe = /* @__PURE__ */ new Set();
                Pe.add(R), r.updateQueue = Pe;
              } else ze.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                Ad(d, F, r), Qd();
                break e;
              }
              R = Error(E(426));
            }
          } else if (kn && x.mode & 1) {
            var Wn = $v(h);
            if (Wn !== null) {
              !(Wn.flags & 65536) && (Wn.flags |= 256), Fu(Wn, h, x, d, r), eu(_l(R, x));
              break e;
            }
          }
          d = R = _l(R, x), Yn !== 4 && (Yn = 2), zs === null ? zs = [d] : zs.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var M = Vv(d, R, r);
                jv(d, M);
                break e;
              case 1:
                x = R;
                var _ = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Pu === null || !Pu.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ae = Ld(d, x, r);
                  jv(d, ae);
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
    (or !== n || xr !== r) && (wa = null, iu(n, r));
    do
      try {
        my();
        break;
      } catch (c) {
        nm(n, c);
      }
    while (!0);
    if (Ed(), It = u, Hu.current = o, tr !== null) throw Error(E(261));
    return or = null, xr = 0, Yn;
  }
  function my() {
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
      Er.transition = null, Zt = 1, hy(n, r, u, o);
    } finally {
      Er.transition = c, Zt = o;
    }
    return null;
  }
  function hy(n, r, u, o) {
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
      It |= 4, Nl.current = null, Jv(n, u), Pd(u, n), lo(vl), Ma = !!us, vl = us = null, n.current = u, dy(u), Za(), It = x, Zt = h, Er.transition = d;
    } else n.current = u;
    if (lf && (lf = !1, au = n, js = c), d = n.pendingLanes, d === 0 && (Pu = null), Wo(u.stateNode), fa(n, bt()), r !== null) for (o = n.onRecoverableError, u = 0; u < r.length; u++) c = r[u], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ro) throw Ro = !1, n = Ol, Ol = null, n;
    return js & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === To ? Bu++ : (Bu = 0, To = n) : Bu = 0, Ti(), null;
  }
  function ko() {
    if (au !== null) {
      var n = Zl(js), r = Er.transition, u = Zt;
      try {
        if (Er.transition = null, Zt = 16 > n ? 16 : n, au === null) var o = !1;
        else {
          if (n = au, au = null, js = 0, It & 6) throw Error(E(331));
          var c = It;
          for (It |= 4, Ne = n.current; Ne !== null; ) {
            var d = Ne, h = d.child;
            if (Ne.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var R = 0; R < x.length; R++) {
                  var F = x[R];
                  for (Ne = F; Ne !== null; ) {
                    var re = Ne;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, re, d);
                    }
                    var ue = re.child;
                    if (ue !== null) ue.return = re, Ne = ue;
                    else for (; Ne !== null; ) {
                      re = Ne;
                      var te = re.sibling, Re = re.return;
                      if (af(re), re === F) {
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
                var ze = d.alternate;
                if (ze !== null) {
                  var Pe = ze.child;
                  if (Pe !== null) {
                    ze.child = null;
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
              var ae = x.sibling;
              if (ae !== null) {
                ae.return = x.return, Ne = ae;
                break e;
              }
              Ne = x.return;
            }
          }
          if (It = c, Ti(), ea && typeof ea.onPostCommitFiberRoot == "function") try {
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
  function yy(n, r, u) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & u, or === n && (xr & u) === u && (Yn === 4 || Yn === 3 && (xr & 130023424) === xr && 500 > bt() - $d ? iu(n, 0) : uf |= u), fa(n, r);
  }
  function om(n, r) {
    r === 0 && (n.mode & 1 ? (r = ga, ga <<= 1, !(ga & 130023424) && (ga = 4194304)) : r = 1);
    var u = nr();
    n = xa(n, r), n !== null && (Yi(n, r, u), fa(n, u));
  }
  function gy(n) {
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
        An(r, u), c = zu(null, r, o, n, c, u);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kn(o) ? (d = !0, cr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rd(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, bs(r, o, n, u), r = Ts(null, r, o, !0, d, u)) : (r.tag = 0, kn && d && kc(r), Sr(null, r, c, u), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = oi(o, n), c) {
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
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), fs(r, o, null, u);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(E(423)), r), r = Wv(n, r, o, u, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(E(424)), r), r = Wv(n, r, o, u, c);
            break e;
          } else for (ia = bi(r.stateNode.containerInfo.firstChild), aa = r, kn = !0, ja = null, u = Ee(r, null, o, u), r.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
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
              for (var R = x.firstContext; R !== null; ) {
                if (R.context === o) {
                  if (d.tag === 1) {
                    R = tu(-1, u & -u), R.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var re = F.pending;
                      re === null ? R.next = R : (R.next = re.next, re.next = R), F.pending = R;
                    }
                  }
                  d.lanes |= u, R = d.alternate, R !== null && (R.lanes |= u), Cd(
                    d.return,
                    u,
                    r
                  ), x.lanes |= u;
                  break;
                }
                R = R.next;
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
        return Rt(n, r, r.type, r.pendingProps, u);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), Ha(n, r), r.tag = 1, Kn(o) ? (n = !0, cr(r)) : n = !1, An(r, u), Jc(r, o, c), bs(r, o, c, u), Ts(null, r, o, !0, n, u);
      case 19:
        return Ni(n, r, u);
      case 22:
        return Rs(n, r, u);
    }
    throw Error(E(156, r.tag));
  };
  function fm(n, r) {
    return wn(n, r);
  }
  function Sy(n, r, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, u, o) {
    return new Sy(n, r, u, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
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
      case jt:
        h = 8, c |= 8;
        break;
      case it:
        return n = Va(12, u, r, c | 2), n.elementType = it, n.lanes = d, n;
      case Be:
        return n = Va(13, u, r, c), n.elementType = Be, n.lanes = d, n;
      case Tt:
        return n = Va(19, u, r, c), n.elementType = Tt, n.lanes = d, n;
      case Ae:
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
    return n = Va(22, n, o, r), n.elementType = Ae, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
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
  function ff(n, r, u, o, c, d, h, x, R) {
    return n = new dm(n, r, u, x, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rd(d), n;
  }
  function xy(n, r, u) {
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
  function pm(n, r, u, o, c, d, h, x, R) {
    return n = ff(u, o, !0, n, c, d, h, x, R), n.context = Kd(null), u = n.current, o = nr(), c = Ai(u), d = tu(o, c), d.callback = r ?? null, Uu(u, d, c), n.current.lanes = c, Yi(n, c, o), fa(n, o), n;
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
  function Cy(n, r, u, o, c) {
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
        var F = pf(R);
        x.call(F);
      };
    }
    var R = ff(n, 0, !1, null, null, !1, !1, "", mm);
    return n._reactRootContainer = R, n[Xi] = R.current, so(n.nodeType === 8 ? n.parentNode : n), Ll(function() {
      df(r, R, u, o);
    }), R;
  }
  function Bs(n, r, u, o, c) {
    var d = u._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var R = pf(h);
          x.call(R);
        };
      }
      df(r, h, n, c);
    } else h = Cy(u, r, n, c, o);
    return pf(h);
  }
  Gt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ti(r.pendingLanes);
          u !== 0 && (Wi(r, u | 1), fa(r, bt()), !(It & 6) && (wo = bt() + 500, Ti()));
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
  var by = { usingClientEntryPoint: !1, Events: [Qe, ui, Ln, ya, $i, Yd] }, Vs = { findFiberByHostInstance: ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hm = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber) try {
      Su = Iu.inject(hm), ea = Iu;
    } catch {
    }
  }
  return Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, Ga.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r)) throw Error(E(200));
    return xy(n, r, null, u);
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
var Sx;
function DT() {
  return Sx || (Sx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var C = fe, T = Nx(), E = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = !1;
    function G(e) {
      $ = e;
    }
    function J(e) {
      if (!$) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Oe("warn", e, a);
      }
    }
    function y(e) {
      if (!$) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Oe("error", e, a);
      }
    }
    function Oe(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var W = 0, ne = 1, ve = 2, K = 3, de = 4, se = 5, be = 6, lt = 7, qe = 8, Ft = 9, He = 10, ie = 11, Me = 12, Se = 13, Ke = 14, De = 15, jt = 16, it = 17, ot = 18, Pt = 19, yt = 21, Be = 22, Tt = 23, Lt = 24, Dt = 25, Ae = !0, oe = !1, Ue = !1, pe = !1, N = !1, P = !0, Xe = !0, Ve = !0, st = !0, tt = /* @__PURE__ */ new Set(), ft = {}, q = {};
    function dt(e, t) {
      At(e, t), At(e + "Capture", t);
    }
    function At(e, t) {
      ft[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ft[e] = t;
      {
        var a = e.toLowerCase();
        q[a] = e, e === "onDoubleClick" && (q.ondblclick = e);
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
    var Nn = 0, On = 1, Nr = 2, we = 3, at = 4, wt = 5, Vt = 6, un = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Z = un + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ke = new RegExp("^[" + un + "][" + Z + "]*$"), pt = {}, Et = {};
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
          case we:
            return !t;
          case at:
            return t === !1;
          case wt:
            return isNaN(t);
          case Vt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function me(e) {
      return Ie.hasOwnProperty(e) ? Ie[e] : null;
    }
    function $e(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Nr || t === we || t === at, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        we,
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
        we,
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
        wt,
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
    var ar = /[\-\:]([a-z])/g, jn = function(e) {
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
      var t = e.replace(ar, jn);
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
      var t = e.replace(ar, jn);
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
      var t = e.replace(ar, jn);
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
          if (i.type === we)
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
      var l = me(t);
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
            e[p] = v === we ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = l.attributeName, S = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = l.type, k;
          D === we || D === at && a === !0 ? k = "" : (cn(a, g), k = "" + a, l.sanitizeURL && Ka(k.toString())), S ? e.setAttributeNS(S, g, k) : e.setAttribute(g, k);
        }
      }
    }
    var zr = Symbol.for("react.element"), mr = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), w = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), Ut = Symbol.for("react.scope"), Ot = Symbol.for("react.debug_trace_mode"), Bn = Symbol.for("react.offscreen"), xn = Symbol.for("react.legacy_hidden"), wn = Symbol.for("react.cache"), hr = Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function bt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var kt = Object.assign, ei = 0, rl, al, gu, Gl, Su, ea, Wo;
    function jr() {
    }
    jr.__reactDisabledLog = !0;
    function lc() {
      {
        if (ei === 0) {
          rl = console.log, al = console.info, gu = console.warn, Gl = console.error, Su = console.group, ea = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: jr,
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
      var k = e ? e.displayName || e.name : "", z = k ? ga(k) : "";
      return typeof e == "function" && ni.set(e, z), z;
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
        case ge:
          return ga("Suspense");
        case Le:
          return ga("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case X:
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
        case se:
          return ga(e.type);
        case jt:
          return ga("Lazy");
        case Se:
          return ga("Suspense");
        case Pt:
          return ga("SuspenseList");
        case W:
        case ve:
        case De:
          return Xl(e.type);
        case ie:
          return Xl(e.type.render);
        case ne:
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
        case ge:
          return "Suspense";
        case Le:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var t = e;
            return Zl(t) + ".Consumer";
          case yi:
            var a = e;
            return Zl(a._context) + ".Provider";
          case X:
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
        case se:
          return a;
        case de:
          return "Portal";
        case K:
          return "Root";
        case be:
          return "Text";
        case jt:
          return Gt(a);
        case qe:
          return a === Xa ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case Me:
          return "Profiler";
        case yt:
          return "Scope";
        case Se:
          return "Suspense";
        case Pt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case ne:
        case W:
        case it:
        case ve:
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
    function Rn() {
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
    var to = !1, no = !1, wu = !1, ol = !1;
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
    function b(e, t) {
      var a = e;
      {
        var i = ro(t);
        !a._wrapperState.controlled && i && !ol && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ol = !0), a._wrapperState.controlled && !i && !wu && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wu = !0);
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
    function j(e, t, a) {
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
      b(a, t), ce(a, t);
    }
    function ce(e, t) {
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
            xi(f), b(f, p);
          }
        }
      }
    }
    function Je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ma(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Hr(e._wrapperState.initialValue) : e.defaultValue !== Hr(a) && (e.defaultValue = Hr(a)));
    }
    var ye = !1, nt = !1, zt = !1;
    function qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? C.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || nt || (nt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (zt || (zt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ye && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ye = !0);
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
    var Ru = ["value", "defaultValue"];
    function Ko(e) {
      {
        Go("select", e);
        for (var t = 0; t < Ru.length; t++) {
          var a = Ru[t];
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
    function Jh(e, t) {
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
      var Zh = /^(?:webkit|moz|o)[A-Z]/, ey = /^-ms-/, pv = /-(.)/g, id = /;\s*$/, Ci = {}, cl = {}, vv = !1, es = !1, ty = function(e) {
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
          ty(e.replace(ey, "ms-"))
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
        e.indexOf("-") > -1 ? mv(e) : Zh.test(e) ? ud(e) : id.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || yv(e, t));
      };
    }
    var gv = dv;
    function ny(e) {
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
    function ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ev(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ay(e, t) {
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
            l[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ry(e[f]) ? "Removing" : "Updating", f, p);
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
    function Tu(e, t) {
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
    }, lo = {}, iy = new RegExp("^(aria)-[" + Z + "]*$"), oo = new RegExp("^(aria)[A-Z][" + Z + "]*$");
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
        if (iy.test(t)) {
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
      Tu(e, t) || rs(e, t);
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
        var v = me(t), g = v !== null && v.type === Nn;
        if (ns.hasOwnProperty(l)) {
          var S = ns[l];
          if (S !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, S), gr[t] = !0, !0;
        } else if (!g && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), gr[t] = !0, !0;
        return typeof a == "boolean" && Xt(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), gr[t] = !0, !0) : g ? !0 : Xt(t, a, v, !1) ? (gr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === we && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), gr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
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
    function Rv(e, t, a) {
      Tu(e, t) || wv(e, t, a);
    }
    var dd = 1, hc = 2, La = 4, pd = dd | hc | La, dl = null;
    function uy(e) {
      dl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), dl = e;
    }
    function ly() {
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
    function Tv() {
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
      var e = Tv();
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
    function oy(e, t, a) {
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
        var S = document.createEvent("Event"), D = !1, k = !0, z = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function I() {
          md.removeEventListener(Y, Ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function Ze() {
          D = !0, I(), a.apply(i, xe), k = !1;
        }
        var Ye, Wt = !1, Ht = !1;
        function L(A) {
          if (Ye = A.error, Wt = !0, Ye === null && A.colno === 0 && A.lineno === 0 && (Ht = !0), A.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), md.addEventListener(Y, Ze, !1), S.initEvent(Y, !1, !1), md.dispatchEvent(S), H && Object.defineProperty(window, "event", H), D && k && (Wt ? Ht && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", L), !D)
          return I(), Cc.apply(this, arguments);
      };
    }
    var Nv = bc, fo = !1, wc = null, po = !1, bi = null, Ov = {
      onError: function(e) {
        fo = !0, wc = e;
      }
    };
    function Du(e, t, a, i, l, s, f, p, v) {
      fo = !1, wc = null, Nv.apply(Ov, arguments);
    }
    function wi(e, t, a, i, l, s, f, p, v) {
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
        var e = wc;
        return fo = !1, wc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vo(e) {
      return e._reactInternals;
    }
    function sy(e) {
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
    ), Rc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), Tc = (
      /*                */
      8388608
    ), Nu = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), Ou = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      $t | ur | 0
    ), Mu = Ln | $t | Aa | Ua | Fn | ra | Kn, Lu = $t | bn | Fn | Kn, Zi = na | Aa, Xn = Ji | Tc | ho, za = E.ReactCurrentOwner;
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
      return t.tag === K ? a : null;
    }
    function ki(e) {
      if (e.tag === Se) {
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
      return e.tag === K ? e.stateNode.containerInfo : null;
    }
    function hl(e) {
      return Sa(e) === e;
    }
    function Lv(e) {
      {
        var t = za.current;
        if (t !== null && t.tag === ne) {
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
      if (i.tag !== K)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function aa(e) {
      var t = _c(e);
      return t !== null ? ia(t) : null;
    }
    function ia(e) {
      if (e.tag === se || e.tag === be)
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
      return t !== null ? ja(t) : null;
    }
    function ja(e) {
      if (e.tag === se || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== de) {
          var a = ja(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = T.unstable_scheduleCallback, Av = T.unstable_cancelCallback, yd = T.unstable_shouldYield, gd = T.unstable_requestPaint, lr = T.unstable_now, Dc = T.unstable_getCurrentPriorityLevel, cs = T.unstable_ImmediatePriority, Au = T.unstable_UserBlockingPriority, eu = T.unstable_NormalPriority, cy = T.unstable_LowPriority, yl = T.unstable_IdlePriority, Nc = T.unstable_yieldValue, Uv = T.unstable_setDisableYieldValue, gl = null, Vn = null, Ee = null, Ea = !1, ua = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
      if (typeof Nc == "function" && (Uv(e), G(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(gl, e);
        } catch (t) {
          Ea || (Ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Fa(e) {
      Ee = e;
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
      Ee !== null && typeof Ee.markCommitStarted == "function" && Ee.markCommitStarted(e);
    }
    function wd() {
      Ee !== null && typeof Ee.markCommitStopped == "function" && Ee.markCommitStopped();
    }
    function xa(e) {
      Ee !== null && typeof Ee.markComponentRenderStarted == "function" && Ee.markComponentRenderStarted(e);
    }
    function Ca() {
      Ee !== null && typeof Ee.markComponentRenderStopped == "function" && Ee.markComponentRenderStopped();
    }
    function Rd(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStarted == "function" && Ee.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStopped == "function" && Ee.markComponentPassiveEffectMountStopped();
    }
    function tu(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStarted == "function" && Ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function Uu() {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStopped == "function" && Ee.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStarted == "function" && Ee.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStopped == "function" && Ee.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStarted == "function" && Ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function Td() {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStopped == "function" && Ee.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      Ee !== null && typeof Ee.markComponentErrored == "function" && Ee.markComponentErrored(e, t, a);
    }
    function Di(e, t, a) {
      Ee !== null && typeof Ee.markComponentSuspended == "function" && Ee.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      Ee !== null && typeof Ee.markLayoutEffectsStarted == "function" && Ee.markLayoutEffectsStarted(e);
    }
    function vs() {
      Ee !== null && typeof Ee.markLayoutEffectsStopped == "function" && Ee.markLayoutEffectsStopped();
    }
    function El(e) {
      Ee !== null && typeof Ee.markPassiveEffectsStarted == "function" && Ee.markPassiveEffectsStarted(e);
    }
    function kd() {
      Ee !== null && typeof Ee.markPassiveEffectsStopped == "function" && Ee.markPassiveEffectsStopped();
    }
    function xl(e) {
      Ee !== null && typeof Ee.markRenderStarted == "function" && Ee.markRenderStarted(e);
    }
    function Fv() {
      Ee !== null && typeof Ee.markRenderYielded == "function" && Ee.markRenderYielded();
    }
    function Mc() {
      Ee !== null && typeof Ee.markRenderStopped == "function" && Ee.markRenderStopped();
    }
    function Un(e) {
      Ee !== null && typeof Ee.markRenderScheduled == "function" && Ee.markRenderScheduled(e);
    }
    function Lc(e, t) {
      Ee !== null && typeof Ee.markForceUpdateScheduled == "function" && Ee.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      Ee !== null && typeof Ee.markStateUpdateScheduled == "function" && Ee.markStateUpdateScheduled(e, t);
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
    ), zu = (
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
    ), ju = (
      /*                       */
      4194240
    ), bl = (
      /*                        */
      64
    ), Uc = (
      /*                        */
      128
    ), zc = (
      /*                        */
      256
    ), jc = (
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
    ), wl = (
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
    ), Rl = (
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
    ), _d = Rl, Es = (
      /*          */
      134217728
    ), Dd = (
      /*                          */
      268435455
    ), xs = (
      /*               */
      268435456
    ), Tl = (
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
        if (e & zu)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & Mr)
          return "DefaultHydration";
        if (e & $n)
          return "Default";
        if (e & nu)
          return "TransitionHydration";
        if (e & ju)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & xs)
          return "IdleHydration";
        if (e & Tl)
          return "Idle";
        if (e & la)
          return "Offscreen";
      }
    }
    var yn = -1, kl = bl, qc = Rl;
    function Cs(e) {
      switch (Fu(e)) {
        case ut:
          return ut;
        case zu:
          return zu;
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
        case zc:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case wl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
          return e & ju;
        case Rl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          return e & gs;
        case Es:
          return Es;
        case xs:
          return xs;
        case Tl:
          return Tl;
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
          S === $n && (D & ju) !== ee
        )
          return t;
      }
      (i & li) !== ee && (i |= a & $n);
      var k = e.entangledLanes;
      if (k !== ee)
        for (var z = e.entanglements, H = i & k; H > 0; ) {
          var I = Zn(H), xe = 1 << I;
          i |= z[I], H &= ~xe;
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
        case zu:
        case li:
          return t + 250;
        case Mr:
        case $n:
        case nu:
        case bl:
        case Uc:
        case zc:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case wl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
          return t + 5e3;
        case Rl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          return yn;
        case Es:
        case xs:
        case Tl:
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
      return (e & ju) === e;
    }
    function Zc(e, t) {
      var a = zu | li | Mr | $n;
      return (t & a) !== ee;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Ld(e) {
      return (e & ju) !== ee;
    }
    function Ad() {
      var e = kl;
      return kl <<= 1, (kl & ju) === ee && (kl = bl), e;
    }
    function $v() {
      var e = qc;
      return qc <<= 1, (qc & gs) === ee && (qc = Rl), e;
    }
    function Fu(e) {
      return e & -e;
    }
    function ws(e) {
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
    function Rt(e, t) {
      return e | t;
    }
    function Rs(e, t) {
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
    function Ts(e) {
      for (var t = [], a = 0; a < Cl; a++)
        t.push(e);
      return t;
    }
    function Eo(e, t, a) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = ee, e.pingedLanes = ee);
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
    function zd(e, t) {
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
    function jd(e, t) {
      var a = Fu(t), i;
      switch (a) {
        case li:
          i = zu;
          break;
        case $n:
          i = Mr;
          break;
        case bl:
        case Uc:
        case zc:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case wl:
        case $c:
        case go:
        case So:
        case Ic:
        case ys:
        case Yc:
        case Rl:
        case Wc:
        case Ss:
        case Qc:
        case Gc:
          i = nu;
          break;
        case Tl:
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
    var Pr = ut, Ni = li, Ha = $n, Pa = Tl, _s = Jt;
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
    function fy(e) {
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
    function dy(e, t, a, i, l) {
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
          if (i === Se) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Ms(e.priority, function() {
                rf(a);
              });
              return;
            }
          } else if (i === K) {
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
          uy(s), l.target.dispatchEvent(s), ly();
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
    function py() {
      af = !1, ru !== null && As(ru) && (ru = null), Oi !== null && As(Oi) && (Oi = null), Mi !== null && As(Mi) && (Mi = null), In.forEach(Vd), Br.forEach(Vd);
    }
    function Hu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, T.unstable_scheduleCallback(T.unstable_NormalPriority, py)));
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
        Ny(e, t, i, Li, a), Pd(e, i);
        return;
      }
      if (dy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & La && em(e)) {
        for (; l !== null; ) {
          var s = No(l);
          s !== null && fy(s);
          var f = bo(e, t, a, i);
          if (f === null && Ny(e, t, i, Li, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Ny(e, t, i, null, a);
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
          if (p === Se) {
            var v = ki(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === K) {
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
            case cy:
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
    function zs(e, t, a) {
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
    function wo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var wa = null, Ro = null, Ol = null;
    function Pu(e) {
      return wa = e, Ro = js(), !0;
    }
    function lf() {
      wa = null, Ro = null, Ol = null;
    }
    function au() {
      if (Ol)
        return Ol;
      var e, t = Ro, a = t.length, i, l = js(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ol = l.slice(e, p), Ol;
    }
    function js() {
      return "value" in wa ? wa.value : wa.textContent;
    }
    function Bu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function To() {
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
        return g ? this.isDefaultPrevented = To : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return kt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = To);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = To);
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
        isPersistent: To
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
    function vy(e) {
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
        return "movementX" in e ? e.movementX : (vy(e), of);
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
    }), sf = Ar(Qd), my = kt({}, nr, {
      data: 0
    }), am = Ar(my), im = am, um = {
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
    function hy(e) {
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
    var yy = kt({}, $r, {
      key: hy,
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
    }), om = Ar(yy), gy = kt({}, ci, {
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
    }), sm = Ar(gy), cm = kt({}, $r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _n
    }), fm = Ar(cm), Sy = kt({}, nr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Va = Ar(Sy), Gd = kt({}, ci, {
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
    }), Ey = Ar(Gd), Vu = [9, 13, 27, 32], Ps = 229, uu = gn && "CompositionEvent" in window, $u = null;
    gn && "documentMode" in document && ($u = document.documentMode);
    var qd = gn && "TextEvent" in window && !$u, cf = gn && (!uu || $u && $u > 8 && $u <= 11), dm = 32, ff = String.fromCharCode(dm);
    function xy() {
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
    var Cy = {
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
      return t === "input" ? !!Cy[e.type] : t === "textarea";
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
    function by(e) {
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
      V4(e, 0);
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
    gn && (h = by("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Iu = e, n = t, Iu.attachEvent("onpropertychange", F);
    }
    function R() {
      Iu && (Iu.detachEvent("onpropertychange", F), Iu = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && u(e);
    }
    function re(e, t, a) {
      e === "focusin" ? (R(), x(t, a)) : e === "focusout" && R();
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
    function ze(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Pe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Je(e, "number", e.value);
    }
    function Wn(e, t, a, i, l, s, f) {
      var p = a ? Cf(a) : window, v, g;
      if (r(p) ? v = d : Bs(p) ? h ? v = ze : (v = ue, g = re) : te(p) && (v = Re), v) {
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
        var k, z;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (k = a, z = H ? Ys(H) : null, z !== null) {
            var I = Sa(z);
            (z !== I || z.tag !== se && z.tag !== be) && (z = null);
          }
        } else
          k = null, z = a;
        if (k !== z) {
          var xe = Id, Ze = "onMouseLeave", Ye = "onMouseEnter", Wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = sm, Ze = "onPointerLeave", Ye = "onPointerEnter", Wt = "pointer");
          var Ht = k == null ? S : Cf(k), L = z == null ? S : Cf(z), Y = new xe(Ze, Wt + "leave", k, i, l);
          Y.target = Ht, Y.relatedTarget = L;
          var A = null, le = Ys(l);
          if (le === a) {
            var _e = new xe(Ye, Wt + "enter", z, i, l);
            _e.target = L, _e.relatedTarget = Ht, A = _e;
          }
          eC(e, Y, A, k, z);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ae = typeof Object.is == "function" ? Object.is : U;
    function je(e, t) {
      if (ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Sn.call(t, s) || !ae(e[s], t[s]))
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
    function O4(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ym(e) ? !1 : ym(t) ? O4(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function zx(e) {
      return e && e.ownerDocument && O4(e.ownerDocument.documentElement, e);
    }
    function jx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function M4() {
      for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
        if (jx(t))
          e = t.contentWindow;
        else
          return t;
        t = Ma(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Fx() {
      var e = M4();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? Px(e) : null
      };
    }
    function Hx(e) {
      var t = M4(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && zx(a)) {
        i !== null && wy(a) && Bx(a, i);
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
    var yf = null, Ry = null, ep = null, Ty = !1;
    function Ix(e) {
      if ("selectionStart" in e && wy(e))
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
    function L4(e, t, a) {
      var i = Yx(a);
      if (!(Ty || yf == null || yf !== Ma(i))) {
        var l = Ix(yf);
        if (!ep || !je(ep, l)) {
          ep = l;
          var s = xm(Ry, "onSelect");
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
          (Bs(p) || p.contentEditable === "true") && (yf = p, Ry = a, ep = null);
          break;
        case "focusout":
          yf = null, Ry = null, ep = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, L4(e, i, l);
          break;
        case "selectionchange":
          if (Vx)
            break;
        case "keydown":
        case "keyup":
          L4(e, i, l);
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
    }, ky = {}, A4 = {};
    gn && (A4 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function Sm(e) {
      if (ky[e])
        return ky[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in A4)
          return ky[e] = t[a];
      return e;
    }
    var U4 = Sm("animationend"), z4 = Sm("animationiteration"), j4 = Sm("animationstart"), F4 = Sm("transitionend"), H4 = /* @__PURE__ */ new Map(), P4 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      H4.set(e, t), dt(t, [e]);
    }
    function Qx() {
      for (var e = 0; e < P4.length; e++) {
        var t = P4[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(U4, "onAnimationEnd"), _o(z4, "onAnimationIteration"), _o(j4, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(F4, "onTransitionEnd");
    }
    function Gx(e, t, a, i, l, s, f) {
      var p = H4.get(t);
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
          case U4:
          case z4:
          case j4:
            v = rm;
            break;
          case F4:
            v = Va;
            break;
          case "scroll":
            v = fa;
            break;
          case "wheel":
            v = Ey;
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
            var z = new v(p, g, null, i, l);
            e.push({
              event: z,
              listeners: k
            });
          }
        }
      }
    }
    Qx(), M(), Vs(), $x(), xy();
    function qx(e, t, a, i, l, s, f) {
      Gx(e, t, a, i, l, s);
      var p = (s & pd) === 0;
      p && (_(e, t, a, i, l), Wn(e, t, a, i, l), Wx(e, t, a, i, l), mm(e, t, a, i, l));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function B4(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wi(i, t, void 0, e), e.currentTarget = null;
    }
    function Kx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          B4(e, v, p), i = f;
        }
      else
        for (var g = 0; g < t.length; g++) {
          var S = t[g], D = S.instance, k = S.currentTarget, z = S.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          B4(e, z, k), i = D;
        }
    }
    function V4(e, t) {
      for (var a = (t & La) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        Kx(s, f, a);
      }
      ls();
    }
    function Xx(e, t, a, i, l) {
      var s = vd(a), f = [];
      qx(f, e, i, a, s, t), V4(f, t);
    }
    function zn(e, t) {
      _y.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kb(t), l = tC(e);
      i.has(l) || ($4(t, e, hc, a), i.add(l));
    }
    function Dy(e, t, a) {
      _y.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= La), $4(a, e, i, t);
    }
    var Em = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[Em]) {
        e[Em] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[Em] || (t[Em] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function $4(e, t, a, i, l) {
      var s = xr(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? $d(e, t, s, f) : ca(e, t, s) : f !== void 0 ? wo(e, t, s, f) : zs(e, t, s);
    }
    function I4(e, t) {
      return e === t || e.nodeType === qn && e.parentNode === t;
    }
    function Ny(e, t, a, i, l) {
      var s = i;
      if (!(t & dd) && !(t & hc)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === K || v === de) {
              var g = p.stateNode.containerInfo;
              if (I4(g, f))
                break;
              if (v === de)
                for (var S = p.return; S !== null; ) {
                  var D = S.tag;
                  if (D === K || D === de) {
                    var k = S.stateNode.containerInfo;
                    if (I4(k, f))
                      return;
                  }
                  S = S.return;
                }
              for (; g !== null; ) {
                var z = Ys(g);
                if (z === null)
                  return;
                var H = z.tag;
                if (H === se || H === be) {
                  p = s = z;
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
        var D = g, k = D.stateNode, z = D.tag;
        if (z === se && k !== null && (S = k, p !== null)) {
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
        if (p === se && f !== null) {
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
      while (e && e.tag !== se);
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
    function Y4(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, S = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === se && S !== null) {
          var k = S;
          if (l) {
            var z = _u(p, s);
            z != null && f.unshift(rp(p, z, k));
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
      i !== null && Y4(e, t, i, s, !1), l !== null && a !== null && Y4(e, a, l, s, !0);
    }
    function tC(e, t) {
      return e + "__bubble";
    }
    var $a = !1, ap = "dangerouslySetInnerHTML", Cm = "suppressContentEditableWarning", Do = "suppressHydrationWarning", W4 = "autoFocus", $s = "children", Is = "style", bm = "__html", Oy, wm, ip, Q4, Rm, G4, q4;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, wm = function(e, t) {
      sd(e, t), vc(e, t), Rv(e, t, {
        registrationNameDependencies: ft,
        possibleRegistrationNames: q
      });
    }, G4 = gn && !document.documentMode, ip = function(e, t, a) {
      if (!$a) {
        var i = Tm(a), l = Tm(t);
        l !== i && ($a = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, Q4 = function(e) {
      if (!$a) {
        $a = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Rm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q4 = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nC = /\r\n?/g, rC = /\u0000|\uFFFD/g;
    function Tm(e) {
      Dn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nC, `
`).replace(rC, "");
    }
    function km(e, t, a, i) {
      var l = Tm(t), s = Tm(e);
      if (s !== l && (i && ($a || ($a = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Ae))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function K4(e) {
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
          else s === Cm || s === Do || s === W4 || (ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rm(s, f), s === "onScroll" && zn("scroll", t)) : f != null && Ur(t, s, f, l));
        }
    }
    function uC(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Is ? Sv(e, f) : s === ap ? lv(e, f) : s === $s ? io(e, f) : Ur(e, s, f, i);
      }
    }
    function lC(e, t, a, i) {
      var l, s = K4(a), f, p = i;
      if (p === Gi && (p = nd(e)), p === Gi) {
        if (l = Tu(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Gi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Sn.call(Oy, e) && (Oy[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function oC(e, t) {
      return K4(t).createTextNode(e);
    }
    function sC(e, t, a, i) {
      var l = Tu(t, a);
      wm(t, a);
      var s;
      switch (t) {
        case "dialog":
          zn("cancel", e), zn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            zn(tp[f], e);
          s = a;
          break;
        case "source":
          zn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e), s = a;
          break;
        case "details":
          zn("toggle", e), s = a;
          break;
        case "input":
          ai(e, a), s = ao(e, a), zn("invalid", e);
          break;
        case "option":
          qt(e, a), s = a;
          break;
        case "select":
          sl(e, a), s = Xo(e, a), zn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), s = Jf(e, a), zn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (dc(t, s), iC(t, e, i, s, l), t) {
        case "input":
          ri(e), j(e, a, !1);
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
      wm(t, i);
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
          } else v === ap || v === $s || v === Cm || v === Do || v === W4 || (ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var k = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || k === z || k == null && z == null))
          if (v === Is)
            if (k && Object.freeze(k), z) {
              for (g in z)
                z.hasOwnProperty(g) && (!k || !k.hasOwnProperty(g)) && (S || (S = {}), S[g] = "");
              for (g in k)
                k.hasOwnProperty(g) && z[g] !== k[g] && (S || (S = {}), S[g] = k[g]);
            } else
              S || (s || (s = []), s.push(v, S)), S = k;
          else if (v === ap) {
            var H = k ? k[bm] : void 0, I = z ? z[bm] : void 0;
            H != null && I !== H && (s = s || []).push(v, H);
          } else v === $s ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(v, "" + k) : v === Cm || v === Do || (ft.hasOwnProperty(v) ? (k != null && (typeof k != "function" && Rm(v, k), v === "onScroll" && zn("scroll", e)), !s && z !== k && (s = [])) : (s = s || []).push(v, k));
      }
      return S && (ay(S, p[Is]), (s = s || []).push(Is, S)), s;
    }
    function fC(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && m(e, l);
      var s = Tu(a, i), f = Tu(a, l);
      switch (uC(e, t, s, f), a) {
        case "input":
          b(e, l);
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
      switch (p = Tu(t, a), wm(t, a), t) {
        case "dialog":
          zn("cancel", e), zn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < tp.length; g++)
            zn(tp[g], e);
          break;
        case "source":
          zn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e);
          break;
        case "details":
          zn("toggle", e);
          break;
        case "input":
          ai(e, a), zn("invalid", e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          sl(e, a), zn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), zn("invalid", e);
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
      var z = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var I = a[H];
          if (H === $s)
            typeof I == "string" ? e.textContent !== I && (a[Do] !== !0 && km(e.textContent, I, s, f), z = [$s, I]) : typeof I == "number" && e.textContent !== "" + I && (a[Do] !== !0 && km(e.textContent, I, s, f), z = [$s, "" + I]);
          else if (ft.hasOwnProperty(H))
            I != null && (typeof I != "function" && Rm(H, I), H === "onScroll" && zn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var xe = void 0, Ze = me(H);
            if (a[Do] !== !0) {
              if (!(H === Cm || H === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === ap) {
                  var Ye = e.innerHTML, Wt = I ? I[bm] : void 0;
                  if (Wt != null) {
                    var Ht = q4(e, Wt);
                    Ht !== Ye && ip(H, Ye, Ht);
                  }
                } else if (H === Is) {
                  if (v.delete(H), G4) {
                    var L = ny(I);
                    xe = e.getAttribute("style"), L !== xe && ip(H, xe, L);
                  }
                } else if (p && !N)
                  v.delete(H.toLowerCase()), xe = nl(e, H, I), I !== xe && ip(H, xe, I);
                else if (!ln(H, Ze, p) && !B(H, I, Ze, p)) {
                  var Y = !1;
                  if (Ze !== null)
                    v.delete(Ze.attributeName), xe = vi(e, H, I, Ze);
                  else {
                    var A = i;
                    if (A === Gi && (A = nd(t)), A === Gi)
                      v.delete(H.toLowerCase());
                    else {
                      var le = dC(H);
                      le !== null && le !== H && (Y = !0, v.delete(le)), v.delete(H);
                    }
                    xe = nl(e, H, I);
                  }
                  var _e = N;
                  !_e && I !== xe && !Y && ip(H, xe, I);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && Q4(v), t) {
        case "input":
          ri(e), j(e, a, !0);
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
      return z;
    }
    function vC(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if ($a)
          return;
        $a = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if ($a)
          return;
        $a = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t, a) {
      {
        if ($a)
          return;
        $a = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
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
          Jh(e, a);
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
      var hC = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], X4 = [
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
      ], yC = X4.concat(["button"]), gC = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], J4 = {
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
        var a = kt({}, e || J4), i = {
          tag: t
        };
        return X4.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yC.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hC.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
      }, Z4 = {};
      up = function(e, t, a) {
        a = a || J4;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = SC(e, l) ? null : i, f = s ? null : EC(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!Z4[g]) {
            Z4[g] = !0;
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
    var Dm = "suppressHydrationWarning", Nm = "$", Om = "/$", op = "$?", sp = "$!", xC = "style", zy = null, jy = null;
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
    function wC(e) {
      zy = tr(), jy = Fx();
      var t = null;
      return or(!1), t;
    }
    function RC(e) {
      Hx(jy), or(zy), zy = null, jy = null;
    }
    function TC(e, t, a, i, l) {
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
      return dp(l, g), Yy(g, t), g;
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
    function Fy(e, t) {
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
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, MC = typeof clearTimeout == "function" ? clearTimeout : void 0, Py = -1, eS = typeof Promise == "function" ? Promise : void 0, LC = typeof queueMicrotask == "function" ? queueMicrotask : typeof eS < "u" ? function(e) {
      return eS.resolve(null).then(e).catch(AC);
    } : Hy;
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
    function zC(e, t, a, i, l, s) {
      fC(e, t, a, i, l), Yy(e, l);
    }
    function tS(e) {
      io(e, "");
    }
    function jC(e, t, a) {
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
    function By(e, t) {
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
      e.nodeType === qn ? By(e.parentNode, t) : e.nodeType === ta && By(e, t), Nl(e);
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
    function nS(e) {
      return e.data === op;
    }
    function Vy(e) {
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
      dp(s, e), Yy(e, a);
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
    function rS(e) {
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
      t.nodeType === ta ? My(e, t) : t.nodeType === qn || Ly(e, t);
    }
    function vb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? My(a, t) : t.nodeType === qn || Ly(a, t));
      }
    }
    function mb(e, t, a, i, l) {
      (l || t[Dm] !== !0) && (i.nodeType === ta ? My(a, i) : i.nodeType === qn || Ly(a, i));
    }
    function hb(e, t, a) {
      Ay(e, t);
    }
    function yb(e, t) {
      Uy(e, t);
    }
    function gb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ay(i, t);
      }
    }
    function Sb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function Eb(e, t, a, i, l, s) {
      (s || t[Dm] !== !0) && Ay(a, i);
    }
    function xb(e, t, a, i, l) {
      (l || t[Dm] !== !0) && Uy(a, i);
    }
    function Cb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bb(e) {
      np(e);
    }
    var Ef = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Ef, $y = "__reactProps$" + Ef, fp = "__reactContainer$" + Ef, Iy = "__reactEvents$" + Ef, wb = "__reactListeners$" + Ef, Rb = "__reactHandles$" + Ef;
    function Tb(e) {
      delete e[xf], delete e[$y], delete e[Iy], delete e[wb], delete e[Rb];
    }
    function dp(e, t) {
      t[xf] = e;
    }
    function Lm(e, t) {
      t[fp] = e;
    }
    function aS(e) {
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
            for (var l = rS(e); l !== null; ) {
              var s = l[xf];
              if (s)
                return s;
              l = rS(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[xf] || e[fp];
      return t && (t.tag === se || t.tag === be || t.tag === Se || t.tag === K) ? t : null;
    }
    function Cf(e) {
      if (e.tag === se || e.tag === be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Am(e) {
      return e[$y] || null;
    }
    function Yy(e, t) {
      e[$y] = t;
    }
    function kb(e) {
      var t = e[Iy];
      return t === void 0 && (t = e[Iy] = /* @__PURE__ */ new Set()), t;
    }
    var iS = {}, uS = E.ReactDebugCurrentFrame;
    function Um(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        uS.setExtraStackFrame(a);
      } else
        uS.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (Um(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Um(null)), p instanceof Error && !(p.message in iS) && (iS[p.message] = !0, Um(l), y("Failed %s type: %s", a, p.message), Um(null));
          }
      }
    }
    var Wy = [], zm;
    zm = [];
    var zl = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function da(e, t) {
      if (zl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== zm[zl] && y("Unexpected Fiber popped."), e.current = Wy[zl], Wy[zl] = null, zm[zl] = null, zl--;
    }
    function pa(e, t, a) {
      zl++, Wy[zl] = e.current, zm[zl] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var fi = {};
    Object.freeze(fi);
    var jl = Oo(fi), Wu = Oo(!1), Gy = fi;
    function bf(e, t, a) {
      return a && Qu(t) ? Gy : jl.current;
    }
    function lS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
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
        return l && lS(e, t, s), s;
      }
    }
    function jm() {
      return Wu.current;
    }
    function Qu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fm(e) {
      da(Wu, e), da(jl, e);
    }
    function qy(e) {
      da(Wu, e), da(jl, e);
    }
    function oS(e, t, a) {
      {
        if (jl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pa(jl, t, e), pa(Wu, a, e);
      }
    }
    function sS(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ht(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
        return Gy = jl.current, pa(jl, a, e), pa(Wu, Wu.current, e), !0;
      }
    }
    function cS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = sS(e, t, Gy);
          i.__reactInternalMemoizedMergedChildContext = l, da(Wu, e), da(jl, e), pa(jl, l, e), pa(Wu, a, e);
        } else
          da(Wu, e), pa(Wu, a, e);
      }
    }
    function _b(e) {
      {
        if (!hl(e) || e.tag !== ne)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case K:
              return t.stateNode.context;
            case ne: {
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
    var Mo = 0, Pm = 1, Fl = null, Ky = !1, Xy = !1;
    function fS(e) {
      Fl === null ? Fl = [e] : Fl.push(e);
    }
    function Db(e) {
      Ky = !0, fS(e);
    }
    function dS() {
      Ky && Lo();
    }
    function Lo() {
      if (!Xy && Fl !== null) {
        Xy = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Fl;
          for (er(Pr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Fl = null, Ky = !1;
        } catch (s) {
          throw Fl !== null && (Fl = Fl.slice(e + 1)), hd(cs, Lo), s;
        } finally {
          er(t), Xy = !1;
        }
      }
      return null;
    }
    var Rf = [], Tf = 0, Bm = null, Vm = 0, Ui = [], zi = 0, Ws = null, Hl = 1, Pl = "";
    function Nb(e) {
      return Gs(), (e.flags & Ri) !== Qe;
    }
    function Ob(e) {
      return Gs(), Vm;
    }
    function Mb() {
      var e = Pl, t = Hl, a = t & ~Lb(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Gs(), Rf[Tf++] = Vm, Rf[Tf++] = Bm, Bm = e, Vm = t;
    }
    function pS(e, t, a) {
      Gs(), Ui[zi++] = Hl, Ui[zi++] = Pl, Ui[zi++] = Ws, Ws = e;
      var i = Hl, l = Pl, s = $m(i) - 1, f = i & ~(1 << s), p = a + 1, v = $m(t) + s;
      if (v > 30) {
        var g = s - s % 5, S = (1 << g) - 1, D = (f & S).toString(32), k = f >> g, z = s - g, H = $m(t) + z, I = p << z, xe = I | k, Ze = D + l;
        Hl = 1 << H | xe, Pl = Ze;
      } else {
        var Ye = p << s, Wt = Ye | f, Ht = l;
        Hl = 1 << v | Wt, Pl = Ht;
      }
    }
    function Jy(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), pS(e, a, i);
      }
    }
    function $m(e) {
      return 32 - Jn(e);
    }
    function Lb(e) {
      return 1 << $m(e) - 1;
    }
    function Zy(e) {
      for (; e === Bm; )
        Bm = Rf[--Tf], Rf[Tf] = null, Vm = Rf[--Tf], Rf[Tf] = null;
      for (; e === Ws; )
        Ws = Ui[--zi], Ui[zi] = null, Pl = Ui[--zi], Ui[zi] = null, Hl = Ui[--zi], Ui[zi] = null;
    }
    function Ab() {
      return Gs(), Ws !== null ? {
        id: Hl,
        overflow: Pl
      } : null;
    }
    function Ub(e, t) {
      Gs(), Ui[zi++] = Hl, Ui[zi++] = Pl, Ui[zi++] = Ws, Hl = t.id, Pl = t.overflow, Ws = e;
    }
    function Gs() {
      Yr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ir = null, ji = null, ou = !1, qs = !1, Ao = null;
    function zb() {
      ou && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function vS() {
      qs = !0;
    }
    function jb() {
      return qs;
    }
    function Fb(e) {
      var t = e.stateNode.containerInfo;
      return ji = nb(t), Ir = e, ou = !0, Ao = null, qs = !1, !0;
    }
    function Hb(e, t, a) {
      return ji = rb(t), Ir = e, ou = !0, Ao = null, qs = !1, a !== null && Ub(e, a), !0;
    }
    function mS(e, t) {
      switch (e.tag) {
        case K: {
          pb(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
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
        case Se: {
          var i = e.memoizedState;
          i.dehydrated !== null && vb(i.dehydrated, t);
          break;
        }
      }
    }
    function hS(e, t) {
      mS(e, t);
      var a = $R();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Aa) : i.push(a);
    }
    function e0(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case K: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, hb(a, i);
                break;
              case be:
                var l = t.pendingProps;
                yb(a, l);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
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
              case be: {
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
          case Se: {
            var z = e.memoizedState, H = z.dehydrated;
            if (H !== null) switch (t.tag) {
              case se:
                var I = t.type;
                t.pendingProps, gb(H, I);
                break;
              case be:
                var xe = t.pendingProps;
                Sb(H, xe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function yS(e, t) {
      t.flags = t.flags & ~ra | Ln, e0(e, t);
    }
    function gS(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = KC(t, a);
          return i !== null ? (e.stateNode = i, Ir = e, ji = tb(i), !0) : !1;
        }
        case be: {
          var l = e.pendingProps, s = XC(t, l);
          return s !== null ? (e.stateNode = s, Ir = e, ji = null, !0) : !1;
        }
        case Se: {
          var f = JC(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ab(),
              retryLane: la
            };
            e.memoizedState = p;
            var v = IR(f);
            return v.return = e, e.child = v, Ir = e, ji = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function t0(e) {
      return (e.mode & Mt) !== Ge && (e.flags & We) === Qe;
    }
    function n0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function r0(e) {
      if (ou) {
        var t = ji;
        if (!t) {
          t0(e) && (e0(Ir, e), n0()), yS(Ir, e), ou = !1, Ir = e;
          return;
        }
        var a = t;
        if (!gS(e, t)) {
          t0(e) && (e0(Ir, e), n0()), t = cp(a);
          var i = Ir;
          if (!t || !gS(e, t)) {
            yS(Ir, e), ou = !1, Ir = e;
            return;
          }
          hS(i, a);
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
            case K: {
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
            case se: {
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
    function SS(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== K && t.tag !== Se; )
        t = t.return;
      Ir = t;
    }
    function Im(e) {
      if (e !== Ir)
        return !1;
      if (!ou)
        return SS(e), ou = !0, !1;
      if (e.tag !== K && (e.tag !== se || cb(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = ji;
        if (t)
          if (t0(e))
            ES(e), n0();
          else
            for (; t; )
              hS(e, t), t = cp(t);
      }
      return SS(e), e.tag === Se ? ji = $b(e) : ji = Ir ? cp(e.stateNode) : null, !0;
    }
    function Ib() {
      return ou && ji !== null;
    }
    function ES(e) {
      for (var t = ji; t; )
        mS(e, t), t = cp(t);
    }
    function kf() {
      Ir = null, ji = null, ou = !1, qs = !1;
    }
    function xS() {
      Ao !== null && (v1(Ao), Ao = null);
    }
    function Yr() {
      return ou;
    }
    function a0(e) {
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
          J(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var S = Ks(a);
          J(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (l.size > 0) {
          var D = Ks(l);
          J(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Ym = /* @__PURE__ */ new Map(), CS = /* @__PURE__ */ new Set();
      su.recordLegacyContextWarning = function(e, t) {
        var a = Gb(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!CS.has(e.type)) {
          var i = Ym.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ym.set(a, i)), i.push(e));
        }
      }, su.flushLegacyContextWarning = function() {
        Ym.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ht(s) || "Component"), CS.add(s.type);
            });
            var l = Ks(i);
            try {
              fn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Rn();
            }
          }
        });
      }, su.discardPendingWarnings = function() {
        vp = [], mp = [], hp = [], yp = [], gp = [], Sp = [], Ym = /* @__PURE__ */ new Map();
      };
    }
    var i0, u0, l0, o0, s0, bS = function(e, t) {
    };
    i0 = !1, u0 = !1, l0 = {}, o0 = {}, s0 = {}, bS = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        o0[a] || (o0[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
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
        !(a._owner && a._owner.tag !== ne) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !qb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ht(e) || "Component";
          l0[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), l0[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ne)
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
        if (s0[t])
          return;
        s0[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function wS(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RS(e) {
      function t(L, Y) {
        if (e) {
          var A = L.deletions;
          A === null ? (L.deletions = [Y], L.flags |= Aa) : A.push(Y);
        }
      }
      function a(L, Y) {
        if (!e)
          return null;
        for (var A = Y; A !== null; )
          t(L, A), A = A.sibling;
        return null;
      }
      function i(L, Y) {
        for (var A = /* @__PURE__ */ new Map(), le = Y; le !== null; )
          le.key !== null ? A.set(le.key, le) : A.set(le.index, le), le = le.sibling;
        return A;
      }
      function l(L, Y) {
        var A = uc(L, Y);
        return A.index = 0, A.sibling = null, A;
      }
      function s(L, Y, A) {
        if (L.index = A, !e)
          return L.flags |= Ri, Y;
        var le = L.alternate;
        if (le !== null) {
          var _e = le.index;
          return _e < Y ? (L.flags |= Ln, Y) : _e;
        } else
          return L.flags |= Ln, Y;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= Ln), L;
      }
      function p(L, Y, A, le) {
        if (Y === null || Y.tag !== be) {
          var _e = a4(A, L.mode, le);
          return _e.return = L, _e;
        } else {
          var Ce = l(Y, A);
          return Ce.return = L, Ce;
        }
      }
      function v(L, Y, A, le) {
        var _e = A.type;
        if (_e === mi)
          return S(L, Y, A.props.children, le, A.key);
        if (Y !== null && (Y.elementType === _e || // Keep this check inline so it only runs on the false path:
        N1(Y, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === gt && wS(_e) === Y.type)) {
          var Ce = l(Y, A.props);
          return Ce.ref = Ep(L, Y, A), Ce.return = L, Ce._debugSource = A._source, Ce._debugOwner = A._owner, Ce;
        }
        var ct = r4(A, L.mode, le);
        return ct.ref = Ep(L, Y, A), ct.return = L, ct;
      }
      function g(L, Y, A, le) {
        if (Y === null || Y.tag !== de || Y.stateNode.containerInfo !== A.containerInfo || Y.stateNode.implementation !== A.implementation) {
          var _e = i4(A, L.mode, le);
          return _e.return = L, _e;
        } else {
          var Ce = l(Y, A.children || []);
          return Ce.return = L, Ce;
        }
      }
      function S(L, Y, A, le, _e) {
        if (Y === null || Y.tag !== lt) {
          var Ce = Yo(A, L.mode, le, _e);
          return Ce.return = L, Ce;
        } else {
          var ct = l(Y, A);
          return ct.return = L, ct;
        }
      }
      function D(L, Y, A) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var le = a4("" + Y, L.mode, A);
          return le.return = L, le;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case zr: {
              var _e = r4(Y, L.mode, A);
              return _e.ref = Ep(L, null, Y), _e.return = L, _e;
            }
            case mr: {
              var Ce = i4(Y, L.mode, A);
              return Ce.return = L, Ce;
            }
            case gt: {
              var ct = Y._payload, xt = Y._init;
              return D(L, xt(ct), A);
            }
          }
          if (_t(Y) || bt(Y)) {
            var hn = Yo(Y, L.mode, A, null);
            return hn.return = L, hn;
          }
          Wm(L, Y);
        }
        return typeof Y == "function" && Qm(L), null;
      }
      function k(L, Y, A, le) {
        var _e = Y !== null ? Y.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return _e !== null ? null : p(L, Y, "" + A, le);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case zr:
              return A.key === _e ? v(L, Y, A, le) : null;
            case mr:
              return A.key === _e ? g(L, Y, A, le) : null;
            case gt: {
              var Ce = A._payload, ct = A._init;
              return k(L, Y, ct(Ce), le);
            }
          }
          if (_t(A) || bt(A))
            return _e !== null ? null : S(L, Y, A, le, null);
          Wm(L, A);
        }
        return typeof A == "function" && Qm(L), null;
      }
      function z(L, Y, A, le, _e) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Ce = L.get(A) || null;
          return p(Y, Ce, "" + le, _e);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case zr: {
              var ct = L.get(le.key === null ? A : le.key) || null;
              return v(Y, ct, le, _e);
            }
            case mr: {
              var xt = L.get(le.key === null ? A : le.key) || null;
              return g(Y, xt, le, _e);
            }
            case gt:
              var hn = le._payload, rn = le._init;
              return z(L, Y, A, rn(hn), _e);
          }
          if (_t(le) || bt(le)) {
            var sr = L.get(A) || null;
            return S(Y, sr, le, _e, null);
          }
          Wm(Y, le);
        }
        return typeof le == "function" && Qm(Y), null;
      }
      function H(L, Y, A) {
        {
          if (typeof L != "object" || L === null)
            return Y;
          switch (L.$$typeof) {
            case zr:
            case mr:
              bS(L, A);
              var le = L.key;
              if (typeof le != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(le);
                break;
              }
              if (!Y.has(le)) {
                Y.add(le);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case gt:
              var _e = L._payload, Ce = L._init;
              H(Ce(_e), Y, A);
              break;
          }
        }
        return Y;
      }
      function I(L, Y, A, le) {
        for (var _e = null, Ce = 0; Ce < A.length; Ce++) {
          var ct = A[Ce];
          _e = H(ct, _e, L);
        }
        for (var xt = null, hn = null, rn = Y, sr = 0, an = 0, rr = null; rn !== null && an < A.length; an++) {
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
          var ha = z(Da, L, an, A[an], le);
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
      function xe(L, Y, A, le) {
        var _e = bt(A);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (u0 || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), u0 = !0), A.entries === _e && (i0 || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), i0 = !0);
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
        for (var sr = null, an = null, rr = Y, ma = 0, Jr = 0, pi = null, _a = rn.next(); rr !== null && !_a.done; Jr++, _a = rn.next()) {
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
          var tl = z(Jp, L, Jr, _a.value, le);
          tl !== null && (e && tl.alternate !== null && Jp.delete(tl.key === null ? Jr : tl.key), ma = s(tl, ma, Jr), an === null ? sr = tl : an.sibling = tl, an = tl);
        }
        if (e && Jp.forEach(function(xT) {
          return t(L, xT);
        }), Yr()) {
          var ET = Jr;
          Qs(L, ET);
        }
        return sr;
      }
      function Ze(L, Y, A, le) {
        if (Y !== null && Y.tag === be) {
          a(L, Y.sibling);
          var _e = l(Y, A);
          return _e.return = L, _e;
        }
        a(L, Y);
        var Ce = a4(A, L.mode, le);
        return Ce.return = L, Ce;
      }
      function Ye(L, Y, A, le) {
        for (var _e = A.key, Ce = Y; Ce !== null; ) {
          if (Ce.key === _e) {
            var ct = A.type;
            if (ct === mi) {
              if (Ce.tag === lt) {
                a(L, Ce.sibling);
                var xt = l(Ce, A.props.children);
                return xt.return = L, xt._debugSource = A._source, xt._debugOwner = A._owner, xt;
              }
            } else if (Ce.elementType === ct || // Keep this check inline so it only runs on the false path:
            N1(Ce, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ct == "object" && ct !== null && ct.$$typeof === gt && wS(ct) === Ce.type) {
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
          var sr = r4(A, L.mode, le);
          return sr.ref = Ep(L, Y, A), sr.return = L, sr;
        }
      }
      function Wt(L, Y, A, le) {
        for (var _e = A.key, Ce = Y; Ce !== null; ) {
          if (Ce.key === _e)
            if (Ce.tag === de && Ce.stateNode.containerInfo === A.containerInfo && Ce.stateNode.implementation === A.implementation) {
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
        var xt = i4(A, L.mode, le);
        return xt.return = L, xt;
      }
      function Ht(L, Y, A, le) {
        var _e = typeof A == "object" && A !== null && A.type === mi && A.key === null;
        if (_e && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case zr:
              return f(Ye(L, Y, A, le));
            case mr:
              return f(Wt(L, Y, A, le));
            case gt:
              var Ce = A._payload, ct = A._init;
              return Ht(L, Y, ct(Ce), le);
          }
          if (_t(A))
            return I(L, Y, A, le);
          if (bt(A))
            return xe(L, Y, A, le);
          Wm(L, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(Ze(L, Y, "" + A, le)) : (typeof A == "function" && Qm(L), a(L, Y));
      }
      return Ht;
    }
    var _f = RS(!0), TS = RS(!1);
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
        FR(a, t), a = a.sibling;
    }
    var c0 = Oo(null), f0;
    f0 = {};
    var Gm = null, Df = null, d0 = null, qm = !1;
    function Km() {
      Gm = null, Df = null, d0 = null, qm = !1;
    }
    function kS() {
      qm = !0;
    }
    function _S() {
      qm = !1;
    }
    function DS(e, t, a) {
      pa(c0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== f0 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = f0;
    }
    function p0(e, t) {
      var a = c0.current;
      da(c0, t), e._currentValue = a;
    }
    function v0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Dl(i.childLanes, t) ? l !== null && !Dl(l.childLanes, t) && (l.childLanes = Rt(l.childLanes, t)) : (i.childLanes = Rt(i.childLanes, t), l !== null && (l.childLanes = Rt(l.childLanes, t))), i === a)
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
              if (i.tag === ne) {
                var p = ws(a), v = Bl(yn, p);
                v.tag = Jm;
                var g = i.updateQueue;
                if (g !== null) {
                  var S = g.shared, D = S.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), S.pending = v;
                }
              }
              i.lanes = Rt(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = Rt(k.lanes, a)), v0(i.return, a, e), s.lanes = Rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === He)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === ot) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = Rt(z.lanes, a);
          var H = z.alternate;
          H !== null && (H.lanes = Rt(H.lanes, a)), v0(z, a, e), l = i.sibling;
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
            var I = l.sibling;
            if (I !== null) {
              I.return = l.return, l = I;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Nf(e, t) {
      Gm = e, Df = null, d0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Up(), a.firstContext = null);
      }
    }
    function vr(e) {
      qm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (d0 !== e) {
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
    function m0(e) {
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
    function NS(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, m0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Xm(e, i);
    }
    function t3(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, m0(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function n3(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, m0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Xm(e, i);
    }
    function Ia(e, t) {
      return Xm(e, t);
    }
    var r3 = Xm;
    function Xm(e, t) {
      e.lanes = Rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Rt(a.lanes, t)), a === null && (e.flags & (Ln | ra)) !== Qe && T1(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Rt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Rt(a.childLanes, t) : (l.flags & (Ln | ra)) !== Qe && T1(e), i = l, l = l.return;
      if (i.tag === K) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var OS = 0, MS = 1, Jm = 2, h0 = 3, Zm = !1, y0, eh;
    y0 = !1, eh = null;
    function g0(e) {
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
    function LS(e, t) {
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
        tag: OS,
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
      if (eh === l && !y0 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), y0 = !0), tR()) {
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
          var f = Rt(s, a);
          l.lanes = f, tf(e, f);
        }
      }
    }
    function S0(e, t) {
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
        case MS: {
          var f = a.payload;
          if (typeof f == "function") {
            kS();
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
              _S();
            }
            return p;
          }
          return f;
        }
        case h0:
          e.flags = e.flags & ~cr | We;
        case OS: {
          var v = a.payload, g;
          if (typeof v == "function") {
            kS(), g = v.call(s, i, l);
            {
              if (e.mode & vn) {
                An(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  An(!1);
                }
              }
              _S();
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
        var z = l.baseState, H = ee, I = null, xe = null, Ze = null, Ye = s;
        do {
          var Wt = Ye.lane, Ht = Ye.eventTime;
          if (Dl(i, Wt)) {
            if (Ze !== null) {
              var Y = {
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
              Ze = Ze.next = Y;
            }
            z = a3(e, l, Ye, z, t, a);
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
            Ze === null ? (xe = Ze = L, I = z) : Ze = Ze.next = L, H = Rt(H, Wt);
          }
          if (Ye = Ye.next, Ye === null) {
            if (p = l.shared.pending, p === null)
              break;
            var _e = p, Ce = _e.next;
            _e.next = null, Ye = Ce, l.lastBaseUpdate = _e, l.shared.pending = null;
          }
        } while (!0);
        Ze === null && (I = z), l.baseState = I, l.firstBaseUpdate = xe, l.lastBaseUpdate = Ze;
        var ct = l.shared.interleaved;
        if (ct !== null) {
          var xt = ct;
          do
            H = Rt(H, xt.lane), xt = xt.next;
          while (xt !== ct);
        } else s === null && (l.shared.lanes = ee);
        Qp(H), e.lanes = H, e.memoizedState = z;
      }
      eh = null;
    }
    function i3(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function AS() {
      Zm = !1;
    }
    function rh() {
      return Zm;
    }
    function US(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, i3(f, a));
        }
    }
    var xp = {}, zo = Oo(xp), Cp = Oo(xp), ah = Oo(xp);
    function ih(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function zS() {
      var e = ih(ah.current);
      return e;
    }
    function E0(e, t) {
      pa(ah, t, e), pa(Cp, e, e), pa(zo, xp, e);
      var a = CC(t);
      da(zo, e), pa(zo, a, e);
    }
    function Of(e) {
      da(zo, e), da(Cp, e), da(ah, e);
    }
    function x0() {
      var e = ih(zo.current);
      return e;
    }
    function jS(e) {
      ih(ah.current);
      var t = ih(zo.current), a = bC(t, e.type);
      t !== a && (pa(Cp, e, e), pa(zo, a, e));
    }
    function C0(e) {
      Cp.current === e && (da(zo, e), da(Cp, e));
    }
    var u3 = 0, FS = 1, HS = 1, bp = 2, cu = Oo(u3);
    function b0(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & FS;
    }
    function w0(e, t) {
      return e & FS | t;
    }
    function l3(e, t) {
      return e | t;
    }
    function jo(e, t) {
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
        if (t.tag === Se) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || nS(i) || Vy(i))
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
    ), R0 = [];
    function T0() {
      for (var e = 0; e < R0.length; e++) {
        var t = R0[e];
        t._workInProgressVersionPrimary = null;
      }
      R0.length = 0;
    }
    function s3(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Te = E.ReactCurrentDispatcher, wp = E.ReactCurrentBatchConfig, k0, Af;
    k0 = /* @__PURE__ */ new Set();
    var Zs = ee, mn = null, wr = null, Rr = null, lh = !1, Rp = !1, Tp = 0, c3 = 0, f3 = 25, Q = null, Fi = null, Fo = -1, _0 = !1;
    function sn() {
      {
        var e = Q;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function he() {
      {
        var e = Q;
        Fi !== null && (Fo++, Fi[Fo] !== e && d3(e));
      }
    }
    function Uf(e) {
      e != null && !_t(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Q, typeof e);
    }
    function d3(e) {
      {
        var t = ht(mn);
        if (!k0.has(t) && (k0.add(t), Fi !== null)) {
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
    function D0(e, t) {
      if (_0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Q), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ae(e[a], t[a]))
          return !1;
      return !0;
    }
    function zf(e, t, a, i, l, s) {
      Zs = s, mn = t, Fi = e !== null ? e._debugHookTypes : null, Fo = -1, _0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Te.current = lE : Fi !== null ? Te.current = uE : Te.current = iE;
      var f = a(i, l);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= f3)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _0 = !1, wr = null, Rr = null, t.updateQueue = null, Fo = -1, Te.current = oE, f = a(i, l);
        } while (Rp);
      }
      Te.current = Eh, t._debugHookTypes = Fi;
      var v = wr !== null && wr.next !== null;
      if (Zs = ee, mn = null, wr = null, Rr = null, Q = null, Fi = null, Fo = -1, e !== null && (e.flags & Xn) !== (t.flags & Xn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Mt) !== Ge && y("Internal React error: Expected static flag was missing. Please notify the React team."), lh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function PS(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & tn) !== Ge ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Rs(e.lanes, a);
    }
    function BS() {
      if (Te.current = Eh, lh) {
        for (var e = mn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lh = !1;
      }
      Zs = ee, mn = null, wr = null, Rr = null, Fi = null, Fo = -1, Q = null, eE = !1, Rp = !1, Tp = 0;
    }
    function qu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Rr === null ? mn.memoizedState = Rr = e : Rr = Rr.next = e, Rr;
    }
    function Hi() {
      var e;
      if (wr === null) {
        var t = mn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = wr.next;
      var a;
      if (Rr === null ? a = mn.memoizedState : a = Rr.next, a !== null)
        Rr = a, a = Rr.next, wr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        wr = e;
        var i = {
          memoizedState: wr.memoizedState,
          baseState: wr.baseState,
          baseQueue: wr.baseQueue,
          queue: wr.queue,
          next: null
        };
        Rr === null ? mn.memoizedState = Rr = i : Rr = Rr.next = i;
      }
      return Rr;
    }
    function VS() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function N0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function O0(e, t, a) {
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
    function M0(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = wr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var S = f.next, D = s.baseState, k = null, z = null, H = null, I = S;
        do {
          var xe = I.lane;
          if (Dl(Zs, xe)) {
            if (H !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null
              };
              H = H.next = Ye;
            }
            if (I.hasEagerState)
              D = I.eagerState;
            else {
              var Wt = I.action;
              D = e(D, Wt);
            }
          } else {
            var Ze = {
              lane: xe,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            };
            H === null ? (z = H = Ze, k = D) : H = H.next = Ze, mn.lanes = Rt(mn.lanes, xe), Qp(xe);
          }
          I = I.next;
        } while (I !== null && I !== S);
        H === null ? k = D : H.next = z, ae(D, i.memoizedState) || Up(), i.memoizedState = D, i.baseState = k, i.baseQueue = H, l.lastRenderedState = D;
      }
      var Ht = l.interleaved;
      if (Ht !== null) {
        var L = Ht;
        do {
          var Y = L.lane;
          mn.lanes = Rt(mn.lanes, Y), Qp(Y), L = L.next;
        } while (L !== Ht);
      } else f === null && (l.lanes = ee);
      var A = l.dispatch;
      return [i.memoizedState, A];
    }
    function L0(e, t, a) {
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
        ae(p, i.memoizedState) || Up(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function _k(e, t, a) {
    }
    function Dk(e, t, a) {
    }
    function A0(e, t, a) {
      var i = mn, l = qu(), s, f = Yr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          ae(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Hh();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(v, Zs) || $S(i, t, s);
      }
      l.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return l.queue = g, dh(YS.bind(null, i, g, e), [e]), i.flags |= na, kp(Cr | Wr, IS.bind(null, i, g, s, t), void 0, null), s;
    }
    function oh(e, t, a) {
      var i = mn, l = Hi(), s = t();
      if (!Af) {
        var f = t();
        ae(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = l.memoizedState, v = !ae(p, s);
      v && (l.memoizedState = s, Up());
      var g = l.queue;
      if (Dp(YS.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Rr !== null && Rr.memoizedState.tag & Cr) {
        i.flags |= na, kp(Cr | Wr, IS.bind(null, i, g, s, t), void 0, null);
        var S = Hh();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(S, Zs) || $S(i, t, s);
      }
      return s;
    }
    function $S(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, l = mn.updateQueue;
      if (l === null)
        l = VS(), mn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function IS(e, t, a, i) {
      t.value = a, t.getSnapshot = i, WS(t) && QS(e);
    }
    function YS(e, t, a) {
      var i = function() {
        WS(t) && QS(e);
      };
      return a(i);
    }
    function WS(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ae(a, i);
      } catch {
        return !0;
      }
    }
    function QS(e) {
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
        lastRenderedReducer: N0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = y3.bind(null, mn, a);
      return [t.memoizedState, i];
    }
    function U0(e) {
      return M0(N0);
    }
    function z0(e) {
      return L0(N0);
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
        s = VS(), mn.updateQueue = s, s.lastEffect = l.next = l;
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
    function j0(e) {
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
      if (wr !== null) {
        var p = wr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (D0(s, v)) {
            l.memoizedState = kp(t, a, f, s);
            return;
          }
        }
      }
      mn.flags |= e, l.memoizedState = kp(Cr | t, a, f, s);
    }
    function dh(e, t) {
      return (mn.mode & tn) !== Ge ? _p(Ti | na | Tc, Wr, e, t) : _p(na | Tc, Wr, e, t);
    }
    function Dp(e, t) {
      return fh(na, Wr, e, t);
    }
    function F0(e, t) {
      return _p($t, Gu, e, t);
    }
    function ph(e, t) {
      return fh($t, Gu, e, t);
    }
    function H0(e, t) {
      var a = $t;
      return a |= Ji, (mn.mode & tn) !== Ge && (a |= Nu), _p(a, br, e, t);
    }
    function vh(e, t) {
      return fh($t, br, e, t);
    }
    function GS(e, t) {
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
    function P0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = $t;
      return l |= Ji, (mn.mode & tn) !== Ge && (l |= Nu), _p(l, br, GS.bind(null, t, e), i);
    }
    function mh(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return fh($t, br, GS.bind(null, t, e), i);
    }
    function p3(e, t) {
    }
    var hh = p3;
    function B0(e, t) {
      var a = qu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function yh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (D0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function V0(e, t) {
      var a = qu(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function gh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (D0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $0(e) {
      var t = qu();
      return t.memoizedState = e, e;
    }
    function qS(e) {
      var t = Hi(), a = wr, i = a.memoizedState;
      return XS(t, i, e);
    }
    function KS(e) {
      var t = Hi();
      if (wr === null)
        return t.memoizedState = e, e;
      var a = wr.memoizedState;
      return XS(t, a, e);
    }
    function XS(e, t, a) {
      var i = !Od(Zs);
      if (i) {
        if (!ae(a, t)) {
          var l = Ad();
          mn.lanes = Rt(mn.lanes, l), Qp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Up()), e.memoizedState = a, a;
    }
    function v3(e, t, a) {
      var i = Ba();
      er(qv(i, Ni)), e(!0);
      var l = wp.transition;
      wp.transition = {};
      var s = wp.transition;
      wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (er(i), wp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && J("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function I0() {
      var e = sh(!1), t = e[0], a = e[1], i = v3.bind(null, a), l = qu();
      return l.memoizedState = i, [t, i];
    }
    function JS() {
      var e = U0(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function ZS() {
      var e = z0(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var eE = !1;
    function m3() {
      return eE;
    }
    function Y0() {
      var e = qu(), t = Hh(), a = t.identifierPrefix, i;
      if (Yr()) {
        var l = Mb();
        i = ":" + a + "R" + l;
        var s = Tp++;
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
      if (tE(e))
        nE(t, l);
      else {
        var s = NS(e, t, l, i);
        if (s !== null) {
          var f = ka();
          Dr(s, e, i, f), rE(s, t, i);
        }
      }
      aE(e, i);
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
      if (tE(e))
        nE(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Te.current, Te.current = fu;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (l.hasEagerState = !0, l.eagerState = g, ae(g, v)) {
                t3(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Te.current = p;
            }
          }
        }
        var S = NS(e, t, l, i);
        if (S !== null) {
          var D = ka();
          Dr(S, e, i, D), rE(S, t, i);
        }
      }
      aE(e, i);
    }
    function tE(e) {
      var t = e.alternate;
      return e === mn || t !== null && t === mn;
    }
    function nE(e, t) {
      Rp = lh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function rE(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Ud(i, e.pendingLanes);
        var l = Rt(i, a);
        t.lanes = l, tf(e, l);
      }
    }
    function aE(e, t, a) {
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
    }, iE = null, uE = null, lE = null, oE = null, Ku = null, fu = null, xh = null;
    {
      var W0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      iE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", sn(), Uf(t), B0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", sn(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", sn(), Uf(t), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", sn(), Uf(a), P0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", sn(), Uf(t), F0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", sn(), Uf(t), H0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", sn(), Uf(t);
          var a = Te.current;
          Te.current = Ku;
          try {
            return V0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", sn();
          var i = Te.current;
          Te.current = Ku;
          try {
            return O0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", sn(), j0(e);
        },
        useState: function(e) {
          Q = "useState", sn();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", sn(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", sn(), $0(e);
        },
        useTransition: function() {
          return Q = "useTransition", sn(), I0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", sn(), A0(e, t, a);
        },
        useId: function() {
          return Q = "useId", sn(), Y0();
        },
        unstable_isNewReconciler: oe
      }, uE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", he(), B0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", he(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", he(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", he(), P0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", he(), F0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", he(), H0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", he();
          var a = Te.current;
          Te.current = Ku;
          try {
            return V0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", he();
          var i = Te.current;
          Te.current = Ku;
          try {
            return O0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", he(), j0(e);
        },
        useState: function(e) {
          Q = "useState", he();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", he(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", he(), $0(e);
        },
        useTransition: function() {
          return Q = "useTransition", he(), I0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", he(), A0(e, t, a);
        },
        useId: function() {
          return Q = "useId", he(), Y0();
        },
        unstable_isNewReconciler: oe
      }, lE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", he(), yh(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", he(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", he(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", he(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", he(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", he(), vh(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", he();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", he();
          var i = Te.current;
          Te.current = fu;
          try {
            return M0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", he(), ch();
        },
        useState: function(e) {
          Q = "useState", he();
          var t = Te.current;
          Te.current = fu;
          try {
            return U0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", he(), hh();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", he(), qS(e);
        },
        useTransition: function() {
          return Q = "useTransition", he(), JS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", he(), oh(e, t);
        },
        useId: function() {
          return Q = "useId", he(), Sh();
        },
        unstable_isNewReconciler: oe
      }, oE = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", he(), yh(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", he(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", he(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", he(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", he(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", he(), vh(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", he();
          var a = Te.current;
          Te.current = xh;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", he();
          var i = Te.current;
          Te.current = xh;
          try {
            return L0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", he(), ch();
        },
        useState: function(e) {
          Q = "useState", he();
          var t = Te.current;
          Te.current = xh;
          try {
            return z0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", he(), hh();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", he(), KS(e);
        },
        useTransition: function() {
          return Q = "useTransition", he(), ZS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", he(), oh(e, t);
        },
        useId: function() {
          return Q = "useId", he(), Sh();
        },
        unstable_isNewReconciler: oe
      }, Ku = {
        readContext: function(e) {
          return W0(), vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", St(), sn(), B0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", St(), sn(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", St(), sn(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", St(), sn(), P0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", St(), sn(), F0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", St(), sn(), H0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", St(), sn();
          var a = Te.current;
          Te.current = Ku;
          try {
            return V0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", St(), sn();
          var i = Te.current;
          Te.current = Ku;
          try {
            return O0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", St(), sn(), j0(e);
        },
        useState: function(e) {
          Q = "useState", St(), sn();
          var t = Te.current;
          Te.current = Ku;
          try {
            return sh(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", St(), sn(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", St(), sn(), $0(e);
        },
        useTransition: function() {
          return Q = "useTransition", St(), sn(), I0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", St(), sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", St(), sn(), A0(e, t, a);
        },
        useId: function() {
          return Q = "useId", St(), sn(), Y0();
        },
        unstable_isNewReconciler: oe
      }, fu = {
        readContext: function(e) {
          return W0(), vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", St(), he(), yh(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", St(), he(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", St(), he(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", St(), he(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", St(), he(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", St(), he(), vh(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", St(), he();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", St(), he();
          var i = Te.current;
          Te.current = fu;
          try {
            return M0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", St(), he(), ch();
        },
        useState: function(e) {
          Q = "useState", St(), he();
          var t = Te.current;
          Te.current = fu;
          try {
            return U0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", St(), he(), hh();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", St(), he(), qS(e);
        },
        useTransition: function() {
          return Q = "useTransition", St(), he(), JS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", St(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", St(), he(), oh(e, t);
        },
        useId: function() {
          return Q = "useId", St(), he(), Sh();
        },
        unstable_isNewReconciler: oe
      }, xh = {
        readContext: function(e) {
          return W0(), vr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", St(), he(), yh(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", St(), he(), vr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", St(), he(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", St(), he(), mh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", St(), he(), ph(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", St(), he(), vh(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", St(), he();
          var a = Te.current;
          Te.current = fu;
          try {
            return gh(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", St(), he();
          var i = Te.current;
          Te.current = fu;
          try {
            return L0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", St(), he(), ch();
        },
        useState: function(e) {
          Q = "useState", St(), he();
          var t = Te.current;
          Te.current = fu;
          try {
            return z0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", St(), he(), hh();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", St(), he(), KS(e);
        },
        useTransition: function() {
          return Q = "useTransition", St(), he(), ZS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", St(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", St(), he(), oh(e, t);
        },
        useId: function() {
          return Q = "useId", St(), he(), Sh();
        },
        unstable_isNewReconciler: oe
      };
    }
    var Ho = T.unstable_now, sE = 0, Ch = -1, Np = -1, bh = -1, Q0 = !1, wh = !1;
    function cE() {
      return Q0;
    }
    function g3() {
      wh = !0;
    }
    function S3() {
      Q0 = !1, wh = !1;
    }
    function E3() {
      Q0 = wh, wh = !1;
    }
    function fE() {
      return sE;
    }
    function dE() {
      sE = Ho();
    }
    function G0(e) {
      Np = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function pE(e) {
      Np = -1;
    }
    function Rh(e, t) {
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
            case K:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Me:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function q0(e) {
      if (bh >= 0) {
        var t = Ho() - bh;
        bh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case K:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Me:
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
    function K0() {
      bh = Ho();
    }
    function X0(e) {
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
    var J0 = {}, Z0, eg, tg, ng, rg, vE, Th, ag, ig, ug, Op;
    {
      Z0 = /* @__PURE__ */ new Set(), eg = /* @__PURE__ */ new Set(), tg = /* @__PURE__ */ new Set(), ng = /* @__PURE__ */ new Set(), ag = /* @__PURE__ */ new Set(), rg = /* @__PURE__ */ new Set(), ig = /* @__PURE__ */ new Set(), ug = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var mE = /* @__PURE__ */ new Set();
      Th = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mE.has(a) || (mE.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, vE = function(e, t) {
        if (t === void 0) {
          var a = Gt(e) || "Component";
          rg.has(a) || (rg.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(J0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(J0);
    }
    function lg(e, t, a, i) {
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
        vE(t, s);
      }
      var f = s == null ? l : kt({}, l, s);
      if (e.memoizedState = f, e.lanes === ee) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var og = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = vo(e), l = ka(), s = $o(i), f = Bl(l, s);
        f.payload = t, a != null && (Th(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (Dr(p, i, s, l), th(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vo(e), l = ka(), s = $o(i), f = Bl(l, s);
        f.tag = MS, f.payload = t, a != null && (Th(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (Dr(p, i, s, l), th(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vo(e), i = ka(), l = $o(a), s = Bl(i, l);
        s.tag = Jm, t != null && (Th(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, l);
        f !== null && (Dr(f, a, l, i), th(f, a, l)), Lc(a, l);
      }
    };
    function hE(e, t, a, i, l, s, f) {
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

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !ig.has(t) && (ig.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tg.has(t) && (tg.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Gt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || _t(p)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function yE(e, t) {
      t.updater = og, e.stateNode = t, ml(t, e), t._reactInternalInstance = J0;
    }
    function gE(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === w && f._context === void 0
        );
        if (!p && !ug.has(t)) {
          ug.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === yi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = vr(f);
      else {
        l = bf(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? wf(e, l) : fi;
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
      yE(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var k = Gt(t) || "Component";
          eg.has(k) || (eg.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, S.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var z = null, H = null, I = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? I = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (I = "UNSAFE_componentWillUpdate"), z !== null || H !== null || I !== null) {
            var xe = Gt(t) || "Component", Ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ng.has(xe) || (ng.add(xe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, Ze, z !== null ? `
  ` + z : "", H !== null ? `
  ` + H : "", I !== null ? `
  ` + I : ""));
          }
        }
      }
      return i && lS(e, l, s), S;
    }
    function C3(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), og.enqueueReplaceState(t, t.state, null));
    }
    function SE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ht(e) || "Component";
          Z0.has(s) || (Z0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        og.enqueueReplaceState(t, t.state, null);
      }
    }
    function sg(e, t, a, i) {
      x3(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, g0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = vr(s);
      else {
        var f = bf(e, t, !0);
        l.context = wf(e, f);
      }
      {
        if (l.state === a) {
          var p = Gt(t) || "Component";
          ag.has(p) || (ag.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & vn && su.recordLegacyContextWarning(e, l), su.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lg(e, t, v, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (C3(e, l), nh(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
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
        v = wf(e, g);
      }
      var S = t.getDerivedStateFromProps, D = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !D && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== v) && SE(e, l, a, v), AS();
      var k = e.memoizedState, z = l.state = k;
      if (nh(e, a, l, i), z = e.memoizedState, s === a && k === z && !jm() && !rh()) {
        if (typeof l.componentDidMount == "function") {
          var H = $t;
          H |= Ji, (e.mode & tn) !== Ge && (H |= Nu), e.flags |= H;
        }
        return !1;
      }
      typeof S == "function" && (lg(e, t, S, a), z = e.memoizedState);
      var I = rh() || hE(e, t, s, a, k, z, v);
      if (I) {
        if (!D && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var xe = $t;
          xe |= Ji, (e.mode & tn) !== Ge && (xe |= Nu), e.flags |= xe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ze = $t;
          Ze |= Ji, (e.mode & tn) !== Ge && (Ze |= Nu), e.flags |= Ze;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return l.props = a, l.state = z, l.context = v, I;
    }
    function w3(e, t, a, i, l) {
      var s = t.stateNode;
      LS(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : du(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, S = a.contextType, D = fi;
      if (typeof S == "object" && S !== null)
        D = vr(S);
      else {
        var k = bf(t, a, !0);
        D = wf(t, k);
      }
      var z = a.getDerivedStateFromProps, H = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && SE(t, s, i, D), AS();
      var I = t.memoizedState, xe = s.state = I;
      if (nh(t, i, s, l), xe = t.memoizedState, f === v && I === xe && !jm() && !rh() && !Ue)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= ur), !1;
      typeof z == "function" && (lg(t, a, z, i), xe = t.memoizedState);
      var Ze = rh() || hE(t, a, p, i, I, xe, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ue;
      return Ze ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, xe, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, xe, D)), typeof s.componentDidUpdate == "function" && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ur)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= ur), t.memoizedProps = i, t.memoizedState = xe), s.props = i, s.state = xe, s.context = D, Ze;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Wi(t),
        digest: null
      };
    }
    function cg(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function R3(e, t) {
      return !0;
    }
    function fg(e, t) {
      try {
        var a = R3(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ne)
            return;
          console.error(i);
        }
        var p = l ? ht(l) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === K)
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
    var T3 = typeof WeakMap == "function" ? WeakMap : Map;
    function EE(e, t, a) {
      var i = Bl(yn, a);
      i.tag = h0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        gR(l), fg(e, t);
      }, i;
    }
    function dg(e, t, a) {
      var i = Bl(yn, a);
      i.tag = h0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          O1(e), fg(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        O1(e), fg(e, t), typeof l != "function" && hR(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof l != "function" && (oa(e.lanes, ut) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function xE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new T3(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = SR.bind(null, e, t, a);
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
      if ((e.mode & Mt) === Ge && (a === W || a === ie || a === De)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function CE(e) {
      var t = e;
      do {
        if (t.tag === Se && o3(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function bE(e, t, a, i, l) {
      if ((e.mode & Mt) === Ge) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= We, a.flags |= Rc, a.flags &= -52805, a.tag === ne) {
            var s = a.alternate;
            if (s === null)
              a.tag = it;
            else {
              var f = Bl(yn, ut);
              f.tag = Jm, Uo(a, f, ut);
            }
          }
          a.lanes = Rt(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = l, e;
    }
    function D3(e, t, a, i, l) {
      if (a.flags |= ss, ua && Gp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        _3(a), Yr() && a.mode & Mt && vS();
        var f = CE(t);
        if (f !== null) {
          f.flags &= ~Or, bE(f, t, a, e, l), f.mode & Mt && xE(e, s, l), k3(f, e, s);
          return;
        } else {
          if (!Bv(l)) {
            xE(e, s, l), Yg();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Yr() && a.mode & Mt) {
        vS();
        var v = CE(t);
        if (v !== null) {
          (v.flags & cr) === Qe && (v.flags |= Or), bE(v, t, a, e, l), a0(ec(i, a));
          return;
        }
      }
      i = ec(i, a), oR(i);
      var g = t;
      do {
        switch (g.tag) {
          case K: {
            var S = i;
            g.flags |= cr;
            var D = ws(l);
            g.lanes = Rt(g.lanes, D);
            var k = EE(g, S, D);
            S0(g, k);
            return;
          }
          case ne:
            var z = i, H = g.type, I = g.stateNode;
            if ((g.flags & We) === Qe && (typeof H.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && !C1(I))) {
              g.flags |= cr;
              var xe = ws(l);
              g.lanes = Rt(g.lanes, xe);
              var Ze = dg(g, z, xe);
              S0(g, Ze);
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
    var Mp = E.ReactCurrentOwner, pu = !1, pg, Lp, vg, mg, hg, tc, yg, kh, Ap;
    pg = {}, Lp = {}, vg = {}, mg = {}, hg = {}, tc = !1, yg = {}, kh = {}, Ap = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = TS(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function O3(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function wE(e, t, a, i, l) {
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
        if (Mp.current = t, ir(!0), v = zf(e, t, f, i, p, l), g = jf(), t.mode & vn) {
          An(!0);
          try {
            v = zf(e, t, f, i, p, l), g = jf();
          } finally {
            An(!1);
          }
        }
        ir(!1);
      }
      return Ca(), e !== null && !pu ? (PS(e, t, l), Vl(e, t, l)) : (Yr() && g && Jy(t), t.flags |= ui, Ra(e, t, v, l), t.child);
    }
    function RE(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (zR(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = De, t.type = f, Eg(t, s), TE(e, t, f, i, l);
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
        var g = n4(a.type, null, i, t, t.mode, l);
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
      var k = e.child, z = Tg(e, l);
      if (!z) {
        var H = k.memoizedProps, I = a.compare;
        if (I = I !== null ? I : je, I(H, i) && e.ref === t.ref)
          return Vl(e, t, l);
      }
      t.flags |= ui;
      var xe = uc(k, i);
      return xe.ref = t.ref, xe.return = t, t.child = xe, xe;
    }
    function TE(e, t, a, i, l) {
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
          if (pu = !1, t.pendingProps = i = S, Tg(e, l))
            (e.flags & Rc) !== Qe && (pu = !0);
          else return t.lanes = e.lanes, Vl(e, t, l);
      }
      return gg(e, t, a, i, l);
    }
    function kE(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || pe)
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
            v = Rt(g, a);
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
        var z;
        s !== null ? (z = Rt(s.baseLanes, a), t.memoizedState = null) : z = a, Ph(t, z);
      }
      return Ra(e, t, l, a), t.child;
    }
    function M3(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function L3(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
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
      return Ra(e, t, s, a), t.child;
    }
    function _E(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ho);
    }
    function gg(e, t, a, i, l) {
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
        f = wf(t, p);
      }
      var v, g;
      Nf(t, l), xa(t);
      {
        if (Mp.current = t, ir(!0), v = zf(e, t, a, i, f, l), g = jf(), t.mode & vn) {
          An(!0);
          try {
            v = zf(e, t, a, i, f, l), g = jf();
          } finally {
            An(!1);
          }
        }
        ir(!1);
      }
      return Ca(), e !== null && !pu ? (PS(e, t, l), Vl(e, t, l)) : (Yr() && g && Jy(t), t.flags |= ui, Ra(e, t, v, l), t.child);
    }
    function DE(e, t, a, i, l) {
      {
        switch (XR(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= cr;
            var g = new Error("Simulated error coming from DevTools"), S = ws(l);
            t.lanes = Rt(t.lanes, S);
            var D = dg(t, ec(g, t), S);
            S0(t, D);
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
      var z;
      Qu(a) ? (z = !0, Hm(t)) : z = !1, Nf(t, l);
      var H = t.stateNode, I;
      H === null ? (Dh(e, t), gE(t, a, i), sg(t, a, i, l), I = !0) : e === null ? I = b3(t, a, i, l) : I = w3(e, t, a, i, l);
      var xe = Sg(e, t, a, I, z, l);
      {
        var Ze = t.stateNode;
        I && Ze.props !== i && (tc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), tc = !0);
      }
      return xe;
    }
    function Sg(e, t, a, i, l, s) {
      _E(e, t);
      var f = (t.flags & We) !== Qe;
      if (!i && !f)
        return l && cS(t, a, !1), Vl(e, t, s);
      var p = t.stateNode;
      Mp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, pE();
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
      return t.flags |= ui, e !== null && f ? O3(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, l && cS(t, a, !0), t.child;
    }
    function NE(e) {
      var t = e.stateNode;
      t.pendingContext ? oS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && oS(e, t.context, !1), E0(e, t.containerInfo);
    }
    function U3(e, t, a) {
      if (NE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      LS(e, t), nh(t, i, null, a);
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
          return OE(e, t, p, a, S);
        } else if (p !== s) {
          var D = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return OE(e, t, p, a, D);
        } else {
          Fb(t);
          var k = TS(t, null, p, a);
          t.child = k;
          for (var z = k; z; )
            z.flags = z.flags & ~Ln | ra, z = z.sibling;
        }
      } else {
        if (kf(), p === s)
          return Vl(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function OE(e, t, a, i, l) {
      return kf(), a0(l), t.flags |= Or, Ra(e, t, a, i), t.child;
    }
    function z3(e, t, a) {
      jS(t), e === null && r0(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = Fy(i, l);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= Ua), _E(e, t), Ra(e, t, f, a), t.child;
    }
    function j3(e, t) {
      return e === null && r0(t), null;
    }
    function F3(e, t, a, i) {
      Dh(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = jR(v), S = du(v, l), D;
      switch (g) {
        case W:
          return Eg(t, v), t.type = v = Yf(v), D = gg(null, t, v, S, i), D;
        case ne:
          return t.type = v = Kg(v), D = DE(null, t, v, S, i), D;
        case ie:
          return t.type = v = Xg(v), D = wE(null, t, v, S, i), D;
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
          return D = RE(
            null,
            t,
            v,
            du(v.type, S),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === gt && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function H3(e, t, a, i, l) {
      Dh(e, t), t.tag = ne;
      var s;
      return Qu(a) ? (s = !0, Hm(t)) : s = !1, Nf(t, l), gE(t, a, i), sg(t, a, i, l), Sg(null, t, a, !0, s, l);
    }
    function P3(e, t, a, i) {
      Dh(e, t);
      var l = t.pendingProps, s;
      {
        var f = bf(t, a, !1);
        s = wf(t, f);
      }
      Nf(t, i);
      var p, v;
      xa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = Gt(a) || "Unknown";
          pg[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), pg[g] = !0);
        }
        t.mode & vn && su.recordLegacyContextWarning(t, null), ir(!0), Mp.current = t, p = zf(null, t, a, l, s, i), v = jf(), ir(!1);
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
        t.tag = ne, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Qu(a) ? (k = !0, Hm(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, g0(t), yE(t, p), sg(t, a, l, i), Sg(null, t, a, !0, k, i);
      } else {
        if (t.tag = W, t.mode & vn) {
          An(!0);
          try {
            p = zf(null, t, a, l, s, i), v = jf();
          } finally {
            An(!1);
          }
        }
        return Yr() && v && Jy(t), Ra(null, t, p, i), Eg(t, a), t.child;
      }
    }
    function Eg(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Fr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), hg[l] || (hg[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Gt(t) || "Unknown";
          Ap[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Ap[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Gt(t) || "Unknown";
          mg[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), mg[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Gt(t) || "Unknown";
          vg[v] || (y("%s: Function components do not support contextType.", v), vg[v] = !0);
        }
      }
    }
    var xg = {
      dehydrated: null,
      treeContext: null,
      retryLane: Jt
    };
    function Cg(e) {
      return {
        baseLanes: e,
        cachePool: N3(),
        transitions: null
      };
    }
    function B3(e, t) {
      var a = null;
      return {
        baseLanes: Rt(e.baseLanes, t),
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
      return b0(e, bp);
    }
    function $3(e, t) {
      return Rs(e.childLanes, t);
    }
    function ME(e, t, a) {
      var i = t.pendingProps;
      JR(t) && (t.flags |= We);
      var l = cu.current, s = !1, f = (t.flags & We) !== Qe;
      if (f || V3(l, e) ? (s = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (l = l3(l, HS)), l = Mf(l), jo(t, l), e === null) {
        r0(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return G3(t, v);
        }
        var g = i.children, S = i.fallback;
        if (s) {
          var D = I3(t, g, S, a), k = t.child;
          return k.memoizedState = Cg(a), t.memoizedState = xg, D;
        } else
          return bg(t, g);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var H = z.dehydrated;
          if (H !== null)
            return q3(e, t, f, i, H, z, a);
        }
        if (s) {
          var I = i.fallback, xe = i.children, Ze = W3(e, t, xe, I, a), Ye = t.child, Wt = e.child.memoizedState;
          return Ye.memoizedState = Wt === null ? Cg(a) : B3(Wt, a), Ye.childLanes = $3(e, a), t.memoizedState = xg, Ze;
        } else {
          var Ht = i.children, L = Y3(e, t, Ht, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function bg(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = wg(l, i);
      return s.return = e, e.child = s, s;
    }
    function I3(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (l & Mt) === Ge && s !== null ? (p = s, p.childLanes = ee, p.pendingProps = f, e.mode & en && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, l, i, null)) : (p = wg(f, l), v = Yo(a, l, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wg(e, t, a) {
      return L1(e, t, ee, null);
    }
    function LE(e, t) {
      return uc(e, t);
    }
    function Y3(e, t, a, i) {
      var l = e.child, s = l.sibling, f = LE(l, {
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
        g = LE(f, v), g.subtreeFlags = f.subtreeFlags & Xn;
      var D;
      return p !== null ? D = uc(p, i) : (D = Yo(i, s, l, null), D.flags |= Ln), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function _h(e, t, a, i) {
      i !== null && a0(i), _f(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = bg(t, s);
      return f.flags |= Ln, t.memoizedState = null, f;
    }
    function Q3(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wg(f, s), v = Yo(i, s, l, null);
      return v.flags |= Ln, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Mt) !== Ge && _f(t, e.child, null, l), v;
    }
    function G3(e, t, a) {
      return (e.mode & Mt) === Ge ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : Vy(t) ? e.lanes = Mr : e.lanes = la, null;
    }
    function q3(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Or) {
          t.flags &= ~Or;
          var L = cg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _h(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var Y = i.children, A = i.fallback, le = Q3(e, t, Y, A, f), _e = t.child;
          return _e.memoizedState = Cg(f), t.memoizedState = xg, le;
        }
      else {
        if (zb(), (t.mode & Mt) === Ge)
          return _h(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(l)) {
          var p, v, g;
          {
            var S = ZC(l);
            p = S.digest, v = S.message, g = S.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = cg(D, p, g);
          return _h(e, t, f, k);
        }
        var z = oa(f, e.childLanes);
        if (pu || z) {
          var H = Hh();
          if (H !== null) {
            var I = jd(H, f);
            if (I !== Jt && I !== s.retryLane) {
              s.retryLane = I;
              var xe = yn;
              Ia(e, I), Dr(H, e, I, xe);
            }
          }
          Yg();
          var Ze = cg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _h(e, t, f, Ze);
        } else if (nS(l)) {
          t.flags |= We, t.child = e.child;
          var Ye = ER.bind(null, e);
          return eb(l, Ye), null;
        } else {
          Hb(t, l, s.treeContext);
          var Wt = i.children, Ht = bg(t, Wt);
          return Ht.flags |= ra, Ht;
        }
      }
    }
    function AE(e, t, a) {
      e.lanes = Rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Rt(i.lanes, t)), v0(e.return, t, a);
    }
    function K3(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Se) {
          var l = i.memoizedState;
          l !== null && AE(i, a, e);
        } else if (i.tag === Pt)
          AE(i, a, e);
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
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yg[e])
        if (yg[e] = !0, typeof e == "string")
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
    function UE(e, t) {
      {
        var a = _t(e), i = !a && typeof bt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function ew(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!UE(e[a], a))
              return;
        } else {
          var i = bt(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!UE(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Rg(e, t, a, i, l) {
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
      J3(l), Z3(s, l), ew(f, l), Ra(e, t, f, a);
      var p = cu.current, v = b0(p, bp);
      if (v)
        p = w0(p, bp), t.flags |= We;
      else {
        var g = e !== null && (e.flags & We) !== Qe;
        g && K3(t, t.child, a), p = Mf(p);
      }
      if (jo(t, p), (t.mode & Mt) === Ge)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var S = X3(t.child), D;
            S === null ? (D = t.child, t.child = null) : (D = S.sibling, S.sibling = null), Rg(
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
            var k = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var H = z.alternate;
              if (H !== null && uh(H) === null) {
                t.child = z;
                break;
              }
              var I = z.sibling;
              z.sibling = k, k = z, z = I;
            }
            Rg(
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
            Rg(
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
    function tw(e, t, a) {
      E0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var jE = !1;
    function nw(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || jE || (jE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && lu(v, s, "prop", "Context.Provider");
      }
      if (DS(t, l, p), f !== null) {
        var g = f.value;
        if (ae(g, p)) {
          if (f.children === s.children && !jm())
            return Vl(e, t, a);
        } else
          Jb(t, l, a);
      }
      var S = s.children;
      return Ra(e, t, S, a), t.child;
    }
    var FE = !1;
    function rw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (FE || (FE = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = vr(i);
      xa(t);
      var p;
      return Mp.current = t, ir(!0), p = s(f), ir(!1), Ca(), t.flags |= ui, Ra(e, t, p, a), t.child;
    }
    function Up() {
      pu = !0;
    }
    function Dh(e, t) {
      (t.mode & Mt) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Ln);
    }
    function Vl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), pE(), Qp(t.lanes), oa(a, t.childLanes) ? (Kb(e, t), t.child) : null;
    }
    function aw(e, t, a) {
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
    function Tg(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function iw(e, t, a) {
      switch (t.tag) {
        case K:
          NE(t), t.stateNode, kf();
          break;
        case se:
          jS(t);
          break;
        case ne: {
          var i = t.type;
          Qu(i) && Hm(t);
          break;
        }
        case de:
          E0(t, t.stateNode.containerInfo);
          break;
        case He: {
          var l = t.memoizedProps.value, s = t.type._context;
          DS(t, s, l);
          break;
        }
        case Me:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= $t);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Se: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, Mf(cu.current)), t.flags |= We, null;
            var g = t.child, S = g.childLanes;
            if (oa(a, S))
              return ME(e, t, a);
            jo(t, Mf(cu.current));
            var D = Vl(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            jo(t, Mf(cu.current));
          break;
        }
        case Pt: {
          var k = (e.flags & We) !== Qe, z = oa(a, t.childLanes);
          if (k) {
            if (z)
              return zE(e, t, a);
            t.flags |= We;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), jo(t, cu.current), z)
            break;
          return null;
        }
        case Be:
        case Tt:
          return t.lanes = ee, kE(e, t, a);
      }
      return Vl(e, t, a);
    }
    function HE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return aw(e, t, n4(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pu = !0;
        else {
          var s = Tg(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Qe)
            return pu = !1, iw(e, t, a);
          (e.flags & Rc) !== Qe ? pu = !0 : pu = !1;
        }
      } else if (pu = !1, Yr() && Nb(t)) {
        var f = t.index, p = Ob();
        pS(t, p, f);
      }
      switch (t.lanes = ee, t.tag) {
        case ve:
          return P3(e, t, t.type, a);
        case jt: {
          var v = t.elementType;
          return F3(e, t, v, a);
        }
        case W: {
          var g = t.type, S = t.pendingProps, D = t.elementType === g ? S : du(g, S);
          return gg(e, t, g, D, a);
        }
        case ne: {
          var k = t.type, z = t.pendingProps, H = t.elementType === k ? z : du(k, z);
          return DE(e, t, k, H, a);
        }
        case K:
          return U3(e, t, a);
        case se:
          return z3(e, t, a);
        case be:
          return j3(e, t);
        case Se:
          return ME(e, t, a);
        case de:
          return tw(e, t, a);
        case ie: {
          var I = t.type, xe = t.pendingProps, Ze = t.elementType === I ? xe : du(I, xe);
          return wE(e, t, I, Ze, a);
        }
        case lt:
          return M3(e, t, a);
        case qe:
          return L3(e, t, a);
        case Me:
          return A3(e, t, a);
        case He:
          return nw(e, t, a);
        case Ft:
          return rw(e, t, a);
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
          return Ht = du(Ye.type, Ht), RE(e, t, Ye, Ht, a);
        }
        case De:
          return TE(e, t, t.type, t.pendingProps, a);
        case it: {
          var Y = t.type, A = t.pendingProps, le = t.elementType === Y ? A : du(Y, A);
          return H3(e, t, Y, le, a);
        }
        case Pt:
          return zE(e, t, a);
        case yt:
          break;
        case Be:
          return kE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= $t;
    }
    function PE(e) {
      e.flags |= Fn, e.flags |= ho;
    }
    var BE, kg, VE, $E;
    BE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === se || l.tag === be)
          kC(e, l.stateNode);
        else if (l.tag !== de) {
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
    }, kg = function(e, t) {
    }, VE = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = x0(), v = DC(f, a, s, i, l, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, $E = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function zp(e, t) {
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
            a = Rt(a, Rt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Xn, i |= g.flags & Xn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = Rt(a, Rt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Xn, i |= S.flags & Xn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & en) !== Ge) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Rt(a, Rt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Rt(a, Rt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function uw(e, t, a) {
      if (Ib() && (t.mode & Mt) !== Ge && (t.flags & We) === Qe)
        return ES(t), kf(), t.flags |= Or | ss | cr, !1;
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
        return xS(), !0;
    }
    function IE(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case ve:
        case jt:
        case De:
        case W:
        case ie:
        case lt:
        case qe:
        case Me:
        case Ft:
        case Ke:
          return Qr(t), null;
        case ne: {
          var l = t.type;
          return Qu(l) && Fm(t), Qr(t), null;
        }
        case K: {
          var s = t.stateNode;
          if (Of(t), qy(t), T0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Im(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Or) !== Qe) && (t.flags |= ur, xS());
            }
          }
          return kg(e, t), Qr(t), null;
        }
        case se: {
          C0(t);
          var v = zS(), g = t.type;
          if (e !== null && t.stateNode != null)
            VE(e, t, g, i, v), e.ref !== t.ref && PE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Qr(t), null;
            }
            var S = x0(), D = Im(t);
            if (D)
              Pb(t, v, S) && Ff(t);
            else {
              var k = TC(g, i, v, S, t);
              BE(k, t, !1, !1), t.stateNode = k, _C(k, g, i, v) && Ff(t);
            }
            t.ref !== null && PE(t);
          }
          return Qr(t), null;
        }
        case be: {
          var z = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            $E(e, t, H, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var I = zS(), xe = x0(), Ze = Im(t);
            Ze ? Bb(t) && Ff(t) : t.stateNode = NC(z, I, xe, t);
          }
          return Qr(t), null;
        }
        case Se: {
          Lf(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Wt = uw(e, t, Ye);
            if (!Wt)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & We) !== Qe)
            return t.lanes = a, (t.mode & en) !== Ge && X0(t), t;
          var Ht = Ye !== null, L = e !== null && e.memoizedState !== null;
          if (Ht !== L && Ht) {
            var Y = t.child;
            if (Y.flags |= Kn, (t.mode & Mt) !== Ge) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              A || b0(cu.current, HS) ? lR() : Yg();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= $t), Qr(t), (t.mode & en) !== Ge && Ht) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case de:
          return Of(t), kg(e, t), e === null && bb(t.stateNode.containerInfo), Qr(t), null;
        case He:
          var Ce = t.type._context;
          return p0(Ce, t), Qr(t), null;
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
              zp(xt, !1);
            else {
              var sr = sR() && (e === null || (e.flags & We) === Qe);
              if (!sr)
                for (var an = t.child; an !== null; ) {
                  var rr = uh(an);
                  if (rr !== null) {
                    hn = !0, t.flags |= We, zp(xt, !1);
                    var ma = rr.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= $t), t.subtreeFlags = Qe, Xb(t, a), jo(t, w0(cu.current, bp)), t.child;
                  }
                  an = an.sibling;
                }
              xt.tail !== null && lr() > f1() && (t.flags |= We, hn = !0, zp(xt, !1), t.lanes = _d);
            }
          else {
            if (!hn) {
              var Jr = uh(rn);
              if (Jr !== null) {
                t.flags |= We, hn = !0;
                var pi = Jr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= $t), zp(xt, !0), xt.tail === null && xt.tailMode === "hidden" && !rn.alternate && !Yr())
                  return Qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              lr() * 2 - xt.renderingStartTime > f1() && a !== la && (t.flags |= We, hn = !0, zp(xt, !1), t.lanes = _d);
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
            return hn ? ha = w0(ha, bp) : ha = Mf(ha), jo(t, ha), Da;
          }
          return Qr(t), null;
        }
        case yt:
          break;
        case Be:
        case Tt: {
          Ig(t);
          var Ql = t.memoizedState, Wf = Ql !== null;
          if (e !== null) {
            var Jp = e.memoizedState, tl = Jp !== null;
            tl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !pe && (t.flags |= Kn);
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
    function lw(e, t, a) {
      switch (Zy(t), t.tag) {
        case ne: {
          var i = t.type;
          Qu(i) && Fm(t);
          var l = t.flags;
          return l & cr ? (t.flags = l & ~cr | We, (t.mode & en) !== Ge && X0(t), t) : null;
        }
        case K: {
          t.stateNode, Of(t), qy(t), T0();
          var s = t.flags;
          return (s & cr) !== Qe && (s & We) === Qe ? (t.flags = s & ~cr | We, t) : null;
        }
        case se:
          return C0(t), null;
        case Se: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & cr ? (t.flags = p & ~cr | We, (t.mode & en) !== Ge && X0(t), t) : null;
        }
        case Pt:
          return Lf(t), null;
        case de:
          return Of(t), null;
        case He:
          var v = t.type._context;
          return p0(v, t), null;
        case Be:
        case Tt:
          return Ig(t), null;
        case Lt:
          return null;
        default:
          return null;
      }
    }
    function YE(e, t, a) {
      switch (Zy(t), t.tag) {
        case ne: {
          var i = t.type.childContextTypes;
          i != null && Fm(t);
          break;
        }
        case K: {
          t.stateNode, Of(t), qy(t), T0();
          break;
        }
        case se: {
          C0(t);
          break;
        }
        case de:
          Of(t);
          break;
        case Se:
          Lf(t);
          break;
        case Pt:
          Lf(t);
          break;
        case He:
          var l = t.type._context;
          p0(l, t);
          break;
        case Be:
        case Tt:
          Ig(t);
          break;
      }
    }
    var WE = null;
    WE = /* @__PURE__ */ new Set();
    var Nh = !1, Gr = !1, ow = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Hf = null, Pf = null;
    function sw(e) {
      Du(null, function() {
        throw e;
      }), os();
    }
    var cw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & en)
        try {
          Ju(), t.componentWillUnmount();
        } finally {
          Xu(e);
        }
      else
        t.componentWillUnmount();
    };
    function QE(e, t) {
      try {
        Po(br, e);
      } catch (a) {
        Tn(e, t, a);
      }
    }
    function _g(e, t, a) {
      try {
        cw(e, a);
      } catch (i) {
        Tn(e, t, i);
      }
    }
    function fw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Tn(e, t, i);
      }
    }
    function GE(e, t) {
      try {
        KE(e);
      } catch (a) {
        Tn(e, t, a);
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
            Tn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          a.current = null;
    }
    function Oh(e, t, a) {
      try {
        a();
      } catch (i) {
        Tn(e, t, i);
      }
    }
    var qE = !1;
    function dw(e, t) {
      wC(e.containerInfo), Fe = t, pw();
      var a = qE;
      return qE = !1, a;
    }
    function pw() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & Ou) !== Qe && t !== null ? (t.return = e, Fe = t) : vw();
      }
    }
    function vw() {
      for (; Fe !== null; ) {
        var e = Fe;
        fn(e);
        try {
          mw(e);
        } catch (a) {
          Tn(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function mw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ur) !== Qe) {
        switch (fn(e), e.tag) {
          case W:
          case ie:
          case De:
            break;
          case ne: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : du(e.type, i), l);
              {
                var p = WE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case K: {
            {
              var v = e.stateNode;
              qC(v.containerInfo);
            }
            break;
          }
          case se:
          case be:
          case de:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function vu(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Wr) !== Ya ? tu(t) : (e & br) !== Ya && fs(t), (e & Gu) !== Ya && qp(!0), Oh(t, a, p), (e & Gu) !== Ya && qp(!1), (e & Wr) !== Ya ? Uu() : (e & br) !== Ya && Td());
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
            (e & Wr) !== Ya ? Rd(t) : (e & br) !== Ya && Oc(t);
            var f = s.create;
            (e & Gu) !== Ya && qp(!0), s.destroy = f(), (e & Gu) !== Ya && qp(!1), (e & Wr) !== Ya ? zv() : (e & br) !== Ya && jv();
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
    function hw(e, t) {
      if ((t.flags & $t) !== Qe)
        switch (t.tag) {
          case Me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = fE(), p = t.alternate === null ? "mount" : "update";
            cE() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case K:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case Me:
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
    function yw(e, t, a, i) {
      if ((a.flags & Lu) !== Qe)
        switch (a.tag) {
          case W:
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
          case ne: {
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
            p !== null && (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), US(a, p, l));
            break;
          }
          case K: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    g = a.child.stateNode;
                    break;
                  case ne:
                    g = a.child.stateNode;
                    break;
                }
              US(a, v, g);
            }
            break;
          }
          case se: {
            var S = a.stateNode;
            if (t === null && a.flags & $t) {
              var D = a.type, k = a.memoizedProps;
              UC(S, D, k);
            }
            break;
          }
          case be:
            break;
          case de:
            break;
          case Me: {
            {
              var z = a.memoizedProps, H = z.onCommit, I = z.onRender, xe = a.stateNode.effectDuration, Ze = fE(), Ye = t === null ? "mount" : "update";
              cE() && (Ye = "nested-update"), typeof I == "function" && I(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ze);
              {
                typeof H == "function" && H(a.memoizedProps.id, Ye, xe, Ze), vR(a);
                var Wt = a.return;
                e: for (; Wt !== null; ) {
                  switch (Wt.tag) {
                    case K:
                      var Ht = Wt.stateNode;
                      Ht.effectDuration += xe;
                      break e;
                    case Me:
                      var L = Wt.stateNode;
                      L.effectDuration += xe;
                      break e;
                  }
                  Wt = Wt.return;
                }
              }
            }
            break;
          }
          case Se: {
            Rw(e, a);
            break;
          }
          case Pt:
          case it:
          case yt:
          case Be:
          case Tt:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gr || a.flags & Fn && KE(a);
    }
    function gw(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          if (e.mode & en)
            try {
              Ju(), QE(e, e.return);
            } finally {
              Xu(e);
            }
          else
            QE(e, e.return);
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && fw(e, e.return, t), GE(e, e.return);
          break;
        }
        case se: {
          GE(e, e.return);
          break;
        }
      }
    }
    function Sw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? YC(l) : QC(i.stateNode, i.memoizedProps);
            } catch (f) {
              Tn(e, e.return, f);
            }
          }
        } else if (i.tag === be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WC(s) : GC(s, i.memoizedProps);
            } catch (f) {
              Tn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === Tt) && i.memoizedState !== null && i !== e)) {
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
    function KE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
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
    function Ew(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function XE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, XE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && Tb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xw(e) {
      for (var t = e.return; t !== null; ) {
        if (JE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function JE(e) {
      return e.tag === se || e.tag === K || e.tag === de;
    }
    function ZE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || JE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== be && t.tag !== ot; ) {
          if (t.flags & Ln || t.child === null || t.tag === de)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Ln))
          return t.stateNode;
      }
    }
    function Cw(e) {
      var t = xw(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & Ua && (tS(a), t.flags &= ~Ua);
          var i = ZE(e);
          Ng(e, i, a);
          break;
        }
        case K:
        case de: {
          var l = t.stateNode.containerInfo, s = ZE(e);
          Dg(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Dg(e, t, a) {
      var i = e.tag, l = i === se || i === be;
      if (l) {
        var s = e.stateNode;
        t ? BC(a, s, t) : HC(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          Dg(f, t, a);
          for (var p = f.sibling; p !== null; )
            Dg(p, t, a), p = p.sibling;
        }
      }
    }
    function Ng(e, t, a) {
      var i = e.tag, l = i === se || i === be;
      if (l) {
        var s = e.stateNode;
        t ? PC(a, s, t) : FC(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          Ng(f, t, a);
          for (var p = f.sibling; p !== null; )
            Ng(p, t, a), p = p.sibling;
        }
      }
    }
    var qr = null, mu = !1;
    function bw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case se: {
              qr = i.stateNode, mu = !1;
              break e;
            }
            case K: {
              qr = i.stateNode.containerInfo, mu = !0;
              break e;
            }
            case de: {
              qr = i.stateNode.containerInfo, mu = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        e1(e, t, a), qr = null, mu = !1;
      }
      Ew(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        e1(e, t, i), i = i.sibling;
    }
    function e1(e, t, a) {
      switch (Cd(a), a.tag) {
        case se:
          Gr || Bf(a, t);
        case be: {
          {
            var i = qr, l = mu;
            qr = null, Bo(e, t, a), qr = i, mu = l, qr !== null && (mu ? $C(qr, a.stateNode) : VC(qr, a.stateNode));
          }
          return;
        }
        case ot: {
          qr !== null && (mu ? IC(qr, a.stateNode) : By(qr, a.stateNode));
          return;
        }
        case de: {
          {
            var s = qr, f = mu;
            qr = a.stateNode.containerInfo, mu = !0, Bo(e, t, a), qr = s, mu = f;
          }
          return;
        }
        case W:
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
                  var D = S, k = D.destroy, z = D.tag;
                  k !== void 0 && ((z & Gu) !== Ya ? Oh(a, t, k) : (z & br) !== Ya && (fs(a), a.mode & en ? (Ju(), Oh(a, t, k), Xu(a)) : Oh(a, t, k), Td())), S = S.next;
                } while (S !== g);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case ne: {
          if (!Gr) {
            Bf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && _g(a, t, H);
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
            var I = Gr;
            Gr = I || a.memoizedState !== null, Bo(e, t, a), Gr = I;
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
    function ww(e) {
      e.memoizedState;
    }
    function Rw(e, t) {
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
    function t1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ow()), t.forEach(function(i) {
          var l = xR.bind(null, e, i);
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
    function Tw(e, t, a) {
      Hf = a, Pf = e, fn(t), n1(t, e), fn(t), Hf = null, Pf = null;
    }
    function hu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            bw(e, t, s);
          } catch (v) {
            Tn(s, t, v);
          }
        }
      var f = Cu();
      if (t.subtreeFlags & Mu)
        for (var p = t.child; p !== null; )
          fn(p), n1(p, e), p = p.sibling;
      fn(f);
    }
    function n1(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case W:
        case ie:
        case Ke:
        case De: {
          if (hu(t, e), Zu(e), l & $t) {
            try {
              vu(Gu | Cr, e, e.return), Po(Gu | Cr, e);
            } catch (ct) {
              Tn(e, e.return, ct);
            }
            if (e.mode & en) {
              try {
                Ju(), vu(br | Cr, e, e.return);
              } catch (ct) {
                Tn(e, e.return, ct);
              }
              Xu(e);
            } else
              try {
                vu(br | Cr, e, e.return);
              } catch (ct) {
                Tn(e, e.return, ct);
              }
          }
          return;
        }
        case ne: {
          hu(t, e), Zu(e), l & Fn && i !== null && Bf(i, i.return);
          return;
        }
        case se: {
          hu(t, e), Zu(e), l & Fn && i !== null && Bf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                tS(s);
              } catch (ct) {
                Tn(e, e.return, ct);
              }
            }
            if (l & $t) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    zC(f, S, g, v, p, e);
                  } catch (ct) {
                    Tn(e, e.return, ct);
                  }
              }
            }
          }
          return;
        }
        case be: {
          if (hu(t, e), Zu(e), l & $t) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, k = e.memoizedProps, z = i !== null ? i.memoizedProps : k;
            try {
              jC(D, z, k);
            } catch (ct) {
              Tn(e, e.return, ct);
            }
          }
          return;
        }
        case K: {
          if (hu(t, e), Zu(e), l & $t && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                ob(t.containerInfo);
              } catch (ct) {
                Tn(e, e.return, ct);
              }
          }
          return;
        }
        case de: {
          hu(t, e), Zu(e);
          return;
        }
        case Se: {
          hu(t, e), Zu(e);
          var I = e.child;
          if (I.flags & Kn) {
            var xe = I.stateNode, Ze = I.memoizedState, Ye = Ze !== null;
            if (xe.isHidden = Ye, Ye) {
              var Wt = I.alternate !== null && I.alternate.memoizedState !== null;
              Wt || uR();
            }
          }
          if (l & $t) {
            try {
              ww(e);
            } catch (ct) {
              Tn(e, e.return, ct);
            }
            t1(e);
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
            var Y = e.stateNode, A = e.memoizedState, le = A !== null, _e = e;
            if (Y.isHidden = le, le && !Ht && (_e.mode & Mt) !== Ge) {
              Fe = _e;
              for (var Ce = _e.child; Ce !== null; )
                Fe = Ce, _w(Ce), Ce = Ce.sibling;
            }
            Sw(_e, le);
          }
          return;
        }
        case Pt: {
          hu(t, e), Zu(e), l & $t && t1(e);
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
          Cw(e);
        } catch (a) {
          Tn(e, e.return, a);
        }
        e.flags &= ~Ln;
      }
      t & ra && (e.flags &= ~ra);
    }
    function kw(e, t, a) {
      Hf = a, Pf = t, Fe = e, r1(e, t, a), Hf = null, Pf = null;
    }
    function r1(e, t, a) {
      for (var i = (e.mode & Mt) !== Ge; Fe !== null; ) {
        var l = Fe, s = l.child;
        if (l.tag === Be && i) {
          var f = l.memoizedState !== null, p = f || Nh;
          if (p) {
            Og(e, t, a);
            continue;
          } else {
            var v = l.alternate, g = v !== null && v.memoizedState !== null, S = g || Gr, D = Nh, k = Gr;
            Nh = p, Gr = S, Gr && !k && (Fe = l, Dw(l));
            for (var z = s; z !== null; )
              Fe = z, r1(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Fe = l, Nh = D, Gr = k, Og(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Lu) !== Qe && s !== null ? (s.return = l, Fe = s) : Og(e, t, a);
      }
    }
    function Og(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & Lu) !== Qe) {
          var l = i.alternate;
          fn(i);
          try {
            yw(t, l, i, a);
          } catch (f) {
            Tn(i, i.return, f);
          }
          Rn();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function _w(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case W:
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
          case ne: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _g(t, t.return, i);
            break;
          }
          case se: {
            Bf(t, t.return);
            break;
          }
          case Be: {
            var l = t.memoizedState !== null;
            if (l) {
              a1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : a1(e);
      }
    }
    function a1(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function Dw(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            i1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : i1(e);
      }
    }
    function i1(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        fn(t);
        try {
          gw(t);
        } catch (i) {
          Tn(t, t.return, i);
        }
        if (Rn(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function Nw(e, t, a, i) {
      Fe = t, Ow(t, e, a, i);
    }
    function Ow(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe, s = l.child;
        (l.subtreeFlags & Zi) !== Qe && s !== null ? (s.return = l, Fe = s) : Mw(e, t, a, i);
      }
    }
    function Mw(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe;
        if ((l.flags & na) !== Qe) {
          fn(l);
          try {
            Lw(t, l, a, i);
          } catch (f) {
            Tn(l, l.return, f);
          }
          Rn();
        }
        if (l === e) {
          Fe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Fe = s;
          return;
        }
        Fe = l.return;
      }
    }
    function Lw(e, t, a, i) {
      switch (t.tag) {
        case W:
        case ie:
        case De: {
          if (t.mode & en) {
            K0();
            try {
              Po(Wr | Cr, t);
            } finally {
              q0(t);
            }
          } else
            Po(Wr | Cr, t);
          break;
        }
      }
    }
    function Aw(e) {
      Fe = e, Uw();
    }
    function Uw() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & Aa) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Fe = l, Fw(l, e);
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
            Fe = e;
          }
        }
        (e.subtreeFlags & Zi) !== Qe && t !== null ? (t.return = e, Fe = t) : zw();
      }
    }
    function zw() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & na) !== Qe && (fn(e), jw(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function jw(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          e.mode & en ? (K0(), vu(Wr | Cr, e, e.return), q0(e)) : vu(Wr | Cr, e, e.return);
          break;
        }
      }
    }
    function Fw(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        fn(a), Pw(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : Hw(e);
      }
    }
    function Hw(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (XE(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function Pw(e, t) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          e.mode & en ? (K0(), vu(Wr, e, t), q0(e)) : vu(Wr, e, t);
          break;
        }
      }
    }
    function Bw(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          try {
            Po(br | Cr, e);
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Vw(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          try {
            Po(Wr | Cr, e);
          } catch (t) {
            Tn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $w(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De: {
          try {
            vu(br | Cr, e, e.return);
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _g(e, e.return, t);
          break;
        }
      }
    }
    function Iw(e) {
      switch (e.tag) {
        case W:
        case ie:
        case De:
          try {
            vu(Wr | Cr, e, e.return);
          } catch (t) {
            Tn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var jp = Symbol.for;
      jp("selector.component"), jp("selector.has_pseudo_class"), jp("selector.role"), jp("selector.test_id"), jp("selector.text");
    }
    var Yw = [];
    function Ww() {
      Yw.forEach(function(e) {
        return e();
      });
    }
    var Qw = E.ReactCurrentActQueue;
    function Gw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function u1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Qw.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var qw = Math.ceil, Mg = E.ReactCurrentDispatcher, Lg = E.ReactCurrentOwner, Kr = E.ReactCurrentBatchConfig, yu = E.ReactCurrentActQueue, Tr = (
      /*             */
      0
    ), l1 = (
      /*               */
      1
    ), Xr = (
      /*                */
      2
    ), Pi = (
      /*                */
      4
    ), $l = 0, Fp = 1, nc = 2, Mh = 3, Hp = 4, o1 = 5, Ag = 6, Yt = Tr, Ta = null, Qn = null, kr = ee, el = ee, Ug = Oo(ee), _r = $l, Pp = null, Lh = ee, Bp = ee, Ah = ee, Vp = null, Wa = null, zg = 0, s1 = 500, c1 = 1 / 0, Kw = 500, Il = null;
    function $p() {
      c1 = lr() + Kw;
    }
    function f1() {
      return c1;
    }
    var Uh = !1, jg = null, Vf = null, rc = !1, Vo = null, Ip = ee, Fg = [], Hg = null, Xw = 50, Yp = 0, Pg = null, Bg = !1, zh = !1, Jw = 50, $f = 0, jh = null, Wp = yn, Fh = ee, d1 = !1;
    function Hh() {
      return Ta;
    }
    function ka() {
      return (Yt & (Xr | Pi)) !== Tr ? lr() : (Wp !== yn || (Wp = lr()), Wp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & Mt) === Ge)
        return ut;
      if ((Yt & Xr) !== Tr && kr !== ee)
        return ws(kr);
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
    function Zw(e) {
      var t = e.mode;
      return (t & Mt) === Ge ? ut : $v();
    }
    function Dr(e, t, a, i) {
      bR(), d1 && y("useInsertionEffect must not schedule updates."), Bg && (zh = !0), Eo(e, a, i), (Yt & Xr) !== ee && e === Ta ? TR(t) : (ua && ks(e, t, a), kR(t), e === Ta && ((Yt & Xr) === Tr && (Bp = Rt(Bp, a)), _r === Hp && Io(e, kr)), Qa(e, i), a === ut && Yt === Tr && (t.mode & Mt) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yu.isBatchingLegacy && ($p(), dS()));
    }
    function eR(e, t, a) {
      var i = e.current;
      i.lanes = t, Eo(e, t, a), Qa(e, a);
    }
    function tR(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Yt & Xr) !== Tr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = Kc(e, e === Ta ? kr : ee);
      if (i === ee) {
        a !== null && _1(a), e.callbackNode = null, e.callbackPriority = Jt;
        return;
      }
      var l = Fu(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yu.current !== null && a !== Gg)) {
        a == null && s !== ut && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && _1(a);
      var f;
      if (l === ut)
        e.tag === Mo ? (yu.isBatchingLegacy !== null && (yu.didScheduleLegacyUpdate = !0), Db(m1.bind(null, e))) : fS(m1.bind(null, e)), yu.current !== null ? yu.current.push(Lo) : LC(function() {
          (Yt & (Xr | Pi)) === Tr && Lo();
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
        f = qg(p, p1.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function p1(e, t) {
      if (S3(), Wp = yn, Fh = ee, (Yt & (Xr | Pi)) !== Tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Kc(e, e === Ta ? kr : ee);
      if (l === ee)
        return null;
      var s = !Zc(e, l) && !Vv(e, l) && !t, f = s ? fR(e, l) : Bh(e, l);
      if (f !== $l) {
        if (f === nc) {
          var p = Jc(e);
          p !== ee && (l = p, f = Vg(e, p));
        }
        if (f === Fp) {
          var v = Pp;
          throw ac(e, ee), Io(e, l), Qa(e, lr()), v;
        }
        if (f === Ag)
          Io(e, l);
        else {
          var g = !Zc(e, l), S = e.current.alternate;
          if (g && !rR(S)) {
            if (f = Bh(e, l), f === nc) {
              var D = Jc(e);
              D !== ee && (l = D, f = Vg(e, D));
            }
            if (f === Fp) {
              var k = Pp;
              throw ac(e, ee), Io(e, l), Qa(e, lr()), k;
            }
          }
          e.finishedWork = S, e.finishedLanes = l, nR(e, f, l);
        }
      }
      return Qa(e, lr()), e.callbackNode === a ? p1.bind(null, e) : null;
    }
    function Vg(e, t) {
      var a = Vp;
      if (nf(e)) {
        var i = ac(e, t);
        i.flags |= Or, Cb(e.containerInfo);
      }
      var l = Bh(e, t);
      if (l !== nc) {
        var s = Wa;
        Wa = a, s !== null && v1(s);
      }
      return l;
    }
    function v1(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function nR(e, t, a) {
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
          !D1()) {
            var i = zg + s1 - lr();
            if (i > 10) {
              var l = Kc(e, ee);
              if (l !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Dl(s, a)) {
                ka(), ef(e, s);
                break;
              }
              e.timeoutHandle = Hy(ic.bind(null, e, Wa, Il), i);
              break;
            }
          }
          ic(e, Wa, Il);
          break;
        }
        case Hp: {
          if (Io(e, a), Md(a))
            break;
          if (!D1()) {
            var f = oi(e, a), p = f, v = lr() - p, g = CR(v) - v;
            if (g > 10) {
              e.timeoutHandle = Hy(ic.bind(null, e, Wa, Il), g);
              break;
            }
          }
          ic(e, Wa, Il);
          break;
        }
        case o1: {
          ic(e, Wa, Il);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function rR(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!ae(f(), p))
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
      t = Rs(t, Ah), t = Rs(t, Bp), Wv(e, t);
    }
    function m1(e) {
      if (E3(), (Yt & (Xr | Pi)) !== Tr)
        throw new Error("Should not already be working.");
      Wl();
      var t = Kc(e, ee);
      if (!oa(t, ut))
        return Qa(e, lr()), null;
      var a = Bh(e, t);
      if (e.tag !== Mo && a === nc) {
        var i = Jc(e);
        i !== ee && (t = i, a = Vg(e, i));
      }
      if (a === Fp) {
        var l = Pp;
        throw ac(e, ee), Io(e, t), Qa(e, lr()), l;
      }
      if (a === Ag)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Wa, Il), Qa(e, lr()), null;
    }
    function aR(e, t) {
      t !== ee && (tf(e, Rt(t, ut)), Qa(e, lr()), (Yt & (Xr | Pi)) === Tr && ($p(), Lo()));
    }
    function $g(e, t) {
      var a = Yt;
      Yt |= l1;
      try {
        return e(t);
      } finally {
        Yt = a, Yt === Tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yu.isBatchingLegacy && ($p(), dS());
      }
    }
    function iR(e, t, a, i, l) {
      var s = Ba(), f = Kr.transition;
      try {
        return Kr.transition = null, er(Pr), e(t, a, i, l);
      } finally {
        er(s), Kr.transition = f, Yt === Tr && $p();
      }
    }
    function Yl(e) {
      Vo !== null && Vo.tag === Mo && (Yt & (Xr | Pi)) === Tr && Wl();
      var t = Yt;
      Yt |= l1;
      var a = Kr.transition, i = Ba();
      try {
        return Kr.transition = null, er(Pr), e ? e() : void 0;
      } finally {
        er(i), Kr.transition = a, Yt = t, (Yt & (Xr | Pi)) === Tr && Lo();
      }
    }
    function h1() {
      return (Yt & (Xr | Pi)) !== Tr;
    }
    function Ph(e, t) {
      pa(Ug, el, e), el = Rt(el, t);
    }
    function Ig(e) {
      el = Ug.current, da(Ug, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Py && (e.timeoutHandle = Py, MC(a)), Qn !== null)
        for (var i = Qn.return; i !== null; ) {
          var l = i.alternate;
          YE(l, i), i = i.return;
        }
      Ta = e;
      var s = uc(e.current, null);
      return Qn = s, kr = el = t, _r = $l, Pp = null, Lh = ee, Bp = ee, Ah = ee, Vp = null, Wa = null, e3(), su.discardPendingWarnings(), s;
    }
    function y1(e, t) {
      do {
        var a = Qn;
        try {
          if (Km(), BS(), Rn(), Lg.current = null, a === null || a.return === null) {
            _r = Fp, Pp = t, Qn = null;
            return;
          }
          if (Ve && a.mode & en && Rh(a, !0), Xe)
            if (Ca(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Di(a, i, kr);
            } else
              ds(a, t, kr);
          D3(e, a.return, a, t, kr), x1(a);
        } catch (l) {
          t = l, Qn === a && a !== null ? (a = a.return, Qn = a) : a = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function g1() {
      var e = Mg.current;
      return Mg.current = Eh, e === null ? Eh : e;
    }
    function S1(e) {
      Mg.current = e;
    }
    function uR() {
      zg = lr();
    }
    function Qp(e) {
      Lh = Rt(e, Lh);
    }
    function lR() {
      _r === $l && (_r = Mh);
    }
    function Yg() {
      (_r === $l || _r === Mh || _r === nc) && (_r = Hp), Ta !== null && (bs(Lh) || bs(Bp)) && Io(Ta, kr);
    }
    function oR(e) {
      _r !== Hp && (_r = nc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function sR() {
      return _r === $l;
    }
    function Bh(e, t) {
      var a = Yt;
      Yt |= Xr;
      var i = g1();
      if (Ta !== e || kr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, kr), l.clear()), Qv(e, t);
        }
        Il = Fd(), ac(e, t);
      }
      xl(t);
      do
        try {
          cR();
          break;
        } catch (s) {
          y1(e, s);
        }
      while (!0);
      if (Km(), Yt = a, S1(i), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), Ta = null, kr = ee, _r;
    }
    function cR() {
      for (; Qn !== null; )
        E1(Qn);
    }
    function fR(e, t) {
      var a = Yt;
      Yt |= Xr;
      var i = g1();
      if (Ta !== e || kr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, kr), l.clear()), Qv(e, t);
        }
        Il = Fd(), $p(), ac(e, t);
      }
      xl(t);
      do
        try {
          dR();
          break;
        } catch (s) {
          y1(e, s);
        }
      while (!0);
      return Km(), S1(i), Yt = a, Qn !== null ? (Fv(), $l) : (Mc(), Ta = null, kr = ee, _r);
    }
    function dR() {
      for (; Qn !== null && !yd(); )
        E1(Qn);
    }
    function E1(e) {
      var t = e.alternate;
      fn(e);
      var a;
      (e.mode & en) !== Ge ? (G0(e), a = Wg(t, e, el), Rh(e, !0)) : a = Wg(t, e, el), Rn(), e.memoizedProps = e.pendingProps, a === null ? x1(e) : Qn = a, Lg.current = null;
    }
    function x1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === Qe) {
          fn(t);
          var l = void 0;
          if ((t.mode & en) === Ge ? l = IE(a, t, el) : (G0(t), l = IE(a, t, el), Rh(t, !1)), Rn(), l !== null) {
            Qn = l;
            return;
          }
        } else {
          var s = lw(a, t);
          if (s !== null) {
            s.flags &= Mv, Qn = s;
            return;
          }
          if ((t.mode & en) !== Ge) {
            Rh(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = Qe, i.deletions = null;
          else {
            _r = Ag, Qn = null;
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
      _r === $l && (_r = o1);
    }
    function ic(e, t, a) {
      var i = Ba(), l = Kr.transition;
      try {
        Kr.transition = null, er(Pr), pR(e, t, a, i);
      } finally {
        Kr.transition = l, er(i);
      }
      return null;
    }
    function pR(e, t, a, i) {
      do
        Wl();
      while (Vo !== null);
      if (wR(), (Yt & (Xr | Pi)) !== Tr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (bd(s), l === null)
        return wd(), null;
      if (s === ee && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Jt;
      var f = Rt(l.lanes, l.childLanes);
      zd(e, f), e === Ta && (Ta = null, Qn = null, kr = ee), ((l.subtreeFlags & Zi) !== Qe || (l.flags & Zi) !== Qe) && (rc || (rc = !0, Hg = a, qg(eu, function() {
        return Wl(), null;
      })));
      var p = (l.subtreeFlags & (Ou | Mu | Lu | Zi)) !== Qe, v = (l.flags & (Ou | Mu | Lu | Zi)) !== Qe;
      if (p || v) {
        var g = Kr.transition;
        Kr.transition = null;
        var S = Ba();
        er(Pr);
        var D = Yt;
        Yt |= Pi, Lg.current = null, dw(e, l), dE(), Tw(e, l, s), RC(e.containerInfo), e.current = l, ps(s), kw(l, e, s), vs(), gd(), Yt = D, er(S), Kr.transition = g;
      } else
        e.current = l, dE();
      var k = rc;
      if (rc ? (rc = !1, Vo = e, Ip = s) : ($f = 0, jh = null), f = e.pendingLanes, f === ee && (Vf = null), k || R1(e.current, !1), Ed(l.stateNode, i), ua && e.memoizedUpdaters.clear(), Ww(), Qa(e, lr()), t !== null)
        for (var z = e.onRecoverableError, H = 0; H < t.length; H++) {
          var I = t[H], xe = I.stack, Ze = I.digest;
          z(I.value, {
            componentStack: xe,
            digest: Ze
          });
        }
      if (Uh) {
        Uh = !1;
        var Ye = jg;
        throw jg = null, Ye;
      }
      return oa(Ip, ut) && e.tag !== Mo && Wl(), f = e.pendingLanes, oa(f, ut) ? (g3(), e === Pg ? Yp++ : (Yp = 0, Pg = e)) : Yp = 0, Lo(), wd(), null;
    }
    function Wl() {
      if (Vo !== null) {
        var e = Kv(Ip), t = Ds(Ha, e), a = Kr.transition, i = Ba();
        try {
          return Kr.transition = null, er(t), mR();
        } finally {
          er(i), Kr.transition = a;
        }
      }
      return !1;
    }
    function vR(e) {
      Fg.push(e), rc || (rc = !0, qg(eu, function() {
        return Wl(), null;
      }));
    }
    function mR() {
      if (Vo === null)
        return !1;
      var e = Hg;
      Hg = null;
      var t = Vo, a = Ip;
      if (Vo = null, Ip = ee, (Yt & (Xr | Pi)) !== Tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      Bg = !0, zh = !1, El(a);
      var i = Yt;
      Yt |= Pi, Aw(t.current), Nw(t, t.current, a, e);
      {
        var l = Fg;
        Fg = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          hw(t, f);
        }
      }
      kd(), R1(t.current, !0), Yt = i, Lo(), zh ? t === jh ? $f++ : ($f = 0, jh = t) : $f = 0, Bg = !1, zh = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function C1(e) {
      return Vf !== null && Vf.has(e);
    }
    function hR(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function yR(e) {
      Uh || (Uh = !0, jg = e);
    }
    var gR = yR;
    function b1(e, t, a) {
      var i = ec(a, t), l = EE(e, i, ut), s = Uo(e, l, ut), f = ka();
      s !== null && (Eo(s, ut, f), Qa(s, f));
    }
    function Tn(e, t, a) {
      if (sw(a), qp(!1), e.tag === K) {
        b1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === K) {
          b1(i, e, a);
          return;
        } else if (i.tag === ne) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !C1(s)) {
            var f = ec(a, e), p = dg(i, f, ut), v = Uo(i, p, ut), g = ka();
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
    function SR(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ka();
      ef(e, a), _R(e), Ta === e && Dl(kr, a) && (_r === Hp || _r === Mh && _l(kr) && lr() - zg < s1 ? ac(e, ee) : Ah = Rt(Ah, a)), Qa(e, l);
    }
    function w1(e, t) {
      t === Jt && (t = Zw(e));
      var a = ka(), i = Ia(e, t);
      i !== null && (Eo(i, t, a), Qa(i, a));
    }
    function ER(e) {
      var t = e.memoizedState, a = Jt;
      t !== null && (a = t.retryLane), w1(e, a);
    }
    function xR(e, t) {
      var a = Jt, i;
      switch (e.tag) {
        case Se:
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
      i !== null && i.delete(t), w1(e, a);
    }
    function CR(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : qw(e / 1960) * 1960;
    }
    function bR() {
      if (Yp > Xw)
        throw Yp = 0, Pg = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > Jw && ($f = 0, jh = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function wR() {
      su.flushLegacyContextWarning(), su.flushPendingUnsafeLifecycleWarnings();
    }
    function R1(e, t) {
      fn(e), Vh(e, Nu, $w), t && Vh(e, Ti, Iw), Vh(e, Nu, Bw), t && Vh(e, Ti, Vw), Rn();
    }
    function Vh(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var $h = null;
    function T1(e) {
      {
        if ((Yt & Xr) !== Tr || !(e.mode & Mt))
          return;
        var t = e.tag;
        if (t !== ve && t !== K && t !== ne && t !== W && t !== ie && t !== Ke && t !== De)
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
          i ? fn(e) : Rn();
        }
      }
    }
    var Wg;
    {
      var RR = null;
      Wg = function(e, t, a) {
        var i = A1(RR, t);
        try {
          return HE(e, t, a);
        } catch (s) {
          if (jb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Km(), BS(), YE(e, t), A1(t, i), t.mode & en && G0(t), Du(null, HE, null, e, t, a), Xi()) {
            var l = os();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var k1 = !1, Qg;
    Qg = /* @__PURE__ */ new Set();
    function TR(e) {
      if (Si && !m3())
        switch (e.tag) {
          case W:
          case ie:
          case De: {
            var t = Qn && ht(Qn) || "Unknown", a = t;
            if (!Qg.has(a)) {
              Qg.add(a);
              var i = ht(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ne: {
            k1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), k1 = !0);
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
    var Gg = {};
    function qg(e, t) {
      {
        var a = yu.current;
        return a !== null ? (a.push(t), Gg) : hd(e, t);
      }
    }
    function _1(e) {
      if (e !== Gg)
        return Av(e);
    }
    function D1() {
      return yu.current !== null;
    }
    function kR(e) {
      {
        if (e.mode & Mt) {
          if (!u1())
            return;
        } else if (!Gw() || Yt !== Tr || e.tag !== W && e.tag !== ie && e.tag !== De)
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
            t ? fn(e) : Rn();
          }
        }
      }
    }
    function _R(e) {
      e.tag !== Mo && u1() && yu.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      d1 = e;
    }
    var Bi = null, If = null, DR = function(e) {
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
    function Kg(e) {
      return Yf(e);
    }
    function Xg(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: X,
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
    function N1(e, t) {
      {
        if (Bi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ne: {
            typeof i == "function" && (l = !0);
            break;
          }
          case W: {
            (typeof i == "function" || s === gt) && (l = !0);
            break;
          }
          case ie: {
            (s === X || s === gt) && (l = !0);
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
    function O1(e) {
      {
        if (Bi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var NR = function(e, t) {
      {
        if (Bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wl(), Yl(function() {
          Jg(e.current, i, a);
        });
      }
    }, OR = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Wl(), Yl(function() {
          Kp(t, e, null, null);
        });
      }
    };
    function Jg(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case W:
          case De:
          case ne:
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
          D !== void 0 && (a.has(D) ? S = !0 : t.has(D) && (f === ne ? S = !0 : g = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || g) {
          var k = Ia(e, ut);
          k !== null && Dr(k, e, ut, yn);
        }
        l !== null && !S && Jg(l, t, a), s !== null && Jg(s, t, a);
      }
    }
    var MR = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return Zg(e.current, i, a), a;
      }
    };
    function Zg(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case W:
          case De:
          case ne:
            p = f;
            break;
          case ie:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? LR(e, a) : i !== null && Zg(i, t, a), l !== null && Zg(l, t, a);
      }
    }
    function LR(e, t) {
      {
        var a = AR(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case de:
              t.add(i.stateNode.containerInfo);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function AR(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
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
    var e4;
    {
      e4 = !1;
      try {
        var M1 = Object.preventExtensions({});
      } catch {
        e4 = !0;
      }
    }
    function UR(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !e4 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new UR(e, t, a, i);
    };
    function t4(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zR(e) {
      return typeof e == "function" && !t4(e) && e.defaultProps === void 0;
    }
    function jR(e) {
      if (typeof e == "function")
        return t4(e) ? ne : W;
      if (e != null) {
        var t = e.$$typeof;
        if (t === X)
          return ie;
        if (t === Ct)
          return Ke;
      }
      return ve;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Xn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ve:
        case W:
        case De:
          a.type = Yf(e.type);
          break;
        case ne:
          a.type = Kg(e.type);
          break;
        case ie:
          a.type = Xg(e.type);
          break;
      }
      return a;
    }
    function FR(e, t) {
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
    function HR(e, t, a) {
      var i;
      return e === Pm ? (i = Mt, t === !0 && (i |= vn, i |= tn)) : i = Ge, ua && (i |= en), di(K, null, null, i);
    }
    function n4(e, t, a, i, l, s) {
      var f = ve, p = e;
      if (typeof e == "function")
        t4(e) ? (f = ne, p = Kg(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = se;
      else
        e: switch (e) {
          case mi:
            return Yo(a.children, l, s, t);
          case Xa:
            f = qe, l |= vn, (l & Mt) !== Ge && (l |= tn);
            break;
          case hi:
            return PR(a, l, s, t);
          case ge:
            return BR(a, l, s, t);
          case Le:
            return VR(a, l, s, t);
          case Bn:
            return L1(a, l, s, t);
          case xn:
          case Ut:
          case wn:
          case hr:
          case Ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case yi:
                  f = He;
                  break e;
                case w:
                  f = Ft;
                  break e;
                case X:
                  f = ie, p = Xg(p);
                  break e;
                case Ct:
                  f = Ke;
                  break e;
                case gt:
                  f = jt, p = null;
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
    function r4(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = n4(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var l = di(lt, e, i, t);
      return l.lanes = a, l;
    }
    function PR(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(Me, e, i, t | en);
      return l.elementType = hi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function BR(e, t, a, i) {
      var l = di(Se, e, i, t);
      return l.elementType = ge, l.lanes = a, l;
    }
    function VR(e, t, a, i) {
      var l = di(Pt, e, i, t);
      return l.elementType = Le, l.lanes = a, l;
    }
    function L1(e, t, a, i) {
      var l = di(Be, e, i, t);
      l.elementType = Bn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function a4(e, t, a) {
      var i = di(be, e, null, t);
      return i.lanes = a, i;
    }
    function $R() {
      var e = di(se, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function IR(e) {
      var t = di(ot, null, null, Ge);
      return t.stateNode = e, t;
    }
    function i4(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(de, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function A1(e, t) {
      return e === null && (e = di(ve, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function YR(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Py, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Jt, this.eventTimes = Ts(ee), this.expirationTimes = Ts(yn), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Ts(ee), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
    function U1(e, t, a, i, l, s, f, p, v, g) {
      var S = new YR(e, t, a, p, v), D = HR(t, s);
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
      return g0(D), S;
    }
    var u4 = "18.3.1";
    function WR(e, t, a) {
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
    var l4, o4;
    l4 = !1, o4 = {};
    function z1(e) {
      if (!e)
        return fi;
      var t = vo(e), a = _b(t);
      if (t.tag === ne) {
        var i = t.type;
        if (Qu(i))
          return sS(t, i, a);
      }
      return a;
    }
    function QR(e, t) {
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
          if (!o4[s]) {
            o4[s] = !0;
            var f = yr;
            try {
              fn(l), a.mode & vn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? fn(f) : Rn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function j1(e, t, a, i, l, s, f, p) {
      var v = !1, g = null;
      return U1(e, t, v, g, a, i, l, s, f);
    }
    function F1(e, t, a, i, l, s, f, p, v, g) {
      var S = !0, D = U1(a, i, S, e, l, s, f, p, v);
      D.context = z1(null);
      var k = D.current, z = ka(), H = $o(k), I = Bl(z, H);
      return I.callback = t ?? null, Uo(k, I, H), eR(D, H, z), D;
    }
    function Kp(e, t, a, i) {
      Sd(t, e);
      var l = t.current, s = ka(), f = $o(l);
      Un(f);
      var p = z1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Si && yr !== null && !l4 && (l4 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

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
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function GR(e) {
      switch (e.tag) {
        case K: {
          var t = e.stateNode;
          if (nf(t)) {
            var a = Pv(t);
            aR(t, a);
          }
          break;
        }
        case Se: {
          Yl(function() {
            var l = Ia(e, ut);
            if (l !== null) {
              var s = ka();
              Dr(l, e, ut, s);
            }
          });
          var i = ut;
          s4(e, i);
          break;
        }
      }
    }
    function H1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function s4(e, t) {
      H1(e, t);
      var a = e.alternate;
      a && H1(a, t);
    }
    function qR(e) {
      if (e.tag === Se) {
        var t = Es, a = Ia(e, t);
        if (a !== null) {
          var i = ka();
          Dr(a, e, t, i);
        }
        s4(e, t);
      }
    }
    function KR(e) {
      if (e.tag === Se) {
        var t = $o(e), a = Ia(e, t);
        if (a !== null) {
          var i = ka();
          Dr(a, e, t, i);
        }
        s4(e, t);
      }
    }
    function P1(e) {
      var t = kn(e);
      return t === null ? null : t.stateNode;
    }
    var B1 = function(e) {
      return null;
    };
    function XR(e) {
      return B1(e);
    }
    var V1 = function(e) {
      return !1;
    };
    function JR(e) {
      return V1(e);
    }
    var $1 = null, I1 = null, Y1 = null, W1 = null, Q1 = null, G1 = null, q1 = null, K1 = null, X1 = null;
    {
      var J1 = function(e, t, a) {
        var i = t[a], l = _t(e) ? e.slice() : kt({}, e);
        return a + 1 === t.length ? (_t(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = J1(e[i], t, a + 1), l);
      }, Z1 = function(e, t) {
        return J1(e, t, 0);
      }, ex = function(e, t, a, i) {
        var l = t[i], s = _t(e) ? e.slice() : kt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], _t(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = ex(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, tx = function(e, t, a) {
        if (t.length !== a.length) {
          J("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              J("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ex(e, t, a, 0);
      }, nx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = _t(e) ? e.slice() : kt({}, e);
        return s[l] = nx(e[l], t, a + 1, i), s;
      }, rx = function(e, t, a) {
        return nx(e, t, 0, a);
      }, c4 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      $1 = function(e, t, a, i) {
        var l = c4(e, t);
        if (l !== null) {
          var s = rx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = kt({}, e.memoizedProps);
          var f = Ia(e, ut);
          f !== null && Dr(f, e, ut, yn);
        }
      }, I1 = function(e, t, a) {
        var i = c4(e, t);
        if (i !== null) {
          var l = Z1(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = kt({}, e.memoizedProps);
          var s = Ia(e, ut);
          s !== null && Dr(s, e, ut, yn);
        }
      }, Y1 = function(e, t, a, i) {
        var l = c4(e, t);
        if (l !== null) {
          var s = tx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = kt({}, e.memoizedProps);
          var f = Ia(e, ut);
          f !== null && Dr(f, e, ut, yn);
        }
      }, W1 = function(e, t, a) {
        e.pendingProps = rx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, ut);
        i !== null && Dr(i, e, ut, yn);
      }, Q1 = function(e, t) {
        e.pendingProps = Z1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ia(e, ut);
        a !== null && Dr(a, e, ut, yn);
      }, G1 = function(e, t, a) {
        e.pendingProps = tx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, ut);
        i !== null && Dr(i, e, ut, yn);
      }, q1 = function(e) {
        var t = Ia(e, ut);
        t !== null && Dr(t, e, ut, yn);
      }, K1 = function(e) {
        B1 = e;
      }, X1 = function(e) {
        V1 = e;
      };
    }
    function ZR(e) {
      var t = aa(e);
      return t === null ? null : t.stateNode;
    }
    function eT(e) {
      return null;
    }
    function tT() {
      return yr;
    }
    function nT(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return yo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: $1,
        overrideHookStateDeletePath: I1,
        overrideHookStateRenamePath: Y1,
        overrideProps: W1,
        overridePropsDeletePath: Q1,
        overridePropsRenamePath: G1,
        setErrorHandler: K1,
        setSuspenseHandler: X1,
        scheduleUpdate: q1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ZR,
        findFiberByHostInstance: t || eT,
        // React Refresh
        findHostInstancesForRefresh: MR,
        scheduleRefresh: NR,
        scheduleRoot: OR,
        setRefreshHandler: DR,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tT,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: u4
      });
    }
    var ax = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function f4(e) {
      this._internalRoot = e;
    }
    Yh.prototype.render = f4.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Wh(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== qn) {
          var i = P1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Kp(e, t, null, null);
    }, Yh.prototype.unmount = f4.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        h1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yl(function() {
          Kp(null, e, null, null);
        }), aS(t);
      }
    };
    function rT(e, t) {
      if (!Wh(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ix(e);
      var a = !1, i = !1, l = "", s = ax;
      t != null && (t.hydrate ? J("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = j1(e, Pm, null, a, i, l, s);
      Lm(f.current, e);
      var p = e.nodeType === qn ? e.parentNode : e;
      return np(p), new f4(f);
    }
    function Yh(e) {
      this._internalRoot = e;
    }
    function aT(e) {
      e && tm(e);
    }
    Yh.prototype.unstable_scheduleHydration = aT;
    function iT(e, t, a) {
      if (!Wh(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ix(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = ax;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var g = F1(t, null, e, Pm, i, s, f, p, v);
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
    function ix(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uT = E.ReactCurrentOwner, ux;
    ux = function(e) {
      if (e._reactRootContainer && e.nodeType !== qn) {
        var t = P1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = d4(e), l = !!(i && No(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function d4(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function lx() {
    }
    function lT(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = Ih(f);
            s.call(k);
          };
        }
        var f = F1(
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
          lx
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
        var S = j1(
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
          lx
        );
        e._reactRootContainer = S, Lm(S.current, e);
        var D = e.nodeType === qn ? e.parentNode : e;
        return np(D), Yl(function() {
          Kp(t, S, a, i);
        }), S;
      }
    }
    function oT(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qh(e, t, a, i, l) {
      ux(a), oT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = lT(a, t, e, l, i);
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
    var ox = !1;
    function sT(e) {
      {
        ox || (ox = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : QR(e, "findDOMNode");
    }
    function cT(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qh(null, e, t, !0, a);
    }
    function fT(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qh(null, e, t, !1, a);
    }
    function dT(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !sy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qh(e, t, a, !1, i);
    }
    var sx = !1;
    function pT(e) {
      if (sx || (sx = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = d4(e), i = a && !No(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yl(function() {
          Qh(null, null, e, !1, function() {
            e._reactRootContainer = null, aS(e);
          });
        }), !0;
      } else {
        {
          var l = d4(e), s = !!(l && No(l)), f = e.nodeType === ta && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Lr(GR), xo(qR), Xv(KR), Os(Ba), Hd(Gv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Sc(mC), oy($g, iR, Yl);
    function vT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wh(t))
        throw new Error("Target container is not a DOM element.");
      return WR(e, t, null, a);
    }
    function mT(e, t, a, i) {
      return dT(e, t, a, i);
    }
    var p4 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, Cf, Am, so, Ec, $g]
    };
    function hT(e, t) {
      return p4.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rT(e, t);
    }
    function yT(e, t, a) {
      return p4.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iT(e, t, a);
    }
    function gT(e) {
      return h1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yl(e);
    }
    var ST = nT({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: u4,
      rendererPackageName: "react-dom"
    });
    if (!ST && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var cx = window.location.protocol;
      /^(https?|file):$/.test(cx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (cx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p4, qa.createPortal = vT, qa.createRoot = hT, qa.findDOMNode = sT, qa.flushSync = gT, qa.hydrate = cT, qa.hydrateRoot = yT, qa.render = fT, qa.unmountComponentAtNode = pT, qa.unstable_batchedUpdates = $g, qa.unstable_renderSubtreeIntoContainer = mT, qa.version = u4, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qa;
}
function Ox() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox);
    } catch (C) {
      console.error(C);
    }
  }
}
process.env.NODE_ENV === "production" ? (Ox(), b4.exports = _T()) : b4.exports = DT();
var NT = b4.exports, w4, qh = NT;
if (process.env.NODE_ENV === "production")
  w4 = qh.createRoot, qh.hydrateRoot;
else {
  var Ex = qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  w4 = function(C, T) {
    Ex.usingClientEntryPoint = !0;
    try {
      return qh.createRoot(C, T);
    } finally {
      Ex.usingClientEntryPoint = !1;
    }
  };
}
function OT(C) {
  const T = C.trim().replace(/\s+/g, " ");
  return T ? T.charAt(0).toUpperCase() + T.slice(1) : "";
}
function D4(C) {
  return OT(C.category ?? "");
}
function MT(C) {
  const T = C.map(($) => ({
    ...$,
    category: D4($) || void 0
  }));
  let E = "";
  for (const $ of T)
    $.category ? E = $.category : E && ($.category = E);
  return T;
}
function LT(C) {
  const T = /* @__PURE__ */ new Set();
  for (const $ of C) {
    const G = D4($);
    G && T.add(G);
  }
  const E = [...T].sort(($, G) => $.localeCompare(G, "bg"));
  return [{ id: null, label: "Всички" }, ...E.map(($) => ({ id: $, label: $ }))];
}
function xx(C, T) {
  return T ? D4(C) === T : !0;
}
var AT = {
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
}, UT = {
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
}, h4 = { bg: AT, en: UT };
function Cx(C, T) {
  let E = C;
  for (const $ of T) {
    if (E == null || typeof E != "object") return;
    E = E[$];
  }
  return typeof E == "string" ? E : void 0;
}
function zT(C, T) {
  return C.replace(/\{(\w+)\}/g, (E, $) => String(T[$] ?? `{${$}}`));
}
function Mx(C) {
  const T = h4[C] ?? h4.bg;
  return function($, G) {
    const J = $.split(".");
    let y = Cx(T, J);
    return y === void 0 && (y = Cx(h4.bg, J) ?? $), G ? zT(y, G) : y;
  };
}
var Lx = fe.createContext(Mx("bg"));
function jT({ locale: C, children: T }) {
  const E = Mx(C);
  return /* @__PURE__ */ O.jsx(Lx.Provider, { value: E, children: T });
}
function N4() {
  return fe.useContext(Lx);
}
function bx(C) {
  const T = new Uint8Array(C);
  return globalThis.crypto.getRandomValues(T), Array.from(T, (E) => E.toString(16).padStart(2, "0")).join("");
}
function wx(...C) {
  for (const T of C) {
    const E = String(T ?? "").trim();
    if (E) return E;
  }
  return "";
}
function FT(C) {
  return /^svc-\d/.test(C);
}
function HT(C, T) {
  const E = C.trim();
  if (E && !FT(E) && !T.has(E))
    return T.add(E), E;
  let $ = bx(4);
  for (; T.has($); ) $ = bx(4);
  return T.add($), $;
}
function PT(C) {
  if (typeof C == "string")
    try {
      C = JSON.parse(C);
    } catch {
      return [];
    }
  let T = [];
  if (Array.isArray(C))
    T = C;
  else if (C && typeof C == "object")
    T = Object.values(C);
  else
    return [];
  const E = /* @__PURE__ */ new Set(), $ = [];
  return T.forEach((G, J) => {
    const y = G, Oe = wx(y.name, y.service_name, y.serviceName, y.title);
    if (!Oe) return;
    const W = HT(String(y.id ?? ""), E), ne = Number(y.duration ?? y.duration_min ?? y.durationMin ?? 30) || 30, ve = y.price ?? y.service_price ?? y.servicePrice, K = ve != null ? Number(ve) : void 0, de = Array.isArray(y.variants) ? y.variants.map((De) => {
      if (!De || typeof De != "object") return null;
      const jt = De, it = String(jt.label ?? "").trim();
      if (!it) return null;
      const ot = Number(jt.price ?? NaN);
      if (!Number.isFinite(ot)) return null;
      const Pt = Number(jt.duration ?? NaN);
      return {
        label: it,
        price: Math.max(0, ot),
        duration: Number.isFinite(Pt) ? Math.max(5, Math.round(Pt)) : void 0
      };
    }).filter((De) => De !== null) : void 0, se = Array.isArray(y.images) ? y.images.map((De) => String(De ?? "").trim()).filter(Boolean) : void 0, be = Array.isArray(y.assignedTeamMemberIds) ? [...new Set(y.assignedTeamMemberIds.map((De) => String(De ?? "").trim()).filter(Boolean))] : void 0, lt = String(y.payment_type ?? ""), qe = ["none", "deposit", "full"].includes(lt) ? lt : void 0, Ft = Number(y.deposit_amount ?? NaN), He = Number.isFinite(Ft) ? Math.max(0, Ft) : void 0, ie = Number(y.cancel_policy_hours ?? NaN), Me = Number.isFinite(ie) && ie > 0 ? ie : void 0, Se = String(y.cancel_policy_action ?? ""), Ke = ["full_refund", "keep_deposit", "keep_full"].includes(Se) ? Se : void 0;
    $.push({
      id: W,
      name: Oe,
      description: String(y.description ?? "").trim() || void 0,
      category: wx(
        y.category,
        y.category_name,
        y.categoryName,
        y.service_category,
        y.serviceCategory
      ) || void 0,
      price: K != null && Number.isFinite(K) ? K : void 0,
      duration: ne,
      images: se,
      variants: de && de.length > 0 ? de : void 0,
      ...be && be.length > 0 ? { assignedTeamMemberIds: be } : {},
      ...qe !== void 0 ? { payment_type: qe } : {},
      ...He !== void 0 ? { deposit_amount: He } : {},
      ...y.requires_confirmation === !0 ? { requires_confirmation: !0 } : {},
      ...Me !== void 0 ? { cancel_policy_hours: Me } : {},
      ...Ke !== void 0 ? { cancel_policy_action: Ke } : {}
    });
  }), $;
}
var R4 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], BT = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday"
};
function VT(C, T) {
  const E = {};
  for (const G of R4) E[G] = null;
  const $ = $T(T);
  if ($) {
    for (const G of R4)
      $[G] !== void 0 && (E[G] = $[G]);
    return E;
  }
  if (C && typeof C == "object")
    for (const [G, J] of Object.entries(C)) {
      const y = BT[G.toLowerCase()];
      y && (!J || J.closed || !J.open || !J.close ? E[y] = null : E[y] = { open: J.open, close: J.close });
    }
  return E;
}
function $T(C) {
  if (!C || typeof C != "object" || Array.isArray(C)) return null;
  const T = C, E = {};
  let $ = !1;
  for (const G of R4) {
    const J = T[G];
    if (J && typeof J == "object" && !Array.isArray(J)) {
      const y = String(J.open ?? ""), Oe = String(J.close ?? "");
      y && Oe ? (E[G] = { open: y, close: Oe }, $ = !0) : E[G] = null;
    }
  }
  return $ ? E : null;
}
function IT(C) {
  return /^\d{4}-\d{2}-\d{2}$/.test(C);
}
function T4(C) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(C);
}
function nv(C) {
  const [T, E] = C.split(":").map(Number);
  return T * 60 + E;
}
function YT(C) {
  if (!Array.isArray(C)) return [];
  const T = [];
  for (const E of C) {
    if (!E || typeof E != "object") continue;
    const $ = E, G = String($.date ?? "").trim();
    if (!IT(G)) continue;
    const J = $.allDay === !0, y = String($.start ?? "").trim(), Oe = String($.end ?? "").trim(), W = String($.note ?? "").trim();
    if (!J) {
      if (!T4(y) || !T4(Oe) || nv(Oe) <= nv(y)) continue;
      T.push({ date: G, allDay: !1, start: y, end: Oe, ...W ? { note: W } : {} });
      continue;
    }
    T.push({ date: G, allDay: !0, ...W ? { note: W } : {} });
  }
  return T.sort((E, $) => `${E.date}-${E.start ?? ""}`.localeCompare(`${$.date}-${$.start ?? ""}`)), T;
}
function Ax(C, T) {
  return C.some((E) => E.date === T && E.allDay);
}
function WT(C, T, E, $) {
  if (Ax(C, T)) return !0;
  if (!T4(E)) return !1;
  const G = nv(E), J = G + Math.max(1, $);
  for (const y of C) {
    if (y.date !== T || y.allDay || !y.start || !y.end) continue;
    const Oe = nv(y.start), W = nv(y.end);
    if (G < W && J > Oe) return !0;
  }
  return !1;
}
var k4 = "tracking_booking_started";
function QT() {
  var C;
  typeof sessionStorage > "u" || sessionStorage.getItem(k4) || (sessionStorage.setItem(k4, "1"), (C = window.gtag) == null || C.call(window, "event", "booking_started"));
}
function GT({ serviceName: C, value: T, currency: E = "EUR" } = {}) {
  var J, y, Oe;
  typeof sessionStorage < "u" && sessionStorage.removeItem(k4);
  const $ = {};
  T != null && T > 0 && ($.value = T, $.currency = E), C && ($.content_name = C), (J = window.fbq) == null || J.call(window, "track", "Schedule", $), (y = window.fbq) == null || y.call(window, "trackCustom", "BookingCompleted", { ...$, service_name: C });
  const G = {};
  T != null && T > 0 && (G.value = T, G.currency = E), C && (G.service_name = C), (Oe = window.gtag) == null || Oe.call(window, "event", "booking_completed", G);
}
var qT = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function Rx(C) {
  return String(C).padStart(2, "0");
}
function Tx(C) {
  return new Date(C.getTime() - C.getTimezoneOffset() * 6e4).toISOString().split("T")[0];
}
function KT({
  slug: C,
  openingHours: T,
  bookingBlocks: E,
  slotIntervalMin: $,
  bookingAdvanceDays: G,
  bookingServices: J,
  engineUrl: y = "",
  successUrl: Oe,
  cancelUrl: W,
  locale: ne = "bg-BG",
  onEvent: ve
}) {
  const K = N4(), de = y.replace(/\/$/, ""), se = `/api/public/v1/salons/${encodeURIComponent(C)}`, [be, lt] = fe.useState(!1), [qe, Ft] = fe.useState([]), [He, ie] = fe.useState(""), [Me, Se] = fe.useState(""), [Ke, De] = fe.useState({}), [jt, it] = fe.useState(""), [ot, Pt] = fe.useState(""), [yt, Be] = fe.useState(""), [Tt, Lt] = fe.useState(""), [Dt, Ae] = fe.useState(""), [oe, Ue] = fe.useState(""), [pe, N] = fe.useState([]), [P, Xe] = fe.useState(null), Ve = fe.useRef(!1), [st, tt] = fe.useState(!1), [ft, q] = fe.useState(""), [dt, At] = fe.useState(""), [gn, Sn] = fe.useState(null);
  fe.useEffect(() => {
    const we = /* @__PURE__ */ new Date();
    it(Tx(we));
    const at = new Date(we);
    at.setDate(we.getDate() + Math.max(1, G)), Pt(Tx(at));
  }, [G]), fe.useEffect(() => {
    !be || Ve.current || (Ve.current = !0, fetch(`${de}${se}/staff`, { cache: "no-store" }).then((we) => we.json()).then((we) => {
      Array.isArray(we.staff) && N(we.staff);
    }).catch(() => {
    }));
  }, [be, C]), fe.useEffect(() => {
    if (!He) return;
    let we = !1;
    const at = P ? `&staffMemberId=${encodeURIComponent(P)}` : "";
    return fetch(
      `${de}${se}/slots?date=${encodeURIComponent(He)}${at}`,
      { cache: "no-store" }
    ).then((wt) => wt.json()).then((wt) => {
      if (we || !Array.isArray(wt.occupied)) return;
      const Vt = wt.occupied.map((Z) => ({
        time: String((Z == null ? void 0 : Z.time) ?? ""),
        duration: Math.max(5, Number((Z == null ? void 0 : Z.duration) ?? 30) || 30)
      })).filter((Z) => Z.time.length >= 4), un = P ? `${He}:${P}` : He;
      we || De((Z) => ({ ...Z, [un]: Vt }));
    }).catch(() => {
    }), () => {
      we = !0;
    };
  }, [C, He, P]);
  const mt = fe.useMemo(
    () => qe.map((we) => J[we]).filter((we) => !!we),
    [qe, J]
  ), Nt = fe.useMemo(
    () => mt.reduce((we, at) => we + (Number(at.duration) || 0), 0),
    [mt]
  ), Kt = fe.useMemo(
    () => mt.reduce((we, at) => we + (Number(at.price) || 0), 0),
    [mt]
  ), cn = fe.useCallback(
    (we, at) => {
      if (!we) return null;
      const wt = qT[(/* @__PURE__ */ new Date(`${we}T12:00:00`)).getDay()], Vt = T[wt];
      if (!(Vt != null && Vt.open) || !(Vt != null && Vt.close) || Ax(E, we)) return "closed";
      const un = Math.max(5, at || 30), Z = P ? `${we}:${P}` : we, ke = Ke[Z] ?? [], [pt = 0, Et = 0] = Vt.open.split(":").map(Number), [Qt = 0, ln = 0] = Vt.close.split(":").map(Number), Xt = pt * 60 + Et, B = Qt * 60 + ln - un, me = [];
      for (let $e = Xt; $e <= B; $e += $) {
        const Ie = `${Rx(Math.floor($e / 60))}:${Rx($e % 60)}`, Pn = $e + un;
        !ke.some(({ time: jn, duration: ya }) => {
          const [$i = 0, Ii = 0] = jn.split(":").map(Number), Ka = $i * 60 + Ii, vi = Ka + Math.max(5, ya);
          return Ka < Pn && vi > $e;
        }) && !WT(E, we, Ie, un) && me.push(Ie);
      }
      return me;
    },
    [T, E, Ke, P, $]
  ), Gn = fe.useMemo(
    () => qe.length === 0 ? null : cn(He, Nt || 30),
    [qe.length, cn, He, Nt]
  ), Zr = fe.useCallback((we) => {
    if (q(""), At(""), Sn(null), we) {
      const at = J.findIndex((wt) => wt.id === we);
      Ft(at >= 0 ? [at] : []);
    } else
      Ft([]);
    ie(""), Se(""), Be(""), Lt(""), Ae(""), Ue(""), lt(!0), ve ? ve("booking_started") : QT();
  }, [J, ve]), Hn = fe.useCallback(() => {
    lt(!1), Sn(null), Xe(null), ie(""), Se("");
  }, []), Dn = fe.useCallback((we) => {
    Ft((at) => at.includes(we) ? at.filter((Vt) => Vt !== we) : [...at, we]), Se("");
  }, []), En = fe.useCallback((we) => {
    ie(we), Se("");
  }, []), Nn = fe.useCallback((we) => {
    Xe(we), ie(""), Se("");
  }, []), On = fe.useCallback((we, at, wt) => {
    if (!we || !at) return;
    const Vt = Math.max(5, Number(wt) || 30);
    De((un) => {
      const Z = un[we] ?? [];
      return Z.some((ke) => ke.time === at) ? un : { ...un, [we]: [...Z, { time: at, duration: Vt }] };
    });
  }, []), Nr = fe.useCallback(async (we) => {
    if (we.preventDefault(), q(""), At(""), mt.length === 0) {
      q(K("booking.errors.noService"));
      return;
    }
    if (!yt.trim()) {
      q(K("booking.errors.noName"));
      return;
    }
    if (!Tt.trim()) {
      q(K("booking.errors.noPhone"));
      return;
    }
    if (!Dt.trim()) {
      q(K("booking.errors.noEmail"));
      return;
    }
    if (!He) {
      q(K("booking.errors.noDate"));
      return;
    }
    if (!Me) {
      q(K("booking.errors.noTime"));
      return;
    }
    const at = mt.map((Et) => Et.name).join(" + "), wt = Nt || 30, Vt = mt[0], un = (Vt == null ? void 0 : Vt.payment_type) ?? "none", Z = (Vt == null ? void 0 : Vt.deposit_amount) ?? 0, ke = un === "deposit" ? Z : un === "full" ? Kt ?? 0 : 0, pt = un !== "none" && ke > 0;
    tt(!0);
    try {
      const Et = await fetch(`${de}${se}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: yt.trim(),
          clientPhone: Tt.trim(),
          clientEmail: Dt.trim().toLowerCase(),
          serviceName: at,
          servicePrice: Kt,
          serviceDuration: wt,
          date: He,
          time: Me,
          notes: oe.trim() || void 0,
          requiresPayment: pt,
          staffMemberId: P ?? void 0
        })
      }), Qt = await Et.json().catch(() => ({}));
      if (!Et.ok)
        throw new Error(
          Qt.error ?? (Et.status === 500 ? K("booking.errors.saveFailed") : K("booking.errors.httpError", { status: Et.status }))
        );
      const ln = Qt.bookingId ?? Qt.id;
      if (pt && ln) {
        const me = await fetch(`${de}${se}/booking-checkout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: ln,
            salonSlug: C,
            serviceName: at,
            amountEuros: ke,
            paymentType: un,
            successUrl: Oe,
            cancelUrl: W
          })
        }), $e = await me.json().catch(() => ({}));
        if (!me.ok || !$e.checkoutUrl)
          throw new Error($e.error ?? K("booking.errors.paymentFailed"));
        window.location.href = $e.checkoutUrl;
        return;
      }
      const Xt = (/* @__PURE__ */ new Date(`${He}T12:00:00`)).toLocaleDateString(ne, {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      On(He, Me, wt), Sn({ serviceName: at, dateLabel: Xt, time: Me }), At(`${at} — ${Xt} ${Me}`);
      const B = {
        serviceName: at,
        value: Kt > 0 ? Kt : void 0,
        currency: "EUR"
      };
      ve ? ve("booking_completed", B) : GT(B);
    } catch (Et) {
      q(Et instanceof Error ? Et.message : K("booking.errors.generic"));
    } finally {
      tt(!1);
    }
  }, [
    C,
    mt,
    yt,
    Tt,
    Dt,
    He,
    Me,
    oe,
    Nt,
    Kt,
    P,
    On,
    Oe,
    W,
    ne,
    ve
  ]);
  return {
    bookingOpen: be,
    open: Zr,
    close: Hn,
    selectedServiceIdxs: qe,
    toggleService: Dn,
    totalDuration: Nt,
    totalPrice: Kt,
    selectedServices: mt,
    selectedDate: He,
    setDate: En,
    selectedTime: Me,
    setTime: Se,
    timeSlots: Gn,
    minDate: jt,
    maxDate: ot,
    clientName: yt,
    setClientName: Be,
    clientPhone: Tt,
    setClientPhone: Lt,
    clientEmail: Dt,
    setClientEmail: Ae,
    notes: oe,
    setNotes: Ue,
    staffMembers: pe,
    selectedStaffMemberId: P,
    setStaffMemberId: Nn,
    isSubmitting: st,
    bookingError: ft,
    bookingSuccess: dt,
    bookingSuccessDetails: gn,
    submit: Nr
  };
}
var XT = fe.lazy(
  () => Promise.resolve().then(() => Tk).then((C) => ({ default: C.SalonBookingModal }))
);
function JT({
  forwardedRef: C,
  slug: T,
  openingHours: E,
  bookingBlocks: $,
  slotIntervalMin: G,
  bookingAdvanceDays: J,
  bookingServices: y,
  serviceCatalog: Oe,
  categoryTabs: W,
  engineUrl: ne,
  primaryColor: ve,
  accentGradient: K,
  successUrl: de,
  cancelUrl: se,
  locale: be,
  formatPrice: lt,
  onEvent: qe,
  salonName: Ft,
  basePath: He
}) {
  const ie = KT({
    slug: T,
    openingHours: E,
    bookingBlocks: $,
    slotIntervalMin: G,
    bookingAdvanceDays: J,
    bookingServices: y,
    engineUrl: ne,
    successUrl: de,
    cancelUrl: se,
    locale: be,
    onEvent: qe
  });
  fe.useImperativeHandle(C, () => ({
    open: (Se) => ie.open(Se),
    close: () => ie.close()
  }), [ie.open, ie.close]);
  const Me = ie.selectedServices[0];
  return /* @__PURE__ */ O.jsx(fe.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(
    XT,
    {
      open: ie.bookingOpen,
      primaryColor: ve,
      accentGradient: K,
      locale: be,
      formatPrice: lt,
      serviceCatalog: Oe,
      categoryTabs: W,
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
      paymentType: (Me == null ? void 0 : Me.payment_type) ?? "none",
      depositAmount: Me == null ? void 0 : Me.deposit_amount,
      cancelPolicyHours: Me == null ? void 0 : Me.cancel_policy_hours,
      cancelPolicyAction: Me == null ? void 0 : Me.cancel_policy_action,
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
var ZT = fe.forwardRef(
  function({ slug: T, salon: E, openingHours: $, bookingBlocks: G, basePath: J = "", engineUrl: y = "", accentGradient: Oe, successUrl: W, cancelUrl: ne, locale: ve, formatPrice: K, onEvent: de }, se) {
    const be = fe.useMemo(
      () => VT(
        E.working_hours,
        E.opening_hours
      ),
      [E.working_hours, E.opening_hours]
    ), lt = $ ?? be, qe = G ?? YT(
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
      () => MT(PT(E.services)),
      [E.services]
    ), Me = fe.useMemo(
      () => LT(ie),
      [ie]
    ), Se = fe.useMemo(() => {
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
    }, [ie]), Ke = typeof E.language == "string" ? E.language : "bg", De = ve ?? (Ke === "en" ? "en-US" : "bg-BG"), jt = typeof E.primary_color == "string" && E.primary_color ? E.primary_color : "#5B21B6";
    return /* @__PURE__ */ O.jsx(jT, { locale: Ke, children: /* @__PURE__ */ O.jsx(
      JT,
      {
        forwardedRef: se,
        slug: T,
        openingHours: lt,
        bookingBlocks: qe,
        slotIntervalMin: Ft,
        bookingAdvanceDays: He,
        bookingServices: Se,
        serviceCatalog: ie,
        categoryTabs: Me,
        engineUrl: y,
        primaryColor: jt,
        accentGradient: Oe,
        successUrl: W,
        cancelUrl: ne,
        locale: De,
        formatPrice: K,
        onEvent: de,
        salonName: String(E.name ?? ""),
        basePath: J
      }
    ) });
  }
);
const ek = {
  en: { loading: "Loading…", error: "Booking is temporarily unavailable." },
  bg: { loading: "Зареждане…", error: "Резервациите временно не са достъпни." }
};
function tk(C) {
  const T = document.body.dataset.lang || "en", E = (J) => {
    var y;
    return (y = document.querySelector(`meta[name="${J}"]`)) == null ? void 0 : y.content;
  }, $ = (C == null ? void 0 : C.dataset.engine) || E("clicka:engine") || "https://clicka.bg", G = (C == null ? void 0 : C.dataset.salon) || E("clicka:salon") || "urban-by-delyana";
  return {
    lang: T,
    engineUrl: $,
    salonSlug: G,
    successUrl: (C == null ? void 0 : C.dataset.successUrl) || `${location.origin}${location.pathname}?booked=1`,
    cancelUrl: (C == null ? void 0 : C.dataset.cancelUrl) || `${location.origin}${location.pathname}?cancelled=1`
  };
}
function nk({
  config: C,
  registerOpen: T
}) {
  const E = ek[C.lang], $ = fe.useRef(null), [G, J] = fe.useState(null), [y, Oe] = fe.useState(null), W = fe.useRef(null), ne = fe.useRef(null), [ve, K] = fe.useState(null);
  return fe.useEffect(() => {
    let de = !1;
    const se = `${C.engineUrl.replace(/\/$/, "")}/api/public/v1/salons/${encodeURIComponent(C.salonSlug)}`;
    return fetch(se, { cache: "no-store" }).then((be) => {
      if (!be.ok) throw new Error(`HTTP ${be.status}`);
      return be.json();
    }).then((be) => {
      if (!de) {
        if (!be.salon) throw new Error("Empty salon response");
        J(be.salon);
      }
    }).catch((be) => {
      de || (console.error("[booking] salon fetch failed:", be), Oe(E.error));
    }), () => {
      de = !0;
    };
  }, [C.engineUrl, C.salonSlug, E.error]), fe.useEffect(() => {
    T((se) => {
      if (y) {
        K(y), ne.current && window.clearTimeout(ne.current), ne.current = window.setTimeout(() => K(null), 4e3);
        return;
      }
      if (!G || !$.current) {
        W.current = se || "", K(E.loading), ne.current && window.clearTimeout(ne.current), ne.current = window.setTimeout(() => K(null), 2500);
        return;
      }
      $.current.open(se || void 0);
    });
  }, [G, y, E.loading, T]), fe.useEffect(() => {
    if (G && $.current && W.current !== null) {
      const de = W.current;
      W.current = null, $.current.open(de || void 0);
    }
  }, [G]), /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    ve ? /* @__PURE__ */ O.jsx("div", { className: "clicka_booking_notice", role: "status", children: ve }) : null,
    G ? /* @__PURE__ */ O.jsx(
      ZT,
      {
        ref: $,
        slug: C.salonSlug,
        salon: G,
        engineUrl: C.engineUrl,
        successUrl: C.successUrl,
        cancelUrl: C.cancelUrl,
        locale: C.lang === "bg" ? "bg-BG" : "en-US"
      }
    ) : null
  ] });
}
function kx() {
  if (window.__clickaBookingMounted) return;
  window.__clickaBookingMounted = !0;
  let C = document.getElementById("clicka_booking");
  C ? C.innerHTML = "" : (C = document.createElement("div"), C.id = "clicka_booking", C.style.position = "fixed", C.style.inset = "auto", C.style.zIndex = "2147483000", document.body.appendChild(C));
  const T = tk(C);
  let E = (W) => {
    $ = W || "";
  }, $ = null;
  const G = (W) => {
    if (E = W, $ !== null) {
      const ne = $;
      $ = null, E(ne || void 0);
    }
  };
  w4(C).render(
    /* @__PURE__ */ O.jsx(nk, { config: T, registerOpen: G })
  );
  const J = (W) => {
    const ne = W.target;
    if (!ne) return;
    const ve = ne.closest("[data-book-service],[data-book]");
    if (!ve) return;
    W.preventDefault();
    const K = ve.getAttribute("data-book-service") || ve.getAttribute("data-service") || "";
    E(K || void 0);
  };
  document.addEventListener("click", J);
  const y = new URLSearchParams(location.search), Oe = y.get("service");
  (Oe || y.has("book")) && E(Oe || void 0);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", kx, { once: !0 }) : kx();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = (...C) => C.filter((T, E, $) => !!T && T.trim() !== "" && $.indexOf(T) === E).join(" ").trim();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = (C) => C.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = (C) => C.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (T, E, $) => $ ? $.toUpperCase() : E.toLowerCase()
);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = (C) => {
  const T = ak(C);
  return T.charAt(0).toUpperCase() + T.slice(1);
};
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y4 = {
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
const ik = (C) => {
  for (const T in C)
    if (T.startsWith("aria-") || T === "role" || T === "title")
      return !0;
  return !1;
}, uk = fe.createContext({}), lk = () => fe.useContext(uk), ok = fe.forwardRef(
  ({ color: C, size: T, strokeWidth: E, absoluteStrokeWidth: $, className: G = "", children: J, iconNode: y, ...Oe }, W) => {
    const {
      size: ne = 24,
      strokeWidth: ve = 2,
      absoluteStrokeWidth: K = !1,
      color: de = "currentColor",
      className: se = ""
    } = lk() ?? {}, be = $ ?? K ? Number(E ?? ve) * 24 / Number(T ?? ne) : E ?? ve;
    return fe.createElement(
      "svg",
      {
        ref: W,
        ...y4,
        width: T ?? ne ?? y4.width,
        height: T ?? ne ?? y4.height,
        stroke: C ?? de,
        strokeWidth: be,
        className: Ux("lucide", se, G),
        ...!J && !ik(Oe) && { "aria-hidden": "true" },
        ...Oe
      },
      [
        ...y.map(([lt, qe]) => fe.createElement(lt, qe)),
        ...Array.isArray(J) ? J : [J]
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
const Qf = (C, T) => {
  const E = fe.forwardRef(
    ({ className: $, ...G }, J) => fe.createElement(ok, {
      ref: J,
      iconNode: T,
      className: Ux(
        `lucide-${rk(_x(C))}`,
        `lucide-${C}`,
        $
      ),
      ...G
    })
  );
  return E.displayName = _x(C), E;
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
], g4 = Qf("plus", mk);
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
], S4 = Qf("x", gk);
function _4(C, T, E) {
  if (E)
    return C.findIndex((G) => G.id === `${T}::${E}`);
  const $ = C.findIndex((G) => G.id === T);
  return $ >= 0 ? $ : C.findIndex((G) => G.id.startsWith(`${T}::`));
}
function Sk(C, T, E, $) {
  var J, y;
  if ((J = E.variants) != null && J.length) {
    const Oe = $ ?? ((y = E.variants[0]) == null ? void 0 : y.label), W = Oe ? _4(T, E.id, Oe) : -1;
    return W >= 0 && C.includes(W);
  }
  const G = _4(T, E.id);
  return G >= 0 && C.includes(G);
}
function Ek(C, T) {
  const E = C.variants ?? [];
  if (E.length > 0) {
    const $ = T ?? E[0].label, G = E.find((J) => J.label === $) ?? E[0];
    return {
      price: Number(G.price ?? C.price ?? 0) || 0,
      duration: Math.max(5, Number(G.duration ?? C.duration ?? 30) || 30)
    };
  }
  return {
    price: Number(C.price ?? 0) || 0,
    duration: Math.max(5, Number(C.duration ?? 30) || 30)
  };
}
function xk(C) {
  const { cancelPolicyHours: T, cancelPolicyAction: E, depositAmountEuros: $ } = C, G = T >= 48 ? `${Math.round(T / 24)} дни` : `${T} часа`;
  if (E === "full_refund")
    return `Безплатно отказване до ${G} преди часа. След срока — пълен refund.`;
  if (E === "keep_full")
    return `Безплатно отказване до ${G} преди часа. След срока платената сума не се връща.`;
  const J = $ ? ` (€${$})` : "";
  return `Безплатно отказване до ${G} преди часа. След срока депозитът${J} се задържа.`;
}
function Ck({
  categories: C,
  selectedId: T,
  onSelect: E,
  size: $ = "md",
  className: G = "",
  accentFill: J = "#111111"
}) {
  if (C.filter((W) => W.id != null).length === 0) return null;
  const Oe = $ === "sm" ? "text-[12px]" : "text-sm";
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `flex items-center gap-4 overflow-x-auto pb-0.5 scrollbar-none ${Oe} ${G}`.trim(),
      role: "tablist",
      "aria-label": "Категории услуги",
      children: C.map((W) => {
        const ne = T === W.id;
        return /* @__PURE__ */ O.jsxs(
          "span",
          {
            role: "tab",
            "aria-selected": ne,
            tabIndex: 0,
            onClick: () => E(W.id),
            onKeyDown: (ve) => {
              (ve.key === "Enter" || ve.key === " ") && (ve.preventDefault(), E(W.id));
            },
            className: `relative inline-block shrink-0 cursor-pointer select-none whitespace-nowrap pb-1.5 font-bold text-black transition ${ne ? "" : "hover:opacity-80"}`,
            children: [
              W.label,
              /* @__PURE__ */ O.jsx(
                "span",
                {
                  "aria-hidden": !0,
                  className: "absolute bottom-0 left-0 h-[2px] rounded-full transition-[width,opacity] duration-200",
                  style: {
                    width: ne ? "100%" : "0%",
                    opacity: ne ? 1 : 0,
                    backgroundImage: J
                  }
                }
              )
            ]
          },
          W.id ?? "all"
        );
      })
    }
  );
}
function bk({
  serviceName: C,
  dateLabel: T,
  time: E,
  salonName: $,
  onClose: G
}) {
  const J = N4(), [y, Oe] = fe.useState(!1);
  return fe.useEffect(() => {
    const W = setTimeout(() => Oe(!0), 50);
    return () => clearTimeout(W);
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
            children: J("booking.success.confirmed")
          }
        ),
        /* @__PURE__ */ O.jsxs(
          "p",
          {
            className: `mt-2 text-center text-[15px] leading-relaxed text-black/45 transition-all delay-300 duration-500 ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: [
              J("booking.success.waitingAt"),
              " ",
              /* @__PURE__ */ O.jsx("span", { className: "font-medium text-black/60", children: $ })
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
                  /* @__PURE__ */ O.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: J("booking.success.labelService") }),
                  /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: C })
                ] })
              ] }),
              /* @__PURE__ */ O.jsx("div", { className: "h-px bg-black/[0.05]" }),
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ O.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/[0.04]", children: /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4 text-black/40", "aria-hidden": !0, children: /* @__PURE__ */ O.jsx("path", { fillRule: "evenodd", d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ O.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wide text-black/30", children: J("booking.success.labelWhen") }),
                  /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[14px] font-medium leading-snug text-[#111]", children: J("booking.success.timeFormat", { date: T, time: E }) })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            onClick: G,
            className: `mt-8 w-full max-w-[320px] rounded-full bg-[#111] py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all delay-500 duration-500 active:scale-[0.98] ${y ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            children: J("booking.success.done")
          }
        )
      ]
    }
  ) });
}
var Vi = "shadow-[0_2px_6px_rgba(0,0,0,0.14),0_10px_32px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.1)]", Kh = "shadow-[0_8px_28px_rgba(0,0,0,0.18)]", E4 = "shadow-[0_2px_10px_rgba(0,0,0,0.08)]", Xh = `mt-1.5 block w-full min-w-0 max-w-full box-border rounded-2xl border border-black/[0.06] bg-white px-3.5 py-3 text-[16px] leading-tight text-[#111] touch-manipulation ${Vi} outline-none transition focus:border-[color:var(--salon-primary)]/40 focus:ring-2 focus:ring-[color:var(--salon-primary)]/12`;
function wk(C, T) {
  const [E, $] = C.split(":").map(Number);
  if (!Number.isFinite(E) || !Number.isFinite($)) return C;
  const G = E * 60 + $ + T, J = Math.floor(G / 60) % 24, y = G % 60;
  return `${String(J).padStart(2, "0")}:${String(y).padStart(2, "0")}`;
}
function Dx({ text: C }) {
  const T = C == null ? void 0 : C.trim();
  return T ? /* @__PURE__ */ O.jsx("p", { className: "mt-1 line-clamp-3 text-[12px] leading-relaxed text-black/50", children: T }) : null;
}
function Rk({
  open: C,
  primaryColor: T,
  accentGradient: E,
  locale: $ = "bg-BG",
  formatPrice: G,
  serviceCatalog: J,
  services: y,
  categoryTabs: Oe,
  selectedServiceIdxs: W,
  selectedDate: ne,
  selectedTime: ve,
  totalDuration: K,
  totalPrice: de,
  clientName: se,
  clientPhone: be,
  clientEmail: lt,
  notes: qe,
  salonName: Ft,
  termsHref: He,
  privacyHref: ie,
  minDate: Me,
  maxDate: Se,
  timeSlots: Ke,
  paymentType: De = "none",
  depositAmount: jt,
  cancelPolicyHours: it,
  cancelPolicyAction: ot,
  isSubmitting: Pt,
  bookingError: yt,
  bookingSuccess: Be,
  bookingSuccessDetails: Tt,
  onClose: Lt,
  onToggleService: Dt,
  onDateChange: Ae,
  onTimeChange: oe,
  onClientNameChange: Ue,
  onClientPhoneChange: pe,
  onClientEmailChange: N,
  onNotesChange: P,
  onSubmit: Xe,
  staffMembers: Ve = [],
  selectedStaffMemberId: st,
  onStaffMemberChange: tt,
  directStaffName: ft
}) {
  var Xt;
  const q = N4(), dt = fe.useMemo(
    () => E ?? `linear-gradient(135deg, ${T}, ${T})`,
    [E, T]
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
    () => G ?? ((B) => `${Number.isInteger(B) ? B : B.toFixed(2)} €`),
    [G]
  ), mt = Ve.length > 0 && !ft, [Nt, Kt] = fe.useState(1), [cn, Gn] = fe.useState(null), [Zr, Hn] = fe.useState(!0), [Dn, En] = fe.useState({}), [Nn, On] = fe.useState(null), Nr = fe.useRef(!1);
  fe.useEffect(() => {
    if (!C) return;
    Kt(1), Gn(null), On(null);
    const B = {};
    for (const me of J) {
      const $e = me.variants ?? [];
      $e.length > 0 && (B[me.id] = $e[0].label);
    }
    En(B);
  }, [C, J]);
  const we = fe.useMemo(() => W.map((B) => {
    var me;
    return (me = y[B]) == null ? void 0 : me.id;
  }).filter((B) => !!B), [W, y]), at = fe.useMemo(() => mt ? we.length === 0 ? Ve : Ve.filter(
    (B) => we.every((me) => B.serviceIds.includes(me))
  ) : [], [mt, Ve, we]);
  fe.useEffect(() => {
    !mt || at.length !== 1 || tt == null || tt(at[0].id);
  }, [mt, at, tt]), fe.useEffect(() => {
    C && !Nr.current && Hn(W.length === 0), Nr.current = C;
  }, [C, W.length]), fe.useEffect(() => {
    W.length === 0 ? Hn(!0) : Hn(!1);
  }, [W.length]);
  const wt = W.length > 0, Vt = fe.useMemo(
    () => ve ? wk(ve, Math.max(5, K || 0)) : "",
    [ve, K]
  ), un = fe.useMemo(
    () => W.map((B) => y[B]).filter((B) => !!B),
    [W, y]
  ), Z = fe.useMemo(
    () => J.filter((B) => xx(B, cn)),
    [J, cn]
  );
  fe.useEffect(() => {
    if (!cn) return;
    J.some((me) => xx(me, cn)) || Gn(null);
  }, [J, cn]);
  function ke(B) {
    const me = B.variants ?? [], $e = me.length > 0 ? Dn[B.id] ?? me[0].label : null, Ie = _4(y, B.id, $e);
    Ie < 0 || Dt(Ie);
  }
  const pt = fe.useMemo(() => {
    if (!Me || !Se) return [];
    const B = [], me = /* @__PURE__ */ new Date(`${Me}T12:00:00`), $e = /* @__PURE__ */ new Date(`${Se}T12:00:00`), Ie = new Date(me);
    for (; Ie <= $e && B.length < 45; ) {
      const Pn = `${Ie.getFullYear()}-${String(Ie.getMonth() + 1).padStart(2, "0")}-${String(Ie.getDate()).padStart(2, "0")}`;
      B.push({
        iso: Pn,
        weekday: Ie.toLocaleDateString($, { weekday: "short" }),
        day: Ie.toLocaleDateString($, { day: "numeric", month: "short" })
      }), Ie.setDate(Ie.getDate() + 1);
    }
    return B;
  }, [Me, Se, $]);
  function Et(B) {
    if (mt) {
      if (B >= 2 && !wt || B >= 3 && !st || B >= 4 && (!wt || !ve)) return;
    } else if (B >= 2 && !wt || B >= 3 && (!wt || !ve)) return;
    Kt(B);
  }
  const Qt = mt ? [
    { n: 1, label: q("booking.modal.stepService") },
    { n: 2, label: q("booking.modal.stepSpecialist") },
    { n: 3, label: q("booking.modal.stepTime") },
    { n: 4, label: q("booking.modal.stepDetails") }
  ] : [
    { n: 1, label: q("booking.modal.stepService") },
    { n: 2, label: q("booking.modal.stepTime") },
    { n: 3, label: q("booking.modal.stepDetails") }
  ];
  function ln() {
    typeof window < "u" && !window.confirm(q("booking.modal.confirmClose")) || Lt();
  }
  return fe.useEffect(() => {
    if (!C || typeof document > "u") return;
    document.documentElement.style.setProperty("overflow", "hidden"), document.documentElement.style.setProperty("background-color", "#ffffff"), document.body.style.setProperty("overflow", "hidden"), document.body.style.setProperty("position", "fixed"), document.body.style.setProperty("inset", "0"), document.body.style.setProperty("width", "100%"), document.body.style.setProperty("background-color", "#ffffff");
    const B = window.scrollY;
    return document.body.style.setProperty("top", `-${B}px`), () => {
      document.documentElement.style.removeProperty("overflow"), document.documentElement.style.removeProperty("background-color"), document.body.style.removeProperty("overflow"), document.body.style.removeProperty("position"), document.body.style.removeProperty("inset"), document.body.style.removeProperty("width"), document.body.style.removeProperty("background-color"), document.body.style.removeProperty("top"), window.scrollTo(0, B);
    };
  }, [C]), C ? /* @__PURE__ */ O.jsxs("div", { className: "fixed inset-0 z-[110] overflow-hidden bg-white sm:bg-transparent", role: "presentation", children: [
    /* @__PURE__ */ O.jsx("div", { className: "absolute inset-0 hidden bg-black/30 backdrop-blur-sm sm:block", "aria-hidden": !0 }),
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": !0,
        "aria-label": q("booking.modal.ariaLabel"),
        className: "absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[100dvh] w-full max-w-none flex-col overflow-hidden bg-white sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.6rem] sm:bg-white sm:shadow-[0_25px_60px_rgba(0,0,0,0.12)]",
        onClick: (B) => B.stopPropagation(),
        children: [
          /* @__PURE__ */ O.jsx("div", { className: "mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-black/10 sm:hidden", "aria-hidden": !0 }),
          /* @__PURE__ */ O.jsxs("div", { className: "relative z-[1] flex shrink-0 items-center justify-between gap-2 bg-white px-4 pb-3 pt-3.5 sm:px-5", children: [
            /* @__PURE__ */ O.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
              /* @__PURE__ */ O.jsx("h3", { className: "text-[17px] font-semibold tracking-tight text-black", children: ft ? q("booking.modal.titleWithStaff", { name: ft }) : q("booking.modal.titleDefault") }),
              /* @__PURE__ */ O.jsx("div", { className: "flex items-center gap-1.5", children: Qt.map(({ n: B, label: me }) => {
                const $e = Nt === B, Ie = Nt > B, Pn = mt ? B >= 2 && !wt || B >= 3 && !st || B >= 4 && (!wt || !ve) : B >= 2 && !wt || B >= 3 && (!wt || !ve);
                return /* @__PURE__ */ O.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: Pn,
                    onClick: () => Et(B),
                    className: `inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2.5 text-[11px] font-bold transition disabled:opacity-20 ${$e || Ie ? `text-white ${Kh}` : `bg-white text-black/50 ${Vi}`}`,
                    style: $e || Ie ? At : void 0,
                    title: me,
                    "aria-label": q("booking.modal.stepAria", { n: B, label: me }),
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
                "aria-label": q("booking.modal.closeAria"),
                children: /* @__PURE__ */ O.jsx(S4, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ O.jsx("div", { className: "relative z-[1] min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white px-4 py-5 sm:px-5", children: Be ? Tt ? /* @__PURE__ */ O.jsx(
            bk,
            {
              serviceName: Tt.serviceName,
              dateLabel: Tt.dateLabel,
              time: Tt.time,
              salonName: Ft,
              onClose: Lt
            }
          ) : /* @__PURE__ */ O.jsx("p", { className: "rounded-2xl bg-emerald-50 px-3.5 py-3 text-sm leading-relaxed text-emerald-700", children: Be }) : /* @__PURE__ */ O.jsxs("form", { id: "salon-booking-form", onSubmit: Xe, className: "min-w-0 space-y-3.5 bg-white", children: [
            Nt === 1 ? /* @__PURE__ */ O.jsx("div", { className: "space-y-3", children: wt && !Zr ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: q("booking.modal.selectedServices") }),
                /* @__PURE__ */ O.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: q(un.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: un.length }) })
              ] }),
              W.map((B) => {
                const me = y[B];
                return me ? /* @__PURE__ */ O.jsx(
                  "div",
                  {
                    className: `rounded-2xl p-px transition ${E4}`,
                    style: gn,
                    children: /* @__PURE__ */ O.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-[15px] bg-white px-3.5 py-3.5", children: [
                      /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ O.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: me.name }),
                        /* @__PURE__ */ O.jsx(Dx, { text: me.description }),
                        /* @__PURE__ */ O.jsxs("p", { className: "mt-1 text-[13px] tabular-nums text-black/70", children: [
                          me.duration,
                          " ",
                          q("booking.modal.minSuffix"),
                          " · ",
                          Sn(Number(me.price ?? 0))
                        ] })
                      ] }),
                      /* @__PURE__ */ O.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => Dt(B),
                          className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-black/60 transition active:bg-black/[0.04] ${Vi}`,
                          "aria-label": q("booking.modal.removeAria"),
                          children: [
                            /* @__PURE__ */ O.jsx(S4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                            q("booking.modal.remove")
                          ]
                        }
                      )
                    ] })
                  },
                  `selected-${me.id}-${B}`
                ) : null;
              }),
              /* @__PURE__ */ O.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Hn(!0),
                  className: `flex w-full items-center justify-center gap-1.5 rounded-2xl bg-white px-3.5 py-3 text-sm font-semibold text-black ${Vi}`,
                  children: [
                    /* @__PURE__ */ O.jsx(g4, { className: "h-4 w-4", "aria-hidden": !0 }),
                    q("booking.modal.addMoreServices")
                  ]
                }
              )
            ] }) : /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
              /* @__PURE__ */ O.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: q("booking.modal.services") }),
                /* @__PURE__ */ O.jsx("p", { className: "text-[12px] font-medium tabular-nums text-black/40", children: q(Z.length === 1 ? "booking.modal.serviceCountOne" : "booking.modal.serviceCountMany", { count: Z.length }) })
              ] }),
              wt ? /* @__PURE__ */ O.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Hn(!1),
                  className: "text-[12px] font-semibold text-black underline underline-offset-2",
                  children: q("booking.modal.hideList", { count: un.length })
                }
              ) : null,
              /* @__PURE__ */ O.jsx(
                Ck,
                {
                  categories: Oe,
                  selectedId: cn,
                  onSelect: Gn,
                  size: "sm",
                  className: "-mx-1 px-1",
                  accentFill: dt
                }
              ),
              Z.map((B) => {
                const me = B.variants ?? [], $e = me.length > 0 ? Dn[B.id] ?? me[0].label : null, Ie = Sk(
                  W,
                  y,
                  B,
                  $e
                ), { price: Pn, duration: ar } = Ek(B, $e);
                return /* @__PURE__ */ O.jsx(
                  "div",
                  {
                    className: `rounded-2xl transition ${Ie ? `p-px ${E4}` : `bg-white ${Vi}`}`,
                    style: Ie ? gn : void 0,
                    children: /* @__PURE__ */ O.jsxs(
                      "div",
                      {
                        className: `flex items-start justify-between gap-3 ${Ie ? "rounded-[15px] bg-white px-3.5 py-3.5" : "px-3.5 py-3.5"}`,
                        children: [
                          /* @__PURE__ */ O.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ O.jsx("p", { className: "truncate text-[16px] font-semibold text-black", children: B.name }),
                            /* @__PURE__ */ O.jsx(Dx, { text: B.description }),
                            me.length > 0 ? /* @__PURE__ */ O.jsxs("div", { className: "relative mt-1.5 max-w-full", children: [
                              /* @__PURE__ */ O.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => On(
                                    (jn) => jn === B.id ? null : B.id
                                  ),
                                  className: "flex w-full items-center justify-between rounded-full border border-black/12 bg-white px-3 py-1.5 text-left text-xs transition hover:border-black/25",
                                  children: [
                                    /* @__PURE__ */ O.jsx("span", { className: "truncate", children: $e }),
                                    /* @__PURE__ */ O.jsx(dk, { className: "ml-1 h-3.5 w-3.5 shrink-0 text-black/45", "aria-hidden": !0 })
                                  ]
                                }
                              ),
                              Nn === B.id ? /* @__PURE__ */ O.jsx("div", { className: "absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]", children: me.map((jn) => /* @__PURE__ */ O.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    En((ya) => ({
                                      ...ya,
                                      [B.id]: jn.label
                                    })), On(null);
                                  },
                                  className: `w-full px-3 py-2 text-left text-xs hover:bg-black/[0.04] ${$e === jn.label ? "font-semibold text-black" : "text-black/70"}`,
                                  children: [
                                    jn.label,
                                    " · ",
                                    Sn(Number(jn.price) || 0)
                                  ]
                                },
                                jn.label
                              )) }) : null
                            ] }) : null,
                            /* @__PURE__ */ O.jsxs("p", { className: "mt-1.5 text-[13px] tabular-nums text-black/45", children: [
                              ar,
                              " ",
                              q("booking.modal.minSuffix"),
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
                              "aria-label": q("booking.modal.removeAria"),
                              children: [
                                /* @__PURE__ */ O.jsx(S4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                q("booking.modal.remove")
                              ]
                            }
                          ) : /* @__PURE__ */ O.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ke(B),
                              className: `mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white transition ${Kh}`,
                              style: At,
                              children: [
                                /* @__PURE__ */ O.jsx(g4, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                                q("booking.modal.add")
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
              Z.length === 0 ? /* @__PURE__ */ O.jsx("p", { className: `rounded-2xl bg-white px-3.5 py-3 text-sm text-black/40 ${Vi}`, children: q("booking.modal.noServicesInCategory") }) : null
            ] }) }) : null,
            Nt === 2 && mt ? /* @__PURE__ */ O.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: q("booking.modal.selectSpecialist") }),
              we.length > 0 && /* @__PURE__ */ O.jsxs("p", { className: "text-[12px] text-black/45", children: [
                q("booking.modal.availableFor"),
                " ",
                /* @__PURE__ */ O.jsx("span", { className: "font-medium text-black/70", children: we.map((B) => {
                  var me;
                  return ((me = J.find(($e) => $e.id === B)) == null ? void 0 : me.name) ?? B;
                }).join(" + ") })
              ] }),
              at.length === 0 ? /* @__PURE__ */ O.jsxs("div", { className: `rounded-2xl bg-white px-4 py-5 text-center ${Vi}`, children: [
                /* @__PURE__ */ O.jsx("p", { className: "text-[14px] font-medium text-black/50", children: q("booking.modal.serviceUnavailable") }),
                /* @__PURE__ */ O.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => Kt(1),
                    className: "mt-3 text-[13px] font-semibold text-[color:var(--salon-primary)] underline underline-offset-2",
                    children: q("booking.modal.selectOtherService")
                  }
                )
              ] }) : /* @__PURE__ */ O.jsx("div", { className: "space-y-2.5", children: at.map((B) => {
                const me = st === B.id;
                return /* @__PURE__ */ O.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => tt == null ? void 0 : tt(B.id),
                    className: `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition ${me ? `p-px ${E4}` : `bg-white ${Vi}`}`,
                    style: me ? gn : void 0,
                    children: [
                      me ? /* @__PURE__ */ O.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white", style: At, children: /* @__PURE__ */ O.jsx(ck, { className: "h-4 w-4", "aria-hidden": !0 }) }) : /* @__PURE__ */ O.jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black/30 ${Vi}`, children: /* @__PURE__ */ O.jsx(yk, { className: "h-4 w-4", "aria-hidden": !0 }) }),
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
                /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: st ? q("booking.modal.timeWithStaff", { name: ((Xt = Ve.find((B) => B.id === st)) == null ? void 0 : Xt.name) ?? "" }) : q("booking.modal.dateTime") }),
                /* @__PURE__ */ O.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => Kt(1),
                    className: `inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--salon-primary)] ${Vi} active:bg-black/[0.03]`,
                    children: [
                      /* @__PURE__ */ O.jsx(g4, { className: "h-3.5 w-3.5" }),
                      q("booking.modal.addService")
                    ]
                  }
                )
              ] }),
              wt ? /* @__PURE__ */ O.jsx("p", { className: "text-[15px] font-semibold text-black", children: un.map((B) => B.name).join(" + ") }) : null,
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.date") }),
                /* @__PURE__ */ O.jsx("div", { className: "-mx-1 mt-2 flex gap-2.5 overflow-x-auto px-1 pb-1.5 scrollbar-none", children: pt.map((B) => {
                  const me = ne === B.iso;
                  return /* @__PURE__ */ O.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => Ae(B.iso),
                      className: `flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-2xl text-center transition ${me ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black/60 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]"}`,
                      style: me ? { backgroundColor: "#000" } : void 0,
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
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.time") }),
                ne ? Ke === "closed" ? /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: q("booking.modal.dayClosed") }) : Array.isArray(Ke) && Ke.length === 0 ? /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: q("booking.modal.noSlots") }) : Array.isArray(Ke) ? /* @__PURE__ */ O.jsx("div", { className: "mt-2 grid w-full max-w-full grid-cols-3 gap-2.5 sm:grid-cols-4", children: Ke.map((B) => {
                  const me = ve === B;
                  return /* @__PURE__ */ O.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => oe(B),
                      className: `min-w-0 touch-manipulation rounded-2xl px-2 py-3 text-center text-[14px] font-semibold tabular-nums transition ${me ? "text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]" : "border border-black/[0.08] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)] active:bg-black/[0.03] active:shadow-[0_1px_2px_rgba(0,0,0,0.10)]"}`,
                      style: me ? { backgroundColor: "#000" } : void 0,
                      children: B
                    },
                    B
                  );
                }) }) : /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: q("booking.modal.selectServiceFirst") }) : /* @__PURE__ */ O.jsx("p", { className: "mt-1.5 text-sm text-black/35", children: q("booking.modal.selectDateFirst") })
              ] })
            ] }) : null,
            mt && Nt === 4 || !mt && Nt === 3 ? /* @__PURE__ */ O.jsxs("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] font-semibold text-black", children: q("booking.modal.contactDetails") }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.name") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    className: Xh,
                    value: se,
                    onChange: (B) => Ue(B.target.value),
                    autoComplete: "name",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.phone") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    type: "tel",
                    className: Xh,
                    value: be,
                    onChange: (B) => pe(B.target.value),
                    autoComplete: "tel",
                    inputMode: "tel",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.email") }),
                /* @__PURE__ */ O.jsx(
                  "input",
                  {
                    type: "email",
                    inputMode: "email",
                    autoComplete: "email",
                    className: Xh,
                    value: lt,
                    onChange: (B) => N(B.target.value),
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ O.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ O.jsx("label", { className: "block text-[13px] font-semibold text-black", children: q("booking.modal.notes") }),
                /* @__PURE__ */ O.jsx(
                  "textarea",
                  {
                    className: `${Xh} resize-none`,
                    rows: 2,
                    value: qe,
                    onChange: (B) => P(B.target.value)
                  }
                )
              ] })
            ] }) : null,
            yt ? /* @__PURE__ */ O.jsx("p", { className: "rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700", role: "alert", children: yt }) : null
          ] }) }),
          !Be && !Tt ? /* @__PURE__ */ O.jsxs("div", { className: "relative z-[2] shrink-0 border-t border-black/[0.06] bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-5", children: [
            wt ? /* @__PURE__ */ O.jsxs("div", { className: "mb-3 px-1", children: [
              /* @__PURE__ */ O.jsx("p", { className: "text-[13px] tabular-nums text-black/50", children: q("booking.modal.totalDuration", { min: Math.max(0, K) }) }),
              /* @__PURE__ */ O.jsx("p", { className: "text-[17px] font-semibold tabular-nums text-black/70 leading-tight", children: q("booking.modal.totalPrice", { price: Sn(de) }) }),
              ve ? /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 text-[13px] font-semibold tabular-nums text-black", children: q("booking.modal.startTime", { start: ve, end: Vt }) }) : Nt > 1 ? /* @__PURE__ */ O.jsx("p", { className: "mt-0.5 truncate text-[13px] font-semibold text-black", children: un.map((B) => B.name).join(" + ") }) : null
            ] }) : null,
            Nt === 3 && De !== "none" && /* @__PURE__ */ O.jsxs("div", { className: "mb-2.5 space-y-1 text-center", children: [
              /* @__PURE__ */ O.jsxs("p", { className: "flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[#635BFF]", children: [
                /* @__PURE__ */ O.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 60 60", fill: "none", "aria-hidden": !0, children: [
                  /* @__PURE__ */ O.jsx("rect", { width: "60", height: "60", rx: "8", fill: "#635BFF" }),
                  /* @__PURE__ */ O.jsx("path", { d: "M27.5 22.5c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.4 2.7v-9.8c-3.5-1.4-7-2-10.4-2C23.1 11 18 15.2 18 22.9c0 12.1 16.6 10.2 16.6 15.4 0 2-1.7 2.7-4.1 2.7-3.5 0-8-1.5-11.5-3.5v9.9c3.9 1.7 7.9 2.4 11.5 2.4 8.8 0 14.8-4.3 14.8-12.2C45.3 25.4 27.5 27.6 27.5 22.5z", fill: "white" })
                ] }),
                De === "deposit" && jt && jt > 0 ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                  q("booking.modal.depositRequired"),
                  " ",
                  /* @__PURE__ */ O.jsx("strong", { className: "mx-0.5", children: Sn(Number(jt) || 0) })
                ] }) : /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                  q("booking.modal.paymentFrom"),
                  " ",
                  /* @__PURE__ */ O.jsx("strong", { className: "mx-0.5", children: Sn(de) })
                ] })
              ] }),
              /* @__PURE__ */ O.jsxs("p", { className: "text-[11px] text-black/35", children: [
                q("booking.modal.securePayment"),
                " ",
                /* @__PURE__ */ O.jsx("span", { className: "font-bold text-[#635BFF]", children: "Stripe" })
              ] }),
              it ? /* @__PURE__ */ O.jsx("p", { className: "mx-auto max-w-[320px] text-[11px] leading-relaxed text-black/45", children: xk({
                cancelPolicyHours: it,
                cancelPolicyAction: ot ?? "keep_deposit",
                depositAmountEuros: jt
              }) }) : null
            ] }),
            (() => {
              const B = mt ? 4 : 3, me = Nt === B, $e = Nt === 1 && !wt || mt && Nt === 2 && (!st || at.length === 0) || (mt ? Nt === 3 : Nt === 2) && (!ne || !ve);
              return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                /* @__PURE__ */ O.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ O.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => Kt((Ie) => Ie > 1 ? Ie - 1 : Ie),
                      disabled: Nt === 1,
                      className: "rounded-full border border-black/10 bg-white py-2.5 text-[14px] font-medium text-black/60 transition disabled:opacity-25 active:scale-[0.98]",
                      children: q("booking.modal.back")
                    }
                  ),
                  me ? /* @__PURE__ */ O.jsxs(
                    "button",
                    {
                      type: "submit",
                      form: "salon-booking-form",
                      disabled: Pt || !ve || !wt,
                      className: `flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${Kh}`,
                      style: At,
                      children: [
                        Pt ? /* @__PURE__ */ O.jsx(vk, { className: "h-4 w-4 animate-spin", "aria-hidden": !0 }) : null,
                        q(De !== "none" ? "booking.modal.payAndBook" : "booking.modal.sendRequest")
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
                      className: `rounded-full py-3.5 text-[15px] font-semibold text-white transition disabled:opacity-40 ${Kh}`,
                      style: At,
                      children: q("booking.modal.continue")
                    }
                  )
                ] }),
                me ? /* @__PURE__ */ O.jsxs("p", { className: "mt-2.5 text-center text-[10.5px] leading-snug text-black/35", children: [
                  q("booking.modal.disclaimerPre"),
                  " ",
                  q("booking.modal.disclaimerAccept"),
                  " ",
                  /* @__PURE__ */ O.jsx("a", { href: He, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: q("booking.modal.terms") }),
                  " ",
                  q("booking.modal.smsConsentAnd"),
                  " ",
                  /* @__PURE__ */ O.jsx("a", { href: ie, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2", children: q("booking.modal.privacy") }),
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
const Tk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SalonBookingModal: Rk
}, Symbol.toStringTag, { value: "Module" }));
