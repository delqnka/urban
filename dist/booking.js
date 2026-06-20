var pE = { exports: {} }, Xp = {}, vE = { exports: {} }, Tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function q_() {
  if (XR) return Tt;
  XR = 1;
  var $ = Symbol.for("react.element"), I = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Pe = Symbol.for("react.provider"), S = Symbol.for("react.context"), Ke = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ee = Symbol.iterator;
  function Ee(w) {
    return w === null || typeof w != "object" ? null : (w = ee && w[ee] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, gt = {};
  function st(w, F, Oe) {
    this.props = w, this.context = F, this.refs = gt, this.updater = Oe || le;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(w, F) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, F, "setState");
  }, st.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function tn() {
  }
  tn.prototype = st.prototype;
  function at(w, F, Oe) {
    this.props = w, this.context = F, this.refs = gt, this.updater = Oe || le;
  }
  var $e = at.prototype = new tn();
  $e.constructor = at, Ve($e, st.prototype), $e.isPureReactComponent = !0;
  var ct = Array.isArray, Te = Object.prototype.hasOwnProperty, tt = { current: null }, Ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function It(w, F, Oe) {
    var je, ft = {}, it = null, nt = null;
    if (F != null) for (je in F.ref !== void 0 && (nt = F.ref), F.key !== void 0 && (it = "" + F.key), F) Te.call(F, je) && !Ue.hasOwnProperty(je) && (ft[je] = F[je]);
    var lt = arguments.length - 2;
    if (lt === 1) ft.children = Oe;
    else if (1 < lt) {
      for (var dt = Array(lt), $t = 0; $t < lt; $t++) dt[$t] = arguments[$t + 2];
      ft.children = dt;
    }
    if (w && w.defaultProps) for (je in lt = w.defaultProps, lt) ft[je] === void 0 && (ft[je] = lt[je]);
    return { $$typeof: $, type: w, key: it, ref: nt, props: ft, _owner: tt.current };
  }
  function Ot(w, F) {
    return { $$typeof: $, type: w.type, key: F, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Bt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === $;
  }
  function Yt(w) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(Oe) {
      return F[Oe];
    });
  }
  var Et = /\/+/g;
  function _e(w, F) {
    return typeof w == "object" && w !== null && w.key != null ? Yt("" + w.key) : F.toString(36);
  }
  function Lt(w, F, Oe, je, ft) {
    var it = typeof w;
    (it === "undefined" || it === "boolean") && (w = null);
    var nt = !1;
    if (w === null) nt = !0;
    else switch (it) {
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case $:
          case I:
            nt = !0;
        }
    }
    if (nt) return nt = w, ft = ft(nt), w = je === "" ? "." + _e(nt, 0) : je, ct(ft) ? (Oe = "", w != null && (Oe = w.replace(Et, "$&/") + "/"), Lt(ft, F, Oe, "", function($t) {
      return $t;
    })) : ft != null && (Bt(ft) && (ft = Ot(ft, Oe + (!ft.key || nt && nt.key === ft.key ? "" : ("" + ft.key).replace(Et, "$&/") + "/") + w)), F.push(ft)), 1;
    if (nt = 0, je = je === "" ? "." : je + ":", ct(w)) for (var lt = 0; lt < w.length; lt++) {
      it = w[lt];
      var dt = je + _e(it, lt);
      nt += Lt(it, F, Oe, dt, ft);
    }
    else if (dt = Ee(w), typeof dt == "function") for (w = dt.call(w), lt = 0; !(it = w.next()).done; ) it = it.value, dt = je + _e(it, lt++), nt += Lt(it, F, Oe, dt, ft);
    else if (it === "object") throw F = String(w), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return nt;
  }
  function Ct(w, F, Oe) {
    if (w == null) return w;
    var je = [], ft = 0;
    return Lt(w, je, "", "", function(it) {
      return F.call(Oe, it, ft++);
    }), je;
  }
  function Rt(w) {
    if (w._status === -1) {
      var F = w._result;
      F = F(), F.then(function(Oe) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = Oe);
      }, function(Oe) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = Oe);
      }), w._status === -1 && (w._status = 0, w._result = F);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var Se = { current: null }, J = { transition: null }, Re = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: J, ReactCurrentOwner: tt };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Tt.Children = { map: Ct, forEach: function(w, F, Oe) {
    Ct(w, function() {
      F.apply(this, arguments);
    }, Oe);
  }, count: function(w) {
    var F = 0;
    return Ct(w, function() {
      F++;
    }), F;
  }, toArray: function(w) {
    return Ct(w, function(F) {
      return F;
    }) || [];
  }, only: function(w) {
    if (!Bt(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Tt.Component = st, Tt.Fragment = L, Tt.Profiler = He, Tt.PureComponent = at, Tt.StrictMode = Qe, Tt.Suspense = ae, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, Tt.act = V, Tt.cloneElement = function(w, F, Oe) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var je = Ve({}, w.props), ft = w.key, it = w.ref, nt = w._owner;
    if (F != null) {
      if (F.ref !== void 0 && (it = F.ref, nt = tt.current), F.key !== void 0 && (ft = "" + F.key), w.type && w.type.defaultProps) var lt = w.type.defaultProps;
      for (dt in F) Te.call(F, dt) && !Ue.hasOwnProperty(dt) && (je[dt] = F[dt] === void 0 && lt !== void 0 ? lt[dt] : F[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) je.children = Oe;
    else if (1 < dt) {
      lt = Array(dt);
      for (var $t = 0; $t < dt; $t++) lt[$t] = arguments[$t + 2];
      je.children = lt;
    }
    return { $$typeof: $, type: w.type, key: ft, ref: it, props: je, _owner: nt };
  }, Tt.createContext = function(w) {
    return w = { $$typeof: S, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: Pe, _context: w }, w.Consumer = w;
  }, Tt.createElement = It, Tt.createFactory = function(w) {
    var F = It.bind(null, w);
    return F.type = w, F;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(w) {
    return { $$typeof: Ke, render: w };
  }, Tt.isValidElement = Bt, Tt.lazy = function(w) {
    return { $$typeof: qe, _payload: { _status: -1, _result: w }, _init: Rt };
  }, Tt.memo = function(w, F) {
    return { $$typeof: te, type: w, compare: F === void 0 ? null : F };
  }, Tt.startTransition = function(w) {
    var F = J.transition;
    J.transition = {};
    try {
      w();
    } finally {
      J.transition = F;
    }
  }, Tt.unstable_act = V, Tt.useCallback = function(w, F) {
    return Se.current.useCallback(w, F);
  }, Tt.useContext = function(w) {
    return Se.current.useContext(w);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(w) {
    return Se.current.useDeferredValue(w);
  }, Tt.useEffect = function(w, F) {
    return Se.current.useEffect(w, F);
  }, Tt.useId = function() {
    return Se.current.useId();
  }, Tt.useImperativeHandle = function(w, F, Oe) {
    return Se.current.useImperativeHandle(w, F, Oe);
  }, Tt.useInsertionEffect = function(w, F) {
    return Se.current.useInsertionEffect(w, F);
  }, Tt.useLayoutEffect = function(w, F) {
    return Se.current.useLayoutEffect(w, F);
  }, Tt.useMemo = function(w, F) {
    return Se.current.useMemo(w, F);
  }, Tt.useReducer = function(w, F, Oe) {
    return Se.current.useReducer(w, F, Oe);
  }, Tt.useRef = function(w) {
    return Se.current.useRef(w);
  }, Tt.useState = function(w) {
    return Se.current.useState(w);
  }, Tt.useSyncExternalStore = function(w, F, Oe) {
    return Se.current.useSyncExternalStore(w, F, Oe);
  }, Tt.useTransition = function() {
    return Se.current.useTransition();
  }, Tt.version = "18.3.1", Tt;
}
var Zp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zp.exports;
var JR;
function X_() {
  return JR || (JR = 1, function($, I) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var L = "18.3.1", Qe = Symbol.for("react.element"), He = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ke = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), te = Symbol.for("react.context"), qe = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), gt = Symbol.for("react.offscreen"), st = Symbol.iterator, tn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[tn];
        return typeof C == "function" ? C : null;
      }
      var $e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ct = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, tt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ue = {}, It = null;
      function Ot(h) {
        It = h;
      }
      Ue.setExtraStackFrame = function(h) {
        It = h;
      }, Ue.getCurrentStack = null, Ue.getStackAddendum = function() {
        var h = "";
        It && (h += It);
        var C = Ue.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Bt = !1, Yt = !1, Et = !1, _e = !1, Lt = !1, Ct = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: tt
      };
      Ct.ReactDebugCurrentFrame = Ue, Ct.ReactCurrentActQueue = Te;
      function Rt(h) {
        {
          for (var C = arguments.length, U = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            U[j - 1] = arguments[j];
          J("warn", h, U);
        }
      }
      function Se(h) {
        {
          for (var C = arguments.length, U = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            U[j - 1] = arguments[j];
          J("error", h, U);
        }
      }
      function J(h, C, U) {
        {
          var j = Ct.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", U = U.concat([Z]));
          var Le = U.map(function(ie) {
            return String(ie);
          });
          Le.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Le);
        }
      }
      var Re = {};
      function V(h, C) {
        {
          var U = h.constructor, j = U && (U.displayName || U.name) || "ReactClass", Z = j + "." + C;
          if (Re[Z])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[Z] = !0;
        }
      }
      var w = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
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
        enqueueForceUpdate: function(h, C, U) {
          V(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, U, j) {
          V(h, "replaceState");
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
        enqueueSetState: function(h, C, U, j) {
          V(h, "setState");
        }
      }, F = Object.assign, Oe = {};
      Object.freeze(Oe);
      function je(h, C, U) {
        this.props = h, this.context = C, this.refs = Oe, this.updater = U || w;
      }
      je.prototype.isReactComponent = {}, je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, it = function(h, C) {
          Object.defineProperty(je.prototype, h, {
            get: function() {
              Rt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var nt in ft)
          ft.hasOwnProperty(nt) && it(nt, ft[nt]);
      }
      function lt() {
      }
      lt.prototype = je.prototype;
      function dt(h, C, U) {
        this.props = h, this.context = C, this.refs = Oe, this.updater = U || w;
      }
      var $t = dt.prototype = new lt();
      $t.constructor = dt, F($t, je.prototype), $t.isPureReactComponent = !0;
      function Ln() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var xr = Array.isArray;
      function Rn(h) {
        return xr(h);
      }
      function rr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, U = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return U;
        }
      }
      function Bn(h) {
        try {
          return $n(h), !1;
        } catch {
          return !0;
        }
      }
      function $n(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Bn(h))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(h)), $n(h);
      }
      function ci(h, C, U) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? U + "(" + Z + ")" : U;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Pe:
            return "Fragment";
          case He:
            return "Portal";
          case Ke:
            return "Profiler";
          case S:
            return "StrictMode";
          case ee:
            return "Suspense";
          case Ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case te:
              var C = h;
              return sa(C) + ".Consumer";
            case ae:
              var U = h;
              return sa(U._context) + ".Provider";
            case qe:
              return ci(h, h.render, "ForwardRef");
            case le:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Ve: {
              var Z = h, Le = Z._payload, ie = Z._init;
              try {
                return qn(ie(Le));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Ya, Nn;
      Nn = {};
      function Er(h) {
        if (Tn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Tn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, C) {
        var U = function() {
          Sr || (Sr = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        U.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: U,
          configurable: !0
        });
      }
      function fi(h, C) {
        var U = function() {
          Ya || (Ya = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        U.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: U,
          configurable: !0
        });
      }
      function ne(h) {
        if (typeof h.ref == "string" && tt.current && h.__self && tt.current.stateNode !== h.__self) {
          var C = qn(tt.current.type);
          Nn[C] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Nn[C] = !0);
        }
      }
      var we = function(h, C, U, j, Z, Le, ie) {
        var ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Qe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: U,
          props: ie,
          // Record the component responsible for creating this element.
          _owner: Le
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function ut(h, C, U) {
        var j, Z = {}, Le = null, ie = null, ze = null, mt = null;
        if (C != null) {
          Er(C) && (ie = C.ref, ne(C)), ca(C) && (Yr(C.key), Le = "" + C.key), ze = C.__self === void 0 ? null : C.__self, mt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Tn.call(C, j) && !In.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          Z.children = U;
        else if (Dt > 1) {
          for (var ln = Array(Dt), Kt = 0; Kt < Dt; Kt++)
            ln[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(ln), Z.children = ln;
        }
        if (h && h.defaultProps) {
          var ot = h.defaultProps;
          for (j in ot)
            Z[j] === void 0 && (Z[j] = ot[j]);
        }
        if (Le || ie) {
          var qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Le && Qa(Z, qt), ie && fi(Z, qt);
        }
        return we(h, Le, ie, ze, mt, tt.current, Z);
      }
      function Ht(h, C) {
        var U = we(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return U;
      }
      function nn(h, C, U) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = F({}, h.props), Le = h.key, ie = h.ref, ze = h._self, mt = h._source, Dt = h._owner;
        if (C != null) {
          Er(C) && (ie = C.ref, Dt = tt.current), ca(C) && (Yr(C.key), Le = "" + C.key);
          var ln;
          h.type && h.type.defaultProps && (ln = h.type.defaultProps);
          for (j in C)
            Tn.call(C, j) && !In.hasOwnProperty(j) && (C[j] === void 0 && ln !== void 0 ? Z[j] = ln[j] : Z[j] = C[j]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          Z.children = U;
        else if (Kt > 1) {
          for (var ot = Array(Kt), qt = 0; qt < Kt; qt++)
            ot[qt] = arguments[qt + 2];
          Z.children = ot;
        }
        return we(h.type, Le, ie, ze, mt, Dt, Z);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Qe;
      }
      var on = ".", Xn = ":";
      function rn(h) {
        var C = /[=:]/g, U = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return U[Z];
        });
        return "$" + j;
      }
      var Qt = !1, Wt = /\/+/g;
      function fa(h) {
        return h.replace(Wt, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), rn("" + h.key)) : C.toString(36);
      }
      function wa(h, C, U, j, Z) {
        var Le = typeof h;
        (Le === "undefined" || Le === "boolean") && (h = null);
        var ie = !1;
        if (h === null)
          ie = !0;
        else
          switch (Le) {
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Qe:
                case He:
                  ie = !0;
              }
          }
        if (ie) {
          var ze = h, mt = Z(ze), Dt = j === "" ? on + Cr(ze, 0) : j;
          if (Rn(mt)) {
            var ln = "";
            Dt != null && (ln = fa(Dt) + "/"), wa(mt, C, ln, "", function(Kf) {
              return Kf;
            });
          } else mt != null && (vn(mt) && (mt.key && (!ze || ze.key !== mt.key) && Yr(mt.key), mt = Ht(
            mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            U + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (mt.key && (!ze || ze.key !== mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + mt.key) + "/"
            ) : "") + Dt
          )), C.push(mt));
          return 1;
        }
        var Kt, ot, qt = 0, hn = j === "" ? on : j + Xn;
        if (Rn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Kt = h[Rl], ot = hn + Cr(Kt, Rl), qt += wa(Kt, C, U, ot, Z);
        else {
          var Ko = at(h);
          if (typeof Ko == "function") {
            var Bi = h;
            Ko === Bi.entries && (Qt || Rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var qo = Ko.call(Bi), ou, Gf = 0; !(ou = qo.next()).done; )
              Kt = ou.value, ot = hn + Cr(Kt, Gf++), qt += wa(Kt, C, U, ot, Z);
          } else if (Le === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return qt;
      }
      function Hi(h, C, U) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return wa(h, j, "", "", function(Le) {
          return C.call(U, Le, Z++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, U) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, U);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
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
          $$typeof: ae,
          _context: C
        };
        var U = !1, j = !1, Z = !1;
        {
          var Le = {
            $$typeof: te,
            _context: C
          };
          Object.defineProperties(Le, {
            Provider: {
              get: function() {
                return j || (j = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ie) {
                C.Provider = ie;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ie) {
                C._currentValue = ie;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ie) {
                C._currentValue2 = ie;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ie) {
                C._threadCount = ie;
              }
            },
            Consumer: {
              get: function() {
                return U || (U = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ie) {
                Z || (Rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), Z = !0);
              }
            }
          }), C.Consumer = Le;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, ar = 1, di = 2;
      function Wa(h) {
        if (h._status === _r) {
          var C = h._result, U = C();
          if (U.then(function(Le) {
            if (h._status === kr || h._status === _r) {
              var ie = h;
              ie._status = ar, ie._result = Le;
            }
          }, function(Le) {
            if (h._status === kr || h._status === _r) {
              var ie = h;
              ie._status = di, ie._result = Le;
            }
          }), h._status === _r) {
            var j = h;
            j._status = kr, j._result = U;
          }
        }
        if (h._status === ar) {
          var Z = h._result;
          return Z === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, U = {
          $$typeof: Ve,
          _payload: C,
          _init: Wa
        };
        {
          var j, Z;
          Object.defineProperties(U, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Le) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Le, Object.defineProperty(U, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Le) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Le, Object.defineProperty(U, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return U;
      }
      function vi(h) {
        h != null && h.$$typeof === le ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Se("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: qe,
          render: h
        };
        {
          var U;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(j) {
              U = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Pe || h === Ke || Lt || h === S || h === ee || h === Ee || _e || h === gt || Bt || Yt || Et || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === le || h.$$typeof === ae || h.$$typeof === te || h.$$typeof === qe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        Y(h) || Se("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var U = {
          $$typeof: le,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(U, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return U;
      }
      function he() {
        var h = $e.current;
        return h === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Je(h) {
        var C = he();
        if (h._context !== void 0) {
          var U = h._context;
          U.Consumer === h ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : U.Provider === h && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function We(h) {
        var C = he();
        return C.useState(h);
      }
      function ht(h, C, U) {
        var j = he();
        return j.useReducer(h, C, U);
      }
      function pt(h) {
        var C = he();
        return C.useRef(h);
      }
      function wn(h, C) {
        var U = he();
        return U.useEffect(h, C);
      }
      function an(h, C) {
        var U = he();
        return U.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var U = he();
        return U.useLayoutEffect(h, C);
      }
      function ir(h, C) {
        var U = he();
        return U.useCallback(h, C);
      }
      function Ga(h, C) {
        var U = he();
        return U.useMemo(h, C);
      }
      function Ka(h, C, U) {
        var j = he();
        return j.useImperativeHandle(h, C, U);
      }
      function Ze(h, C) {
        {
          var U = he();
          return U.useDebugValue(h, C);
        }
      }
      function rt() {
        var h = he();
        return h.useTransition();
      }
      function qa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = he();
        return h.useId();
      }
      function ru(h, C, U) {
        var j = he();
        return j.useSyncExternalStore(h, C, U);
      }
      var hl = 0, Wu, ml, Qr, Yo, Dr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, Qr = console.warn, Yo = console.error, Dr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: F({}, h, {
                value: Wu
              }),
              info: F({}, h, {
                value: ml
              }),
              warn: F({}, h, {
                value: Qr
              }),
              error: F({}, h, {
                value: Yo
              }),
              group: F({}, h, {
                value: Dr
              }),
              groupCollapsed: F({}, h, {
                value: lc
              }),
              groupEnd: F({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = Ct.ReactCurrentDispatcher, Ja;
      function Ku(h, C, U) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              Ja = j && j[1] || "";
            }
          return `
` + Ja + h;
        }
      }
      var au = !1, gl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new qu();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var U = gl.get(h);
          if (U !== void 0)
            return U;
        }
        var j;
        au = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Le;
        Le = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var ze = hn.stack.split(`
`), mt = j.stack.split(`
`), Dt = ze.length - 1, ln = mt.length - 1; Dt >= 1 && ln >= 0 && ze[Dt] !== mt[ln]; )
              ln--;
            for (; Dt >= 1 && ln >= 0; Dt--, ln--)
              if (ze[Dt] !== mt[ln]) {
                if (Dt !== 1 || ln !== 1)
                  do
                    if (Dt--, ln--, ln < 0 || ze[Dt] !== mt[ln]) {
                      var Kt = `
` + ze[Dt].replace(" at new ", " at ");
                      return h.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Kt), Kt;
                    }
                  while (Dt >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          au = !1, Xa.current = Le, da(), Error.prepareStackTrace = Z;
        }
        var ot = h ? h.displayName || h.name : "", qt = ot ? Ku(ot) : "";
        return typeof h == "function" && gl.set(h, qt), qt;
      }
      function Pi(h, C, U) {
        return Xu(h, !1);
      }
      function Qf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, U) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Qf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case ee:
            return Ku("Suspense");
          case Ee:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case qe:
              return Pi(h.render);
            case le:
              return Vi(h.type, C, U);
            case Ve: {
              var j = h, Z = j._payload, Le = j._init;
              try {
                return Vi(Le(Z), C, U);
              } catch {
              }
            }
          }
        return "";
      }
      var Mt = {}, Ju = Ct.ReactDebugCurrentFrame;
      function kt(h) {
        if (h) {
          var C = h._owner, U = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(U);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, C, U, j, Z) {
        {
          var Le = Function.call.bind(Tn);
          for (var ie in h)
            if (Le(h, ie)) {
              var ze = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var mt = Error((j || "React class") + ": " + U + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw mt.name = "Invariant Violation", mt;
                }
                ze = h[ie](C, ie, j, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                ze = Dt;
              }
              ze && !(ze instanceof Error) && (kt(Z), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", U, ie, typeof ze), kt(null)), ze instanceof Error && !(ze.message in Mt) && (Mt[ze.message] = !0, kt(Z), Se("Failed %s type: %s", U, ze.message), kt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, U = Vi(h.type, h._source, C ? C.type : null);
          Ot(U);
        } else
          Ot(null);
      }
      var Ye;
      Ye = !1;
      function Zu() {
        if (tt.current) {
          var h = qn(tt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function lr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), U = h.lineNumber;
          return `

Check your code at ` + C + ":" + U + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? lr(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = Zu();
        if (!C) {
          var U = typeof h == "string" ? h : h.displayName || h.name;
          U && (C = `

Check the top-level render call using <` + U + ">.");
        }
        return C;
      }
      function cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var U = yi(C);
          if (!Or[U]) {
            Or[U] = !0;
            var j = "";
            h && h._owner && h._owner !== tt.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), hi(h), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, j), hi(null);
          }
        }
      }
      function Gt(h, C) {
        if (typeof h == "object") {
          if (Rn(h))
            for (var U = 0; U < h.length; U++) {
              var j = h[U];
              vn(j) && cn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = at(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var Le = Z.call(h), ie; !(ie = Le.next()).done; )
                vn(ie.value) && cn(ie.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var U;
          if (typeof C == "function")
            U = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === qe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            U = C.propTypes;
          else
            return;
          if (U) {
            var j = qn(C);
            Qo(U, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ye) {
            Ye = !0;
            var Z = qn(C);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), U = 0; U < C.length; U++) {
            var j = C[U];
            if (j !== "children" && j !== "key") {
              hi(h), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Se("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, U) {
        var j = Y(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = mi(C);
          Le ? Z += Le : Z += Zu();
          var ie;
          h === null ? ie = "null" : Rn(h) ? ie = "array" : h !== void 0 && h.$$typeof === Qe ? (ie = "<" + (qn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, Z);
        }
        var ze = ut.apply(this, arguments);
        if (ze == null)
          return ze;
        if (j)
          for (var mt = 2; mt < arguments.length; mt++)
            Gt(arguments[mt], h);
        return h === Pe ? Yn(ze) : Sl(ze), ze;
      }
      var ba = !1;
      function iu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, ba || (ba = !0, Rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, U) {
        for (var j = nn.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Gt(arguments[Z], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var U = ct.transition;
        ct.transition = {};
        var j = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = U, U === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && Rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Wf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), U = $ && $[C];
            lu = U.call($, "timers").setImmediate;
          } catch {
            lu = function(Z) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Le = new MessageChannel();
              Le.port1.onmessage = Z, Le.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var xa = 0, Za = !1;
      function gi(h) {
        {
          var C = xa;
          xa++, Te.current === null && (Te.current = []);
          var U = Te.isBatchingLegacy, j;
          try {
            if (Te.isBatchingLegacy = !0, j = h(), !U && Te.didScheduleLegacyUpdate) {
              var Z = Te.current;
              Z !== null && (Te.didScheduleLegacyUpdate = !1, Cl(Z));
            }
          } catch (ot) {
            throw _a(C), ot;
          } finally {
            Te.isBatchingLegacy = U;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Le = j, ie = !1, ze = {
              then: function(ot, qt) {
                ie = !0, Le.then(function(hn) {
                  _a(C), xa === 0 ? eo(hn, ot, qt) : ot(hn);
                }, function(hn) {
                  _a(C), qt(hn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (Za = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var mt = j;
            if (_a(C), xa === 0) {
              var Dt = Te.current;
              Dt !== null && (Cl(Dt), Te.current = null);
              var ln = {
                then: function(ot, qt) {
                  Te.current === null ? (Te.current = [], eo(mt, ot, qt)) : ot(mt);
                }
              };
              return ln;
            } else {
              var Kt = {
                then: function(ot, qt) {
                  ot(mt);
                }
              };
              return Kt;
            }
          }
        }
      }
      function _a(h) {
        h !== xa - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function eo(h, C, U) {
        {
          var j = Te.current;
          if (j !== null)
            try {
              Cl(j), Wf(function() {
                j.length === 0 ? (Te.current = null, C(h)) : eo(h, C, U);
              });
            } catch (Z) {
              U(Z);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var U = h[C];
              do
                U = U(!0);
              while (U !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Lr, no = Wo, ro = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      I.Children = ei, I.Component = je, I.Fragment = Pe, I.Profiler = Ke, I.PureComponent = dt, I.StrictMode = S, I.Suspense = ee, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ct, I.act = gi, I.cloneElement = no, I.createContext = tu, I.createElement = uu, I.createFactory = ro, I.createRef = Ln, I.forwardRef = vi, I.isValidElement = vn, I.lazy = pi, I.memo = ue, I.startTransition = Go, I.unstable_act = gi, I.useCallback = ir, I.useContext = Je, I.useDebugValue = Ze, I.useDeferredValue = qa, I.useEffect = wn, I.useId = nu, I.useImperativeHandle = Ka, I.useInsertionEffect = an, I.useLayoutEffect = sn, I.useMemo = Ga, I.useReducer = ht, I.useRef = pt, I.useState = We, I.useSyncExternalStore = ru, I.useTransition = rt, I.version = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
process.env.NODE_ENV === "production" ? vE.exports = q_() : vE.exports = X_();
var Cn = vE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function J_() {
  if (ZR) return Xp;
  ZR = 1;
  var $ = Cn, I = Symbol.for("react.element"), L = Symbol.for("react.fragment"), Qe = Object.prototype.hasOwnProperty, He = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Ke, ae, te) {
    var qe, ee = {}, Ee = null, le = null;
    te !== void 0 && (Ee = "" + te), ae.key !== void 0 && (Ee = "" + ae.key), ae.ref !== void 0 && (le = ae.ref);
    for (qe in ae) Qe.call(ae, qe) && !Pe.hasOwnProperty(qe) && (ee[qe] = ae[qe]);
    if (Ke && Ke.defaultProps) for (qe in ae = Ke.defaultProps, ae) ee[qe] === void 0 && (ee[qe] = ae[qe]);
    return { $$typeof: I, type: Ke, key: Ee, ref: le, props: ee, _owner: He.current };
  }
  return Xp.Fragment = L, Xp.jsx = S, Xp.jsxs = S, Xp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function Z_() {
  return eT || (eT = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Cn, I = Symbol.for("react.element"), L = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ke = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Ve = Symbol.iterator, gt = "@@iterator";
    function st(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Ve && R[Ve] || R[gt];
      return typeof Y == "function" ? Y : null;
    }
    var tn = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var Y = arguments.length, ue = new Array(Y > 1 ? Y - 1 : 0), he = 1; he < Y; he++)
          ue[he - 1] = arguments[he];
        $e("error", R, ue);
      }
    }
    function $e(R, Y, ue) {
      {
        var he = tn.ReactDebugCurrentFrame, Je = he.getStackAddendum();
        Je !== "" && (Y += "%s", ue = ue.concat([Je]));
        var We = ue.map(function(ht) {
          return String(ht);
        });
        We.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, We);
      }
    }
    var ct = !1, Te = !1, tt = !1, Ue = !1, It = !1, Ot;
    Ot = Symbol.for("react.module.reference");
    function Bt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Qe || R === Pe || It || R === He || R === te || R === qe || Ue || R === le || ct || Te || tt || typeof R == "object" && R !== null && (R.$$typeof === Ee || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === Ke || R.$$typeof === ae || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ot || R.getModuleId !== void 0));
    }
    function Yt(R, Y, ue) {
      var he = R.displayName;
      if (he)
        return he;
      var Je = Y.displayName || Y.name || "";
      return Je !== "" ? ue + "(" + Je + ")" : ue;
    }
    function Et(R) {
      return R.displayName || "Context";
    }
    function _e(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Qe:
          return "Fragment";
        case L:
          return "Portal";
        case Pe:
          return "Profiler";
        case He:
          return "StrictMode";
        case te:
          return "Suspense";
        case qe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ke:
            var Y = R;
            return Et(Y) + ".Consumer";
          case S:
            var ue = R;
            return Et(ue._context) + ".Provider";
          case ae:
            return Yt(R, R.render, "ForwardRef");
          case ee:
            var he = R.displayName || null;
            return he !== null ? he : _e(R.type) || "Memo";
          case Ee: {
            var Je = R, We = Je._payload, ht = Je._init;
            try {
              return _e(ht(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Lt = Object.assign, Ct = 0, Rt, Se, J, Re, V, w, F;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function je() {
      {
        if (Ct === 0) {
          Rt = console.log, Se = console.info, J = console.warn, Re = console.error, V = console.group, w = console.groupCollapsed, F = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        Ct++;
      }
    }
    function ft() {
      {
        if (Ct--, Ct === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Lt({}, R, {
              value: Rt
            }),
            info: Lt({}, R, {
              value: Se
            }),
            warn: Lt({}, R, {
              value: J
            }),
            error: Lt({}, R, {
              value: Re
            }),
            group: Lt({}, R, {
              value: V
            }),
            groupCollapsed: Lt({}, R, {
              value: w
            }),
            groupEnd: Lt({}, R, {
              value: F
            })
          });
        }
        Ct < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = tn.ReactCurrentDispatcher, nt;
    function lt(R, Y, ue) {
      {
        if (nt === void 0)
          try {
            throw Error();
          } catch (Je) {
            var he = Je.stack.trim().match(/\n( *(at )?)/);
            nt = he && he[1] || "";
          }
        return `
` + nt + R;
      }
    }
    var dt = !1, $t;
    {
      var Ln = typeof WeakMap == "function" ? WeakMap : Map;
      $t = new Ln();
    }
    function xr(R, Y) {
      if (!R || dt)
        return "";
      {
        var ue = $t.get(R);
        if (ue !== void 0)
          return ue;
      }
      var he;
      dt = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = it.current, it.current = null, je();
      try {
        if (Y) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (Ze) {
              he = Ze;
            }
            Reflect.construct(R, [], ht);
          } else {
            try {
              ht.call();
            } catch (Ze) {
              he = Ze;
            }
            R.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            he = Ze;
          }
          R();
        }
      } catch (Ze) {
        if (Ze && he && typeof Ze.stack == "string") {
          for (var pt = Ze.stack.split(`
`), wn = he.stack.split(`
`), an = pt.length - 1, sn = wn.length - 1; an >= 1 && sn >= 0 && pt[an] !== wn[sn]; )
            sn--;
          for (; an >= 1 && sn >= 0; an--, sn--)
            if (pt[an] !== wn[sn]) {
              if (an !== 1 || sn !== 1)
                do
                  if (an--, sn--, sn < 0 || pt[an] !== wn[sn]) {
                    var ir = `
` + pt[an].replace(" at new ", " at ");
                    return R.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", R.displayName)), typeof R == "function" && $t.set(R, ir), ir;
                  }
                while (an >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, it.current = We, ft(), Error.prepareStackTrace = Je;
      }
      var Ga = R ? R.displayName || R.name : "", Ka = Ga ? lt(Ga) : "";
      return typeof R == "function" && $t.set(R, Ka), Ka;
    }
    function Rn(R, Y, ue) {
      return xr(R, !1);
    }
    function rr(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Bn(R, Y, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return xr(R, rr(R));
      if (typeof R == "string")
        return lt(R);
      switch (R) {
        case te:
          return lt("Suspense");
        case qe:
          return lt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ae:
            return Rn(R.render);
          case ee:
            return Bn(R.type, Y, ue);
          case Ee: {
            var he = R, Je = he._payload, We = he._init;
            try {
              return Bn(We(Je), Y, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var $n = Object.prototype.hasOwnProperty, Yr = {}, ci = tn.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var Y = R._owner, ue = Bn(R.type, R._source, Y ? Y.type : null);
        ci.setExtraStackFrame(ue);
      } else
        ci.setExtraStackFrame(null);
    }
    function qn(R, Y, ue, he, Je) {
      {
        var We = Function.call.bind($n);
        for (var ht in R)
          if (We(R, ht)) {
            var pt = void 0;
            try {
              if (typeof R[ht] != "function") {
                var wn = Error((he || "React class") + ": " + ue + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              pt = R[ht](Y, ht, he, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              pt = an;
            }
            pt && !(pt instanceof Error) && (sa(Je), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ue, ht, typeof pt), sa(null)), pt instanceof Error && !(pt.message in Yr) && (Yr[pt.message] = !0, sa(Je), at("Failed %s type: %s", ue, pt.message), sa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function In(R) {
      return Tn(R);
    }
    function Sr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ue = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
      }
    }
    function Ya(R) {
      try {
        return Nn(R), !1;
      } catch {
        return !0;
      }
    }
    function Nn(R) {
      return "" + R;
    }
    function Er(R) {
      if (Ya(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Nn(R);
    }
    var ca = tn.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ne;
    function we(R) {
      if ($n.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ut(R) {
      if ($n.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ht(R, Y) {
      typeof R.ref == "string" && ca.current;
    }
    function nn(R, Y) {
      {
        var ue = function() {
          fi || (fi = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function vn(R, Y) {
      {
        var ue = function() {
          ne || (ne = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var on = function(R, Y, ue, he, Je, We, ht) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ue,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function Xn(R, Y, ue, he, Je) {
      {
        var We, ht = {}, pt = null, wn = null;
        ue !== void 0 && (Er(ue), pt = "" + ue), ut(Y) && (Er(Y.key), pt = "" + Y.key), we(Y) && (wn = Y.ref, Ht(Y, Je));
        for (We in Y)
          $n.call(Y, We) && !Qa.hasOwnProperty(We) && (ht[We] = Y[We]);
        if (R && R.defaultProps) {
          var an = R.defaultProps;
          for (We in an)
            ht[We] === void 0 && (ht[We] = an[We]);
        }
        if (pt || wn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          pt && nn(ht, sn), wn && vn(ht, sn);
        }
        return on(R, pt, wn, Je, he, ca.current, ht);
      }
    }
    var rn = tn.ReactCurrentOwner, Qt = tn.ReactDebugCurrentFrame;
    function Wt(R) {
      if (R) {
        var Y = R._owner, ue = Bn(R.type, R._source, Y ? Y.type : null);
        Qt.setExtraStackFrame(ue);
      } else
        Qt.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === I;
    }
    function wa() {
      {
        if (rn.current) {
          var R = _e(rn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var Y = wa();
        if (!Y) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && (Y = `

Check the top-level render call using <` + ue + ">.");
        }
        return Y;
      }
    }
    function pl(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu(Y);
        if (Zl[ue])
          return;
        Zl[ue] = !0;
        var he = "";
        R && R._owner && R._owner !== rn.current && (he = " It was passed a child from " + _e(R._owner.type) + "."), Wt(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, he), Wt(null);
      }
    }
    function vl(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var ue = 0; ue < R.length; ue++) {
            var he = R[ue];
            Cr(he) && pl(he, Y);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Je = st(R);
          if (typeof Je == "function" && Je !== R.entries)
            for (var We = Je.call(R), ht; !(ht = We.next()).done; )
              Cr(ht.value) && pl(ht.value, Y);
        }
      }
    }
    function tu(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ue;
        if (typeof Y == "function")
          ue = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === ae || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === ee))
          ue = Y.propTypes;
        else
          return;
        if (ue) {
          var he = _e(Y);
          qn(ue, R.props, "prop", he, R);
        } else if (Y.PropTypes !== void 0 && !fa) {
          fa = !0;
          var Je = _e(Y);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var Y = Object.keys(R.props), ue = 0; ue < Y.length; ue++) {
          var he = Y[ue];
          if (he !== "children" && he !== "key") {
            Wt(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Wt(null);
            break;
          }
        }
        R.ref !== null && (Wt(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var kr = {};
    function ar(R, Y, ue, he, Je, We) {
      {
        var ht = Bt(R);
        if (!ht) {
          var pt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Hi();
          wn ? pt += wn : pt += wa();
          var an;
          R === null ? an = "null" : In(R) ? an = "array" : R !== void 0 && R.$$typeof === I ? (an = "<" + (_e(R.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : an = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, pt);
        }
        var sn = Xn(R, Y, ue, Je, We);
        if (sn == null)
          return sn;
        if (ht) {
          var ir = Y.children;
          if (ir !== void 0)
            if (he)
              if (In(ir)) {
                for (var Ga = 0; Ga < ir.length; Ga++)
                  vl(ir[Ga], R);
                Object.freeze && Object.freeze(ir);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ir, R);
        }
        if ($n.call(Y, "key")) {
          var Ka = _e(R), Ze = Object.keys(Y).filter(function(nu) {
            return nu !== "key";
          }), rt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[Ka + rt]) {
            var qa = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            at(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Ka, qa, Ka), kr[Ka + rt] = !0;
          }
        }
        return R === Qe ? _r(sn) : tu(sn), sn;
      }
    }
    function di(R, Y, ue) {
      return ar(R, Y, ue, !0);
    }
    function Wa(R, Y, ue) {
      return ar(R, Y, ue, !1);
    }
    var pi = Wa, vi = di;
    Jp.Fragment = Qe, Jp.jsx = pi, Jp.jsxs = vi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? pE.exports = J_() : pE.exports = Z_();
var yt = pE.exports, hE = { exports: {} }, $a = {}, Ym = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function ek() {
  return tT || (tT = 1, function($) {
    function I(J, Re) {
      var V = J.length;
      J.push(Re);
      e: for (; 0 < V; ) {
        var w = V - 1 >>> 1, F = J[w];
        if (0 < He(F, Re)) J[w] = Re, J[V] = F, V = w;
        else break e;
      }
    }
    function L(J) {
      return J.length === 0 ? null : J[0];
    }
    function Qe(J) {
      if (J.length === 0) return null;
      var Re = J[0], V = J.pop();
      if (V !== Re) {
        J[0] = V;
        e: for (var w = 0, F = J.length, Oe = F >>> 1; w < Oe; ) {
          var je = 2 * (w + 1) - 1, ft = J[je], it = je + 1, nt = J[it];
          if (0 > He(ft, V)) it < F && 0 > He(nt, ft) ? (J[w] = nt, J[it] = V, w = it) : (J[w] = ft, J[je] = V, w = je);
          else if (it < F && 0 > He(nt, V)) J[w] = nt, J[it] = V, w = it;
          else break e;
        }
      }
      return Re;
    }
    function He(J, Re) {
      var V = J.sortIndex - Re.sortIndex;
      return V !== 0 ? V : J.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Pe = performance;
      $.unstable_now = function() {
        return Pe.now();
      };
    } else {
      var S = Date, Ke = S.now();
      $.unstable_now = function() {
        return S.now() - Ke;
      };
    }
    var ae = [], te = [], qe = 1, ee = null, Ee = 3, le = !1, Ve = !1, gt = !1, st = typeof setTimeout == "function" ? setTimeout : null, tn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $e(J) {
      for (var Re = L(te); Re !== null; ) {
        if (Re.callback === null) Qe(te);
        else if (Re.startTime <= J) Qe(te), Re.sortIndex = Re.expirationTime, I(ae, Re);
        else break;
        Re = L(te);
      }
    }
    function ct(J) {
      if (gt = !1, $e(J), !Ve) if (L(ae) !== null) Ve = !0, Rt(Te);
      else {
        var Re = L(te);
        Re !== null && Se(ct, Re.startTime - J);
      }
    }
    function Te(J, Re) {
      Ve = !1, gt && (gt = !1, tn(It), It = -1), le = !0;
      var V = Ee;
      try {
        for ($e(Re), ee = L(ae); ee !== null && (!(ee.expirationTime > Re) || J && !Yt()); ) {
          var w = ee.callback;
          if (typeof w == "function") {
            ee.callback = null, Ee = ee.priorityLevel;
            var F = w(ee.expirationTime <= Re);
            Re = $.unstable_now(), typeof F == "function" ? ee.callback = F : ee === L(ae) && Qe(ae), $e(Re);
          } else Qe(ae);
          ee = L(ae);
        }
        if (ee !== null) var Oe = !0;
        else {
          var je = L(te);
          je !== null && Se(ct, je.startTime - Re), Oe = !1;
        }
        return Oe;
      } finally {
        ee = null, Ee = V, le = !1;
      }
    }
    var tt = !1, Ue = null, It = -1, Ot = 5, Bt = -1;
    function Yt() {
      return !($.unstable_now() - Bt < Ot);
    }
    function Et() {
      if (Ue !== null) {
        var J = $.unstable_now();
        Bt = J;
        var Re = !0;
        try {
          Re = Ue(!0, J);
        } finally {
          Re ? _e() : (tt = !1, Ue = null);
        }
      } else tt = !1;
    }
    var _e;
    if (typeof at == "function") _e = function() {
      at(Et);
    };
    else if (typeof MessageChannel < "u") {
      var Lt = new MessageChannel(), Ct = Lt.port2;
      Lt.port1.onmessage = Et, _e = function() {
        Ct.postMessage(null);
      };
    } else _e = function() {
      st(Et, 0);
    };
    function Rt(J) {
      Ue = J, tt || (tt = !0, _e());
    }
    function Se(J, Re) {
      It = st(function() {
        J($.unstable_now());
      }, Re);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, $.unstable_continueExecution = function() {
      Ve || le || (Ve = !0, Rt(Te));
    }, $.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ot = 0 < J ? Math.floor(1e3 / J) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return Ee;
    }, $.unstable_getFirstCallbackNode = function() {
      return L(ae);
    }, $.unstable_next = function(J) {
      switch (Ee) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = Ee;
      }
      var V = Ee;
      Ee = Re;
      try {
        return J();
      } finally {
        Ee = V;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(J, Re) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var V = Ee;
      Ee = J;
      try {
        return Re();
      } finally {
        Ee = V;
      }
    }, $.unstable_scheduleCallback = function(J, Re, V) {
      var w = $.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? w + V : w) : V = w, J) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = V + F, J = { id: qe++, callback: Re, priorityLevel: J, startTime: V, expirationTime: F, sortIndex: -1 }, V > w ? (J.sortIndex = V, I(te, J), L(ae) === null && J === L(te) && (gt ? (tn(It), It = -1) : gt = !0, Se(ct, V - w))) : (J.sortIndex = F, I(ae, J), Ve || le || (Ve = !0, Rt(Te))), J;
    }, $.unstable_shouldYield = Yt, $.unstable_wrapCallback = function(J) {
      var Re = Ee;
      return function() {
        var V = Ee;
        Ee = Re;
        try {
          return J.apply(this, arguments);
        } finally {
          Ee = V;
        }
      };
    };
  }(cE)), cE;
}
var fE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function tk() {
  return nT || (nT = 1, function($) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = !1, L = 5;
      function Qe(ne, we) {
        var ut = ne.length;
        ne.push(we), S(ne, we, ut);
      }
      function He(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function Pe(ne) {
        if (ne.length === 0)
          return null;
        var we = ne[0], ut = ne.pop();
        return ut !== we && (ne[0] = ut, Ke(ne, ut, 0)), we;
      }
      function S(ne, we, ut) {
        for (var Ht = ut; Ht > 0; ) {
          var nn = Ht - 1 >>> 1, vn = ne[nn];
          if (ae(vn, we) > 0)
            ne[nn] = we, ne[Ht] = vn, Ht = nn;
          else
            return;
        }
      }
      function Ke(ne, we, ut) {
        for (var Ht = ut, nn = ne.length, vn = nn >>> 1; Ht < vn; ) {
          var on = (Ht + 1) * 2 - 1, Xn = ne[on], rn = on + 1, Qt = ne[rn];
          if (ae(Xn, we) < 0)
            rn < nn && ae(Qt, Xn) < 0 ? (ne[Ht] = Qt, ne[rn] = we, Ht = rn) : (ne[Ht] = Xn, ne[on] = we, Ht = on);
          else if (rn < nn && ae(Qt, we) < 0)
            ne[Ht] = Qt, ne[rn] = we, Ht = rn;
          else
            return;
        }
      }
      function ae(ne, we) {
        var ut = ne.sortIndex - we.sortIndex;
        return ut !== 0 ? ut : ne.id - we.id;
      }
      var te = 1, qe = 2, ee = 3, Ee = 4, le = 5;
      function Ve(ne, we) {
      }
      var gt = typeof performance == "object" && typeof performance.now == "function";
      if (gt) {
        var st = performance;
        $.unstable_now = function() {
          return st.now();
        };
      } else {
        var tn = Date, at = tn.now();
        $.unstable_now = function() {
          return tn.now() - at;
        };
      }
      var $e = 1073741823, ct = -1, Te = 250, tt = 5e3, Ue = 1e4, It = $e, Ot = [], Bt = [], Yt = 1, Et = null, _e = ee, Lt = !1, Ct = !1, Rt = !1, Se = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V(ne) {
        for (var we = He(Bt); we !== null; ) {
          if (we.callback === null)
            Pe(Bt);
          else if (we.startTime <= ne)
            Pe(Bt), we.sortIndex = we.expirationTime, Qe(Ot, we);
          else
            return;
          we = He(Bt);
        }
      }
      function w(ne) {
        if (Rt = !1, V(ne), !Ct)
          if (He(Ot) !== null)
            Ct = !0, Nn(F);
          else {
            var we = He(Bt);
            we !== null && Er(w, we.startTime - ne);
          }
      }
      function F(ne, we) {
        Ct = !1, Rt && (Rt = !1, ca()), Lt = !0;
        var ut = _e;
        try {
          var Ht;
          if (!I) return Oe(ne, we);
        } finally {
          Et = null, _e = ut, Lt = !1;
        }
      }
      function Oe(ne, we) {
        var ut = we;
        for (V(ut), Et = He(Ot); Et !== null && !(Et.expirationTime > ut && (!ne || ci())); ) {
          var Ht = Et.callback;
          if (typeof Ht == "function") {
            Et.callback = null, _e = Et.priorityLevel;
            var nn = Et.expirationTime <= ut, vn = Ht(nn);
            ut = $.unstable_now(), typeof vn == "function" ? Et.callback = vn : Et === He(Ot) && Pe(Ot), V(ut);
          } else
            Pe(Ot);
          Et = He(Ot);
        }
        if (Et !== null)
          return !0;
        var on = He(Bt);
        return on !== null && Er(w, on.startTime - ut), !1;
      }
      function je(ne, we) {
        switch (ne) {
          case te:
          case qe:
          case ee:
          case Ee:
          case le:
            break;
          default:
            ne = ee;
        }
        var ut = _e;
        _e = ne;
        try {
          return we();
        } finally {
          _e = ut;
        }
      }
      function ft(ne) {
        var we;
        switch (_e) {
          case te:
          case qe:
          case ee:
            we = ee;
            break;
          default:
            we = _e;
            break;
        }
        var ut = _e;
        _e = we;
        try {
          return ne();
        } finally {
          _e = ut;
        }
      }
      function it(ne) {
        var we = _e;
        return function() {
          var ut = _e;
          _e = we;
          try {
            return ne.apply(this, arguments);
          } finally {
            _e = ut;
          }
        };
      }
      function nt(ne, we, ut) {
        var Ht = $.unstable_now(), nn;
        if (typeof ut == "object" && ut !== null) {
          var vn = ut.delay;
          typeof vn == "number" && vn > 0 ? nn = Ht + vn : nn = Ht;
        } else
          nn = Ht;
        var on;
        switch (ne) {
          case te:
            on = ct;
            break;
          case qe:
            on = Te;
            break;
          case le:
            on = It;
            break;
          case Ee:
            on = Ue;
            break;
          case ee:
          default:
            on = tt;
            break;
        }
        var Xn = nn + on, rn = {
          id: Yt++,
          callback: we,
          priorityLevel: ne,
          startTime: nn,
          expirationTime: Xn,
          sortIndex: -1
        };
        return nn > Ht ? (rn.sortIndex = nn, Qe(Bt, rn), He(Ot) === null && rn === He(Bt) && (Rt ? ca() : Rt = !0, Er(w, nn - Ht))) : (rn.sortIndex = Xn, Qe(Ot, rn), !Ct && !Lt && (Ct = !0, Nn(F))), rn;
      }
      function lt() {
      }
      function dt() {
        !Ct && !Lt && (Ct = !0, Nn(F));
      }
      function $t() {
        return He(Ot);
      }
      function Ln(ne) {
        ne.callback = null;
      }
      function xr() {
        return _e;
      }
      var Rn = !1, rr = null, Bn = -1, $n = L, Yr = -1;
      function ci() {
        var ne = $.unstable_now() - Yr;
        return !(ne < $n);
      }
      function sa() {
      }
      function qn(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? $n = Math.floor(1e3 / ne) : $n = L;
      }
      var Tn = function() {
        if (rr !== null) {
          var ne = $.unstable_now();
          Yr = ne;
          var we = !0, ut = !0;
          try {
            ut = rr(we, ne);
          } finally {
            ut ? In() : (Rn = !1, rr = null);
          }
        } else
          Rn = !1;
      }, In;
      if (typeof Re == "function")
        In = function() {
          Re(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Ya = Sr.port2;
        Sr.port1.onmessage = Tn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          Se(Tn, 0);
        };
      function Nn(ne) {
        rr = ne, Rn || (Rn = !0, In());
      }
      function Er(ne, we) {
        Bn = Se(function() {
          ne($.unstable_now());
        }, we);
      }
      function ca() {
        J(Bn), Bn = -1;
      }
      var Qa = sa, fi = null;
      $.unstable_IdlePriority = le, $.unstable_ImmediatePriority = te, $.unstable_LowPriority = Ee, $.unstable_NormalPriority = ee, $.unstable_Profiling = fi, $.unstable_UserBlockingPriority = qe, $.unstable_cancelCallback = Ln, $.unstable_continueExecution = dt, $.unstable_forceFrameRate = qn, $.unstable_getCurrentPriorityLevel = xr, $.unstable_getFirstCallbackNode = $t, $.unstable_next = ft, $.unstable_pauseExecution = lt, $.unstable_requestPaint = Qa, $.unstable_runWithPriority = je, $.unstable_scheduleCallback = nt, $.unstable_shouldYield = ci, $.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var rT;
function oT() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? Ym.exports = ek() : Ym.exports = tk()), Ym.exports;
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
var aT;
function nk() {
  if (aT) return $a;
  aT = 1;
  var $ = Cn, I = oT();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Qe = /* @__PURE__ */ new Set(), He = {};
  function Pe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (He[n] = r, n = 0; n < r.length; n++) Qe.add(r[n]);
  }
  var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ae = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qe = {}, ee = {};
  function Ee(n) {
    return ae.call(ee, n) ? !0 : ae.call(qe, n) ? !1 : te.test(n) ? ee[n] = !0 : (qe[n] = !0, !1);
  }
  function le(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
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
  function gt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new gt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new gt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new gt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new gt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new gt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new gt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new gt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new gt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new gt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var tn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      tn,
      at
    );
    st[r] = new gt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(tn, at);
    st[r] = new gt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(tn, at);
    st[r] = new gt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new gt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new gt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function $e(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, l, c, o) && (l = null), o || c === null ? Ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ct = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Te = Symbol.for("react.element"), tt = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), It = Symbol.for("react.strict_mode"), Ot = Symbol.for("react.profiler"), Bt = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var V = Object.assign, w;
  function F(n) {
    if (w === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      w = r && r[1] || "";
    }
    return `
` + w + n;
  }
  var Oe = !1;
  function je(n, r) {
    if (!n || Oe) return "";
    Oe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? F(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return F(n.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ue:
        return "Fragment";
      case tt:
        return "Portal";
      case Ot:
        return "Profiler";
      case It:
        return "StrictMode";
      case _e:
        return "Suspense";
      case Lt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Yt:
        return (n.displayName || "Context") + ".Consumer";
      case Bt:
        return (n._context.displayName || "Context") + ".Provider";
      case Et:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ct:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case Rt:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
        } catch {
        }
    }
    return null;
  }
  function nt(n) {
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
        return it(r);
      case 8:
        return r === It ? "StrictMode" : "Mode";
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
  function lt(n) {
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
  function $t(n) {
    var r = dt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ln(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function xr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = dt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var l = r.checked;
    return V({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = lt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function $n(n, r) {
    r = r.checked, r != null && $e(n, "checked", r, !1);
  }
  function Yr(n, r) {
    $n(n, r);
    var l = lt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + lt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(L(91));
    return V({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(L(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: lt(l) };
  }
  function Ya(n, r) {
    var l = lt(r.value), o = lt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ne(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var we = {
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
  }, ut = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(n) {
    ut.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), we[r] = we[n];
    });
  });
  function Ht(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || we.hasOwnProperty(n) && we[n] ? ("" + r).trim() : r + "px";
  }
  function nn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ht(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(L(62));
    }
  }
  function Xn(n, r) {
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
  var rn = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wt = null, fa = null, Cr = null;
  function wa(n) {
    if (n = ke(n)) {
      if (typeof Wt != "function") throw Error(L(280));
      var r = n.stateNode;
      r && (r = mn(r), Wt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function Zl() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, wa(n), r) for (n = 0; n < r.length; n++) wa(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), Zl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
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
    if (l && typeof l != "function") throw Error(L(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (Ke) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (G) {
      this.onError(G);
    }
  }
  var Wa = !1, pi = null, vi = !1, R = null, Y = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    Wa = !1, pi = null, di.apply(Y, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), Wa) {
      if (Wa) {
        var z = pi;
        Wa = !1, pi = null;
      } else throw Error(L(198));
      vi || (vi = !0, R = z);
    }
  }
  function Je(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function We(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ht(n) {
    if (Je(n) !== n) throw Error(L(188));
  }
  function pt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Je(n), r === null) throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ht(c), n;
          if (d === o) return ht(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(L(189));
        }
      }
      if (l.alternate !== o) throw Error(L(190));
    }
    if (l.tag !== 3) throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function wn(n) {
    return n = pt(n), n !== null ? an(n) : null;
  }
  function an(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = an(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = I.unstable_scheduleCallback, ir = I.unstable_cancelCallback, Ga = I.unstable_shouldYield, Ka = I.unstable_requestPaint, Ze = I.unstable_now, rt = I.unstable_getCurrentPriorityLevel, qa = I.unstable_ImmediatePriority, nu = I.unstable_UserBlockingPriority, ru = I.unstable_NormalPriority, hl = I.unstable_LowPriority, Wu = I.unstable_IdlePriority, ml = null, Qr = null;
  function Yo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Xa(n) {
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
  function Ja(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ku(n, r) {
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Mt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var kt, Qo, hi, Ye, Zu, lr = !1, mi = [], Or = null, yi = null, cn = null, Gt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ba(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Gt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = iu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = iu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Gt.set(d, iu(Gt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Je(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = We(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        rn = o, l.target.dispatchEvent(o), rn = null;
      } else return r = ke(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Wf() {
    lr = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), cn !== null && El(cn) && (cn = null), Gt.forEach(lu), Sl.forEach(lu);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lr || (lr = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, Wf)));
  }
  function Za(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < mi.length) {
      xa(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && xa(Or, n), yi !== null && xa(yi, n), cn !== null && xa(cn, n), Gt.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var gi = ct.ReactCurrentBatchConfig, _a = !0;
  function eo(n, r, l, o) {
    var c = Mt, d = gi.transition;
    gi.transition = null;
    try {
      Mt = 1, Cl(n, r, l, o);
    } finally {
      Mt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Mt, d = gi.transition;
    gi.transition = null;
    try {
      Mt = 4, Cl(n, r, l, o);
    } finally {
      Mt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), ba(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (ba(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && kt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Qt(o), n = vu(n), n !== null) if (r = Je(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = We(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
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
        switch (rt()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function U() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Z() {
    return !0;
  }
  function Le() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Z : Le, this.isPropagationStopped = Le, this;
    }
    return V(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Z);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Z);
    }, persist: function() {
    }, isPersistent: Z }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, mt = ie(ze), Dt = V({}, ze, { view: 0, detail: 0 }), ln = ie(Dt), Kt, ot, qt, hn = V({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== qt && (qt && n.type === "mousemove" ? (Kt = n.screenX - qt.screenX, ot = n.screenY - qt.screenY) : ot = Kt = 0, qt = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ot;
  } }), Rl = ie(hn), Ko = V({}, hn, { dataTransfer: 0 }), Bi = ie(Ko), qo = V({}, Dt, { relatedTarget: 0 }), ou = ie(qo), Gf = V({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ie(Gf), Kf = V({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ev = ie(Kf), qf = V({}, ze, { data: 0 }), Xf = ie(qf), tv = {
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
  }, nv = {
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
  }, Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return $i;
  }
  var Zf = V({}, Dt, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ie(Zf), td = V({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rv = ie(td), sc = V({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), av = ie(sc), Wr = V({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = ie(Wr), Mn = V({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ie(Mn), nd = [9, 13, 27, 32], ao = Ke && "CompositionEvent" in window, Xo = null;
  Ke && "documentMode" in document && (Xo = document.documentMode);
  var Jo = Ke && "TextEvent" in window && !Xo, iv = Ke && (!ao || Xo && 8 < Xo && 11 >= Xo), lv = " ", cc = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
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
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function sv(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, lv);
      case "textInput":
        return n = r.data, n === lv && cc ? null : n;
      default:
        return null;
    }
  }
  function Km(n, r) {
    if (io) return n === "compositionend" || !ao && uv(n, r) ? (n = U(), C = h = ei = null, io = !1, n) : null;
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
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new mt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function fv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ni(n);
    if (xr(r)) return n;
  }
  function Xm(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (Ke) {
    var ad;
    if (Ke) {
      var id = "oninput" in document;
      if (!id) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), id = typeof pv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    dv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    Si && (Si.detachEvent("onpropertychange", hv), su = Si = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      rd(r, su, n, Qt(n)), tu(fv, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (vv(), Si = r, su = l, Si.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function mv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function Zm(n, r) {
    if (n === "click") return Zo(r);
  }
  function yv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : ey;
  function es(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ae.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = gv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = gv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ty = Ke && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Rn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new mt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, ur = {}, sd = {};
  Ke && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (ur[n]) return ur[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return ur[n] = r[l];
    return n;
  }
  var Sv = vc("animationend"), Ev = vc("animationiteration"), Cv = vc("animationstart"), Rv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    cd.set(n, r), Pe(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ny = fu.toLowerCase(), ry = fu[0].toUpperCase() + fu.slice(1);
    ka(ny, "on" + ry);
  }
  ka(Sv, "onAnimationEnd"), ka(Ev, "onAnimationIteration"), ka(Cv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Rv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Pe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Qe.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var z = d, G = Qt(l), q = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var fe = mt, me = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = ed;
              break;
            case "focusin":
              me = "focus", fe = ou;
              break;
            case "focusout":
              me = "blur", fe = ou;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = av;
              break;
            case Sv:
            case Ev:
            case Cv:
              fe = oc;
              break;
            case Rv:
              fe = Ii;
              break;
            case "scroll":
              fe = ln;
              break;
            case "wheel":
              fe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = ev;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = rv;
          }
          var Ce = (r & 4) !== 0, Dn = !Ce && n === "scroll", k = Ce ? W !== null ? W + "Capture" : null : W;
          Ce = [];
          for (var x = z, N; x !== null; ) {
            N = x;
            var K = N.stateNode;
            if (N.tag === 5 && K !== null && (N = K, k !== null && (K = _r(x, k), K != null && Ce.push(so(x, K, N)))), Dn) break;
            x = x.return;
          }
          0 < Ce.length && (W = new fe(W, me, null, l, G), q.push({ event: W, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", W && l !== rn && (me = l.relatedTarget || l.fromElement) && (vu(me) || me[Qi])) break e;
          if ((fe || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, fe ? (me = l.relatedTarget || l.toElement, fe = z, me = me ? vu(me) : null, me !== null && (Dn = Je(me), me !== Dn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (fe = null, me = z), fe !== me)) {
            if (Ce = Rl, K = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = rv, K = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Dn = fe == null ? W : ni(fe), N = me == null ? W : ni(me), W = new Ce(K, x + "leave", fe, l, G), W.target = Dn, W.relatedTarget = N, K = null, vu(G) === z && (Ce = new Ce(k, x + "enter", me, l, G), Ce.target = N, Ce.relatedTarget = Dn, K = Ce), Dn = K, fe && me) t: {
              for (Ce = fe, k = me, x = 0, N = Ce; N; N = wl(N)) x++;
              for (N = 0, K = k; K; K = wl(K)) N++;
              for (; 0 < x - N; ) Ce = wl(Ce), x--;
              for (; 0 < N - x; ) k = wl(k), N--;
              for (; x--; ) {
                if (Ce === k || k !== null && Ce === k.alternate) break t;
                Ce = wl(Ce), k = wl(k);
              }
              Ce = null;
            }
            else Ce = null;
            fe !== null && wv(q, W, fe, Ce, !1), me !== null && Dn !== null && wv(q, Dn, me, Ce, !0);
          }
        }
        e: {
          if (W = z ? ni(z) : window, fe = W.nodeName && W.nodeName.toLowerCase(), fe === "select" || fe === "input" && W.type === "file") var ye = Xm;
          else if (cv(W)) if (dv) ye = yv;
          else {
            ye = mv;
            var Me = Jm;
          }
          else (fe = W.nodeName) && fe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ye = Zm);
          if (ye && (ye = ye(n, z))) {
            rd(q, ye, l, G);
            break e;
          }
          Me && Me(n, W, z), n === "focusout" && (Me = W._wrapperState) && Me.controlled && W.type === "number" && sa(W, "number", W.value);
        }
        switch (Me = z ? ni(z) : window, n) {
          case "focusin":
            (cv(Me) || Me.contentEditable === "true") && (uo = Me, ld = z, ns = null);
            break;
          case "focusout":
            ns = ld = uo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(q, l, G);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            od(q, l, G);
        }
        var Ae;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ie = "onCompositionStart";
              break e;
            case "compositionend":
              Ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ie = "onCompositionUpdate";
              break e;
          }
          Ie = void 0;
        }
        else io ? uv(n, l) && (Ie = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (iv && l.locale !== "ko" && (io || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && io && (Ae = U()) : (ei = G, h = "value" in ei ? ei.value : ei.textContent, io = !0)), Me = as(z, Ie), 0 < Me.length && (Ie = new Xf(Ie, n, null, l, G), q.push({ event: Ie, listeners: Me }), Ae ? Ie.data = Ae : (Ae = ov(l), Ae !== null && (Ie.data = Ae)))), (Ae = Jo ? sv(n, l) : Km(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && (G = new Xf("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: z }), G.data = Ae));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(so(n, d, c)), d = _r(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function wl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = _r(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = _r(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function xv(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(ay, "");
  }
  function Ec(n, r, l) {
    if (r = xv(r), xv(n) !== r && l) throw Error(L(425));
  }
  function bl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, _v = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof _v < "u" ? function(n) {
    return _v.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Ei(n) {
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
  function kv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var xl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + xl, ls = "__reactProps$" + xl, Qi = "__reactContainer$" + xl, us = "__reactEvents$" + xl, po = "__reactListeners$" + xl, iy = "__reactHandles$" + xl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = kv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = kv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(L(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var wt = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function un(n) {
    0 > Da || (n.current = wt[Da], wt[Da] = null, Da--);
  }
  function xe(n, r) {
    Da++, wt[Da] = n.current, n.current = r;
  }
  var Rr = {}, En = Oa(Rr), Qn = Oa(!1), Gr = Rr;
  function Kr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    un(Qn), un(En);
  }
  function Dv(n, r, l) {
    if (En.current !== Rr) throw Error(L(168));
    xe(En, r), xe(Qn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(L(108, nt(n) || "Unknown", c));
    return V({}, l, o);
  }
  function Jn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = En.current, xe(En, n), xe(Qn, Qn.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(L(169));
    l ? (n = os(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, un(Qn), un(En), xe(En, n)) : un(Qn), xe(Qn, l);
  }
  var Ri = null, ho = !1, Wi = !1;
  function bc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, bc(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Mt;
      try {
        var l = Ri;
        for (Mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(qa, Ti), c;
      } finally {
        Mt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], La = 0, pa = null, wi = 1, bi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Ov(n, r, l) {
    zn[La++] = wi, zn[La++] = bi, zn[La++] = pa, pa = n;
    var o = wi;
    n = bi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, wi = 1 << 32 - Dr(r) + c | l << c | o, bi = d + n;
    } else wi = 1 << d | l << c | o, bi = n;
  }
  function xc(n) {
    n.return !== null && (hu(n, 1), Ov(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = zn[--La], zn[La] = null, bi = zn[--La], zn[La] = null, wi = zn[--La], zn[La] = null;
  }
  var qr = null, Xr = null, dn = !1, Na = null;
  function vd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Lv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: wi, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Lv(n, r)) {
          if (hd(n)) throw Error(L(418));
          r = Ei(l.nextSibling);
          var o = qr;
          r && Lv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(L(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Wn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function kc(n) {
    if (n !== qr) return !1;
    if (!dn) return Wn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw ss(), Error(L(418));
      for (; r; ) vd(n, r), r = Ei(r.nextSibling);
    }
    if (Wn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Xr = qr = null, dn = !1;
  }
  function Ki(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var ly = ct.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(L(284));
      if (!l._owner) throw Error(L(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, x) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [x], k.flags |= 16) : N.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Hl(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < x ? (k.flags |= 2, x) : N) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, N, K) {
      return x === null || x.tag !== 6 ? (x = Wd(N, k.mode, K), x.return = k, x) : (x = c(x, N), x.return = k, x);
    }
    function T(k, x, N, K) {
      var ye = N.type;
      return ye === Ue ? G(k, x, N.props.children, K, N.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Rt && Nv(ye) === x.type) ? (K = c(x, N.props), K.ref = mu(k, x, N), K.return = k, K) : (K = Hs(N.type, N.key, N.props, null, k.mode, K), K.ref = mu(k, x, N), K.return = k, K);
    }
    function z(k, x, N, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = sf(N, k.mode, K), x.return = k, x) : (x = c(x, N.children || []), x.return = k, x);
    }
    function G(k, x, N, K, ye) {
      return x === null || x.tag !== 7 ? (x = tl(N, k.mode, K, ye), x.return = k, x) : (x = c(x, N), x.return = k, x);
    }
    function q(k, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, k.mode, N), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Te:
            return N = Hs(x.type, x.key, x.props, null, k.mode, N), N.ref = mu(k, null, x), N.return = k, N;
          case tt:
            return x = sf(x, k.mode, N), x.return = k, x;
          case Rt:
            var K = x._init;
            return q(k, K(x._payload), N);
        }
        if (qn(x) || Re(x)) return x = tl(x, k.mode, N, null), x.return = k, x;
        Dc(k, x);
      }
      return null;
    }
    function W(k, x, N, K) {
      var ye = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return ye !== null ? null : E(k, x, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Te:
            return N.key === ye ? T(k, x, N, K) : null;
          case tt:
            return N.key === ye ? z(k, x, N, K) : null;
          case Rt:
            return ye = N._init, W(
              k,
              x,
              ye(N._payload),
              K
            );
        }
        if (qn(N) || Re(N)) return ye !== null ? null : G(k, x, N, K, null);
        Dc(k, N);
      }
      return null;
    }
    function fe(k, x, N, K, ye) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return k = k.get(N) || null, E(x, k, "" + K, ye);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Te:
            return k = k.get(K.key === null ? N : K.key) || null, T(x, k, K, ye);
          case tt:
            return k = k.get(K.key === null ? N : K.key) || null, z(x, k, K, ye);
          case Rt:
            var Me = K._init;
            return fe(k, x, N, Me(K._payload), ye);
        }
        if (qn(K) || Re(K)) return k = k.get(N) || null, G(x, k, K, ye, null);
        Dc(x, K);
      }
      return null;
    }
    function me(k, x, N, K) {
      for (var ye = null, Me = null, Ae = x, Ie = x = 0, tr = null; Ae !== null && Ie < N.length; Ie++) {
        Ae.index > Ie ? (tr = Ae, Ae = null) : tr = Ae.sibling;
        var At = W(k, Ae, N[Ie], K);
        if (At === null) {
          Ae === null && (Ae = tr);
          break;
        }
        n && Ae && At.alternate === null && r(k, Ae), x = d(At, x, Ie), Me === null ? ye = At : Me.sibling = At, Me = At, Ae = tr;
      }
      if (Ie === N.length) return l(k, Ae), dn && hu(k, Ie), ye;
      if (Ae === null) {
        for (; Ie < N.length; Ie++) Ae = q(k, N[Ie], K), Ae !== null && (x = d(Ae, x, Ie), Me === null ? ye = Ae : Me.sibling = Ae, Me = Ae);
        return dn && hu(k, Ie), ye;
      }
      for (Ae = o(k, Ae); Ie < N.length; Ie++) tr = fe(Ae, k, Ie, N[Ie], K), tr !== null && (n && tr.alternate !== null && Ae.delete(tr.key === null ? Ie : tr.key), x = d(tr, x, Ie), Me === null ? ye = tr : Me.sibling = tr, Me = tr);
      return n && Ae.forEach(function(Bl) {
        return r(k, Bl);
      }), dn && hu(k, Ie), ye;
    }
    function Ce(k, x, N, K) {
      var ye = Re(N);
      if (typeof ye != "function") throw Error(L(150));
      if (N = ye.call(N), N == null) throw Error(L(151));
      for (var Me = ye = null, Ae = x, Ie = x = 0, tr = null, At = N.next(); Ae !== null && !At.done; Ie++, At = N.next()) {
        Ae.index > Ie ? (tr = Ae, Ae = null) : tr = Ae.sibling;
        var Bl = W(k, Ae, At.value, K);
        if (Bl === null) {
          Ae === null && (Ae = tr);
          break;
        }
        n && Ae && Bl.alternate === null && r(k, Ae), x = d(Bl, x, Ie), Me === null ? ye = Bl : Me.sibling = Bl, Me = Bl, Ae = tr;
      }
      if (At.done) return l(
        k,
        Ae
      ), dn && hu(k, Ie), ye;
      if (Ae === null) {
        for (; !At.done; Ie++, At = N.next()) At = q(k, At.value, K), At !== null && (x = d(At, x, Ie), Me === null ? ye = At : Me.sibling = At, Me = At);
        return dn && hu(k, Ie), ye;
      }
      for (Ae = o(k, Ae); !At.done; Ie++, At = N.next()) At = fe(Ae, k, Ie, At.value, K), At !== null && (n && At.alternate !== null && Ae.delete(At.key === null ? Ie : At.key), x = d(At, x, Ie), Me === null ? ye = At : Me.sibling = At, Me = At);
      return n && Ae.forEach(function(vh) {
        return r(k, vh);
      }), dn && hu(k, Ie), ye;
    }
    function Dn(k, x, N, K) {
      if (typeof N == "object" && N !== null && N.type === Ue && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Te:
            e: {
              for (var ye = N.key, Me = x; Me !== null; ) {
                if (Me.key === ye) {
                  if (ye = N.type, ye === Ue) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), x = c(Me, N.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Me.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Rt && Nv(ye) === Me.type) {
                    l(k, Me.sibling), x = c(Me, N.props), x.ref = mu(k, Me, N), x.return = k, k = x;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              N.type === Ue ? (x = tl(N.props.children, k.mode, K, N.key), x.return = k, k = x) : (K = Hs(N.type, N.key, N.props, null, k.mode, K), K.ref = mu(k, x, N), K.return = k, k = K);
            }
            return m(k);
          case tt:
            e: {
              for (Me = N.key; x !== null; ) {
                if (x.key === Me) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(k, x.sibling), x = c(x, N.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = sf(N, k.mode, K), x.return = k, k = x;
            }
            return m(k);
          case Rt:
            return Me = N._init, Dn(k, x, Me(N._payload), K);
        }
        if (qn(N)) return me(k, x, N, K);
        if (Re(N)) return Ce(k, x, N, K);
        Dc(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, N), x.return = k, k = x) : (l(k, x), x = Wd(N, k.mode, K), x.return = k, k = x), m(k)) : l(k, x);
    }
    return Dn;
  }
  var bn = yu(!0), oe = yu(!1), va = Oa(null), Jr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Jr = null;
  }
  function Sd(n) {
    var r = va.current;
    un(va), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Jr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Jr === null) throw Error(L(308));
      mo = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Mv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, bt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = z : E.next = z, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = z = T = null, E = d;
      do {
        var W = E.lane, fe = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Ce = E;
            switch (W = r, fe = l, Ce.tag) {
              case 1:
                if (me = Ce.payload, typeof me == "function") {
                  q = me.call(fe, q, W);
                  break e;
                }
                q = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Ce.payload, W = typeof me == "function" ? me.call(fe, q, W) : me, W == null) break e;
                q = V({}, q, W);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else fe = { eventTime: fe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (z = G = fe, T = q) : G = G.next = fe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = q), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(L(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, xi = Oa(fs), ds = Oa(fs), ps = Oa(fs);
  function Su(n) {
    if (n === fs) throw Error(L(174));
    return n;
  }
  function bd(n, r) {
    switch (xe(ps, r), xe(ds, n), xe(xi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    un(xi), xe(xi, r);
  }
  function Eu() {
    un(xi), un(ds), un(ps);
  }
  function zv(n) {
    Su(ps.current);
    var r = Su(xi.current), l = ca(r, n.type);
    r !== l && (xe(ds, n), xe(xi, l));
  }
  function Lc(n) {
    ds.current === n && (un(xi), un(ds));
  }
  var gn = Oa(0);
  function Nc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
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
  var vs = [];
  function De() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var vt = ct.ReactCurrentDispatcher, Ut = ct.ReactCurrentBatchConfig, Xt = 0, zt = null, An = null, Zn = null, Mc = !1, hs = !1, Cu = 0, Q = 0;
  function Nt() {
    throw Error(L(321));
  }
  function Fe(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Xt = d, zt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, vt.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(L(301));
        d += 1, Zn = An = null, r.updateQueue = null, vt.current = Kc, n = l(o, c);
      } while (hs);
    }
    if (vt.current = xu, r = An !== null && An.next !== null, Xt = 0, Zn = An = zt = null, Mc = !1, r) throw Error(L(300));
    return n;
  }
  function ri() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? zt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function xn() {
    if (An === null) {
      var n = zt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Zn === null ? zt.memoizedState : Zn.next;
    if (r !== null) Zn = r, An = n;
    else {
      if (n === null) throw Error(L(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Zn === null ? zt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ul(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = An, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var G = z.lane;
        if ((Xt & G) === G) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var q = {
            lane: G,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, zt.lanes |= G, Oi |= G;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, zt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Uc() {
  }
  function zc(n, r) {
    var l = zt, o = xn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(L(349));
      Xt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = zt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, zt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = ha(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = bu.bind(null, zt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = zt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, zt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return xn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Tr();
    zt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = xn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (An !== null) {
      var m = An.memoizedState;
      if (d = m.destroy, o !== null && Fe(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    zt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Ic(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function xd(n, r, l) {
    return Xt & 21 ? (ti(l, r) || (l = qu(), zt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ut.transition;
    Ut.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, Ut.transition = o;
    }
  }
  function _d() {
    return xn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Av(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Pn();
      zr(l, n, o, c), en(l, r, o);
    }
  }
  function bu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Av(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Pn(), zr(l, n, o, c), en(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === zt || r !== null && r === zt;
  }
  function Av(n, r) {
    hs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function en(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var xu = { readContext: Ma, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, zt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = zt, c = Tr();
    if (dn) {
      if (l === void 0) throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(L(349));
      Xt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Gn.identifierPrefix;
    if (dn) {
      var l = bi, o = wi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Q++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: Qc,
    useContext: Ma,
    useEffect: ms,
    useImperativeHandle: Yc,
    useInsertionEffect: Ic,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: Ul,
    useRef: Bc,
    useState: function() {
      return Ul(Xi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = xn();
      return xd(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = Ul(Xi)[0], r = xn().memoizedState;
      return [n, r];
    },
    useMutableSource: Uc,
    useSyncExternalStore: zc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Ma, useCallback: Qc, useContext: Ma, useEffect: ms, useImperativeHandle: Yc, useInsertionEffect: Ic, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Xi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = xn();
    return An === null ? r.memoizedState = n : xd(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Xi)[0], r = xn().memoizedState;
    return [n, r];
  }, useMutableSource: Uc, useSyncExternalStore: zc, useId: _d, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = V({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : V({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Je(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Pn(), o = Li(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Nl(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function jv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Un(r) ? Gr : En.current, o = r.contextTypes, d = (o = o != null) ? Kr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Fv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Un(r) ? Gr : En.current, c.context = Kr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ft(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Pv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = ct.ReactCurrentOwner, jn = !1;
  function or(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : bn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && xc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, et(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function et(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Vv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(Co, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xe(Co, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, xe(Co, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, xe(Co, ya), ya |= o;
    return or(n, r, c, l), r.child;
  }
  function Md(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Vv(n, r, l, o, c) {
    var d = Un(l) ? Gr : En.current;
    return d = Kr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && xc(r), r.flags |= 1, or(n, r, l, c), r.child);
  }
  function Bv(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      Jn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ua(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ma(z) : (z = Un(l) ? Gr : En.current, z = Kr(r, z));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Fv(r, m, o, z), ma = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Qn.current || ma ? (typeof G == "function" && (kd(r, l, G, o), T = r.memoizedState), (E = ma || jv(r, l, E, o, W, T, z)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Mv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ai(r.type, E), m.props = z, q = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Un(l) ? Gr : En.current, T = Kr(r, T));
      var fe = l.getDerivedStateFromProps;
      (G = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== T) && Fv(r, m, o, T), ma = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var me = r.memoizedState;
      E !== q || W !== me || Qn.current || ma ? (typeof fe == "function" && (kd(r, l, fe, o), me = r.memoizedState), (z = ma || jv(r, l, z, o, W, me, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return bs(n, r, l, o, d, c);
  }
  function bs(n, r, l, o, c, d) {
    Md(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = bn(r, n.child, null, d), r.child = bn(r, null, E, d)) : or(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Dv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Dv(n, r.context, !1), bd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return Ll(), Ki(c), r.flags |= 256, or(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), xe(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ud(l), r.memoizedState = Zc, n) : zd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Iv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ud(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function zd(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xs(n, r, l, o) {
    return o !== null && Ki(o), bn(r, n.child, null, l), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(L(422))), xs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && bn(r, n.child, null, m), r.child.memoizedState = Ud(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return xs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(L(419)), o = Dd(d, o, void 0), xs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, jn || E) {
      if (o = Gn, o !== null) {
        switch (m & -m) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), zr(o, n, c, -1));
      }
      return Yd(), o = Dd(Error(L(421))), xs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), qr = r, dn = !0, Na = null, n !== null && (zn[La++] = wi, zn[La++] = bi, zn[La++] = pa, wi = n.id, bi = n.overflow, pa = r), r = zd(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Nr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (or(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
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
    if (xe(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Nc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Nc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nr(r, !0, l, null, d);
        break;
      case "together":
        Nr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        zv(r);
        break;
      case 1:
        Un(r.type) && Jn(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        xe(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (xe(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        xe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), xe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return za(n, r, l);
  }
  var Aa, Fn, Yv, Qv;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Fn = function() {
  }, Yv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(xi.current);
      var d = null;
      switch (l) {
        case "input":
          c = rr(n, c), o = rr(n, o), d = [];
          break;
        case "select":
          c = V({}, c, { value: void 0 }), o = V({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bl);
      }
      on(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (He.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (He.hasOwnProperty(z) ? (T != null && z === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Wv(n, r, l) {
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
        return er(r), null;
      case 1:
        return Un(r.type) && vo(), er(r), null;
      case 3:
        return o = r.stateNode, Eu(), un(Qn), un(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (Lu(Na), Na = null))), Fn(n, r), er(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Yv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(L(166));
            return er(r), null;
          }
          if (n = Su(xi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Bn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : He.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), ci(o, d, !0);
                break;
              case "textarea":
                Ln(o), Nn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Bn(n, o), c = rr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = V({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = In(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? nn(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ne(n, T) : typeof T == "number" && ne(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (He.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && $e(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Ln(n), ci(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), Nn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + lt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bl);
              }
              switch (l) {
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
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(L(166));
          if (l = Su(ps.current), Su(xi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (un(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(L(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else Na !== null && (Lu(Na), Na = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? kn === 0 && (kn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Eu(), Fn(n, r), n === null && oo(r.stateNode.containerInfo), er(r), null;
      case 10:
        return Sd(r.type._context), er(r), null;
      case 17:
        return Un(r.type) && vo(), er(r), null;
      case 19:
        if (un(gn), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Nc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return xe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ze() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Nc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return er(r), null;
          } else 2 * Ze() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = gn.current, xe(gn, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Un(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), un(Qn), un(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (un(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(L(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return un(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, wr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Gv = !1;
  function Kv(n, r) {
    if (is = _a, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, G = 0, q = n, W = null;
          t: for (; ; ) {
            for (var fe; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (fe = q.firstChild) !== null; )
              W = q, q = fe;
            for (; ; ) {
              if (q === n) break t;
              if (W === l && ++z === c && (E = m), W === d && ++G === o && (T = m), (fe = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, _a = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Ce = me.memoizedProps, Dn = me.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ai(r.type, Ce), Dn);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(L(163));
        }
      } catch (K) {
        pn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return me = Gv, Gv = !1, me;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ns(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ns(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var _n = null, Mr = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) qv(n, r, l), l = l.sibling;
  }
  function qv(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || Eo(l, r);
      case 6:
        var o = _n, c = Mr;
        _n = null, Ur(n, r, l), _n = o, Mr = c, _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Za(n)) : fo(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Mr, _n = l.stateNode.containerInfo, Mr = !0, Ur(n, r, l), _n = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!wr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (o = wr) || l.memoizedState !== null, Ur(n, r, l), wr = o) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
    }
  }
  function Xv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = lh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              _n = E.stateNode, Mr = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Mr = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(L(160));
        qv(d, m, c), _n = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        pn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
          try {
            Os(5, n, n.return);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ne(c, "");
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && $n(c, d), Xn(E, m);
            var z = Xn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], q = T[m + 1];
              G === "style" ? nn(c, q) : G === "dangerouslySetInnerHTML" ? fi(c, q) : G === "children" ? ne(c, q) : $e(c, G, q, z);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Tn(c, !!d.multiple, fe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Ce) {
          pn(n, n.return, Ce);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Ze())), o & 4 && Xv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (z = wr) || G, ii(r, n), wr = z) : ii(r, n), ta(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !G && n.mode & 1) for (ve = n, G = n.child; G !== null; ) {
            for (q = ve = G; ve !== null; ) {
              switch (W = ve, fe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var me = W.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Ce) {
                      pn(o, l, Ce);
                    }
                  }
                  break;
                case 5:
                  Eo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ms(q);
                    continue;
                  }
              }
              fe !== null ? (fe.return = W, ve = fe) : Ms(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ht("display", m));
                } catch (Ce) {
                  pn(n, n.return, Ce);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = z ? "" : q.memoizedProps;
              } catch (Ce) {
                pn(n, n.return, Ce);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && Xv(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ns(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ne(c, ""), o.flags &= -33);
            var d = Ji(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            ki(n, E, m);
            break;
          default:
            throw Error(L(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    ve = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || wr;
          E = Ds;
          var z = wr;
          if (Ds = m, (wr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, ve = T) : Pd(c);
          for (; d !== null; ) ve = d, Hd(d), d = d.sibling;
          ve = c, Ds = E, wr = z;
        }
        Jv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Jv(n);
    }
  }
  function Jv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
                var z = r.alternate;
                if (z !== null) {
                  var G = z.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && Za(q);
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
              throw Error(L(163));
          }
          wr || r.flags & 512 && jd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ms(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Pd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var sy = Math.ceil, Al = ct.ReactCurrentDispatcher, Du = ct.ReactCurrentOwner, sr = ct.ReactCurrentBatchConfig, bt = 0, Gn = null, Hn = null, cr = 0, ya = 0, Co = Oa(0), kn = 0, Us = null, Oi = 0, Ro = 0, af = 0, zs = null, na = null, Vd = 0, To = 1 / 0, ga = null, wo = !1, Ou = null, jl = null, lf = !1, Zi = null, As = 0, Fl = 0, bo = null, js = -1, br = 0;
  function Pn() {
    return bt & 6 ? Ze() : js !== -1 ? js : js = Ze();
  }
  function Li(n) {
    return n.mode & 1 ? bt & 2 && cr !== 0 ? cr & -cr : ly.transition !== null ? (br === 0 && (br = qu()), br) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, bo = null, Error(L(185));
    Pi(n, l, o), (!(bt & 2) || n !== Gn) && (n === Gn && (!(bt & 2) && (Ro |= l), kn === 4 && li(n, cr)), ra(n, o), l === 1 && bt === 0 && !(r.mode & 1) && (To = Ze() + 500, ho && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) l !== null && ir(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ir(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : bc(Bd.bind(null, n)), co(function() {
        !(bt & 6) && Ti();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = oh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, br = 0, bt & 6) throw Error(L(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l) return null;
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = bt;
      bt |= 2;
      var d = eh();
      (Gn !== n || cr !== r) && (ga = null, To = Ze() + 500, el(n, r));
      do
        try {
          th();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (!0);
      gd(), Al.current = d, bt = c, Hn !== null ? r = 0 : (Gn = null, cr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = Us, el(n, 0), li(n, o), ra(n, Ze()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = Us, el(n, 0), li(n, o), ra(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            Mu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Vd + 500 - Ze(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Mu.bind(null, n, na, ga), r);
              break;
            }
            Mu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Mu.bind(null, n, na, ga), o);
              break;
            }
            Mu(n, na, ga);
            break;
          case 5:
            Mu(n, na, ga);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return ra(n, Ze()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = na, na = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
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
  function li(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (bt & 6) throw Error(L(327));
    xo();
    var r = Ja(n, 0);
    if (!(r & 1)) return ra(n, Ze()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = Us, el(n, 0), li(n, r), ra(n, Ze()), l;
    if (l === 6) throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, na, ga), ra(n, Ze()), null;
  }
  function $d(n, r) {
    var l = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = l, bt === 0 && (To = Ze() + 500, ho && Ti());
    }
  }
  function Nu(n) {
    Zi !== null && Zi.tag === 0 && !(bt & 6) && xo();
    var r = bt;
    bt |= 1;
    var l = sr.transition, o = Mt;
    try {
      if (sr.transition = null, Mt = 1, n) return n();
    } finally {
      Mt = o, sr.transition = l, bt = r, !(bt & 6) && Ti();
    }
  }
  function Id() {
    ya = Co.current, un(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), un(Qn), un(En), De();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          un(gn);
          break;
        case 19:
          un(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      l = l.return;
    }
    if (Gn = n, Hn = n = Hl(n.current, null), cr = ya = r, kn = 0, Us = null, af = Ro = Oi = 0, na = zs = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function Zv(n, r) {
    do {
      var l = Hn;
      try {
        if (gd(), vt.current = xu, Mc) {
          for (var o = zt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (Xt = 0, Zn = An = zt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          kn = 1, Us = r, Hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var fe = Pv(m);
            if (fe !== null) {
              fe.flags &= -257, zl(fe, m, E, d, r), fe.mode & 1 && Nd(d, z, r), r = fe, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, z, r), Yd();
                break e;
              }
              T = Error(L(426));
            }
          } else if (dn && E.mode & 1) {
            var Dn = Pv(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), zl(Dn, m, E, d, r), Ki(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), kn !== 4 && (kn = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, T, r);
                Uv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (jl === null || !jl.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Ld(d, E, r);
                  Uv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (ye) {
        r = ye, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = Al.current;
    return Al.current = xu, n === null ? xu : n;
  }
  function Yd() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Gn === null || !(Oi & 268435455) && !(Ro & 268435455) || li(Gn, cr);
  }
  function of(n, r) {
    var l = bt;
    bt |= 2;
    var o = eh();
    (Gn !== n || cr !== r) && (ga = null, el(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (!0);
    if (gd(), bt = l, Al.current = o, Hn !== null) throw Error(L(261));
    return Gn = null, cr = 0, kn;
  }
  function fy() {
    for (; Hn !== null; ) nh(Hn);
  }
  function th() {
    for (; Hn !== null && !Ga(); ) nh(Hn);
  }
  function nh(n) {
    var r = uh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : Hn = r, Du.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (l = Wv(l, r, ya), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Mu(n, r, l) {
    var o = Mt, c = sr.transition;
    try {
      sr.transition = null, Mt = 1, dy(n, r, l, o);
    } finally {
      sr.transition = c, Mt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      xo();
    while (Zi !== null);
    if (bt & 6) throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qf(n, d), n === Gn && (Hn = Gn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, oh(ru, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = sr.transition, sr.transition = null;
      var m = Mt;
      Mt = 1;
      var E = bt;
      bt |= 4, Du.current = null, Kv(n, l), Fd(l, n), lo(pu), _a = !!is, pu = is = null, n.current = l, oy(l), Ka(), bt = E, Mt = m, sr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), Yo(l.stateNode), ra(n, Ze()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === bo ? Fl++ : (Fl = 0, bo = n) : Fl = 0, Ti(), null;
  }
  function xo() {
    if (Zi !== null) {
      var n = Ju(As), r = sr.transition, l = Mt;
      try {
        if (sr.transition = null, Mt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, bt & 6) throw Error(L(331));
          var c = bt;
          for (bt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var G = ve;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, ve = q;
                    else for (; ve !== null; ) {
                      G = ve;
                      var W = G.sibling, fe = G.return;
                      if (rf(G), G === z) {
                        ve = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = fe, ve = W;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Ce = me.child;
                  if (Ce !== null) {
                    me.child = null;
                    do {
                      var Dn = Ce.sibling;
                      Ce.sibling = null, Ce = Dn;
                    } while (Ce !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var x = n.current;
          for (ve = x; ve !== null; ) {
            m = ve;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, ve = N;
            else e: for (m = x; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ye) {
                pn(E, E.return, ye);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, ve = K;
                break e;
              }
              ve = E.return;
            }
          }
          if (bt = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Mt = l, sr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _u(l, r), r = Hv(n, r, 1), n = Nl(n, r, 1), r = Pn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Ld(r, n, 1), r = Nl(r, n, 1), n = Pn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (cr & l) === l && (kn === 4 || kn === 3 && (cr & 130023424) === cr && 500 > Ze() - Vd ? el(n, 0) : af |= l), ra(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Pn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function lh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var uh;
  uh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, _s(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, dn && r.flags & 1048576 && Ov(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = Kr(r, En.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, Jn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = bs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && xc(r), or(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ai(o, n), c) {
            case 0:
              r = Vv(null, r, o, n, l);
              break e;
            case 1:
              r = Bv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Vv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Bv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Mv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(L(423)), r), r = $v(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(L(424)), r), r = $v(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, Na = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = za(n, r, l);
              break e;
            }
            or(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return zv(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Md(n, r), or(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = bn(r, null, o, l) : or(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, xe(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Qn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var G = z.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(L(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          or(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Ma(c), o = o(c), r.flags |= 1, or(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return et(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Ua(n, r), r.tag = 1, Un(o) ? (n = !0, Jn(r)) : n = !1, yn(r, l), Xc(r, o, c), Rs(r, o, c, l), bs(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function oh(n, r) {
    return sn(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et) return 11;
      if (n === Ct) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ue:
        return tl(l.children, c, d, r);
      case It:
        m = 8, c |= 8;
        break;
      case Ot:
        return n = ja(12, l, r, c | 2), n.elementType = Ot, n.lanes = d, n;
      case _e:
        return n = ja(13, l, r, c), n.elementType = _e, n.lanes = d, n;
      case Lt:
        return n = ja(19, l, r, c), n.elementType = Lt, n.lanes = d, n;
      case Se:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Bt:
            m = 10;
            break e;
          case Yt:
            m = 9;
            break e;
          case Et:
            m = 11;
            break e;
          case Ct:
            m = 14;
            break e;
          case Rt:
            m = 16, o = null;
            break e;
        }
        throw Error(L(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Se, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: tt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (Je(n) !== n || n.tag !== 1) throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Un(l)) return os(n, l, r);
    }
    return r;
  }
  function ch(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Pn(), c = Li(l), d = qi(o, c), d.callback = r ?? null, Nl(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Pn(), m = Li(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Nl(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function fh() {
    return null;
  }
  var Uu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = qd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(L(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = qd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        ff(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ye();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = df(m);
          d.call(z);
        };
      }
      var m = ch(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = df(T);
        E.call(z);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = T, n[Qi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return df(m);
  }
  kt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, Ze()), !(bt & 6) && (To = Ze() + 500, Ti()));
        }
        break;
      case 13:
        Nu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Pn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Pn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Pn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Ye = function() {
    return Mt;
  }, Zu = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, Wt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(L(90));
              xr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, eu = $d, pl = Nu;
  var Sy = { usingClientEntryPoint: !1, Events: [ke, ni, mn, Hi, Zl, $d] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(ph), Qr = Vl;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(L(200));
    return yy(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(L(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new qd(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Nu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(L(200));
    return Ps(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = ch(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, $a.render = function(n, r, l) {
    if (!hf(r)) throw Error(L(200));
    return Ps(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(L(40));
    return n._reactRootContainer ? (Nu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = $d, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(L(200));
    if (n == null || n._reactInternals === void 0) throw Error(L(38));
    return Ps(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function rk() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var $ = Cn, I = oT(), L = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = !1;
    function He(e) {
      Qe = e;
    }
    function Pe(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ke("warn", e, a);
      }
    }
    function S(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ke("error", e, a);
      }
    }
    function Ke(e, t, a) {
      {
        var i = L.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ae = 0, te = 1, qe = 2, ee = 3, Ee = 4, le = 5, Ve = 6, gt = 7, st = 8, tn = 9, at = 10, $e = 11, ct = 12, Te = 13, tt = 14, Ue = 15, It = 16, Ot = 17, Bt = 18, Yt = 19, Et = 21, _e = 22, Lt = 23, Ct = 24, Rt = 25, Se = !0, J = !1, Re = !1, V = !1, w = !1, F = !0, Oe = !0, je = !0, ft = !0, it = /* @__PURE__ */ new Set(), nt = {}, lt = {};
    function dt(e, t) {
      $t(e, t), $t(e + "Capture", t);
    }
    function $t(e, t) {
      nt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nt[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        it.add(t[i]);
    }
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xr = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function $n(e, t) {
      if (rr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Yr(e) {
      if (rr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function ci(e, t) {
      if (rr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function sa(e, t) {
      if (rr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function qn(e) {
      if (rr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function Tn(e) {
      if (rr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    var In = 0, Sr = 1, Ya = 2, Nn = 3, Er = 4, ca = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ne = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", we = new RegExp("^[" + fi + "][" + ne + "]*$"), ut = {}, Ht = {};
    function nn(e) {
      return xr.call(Ht, e) ? !0 : xr.call(ut, e) ? !1 : we.test(e) ? (Ht[e] = !0, !0) : (ut[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === In)
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
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function rn(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Nn || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Wt = {}, fa = [
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
    fa.forEach(function(e) {
      Wt[e] = new Qt(
        e,
        In,
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
      Wt[t] = new Qt(
        t,
        Sr,
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
      Wt[e] = new Qt(
        e,
        Ya,
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
      Wt[e] = new Qt(
        e,
        Ya,
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
      Wt[e] = new Qt(
        e,
        Nn,
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
      Wt[e] = new Qt(
        e,
        Nn,
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
      Wt[e] = new Qt(
        e,
        Er,
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
      Wt[e] = new Qt(
        e,
        Qa,
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
      Wt[e] = new Qt(
        e,
        ca,
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
    var Cr = /[\-\:]([a-z])/g, wa = function(e) {
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
      var t = e.replace(Cr, wa);
      Wt[t] = new Qt(
        t,
        Sr,
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
      var t = e.replace(Cr, wa);
      Wt[t] = new Qt(
        t,
        Sr,
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
      var t = e.replace(Cr, wa);
      Wt[t] = new Qt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Qt(
        e,
        Sr,
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
    var Hi = "xlinkHref";
    Wt[Hi] = new Qt(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Qt(
        e,
        Sr,
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
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $n(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $n(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = rn(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : ($n(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === Nn || _ === Er && a === !0 ? b = "" : ($n(a, y), b = "" + a, u.sanitizeURL && pl(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var kr = Symbol.for("react.element"), ar = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), ht = Symbol.for("react.scope"), pt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ir = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, Ka = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[Ka];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, qa = 0, nu, ru, hl, Wu, ml, Qr, Yo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, Qr = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
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
        qa++;
      }
    }
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: nu
            }),
            info: rt({}, e, {
              value: ru
            }),
            warn: rt({}, e, {
              value: hl
            }),
            error: rt({}, e, {
              value: Wu
            }),
            group: rt({}, e, {
              value: ml
            }),
            groupCollapsed: rt({}, e, {
              value: Qr
            }),
            groupEnd: rt({}, e, {
              value: Yo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = L.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Ja;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new Ku();
    }
    function au(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
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
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", M = b ? da(b) : "";
      return typeof e == "function" && Ja.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function qu(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ue:
          return da("Suspense");
        case he:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return qu(e.render);
          case Je:
            return Pi(e.type, t, a);
          case We: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return da(e.type);
        case It:
          return da("Lazy");
        case Te:
          return da("Suspense");
        case Yt:
          return da("SuspenseList");
        case ae:
        case qe:
        case Ue:
          return qu(e.type);
        case $e:
          return qu(e.type.render);
        case te:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Qf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case ar:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ue:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case vi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case Y:
            return Mt(e, e.render, "ForwardRef");
          case Je:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case We: {
            var u = e, s = u._payload, f = u._init;
            try {
              return kt(f(s));
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
    function hi(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ct:
          return "Cache";
        case tn:
          var i = a;
          return hi(i) + ".Consumer";
        case at:
          var u = a;
          return hi(u._context) + ".Provider";
        case Bt:
          return "DehydratedFragment";
        case $e:
          return Qo(a, a.render, "ForwardRef");
        case gt:
          return "Fragment";
        case le:
          return a;
        case Ee:
          return "Portal";
        case ee:
          return "Root";
        case Ve:
          return "Text";
        case It:
          return kt(a);
        case st:
          return a === Wa ? "StrictMode" : "Mode";
        case _e:
          return "Offscreen";
        case ct:
          return "Profiler";
        case Et:
          return "Scope";
        case Te:
          return "Suspense";
        case Yt:
          return "SuspenseList";
        case Rt:
          return "TracingMarker";
        case te:
        case ae:
        case Ot:
        case qe:
        case tt:
        case Ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = L.ReactDebugCurrentFrame, lr = null, mi = !1;
    function Or() {
      {
        if (lr === null)
          return null;
        var e = lr._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function yi() {
      return lr === null ? "" : Vi(lr);
    }
    function cn() {
      Zu.getCurrentStack = null, lr = null, mi = !1;
    }
    function Gt(e) {
      Zu.getCurrentStack = e === null ? null : yi, lr = e, mi = !1;
    }
    function Sl() {
      return lr;
    }
    function Yn(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function ba(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Wf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xa(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      El(e) || (e._valueTracker = xa(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ba(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = ba(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, ba(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function U(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $n(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Lh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var ie = !1, ze = !1, mt = !1;
    function Dt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? $.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ze || (ze = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mt || (mt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ie && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ie = !0);
    }
    function ln(e, t) {
      t.value != null && e.setAttribute("value", Lr(ba(t.value)));
    }
    var Kt = Array.isArray;
    function ot(e) {
      return Kt(e);
    }
    var qt;
    qt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = ot(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(ba(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function qo(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ot(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ba(i)
      };
    }
    function tv(e, t) {
      var a = e, i = ba(t.value), u = ba(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      tv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Jf;
        default:
          return $i;
      }
    }
    function td(e, t) {
      return e == null || e === $i ? ed(t) : e === Zf && t === "foreignObject" ? $i : e;
    }
    var rv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, av = rv(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Ii = 3, Mn = 8, Yi = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
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
    }, Jo = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      lv.forEach(function(t) {
        Jo[iv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, ov = /^ms-/;
    function io(e) {
      return e.replace(uv, "-$1").toLowerCase().replace(ov, "-ms-");
    }
    var sv = function() {
    };
    {
      var Km = /^(?:webkit|moz|o)[A-Z]/, qm = /^-ms-/, cv = /-(.)/g, rd = /;\s*$/, Si = {}, su = {}, fv = !1, Zo = !1, Xm = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xm(e.replace(qm, "ms-"))
        ));
      }, ad = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, pv = function(e, t) {
        fv || (fv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : Km.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var hv = sv;
    function Jm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || hv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ey(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
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
    }, es = rt({
      menuitem: !0
    }, ti), gv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
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
    var ts = {
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
    }, dc = {
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
    }, lo = {}, ty = new RegExp("^(aria)-[" + ne + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ne + "]*$");
    function ld(e, t) {
      {
        if (xr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ty.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Tl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var ur = {}, sd = /^on./, vc = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + ne + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + ne + "]*$");
      cu = function(e, t, a, i) {
        if (xr.call(ur, t) && ur[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ur[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (sd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var v = rn(t), y = v !== null && v.type === In;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), ur[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ur[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ur[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (ur[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ur[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Tl(e, t) || Cv(e, t, a);
    }
    var cd = 1, hc = 2, ka = 4, fd = cd | hc | ka, fu = null;
    function ny(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ry() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var mc = null, du = null, Pt = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Lh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function Tv() {
      return du !== null || Pt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, wl = !1;
    function wv() {
      var e = Tv();
      e && (as(), Sc());
    }
    function bv(e, t, a) {
      if (wl)
        return e(t, a);
      wl = !0;
      try {
        return so(e, t, a);
      } finally {
        wl = !1, wv();
      }
    }
    function ay(e, t, a) {
      so = e, as = a;
    }
    function xv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
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
          return !!(a.disabled && xv(t));
        default:
          return !1;
      }
    }
    function bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Lh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (Ln)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          pd.removeEventListener(P, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          _ = !0, H(), a.apply(i, se), b = !1;
        }
        var be, _t = !1, St = !1;
        function D(O) {
          if (be = O.error, _t = !0, be === null && O.colno === 0 && O.lineno === 0 && (St = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(P, Ne, !1), g.initEvent(P, !1, !1), pd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), _ && b && (_t ? St && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", D), !_)
          return H(), Cc.apply(this, arguments);
      };
    }
    var _v = Rc, co = !1, Tc = null, fo = !1, Ei = null, kv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function xl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, _v.apply(kv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (xl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Qi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), wt = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), un = (
      /*                     */
      64
    ), xe = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Qn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), Kr = (
      /*                    */
      4096
    ), Un = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Jn = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), bc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      wt | Qn | 0
    ), Dl = mn | wt | Da | Oa | En | Kr | Un, Ol = wt | un | En | Un, Gi = Gr | Da, zn = Wi | bc | ho, La = L.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Kr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ee ? a : null;
    }
    function wi(e) {
      if (e.tag === Te) {
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
    function bi(e) {
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return pa(e) === e;
    }
    function Ov(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === te) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? pa(u) === u : !1;
    }
    function xc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return xc(s), e;
            if (v === u)
              return xc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = _c(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === le || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = _c(e);
      return t !== null ? Na(t) : null;
    }
    function Na(e) {
      if (e.tag === le || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ee) {
          var a = Na(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = I.unstable_scheduleCallback, Lv = I.unstable_cancelCallback, hd = I.unstable_shouldYield, md = I.unstable_requestPaint, Wn = I.unstable_now, kc = I.unstable_getCurrentPriorityLevel, ss = I.unstable_ImmediatePriority, Ll = I.unstable_UserBlockingPriority, Ki = I.unstable_NormalPriority, ly = I.unstable_LowPriority, mu = I.unstable_IdlePriority, Dc = I.unstable_yieldValue, Nv = I.unstable_setDisableYieldValue, yu = null, bn = null, oe = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Oe && (e = rt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Ma
        })), yu = t.inject(e), bn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xe) === xe;
          if (je) {
            var i;
            switch (t) {
              case Nr:
                i = ss;
                break;
              case _i:
                i = Ll;
                break;
              case Ua:
                i = Ki;
                break;
              case za:
                i = mu;
                break;
              default:
                i = Ki;
                break;
            }
            bn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (Nv(e), He(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Av(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Rd() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function ha(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ma() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Mv() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nl() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function xi(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function bd() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function zv() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Lc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function gn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Nc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), vt = (
      /*                 */
      1
    ), Ut = (
      /*                    */
      2
    ), Xt = (
      /*               */
      8
    ), zt = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : hs, Zn = Math.log, Mc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Mc | 0) | 0;
    }
    var Cu = 31, Q = (
      /*                        */
      0
    ), Nt = (
      /*                          */
      0
    ), Fe = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), xn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), Uc = (
      /*                        */
      128
    ), zc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Yc = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), xd = wu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), bu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function Av(e) {
      {
        if (e & Fe)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & xn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & bu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var en = -1, xu = Ru, Gc = wu;
    function Cs(e) {
      switch (zl(e)) {
        case Fe:
          return Fe;
        case Ml:
          return Ml;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case xn:
          return xn;
        case Xi:
          return Xi;
        case Ru:
        case Uc:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
          return e & Ul;
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case bu:
          return bu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Q) {
        var p = f & ~u;
        if (p !== Q)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Q && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Q ? i = Cs(y) : s !== Q && (i = Cs(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Q) {
        var g = zl(i), _ = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === xn && (_ & Ul) !== Q
        )
          return t;
      }
      (i & ri) !== Q && (i |= a & xn);
      var b = e.entangledLanes;
      if (b !== Q)
        for (var M = e.entanglements, A = i & b; A > 0; ) {
          var H = jn(A), se = 1 << H;
          i |= M[H], A &= ~se;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Fe:
        case Ml:
        case ri:
          return t + 250;
        case Tr:
        case xn:
        case Xi:
        case Ru:
        case Uc:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
          return t + 5e3;
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          return en;
        case Ss:
        case Es:
        case bu:
        case Zr:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === Q || (v & u) !== Q) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function jv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Q ? t : t & Zr ? Zr : Q;
    }
    function Fv(e) {
      return (e & Fe) !== Q;
    }
    function Rs(e) {
      return (e & _d) !== Q;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = Fe | ri | xn;
      return (e & t) === Q;
    }
    function Od(e) {
      return (e & Ul) === e;
    }
    function Jc(e, t) {
      var a = Ml | ri | Tr | xn;
      return (t & a) !== Q;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function Ld(e) {
      return (e & Ul) !== Q;
    }
    function Nd() {
      var e = xu;
      return xu <<= 1, (xu & Ul) === Q && (xu = Ru), e;
    }
    function Pv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Q && (Gc = wu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Ts(e) {
      return zl(e);
    }
    function jn(e) {
      return 31 - An(e);
    }
    function or(e) {
      return jn(e);
    }
    function ea(e, t) {
      return (e & t) !== Q;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Md(e, t) {
      return e & t;
    }
    function Vv(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== Nt && e < t ? e : t;
    }
    function bs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== bu && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, u = or(t);
      i[u] = a;
    }
    function $v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p;
        i[p] = Q, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function zd(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ri:
          i = Ml;
          break;
        case xn:
          i = Tr;
          break;
        case Ru:
        case Uc:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          i = Xi;
          break;
        case bu:
          i = Es;
          break;
        default:
          i = Nt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Nt ? Nt : i;
    }
    function xs(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = or(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Iv(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = or(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Nr = Fe, _i = ri, Ua = xn, za = bu, _s = Nt;
    function Aa() {
      return _s;
    }
    function Fn(e) {
      _s = e;
    }
    function Yv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = zl(e);
      return er(Nr, t) ? er(_i, t) ? Rs(t) ? Ua : za : _i : Nr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function wr(e) {
      Ds = e;
    }
    function uy(e) {
      Ds(e);
    }
    var ve;
    function Eo(e) {
      ve = e;
    }
    var nf;
    function Gv(e) {
      nf = e;
    }
    var Kv;
    function Os(e) {
      Kv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ns = [], Ji = null, ki = null, Di = null, _n = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Ur = [], qv = [
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
    function Xv(e) {
      return qv.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function oy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ta(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return _n.set(y, ta(_n.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Mr.set(_, ta(Mr.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = wi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === ee) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = bi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jv(e) {
      for (var t = Kv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ur.length && er(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ms(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = Do(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ms(e) && a.delete(t);
    }
    function sy() {
      rf = !1, Ji !== null && Ms(Ji) && (Ji = null), ki !== null && Ms(ki) && (ki = null), Di !== null && Ms(Di) && (Di = null), _n.forEach(Pd), Mr.forEach(Pd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, sy)));
    }
    function Du(e) {
      if (Ns.length > 0) {
        Al(Ns[0], e);
        for (var t = 1; t < Ns.length; t++) {
          var a = Ns[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      _n.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Ur.length; u++) {
        var s = Ur[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var f = Ur[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Ur.shift();
      }
    }
    var sr = L.ReactCurrentBatchConfig, bt = !0;
    function Gn(e) {
      bt = !!e;
    }
    function Hn() {
      return bt;
    }
    function cr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Nr:
          u = ya;
          break;
        case _i:
          u = Co;
          break;
        case Ua:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(Nr), kn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(_i), kn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function kn(e, t, a, i) {
      bt && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        xy(e, t, i, Oi, a), Fd(e, i);
        return;
      }
      if (oy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & ka && Xv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && uy(s);
          var f = Ro(e, t, a, i);
          if (f === null && xy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      xy(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = dd(i), s = Is(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = wi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (tf(y))
              return bi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function af(e) {
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
          return Nr;
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
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Nr;
            case Ll:
              return _i;
            case Ki:
            case ly:
              return Ua;
            case mu:
              return za;
            default:
              return Ua;
          }
        }
        default:
          return Ua;
      }
    }
    function zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, wo = null, Ou = null;
    function jl(e) {
      return ga = e, wo = As(), !0;
    }
    function lf() {
      ga = null, wo = null, Ou = null;
    }
    function Zi() {
      if (Ou)
        return Ou;
      var e, t = wo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function br(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = bo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
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
        isPersistent: bo
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = br(Pn), zr = rt({}, Pn, {
      view: 0,
      detail: 0
    }), ra = br(zr), uf, Fs, Lu;
    function cy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var li = rt({}, zr, {
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
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = br(li), $d = rt({}, li, {
      dataTransfer: 0
    }), Nu = br($d), Id = rt({}, zr, {
      relatedTarget: 0
    }), el = br(Id), Zv = rt({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eh = br(Zv), Yd = rt({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = br(Yd), fy = rt({}, Pn, {
      data: 0
    }), th = br(fy), nh = th, rh = {
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
    }, Mu = {
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
    function dy(e) {
      if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var xo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ah(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = xo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ah;
    }
    var py = rt({}, zr, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ih = br(py), vy = rt({}, li, {
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
    }), lh = br(vy), uh = rt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), oh = br(uh), hy = rt({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = br(hy), Qd = rt({}, li, {
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
    }), my = br(Qd), Hl = [9, 13, 27, 32], Hs = 229, tl = Ln && "CompositionEvent" in window, Pl = null;
    Ln && "documentMode" in document && (Pl = document.documentMode);
    var Wd = Ln && "TextEvent" in window && !Pl, sf = Ln && (!tl || Pl && Pl > 8 && Pl <= 11), sh = 32, cf = String.fromCharCode(sh);
    function yy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function ch(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function fh(e) {
      return e.locale === "ko";
    }
    var Uu = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : Uu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !fh(i) && (!Uu && s === "onCompositionStart" ? Uu = jl(u) : s === "onCompositionEnd" && Uu && (f = Zi()));
      var p = gh(a, s);
      if (p.length > 0) {
        var v = new th(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== sh ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Xd(e, t) {
      if (Uu) {
        if (e === "compositionend" || !tl && Kd(e, t)) {
          var a = Zi();
          return lf(), Uu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ch(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !fh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Wd ? s = vf(t, i) : s = Xd(t, i), !s)
        return null;
      var f = gh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new nh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function dh(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var gy = {
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
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
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
    function Sy(e) {
      if (!Ln)
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
    function ph(e, t, a, i) {
      oo(i);
      var u = gh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      ph(t, n, e, dd(e)), bv(o, t);
    }
    function o(e) {
      kE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Ln && (m = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", z);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", z), Vl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ce(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = me : (v = q, y = G) : W(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          ph(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ce(p);
    }
    function k() {
      $t("onMouseEnter", ["mouseout", "mouseover"]), $t("onMouseLeave", ["mouseout", "mouseover"]), $t("onPointerEnter", ["pointerout", "pointerover"]), $t("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function x(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var b, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (b = a, M = A ? Is(A) : null, M !== null) {
            var H = pa(M);
            (M !== H || M.tag !== le && M.tag !== Ve) && (M = null);
          }
        } else
          b = null, M = a;
        if (b !== M) {
          var se = Bd, Ne = "onMouseLeave", be = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = lh, Ne = "onPointerLeave", be = "onPointerEnter", _t = "pointer");
          var St = b == null ? g : Cf(b), D = M == null ? g : Cf(M), P = new se(Ne, _t + "leave", b, i, u);
          P.target = St, P.relatedTarget = D;
          var O = null, X = Is(u);
          if (X === a) {
            var pe = new se(be, _t + "enter", M, i, u);
            pe.target = D, pe.relatedTarget = St, O = pe;
          }
          kT(e, P, O, b, M);
        }
      }
    }
    function N(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var K = typeof Object.is == "function" ? Object.is : N;
    function ye(e, t) {
      if (K(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!xr.call(t, s) || !K(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ae(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ie(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(Ae(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return At(e, u, s, f, p);
    }
    function At(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var b = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
          _ = g, g = b;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ie(e, f), g = Ie(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vh(e) {
      return e && e.nodeType === Ii;
    }
    function yE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vh(e) ? !1 : vh(t) ? yE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && yE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function gE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = gE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = gE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Ey(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var mT = Ln && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Cy = null, Jd = null, Ry = !1;
    function gT(e) {
      if ("selectionStart" in e && Ey(e))
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function SE(e, t, a) {
      var i = ST(a);
      if (!(Ry || mf == null || mf !== _a(i))) {
        var u = gT(mf);
        if (!Jd || !ye(Jd, u)) {
          Jd = u;
          var s = gh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Cy = a, Jd = null);
          break;
        case "focusout":
          mf = null, Cy = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, SE(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          SE(e, i, u);
      }
    }
    function hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: hh("Animation", "AnimationEnd"),
      animationiteration: hh("Animation", "AnimationIteration"),
      animationstart: hh("Animation", "AnimationStart"),
      transitionend: hh("Transition", "TransitionEnd")
    }, Ty = {}, EE = {};
    Ln && (EE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function mh(e) {
      if (Ty[e])
        return Ty[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in EE)
          return Ty[e] = t[a];
      return e;
    }
    var CE = mh("animationend"), RE = mh("animationiteration"), TE = mh("animationstart"), wE = mh("transitionend"), bE = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      bE.set(e, t), dt(t, [e]);
    }
    function CT() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(CE, "onAnimationEnd"), _o(RE, "onAnimationIteration"), _o(TE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(wE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = bE.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ih;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
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
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = oh;
            break;
          case CE:
          case RE:
          case TE:
            v = eh;
            break;
          case wE:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = my;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = lh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = xT(a, p, i.type, g, _);
          if (b.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: b
            });
          }
        }
      }
    }
    CT(), k(), Vs(), yT(), yy();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (x(e, t, a, i, u), Dn(e, t, a, i, u), ET(e, t, a, i, u), dh(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function _E(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _E(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          _E(e, M, b), i = _;
        }
    }
    function kE(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wT(s, f, a);
      }
      ls();
    }
    function bT(e, t, a, i, u) {
      var s = dd(a), f = [];
      TT(f, e, i, a, s, t), kE(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = DT(e);
      i.has(u) || (DE(t, e, hc, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), DE(a, e, i, t);
    }
    var yh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[yh]) {
        e[yh] = !0, it.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[yh] || (t[yh] = !0, by("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = cr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : na(e, t, s) : f !== void 0 ? To(e, t, s, f) : zs(e, t, s);
    }
    function OE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function xy(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ee || v === Ee) {
              var y = p.stateNode.containerInfo;
              if (OE(y, f))
                break;
              if (v === Ee)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === ee || _ === Ee) {
                    var b = g.stateNode.containerInfo;
                    if (OE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Is(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === le || A === Ve) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return bT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, M = _.tag;
        if (M === le && b !== null && (g = b, p !== null)) {
          var A = bl(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function gh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, y = bl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = bl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function _T(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function LE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === le && g !== null) {
          var b = g;
          if (u) {
            var M = bl(p, s);
            M != null && f.unshift(tp(p, M, b));
          } else if (!u) {
            var A = bl(p, s);
            A != null && f.push(tp(p, A, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? _T(i, u) : null;
      i !== null && LE(e, t, i, s, !1), u !== null && a !== null && LE(e, a, u, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, np = "dangerouslySetInnerHTML", Sh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", NE = "autoFocus", Bs = "children", $s = "style", Eh = "__html", _y, Ch, rp, ME, Rh, UE, zE;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ch = function(e, t) {
      ud(e, t), pc(e, t), Rv(e, t, {
        registrationNameDependencies: nt,
        possibleRegistrationNames: lt
      });
    }, UE = Ln && !document.documentMode, rp = function(e, t, a) {
      if (!Fa) {
        var i = Th(a), u = Th(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, ME = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Rh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, zE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function Th(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function wh(e, t, a, i) {
      var u = Th(t), s = Th(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function AE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function NT() {
    }
    function bh(e) {
      e.onclick = NT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), mv(t, f);
          else if (s === np) {
            var p = f ? f[Eh] : void 0;
            p != null && av(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Sh || s === ko || s === NE || (nt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function UT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? mv(e, f) : s === np ? av(e, f) : s === Bs ? ao(e, f) : _r(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = AE(a), f, p = i;
      if (p === $i && (p = ed(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !xr.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return AE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = Tl(t, a);
      Ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Sn(Zd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          Dt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), s = qf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Za(e), U(e, a, !1);
          break;
        case "textarea":
          Za(e), nv(e);
          break;
        case "option":
          ln(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function FT(e, t, a, i, u) {
      Ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Sh || v === ko || v === NE || (nt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === M || b == null && M == null))
          if (v === $s)
            if (b && Object.freeze(b), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && M[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === np) {
            var A = b ? b[Eh] : void 0, H = M ? M[Eh] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === Sh || v === ko || (nt.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Rh(v, b), v === "onScroll" && Sn("scroll", e)), !s && M !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (ey(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (UT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function PT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function VT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Ch(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Sn(Zd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          Dt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var b = g[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var H = a[A];
          if (A === Bs)
            typeof H == "string" ? e.textContent !== H && (a[ko] !== !0 && wh(e.textContent, H, s, f), M = [Bs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[ko] !== !0 && wh(e.textContent, H, s, f), M = [Bs, "" + H]);
          else if (nt.hasOwnProperty(A))
            H != null && (typeof H != "function" && Rh(A, H), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ne = rn(A);
            if (a[ko] !== !0) {
              if (!(A === Sh || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var be = e.innerHTML, _t = H ? H[Eh] : void 0;
                  if (_t != null) {
                    var St = zE(e, _t);
                    St !== be && rp(A, be, St);
                  }
                } else if (A === $s) {
                  if (v.delete(A), UE) {
                    var D = Jm(H);
                    se = e.getAttribute("style"), D !== se && rp(A, se, D);
                  }
                } else if (p && !w)
                  v.delete(A.toLowerCase()), se = tu(e, A, H), H !== se && rp(A, se, H);
                else if (!vn(A, Ne, p) && !Xn(A, H, Ne, p)) {
                  var P = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), se = vl(e, A, H, Ne);
                  else {
                    var O = i;
                    if (O === $i && (O = ed(t)), O === $i)
                      v.delete(A.toLowerCase());
                    else {
                      var X = PT(A);
                      X !== null && X !== A && (P = !0, v.delete(X)), v.delete(A);
                    }
                    se = tu(e, A, H);
                  }
                  var pe = w;
                  !pe && H !== se && !P && rp(A, se, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && ME(v), t) {
        case "input":
          Za(e), U(e, a, !0);
          break;
        case "textarea":
          Za(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return M;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var IT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
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
      ], YT = jE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = rt({}, e || FE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, HE = {};
      ap = function(e, t, a) {
        a = a || FE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!HE[y]) {
            HE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var xh = "suppressHydrationWarning", _h = "$", kh = "/$", lp = "$?", up = "$!", KT = "style", Ny = null, My = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case nd: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pk(e) {
      return e;
    }
    function JT(e) {
      Ny = Hn(), My = dT();
      var t = null;
      return Gn(!1), t;
    }
    function ZT(e) {
      pT(My), Gn(Ny), Ny = null, My = null;
    }
    function e1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = zT(e, t, a, s);
      return cp(u, y), Vy(y, t), y;
    }
    function t1(e, t) {
      e.appendChild(t);
    }
    function n1(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
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
    function r1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return FT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function a1(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return cp(i, s), s;
    }
    function i1() {
      var e = window.event;
      return e === void 0 ? Ua : af(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, PE = typeof Promise == "function" ? Promise : void 0, u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(o1);
    } : zy;
    function o1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s1(e, t, a, i) {
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
    function c1(e, t, a, i, u, s) {
      HT(e, t, a, i, u), Vy(e, u);
    }
    function VE(e) {
      ao(e, "");
    }
    function f1(e, t, a) {
      e.nodeValue = a;
    }
    function d1(e, t) {
      e.appendChild(t);
    }
    function p1(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function v1(e, t, a) {
      e.insertBefore(t, a);
    }
    function h1(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function m1(e, t) {
      e.removeChild(t);
    }
    function y1(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === kh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === _h || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function g1(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === Wr && jy(e, t), Du(e);
    }
    function S1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function E1(e) {
      e.nodeValue = "";
    }
    function C1(e, t) {
      e = e;
      var a = t[KT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function R1(e, t) {
      e.nodeValue = t;
    }
    function T1(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function w1(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function b1(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function x1(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function BE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function _1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function k1(e, t) {
      e._reactRetry = t;
    }
    function Dh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === _h || a === up || a === lp)
            break;
          if (a === kh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Dh(e.nextSibling);
    }
    function D1(e) {
      return Dh(e.firstChild);
    }
    function O1(e) {
      return Dh(e.firstChild);
    }
    function L1(e) {
      return Dh(e.nextSibling);
    }
    function N1(e, t, a, i, u, s, f) {
      cp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & vt) !== De;
      return VT(e, t, a, p, i, y, f);
    }
    function M1(e, t, a, i) {
      return cp(a, e), a.mode & vt, BT(e, t);
    }
    function U1(e, t) {
      cp(t, e);
    }
    function z1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === kh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === _h || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $E(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === _h || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function A1(e) {
      Du(e);
    }
    function j1(e) {
      Du(e);
    }
    function F1(e) {
      return e !== "head" && e !== "body";
    }
    function H1(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function P1(e, t, a, i, u, s) {
      if (t[xh] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function V1(e, t) {
      t.nodeType === Wr ? ky(e, t) : t.nodeType === Mn || Dy(e, t);
    }
    function B1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? ky(a, t) : t.nodeType === Mn || Dy(a, t));
      }
    }
    function $1(e, t, a, i, u) {
      (u || t[xh] !== !0) && (i.nodeType === Wr ? ky(a, i) : i.nodeType === Mn || Dy(a, i));
    }
    function I1(e, t, a) {
      Oy(e, t);
    }
    function Y1(e, t) {
      Ly(e, t);
    }
    function Q1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function W1(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function G1(e, t, a, i, u, s) {
      (s || t[xh] !== !0) && Oy(a, i);
    }
    function K1(e, t, a, i, u) {
      (u || t[xh] !== !0) && Ly(a, i);
    }
    function q1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function X1(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Hy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Py = "__reactEvents$" + Sf, J1 = "__reactListeners$" + Sf, Z1 = "__reactHandles$" + Sf;
    function ew(e) {
      delete e[Ef], delete e[Hy], delete e[Py], delete e[J1], delete e[Z1];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Oh(e, t) {
      t[sp] = e;
    }
    function IE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Is(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = $E(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = $E(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === le || t.tag === Ve || t.tag === Te || t.tag === ee) ? t : null;
    }
    function Cf(e) {
      if (e.tag === le || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function tw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var YE = {}, QE = L.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        QE.setExtraStackFrame(a);
      } else
        QE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(xr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in YE) && (YE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], Mh;
    Mh = [];
    var zu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Mh[zu] && S("Unexpected Fiber popped."), e.current = By[zu], By[zu] = null, Mh[zu] = null, zu--;
    }
    function ia(e, t, a) {
      zu++, By[zu] = e.current, Mh[zu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Oo(ui), $l = Oo(!1), Iy = ui;
    function Rf(e, t, a) {
      return a && Il(t) ? Iy : Au.current;
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && WE(e, t, s), s;
      }
    }
    function Uh() {
      return $l.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zh(e) {
      aa($l, e), aa(Au, e);
    }
    function Yy(e) {
      aa($l, e), aa(Au, e);
    }
    function GE(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Au, t, e), ia($l, a, e);
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Iy = Au.current, ia(Au, a, e), ia($l, $l.current, e), !0;
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = KE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, aa($l, e), aa(Au, e), ia(Au, u, e), ia($l, a, e);
        } else
          aa($l, e), ia($l, a, e);
      }
    }
    function nw(e) {
      {
        if (!hu(e) || e.tag !== te)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ee:
              return t.stateNode.context;
            case te: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, jh = 1, ju = null, Qy = !1, Wy = !1;
    function XE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function rw(e) {
      Qy = !0, XE(e);
    }
    function JE() {
      Qy && No();
    }
    function No() {
      if (!Wy && ju !== null) {
        Wy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = ju;
          for (Fn(Nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Qy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), vd(ss, No), s;
        } finally {
          Fn(t), Wy = !1;
        }
      }
      return null;
    }
    var wf = [], bf = 0, Fh = null, Hh = 0, Ni = [], Mi = 0, Ys = null, Fu = 1, Hu = "";
    function aw(e) {
      return Ws(), (e.flags & Ri) !== ke;
    }
    function iw(e) {
      return Ws(), Hh;
    }
    function lw() {
      var e = Hu, t = Fu, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), wf[bf++] = Hh, wf[bf++] = Fh, Fh = e, Hh = t;
    }
    function ZE(e, t, a) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = Ys, Ys = e;
      var i = Fu, u = Hu, s = Ph(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ph(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, M = s - y, A = Ph(t) + M, H = p << M, se = H | b, Ne = _ + u;
        Fu = 1 << A | se, Hu = Ne;
      } else {
        var be = p << s, _t = be | f, St = u;
        Fu = 1 << v | _t, Hu = St;
      }
    }
    function Gy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), ZE(e, a, i);
      }
    }
    function Ph(e) {
      return 32 - An(e);
    }
    function uw(e) {
      return 1 << Ph(e) - 1;
    }
    function Ky(e) {
      for (; e === Fh; )
        Fh = wf[--bf], wf[bf] = null, Hh = wf[--bf], wf[bf] = null;
      for (; e === Ys; )
        Ys = Ni[--Mi], Ni[Mi] = null, Hu = Ni[--Mi], Ni[Mi] = null, Fu = Ni[--Mi], Ni[Mi] = null;
    }
    function ow() {
      return Ws(), Ys !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function sw(e, t) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = Ys, Fu = t.id, Hu = t.overflow, Ys = e;
    }
    function Ws() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, Ui = null, rl = !1, Gs = !1, Mo = null;
    function cw() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eC() {
      Gs = !0;
    }
    function fw() {
      return Gs;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return Ui = O1(t), Ar = e, rl = !0, Mo = null, Gs = !1, !0;
    }
    function pw(e, t, a) {
      return Ui = L1(t), Ar = e, rl = !0, Mo = null, Gs = !1, a !== null && sw(e, a), !0;
    }
    function tC(e, t) {
      switch (e.tag) {
        case ee: {
          V1(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & vt) !== De;
          $1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && B1(i.dehydrated, t);
          break;
        }
      }
    }
    function nC(e, t) {
      tC(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, I1(a, i);
                break;
              case Ve:
                var u = t.pendingProps;
                Y1(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & vt) !== De;
                G1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ve: {
                var _ = t.pendingProps, b = (e.mode & vt) !== De;
                K1(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case le:
                var H = t.type;
                t.pendingProps, Q1(A, H);
                break;
              case Ve:
                var se = t.pendingProps;
                W1(A, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rC(e, t) {
      t.flags = t.flags & ~Kr | mn, qy(e, t);
    }
    function aC(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = w1(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, Ui = D1(i), !0) : !1;
        }
        case Ve: {
          var u = e.pendingProps, s = b1(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, Ui = null, !0) : !1;
        }
        case Te: {
          var f = x1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Ar = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & vt) !== De && (e.flags & xe) === ke;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (rl) {
        var t = Ui;
        if (!t) {
          Xy(e) && (qy(Ar, e), Jy()), rC(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aC(e, t)) {
          Xy(e) && (qy(Ar, e), Jy()), t = op(a);
          var i = Ar;
          if (!t || !aC(e, t)) {
            rC(Ar, e), rl = !1, Ar = e;
            return;
          }
          nC(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !Gs, s = N1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = M1(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & vt) !== De;
              H1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & vt) !== De;
              P1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      U1(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return z1(a);
    }
    function iC(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== ee && t.tag !== Te; )
        t = t.return;
      Ar = t;
    }
    function Vh(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return iC(e), rl = !0, !1;
      if (e.tag !== ee && (e.tag !== le || F1(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (Xy(e))
            lC(e), Jy();
          else
            for (; t; )
              nC(e, t), t = op(t);
      }
      return iC(e), e.tag === Te ? Ui = yw(e) : Ui = Ar ? op(e.stateNode) : null, !0;
    }
    function gw() {
      return rl && Ui !== null;
    }
    function lC(e) {
      for (var t = Ui; t; )
        tC(e, t), t = op(t);
    }
    function xf() {
      Ar = null, Ui = null, rl = !1, Gs = !1;
    }
    function uC() {
      Mo !== null && (eR(Mo), Mo = null);
    }
    function jr() {
      return rl;
    }
    function eg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var Sw = L.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
    }
    var al = {
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
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Xt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Xt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Xt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Xt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          e.add(Ye(b) || "Component"), qs.add(b.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          t.add(Ye(b) || "Component"), qs.add(b.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          a.add(Ye(b) || "Component"), qs.add(b.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          i.add(Ye(b) || "Component"), qs.add(b.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          u.add(Ye(b) || "Component"), qs.add(b.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(b) {
          s.add(Ye(b) || "Component"), qs.add(b.type);
        }), yp = []), t.size > 0) {
          var f = Ks(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          Pe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          Pe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Ks(u);
          Pe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Bh = /* @__PURE__ */ new Map(), oC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oC.has(e.type)) {
          var i = Bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), oC.add(s.type);
            });
            var u = Ks(i);
            try {
              Gt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Bh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, sC = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, sC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Xt || F) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== te)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var b = v.refs;
            _ === null ? delete b[y] : b[y] = _;
          };
          return g._stringRef = y, g;
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
    function $h(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = Ye(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fC(e) {
      function t(D, P) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [P], D.flags |= Da) : O.push(P);
        }
      }
      function a(D, P) {
        if (!e)
          return null;
        for (var O = P; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, P) {
        for (var O = /* @__PURE__ */ new Map(), X = P; X !== null; )
          X.key !== null ? O.set(X.key, X) : O.set(X.index, X), X = X.sibling;
        return O;
      }
      function u(D, P) {
        var O = ic(D, P);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, P, O) {
        if (D.index = O, !e)
          return D.flags |= Ri, P;
        var X = D.alternate;
        if (X !== null) {
          var pe = X.index;
          return pe < P ? (D.flags |= mn, P) : pe;
        } else
          return D.flags |= mn, P;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, P, O, X) {
        if (P === null || P.tag !== Ve) {
          var pe = eE(O, D.mode, X);
          return pe.return = D, pe;
        } else {
          var ce = u(P, O);
          return ce.return = D, ce;
        }
      }
      function v(D, P, O, X) {
        var pe = O.type;
        if (pe === di)
          return g(D, P, O.props.children, X, O.key);
        if (P !== null && (P.elementType === pe || // Keep this check inline so it only runs on the false path:
        mR(P, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === We && cC(pe) === P.type)) {
          var ce = u(P, O.props);
          return ce.ref = gp(D, P, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var Be = ZS(O, D.mode, X);
        return Be.ref = gp(D, P, O), Be.return = D, Be;
      }
      function y(D, P, O, X) {
        if (P === null || P.tag !== Ee || P.stateNode.containerInfo !== O.containerInfo || P.stateNode.implementation !== O.implementation) {
          var pe = tE(O, D.mode, X);
          return pe.return = D, pe;
        } else {
          var ce = u(P, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, P, O, X, pe) {
        if (P === null || P.tag !== gt) {
          var ce = Io(O, D.mode, X, pe);
          return ce.return = D, ce;
        } else {
          var Be = u(P, O);
          return Be.return = D, Be;
        }
      }
      function _(D, P, O) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var X = eE("" + P, D.mode, O);
          return X.return = D, X;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case kr: {
              var pe = ZS(P, D.mode, O);
              return pe.ref = gp(D, null, P), pe.return = D, pe;
            }
            case ar: {
              var ce = tE(P, D.mode, O);
              return ce.return = D, ce;
            }
            case We: {
              var Be = P._payload, Xe = P._init;
              return _(D, Xe(Be), O);
            }
          }
          if (ot(P) || Ze(P)) {
            var Zt = Io(P, D.mode, O, null);
            return Zt.return = D, Zt;
          }
          $h(D, P);
        }
        return typeof P == "function" && Ih(D), null;
      }
      function b(D, P, O, X) {
        var pe = P !== null ? P.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(D, P, "" + O, X);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return O.key === pe ? v(D, P, O, X) : null;
            case ar:
              return O.key === pe ? y(D, P, O, X) : null;
            case We: {
              var ce = O._payload, Be = O._init;
              return b(D, P, Be(ce), X);
            }
          }
          if (ot(O) || Ze(O))
            return pe !== null ? null : g(D, P, O, X, null);
          $h(D, O);
        }
        return typeof O == "function" && Ih(D), null;
      }
      function M(D, P, O, X, pe) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = D.get(O) || null;
          return p(P, ce, "" + X, pe);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case kr: {
              var Be = D.get(X.key === null ? O : X.key) || null;
              return v(P, Be, X, pe);
            }
            case ar: {
              var Xe = D.get(X.key === null ? O : X.key) || null;
              return y(P, Xe, X, pe);
            }
            case We:
              var Zt = X._payload, jt = X._init;
              return M(D, P, O, jt(Zt), pe);
          }
          if (ot(X) || Ze(X)) {
            var Kn = D.get(O) || null;
            return g(P, Kn, X, pe, null);
          }
          $h(P, X);
        }
        return typeof X == "function" && Ih(P), null;
      }
      function A(D, P, O) {
        {
          if (typeof D != "object" || D === null)
            return P;
          switch (D.$$typeof) {
            case kr:
            case ar:
              sC(D, O);
              var X = D.key;
              if (typeof X != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(X);
                break;
              }
              if (!P.has(X)) {
                P.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case We:
              var pe = D._payload, ce = D._init;
              A(ce(pe), P, O);
              break;
          }
        }
        return P;
      }
      function H(D, P, O, X) {
        for (var pe = null, ce = 0; ce < O.length; ce++) {
          var Be = O[ce];
          pe = A(Be, pe, D);
        }
        for (var Xe = null, Zt = null, jt = P, Kn = 0, Ft = 0, Vn = null; jt !== null && Ft < O.length; Ft++) {
          jt.index > Ft ? (Vn = jt, jt = null) : Vn = jt.sibling;
          var ua = b(D, jt, O[Ft], X);
          if (ua === null) {
            jt === null && (jt = Vn);
            break;
          }
          e && jt && ua.alternate === null && t(D, jt), Kn = s(ua, Kn, Ft), Zt === null ? Xe = ua : Zt.sibling = ua, Zt = ua, jt = Vn;
        }
        if (Ft === O.length) {
          if (a(D, jt), jr()) {
            var Ir = Ft;
            Qs(D, Ir);
          }
          return Xe;
        }
        if (jt === null) {
          for (; Ft < O.length; Ft++) {
            var si = _(D, O[Ft], X);
            si !== null && (Kn = s(si, Kn, Ft), Zt === null ? Xe = si : Zt.sibling = si, Zt = si);
          }
          if (jr()) {
            var Ra = Ft;
            Qs(D, Ra);
          }
          return Xe;
        }
        for (var Ta = i(D, jt); Ft < O.length; Ft++) {
          var oa = M(Ta, D, Ft, O[Ft], X);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? Ft : oa.key), Kn = s(oa, Kn, Ft), Zt === null ? Xe = oa : Zt.sibling = oa, Zt = oa);
        }
        if (e && Ta.forEach(function(Yf) {
          return t(D, Yf);
        }), jr()) {
          var Qu = Ft;
          Qs(D, Qu);
        }
        return Xe;
      }
      function se(D, P, O, X) {
        var pe = Ze(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === pe && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var ce = pe.call(O);
          if (ce)
            for (var Be = null, Xe = ce.next(); !Xe.done; Xe = ce.next()) {
              var Zt = Xe.value;
              Be = A(Zt, Be, D);
            }
        }
        var jt = pe.call(O);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, Ft = null, Vn = P, ua = 0, Ir = 0, si = null, Ra = jt.next(); Vn !== null && !Ra.done; Ir++, Ra = jt.next()) {
          Vn.index > Ir ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ta = b(D, Vn, Ra.value, X);
          if (Ta === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ta.alternate === null && t(D, Vn), ua = s(Ta, ua, Ir), Ft === null ? Kn = Ta : Ft.sibling = Ta, Ft = Ta, Vn = si;
        }
        if (Ra.done) {
          if (a(D, Vn), jr()) {
            var oa = Ir;
            Qs(D, oa);
          }
          return Kn;
        }
        if (Vn === null) {
          for (; !Ra.done; Ir++, Ra = jt.next()) {
            var Qu = _(D, Ra.value, X);
            Qu !== null && (ua = s(Qu, ua, Ir), Ft === null ? Kn = Qu : Ft.sibling = Qu, Ft = Qu);
          }
          if (jr()) {
            var Yf = Ir;
            Qs(D, Yf);
          }
          return Kn;
        }
        for (var qp = i(D, Vn); !Ra.done; Ir++, Ra = jt.next()) {
          var Jl = M(qp, D, Ir, Ra.value, X);
          Jl !== null && (e && Jl.alternate !== null && qp.delete(Jl.key === null ? Ir : Jl.key), ua = s(Jl, ua, Ir), Ft === null ? Kn = Jl : Ft.sibling = Jl, Ft = Jl);
        }
        if (e && qp.forEach(function(K_) {
          return t(D, K_);
        }), jr()) {
          var G_ = Ir;
          Qs(D, G_);
        }
        return Kn;
      }
      function Ne(D, P, O, X) {
        if (P !== null && P.tag === Ve) {
          a(D, P.sibling);
          var pe = u(P, O);
          return pe.return = D, pe;
        }
        a(D, P);
        var ce = eE(O, D.mode, X);
        return ce.return = D, ce;
      }
      function be(D, P, O, X) {
        for (var pe = O.key, ce = P; ce !== null; ) {
          if (ce.key === pe) {
            var Be = O.type;
            if (Be === di) {
              if (ce.tag === gt) {
                a(D, ce.sibling);
                var Xe = u(ce, O.props.children);
                return Xe.return = D, Xe._debugSource = O._source, Xe._debugOwner = O._owner, Xe;
              }
            } else if (ce.elementType === Be || // Keep this check inline so it only runs on the false path:
            mR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === We && cC(Be) === ce.type) {
              a(D, ce.sibling);
              var Zt = u(ce, O.props);
              return Zt.ref = gp(D, ce, O), Zt.return = D, Zt._debugSource = O._source, Zt._debugOwner = O._owner, Zt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === di) {
          var jt = Io(O.props.children, D.mode, X, O.key);
          return jt.return = D, jt;
        } else {
          var Kn = ZS(O, D.mode, X);
          return Kn.ref = gp(D, P, O), Kn.return = D, Kn;
        }
      }
      function _t(D, P, O, X) {
        for (var pe = O.key, ce = P; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === Ee && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var Be = u(ce, O.children || []);
              return Be.return = D, Be;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Xe = tE(O, D.mode, X);
        return Xe.return = D, Xe;
      }
      function St(D, P, O, X) {
        var pe = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return f(be(D, P, O, X));
            case ar:
              return f(_t(D, P, O, X));
            case We:
              var ce = O._payload, Be = O._init;
              return St(D, P, Be(ce), X);
          }
          if (ot(O))
            return H(D, P, O, X);
          if (Ze(O))
            return se(D, P, O, X);
          $h(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ne(D, P, "" + O, X)) : (typeof O == "function" && Ih(D), a(D, P));
      }
      return St;
    }
    var _f = fC(!0), dC = fC(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bw(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Yh = null, kf = null, og = null, Qh = !1;
    function Wh() {
      Yh = null, kf = null, og = null, Qh = !1;
    }
    function pC() {
      Qh = !0;
    }
    function vC() {
      Qh = !1;
    }
    function hC(e, t, a) {
      ia(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      aa(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      _w(e, t, a);
    }
    function _w(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = Ts(a), v = Pu(en, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = et(b.lanes, a)), cg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Bt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = et(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = et(A.lanes, a)), cg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Yh = e, kf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function nr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Yh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Yh.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function kw() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function mC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function Dw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function Ha(e, t) {
      return Gh(e, t);
    }
    var Lw = Gh;
    function Gh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (mn | Kr)) !== ke && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (mn | Kr)) !== ke && dR(e), i = u, u = u.return;
      if (i.tag === ee) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yC = 0, gC = 1, Kh = 2, dg = 3, qh = !1, pg, Xh;
    pg = !1, Xh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yC,
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
      var u = i.shared;
      if (Xh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Dx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Md(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Nw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gC: {
          var f = a.payload;
          if (typeof f == "function") {
            pC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Xt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              vC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Jn | xe;
        case yC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pC(), y = v.call(s, i, u);
            {
              if (e.mode & Xt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              vC();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Kh:
          return qh = !0, i;
      }
      return i;
    }
    function Zh(e, t, a, i) {
      var u = e.updateQueue;
      qh = !1, Xh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = Q, H = null, se = null, Ne = null, be = s;
        do {
          var _t = be.lane, St = be.eventTime;
          if (ku(i, _t)) {
            if (Ne !== null) {
              var P = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ne = Ne.next = P;
            }
            M = Nw(e, u, be, M, t, a);
            var O = be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Nt) {
              e.flags |= un;
              var X = u.effects;
              X === null ? u.effects = [be] : X.push(be);
            }
          } else {
            var D = {
              eventTime: St,
              lane: _t,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ne === null ? (se = Ne = D, H = M) : Ne = Ne.next = D, A = et(A, _t);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, be = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (H = M), u.baseState = H, u.firstBaseUpdate = se, u.lastBaseUpdate = Ne;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Xe = Be;
          do
            A = et(A, Xe.lane), Xe = Xe.next;
          while (Xe !== Be);
        } else s === null && (u.shared.lanes = Q);
        Yp(A), e.lanes = A, e.memoizedState = M;
      }
      Xh = null;
    }
    function Mw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EC() {
      qh = !1;
    }
    function em() {
      return qh;
    }
    function CC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mw(f, a));
        }
    }
    var Sp = {}, zo = Oo(Sp), Ep = Oo(Sp), tm = Oo(Sp);
    function nm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = nm(tm.current);
      return e;
    }
    function mg(e, t) {
      ia(tm, t, e), ia(Ep, e, e), ia(zo, Sp, e);
      var a = qT(t);
      aa(zo, e), ia(zo, a, e);
    }
    function Of(e) {
      aa(zo, e), aa(Ep, e), aa(tm, e);
    }
    function yg() {
      var e = nm(zo.current);
      return e;
    }
    function TC(e) {
      nm(tm.current);
      var t = nm(zo.current), a = XT(t, e.type);
      t !== a && (ia(Ep, e, e), ia(zo, a, e));
    }
    function gg(e) {
      Ep.current === e && (aa(zo, e), aa(Ep, e));
    }
    var Uw = 0, wC = 1, bC = 1, Cp = 2, il = Oo(Uw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & wC;
    }
    function Eg(e, t) {
      return e & wC | t;
    }
    function zw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(il, t, e);
    }
    function Nf(e) {
      aa(il, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || BE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === Yt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & xe) !== ke;
          if (u)
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
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function jw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = L.ReactCurrentDispatcher, Rp = L.ReactCurrentBatchConfig, Tg, Mf;
    Tg = /* @__PURE__ */ new Set();
    var Js = Q, Jt = null, pr = null, vr = null, am = !1, Tp = !1, wp = 0, Fw = 0, Hw = 25, B = null, zi = null, jo = -1, wg = !1;
    function Vt() {
      {
        var e = B;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        zi !== null && (jo++, zi[jo] !== e && Pw(e));
      }
    }
    function Uf(e) {
      e != null && !ot(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Pw(e) {
      {
        var t = Ye(Jt);
        if (!Tg.has(t) && (Tg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = zi[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!K(e[a], t[a]))
          return !1;
      return !0;
    }
    function zf(e, t, a, i, u, s) {
      Js = s, Jt = t, zi = e !== null ? e._debugHookTypes : null, jo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? de.current = WC : zi !== null ? de.current = QC : de.current = YC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, pr = null, vr = null, t.updateQueue = null, jo = -1, de.current = GC, f = a(i, u);
        } while (Tp);
      }
      de.current = ym, t._debugHookTypes = zi;
      var v = pr !== null && pr.next !== null;
      if (Js = Q, Jt = null, pr = null, vr = null, B = null, zi = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & vt) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), am = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function xC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function _C() {
      if (de.current = ym, am) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        am = !1;
      }
      Js = Q, Jt = null, pr = null, vr = null, zi = null, jo = -1, B = null, PC = !1, Tp = !1, wp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Jt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Ai() {
      var e;
      if (pr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Jt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Jt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function kC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function xg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Iw.bind(null, Jt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, M = null, A = null, H = g;
        do {
          var se = H.lane;
          if (ku(Js, se)) {
            if (A !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = be;
            }
            if (H.hasEagerState)
              _ = H.eagerState;
            else {
              var _t = H.action;
              _ = e(_, _t);
            }
          } else {
            var Ne = {
              lane: se,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (M = A = Ne, b = _) : A = A.next = Ne, Jt.lanes = et(Jt.lanes, se), Yp(se);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? b = _ : A.next = M, K(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = b, i.baseQueue = A, u.lastRenderedState = _;
      }
      var St = u.interleaved;
      if (St !== null) {
        var D = St;
        do {
          var P = D.lane;
          Jt.lanes = et(Jt.lanes, P), Yp(P), D = D.next;
        } while (D !== St);
      } else f === null && (u.lanes = Q);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        K(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function vk(e, t, a) {
    }
    function hk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Jt, u = Ql(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          K(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Am();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || DC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, sm(LC.bind(null, i, y, e), [e]), i.flags |= Gr, bp(fr | Fr, OC.bind(null, i, y, s, t), void 0, null), s;
    }
    function im(e, t, a) {
      var i = Jt, u = Ai(), s = t();
      if (!Mf) {
        var f = t();
        K(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !K(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (_p(LC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Gr, bp(fr | Fr, OC.bind(null, i, y, s, t), void 0, null);
        var g = Am();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || DC(i, t, s);
      }
      return s;
    }
    function DC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Jt.updateQueue;
      if (u === null)
        u = kC(), Jt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NC(t) && MC(e);
    }
    function LC(e, t, a) {
      var i = function() {
        NC(t) && MC(e);
      };
      return a(i);
    }
    function NC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !K(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Ha(e, Fe);
      t !== null && gr(t, e, Fe, en);
    }
    function lm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: xg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yw.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(xg);
    }
    function Ng(e) {
      return Dg(xg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Jt.updateQueue;
      if (s === null)
        s = kC(), Jt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Mg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function um(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      Jt.flags |= e, u.memoizedState = bp(fr | t, a, void 0, s);
    }
    function om(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      Jt.flags |= e, u.memoizedState = bp(fr | t, a, f, s);
    }
    function sm(e, t) {
      return (Jt.mode & zt) !== De ? xp(Ti | Gr | bc, Fr, e, t) : xp(Gr | bc, Fr, e, t);
    }
    function _p(e, t) {
      return om(Gr, Fr, e, t);
    }
    function Ug(e, t) {
      return xp(wt, Yl, e, t);
    }
    function cm(e, t) {
      return om(wt, Yl, e, t);
    }
    function zg(e, t) {
      var a = wt;
      return a |= Wi, (Jt.mode & zt) !== De && (a |= _l), xp(a, dr, e, t);
    }
    function fm(e, t) {
      return om(wt, dr, e, t);
    }
    function UC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = wt;
      return u |= Wi, (Jt.mode & zt) !== De && (u |= _l), xp(u, dr, UC.bind(null, t, e), i);
    }
    function dm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return om(wt, dr, UC.bind(null, t, e), i);
    }
    function Vw(e, t) {
    }
    var pm = Vw;
    function jg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function vm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function hm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function zC(e) {
      var t = Ai(), a = pr, i = a.memoizedState;
      return jC(t, i, e);
    }
    function AC(e) {
      var t = Ai();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return jC(t, a, e);
    }
    function jC(e, t, a) {
      var i = !Dd(Js);
      if (i) {
        if (!K(a, t)) {
          var u = Nd();
          Jt.lanes = et(Jt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = Aa();
      Fn(Qv(i, _i)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Fn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = lm(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function FC() {
      var e = Lg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function HC() {
      var e = Ng(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var PC = !1;
    function $w() {
      return PC;
    }
    function Vg() {
      var e = Ql(), t = Am(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function mm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = mC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          gr(s, e, i, f), $C(s, t, i);
        }
      }
      IC(e, i);
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, K(y, v)) {
                Dw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = mC(e, t, u, i);
        if (g !== null) {
          var _ = Ca();
          gr(g, e, i, _), $C(g, t, i);
        }
      }
      IC(e, i);
    }
    function VC(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function BC(e, t) {
      Tp = am = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $C(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Md(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function IC(e, t, a) {
      vs(e, t);
    }
    var ym = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: J
    }, YC = null, QC = null, WC = null, GC = null, Wl = null, ll = null, gm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Vt(), Uf(t), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Vt(), Uf(t), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Vt(), Uf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Vt(), Uf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Vt(), Uf(t), zg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Vt(), Uf(t);
          var a = de.current;
          de.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Vt();
          var i = de.current;
          de.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Vt(), Mg(e);
        },
        useState: function(e) {
          B = "useState", Vt();
          var t = de.current;
          de.current = Wl;
          try {
            return lm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", Vt(), Vg();
        },
        unstable_isNewReconciler: J
      }, QC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), zg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Mg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = Wl;
          try {
            return lm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), Vg();
        },
        unstable_isNewReconciler: J
      }, WC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = ll;
          try {
            return hm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), um();
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = ll;
          try {
            return Lg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), im(e, t);
        },
        useId: function() {
          return B = "useId", re(), mm();
        },
        unstable_isNewReconciler: J
      }, GC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = gm;
          try {
            return hm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = gm;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), um();
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = gm;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), AC(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), HC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), im(e, t);
        },
        useId: function() {
          return B = "useId", re(), mm();
        },
        unstable_isNewReconciler: J
      }, Wl = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), Vt(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), Vt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), Vt(), zg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), Vt();
          var a = de.current;
          de.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), Vt();
          var i = de.current;
          de.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), Vt(), Mg(e);
        },
        useState: function(e) {
          B = "useState", Ge(), Vt();
          var t = de.current;
          de.current = Wl;
          try {
            return lm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), Vt(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", Ge(), Vt(), Vg();
        },
        unstable_isNewReconciler: J
      }, ll = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = de.current;
          de.current = ll;
          try {
            return hm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), re();
          var i = de.current;
          de.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), re(), um();
        },
        useState: function(e) {
          B = "useState", Ge(), re();
          var t = de.current;
          de.current = ll;
          try {
            return Lg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), re(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), re(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), re(), im(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), mm();
        },
        unstable_isNewReconciler: J
      }, gm = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = de.current;
          de.current = ll;
          try {
            return hm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), re();
          var i = de.current;
          de.current = ll;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), re(), um();
        },
        useState: function(e) {
          B = "useState", Ge(), re();
          var t = de.current;
          de.current = ll;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), re(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), re(), AC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), re(), HC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), re(), im(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), mm();
        },
        unstable_isNewReconciler: J
      };
    }
    var Fo = I.unstable_now, KC = 0, Sm = -1, kp = -1, Em = -1, $g = !1, Cm = !1;
    function qC() {
      return $g;
    }
    function Qw() {
      Cm = !0;
    }
    function Ww() {
      $g = !1, Cm = !1;
    }
    function Gw() {
      $g = Cm, Cm = !1;
    }
    function XC() {
      return KC;
    }
    function JC() {
      KC = Fo();
    }
    function Ig(e) {
      kp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function ZC(e) {
      kp = -1;
    }
    function Rm(e, t) {
      if (kp >= 0) {
        var a = Fo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Gl(e) {
      if (Sm >= 0) {
        var t = Fo() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Yg(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      Sm = Fo();
    }
    function Qg() {
      Em = Fo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, Kg, qg, Xg, Jg, Zg, e0, Tm, eS, tS, nS, Dp;
    {
      Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var t0 = /* @__PURE__ */ new Set();
      Tm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          t0.has(a) || (t0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, e0 = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Xt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        e0(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Ov,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (Tm(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (gr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.tag = gC, f.payload = t, a != null && (Tm(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (gr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ca(), u = Bo(a), s = Pu(i, u);
        s.tag = Kh, t != null && (Tm(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (gr(f, a, u, i), Jh(f, a, u)), Nc(a, u);
      }
    };
    function n0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Xt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function Kw(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xt) === De && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xt) === De && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ot(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function r0(e, t) {
      t.updater = aS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Gg;
    }
    function a0(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Xt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      r0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = kt(t) || "Component";
          qg.has(b) || (qg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), M !== null || A !== null || H !== null) {
            var se = kt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(se) || (Jg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ne, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && WE(e, u, s), g;
    }
    function qw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function i0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Kw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Xt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qw(e, u), Zh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = wt;
        y |= Wi, (e.mode & zt) !== De && (y |= _l), e.flags |= y;
      }
    }
    function Xw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && i0(e, u, a, v), EC();
      var b = e.memoizedState, M = u.state = b;
      if (Zh(e, a, u, i), M = e.memoizedState, s === a && b === M && !Uh() && !em()) {
        if (typeof u.componentDidMount == "function") {
          var A = wt;
          A |= Wi, (e.mode & zt) !== De && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var H = em() || n0(e, t, s, a, b, M, v);
      if (H) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = wt;
          se |= Wi, (e.mode & zt) !== De && (se |= _l), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = wt;
          Ne |= Wi, (e.mode & zt) !== De && (Ne |= _l), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, H;
    }
    function Jw(e, t, a, i, u) {
      var s = t.stateNode;
      SC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ui;
      if (typeof g == "object" && g !== null)
        _ = nr(g);
      else {
        var b = Rf(t, a, !0);
        _ = Tf(t, b);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && i0(t, s, i, _), EC();
      var H = t.memoizedState, se = s.state = H;
      if (Zh(t, i, s, u), se = t.memoizedState, f === v && H === se && !Uh() && !em() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof M == "function" && (rS(t, a, M, i), se = t.memoizedState);
      var Ne = em() || n0(t, a, p, i, H, se, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Ne ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, _)), typeof s.componentDidUpdate == "function" && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = _, Ne;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zw(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Zw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === te)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var eb = typeof WeakMap == "function" ? WeakMap : Map;
    function l0(e, t, a) {
      var i = Pu(en, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qx(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Pu(en, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), uS(e, t), typeof u != "function" && Ix(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, Fe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function u0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new eb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wx.bind(null, e, t, a);
        Jr && Qp(e, a), t.then(s, s);
      }
    }
    function tb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nb(e, t) {
      var a = e.tag;
      if ((e.mode & vt) === De && (a === ae || a === $e || a === Ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function o0(e) {
      var t = e;
      do {
        if (t.tag === Te && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function s0(e, t, a, i, u) {
      if ((e.mode & vt) === De) {
        if (e === t)
          e.flags |= Jn;
        else {
          if (e.flags |= xe, a.flags |= wc, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ot;
            else {
              var f = Pu(en, Fe);
              f.tag = Kh, Uo(a, f, Fe);
            }
          }
          a.lanes = et(a.lanes, Fe);
        }
        return e;
      }
      return e.flags |= Jn, e.lanes = u, e;
    }
    function rb(e, t, a, i, u) {
      if (a.flags |= os, Jr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nb(a), jr() && a.mode & vt && eC();
        var f = o0(t);
        if (f !== null) {
          f.flags &= ~Rr, s0(f, t, a, e, u), f.mode & vt && u0(e, s, u), tb(f, e, s);
          return;
        } else {
          if (!Fv(u)) {
            u0(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & vt) {
        eC();
        var v = o0(t);
        if (v !== null) {
          (v.flags & Jn) === ke && (v.flags |= Rr), s0(v, t, a, e, u), eg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ax(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= Jn;
            var _ = Ts(u);
            y.lanes = et(y.lanes, _);
            var b = l0(y, g, _);
            hg(y, b);
            return;
          }
          case te:
            var M = i, A = y.type, H = y.stateNode;
            if ((y.flags & xe) === ke && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !oR(H))) {
              y.flags |= Jn;
              var se = Ts(u);
              y.lanes = et(y.lanes, se);
              var Ne = oS(y, M, se);
              hg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ab() {
      return null;
    }
    var Op = L.ReactCurrentOwner, ol = !1, sS, Lp, cS, fS, dS, ec, pS, wm, Np;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, ec = !1, pS = {}, wm = {}, Np = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = dC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function ib(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, Yn(!0), v = zf(e, t, f, i, p, u), y = Af(), t.mode & Xt) {
          yn(!0);
          try {
            v = zf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (xC(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function f0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = Ue, t.type = f, mS(t, s), d0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && nl(
          _,
          i,
          // Resolved props
          "prop",
          kt(g)
        );
      }
      var b = e.child, M = RS(e, u);
      if (!M) {
        var A = b.memoizedProps, H = a.compare;
        if (H = H !== null ? H : ye, H(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var se = ic(b, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === We) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & wc) !== ke && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function p0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || V)
        if ((t.mode & vt) === De) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, jm(t, a);
        } else if (ea(a, Zr)) {
          var _ = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          jm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, jm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = et(s.baseLanes, a), t.memoizedState = null) : M = a, jm(t, M);
      }
      return Sa(e, t, u, a), t.child;
    }
    function lb(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function ub(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function ob(e, t, a) {
      {
        t.flags |= wt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function v0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, Yn(!0), v = zf(e, t, a, i, f, u), y = Af(), t.mode & Xt) {
          yn(!0);
          try {
            v = zf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (xC(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function h0(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= xe, t.flags |= Jn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = et(t.lanes, g);
            var _ = oS(t, Zs(y, t), g);
            hg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && nl(
            b,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var M;
      Il(a) ? (M = !0, Ah(t)) : M = !1, Df(t, u);
      var A = t.stateNode, H;
      A === null ? (xm(e, t), a0(t, a, i), iS(t, a, i, u), H = !0) : e === null ? H = Xw(t, a, i, u) : H = Jw(e, t, a, i, u);
      var se = hS(e, t, a, H, M, u);
      {
        var Ne = t.stateNode;
        H && Ne.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), ec = !0);
      }
      return se;
    }
    function hS(e, t, a, i, u, s) {
      v0(e, t);
      var f = (t.flags & xe) !== ke;
      if (!i && !f)
        return u && qE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZC();
      else {
        ha(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Xt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? ib(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && qE(t, a, !0), t.child;
    }
    function m0(e) {
      var t = e.stateNode;
      t.pendingContext ? GE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && GE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function sb(e, t, a) {
      if (m0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SC(e, t), Zh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return y0(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return y0(e, t, p, a, _);
        } else {
          dw(t);
          var b = dC(t, null, p, a);
          t.child = b;
          for (var M = b; M; )
            M.flags = M.flags & ~mn | Kr, M = M.sibling;
        }
      } else {
        if (xf(), p === s)
          return Vu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function y0(e, t, a, i, u) {
      return xf(), eg(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function cb(e, t, a) {
      TC(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Oa), v0(e, t), Sa(e, t, f, a), t.child;
    }
    function fb(e, t) {
      return e === null && Zy(t), null;
    }
    function db(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = ul(v, u), _;
      switch (y) {
        case ae:
          return mS(t, v), t.type = v = If(v), _ = vS(null, t, v, g, i), _;
        case te:
          return t.type = v = QS(v), _ = h0(null, t, v, g, i), _;
        case $e:
          return t.type = v = WS(v), _ = c0(null, t, v, g, i), _;
        case tt: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && nl(
              b,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return _ = f0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === We && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function pb(e, t, a, i, u) {
      xm(e, t), t.tag = te;
      var s;
      return Il(a) ? (s = !0, Ah(t)) : s = !1, Df(t, u), a0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function vb(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Xt && al.recordLegacyContextWarning(t, null), Yn(!0), Op.current = t, p = zf(null, t, a, u, s, i), v = Af(), Yn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = kt(a) || "Unknown";
          Lp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Lp[_] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Il(a) ? (b = !0, Ah(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), r0(t, p), iS(t, a, u, i), hS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ae, t.mode & Xt) {
          yn(!0);
          try {
            p = zf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return jr() && v && Gy(t), Sa(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Nt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: ab(),
        transitions: null
      };
    }
    function hb(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function yb(e, t) {
      return ws(e.childLanes, t);
    }
    function g0(e, t, a) {
      var i = t.pendingProps;
      x_(t) && (t.flags |= xe);
      var u = il.current, s = !1, f = (t.flags & xe) !== ke;
      if (f || mb(u, e) ? (s = !0, t.flags &= ~xe) : (e === null || e.memoizedState !== null) && (u = zw(u, bC)), u = Lf(u), Ao(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = gb(t, y, g, a), b = t.child;
          return b.memoizedState = gS(a), t.memoizedState = yS, _;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return Tb(e, t, f, i, A, M, a);
        }
        if (s) {
          var H = i.fallback, se = i.children, Ne = Eb(e, t, se, H, a), be = t.child, _t = e.child.memoizedState;
          return be.memoizedState = _t === null ? gS(a) : hb(_t, a), be.childLanes = yb(e, a), t.memoizedState = yS, Ne;
        } else {
          var St = i.children, D = Sb(e, t, St, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function gb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & vt) === De && s !== null ? (p = s, p.childLanes = Q, p.pendingProps = f, e.mode & Ut && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = ES(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return SR(e, t, Q, null);
    }
    function S0(e, t) {
      return ic(e, t);
    }
    function Sb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = S0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & vt) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Eb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & vt) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Q, y.pendingProps = v, t.mode & Ut && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = S0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var _;
      return p !== null ? _ = ic(p, i) : (_ = Io(i, s, u, null), _.flags |= mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Cb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Io(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & vt) !== De && _f(t, e.child, null, u), v;
    }
    function Rb(e, t, a) {
      return (e.mode & vt) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Fe) : Fy(t) ? e.lanes = Tr : e.lanes = Zr, null;
    }
    function Tb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xe, null;
          var P = i.children, O = i.fallback, X = Cb(e, t, P, O, f), pe = t.child;
          return pe.memoizedState = gS(f), t.memoizedState = yS, X;
        }
      else {
        if (cw(), (t.mode & vt) === De)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = _1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = lS(_, p, y);
          return bm(e, t, f, b);
        }
        var M = ea(f, e.childLanes);
        if (ol || M) {
          var A = Am();
          if (A !== null) {
            var H = zd(A, f);
            if (H !== Nt && H !== s.retryLane) {
              s.retryLane = H;
              var se = en;
              Ha(e, H), gr(A, e, H, se);
            }
          }
          VS();
          var Ne = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Ne);
        } else if (BE(u)) {
          t.flags |= xe, t.child = e.child;
          var be = Gx.bind(null, e);
          return k1(u, be), null;
        } else {
          pw(t, u, s.treeContext);
          var _t = i.children, St = SS(t, _t);
          return St.flags |= Kr, St;
        }
      }
    }
    function E0(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), cg(e.return, t, a);
    }
    function wb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && E0(i, a, e);
        } else if (i.tag === Yt)
          E0(i, a, e);
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
    function bb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _b(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function C0(e, t) {
      {
        var a = ot(e), i = !a && typeof Ze(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ot(e)) {
          for (var a = 0; a < e.length; a++)
            if (!C0(e[a], a))
              return;
        } else {
          var i = Ze(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!C0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function R0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      xb(u), _b(s, u), kb(f, u), Sa(e, t, f, a);
      var p = il.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= xe;
      else {
        var y = e !== null && (e.flags & xe) !== ke;
        y && wb(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & vt) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bb(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && rm(A) === null) {
                t.child = M;
                break;
              }
              var H = M.sibling;
              M.sibling = b, b = M, M = H;
            }
            CS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
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
    function Db(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var T0 = !1;
    function Ob(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || T0 || (T0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (hC(t, u, p), f !== null) {
        var y = f.value;
        if (K(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          xw(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var w0 = !1;
    function Lb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (w0 || (w0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = nr(i);
      ha(t);
      var p;
      return Op.current = t, Yn(!0), p = s(f), Yn(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function Mp() {
      ol = !0;
    }
    function xm(e, t) {
      (t.mode & vt) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), Yp(t.lanes), ea(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function Nb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function Mb(e, t, a) {
      switch (t.tag) {
        case ee:
          m0(t), t.stateNode, xf();
          break;
        case le:
          TC(t);
          break;
        case te: {
          var i = t.type;
          Il(i) && Ah(t);
          break;
        }
        case Ee:
          mg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          hC(t, s, u);
          break;
        }
        case ct:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= wt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(il.current)), t.flags |= xe, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return g0(e, t, a);
            Ao(t, Lf(il.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ao(t, Lf(il.current));
          break;
        }
        case Yt: {
          var b = (e.flags & xe) !== ke, M = ea(a, t.childLanes);
          if (b) {
            if (M)
              return R0(e, t, a);
            t.flags |= xe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, il.current), M)
            break;
          return null;
        }
        case _e:
        case Lt:
          return t.lanes = Q, p0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function b0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xe) === ke)
            return ol = !1, Mb(e, t, a);
          (e.flags & wc) !== ke ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && aw(t)) {
        var f = t.index, p = iw();
        ZE(t, p, f);
      }
      switch (t.lanes = Q, t.tag) {
        case qe:
          return vb(e, t, t.type, a);
        case It: {
          var v = t.elementType;
          return db(e, t, v, a);
        }
        case ae: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : ul(y, g);
          return vS(e, t, y, _, a);
        }
        case te: {
          var b = t.type, M = t.pendingProps, A = t.elementType === b ? M : ul(b, M);
          return h0(e, t, b, A, a);
        }
        case ee:
          return sb(e, t, a);
        case le:
          return cb(e, t, a);
        case Ve:
          return fb(e, t);
        case Te:
          return g0(e, t, a);
        case Ee:
          return Db(e, t, a);
        case $e: {
          var H = t.type, se = t.pendingProps, Ne = t.elementType === H ? se : ul(H, se);
          return c0(e, t, H, Ne, a);
        }
        case gt:
          return lb(e, t, a);
        case st:
          return ub(e, t, a);
        case ct:
          return ob(e, t, a);
        case at:
          return Ob(e, t, a);
        case tn:
          return Lb(e, t, a);
        case tt: {
          var be = t.type, _t = t.pendingProps, St = ul(be, _t);
          if (t.type !== t.elementType) {
            var D = be.propTypes;
            D && nl(
              D,
              St,
              // Resolved for outer only
              "prop",
              kt(be)
            );
          }
          return St = ul(be.type, St), f0(e, t, be, St, a);
        }
        case Ue:
          return d0(e, t, t.type, t.pendingProps, a);
        case Ot: {
          var P = t.type, O = t.pendingProps, X = t.elementType === P ? O : ul(P, O);
          return pb(e, t, P, X, a);
        }
        case Yt:
          return R0(e, t, a);
        case Et:
          break;
        case _e:
          return p0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= wt;
    }
    function x0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var _0, TS, k0, D0;
    _0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Ve)
          t1(e, u.stateNode);
        else if (u.tag !== Ee) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, k0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = r1(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, D0 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Up(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = ke;
      if (t) {
        if ((e.mode & Ut) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ut) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ub(e, t, a) {
      if (gw() && (t.mode & vt) !== De && (t.flags & xe) === ke)
        return lC(t), xf(), t.flags |= Rr | os | Jn, !1;
      var i = Vh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), Hr(t), (t.mode & Ut) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (xf(), (t.flags & xe) === ke && (t.memoizedState = null), t.flags |= wt, Hr(t), (t.mode & Ut) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uC(), !0;
    }
    function O0(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case qe:
        case It:
        case Ue:
        case ae:
        case $e:
        case gt:
        case st:
        case ct:
        case tn:
        case tt:
          return Hr(t), null;
        case te: {
          var u = t.type;
          return Il(u) && zh(t), Hr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (Of(t), Yy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Vh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== ke) && (t.flags |= Qn, uC());
            }
          }
          return TS(e, t), Hr(t), null;
        }
        case le: {
          gg(t);
          var v = RC(), y = t.type;
          if (e !== null && t.stateNode != null)
            k0(e, t, y, i, v), e.ref !== t.ref && x0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = yg(), _ = Vh(t);
            if (_)
              vw(t, v, g) && jf(t);
            else {
              var b = e1(y, i, v, g, t);
              _0(b, t, !1, !1), t.stateNode = b, n1(b, y, i, v) && jf(t);
            }
            t.ref !== null && x0(t);
          }
          return Hr(t), null;
        }
        case Ve: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            D0(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = RC(), se = yg(), Ne = Vh(t);
            Ne ? hw(t) && jf(t) : t.stateNode = a1(M, H, se, t);
          }
          return Hr(t), null;
        }
        case Te: {
          Nf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = Ub(e, t, be);
            if (!_t)
              return t.flags & Jn ? t : null;
          }
          if ((t.flags & xe) !== ke)
            return t.lanes = a, (t.mode & Ut) !== De && Wg(t), t;
          var St = be !== null, D = e !== null && e.memoizedState !== null;
          if (St !== D && St) {
            var P = t.child;
            if (P.flags |= Un, (t.mode & vt) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(il.current, bC) ? zx() : VS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= wt), Hr(t), (t.mode & Ut) !== De && St) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ee:
          return Of(t), TS(e, t), e === null && X1(t.stateNode.containerInfo), Hr(t), null;
        case at:
          var ce = t.type._context;
          return sg(ce, t), Hr(t), null;
        case Ot: {
          var Be = t.type;
          return Il(Be) && zh(t), Hr(t), null;
        }
        case Yt: {
          Nf(t);
          var Xe = t.memoizedState;
          if (Xe === null)
            return Hr(t), null;
          var Zt = (t.flags & xe) !== ke, jt = Xe.rendering;
          if (jt === null)
            if (Zt)
              Up(Xe, !1);
            else {
              var Kn = jx() && (e === null || (e.flags & xe) === ke);
              if (!Kn)
                for (var Ft = t.child; Ft !== null; ) {
                  var Vn = rm(Ft);
                  if (Vn !== null) {
                    Zt = !0, t.flags |= xe, Up(Xe, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= wt), t.subtreeFlags = ke, bw(t, a), Ao(t, Eg(il.current, Cp)), t.child;
                  }
                  Ft = Ft.sibling;
                }
              Xe.tail !== null && Wn() > X0() && (t.flags |= xe, Zt = !0, Up(Xe, !1), t.lanes = xd);
            }
          else {
            if (!Zt) {
              var Ir = rm(jt);
              if (Ir !== null) {
                t.flags |= xe, Zt = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= wt), Up(Xe, !0), Xe.tail === null && Xe.tailMode === "hidden" && !jt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Wn() * 2 - Xe.renderingStartTime > X0() && a !== Zr && (t.flags |= xe, Zt = !0, Up(Xe, !1), t.lanes = xd);
            }
            if (Xe.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var Ra = Xe.last;
              Ra !== null ? Ra.sibling = jt : t.child = jt, Xe.last = jt;
            }
          }
          if (Xe.tail !== null) {
            var Ta = Xe.tail;
            Xe.rendering = Ta, Xe.tail = Ta.sibling, Xe.renderingStartTime = Wn(), Ta.sibling = null;
            var oa = il.current;
            return Zt ? oa = Eg(oa, Cp) : oa = Lf(oa), Ao(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case Et:
          break;
        case _e:
        case Lt: {
          PS(t);
          var Qu = t.memoizedState, Yf = Qu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Jl = qp !== null;
            Jl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !V && (t.flags |= Un);
          }
          return !Yf || (t.mode & vt) === De ? Hr(t) : ea(Xl, Zr) && (Hr(t), t.subtreeFlags & (mn | wt) && (t.flags |= Un)), null;
        }
        case Ct:
          return null;
        case Rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zb(e, t, a) {
      switch (Ky(t), t.tag) {
        case te: {
          var i = t.type;
          Il(i) && zh(t);
          var u = t.flags;
          return u & Jn ? (t.flags = u & ~Jn | xe, (t.mode & Ut) !== De && Wg(t), t) : null;
        }
        case ee: {
          t.stateNode, Of(t), Yy(t), Rg();
          var s = t.flags;
          return (s & Jn) !== ke && (s & xe) === ke ? (t.flags = s & ~Jn | xe, t) : null;
        }
        case le:
          return gg(t), null;
        case Te: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            xf();
          }
          var p = t.flags;
          return p & Jn ? (t.flags = p & ~Jn | xe, (t.mode & Ut) !== De && Wg(t), t) : null;
        }
        case Yt:
          return Nf(t), null;
        case Ee:
          return Of(t), null;
        case at:
          var v = t.type._context;
          return sg(v, t), null;
        case _e:
        case Lt:
          return PS(t), null;
        case Ct:
          return null;
        default:
          return null;
      }
    }
    function L0(e, t, a) {
      switch (Ky(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && zh(t);
          break;
        }
        case ee: {
          t.stateNode, Of(t), Yy(t), Rg();
          break;
        }
        case le: {
          gg(t);
          break;
        }
        case Ee:
          Of(t);
          break;
        case Te:
          Nf(t);
          break;
        case Yt:
          Nf(t);
          break;
        case at:
          var u = t.type._context;
          sg(u, t);
          break;
        case _e:
        case Lt:
          PS(t);
          break;
      }
    }
    var N0 = null;
    N0 = /* @__PURE__ */ new Set();
    var _m = !1, Pr = !1, Ab = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Ff = null, Hf = null;
    function jb(e) {
      xl(null, function() {
        throw e;
      }), us();
    }
    var Fb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ut)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        Ho(dr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Fb(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Hb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function U0(e, t) {
      try {
        A0(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (je && ft && e.mode & Ut)
              try {
                Kl(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var z0 = !1;
    function Pb(e, t) {
      JT(e.containerInfo), ge = t, Vb();
      var a = z0;
      return z0 = !1, a;
    }
    function Vb() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & kl) !== ke && t !== null ? (t.return = e, ge = t) : Bb();
      }
    }
    function Bb() {
      for (; ge !== null; ) {
        var e = ge;
        Gt(e);
        try {
          $b(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function $b(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qn) !== ke) {
        switch (Gt(e), e.tag) {
          case ae:
          case $e:
          case Ue:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = N0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              T1(v.containerInfo);
            }
            break;
          }
          case le:
          case Ve:
          case Ee:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? qi(t) : (e & dr) !== Pa && cs(t), (e & Yl) !== Pa && Wp(!0), km(t, a, p), (e & Yl) !== Pa && Wp(!1), (e & Fr) !== Pa ? Nl() : (e & dr) !== Pa && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Pa ? Td(t) : (e & dr) !== Pa && Oc(t);
            var f = s.create;
            (e & Yl) !== Pa && Wp(!0), s.destroy = f(), (e & Yl) !== Pa && Wp(!1), (e & Fr) !== Pa ? Mv() : (e & dr) !== Pa && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== ke ? v = "useLayoutEffect" : (s.tag & Yl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Ib(e, t) {
      if ((t.flags & wt) !== ke)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XC(), p = t.alternate === null ? "mount" : "update";
            qC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ct:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Yb(e, t, a, i) {
      if ((a.flags & Ol) !== ke)
        switch (a.tag) {
          case ae:
          case $e:
          case Ue: {
            if (!Pr)
              if (a.mode & Ut)
                try {
                  Kl(), Ho(dr | fr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(dr | fr, a);
            break;
          }
          case te: {
            var u = a.stateNode;
            if (a.flags & wt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ut)
                  try {
                    Kl(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ut)
                  try {
                    Kl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), CC(a, p, u));
            break;
          }
          case ee: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case te:
                    y = a.child.stateNode;
                    break;
                }
              CC(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & wt) {
              var _ = a.type, b = a.memoizedProps;
              s1(g, _, b);
            }
            break;
          }
          case Ve:
            break;
          case Ee:
            break;
          case ct: {
            {
              var M = a.memoizedProps, A = M.onCommit, H = M.onRender, se = a.stateNode.effectDuration, Ne = XC(), be = t === null ? "mount" : "update";
              qC() && (be = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, se, Ne), Bx(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case ee:
                      var St = _t.stateNode;
                      St.effectDuration += se;
                      break e;
                    case ct:
                      var D = _t.stateNode;
                      D.effectDuration += se;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case Te: {
            Zb(e, a);
            break;
          }
          case Yt:
          case Ot:
          case Et:
          case _e:
          case Lt:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & En && A0(a);
    }
    function Qb(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          if (e.mode & Ut)
            try {
              Kl(), M0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hb(e, e.return, t), U0(e, e.return);
          break;
        }
        case le: {
          U0(e, e.return);
          break;
        }
      }
    }
    function Wb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? S1(u) : C1(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? E1(s) : R1(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === _e || i.tag === Lt) && i.memoizedState !== null && i !== e)) {
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
    function A0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ut)
            try {
              Kl(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Gb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function j0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, j0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Kb(e) {
      for (var t = e.return; t !== null; ) {
        if (F0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F0(e) {
      return e.tag === le || e.tag === ee || e.tag === Ee;
    }
    function H0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || F0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Ve && t.tag !== Bt; ) {
          if (t.flags & mn || t.child === null || t.tag === Ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function qb(e) {
      var t = Kb(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Oa && (VE(a), t.flags &= ~Oa);
          var i = H0(e);
          xS(e, i, a);
          break;
        }
        case ee:
        case Ee: {
          var u = t.stateNode.containerInfo, s = H0(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === le || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? h1(a, s, t) : p1(a, s);
      } else if (i !== Ee) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === le || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? v1(a, s, t) : d1(a, s);
      } else if (i !== Ee) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function Xb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case ee: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Ee: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        P0(e, t, a), Vr = null, cl = !1;
      }
      Gb(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        P0(e, t, i), i = i.sibling;
    }
    function P0(e, t, a) {
      switch (Ed(a), a.tag) {
        case le:
          Pr || Pf(a, t);
        case Ve: {
          {
            var i = Vr, u = cl;
            Vr = null, Po(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? y1(Vr, a.stateNode) : m1(Vr, a.stateNode));
          }
          return;
        }
        case Bt: {
          Vr !== null && (cl ? g1(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case Ee: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case ae:
        case $e:
        case tt:
        case Ue: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, M = _.tag;
                  b !== void 0 && ((M & Yl) !== Pa ? km(a, t, b) : (M & dr) !== Pa && (cs(a), a.mode & Ut ? (Kl(), km(a, t, b), Gl(a)) : km(a, t, b), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case te: {
          if (!Pr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && wS(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case Et: {
          Po(e, t, a);
          return;
        }
        case _e: {
          if (
            // TODO: Remove this dead flag
            a.mode & vt
          ) {
            var H = Pr;
            Pr = H || a.memoizedState !== null, Po(e, t, a), Pr = H;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Jb(e) {
      e.memoizedState;
    }
    function Zb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && j1(s);
          }
        }
      }
    }
    function V0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ab()), t.forEach(function(i) {
          var u = Kx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if (Ff !== null && Hf !== null)
                Qp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ex(e, t, a) {
      Ff = a, Hf = e, Gt(t), B0(t, e), Gt(t), Ff = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xb(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Gt(p), B0(p, e), p = p.sibling;
      Gt(f);
    }
    function B0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ae:
        case $e:
        case tt:
        case Ue: {
          if (fl(t, e), ql(e), u & wt) {
            try {
              sl(Yl | fr, e, e.return), Ho(Yl | fr, e);
            } catch (Be) {
              fn(e, e.return, Be);
            }
            if (e.mode & Ut) {
              try {
                Kl(), sl(dr | fr, e, e.return);
              } catch (Be) {
                fn(e, e.return, Be);
              }
              Gl(e);
            } else
              try {
                sl(dr | fr, e, e.return);
              } catch (Be) {
                fn(e, e.return, Be);
              }
          }
          return;
        }
        case te: {
          fl(t, e), ql(e), u & En && i !== null && Pf(i, i.return);
          return;
        }
        case le: {
          fl(t, e), ql(e), u & En && i !== null && Pf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Be) {
                fn(e, e.return, Be);
              }
            }
            if (u & wt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    c1(f, g, y, v, p, e);
                  } catch (Be) {
                    fn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Ve: {
          if (fl(t, e), ql(e), u & wt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, M = i !== null ? i.memoizedProps : b;
            try {
              f1(_, M, b);
            } catch (Be) {
              fn(e, e.return, Be);
            }
          }
          return;
        }
        case ee: {
          if (fl(t, e), ql(e), u & wt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                A1(t.containerInfo);
              } catch (Be) {
                fn(e, e.return, Be);
              }
          }
          return;
        }
        case Ee: {
          fl(t, e), ql(e);
          return;
        }
        case Te: {
          fl(t, e), ql(e);
          var H = e.child;
          if (H.flags & Un) {
            var se = H.stateNode, Ne = H.memoizedState, be = Ne !== null;
            if (se.isHidden = be, be) {
              var _t = H.alternate !== null && H.alternate.memoizedState !== null;
              _t || Ux();
            }
          }
          if (u & wt) {
            try {
              Jb(e);
            } catch (Be) {
              fn(e, e.return, Be);
            }
            V0(e);
          }
          return;
        }
        case _e: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & vt
          ) {
            var D = Pr;
            Pr = D || St, fl(t, e), Pr = D;
          } else
            fl(t, e);
          if (ql(e), u & Un) {
            var P = e.stateNode, O = e.memoizedState, X = O !== null, pe = e;
            if (P.isHidden = X, X && !St && (pe.mode & vt) !== De) {
              ge = pe;
              for (var ce = pe.child; ce !== null; )
                ge = ce, nx(ce), ce = ce.sibling;
            }
            Wb(pe, X);
          }
          return;
        }
        case Yt: {
          fl(t, e), ql(e), u & wt && V0(e);
          return;
        }
        case Et:
          return;
        default: {
          fl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          qb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Kr && (e.flags &= ~Kr);
    }
    function tx(e, t, a) {
      Ff = a, Hf = t, ge = e, $0(e, t, a), Ff = null, Hf = null;
    }
    function $0(e, t, a) {
      for (var i = (e.mode & vt) !== De; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === _e && i) {
          var f = u.memoizedState !== null, p = f || _m;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = _m, b = Pr;
            _m = p, Pr = g, Pr && !b && (ge = u, rx(u));
            for (var M = s; M !== null; )
              ge = M, $0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ge = u, _m = _, Pr = b, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== ke && s !== null ? (s.return = u, ge = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & Ol) !== ke) {
          var u = i.alternate;
          Gt(i);
          try {
            Yb(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function nx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case ae:
          case $e:
          case tt:
          case Ue: {
            if (t.mode & Ut)
              try {
                Kl(), sl(dr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(dr, t, t.return);
            break;
          }
          case te: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case le: {
            Pf(t, t.return);
            break;
          }
          case _e: {
            var u = t.memoizedState !== null;
            if (u) {
              I0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : I0(e);
      }
    }
    function I0(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function rx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === _e) {
          var i = t.memoizedState !== null;
          if (i) {
            Y0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; ge !== null; ) {
        var t = ge;
        Gt(t);
        try {
          Qb(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function ax(e, t, a, i) {
      ge = t, ix(t, e, a, i);
    }
    function ix(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gi) !== ke && s !== null ? (s.return = u, ge = s) : lx(e, t, a, i);
      }
    }
    function lx(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Gr) !== ke) {
          Gt(u);
          try {
            ux(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function ux(e, t, a, i) {
      switch (t.tag) {
        case ae:
        case $e:
        case Ue: {
          if (t.mode & Ut) {
            Qg();
            try {
              Ho(Fr | fr, t);
            } finally {
              Yg(t);
            }
          } else
            Ho(Fr | fr, t);
          break;
        }
      }
    }
    function ox(e) {
      ge = e, sx();
    }
    function sx() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Da) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, dx(u, e);
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
            ge = e;
          }
        }
        (e.subtreeFlags & Gi) !== ke && t !== null ? (t.return = e, ge = t) : cx();
      }
    }
    function cx() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Gr) !== ke && (Gt(e), fx(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function fx(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          e.mode & Ut ? (Qg(), sl(Fr | fr, e, e.return), Yg(e)) : sl(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function dx(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        Gt(a), vx(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : px(e);
      }
    }
    function px(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (j0(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function vx(e, t) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          e.mode & Ut ? (Qg(), sl(Fr, e, t), Yg(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function hx(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          try {
            Ho(dr | fr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mx(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          try {
            Ho(Fr | fr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yx(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue: {
          try {
            sl(dr | fr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case ae:
        case $e:
        case Ue:
          try {
            sl(Fr | fr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Sx = [];
    function Ex() {
      Sx.forEach(function(e) {
        return e();
      });
    }
    var Cx = L.ReactCurrentActQueue;
    function Rx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Q0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tx = Math.ceil, kS = L.ReactCurrentDispatcher, DS = L.ReactCurrentOwner, Br = L.ReactCurrentBatchConfig, dl = L.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), W0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Dm = 3, jp = 4, G0 = 5, OS = 6, xt = hr, Ea = null, On = null, mr = Q, Xl = Q, LS = Oo(Q), yr = Bu, Fp = null, Om = Q, Hp = Q, Lm = Q, Pp = null, Va = null, NS = 0, K0 = 500, q0 = 1 / 0, wx = 500, $u = null;
    function Vp() {
      q0 = Wn() + wx;
    }
    function X0() {
      return q0;
    }
    var Nm = !1, MS = null, Vf = null, nc = !1, Vo = null, Bp = Q, US = [], zS = null, bx = 50, $p = 0, AS = null, jS = !1, Mm = !1, xx = 50, Bf = 0, Um = null, Ip = en, zm = Q, J0 = !1;
    function Am() {
      return Ea;
    }
    function Ca() {
      return (xt & ($r | ji)) !== hr ? Wn() : (Ip !== en || (Ip = Wn()), Ip);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & vt) === De)
        return Fe;
      if ((xt & $r) !== hr && mr !== Q)
        return Ts(mr);
      var a = Cw() !== Ew;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zm === Nt && (zm = Nd()), zm;
      }
      var u = Aa();
      if (u !== Nt)
        return u;
      var s = i1();
      return s;
    }
    function _x(e) {
      var t = e.mode;
      return (t & vt) === De ? Fe : Pv();
    }
    function gr(e, t, a, i) {
      Xx(), J0 && S("useInsertionEffect must not schedule updates."), jS && (Mm = !0), So(e, a, i), (xt & $r) !== Q && e === Ea ? e_(t) : (Jr && xs(e, t, a), t_(t), e === Ea && ((xt & $r) === hr && (Hp = et(Hp, a)), yr === jp && $o(e, mr)), Ba(e, i), a === Fe && xt === hr && (t.mode & vt) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Vp(), JE()));
    }
    function kx(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Ba(e, a);
    }
    function Dx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (xt & $r) !== hr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Kc(e, e === Ea ? mr : Q);
      if (i === Q) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = Nt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== IS)) {
        a == null && s !== Fe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === Fe)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), rw(tR.bind(null, e))) : XE(tR.bind(null, e)), dl.current !== null ? dl.current.push(No) : u1(function() {
          (xt & ($r | ji)) === hr && No();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case Nr:
            p = ss;
            break;
          case _i:
            p = Ll;
            break;
          case Ua:
            p = Ki;
            break;
          case za:
            p = mu;
            break;
          default:
            p = Ki;
            break;
        }
        f = YS(p, Z0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z0(e, t) {
      if (Ww(), Ip = en, zm = Q, (xt & ($r | ji)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Ea ? mr : Q);
      if (u === Q)
        return null;
      var s = !Jc(e, u) && !Hv(e, u) && !t, f = s ? Hx(e, u) : Fm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== Q && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, Q), $o(e, u), Ba(e, Wn()), v;
        }
        if (f === OS)
          $o(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Lx(g)) {
            if (f = Fm(e, u), f === tc) {
              var _ = Xc(e);
              _ !== Q && (u = _, f = FS(e, _));
            }
            if (f === Ap) {
              var b = Fp;
              throw rc(e, Q), $o(e, u), Ba(e, Wn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ox(e, f, u);
        }
      }
      return Ba(e, Wn()), e.callbackNode === a ? Z0.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Rr, q1(e.containerInfo);
      }
      var u = Fm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Ox(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, $u);
          break;
        }
        case Dm: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = NS + K0 - Wn();
            if (i > 10) {
              var u = Kc(e, Q);
              if (u !== Q)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ca(), Zc(e, s);
                break;
              }
              e.timeoutHandle = zy(ac.bind(null, e, Va, $u), i);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case jp: {
          if ($o(e, a), Od(a))
            break;
          if (!hR()) {
            var f = ai(e, a), p = f, v = Wn() - p, y = qx(v) - v;
            if (y > 10) {
              e.timeoutHandle = zy(ac.bind(null, e, Va, $u), y);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case G0: {
          ac(e, Va, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lx(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!K(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
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
    function $o(e, t) {
      t = ws(t, Lm), t = ws(t, Hp), $v(e, t);
    }
    function tR(e) {
      if (Gw(), (xt & ($r | ji)) !== hr)
        throw new Error("Should not already be working.");
      Yu();
      var t = Kc(e, Q);
      if (!ea(t, Fe))
        return Ba(e, Wn()), null;
      var a = Fm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== Q && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, Q), $o(e, t), Ba(e, Wn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, $u), Ba(e, Wn()), null;
    }
    function Nx(e, t) {
      t !== Q && (ef(e, et(t, Fe)), Ba(e, Wn()), (xt & ($r | ji)) === hr && (Vp(), No()));
    }
    function HS(e, t) {
      var a = xt;
      xt |= W0;
      try {
        return e(t);
      } finally {
        xt = a, xt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), JE());
      }
    }
    function Mx(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, Fn(Nr), e(t, a, i, u);
      } finally {
        Fn(s), Br.transition = f, xt === hr && Vp();
      }
    }
    function Iu(e) {
      Vo !== null && Vo.tag === Lo && (xt & ($r | ji)) === hr && Yu();
      var t = xt;
      xt |= W0;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, Fn(Nr), e ? e() : void 0;
      } finally {
        Fn(i), Br.transition = a, xt = t, (xt & ($r | ji)) === hr && No();
      }
    }
    function nR() {
      return (xt & ($r | ji)) !== hr;
    }
    function jm(e, t) {
      ia(LS, Xl, e), Xl = et(Xl, t);
    }
    function PS(e) {
      Xl = LS.current, aa(LS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, l1(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          L0(u, i), i = i.return;
        }
      Ea = e;
      var s = ic(e.current, null);
      return On = s, mr = Xl = t, yr = Bu, Fp = null, Om = Q, Hp = Q, Lm = Q, Pp = null, Va = null, kw(), al.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = On;
        try {
          if (Wh(), _C(), cn(), DS.current = null, a === null || a.return === null) {
            yr = Ap, Fp = t, On = null;
            return;
          }
          if (je && a.mode & Ut && Rm(a, !0), Oe)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xi(a, i, mr);
            } else
              fs(a, t, mr);
          rb(e, a.return, a, t, mr), uR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = kS.current;
      return kS.current = ym, e === null ? ym : e;
    }
    function iR(e) {
      kS.current = e;
    }
    function Ux() {
      NS = Wn();
    }
    function Yp(e) {
      Om = et(e, Om);
    }
    function zx() {
      yr === Bu && (yr = Dm);
    }
    function VS() {
      (yr === Bu || yr === Dm || yr === tc) && (yr = jp), Ea !== null && (Rs(Om) || Rs(Hp)) && $o(Ea, mr);
    }
    function Ax(e) {
      yr !== jp && (yr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function jx() {
      return yr === Bu;
    }
    function Fm(e, t) {
      var a = xt;
      xt |= $r;
      var i = aR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, mr), u.clear()), Iv(e, t);
        }
        $u = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Fx();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Wh(), xt = a, iR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Ea = null, mr = Q, yr;
    }
    function Fx() {
      for (; On !== null; )
        lR(On);
    }
    function Hx(e, t) {
      var a = xt;
      xt |= $r;
      var i = aR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, mr), u.clear()), Iv(e, t);
        }
        $u = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Px();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Wh(), iR(i), xt = a, On !== null ? (zv(), Bu) : (Lc(), Ea = null, mr = Q, yr);
    }
    function Px() {
      for (; On !== null && !hd(); )
        lR(On);
    }
    function lR(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & Ut) !== De ? (Ig(e), a = BS(t, e, Xl), Rm(e, !0)) : a = BS(t, e, Xl), cn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : On = a, DS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === ke) {
          Gt(t);
          var u = void 0;
          if ((t.mode & Ut) === De ? u = O0(a, t, Xl) : (Ig(t), u = O0(a, t, Xl), Rm(t, !1)), cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = zb(a, t);
          if (s !== null) {
            s.flags &= Dv, On = s;
            return;
          }
          if ((t.mode & Ut) !== De) {
            Rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = ke, i.deletions = null;
          else {
            yr = OS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      yr === Bu && (yr = G0);
    }
    function ac(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, Fn(Nr), Vx(e, t, a, i);
      } finally {
        Br.transition = u, Fn(i);
      }
      return null;
    }
    function Vx(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (Jx(), (xt & ($r | ji)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Q && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Nt;
      var f = et(u.lanes, u.childLanes);
      Ud(e, f), e === Ea && (Ea = null, On = null, mr = Q), ((u.subtreeFlags & Gi) !== ke || (u.flags & Gi) !== ke) && (nc || (nc = !0, zS = a, YS(Ki, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== ke, v = (u.flags & (kl | Dl | Ol | Gi)) !== ke;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        Fn(Nr);
        var _ = xt;
        xt |= ji, DS.current = null, Pb(e, u), JC(), ex(e, u, s), ZT(e.containerInfo), e.current = u, ds(s), tx(u, e, s), ps(), md(), xt = _, Fn(g), Br.transition = y;
      } else
        e.current = u, JC();
      var b = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === Q && (Vf = null), b || fR(e.current, !1), gd(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), Ex(), Ba(e, Wn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], se = H.stack, Ne = H.digest;
          M(H.value, {
            componentStack: se,
            digest: Ne
          });
        }
      if (Nm) {
        Nm = !1;
        var be = MS;
        throw MS = null, be;
      }
      return ea(Bp, Fe) && e.tag !== Lo && Yu(), f = e.pendingLanes, ea(f, Fe) ? (Qw(), e === AS ? $p++ : ($p = 0, AS = e)) : $p = 0, No(), Rd(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = Wv(Bp), t = ks(Ua, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, Fn(t), $x();
        } finally {
          Fn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Bx(e) {
      US.push(e), nc || (nc = !0, YS(Ki, function() {
        return Yu(), null;
      }));
    }
    function $x() {
      if (Vo === null)
        return !1;
      var e = zS;
      zS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = Q, (xt & ($r | ji)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Mm = !1, Su(a);
      var i = xt;
      xt |= ji, ox(t.current), ax(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ib(t, f);
        }
      }
      bd(), fR(t.current, !0), xt = i, No(), Mm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, jS = !1, Mm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Ix(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Yx(e) {
      Nm || (Nm = !0, MS = e);
    }
    var Qx = Yx;
    function sR(e, t, a) {
      var i = Zs(a, t), u = l0(e, i, Fe), s = Uo(e, u, Fe), f = Ca();
      s !== null && (So(s, Fe, f), Ba(s, f));
    }
    function fn(e, t, a) {
      if (jb(a), Wp(!1), e.tag === ee) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ee) {
          sR(i, e, a);
          return;
        } else if (i.tag === te) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = oS(i, f, Fe), v = Uo(i, p, Fe), y = Ca();
            v !== null && (So(v, Fe, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      Zc(e, a), n_(e), Ea === e && ku(mr, a) && (yr === jp || yr === Dm && _u(mr) && Wn() - NS < K0 ? rc(e, Q) : Lm = et(Lm, a)), Ba(e, u);
    }
    function cR(e, t) {
      t === Nt && (t = _x(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (So(i, t, a), Ba(i, a));
    }
    function Gx(e) {
      var t = e.memoizedState, a = Nt;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function Kx(e, t) {
      var a = Nt, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Yt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function qx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tx(e / 1960) * 1960;
    }
    function Xx() {
      if ($p > bx)
        throw $p = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > xx && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jx() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Gt(e), Hm(e, _l, yx), t && Hm(e, Ti, gx), Hm(e, _l, hx), t && Hm(e, Ti, mx), cn();
    }
    function Hm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Pm = null;
    function dR(e) {
      {
        if ((xt & $r) !== hr || !(e.mode & vt))
          return;
        var t = e.tag;
        if (t !== qe && t !== ee && t !== te && t !== ae && t !== $e && t !== tt && t !== Ue)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Pm !== null) {
          if (Pm.has(a))
            return;
          Pm.add(a);
        } else
          Pm = /* @__PURE__ */ new Set([a]);
        var i = lr;
        try {
          Gt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : cn();
        }
      }
    }
    var BS;
    {
      var Zx = null;
      BS = function(e, t, a) {
        var i = ER(Zx, t);
        try {
          return b0(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Wh(), _C(), L0(e, t), ER(t, i), t.mode & Ut && Ig(t), xl(null, b0, null, e, t, a), Qi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function e_(e) {
      if (mi && !$w())
        switch (e.tag) {
          case ae:
          case $e:
          case Ue: {
            var t = On && Ye(On) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          xs(e, i, t);
        });
      }
    }
    var IS = {};
    function YS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), IS) : vd(e, t);
      }
    }
    function vR(e) {
      if (e !== IS)
        return Lv(e);
    }
    function hR() {
      return dl.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & vt) {
          if (!Q0())
            return;
        } else if (!Rx() || xt !== hr || e.tag !== ae && e.tag !== $e && e.tag !== Ue)
          return;
        if (dl.current === null) {
          var t = lr;
          try {
            Gt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Gt(e) : cn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Lo && Q0() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      J0 = e;
    }
    var Fi = null, $f = null, r_ = function(e) {
      Fi = e;
    };
    function If(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return If(e);
    }
    function WS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
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
    function mR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case te: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ae: {
            (typeof i == "function" || s === We) && (u = !0);
            break;
          }
          case $e: {
            (s === Y || s === We) && (u = !0);
            break;
          }
          case tt:
          case Ue: {
            (s === Je || s === We) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          GS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Yu(), Iu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ae:
          case Ue:
          case te:
            v = p;
            break;
          case $e:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Fi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === te ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ha(e, Fe);
          b !== null && gr(b, e, Fe, en);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ae:
          case Ue:
          case te:
            p = f;
            break;
          case $e:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case Ee:
              t.add(i.stateNode.containerInfo);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
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
    var qS;
    {
      qS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return XS(e) ? te : ae;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return $e;
        if (t === Je)
          return tt;
      }
      return qe;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case qe:
        case ae:
        case Ue:
          a.type = If(e.type);
          break;
        case te:
          a.type = QS(e.type);
          break;
        case $e:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p_(e, t, a) {
      var i;
      return e === jh ? (i = vt, t === !0 && (i |= Xt, i |= zt)) : i = De, Jr && (i |= Ut), oi(ee, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = qe, p = e;
      if (typeof e == "function")
        XS(e) ? (f = te, p = QS(p)) : p = If(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case di:
            return Io(a.children, u, s, t);
          case Wa:
            f = st, u |= Xt, (u & vt) !== De && (u |= zt);
            break;
          case pi:
            return v_(a, u, s, t);
          case ue:
            return h_(a, u, s, t);
          case he:
            return m_(a, u, s, t);
          case wn:
            return SR(a, u, s, t);
          case an:
          case ht:
          case sn:
          case ir:
          case pt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = at;
                  break e;
                case R:
                  f = tn;
                  break e;
                case Y:
                  f = $e, p = WS(p);
                  break e;
                case Je:
                  f = tt;
                  break e;
                case We:
                  f = It, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = oi(gt, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(ct, e, i, t | Ut);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = oi(Te, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = oi(Yt, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = oi(_e, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = oi(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = oi(le, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = oi(Bt, null, null, De);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = oi(qe, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Nt, this.eventTimes = bs(Q), this.expirationTimes = bs(en), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = bs(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), _ = p_(t, s);
      g.current = _, _.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return vg(_), g;
    }
    var nE = "18.3.1";
    function E_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rE, aE;
    rE = !1, aE = {};
    function RR(e) {
      if (!e)
        return ui;
      var t = po(e), a = nw(t);
      if (t.tag === te) {
        var i = t.type;
        if (Il(i))
          return KE(t, i, a);
      }
      return a;
    }
    function C_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Xt) {
          var s = Ye(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = lr;
            try {
              Gt(u), a.mode & Xt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = CR(a, i, g, e, u, s, f, p, v);
      _.context = RR(null);
      var b = _.current, M = Ca(), A = Bo(b), H = Pu(M, A);
      return H.callback = t ?? null, Uo(b, H, A), kx(_, A, M), _;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ca(), f = Bo(u);
      gn(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && lr !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(lr) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (gr(y, u, f, s), Jh(y, u, f)), f;
    }
    function Vm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R_(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = jv(t);
            Nx(t, a);
          }
          break;
        }
        case Te: {
          Iu(function() {
            var u = Ha(e, Fe);
            if (u !== null) {
              var s = Ca();
              gr(u, e, Fe, s);
            }
          });
          var i = Fe;
          iE(e, i);
          break;
        }
      }
    }
    function bR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function iE(e, t) {
      bR(e, t);
      var a = e.alternate;
      a && bR(a, t);
    }
    function T_(e) {
      if (e.tag === Te) {
        var t = Ss, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function w_(e) {
      if (e.tag === Te) {
        var t = Bo(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function xR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function b_(e) {
      return _R(e);
    }
    var kR = function(e) {
      return !1;
    };
    function x_(e) {
      return kR(e);
    }
    var DR = null, OR = null, LR = null, NR = null, MR = null, UR = null, zR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = ot(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (ot(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = ot(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ot(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          Pe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Pe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ot(e) ? e.slice() : rt({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, $R = function(e, t, a) {
        return BR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ha(e, Fe);
          f !== null && gr(f, e, Fe, en);
        }
      }, OR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Ha(e, Fe);
          s !== null && gr(s, e, Fe, en);
        }
      }, LR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ha(e, Fe);
          f !== null && gr(f, e, Fe, en);
        }
      }, NR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Fe);
        i !== null && gr(i, e, Fe, en);
      }, MR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, Fe);
        a !== null && gr(a, e, Fe, en);
      }, UR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Fe);
        i !== null && gr(i, e, Fe, en);
      }, zR = function(e) {
        var t = Ha(e, Fe);
        t !== null && gr(t, e, Fe, en);
      }, AR = function(e) {
        _R = e;
      }, jR = function(e) {
        kR = e;
      };
    }
    function __(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function k_(e) {
      return null;
    }
    function D_() {
      return lr;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = L.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: NR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: UR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || k_,
        // React Refresh
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var IR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Bm.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : $m(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Bm.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Gp(null, e, null, null);
        }), IE(t);
      }
    };
    function L_(e, t) {
      if (!$m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YR(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? Pe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, jh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Bm(e) {
      this._internalRoot = e;
    }
    function N_(e) {
      e && Jv(e);
    }
    Bm.prototype.unstable_scheduleHydration = N_;
    function M_(e, t, a) {
      if (!$m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, jh, i, s, f, p, v);
      if (Oh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          jw(y, _);
        }
      return new Bm(y);
    }
    function $m(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === nd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = L.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Vm(f);
            s.call(b);
          };
        }
        var f = wR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Vm(g);
            y.call(b);
          };
        }
        var g = TR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = g, Oh(g.current, e);
        var _ = e.nodeType === Mn ? e.parentNode : e;
        return ep(_), Iu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function A_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, u) {
      QR(a), A_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Vm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Vm(f);
    }
    var GR = !1;
    function j_(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = U_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : C_(e, "findDOMNode");
    }
    function F_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function H_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function P_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var KR = !1;
    function V_(e) {
      if (KR || (KR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, IE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && Do(u)), f = e.nodeType === Wr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(R_), Eo(T_), Gv(w_), Os(Aa), jd(Yv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc($T), ay(HS, Mx, Iu);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$m(t))
        throw new Error("Target container is not a DOM element.");
      return E_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Lh, oo, Sc, HS]
    };
    function I_(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function Y_(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t, a);
    }
    function Q_(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var W_ = O_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!W_ && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, Ia.createPortal = B_, Ia.createRoot = I_, Ia.findDOMNode = j_, Ia.flushSync = Q_, Ia.hydrate = F_, Ia.hydrateRoot = Y_, Ia.render = H_, Ia.unmountComponentAtNode = V_, Ia.unstable_batchedUpdates = HS, Ia.unstable_renderSubtreeIntoContainer = $_, Ia.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch ($) {
      console.error($);
    }
  }
}
process.env.NODE_ENV === "production" ? (sT(), hE.exports = nk()) : hE.exports = rk();
var ak = hE.exports, mE, Qm = ak;
if (process.env.NODE_ENV === "production")
  mE = Qm.createRoot, Qm.hydrateRoot;
else {
  var lT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  mE = function($, I) {
    lT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot($, I);
    } finally {
      lT.usingClientEntryPoint = !1;
    }
  };
}
class dE extends Error {
  constructor(I, L, Qe) {
    super(Qe), this.status = I, this.body = L, this.name = "BookingApiError";
  }
}
function ik($) {
  const I = $.engineUrl.replace(/\/$/, ""), L = encodeURIComponent($.salonSlug), Qe = $.fetchImpl ?? fetch;
  async function He(Pe, S) {
    const Ke = await Qe(`${I}${Pe}`, {
      ...S,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": $.apiKey,
        ...(S == null ? void 0 : S.headers) ?? {}
      }
    }), ae = await Ke.text(), te = ae ? lk(ae) : null;
    if (!Ke.ok) {
      const qe = te && typeof te == "object" && "error" in te && typeof te.error == "string" ? te.error : `HTTP ${Ke.status}`;
      throw new dE(Ke.status, te, qe);
    }
    return te;
  }
  return {
    async getSalon() {
      return (await He(`/api/public/salons/${L}`)).salon;
    },
    async getStaff() {
      return (await He(`/api/public/salons/${L}/staff`)).staff;
    },
    async getSlots({ date: Pe, staffMemberId: S }) {
      const Ke = new URLSearchParams({ date: Pe });
      return S && Ke.set("staffMemberId", S), (await He(
        `/api/public/salons/${L}/slots?${Ke.toString()}`
      )).slots ?? [];
    },
    async createBooking(Pe) {
      try {
        const S = await He(
          "/api/public/bookings",
          { method: "POST", body: JSON.stringify({ ...Pe, salonSlug: $.salonSlug }) }
        );
        return { ok: !0, bookingId: S.bookingId, status: S.status, message: S.message };
      } catch (S) {
        if (S instanceof dE) return { ok: !1, error: S.message };
        throw S;
      }
    },
    async startCheckout(Pe) {
      try {
        const S = await He(
          "/api/public/booking-checkout",
          { method: "POST", body: JSON.stringify({ ...Pe, salonSlug: $.salonSlug }) }
        );
        return { ok: !0, checkoutUrl: S.checkoutUrl, sessionId: S.sessionId };
      } catch (S) {
        if (S instanceof dE) return { ok: !1, error: S.message };
        throw S;
      }
    }
  };
}
function lk($) {
  try {
    return JSON.parse($);
  } catch {
    return null;
  }
}
const uk = {
  en: {
    pickService: "Service",
    pickStaff: "Stylist",
    anyStaff: "No preference",
    pickDate: "Date",
    pickTime: "Time",
    yourName: "Full name",
    phone: "Phone",
    email: "Email (optional)",
    notes: "Notes (optional)",
    submit: "Reserve",
    submitting: "Reserving…",
    success: "Reservation received. You will get a confirmation shortly.",
    none: "No times available on this date.",
    loadingSlots: "Checking availability…",
    error: "Something went wrong.",
    config: "Booking module not configured. Add a Clicka API key to enable reservations."
  },
  bg: {
    pickService: "Услуга",
    pickStaff: "Стилист",
    anyStaff: "Без предпочитание",
    pickDate: "Дата",
    pickTime: "Час",
    yourName: "Име",
    phone: "Телефон",
    email: "Имейл (по избор)",
    notes: "Бележки (по избор)",
    submit: "Запази",
    submitting: "Изпращане…",
    success: "Резервацията е получена. Ще получиш потвърждение скоро.",
    none: "Няма свободни часове за този ден.",
    loadingSlots: "Проверка на свободни часове…",
    error: "Нещо се обърка.",
    config: "Booking модулът не е конфигуриран. Добави Clicka API ключ за резервации."
  }
};
function ok($) {
  const I = new URLSearchParams(location.search), L = document.body.dataset.lang || "en", Qe = window, He = (Pe) => {
    var S;
    return (S = document.querySelector(`meta[name="${Pe}"]`)) == null ? void 0 : S.content;
  };
  return {
    lang: L,
    engineUrl: $.dataset.engine || He("clicka:engine") || Qe.URBAN_ENGINE_URL || "https://clicka.bg",
    salonSlug: $.dataset.salon || He("clicka:salon") || Qe.URBAN_SALON_SLUG || "urban-by-delyana",
    apiKey: $.dataset.apiKey || He("clicka:api-key") || Qe.URBAN_CLICKA_API_KEY || "",
    initialService: I.get("service") || $.dataset.service || ""
  };
}
function uT() {
  const $ = /* @__PURE__ */ new Date();
  return $.setMinutes($.getMinutes() - $.getTimezoneOffset()), $.toISOString().slice(0, 10);
}
function sk($, I) {
  var He;
  const L = (/* @__PURE__ */ new Date(I + "T00:00:00")).toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
  return ((He = $.working_hours) == null ? void 0 : He[L]) || null;
}
function* ck($, I, L) {
  const [Qe, He] = $.split(":").map(Number), [Pe, S] = I.split(":").map(Number), Ke = Qe * 60 + He, ae = Pe * 60 + S;
  for (let te = Ke; te + L <= ae; te += L) {
    const qe = String(Math.floor(te / 60)).padStart(2, "0"), ee = String(te % 60).padStart(2, "0");
    yield `${qe}:${ee}`;
  }
}
function fk($, I) {
  return I.some((L) => L.start.endsWith($) || L.start.slice(11, 16) === $);
}
function dk({ config: $ }) {
  const I = uk[$.lang], L = Cn.useMemo(() => $.apiKey ? ik({
    engineUrl: $.engineUrl,
    apiKey: $.apiKey,
    salonSlug: $.salonSlug
  }) : null, [$.apiKey, $.engineUrl, $.salonSlug]), [Qe, He] = Cn.useState(null), [Pe, S] = Cn.useState([]), [Ke, ae] = Cn.useState($.initialService), [te, qe] = Cn.useState(""), [ee, Ee] = Cn.useState(uT()), [le, Ve] = Cn.useState(""), [gt, st] = Cn.useState([]), [tn, at] = Cn.useState(!1), [$e, ct] = Cn.useState(""), [Te, tt] = Cn.useState(""), [Ue, It] = Cn.useState(""), [Ot, Bt] = Cn.useState(""), [Yt, Et] = Cn.useState(!1), [_e, Lt] = Cn.useState(null), [Ct, Rt] = Cn.useState(null);
  Cn.useEffect(() => {
    if (!L) return;
    let V = !1;
    return Promise.all([L.getSalon(), L.getStaff()]).then(([w, F]) => {
      if (!V && (He(w), S(F), !Ke && Array.isArray(w.services) && w.services.length)) {
        const Oe = w.services[0];
        Oe != null && Oe.slug && ae(Oe.slug);
      }
    }).catch((w) => Rt((w == null ? void 0 : w.message) || I.error)), () => {
      V = !0;
    };
  }, [L]), Cn.useEffect(() => {
    if (!L || !ee) return;
    at(!0);
    let V = !1;
    return L.getSlots({ date: ee, staffMemberId: te || void 0 }).then((w) => {
      V || st(w);
    }).catch(() => {
      V || st([]);
    }).finally(() => {
      V || at(!1);
    }), () => {
      V = !0;
    };
  }, [L, ee, te]);
  const Se = Cn.useMemo(() => !Qe || !Array.isArray(Qe.services) ? [] : Qe.services.filter((V) => V.slug), [Qe]), J = Cn.useMemo(() => {
    if (!Qe) return [];
    const V = sk(Qe, ee);
    return !V || V.closed ? [] : Array.from(ck(V.open, V.close, 30));
  }, [Qe, ee]);
  async function Re(V) {
    if (V.preventDefault(), !L) return;
    Rt(null), Et(!0);
    const w = (/* @__PURE__ */ new Date(`${ee}T${le}:00`)).toISOString(), F = await L.createBooking({
      serviceSlug: Ke,
      staffMemberId: te || void 0,
      startsAt: w,
      clientName: $e,
      clientPhone: Te,
      clientEmail: Ue || void 0,
      notes: Ot || void 0
    });
    Et(!1), F.ok ? (Lt(F.message || I.success), ct(""), tt(""), It(""), Bt(""), Ve("")) : Rt(F.error || I.error);
  }
  return L ? _e ? /* @__PURE__ */ yt.jsxs("div", { className: "clicka_pending", children: [
    /* @__PURE__ */ yt.jsx("span", { className: "cap", children: $.lang === "bg" ? "Готово" : "Confirmed" }),
    /* @__PURE__ */ yt.jsx("p", { className: "clicka_pending_t", children: _e })
  ] }) : /* @__PURE__ */ yt.jsxs("form", { className: "booking_form", onSubmit: Re, children: [
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.pickService }),
      /* @__PURE__ */ yt.jsxs("select", { required: !0, value: Ke, onChange: (V) => ae(V.target.value), children: [
        /* @__PURE__ */ yt.jsx("option", { value: "", disabled: !0, children: "—" }),
        Se.map((V) => /* @__PURE__ */ yt.jsx("option", { value: V.slug, children: V.name }, V.slug))
      ] })
    ] }),
    Pe.length > 0 && /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.pickStaff }),
      /* @__PURE__ */ yt.jsxs("select", { value: te, onChange: (V) => qe(V.target.value), children: [
        /* @__PURE__ */ yt.jsx("option", { value: "", children: I.anyStaff }),
        Pe.filter((V) => !Ke || V.serviceSlugs.includes(Ke)).map((V) => /* @__PURE__ */ yt.jsx("option", { value: V.id, children: V.name }, V.id))
      ] })
    ] }),
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.pickDate }),
      /* @__PURE__ */ yt.jsx("input", { type: "date", required: !0, value: ee, min: uT(), onChange: (V) => {
        Ee(V.target.value), Ve("");
      } })
    ] }),
    /* @__PURE__ */ yt.jsxs("div", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.pickTime }),
      tn ? /* @__PURE__ */ yt.jsx("p", { className: "book_note", children: I.loadingSlots }) : J.length === 0 ? /* @__PURE__ */ yt.jsx("p", { className: "book_note", children: I.none }) : /* @__PURE__ */ yt.jsx("div", { className: "booking_slots", children: J.map((V) => {
        const w = fk(V, gt), F = le === V;
        return /* @__PURE__ */ yt.jsx(
          "button",
          {
            type: "button",
            disabled: w,
            className: `booking_slot${F ? " is_active" : ""}`,
            onClick: () => Ve(V),
            children: V
          },
          V
        );
      }) })
    ] }),
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.yourName }),
      /* @__PURE__ */ yt.jsx("input", { type: "text", required: !0, value: $e, onChange: (V) => ct(V.target.value) })
    ] }),
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.phone }),
      /* @__PURE__ */ yt.jsx("input", { type: "tel", required: !0, value: Te, onChange: (V) => tt(V.target.value) })
    ] }),
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.email }),
      /* @__PURE__ */ yt.jsx("input", { type: "email", value: Ue, onChange: (V) => It(V.target.value) })
    ] }),
    /* @__PURE__ */ yt.jsxs("label", { className: "booking_field", children: [
      /* @__PURE__ */ yt.jsx("span", { className: "booking_label", children: I.notes }),
      /* @__PURE__ */ yt.jsx("textarea", { rows: 3, value: Ot, onChange: (V) => Bt(V.target.value) })
    ] }),
    Ct && /* @__PURE__ */ yt.jsx("p", { className: "booking_error", children: Ct }),
    /* @__PURE__ */ yt.jsx("button", { type: "submit", className: "btn btn_solid", disabled: Yt || !le || !Ke, children: /* @__PURE__ */ yt.jsx("span", { children: Yt ? I.submitting : I.submit }) })
  ] }) : /* @__PURE__ */ yt.jsx("div", { className: "clicka_pending", children: /* @__PURE__ */ yt.jsx("p", { className: "book_note", children: I.config }) });
}
const Wm = document.getElementById("clicka_booking");
if (Wm) {
  const $ = ok(Wm);
  Wm.innerHTML = "", mE(Wm).render(/* @__PURE__ */ yt.jsx(dk, { config: $ }));
}
