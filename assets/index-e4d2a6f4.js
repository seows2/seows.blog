var Pg = Object.defineProperty;
var Cg = (e, t, n) =>
  t in e
    ? Pg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var E = (e, t, n) => (Cg(e, typeof t != "symbol" ? t + "" : t, n), n);
function Mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var gs =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rd = { exports: {} },
  qo = {},
  Id = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Symbol.for("react.element"),
  Rg = Symbol.for("react.portal"),
  Ig = Symbol.for("react.fragment"),
  bg = Symbol.for("react.strict_mode"),
  Ag = Symbol.for("react.profiler"),
  Og = Symbol.for("react.provider"),
  Ng = Symbol.for("react.context"),
  zg = Symbol.for("react.forward_ref"),
  jg = Symbol.for("react.suspense"),
  Lg = Symbol.for("react.memo"),
  Fg = Symbol.for("react.lazy"),
  yh = Symbol.iterator;
function Dg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yh && e[yh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ad = Object.assign,
  Od = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || bd);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nd() {}
Nd.prototype = Fr.prototype;
function Gu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || bd);
}
var Xu = (Gu.prototype = new Nd());
Xu.constructor = Gu;
Ad(Xu, Fr.prototype);
Xu.isPureReactComponent = !0;
var wh = Array.isArray,
  zd = Object.prototype.hasOwnProperty,
  Qu = { current: null },
  jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ld(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      zd.call(t, r) && !jd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ss,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Qu.current,
  };
}
function $g(e, t) {
  return {
    $$typeof: ss,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ss;
}
function Ug(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xh = /\/+/g;
function Ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ug("" + e.key)
    : t.toString(36);
}
function Us(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ss:
          case Rg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ia(o, 0) : r),
      wh(i)
        ? ((n = ""),
          e != null && (n = e.replace(xh, "$&/") + "/"),
          Us(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (qu(i) &&
            (i = $g(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), wh(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Ia(s, a);
      o += Us(s, t, n, l, i);
    }
  else if (((l = Dg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Ia(s, a++)), (o += Us(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Us(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Bg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Bs = { transition: null },
  Hg = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Bs,
    ReactCurrentOwner: Qu,
  };
H.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = Fr;
H.Fragment = Ig;
H.Profiler = Ag;
H.PureComponent = Gu;
H.StrictMode = bg;
H.Suspense = jg;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hg;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ad({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Qu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      zd.call(t, l) &&
        !jd.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ss, type: e.type, key: i, ref: s, props: r, _owner: o };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ng,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Og, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = Ld;
H.createFactory = function (e) {
  var t = Ld.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: zg, render: e };
};
H.isValidElement = qu;
H.lazy = function (e) {
  return { $$typeof: Fg, _payload: { _status: -1, _result: e }, _init: Bg };
};
H.memo = function (e, t) {
  return { $$typeof: Lg, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Bs.transition;
  Bs.transition = {};
  try {
    e();
  } finally {
    Bs.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Fe.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
H.useId = function () {
  return Fe.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Fe.current.useRef(e);
};
H.useState = function (e) {
  return Fe.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Fe.current.useTransition();
};
H.version = "18.2.0";
Id.exports = H;
var C = Id.exports;
const Te = Lr(C),
  Vg = Mg({ __proto__: null, default: Te }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wg = C,
  Yg = Symbol.for("react.element"),
  Gg = Symbol.for("react.fragment"),
  Xg = Object.prototype.hasOwnProperty,
  Qg = Wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Xg.call(t, r) && !qg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Yg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Qg.current,
  };
}
qo.Fragment = Gg;
qo.jsx = Fd;
qo.jsxs = Fd;
Rd.exports = qo;
var x = Rd.exports,
  vl = {},
  Dd = { exports: {} },
  tt = {},
  $d = { exports: {} },
  Ud = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, j) {
    var L = b.length;
    b.push(j);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        K = b[Q];
      if (0 < i(K, j)) (b[Q] = j), (b[L] = K), (L = Q);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var j = b[0],
      L = b.pop();
    if (L !== j) {
      b[0] = L;
      e: for (var Q = 0, K = b.length, $e = K >>> 1; Q < $e; ) {
        var we = 2 * (Q + 1) - 1,
          Xe = b[we],
          xe = we + 1,
          ze = b[xe];
        if (0 > i(Xe, L))
          xe < K && 0 > i(ze, Xe)
            ? ((b[Q] = ze), (b[xe] = L), (Q = xe))
            : ((b[Q] = Xe), (b[we] = L), (Q = we));
        else if (xe < K && 0 > i(ze, L)) (b[Q] = ze), (b[xe] = L), (Q = xe);
        else break e;
      }
    }
    return j;
  }
  function i(b, j) {
    var L = b.sortIndex - j.sortIndex;
    return L !== 0 ? L : b.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= b)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function w(b) {
    if (((v = !1), m(b), !y))
      if (n(l) !== null) (y = !0), he(T);
      else {
        var j = n(u);
        j !== null && Z(w, j.startTime - b);
      }
  }
  function T(b, j) {
    (y = !1), v && ((v = !1), p(I), (I = -1)), (g = !0);
    var L = d;
    try {
      for (
        m(j), h = n(l);
        h !== null && (!(h.expirationTime > j) || (b && !F()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var K = Q(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof K == "function" ? (h.callback = K) : h === n(l) && r(l),
            m(j);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var $e = !0;
      else {
        var we = n(u);
        we !== null && Z(w, we.startTime - j), ($e = !1);
      }
      return $e;
    } finally {
      (h = null), (d = L), (g = !1);
    }
  }
  var P = !1,
    k = null,
    I = -1,
    N = 5,
    _ = -1;
  function F() {
    return !(e.unstable_now() - _ < N);
  }
  function V() {
    if (k !== null) {
      var b = e.unstable_now();
      _ = b;
      var j = !0;
      try {
        j = k(!0, b);
      } finally {
        j ? G() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var G;
  if (typeof f == "function")
    G = function () {
      f(V);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      de = oe.port2;
    (oe.port1.onmessage = V),
      (G = function () {
        de.postMessage(null);
      });
  } else
    G = function () {
      S(V, 0);
    };
  function he(b) {
    (k = b), P || ((P = !0), G());
  }
  function Z(b, j) {
    I = S(function () {
      b(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), he(T));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var L = d;
      d = j;
      try {
        return b();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, j) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var L = d;
      d = b;
      try {
        return j();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (b, j, L) {
      var Q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q))
          : (L = Q),
        b)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = L + K),
        (b = {
          id: c++,
          callback: j,
          priorityLevel: b,
          startTime: L,
          expirationTime: K,
          sortIndex: -1,
        }),
        L > Q
          ? ((b.sortIndex = L),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (v ? (p(I), (I = -1)) : (v = !0), Z(w, L - Q)))
          : ((b.sortIndex = K), t(l, b), y || g || ((y = !0), he(T))),
        b
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (b) {
      var j = d;
      return function () {
        var L = d;
        d = j;
        try {
          return b.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    });
})(Ud);
$d.exports = Ud;
var Kg = $d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd = C,
  et = Kg;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hd = new Set(),
  Mi = {};
function Wn(e, t) {
  kr(e, t), kr(e + "Capture", t);
}
function kr(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) Hd.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  Zg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sh = {},
  Eh = {};
function Jg(e) {
  return yl.call(Eh, e)
    ? !0
    : yl.call(Sh, e)
    ? !1
    : Zg.test(e)
    ? (Eh[e] = !0)
    : ((Sh[e] = !0), !1);
}
function ev(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tv(e, t, n, r) {
  if (t === null || typeof t > "u" || ev(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function De(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ku = /[\-:]([a-z])/g;
function Zu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ku, Zu);
    Re[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ku, Zu);
    Re[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ku, Zu);
  Re[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ju(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tv(t, n, i, r) && (n = null),
    r || i === null
      ? Jg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ys = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  ec = Symbol.for("react.strict_mode"),
  wl = Symbol.for("react.profiler"),
  Vd = Symbol.for("react.provider"),
  Wd = Symbol.for("react.context"),
  tc = Symbol.for("react.forward_ref"),
  xl = Symbol.for("react.suspense"),
  Sl = Symbol.for("react.suspense_list"),
  nc = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  Yd = Symbol.for("react.offscreen"),
  Th = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Th && e[Th]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  ba;
function li(e) {
  if (ba === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ba = (t && t[1]) || "";
    }
  return (
    `
` +
    ba +
    e
  );
}
var Aa = !1;
function Oa(e, t) {
  if (!e || Aa) return "";
  Aa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Aa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? li(e) : "";
}
function nv(e) {
  switch (e.tag) {
    case 5:
      return li(e.type);
    case 16:
      return li("Lazy");
    case 13:
      return li("Suspense");
    case 19:
      return li("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Oa(e.type, !1)), e;
    case 11:
      return (e = Oa(e.type.render, !1)), e;
    case 1:
      return (e = Oa(e.type, !0)), e;
    default:
      return "";
  }
}
function El(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case wl:
      return "Profiler";
    case ec:
      return "StrictMode";
    case xl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wd:
        return (e.displayName || "Context") + ".Consumer";
      case Vd:
        return (e._context.displayName || "Context") + ".Provider";
      case tc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nc:
        return (
          (t = e.displayName || null), t !== null ? t : El(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return El(e(t));
        } catch {}
    }
  return null;
}
function rv(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return El(t);
    case 8:
      return t === ec ? "StrictMode" : "Mode";
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
function yn(e) {
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
function Gd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function iv(e) {
  var t = Gd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ws(e) {
  e._valueTracker || (e._valueTracker = iv(e));
}
function Xd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function po(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tl(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function kh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qd(e, t) {
  (t = t.checked), t != null && Ju(e, "checked", t, !1);
}
function kl(e, t) {
  Qd(e, t);
  var n = yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _l(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _h(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _l(e, t, n) {
  (t !== "number" || po(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ui = Array.isArray;
function mr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ph(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (ui(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yn(n) };
}
function qd(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ch(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Kd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xs,
  Zd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xs = xs || document.createElement("div"),
          xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pi = {
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
    strokeWidth: !0,
  },
  sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(pi).forEach(function (e) {
  sv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e]);
  });
});
function Jd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pi.hasOwnProperty(e) && pi[e])
    ? ("" + t).trim()
    : t + "px";
}
function ep(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Jd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ov = ue(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Ml(e, t) {
  if (t) {
    if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Rl(e, t) {
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
var Il = null;
function rc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bl = null,
  gr = null,
  vr = null;
function Mh(e) {
  if ((e = ls(e))) {
    if (typeof bl != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = ta(t)), bl(e.stateNode, e.type, t));
  }
}
function tp(e) {
  gr ? (vr ? vr.push(e) : (vr = [e])) : (gr = e);
}
function np() {
  if (gr) {
    var e = gr,
      t = vr;
    if (((vr = gr = null), Mh(e), t)) for (e = 0; e < t.length; e++) Mh(t[e]);
  }
}
function rp(e, t) {
  return e(t);
}
function ip() {}
var Na = !1;
function sp(e, t, n) {
  if (Na) return e(t, n);
  Na = !0;
  try {
    return rp(e, t, n);
  } finally {
    (Na = !1), (gr !== null || vr !== null) && (ip(), np());
  }
}
function Ii(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ta(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Al = !1;
if (Ht)
  try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", {
      get: function () {
        Al = !0;
      },
    }),
      window.addEventListener("test", Xr, Xr),
      window.removeEventListener("test", Xr, Xr);
  } catch {
    Al = !1;
  }
function av(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mi = !1,
  mo = null,
  go = !1,
  Ol = null,
  lv = {
    onError: function (e) {
      (mi = !0), (mo = e);
    },
  };
function uv(e, t, n, r, i, s, o, a, l) {
  (mi = !1), (mo = null), av.apply(lv, arguments);
}
function cv(e, t, n, r, i, s, o, a, l) {
  if ((uv.apply(this, arguments), mi)) {
    if (mi) {
      var u = mo;
      (mi = !1), (mo = null);
    } else throw Error(M(198));
    go || ((go = !0), (Ol = u));
  }
}
function Yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function op(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rh(e) {
  if (Yn(e) !== e) throw Error(M(188));
}
function hv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Rh(i), e;
        if (s === r) return Rh(i), t;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function ap(e) {
  return (e = hv(e)), e !== null ? lp(e) : null;
}
function lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var up = et.unstable_scheduleCallback,
  Ih = et.unstable_cancelCallback,
  fv = et.unstable_shouldYield,
  dv = et.unstable_requestPaint,
  fe = et.unstable_now,
  pv = et.unstable_getCurrentPriorityLevel,
  ic = et.unstable_ImmediatePriority,
  cp = et.unstable_UserBlockingPriority,
  vo = et.unstable_NormalPriority,
  mv = et.unstable_LowPriority,
  hp = et.unstable_IdlePriority,
  Ko = null,
  At = null;
function gv(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : wv,
  vv = Math.log,
  yv = Math.LN2;
function wv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vv(e) / yv) | 0)) | 0;
}
var Ss = 64,
  Es = 4194304;
function ci(e) {
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
function yo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = ci(a)) : ((s &= o), s !== 0 && (r = ci(s)));
  } else (o = n & ~i), o !== 0 ? (r = ci(o)) : s !== 0 && (r = ci(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function xv(e, t) {
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
function Sv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - St(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = xv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Nl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fp() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function os(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Ev(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function sc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var q = 0;
function dp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pp,
  oc,
  mp,
  gp,
  vp,
  zl = !1,
  Ts = [],
  an = null,
  ln = null,
  un = null,
  bi = new Map(),
  Ai = new Map(),
  Jt = [],
  Tv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      bi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ai.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ls(t)), t !== null && oc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function kv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (an = Qr(an, e, t, n, r, i)), !0;
    case "dragenter":
      return (ln = Qr(ln, e, t, n, r, i)), !0;
    case "mouseover":
      return (un = Qr(un, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return bi.set(s, Qr(bi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ai.set(s, Qr(Ai.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yp(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = op(n)), t !== null)) {
          (e.blockedOn = t),
            vp(e.priority, function () {
              mp(n);
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
function Hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Il = r), n.target.dispatchEvent(r), (Il = null);
    } else return (t = ls(n)), t !== null && oc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ah(e, t, n) {
  Hs(e) && n.delete(t);
}
function _v() {
  (zl = !1),
    an !== null && Hs(an) && (an = null),
    ln !== null && Hs(ln) && (ln = null),
    un !== null && Hs(un) && (un = null),
    bi.forEach(Ah),
    Ai.forEach(Ah);
}
function qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl ||
      ((zl = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, _v)));
}
function Oi(e) {
  function t(i) {
    return qr(i, e);
  }
  if (0 < Ts.length) {
    qr(Ts[0], e);
    for (var n = 1; n < Ts.length; n++) {
      var r = Ts[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    an !== null && qr(an, e),
      ln !== null && qr(ln, e),
      un !== null && qr(un, e),
      bi.forEach(t),
      Ai.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    yp(n), n.blockedOn === null && Jt.shift();
}
var yr = Gt.ReactCurrentBatchConfig,
  wo = !0;
function Pv(e, t, n, r) {
  var i = q,
    s = yr.transition;
  yr.transition = null;
  try {
    (q = 1), ac(e, t, n, r);
  } finally {
    (q = i), (yr.transition = s);
  }
}
function Cv(e, t, n, r) {
  var i = q,
    s = yr.transition;
  yr.transition = null;
  try {
    (q = 4), ac(e, t, n, r);
  } finally {
    (q = i), (yr.transition = s);
  }
}
function ac(e, t, n, r) {
  if (wo) {
    var i = jl(e, t, n, r);
    if (i === null) Wa(e, t, r, xo, n), bh(e, r);
    else if (kv(i, e, t, n, r)) r.stopPropagation();
    else if ((bh(e, r), t & 4 && -1 < Tv.indexOf(e))) {
      for (; i !== null; ) {
        var s = ls(i);
        if (
          (s !== null && pp(s),
          (s = jl(e, t, n, r)),
          s === null && Wa(e, t, r, xo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Wa(e, t, r, null, n);
  }
}
var xo = null;
function jl(e, t, n, r) {
  if (((xo = null), (e = rc(r)), (e = Rn(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = op(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xo = e), null;
}
function wp(e) {
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
      switch (pv()) {
        case ic:
          return 1;
        case cp:
          return 4;
        case vo:
        case mv:
          return 16;
        case hp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  lc = null,
  Vs = null;
function xp() {
  if (Vs) return Vs;
  var e,
    t = lc,
    n = t.length,
    r,
    i = "value" in tn ? tn.value : tn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Vs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ws(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ks() {
  return !0;
}
function Oh() {
  return !1;
}
function nt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ks
        : Oh),
      (this.isPropagationStopped = Oh),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ks));
      },
      persist: function () {},
      isPersistent: ks,
    }),
    t
  );
}
var Dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uc = nt(Dr),
  as = ue({}, Dr, { view: 0, detail: 0 }),
  Mv = nt(as),
  ja,
  La,
  Kr,
  Zo = ue({}, as, {
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
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Kr &&
            (Kr && e.type === "mousemove"
              ? ((ja = e.screenX - Kr.screenX), (La = e.screenY - Kr.screenY))
              : (La = ja = 0),
            (Kr = e)),
          ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : La;
    },
  }),
  Nh = nt(Zo),
  Rv = ue({}, Zo, { dataTransfer: 0 }),
  Iv = nt(Rv),
  bv = ue({}, as, { relatedTarget: 0 }),
  Fa = nt(bv),
  Av = ue({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ov = nt(Av),
  Nv = ue({}, Dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zv = nt(Nv),
  jv = ue({}, Dr, { data: 0 }),
  zh = nt(jv),
  Lv = {
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
    MozPrintableKey: "Unidentified",
  },
  Fv = {
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
    224: "Meta",
  },
  Dv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $v(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dv[e]) ? !!t[e] : !1;
}
function cc() {
  return $v;
}
var Uv = ue({}, as, {
    key: function (e) {
      if (e.key) {
        var t = Lv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ws(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function (e) {
      return e.type === "keypress" ? Ws(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ws(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bv = nt(Uv),
  Hv = ue({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jh = nt(Hv),
  Vv = ue({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc,
  }),
  Wv = nt(Vv),
  Yv = ue({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gv = nt(Yv),
  Xv = ue({}, Zo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qv = nt(Xv),
  qv = [9, 13, 27, 32],
  hc = Ht && "CompositionEvent" in window,
  gi = null;
Ht && "documentMode" in document && (gi = document.documentMode);
var Kv = Ht && "TextEvent" in window && !gi,
  Sp = Ht && (!hc || (gi && 8 < gi && 11 >= gi)),
  Lh = String.fromCharCode(32),
  Fh = !1;
function Ep(e, t) {
  switch (e) {
    case "keyup":
      return qv.indexOf(t.keyCode) !== -1;
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
function Tp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ir = !1;
function Zv(e, t) {
  switch (e) {
    case "compositionend":
      return Tp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fh = !0), Lh);
    case "textInput":
      return (e = t.data), e === Lh && Fh ? null : e;
    default:
      return null;
  }
}
function Jv(e, t) {
  if (ir)
    return e === "compositionend" || (!hc && Ep(e, t))
      ? ((e = xp()), (Vs = lc = tn = null), (ir = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var e1 = {
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
  week: !0,
};
function Dh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!e1[e.type] : t === "textarea";
}
function kp(e, t, n, r) {
  tp(r),
    (t = So(t, "onChange")),
    0 < t.length &&
      ((n = new uc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vi = null,
  Ni = null;
function t1(e) {
  zp(e, 0);
}
function Jo(e) {
  var t = ar(e);
  if (Xd(t)) return e;
}
function n1(e, t) {
  if (e === "change") return t;
}
var _p = !1;
if (Ht) {
  var Da;
  if (Ht) {
    var $a = "oninput" in document;
    if (!$a) {
      var $h = document.createElement("div");
      $h.setAttribute("oninput", "return;"),
        ($a = typeof $h.oninput == "function");
    }
    Da = $a;
  } else Da = !1;
  _p = Da && (!document.documentMode || 9 < document.documentMode);
}
function Uh() {
  vi && (vi.detachEvent("onpropertychange", Pp), (Ni = vi = null));
}
function Pp(e) {
  if (e.propertyName === "value" && Jo(Ni)) {
    var t = [];
    kp(t, Ni, e, rc(e)), sp(t1, t);
  }
}
function r1(e, t, n) {
  e === "focusin"
    ? (Uh(), (vi = t), (Ni = n), vi.attachEvent("onpropertychange", Pp))
    : e === "focusout" && Uh();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jo(Ni);
}
function s1(e, t) {
  if (e === "click") return Jo(t);
}
function o1(e, t) {
  if (e === "input" || e === "change") return Jo(t);
}
function a1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : a1;
function zi(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !kt(e[i], t[i])) return !1;
  }
  return !0;
}
function Bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hh(e, t) {
  var n = Bh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Bh(n);
  }
}
function Cp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mp() {
  for (var e = window, t = po(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = po(e.document);
  }
  return t;
}
function fc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function l1(e) {
  var t = Mp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Hh(n, s));
        var o = Hh(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var u1 = Ht && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  Ll = null,
  yi = null,
  Fl = !1;
function Vh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fl ||
    sr == null ||
    sr !== po(r) ||
    ((r = sr),
    "selectionStart" in r && fc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yi && zi(yi, r)) ||
      ((yi = r),
      (r = So(Ll, "onSelect")),
      0 < r.length &&
        ((t = new uc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function _s(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: _s("Animation", "AnimationEnd"),
    animationiteration: _s("Animation", "AnimationIteration"),
    animationstart: _s("Animation", "AnimationStart"),
    transitionend: _s("Transition", "TransitionEnd"),
  },
  Ua = {},
  Rp = {};
Ht &&
  ((Rp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function ea(e) {
  if (Ua[e]) return Ua[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rp) return (Ua[e] = t[n]);
  return e;
}
var Ip = ea("animationend"),
  bp = ea("animationiteration"),
  Ap = ea("animationstart"),
  Op = ea("transitionend"),
  Np = new Map(),
  Wh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xn(e, t) {
  Np.set(e, t), Wn(t, [e]);
}
for (var Ba = 0; Ba < Wh.length; Ba++) {
  var Ha = Wh[Ba],
    c1 = Ha.toLowerCase(),
    h1 = Ha[0].toUpperCase() + Ha.slice(1);
  xn(c1, "on" + h1);
}
xn(Ip, "onAnimationEnd");
xn(bp, "onAnimationIteration");
xn(Ap, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(Op, "onTransitionEnd");
kr("onMouseEnter", ["mouseout", "mouseover"]);
kr("onMouseLeave", ["mouseout", "mouseover"]);
kr("onPointerEnter", ["pointerout", "pointerover"]);
kr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var hi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  f1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));
function Yh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), cv(r, t, void 0, e), (e.currentTarget = null);
}
function zp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Yh(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Yh(i, a, u), (s = l);
        }
    }
  }
  if (go) throw ((e = Ol), (go = !1), (Ol = null), e);
}
function ee(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jp(t, e, 2, !1), n.add(r));
}
function Va(e, t, n) {
  var r = 0;
  t && (r |= 4), jp(n, e, r, t);
}
var Ps = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
  if (!e[Ps]) {
    (e[Ps] = !0),
      Hd.forEach(function (n) {
        n !== "selectionchange" && (f1.has(n) || Va(n, !1, e), Va(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), Va("selectionchange", !1, t));
  }
}
function jp(e, t, n, r) {
  switch (wp(t)) {
    case 1:
      var i = Pv;
      break;
    case 4:
      i = Cv;
      break;
    default:
      i = ac;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Al ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Wa(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Rn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sp(function () {
    var u = s,
      c = rc(n),
      h = [];
    e: {
      var d = Np.get(e);
      if (d !== void 0) {
        var g = uc,
          y = e;
        switch (e) {
          case "keypress":
            if (Ws(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Bv;
            break;
          case "focusin":
            (y = "focus"), (g = Fa);
            break;
          case "focusout":
            (y = "blur"), (g = Fa);
            break;
          case "beforeblur":
          case "afterblur":
            g = Fa;
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
            g = Nh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Iv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Wv;
            break;
          case Ip:
          case bp:
          case Ap:
            g = Ov;
            break;
          case Op:
            g = Gv;
            break;
          case "scroll":
            g = Mv;
            break;
          case "wheel":
            g = Qv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = jh;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = Ii(f, p)), w != null && v.push(Li(f, w, m)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), h.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Il &&
            (y = n.relatedTarget || n.fromElement) &&
            (Rn(y) || y[Vt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Rn(y) : null),
              y !== null &&
                ((S = Yn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Nh),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = jh),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (S = g == null ? d : ar(g)),
            (m = y == null ? d : ar(y)),
            (d = new v(w, f + "leave", g, n, c)),
            (d.target = S),
            (d.relatedTarget = m),
            (w = null),
            Rn(c) === u &&
              ((v = new v(p, f + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = S),
              (w = v)),
            (S = w),
            g && y)
          )
            t: {
              for (v = g, p = y, f = 0, m = v; m; m = Zn(m)) f++;
              for (m = 0, w = p; w; w = Zn(w)) m++;
              for (; 0 < f - m; ) (v = Zn(v)), f--;
              for (; 0 < m - f; ) (p = Zn(p)), m--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Zn(v)), (p = Zn(p));
              }
              v = null;
            }
          else v = null;
          g !== null && Gh(h, d, g, v, !1),
            y !== null && S !== null && Gh(h, S, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? ar(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var T = n1;
        else if (Dh(d))
          if (_p) T = o1;
          else {
            T = i1;
            var P = r1;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (T = s1);
        if (T && (T = T(e, u))) {
          kp(h, T, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            _l(d, "number", d.value);
      }
      switch (((P = u ? ar(u) : window), e)) {
        case "focusin":
          (Dh(P) || P.contentEditable === "true") &&
            ((sr = P), (Ll = u), (yi = null));
          break;
        case "focusout":
          yi = Ll = sr = null;
          break;
        case "mousedown":
          Fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fl = !1), Vh(h, n, c);
          break;
        case "selectionchange":
          if (u1) break;
        case "keydown":
        case "keyup":
          Vh(h, n, c);
      }
      var k;
      if (hc)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        ir
          ? Ep(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Sp &&
          n.locale !== "ko" &&
          (ir || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && ir && (k = xp())
            : ((tn = c),
              (lc = "value" in tn ? tn.value : tn.textContent),
              (ir = !0))),
        (P = So(u, I)),
        0 < P.length &&
          ((I = new zh(I, e, null, n, c)),
          h.push({ event: I, listeners: P }),
          k ? (I.data = k) : ((k = Tp(n)), k !== null && (I.data = k)))),
        (k = Kv ? Zv(e, n) : Jv(e, n)) &&
          ((u = So(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zh("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    zp(h, t);
  });
}
function Li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function So(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Ii(e, n)),
      s != null && r.unshift(Li(e, s, i)),
      (s = Ii(e, t)),
      s != null && r.push(Li(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gh(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ii(n, s)), l != null && o.unshift(Li(n, l, a)))
        : i || ((l = Ii(n, s)), l != null && o.push(Li(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var d1 = /\r\n?/g,
  p1 = /\u0000|\uFFFD/g;
function Xh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      d1,
      `
`
    )
    .replace(p1, "");
}
function Cs(e, t, n) {
  if (((t = Xh(t)), Xh(e) !== t && n)) throw Error(M(425));
}
function Eo() {}
var Dl = null,
  $l = null;
function Ul(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bl = typeof setTimeout == "function" ? setTimeout : void 0,
  m1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qh = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qh < "u"
      ? function (e) {
          return Qh.resolve(null).then(e).catch(v1);
        }
      : Bl;
function v1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ya(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Oi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Oi(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qh(e) {
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
var $r = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + $r,
  Fi = "__reactProps$" + $r,
  Vt = "__reactContainer$" + $r,
  Hl = "__reactEvents$" + $r,
  y1 = "__reactListeners$" + $r,
  w1 = "__reactHandles$" + $r;
function Rn(e) {
  var t = e[It];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[It])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qh(e); e !== null; ) {
          if ((n = e[It])) return n;
          e = qh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ls(e) {
  return (
    (e = e[It] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function ta(e) {
  return e[Fi] || null;
}
var Vl = [],
  lr = -1;
function Sn(e) {
  return { current: e };
}
function ne(e) {
  0 > lr || ((e.current = Vl[lr]), (Vl[lr] = null), lr--);
}
function J(e, t) {
  lr++, (Vl[lr] = e.current), (e.current = t);
}
var wn = {},
  Ne = Sn(wn),
  We = Sn(!1),
  Ln = wn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function To() {
  ne(We), ne(Ne);
}
function Kh(e, t, n) {
  if (Ne.current !== wn) throw Error(M(168));
  J(Ne, t), J(We, n);
}
function Lp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, rv(e) || "Unknown", i));
  return ue({}, n, r);
}
function ko(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (Ln = Ne.current),
    J(Ne, e),
    J(We, We.current),
    !0
  );
}
function Zh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = Lp(e, t, Ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(We),
      ne(Ne),
      J(Ne, e))
    : ne(We),
    J(We, n);
}
var Dt = null,
  na = !1,
  Ga = !1;
function Fp(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function x1(e) {
  (na = !0), Fp(e);
}
function En() {
  if (!Ga && Dt !== null) {
    Ga = !0;
    var e = 0,
      t = q;
    try {
      var n = Dt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (na = !1);
    } catch (i) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), up(ic, En), i);
    } finally {
      (q = t), (Ga = !1);
    }
  }
  return null;
}
var ur = [],
  cr = 0,
  _o = null,
  Po = 0,
  rt = [],
  it = 0,
  Fn = null,
  $t = 1,
  Ut = "";
function _n(e, t) {
  (ur[cr++] = Po), (ur[cr++] = _o), (_o = e), (Po = t);
}
function Dp(e, t, n) {
  (rt[it++] = $t), (rt[it++] = Ut), (rt[it++] = Fn), (Fn = e);
  var r = $t;
  e = Ut;
  var i = 32 - St(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - St(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      ($t = (1 << (32 - St(t) + i)) | (n << i) | r),
      (Ut = s + e);
  } else ($t = (1 << s) | (n << i) | r), (Ut = e);
}
function dc(e) {
  e.return !== null && (_n(e, 1), Dp(e, 1, 0));
}
function pc(e) {
  for (; e === _o; )
    (_o = ur[--cr]), (ur[cr] = null), (Po = ur[--cr]), (ur[cr] = null);
  for (; e === Fn; )
    (Fn = rt[--it]),
      (rt[it] = null),
      (Ut = rt[--it]),
      (rt[it] = null),
      ($t = rt[--it]),
      (rt[it] = null);
}
var Je = null,
  Ke = null,
  se = !1,
  gt = null;
function $p(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ke = cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: $t, overflow: Ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (se) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!Jh(e, t)) {
        if (Wl(e)) throw Error(M(418));
        t = cn(n.nextSibling);
        var r = Je;
        t && Jh(e, t)
          ? $p(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Je = e));
      }
    } else {
      if (Wl(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Je = e);
    }
  }
}
function ef(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function Ms(e) {
  if (e !== Je) return !1;
  if (!se) return ef(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ul(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Wl(e)) throw (Up(), Error(M(418)));
    for (; t; ) $p(e, t), (t = cn(t.nextSibling));
  }
  if ((ef(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Je ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Up() {
  for (var e = Ke; e; ) e = cn(e.nextSibling);
}
function Pr() {
  (Ke = Je = null), (se = !1);
}
function mc(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var S1 = Gt.ReactCurrentBatchConfig;
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Co = Sn(null),
  Mo = null,
  hr = null,
  gc = null;
function vc() {
  gc = hr = Mo = null;
}
function yc(e) {
  var t = Co.current;
  ne(Co), (e._currentValue = t);
}
function Gl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wr(e, t) {
  (Mo = e),
    (gc = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (gc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (Mo === null) throw Error(M(308));
      (hr = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else hr = hr.next = e;
  return t;
}
var In = null;
function wc(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Bp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), wc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Wt(e, r)
  );
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function xc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), wc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Wt(e, n)
  );
}
function Ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sc(e, n);
  }
}
function tf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ro(e, t, n, r) {
  var i = e.updateQueue;
  Zt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                h = y.call(g, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, h, d) : y),
                d == null)
              )
                break e;
              h = ue({}, h, d);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = h)) : (c = c.next = g),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ($n |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function nf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Vp = new Bd.Component().refs;
function Xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ra = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      i = dn(e),
      s = Bt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = hn(e, s, i)),
      t !== null && (Et(t, e, i, r), Ys(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      i = dn(e),
      s = Bt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = hn(e, s, i)),
      t !== null && (Et(t, e, i, r), Ys(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = dn(e),
      i = Bt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = hn(e, i, r)),
      t !== null && (Et(t, e, r, n), Ys(t, e, r));
  },
};
function rf(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zi(n, r) || !zi(i, s)
      : !0
  );
}
function Wp(e, t, n) {
  var r = !1,
    i = wn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((i = Ye(t) ? Ln : Ne.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? _r(e, i) : wn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ra),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function sf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ra.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Vp), xc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ut(s))
    : ((s = Ye(t) ? Ln : Ne.current), (i.context = _r(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Xl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ra.enqueueReplaceState(i, i.state, null),
      Ro(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === Vp && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Rs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function of(e) {
  var t = e._init;
  return t(e._payload);
}
function Yp(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = pn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, m, w) {
    return f === null || f.tag !== 6
      ? ((f = el(m, p.mode, w)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function l(p, f, m, w) {
    var T = m.type;
    return T === rr
      ? c(p, f, m.props.children, w, m.key)
      : f !== null &&
        (f.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Kt &&
            of(T) === f.type))
      ? ((w = i(f, m.props)), (w.ref = Zr(p, f, m)), (w.return = p), w)
      : ((w = Zs(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = Zr(p, f, m)),
        (w.return = p),
        w);
  }
  function u(p, f, m, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = tl(m, p.mode, w)), (f.return = p), f)
      : ((f = i(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, w, T) {
    return f === null || f.tag !== 7
      ? ((f = Nn(m, p.mode, w, T)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function h(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = el("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ys:
          return (
            (m = Zs(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = Zr(p, null, f)),
            (m.return = p),
            m
          );
        case nr:
          return (f = tl(f, p.mode, m)), (f.return = p), f;
        case Kt:
          var w = f._init;
          return h(p, w(f._payload), m);
      }
      if (ui(f) || Gr(f))
        return (f = Nn(f, p.mode, m, null)), (f.return = p), f;
      Rs(p, f);
    }
    return null;
  }
  function d(p, f, m, w) {
    var T = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : a(p, f, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ys:
          return m.key === T ? l(p, f, m, w) : null;
        case nr:
          return m.key === T ? u(p, f, m, w) : null;
        case Kt:
          return (T = m._init), d(p, f, T(m._payload), w);
      }
      if (ui(m) || Gr(m)) return T !== null ? null : c(p, f, m, w, null);
      Rs(p, m);
    }
    return null;
  }
  function g(p, f, m, w, T) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), a(f, p, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ys:
          return (p = p.get(w.key === null ? m : w.key) || null), l(f, p, w, T);
        case nr:
          return (p = p.get(w.key === null ? m : w.key) || null), u(f, p, w, T);
        case Kt:
          var P = w._init;
          return g(p, f, m, P(w._payload), T);
      }
      if (ui(w) || Gr(w)) return (p = p.get(m) || null), c(f, p, w, T, null);
      Rs(f, w);
    }
    return null;
  }
  function y(p, f, m, w) {
    for (
      var T = null, P = null, k = f, I = (f = 0), N = null;
      k !== null && I < m.length;
      I++
    ) {
      k.index > I ? ((N = k), (k = null)) : (N = k.sibling);
      var _ = d(p, k, m[I], w);
      if (_ === null) {
        k === null && (k = N);
        break;
      }
      e && k && _.alternate === null && t(p, k),
        (f = s(_, f, I)),
        P === null ? (T = _) : (P.sibling = _),
        (P = _),
        (k = N);
    }
    if (I === m.length) return n(p, k), se && _n(p, I), T;
    if (k === null) {
      for (; I < m.length; I++)
        (k = h(p, m[I], w)),
          k !== null &&
            ((f = s(k, f, I)), P === null ? (T = k) : (P.sibling = k), (P = k));
      return se && _n(p, I), T;
    }
    for (k = r(p, k); I < m.length; I++)
      (N = g(k, p, I, m[I], w)),
        N !== null &&
          (e && N.alternate !== null && k.delete(N.key === null ? I : N.key),
          (f = s(N, f, I)),
          P === null ? (T = N) : (P.sibling = N),
          (P = N));
    return (
      e &&
        k.forEach(function (F) {
          return t(p, F);
        }),
      se && _n(p, I),
      T
    );
  }
  function v(p, f, m, w) {
    var T = Gr(m);
    if (typeof T != "function") throw Error(M(150));
    if (((m = T.call(m)), m == null)) throw Error(M(151));
    for (
      var P = (T = null), k = f, I = (f = 0), N = null, _ = m.next();
      k !== null && !_.done;
      I++, _ = m.next()
    ) {
      k.index > I ? ((N = k), (k = null)) : (N = k.sibling);
      var F = d(p, k, _.value, w);
      if (F === null) {
        k === null && (k = N);
        break;
      }
      e && k && F.alternate === null && t(p, k),
        (f = s(F, f, I)),
        P === null ? (T = F) : (P.sibling = F),
        (P = F),
        (k = N);
    }
    if (_.done) return n(p, k), se && _n(p, I), T;
    if (k === null) {
      for (; !_.done; I++, _ = m.next())
        (_ = h(p, _.value, w)),
          _ !== null &&
            ((f = s(_, f, I)), P === null ? (T = _) : (P.sibling = _), (P = _));
      return se && _n(p, I), T;
    }
    for (k = r(p, k); !_.done; I++, _ = m.next())
      (_ = g(k, p, I, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? I : _.key),
          (f = s(_, f, I)),
          P === null ? (T = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        k.forEach(function (V) {
          return t(p, V);
        }),
      se && _n(p, I),
      T
    );
  }
  function S(p, f, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === rr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ys:
          e: {
            for (var T = m.key, P = f; P !== null; ) {
              if (P.key === T) {
                if (((T = m.type), T === rr)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (f = i(P, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Kt &&
                    of(T) === P.type)
                ) {
                  n(p, P.sibling),
                    (f = i(P, m.props)),
                    (f.ref = Zr(p, P, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === rr
              ? ((f = Nn(m.props.children, p.mode, w, m.key)),
                (f.return = p),
                (p = f))
              : ((w = Zs(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = Zr(p, f, m)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case nr:
          e: {
            for (P = m.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = tl(m, p.mode, w)), (f.return = p), (p = f);
          }
          return o(p);
        case Kt:
          return (P = m._init), S(p, f, P(m._payload), w);
      }
      if (ui(m)) return y(p, f, m, w);
      if (Gr(m)) return v(p, f, m, w);
      Rs(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = el(m, p.mode, w)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return S;
}
var Cr = Yp(!0),
  Gp = Yp(!1),
  us = {},
  Ot = Sn(us),
  Di = Sn(us),
  $i = Sn(us);
function bn(e) {
  if (e === us) throw Error(M(174));
  return e;
}
function Sc(e, t) {
  switch ((J($i, t), J(Di, e), J(Ot, us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cl(t, e));
  }
  ne(Ot), J(Ot, t);
}
function Mr() {
  ne(Ot), ne(Di), ne($i);
}
function Xp(e) {
  bn($i.current);
  var t = bn(Ot.current),
    n = Cl(t, e.type);
  t !== n && (J(Di, e), J(Ot, n));
}
function Ec(e) {
  Di.current === e && (ne(Ot), ne(Di));
}
var ae = Sn(0);
function Io(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xa = [];
function Tc() {
  for (var e = 0; e < Xa.length; e++)
    Xa[e]._workInProgressVersionPrimary = null;
  Xa.length = 0;
}
var Gs = Gt.ReactCurrentDispatcher,
  Qa = Gt.ReactCurrentBatchConfig,
  Dn = 0,
  le = null,
  ve = null,
  Se = null,
  bo = !1,
  wi = !1,
  Ui = 0,
  E1 = 0;
function be() {
  throw Error(M(321));
}
function kc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function _c(e, t, n, r, i, s) {
  if (
    ((Dn = s),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gs.current = e === null || e.memoizedState === null ? P1 : C1),
    (e = n(r, i)),
    wi)
  ) {
    s = 0;
    do {
      if (((wi = !1), (Ui = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        (Gs.current = M1),
        (e = n(r, i));
    } while (wi);
  }
  if (
    ((Gs.current = Ao),
    (t = ve !== null && ve.next !== null),
    (Dn = 0),
    (Se = ve = le = null),
    (bo = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Pc() {
  var e = Ui !== 0;
  return (Ui = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function ct() {
  if (ve === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? le.memoizedState : Se.next;
  if (t !== null) (Se = t), (ve = e);
  else {
    if (e === null) throw Error(M(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qa(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ve,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Dn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (le.lanes |= c),
          ($n |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      kt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (le.lanes |= s), ($n |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ka(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    kt(s, t.memoizedState) || (Ve = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Qp() {}
function qp(e, t) {
  var n = le,
    r = ct(),
    i = t(),
    s = !kt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ve = !0)),
    (r = r.queue),
    Cc(Jp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Hi(9, Zp.bind(null, n, r, i, t), void 0, null),
      _e === null)
    )
      throw Error(M(349));
    Dn & 30 || Kp(n, t, i);
  }
  return i;
}
function Kp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), em(t) && tm(e);
}
function Jp(e, t, n) {
  return n(function () {
    em(t) && tm(e);
  });
}
function em(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function tm(e) {
  var t = Wt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function af(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _1.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function Hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nm() {
  return ct().memoizedState;
}
function Xs(e, t, n, r) {
  var i = Ct();
  (le.flags |= e),
    (i.memoizedState = Hi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ia(e, t, n, r) {
  var i = ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var o = ve.memoizedState;
    if (((s = o.destroy), r !== null && kc(r, o.deps))) {
      i.memoizedState = Hi(t, n, s, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = Hi(1 | t, n, s, r));
}
function lf(e, t) {
  return Xs(8390656, 8, e, t);
}
function Cc(e, t) {
  return ia(2048, 8, e, t);
}
function rm(e, t) {
  return ia(4, 2, e, t);
}
function im(e, t) {
  return ia(4, 4, e, t);
}
function sm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function om(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ia(4, 4, sm.bind(null, t, e), n)
  );
}
function Mc() {}
function am(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lm(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function um(e, t, n) {
  return Dn & 21
    ? (kt(n, t) || ((n = fp()), (le.lanes |= n), ($n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function T1(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qa.transition;
  Qa.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Qa.transition = r);
  }
}
function cm() {
  return ct().memoizedState;
}
function k1(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hm(e))
  )
    fm(t, n);
  else if (((n = Bp(e, t, n, r)), n !== null)) {
    var i = Le();
    Et(n, e, r, i), dm(n, t, r);
  }
}
function _1(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hm(e)) fm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), kt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), wc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bp(e, t, i, r)),
      n !== null && ((i = Le()), Et(n, e, r, i), dm(n, t, r));
  }
}
function hm(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function fm(e, t) {
  wi = bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sc(e, n);
  }
}
var Ao = {
    readContext: ut,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  P1 = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: lf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xs(4194308, 4, sm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = k1.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: af,
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = af(!1),
        t = e[0];
      return (e = T1.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = Ct();
      if (se) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(M(349));
        Dn & 30 || Kp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        lf(Jp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Hi(9, Zp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = _e.identifierPrefix;
      if (se) {
        var n = Ut,
          r = $t;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ui++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = E1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  C1 = {
    readContext: ut,
    useCallback: am,
    useContext: ut,
    useEffect: Cc,
    useImperativeHandle: om,
    useInsertionEffect: rm,
    useLayoutEffect: im,
    useMemo: lm,
    useReducer: qa,
    useRef: nm,
    useState: function () {
      return qa(Bi);
    },
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      var t = ct();
      return um(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = qa(Bi)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Qp,
    useSyncExternalStore: qp,
    useId: cm,
    unstable_isNewReconciler: !1,
  },
  M1 = {
    readContext: ut,
    useCallback: am,
    useContext: ut,
    useEffect: Cc,
    useImperativeHandle: om,
    useInsertionEffect: rm,
    useLayoutEffect: im,
    useMemo: lm,
    useReducer: Ka,
    useRef: nm,
    useState: function () {
      return Ka(Bi);
    },
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      var t = ct();
      return ve === null ? (t.memoizedState = e) : um(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ka(Bi)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Qp,
    useSyncExternalStore: qp,
    useId: cm,
    unstable_isNewReconciler: !1,
  };
function Rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += nv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Za(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var R1 = typeof WeakMap == "function" ? WeakMap : Map;
function pm(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      No || ((No = !0), (ou = r)), ql(e, t);
    }),
    n
  );
}
function mm(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ql(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ql(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function uf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new R1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
}
function cf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), hn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var I1 = Gt.ReactCurrentOwner,
  Ve = !1;
function je(e, t, n, r) {
  t.child = e === null ? Gp(t, null, n, r) : Cr(t, e.child, n, r);
}
function ff(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    wr(t, i),
    (r = _c(e, t, n, r, s, i)),
    (n = Pc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (se && n && dc(t), (t.flags |= 1), je(e, t, r, i), t.child)
  );
}
function df(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !jc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), gm(e, t, s, r, i))
      : ((e = Zs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zi), n(o, r) && e.ref === t.ref)
    )
      return Yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = pn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (zi(s, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), Yt(e, t, i);
  }
  return Kl(e, t, n, r, i);
}
function vm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(dr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          J(dr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        J(dr, qe),
        (qe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(dr, qe),
      (qe |= r);
  return je(e, t, i, n), t.child;
}
function ym(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, i) {
  var s = Ye(n) ? Ln : Ne.current;
  return (
    (s = _r(t, s)),
    wr(t, i),
    (n = _c(e, t, n, r, s, i)),
    (r = Pc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (se && r && dc(t), (t.flags |= 1), je(e, t, n, i), t.child)
  );
}
function pf(e, t, n, r, i) {
  if (Ye(n)) {
    var s = !0;
    ko(t);
  } else s = !1;
  if ((wr(t, i), t.stateNode === null))
    Qs(e, t), Wp(t, n, r), Ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = Ye(n) ? Ln : Ne.current), (u = _r(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && sf(t, o, r, u)),
      (Zt = !1);
    var d = t.memoizedState;
    (o.state = d),
      Ro(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || We.current || Zt
        ? (typeof c == "function" && (Xl(t, n, c, r), (l = t.memoizedState)),
          (a = Zt || rf(t, n, a, r, d, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Hp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (o.props = u),
      (h = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = Ye(n) ? Ln : Ne.current), (l = _r(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || d !== l) && sf(t, o, r, l)),
      (Zt = !1),
      (d = t.memoizedState),
      (o.state = d),
      Ro(t, r, o, i);
    var y = t.memoizedState;
    a !== h || d !== y || We.current || Zt
      ? (typeof g == "function" && (Xl(t, n, g, r), (y = t.memoizedState)),
        (u = Zt || rf(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zl(e, t, n, r, s, i);
}
function Zl(e, t, n, r, i, s) {
  ym(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Zh(t, n, !1), Yt(e, t, s);
  (r = t.stateNode), (I1.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Cr(t, e.child, null, s)), (t.child = Cr(t, null, a, s)))
      : je(e, t, a, s),
    (t.memoizedState = r.state),
    i && Zh(t, n, !0),
    t.child
  );
}
function wm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kh(e, t.context, !1),
    Sc(e, t.containerInfo);
}
function mf(e, t, n, r, i) {
  return Pr(), mc(i), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xm(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    J(ae, i & 1),
    e === null)
  )
    return (
      Yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = aa(o, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = eu(n)),
              (t.memoizedState = Jl),
              e)
            : Rc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return b1(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = pn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = pn(a, s)) : ((s = Nn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? eu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = pn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rc(e, t) {
  return (
    (t = aa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Is(e, t, n, r) {
  return (
    r !== null && mc(r),
    Cr(t, e.child, null, n),
    (e = Rc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function b1(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Za(Error(M(422)))), Is(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = aa({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Nn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Cr(t, e.child, null, o),
        (t.child.memoizedState = eu(o)),
        (t.memoizedState = Jl),
        s);
  if (!(t.mode & 1)) return Is(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(M(419))), (r = Za(s, r, void 0)), Is(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ve || a)) {
    if (((r = _e), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Wt(e, i), Et(r, e, i, -1));
    }
    return zc(), (r = Za(Error(M(421)))), Is(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = V1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ke = cn(i.nextSibling)),
      (Je = t),
      (se = !0),
      (gt = null),
      e !== null &&
        ((rt[it++] = $t),
        (rt[it++] = Ut),
        (rt[it++] = Fn),
        ($t = e.id),
        (Ut = e.overflow),
        (Fn = t)),
      (t = Rc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gl(e.return, t, n);
}
function Ja(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Sm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((je(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gf(e, n, t);
        else if (e.tag === 19) gf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Io(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ja(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Io(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ja(t, !0, n, null, s);
        break;
      case "together":
        Ja(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($n |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function A1(e, t, n) {
  switch (t.tag) {
    case 3:
      wm(t), Pr();
      break;
    case 5:
      Xp(t);
      break;
    case 1:
      Ye(t.type) && ko(t);
      break;
    case 4:
      Sc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      J(Co, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xm(e, t, n)
          : (J(ae, ae.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      J(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        J(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vm(e, t, n);
  }
  return Yt(e, t, n);
}
var Em, tu, Tm, km;
Em = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tu = function () {};
Tm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), bn(Ot.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Tl(e, i)), (r = Tl(e, r)), (s = []);
        break;
      case "select":
        (i = ue({}, i, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Pl(e, i)), (r = Pl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Eo);
    }
    Ml(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Mi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ee("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
km = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function O1(e, t, n) {
  var r = t.pendingProps;
  switch ((pc(t), t.tag)) {
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
      return Ae(t), null;
    case 1:
      return Ye(t.type) && To(), Ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Mr(),
        ne(We),
        ne(Ne),
        Tc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (uu(gt), (gt = null)))),
        tu(e, t),
        Ae(t),
        null
      );
    case 5:
      Ec(t);
      var i = bn($i.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ae(t), null;
        }
        if (((e = bn(Ot.current)), Ms(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[It] = t), (r[Fi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < hi.length; i++) ee(hi[i], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              kh(r, s), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Ph(r, s), ee("invalid", r);
          }
          Ml(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Cs(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Cs(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Mi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              ws(r), _h(r, s, !0);
              break;
            case "textarea":
              ws(r), Ch(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Eo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[It] = t),
            (e[Fi] = r),
            Em(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Rl(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < hi.length; i++) ee(hi[i], e);
                i = r;
                break;
              case "source":
                ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (i = r);
                break;
              case "details":
                ee("toggle", e), (i = r);
                break;
              case "input":
                kh(e, r), (i = Tl(e, r)), ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ue({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Ph(e, r), (i = Pl(e, r)), ee("invalid", e);
                break;
              default:
                i = r;
            }
            Ml(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ep(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Zd(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ri(e, l)
                    : typeof l == "number" && Ri(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Mi.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ee("scroll", e)
                      : l != null && Ju(e, s, l, o));
              }
            switch (n) {
              case "input":
                ws(e), _h(e, r, !1);
                break;
              case "textarea":
                ws(e), Ch(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? mr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      mr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Eo);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) km(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = bn($i.current)), bn(Ot.current), Ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[It] = t),
            (s = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[It] = t),
            (t.stateNode = r);
      }
      return Ae(t), null;
    case 13:
      if (
        (ne(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Up(), Pr(), (t.flags |= 98560), (s = !1);
        else if (((s = Ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[It] = t;
          } else
            Pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (s = !1);
        } else gt !== null && (uu(gt), (gt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : zc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        Mr(), tu(e, t), e === null && ji(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return yc(t.type._context), Ae(t), null;
    case 17:
      return Ye(t.type) && To(), Ae(t), null;
    case 19:
      if ((ne(ae), (s = t.memoizedState), s === null)) return Ae(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Jr(s, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Io(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Jr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return J(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            fe() > Ir &&
            ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Io(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !se)
            )
              return Ae(t), null;
          } else
            2 * fe() - s.renderingStartTime > Ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = fe()),
          (t.sibling = null),
          (n = ae.current),
          J(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        Nc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function N1(e, t) {
  switch ((pc(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && To(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mr(),
        ne(We),
        ne(Ne),
        Tc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ec(t), null;
    case 13:
      if (
        (ne(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(ae), null;
    case 4:
      return Mr(), null;
    case 10:
      return yc(t.type._context), null;
    case 22:
    case 23:
      return Nc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bs = !1,
  Oe = !1,
  z1 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function nu(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var vf = !1;
function j1(e, t) {
  if (((Dl = wo), (e = Mp()), fc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (d = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($l = { focusedElem: e, selectionRange: n }, wo = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : pt(t.type, v),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (w) {
          ce(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = vf), (vf = !1), y;
}
function xi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && nu(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function sa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ru(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _m(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _m(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[It], delete t[Fi], delete t[Hl], delete t[y1], delete t[w1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
function su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (su(e, t, n), e = e.sibling; e !== null; ) su(e, t, n), (e = e.sibling);
}
var Pe = null,
  mt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Cm(e, t, n), (n = n.sibling);
}
function Cm(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(Ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || fr(n, t);
    case 6:
      var r = Pe,
        i = mt;
      (Pe = null),
        Xt(e, t, n),
        (Pe = r),
        (mt = i),
        Pe !== null &&
          (mt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (mt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ya(e.parentNode, n)
              : e.nodeType === 1 && Ya(e, n),
            Oi(e))
          : Ya(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (i = mt),
        (Pe = n.stateNode.containerInfo),
        (mt = !0),
        Xt(e, t, n),
        (Pe = r),
        (mt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && nu(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Xt(e, t, n), (Oe = r))
        : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function wf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z1()),
      t.forEach(function (r) {
        var i = W1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Pe = a.stateNode), (mt = !1);
              break e;
            case 3:
              (Pe = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Pe = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Pe === null) throw Error(M(160));
        Cm(s, o, i), (Pe = null), (mt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ce(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mm(t, e), (t = t.sibling);
}
function Mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), Pt(e), r & 4)) {
        try {
          xi(3, e, e.return), sa(3, e);
        } catch (v) {
          ce(e, e.return, v);
        }
        try {
          xi(5, e, e.return);
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      break;
    case 1:
      dt(t, e), Pt(e), r & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        Pt(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ri(i, "");
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Qd(i, s),
              Rl(a, o);
            var u = Rl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === "style"
                ? ep(i, h)
                : c === "dangerouslySetInnerHTML"
                ? Zd(i, h)
                : c === "children"
                ? Ri(i, h)
                : Ju(i, c, h, u);
            }
            switch (a) {
              case "input":
                kl(i, s);
                break;
              case "textarea":
                qd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? mr(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? mr(i, !!s.multiple, s.defaultValue, !0)
                      : mr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Fi] = s;
          } catch (v) {
            ce(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((dt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Oi(t.containerInfo);
        } catch (v) {
          ce(e, e.return, v);
        }
      break;
    case 4:
      dt(t, e), Pt(e);
      break;
    case 13:
      dt(t, e),
        Pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ac = fe())),
        r & 4 && wf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || c), dt(t, e), (Oe = u)) : dt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (h = O = c; O !== null; ) {
              switch (((d = O), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xi(4, d, d.return);
                  break;
                case 1:
                  fr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ce(r, n, v);
                    }
                  }
                  break;
                case 5:
                  fr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Sf(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (O = g)) : Sf(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Jd("display", o)));
              } catch (v) {
                ce(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (v) {
                ce(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), Pt(e), r & 4 && wf(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ri(i, ""), (r.flags &= -33));
          var s = yf(e);
          su(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = yf(e);
          iu(e, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L1(e, t, n) {
  (O = e), Rm(e);
}
function Rm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || bs;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Oe;
        a = bs;
        var u = Oe;
        if (((bs = o), (Oe = l) && !u))
          for (O = i; O !== null; )
            (o = O),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ef(i)
                : l !== null
                ? ((l.return = o), (O = l))
                : Ef(i);
        for (; s !== null; ) (O = s), Rm(s), (s = s.sibling);
        (O = i), (bs = a), (Oe = u);
      }
      xf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (O = s)) : xf(e);
  }
}
function xf(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && nf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                nf(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Oi(h);
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
              throw Error(M(163));
          }
        Oe || (t.flags & 512 && ru(t));
      } catch (d) {
        ce(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Sf(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Ef(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sa(4, t);
          } catch (l) {
            ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ce(t, i, l);
            }
          }
          var s = t.return;
          try {
            ru(t);
          } catch (l) {
            ce(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ru(t);
          } catch (l) {
            ce(t, o, l);
          }
      }
    } catch (l) {
      ce(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var F1 = Math.ceil,
  Oo = Gt.ReactCurrentDispatcher,
  Ic = Gt.ReactCurrentOwner,
  lt = Gt.ReactCurrentBatchConfig,
  Y = 0,
  _e = null,
  me = null,
  Ce = 0,
  qe = 0,
  dr = Sn(0),
  ye = 0,
  Vi = null,
  $n = 0,
  oa = 0,
  bc = 0,
  Si = null,
  He = null,
  Ac = 0,
  Ir = 1 / 0,
  jt = null,
  No = !1,
  ou = null,
  fn = null,
  As = !1,
  nn = null,
  zo = 0,
  Ei = 0,
  au = null,
  qs = -1,
  Ks = 0;
function Le() {
  return Y & 6 ? fe() : qs !== -1 ? qs : (qs = fe());
}
function dn(e) {
  return e.mode & 1
    ? Y & 2 && Ce !== 0
      ? Ce & -Ce
      : S1.transition !== null
      ? (Ks === 0 && (Ks = fp()), Ks)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wp(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Ei) throw ((Ei = 0), (au = null), Error(M(185)));
  os(e, n, r),
    (!(Y & 2) || e !== _e) &&
      (e === _e && (!(Y & 2) && (oa |= n), ye === 4 && en(e, Ce)),
      Ge(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((Ir = fe() + 500), na && En()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  Sv(e, t);
  var r = yo(e, e === _e ? Ce : 0);
  if (r === 0)
    n !== null && Ih(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ih(n), t === 1))
      e.tag === 0 ? x1(Tf.bind(null, e)) : Fp(Tf.bind(null, e)),
        g1(function () {
          !(Y & 6) && En();
        }),
        (n = null);
    else {
      switch (dp(r)) {
        case 1:
          n = ic;
          break;
        case 4:
          n = cp;
          break;
        case 16:
          n = vo;
          break;
        case 536870912:
          n = hp;
          break;
        default:
          n = vo;
      }
      n = Lm(n, Im.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Im(e, t) {
  if (((qs = -1), (Ks = 0), Y & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = yo(e, e === _e ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var s = Am();
    (_e !== e || Ce !== t) && ((jt = null), (Ir = fe() + 500), On(e, t));
    do
      try {
        U1();
        break;
      } catch (a) {
        bm(e, a);
      }
    while (1);
    vc(),
      (Oo.current = s),
      (Y = i),
      me !== null ? (t = 0) : ((_e = null), (Ce = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Nl(e)), i !== 0 && ((r = i), (t = lu(e, i)))), t === 1)
    )
      throw ((n = Vi), On(e, 0), en(e, r), Ge(e, fe()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !D1(i) &&
          ((t = jo(e, r)),
          t === 2 && ((s = Nl(e)), s !== 0 && ((r = s), (t = lu(e, s)))),
          t === 1))
      )
        throw ((n = Vi), On(e, 0), en(e, r), Ge(e, fe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Pn(e, He, jt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Ac + 500 - fe()), 10 < t))
          ) {
            if (yo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bl(Pn.bind(null, e, He, jt), t);
            break;
          }
          Pn(e, He, jt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - St(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * F1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bl(Pn.bind(null, e, He, jt), r);
            break;
          }
          Pn(e, He, jt);
          break;
        case 5:
          Pn(e, He, jt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ge(e, fe()), e.callbackNode === n ? Im.bind(null, e) : null;
}
function lu(e, t) {
  var n = Si;
  return (
    e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    (e = jo(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && uu(t)),
    e
  );
}
function uu(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function D1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!kt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~bc,
      t &= ~oa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Tf(e) {
  if (Y & 6) throw Error(M(327));
  xr();
  var t = yo(e, 0);
  if (!(t & 1)) return Ge(e, fe()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nl(e);
    r !== 0 && ((t = r), (n = lu(e, r)));
  }
  if (n === 1) throw ((n = Vi), On(e, 0), en(e, t), Ge(e, fe()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pn(e, He, jt),
    Ge(e, fe()),
    null
  );
}
function Oc(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((Ir = fe() + 500), na && En());
  }
}
function Un(e) {
  nn !== null && nn.tag === 0 && !(Y & 6) && xr();
  var t = Y;
  Y |= 1;
  var n = lt.transition,
    r = q;
  try {
    if (((lt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (lt.transition = n), (Y = t), !(Y & 6) && En();
  }
}
function Nc() {
  (qe = dr.current), ne(dr);
}
function On(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), m1(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((pc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && To();
          break;
        case 3:
          Mr(), ne(We), ne(Ne), Tc();
          break;
        case 5:
          Ec(r);
          break;
        case 4:
          Mr();
          break;
        case 13:
          ne(ae);
          break;
        case 19:
          ne(ae);
          break;
        case 10:
          yc(r.type._context);
          break;
        case 22:
        case 23:
          Nc();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (me = e = pn(e.current, null)),
    (Ce = qe = t),
    (ye = 0),
    (Vi = null),
    (bc = oa = $n = 0),
    (He = Si = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function bm(e, t) {
  do {
    var n = me;
    try {
      if ((vc(), (Gs.current = Ao), bo)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        bo = !1;
      }
      if (
        ((Dn = 0),
        (Se = ve = le = null),
        (wi = !1),
        (Ui = 0),
        (Ic.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (Vi = t), (me = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ce),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = cf(o);
          if (g !== null) {
            (g.flags &= -257),
              hf(g, o, a, s, t),
              g.mode & 1 && uf(s, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              uf(s, u, t), zc();
              break e;
            }
            l = Error(M(426));
          }
        } else if (se && a.mode & 1) {
          var S = cf(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              hf(S, o, a, s, t),
              mc(Rr(l, a));
            break e;
          }
        }
        (s = l = Rr(l, a)),
          ye !== 4 && (ye = 2),
          Si === null ? (Si = [s]) : Si.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = pm(s, l, t);
              tf(s, p);
              break e;
            case 1:
              a = l;
              var f = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (fn === null || !fn.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = mm(s, a, t);
                tf(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Nm(n);
    } catch (T) {
      (t = T), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Am() {
  var e = Oo.current;
  return (Oo.current = Ao), e === null ? Ao : e;
}
function zc() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    _e === null || (!($n & 268435455) && !(oa & 268435455)) || en(_e, Ce);
}
function jo(e, t) {
  var n = Y;
  Y |= 2;
  var r = Am();
  (_e !== e || Ce !== t) && ((jt = null), On(e, t));
  do
    try {
      $1();
      break;
    } catch (i) {
      bm(e, i);
    }
  while (1);
  if ((vc(), (Y = n), (Oo.current = r), me !== null)) throw Error(M(261));
  return (_e = null), (Ce = 0), ye;
}
function $1() {
  for (; me !== null; ) Om(me);
}
function U1() {
  for (; me !== null && !fv(); ) Om(me);
}
function Om(e) {
  var t = jm(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nm(e) : (me = t),
    (Ic.current = null);
}
function Nm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = N1(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = O1(n, t, qe)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Pn(e, t, n) {
  var r = q,
    i = lt.transition;
  try {
    (lt.transition = null), (q = 1), B1(e, t, n, r);
  } finally {
    (lt.transition = i), (q = r);
  }
  return null;
}
function B1(e, t, n, r) {
  do xr();
  while (nn !== null);
  if (Y & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ev(e, s),
    e === _e && ((me = _e = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      As ||
      ((As = !0),
      Lm(vo, function () {
        return xr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = lt.transition), (lt.transition = null);
    var o = q;
    q = 1;
    var a = Y;
    (Y |= 4),
      (Ic.current = null),
      j1(e, n),
      Mm(n, e),
      l1($l),
      (wo = !!Dl),
      ($l = Dl = null),
      (e.current = n),
      L1(n),
      dv(),
      (Y = a),
      (q = o),
      (lt.transition = s);
  } else e.current = n;
  if (
    (As && ((As = !1), (nn = e), (zo = i)),
    (s = e.pendingLanes),
    s === 0 && (fn = null),
    gv(n.stateNode),
    Ge(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (No) throw ((No = !1), (e = ou), (ou = null), e);
  return (
    zo & 1 && e.tag !== 0 && xr(),
    (s = e.pendingLanes),
    s & 1 ? (e === au ? Ei++ : ((Ei = 0), (au = e))) : (Ei = 0),
    En(),
    null
  );
}
function xr() {
  if (nn !== null) {
    var e = dp(zo),
      t = lt.transition,
      n = q;
    try {
      if (((lt.transition = null), (q = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (zo = 0), Y & 6)) throw Error(M(331));
        var i = Y;
        for (Y |= 4, O = e.current; O !== null; ) {
          var s = O,
            o = s.child;
          if (O.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xi(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (O = h);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var d = c.sibling,
                        g = c.return;
                      if ((_m(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (O = d);
                        break;
                      }
                      O = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              O = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (O = o);
          else
            e: for (; O !== null; ) {
              if (((s = O), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xi(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (O = p);
                break e;
              }
              O = s.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          o = O;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (O = m);
          else
            e: for (o = f; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sa(9, a);
                  }
                } catch (T) {
                  ce(a, a.return, T);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (O = w);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Y = i), En(), At && typeof At.onPostCommitFiberRoot == "function")
        )
          try {
            At.onPostCommitFiberRoot(Ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (lt.transition = t);
    }
  }
  return !1;
}
function kf(e, t, n) {
  (t = Rr(n, t)),
    (t = pm(e, t, 1)),
    (e = hn(e, t, 1)),
    (t = Le()),
    e !== null && (os(e, 1, t), Ge(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) kf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Rr(n, e)),
            (e = mm(t, e, 1)),
            (t = hn(t, e, 1)),
            (e = Le()),
            t !== null && (os(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function H1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Ce & n) === n &&
      (ye === 4 || (ye === 3 && (Ce & 130023424) === Ce && 500 > fe() - Ac)
        ? On(e, 0)
        : (bc |= n)),
    Ge(e, t);
}
function zm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = Le();
  (e = Wt(e, t)), e !== null && (os(e, t, n), Ge(e, n));
}
function V1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zm(e, n);
}
function W1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), zm(e, n);
}
var jm;
jm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), A1(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), se && t.flags & 1048576 && Dp(t, Po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qs(e, t), (e = t.pendingProps);
      var i = _r(t, Ne.current);
      wr(t, n), (i = _c(null, t, r, e, i, n));
      var s = Pc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((s = !0), ko(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            xc(t),
            (i.updater = ra),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ql(t, r, e, n),
            (t = Zl(null, t, r, !0, s, n)))
          : ((t.tag = 0), se && s && dc(t), je(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = G1(r)),
          (e = pt(r, e)),
          i)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = pf(null, t, r, e, n);
            break e;
          case 11:
            t = ff(null, t, r, e, n);
            break e;
          case 14:
            t = df(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        Kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        pf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wm(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Hp(e, t),
          Ro(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Rr(Error(M(423)), t)), (t = mf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Rr(Error(M(424)), t)), (t = mf(e, t, r, n, i));
            break e;
          } else
            for (
              Ke = cn(t.stateNode.containerInfo.firstChild),
                Je = t,
                se = !0,
                gt = null,
                n = Gp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pr(), r === i)) {
            t = Yt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xp(t),
        e === null && Yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ul(r, i) ? (o = null) : s !== null && Ul(r, s) && (t.flags |= 32),
        ym(e, t),
        je(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return xm(e, t, n);
    case 4:
      return (
        Sc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        ff(e, t, r, i, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          J(Co, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (kt(s.value, o)) {
            if (s.children === i.children && !We.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Bt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Gl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(M(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Gl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        je(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        wr(t, n),
        (i = ut(i)),
        (r = r(i)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = pt(r, t.pendingProps)),
        (i = pt(r.type, i)),
        df(e, t, r, i, n)
      );
    case 15:
      return gm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        Qs(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), ko(t)) : (e = !1),
        wr(t, n),
        Wp(t, r, i),
        Ql(t, r, i, n),
        Zl(null, t, r, !0, e, n)
      );
    case 19:
      return Sm(e, t, n);
    case 22:
      return vm(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Lm(e, t) {
  return up(e, t);
}
function Y1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new Y1(e, t, n, r);
}
function jc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function G1(e) {
  if (typeof e == "function") return jc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tc)) return 11;
    if (e === nc) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) jc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case rr:
        return Nn(n.children, i, s, t);
      case ec:
        (o = 8), (i |= 8);
        break;
      case wl:
        return (
          (e = at(12, n, t, i | 2)), (e.elementType = wl), (e.lanes = s), e
        );
      case xl:
        return (e = at(13, n, t, i)), (e.elementType = xl), (e.lanes = s), e;
      case Sl:
        return (e = at(19, n, t, i)), (e.elementType = Sl), (e.lanes = s), e;
      case Yd:
        return aa(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vd:
              o = 10;
              break e;
            case Wd:
              o = 9;
              break e;
            case tc:
              o = 11;
              break e;
            case nc:
              o = 14;
              break e;
            case Kt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = at(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Nn(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function aa(e, t, n, r) {
  return (
    (e = at(22, e, r, t)),
    (e.elementType = Yd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function el(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function tl(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function X1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = za(0)),
    (this.expirationTimes = za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Lc(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new X1(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = at(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xc(s),
    e
  );
}
function Q1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fm(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return Lp(e, n, t);
  }
  return t;
}
function Dm(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Lc(n, r, !0, e, i, s, o, a, l)),
    (e.context = Fm(null)),
    (n = e.current),
    (r = Le()),
    (i = dn(n)),
    (s = Bt(r, i)),
    (s.callback = t ?? null),
    hn(n, s, i),
    (e.current.lanes = i),
    os(e, i, r),
    Ge(e, r),
    e
  );
}
function la(e, t, n, r) {
  var i = t.current,
    s = Le(),
    o = dn(i);
  return (
    (n = Fm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = hn(i, t, o)),
    e !== null && (Et(e, i, o, s), Ys(e, i, o)),
    o
  );
}
function Lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _f(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fc(e, t) {
  _f(e, t), (e = e.alternate) && _f(e, t);
}
function q1() {
  return null;
}
var $m =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dc(e) {
  this._internalRoot = e;
}
ua.prototype.render = Dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  la(e, t, null, null);
};
ua.prototype.unmount = Dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      la(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function ua(e) {
  this._internalRoot = e;
}
ua.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && yp(e);
  }
};
function $c(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ca(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pf() {}
function K1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Lo(o);
        s.call(u);
      };
    }
    var o = Dm(t, r, e, 0, null, !1, !1, "", Pf);
    return (
      (e._reactRootContainer = o),
      (e[Vt] = o.current),
      ji(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Lo(l);
      a.call(u);
    };
  }
  var l = Lc(e, 0, !1, null, null, !1, !1, "", Pf);
  return (
    (e._reactRootContainer = l),
    (e[Vt] = l.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      la(t, l, n, r);
    }),
    l
  );
}
function ha(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Lo(o);
        a.call(l);
      };
    }
    la(t, o, e, i);
  } else o = K1(n, t, e, i, r);
  return Lo(o);
}
pp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ci(t.pendingLanes);
        n !== 0 &&
          (sc(t, n | 1), Ge(t, fe()), !(Y & 6) && ((Ir = fe() + 500), En()));
      }
      break;
    case 13:
      Un(function () {
        var r = Wt(e, 1);
        if (r !== null) {
          var i = Le();
          Et(r, e, 1, i);
        }
      }),
        Fc(e, 1);
  }
};
oc = function (e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Le();
      Et(t, e, 134217728, n);
    }
    Fc(e, 134217728);
  }
};
mp = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Wt(e, t);
    if (n !== null) {
      var r = Le();
      Et(n, e, t, r);
    }
    Fc(e, t);
  }
};
gp = function () {
  return q;
};
vp = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
bl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ta(r);
            if (!i) throw Error(M(90));
            Xd(r), kl(r, i);
          }
        }
      }
      break;
    case "textarea":
      qd(e, n);
      break;
    case "select":
      (t = n.value), t != null && mr(e, !!n.multiple, t, !1);
  }
};
rp = Oc;
ip = Un;
var Z1 = { usingClientEntryPoint: !1, Events: [ls, ar, ta, tp, np, Oc] },
  ei = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  J1 = {
    bundleType: ei.bundleType,
    version: ei.version,
    rendererPackageName: ei.rendererPackageName,
    rendererConfig: ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ap(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ei.findFiberByHostInstance || q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Os.isDisabled && Os.supportsFiber)
    try {
      (Ko = Os.inject(J1)), (At = Os);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z1;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$c(t)) throw Error(M(200));
  return Q1(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!$c(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = $m;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Lc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Vt] = t.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    new Dc(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = ap(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Un(e);
};
tt.hydrate = function (e, t, n) {
  if (!ca(t)) throw Error(M(200));
  return ha(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!$c(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = $m;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Dm(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Vt] = t.current),
    ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ua(t);
};
tt.render = function (e, t, n) {
  if (!ca(t)) throw Error(M(200));
  return ha(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!ca(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Un(function () {
        ha(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Oc;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ca(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return ha(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function Um() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um);
    } catch (e) {
      console.error(e);
    }
}
Um(), (Dd.exports = tt);
var Bm = Dd.exports,
  Cf = Bm;
(vl.createRoot = Cf.createRoot), (vl.hydrateRoot = Cf.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const Mf = "popstate";
function ey(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return cu(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Fo(i);
  }
  return ny(t, n, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Uc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ty() {
  return Math.random().toString(36).substr(2, 8);
}
function Rf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Wi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ur(t) : t,
      { state: n, key: (t && t.key) || r || ty() }
    )
  );
}
function Fo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ur(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ny(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = rn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Wi({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = rn.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: v.location, delta: p });
  }
  function d(S, p) {
    a = rn.Push;
    let f = cu(v.location, S, p);
    n && n(f, S), (u = c() + 1);
    let m = Rf(f, u),
      w = v.createHref(f);
    try {
      o.pushState(m, "", w);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(w);
    }
    s && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(S, p) {
    a = rn.Replace;
    let f = cu(v.location, S, p);
    n && n(f, S), (u = c());
    let m = Rf(f, u),
      w = v.createHref(f);
    o.replaceState(m, "", w),
      s && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof S == "string" ? S : Fo(S);
    return (
      ge(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Mf, h),
        (l = S),
        () => {
          i.removeEventListener(Mf, h), (l = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(S) {
      return o.go(S);
    },
  };
  return v;
}
var If;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(If || (If = {}));
function ry(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ur(t) : t,
    i = Bc(r.pathname || "/", n);
  if (i == null) return null;
  let s = Hm(e);
  iy(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = dy(s[a], gy(i));
  return o;
}
function Hm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ge(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = mn([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ge(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Hm(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: hy(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Vm(s.path)) i(s, o, l);
    }),
    t
  );
}
function Vm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Vm(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function iy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : fy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const sy = /^:\w+$/,
  oy = 3,
  ay = 2,
  ly = 1,
  uy = 10,
  cy = -2,
  bf = (e) => e === "*";
function hy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bf) && (r += cy),
    t && (r += ay),
    n
      .filter((i) => !bf(i))
      .reduce((i, s) => i + (sy.test(s) ? oy : s === "" ? ly : uy), r)
  );
}
function fy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function dy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = py(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: mn([i, c.pathname]),
      pathnameBase: xy(mn([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = mn([i, c.pathnameBase]));
  }
  return s;
}
function py(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = my(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      if (c === "*") {
        let d = a[h] || "";
        o = s.slice(0, s.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = vy(a[h] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function my(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Uc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function gy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Uc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function vy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Uc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Bc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function yy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Ur(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : wy(n, t)) : t,
    search: Sy(r),
    hash: Ey(i),
  };
}
function wy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function nl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ym(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Ur(e))
    : ((i = Wi({}, e)),
      ge(
        !i.pathname || !i.pathname.includes("?"),
        nl("?", "pathname", "search", i)
      ),
      ge(
        !i.pathname || !i.pathname.includes("#"),
        nl("#", "pathname", "hash", i)
      ),
      ge(!i.search || !i.search.includes("#"), nl("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let h = t.length - 1;
    if (o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (h -= 1);
      i.pathname = d.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let l = yy(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ey = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Ty(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Gm = ["post", "put", "patch", "delete"];
new Set(Gm);
const ky = ["get", ...Gm];
new Set(ky);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Do() {
  return (
    (Do = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Do.apply(this, arguments)
  );
}
const Hc = C.createContext(null),
  _y = C.createContext(null),
  Br = C.createContext(null),
  fa = C.createContext(null),
  Gn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Xm = C.createContext(null);
function Py(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  cs() || ge(!1);
  let { basename: r, navigator: i } = C.useContext(Br),
    { hash: s, pathname: o, search: a } = qm(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : mn([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function cs() {
  return C.useContext(fa) != null;
}
function Hr() {
  return cs() || ge(!1), C.useContext(fa).location;
}
function Qm(e) {
  C.useContext(Br).static || C.useLayoutEffect(e);
}
function Vc() {
  let { isDataRoute: e } = C.useContext(Gn);
  return e ? Dy() : Cy();
}
function Cy() {
  cs() || ge(!1);
  let e = C.useContext(Hc),
    { basename: t, navigator: n } = C.useContext(Br),
    { matches: r } = C.useContext(Gn),
    { pathname: i } = Hr(),
    s = JSON.stringify(Wm(r).map((l) => l.pathnameBase)),
    o = C.useRef(!1);
  return (
    Qm(() => {
      o.current = !0;
    }),
    C.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Ym(l, JSON.parse(s), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : mn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, s, i, e]
    )
  );
}
function qm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Gn),
    { pathname: i } = Hr(),
    s = JSON.stringify(Wm(r).map((o) => o.pathnameBase));
  return C.useMemo(() => Ym(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function My(e, t) {
  return Ry(e, t);
}
function Ry(e, t, n) {
  cs() || ge(!1);
  let { navigator: r } = C.useContext(Br),
    { matches: i } = C.useContext(Gn),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = Hr(),
    u;
  if (t) {
    var c;
    let v = typeof t == "string" ? Ur(t) : t;
    a === "/" || ((c = v.pathname) != null && c.startsWith(a)) || ge(!1),
      (u = v);
  } else u = l;
  let h = u.pathname || "/",
    d = a === "/" ? h : h.slice(a.length) || "/",
    g = ry(e, { pathname: d }),
    y = Ny(
      g &&
        g.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: mn([
              a,
              r.encodeLocation
                ? r.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? a
                : mn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? C.createElement(
        fa.Provider,
        {
          value: {
            location: Do(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: rn.Pop,
          },
        },
        y
      )
    : y;
}
function Iy() {
  let e = Fy(),
    t = Ty(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    s
  );
}
const by = C.createElement(Iy, null);
class Ay extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Gn.Provider,
          { value: this.props.routeContext },
          C.createElement(Xm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Oy(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Hc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Gn.Provider, { value: t }, r)
  );
}
function Ny(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
    );
    a >= 0 || ge(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, u) => {
    let c = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      h = null;
    n && (h = l.route.errorElement || by);
    let d = t.concat(s.slice(0, u + 1)),
      g = () => {
        let y;
        return (
          c
            ? (y = h)
            : l.route.Component
            ? (y = C.createElement(l.route.Component, null))
            : l.route.element
            ? (y = l.route.element)
            : (y = a),
          C.createElement(Oy, {
            match: l,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? C.createElement(Ay, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var hu;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(hu || (hu = {}));
var Yi;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Yi || (Yi = {}));
function zy(e) {
  let t = C.useContext(Hc);
  return t || ge(!1), t;
}
function jy(e) {
  let t = C.useContext(_y);
  return t || ge(!1), t;
}
function Ly(e) {
  let t = C.useContext(Gn);
  return t || ge(!1), t;
}
function Km(e) {
  let t = Ly(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ge(!1), n.route.id;
}
function Fy() {
  var e;
  let t = C.useContext(Xm),
    n = jy(Yi.UseRouteError),
    r = Km(Yi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Dy() {
  let { router: e } = zy(hu.UseNavigateStable),
    t = Km(Yi.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Qm(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Do({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function fu(e) {
  ge(!1);
}
function $y(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = rn.Pop,
    navigator: s,
    static: o = !1,
  } = e;
  cs() && ge(!1);
  let a = t.replace(/^\/*/, "/"),
    l = C.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == "string" && (r = Ur(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: h = "",
      state: d = null,
      key: g = "default",
    } = r,
    y = C.useMemo(() => {
      let v = Bc(u, a);
      return v == null
        ? null
        : {
            location: { pathname: v, search: c, hash: h, state: d, key: g },
            navigationType: i,
          };
    }, [a, u, c, h, d, g, i]);
  return y == null
    ? null
    : C.createElement(
        Br.Provider,
        { value: l },
        C.createElement(fa.Provider, { children: n, value: y })
      );
}
function Uy(e) {
  let { children: t, location: n } = e;
  return My(du(t), n);
}
var Af;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Af || (Af = {}));
new Promise(() => {});
function du(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, du(r.props.children, s));
        return;
      }
      r.type !== fu && ge(!1), !r.props.index || !r.props.children || ge(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = du(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pu() {
  return (
    (pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pu.apply(this, arguments)
  );
}
function By(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Hy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Hy(e);
}
const Wy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Yy = "startTransition",
  Of = Vg[Yy];
function Gy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = ey({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (h) => {
        u && Of ? Of(() => l(h)) : l(h);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement($y, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const Xy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qy = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      h = By(t, Wy),
      { basename: d } = C.useContext(Br),
      g,
      y = !1;
    if (typeof u == "string" && Qy.test(u) && ((g = u), Xy))
      try {
        let f = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u),
          w = Bc(m.pathname, d);
        m.origin === f.origin && w != null
          ? (u = w + m.search + m.hash)
          : (y = !0);
      } catch {}
    let v = Py(u, { relative: i }),
      S = Ky(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function p(f) {
      r && r(f), f.defaultPrevented || S(f);
    }
    return C.createElement(
      "a",
      pu({}, h, { href: g || v, onClick: y || s ? r : p, ref: n, target: l })
    );
  });
var Nf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Nf || (Nf = {}));
var zf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(zf || (zf = {}));
function Ky(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = t === void 0 ? {} : t,
    a = Vc(),
    l = Hr(),
    u = qm(e, { relative: o });
  return C.useCallback(
    (c) => {
      if (Vy(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : Fo(l) === Fo(u);
        a(e, { replace: h, state: i, preventScrollReset: s, relative: o });
      }
    },
    [l, a, u, r, i, n, e, s, o]
  );
}
var ke = function () {
  return (
    (ke =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    ke.apply(this, arguments)
  );
};
function br(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var te = "-ms-",
  Ti = "-moz-",
  X = "-webkit-",
  Zm = "comm",
  da = "rule",
  Wc = "decl",
  Zy = "@import",
  Jm = "@keyframes",
  Jy = "@layer",
  ew = Math.abs,
  Yc = String.fromCharCode,
  mu = Object.assign;
function tw(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^
        Ee(e, 3)
    : 0;
}
function e0(e) {
  return e.trim();
}
function Lt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function Js(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ar(e, t, n) {
  return e.slice(t, n);
}
function Rt(e) {
  return e.length;
}
function t0(e) {
  return e.length;
}
function fi(e, t) {
  return t.push(e), e;
}
function nw(e, t) {
  return e.map(t).join("");
}
function jf(e, t) {
  return e.filter(function (n) {
    return !Lt(n, t);
  });
}
var pa = 1,
  Or = 1,
  n0 = 0,
  ht = 0,
  pe = 0,
  Vr = "";
function ma(e, t, n, r, i, s, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: pa,
    column: Or,
    length: o,
    return: "",
    siblings: a,
  };
}
function qt(e, t) {
  return mu(
    ma("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Jn(e) {
  for (; e.root; ) e = qt(e.root, { children: [e] });
  fi(e, e.siblings);
}
function rw() {
  return pe;
}
function iw() {
  return (
    (pe = ht > 0 ? Ee(Vr, --ht) : 0), Or--, pe === 10 && ((Or = 1), pa--), pe
  );
}
function Tt() {
  return (
    (pe = ht < n0 ? Ee(Vr, ht++) : 0), Or++, pe === 10 && ((Or = 1), pa++), pe
  );
}
function zn() {
  return Ee(Vr, ht);
}
function eo() {
  return ht;
}
function ga(e, t) {
  return Ar(Vr, e, t);
}
function gu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sw(e) {
  return (pa = Or = 1), (n0 = Rt((Vr = e))), (ht = 0), [];
}
function ow(e) {
  return (Vr = ""), e;
}
function rl(e) {
  return e0(ga(ht - 1, vu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function aw(e) {
  for (; (pe = zn()) && pe < 33; ) Tt();
  return gu(e) > 2 || gu(pe) > 3 ? "" : " ";
}
function lw(e, t) {
  for (
    ;
    --t &&
    Tt() &&
    !(pe < 48 || pe > 102 || (pe > 57 && pe < 65) || (pe > 70 && pe < 97));

  );
  return ga(e, eo() + (t < 6 && zn() == 32 && Tt() == 32));
}
function vu(e) {
  for (; Tt(); )
    switch (pe) {
      case e:
        return ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vu(pe);
        break;
      case 40:
        e === 41 && vu(e);
        break;
      case 92:
        Tt();
        break;
    }
  return ht;
}
function uw(e, t) {
  for (; Tt() && e + pe !== 47 + 10; )
    if (e + pe === 42 + 42 && zn() === 47) break;
  return "/*" + ga(t, ht - 1) + "*" + Yc(e === 47 ? e : Tt());
}
function cw(e) {
  for (; !gu(zn()); ) Tt();
  return ga(e, ht);
}
function hw(e) {
  return ow(to("", null, null, null, [""], (e = sw(e)), 0, [0], e));
}
function to(e, t, n, r, i, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      h = o,
      d = 0,
      g = 0,
      y = 0,
      v = 1,
      S = 1,
      p = 1,
      f = 0,
      m = "",
      w = i,
      T = s,
      P = r,
      k = m;
    S;

  )
    switch (((y = f), (f = Tt()))) {
      case 40:
        if (y != 108 && Ee(k, h - 1) == 58) {
          Js((k += U(rl(f), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += rl(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += aw(y);
        break;
      case 92:
        k += lw(eo() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            fi(fw(uw(Tt(), eo()), t, n, l), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * v:
        a[u++] = Rt(k) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            p == -1 && (k = U(k, /\f/g, "")),
              g > 0 &&
                Rt(k) - h &&
                fi(
                  g > 32
                    ? Ff(k + ";", r, n, h - 1, l)
                    : Ff(U(k, " ", "") + ";", r, n, h - 2, l),
                  l
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (fi(
                (P = Lf(k, t, n, u, c, i, a, m, (w = []), (T = []), h, s)),
                s
              ),
              f === 123)
            )
              if (c === 0) to(k, t, P, P, w, s, h, a, T);
              else
                switch (d === 99 && Ee(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    to(
                      e,
                      P,
                      P,
                      r && fi(Lf(e, P, P, 0, 0, i, a, m, i, (w = []), h, T), T),
                      i,
                      T,
                      h,
                      a,
                      r ? w : T
                    );
                    break;
                  default:
                    to(k, P, P, P, [""], T, 0, a, T);
                }
        }
        (u = c = g = 0), (v = p = 1), (m = k = ""), (h = o);
        break;
      case 58:
        (h = 1 + Rt(k)), (g = y);
      default:
        if (v < 1) {
          if (f == 123) --v;
          else if (f == 125 && v++ == 0 && iw() == 125) continue;
        }
        switch (((k += Yc(f)), f * v)) {
          case 38:
            p = c > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Rt(k) - 1) * p), (p = 1);
            break;
          case 64:
            zn() === 45 && (k += rl(Tt())),
              (d = zn()),
              (c = h = Rt((m = k += cw(eo())))),
              f++;
            break;
          case 45:
            y === 45 && Rt(k) == 2 && (v = 0);
        }
    }
  return s;
}
function Lf(e, t, n, r, i, s, o, a, l, u, c, h) {
  for (
    var d = i - 1, g = i === 0 ? s : [""], y = t0(g), v = 0, S = 0, p = 0;
    v < r;
    ++v
  )
    for (var f = 0, m = Ar(e, d + 1, (d = ew((S = o[v])))), w = e; f < y; ++f)
      (w = e0(S > 0 ? g[f] + " " + m : U(m, /&\f/g, g[f]))) && (l[p++] = w);
  return ma(e, t, n, i === 0 ? da : a, l, u, c, h);
}
function fw(e, t, n, r) {
  return ma(e, t, n, Zm, Yc(rw()), Ar(e, 2, -2), 0, r);
}
function Ff(e, t, n, r, i) {
  return ma(e, t, n, Wc, Ar(e, 0, r), Ar(e, r + 1, -1), r, i);
}
function r0(e, t, n) {
  switch (tw(e, t)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 4789:
      return Ti + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + Ti + e + te + e + e;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return X + e + te + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + te + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + te + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return X + e + te + e + e;
    case 6165:
      return X + e + te + "flex-" + e + e;
    case 5187:
      return (
        X + e + U(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + te + "flex-$1$2") + e
      );
    case 5443:
      return (
        X +
        e +
        te +
        "flex-item-" +
        U(e, /flex-|-self/g, "") +
        (Lt(e, /flex-|baseline/)
          ? ""
          : te + "grid-row-" + U(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        X +
        e +
        te +
        "flex-line-pack" +
        U(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return X + e + te + U(e, "shrink", "negative") + e;
    case 5292:
      return X + e + te + U(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        X +
        "box-" +
        U(e, "-grow", "") +
        X +
        e +
        te +
        U(e, "grow", "positive") +
        e
      );
    case 4554:
      return X + U(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return (
        U(U(U(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + te + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        X +
        e +
        e
      );
    case 4200:
      if (!Lt(e, /flex-|baseline/))
        return te + "grid-column-align" + Ar(e, t) + e;
      break;
    case 2592:
    case 3360:
      return te + U(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Lt(r.props, /grid-\w+-end/);
        })
        ? ~Js(e + (n = n[t].value), "span")
          ? e
          : te +
            U(e, "-start", "") +
            e +
            te +
            "grid-row-span:" +
            (~Js(n, "span") ? Lt(n, /\d+/) : +Lt(n, /\d+/) - +Lt(e, /\d+/)) +
            ";"
        : te + U(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Lt(r.props, /grid-\w+-start/);
        })
        ? e
        : te + U(U(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Rt(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  X +
                  "$2-$3$1" +
                  Ti +
                  (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Js(e, "stretch")
              ? r0(U(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return U(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, s, o, a, l, u) {
          return (
            te +
            i +
            ":" +
            s +
            u +
            (o ? te + i + "-span:" + (a ? l : +l - +s) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (Ee(e, t + 6) === 121) return U(e, ":", ":" + X) + e;
      break;
    case 6444:
      switch (Ee(e, Ee(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            U(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                X +
                (Ee(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                X +
                "$2$3$1" +
                te +
                "$2box$3"
            ) + e
          );
        case 100:
          return U(e, ":", ":" + te) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return U(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function $o(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function dw(e, t, n, r) {
  switch (e.type) {
    case Jy:
      if (e.children.length) break;
    case Zy:
    case Wc:
      return (e.return = e.return || e.value);
    case Zm:
      return "";
    case Jm:
      return (e.return = e.value + "{" + $o(e.children, r) + "}");
    case da:
      if (!Rt((e.value = e.props.join(",")))) return "";
  }
  return Rt((n = $o(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function pw(e) {
  var t = t0(e);
  return function (n, r, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](n, r, i, s) || "";
    return o;
  };
}
function mw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function gw(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Wc:
        e.return = r0(e.value, e.length, n);
        return;
      case Jm:
        return $o([qt(e, { value: U(e.value, "@", "@" + X) })], r);
      case da:
        if (e.length)
          return nw((n = e.props), function (i) {
            switch (Lt(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Jn(qt(e, { props: [U(i, /:(read-\w+)/, ":" + Ti + "$1")] })),
                  Jn(qt(e, { props: [i] })),
                  mu(e, { props: jf(n, r) });
                break;
              case "::placeholder":
                Jn(
                  qt(e, { props: [U(i, /:(plac\w+)/, ":" + X + "input-$1")] })
                ),
                  Jn(qt(e, { props: [U(i, /:(plac\w+)/, ":" + Ti + "$1")] })),
                  Jn(qt(e, { props: [U(i, /:(plac\w+)/, te + "input-$1")] })),
                  Jn(qt(e, { props: [i] })),
                  mu(e, { props: jf(n, r) });
                break;
            }
            return "";
          });
    }
}
var vw = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Nr =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Gc = typeof window < "u" && "HTMLElement" in window,
  yw = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  ww = {},
  va = Object.freeze([]),
  zr = Object.freeze({});
function i0(e, t, n) {
  return (
    n === void 0 && (n = zr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var s0 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  xw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Sw = /(^-|-$)/g;
function Df(e) {
  return e.replace(xw, "-").replace(Sw, "");
}
var Ew = /(a)(d)/gi,
  $f = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function yu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = $f(t % 52) + n;
  return ($f(t % 52) + n).replace(Ew, "$1-$2");
}
var il,
  pr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  o0 = function (e) {
    return pr(5381, e);
  };
function Xc(e) {
  return yu(o0(e) >>> 0);
}
function Tw(e) {
  return e.displayName || e.name || "Component";
}
function sl(e) {
  return typeof e == "string" && !0;
}
var a0 = typeof Symbol == "function" && Symbol.for,
  l0 = a0 ? Symbol.for("react.memo") : 60115,
  kw = a0 ? Symbol.for("react.forward_ref") : 60112,
  _w = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Pw = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  u0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Cw =
    (((il = {})[kw] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (il[l0] = u0),
    il);
function Uf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === l0
    ? u0
    : "$$typeof" in e
    ? Cw[e.$$typeof]
    : _w;
  var t;
}
var Mw = Object.defineProperty,
  Rw = Object.getOwnPropertyNames,
  Bf = Object.getOwnPropertySymbols,
  Iw = Object.getOwnPropertyDescriptor,
  bw = Object.getPrototypeOf,
  Hf = Object.prototype;
function c0(e, t, n) {
  if (typeof t != "string") {
    if (Hf) {
      var r = bw(t);
      r && r !== Hf && c0(e, r, n);
    }
    var i = Rw(t);
    Bf && (i = i.concat(Bf(t)));
    for (var s = Uf(e), o = Uf(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in Pw || (n && n[l]) || (o && l in o) || (s && l in s))) {
        var u = Iw(t, l);
        try {
          Mw(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Bn(e) {
  return typeof e == "function";
}
function Qc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function An(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Uo(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Gi(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function wu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Gi(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = wu(e[r], t[r]);
  else if (Gi(t)) for (var r in t) e[r] = wu(e[r], t[r]);
  return e;
}
function qc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Hn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Aw = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, s = i; t >= s; )
            if ((s <<= 1) < 0) throw Hn(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(r),
            (this.length = s);
          for (var o = i; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((o = 0), n.length);
          o < l;
          o++
        )
          this.tag.insertRule(a, n[o]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var s = r; s < i; s++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            s = i + r,
            o = i;
          o < s;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  no = new Map(),
  Bo = new Map(),
  ol = 1,
  Ns = function (e) {
    if (no.has(e)) return no.get(e);
    for (; Bo.has(ol); ) ol++;
    var t = ol++;
    return no.set(e, t), Bo.set(t, e), t;
  },
  Ow = function (e, t) {
    no.set(e, t), Bo.set(t, e);
  },
  Nw = "style["
    .concat(Nr, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.4", '"]'),
  zw = new RegExp(
    "^".concat(Nr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  jw = function (e, t, n) {
    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
      (r = i[s]) && e.registerName(t, r);
  },
  Lw = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        i = [],
        s = 0,
        o = r.length;
      s < o;
      s++
    ) {
      var a = r[s].trim();
      if (a) {
        var l = a.match(zw);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (Ow(c, u), jw(e, c, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  };
function Fw() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var h0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Nr, "]")));
        return l[l.length - 1];
      })(n),
      s = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Nr, "active"),
      r.setAttribute("data-styled-version", "6.0.4");
    var o = Fw();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
  },
  Dw = (function () {
    function e(t) {
      (this.element = h0(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o.ownerNode === n) return o;
          }
          throw Hn(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  $w = (function () {
    function e(t) {
      (this.element = h0(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Uw = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Vf = Gc,
  Bw = { isServer: !Gc, useCSSOMInjection: !yw },
  Ho = (function () {
    function e(t, n, r) {
      t === void 0 && (t = zr), n === void 0 && (n = {});
      var i = this;
      (this.options = ke(ke({}, Bw), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Gc &&
          Vf &&
          ((Vf = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(Nw), a = 0, l = o.length;
              a < l;
              a++
            ) {
              var u = o[a];
              u &&
                u.getAttribute(Nr) !== "active" &&
                (Lw(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        qc(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                l = "",
                u = function (h) {
                  var d = (function (p) {
                    return Bo.get(p);
                  })(h);
                  if (d === void 0) return "continue";
                  var g = s.names.get(d),
                    y = o.getGroup(h);
                  if (g === void 0 || y.length === 0) return "continue";
                  var v = ""
                      .concat(Nr, ".g")
                      .concat(h, '[id="')
                      .concat(d, '"]'),
                    S = "";
                  g !== void 0 &&
                    g.forEach(function (p) {
                      p.length > 0 && (S += "".concat(p, ","));
                    }),
                    (l += "".concat(y).concat(v, '{content:"').concat(S, '"}')
                      .concat(`/*!sc*/
`));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Ns(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            ke(ke({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new Uw(i) : r ? new Dw(i) : new $w(i);
            })(this.options)),
            new Aw(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Ns(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Ns(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ns(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Hw = /&/g,
  Vw = /^\s*\/\/.*$/gm;
function f0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = f0(n.children, t)),
      n
    );
  });
}
function Ww(e) {
  var t,
    n,
    r,
    i = e === void 0 ? zr : e,
    s = i.options,
    o = s === void 0 ? zr : s,
    a = i.plugins,
    l = a === void 0 ? va : a,
    u = function (d, g, y) {
      return y === n ||
        (y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : d;
    },
    c = l.slice();
  c.push(function (d) {
    d.type === da &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(Hw, n).replace(r, u));
  }),
    o.prefix && c.push(gw),
    c.push(dw);
  var h = function (d, g, y, v) {
    g === void 0 && (g = ""),
      y === void 0 && (y = ""),
      v === void 0 && (v = "&"),
      (t = v),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var S = d.replace(Vw, ""),
      p = hw(y || g ? "".concat(y, " ").concat(g, " { ").concat(S, " }") : S);
    o.namespace && (p = f0(p, o.namespace));
    var f = [];
    return (
      $o(
        p,
        pw(
          c.concat(
            mw(function (m) {
              return f.push(m);
            })
          )
        )
      ),
      f
    );
  };
  return (
    (h.hash = l.length
      ? l
          .reduce(function (d, g) {
            return g.name || Hn(15), pr(d, g.name);
          }, 5381)
          .toString()
      : ""),
    h
  );
}
var Yw = new Ho(),
  xu = Ww(),
  d0 = Te.createContext({
    shouldForwardProp: void 0,
    styleSheet: Yw,
    stylis: xu,
  });
d0.Consumer;
Te.createContext(void 0);
function Su() {
  return C.useContext(d0);
}
var p0 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = xu);
        var o = r.name + s.hash;
        i.hasNameForId(r.id, o) ||
          i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        qc(this, function () {
          throw Hn(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = xu), this.name + t.hash;
      }),
      e
    );
  })(),
  Gw = function (e) {
    return e >= "A" && e <= "Z";
  };
function Wf(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Gw(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var m0 = function (e) {
    return e == null || e === !1 || e === "";
  },
  g0 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !m0(s) &&
        ((Array.isArray(s) && s.isCss) || Bn(s)
          ? r.push("".concat(Wf(i), ":"), s, ";")
          : Gi(s)
          ? r.push.apply(r, br(br(["".concat(i, " {")], g0(s), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Wf(i), ": ")
                .concat(
                  ((t = i),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in vw ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function gn(e, t, n, r) {
  if (m0(e)) return [];
  if (Qc(e)) return [".".concat(e.styledComponentId)];
  if (Bn(e)) {
    if (!Bn((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return gn(i, t, n, r);
  }
  var s;
  return e instanceof p0
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Gi(e)
    ? g0(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        va,
        e.map(function (o) {
          return gn(o, t, n, r);
        })
      )
    : [e.toString()];
}
function v0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Bn(n) && !Qc(n)) return !1;
  }
  return !0;
}
var Xw = o0("6.0.4"),
  Qw = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && v0(t)),
        (this.componentId = n),
        (this.baseHash = pr(Xw, n)),
        (this.baseStyle = r),
        Ho.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = An(i, this.staticRulesId);
          else {
            var s = Uo(gn(this.rules, t, n, r)),
              o = yu(pr(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = r(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (i = An(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var l = pr(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var h = this.rules[c];
            if (typeof h == "string") u += h;
            else if (h) {
              var d = Uo(gn(h, t, n, r));
              (l = pr(l, d)), (u += d);
            }
          }
          if (u) {
            var g = yu(l >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(
                this.componentId,
                g,
                r(u, ".".concat(g), void 0, this.componentId)
              ),
              (i = An(i, g));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Xi = Te.createContext(void 0);
Xi.Consumer;
function qw(e) {
  var t = Te.useContext(Xi),
    n = C.useMemo(
      function () {
        return (function (r, i) {
          if (!r) throw Hn(14);
          if (Bn(r)) {
            var s = r(i);
            return s;
          }
          if (Array.isArray(r) || typeof r != "object") throw Hn(8);
          return i ? ke(ke({}, i), r) : r;
        })(e.theme, t);
      },
      [e.theme, t]
    );
  return e.children
    ? Te.createElement(Xi.Provider, { value: n }, e.children)
    : null;
}
var al = {};
function Kw(e, t, n) {
  var r = Qc(e),
    i = e,
    s = !sl(e),
    o = t.attrs,
    a = o === void 0 ? va : o,
    l = t.componentId,
    u =
      l === void 0
        ? (function (m, w) {
            var T = typeof m != "string" ? "sc" : Df(m);
            al[T] = (al[T] || 0) + 1;
            var P = "".concat(T, "-").concat(Xc("6.0.4" + T + al[T]));
            return w ? "".concat(w, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName;
  c === void 0 &&
    (function (m) {
      return sl(m) ? "styled.".concat(m) : "Styled(".concat(Tw(m), ")");
    })(e);
  var h =
      t.displayName && t.componentId
        ? "".concat(Df(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    d = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    g = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var y = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var v = t.shouldForwardProp;
      g = function (m, w) {
        return y(m, w) && v(m, w);
      };
    } else g = y;
  }
  var S = new Qw(n, h, r ? i.componentStyle : void 0);
  function p(m, w) {
    return (function (T, P, k) {
      var I = T.attrs,
        N = T.componentStyle,
        _ = T.defaultProps,
        F = T.foldedComponentIds,
        V = T.styledComponentId,
        G = T.target,
        oe = Te.useContext(Xi),
        de = Su(),
        he = T.shouldForwardProp || de.shouldForwardProp,
        Z = (function ($e, we, Xe) {
          for (
            var xe,
              ze = ke(ke({}, we), { className: void 0, theme: Xe }),
              Kn = 0;
            Kn < $e.length;
            Kn += 1
          ) {
            var kn = Bn((xe = $e[Kn])) ? xe(ze) : xe;
            for (var ft in kn)
              ze[ft] =
                ft === "className"
                  ? An(ze[ft], kn[ft])
                  : ft === "style"
                  ? ke(ke({}, ze[ft]), kn[ft])
                  : kn[ft];
          }
          return (
            we.className && (ze.className = An(ze.className, we.className)), ze
          );
        })(I, P, i0(P, oe, _) || zr),
        b = Z.as || G,
        j = {};
      for (var L in Z)
        Z[L] === void 0 ||
          L[0] === "$" ||
          L === "as" ||
          L === "theme" ||
          (L === "forwardedAs"
            ? (j.as = Z.forwardedAs)
            : (he && !he(L, b)) || (j[L] = Z[L]));
      var Q = (function ($e, we) {
          var Xe = Su(),
            xe = $e.generateAndInjectStyles(we, Xe.styleSheet, Xe.stylis);
          return xe;
        })(N, Z),
        K = An(F, V);
      return (
        Q && (K += " " + Q),
        Z.className && (K += " " + Z.className),
        (j[sl(b) && !s0.has(b) ? "class" : "className"] = K),
        (j.ref = k),
        C.createElement(b, j)
      );
    })(f, m, w);
  }
  var f = Te.forwardRef(p);
  return (
    (f.attrs = d),
    (f.componentStyle = S),
    (f.shouldForwardProp = g),
    (f.foldedComponentIds = r
      ? An(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (f.styledComponentId = h),
    (f.target = r ? i.target : e),
    Object.defineProperty(f, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (m) {
        this._foldedDefaultProps = r
          ? (function (w) {
              for (var T = [], P = 1; P < arguments.length; P++)
                T[P - 1] = arguments[P];
              for (var k = 0, I = T; k < I.length; k++) wu(w, I[k], !0);
              return w;
            })({}, i.defaultProps, m)
          : m;
      },
    }),
    qc(f, function () {
      return ".".concat(f.styledComponentId);
    }),
    s &&
      c0(f, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    f
  );
}
function Yf(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Gf = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Wr(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Bn(e) || Gi(e)) {
    var r = e;
    return Gf(gn(Yf(va, br([r], t, !0))));
  }
  var i = e;
  return t.length === 0 && i.length === 1 && typeof i[0] == "string"
    ? gn(i)
    : Gf(gn(Yf(i, t)));
}
function Eu(e, t, n) {
  if ((n === void 0 && (n = zr), !t)) throw Hn(1, t);
  var r = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, Wr.apply(void 0, br([i], s, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Eu(
        e,
        t,
        ke(ke({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return Eu(e, t, ke(ke({}, n), i));
    }),
    r
  );
}
var y0 = function (e) {
    return Eu(Kw, e);
  },
  A = y0;
s0.forEach(function (e) {
  A[e] = y0(e);
});
var Zw = (function () {
  function e(t, n) {
    (this.rules = t),
      (this.componentId = n),
      (this.isStatic = v0(t)),
      Ho.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, n, r, i) {
      var s = i(Uo(gn(this.rules, n, r, i)), ""),
        o = this.componentId + t;
      r.insertRules(o, o, s);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, i) {
      t > 2 && Ho.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, i);
    }),
    e
  );
})();
function Jw(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Wr.apply(void 0, br([e], t, !1)),
    i = "sc-global-".concat(Xc(JSON.stringify(r))),
    s = new Zw(r, i),
    o = function (l) {
      var u = Su(),
        c = Te.useContext(Xi),
        h = Te.useRef(u.styleSheet.allocateGSInstance(i)).current;
      return (
        u.styleSheet.server && a(h, l, u.styleSheet, c, u.stylis),
        (Te.useInsertionEffect || Te.useLayoutEffect)(
          function () {
            if (!u.styleSheet.server)
              return (
                a(h, l, u.styleSheet, c, u.stylis),
                function () {
                  return s.removeStyles(h, u.styleSheet);
                }
              );
          },
          [h, l, u.styleSheet, c, u.stylis]
        ),
        null
      );
    };
  function a(l, u, c, h, d) {
    if (s.isStatic) s.renderStyles(l, ww, c, d);
    else {
      var g = ke(ke({}, u), { theme: i0(u, h, o.defaultProps) });
      s.renderStyles(l, g, c, d);
    }
  }
  return Te.memo(o);
}
function Kc(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Uo(Wr.apply(void 0, br([e], t, !1))),
    i = Xc(r);
  return new p0(i, r);
}
const w0 = A.li`
  display: inline-block;
  margin-left: 2.5vw;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid transparent;
  font-size: 1.4vw;
`,
  ex = A("div")`
  border-bottom: ${({ $isSelected: e, theme: t }) =>
    e ? `1px solid ${t.color.white}` : "none"};
  position: relative;
  color: ${({ theme: e }) => e.color.white};
  display: inline-block;
  text-shadow: ${({ theme: e }) => `0 2vw ${e.color.white}`};
  height: 1.6vw;
  overflow: hidden;
  cursor: pointer;
`;
A.div`
  position: relative;
  display: inline-block;
`;
const tx = Kc`
    0% { transform: translateY(0%); }
    100% { transform: translateY(-100%); }
`,
  nx = Kc`
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0%); }
`,
  rx = A.span`
  display: inline-block;

  animation-name: ${({ $active: e }) => (e ? tx : nx)};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ $delay: e }) => e}ms;
  animation-duration: ${({ $duration: e }) => e}ms;
`,
  ix = ({ char: e, delay: t, duration: n, active: r }) =>
    x.jsx(rx, { $delay: t, $duration: n, $active: r, children: e }),
  sx = (e = !1) => {
    const [t, n] = C.useState(e);
    return [t, () => n(!0), () => n(!1), () => n((o) => !o)];
  },
  ox = 15,
  ax = 230,
  lx = ({ text: e, to: t }) => {
    const { pathname: n } = Hr(),
      r = Vc(),
      [i, s, o] = sx(),
      a = t === n,
      l = () => {
        r(t);
      },
      u = () =>
        e
          .split("")
          .map((c, h) =>
            x.jsx(ix, { char: c, delay: ox * h, duration: ax, active: i }, h)
          );
    return x.jsx(w0, {
      children: x.jsx(ex, {
        onClick: l,
        $isSelected: a,
        onMouseOver: s,
        onMouseOut: o,
        children: x.jsx(x.Fragment, { children: u() }),
      }),
    });
  },
  ux = A.header`
  width: 100%;
  height: 6vw;
  padding: 0;
`,
  cx = A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  height: 100%;
  background-color: ${({ theme: e }) => e.color.black_alpha};
  padding: 0 5vw;
  clip-path: inset(0.5vw 0.5vw 0.5vw 0.5vw round 0.5vw);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`,
  hx = A(qy)`
  font-size: 2.3vw;
  color: ${({ theme: e }) => e.color.white};
`,
  fx = A.nav`
  display: "flex";
`,
  dx = A.ul`
  display: "flex";
`,
  px = A.a`
  border: 1px solid;
  border-radius: 1.75vw;
  background-color: transparent;
  padding: 0 1.75vw;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${({ theme: e }) => e.color.white};

  &:hover {
    color: ${({ theme: e }) => e.color.black};
    background-color: ${({ theme: e }) => e.color.medium};
  }
`,
  mx = [
    { text: "HOME", to: "/" },
    { text: "ABOUT", to: "/about" },
  ],
  gx = () =>
    x.jsx(ux, {
      children: x.jsxs(cx, {
        children: [
          x.jsx(hx, { to: "/", children: "SEOWS" }),
          x.jsx(fx, {
            children: x.jsxs(dx, {
              children: [
                mx.map(({ text: e, to: t }) =>
                  x.jsx(lx, { text: e, to: t }, e)
                ),
                x.jsx(w0, {
                  children: x.jsx(px, {
                    href: "mailto:seows2@naver.com",
                    children: "CONTACT",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  vx = ({ children: e }) => {
    const n = Hr().pathname === "/about";
    return x.jsxs(yx, {
      children: [x.jsx(gx, {}), x.jsx(wx, { $isAboutPage: n, children: e })],
    });
  },
  yx = A.div`
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`,
  wx = A.div`
  background-color: ${({ $isAboutPage: e }) => (e ? "black" : "none")};
  width: ${({ $isAboutPage: e }) => (e ? "100%" : "70vw")};
  margin: auto;
`;
var xx = Object.defineProperty,
  Sx = (e, t) => {
    for (var n in t) xx(e, n, { get: t[n], enumerable: !0 });
  },
  _t = {};
Sx(_t, {
  assign: () => kx,
  colors: () => vn,
  createStringInterpolator: () => ih,
  skipAnimation: () => P0,
  to: () => _0,
  willAdvance: () => sh,
});
var Zc = fs(),
  $ = (e) => hs(e, Zc),
  Jc = fs();
$.write = (e) => hs(e, Jc);
var ya = fs();
$.onStart = (e) => hs(e, ya);
var eh = fs();
$.onFrame = (e) => hs(e, eh);
var th = fs();
$.onFinish = (e) => hs(e, th);
var Sr = [];
$.setTimeout = (e, t) => {
  const n = $.now() + t,
    r = () => {
      const s = Sr.findIndex((o) => o.cancel == r);
      ~s && Sr.splice(s, 1), (on -= ~s ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return Sr.splice(x0(n), 0, i), (on += 1), S0(), i;
};
var x0 = (e) => ~(~Sr.findIndex((t) => t.time > e) || ~Sr.length);
$.cancel = (e) => {
  ya.delete(e), eh.delete(e), th.delete(e), Zc.delete(e), Jc.delete(e);
};
$.sync = (e) => {
  (Tu = !0), $.batchedUpdates(e), (Tu = !1);
};
$.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), $.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      ya.delete(n), (t = null);
    }),
    r
  );
};
var nh = typeof window < "u" ? window.requestAnimationFrame : () => {};
$.use = (e) => (nh = e);
$.now = typeof performance < "u" ? () => performance.now() : Date.now;
$.batchedUpdates = (e) => e();
$.catch = console.error;
$.frameLoop = "always";
$.advance = () => {
  $.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : T0();
};
var sn = -1,
  on = 0,
  Tu = !1;
function hs(e, t) {
  Tu ? (t.delete(e), e(0)) : (t.add(e), S0());
}
function S0() {
  sn < 0 && ((sn = 0), $.frameLoop !== "demand" && nh(E0));
}
function Ex() {
  sn = -1;
}
function E0() {
  ~sn && (nh(E0), $.batchedUpdates(T0));
}
function T0() {
  const e = sn;
  sn = $.now();
  const t = x0(sn);
  if ((t && (k0(Sr.splice(0, t), (n) => n.handler()), (on -= t)), !on)) {
    Ex();
    return;
  }
  ya.flush(),
    Zc.flush(e ? Math.min(64, sn - e) : 16.667),
    eh.flush(),
    Jc.flush(),
    th.flush();
}
function fs() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (on += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (on -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (on -= t.size),
        k0(t, (r) => r(n) && e.add(r)),
        (on += e.size),
        (t = e));
    },
  };
}
function k0(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      $.catch(r);
    }
  });
}
function ku() {}
var Tx = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  R = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function Ft(e, t) {
  if (R.arr(e)) {
    if (!R.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var B = (e, t) => e.forEach(t);
function Nt(e, t, n) {
  if (R.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Ze = (e) => (R.und(e) ? [] : R.arr(e) ? e : [e]);
function ki(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), B(n, t);
  }
}
var di = (e, ...t) => ki(e, (n) => n(...t)),
  rh = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ih,
  _0,
  vn = null,
  P0 = !1,
  sh = ku,
  kx = (e) => {
    e.to && (_0 = e.to),
      e.now && ($.now = e.now),
      e.colors !== void 0 && (vn = e.colors),
      e.skipAnimation != null && (P0 = e.skipAnimation),
      e.createStringInterpolator && (ih = e.createStringInterpolator),
      e.requestAnimationFrame && $.use(e.requestAnimationFrame),
      e.batchedUpdates && ($.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (sh = e.willAdvance),
      e.frameLoop && ($.frameLoop = e.frameLoop);
  },
  _i = new Set(),
  ot = [],
  ll = [],
  Vo = 0,
  wa = {
    get idle() {
      return !_i.size && !ot.length;
    },
    start(e) {
      Vo > e.priority ? (_i.add(e), $.onStart(_x)) : (C0(e), $(_u));
    },
    advance: _u,
    sort(e) {
      if (Vo) $.onFrame(() => wa.sort(e));
      else {
        const t = ot.indexOf(e);
        ~t && (ot.splice(t, 1), M0(e));
      }
    },
    clear() {
      (ot = []), _i.clear();
    },
  };
function _x() {
  _i.forEach(C0), _i.clear(), $(_u);
}
function C0(e) {
  ot.includes(e) || M0(e);
}
function M0(e) {
  ot.splice(
    Px(ot, (t) => t.priority > e.priority),
    0,
    e
  );
}
function _u(e) {
  const t = ll;
  for (let n = 0; n < ot.length; n++) {
    const r = ot[n];
    (Vo = r.priority), r.idle || (sh(r), r.advance(e), r.idle || t.push(r));
  }
  return (Vo = 0), (ll = ot), (ll.length = 0), (ot = t), ot.length > 0;
}
function Px(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var Cx = (e, t, n) => Math.min(Math.max(n, e), t),
  Mx = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  wt = "[-+]?\\d*\\.?\\d+",
  Wo = wt + "%";
function xa(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Rx = new RegExp("rgb" + xa(wt, wt, wt)),
  Ix = new RegExp("rgba" + xa(wt, wt, wt, wt)),
  bx = new RegExp("hsl" + xa(wt, Wo, Wo)),
  Ax = new RegExp("hsla" + xa(wt, Wo, Wo, wt)),
  Ox = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Nx = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  zx = /^#([0-9a-fA-F]{6})$/,
  jx = /^#([0-9a-fA-F]{8})$/;
function Lx(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = zx.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : vn && vn[e] !== void 0
    ? vn[e]
    : (t = Rx.exec(e))
    ? ((er(t[1]) << 24) | (er(t[2]) << 16) | (er(t[3]) << 8) | 255) >>> 0
    : (t = Ix.exec(e))
    ? ((er(t[1]) << 24) | (er(t[2]) << 16) | (er(t[3]) << 8) | qf(t[4])) >>> 0
    : (t = Ox.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = jx.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = Nx.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = bx.exec(e))
    ? (Xf(Qf(t[1]), zs(t[2]), zs(t[3])) | 255) >>> 0
    : (t = Ax.exec(e))
    ? (Xf(Qf(t[1]), zs(t[2]), zs(t[3])) | qf(t[4])) >>> 0
    : null;
}
function ul(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Xf(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    s = ul(i, r, e + 1 / 3),
    o = ul(i, r, e),
    a = ul(i, r, e - 1 / 3);
  return (
    (Math.round(s * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function er(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Qf(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function qf(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function zs(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Kf(e) {
  let t = Lx(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    s = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${s})`;
}
var Qi = (e, t, n) => {
  if (R.fun(e)) return e;
  if (R.arr(e)) return Qi({ range: e, output: t, extrapolate: n });
  if (R.str(e.output[0])) return ih(e);
  const r = e,
    i = r.output,
    s = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || "extend",
    a = r.extrapolateRight || r.extrapolate || "extend",
    l = r.easing || ((u) => u);
  return (u) => {
    const c = Dx(u, s);
    return Fx(u, s[c], s[c + 1], i[c], i[c + 1], l, o, a, r.map);
  };
};
function Fx(e, t, n, r, i, s, o, a, l) {
  let u = l ? l(e) : e;
  if (u < t) {
    if (o === "identity") return u;
    o === "clamp" && (u = t);
  }
  if (u > n) {
    if (a === "identity") return u;
    a === "clamp" && (u = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (u = -u)
        : n === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (n - t)),
      (u = s(u)),
      r === -1 / 0
        ? (u = -u)
        : i === 1 / 0
        ? (u = u + r)
        : (u = u * (i - r) + r),
      u);
}
function Dx(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var $x =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return Cx(0, 1, i / e);
    },
  Yo = 1.70158,
  js = Yo * 1.525,
  Zf = Yo + 1,
  Jf = (2 * Math.PI) / 3,
  ed = (2 * Math.PI) / 4.5,
  Ls = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  Ux = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => Zf * e * e * e - Yo * e * e,
    easeOutBack: (e) => 1 + Zf * Math.pow(e - 1, 3) + Yo * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((js + 1) * 2 * e - js)) / 2
        : (Math.pow(2 * e - 2, 2) * ((js + 1) * (e * 2 - 2) + js) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Jf),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Jf) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ed)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ed)) / 2 +
          1,
    easeInBounce: (e) => 1 - Ls(1 - e),
    easeOutBounce: Ls,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Ls(1 - 2 * e)) / 2 : (1 + Ls(2 * e - 1)) / 2,
    steps: $x,
  },
  qi = Symbol.for("FluidValue.get"),
  jr = Symbol.for("FluidValue.observers"),
  st = (e) => !!(e && e[qi]),
  Be = (e) => (e && e[qi] ? e[qi]() : e),
  td = (e) => e[jr] || null;
function Bx(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Ki(e, t) {
  const n = e[jr];
  n &&
    n.forEach((r) => {
      Bx(r, t);
    });
}
var R0 = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      Hx(this, e);
    }
  },
  Hx = (e, t) => I0(e, qi, t);
function Yr(e, t) {
  if (e[qi]) {
    let n = e[jr];
    n || I0(e, jr, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Zi(e, t) {
  const n = e[jr];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[jr] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var I0 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  ro = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Vx =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  nd = new RegExp(`(${ro.source})(%|[a-z]+)`, "i"),
  Wx = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Sa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  b0 = (e) => {
    const [t, n] = Yx(e);
    if (!t || rh()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && Sa.test(n)) return b0(n);
      if (n) return n;
    }
    return e;
  },
  Yx = (e) => {
    const t = Sa.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  cl,
  Gx = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  A0 = (e) => {
    cl ||
      (cl = vn
        ? new RegExp(`(${Object.keys(vn).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((s) =>
        Be(s).replace(Sa, b0).replace(Vx, Kf).replace(cl, Kf)
      ),
      n = t.map((s) => s.match(ro).map(Number)),
      i = n[0]
        .map((s, o) =>
          n.map((a) => {
            if (!(o in a))
              throw Error('The arity of each "output" value must be equal');
            return a[o];
          })
        )
        .map((s) => Qi({ ...e, output: s }));
    return (s) => {
      var l;
      const o =
        !nd.test(t[0]) &&
        ((l = t.find((u) => nd.test(u))) == null ? void 0 : l.replace(ro, ""));
      let a = 0;
      return t[0].replace(ro, () => `${i[a++](s)}${o || ""}`).replace(Wx, Gx);
    };
  },
  oh = "react-spring: ",
  O0 = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${oh}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  Xx = O0(console.warn);
function Qx() {
  Xx(`${oh}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var qx = O0(console.warn);
function Kx() {
  qx(
    `${oh}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Ea(e) {
  return (
    R.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!rh() && Sa.test(e)) || e in (vn || {}))
  );
}
var Ta = rh() ? C.useEffect : C.useLayoutEffect,
  Zx = () => {
    const e = C.useRef(!1);
    return (
      Ta(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function N0() {
  const e = C.useState()[1],
    t = Zx();
  return () => {
    t.current && e(Math.random());
  };
}
function Jx(e, t) {
  const [n] = C.useState(() => ({ inputs: t, result: e() })),
    r = C.useRef(),
    i = r.current;
  let s = i;
  return (
    s
      ? (t && s.inputs && e2(t, s.inputs)) || (s = { inputs: t, result: e() })
      : (s = n),
    C.useEffect(() => {
      (r.current = s), i == n && (n.inputs = n.result = void 0);
    }, [s]),
    s.result
  );
}
function e2(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var z0 = (e) => C.useEffect(e, t2),
  t2 = [];
function rd(e) {
  const t = C.useRef();
  return (
    C.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var Ji = Symbol.for("Animated:node"),
  n2 = (e) => !!e && e[Ji] === e,
  Mt = (e) => e && e[Ji],
  ah = (e, t) => Tx(e, Ji, t),
  ka = (e) => e && e[Ji] && e[Ji].getPayload(),
  j0 = class {
    constructor() {
      ah(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  ds = class extends j0 {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        R.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new ds(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        R.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        R.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  es = class extends ds {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = Qi({ output: [e, e] }));
    }
    static create(e) {
      return new es(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (R.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = Qi({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  Go = { dependencies: null },
  _a = class extends j0 {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        Nt(this.source, (n, r) => {
          n2(n)
            ? (t[r] = n.getValue(e))
            : st(n)
            ? (t[r] = Be(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && B(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return Nt(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Go.dependencies && st(e) && Go.dependencies.add(e);
      const t = ka(e);
      t && B(t, (n) => this.add(n));
    }
  },
  L0 = class extends _a {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new L0(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(r2)), !0);
    }
  };
function r2(e) {
  return (Ea(e) ? es : ds).create(e);
}
function Pu(e) {
  const t = Mt(e);
  return t ? t.constructor : R.arr(e) ? L0 : Ea(e) ? es : ds;
}
var id = (e, t) => {
    const n = !R.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return C.forwardRef((r, i) => {
      const s = C.useRef(null),
        o =
          n &&
          C.useCallback(
            (y) => {
              s.current = o2(i, y);
            },
            [i]
          ),
        [a, l] = s2(r, t),
        u = N0(),
        c = () => {
          const y = s.current;
          if (n && !y) return;
          (y ? t.applyAnimatedValues(y, a.getValue(!0)) : !1) === !1 && u();
        },
        h = new i2(c, l),
        d = C.useRef();
      Ta(
        () => (
          (d.current = h),
          B(l, (y) => Yr(y, h)),
          () => {
            d.current &&
              (B(d.current.deps, (y) => Zi(y, d.current)),
              $.cancel(d.current.update));
          }
        )
      ),
        C.useEffect(c, []),
        z0(() => () => {
          const y = d.current;
          B(y.deps, (v) => Zi(v, y));
        });
      const g = t.getComponentProps(a.getValue());
      return C.createElement(e, { ...g, ref: o });
    });
  },
  i2 = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && $.write(this.update);
    }
  };
function s2(e, t) {
  const n = new Set();
  return (
    (Go.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new _a(e)),
    (Go.dependencies = null),
    [e, n]
  );
}
function o2(e, t) {
  return e && (R.fun(e) ? e(t) : (e.current = t)), t;
}
var sd = Symbol.for("AnimatedComponent"),
  a2 = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new _a(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      s = (o) => {
        const a = od(o) || "Anonymous";
        return (
          R.str(o)
            ? (o = s[o] || (s[o] = id(o, i)))
            : (o = o[sd] || (o[sd] = id(o, i))),
          (o.displayName = `Animated(${a})`),
          o
        );
      };
    return (
      Nt(e, (o, a) => {
        R.arr(e) && (a = od(o)), (s[a] = s(o));
      }),
      { animated: s }
    );
  },
  od = (e) =>
    R.str(e)
      ? e
      : e && R.str(e.displayName)
      ? e.displayName
      : (R.fun(e) && e.name) || null;
function Mn(e, ...t) {
  return R.fun(e) ? e(...t) : e;
}
var Pi = (e, t) =>
    e === !0 || !!(t && e && (R.fun(e) ? e(t) : Ze(e).includes(t))),
  F0 = (e, t) => (R.obj(e) ? t && e[t] : e),
  D0 = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  l2 = (e) => e,
  lh = (e, t = l2) => {
    let n = u2;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const s = t(e[i], i);
      R.und(s) || (r[i] = s);
    }
    return r;
  },
  u2 = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  c2 = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function h2(e) {
  const t = {};
  let n = 0;
  if (
    (Nt(e, (r, i) => {
      c2[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function $0(e) {
  const t = h2(e);
  if (t) {
    const n = { to: t };
    return Nt(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function ts(e) {
  return (
    (e = Be(e)),
    R.arr(e)
      ? e.map(ts)
      : Ea(e)
      ? _t.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function f2(e) {
  for (const t in e) return !0;
  return !1;
}
function Cu(e) {
  return R.fun(e) || (R.arr(e) && R.obj(e[0]));
}
function d2(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function U0(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var p2 = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Mu = { ...p2.default, mass: 1, damping: 1, easing: Ux.linear, clamp: !1 },
  m2 = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Mu);
    }
  };
function g2(e, t, n) {
  n && ((n = { ...n }), ad(n, t), (t = { ...n, ...t })),
    ad(e, t),
    Object.assign(e, t);
  for (const o in Mu) e[o] == null && (e[o] = Mu[o]);
  let { frequency: r, damping: i } = e;
  const { mass: s } = e;
  return (
    R.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * s),
      (e.friction = (4 * Math.PI * i * s) / r)),
    e
  );
}
function ad(e, t) {
  if (!R.und(t.decay)) e.duration = void 0;
  else {
    const n = !R.und(t.tension) || !R.und(t.friction);
    (n || !R.und(t.frequency) || !R.und(t.damping) || !R.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var ld = [],
  v2 = class {
    constructor() {
      (this.changed = !1),
        (this.values = ld),
        (this.toValues = null),
        (this.fromValues = ld),
        (this.config = new m2()),
        (this.immediate = !1);
    }
  };
function B0(e, { key: t, props: n, defaultProps: r, state: i, actions: s }) {
  return new Promise((o, a) => {
    let l,
      u,
      c = Pi(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (c) g();
    else {
      R.und(n.pause) || (i.paused = Pi(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = i.paused || Pi(y, t)),
        (l = Mn(n.delay || 0, t)),
        y ? (i.resumeQueue.add(d), s.pause()) : (s.resume(), d());
    }
    function h() {
      i.resumeQueue.add(d),
        i.timeouts.delete(u),
        u.cancel(),
        (l = u.time - $.now());
    }
    function d() {
      l > 0 && !_t.skipAnimation
        ? ((i.delayed = !0),
          (u = $.setTimeout(g, l)),
          i.pauseQueue.add(h),
          i.timeouts.add(u))
        : g();
    }
    function g() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(h),
        i.timeouts.delete(u),
        e <= (i.cancelId || 0) && (c = !0);
      try {
        s.start({ ...n, callId: e, cancel: c }, o);
      } catch (y) {
        a(y);
      }
    }
  });
}
var uh = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Er(e.get())
      : t.every((n) => n.noop)
      ? H0(e.get())
      : vt(
          e.get(),
          t.every((n) => n.finished)
        ),
  H0 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  vt = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Er = (e) => ({ value: e, cancelled: !0, finished: !1 });
function V0(e, t, n, r) {
  const { callId: i, parentId: s, onRest: o } = t,
    { asyncTo: a, promise: l } = n;
  return !s && e === a && !t.reset
    ? l
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const u = lh(t, (S, p) => (p === "onRest" ? void 0 : S));
        let c, h;
        const d = new Promise((S, p) => ((c = S), (h = p))),
          g = (S) => {
            const p =
              (i <= (n.cancelId || 0) && Er(r)) ||
              (i !== n.asyncId && vt(r, !1));
            if (p) throw ((S.result = p), h(S), S);
          },
          y = (S, p) => {
            const f = new ud(),
              m = new cd();
            return (async () => {
              if (_t.skipAnimation)
                throw (ns(n), (m.result = vt(r, !1)), h(m), m);
              g(f);
              const w = R.obj(S) ? { ...S } : { ...p, to: S };
              (w.parentId = i),
                Nt(u, (P, k) => {
                  R.und(w[k]) && (w[k] = P);
                });
              const T = await r.start(w);
              return (
                g(f),
                n.paused &&
                  (await new Promise((P) => {
                    n.resumeQueue.add(P);
                  })),
                T
              );
            })();
          };
        let v;
        if (_t.skipAnimation) return ns(n), vt(r, !1);
        try {
          let S;
          R.arr(e)
            ? (S = (async (p) => {
                for (const f of p) await y(f);
              })(e))
            : (S = Promise.resolve(e(y, r.stop.bind(r)))),
            await Promise.all([S.then(c), d]),
            (v = vt(r.get(), !0, !1));
        } catch (S) {
          if (S instanceof ud) v = S.result;
          else if (S instanceof cd) v = S.result;
          else throw S;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = s),
            (n.asyncTo = s ? a : void 0),
            (n.promise = s ? l : void 0));
        }
        return (
          R.fun(o) &&
            $.batchedUpdates(() => {
              o(v, r, r.item);
            }),
          v
        );
      })());
}
function ns(e, t) {
  ki(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var ud = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  cd = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  Ru = (e) => e instanceof ch,
  y2 = 1,
  ch = class extends R0 {
    constructor() {
      super(...arguments), (this.id = y2++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = Mt(this);
      return e && e.getValue();
    }
    to(...e) {
      return _t.to(this, e);
    }
    interpolate(...e) {
      return Qx(), _t.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      Ki(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || wa.sort(this),
        Ki(this, { type: "priority", parent: this, priority: e });
    }
  },
  Vn = Symbol.for("SpringPhase"),
  W0 = 1,
  Iu = 2,
  bu = 4,
  hl = (e) => (e[Vn] & W0) > 0,
  Qt = (e) => (e[Vn] & Iu) > 0,
  ti = (e) => (e[Vn] & bu) > 0,
  hd = (e, t) => (t ? (e[Vn] |= Iu | W0) : (e[Vn] &= ~Iu)),
  fd = (e, t) => (t ? (e[Vn] |= bu) : (e[Vn] &= ~bu)),
  w2 = class extends ch {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new v2()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !R.und(e) || !R.und(t))
      ) {
        const n = R.obj(e) ? { ...e } : { ...t, from: e };
        R.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Qt(this) || this._state.asyncTo) || ti(this);
    }
    get goal() {
      return Be(this.animation.to);
    }
    get velocity() {
      const e = Mt(this);
      return e instanceof ds
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return hl(this);
    }
    get isAnimating() {
      return Qt(this);
    }
    get isPaused() {
      return ti(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: s } = r,
        o = ka(r.to);
      !o && st(r.to) && (i = Ze(Be(r.to))),
        r.values.forEach((u, c) => {
          if (u.done) return;
          const h = u.constructor == es ? 1 : o ? o[c].lastPosition : i[c];
          let d = r.immediate,
            g = h;
          if (!d) {
            if (((g = u.lastPosition), s.tension <= 0)) {
              u.done = !0;
              return;
            }
            let y = (u.elapsedTime += e);
            const v = r.fromValues[c],
              S =
                u.v0 != null
                  ? u.v0
                  : (u.v0 = R.arr(s.velocity) ? s.velocity[c] : s.velocity);
            let p;
            const f =
              s.precision ||
              (v == h ? 0.005 : Math.min(1, Math.abs(h - v) * 0.001));
            if (R.und(s.duration))
              if (s.decay) {
                const m = s.decay === !0 ? 0.998 : s.decay,
                  w = Math.exp(-(1 - m) * y);
                (g = v + (S / (1 - m)) * (1 - w)),
                  (d = Math.abs(u.lastPosition - g) <= f),
                  (p = S * w);
              } else {
                p = u.lastVelocity == null ? S : u.lastVelocity;
                const m = s.restVelocity || f / 10,
                  w = s.clamp ? 0 : s.bounce,
                  T = !R.und(w),
                  P = v == h ? u.v0 > 0 : v < h;
                let k,
                  I = !1;
                const N = 1,
                  _ = Math.ceil(e / N);
                for (
                  let F = 0;
                  F < _ &&
                  ((k = Math.abs(p) > m),
                  !(!k && ((d = Math.abs(h - g) <= f), d)));
                  ++F
                ) {
                  T &&
                    ((I = g == h || g > h == P), I && ((p = -p * w), (g = h)));
                  const V = -s.tension * 1e-6 * (g - h),
                    G = -s.friction * 0.001 * p,
                    oe = (V + G) / s.mass;
                  (p = p + oe * N), (g = g + p * N);
                }
              }
            else {
              let m = 1;
              s.duration > 0 &&
                (this._memoizedDuration !== s.duration &&
                  ((this._memoizedDuration = s.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = s.duration * u.durationProgress),
                    (y = u.elapsedTime += e))),
                (m = (s.progress || 0) + y / this._memoizedDuration),
                (m = m > 1 ? 1 : m < 0 ? 0 : m),
                (u.durationProgress = m)),
                (g = v + s.easing(m) * (h - v)),
                (p = (g - u.lastPosition) / e),
                (d = m == 1);
            }
            (u.lastVelocity = p),
              Number.isNaN(g) &&
                (console.warn("Got NaN while animating:", this), (d = !0));
          }
          o && !o[c].done && (d = !1),
            d ? (u.done = !0) : (t = !1),
            u.setValue(g, s.round) && (n = !0);
        });
      const a = Mt(this),
        l = a.getValue();
      if (t) {
        const u = Be(r.to);
        (l !== u || n) && !s.decay
          ? (a.setValue(u), this._onChange(u))
          : n && s.decay && this._onChange(l),
          this._stop();
      } else n && this._onChange(l);
    }
    set(e) {
      return (
        $.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Qt(this)) {
        const { to: e, config: t } = this.animation;
        $.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        R.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [R.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => uh(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        ns(this._state, e && this._lastCallId),
        $.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = R.obj(n) ? n[t] : n),
        (n == null || Cu(n)) && (n = void 0),
        (r = R.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        hl(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = Be(r)),
          R.und(r) ? Mt(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          lh(e, (o, a) => (/^on/.test(a) ? F0(o, n) : o))
        ),
        pd(this, e, "onProps"),
        ri(this, "onProps", e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const s = this._state;
      return B0(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: s,
        actions: {
          pause: () => {
            ti(this) ||
              (fd(this, !0),
              di(s.pauseQueue),
              ri(this, "onPause", vt(this, ni(this, this.animation.to)), this));
          },
          resume: () => {
            ti(this) &&
              (fd(this, !1),
              Qt(this) && this._resume(),
              di(s.resumeQueue),
              ri(
                this,
                "onResume",
                vt(this, ni(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((o) => {
        if (e.loop && o.finished && !(t && o.noop)) {
          const a = Y0(e);
          if (a) return this._update(a, !0);
        }
        return o;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Er(this));
      const r = !R.und(e.to),
        i = !R.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Er(this));
      const { key: s, defaultProps: o, animation: a } = this,
        { to: l, from: u } = a;
      let { to: c = l, from: h = u } = e;
      i && !r && (!t.default || R.und(c)) && (c = h),
        t.reverse && ([c, h] = [h, c]);
      const d = !Ft(h, u);
      d && (a.from = h), (h = Be(h));
      const g = !Ft(c, l);
      g && this._focus(c);
      const y = Cu(t.to),
        { config: v } = a,
        { decay: S, velocity: p } = v;
      (r || i) && (v.velocity = 0),
        t.config &&
          !y &&
          g2(
            v,
            Mn(t.config, s),
            t.config !== o.config ? Mn(o.config, s) : void 0
          );
      let f = Mt(this);
      if (!f || R.und(c)) return n(vt(this, !0));
      const m = R.und(t.reset) ? i && !t.default : !R.und(h) && Pi(t.reset, s),
        w = m ? h : this.get(),
        T = ts(c),
        P = R.num(T) || R.arr(T) || Ea(T),
        k = !y && (!P || Pi(o.immediate || t.immediate, s));
      if (g) {
        const F = Pu(c);
        if (F !== f.constructor)
          if (k) f = this._set(T);
          else
            throw Error(
              `Cannot animate between ${f.constructor.name} and ${F.name}, as the "to" prop suggests`
            );
      }
      const I = f.constructor;
      let N = st(c),
        _ = !1;
      if (!N) {
        const F = m || (!hl(this) && d);
        (g || F) && ((_ = Ft(ts(w), T)), (N = !_)),
          ((!Ft(a.immediate, k) && !k) ||
            !Ft(v.decay, S) ||
            !Ft(v.velocity, p)) &&
            (N = !0);
      }
      if (
        (_ && Qt(this) && (a.changed && !m ? (N = !0) : N || this._stop(l)),
        !y &&
          ((N || st(l)) &&
            ((a.values = f.getPayload()),
            (a.toValues = st(c) ? null : I == es ? [1] : Ze(T))),
          a.immediate != k && ((a.immediate = k), !k && !m && this._set(l)),
          N))
      ) {
        const { onRest: F } = a;
        B(S2, (G) => pd(this, t, G));
        const V = vt(this, ni(this, l));
        di(this._pendingCalls, V),
          this._pendingCalls.add(n),
          a.changed &&
            $.batchedUpdates(() => {
              var G;
              (a.changed = !m),
                F == null || F(V, this),
                m
                  ? Mn(o.onRest, V)
                  : (G = a.onStart) == null || G.call(a, V, this);
            });
      }
      m && this._set(w),
        y
          ? n(V0(t.to, t, this._state, this))
          : N
          ? this._start()
          : Qt(this) && !g
          ? this._pendingCalls.add(n)
          : n(H0(w));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (td(this) && this._detach(), (t.to = e), td(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      st(t) && (Yr(t, this), Ru(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      st(e) && Zi(e, this);
    }
    _set(e, t = !0) {
      const n = Be(e);
      if (!R.und(n)) {
        const r = Mt(this);
        if (!r || !Ft(n, r.getValue())) {
          const i = Pu(n);
          !r || r.constructor != i ? ah(this, i.create(n)) : r.setValue(n),
            r &&
              $.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return Mt(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), ri(this, "onStart", vt(this, ni(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Mn(this.animation.onChange, e, this)),
        Mn(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      Mt(this).reset(Be(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        Qt(this) || (hd(this, !0), ti(this) || this._resume());
    }
    _resume() {
      _t.skipAnimation ? this.finish() : wa.start(this);
    }
    _stop(e, t) {
      if (Qt(this)) {
        hd(this, !1);
        const n = this.animation;
        B(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          Ki(this, { type: "idle", parent: this });
        const r = t ? Er(this.get()) : vt(this.get(), ni(this, e ?? n.to));
        di(this._pendingCalls, r),
          n.changed && ((n.changed = !1), ri(this, "onRest", r, this));
      }
    }
  };
function ni(e, t) {
  const n = ts(t),
    r = ts(e.get());
  return Ft(r, n);
}
function Y0(e, t = e.loop, n = e.to) {
  const r = Mn(t);
  if (r) {
    const i = r !== !0 && $0(r),
      s = (i || e).reverse,
      o = !i || i.reset;
    return rs({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !s || Cu(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...i,
    });
  }
}
function rs(e) {
  const { to: t, from: n } = (e = $0(e)),
    r = new Set();
  return (
    R.obj(t) && dd(t, r),
    R.obj(n) && dd(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function x2(e) {
  const t = rs(e);
  return R.und(t.default) && (t.default = lh(t)), t;
}
function dd(e, t) {
  Nt(e, (n, r) => n != null && t.add(r));
}
var S2 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function pd(e, t, n) {
  e.animation[n] = t[n] !== D0(t, n) ? F0(t[n], e.key) : void 0;
}
function ri(e, t, ...n) {
  var r, i, s, o;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n);
}
var E2 = ["onStart", "onChange", "onRest"],
  T2 = 1,
  k2 = class {
    constructor(e, t) {
      (this.id = T2++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        R.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(rs(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Ze(e).map(rs)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (K0(this, t), Au(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        B(Ze(t), (r) => n[r].stop(!!e));
      } else ns(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (R.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        B(Ze(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (R.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        B(Ze(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      Nt(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        ki(e, ([a, l]) => {
          (l.value = this.get()), a(l, this, this._item);
        }));
      const s = !r && this._started,
        o = i || (s && n.size) ? this.get() : null;
      i &&
        t.size &&
        ki(t, ([a, l]) => {
          (l.value = o), a(l, this, this._item);
        }),
        s &&
          ((this._started = !1),
          ki(n, ([a, l]) => {
            (l.value = o), a(l, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      $.onFrame(this._onFrame);
    }
  };
function Au(e, t) {
  return Promise.all(t.map((n) => G0(e, n))).then((n) => uh(e, n));
}
async function G0(e, t, n) {
  const { keys: r, to: i, from: s, loop: o, onRest: a, onResolve: l } = t,
    u = R.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const c = R.arr(i) || R.fun(i) ? i : void 0;
  c
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : B(E2, (v) => {
        const S = t[v];
        if (R.fun(S)) {
          const p = e._events[v];
          (t[v] = ({ finished: f, cancelled: m }) => {
            const w = p.get(S);
            w
              ? (f || (w.finished = !1), m && (w.cancelled = !0))
              : p.set(S, {
                  value: null,
                  finished: f || !1,
                  cancelled: m || !1,
                });
          }),
            u && (u[v] = t[v]);
        }
      });
  const h = e._state;
  t.pause === !h.paused
    ? ((h.paused = t.pause), di(t.pause ? h.pauseQueue : h.resumeQueue))
    : h.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)),
    g = t.cancel === !0 || D0(t, "cancel") === !0;
  (c || (g && h.asyncId)) &&
    d.push(
      B0(++e._lastAsyncId, {
        props: t,
        state: h,
        actions: {
          pause: ku,
          resume: ku,
          start(v, S) {
            g
              ? (ns(h, e._lastAsyncId), S(Er(e)))
              : ((v.onRest = a), S(V0(c, v, h, e)));
          },
        },
      })
    ),
    h.paused &&
      (await new Promise((v) => {
        h.resumeQueue.add(v);
      }));
  const y = uh(e, await Promise.all(d));
  if (o && y.finished && !(n && y.noop)) {
    const v = Y0(t, o, i);
    if (v) return K0(e, [v]), G0(e, v, !0);
  }
  return l && $.batchedUpdates(() => l(y, e, e.item)), y;
}
function md(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      B(Ze(t), (r) => {
        R.und(r.keys) && (r = rs(r)),
          R.obj(r.to) || (r = { ...r, to: void 0 }),
          q0(n, r, (i) => Q0(i));
      }),
    X0(e, n),
    n
  );
}
function X0(e, t) {
  Nt(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Yr(n, e));
  });
}
function Q0(e, t) {
  const n = new w2();
  return (n.key = e), t && Yr(n, t), n;
}
function q0(e, t, n) {
  t.keys &&
    B(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function K0(e, t) {
  B(t, (n) => {
    q0(e.springs, n, (r) => Q0(r, e));
  });
}
var Pa = ({ children: e, ...t }) => {
    const n = C.useContext(Xo),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = Jx(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: s } = Xo;
    return C.createElement(s, { value: t }, e);
  },
  Xo = _2(Pa, {});
Pa.Provider = Xo.Provider;
Pa.Consumer = Xo.Consumer;
function _2(e, t) {
  return (
    Object.assign(e, C.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var P2 = () => {
  const e = [],
    t = function (r) {
      Kx();
      const i = [];
      return (
        B(e, (s, o) => {
          if (R.und(r)) i.push(s.start());
          else {
            const a = n(r, s, o);
            a && i.push(s.start(a));
          }
        }),
        i
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      const i = e.indexOf(r);
      ~i && e.splice(i, 1);
    }),
    (t.pause = function () {
      return B(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return B(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      B(e, (i, s) => {
        const o = R.fun(r) ? r(s, i) : r;
        o && i.set(o);
      });
    }),
    (t.start = function (r) {
      const i = [];
      return (
        B(e, (s, o) => {
          if (R.und(r)) i.push(s.start());
          else {
            const a = this._getProps(r, s, o);
            a && i.push(s.start(a));
          }
        }),
        i
      );
    }),
    (t.stop = function () {
      return B(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return B(e, (i, s) => i.update(this._getProps(r, i, s))), this;
    });
  const n = function (r, i, s) {
    return R.fun(r) ? r(s, i) : r;
  };
  return (t._getProps = n), t;
};
function C2(e, t, n) {
  const r = R.fun(t) && t;
  r && !n && (n = []);
  const i = C.useMemo(() => (r || arguments.length == 3 ? P2() : void 0), []),
    s = C.useRef(0),
    o = N0(),
    a = C.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(p, f) {
          const m = md(p, f);
          return s.current > 0 &&
            !a.queue.length &&
            !Object.keys(m).some((T) => !p.springs[T])
            ? Au(p, f)
            : new Promise((T) => {
                X0(p, m),
                  a.queue.push(() => {
                    T(Au(p, f));
                  }),
                  o();
              });
        },
      }),
      []
    ),
    l = C.useRef([...a.ctrls]),
    u = [],
    c = rd(e) || 0;
  C.useMemo(() => {
    B(l.current.slice(e, c), (p) => {
      d2(p, i), p.stop(!0);
    }),
      (l.current.length = e),
      h(c, e);
  }, [e]),
    C.useMemo(() => {
      h(0, Math.min(c, e));
    }, n);
  function h(p, f) {
    for (let m = p; m < f; m++) {
      const w = l.current[m] || (l.current[m] = new k2(null, a.flush)),
        T = r ? r(m, w) : t[m];
      T && (u[m] = x2(T));
    }
  }
  const d = l.current.map((p, f) => md(p, u[f])),
    g = C.useContext(Pa),
    y = rd(g),
    v = g !== y && f2(g);
  Ta(() => {
    s.current++, (a.ctrls = l.current);
    const { queue: p } = a;
    p.length && ((a.queue = []), B(p, (f) => f())),
      B(l.current, (f, m) => {
        i == null || i.add(f), v && f.start({ default: g });
        const w = u[m];
        w && (U0(f, w.ref), f.ref ? f.queue.push(w) : f.start(w));
      });
  }),
    z0(() => () => {
      B(a.ctrls, (p) => p.stop(!0));
    });
  const S = d.map((p) => ({ ...p }));
  return i ? [S, i] : S;
}
function M2(e, t, n) {
  const r = R.fun(t) && t;
  r && !n && (n = []);
  let i = !0,
    s;
  const o = C2(
    e,
    (a, l) => {
      const u = r ? r(a, l) : t;
      return (s = u.ref), (i = i && u.reverse), u;
    },
    n || [{}]
  );
  if (
    (Ta(() => {
      B(o[1].current, (a, l) => {
        const u = o[1].current[l + (i ? 1 : -1)];
        if ((U0(a, s), a.ref)) {
          u && a.update({ to: u.springs });
          return;
        }
        u ? a.start({ to: u.springs }) : a.start();
      });
    }, n),
    r || arguments.length == 3)
  ) {
    const a = s ?? o[1];
    return (
      (a._getProps = (l, u, c) => {
        const h = R.fun(l) ? l(c, u) : l;
        if (h) {
          const d = a.current[c + (h.reverse ? 1 : -1)];
          return d && (h.to = d.springs), h;
        }
      }),
      o
    );
  }
  return o[0];
}
var R2 = class extends ch {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = Qi(...t));
    const n = this._get(),
      r = Pu(n);
    ah(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    Ft(t, n) || (Mt(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && gd(this._active) && fl(this);
  }
  _get() {
    const e = R.arr(this.source) ? this.source.map(Be) : Ze(Be(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !gd(this._active) &&
      ((this.idle = !1),
      B(ka(this), (e) => {
        e.done = !1;
      }),
      _t.skipAnimation
        ? ($.batchedUpdates(() => this.advance()), fl(this))
        : wa.start(this));
  }
  _attach() {
    let e = 1;
    B(Ze(this.source), (t) => {
      st(t) && Yr(t, this),
        Ru(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    B(Ze(this.source), (e) => {
      st(e) && Zi(e, this);
    }),
      this._active.clear(),
      fl(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = Ze(this.source).reduce(
          (t, n) => Math.max(t, (Ru(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function I2(e) {
  return e.idle !== !1;
}
function gd(e) {
  return !e.size || Array.from(e).every(I2);
}
function fl(e) {
  e.idle ||
    ((e.idle = !0),
    B(ka(e), (t) => {
      t.done = !0;
    }),
    Ki(e, { type: "idle", parent: e }));
}
_t.assign({ createStringInterpolator: A0, to: (e, t) => new R2(e, t) });
var Z0 = /^--/;
function b2(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Z0.test(e) &&
      !(Ci.hasOwnProperty(e) && Ci[e])
    ? t + "px"
    : ("" + t).trim();
}
var vd = {};
function A2(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: i,
      scrollTop: s,
      scrollLeft: o,
      viewBox: a,
      ...l
    } = t,
    u = Object.values(l),
    c = Object.keys(l).map((h) =>
      n || e.hasAttribute(h)
        ? h
        : vd[h] || (vd[h] = h.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const h in r)
    if (r.hasOwnProperty(h)) {
      const d = b2(h, r[h]);
      Z0.test(h) ? e.style.setProperty(h, d) : (e.style[h] = d);
    }
  c.forEach((h, d) => {
    e.setAttribute(h, u[d]);
  }),
    s !== void 0 && (e.scrollTop = s),
    o !== void 0 && (e.scrollLeft = o),
    a !== void 0 && e.setAttribute("viewBox", a);
}
var Ci = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  O2 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  N2 = ["Webkit", "Ms", "Moz", "O"];
Ci = Object.keys(Ci).reduce(
  (e, t) => (N2.forEach((n) => (e[O2(n, t)] = e[t])), e),
  Ci
);
var z2 = /^(matrix|translate|scale|rotate|skew)/,
  j2 = /^(translate)/,
  L2 = /^(rotate|skew)/,
  dl = (e, t) => (R.num(e) && e !== 0 ? e + t : e),
  io = (e, t) =>
    R.arr(e)
      ? e.every((n) => io(n, t))
      : R.num(e)
      ? e === t
      : parseFloat(e) === t,
  F2 = class extends _a {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        s = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        s.push((o) => [
          `translate3d(${o.map((a) => dl(a, "px")).join(",")})`,
          io(o, 0),
        ])),
        Nt(r, (o, a) => {
          if (a === "transform")
            i.push([o || ""]), s.push((l) => [l, l === ""]);
          else if (z2.test(a)) {
            if ((delete r[a], R.und(o))) return;
            const l = j2.test(a) ? "px" : L2.test(a) ? "deg" : "";
            i.push(Ze(o)),
              s.push(
                a === "rotate3d"
                  ? ([u, c, h, d]) => [
                      `rotate3d(${u},${c},${h},${dl(d, l)})`,
                      io(d, 0),
                    ]
                  : (u) => [
                      `${a}(${u.map((c) => dl(c, l)).join(",")})`,
                      io(u, a.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new D2(i, s)),
        super(r);
    }
  },
  D2 = class extends R0 {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        B(this.inputs, (n, r) => {
          const i = Be(n[0]),
            [s, o] = this.transforms[r](R.arr(i) ? i : n.map(Be));
          (e += " " + s), (t = t && o);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && B(this.inputs, (t) => B(t, (n) => st(n) && Yr(n, this)));
    }
    observerRemoved(e) {
      e == 0 && B(this.inputs, (t) => B(t, (n) => st(n) && Zi(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), Ki(this, e);
    }
  },
  $2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
_t.assign({
  batchedUpdates: Bm.unstable_batchedUpdates,
  createStringInterpolator: A0,
  colors: Mx,
});
var U2 = a2($2, {
    applyAnimatedValues: A2,
    createAnimatedStyle: (e) => new F2(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  B2 = U2.animated;
const H2 = A.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 9999;

  & .mouse {
    position: absolute;
    width: 5px;
    height: 5px;
    will-change: transform;
    border-radius: 50%;
    background: lightcoral;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }
`,
  V2 = { tension: 1200, friction: 40 },
  W2 = { mass: 10, tension: 200, friction: 50 },
  Y2 = (e, t) => `translate3d(${e}px,${t}px,0) translate3d(-50%,-50%,0)`,
  G2 = () => {
    const [e, t] = M2(3, (i) => ({
        xy: [0, 0],
        from: { opacity: 0, xy: [0, 0] },
        config: i === 0 ? V2 : W2,
      })),
      n = (i) => {
        i.clientX < 10 ||
        i.clientX > window.innerWidth - 10 ||
        i.clientY < 10 ||
        i.clientY > window.innerHeight - 10
          ? r()
          : t.start({ xy: [i.clientX - 5, i.clientY - 5], opacity: 1 });
      },
      r = () => {
        t.set({ opacity: 0 });
      };
    return (
      C.useEffect(
        () => (
          window.addEventListener("mousemove", n),
          () => {
            window.removeEventListener("mousemove", n);
          }
        )
      ),
      x.jsx(H2, {
        children: e.map(({ xy: i, opacity: s }, o) =>
          x.jsx(
            B2.div,
            { className: "mouse", style: { transform: i.to(Y2), opacity: s } },
            o
          )
        ),
      })
    );
  },
  X2 = A.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  border: 0;
  line-height: 3.5vw;
  height: 3.5vw;
  padding: 0 2vw 0 4.5vw;
  cursor: pointer;

  &:hover::before {
    width: 100%;
    transform: scale(0.9);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    .dot {
      opacity: 0.0001;
      transform: translateX(100%);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &:hover {
    .dot {
      background-color: ${({ theme: e }) => e.color.medium};
      transform: translateY(-50%) translateX(0.5vw) scale(0.3225);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .text {
      color: ${({ theme: e }) => e.color.medium};
      transform: translateX(-0.5vw);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 3.5vw;
    box-sizing: border-box;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transform: scale(1);
    background-color: ${({ theme: e }) => e.color.black};
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }
`;
A.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  border: 0;
  line-height: 3.5vw;
  height: 3.5vw;
  padding: 0 2vw 0 4.5vw;
  cursor: pointer;

  &:hover::before {
    width: 100%;
    transform: scale(0.9);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    .dot {
      opacity: 0.0001;
      transform: translateX(100%);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &:hover {
    .dot {
      background-color: ${({ theme: e }) => e.color.medium};
      transform: translateY(-50%) translateX(0.5vw) scale(0.3225);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .text {
      color: ${({ theme: e }) => e.color.medium};
      transform: translateX(-0.5vw);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 3.5vw;
    box-sizing: border-box;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transform: scale(1);
    background-color: ${({ theme: e }) => e.color.black};
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }
`;
const Q2 = A.span`
  position: absolute;
  display: inline-block;
  border-radius: 100%;
  will-change: transform;
  overflow: hidden;
  background-color: transparent;
  box-sizing: border-box;
  left: 0.5vw;
  top: 50%;
  width: 2.5vw;
  height: 2.5vw;
  transform: translateY(-50%) translateX(0) scale(1);
  box-shadow: ${({ theme: e }) => `0 0 0 1px ${e.color.medium}`};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateX(0);
    background-image: url(img/arrow-right-button-white.svg);
    background-size: 50% auto;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    will-change: transform;
  }
`,
  q2 = A.span`
  position: relative;
  color: ${({ theme: e }) => e.color.black};
  font-weight: bold;
  font-size: 1.5vw;
  transform: translateX(0);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
`,
  K2 = ({ content: e, to: t }) => {
    const n = Vc(),
      r = () => {
        n(t);
      };
    return x.jsxs(X2, {
      onClick: r,
      children: [
        x.jsx(Q2, { className: "dot" }),
        x.jsx(q2, { className: "text", children: e }),
      ],
    });
  },
  Z2 = A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`,
  J2 = A.div`
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  background-color: ${({ theme: e }) => e.color.black_alpha};
  color: ${({ theme: e }) => e.color.white};
  margin-bottom: 25px;
`,
  eS = A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`,
  tS = A.a`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  gap: 15px;
  align-items: center;
  padding: 8px 0px;

  &:hover {
    background-color: ${({ theme: e }) => e.color.medium};
  }
`,
  nS = A.div`
  font-size: 18px;
  word-break: break-all;
  line-height: 120%;
  padding: 4px;
`,
  rS = A.div`
  font-size: 13px;
  color: ${({ theme: e }) => e.color.black_alpha};
  font-weight: lighter;
  margin-top: 3px;
`,
  iS = ({ post: e }) => {
    const { title: t, link: n, date: r } = e;
    return x.jsx(eS, {
      children: x.jsxs(tS, {
        href: n,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [x.jsx(nS, { children: t }), x.jsx(rS, { children: r })],
      }),
    });
  },
  Fs = ({ title: e, posts: t }) =>
    x.jsxs(Z2, {
      children: [
        x.jsx(J2, { children: e }),
        t.map((n, r) => x.jsx(iS, { post: n }, r)),
      ],
    });
var Ou = { exports: {} },
  J0 = { exports: {} },
  sS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  oS = sS,
  aS = oS;
function eg() {}
function tg() {}
tg.resetWarningCache = eg;
var lS = function () {
  function e(r, i, s, o, a, l) {
    if (l !== aS) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: tg,
    resetWarningCache: eg,
  };
  return (n.PropTypes = n), n;
};
J0.exports = lS();
var ng = J0.exports;
const re = Lr(ng);
var rg = 9007199254740991,
  uS = "[object Arguments]",
  cS = "[object Function]",
  hS = "[object GeneratorFunction]",
  Nu = "[object Map]",
  fS = "[object Object]",
  yd = "[object Promise]",
  zu = "[object Set]",
  dS = "[object String]",
  wd = "[object WeakMap]",
  xd = "[object DataView]",
  pS = /[\\^$.*+?()[\]{}|]/g,
  mS = /^\[object .+?Constructor\]$/,
  gS = /^(?:0|[1-9]\d*)$/,
  hh = "\\ud800-\\udfff",
  ig = "\\u0300-\\u036f\\ufe20-\\ufe23",
  sg = "\\u20d0-\\u20f0",
  og = "\\ufe0e\\ufe0f",
  vS = "[" + hh + "]",
  ju = "[" + ig + sg + "]",
  Lu = "\\ud83c[\\udffb-\\udfff]",
  yS = "(?:" + ju + "|" + Lu + ")",
  ag = "[^" + hh + "]",
  lg = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  ug = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  cg = "\\u200d",
  hg = yS + "?",
  fg = "[" + og + "]?",
  wS = "(?:" + cg + "(?:" + [ag, lg, ug].join("|") + ")" + fg + hg + ")*",
  xS = fg + hg + wS,
  SS = "(?:" + [ag + ju + "?", ju, lg, ug, vS].join("|") + ")",
  ES = RegExp(Lu + "(?=" + Lu + ")|" + SS + xS, "g"),
  TS = RegExp("[" + cg + hh + ig + sg + og + "]"),
  kS = typeof gs == "object" && gs && gs.Object === Object && gs,
  _S = typeof self == "object" && self && self.Object === Object && self,
  Xn = kS || _S || Function("return this")();
function PS(e, t) {
  for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
function CS(e) {
  return e.split("");
}
function MS(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
function RS(e, t) {
  return PS(t, function (n) {
    return e[n];
  });
}
function IS(e, t) {
  return e == null ? void 0 : e[t];
}
function bS(e) {
  return TS.test(e);
}
function AS(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {}
  return t;
}
function OS(e) {
  for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
  return n;
}
function NS(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, i) {
      n[++t] = [i, r];
    }),
    n
  );
}
function zS(e, t) {
  return function (n) {
    return e(t(n));
  };
}
function jS(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
function LS(e) {
  return bS(e) ? FS(e) : CS(e);
}
function FS(e) {
  return e.match(ES) || [];
}
var DS = Function.prototype,
  Ca = Object.prototype,
  pl = Xn["__core-js_shared__"],
  Sd = (function () {
    var e = /[^.]+$/.exec((pl && pl.keys && pl.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })(),
  dg = DS.toString,
  Ma = Ca.hasOwnProperty,
  ps = Ca.toString,
  $S = RegExp(
    "^" +
      dg
        .call(Ma)
        .replace(pS, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  ),
  Ed = Xn.Symbol,
  ml = Ed ? Ed.iterator : void 0,
  US = Ca.propertyIsEnumerable,
  BS = zS(Object.keys, Object),
  Fu = ms(Xn, "DataView"),
  Du = ms(Xn, "Map"),
  $u = ms(Xn, "Promise"),
  Uu = ms(Xn, "Set"),
  Bu = ms(Xn, "WeakMap"),
  HS = Qn(Fu),
  VS = Qn(Du),
  WS = Qn($u),
  YS = Qn(Uu),
  GS = Qn(Bu);
function XS(e, t) {
  var n = pg(e) || nE(e) ? MS(e.length, String) : [],
    r = n.length,
    i = !!r;
  for (var s in e)
    (t || Ma.call(e, s)) && !(i && (s == "length" || JS(s, r))) && n.push(s);
  return n;
}
function QS(e) {
  return ps.call(e);
}
function qS(e) {
  if (!gg(e) || eE(e)) return !1;
  var t = mg(e) || AS(e) ? $S : mS;
  return t.test(Qn(e));
}
function KS(e) {
  if (!tE(e)) return BS(e);
  var t = [];
  for (var n in Object(e)) Ma.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ZS(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
function ms(e, t) {
  var n = IS(e, t);
  return qS(n) ? n : void 0;
}
var Cn = QS;
((Fu && Cn(new Fu(new ArrayBuffer(1))) != xd) ||
  (Du && Cn(new Du()) != Nu) ||
  ($u && Cn($u.resolve()) != yd) ||
  (Uu && Cn(new Uu()) != zu) ||
  (Bu && Cn(new Bu()) != wd)) &&
  (Cn = function (e) {
    var t = ps.call(e),
      n = t == fS ? e.constructor : void 0,
      r = n ? Qn(n) : void 0;
    if (r)
      switch (r) {
        case HS:
          return xd;
        case VS:
          return Nu;
        case WS:
          return yd;
        case YS:
          return zu;
        case GS:
          return wd;
      }
    return t;
  });
function JS(e, t) {
  return (
    (t = t ?? rg),
    !!t && (typeof e == "number" || gS.test(e)) && e > -1 && e % 1 == 0 && e < t
  );
}
function eE(e) {
  return !!Sd && Sd in e;
}
function tE(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || Ca;
  return e === n;
}
function Qn(e) {
  if (e != null) {
    try {
      return dg.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
function nE(e) {
  return (
    rE(e) && Ma.call(e, "callee") && (!US.call(e, "callee") || ps.call(e) == uS)
  );
}
var pg = Array.isArray;
function fh(e) {
  return e != null && iE(e.length) && !mg(e);
}
function rE(e) {
  return vg(e) && fh(e);
}
function mg(e) {
  var t = gg(e) ? ps.call(e) : "";
  return t == cS || t == hS;
}
function iE(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rg;
}
function gg(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function vg(e) {
  return !!e && typeof e == "object";
}
function sE(e) {
  return typeof e == "string" || (!pg(e) && vg(e) && ps.call(e) == dS);
}
function oE(e) {
  if (!e) return [];
  if (fh(e)) return sE(e) ? LS(e) : ZS(e);
  if (ml && e[ml]) return OS(e[ml]());
  var t = Cn(e),
    n = t == Nu ? NS : t == zu ? jS : lE;
  return n(e);
}
function aE(e) {
  return fh(e) ? XS(e) : KS(e);
}
function lE(e) {
  return e ? RS(e, aE(e)) : [];
}
var uE = oE;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n =
      Object.assign ||
      function (d) {
        for (var g = 1; g < arguments.length; g++) {
          var y = arguments[g];
          for (var v in y)
            Object.prototype.hasOwnProperty.call(y, v) && (d[v] = y[v]);
        }
        return d;
      },
    r = (function () {
      function d(g, y) {
        for (var v = 0; v < y.length; v++) {
          var S = y[v];
          (S.enumerable = S.enumerable || !1),
            (S.configurable = !0),
            "value" in S && (S.writable = !0),
            Object.defineProperty(g, S.key, S);
        }
      }
      return function (g, y, v) {
        return y && d(g.prototype, y), v && d(g, v), g;
      };
    })(),
    i = function (g, y, v) {
      var S = !0;
      e: for (; S; ) {
        var p = g,
          f = y,
          m = v;
        (S = !1), p === null && (p = Function.prototype);
        var w = Object.getOwnPropertyDescriptor(p, f);
        if (w === void 0) {
          var T = Object.getPrototypeOf(p);
          if (T === null) return;
          (g = T), (y = f), (v = m), (S = !0), (w = T = void 0);
          continue e;
        } else {
          if ("value" in w) return w.value;
          var P = w.get;
          return P === void 0 ? void 0 : P.call(m);
        }
      }
    };
  function s(d, g) {
    var y = {};
    for (var v in d)
      g.indexOf(v) >= 0 ||
        (Object.prototype.hasOwnProperty.call(d, v) && (y[v] = d[v]));
    return y;
  }
  function o(d, g) {
    if (!(d instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(d, g) {
    if (typeof g != "function" && g !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof g
      );
    (d.prototype = Object.create(g && g.prototype, {
      constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 },
    })),
      g &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(d, g)
          : (d.__proto__ = g));
  }
  var l = C,
    u = ng,
    c = uE,
    h = (function (d) {
      a(g, d);
      function g(y) {
        o(this, g),
          i(Object.getPrototypeOf(g.prototype), "constructor", this).call(
            this,
            y
          );
        var v = this.props,
          S = v.items,
          p = v.random;
        (this.state = {
          index: p ? Math.floor(Math.random() * Math.floor(S.length)) : 0,
          output: "",
          substrLength: 0,
        }),
          (this.timeouts = []);
      }
      return (
        r(g, [
          {
            key: "componentDidMount",
            value: function () {
              this._animate.bind(this)();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.timeouts.map(function (v) {
                return clearTimeout(v);
              });
            },
          },
          {
            key: "_loop",
            value: function (v, S) {
              var p = setTimeout(v, S);
              this.timeouts.push(p);
              var f = 100;
              this.timeouts.length > f &&
                (clearTimeout(this.timeouts[0]), this.timeouts.shift());
            },
          },
          {
            key: "_type",
            value: function (v, S) {
              var p = this.state.output,
                f = this.props.typingInterval,
                m = this._type.bind(this, v, S),
                w = c(v);
              this.setState({ output: w.slice(0, c(p).length + 1).join("") }),
                p.length < w.length
                  ? this._loop(m, f)
                  : (typeof this.props.onTypingEnd == "function" &&
                      this.props.onTypingEnd(),
                    S());
            },
          },
          {
            key: "_erase",
            value: function (v) {
              var S = this.state.output,
                p = this.props.deletingInterval,
                f = this._erase.bind(this, v),
                m = c(S);
              typeof this.props.onDeletingStart == "function" &&
                this.props.onDeletingStart(),
                this.setState({ output: m.slice(0, m.length - 1).join("") }),
                m.length !== 0
                  ? this._loop(f, p)
                  : (typeof this.props.onDeletingEnd == "function" &&
                      this.props.onDeletingEnd(),
                    v());
            },
          },
          {
            key: "_overwrite",
            value: function (v, S) {
              var p = this.state,
                f = p.output,
                m = p.substrLength,
                w = this.props.deletingInterval,
                T = this._overwrite.bind(this, v, S),
                P = c(v),
                k = c(f);
              this.setState({
                output: P.slice(0, m).concat(k.slice(m)),
                substrLength: m + 1,
              }),
                P.length !== m
                  ? this._loop(T, w)
                  : (this.setState({ output: v, substrLength: 0 }), S());
            },
          },
          {
            key: "_animate",
            value: function () {
              var v = this,
                S = this.state.index,
                p = this.props,
                f = p.items,
                m = p.pause,
                w = p.emptyPause,
                T = p.eraseMode,
                P = p.random,
                k = this._type,
                I = this._erase,
                N = this._overwrite,
                _ = this._animate.bind(this),
                F = void 0;
              P
                ? (F = Math.floor(Math.random() * Math.floor(f.length)))
                : (F = S === f.length - 1 ? 0 : S + 1);
              var V = function () {
                v.setState({ index: F }), v._loop(_, w);
              };
              typeof this.props.onTypingStart == "function" &&
                this.props.onTypingStart(),
                k.bind(this)(f[S], function () {
                  T === "overwrite"
                    ? v._loop(N.bind(v, f[F], V), m)
                    : v._loop(I.bind(v, V), m);
                });
            },
          },
          {
            key: "render",
            value: function () {
              var v = this.props,
                S = v.color,
                p = v.cursor;
              v.deletingInterval,
                v.emptyPause,
                v.items,
                v.pause,
                v.eraseMode,
                v.typingInterval,
                v.random;
              var f = s(v, [
                "color",
                "cursor",
                "deletingInterval",
                "emptyPause",
                "items",
                "pause",
                "eraseMode",
                "typingInterval",
                "random",
              ]);
              return l.createElement(
                "span",
                n({ style: { color: S } }, f),
                this.state.output,
                p
                  ? l.createElement(
                      "span",
                      { className: "react-rotating-text-cursor" },
                      "|"
                    )
                  : null
              );
            },
          },
        ]),
        g
      );
    })(l.Component);
  (h.propTypes = {
    color: u.string,
    cursor: u.bool,
    deletingInterval: u.number,
    emptyPause: u.number,
    eraseMode: u.string,
    items: u.array,
    pause: u.number,
    typingInterval: u.number,
    random: u.bool,
    onTypingStart: u.func,
    onTypingEnd: u.func,
    onDeletingStart: u.func,
    onDeletingEnd: u.func,
  }),
    (h.defaultProps = {
      color: "inherit",
      cursor: !0,
      deletingInterval: 50,
      emptyPause: 1e3,
      eraseMode: "erase",
      items: ["first", "second", "third", "fourth", "fifth"],
      pause: 1500,
      typingInterval: 50,
      random: !1,
    }),
    (t.default = h),
    (e.exports = t.default);
})(Ou, Ou.exports);
var cE = Ou.exports;
const Td = Lr(cE),
  hE = Kc`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  fE = A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  margin: 130px 0;
`,
  dE = A.div`
  position: relative;
  font-size: 3.75vw;

  .react-rotating-text-cursor {
    animation: ${hE} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s infinite;
  }
`,
  pE = A.div`
  width: 100%;
  margin-bottom: 4vw;
`,
  mE = A.img`
  width: 30vw;
  max-width: 230px;
  position: absolute;
  right: 20vw;
  top: 13vw;
`,
  gE = A.div`
  display: flex;
  gap: 5vw;
  font-size: 2.5vw;
  margin-bottom: 2vw;
`,
  vE = A.a`
  position: relative;
  display: block;
  width: fit-content;
  cursor: pointer;

  &:hover {
    .mask {
      color: ${({ theme: e }) => e.color.white};
      width: 100%;
      background-color: ${({ theme: e }) => e.color.black};
    }

    .icon {
      z-index: 5;
      width: 3.5vw;
      height: 3.5vw;
      transform: translate(-1vw, -1vw) rotate(-20deg);
    }
  }
`,
  yE = A.div`
  padding: 1vw 0 1vw 1vw;
  color: ${({ theme: e }) => e.color.black};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0.5vw;
  width: 0%;
`,
  wE = A.div`
  position: absolute;
  box-sizing: border-box;
  background-image: ${({ name: e }) =>
    e === "Github" ? "url(img/github-mark.svg)" : "url(img/naver-mark.png)"};
  background-size: 50% auto;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`,
  xE = ({ author: e, button: t }) => {
    const { name: n, nickname: r, stack: i, social: s } = e;
    return x.jsxs(fE, {
      children: [
        x.jsxs(dE, {
          children: [
            x.jsxs(pE, {
              children: [
                x.jsx("span", { children: "안녕하세요!" }),
                x.jsx("br", {}),
                x.jsx("strong", { children: x.jsx(Td, { items: i }) }),
                x.jsx("span", { children: "를 좋아하는" }),
                x.jsx("br", {}),
                x.jsx("span", { children: "개발자 " }),
                x.jsx("strong", { children: x.jsx(Td, { items: [n, r] }) }),
                x.jsx("span", { children: "입니다." }),
              ],
            }),
            x.jsx(gE, {
              children: s.map(({ name: o, url: a }) =>
                x.jsxs(
                  vE,
                  {
                    href: a,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      x.jsx(wE, { className: "icon", name: o }),
                      x.jsx(yE, { className: "mask", children: o }),
                    ],
                  },
                  o
                )
              ),
            }),
            t,
          ],
        }),
        x.jsx(mE, { alt: "me", src: "seows.blog/img/me.png" }),
      ],
    });
  };
function SE(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var yg = C,
  EE = SE(yg);
function kd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TE(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var kE = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function _E(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(i) {
    return i.displayName || i.name || "Component";
  }
  return function (s) {
    if (typeof s != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var o = [],
      a;
    function l() {
      (a = e(
        o.map(function (c) {
          return c.props;
        })
      )),
        u.canUseDOM ? t(a) : n && (a = n(a));
    }
    var u = (function (c) {
      TE(h, c);
      function h() {
        return c.apply(this, arguments) || this;
      }
      (h.peek = function () {
        return a;
      }),
        (h.rewind = function () {
          if (h.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var y = a;
          return (a = void 0), (o = []), y;
        });
      var d = h.prototype;
      return (
        (d.UNSAFE_componentWillMount = function () {
          o.push(this), l();
        }),
        (d.componentDidUpdate = function () {
          l();
        }),
        (d.componentWillUnmount = function () {
          var y = o.indexOf(this);
          o.splice(y, 1), l();
        }),
        (d.render = function () {
          return EE.createElement(s, this.props);
        }),
        h
      );
    })(yg.PureComponent);
    return (
      kd(u, "displayName", "SideEffect(" + r(s) + ")"),
      kd(u, "canUseDOM", kE),
      u
    );
  };
}
var PE = _E;
const CE = Lr(PE);
var ME = typeof Element < "u",
  RE = typeof Map == "function",
  IE = typeof Set == "function",
  bE = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function so(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!so(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (RE && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!so(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (IE && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (bE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (ME && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !so(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var AE = function (t, n) {
  try {
    return so(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const OE = Lr(AE);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var _d = Object.getOwnPropertySymbols,
  NE = Object.prototype.hasOwnProperty,
  zE = Object.prototype.propertyIsEnumerable;
function jE(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function LE() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (s) {
      return t[s];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (s) {
        i[s] = s;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var FE = LE()
  ? Object.assign
  : function (e, t) {
      for (var n, r = jE(e), i, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var o in n) NE.call(n, o) && (r[o] = n[o]);
        if (_d) {
          i = _d(n);
          for (var a = 0; a < i.length; a++)
            zE.call(n, i[a]) && (r[i[a]] = n[i[a]]);
        }
      }
      return r;
    };
const DE = Lr(FE);
var jn = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  D = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(D).map(function (e) {
  return D[e];
});
var ie = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  Qo = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  is = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  $E = Object.keys(Qo).reduce(function (e, t) {
    return (e[Qo[t]] = t), e;
  }, {}),
  UE = [D.NOSCRIPT, D.SCRIPT, D.STYLE],
  xt = "data-react-helmet",
  BE =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  HE = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  VE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Ue =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  WE = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  Pd = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  YE = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  Hu = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  GE = function (t) {
    var n = Tr(t, D.TITLE),
      r = Tr(t, is.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var i = Tr(t, is.DEFAULT_TITLE);
    return n || i || void 0;
  },
  XE = function (t) {
    return Tr(t, is.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  gl = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, i) {
        return Ue({}, r, i);
      }, {});
  },
  QE = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[D.BASE] < "u";
      })
      .map(function (r) {
        return r[D.BASE];
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (var s = Object.keys(i), o = 0; o < s.length; o++) {
            var a = s[o],
              l = a.toLowerCase();
            if (t.indexOf(l) !== -1 && i[l]) return r.concat(i);
          }
        return r;
      }, []);
  },
  ii = function (t, n, r) {
    var i = {};
    return r
      .filter(function (s) {
        return Array.isArray(s[t])
          ? !0
          : (typeof s[t] < "u" &&
              JE(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  BE(s[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (s) {
        return s[t];
      })
      .reverse()
      .reduce(function (s, o) {
        var a = {};
        o.filter(function (d) {
          for (var g = void 0, y = Object.keys(d), v = 0; v < y.length; v++) {
            var S = y[v],
              p = S.toLowerCase();
            n.indexOf(p) !== -1 &&
              !(g === ie.REL && d[g].toLowerCase() === "canonical") &&
              !(p === ie.REL && d[p].toLowerCase() === "stylesheet") &&
              (g = p),
              n.indexOf(S) !== -1 &&
                (S === ie.INNER_HTML ||
                  S === ie.CSS_TEXT ||
                  S === ie.ITEM_PROP) &&
                (g = S);
          }
          if (!g || !d[g]) return !1;
          var f = d[g].toLowerCase();
          return (
            i[g] || (i[g] = {}),
            a[g] || (a[g] = {}),
            i[g][f] ? !1 : ((a[g][f] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (d) {
            return s.push(d);
          });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
          var c = l[u],
            h = DE({}, i[c], a[c]);
          i[c] = h;
        }
        return s;
      }, [])
      .reverse();
  },
  Tr = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r];
      if (i.hasOwnProperty(n)) return i[n];
    }
    return null;
  },
  qE = function (t) {
    return {
      baseTag: QE([ie.HREF, ie.TARGET], t),
      bodyAttributes: gl(jn.BODY, t),
      defer: Tr(t, is.DEFER),
      encode: Tr(t, is.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: gl(jn.HTML, t),
      linkTags: ii(D.LINK, [ie.REL, ie.HREF], t),
      metaTags: ii(
        D.META,
        [ie.NAME, ie.CHARSET, ie.HTTPEQUIV, ie.PROPERTY, ie.ITEM_PROP],
        t
      ),
      noscriptTags: ii(D.NOSCRIPT, [ie.INNER_HTML], t),
      onChangeClientState: XE(t),
      scriptTags: ii(D.SCRIPT, [ie.SRC, ie.INNER_HTML], t),
      styleTags: ii(D.STYLE, [ie.CSS_TEXT], t),
      title: GE(t),
      titleAttributes: gl(jn.TITLE, t),
    };
  },
  Vu = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            Vu(t);
          }, 0);
    };
  })(),
  Cd = function (t) {
    return clearTimeout(t);
  },
  KE =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        Vu
      : global.requestAnimationFrame || Vu,
  ZE =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Cd
      : global.cancelAnimationFrame || Cd,
  JE = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  si = null,
  eT = function (t) {
    si && ZE(si),
      t.defer
        ? (si = KE(function () {
            Md(t, function () {
              si = null;
            });
          }))
        : (Md(t), (si = null));
  },
  Md = function (t, n) {
    var r = t.baseTag,
      i = t.bodyAttributes,
      s = t.htmlAttributes,
      o = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      c = t.scriptTags,
      h = t.styleTags,
      d = t.title,
      g = t.titleAttributes;
    Wu(D.BODY, i), Wu(D.HTML, s), tT(d, g);
    var y = {
        baseTag: tr(D.BASE, r),
        linkTags: tr(D.LINK, o),
        metaTags: tr(D.META, a),
        noscriptTags: tr(D.NOSCRIPT, l),
        scriptTags: tr(D.SCRIPT, c),
        styleTags: tr(D.STYLE, h),
      },
      v = {},
      S = {};
    Object.keys(y).forEach(function (p) {
      var f = y[p],
        m = f.newTags,
        w = f.oldTags;
      m.length && (v[p] = m), w.length && (S[p] = y[p].oldTags);
    }),
      n && n(),
      u(t, v, S);
  },
  wg = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  tT = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = wg(t)),
      Wu(D.TITLE, n);
  },
  Wu = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var i = r.getAttribute(xt),
          s = i ? i.split(",") : [],
          o = [].concat(s),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          c = n[u] || "";
        r.getAttribute(u) !== c && r.setAttribute(u, c),
          s.indexOf(u) === -1 && s.push(u);
        var h = o.indexOf(u);
        h !== -1 && o.splice(h, 1);
      }
      for (var d = o.length - 1; d >= 0; d--) r.removeAttribute(o[d]);
      s.length === o.length
        ? r.removeAttribute(xt)
        : r.getAttribute(xt) !== a.join(",") && r.setAttribute(xt, a.join(","));
    }
  },
  tr = function (t, n) {
    var r = document.head || document.querySelector(D.HEAD),
      i = r.querySelectorAll(t + "[" + xt + "]"),
      s = Array.prototype.slice.call(i),
      o = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var c in l)
            if (l.hasOwnProperty(c))
              if (c === ie.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (c === ie.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var h = typeof l[c] > "u" ? "" : l[c];
                u.setAttribute(c, h);
              }
          u.setAttribute(xt, "true"),
            s.some(function (d, g) {
              return (a = g), u.isEqualNode(d);
            })
              ? s.splice(a, 1)
              : o.push(u);
        }),
      s.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      o.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: s, newTags: o }
    );
  },
  xg = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var i = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + i : i;
    }, "");
  },
  nT = function (t, n, r, i) {
    var s = xg(r),
      o = wg(n);
    return s
      ? "<" + t + " " + xt + '="true" ' + s + ">" + Hu(o, i) + "</" + t + ">"
      : "<" + t + " " + xt + '="true">' + Hu(o, i) + "</" + t + ">";
  },
  rT = function (t, n, r) {
    return n.reduce(function (i, s) {
      var o = Object.keys(s)
          .filter(function (u) {
            return !(u === ie.INNER_HTML || u === ie.CSS_TEXT);
          })
          .reduce(function (u, c) {
            var h = typeof s[c] > "u" ? c : c + '="' + Hu(s[c], r) + '"';
            return u ? u + " " + h : h;
          }, ""),
        a = s.innerHTML || s.cssText || "",
        l = UE.indexOf(t) === -1;
      return (
        i +
        "<" +
        t +
        " " +
        xt +
        '="true" ' +
        o +
        (l ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  Sg = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[Qo[i] || i] = t[i]), r;
    }, n);
  },
  iT = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[$E[i] || i] = t[i]), r;
    }, n);
  },
  sT = function (t, n, r) {
    var i,
      s = ((i = { key: n }), (i[xt] = !0), i),
      o = Sg(r, s);
    return [Te.createElement(D.TITLE, o, n)];
  },
  oT = function (t, n) {
    return n.map(function (r, i) {
      var s,
        o = ((s = { key: i }), (s[xt] = !0), s);
      return (
        Object.keys(r).forEach(function (a) {
          var l = Qo[a] || a;
          if (l === ie.INNER_HTML || l === ie.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = { __html: u };
          } else o[l] = r[a];
        }),
        Te.createElement(t, o)
      );
    });
  },
  zt = function (t, n, r) {
    switch (t) {
      case D.TITLE:
        return {
          toComponent: function () {
            return sT(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return nT(t, n.title, n.titleAttributes, r);
          },
        };
      case jn.BODY:
      case jn.HTML:
        return {
          toComponent: function () {
            return Sg(n);
          },
          toString: function () {
            return xg(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return oT(t, n);
          },
          toString: function () {
            return rT(t, n, r);
          },
        };
    }
  },
  Eg = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      i = t.encode,
      s = t.htmlAttributes,
      o = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      c = t.styleTags,
      h = t.title,
      d = h === void 0 ? "" : h,
      g = t.titleAttributes;
    return {
      base: zt(D.BASE, n, i),
      bodyAttributes: zt(jn.BODY, r, i),
      htmlAttributes: zt(jn.HTML, s, i),
      link: zt(D.LINK, o, i),
      meta: zt(D.META, a, i),
      noscript: zt(D.NOSCRIPT, l, i),
      script: zt(D.SCRIPT, u, i),
      style: zt(D.STYLE, c, i),
      title: zt(D.TITLE, { title: d, titleAttributes: g }, i),
    };
  },
  aT = function (t) {
    var n, r;
    return (
      (r = n =
        (function (i) {
          WE(s, i);
          function s() {
            return HE(this, s), YE(this, i.apply(this, arguments));
          }
          return (
            (s.prototype.shouldComponentUpdate = function (a) {
              return !OE(this.props, a);
            }),
            (s.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case D.SCRIPT:
                case D.NOSCRIPT:
                  return { innerHTML: l };
                case D.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (s.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                u = a.child,
                c = a.arrayTypeChildren,
                h = a.newChildProps,
                d = a.nestedChildren;
              return Ue(
                {},
                c,
                ((l = {}),
                (l[u.type] = [].concat(c[u.type] || [], [
                  Ue({}, h, this.mapNestedChildrenToProps(u, d)),
                ])),
                l)
              );
            }),
            (s.prototype.mapObjectTypeChildren = function (a) {
              var l,
                u,
                c = a.child,
                h = a.newProps,
                d = a.newChildProps,
                g = a.nestedChildren;
              switch (c.type) {
                case D.TITLE:
                  return Ue(
                    {},
                    h,
                    ((l = {}),
                    (l[c.type] = g),
                    (l.titleAttributes = Ue({}, d)),
                    l)
                  );
                case D.BODY:
                  return Ue({}, h, { bodyAttributes: Ue({}, d) });
                case D.HTML:
                  return Ue({}, h, { htmlAttributes: Ue({}, d) });
              }
              return Ue({}, h, ((u = {}), (u[c.type] = Ue({}, d)), u));
            }),
            (s.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var u = Ue({}, l);
              return (
                Object.keys(a).forEach(function (c) {
                  var h;
                  u = Ue({}, u, ((h = {}), (h[c] = a[c]), h));
                }),
                u
              );
            }),
            (s.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (s.prototype.mapChildrenToProps = function (a, l) {
              var u = this,
                c = {};
              return (
                Te.Children.forEach(a, function (h) {
                  if (!(!h || !h.props)) {
                    var d = h.props,
                      g = d.children,
                      y = Pd(d, ["children"]),
                      v = iT(y);
                    switch ((u.warnOnInvalidChildren(h, g), h.type)) {
                      case D.LINK:
                      case D.META:
                      case D.NOSCRIPT:
                      case D.SCRIPT:
                      case D.STYLE:
                        c = u.flattenArrayTypeChildren({
                          child: h,
                          arrayTypeChildren: c,
                          newChildProps: v,
                          nestedChildren: g,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: h,
                          newProps: l,
                          newChildProps: v,
                          nestedChildren: g,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(c, l)),
                l
              );
            }),
            (s.prototype.render = function () {
              var a = this.props,
                l = a.children,
                u = Pd(a, ["children"]),
                c = Ue({}, u);
              return (
                l && (c = this.mapChildrenToProps(l, c)), Te.createElement(t, c)
              );
            }),
            VE(s, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            s
          );
        })(Te.Component)),
      (n.propTypes = {
        base: re.object,
        bodyAttributes: re.object,
        children: re.oneOfType([re.arrayOf(re.node), re.node]),
        defaultTitle: re.string,
        defer: re.bool,
        encodeSpecialCharacters: re.bool,
        htmlAttributes: re.object,
        link: re.arrayOf(re.object),
        meta: re.arrayOf(re.object),
        noscript: re.arrayOf(re.object),
        onChangeClientState: re.func,
        script: re.arrayOf(re.object),
        style: re.arrayOf(re.object),
        title: re.string,
        titleAttributes: re.object,
        titleTemplate: re.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var i = t.rewind();
        return (
          i ||
            (i = Eg({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          i
        );
      }),
      r
    );
  },
  lT = function () {
    return null;
  },
  uT = CE(qE, eT, Eg)(lT),
  Yu = aT(uT);
Yu.renderStatic = Yu.rewind;
const Tg = (e) => {
    const { title: t } = e;
    return x.jsx(Yu, {
      htmlAttributes: { lang: "ko" },
      title: t,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: t },
        { property: "og:description", content: "개발자 석이의 포트폴리오" },
      ],
    });
  },
  cT = {
    name: "서우석",
    nickname: "석이",
    stack: ["React", "Typescript", "FrontEnd"],
    social: [
      { name: "Github", url: "https://github.com/seows2" },
      { name: "Blog", url: "https://blog.naver.com/seows2" },
    ],
  },
  Ds = [
    {
      title: "조금 늦은 2022년 회고",
      category: "회고",
      link: "https://blog.naver.com/seows2/223002476102",
      date: "2023.02.02",
      briefContents:
        "2022년을 곰곰이 되새겨본다. 올해 나는 무엇을 이루었고 어떤 것을 성장시켰을까. 혹여나 일련의 과정 중 무언가를 잃거나 무심코 지나치진 않았을까. 이번 연도는 유달리 아쉬움이 많이 느껴지는 한 해이다. 이런 감정을 느끼는 가장 큰 이유는 작년에 기대했던 올해의 성적이 나의 기대에 미치지 않았기 때문이라고 생각한다. 감사와 고마움을 많은 사람들에게 베풀고 싶었지만 그러지 못했고, 계속해서 공부하겠다는 의지도 그다지 이뤄내지 못했다. 그렇다고 이번 해에 아쉬움만 있었다는 것은 아니다. 사무실 벽 한켠에 적어놨던 올해의 목표를 나름 달성했으며, 훌륭한 사람들에게 감사함과 신뢰를 많이 배웠던 한 해이다. 올해를 돌이켜봤을 때, 내 삶에 꼭 필요한 과정이었다고 추억할 시기가 있었으면 좋겠다고 생각하며 길고 길었던 올해의 발자국을 한 번 되돌아보고자 한다. 🏠 이사 올해 처음으로 자취를 시작하였다. 집과 회사의 거리가 너무 멀어서 12월 즈음부터 집을 알아봤고 나름 합리적인 가격으로 방을 구할 수 있었다. 전셋집으로 구해서 통상적인 월세보다는 저렴한 가격으로 지내고 있다. 경제적인 부담을 덜면서도 원하면 걸어서 회사를 갈 수도 ...",
    },
    {
      title: "useEffect에 대한 이야기",
      category: "React",
      link: "https://blog.naver.com/seows2/222896116239",
      date: "2022.10.09",
      briefContents:
        "리액트에서 훅이 나온 시점에서 useEffect는 주로 데이터를 불러오거나, DOM을 수동으로 변경시키는 등의 일종의 Side Effect를 수행하기 위해 많이 사용했습니다. 그리고 이는 클래스형 컴포넌트에서 componentDidMount와 같은 생명주기 함수를 대체하는 훅이다 뭐다라는 말이 많았지만 현재 이러한 말은 옛날 이야기가 되었고, 이제는 완전히 개별적인 Effect로 자리잡았죠. useEffect라는 훅은 단 2가지의 일을 수행합니다. 1. 어떤 것을 동기화시키고 2. 후에 이런 동기화를 중지하는 것이죠. 이런 사이클은 Effect의 Dependency에 따라 여러번 실행될 수 있으며, 요즈음엔 이런 훅을 커스터마이징하거나, 여러 독특한 기법을 통해 많이 사용하고 있죠. 그리고 이를 많이 사용한 만큼, useEffect의 크기가 커지고, 갯수도 많아졌으며 의존성에 따라 동작하기 떄문에 렌더링되는 횟수를 예측하기도 힘들뿐더러 이런 훅이 필요없음에도 불필요하게 사용함에 따라 코드가 읽기 어려워지는 상황도 많아진 것 같습니다. (제 이야기입니다🤪) 따라서 이 글에선 useEffect를 어떻게 사용해야하는지, 왜 사용하는지에 대해 간략하게 알아보도록 하겠습니다. 리액...",
    },
    {
      title: 'React hook에 대해 "자세히"알아보자',
      category: "React",
      link: "https://blog.naver.com/seows2/222862258289",
      date: "2022.08.30",
      briefContents:
        "오늘은 리액트 Hooks에 대해 알아보는 시간입니다. 초기의 리액트는 클래스형의 컴포넌트를 주로 사용했습니다. 클래스형이 가져오는 복잡함, 거대함에도 불구하고 구우우우~지 썼던 이유는 이전의 리액트는 함수형에서 상태를 저장할 수 있는 방법을 전혀 제공해주지 못했기 때문입니다. 하지만 2018년, react에 Hooks라는 기법이 세상에 등장했습니다. 이 Hooks라는 기법은 함수형 컴포넌트에서 상태를 저장할 수 있는 방법을 제시해주었죠. 그리고 우리가 지금 개발하는 대부분의 프로젝트에서는 Hooks를 사용하고 있을 것입니다. 한 눈에 봐도 코드량 부터 차이가 난다. 하지만 이 좋은 Hooks를 사용해 개발하는 과정에서 우리는 종종 몇가지 문제에 직면하곤 합니다. 많은 문제가 있겠지만 그 중 가장 클래식한 문제는 리액트 Hooks의 클로져라고 생각을 합니다. Problem 한 번 아래의 React app을 한 번 살펴봅시다. 우리는 useState를 통해 count라는 상태를 하나 만들었습니다. 그리고 첫번째 useEffect구문에 의해 count라는 상태는 계속적으로 증가하고 있죠. 그리고 또 다른 useEffect구문을 통해 증가된 count 상태를 console.log를 통해 보여주고자 ...",
    },
    {
      title: "React18 SSR Suspense에 대해 알아보자",
      category: "React",
      link: "https://blog.naver.com/seows2/222828481516",
      date: "2022.07.25",
      briefContents:
        "React18 Suspense에 대해 알아보는 시간 두번째입니다. 이전에 React18에서 Suspense의 구조적인 모델을 개선했다고 했는데요. 정확히 무슨 말인지 다시 한번 알아보도록합니당. SSR Suspense가 뭐야. React18은 리액트의 서버사이드 렌더링 성능에 대한 구조적 개선이 포함되었습니다. 바로 서버사이드 컴포넌트를 비동기적으로 제공해준다는 뜻인데요. 예를 들면 이렇습니다. 특정 가게에서 배달을 통해 코스요리를 시켰다고 합시다. 맛있는 중식 코스요리에는 게살스프🍲, 딤섬, 짜장면, 탕수육등 여러가지 음식이 나옵니다. 하지만 배달은 여러번 왔다갔다하는 비용이 크고 번거롭기 때문에, 코스라는 말이 허무해지고 게살스프, 딤섬, 짜장면등이 모두 조리되고나서 한번에 배달되겠죠. 그리고 배달이 되고 나서는, 음식을 식탁에 한번에 모두 놓고 먹기 시작할 것입니다. SSR의 단점도 위와 같습니다. 앱의 일부가 loading이 되지 않았는다면 (모든 음식이 조리되지 않았다면), 서버에서 해당 컴포넌트가 전부 처리되기를 기다리고, 전부 다 처리되고 나면 짠!하고 클라이언트에게 HTML을 제공하는 것이죠. 이는 사용자 측면에서 그리 달가운 상황은 ...",
    },
    {
      title: "Suspense에 대해 알아보자. 근데 잡담을 곁들인.",
      category: "React",
      link: "https://blog.naver.com/seows2/222822643913",
      date: "2022.07.21",
      briefContents:
        "현재 리액트는 여러 업데이트를 거쳐가며 개발자뿐만 아니라, 디자이너에 이르기까지 훌륭한 사용자 경험을 구축하기 위해 많이 사용되는 도구가 되었습니다. 게다가 현재 FE시장에서 리액트가 가지는 영향력은 아주 크다고 생각합니다. 위에서 디자이너를 예를 들었는데, 일부 디자인 도구에는 아예 React에 대한 지원이 내장되어 있는 경우도 있습니다. Framer가 하나의 예가 될 수 있을 것 같은데, Framer는 자신이 한 디자인을 JSX로 Export하고, React애플리케이션에 직접 붙여서 바로 쓸 수 있는 기능이 있습니다. 항상 디자이너분들과 일할 때마다 아시는 분도 계시겠지만 디자이너와 개발자 사이의 소통이 항상 원활하지는 않습니다. 제가 느끼기에 가장 큰 이유는 UI 디자인에서 사용되는 도구, 패턴이 개발자가 느끼는 개념이 매우 다르기 때문이 아닌가 생각됩니다. 디자인에서는 &#x27;이걸 누르면 이렇게 되구요. 또 저걸 누르면 저렇게 되요.&#x27;라는 패턴과 변형에 대해 말하지만 저는 UI에서의 이상한 불일치를 깨닫고 디버깅하거나, 이벤트를 핸들링하는데에 많은 시간을 쏟았고 디자인을 현실로 끌어내고자하는 사용자 경험을 프로그래밍의...",
    },
    {
      title:
        "자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 )",
      category: "React",
      link: "https://blog.naver.com/seows2/222665583733",
      date: "2022.03.06",
      briefContents:
        "1편 링크 자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?) 2편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement) 깃헙 코드 github 코드 전 편에서는 babel 트랜스파일러의 힘을 빌려 JSX문법을 저희가 만든 createElement함수를 통해 간단한 가상돔의 구조로 변환시켜봤습니다. 이제 남은 것은 가상돔을 리얼돔에 적용하는 과정이겠군요. render render함수는 기본적으로 createElement로부터 받은 결과값인 가상돔을 리얼돔 컨테이너에 그리는 함수라고 생각할 수 있습니다. 그렇다면 함수는 이런 모양을 띄우고 있을 것이고, vdom을 realDOM으로 변환시킨 결괏값을 특정 container에 자식으로 넣어주는 로직을 작성한다고 생각하면서 코드를 작성하겠습니다. 가상돔의 구조를 다시 한 번 봐볼까요? 위에 Title이라는 JSX를 가상돔으로 변환시킨 결과입니다. 그리고 우리는 이 가상돔을 리얼돔으로 바꾸기 위해 createElement 함수를 사용해야합니다. 인자로는 tag를 받고, 이는 가상돔의 tagName과 동일하죠. 그럼 아래와 같은 코드가 나올 수 있습니다. 그리고 다시 한 번 가상돔의 구조를 보면...",
    },
    {
      title: "행복이란?",
      category: "잡담",
      link: "https://blog.naver.com/seows2/222637409513",
      date: "2022.02.03",
      briefContents:
        '새벽만 되면 찾아오는 감-성타임 나 혼자 쓰는 거면 상관없잖아! 검색도 막아놓을 거라구! 오늘은 저녁에 영화를 보고 집에 와서 하루 종일 잤더니 지금 이 시간이다. 자고 일어난 조용한 새벽에 간간이 들려오는 사람 소리, 옆에 틀어놓은 잔잔한 음악은 많은 생각을 들게 하고 또 글쓰기의 욕구가 충만해지게 하는 매개체인 것 같다. 그래서 오늘은 행복에 대한 글을 짧게 써보고자 한다. 사람마다 다르겠지만 대부분 모든 일의 궁극적 목적은 행복하기 위해서다. 그렇다면 행복이란 무엇일까? 어떻게 해야 행복할 수 있을까?? 오늘 친구를 만나서 나온 이야기 중에 하나이다. 최근에 친구가 어려운 시기에 취업을 해서 정말 축하한다는 이야기를 하고 있을 무렵이었다. 내가 어떤 일이냐고 물었을 뿐인데, 그녀는 호텔리어라는 말을 시작으로 어려웠던 면접 일대기, 그때의 분위기 등의 이야기를 신난 듯이 이어갔다. 이어진 이야기에서 연봉, 일하는 시간, 첫 월급으로 뭘 할 건지에 대한 투머치 토크가 이루어지던 중간에 내가 물었다. "지원한 회사가 엄청 맘에 드나 봐??" 당연하다는 듯이 "응! 난 서비스직이 하고 싶었는데, 호텔리어가 최고거든!&quo...',
    },
    {
      title:
        "자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement)",
      category: "React",
      link: "https://blog.naver.com/seows2/222634894370",
      date: "2022.01.30",
      briefContents:
        "1편 링크 자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?) 3편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 ) 깃헙 코드 github 코드 JSX의 등장 앞서 다룬 가상돔(VirtualDOM)의 문제는 바로 가독성입니다. 아무리 메모리를 이용한 가상돔의 구조가 빠르다 한들 코드가 더러우면 아무도 쓰고 싶어 하지 않겠죠. 이런 가상돔의 가독성을 높이기 위해 jsx라는 것이 등장했습니다. JSX는 Javascript의 확장 문법입니다. 하지만 생김새는 HTML와 많이 닮아있습니다. 리액트 공식 문서에서는 JSX를 아래와 같이 설명합니다. 위에 희한한 태그 문법은 문자열도, HTML도 아닙니다. JSX라 하며 JavaScript를 확장한 문법입니다. 누가 봐도 HTML 태그처럼 생겼는데, 문자열도, HTML도 아니고, JSX라고 JS를 확장한 문법이라고 설명을 하고 있습니다. 실제로 무슨 의미인지 파악해 보기 위해, 코드를 직접 실행시켜보도록 하겠습니다. 실제로 React 프로젝트에서, 위와 같은 JSX 구문을 log로 찍어본다면 어떤 일이 일어날까요?? 보시다시피 HTML도 String도 아닌 이상한 객체가 ...",
    },
    {
      title: "자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?)",
      category: "React",
      link: "https://blog.naver.com/seows2/222622716558",
      date: "2022.01.15",
      briefContents:
        "2편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement) 3편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 ) 깃헙 코드 github 코드 React나 Vue같은 라이브러리의 가장 큰 특징은 유저 인터페이스를 상태로 관리할 수 있다는 점입니다. 브라우저는 DOM을 통해 웹 페이지를 렌더링 하는데 이 과정을 자바스크립트로 표현해보면, (1) 데이터를 준비한다. (2) 문자열을 출력할 엘리먼트를 생성한다. (3) 기존 문서에 추가한다. (4) 엘리먼트의 텍스트를 준비한 데이터로 설정한다. 만약 위 데이터를 수정하고 화면에 반영하려면 두 가지 작업이 필요합니다. (1) 데이터를 수정한다. (2) 수정한 값을 엘리먼트에 반영한다. 위 방식을 조금 더 개선해서 data변수에 값을 변경하면 title 엘리먼트의 내용도 변경되도록 data변수와 title엘리먼트를 연결지어 보겠습니다. 그러면 data는 UI상태를 담는 역할이라고 할 수 있을겁니다. 리액티브 코드를 조금 변환시켜 보도록 하겠습니다. 전 코드와 달라진 점은 상태를 의미하는 state라는 이름의 객체를 만들어 그 안에 _data키와 함께 Hello World...",
    },
    {
      title: "2021년을 돌아보며 - 변화와 감사의 해.",
      category: "회고",
      link: "https://blog.naver.com/seows2/222617290188",
      date: "2022.01.09",
      briefContents:
        "나는 2021년을 어떻게 기억할까 올해는 유난히 한 해가 저물어간다는 사실이 시원섭섭하다. 이번 해는 애정하고 좋아했던 것으로부터 멀어지고 혼자 서는 변화의 시기였다. 한 편으로는 이별한 것만큼이나 운이 좋았다고 말할 수밖에 없는 새로운 만남이 가득한 시기기도 했다. 삶과 나에 대해 치열하게 고민한 해였고, 내면의 변화가 가장 큰 해였다. 그러면서 그 어느 때보다 감사하다는 말을 일기장에 빼곡히 채운 날들이기도 했다. 이런 올해가 끝나가는 게 참으로 아쉽지만 이런 올해를 경험한 내가 만나게 될 내년이 너무나 설레고 기다려지기도 한다. 이러한 마음을 기억하고자 2021년을 돌아보며 글을 쓴다. 명상 🧘🏻♀️ 올해 나에게 가장 큰 변화를 준 일은 명상이다. 나는 작년만 해도 명상과는 접점이 전혀 없는 사람이었다. 하지만 지금의 나는 명상을 좋아하고 필요로 하게 되었다. 명상이 나의 행복도와 편안함을 높이는 데 도움이 되기 때문이다. 운동을 통해 건강한 몸을 만들고 다치지 않게 몸 쓰는 법을 배웠듯 명상을 통해 단단한 마음을 만들고 상처 나지 않게 마음 쓰는 법을 배웠다. 명상은 나에 대한 이해도를 높이고, 여러 상황과 감정에 대응...",
    },
    {
      title: "당신은 건강하신가요??",
      category: "잡담",
      link: "https://blog.naver.com/seows2/222532530906",
      date: "2021.10.10",
      briefContents:
        "제가 중고등학교에 다니고 있을 무렵엔, 우울증에 걸려도 정신과 상담을 받는 것을 다들 꺼려 하던 때가 있었습니다. 취업 길이 막히고 혼삿길이 막힌다면서요. 또 그런 우울감 같은 것들은 정신력이 약해서 생기는 문제라면서, 병으로 받아들이지 않고 어리광쯤으로 치부하던 시절이었습니다. 하지만 최근 몇 년 사이에 정신건강이 화두로 떠오르게 되면서 이제는 상황이 많이 달라졌죠. 누군가가 우울해하면 적극적으로 정신과 상담을 권하기도 하고, 주변에서도 우울증을 더 이상 가볍게만 치부하지는 않는 상황이 된 것 같습니다.. 개인적으로 아주 긍정적인 변화가 아닌가 생각합니다. 저는 사람들이 자신의 힘겨움과 슬픔, 약함에 대해 이야기했으면 좋겠다는 생각을 가지고 있습니다. 모두 저마다의 힘듦을 가지고 있을 텐데 성공하기 위한 비법을 공유하고 배우듯 삶의 힘겨움에 대응하는 방법을 공유하고 배울 수 있다면 모두가 조금은 더 쉽게 행복해질 수 있겠지라는 것이죠. 아직까지는 각자 알아서 힘겨운 상황을 이겨내는 방법을 찾아내야 하죠. 몸을 단련하는 방법은 모두들 관심이 있고 열심히 하려고 하지만, 마음을 단련하는 방법에 대해서는 여전히 그렇지...",
    },
    {
      title: "배스킨라빈스를 그만두다!",
      category: "잡담",
      link: "https://blog.naver.com/seows2/222454399811",
      date: "2021.08.02",
      briefContents:
        "그간 정말 많이 애정하고 열정을 다했던 아르바이트를 그만두게 되었습니다. 그동안 많은 아르바이트를 해왔지만 이만큼 애정 있던 아르바이트는 처음이었습니다. 이 공간은 제 인생에서 무척 큰 의미가 있는, 단순한 아르바이트 그 이상의 존재였지만 언젠가는 헤어질 운명임을 알고 있었고, 어떤 결정이든 아쉬움이 남지 않도록 남은 시간 최대한을 노력했습니다. 배스킨라빈스에서 함께한 2년이라는 시간은 주말을 기다리는 또 다른 즐거움이었습니다. 짧다면 짧고 길다면 긴 시간 동안 그 어느 때보다 밀도 있는 시간을 보내며 웃을 수 있었습니다. 이 기간 동안 제가 얻을 것을 설명하려면 그 어떤 말을 붙여도 부족할 것 같네요. 배라와 함께 일하면서 이전에는 잘 느끼지 못했던 감사함과 애정, 신뢰와 고마움을 배울 수 있었습니다. 그럴 수 있었던 이유는 물론 저와 함께 일했었던 분들이었고, 서로에게 가지는 무한한 애정과 신뢰덕이었다고 생각합니다. 아무리 힘들어도, 시발과 화이팅을 번갈아 외치고, 시답지 않는 드립에 깔깔 웃었던 순간들, 그 순간에도 밀려드는 사람들을 받아내며 녹초가 되었던 순간들, 다른 것들은 몰라도 파트너와 함께했던 이런 순간들...",
    },
  ],
  hT = () => {
    const e = Ds.slice(0, 3),
      t = Ds.filter((i) => i.category === "회고").slice(0, 3),
      n = Ds.filter((i) => i.category === "React").slice(0, 3),
      r = Ds.filter((i) => i.category === "잡담").slice(0, 3);
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(Tg, { title: "석이 | Home" }),
        x.jsx(xE, {
          author: cT,
          button: x.jsx(K2, { content: "조금 더 알아보기", to: "/about" }),
        }),
        x.jsx(Fs, { title: "Recent Post", posts: e }),
        x.jsx(Fs, { title: "공부", posts: n }),
        x.jsx(Fs, { title: "회고", posts: t }),
        x.jsx(Fs, { title: "잡담", posts: r }),
      ],
    });
  };
class Tn {
  constructor(t) {
    E(this, "DOM");
    E(this, "isActive", !1);
    E(this, "enterThreshold", 0);
    E(this, "exitThreshold", 0);
    E(this, "animations", []);
    E(this, "persistentAnimation", !1);
    E(this, "metrics", { scrollX: 0, scrollY: 0, width: 0, height: 0 });
    E(this, "viewport");
    this.DOM = document.querySelector(t);
  }
  addAnimation(t) {
    this.animations.push(t);
  }
  enable() {
    var t;
    (this.isActive = !0), (t = this.DOM) == null || t.classList.add("active");
  }
  disable() {
    var t;
    (this.isActive = !1),
      (t = this.DOM) == null || t.classList.remove("active");
  }
  onPreloaded() {
    this.animations.forEach((t) => t.onPreloaded && t.onPreloaded());
  }
  onDestroy() {
    this.animations.forEach((t) => t.onDestroy && t.onDestroy()),
      (this.animations = []);
  }
  onResize(t) {
    (this.viewport = t),
      this.animations.forEach((n) => n.onResize && n.onResize(t)),
      (this.metrics.scrollX = this.DOM.offsetLeft),
      (this.metrics.scrollY = this.DOM.offsetTop),
      (this.metrics.width = this.DOM.offsetWidth),
      (this.metrics.height = this.DOM.offsetHeight);
  }
  onScroll(t) {
    t.y >= this.metrics.scrollY + this.enterThreshold &&
    t.y < this.metrics.scrollY + this.metrics.height + this.exitThreshold
      ? this.isActive || this.onEnter()
      : this.isActive && this.onExit(),
      this.animations.forEach((n) => n.onScroll && n.onScroll(t));
  }
  onMouseDown(t) {
    this.isActive &&
      this.animations.forEach((n) => {
        n.onMouseDown && n.onMouseDown(t);
      });
  }
  onMouseUp(t) {
    this.isActive &&
      this.animations.forEach((n) => {
        n.onMouseUp && n.onMouseUp(t);
      });
  }
  onEnter() {
    this.isActive || this.enable();
  }
  onExit() {
    this.isActive && this.disable();
  }
  onUpdate(t) {
    this.isActive && this.animations.forEach((n) => n.onUpdate(t));
  }
}
class kg {
  static get(t) {
    switch (t) {
      case "linear":
        return this._easeLinear;
      case "easeInSine":
        return this._easeInSine;
      case "easeOutSine":
        return this._easeOutSine;
      case "easeInOutSine":
        return this._easeInOutSine;
      case "easeInQuad":
        return this._easeInQuad;
      case "easeOutQuad":
        return this._easeOutQuad;
      case "easeInOutQuad":
        return this._easeInOutQuad;
      case "easeInCubic":
        return this._easeInCubic;
      case "easeOutCubic":
        return this._easeOutCubic;
      case "easeInOutCubic":
        return this._easeInOutCubic;
      case "easeInQuart":
        return this._easeInQuartic;
      case "easeOutQuart":
        return this._easeOutQuartic;
      case "easeInOutQuart":
        return this._easeInOutQuartic;
      case "easeInQuint":
        return this._easeInQuintic;
      case "easeOutQuint":
        return this._easeOutQuintic;
      case "easeInOutQuint":
        return this._easeInOutQuintic;
      case "easeInExpo":
        return this._easeInExpo;
      case "easeOutExpo":
        return this._easeOutExpo;
      case "easeInOutExpo":
        return this._easeInOutExpo;
      case "easeOutSpring":
        return this._easeOutSpring;
      case "easeOutBack":
        return this._easeOutBack;
      default:
        return this._easeLinear;
    }
  }
  static _easeLinear(t) {
    return t;
  }
  static _easeInSine(t) {
    return -Math.cos(t * (Math.PI / 2)) + 1;
  }
  static _easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
  }
  static _easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  }
  static _easeInQuad(t) {
    return t ** 2;
  }
  static _easeOutQuad(t) {
    return 1 - (1 - t) ** 2;
  }
  static _easeInOutQuad(t) {
    return t < 0.5 ? (t * 2) ** 2 / 2 : 1 - ((1 - t) * 2) ** 2 / 2;
  }
  static _easeInCubic(t) {
    return t ** 3;
  }
  static _easeOutCubic(t) {
    return 1 - (1 - t) ** 3;
  }
  static _easeInOutCubic(t) {
    return t < 0.5 ? (t * 2) ** 3 / 2 : 1 - ((1 - t) * 2) ** 3 / 2;
  }
  static _easeInQuartic(t) {
    return t ** 4;
  }
  static _easeOutQuartic(t) {
    return 1 - (1 - t) ** 4;
  }
  static _easeInOutQuartic(t) {
    return t < 0.5 ? (t * 2) ** 4 / 2 : 1 - ((1 - t) * 2) ** 4 / 2;
  }
  static _easeInQuintic(t) {
    return t ** 5;
  }
  static _easeOutQuintic(t) {
    return 1 - (1 - t) ** 5;
  }
  static _easeInOutQuintic(t) {
    return t < 0.5 ? (t * 2) ** 5 / 2 : 1 - ((1 - t) * 2) ** 5 / 2;
  }
  static _easeInExpo(t) {
    return Math.pow(2, 10 * (t - 1)) - 0.001;
  }
  static _easeOutExpo(t) {
    return 1 - Math.pow(2, -10 * t);
  }
  static _easeInOutExpo(t) {
    return (t *= 2) < 1
      ? 0.5 * Math.pow(2, 10 * (t - 1))
      : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
  }
  static _easeOutSpring(t) {
    const i = (0.3 / (Math.PI * 2)) * (Math.asin(1) || 0);
    return (
      1 * Math.pow(2, -10 * t) * Math.sin(((t - i) * (Math.PI * 2)) / 0.3) + 1
    );
  }
  static _easeOutBack(t) {
    return (t = t - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
  }
}
class oi {
  static multiply2DMatricies(t, n) {
    const r = t[0],
      i = t[0 * 3 + 1],
      s = t[0 * 3 + 2],
      o = t[1 * 3 + 0],
      a = t[1 * 3 + 1],
      l = t[1 * 3 + 2],
      u = t[2 * 3 + 0],
      c = t[2 * 3 + 1],
      h = t[2 * 3 + 2],
      d = n[0 * 3 + 0],
      g = n[0 * 3 + 1],
      y = n[0 * 3 + 2],
      v = n[1 * 3 + 0],
      S = n[1 * 3 + 1],
      p = n[1 * 3 + 2],
      f = n[2 * 3 + 0],
      m = n[2 * 3 + 1],
      w = n[2 * 3 + 2];
    return [
      d * r + g * o + y * u,
      d * i + g * a + y * c,
      d * s + g * l + y * h,
      v * r + S * o + p * u,
      v * i + S * a + p * c,
      v * s + S * l + p * h,
      f * r + m * o + w * u,
      f * i + m * a + w * c,
      f * s + m * l + w * h,
    ];
  }
  static translate2D(t, n) {
    return [1, 0, t, 0, 1, n, 0, 0, 1];
  }
  static scale2D(t, n) {
    return [t, 0, 0, 0, n, 0, 0, 0, 1];
  }
  static rotate2D(t) {
    return [Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1];
  }
}
class Qe {
  constructor(t, n, r, i, s, o) {
    (this.target = t),
      (this.property = n),
      (this.targetValue = r),
      (this.currentValue = i),
      (this.units = s),
      (this.direction = o),
      (this.propertyDelta = {}),
      this.setProperties();
  }
  setProperties() {
    switch (this.direction) {
      case "to":
        this.propertyDelta = {
          start: this.currentValue,
          delta: this.targetValue - this.currentValue,
        };
        break;
      case "from":
        this.propertyDelta = {
          start: this.targetValue,
          delta: this.currentValue - this.targetValue,
        };
        break;
      case "fromTo":
        this.propertyDelta = {
          start: this.currentValue,
          delta: this.targetValue - this.currentValue,
        };
        break;
      case "addClass":
        this.classFunction = () => {
          this.target.classList.add(this.targetValue);
        };
        break;
      case "removeClass":
        this.classFunction = () => {
          this.target.classList.remove(this.targetValue);
        };
        break;
    }
  }
  update(t) {
    this.property !== "class"
      ? (this.target[this.property] =
          this.propertyDelta.start + t * this.propertyDelta.delta + this.units)
      : (t === 0 &&
          (this.direction === "addClass"
            ? this.target.classList.remove(this.targetValue)
            : this.target.classList.add(this.targetValue)),
        t === 1 && this.classFunction());
  }
}
class bt {
  constructor(t, n, r, i) {
    (this.target = t),
      (this.properties = n),
      (this.direction = r),
      (this.isDOM = i),
      (this.unitExpression = /[a-z]+|%/),
      (this.hasTransform = !1),
      (this.transformPropertyKeys = [
        "translateX",
        "translateY",
        "rotate",
        "scale",
        "scaleX",
        "scaleY",
      ]),
      (this.transformMatrix = {}),
      this.isDOM && (this.bounds = this.target.getBoundingClientRect()),
      this.setProperties();
  }
  _getTransformMatrix(t) {
    if (t === "none" || t === void 0)
      return { translateX: 0, translateY: 0, scaleX: 1, scaleY: 1, rotate: 0 };
    this.transformType = t.includes("3d") ? "3d" : "2d";
    const n = t.match(/matrix.*\((.+)\)/)[1].split(", ");
    if (this.transformType === "2d")
      return {
        translateX: n[4],
        translateY: n[5],
        scaleX: n[0],
        scaleY: n[3],
        rotate: Math.atan2(n[1], n[0]) * (180 / Math.PI),
      };
  }
  _getTransformPercentage(t, n) {
    return t === "translateX"
      ? (n *= this.bounds.width / 100)
      : (n *= this.bounds.height / 100);
  }
  setProperties() {
    if (((this.actions = []), this.isDOM)) {
      const t = getComputedStyle(this.target);
      this.transformMatrix = this._getTransformMatrix(t.transform);
      for (const n in this.properties)
        if (this.transformPropertyKeys.includes(n))
          if (((this.hasTransform = !0), n === "scale"))
            this.direction === "fromTo"
              ? (this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    "scaleX",
                    this.properties.scale[1],
                    this.properties.scale[0],
                    null,
                    this.direction
                  )
                ),
                this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    "scaleY",
                    this.properties.scale[1],
                    this.properties.scale[0],
                    null,
                    this.direction
                  )
                ))
              : (this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    "scaleX",
                    this.properties.scale,
                    parseFloat(this.transformMatrix.scaleX),
                    null,
                    this.direction
                  )
                ),
                this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    "scaleY",
                    this.properties.scale,
                    parseFloat(this.transformMatrix.scaleY),
                    null,
                    this.direction
                  )
                ));
          else if ((n === "translateX" || n === "translateY") && this.isDOM)
            if (this.direction === "fromTo") {
              const r = this._getTransformPercentage(n, this.properties[n][1]),
                i = this._getTransformPercentage(n, this.properties[n][0]);
              this.actions.push(
                new Qe(this.transformMatrix, n, r, i, null, this.direction)
              );
            } else {
              let r = this._getTransformPercentage(n, this.properties[n]);
              this.actions.push(
                new Qe(
                  this.transformMatrix,
                  n,
                  r,
                  parseFloat(this.transformMatrix[n]),
                  null,
                  this.direction
                )
              );
            }
          else
            this.direction === "fromTo"
              ? this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    n,
                    this.properties[n][1],
                    this.properties[n][0],
                    null,
                    this.direction
                  )
                )
              : this.actions.push(
                  new Qe(
                    this.transformMatrix,
                    n,
                    this.properties[n],
                    parseFloat(this.transformMatrix[n]),
                    null,
                    this.direction
                  )
                );
        else if (n !== "class")
          if (this.direction === "fromTo")
            this.actions.push(
              new Qe(
                this.target.style,
                n,
                this.properties[n][1],
                this.properties[n][0],
                null,
                this.direction
              )
            );
          else {
            const r = this.unitExpression.exec(t[n]),
              i = parseFloat(t[n].split(r)[0]);
            this.actions.push(
              new Qe(
                this.target.style,
                n,
                this.properties[n],
                i,
                r,
                this.direction
              )
            );
          }
        else
          this.actions.push(
            new Qe(
              this.target,
              n,
              this.properties[n],
              null,
              null,
              this.direction
            )
          );
    } else
      for (const t in this.properties)
        this.direction === "fromTo"
          ? this.actions.push(
              new Qe(
                this.target,
                t,
                this.properties[t][1],
                this.properties[t][0],
                null,
                this.direction
              )
            )
          : this.actions.push(
              new Qe(
                this.target,
                t,
                this.properties[t],
                this.target[t],
                null,
                this.direction
              )
            );
    for (const t of this.actions) t.setProperties();
  }
  update(t) {
    for (const n of this.actions) n.update(t);
    if (this.hasTransform) {
      const n = oi.multiply2DMatricies(
        oi.multiply2DMatricies(
          oi.scale2D(this.transformMatrix.scaleX, this.transformMatrix.scaleY),
          oi.rotate2D(this.transformMatrix.rotate * (Math.PI / 180))
        ),
        oi.translate2D(
          this.transformMatrix.translateX,
          this.transformMatrix.translateY
        )
      );
      this.target.style.transform = `matrix(${n[0]}, ${n[3]}, ${n[1]}, ${n[4]}, ${n[2]}, ${n[5]})`;
    }
  }
}
class fT {
  constructor() {
    (this.timeScale = 1e3),
      (this.duration = 0),
      (this.startTime = 0),
      (this.currentTime = 0),
      (this.progress = 0),
      (this.started = !1),
      (this.paused = !1),
      (this.rewinding = !1),
      (this.currentAnimationFrame = null),
      (this.previousActionDuration = 0),
      (this.actions = []);
  }
  play() {
    (this.rewinding = !1),
      this.started ||
        (this.onStartCallback && this.onStartCallback(), (this.started = !0)),
      this.paused
        ? (this.startTime = performance.now() - this.duration * this.progress)
        : (this.startTime = performance.now()),
      (this.paused = !1);
    const t = (n) => {
      const r = n - this.startTime;
      (this.progress = Math.min(r / this.duration, 1)),
        this._animate(),
        this.progress < 1 &&
          (this.currentAnimationFrame = requestAnimationFrame(t));
    };
    this.currentAnimationFrame = requestAnimationFrame(t);
  }
  pause() {
    (this.paused = !0), cancelAnimationFrame(this.currentAnimationFrame);
  }
  rewind() {
    (this.rewinding = !0),
      this.paused
        ? (this.startTime =
            performance.now() - this.duration * (1 - this.progress))
        : (this.startTime = performance.now()),
      (this.paused = !1);
    const t = (n) => {
      const r = this.duration - (n - this.startTime);
      (this.progress = Math.min(r / this.duration, 1)),
        this._animate(),
        this.progress > 0 &&
          (this.currentAnimationFrame = requestAnimationFrame(t));
    };
    this.currentAnimationFrame = requestAnimationFrame(t);
  }
  setProgress(t) {
    (this.progress = t),
      !this.started &&
        this.progress > 0 &&
        (this.onStartCallback && this.onStartCallback(), (this.started = !0));
    const n = (r) => {
      this.duration * this.progress, this._animate();
    };
    this.currentAnimationFrame = requestAnimationFrame(n);
  }
  setProgressImmediately(t) {
    (this.progress = t),
      !this.started &&
        this.progress > 0 &&
        (this.onStartCallback && this.onStartCallback(), (this.started = !0)),
      this._animate();
  }
  _animate() {
    (this.currentTime = this.duration * this.progress),
      this.actions.forEach((t, n) => {
        (t.progress =
          (this.currentTime - t.timings.start) / t.timings.totalDuration),
          t.started &&
            !t.completed &&
            (t.options.onUpdate && t.options.onUpdate(),
            t.moments.forEach((r, i) => {
              const s = Math.max(
                  this.currentTime - t.timings.start - t.timings.stagger * i,
                  0
                ),
                o = Math.min(s / t.timings.duration, 1),
                a = t.timings.easing(o);
              r.update(a), t.options.toggle && o !== 1 && r.update(0);
            })),
          t.progress > 0
            ? (t.started ||
                (t.options.onStart && t.options.onStart(),
                t.timings.start !== 0 &&
                  t.direction !== "from" &&
                  t.moments.forEach((r) => {
                    r.setProperties();
                  })),
              (t.started = !0))
            : (t.started && (t.direction === "from" || t.direction === "fromTo")
                ? t.direction === "from"
                  ? t.timings.start !== 0
                    ? t.moments.forEach((r) => {
                        r.update(1);
                      })
                    : t.moments.forEach((r) => {
                        r.update(0);
                      })
                  : t.moments.forEach((r) => {
                      r.update(0);
                    })
                : !t.started &&
                  !t.initialized &&
                  (t.direction === "from" || t.direction === "fromTo") &&
                  (t.moments.forEach((r) => {
                    r.update(0);
                  }),
                  (t.initialized = !0)),
              t.options.toggle &&
                t.moments.forEach((r) => {
                  r.update(0);
                }),
              (t.started = !1)),
          t.progress >= 1
            ? (t.completed ||
                (t.moments.forEach((r) => {
                  r.update(1);
                }),
                t.options.onComplete && t.options.onComplete()),
              (t.completed = !0))
            : (t.completed = !1);
      });
  }
  to(t, n, r, i = null) {
    let s = !1,
      o = t;
    (t instanceof window.HTMLElement ||
      t instanceof window.NodeList ||
      t instanceof window.SVGPathElement ||
      t instanceof window.SVGElement ||
      t instanceof window.SVGCircleElement) &&
      ((s = !0), t instanceof window.NodeList && (o = [...t]));
    const a = this._setTargets(o),
      l = this._setTimings(a, r, i),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "to", s));
    }),
      this._add(u, l, r, "to");
  }
  from(t, n, r, i = null) {
    let s = !1,
      o = t;
    (t instanceof window.HTMLElement ||
      t instanceof window.NodeList ||
      t instanceof window.SVGPathElement ||
      t instanceof window.SVGElement ||
      t instanceof window.SVGCircleElement) &&
      ((s = !0), t instanceof window.NodeList && (o = [...t]));
    const a = this._setTargets(o),
      l = this._setTimings(a, r, i),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "from", s));
    }),
      this._add(u, l, r, "from");
  }
  fromTo(t, n, r, i = null) {
    let s = !1,
      o = t;
    (t instanceof window.HTMLElement ||
      t instanceof window.NodeList ||
      t instanceof window.SVGPathElement ||
      t instanceof window.SVGElement ||
      t instanceof window.SVGCircleElement) &&
      ((s = !0), t instanceof window.NodeList && (o = [...t]));
    const a = this._setTargets(o),
      l = this._setTimings(a, r, i),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "fromTo", s));
    }),
      this._add(u, l, r, "fromTo");
  }
  addClass(t, n, r, i = null) {
    let s = !1,
      o = t;
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((s = !0), t instanceof window.NodeList && (o = [...t]));
    const a = this._setTargets(o),
      l = this._setTimings(a, r, i),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "addClass", s));
    }),
      this._add(u, l, r, "addClass");
  }
  removeClass(t, n, r, i = null) {
    let s = !1,
      o = t;
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((s = !0), t instanceof window.NodeList && (o = [...t]));
    const a = this._setTargets(o),
      l = this._setTimings(a, r, i),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "removeClass", s));
    }),
      this._add(u, l, r, "removeClass");
  }
  onStart(t) {
    this.onStartCallback = t;
  }
  _add(t, n, r, i) {
    this.actions.push({
      moments: t,
      timings: n,
      options: r,
      direction: i,
      progress: 0,
      initialized: !1,
      started: !1,
      completed: !1,
    }),
      this.setProgress(0);
  }
  _setTargets(t) {
    let n = null;
    return Array.isArray(t) ? (n = t) : (n = [t]), n;
  }
  _setTimings(t, n, r) {
    const i = {},
      s = n.duration ? n.duration * this.timeScale : 1;
    let o = 0;
    r !== null ? (o = r * this.timeScale) : (o = this.duration),
      (i.stagger = n.stagger ? n.stagger * this.timeScale : 0);
    const a = n.delay ? n.delay * this.timeScale + o : o,
      l = s + (t.length - 1) * i.stagger;
    return (
      (i.start = a),
      (i.end = a + l),
      (i.duration = s),
      (i.totalDuration = l),
      (i.easing = kg.get(n.ease)),
      (this.previousActionDuration = i.end),
      (this.duration = Math.max(this.previousActionDuration, this.duration)),
      i
    );
  }
}
class dT {
  constructor(t, n, r = {}) {
    (this.element = t), (this.scene = n), (this.options = r), this._init();
  }
  _init() {
    (this.observer = null),
      (this.progress = 0),
      (this.scrollDistance = 0),
      (this.scrollPosition = 0),
      (this.element.parentElement.style.height = "auto"),
      (this.viewportHeight = window.innerHeight),
      (this.isIntersecting = !1),
      this.options.pinned
        ? ((this.offset = this.element.parentElement.offsetTop),
          (this.offset += this.options.beginOnIntersection
            ? -this.element.parentElement.offsetHeight
            : 0),
          (this.scrollHeight = this.scene.duration),
          this._setScrollHeight(),
          (this.scrollHeight += this.options.offset ? this.options.offset : 0))
        : ((this.offset =
            window.pageYOffset +
            this.element.getBoundingClientRect().top -
            this.viewportHeight),
          (this.scrollHeight =
            this.viewportHeight + this.element.offsetHeight)),
      (this._scrollListener = this._scrollListener.bind(this)),
      this._createObserver();
  }
  resize() {
    (this.viewportHeight = window.innerHeight),
      this.options.pinned
        ? ((this.offset = this.element.parentElement.offsetTop),
          (this.offset += this.options.beginOnIntersection
            ? -this.element.parentElement.offsetHeight
            : 0),
          (this.scrollHeight = this.scene.duration),
          this._setScrollHeight(),
          (this.scrollHeight += this.options.offset ? this.options.offset : 0))
        : ((this.offset =
            window.pageYOffset +
            this.element.getBoundingClientRect().top -
            this.viewportHeight),
          (this.scrollHeight =
            this.viewportHeight + this.element.offsetHeight));
  }
  setScene(t) {
    (this.scene = t), this._init();
  }
  _setScrollHeight() {
    const t =
      this.scrollHeight +
      (this.options.beginOnIntersection ? 0 : this.viewportHeight);
    this.element.parentElement.style.height = `${
      (t / this.viewportHeight) * 100
    }vh`;
  }
  _scrollListener(t) {
    (this.scrollDistance = t.target.scrollingElement.scrollTop),
      (this.scrollPosition = this.scrollDistance - this.offset),
      (this.progress = Math.min(
        Math.max(this.scrollPosition / this.scrollHeight, 0),
        1
      ));
  }
  _createObserver() {
    (this.observer = new IntersectionObserver(
      (t) => {
        t.forEach((n) => {
          n.isIntersecting
            ? ((this.isIntersecting = !0),
              window.addEventListener("scroll", this._scrollListener))
            : ((this.isIntersecting = !1),
              window.removeEventListener("scroll", this._scrollListener),
              (this.progress = Math.round(this.progress)));
        });
      },
      { threshold: this.options.threshold ? this.options.threshold : 0 }
    )),
      this.observer.observe(this.element);
  }
}
class Me {
  static to(t, n, r) {
    let i = !1,
      s = t;
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((i = !0), t instanceof window.NodeList && (s = [...t]));
    const o = this._setTargets(s),
      a = this._setTimings(o, r),
      l = [];
    o.forEach((u) => {
      l.push(new bt(u, n, "to", i));
    }),
      this._animate(l, a, r);
  }
  static from(t, n, r) {
    let i = !1,
      s = t;
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((i = !0), t instanceof window.NodeList && (s = [...t]));
    const o = this._setTargets(s),
      a = this._setTimings(o, r),
      l = [];
    o.forEach((u) => {
      l.push(new bt(u, n, "from", i));
    }),
      this._animate(l, a, r);
  }
  static fromTo(t, n, r) {
    let i = !1,
      s = t;
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((i = !0), t instanceof window.NodeList && (s = [...t]));
    const o = this._setTargets(s),
      a = this._setTimings(o, r),
      l = [];
    o.forEach((u) => {
      l.push(new bt(u, n, "fromTo", i));
    }),
      this._animate(l, a, r);
  }
  static addClass(t, n, r) {
    let i = !1,
      s = t,
      o = r || {};
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((i = !0), t instanceof window.NodeList && (s = [...t]));
    const a = this._setTargets(s),
      l = this._setTimings(a, o),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "addClass", i));
    }),
      this._animate(u, l, o);
  }
  static removeClass(t, n, r) {
    let i = !1,
      s = t,
      o = r || {};
    (t instanceof window.HTMLElement || t instanceof window.NodeList) &&
      ((i = !0), t instanceof window.NodeList && (s = [...t]));
    const a = this._setTargets(s),
      l = this._setTimings(a, o),
      u = [];
    a.forEach((c) => {
      u.push(new bt(c, n, "removeClass", i));
    }),
      this._animate(u, l, o);
  }
  static _animate(t, n, r) {
    function i(o) {
      const a = o - s - n.delay,
        l = Math.min(a / n.totalDuration, 1);
      t.forEach((u, c) => {
        const h = Math.min((a - n.stagger * c) / n.duration, 1);
        if (h > 0) {
          const d = n.easing(h);
          u.update(d);
        }
      }),
        l < 1
          ? (r.onUpdate && r.onUpdate(), requestAnimationFrame(i))
          : (t.forEach((u) => {
              u.update(1);
            }),
            r.onComplete && r.onComplete());
    }
    r.onStart && r.onStart();
    const s = performance.now();
    requestAnimationFrame(i);
  }
  static _setTargets(t) {
    let n = null;
    return Array.isArray(t) ? (n = t) : (n = [t]), n;
  }
  static _setTimings(t, n) {
    const i = {};
    return (
      (i.duration = n.duration ? n.duration * 1e3 : 1),
      (i.delay = n.delay ? n.delay * 1e3 : 0),
      (i.stagger = n.stagger ? n.stagger * 1e3 : 0),
      (i.totalDuration = i.duration + (t.length - 1) * i.stagger),
      (i.easing = kg.get(n.ease)),
      i
    );
  }
}
Me.Scene = fT;
Me.Camera = dT;
let pT = class {
  constructor() {
    E(this, "animation");
    E(this, "textWrapper");
    E(this, "textElements");
    E(this, "textOverlays");
    E(this, "textFlourishShort");
    E(this, "textFlourishLong");
    E(this, "overlayProgress");
    E(this, "played");
    E(this, "scene");
    E(this, "textAnimation");
    (this.animation = new dh()),
      (this.scene = this.animation.scene),
      (this.textAnimation = new Me.Scene()),
      (this.textWrapper = document.querySelector("section.animation .wrapper")),
      (this.textElements = document.querySelectorAll(
        "section.animation .wrapper .word-wrap .text"
      )),
      (this.textOverlays = document.querySelectorAll(
        "section.animation .wrapper .word-wrap .overlay"
      )),
      (this.textFlourishShort = document.querySelectorAll(
        "section.animation .wrapper .flourish-wrap svg .short"
      )),
      (this.textFlourishLong = document.querySelector(
        "section.animation .wrapper .flourish-wrap svg .long"
      )),
      (this.overlayProgress = [
        { translateX: -101 },
        { translateX: -101 },
        { translateX: -101 },
        { translateX: -101 },
        { translateX: -101 },
      ]),
      (this.played = !1);
  }
  onResize() {
    this.textAnimation.fromTo(
      this.overlayProgress,
      { translateX: [-101, 101] },
      {
        duration: 1,
        stagger: 0.2,
        ease: "easeInOutExpo",
        onUpdate: () => {
          this.textOverlays.forEach((t, n) => {
            t.style.transform = `translateX(${this.overlayProgress[n].translateX}%)`;
          });
        },
      },
      0
    ),
      this.textAnimation.to(
        this.textElements,
        { opacity: 1 },
        { delay: 0.5, duration: 0.5, stagger: 0.2, ease: "easeOutExpo" },
        0
      ),
      this.textAnimation.to(
        this.textFlourishShort,
        { "stroke-dashoffset": 31 },
        { duration: 0.5, ease: "easeInOutQuint" },
        1.5
      ),
      this.textAnimation.to(
        this.textFlourishLong,
        { "stroke-dashoffset": 42 },
        { duration: 0.5, ease: "easeInOutQuint" },
        1.5
      ),
      this.scene.fromTo(
        this.textWrapper,
        { opacity: [0, 1] },
        {
          duration: 0.1,
          ease: "easeInOutExpo",
          onComplete: () => {
            this.played || (this.textAnimation.play(), (this.played = !0));
          },
        },
        0
      ),
      this.scene.fromTo(
        this.textWrapper,
        { opacity: [1, 0] },
        { duration: 0.25, ease: "easeInOutExpo" },
        0.75
      );
  }
};
class mT {
  constructor() {
    E(this, "animation");
    E(this, "time");
    E(this, "then");
    E(this, "now");
    E(this, "timeScale");
    E(this, "canvas");
    E(this, "ctx");
    E(this, "viewport", { width: 0, height: 0, aspectRatio: 0 });
    E(this, "iterations");
    E(this, "progress", { scale: 1 });
    E(this, "clearProgress", { value: 0 });
    E(this, "scene");
    (this.animation = new dh()),
      (this.scene = this.animation.scene),
      (this.time = 0),
      (this.then = 0),
      (this.now = 0),
      (this.timeScale = 0.003),
      (this.canvas = document.getElementById("motion-path")),
      (this.ctx = this.canvas.getContext("2d"));
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height),
      this.ctx.scale(this.progress.scale, this.progress.scale),
      (this.ctx.fillStyle = "rgb(0, 0, 0)"),
      this.ctx.fill(),
      (this.ctx.lineWidth = 0.0025 * this.viewport.width),
      (this.ctx.strokeStyle = "rgba(29, 101, 135, 1)");
    const t = this.canvas.width / this.progress.scale / 2;
    for (let o = 0; o < this.iterations.count; o++)
      if (this.iterations.objects[o]) {
        this.ctx.fillStyle = `rgba(29, 101, 135, ${this.iterations.objects[o].fillOpacity})`;
        const a = this.iterations.objects[o].left / this.progress.scale;
        this.ctx.beginPath();
        const l = a + (this.progress.scale - 1) * (a - t),
          u = this.canvas.height / this.progress.scale / 2,
          c = this.iterations.radius;
        this.ctx.arc(l, u, c, 0, 2 * Math.PI, !0),
          this.ctx.closePath(),
          this.ctx.stroke(),
          this.ctx.fill();
      }
    (this.ctx.strokeStyle = "rgba(29, 101, 135, 1)"),
      (this.ctx.fillStyle = `rgba(29, 101, 135, ${
        (this.iterations.distance - 1) / 2
      })`);
    const n =
      (this.iterations.left * this.iterations.distance) / this.progress.scale;
    this.ctx.beginPath();
    const r = n + (this.progress.scale - 1) * (n - t),
      i = this.canvas.height / this.progress.scale / 2,
      s = this.iterations.radius;
    this.ctx.arc(r, i, s, 0, 2 * Math.PI, !0),
      this.ctx.closePath(),
      this.ctx.stroke(),
      this.ctx.fill(),
      this.ctx.setTransform(1, 0, 0, 1, 0, 0),
      this.ctx.beginPath(),
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height),
      (this.ctx.fillStyle = `rgba(0, 0, 0, ${this.iterations.opacity})`),
      this.ctx.fill(),
      this.clearProgress.value > 0 &&
        (this.ctx.clearRect(
          this.canvas.width / 2 -
            this.clearProgress.value * (this.canvas.width / 2),
          this.canvas.height / 2 -
            this.clearProgress.value * (this.canvas.height / 2),
          this.clearProgress.value * this.canvas.width,
          this.clearProgress.value * this.canvas.height
        ),
        this.clearProgress.value !== 1 &&
          (this.ctx.beginPath(),
          this.ctx.rect(
            this.canvas.width / 2 -
              this.clearProgress.value * (this.canvas.width / 2),
            this.canvas.height / 2 -
              this.clearProgress.value * (this.canvas.height / 2),
            this.clearProgress.value * this.canvas.width,
            this.clearProgress.value * this.canvas.height
          ),
          this.ctx.closePath(),
          (this.ctx.strokeStyle = "rgb(214, 103, 97)"),
          this.ctx.stroke()));
  }
  onResize(t) {
    (this.viewport = t),
      (this.canvas.width = this.viewport.width),
      (this.canvas.height = this.viewport.height),
      (this.iterations = {
        opacity: 0,
        distance: 1,
        count: 0,
        radius: this.canvas.width / 6,
        top: this.canvas.height / 2,
        left: this.canvas.width / 4,
        objects: [],
      }),
      (this.progress = { scale: 1 }),
      (this.clearProgress = { value: 0 });
    for (let n = 0; n < 20; n++) {
      const r = n / 20,
        i = 1 - Math.pow(2, -10 * r),
        s = this.canvas.width / 4,
        o = 3 * s;
      this.iterations.objects.push({
        left: s + (o - s) * i,
        fillOpacity: i / 4,
      });
    }
    (this.scene = this.animation.scene),
      this.scene.fromTo(
        this.iterations,
        { count: [0, 20] },
        { duration: 1, ease: "linear" },
        0
      ),
      this.scene.fromTo(
        this.iterations,
        { distance: [1, 3] },
        { duration: 1, ease: "easeOutExpo" },
        0
      ),
      this.scene.fromTo(
        this.iterations,
        { opacity: [0, 1] },
        { duration: 1 },
        1
      ),
      this.scene.fromTo(
        this.clearProgress,
        { value: [0, 1] },
        { duration: 1 },
        1
      ),
      this.scene.fromTo(this.progress, { scale: [1, 1.5] }, { duration: 2 }, 0);
  }
  onUpdate(t) {
    (this.now = t * this.timeScale),
      (this.time += this.now - this.then),
      (this.then = this.now),
      this.draw();
  }
}
const oo = { didInit: null };
let gT = class extends Tn {
  constructor() {
    super("section.animation");
    E(this, "scene");
    E(this, "progress");
    if (oo.didInit) return oo.didInit;
    (oo.didInit = this),
      (this.scene = new Me.Scene()),
      (this.progress = 0),
      this.addAnimation(new mT()),
      this.addAnimation(new pT());
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : ((this.progress = 1),
          this.scene.setProgressImmediately(this.progress));
    this.animations.forEach((r) => r.onScroll && r.onScroll(n));
  }
  onResize(n) {
    (this.viewport = n),
      super.onResize(n),
      (this.exitThreshold = -n.height),
      this.initializeTextFocus();
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => {
        r.onUpdate && r.onUpdate(n);
      }));
  }
};
const dh = gT;
class vT {
  constructor() {
    E(this, "time");
    E(this, "then");
    E(this, "now");
    E(this, "timeScale");
    E(this, "canvas");
    E(this, "canvasSize");
    E(this, "ctx");
    E(this, "heading");
    E(this, "iterations", 10);
    E(this, "visibility");
    (this.visibility = { value: 0 }),
      (this.time = 0),
      (this.then = 0),
      (this.now = 0),
      (this.timeScale = 0.003),
      (this.canvas = document.getElementById("hero-indicator")),
      (this.heading = document.querySelector("section.hero h1")),
      (this.canvasSize = this.canvas.width),
      (this.ctx = this.canvas.getContext("2d"));
  }
  appear() {
    (this.time = 0),
      Me.to(this.visibility, { value: 1 }, { duration: 2, ease: "easeInExpo" });
  }
  onPreloaded() {
    this.appear();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
      (this.ctx.lineWidth = 3),
      (this.ctx.lineCap = "round");
    let t = this.canvasSize - 100,
      n = 1;
    for (let r = 0; r < this.iterations; r++) {
      (n = 0.5 * Math.sin(-this.time + Math.PI / 2 + r / 2) + 0.5),
        (n *= this.visibility.value),
        (this.ctx.strokeStyle = `rgba(255, 255, 255, ${n / 2})`);
      const i = this.canvasSize / 2 - t / 2;
      this.ctx.beginPath(),
        this.ctx.moveTo(i, 2 + r * (this.canvasSize / 12)),
        this.ctx.lineTo(i + t, 2 + r * (this.canvasSize / 12)),
        this.ctx.stroke(),
        (t = t / 2 + t / 8);
    }
  }
  onUpdate(t) {
    (this.now = t * this.timeScale),
      (this.time += this.now - this.then),
      (this.then = this.now),
      this.draw();
  }
  onResize() {
    const t = this.heading.getBoundingClientRect();
    (this.canvas.width = t.width), (this.canvasSize = this.canvas.width);
    let n = this.canvasSize - 8;
    for (this.iterations = 0; n > 4; )
      (this.iterations += 1), (n = n / 2 + n / 8);
    this.canvas.height = this.iterations * (this.canvasSize / 12);
  }
}
class yT {
  constructor(t) {
    (this.gl = t.getContext("webgl", { powerPreference: "high-performance" })),
      (this.resize = this.resize.bind(this)),
      (this.render = this.render.bind(this)),
      (this.depthTest = !0),
      (this.faceCulling = !0),
      (this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0),
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1),
      (this.framebuffer = null);
  }
  setPixelRatio(t) {
    this.pixelRatio = t;
  }
  setFrameBuffer(t) {
    t !== null ? (this.framebuffer = t.buffer) : (this.framebuffer = null);
  }
  resize() {
    const t = this.gl.canvas.clientWidth * this.pixelRatio,
      n = this.gl.canvas.clientHeight * this.pixelRatio;
    return this.gl.canvas.width * this.pixelRatio !== t ||
      this.gl.canvas.height * this.pixelRatio !== n
      ? ((this.gl.canvas.width = t),
        (this.gl.canvas.height = n),
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height),
        !0)
      : !1;
  }
  render(t, n) {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer),
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT),
      this.faceCulling && this.gl.enable(this.gl.CULL_FACE),
      this.depthTest && this.gl.enable(this.gl.DEPTH_TEST),
      this.gl.enable(this.gl.BLEND),
      this.gl.blendEquation(this.gl.FUNC_ADD),
      this.gl.blendFunc(
        this.gl.ONE_MINUS_CONSTANT_ALPHA,
        this.gl.ONE_MINUS_SRC_ALPHA
      );
    let r = null,
      i = null;
    n.setViewProjectionMatrix();
    for (const s of t.objects) {
      s.setProjectionMatrix(n.viewProjectionMatrix);
      let o = !1;
      if (
        (s.shader.program !== r &&
          (this.gl.useProgram(s.shader.program),
          (r = s.shader.program),
          (o = !0)),
        o || s.attributes != i)
      ) {
        for (const c in s.attributes) {
          this.gl.enableVertexAttribArray(s.attributes[c].location),
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, s.attributes[c].buffer);
          const h = s.attributes[c].size,
            d = this.gl.FLOAT,
            g = !1,
            y = 0,
            v = 0;
          this.gl.vertexAttribPointer(s.attributes[c].location, h, d, g, y, v);
        }
        i = s.attributes;
      }
      for (const c in s.uniforms)
        if (c === "uViewProjectionMatrix")
          this.gl.uniformMatrix4fv(
            s.uniforms[c].location,
            !1,
            s.projectionMatrix
          );
        else if (c === "uNormalMatrix")
          this.gl.uniformMatrix4fv(s.uniforms[c].location, !1, s.normalMatrix);
        else if (c === "uLocalMatrix")
          this.gl.uniformMatrix4fv(s.uniforms[c].location, !1, s.localMatrix);
        else
          switch (s.uniforms[c].type) {
            case "1f":
              this.gl.uniform1f(s.uniforms[c].location, s.uniforms[c].value);
              break;
            case "2f":
              this.gl.uniform2f(
                s.uniforms[c].location,
                s.uniforms[c].value[0],
                s.uniforms[c].value[1]
              );
              break;
            case "3f":
              this.gl.uniform3f(
                s.uniforms[c].location,
                s.uniforms[c].value[0],
                s.uniforms[c].value[1],
                s.uniforms[c].value[2]
              );
              break;
            case "4f":
              this.gl.uniform4f(
                s.uniforms[c].location,
                s.uniforms[c].value[0],
                s.uniforms[c].value[1],
                s.uniforms[c].value[2],
                s.uniforms[c].value[3]
              );
              break;
            case "mat3":
              this.gl.uniformMatrix3fv(
                s.uniforms[c].location,
                !1,
                s.uniforms[c].value
              );
              break;
            case "mat4":
              this.gl.uniformMatrix4fv(
                s.uniforms[c].location,
                !1,
                s.uniforms[c].value
              );
              break;
            case "tex":
              this.gl.uniform1i(s.uniforms[c].location, s.uniforms[c].value.id),
                this.gl.activeTexture(
                  this.gl.TEXTURE0 + s.uniforms[c].value.id
                ),
                this.gl.bindTexture(
                  this.gl.TEXTURE_2D,
                  s.uniforms[c].value.texture
                );
          }
      const a = this.gl[s.drawMode],
        l = 0,
        u = s.attributes.aPosition.count;
      this.gl.drawArrays(a, l, u);
    }
  }
}
class yt {
  static cross(t, n) {
    return [
      t[1] * n[2] - t[2] * n[1],
      t[2] * n[0] - t[0] * n[2],
      t[0] * n[1] - t[1] * n[0],
    ];
  }
  static subtract(t, n) {
    return [t[0] - n[0], t[1] - n[1], t[2] - n[2]];
  }
  static normalize(t) {
    const n = Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2);
    return n > 1e-5 ? [t[0] / n, t[1] / n, t[2] / n] : [0, 0, 0];
  }
}
class z {
  static multiply(t, n) {
    const r = n[0],
      i = n[0 * 4 + 1],
      s = n[0 * 4 + 2],
      o = n[0 * 4 + 3],
      a = n[1 * 4 + 0],
      l = n[1 * 4 + 1],
      u = n[1 * 4 + 2],
      c = n[1 * 4 + 3],
      h = n[2 * 4 + 0],
      d = n[2 * 4 + 1],
      g = n[2 * 4 + 2],
      y = n[2 * 4 + 3],
      v = n[3 * 4 + 0],
      S = n[3 * 4 + 1],
      p = n[3 * 4 + 2],
      f = n[3 * 4 + 3],
      m = t[0 * 4 + 0],
      w = t[0 * 4 + 1],
      T = t[0 * 4 + 2],
      P = t[0 * 4 + 3],
      k = t[1 * 4 + 0],
      I = t[1 * 4 + 1],
      N = t[1 * 4 + 2],
      _ = t[1 * 4 + 3],
      F = t[2 * 4 + 0],
      V = t[2 * 4 + 1],
      G = t[2 * 4 + 2],
      oe = t[2 * 4 + 3],
      de = t[3 * 4 + 0],
      he = t[3 * 4 + 1],
      Z = t[3 * 4 + 2],
      b = t[3 * 4 + 3];
    return [
      r * m + i * k + s * F + o * de,
      r * w + i * I + s * V + o * he,
      r * T + i * N + s * G + o * Z,
      r * P + i * _ + s * oe + o * b,
      a * m + l * k + u * F + c * de,
      a * w + l * I + u * V + c * he,
      a * T + l * N + u * G + c * Z,
      a * P + l * _ + u * oe + c * b,
      h * m + d * k + g * F + y * de,
      h * w + d * I + g * V + y * he,
      h * T + d * N + g * G + y * Z,
      h * P + d * _ + g * oe + y * b,
      v * m + S * k + p * F + f * de,
      v * w + S * I + p * V + f * he,
      v * T + S * N + p * G + f * Z,
      v * P + S * _ + p * oe + f * b,
    ];
  }
  static identity() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  static inverse(t) {
    const n = new Float32Array(16),
      r = t[0 * 4 + 0],
      i = t[0 * 4 + 1],
      s = t[0 * 4 + 2],
      o = t[0 * 4 + 3],
      a = t[1 * 4 + 0],
      l = t[1 * 4 + 1],
      u = t[1 * 4 + 2],
      c = t[1 * 4 + 3],
      h = t[2 * 4 + 0],
      d = t[2 * 4 + 1],
      g = t[2 * 4 + 2],
      y = t[2 * 4 + 3],
      v = t[3 * 4 + 0],
      S = t[3 * 4 + 1],
      p = t[3 * 4 + 2],
      f = t[3 * 4 + 3],
      m = g * f,
      w = p * y,
      T = u * f,
      P = p * c,
      k = u * y,
      I = g * c,
      N = s * f,
      _ = p * o,
      F = s * y,
      V = g * o,
      G = s * c,
      oe = u * o,
      de = h * S,
      he = v * d,
      Z = a * S,
      b = v * l,
      j = a * d,
      L = h * l,
      Q = r * S,
      K = v * i,
      $e = r * d,
      we = h * i,
      Xe = r * l,
      xe = a * i,
      ze = m * l + P * d + k * S - (w * l + T * d + I * S),
      Kn = w * i + N * d + V * S - (m * i + _ * d + F * S),
      kn = T * i + _ * l + G * S - (P * i + N * l + oe * S),
      ft = I * i + F * l + oe * d - (k * i + V * l + G * d),
      Ie = 1 / (r * ze + a * Kn + h * kn + v * ft);
    return (
      (n[0] = Ie * ze),
      (n[1] = Ie * Kn),
      (n[2] = Ie * kn),
      (n[3] = Ie * ft),
      (n[4] = Ie * (w * a + T * h + I * v - (m * a + P * h + k * v))),
      (n[5] = Ie * (m * r + _ * h + F * v - (w * r + N * h + V * v))),
      (n[6] = Ie * (P * r + N * a + oe * v - (T * r + _ * a + G * v))),
      (n[7] = Ie * (k * r + V * a + G * h - (I * r + F * a + oe * h))),
      (n[8] = Ie * (de * c + b * y + j * f - (he * c + Z * y + L * f))),
      (n[9] = Ie * (he * o + Q * y + we * f - (de * o + K * y + $e * f))),
      (n[10] = Ie * (Z * o + K * c + Xe * f - (b * o + Q * c + xe * f))),
      (n[11] = Ie * (L * o + $e * c + xe * y - (j * o + we * c + Xe * y))),
      (n[12] = Ie * (Z * g + L * p + he * u - (j * p + de * u + b * g))),
      (n[13] = Ie * ($e * p + de * s + K * g - (Q * g + we * p + he * s))),
      (n[14] = Ie * (Q * u + xe * p + b * s - (Xe * p + Z * s + K * u))),
      (n[15] = Ie * (Xe * g + j * s + we * u - ($e * u + xe * g + L * s))),
      n
    );
  }
  static transpose(t) {
    return [
      t[0],
      t[4],
      t[8],
      t[12],
      t[1],
      t[5],
      t[9],
      t[13],
      t[2],
      t[6],
      t[10],
      t[14],
      t[3],
      t[7],
      t[11],
      t[15],
    ];
  }
  static translate(t, n, r) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, n, r, 1];
  }
  static rotateX(t) {
    const n = (t * Math.PI) / 180,
      r = Math.cos(n),
      i = Math.sin(n);
    return [1, 0, 0, 0, 0, r, i, 0, 0, -i, r, 0, 0, 0, 0, 1];
  }
  static rotateY(t) {
    const n = (t * Math.PI) / 180,
      r = Math.cos(n),
      i = Math.sin(n);
    return [r, 0, -i, 0, 0, 1, 0, 0, i, 0, r, 0, 0, 0, 0, 1];
  }
  static rotateZ(t) {
    const n = (t * Math.PI) / 180,
      r = Math.cos(n),
      i = Math.sin(n);
    return [r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  static scale(t, n, r) {
    return [t, 0, 0, 0, 0, n, 0, 0, 0, 0, r, 0, 0, 0, 0, 1];
  }
  static lookAt(t, n) {
    const r = yt.normalize(yt.subtract(t, n)),
      i = yt.normalize(yt.cross([0, 1, 0], r)),
      s = yt.normalize(yt.cross(r, i));
    return [
      i[0],
      i[1],
      i[2],
      0,
      s[0],
      s[1],
      s[2],
      0,
      r[0],
      r[1],
      r[2],
      0,
      t[0],
      t[1],
      t[2],
      1,
    ];
  }
}
class wT {
  constructor(t, n, r, i, s, o) {
    (this.left = t),
      (this.right = n),
      (this.bottom = r),
      (this.top = i),
      (this.near = s),
      (this.far = o),
      (this.type = "orthographic"),
      (this.position = { x: 0, y: 0, z: 0 }),
      (this.rotation = { x: 0, y: 0, z: 0 }),
      (this.viewMatrix = z.identity()),
      this.createMatrix();
  }
  createMatrix() {
    this.matrix = [
      2 / (this.right - this.left),
      0,
      0,
      0,
      0,
      2 / (this.top - this.bottom),
      0,
      0,
      0,
      0,
      -2 / (this.far - this.near),
      0,
      -(this.right + this.left) / (this.right - this.left),
      -(this.top + this.bottom) / (this.top - this.bottom),
      -(this.far + this.near) / (this.far - this.near),
      1,
    ];
  }
  _recalculateViewMatrix() {
    const t = z.identity(),
      n = z.translate(this.position.x, this.position.y, this.position.z),
      r = z.rotateX(this.rotation.x),
      i = z.rotateY(this.rotation.y),
      s = z.rotateZ(this.rotation.z);
    let o = z.multiply(t, n);
    (o = z.multiply(o, r)),
      (o = z.multiply(o, i)),
      (o = z.multiply(o, s)),
      this.lookAtEnabled &&
        (o = z.lookAt(
          [o[12], o[13], o[14]],
          [
            this.lookAtTarget.localMatrix[12],
            this.lookAtTarget.localMatrix[13],
            this.lookAtTarget.localMatrix[14],
          ]
        )),
      (this.viewMatrix = z.inverse(o));
  }
  setViewProjectionMatrix() {
    this._recalculateViewMatrix(),
      (this.viewProjectionMatrix = z.multiply(this.matrix, this.viewMatrix));
  }
  setLeft(t) {
    (this.left = t), this.createMatrix();
  }
  setRight(t) {
    (this.right = t), this.createMatrix();
  }
  setBottom(t) {
    (this.bottom = t), this.createMatrix();
  }
  setTop(t) {
    (this.top = t), this.createMatrix();
  }
  setNear(t) {
    (this.near = t), this.createMatrix();
  }
  setFar(t) {
    (this.far = t), this.createMatrix();
  }
  setPosition(t, n, r) {
    this.position = { x: t, y: n, z: r };
  }
  setRotationX(t) {
    this.rotation.x = t;
  }
  setRotationY(t) {
    this.rotation.y = t;
  }
  setRotationZ(t) {
    this.rotation.z = t;
  }
  lookAt(t) {
    (this.lookAtEnabled = !0), (this.lookAtTarget = t);
  }
}
class xT {
  constructor(t, n, r, i) {
    (this.fieldOfView = (t * Math.PI) / 180),
      (this.aspectRatio = n),
      (this.near = r),
      (this.far = i),
      (this.type = "perspective"),
      (this.position = { x: 0, y: 0, z: 0 }),
      (this.rotation = { x: 0, y: 0, z: 0 }),
      (this.viewMatrix = z.identity()),
      (this.lookAtEnabled = !1),
      this.createMatrix();
  }
  createMatrix() {
    (this.top = this.near * Math.tan(this.fieldOfView / 2)),
      (this.bottom = -this.top),
      (this.right = this.top * this.aspectRatio),
      (this.left = -this.right),
      (this.matrix = [
        (2 * this.near) / (this.right - this.left),
        0,
        0,
        0,
        0,
        (2 * this.near) / (this.top - this.bottom),
        0,
        0,
        0,
        0,
        -(this.far + this.near) / (this.far - this.near),
        -1,
        (-this.near * (this.right + this.left)) / (this.right - this.left),
        (-this.near * (this.top + this.bottom)) / (this.top - this.bottom),
        (2 * this.far * this.near) / (this.near - this.far),
        0,
      ]);
  }
  _recalculateViewMatrix() {
    const t = z.identity(),
      n = z.translate(this.position.x, this.position.y, this.position.z),
      r = z.rotateX(this.rotation.x),
      i = z.rotateY(this.rotation.y),
      s = z.rotateZ(this.rotation.z);
    let o = z.multiply(t, n);
    (o = z.multiply(o, r)),
      (o = z.multiply(o, i)),
      (o = z.multiply(o, s)),
      this.lookAtEnabled &&
        (o = z.lookAt(
          [o[12], o[13], o[14]],
          [
            this.lookAtTarget.localMatrix[12],
            this.lookAtTarget.localMatrix[13],
            this.lookAtTarget.localMatrix[14],
          ]
        )),
      (this.viewMatrix = z.inverse(o));
  }
  setViewProjectionMatrix() {
    this._recalculateViewMatrix(),
      (this.viewProjectionMatrix = z.multiply(this.matrix, this.viewMatrix));
  }
  setFieldOfView(t) {
    (this.fieldOfView = (t * Math.PI) / 180), this.createMatrix();
  }
  setAspectRatio(t) {
    (this.aspectRatio = t), this.createMatrix();
  }
  setNear(t) {
    (this.near = t), this.createMatrix();
  }
  setFar(t) {
    (this.far = t), this.createMatrix();
  }
  setPosition(t, n, r) {
    this.position = { x: t, y: n, z: r };
  }
  setRotationX(t) {
    this.rotation.x = t;
  }
  setRotationY(t) {
    this.rotation.y = t;
  }
  setRotationZ(t) {
    this.rotation.z = t;
  }
  lookAt(t) {
    (this.lookAtEnabled = !0), (this.lookAtTarget = t);
  }
}
class ST {
  constructor() {
    this.objects = [];
  }
  add(t) {
    this.objects.push(t),
      this.objects.sort((n, r) => {
        const i = n.geometryID - r.geometryID;
        return i || n.shader.id - r.shader.id;
      });
  }
}
class ET {
  constructor() {
    (this.items = []),
      (this.position = { x: 0, y: 0, z: 0 }),
      (this.rotation = { x: 0, y: 0, z: 0 }),
      (this.scale = { x: 1, y: 1, z: 1 }),
      (this.localMatrix = z.identity());
  }
  _recalculateModelMatrix() {
    const t = z.identity(),
      n = z.translate(this.position.x, this.position.y, this.position.z),
      r = z.rotateX(this.rotation.x),
      i = z.rotateY(this.rotation.y),
      s = z.rotateZ(this.rotation.z),
      o = z.scale(this.scale.x, this.scale.y, this.scale.z);
    let a = z.multiply(t, n);
    (a = z.multiply(a, r)),
      (a = z.multiply(a, i)),
      (a = z.multiply(a, s)),
      (a = z.multiply(a, o)),
      (this.localMatrix = a);
  }
  setProjectionMatrix(t) {
    this._recalculateModelMatrix(), (this.projectionMatrix = t);
  }
  setPosition(t, n, r) {
    (this.position = { x: t, y: n, z: r }), this._recalculateModelMatrix();
  }
  setRotationX(t) {
    (this.rotation.x = t), this._recalculateModelMatrix();
  }
  setRotationY(t) {
    (this.rotation.y = t), this._recalculateModelMatrix();
  }
  setRotationZ(t) {
    (this.rotation.z = t), this._recalculateModelMatrix();
  }
  setScale(t, n, r) {
    (this.scale = { x: t, y: n, z: r }), this._recalculateModelMatrix();
  }
}
class TT {
  constructor(t, n) {
    (this.geometryID = t.id),
      (this.geometryType = t.type),
      (this.shader = n),
      (this.position = { x: 0, y: 0, z: 0 }),
      (this.rotation = { x: 0, y: 0, z: 0 }),
      (this.scale = { x: 1, y: 1, z: 1 }),
      (this.attributes = t.attributes),
      (this.uniforms = {
        uViewProjectionMatrix: {
          name: "uViewProjectionMatrix",
          value: null,
          type: "mat4",
        },
        uNormalMatrix: { name: "uNormalMatrix", value: null, type: "mat4" },
        uLocalMatrix: { name: "uLocalMatrix", value: null, type: "mat4" },
      }),
      (this.surfaceNormals = !1),
      (this.localMatrix = z.identity()),
      this._setAttributeData(),
      this._setUniformData(),
      this._setDrawMode(),
      this._setSurfaceNormals();
  }
  _setAttributeData() {
    for (const t in this.attributes)
      (this.attributes[t].location = this.shader.gl.getAttribLocation(
        this.shader.program,
        this.attributes[t].name
      )),
        (this.attributes[t].buffer = this.shader.gl.createBuffer()),
        this.shader.gl.bindBuffer(
          this.shader.gl.ARRAY_BUFFER,
          this.attributes[t].buffer
        ),
        this.shader.gl.bufferData(
          this.shader.gl.ARRAY_BUFFER,
          this.attributes[t].data,
          this.shader.gl.STATIC_DRAW
        );
  }
  _setUniformData() {
    for (const t in this.uniforms)
      this.uniforms[t].location = this.shader.gl.getUniformLocation(
        this.shader.program,
        this.uniforms[t].name
      );
  }
  _setDrawMode() {
    this.geometryType
      ? (this.drawMode = this.geometryType)
      : (this.drawMode = "TRIANGLES");
  }
  _setSurfaceNormals() {
    if (this.surfaceNormals) {
      const t = [];
      for (
        let n = 0;
        n < this.geometry.attributes.aNormal.data.length;
        n += 9
      ) {
        const r = [
            this.geometry.attributes.aNormal.data[n],
            this.geometry.attributes.aNormal.data[n + 1],
            this.geometry.attributes.aNormal.data[n + 2],
          ],
          i = [
            this.geometry.attributes.aNormal.data[n + 3],
            this.geometry.attributes.aNormal.data[n + 4],
            this.geometry.attributes.aNormal.data[n + 5],
          ],
          s = [
            this.geometry.attributes.aNormal.data[n + 6],
            this.geometry.attributes.aNormal.data[n + 7],
            this.geometry.attributes.aNormal.data[n + 8],
          ],
          o = yt.subtract(i, r),
          a = yt.subtract(s, r),
          l = o[1] * a[2] - o[2] * a[1],
          u = o[2] * a[0] - o[0] * a[2],
          c = o[0] * a[1] - o[1] * a[0],
          h = yt.normalize([l, u, c]);
        t.push(h[0], h[1], h[2]),
          t.push(h[0], h[1], h[2]),
          t.push(h[0], h[1], h[2]);
      }
      this.shader.gl.bindBuffer(
        this.shader.gl.ARRAY_BUFFER,
        this.geometry.attributes.aNormal.buffer
      ),
        this.shader.gl.bufferData(
          this.shader.gl.ARRAY_BUFFER,
          new Float32Array(t),
          this.shader.gl.STATIC_DRAW
        );
    }
  }
  _recalculateModelMatrix() {
    const t = z.identity(),
      n = z.translate(this.position.x, this.position.y, this.position.z),
      r = z.rotateX(this.rotation.x),
      i = z.rotateY(this.rotation.y),
      s = z.rotateZ(this.rotation.z),
      o = z.scale(this.scale.x, this.scale.y, this.scale.z);
    let a = z.multiply(t, n);
    (a = z.multiply(a, r)),
      (a = z.multiply(a, i)),
      (a = z.multiply(a, s)),
      (a = z.multiply(a, o)),
      this.parentCollection
        ? (this.localMatrix = z.multiply(this.parentCollection.localMatrix, a))
        : (this.localMatrix = a);
  }
  _recalculateNormalMatrix() {
    this.normalMatrix = z.transpose(z.inverse(this.localMatrix));
  }
  setProjectionMatrix(t) {
    this._recalculateModelMatrix(),
      this._recalculateNormalMatrix(),
      (this.projectionMatrix = t);
  }
  setPosition(t, n, r) {
    (this.position = { x: t, y: n, z: r }), this._recalculateModelMatrix();
  }
  setRotationX(t) {
    (this.rotation.x = t), this._recalculateModelMatrix();
  }
  setRotationY(t) {
    (this.rotation.y = t), this._recalculateModelMatrix();
  }
  setRotationZ(t) {
    (this.rotation.z = t), this._recalculateModelMatrix();
  }
  setScale(t, n, r) {
    (this.scale = { x: t, y: n, z: r }), this._recalculateModelMatrix();
  }
  setAttribute(t, n, r) {
    (this.attributes[t] = { name: t, data: n, size: r, count: n.length / r }),
      this._setAttributeData();
  }
  setUniform(t, n, r) {
    (this.uniforms[t] = { name: t, value: n, type: r }), this._setUniformData();
  }
  setShader(t) {
    (this.shader = t), this._setAttributeData(), this._setUniformData();
  }
  setParent(t) {
    if (this.parentCollection) {
      let n = this.parentCollection.items.indexOf(this);
      n >= 0 && this.parentCollection.items.splice(n, 1);
    }
    t && t.items.push(this), (this.parentCollection = t);
  }
}
let kT = 0;
class qn {
  constructor(t) {
    (this.id = kT++),
      (this.attributes = {}),
      this.setAttribute("aPosition", new Float32Array(t), 3),
      this._generateNormals(t);
  }
  setAttribute(t, n, r) {
    this.attributes[t] = { name: t, data: n, size: r, count: n.length / r };
  }
  _generateNormals(t) {
    const n = [];
    for (var r = 0; r < t.length; r += 3) {
      const i = t[r],
        s = t[r + 1],
        o = t[r + 2],
        a = Math.sqrt(i ** 2 + s ** 2 + o ** 2);
      n.push(i / a, s / a, o / a);
    }
    this.setAttribute("aNormal", new Float32Array(n), 3);
  }
}
class _T extends qn {
  constructor(t, n, r, i) {
    const s = [],
      o = t / r,
      a = n / i;
    for (let h = 0; h < i; h++)
      for (let d = 0; d < r; d++) {
        const g = d * o - t / 2,
          y = h * a - n / 2,
          v = 0,
          S = (d + 1) * o - t / 2,
          p = y,
          f = g,
          m = (h + 1) * a - n / 2,
          w = g,
          T = m,
          P = S,
          k = p,
          I = S,
          N = m;
        s.push(g, y, v, S, p, v, f, m, v, w, T, v, P, k, v, I, N, v);
      }
    super(s);
    const l = [];
    for (var u = 0; u < s.length; u += 3) {
      const h = s[u],
        d = s[u + 1],
        g = 1,
        y = Math.sqrt(h ** 2 + d ** 2 + g ** 2);
      l.push(h / y, d / y, 1);
    }
    (this.attributes.aNormal.data = new Float32Array(l)),
      (this.attributes.aNormal.count = l.length / 3);
    const c = [];
    for (let h = 0; h < s.length; h += 3) {
      const d = (s[h] + t / 2) / t,
        g = (s[h + 1] + n / 2) / n;
      c.push(d, g);
    }
    this.setAttribute("aUV", new Float32Array(c), 2);
  }
}
class PT extends qn {
  constructor(t, n) {
    const r = [];
    r.push(0, 0, 0);
    for (let a = 0; a < n; a++) {
      const l = Math.cos((a * Math.PI) / (n / 2)) * t,
        u = Math.sin((a * Math.PI) / (n / 2)) * t,
        c = 0;
      r.push(l, u, c);
    }
    r.push(Math.cos(0) * t, Math.sin(0) * t, 0), super(r);
    const i = [];
    for (var s = 0; s < r.length; s += 3) {
      const a = r[s],
        l = r[s + 1],
        u = 1,
        c = Math.sqrt(a ** 2 + l ** 2 + u ** 2);
      i.push(a / c, l / c, u / c);
    }
    (this.attributes.aNormal.data = new Float32Array(i)),
      (this.attributes.aNormal.count = i.length / 3);
    const o = [];
    for (let a = 0; a < r.length; a += 3) {
      const l = (r[a] + t) / (t * 2),
        u = (r[a + 1] + t) / (t * 2);
      o.push(l, u);
    }
    this.setAttribute("aUV", new Float32Array(o), 2),
      (this.type = "TRIANGLE_FAN");
  }
}
class CT extends qn {
  constructor(t) {
    const n = [];
    n.push(
      -t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6,
      t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6,
      0,
      (t * Math.sqrt(3)) / 3,
      0,
      t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6,
      0,
      -(t * Math.sqrt(3)) / 6,
      -(t * Math.sqrt(3)) / 3,
      0,
      (t * Math.sqrt(3)) / 3,
      0,
      0,
      -(t * Math.sqrt(3)) / 6,
      -(t * Math.sqrt(3)) / 3,
      -t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6,
      0,
      (t * Math.sqrt(3)) / 3,
      0,
      -t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6,
      0,
      -(t * Math.sqrt(3)) / 6,
      -(t * Math.sqrt(3)) / 3,
      t / 2,
      -(t * Math.sqrt(3)) / 6,
      (t * Math.sqrt(3)) / 6
    ),
      super(n);
    const r = [];
    for (let i = 0; i < n.length; i += 9)
      i === 27
        ? r.push(
            1,
            (1 - Math.sqrt(0.75)) / 2,
            0.5,
            (1 - Math.sqrt(0.75)) / 2 + Math.sqrt(0.75),
            0,
            (1 - Math.sqrt(0.75)) / 2
          )
        : r.push(
            0,
            (1 - Math.sqrt(0.75)) / 2,
            1,
            (1 - Math.sqrt(0.75)) / 2,
            0.5,
            (1 - Math.sqrt(0.75)) / 2 + Math.sqrt(0.75)
          );
    this.setAttribute("aUV", new Float32Array(r), 2);
  }
}
class MT extends qn {
  constructor(t, n, r, i, s, o) {
    const a = [],
      l = [];
    u("x", "y", "z", t, n, r, i, s, "front", !1, !1),
      u("x", "y", "z", t, n, -r, i, s, "back", !0, !1),
      u("x", "z", "y", t, r, n, i, o, "back", !1, !0),
      u("x", "z", "y", t, r, -n, i, o, "front", !1, !1),
      u("z", "y", "x", r, n, t, o, s, "back", !0, !1),
      u("z", "y", "x", r, n, -t, o, s, "front", !1, !1);
    function u(c, h, d, g, y, v, S, p, f, m, w) {
      const T = g / S,
        P = y / p,
        k = v / 2;
      for (let I = 0; I < p; I++)
        for (let N = 0; N < S; N++) {
          const _ = {};
          (_[c] = []), (_[h] = []), (_[d] = []);
          const F = N * T - g / 2,
            V = I * P - y / 2,
            G = (N + 1) * T - g / 2,
            oe = (I + 1) * P - y / 2;
          f === "front"
            ? (_[c].push(F),
              _[h].push(V),
              _[d].push(k),
              _[c].push(G),
              _[h].push(V),
              _[d].push(k),
              _[c].push(F),
              _[h].push(oe),
              _[d].push(k),
              _[c].push(F),
              _[h].push(oe),
              _[d].push(k),
              _[c].push(G),
              _[h].push(V),
              _[d].push(k),
              _[c].push(G),
              _[h].push(oe),
              _[d].push(k))
            : f === "back" &&
              (_[c].push(G),
              _[h].push(V),
              _[d].push(k),
              _[c].push(F),
              _[h].push(V),
              _[d].push(k),
              _[c].push(G),
              _[h].push(oe),
              _[d].push(k),
              _[c].push(G),
              _[h].push(oe),
              _[d].push(k),
              _[c].push(F),
              _[h].push(V),
              _[d].push(k),
              _[c].push(F),
              _[h].push(oe),
              _[d].push(k)),
            a.push(
              _.x[0],
              _.y[0],
              _.z[0],
              _.x[1],
              _.y[1],
              _.z[1],
              _.x[2],
              _.y[2],
              _.z[2],
              _.x[3],
              _.y[3],
              _.z[3],
              _.x[4],
              _.y[4],
              _.z[4],
              _.x[5],
              _.y[5],
              _.z[5]
            );
          for (let de = 0; de < 6; de++) {
            let he, Z;
            m
              ? (he = 1 - (_[c][de] + g / 2) / g)
              : (he = (_[c][de] + g / 2) / g),
              w
                ? (Z = 1 - (_[h][de] + y / 2) / y)
                : (Z = (_[h][de] + y / 2) / y),
              l.push(he, Z);
          }
        }
    }
    super(a), this.setAttribute("aUV", new Float32Array(l), 2);
  }
}
class RT extends qn {
  constructor(t, n) {
    const r = [],
      i = [],
      s = (Math.PI * 2) / n;
    for (let l = 0; l < n; l++)
      for (let u = 0; u < n; u++) {
        const c = t * Math.cos(u * s) * Math.sin(l * s),
          h = t * Math.cos(l * s),
          d = t * Math.sin(u * s) * Math.sin(l * s),
          g = t * Math.cos(u * s) * Math.sin((l + 1) * s),
          y = t * Math.cos((l + 1) * s),
          v = t * Math.sin(u * s) * Math.sin((l + 1) * s),
          S = t * Math.cos((u + 1) * s) * Math.sin((l + 1) * s),
          p = t * Math.cos((l + 1) * s),
          f = t * Math.sin((u + 1) * s) * Math.sin((l + 1) * s),
          m = c,
          w = h,
          T = d,
          P = S,
          k = p,
          I = f,
          N = t * Math.cos((u + 1) * s) * Math.sin(l * s),
          _ = t * Math.cos(l * s),
          F = t * Math.sin((u + 1) * s) * Math.sin(l * s);
        r.push(c, h, d, g, y, v, S, p, f, m, w, T, P, k, I, N, _, F);
      }
    super(r);
    for (let l = 0; l < this.attributes.aNormal.data.length; l += 3) {
      let u = 0;
      this.attributes.aNormal.data[l + 1] == -1 &&
      this.attributes.aNormal.data[l] >= 0
        ? (u = -0.5)
        : this.attributes.aNormal.data[l + 1] == -1 &&
          this.attributes.aNormal.data[l] < 0 &&
          (u = 0.5);
      const c =
          0.5 +
          Math.atan2(
            this.attributes.aNormal.data[l],
            this.attributes.aNormal.data[l + 2]
          ) /
            (Math.PI * 2),
        h = 0.5 - Math.asin(this.attributes.aNormal.data[l + 1]) / Math.PI;
      i.push(c + u, 1 - h);
    }
    const o = 6 * 2 * n,
      a = 3 * (o / 4);
    for (let l = 0; l < i.length; l += o)
      l !== 0 && ((i[l - a] = 1), (i[l - (a - 2)] = 1), (i[l - (a - 6)] = 1));
    (i[i.length - a] = 1),
      (i[i.length - (a - 2)] = 1),
      (i[i.length - (a - 6)] = 1),
      this.setAttribute("aUV", new Float32Array(i), 2);
  }
}
class IT extends qn {
  constructor(t, n, r) {
    const i = [];
    for (let l = 0; l < r; l++) {
      i.push(0, 0, n / 2);
      const u = Math.cos((l * Math.PI) / (r / 2)) * t,
        c = Math.sin((l * Math.PI) / (r / 2)) * t,
        h = n / 2;
      i.push(u, c, h);
      const d = Math.cos(((l + 1) * Math.PI) / (r / 2)) * t,
        g = Math.sin(((l + 1) * Math.PI) / (r / 2)) * t,
        y = n / 2;
      i.push(d, g, y);
    }
    for (let l = 0; l < r; l++) {
      i.push(0, 0, -n / 2);
      const u = Math.cos((l * Math.PI) / (r / 2)) * t,
        c = Math.sin((l * Math.PI) / (r / 2)) * t,
        h = -n / 2;
      i.push(u, c, h);
      const d = Math.cos(((l + 1) * Math.PI) / (r / 2)) * t,
        g = Math.sin(((l + 1) * Math.PI) / (r / 2)) * t,
        y = -n / 2;
      i.push(d, g, y);
    }
    for (let l = 0; l < r; l++) {
      const u = Math.cos((l * Math.PI) / (r / 2)) * t,
        c = Math.sin((l * Math.PI) / (r / 2)) * t,
        h = n / 2;
      i.push(u, c, h);
      const d = Math.cos(((l + 1) * Math.PI) / (r / 2)) * t,
        g = Math.sin(((l + 1) * Math.PI) / (r / 2)) * t;
      i.push(d, g, h);
      const y = -n / 2;
      i.push(u, c, y), i.push(d, g, y), i.push(u, c, y), i.push(d, g, h);
    }
    super(i);
    const s = [];
    for (var o = 0; o < i.length; o += 3) {
      const l = i[o],
        u = i[o + 1],
        c = i[o + 2] > 0 ? 1 : -1,
        h = Math.sqrt(l ** 2 + u ** 2 + c ** 2);
      s.push(l / h, u / h, c / h);
    }
    (this.attributes.aNormal.data = new Float32Array(s)),
      (this.attributes.aNormal.count = s.length / 3);
    const a = [];
    for (let l = 0; l < i.length; l += 3) {
      const u = (i[l] + t) / (t * 2),
        c = (i[l + 1] + t) / (t * 2);
      a.push(u, c);
    }
    this.setAttribute("aUV", new Float32Array(a), 2);
  }
}
let bT = 0;
class AT {
  constructor(t, n, r) {
    const i = this._createShader(t, t.VERTEX_SHADER, n),
      s = this._createShader(t, t.FRAGMENT_SHADER, r);
    (this.gl = t),
      (this.id = bT++),
      (this.program = this._createProgram(t, i, s));
  }
  _createShader(t, n, r) {
    const i = t.createShader(n);
    if (
      (t.shaderSource(i, r),
      t.compileShader(i),
      t.getShaderParameter(i, t.COMPILE_STATUS))
    )
      return i;
    console.log(t.getShaderInfoLog(i)), t.deleteShader(i);
  }
  _createProgram(t, n, r) {
    const i = t.createProgram();
    if (
      (t.attachShader(i, n),
      t.attachShader(i, r),
      t.linkProgram(i),
      t.getProgramParameter(i, t.LINK_STATUS))
    )
      return i;
    console.log(t.getProgramInfoLog(i)), t.deleteProgram(i);
  }
}
let _g = 0;
class OT {
  constructor(t, n) {
    (this.gl = t),
      (this.texture = this.gl.createTexture()),
      (this.id = _g++),
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture),
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        1,
        1,
        0,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        new Uint8Array([0, 0, 0, 255])
      ),
      (this.image = new Image()),
      this.image.addEventListener("load", this.attachImage.bind(this)),
      (this.image.src = n);
  }
  attachImage() {
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture),
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        this.image
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_WRAP_S,
        this.gl.CLAMP_TO_EDGE
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_WRAP_T,
        this.gl.CLAMP_TO_EDGE
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_MIN_FILTER,
        this.gl.LINEAR
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_MAG_FILTER,
        this.gl.LINEAR
      );
  }
}
class NT {
  constructor(t, n, r, i, s, o) {
    switch (
      ((this.gl = t),
      (this.texture = this.gl.createTexture()),
      (this.id = _g++),
      (this.width = r),
      (this.height = i),
      (this.data = s ? new Uint8Array(s) : null),
      n)
    ) {
      case "rgba":
        this.format = this.gl.RGBA;
        break;
      case "rgb":
        this.format = this.gl.RGB;
        break;
      case "luminance_alpha":
        this.format = this.gl.LUMINANCE_ALPHA;
        break;
      case "luminance":
        this.format = this.gl.LUMINANCE;
        break;
      default:
        this.format = this.gl.RGBA;
        break;
    }
    switch (o) {
      case "linear":
        this.filter = this.gl.LINEAR;
        break;
      case "nearest":
        this.filter = this.gl.NEAREST;
        break;
      default:
        this.filter = this.gl.NEAREST;
        break;
    }
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture),
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.format,
        r,
        i,
        0,
        this.format,
        this.gl.UNSIGNED_BYTE,
        this.data
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_WRAP_S,
        this.gl.CLAMP_TO_EDGE
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_WRAP_T,
        this.gl.CLAMP_TO_EDGE
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_MIN_FILTER,
        this.filter
      ),
      this.gl.texParameteri(
        this.gl.TEXTURE_2D,
        this.gl.TEXTURE_MAG_FILTER,
        this.filter
      );
  }
}
class zT {
  constructor(t, n) {
    (this.type = t),
      this.type === "directional"
        ? (this.direction = yt.normalize([n[0], n[1], n[2]]))
        : this.type === "point" && (this.position = [n[0], n[1], n[2]]);
  }
  setDirection(t, n, r) {
    this.direction = yt.normalize([t, n, r]);
  }
  setPosition(t, n, r) {
    this.position = [t, n, r];
  }
}
class jT {
  constructor(t, n) {
    (this.gl = t),
      (this.target = n),
      (this.buffer = this.gl.createFramebuffer()),
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.buffer),
      (this.depthBuffer = this.gl.createRenderbuffer()),
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
      this.gl.renderbufferStorage(
        this.gl.RENDERBUFFER,
        this.gl.DEPTH_COMPONENT16,
        this.target.width,
        this.target.height
      ),
      this.attachTexture(this.target),
      this.attachRenderBuffer();
  }
  resize(t, n) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.target.texture),
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.target.format,
        t,
        n,
        0,
        this.target.format,
        this.gl.UNSIGNED_BYTE,
        null
      ),
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
      this.gl.renderbufferStorage(
        this.gl.RENDERBUFFER,
        this.gl.DEPTH_COMPONENT16,
        t,
        n
      );
  }
  attachTexture(t) {
    (this.target = t),
      this.gl.framebufferTexture2D(
        this.gl.FRAMEBUFFER,
        this.gl.COLOR_ATTACHMENT0,
        this.gl.TEXTURE_2D,
        this.target.texture,
        0
      );
  }
  attachRenderBuffer() {
    this.gl.framebufferRenderbuffer(
      this.gl.FRAMEBUFFER,
      this.gl.DEPTH_ATTACHMENT,
      this.gl.RENDERBUFFER,
      this.depthBuffer
    );
  }
}
class LT {
  constructor(t, n, r) {
    (this.gl = t),
      (this.mouse = n),
      (this.camera = r),
      (this.color = new Uint8Array(4)),
      (this.selectedIndex = -1),
      (this.objectCount = 0),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
      });
  }
  resize(t) {
    (this.viewport.width = t.width),
      (this.viewport.height = t.height),
      (this.viewport.aspectRatio = t.width / t.height);
  }
  _getPixel() {
    this.pixel = {
      x: (this.mouse.x * this.viewport.width) / this.viewport.width,
      y:
        this.viewport.height -
        (this.mouse.y * this.viewport.height) / this.viewport.height -
        1,
    };
  }
  _getColor() {
    this.gl.readPixels(
      0,
      0,
      1,
      1,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      this.color
    );
  }
  getMatrix() {
    return (
      this._getPixel(),
      this.camera.type === "perspective"
        ? ((this.top =
            this.camera.near * Math.tan(this.camera.fieldOfView / 2)),
          (this.bottom = -this.top),
          (this.right = this.top * this.camera.aspectRatio),
          (this.left = -this.right))
        : this.camera.type === "orthographic" &&
          ((this.top = this.camera.top),
          (this.bottom = this.camera.bottom),
          (this.right = this.camera.right),
          (this.left = this.camera.left)),
      (this.width = Math.abs(this.right - this.left)),
      (this.height = Math.abs(this.top - this.bottom)),
      (this.pixelLeft =
        this.left + (this.pixel.x * this.width) / this.viewport.width),
      (this.pixelRight = this.pixelLeft + 1 / this.viewport.width),
      (this.pixelTop =
        this.bottom + (this.pixel.y * this.height) / this.viewport.height),
      (this.pixelBottom = this.pixelTop + 1 / this.viewport.height),
      (this.near = this.camera.near),
      (this.far = this.camera.far),
      this.camera.type === "perspective"
        ? (this.matrix = [
            (2 * this.near) / (this.pixelRight - this.pixelLeft),
            0,
            0,
            0,
            0,
            (2 * this.near) / (this.pixelTop - this.pixelBottom),
            0,
            0,
            (this.pixelRight + this.pixelLeft) /
              (this.pixelRight - this.pixelLeft),
            (this.pixelTop + this.pixelBottom) /
              (this.pixelTop - this.pixelBottom),
            -(this.far + this.near) / (this.far - this.near),
            -1,
            0,
            0,
            (2 * this.far * this.near) / (this.near - this.far),
            0,
          ])
        : this.camera.type === "orthographic" &&
          (this.matrix = [
            2 / (this.pixelRight - this.pixelLeft),
            0,
            0,
            0,
            0,
            2 / (this.pixelTop - this.pixelBottom),
            0,
            0,
            0,
            0,
            -2 / (this.far - this.near),
            0,
            -(
              (this.pixelRight + this.pixelLeft) /
              (this.pixelRight - this.pixelLeft)
            ),
            -(
              (this.pixelTop + this.pixelBottom) /
              (this.pixelTop - this.pixelBottom)
            ),
            -((this.far + this.near) / (this.far - this.near)),
            1,
          ]),
      this.matrix
    );
  }
  getObjectIndex() {
    return (
      this._getColor(),
      (this.selectedIndex = (this.color[3] / 255) * this.objectCount - 1),
      this.selectedIndex
    );
  }
}
class W {
  static createColor(t, n, r) {
    return { r: t / 255, g: n / 255, b: r / 255 };
  }
}
W.Renderer = yT;
W.Orthographic = wT;
W.Perspective = xT;
W.Volume = ST;
W.Collection = ET;
W.Mesh = TT;
W.Geometry = qn;
W.Plane = _T;
W.Circle = PT;
W.Tetrahedron = CT;
W.Cube = MT;
W.Sphere = RT;
W.Cylinder = IT;
W.Program = AT;
W.ImageTexture = OT;
W.DataTexture = NT;
W.Light = zT;
W.FrameBuffer = jT;
W.ColorPicker = LT;
class FT {
  constructor() {
    E(this, "canvas");
    E(this, "heroElement");
    E(this, "textElement");
    E(this, "renderer");
    E(this, "volume");
    E(this, "camera");
    E(this, "planeMesh");
    E(this, "speed");
    E(this, "scene");
    E(this, "time");
    E(this, "then");
    E(this, "now");
    E(this, "timeScale");
    (this.scene = new Me.Scene()),
      (this.time = 0),
      (this.then = 0),
      (this.now = 0),
      (this.timeScale = 5e-4),
      (this.canvas = document.getElementById("hero-text-background")),
      (this.heroElement = document.querySelector("section.hero")),
      (this.textElement = document.getElementById("hero-heading-key-line")),
      (this.renderer = new W.Renderer(this.canvas)),
      (this.volume = new W.Volume()),
      (this.camera = new W.Orthographic(-1, 1, -1, 1, -1, 1));
    const t = new W.Program(
        this.renderer.gl,
        `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uNormalMatrix;
uniform mat4 uLocalMatrix;
uniform float uTime;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) { 
	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

	vec3 i  = floor(v + dot(v, C.yyy) );
	vec3 x0 =   v - i + dot(i, C.xxx) ;

	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min( g.xyz, l.zxy );
	vec3 i2 = max( g.xyz, l.zxy );

	vec3 x1 = x0 - i1 + 1.0 * C.xxx;
	vec3 x2 = x0 - i2 + 2.0 * C.xxx;
	vec3 x3 = x0 - 1. + 3.0 * C.xxx;

	i = mod(i, 289.0 ); 
	vec4 p = permute( permute( permute( 
		i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

	float n_ = 1.0/7.0;
	vec3  ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_ );

	vec4 x = x_ *ns.x + ns.yyyy;
	vec4 y = y_ *ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4( x.xy, y.xy );
	vec4 b1 = vec4( x.zw, y.zw );

	vec4 s0 = floor(b0)*2.0 + 1.0;
	vec4 s1 = floor(b1)*2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

	vec3 p0 = vec3(a0.xy,h.x);
	vec3 p1 = vec3(a0.zw,h.y);
	vec3 p2 = vec3(a1.xy,h.z);
	vec3 p3 = vec3(a1.zw,h.w);

	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
	m = m * m;
	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
	vec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;
	position.z = map(snoise(vec3((position.xy / 2.0), (uTime / 2.0))), -0.8660254038, 0.8660254038, 0.0, 1.0);
	gl_Position = position;
	vNormal = aNormal + 0.5;
	vUV = aUV;
	vPos = position.xyz;
}`,
        `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uTime;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 a = vec4(0.83, 0.40, 0.38, 1.0);
	vec4 b = vec4(0.96, 0.75, 0.69, 1.0);
	vec4 c = vec4(0.40, 0.74, 0.90, 1.0);
	vec4 d = vec4(0.55, 0.88, 0.98, 1.0);
	vec4 e = vec4(0.41, 0.83, 0.56, 1.0);
	vec4 f = vec4(0.46, 0.92, 0.70, 1.0);

	float step = 1.0 / 4.0;

	vec4 color = a;
	color = mix(color, c, smoothstep(step * 1.0, step * 2.0, vPos.z));
	color = mix(color, e, smoothstep(step * 2.0, step * 3.0, vPos.z));
	color = mix(color, vec4(1.0), smoothstep(step * 3.0, step * 4.0, vPos.z));

	gl_FragColor = color;
}`
      ),
      n = new W.Plane(2, 2, 16, 1);
    (this.planeMesh = new W.Mesh(n, t)),
      this.planeMesh.setPosition(0, 0, 0),
      this.planeMesh.setUniform("uTime", 0, "1f"),
      this.volume.add(this.planeMesh),
      (this.speed = { current: 1, target: 1, ease: 0.05 }),
      this.splitTitle();
  }
  splitTitle() {
    var r;
    const t = document.querySelector("h1"),
      n = [...t.childNodes];
    for (; t.firstChild; ) t.removeChild(t.firstChild);
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (s.nodeType === Node.TEXT_NODE) {
        const o = ((r = s.textContent) == null ? void 0 : r.split(" ")) ?? "";
        for (let a = 0; a < o.length; a++)
          if (o[0] !== "" || a !== 0) {
            if (
              ((s = document.createElement("span")),
              s.setAttribute("role", "text"),
              o[0] === "")
            ) {
              const l = document.createTextNode(" " + o[a]);
              s.appendChild(l);
            } else {
              let l = document.createTextNode(o[a]);
              a !== o.length - 1 && (l = document.createTextNode(o[a] + " ")),
                s.appendChild(l);
            }
            t.appendChild(s);
          }
      }
      t.appendChild(s);
    }
  }
  onResize() {
    const t = this.heroElement.getBoundingClientRect(),
      n = this.textElement.getBoundingClientRect(),
      r = this.canvas.parentNode;
    (r.style.width = n.width + 10 + "px"),
      (r.style.height = n.height + "px"),
      (r.style.top = n.top - t.top + "px"),
      (r.style.left = n.left + "px"),
      this.renderer.resize();
  }
  appear() {
    const t = document.querySelectorAll("h1 span");
    this.scene.from(
      t,
      { opacity: 0, translateY: 50 },
      {
        duration: 1,
        ease: "easeOutExpo",
        stagger: 0.1,
        onStart: () => {
          const n = document.querySelector("h1");
          n && (n.style.opacity = "1");
        },
      },
      0
    ),
      this.scene.from(
        this.canvas,
        { opacity: 0 },
        {
          duration: 2,
          ease: "easeOutQuint",
          onUpdate: () => {
            this.onResize();
          },
        },
        0.5
      ),
      this.scene.play();
  }
  lerp(t, n, r) {
    return (1 - r) * t + r * n;
  }
  onPreloaded() {
    this.appear();
  }
  onUpdate(t) {
    this.speed.current < 1.000001 && (this.speed.current = 1),
      (this.speed.current = this.lerp(
        this.speed.current,
        this.speed.target,
        this.speed.ease
      )),
      (this.now = t * this.timeScale),
      (this.time += (this.now - this.then) * this.speed.current),
      (this.then = this.now),
      this.renderer.gl.clearColor(0, 0, 0, 0),
      this.renderer.render(this.volume, this.camera),
      (this.planeMesh.uniforms.uTime.value = this.time);
  }
}
let DT = class extends Tn {
    constructor() {
      super("section.hero"),
        (this.isActive = !0),
        (this.enterThreshold = -80),
        (this.persistentAnimation = !0),
        this.addAnimation(new FT()),
        this.addAnimation(new vT());
    }
    onScroll(t) {
      t.y >= this.metrics.scrollY + this.enterThreshold &&
      t.y < this.metrics.scrollY + this.metrics.height + this.exitThreshold
        ? this.onEnter()
        : this.onExit(),
        this.animations.forEach((n) => n.onScroll && n.onScroll(t));
    }
  },
  $T = class {
    constructor() {
      E(this, "pixelPerfect");
      E(this, "time");
      E(this, "then");
      E(this, "now");
      E(this, "timeScale");
      E(this, "canvas");
      E(this, "renderer");
      E(this, "volume");
      E(this, "camera");
      E(this, "viewport");
      E(this, "gridShader");
      E(this, "loupeShader");
      E(this, "gridSize");
      E(this, "gridMesh");
      E(this, "progress");
      E(this, "loupeMesh");
      E(this, "scene");
      (this.pixelPerfect = new ph()),
        (this.time = 0),
        (this.then = 0),
        (this.now = 0),
        (this.timeScale = 0.003),
        (this.canvas = document.getElementById("pixel-grid")),
        (this.renderer = new W.Renderer(this.canvas)),
        (this.renderer.depthTest = !1),
        (this.volume = new W.Volume()),
        (this.camera = new W.Perspective(70, 1, 100, 1e3)),
        this.camera.setPosition(0, 0, 500),
        (this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight,
          aspectRatio: window.innerWidth / window.innerHeight,
        }),
        (this.gridShader = new W.Program(
          this.renderer.gl,
          `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

#define PI 3.14159265359

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uLocalMatrix;
uniform vec2 uCenterPoint;
uniform float uPointSize;
uniform float uIntensity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

void main() {
	float pixelIntensity = uIntensity * (1.0 - length(aUV.xy - uCenterPoint));
	float zoomedIntensity = (pow(abs(sin(PI * pixelIntensity / 2.0)), 64.0) * 3.0) + 1.0;
	vec4 newPos = aPosition;
	newPos.z += zoomedIntensity * 20.0;
	vec4 position = uViewProjectionMatrix * uLocalMatrix * newPos;
	gl_Position = position;
	gl_PointSize = uPointSize * (1.0 / position.z) * zoomedIntensity;
	vNormal = aNormal;
	vUV = aUV;
	vPos = position.xyz;
	vIntensity = zoomedIntensity;
}`,
          `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uProgress;
uniform float uOpacity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min1) / (max1 - min1);
}

void main() {
	vec2 center = vec2(0.5);
	float dist = pow(-distance(vUV, center) + 1.0, uProgress);
	float distanceFromLeft = distance(gl_PointCoord.x, 0.0);
	float intensity = ((vIntensity - 1.0) / 3.0);
	vec3 triColor = vec3(1.0, 0.0, 0.0);
	triColor = mix(vec3(0.0, 1.0, 0.0), triColor, step(distanceFromLeft, 0.33333));
	triColor = mix(vec3(0.0, 0.0, 1.0), triColor, step(distanceFromLeft, 0.66666));
	vec3 color = mix(vec3(dist) * 0.5, triColor, intensity);
	gl_FragColor = vec4(color * uOpacity, uOpacity);
}`
        )),
        (this.loupeShader = new W.Program(
          this.renderer.gl,
          `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uLocalMatrix;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;
	gl_Position = position;
	vNormal = aNormal;
	vUV = aUV;
	vPos = position.xyz;
}`,
          `#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uBaseThickness;
uniform float uTransition;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 startColor = vec4(0.419, 0.831, 0.564, 1.0);
	vec4 endColor = vec4(0.200, 0.392, 0.517, 1.0);
	float distance = (0.5 - length(vUV - vec2(0.5))) * 2.0;
	float thickness = (uBaseThickness * (1.0 - uTransition)) + 0.0125;
	float width = smoothstep(0.005 + thickness, 0.0 + thickness, distance);
	width = mix(0.0, width, smoothstep(0.0, 0.005, distance));

	vec4 finalColor = mix(startColor, endColor, uTransition);

	gl_FragColor = mix(vec4(0.0), finalColor, width);

	//gl_FragColor = vec4(distance);
}`
        ));
    }
    createGridGeometry(t, n) {
      const r = [],
        i = n % 2 !== 0 ? n - 1 : n,
        s = 2 * i,
        o = 2 * t,
        a = t / i,
        l = o / s;
      for (let h = 0; h <= s; h++)
        for (let d = 0; d <= i; d++) {
          const g = d * a - t / 2,
            y = h * l - o / 2;
          r.push(g, y, 0);
        }
      const u = new W.Geometry(r),
        c = [];
      for (let h = 0; h < r.length; h += 3) {
        const d = (r[h] + t / 2) / t,
          g = (r[h + 1] + t / 2) / t;
        c.push(d, g);
      }
      return u.setAttribute("aUV", new Float32Array(c), 2), u;
    }
    reset() {
      (this.progress = {
        pointSize: this.gridSize / 2,
        pointOpacity: 240,
        rotation: 0,
        cameraX: 0,
        cameraY: -window.innerHeight / 2 + 24,
        cameraRotate: 0,
        scale: 0,
        centerX: 0.5,
        centerY: 0.5,
        gridY: 0,
        loupeX: 0,
        loupeY: 0,
        loupeZ: 50,
        totalOpacity: 1,
        colorTransition: 0,
        endDelay: 0,
      }),
        (this.scene = this.pixelPerfect.scene),
        this.scene.fromTo(
          this.progress,
          { pointSize: [this.gridSize / 2, this.gridSize] },
          { duration: 1, ease: "easeInOutExpo" },
          0
        ),
        this.scene.fromTo(
          this.progress,
          { cameraY: [-window.innerHeight / 2 + 24, 0] },
          { duration: 1.25, ease: "easeInOutSine" },
          0
        ),
        this.scene.fromTo(
          this.progress,
          { pointOpacity: [240, 0] },
          { duration: 1.25, ease: "easeInOutExpo" },
          0.25
        ),
        this.scene.fromTo(
          this.progress,
          { scale: [0, 1] },
          { duration: 0.5, ease: "easeOutExpo" },
          0.75
        ),
        this.scene.fromTo(
          this.progress,
          { gridY: [0, this.gridSize / 2] },
          { duration: 2.25 },
          0.75
        ),
        this.viewport.height <= this.viewport.width
          ? (this.scene.fromTo(
              this.progress,
              {
                centerX: [0.5, 0.75],
                centerY: [0.5, 0.75],
                loupeX: [0, this.gridSize / 4],
                loupeY: [0, this.gridSize / 4],
              },
              { duration: 0.5, ease: "easeInOutQuint" },
              1
            ),
            this.scene.to(
              this.progress,
              { centerY: 0.25, loupeY: -this.gridSize / 4 },
              { duration: 0.5, ease: "easeInOutQuint" },
              1.5
            ),
            this.scene.to(
              this.progress,
              {
                centerX: 0.25,
                centerY: 0.5,
                loupeX: -this.gridSize / 4,
                loupeY: 0,
              },
              { duration: 1, ease: "easeInOutQuint" },
              2
            ),
            this.scene.fromTo(
              this.progress,
              {
                loupeZ: [50, 0],
                pointSize: [this.gridSize, 0],
                totalOpacity: [1, 0],
                colorTransition: [0, 1],
              },
              { duration: 1, ease: "easeInOutQuint" },
              2
            ))
          : (this.scene.fromTo(
              this.progress,
              {
                centerX: [
                  0.5,
                  0.5 + (this.viewport.width / this.viewport.height) * 0.25,
                ],
                centerY: [0.5, 0.75],
                loupeX: [
                  0,
                  (this.gridSize / 4) *
                    (this.viewport.width / this.viewport.height),
                ],
                loupeY: [0, this.gridSize / 4],
              },
              { duration: 0.5, ease: "easeInOutQuint" },
              1
            ),
            this.scene.to(
              this.progress,
              { centerY: 0.25, loupeY: -this.gridSize / 4 },
              { duration: 0.5, ease: "easeInOutQuint" },
              1.5
            ),
            this.scene.to(
              this.progress,
              {
                centerX:
                  0.5 - (this.viewport.width / this.viewport.height) * 0.25,
                centerY: 0.5,
                loupeX:
                  (-this.gridSize / 4) *
                  (this.viewport.width / this.viewport.height),
                loupeY: 0,
              },
              { duration: 1, ease: "easeInOutQuint" },
              2
            ),
            this.scene.fromTo(
              this.progress,
              {
                loupeZ: [50, 0],
                pointSize: [this.gridSize, 0],
                totalOpacity: [1, 0],
                colorTransition: [0, 1],
              },
              { duration: 1, ease: "easeInOutQuint" },
              2
            )),
        this.scene.fromTo(
          this.progress,
          { endDelay: [0, 1] },
          { duration: 0.5 },
          3
        );
    }
    onResize(t) {
      (this.viewport = t),
        this.camera.setFieldOfView(
          2 * Math.atan(t.height / 2 / 500) * (180 / Math.PI)
        ),
        this.camera.setAspectRatio(t.aspectRatio),
        (this.gridSize = Math.max(t.width, t.height));
      const n = this.createGridGeometry(
        Math.floor(this.gridSize),
        Math.floor((4 / this.gridSize) * (12 * this.gridSize))
      );
      (this.gridMesh = new W.Mesh(n, this.gridShader)),
        (this.gridMesh.drawMode = "POINTS"),
        this.gridMesh.setUniform("uCenterPoint", [0.5, 0.5], "2f"),
        this.gridMesh.setUniform(
          "uPointSize",
          this.renderer.pixelRatio * (this.gridSize / 2),
          "1f"
        ),
        this.gridMesh.setUniform("uProgress", 240, "1f"),
        this.gridMesh.setUniform("uIntensity", 0, "1f"),
        this.gridMesh.setUniform("uOpacity", 1, "1f");
      const r = new W.Plane(
        this.viewport.width / 3,
        this.viewport.width / 3,
        1,
        1
      );
      (this.loupeMesh = new W.Mesh(r, this.loupeShader)),
        this.loupeMesh.setUniform(
          "uBaseThickness",
          (0.05 / this.viewport.width) * this.viewport.width,
          "1f"
        ),
        this.loupeMesh.setUniform("uTransition", 0, "1f"),
        (this.volume.objects = []),
        this.volume.add(this.gridMesh),
        this.volume.add(this.loupeMesh),
        this.renderer.resize(),
        this.reset();
    }
    onUpdate(t) {
      (this.now = t * this.timeScale),
        (this.time += this.now - this.then),
        (this.then = this.now),
        (this.camera.position.y = this.progress.cameraY),
        (this.gridMesh.uniforms.uCenterPoint.value = [
          this.progress.centerX,
          this.progress.centerY - this.progress.gridY / this.gridSize,
        ]),
        (this.gridMesh.uniforms.uProgress.value = this.progress.pointOpacity),
        (this.gridMesh.uniforms.uIntensity.value = this.progress.scale),
        (this.gridMesh.uniforms.uPointSize.value =
          this.progress.pointSize * this.renderer.pixelRatio),
        (this.gridMesh.uniforms.uOpacity.value = this.progress.totalOpacity),
        (this.gridMesh.position.y = this.progress.gridY),
        (this.loupeMesh.uniforms.uTransition.value =
          this.progress.colorTransition),
        (this.loupeMesh.position.x = this.progress.loupeX),
        (this.loupeMesh.position.y = this.progress.loupeY),
        (this.loupeMesh.position.z = this.progress.loupeZ),
        this.loupeMesh.setScale(
          this.progress.scale,
          this.progress.scale,
          this.progress.scale
        ),
        this.renderer.gl.clearColor(0, 0, 0, 0),
        this.renderer.render(this.volume, this.camera);
    }
  };
class UT {
  constructor() {
    E(this, "pixelPerfect");
    E(this, "textElement");
    E(this, "scene");
    (this.pixelPerfect = new ph()),
      (this.textElement = document.querySelector("section.pixel-perfect p")),
      (this.scene = this.pixelPerfect.scene);
  }
  onResize(t) {
    (this.textElement.style.opacity = "0"),
      (this.textElement.style.transform = "translateY(100%)"),
      (this.scene = this.pixelPerfect.scene),
      this.scene.fromTo(
        this.textElement,
        { translateY: [100, -100] },
        { duration: 2, ease: "linear" },
        1
      ),
      this.scene.fromTo(
        this.textElement,
        { opacity: [0, 1] },
        { duration: 1, ease: "easeInOutExpo" },
        1
      ),
      this.scene.to(
        this.textElement,
        { opacity: 0 },
        { duration: 1, ease: "easeInOutExpo" },
        2
      );
  }
}
const ao = { didInit: null };
let BT = class extends Tn {
  constructor() {
    super("section.pixel-perfect");
    E(this, "scene");
    E(this, "progress");
    if (ao.didInit) return ao.didInit;
    (ao.didInit = this),
      this.attachScene(),
      (this.progress = 0),
      this.addAnimation(new $T()),
      this.addAnimation(new UT()),
      this.enable();
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : (this.progress = 1),
        this.scene.setProgressImmediately(this.progress);
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => {
        r.onUpdate && r.onUpdate(n);
      }));
  }
  onResize(n) {
    (this.viewport = n),
      this.attachScene(),
      super.onResize(n),
      (this.enterThreshold = this.exitThreshold = -n.height),
      this.initializeTextFocus();
  }
};
const ph = BT;
let HT = class {
  constructor() {
    E(this, "interactive");
    E(this, "time");
    E(this, "then");
    E(this, "now");
    E(this, "timeScale");
    E(this, "viewport");
    E(this, "bounds");
    E(this, "mouse");
    E(this, "clicking");
    E(this, "progress");
    E(this, "canvas");
    E(this, "ctx");
    E(this, "balloonIndexStart");
    E(this, "scaleFactor");
    E(this, "scene");
    E(this, "balloons");
    (this.interactive = new mh()),
      (this.time = 0),
      (this.then = 0),
      (this.now = 0),
      (this.timeScale = 0.003),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
      }),
      (this.bounds = { left: 0, top: 0 }),
      (this.mouse = {
        x: this.viewport.width / 2,
        y: this.viewport.height / 2,
        xOffset: 0,
        yOffset: 0,
      }),
      (this.clicking = !1),
      (this.progress = { triggerFlash: 0, impact: 0 }),
      (this.canvas = document.getElementById("interactive-game")),
      (this.ctx = this.canvas.getContext("2d")),
      (this.balloonIndexStart = 0),
      (this.balloons = []),
      (this.scene = this.interactive.scene),
      (this.scaleFactor = 0);
  }
  reset() {
    (this.progress = { triggerFlash: 0, impact: 0 }),
      (this.balloonIndexStart = 0),
      (this.balloons = []),
      (this.scaleFactor = Math.ceil(this.viewport.width / 600));
    for (let t = 0; t < 8; t++) this.createBalloon();
    (this.scene = this.interactive.scene),
      this.scene.fromTo(this.canvas, { opacity: [1, 0] }, { duration: 1 }, 1.5);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const t of this.balloons)
      (t.y -=
        (this.now - this.then) *
        (this.viewport.height / (24 * this.scaleFactor)) *
        t.velocity *
        this.scaleFactor),
        t.y < -130 * this.scaleFactor
          ? ((t.x =
              Math.random() * (this.viewport.width - 75 * this.scaleFactor)),
            (t.y = this.viewport.height))
          : (this.drawBalloon(t),
            this.drawReticle(this.mouse.xOffset, this.mouse.yOffset));
  }
  drawBalloon(t) {
    this.ctx.scale(t.scale, t.scale),
      this.ctx.translate(
        t.x / t.scale - 5 * t.scale,
        t.y / t.scale - 5 * t.scale
      );
    const n = new Path2D(
        "m40 88 3 5H31l3-5h6ZM36.534 1c23 0 35.564 16.992 35.467 37C71.895 59.52 54 88 36.995 88 19.991 88 .995 59.524 1 38 1.005 16.476 15.534 1 36.534 1Z"
      ),
      r = new Path2D(
        "M48.955 11.223C58.169 16.089 63.054 25.922 63 36.92M37.313 93C33 106 45 109 44 120c-.706 7.766-9 10-13 5"
      );
    this.ctx.isPointInPath(n, this.mouse.xOffset, this.mouse.yOffset) &&
    !t.isPopped
      ? ((this.ctx.strokeStyle = `rgba(104, 189, 231, ${t.opacity})`),
        (this.ctx.fillStyle = `rgba(0, 0, 0, ${t.opacity})`),
        this.clicking &&
          (Me.fromTo(
            this.progress,
            { impact: [1, 0] },
            { duration: 0.125, ease: "linear" }
          ),
          Me.to(
            t,
            { opacity: 0, scale: 1.5 * this.scaleFactor },
            {
              duration: 0.25,
              ease: "easeOutExpo",
              onComplete: () => {
                (t.x =
                  Math.random() *
                  (this.viewport.width - 75 * this.scaleFactor)),
                  (t.y = this.viewport.height),
                  (t.isPopped = !1),
                  (t.opacity = 1),
                  (t.scale = this.scaleFactor);
              },
            }
          ),
          (t.isPopped = !0)))
      : ((this.ctx.strokeStyle = `rgba(214, 103, 97, ${t.opacity})`),
        (this.ctx.fillStyle = `rgba(0, 0, 0, ${t.opacity})`)),
      this.ctx.fill(n),
      this.ctx.stroke(n),
      this.ctx.stroke(r),
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  createBalloon() {
    const t = Math.random() * (this.viewport.width - 75 * this.scaleFactor),
      n = Math.random() * this.viewport.height,
      r = Math.random() * 3 + 1;
    this.balloons.push({
      id: this.balloonIndexStart,
      isPopped: !1,
      scale: this.scaleFactor,
      opacity: 1,
      x: t,
      y: n,
      velocity: r,
    }),
      (this.balloonIndexStart = this.balloonIndexStart + 1);
  }
  drawReticle(t, n) {
    this.reticleLines(t, n),
      this.reticleCircle(t, n),
      this.reticleChevrons(t, n);
  }
  reticleLines(t, n) {
    (this.ctx.strokeStyle = "#D66761"),
      (this.ctx.lineWidth = 2),
      (this.ctx.lineCap = "round"),
      (this.ctx.lineJoin = "round"),
      this.ctx.beginPath(),
      this.ctx.moveTo(0, n),
      this.ctx.lineTo(t - 60, n),
      this.ctx.moveTo(t + 60, n),
      this.ctx.lineTo(this.canvas.width, n),
      this.ctx.moveTo(t, 0),
      this.ctx.lineTo(t, n - 60),
      this.ctx.moveTo(t, n + 60),
      this.ctx.lineTo(t, this.canvas.height),
      this.ctx.closePath(),
      this.ctx.stroke(),
      (this.ctx.strokeStyle = "#FFFFFF"),
      this.ctx.beginPath(),
      this.ctx.moveTo(0 + (t - 60) * (1 - this.progress.triggerFlash), n),
      this.ctx.lineTo(t - 60, n),
      this.ctx.moveTo(t + 60, n),
      this.ctx.lineTo(
        (t + 60) * (1 - this.progress.triggerFlash) +
          this.canvas.width * this.progress.triggerFlash,
        n
      ),
      this.ctx.moveTo(t, 0 + (n - 60) * (1 - this.progress.triggerFlash)),
      this.ctx.lineTo(t, n - 60),
      this.ctx.moveTo(t, n + 60),
      this.ctx.lineTo(
        t,
        (n + 60) * (1 - this.progress.triggerFlash) +
          this.canvas.height * this.progress.triggerFlash
      ),
      this.ctx.closePath(),
      this.ctx.stroke();
  }
  reticleCircle(t, n) {
    (this.ctx.strokeStyle = "#D66761"),
      this.ctx.beginPath(),
      this.ctx.arc(t, n, 36, 0, 2 * Math.PI, !0),
      this.ctx.closePath(),
      this.ctx.stroke(),
      (this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.progress.triggerFlash}`),
      this.ctx.beginPath(),
      this.ctx.arc(t, n, 36, 0, 2 * Math.PI, !0),
      this.ctx.closePath(),
      this.ctx.stroke();
  }
  reticleChevrons(t, n) {
    (this.ctx.strokeStyle = "#FBE7E6"),
      this.ctx.beginPath(),
      this.ctx.moveTo(t - 10, n - 18 - 6 * this.progress.triggerFlash),
      this.ctx.lineTo(t, n - 8 - 6 * this.progress.triggerFlash),
      this.ctx.lineTo(t + 10, n - 18 - 6 * this.progress.triggerFlash),
      this.ctx.stroke(),
      this.ctx.beginPath(),
      this.ctx.moveTo(t - 18 - 6 * this.progress.triggerFlash, n - 10),
      this.ctx.lineTo(t - 8 - 6 * this.progress.triggerFlash, n),
      this.ctx.lineTo(t - 18 - 6 * this.progress.triggerFlash, n + 10),
      this.ctx.stroke(),
      this.ctx.beginPath(),
      this.ctx.moveTo(t - 10, n + 18 + 6 * this.progress.triggerFlash),
      this.ctx.lineTo(t, n + 8 + 6 * this.progress.triggerFlash),
      this.ctx.lineTo(t + 10, n + 18 + 6 * this.progress.triggerFlash),
      this.ctx.stroke(),
      this.ctx.beginPath(),
      this.ctx.moveTo(t + 18 + 6 * this.progress.triggerFlash, n - 10),
      this.ctx.lineTo(t + 8 + 6 * this.progress.triggerFlash, n),
      this.ctx.lineTo(t + 18 + 6 * this.progress.triggerFlash, n + 10),
      this.ctx.stroke();
  }
  calculateMouseOffset() {
    (this.mouse.xOffset = this.mouse.x - this.bounds.left),
      (this.mouse.yOffset = this.mouse.y - this.bounds.top);
  }
  onResize(t) {
    (this.viewport = t),
      (this.canvas.width = this.viewport.width),
      (this.canvas.height = this.viewport.height),
      this.reset();
  }
  onMouseDown(t) {
    (this.bounds = this.canvas.getBoundingClientRect()),
      Me.fromTo(
        this.progress,
        { triggerFlash: [1, 0] },
        { duration: 1, ease: "easeOutExpo" }
      ),
      console.log(t, this.mouse, this.bounds),
      (this.mouse.x = t.clientX),
      (this.mouse.y = t.clientY),
      (this.clicking = !0);
  }
  onMouseUp() {
    this.clicking = !1;
  }
  onMouseMove(t) {
    (this.bounds = this.canvas.getBoundingClientRect()),
      (this.mouse.x = t.clientX),
      (this.mouse.y = t.clientY);
  }
  onUpdate(t) {
    (this.now = t * this.timeScale),
      (this.time += this.now - this.then),
      this.calculateMouseOffset(),
      this.draw(),
      (this.then = this.now);
  }
};
class VT {
  constructor() {
    E(this, "interactive");
    E(this, "textElement");
    E(this, "scene");
    (this.interactive = new mh()),
      (this.textElement = document.querySelector("section.interactive span")),
      (this.scene = this.interactive.scene);
  }
  onResize() {
    (this.textElement.style.opacity = "0"),
      (this.textElement.style.transform = "scale(0.5)"),
      (this.scene = this.interactive.scene),
      this.scene.fromTo(
        this.textElement,
        { scale: [0.5, 1.5] },
        { duration: 2, ease: "linear" },
        0
      ),
      this.scene.fromTo(
        this.textElement,
        { opacity: [0, 1] },
        { duration: 1, ease: "easeInOutExpo" },
        0
      ),
      this.scene.to(
        this.textElement,
        { opacity: 0 },
        { duration: 1, ease: "easeInOutExpo" },
        1
      );
  }
}
const lo = { didInit: null };
let WT = class extends Tn {
  constructor() {
    super("section.interactive");
    E(this, "scene");
    E(this, "progress");
    if (lo.didInit) return lo.didInit;
    (lo.didInit = this),
      (this.persistentAnimation = !0),
      this.addAnimation(new HT()),
      this.addAnimation(new VT()),
      this.attachScene(),
      (this.progress = 0);
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : (this.progress = 1),
        this.scene.setProgressImmediately(this.progress);
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => r.onUpdate && r.onUpdate(n)));
  }
  onResize(n) {
    (this.viewport = n),
      this.attachScene(),
      super.onResize(n),
      (this.exitThreshold = 0),
      this.initializeTextFocus();
  }
  onMouseMove(n) {
    this.isActive &&
      this.animations.forEach((r) => r.onMouseMove && r.onMouseMove(n));
  }
};
const mh = WT;
class YT {
  constructor() {
    E(this, "photography");
    E(this, "progress");
    E(this, "viewport");
    E(this, "background");
    E(this, "scene");
    (this.photography = new Ra()),
      (this.progress = { value: 0 }),
      (this.background = document.querySelector(
        "section.photography .photography--background"
      ));
  }
  onResize(t) {
    (this.viewport = t),
      (this.scene = this.photography.scene),
      this.scene.fromTo(
        this.background,
        { opacity: [0, 1] },
        { duration: 1 },
        0
      ),
      this.scene.fromTo(this.progress, { value: 1 }, { duration: 3 }, 0);
  }
}
class GT {
  constructor() {
    E(this, "photography");
    E(this, "viewport");
    E(this, "scene");
    E(this, "collage");
    (this.photography = new Ra()),
      (this.collage = document.querySelector(
        "section.photography .photography--collage"
      ));
  }
  onResize(t) {
    (this.viewport = t),
      (this.scene = this.photography.scene),
      this.scene.addClass(
        this.collage,
        { class: "enter" },
        { toggle: !0 },
        0.75
      );
  }
}
class XT {
  constructor() {
    E(this, "photography");
    E(this, "scene");
    E(this, "textElement");
    (this.photography = new Ra()),
      (this.textElement = document.querySelector("section.photography span"));
  }
  onResize() {
    (this.textElement.style.transform = "translateY(100%)"),
      (this.scene = this.photography.scene),
      this.scene.fromTo(
        this.textElement,
        { translateY: [100, -100] },
        { duration: 2.4, ease: "linear" },
        0
      );
  }
}
const uo = { didInit: null };
let QT = class extends Tn {
  constructor() {
    super("section.photography");
    E(this, "scene");
    E(this, "progress");
    if (uo.didInit) return uo.didInit;
    (uo.didInit = this),
      this.attachScene(),
      this.addAnimation(new YT()),
      this.addAnimation(new GT()),
      this.addAnimation(new XT()),
      (this.progress = 0);
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : (this.progress = 1),
        this.scene.setProgressImmediately(this.progress);
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => r.onUpdate && r.onUpdate(n)));
  }
  onResize(n) {
    (this.viewport = n),
      this.attachScene(),
      super.onResize(n),
      (this.enterThreshold = -n.height),
      (this.exitThreshold = n.height / 2),
      this.initializeTextFocus();
  }
};
const Ra = QT;
class qT {
  constructor() {
    E(this, "travel");
    E(this, "progress");
    E(this, "viewport");
    E(this, "introText");
    E(this, "canvas");
    E(this, "ctx");
    E(this, "text");
    E(this, "imageDimensions");
    E(this, "time");
    E(this, "then");
    E(this, "now");
    E(this, "timeScale");
    E(this, "initialRender");
    E(this, "image");
    E(this, "imageReady");
    E(this, "orientation");
    E(this, "scene");
    E(this, "lastChar");
    (this.travel = new gh()),
      (this.scene = this.travel.scene),
      (this.time = 0),
      (this.then = 0),
      (this.now = 0),
      (this.timeScale = 0.003),
      (this.progress = { xPosition: 0, yPosition: 0, fontSize: 4, xOffset: 0 }),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
      }),
      (this.introText = document.getElementById("travel-intro")),
      (this.canvas = document.getElementById("adventures-mask")),
      (this.ctx = this.canvas.getContext("2d")),
      (this.ctx.font = "600 96px AppleSDGothicNeo"),
      (this.text = this.ctx.measureText("adventures")),
      (this.imageDimensions = {
        aspectRatio: 1.8,
        height: 800,
        width: 1440,
        scaledHeight: 0,
        scaledWidth: 0,
        xOffset: 0,
        yOffset: 0,
      }),
      (this.image = new Image()),
      (this.imageReady = !1),
      (this.image.onload = () => {
        (this.imageReady = !0),
          (this.imageDimensions.height = this.image.height),
          (this.imageDimensions.width = this.image.width),
          (this.imageDimensions.aspectRatio =
            this.image.width / this.image.height),
          this.setImageDimensions();
      }),
      (this.orientation = window.matchMedia("(orientation: portrait)")),
      (this.initialRender = !1);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
      this.imageReady &&
        ((this.ctx.globalCompositeOperation = "destination-atop"),
        this.ctx.drawImage(
          this.image,
          this.imageDimensions.xOffset,
          this.imageDimensions.yOffset,
          this.imageDimensions.scaledWidth,
          this.imageDimensions.scaledHeight,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        )),
      (this.ctx.fillStyle = "rgb(255, 255, 255)"),
      (this.ctx.font = `600 ${this.progress.fontSize}vw AppleSDGothicNeo`),
      (this.text = this.ctx.measureText("adventures")),
      (this.lastChar = this.ctx.measureText("s")),
      this.ctx.fillText(
        "adventures",
        this.progress.xPosition -
          this.text.width / 2 -
          (this.text.width / 2 - this.lastChar.width / 2) *
            this.progress.xOffset,
        this.progress.yPosition +
          (this.lastChar.actualBoundingBoxAscent / 2) * this.progress.xOffset
      );
  }
  setImageDimensions() {
    this.viewport.aspectRatio < this.imageDimensions.aspectRatio
      ? ((this.imageDimensions.scaledHeight = this.imageDimensions.aspectRatio),
        (this.imageDimensions.scaledWidth =
          this.imageDimensions.height * this.viewport.aspectRatio),
        (this.imageDimensions.xOffset =
          this.imageDimensions.width / 2 -
          this.imageDimensions.scaledWidth / 2),
        (this.imageDimensions.yOffset = 0))
      : ((this.imageDimensions.scaledHeight =
          this.imageDimensions.width / this.viewport.aspectRatio),
        (this.imageDimensions.scaledWidth = this.imageDimensions.width),
        (this.imageDimensions.xOffset = 0),
        (this.imageDimensions.yOffset =
          this.imageDimensions.height / 2 -
          this.imageDimensions.scaledHeight / 2));
  }
  onResize(t) {
    (this.viewport = t),
      (this.canvas.width = this.viewport.width),
      (this.canvas.height = this.viewport.height),
      this.setImageDimensions(),
      (this.progress = {
        xPosition: this.canvas.width,
        yPosition: this.canvas.height,
        fontSize: 4,
        xOffset: 0,
      }),
      (this.scene = this.travel.scene),
      this.scene.fromTo(
        this.progress,
        {
          xPosition: [this.canvas.width, this.canvas.width / 2],
          fontSize: [8, 16],
        },
        { duration: 1 },
        0
      ),
      this.scene.fromTo(
        this.introText,
        { translateX: [-50, -50], translateY: [-50, -400], opacity: [1, 0] },
        { duration: 1 },
        1
      ),
      this.scene.fromTo(
        this.progress,
        {
          xOffset: [0, 1],
          yPosition: [this.canvas.height, this.canvas.height / 2],
          fontSize: [16, 32],
        },
        { duration: 1 },
        1
      ),
      this.scene.fromTo(
        this.progress,
        { fontSize: [32, 512] },
        { duration: 1 },
        2
      ),
      (this.initialRender = !1);
  }
  onUpdate(t) {
    (this.now = t * this.timeScale),
      (this.time += this.now - this.then),
      (this.then = this.now),
      this.initialRender
        ? this.draw()
        : ((this.initialRender = !0), this.scene.setProgressImmediately(0.25));
  }
}
class KT {
  constructor() {
    E(this, "travel");
    E(this, "overlay");
    E(this, "scene");
    (this.travel = new gh()),
      (this.overlay = document.querySelector(
        "section.travel .travel--overlay"
      ));
  }
  onResize() {
    (this.scene = this.travel.scene),
      this.scene.fromTo(this.overlay, { opacity: [0, 1] }, { duration: 1 }, 2);
  }
}
const co = { didInit: null };
let ZT = class extends Tn {
  constructor() {
    super("section.travel");
    E(this, "scene");
    E(this, "progress");
    if (co.didInit) return co.didInit;
    (co.didInit = this),
      this.attachScene(),
      this.addAnimation(new qT()),
      this.addAnimation(new KT()),
      (this.progress = 0),
      this.enable();
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : (this.progress = 1),
        this.scene.setProgressImmediately(this.progress);
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => {
        r.onUpdate && r.onUpdate(n);
      }));
  }
  onResize(n) {
    (this.viewport = n),
      this.attachScene(),
      super.onResize(n),
      (this.enterThreshold = -n.height / 4),
      (this.exitThreshold = -n.height),
      this.initializeTextFocus();
  }
};
const gh = ZT;
let JT = class {
    constructor() {
      E(this, "contact");
      E(this, "bounds");
      E(this, "mouse");
      E(this, "cta");
      E(this, "viewport");
      (this.contact = new vh()),
        (this.bounds = { top: 0, left: 0, width: 0, height: 0 }),
        (this.mouse = {
          x: 0,
          y: 0,
          xOffsetTarget: 0,
          xOffsetCurrent: 0,
          yOffsetTarget: 0,
          yOffsetCurrent: 0,
        }),
        (this.cta = document.querySelector(
          "section.contact .contact--copy .contact--cta a"
        ));
    }
    calculateMouseOffset() {
      (this.mouse.xOffsetTarget =
        (this.mouse.x - this.bounds.left - this.bounds.width / 2) /
        (this.viewport.width / 2)),
        (this.mouse.yOffsetTarget =
          (this.mouse.y - this.bounds.top - this.bounds.height / 2) /
          (this.viewport.height / 2));
    }
    onResize(t) {
      this.viewport = t;
    }
    onMouseMove(t) {
      (this.bounds = this.cta.getBoundingClientRect()),
        (this.mouse.x = t.clientX),
        (this.mouse.y = t.clientY);
    }
    lerp(t, n, r) {
      return (1 - r) * t + r * n;
    }
    onUpdate() {
      this.calculateMouseOffset(),
        (this.mouse.xOffsetCurrent = this.lerp(
          this.mouse.xOffsetCurrent,
          this.mouse.xOffsetTarget,
          0.1
        )),
        (this.mouse.yOffsetCurrent = this.lerp(
          this.mouse.yOffsetCurrent,
          this.mouse.yOffsetTarget,
          0.1
        )),
        (this.cta.style.transform = `translate(${
          100 * this.mouse.xOffsetCurrent
        }%, ${100 * this.mouse.yOffsetCurrent}%)`);
    }
  },
  ek = class {
    constructor() {
      E(this, "contact");
      E(this, "viewport");
      E(this, "progress");
      E(this, "textWrapper");
      E(this, "text");
      E(this, "played");
      E(this, "scene");
      E(this, "textAnimation");
      E(this, "splitText");
      (this.contact = new vh()),
        (this.progress = { value: 0 }),
        (this.textWrapper = document.querySelector(
          "section.contact .contact--copy"
        )),
        (this.text = document.querySelector(
          "section.contact .contact--copy p"
        )),
        (this.played = !1),
        this.splitTitle();
    }
    splitTitle() {
      var r;
      const t = this.text,
        n = [...t.childNodes];
      for (; t.firstChild; ) t.removeChild(t.firstChild);
      for (let i of n) {
        if (i.nodeType === Node.TEXT_NODE) {
          const s = ((r = i.textContent) == null ? void 0 : r.split(" ")) ?? "";
          for (let o = 0; o < s.length; o++)
            if (s[0] !== "" || o !== 0) {
              if (
                ((i = document.createElement("span")),
                i.setAttribute("role", "text"),
                s[0] === "")
              ) {
                const a = document.createTextNode(" " + s[o]);
                i.appendChild(a);
              } else {
                let a = document.createTextNode(s[o]);
                o !== s.length - 1 && (a = document.createTextNode(s[o] + " ")),
                  i.appendChild(a);
              }
              t.appendChild(i);
            }
        }
        t.appendChild(i);
      }
      this.splitText = document.querySelectorAll(
        "section.contact .contact--copy p span, section.contact .contact--copy .contact--cta"
      );
    }
    onResize() {
      (this.scene = this.contact.scene),
        (this.textAnimation = new Me.Scene()),
        this.textAnimation.fromTo(
          this.splitText,
          { opacity: [0, 1], translateY: [50, 0] },
          { duration: 1, ease: "easeOutExpo", stagger: 0.1 },
          0
        ),
        this.scene.fromTo(this.progress, { value: [0, 1] }, { duration: 3 }, 0),
        this.scene.fromTo(
          this.textWrapper,
          { opacity: [0, 1] },
          {
            duration: 0.5,
            ease: "easeInOutExpe",
            onComplete: () => {
              (!this.played || this.splitText[0].style.opacity === "0") &&
                (this.textAnimation.play(), (this.played = !0));
            },
          },
          0
        );
    }
    lerp(t, n, r) {
      return (1 - r) * t + r * n;
    }
  };
const ho = { didInit: null };
let tk = class extends Tn {
  constructor() {
    super("section.contact");
    E(this, "scene");
    E(this, "progress");
    if (ho.didInit) return ho.didInit;
    (ho.didInit = this),
      (this.persistentAnimation = !0),
      this.attachScene(),
      (this.progress = 0),
      this.addAnimation(new JT()),
      this.addAnimation(new ek());
  }
  initializeTextFocus() {
    var r;
    const n = Number((r = this.viewport) == null ? void 0 : r.height) / 100;
    this.DOM.querySelectorAll("[data-focus]").forEach((i) => {
      const s = i,
        o = Number(s.dataset.focus) * n + this.DOM.offsetTop;
      s.dataset.focusOffset = `${o}`;
    });
  }
  onScroll(n) {
    if ((super.onScroll(n), this.isActive)) {
      const r = this.metrics.scrollY + this.enterThreshold,
        i = this.metrics.scrollY + this.metrics.height + this.exitThreshold,
        s = n.y - r;
      this.progress = s / (i - r);
    } else
      n.y <= this.metrics.scrollY + this.enterThreshold
        ? (this.progress = 0)
        : (this.progress = 1),
        this.scene.setProgressImmediately(this.progress);
  }
  attachScene() {
    this.scene = new Me.Scene();
  }
  onUpdate(n) {
    this.isActive &&
      (this.scene.setProgressImmediately(this.progress),
      this.animations.forEach((r) => {
        r.onUpdate && r.onUpdate(n);
      }));
  }
  onResize(n) {
    (this.viewport = n),
      this.attachScene(),
      super.onResize(n),
      this.initializeTextFocus();
  }
  onEnter() {
    this.isActive ||
      (this.enable(), this.animations.forEach((n) => n.onEnter && n.onEnter()));
  }
  onExit() {
    this.isActive &&
      (this.disable(), this.animations.forEach((n) => n.onExit && n.onExit()));
  }
  onMouseMove(n) {
    this.isActive &&
      this.animations.forEach((r) => r.onMouseMove && r.onMouseMove(n));
  }
};
const vh = tk;
let nk = class {
  constructor() {
    E(this, "viewport");
    E(this, "DOMS");
    E(this, "cards");
    (this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight,
    }),
      (this.DOMS = document.querySelectorAll(".work--item")),
      (this.cards = []);
  }
  createCardObjects() {
    (this.cards = []),
      this.DOMS.forEach((t, n) => {
        this.cards.push({
          DOM: t,
          scrollY: t.offsetTop,
          height: t.clientHeight,
          progress: 0,
          offsetMultiplier: n === 2 || n === 5 ? 4 : 1,
        });
      });
  }
  createScenes() {
    this.cards.forEach((t) => {
      const n = new Me.Scene();
      n.fromTo(
        t.DOM,
        { translateY: [25 * t.offsetMultiplier, 0] },
        { duration: 1, ease: "easeInOutSine" },
        0
      ),
        (t.scene = n);
    });
  }
  onScroll(t) {
    this.cards.forEach((n) => {
      var r;
      if (t.y >= n.scrollY - this.viewport.height) {
        const i = (t.y - (n.scrollY - this.viewport.height)) / n.height;
        n.progress = Math.min(i, 1);
      } else n.progress = 0;
      (r = n.scene) == null || r.setProgressImmediately(n.progress);
    });
  }
  onResize(t) {
    (this.viewport = t), this.createCardObjects(), this.createScenes();
  }
};
const fo = { didInit: null };
let rk = class extends Tn {
  constructor() {
    super("section.work");
    E(this, "scene");
    E(this, "progress");
    if (fo.didInit) return fo.didInit;
    (fo.didInit = this),
      this.addAnimation(new nk()),
      (this.persistentAnimation = !0);
  }
  onScroll(n) {
    super.onScroll(n);
  }
  onUpdate(n) {
    this.isActive &&
      this.animations.forEach((r) => {
        r.onUpdate && r.onUpdate(n);
      });
  }
  onResize(n) {
    super.onResize(n), (this.enterThreshold = -n.height);
  }
};
class ik {
  constructor() {
    E(this, "sections", []);
    E(this, "viewportTracker", document.createElement("div"));
    E(this, "resizeTimer");
    E(this, "viewport");
    E(this, "ticking");
    E(this, "persistentAnimation");
    E(this, "scrollMetrics");
    E(this, "needScrollUpdate");
    E(this, "frame");
    E(this, "pressed");
    E(this, "lazyLoadItems", []);
    this._initializeLazyLoad(),
      (this.lazyLoad = this.lazyLoad.bind(this)),
      this._createViewportTracker(),
      (this.onScroll = this.onScroll.bind(this)),
      (this.debounceResize = this.debounceResize.bind(this)),
      (this.onMouseDown = this.onMouseDown.bind(this)),
      (this.onMouseUp = this.onMouseUp.bind(this)),
      (this.onMouseMove = this.onMouseMove.bind(this)),
      this.sections.push(new DT()),
      this.sections.push(new dh()),
      this.sections.push(new ph()),
      this.sections.push(new mh()),
      this.sections.push(new Ra()),
      this.sections.push(new gh()),
      this.sections.push(new vh()),
      this.sections.push(new rk()),
      this.addEventListener(),
      (this.ticking = !1),
      (this.persistentAnimation = !1),
      (this.viewport = { width: 0, height: 0, aspectRatio: 0 }),
      (this.pressed = !1),
      (this.scrollMetrics = { x: 0, y: 0 }),
      this.onPreloaded(),
      this.onResize(),
      this.hasPersistentAnimation(),
      this.onUpdate(0);
  }
  _initializeLazyLoad() {
    const t = document.querySelectorAll("section");
    (this.lazyLoadItems = []),
      t.forEach((n) => {
        this.lazyLoadItems.push({
          section: n,
          scrollTarget: n.offsetTop - n.offsetHeight,
          lazyTarget: n.querySelector("picture[data-lazy]"),
          lazyData: n.querySelector("noscript"),
          loaded: !1,
        });
      });
  }
  lazyLoad() {
    this.lazyLoadItems.forEach((t) => {
      var n;
      if (
        !t.loaded &&
        (window.scrollY >= t.scrollTarget || window.scrollY >= t.scrollTarget)
      ) {
        if (t.lazyTarget && t.lazyData) {
          const r = document.createElement("picture");
          r.innerHTML = t.lazyData.textContent;
          const i = r.firstChild;
          i.setAttribute("data-lazy", ""),
            (n = t.lazyTarget.parentNode) == null ||
              n.replaceChild(i, t.lazyTarget);
        }
        t.loaded = !0;
      }
    });
  }
  onPreloaded() {
    this.sections.forEach((t) => t.onPreloaded());
  }
  onUpdate(t) {
    (this.ticking = !1),
      this.needScrollUpdate &&
        this.sections.forEach((n) => n.onScroll(this.scrollMetrics)),
      this.sections.forEach((n) => n.onUpdate(t)),
      this.hasPersistentAnimation(),
      this.persistentAnimation
        ? (this.sections.forEach((n) => n.persistentAnimation && n.onUpdate(t)),
          (this.frame = requestAnimationFrame(this.onUpdate.bind(this))))
        : this.sections.forEach((n) => n.onUpdate(t));
  }
  hasPersistentAnimation() {
    (this.persistentAnimation = !1),
      this.sections.forEach((t) => {
        t.isActive && t.persistentAnimation && (this.persistentAnimation = !0);
      });
  }
  tick() {
    this.ticking ||
      ((this.frame = requestAnimationFrame(this.onUpdate.bind(this))),
      (this.ticking = !0));
  }
  onScroll() {
    const t = { x: scrollX, y: scrollY };
    (this.needScrollUpdate =
      this.scrollMetrics.x !== t.x || this.scrollMetrics.y !== t.y),
      (this.scrollMetrics = t),
      this.persistentAnimation || this.tick();
  }
  debounceResize() {
    clearTimeout(this.resizeTimer),
      (this.resizeTimer = setTimeout(this.onResize.bind(this), 400));
  }
  onResize() {
    const { width: t, height: n } =
        this.viewportTracker.getBoundingClientRect(),
      r = { width: t, height: n, aspectRatio: t / n };
    (this.viewport.width !== r.width || this.viewport.height !== r.height) &&
      this.sections.forEach((i) => i.onResize(r));
  }
  onMouseDown(t) {
    (this.pressed = !0),
      this.sections.forEach((n) => {
        n.onMouseDown(t);
      });
  }
  onMouseUp(t) {
    (this.pressed = !1),
      this.sections.forEach((n) => {
        n.onMouseUp(t);
      });
  }
  onMouseMove(t) {
    this.sections.forEach((n) => {
      n.onMouseMove && n.onMouseMove(t);
    });
  }
  addEventListener() {
    window.addEventListener("scroll", this.onScroll),
      window.addEventListener("scroll", this.lazyLoad),
      window.addEventListener("resize", this.debounceResize),
      window.addEventListener("mousedown", this.onMouseDown),
      window.addEventListener("mouseup", this.onMouseUp),
      window.addEventListener("mousemove", this.onMouseMove),
      window.addEventListener("touchstart", this.onMouseDown),
      window.addEventListener("touchend", this.onMouseUp);
  }
  removeEventListeners() {
    window.removeEventListener("scroll", this.onScroll),
      window.removeEventListener("scroll", this.lazyLoad),
      window.removeEventListener("resize", this.debounceResize),
      window.removeEventListener("mousedown", this.onMouseDown),
      window.removeEventListener("mouseup", this.onMouseUp),
      window.removeEventListener("mousemove", this.onMouseMove),
      window.removeEventListener("touchstart", this.onMouseDown),
      window.removeEventListener("touchend", this.onMouseUp);
  }
  clear() {
    this.removeEventListeners(),
      document.body.removeChild(this.viewportTracker),
      (oo.didInit = null),
      (ao.didInit = null),
      (lo.didInit = null),
      (uo.didInit = null),
      (co.didInit = null),
      (ho.didInit = null),
      (fo.didInit = null);
  }
  _createViewportTracker() {
    (this.viewportTracker.id = "viewport-tracker"),
      (this.viewportTracker.style.height = "100vh"),
      (this.viewportTracker.style.opacity = "0"),
      (this.viewportTracker.style.pointerEvents = "none"),
      (this.viewportTracker.style.position = "fixed"),
      (this.viewportTracker.style.top = "0"),
      (this.viewportTracker.style.left = "0"),
      (this.viewportTracker.style.width = "100vw"),
      (this.viewportTracker.style.visibility = "hidden"),
      (this.viewportTracker.style.zIndex = "-1"),
      document.body.appendChild(this.viewportTracker);
  }
}
const sk = "/assets/AppleSDGothicNeoM-0ab8f404.ttf",
  ok = "/assets/AppleSDGothicNeoB-a652ea0a.ttf",
  ak = Jw`
  @font-face {
    font-family: 'AppleSDGothicNeo';
        src: local('AppleSDGothicNeoB'), local('AppleSDGothicNeoB');
        font-style: bold;
        src: url(${ok}) format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
        src: local('AppleSDGothicNeo'), local('AppleSDGothicNeo');
        font-style: normal;
        src: url(${sk}) format('truetype');
  }
    * {
        user-select: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: normal;
      font-size: 1em;
    }

    body {
      margin: 0;
      overflow-x: hidden;
      box-sizing: border-box;
      color: #1C1C1C;
      background-color: #fffef2;
      font-family: AppleSDGothicNeo, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
         'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }

    p {
      margin: 0;
      padding: 0;
      border: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
 `,
  lk = 768,
  uk = `screen and (max-width: ${lk}px)`,
  ck = A.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme: e }) => e.color.real_black};
`,
  hk = A.h1`
  color: ${({ theme: e }) => e.color.real_white};
  font-size: 8vw;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  opacity: 0;
  z-index: 1;
  margin-top: calc(50vh - 1.5em);
`,
  fk = A.div`
  display: block;
  mix-blend-mode: multiply;
  pointer-events: none;
  position: absolute;
  z-index: 3;
`,
  dk = A.canvas`
  width: 100%;
  height: 100%;
  margin-bottom: 0.5vw;
`,
  pk = A.canvas`
  display: block;
  margin-top: 2rem;
`,
  mk = A.section`
  align-items: center;
  display: block;
  height: 300vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  position: relative;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`,
  gk = A.div`
  height: 100vh;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
`,
  vk = A.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  & > p {
    color: ${({ theme: e }) => e.color.real_white};
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    text-shadow: 0 0 0.25em ${({ theme: e }) => e.color.real_black};
    opacity: 0;
    transform: translateY(100%);
    will-change: transform;
  }
`,
  yk = A.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`,
  wk = A.section`
  display: block;
  align-items: center;
  background-color: transparent;
  height: 400vh;
  margin-top: -150vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  pointer-events: none;
  position: relative;
  z-index: 3;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`,
  xk = A.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`,
  Sk = A.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`,
  Ek = A.p`
  color: ${({ theme: e }) => e.color.real_white};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  margin-top: 0.25em;
  text-align: center;

  & > .word-wrap:nth-of-type(1) > .overlay {
    background-color: #68bde7;
  }

  & > .word-wrap:nth-of-type(2) > .overlay {
    background-color: #d66761;
  }

  & > .word-wrap:nth-of-type(3) > .overlay {
    background-color: #c4c4c4;
  }

  & > .word-wrap:nth-of-type(4) > .overlay {
    background-color: #aee8fa;
  }

  & > .word-wrap:nth-of-type(5) > .overlay {
    background-color: #6bd490;
  }
`,
  ai = A.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;

  & > .text {
    opacity: 0;
  }

  & > .overlay {
    background-color: #68bde7;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-101%);
    width: 100%;
    will-change: transform;
    z-index: 1;
  }
`,
  Tk = A.span`
  display: inline-block;
  height: 1em;
  position: relative;

  & > svg {
    height: 100%;
    left: 0.25em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    & .short {
      stroke-dasharray: 31;
      stroke-dashoffset: 93;
    }
    & .long {
      stroke-dasharray: 42;
      stroke-dashoffset: 126;
    }
  }
`,
  kk = A.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`,
  _k = A.section`
  align-items: center;
  background-color: ${({ theme: e }) => e.color.real_black};
  display: block;
  height: 300vh;
  margin-top: -250vh;
  justify-content: center;
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 0;
  }
`,
  Pk = A.div`
  height: 100vh;
  position: sticky;
  left: 0;
  overflow: hidden;
  top: 0;
  width: 100%;

  &::after {
    background-image: linear-gradient(transparent, #000);
    bottom: 0;
    content: "";
    display: block;
    height: 50vh;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 4;
  }
`,
  Ck = A.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  span {
    color: ${({ theme: e }) => e.color.real_white};
    display: block;
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`,
  Mk = A.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`,
  Rk = A.section`
  background-color: ${({ theme: e }) => e.color.real_black};
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  height: 100vh;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`,
  Ik = A.div`
  background-color: ${({ theme: e }) => e.color.gray_black};
  bottom: 0;
  display: block;
  height: calc(100% + 100vh);
  left: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
  will-change: opacity;
  z-index: 1;
`,
  bk = A.div`
  height: 200%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;

  img {
    border-radius: 2vw;
    position: absolute;
    opacity: 0;
    transition: transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.2s cubic-bezier(0.5, 0, 1, 1);
    will-change: transform;

    &:nth-of-type(1) {
      bottom: calc(50% + 120px);
      left: -0.2%;
      transform: translate(-50%, -100%) rotate(-30deg);
      width: 28%;
    }
    &:nth-of-type(2) {
      bottom: calc(50% + 68px);
      left: 39.65%;
      transform: translate(25%, -100%) rotate(20deg);
      transition-delay: 0.2s;
      width: 21%;
    }
    &:nth-of-type(3) {
      bottom: calc(50% + 31px);
      left: 74.16%;
      transform: translate(75%, -100%) rotate(30deg);
      transition-delay: 0.15s;
      width: 21%;
    }
    &:nth-of-type(4) {
      left: 7.98%;
      top: calc(50% + 2px);
      transform: translate(-50%, 100%) rotate(15deg);
      transition-delay: 0.1s;
      width: 21%;
    }
    &:nth-of-type(5) {
      left: 35.13%;
      top: calc(50% + 142px);
      transform: translate(12.5%, 100%) rotate(0deg);
      transition-delay: 0.25s;
      width: 28%;
    }
    &:nth-of-type(6) {
      left: 71.87%;
      top: calc(50% + 117px);
      transform: translate(75%, 100%) rotate(-20deg);
      transition-delay: 50ms;
      width: 21%;
    }
  }

  &.enter img {
    opacity: 1;
    transition: transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.8s cubic-bezier(0.5, 1, 0.5, 1);

    &:nth-of-type(1) {
      transform: translate(0) rotate(-20deg);
    }
    &:nth-of-type(2) {
      transform: translate(0) rotate(10deg);
    }
    &:nth-of-type(3) {
      transform: translate(0) rotate(30deg);
    }
    &:nth-of-type(4) {
      transform: translate(0) rotate(15deg);
    }
    &:nth-of-type(5) {
      transform: translate(0) rotate(-5deg);
    }
    &:nth-of-type(6) {
      transform: translate(0) rotate(-30deg);
    }
  }
`,
  Ak = A.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;

  span {
    color: ${({ theme: e }) => e.color.real_white};
    display: block;
    font-size: 7vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`,
  Ok = A.section`
  background-color: ${({ theme: e }) => e.color.gray_black};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300vh;
  pointer-events: auto;
  position: relative;
`,
  Nk = A.div`
  left: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`,
  zk = A.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  overflow: hidden;
  top: 0;
  z-index: 5;
`,
  jk = A.span`
  position: absolute;
  text-align: center;
  width: 100%;
  color: ${({ theme: e }) => e.color.real_white};
  display: block;
  font-size: 7vw;
  font-weight: 600;
  left: 50%;
  letter-spacing: -1px;
  line-height: 1;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;

  &:focus {
    outline: none;
  }
`,
  Lk = A.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`,
  Fk = A.div`
  background-color: ${({ theme: e }) => e.color.real_white};
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: opacity;
  z-index: 4;
`,
  Dk = A.section`
  background-color: ${({ theme: e }) => e.color.real_white};
  height: 125vh;
  margin-top: -100vh;
  opacity: 0;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`,
  $k = A.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`,
  Uk = A.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`,
  Bk = A.p`
  color: ${({ theme: e }) => e.color.real_black};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  width: 100%;
  will-change: opacity;
  will-change: transform;

  &:focus {
    outline: none;
  }
  & span {
    will-change: transform;
  }
`,
  Hk = A.div`
  display: inline-block;
  margin-top: 72px;
  position: relative;
  a {
    display: inline-block;
    background-color: #aee8fa;
    border-radius: 12px;
    color: #0a1e31;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 28px;
    text-decoration: none;
    transition: background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);
    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }

    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow: 0 0 0 4px #fff, 0 0 0 8px #000;
      outline: none;
    }
  }

  &:before {
    border: 2px dashed #242528;
    border-radius: 12px;
    content: "";
    display: block;
    height: calc(100% - 4px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.9875);
    width: calc(100% - 4px);
    z-index: -1;
  }
`,
  Vk = A.section`
  background-color: #f9f9f9;
  min-height: 100vh;
  overflow: hidden;
  padding: 128px 20px;

  &:focus {
    outline: none;
  }
`,
  Wk = A.div`
  text-align: center;

  h2 {
    color: ${({ theme: e }) => e.color.gray_black};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin-bottom: 40px;
  }
`,
  Yk = A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 764px;
  width: 100%;
`,
  Gk = Wr`
  background-color: red;
  background-color: #a2f6cf;
  color: #0f270c;

  hr {
    background-color: #6bd490;
  }

  a {
    background-color: #0f270c;
    color: #ecfeef;

    &:hover {
      background-color: #417944;
      color: #ecfeef;
    }
    &:focus {
      background-color: #417944;
      color: #ecfeef;
      box-shadow: 0 0 0 4px #a2f6cf, 0 0 0 8px #000;
      outline: none;
    }
  }
`,
  Xk = Wr`
  background-color: red;
  background-color: #aee8fa;
  color: #0a1e31;

  hr {
    background-color: #68bde7;
  }

  a {
    background-color: #0a1e31;
    color: #eaf4fe;

    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }
    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow: 0 0 0 4px #aee8fa, 0 0 0 8px #000;
      outline: none;
    }
  }
`,
  Qk = Wr`
  background-color: red;
  background-color: #1b1b1b;
  color: #fff;

  hr {
    background-color: #484848;
  }
  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    span {
      border: 1px solid #f5eee6;
      border-radius: 24px;
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
`,
  $s = A.article`
  width: calc(50% - 72px);
  ${({ $full: e }) => e && { width: "100%" }}
  align-items: flex-start;
  background-color: #fff;
  border-radius: 32px;
  color: #242424;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 32px 32px 24px;
  will-change: transform;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  hr {
    background-color: #c4c4c4;
    border: none;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 0;
    width: 100%;
  }

  a {
    background-color: #c4c4c4;
    border-radius: 12px;
    color: #242424;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    padding: 14px 28px;
    text-decoration: none;
    transition: background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);

    &:hover {
      background-color: #242424;
      color: #f9f9f9;
    }
    &:focus {
      background-color: #242424;
      color: #f9f9f9;
      box-shadow: 0 0 0 4px #000, 0 0 0 8px #fff;
      outline: none;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: auto;
    width: 100%;

    & + a {
      margin-top: 24px;
    }
  }

  & > :last-child {
    margin-bottom: 8px;
  }

  ${({ $green: e }) => e && { ...Gk }}
  ${({ $blue: e }) => e && { ...Xk }}
  ${({ $black: e }) => e && { ...Qk }}

  @media ${uk} {
    width: 100%;
  }
`,
  qk = () => {
    const e = C.useRef();
    return (
      C.useEffect(
        () => (
          (e.current = new ik()),
          () => {
            var t;
            (t = e.current) == null || t.clear();
          }
        ),
        []
      ),
      x.jsxs(x.Fragment, {
        children: [
          x.jsx(Tg, { title: "석이 | About" }),
          x.jsxs(ck, {
            className: "hero",
            children: [
              x.jsxs(hk, {
                children: [
                  "당신의 가장 ",
                  x.jsx("span", {
                    id: "hero-heading-key-line",
                    children: "창의적인",
                  }),
                  x.jsx("br", {}),
                  "개발자를 만나보세요.",
                ],
              }),
              x.jsx(fk, {
                children: x.jsx(dk, { id: "hero-text-background" }),
              }),
              x.jsx(pk, { id: "hero-indicator" }),
            ],
          }),
          x.jsx(mk, {
            className: "pixel-perfect",
            children: x.jsxs(gk, {
              children: [
                x.jsx(vk, {
                  children: x.jsxs("p", {
                    children: [
                      "저는 디자인적 완벽을",
                      x.jsx("br", {}),
                      "추구합니다.",
                    ],
                  }),
                }),
                x.jsx(yk, { id: "pixel-grid" }),
              ],
            }),
          }),
          x.jsx(wk, {
            className: "animation",
            children: x.jsxs(xk, {
              children: [
                x.jsx(Sk, {
                  children: x.jsxs(Ek, {
                    className: "wrapper",
                    children: [
                      x.jsxs(ai, {
                        className: "word-wrap",
                        children: [
                          x.jsx("span", {
                            className: "text",
                            children: "새로운 ",
                          }),
                          x.jsx("span", { className: "overlay" }),
                        ],
                      }),
                      x.jsxs(ai, {
                        className: "word-wrap",
                        children: [
                          x.jsx("span", {
                            className: "text",
                            children: "도전도 ",
                          }),
                          x.jsx("span", { className: "overlay" }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsxs(ai, {
                        className: "word-wrap",
                        children: [
                          x.jsx("span", {
                            className: "text",
                            children: "결코 ",
                          }),
                          x.jsx("span", { className: "overlay" }),
                        ],
                      }),
                      x.jsxs(ai, {
                        className: "word-wrap",
                        children: [
                          x.jsx("span", {
                            className: "text",
                            children: "마다하지 ",
                          }),
                          x.jsx("span", { className: "overlay" }),
                        ],
                      }),
                      x.jsxs(ai, {
                        className: "word-wrap",
                        children: [
                          x.jsx("span", {
                            className: "text",
                            children: "않죠.",
                          }),
                          x.jsx("span", { className: "overlay" }),
                        ],
                      }),
                      x.jsx(Tk, {
                        className: "flourish-wrap",
                        children: x.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 50 100",
                          children: x.jsxs("g", {
                            stroke: "#68BDE7",
                            strokeWidth: "8",
                            strokeLinecap: "round",
                            fillRule: "nonzero",
                            children: [
                              x.jsx("path", {
                                className: "short",
                                d: "M4 24L30 8",
                              }),
                              x.jsx("path", {
                                className: "long",
                                d: "M4 50H46",
                              }),
                              x.jsx("path", {
                                className: "short",
                                d: "M4 76L30 92",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                x.jsx(kk, { id: "motion-path" }),
              ],
            }),
          }),
          x.jsx(_k, {
            className: "interactive",
            children: x.jsxs(Pk, {
              children: [
                x.jsx(Ck, {
                  children: x.jsxs("span", {
                    children: [
                      "모두가 즐거워하는",
                      x.jsx("br", {}),
                      "작품을 좋아해요.",
                    ],
                  }),
                }),
                x.jsx(Mk, { id: "interactive-game" }),
              ],
            }),
          }),
          x.jsxs(Rk, {
            className: "photography",
            children: [
              x.jsx(Ik, { className: "photography--background" }),
              x.jsxs(bk, {
                className: "photography--collage",
                children: [
                  x.jsx("img", {
                    src: "seows.blog/img/suo_photo_main.jpeg",
                    alt: "고양이1",
                  }),
                  x.jsx("img", {
                    src: "seows.blog/img/ha_photo_main.jpg",
                    alt: "고양이2",
                  }),
                  x.jsx("img", {
                    src: "seows.blog/img/mak_photo_main.jpeg",
                    alt: "고양이3",
                  }),
                  x.jsx("img", {
                    src: "seows.blog/img/tung_photo_main.jpg",
                    alt: "고양이4",
                  }),
                  x.jsx("img", {
                    src: "seows.blog/img/zizon_photo_main.jpeg",
                    alt: "고양이5",
                  }),
                  x.jsx("img", {
                    src: "seows.blog/img/me.jpeg",
                    alt: "서우석 사진",
                  }),
                ],
              }),
              x.jsx(Ak, {
                children: x.jsxs("span", {
                  children: [
                    "고양이를 사랑하고",
                    x.jsx("br", {}),
                    "행복한 모험을 즐깁니다.",
                  ],
                }),
              }),
            ],
          }),
          x.jsx(Ok, {
            className: "travel",
            children: x.jsxs(Nk, {
              children: [
                x.jsx(zk, {
                  children: x.jsx(jk, {
                    id: "travel-intro",
                    children: "항상 두근거리고 새로운",
                  }),
                }),
                x.jsx(Lk, { id: "adventures-mask" }),
                x.jsx(Fk, { className: "travel--overlay" }),
              ],
            }),
          }),
          x.jsx(Dk, {
            className: "contact",
            children: x.jsx($k, {
              children: x.jsxs(Uk, {
                className: "contact--copy",
                children: [
                  x.jsxs(Bk, {
                    children: [
                      "당신과 함께 이야기",
                      x.jsx("br", {}),
                      "해보고 싶어요.",
                    ],
                  }),
                  x.jsx(Hk, {
                    className: "contact--cta",
                    children: x.jsx("a", {
                      href: "mailto:seows2@naver.com",
                      children: "Say Hello",
                    }),
                  }),
                ],
              }),
            }),
          }),
          x.jsxs(Vk, {
            className: "work",
            children: [
              x.jsx(Wk, {
                children: x.jsx("h2", { children: "최근 작업과 경험들" }),
              }),
              x.jsxs(Yk, {
                children: [
                  x.jsxs($s, {
                    $full: !0,
                    className: "work--item",
                    children: [
                      x.jsx("h3", { children: "Tmaxsoft" }),
                      x.jsx("span", { children: "2021 – Present" }),
                      x.jsx("hr", {}),
                      x.jsx("h4", { children: "Front End Developer" }),
                      x.jsx("p", {
                        children:
                          "디자인 팀과 긴밀하게 협업하며 티맥스 디자인 시스템을 구축하고 있으며 제품 사용자들이 Jeus 및 SuperFrameMaster 제품을 쉽게 사용할 수 있도록 도와주는 어드민 페이지 개발을 맡고 있습니다.",
                      }),
                    ],
                  }),
                  x.jsxs($s, {
                    $green: !0,
                    className: "work--item",
                    children: [
                      x.jsx("div", {
                        children: x.jsx("h3", { children: "My Cat" }),
                      }),
                      x.jsx("span", { children: "2020" }),
                      x.jsx("hr", {}),
                      x.jsx("p", {
                        children:
                          "프론트엔드를 막 공부했을 시절 만들었던 프로젝트입니다. CSS 애니메이션과 자바스크립트를 배우기 위해 진행했었으며 이쁜 코드는 아니지만 FE의 매력을 알게 해준 소중한 작품입니다.",
                      }),
                      x.jsx("a", {
                        href: "https://github.com/seows2/Cat-Fansite",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "View on GitHub",
                      }),
                    ],
                  }),
                  x.jsxs($s, {
                    $blue: !0,
                    className: "work--item",
                    children: [
                      x.jsx("div", {
                        children: x.jsx("h3", { children: "결혼 축하해" }),
                      }),
                      x.jsx("span", { children: "2021" }),
                      x.jsx("hr", {}),
                      x.jsx("p", {
                        children:
                          "결혼 당사자에게 추억을 간직할 수 있도록 만들어 본 결혼 축하 사이트입니다. 직접 디자인도 하면서 짬짬이 만들어 보았으나 바쁜 일정에 쫓겨 전달되지 못했고 붕 떠버린 프로젝트입니다. 언젠가 다시 사용할 일이 있지 않겠냐는 생각과 함께 남겨놓고 있습니다.",
                      }),
                      x.jsx("a", {
                        href: "https://github.com/seows2/for_TaeHee",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "View on GitHub",
                      }),
                    ],
                  }),
                  x.jsxs($s, {
                    $full: !0,
                    $black: !0,
                    className: "work--item",
                    children: [
                      x.jsx("h3", { children: "항상 관심있어하는 분야" }),
                      x.jsx("hr", {}),
                      x.jsxs("div", {
                        children: [
                          x.jsx("span", { children: "Front End Developer" }),
                          x.jsx("span", { children: "UX/UI DESIGN" }),
                          x.jsx("span", { children: "MOBX" }),
                          x.jsx("span", { children: "REACT QUERY" }),
                          x.jsx("span", { children: "TYPE SCRIPT" }),
                          x.jsx("span", { children: "ANIMATION" }),
                          x.jsx("span", { children: "CYPRESS" }),
                          x.jsx("span", { children: "BREAD" }),
                          x.jsx("span", { children: "ICE CREAM" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
function Kk() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(G2, {}),
      x.jsx(vx, {
        children: x.jsxs(Uy, {
          children: [
            x.jsx(fu, { element: x.jsx(hT, {}), path: "/" }),
            x.jsx(fu, { element: x.jsx(qk, {}), path: "/about" }),
          ],
        }),
      }),
    ],
  });
}
const Zk = {
    real_black: "#000",
    real_white: "#FFF",
    gray_black: "#242424",
    black: "#1C1C1C",
    white: "#FFFEF2",
    black_alpha: "rgba(28, 28, 28, 0.95)",
    background: "#C2C0B5",
    medium: "#F6EFE2",
  },
  Jk = () => Zk,
  e3 = () => ({ color: Jk() });
vl.createRoot(document.getElementById("root")).render(
  x.jsx(qw, {
    theme: e3(),
    children: x.jsxs(Gy, {
      basename: "https://seows2.github.io/seows.blog",
      children: [x.jsx(ak, {}), x.jsx(Kk, {})],
    }),
  })
);
