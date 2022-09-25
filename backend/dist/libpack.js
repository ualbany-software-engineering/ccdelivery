/*! For license information please see libpack.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.$ = t())
    : (e.$ = t());
})(self, () =>
  (() => {
    "use strict";
    var e = {
        408: (e, t) => {
          Symbol.for("react.element"),
            Symbol.for("react.portal"),
            Symbol.for("react.fragment"),
            Symbol.for("react.strict_mode"),
            Symbol.for("react.profiler"),
            Symbol.for("react.provider"),
            Symbol.for("react.context"),
            Symbol.for("react.forward_ref"),
            Symbol.for("react.suspense"),
            Symbol.for("react.memo"),
            Symbol.for("react.lazy"),
            Symbol.iterator;
          var r = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            n = Object.assign,
            a = {};
          function i(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = a),
              (this.updater = n || r);
          }
          function s() {}
          function o(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = a),
              (this.updater = n || r);
          }
          (i.prototype.isReactComponent = {}),
            (i.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (i.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (s.prototype = i.prototype);
          var c = (o.prototype = new s());
          (c.constructor = o), n(c, i.prototype), (c.isPureReactComponent = !0);
          Array.isArray, Object.prototype.hasOwnProperty;
          var h = { current: null };
          (t.useEffect = function (e, t) {
            return h.current.useEffect(e, t);
          }),
            (t.useState = function (e) {
              return h.current.useState(e);
            });
        },
        294: (e, t, r) => {
          e.exports = r(408);
        },
      },
      t = {};
    function r(n) {
      var a = t[n];
      if (void 0 !== a) return a.exports;
      var i = (t[n] = { exports: {} });
      return e[n](i, i.exports, r), i.exports;
    }
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        r.r(n), r.d(n, { Login: () => ce, LoginSystem: () => oe });
        var e = r(294);
        const t = function (e) {
            const t = [];
            let r = 0;
            for (let n = 0; n < e.length; n++) {
              let a = e.charCodeAt(n);
              a < 128
                ? (t[r++] = a)
                : a < 2048
                ? ((t[r++] = (a >> 6) | 192), (t[r++] = (63 & a) | 128))
                : 55296 == (64512 & a) &&
                  n + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(n + 1))
                ? ((a =
                    65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++n))),
                  (t[r++] = (a >> 18) | 240),
                  (t[r++] = ((a >> 12) & 63) | 128),
                  (t[r++] = ((a >> 6) & 63) | 128),
                  (t[r++] = (63 & a) | 128))
                : ((t[r++] = (a >> 12) | 224),
                  (t[r++] = ((a >> 6) & 63) | 128),
                  (t[r++] = (63 & a) | 128));
            }
            return t;
          },
          a = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + "+/=";
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + "-_.";
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(e, t) {
              if (!Array.isArray(e))
                throw Error("encodeByteArray takes an array as a parameter");
              this.init_();
              const r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                n = [];
              for (let t = 0; t < e.length; t += 3) {
                const a = e[t],
                  i = t + 1 < e.length,
                  s = i ? e[t + 1] : 0,
                  o = t + 2 < e.length,
                  c = o ? e[t + 2] : 0,
                  h = a >> 2,
                  l = ((3 & a) << 4) | (s >> 4);
                let u = ((15 & s) << 2) | (c >> 6),
                  f = 63 & c;
                o || ((f = 64), i || (u = 64)), n.push(r[h], r[l], r[u], r[f]);
              }
              return n.join("");
            },
            encodeString(e, r) {
              return this.HAS_NATIVE_SUPPORT && !r
                ? btoa(e)
                : this.encodeByteArray(t(e), r);
            },
            decodeString(e, t) {
              return this.HAS_NATIVE_SUPPORT && !t
                ? atob(e)
                : (function (e) {
                    const t = [];
                    let r = 0,
                      n = 0;
                    for (; r < e.length; ) {
                      const a = e[r++];
                      if (a < 128) t[n++] = String.fromCharCode(a);
                      else if (a > 191 && a < 224) {
                        const i = e[r++];
                        t[n++] = String.fromCharCode(
                          ((31 & a) << 6) | (63 & i)
                        );
                      } else if (a > 239 && a < 365) {
                        const i =
                          (((7 & a) << 18) |
                            ((63 & e[r++]) << 12) |
                            ((63 & e[r++]) << 6) |
                            (63 & e[r++])) -
                          65536;
                        (t[n++] = String.fromCharCode(55296 + (i >> 10))),
                          (t[n++] = String.fromCharCode(56320 + (1023 & i)));
                      } else {
                        const i = e[r++],
                          s = e[r++];
                        t[n++] = String.fromCharCode(
                          ((15 & a) << 12) | ((63 & i) << 6) | (63 & s)
                        );
                      }
                    }
                    return t.join("");
                  })(this.decodeStringToByteArray(e, t));
            },
            decodeStringToByteArray(e, t) {
              this.init_();
              const r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                n = [];
              for (let t = 0; t < e.length; ) {
                const a = r[e.charAt(t++)],
                  i = t < e.length ? r[e.charAt(t)] : 0;
                ++t;
                const s = t < e.length ? r[e.charAt(t)] : 64;
                ++t;
                const o = t < e.length ? r[e.charAt(t)] : 64;
                if ((++t, null == a || null == i || null == s || null == o))
                  throw Error();
                const c = (a << 2) | (i >> 4);
                if ((n.push(c), 64 !== s)) {
                  const e = ((i << 4) & 240) | (s >> 2);
                  if ((n.push(e), 64 !== o)) {
                    const e = ((s << 6) & 192) | o;
                    n.push(e);
                  }
                }
              }
              return n;
            },
            init_() {
              if (!this.byteToCharMap_) {
                (this.byteToCharMap_ = {}),
                  (this.charToByteMap_ = {}),
                  (this.byteToCharMapWebSafe_ = {}),
                  (this.charToByteMapWebSafe_ = {});
                for (let e = 0; e < this.ENCODED_VALS.length; e++)
                  (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                    (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                    (this.byteToCharMapWebSafe_[e] =
                      this.ENCODED_VALS_WEBSAFE.charAt(e)),
                    (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                      e),
                    e >= this.ENCODED_VALS_BASE.length &&
                      ((this.charToByteMap_[
                        this.ENCODED_VALS_WEBSAFE.charAt(e)
                      ] = e),
                      (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                        e));
              }
            },
          },
          i = function (e) {
            return (function (e) {
              const r = t(e);
              return a.encodeByteArray(r, !0);
            })(e).replace(/\./g, "");
          };
        class s {
          constructor() {
            (this.reject = () => {}),
              (this.resolve = () => {}),
              (this.promise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          wrapCallback(e) {
            return (t, r) => {
              t ? this.reject(t) : this.resolve(r),
                "function" == typeof e &&
                  (this.promise.catch(() => {}),
                  1 === e.length ? e(t) : e(t, r));
            };
          }
        }
        class o extends Error {
          constructor(e, t, r) {
            super(t),
              (this.code = e),
              (this.customData = r),
              (this.name = "FirebaseError"),
              Object.setPrototypeOf(this, o.prototype),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, c.prototype.create);
          }
        }
        class c {
          constructor(e, t, r) {
            (this.service = e), (this.serviceName = t), (this.errors = r);
          }
          create(e, ...t) {
            const r = t[0] || {},
              n = `${this.service}/${e}`,
              a = this.errors[e],
              i = a
                ? (function (e, t) {
                    return e.replace(h, (e, r) => {
                      const n = t[r];
                      return null != n ? String(n) : `<${r}?>`;
                    });
                  })(a, r)
                : "Error",
              s = `${this.serviceName}: ${i} (${n}).`;
            return new o(n, s, r);
          }
        }
        const h = /\{\$([^}]+)}/g;
        function l(e, t) {
          if (e === t) return !0;
          const r = Object.keys(e),
            n = Object.keys(t);
          for (const a of r) {
            if (!n.includes(a)) return !1;
            const r = e[a],
              i = t[a];
            if (u(r) && u(i)) {
              if (!l(r, i)) return !1;
            } else if (r !== i) return !1;
          }
          for (const e of n) if (!r.includes(e)) return !1;
          return !0;
        }
        function u(e) {
          return null !== e && "object" == typeof e;
        }
        class f {
          constructor(e, t, r) {
            (this.name = e),
              (this.instanceFactory = t),
              (this.type = r),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY"),
              (this.onInstanceCreated = null);
          }
          setInstantiationMode(e) {
            return (this.instantiationMode = e), this;
          }
          setMultipleInstances(e) {
            return (this.multipleInstances = e), this;
          }
          setServiceProps(e) {
            return (this.serviceProps = e), this;
          }
          setInstanceCreatedCallback(e) {
            return (this.onInstanceCreated = e), this;
          }
        }
        const p = "[DEFAULT]";
        class d {
          constructor(e, t) {
            (this.name = e),
              (this.container = t),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map()),
              (this.instancesOptions = new Map()),
              (this.onInitCallbacks = new Map());
          }
          get(e) {
            const t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
              const e = new s();
              if (
                (this.instancesDeferred.set(t, e),
                this.isInitialized(t) || this.shouldAutoInitialize())
              )
                try {
                  const r = this.getOrInitializeService({
                    instanceIdentifier: t,
                  });
                  r && e.resolve(r);
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise;
          }
          getImmediate(e) {
            var t;
            const r = this.normalizeInstanceIdentifier(
                null == e ? void 0 : e.identifier
              ),
              n =
                null !== (t = null == e ? void 0 : e.optional) &&
                void 0 !== t &&
                t;
            if (!this.isInitialized(r) && !this.shouldAutoInitialize()) {
              if (n) return null;
              throw Error(`Service ${this.name} is not available`);
            }
            try {
              return this.getOrInitializeService({ instanceIdentifier: r });
            } catch (e) {
              if (n) return null;
              throw e;
            }
          }
          getComponent() {
            return this.component;
          }
          setComponent(e) {
            if (e.name !== this.name)
              throw Error(
                `Mismatching Component ${e.name} for Provider ${this.name}.`
              );
            if (this.component)
              throw Error(
                `Component for ${this.name} has already been provided`
              );
            if (((this.component = e), this.shouldAutoInitialize())) {
              if (
                (function (e) {
                  return "EAGER" === e.instantiationMode;
                })(e)
              )
                try {
                  this.getOrInitializeService({ instanceIdentifier: p });
                } catch (e) {}
              for (const [e, t] of this.instancesDeferred.entries()) {
                const r = this.normalizeInstanceIdentifier(e);
                try {
                  const e = this.getOrInitializeService({
                    instanceIdentifier: r,
                  });
                  t.resolve(e);
                } catch (e) {}
              }
            }
          }
          clearInstance(e = "[DEFAULT]") {
            this.instancesDeferred.delete(e),
              this.instancesOptions.delete(e),
              this.instances.delete(e);
          }
          async delete() {
            const e = Array.from(this.instances.values());
            await Promise.all([
              ...e
                .filter((e) => "INTERNAL" in e)
                .map((e) => e.INTERNAL.delete()),
              ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
            ]);
          }
          isComponentSet() {
            return null != this.component;
          }
          isInitialized(e = "[DEFAULT]") {
            return this.instances.has(e);
          }
          getOptions(e = "[DEFAULT]") {
            return this.instancesOptions.get(e) || {};
          }
          initialize(e = {}) {
            const { options: t = {} } = e,
              r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(r))
              throw Error(`${this.name}(${r}) has already been initialized`);
            if (!this.isComponentSet())
              throw Error(`Component ${this.name} has not been registered yet`);
            const n = this.getOrInitializeService({
              instanceIdentifier: r,
              options: t,
            });
            for (const [e, t] of this.instancesDeferred.entries())
              r === this.normalizeInstanceIdentifier(e) && t.resolve(n);
            return n;
          }
          onInit(e, t) {
            var r;
            const n = this.normalizeInstanceIdentifier(t),
              a =
                null !== (r = this.onInitCallbacks.get(n)) && void 0 !== r
                  ? r
                  : new Set();
            a.add(e), this.onInitCallbacks.set(n, a);
            const i = this.instances.get(n);
            return (
              i && e(i, n),
              () => {
                a.delete(e);
              }
            );
          }
          invokeOnInitCallbacks(e, t) {
            const r = this.onInitCallbacks.get(t);
            if (r)
              for (const n of r)
                try {
                  n(e, t);
                } catch (e) {}
          }
          getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
            let r = this.instances.get(e);
            if (
              !r &&
              this.component &&
              ((r = this.component.instanceFactory(this.container, {
                instanceIdentifier: ((n = e), n === p ? void 0 : n),
                options: t,
              })),
              this.instances.set(e, r),
              this.instancesOptions.set(e, t),
              this.invokeOnInitCallbacks(r, e),
              this.component.onInstanceCreated)
            )
              try {
                this.component.onInstanceCreated(this.container, e, r);
              } catch (e) {}
            var n;
            return r || null;
          }
          normalizeInstanceIdentifier(e = "[DEFAULT]") {
            return this.component
              ? this.component.multipleInstances
                ? e
                : p
              : e;
          }
          shouldAutoInitialize() {
            return (
              !!this.component &&
              "EXPLICIT" !== this.component.instantiationMode
            );
          }
        }
        class m {
          constructor(e) {
            (this.name = e), (this.providers = new Map());
          }
          addComponent(e) {
            const t = this.getProvider(e.name);
            if (t.isComponentSet())
              throw new Error(
                `Component ${e.name} has already been registered with ${this.name}`
              );
            t.setComponent(e);
          }
          addOrOverwriteComponent(e) {
            this.getProvider(e.name).isComponentSet() &&
              this.providers.delete(e.name),
              this.addComponent(e);
          }
          getProvider(e) {
            if (this.providers.has(e)) return this.providers.get(e);
            const t = new d(e, this);
            return this.providers.set(e, t), t;
          }
          getProviders() {
            return Array.from(this.providers.values());
          }
        }
        const g = [];
        var b;
        !(function (e) {
          (e[(e.DEBUG = 0)] = "DEBUG"),
            (e[(e.VERBOSE = 1)] = "VERBOSE"),
            (e[(e.INFO = 2)] = "INFO"),
            (e[(e.WARN = 3)] = "WARN"),
            (e[(e.ERROR = 4)] = "ERROR"),
            (e[(e.SILENT = 5)] = "SILENT");
        })(b || (b = {}));
        const y = {
            debug: b.DEBUG,
            verbose: b.VERBOSE,
            info: b.INFO,
            warn: b.WARN,
            error: b.ERROR,
            silent: b.SILENT,
          },
          v = b.INFO,
          S = {
            [b.DEBUG]: "log",
            [b.VERBOSE]: "log",
            [b.INFO]: "info",
            [b.WARN]: "warn",
            [b.ERROR]: "error",
          },
          E = (e, t, ...r) => {
            if (t < e.logLevel) return;
            const n = new Date().toISOString(),
              a = S[t];
            if (!a)
              throw new Error(
                `Attempted to log a message with an invalid logType (value: ${t})`
              );
            console[a](`[${n}]  ${e.name}:`, ...r);
          };
        let I, _;
        const w = new WeakMap(),
          D = new WeakMap(),
          C = new WeakMap(),
          A = new WeakMap(),
          O = new WeakMap();
        let B = {
          get(e, t, r) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return D.get(e);
              if ("objectStoreNames" === t)
                return e.objectStoreNames || C.get(e);
              if ("store" === t)
                return r.objectStoreNames[1]
                  ? void 0
                  : r.objectStore(r.objectStoreNames[0]);
            }
            return T(e[t]);
          },
          set: (e, t, r) => ((e[t] = r), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
        function L(e) {
          return "function" == typeof e
            ? (t = e) !== IDBDatabase.prototype.transaction ||
              "objectStoreNames" in IDBTransaction.prototype
              ? (
                  _ ||
                  (_ = [
                    IDBCursor.prototype.advance,
                    IDBCursor.prototype.continue,
                    IDBCursor.prototype.continuePrimaryKey,
                  ])
                ).includes(t)
                ? function (...e) {
                    return t.apply(N(this), e), T(w.get(this));
                  }
                : function (...e) {
                    return T(t.apply(N(this), e));
                  }
              : function (e, ...r) {
                  const n = t.call(N(this), e, ...r);
                  return C.set(n, e.sort ? e.sort() : [e]), T(n);
                }
            : (e instanceof IDBTransaction &&
                (function (e) {
                  if (D.has(e)) return;
                  const t = new Promise((t, r) => {
                    const n = () => {
                        e.removeEventListener("complete", a),
                          e.removeEventListener("error", i),
                          e.removeEventListener("abort", i);
                      },
                      a = () => {
                        t(), n();
                      },
                      i = () => {
                        r(
                          e.error ||
                            new DOMException("AbortError", "AbortError")
                        ),
                          n();
                      };
                    e.addEventListener("complete", a),
                      e.addEventListener("error", i),
                      e.addEventListener("abort", i);
                  });
                  D.set(e, t);
                })(e),
              (r = e),
              (
                I ||
                (I = [
                  IDBDatabase,
                  IDBObjectStore,
                  IDBIndex,
                  IDBCursor,
                  IDBTransaction,
                ])
              ).some((e) => r instanceof e)
                ? new Proxy(e, B)
                : e);
          var t, r;
        }
        function T(e) {
          if (e instanceof IDBRequest)
            return (function (e) {
              const t = new Promise((t, r) => {
                const n = () => {
                    e.removeEventListener("success", a),
                      e.removeEventListener("error", i);
                  },
                  a = () => {
                    t(T(e.result)), n();
                  },
                  i = () => {
                    r(e.error), n();
                  };
                e.addEventListener("success", a),
                  e.addEventListener("error", i);
              });
              return (
                t
                  .then((t) => {
                    t instanceof IDBCursor && w.set(t, e);
                  })
                  .catch(() => {}),
                O.set(t, e),
                t
              );
            })(e);
          if (A.has(e)) return A.get(e);
          const t = L(e);
          return t !== e && (A.set(e, t), O.set(t, e)), t;
        }
        const N = (e) => O.get(e),
          M = ["get", "getKey", "getAll", "getAllKeys", "count"],
          j = ["put", "add", "delete", "clear"],
          P = new Map();
        function $(e, t) {
          if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
            return;
          if (P.get(t)) return P.get(t);
          const r = t.replace(/FromIndex$/, ""),
            n = t !== r,
            a = j.includes(r);
          if (
            !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
            (!a && !M.includes(r))
          )
            return;
          const i = async function (e, ...t) {
            const i = this.transaction(e, a ? "readwrite" : "readonly");
            let s = i.store;
            return (
              n && (s = s.index(t.shift())),
              (await Promise.all([s[r](...t), a && i.done]))[0]
            );
          };
          return P.set(t, i), i;
        }
        var R;
        (R = B),
          (B = {
            ...R,
            get: (e, t, r) => $(e, t) || R.get(e, t, r),
            has: (e, t) => !!$(e, t) || R.has(e, t),
          });
        class k {
          constructor(e) {
            this.container = e;
          }
          getPlatformInfoString() {
            return this.container
              .getProviders()
              .map((e) => {
                if (
                  (function (e) {
                    const t = e.getComponent();
                    return "VERSION" === (null == t ? void 0 : t.type);
                  })(e)
                ) {
                  const t = e.getImmediate();
                  return `${t.library}/${t.version}`;
                }
                return null;
              })
              .filter((e) => e)
              .join(" ");
          }
        }
        const H = "@firebase/app",
          x = "0.7.33",
          F = new (class {
            constructor(e) {
              (this.name = e),
                (this._logLevel = v),
                (this._logHandler = E),
                (this._userLogHandler = null),
                g.push(this);
            }
            get logLevel() {
              return this._logLevel;
            }
            set logLevel(e) {
              if (!(e in b))
                throw new TypeError(
                  `Invalid value "${e}" assigned to \`logLevel\``
                );
              this._logLevel = e;
            }
            setLogLevel(e) {
              this._logLevel = "string" == typeof e ? y[e] : e;
            }
            get logHandler() {
              return this._logHandler;
            }
            set logHandler(e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = e;
            }
            get userLogHandler() {
              return this._userLogHandler;
            }
            set userLogHandler(e) {
              this._userLogHandler = e;
            }
            debug(...e) {
              this._userLogHandler && this._userLogHandler(this, b.DEBUG, ...e),
                this._logHandler(this, b.DEBUG, ...e);
            }
            log(...e) {
              this._userLogHandler &&
                this._userLogHandler(this, b.VERBOSE, ...e),
                this._logHandler(this, b.VERBOSE, ...e);
            }
            info(...e) {
              this._userLogHandler && this._userLogHandler(this, b.INFO, ...e),
                this._logHandler(this, b.INFO, ...e);
            }
            warn(...e) {
              this._userLogHandler && this._userLogHandler(this, b.WARN, ...e),
                this._logHandler(this, b.WARN, ...e);
            }
            error(...e) {
              this._userLogHandler && this._userLogHandler(this, b.ERROR, ...e),
                this._logHandler(this, b.ERROR, ...e);
            }
          })("@firebase/app"),
          V = {
            [H]: "fire-core",
            "@firebase/app-compat": "fire-core-compat",
            "@firebase/analytics": "fire-analytics",
            "@firebase/analytics-compat": "fire-analytics-compat",
            "@firebase/app-check": "fire-app-check",
            "@firebase/app-check-compat": "fire-app-check-compat",
            "@firebase/auth": "fire-auth",
            "@firebase/auth-compat": "fire-auth-compat",
            "@firebase/database": "fire-rtdb",
            "@firebase/database-compat": "fire-rtdb-compat",
            "@firebase/functions": "fire-fn",
            "@firebase/functions-compat": "fire-fn-compat",
            "@firebase/installations": "fire-iid",
            "@firebase/installations-compat": "fire-iid-compat",
            "@firebase/messaging": "fire-fcm",
            "@firebase/messaging-compat": "fire-fcm-compat",
            "@firebase/performance": "fire-perf",
            "@firebase/performance-compat": "fire-perf-compat",
            "@firebase/remote-config": "fire-rc",
            "@firebase/remote-config-compat": "fire-rc-compat",
            "@firebase/storage": "fire-gcs",
            "@firebase/storage-compat": "fire-gcs-compat",
            "@firebase/firestore": "fire-fst",
            "@firebase/firestore-compat": "fire-fst-compat",
            "fire-js": "fire-js",
            firebase: "fire-js-all",
          },
          z = new Map(),
          U = new Map();
        function W(e, t) {
          try {
            e.container.addComponent(t);
          } catch (r) {
            F.debug(
              `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
              r
            );
          }
        }
        function K(e) {
          const t = e.name;
          if (U.has(t))
            return (
              F.debug(
                `There were multiple attempts to register component ${t}.`
              ),
              !1
            );
          U.set(t, e);
          for (const t of z.values()) W(t, e);
          return !0;
        }
        const G = new c("app", "Firebase", {
          "no-app":
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
          "bad-app-name": "Illegal App name: '{$appName}",
          "duplicate-app":
            "Firebase App named '{$appName}' already exists with different options or config",
          "app-deleted": "Firebase App named '{$appName}' already deleted",
          "invalid-app-argument":
            "firebase.{$appName}() takes either no argument or a Firebase App instance.",
          "invalid-log-argument":
            "First argument to `onLog` must be null or a function.",
          "idb-open":
            "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
          "idb-get":
            "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
          "idb-set":
            "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
          "idb-delete":
            "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        });
        class q {
          constructor(e, t, r) {
            (this._isDeleted = !1),
              (this._options = Object.assign({}, e)),
              (this._config = Object.assign({}, t)),
              (this._name = t.name),
              (this._automaticDataCollectionEnabled =
                t.automaticDataCollectionEnabled),
              (this._container = r),
              this.container.addComponent(new f("app", () => this, "PUBLIC"));
          }
          get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled;
          }
          set automaticDataCollectionEnabled(e) {
            this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
          }
          get name() {
            return this.checkDestroyed(), this._name;
          }
          get options() {
            return this.checkDestroyed(), this._options;
          }
          get config() {
            return this.checkDestroyed(), this._config;
          }
          get container() {
            return this._container;
          }
          get isDeleted() {
            return this._isDeleted;
          }
          set isDeleted(e) {
            this._isDeleted = e;
          }
          checkDestroyed() {
            if (this.isDeleted)
              throw G.create("app-deleted", { appName: this._name });
          }
        }
        function J(e, t, r) {
          var n;
          let a = null !== (n = V[e]) && void 0 !== n ? n : e;
          r && (a += `-${r}`);
          const i = a.match(/\s|\//),
            s = t.match(/\s|\//);
          if (i || s) {
            const e = [
              `Unable to register library "${a}" with version "${t}":`,
            ];
            return (
              i &&
                e.push(
                  `library name "${a}" contains illegal characters (whitespace or "/")`
                ),
              i && s && e.push("and"),
              s &&
                e.push(
                  `version name "${t}" contains illegal characters (whitespace or "/")`
                ),
              void F.warn(e.join(" "))
            );
          }
          K(
            new f(`${a}-version`, () => ({ library: a, version: t }), "VERSION")
          );
        }
        const Y = "firebase-heartbeat-store";
        let Q = null;
        function X() {
          return (
            Q ||
              (Q = (function (
                e,
                t,
                { blocked: r, upgrade: n, blocking: a, terminated: i } = {}
              ) {
                const s = indexedDB.open(e, t),
                  o = T(s);
                return (
                  n &&
                    s.addEventListener("upgradeneeded", (e) => {
                      n(
                        T(s.result),
                        e.oldVersion,
                        e.newVersion,
                        T(s.transaction)
                      );
                    }),
                  r && s.addEventListener("blocked", () => r()),
                  o
                    .then((e) => {
                      i && e.addEventListener("close", () => i()),
                        a && e.addEventListener("versionchange", () => a());
                    })
                    .catch(() => {}),
                  o
                );
              })("firebase-heartbeat-database", 1, {
                upgrade: (e, t) => {
                  0 === t && e.createObjectStore(Y);
                },
              }).catch((e) => {
                throw G.create("idb-open", { originalErrorMessage: e.message });
              })),
            Q
          );
        }
        async function Z(e, t) {
          var r;
          try {
            const r = (await X()).transaction(Y, "readwrite"),
              n = r.objectStore(Y);
            return await n.put(t, ee(e)), r.done;
          } catch (e) {
            if (e instanceof o) F.warn(e.message);
            else {
              const t = G.create("idb-set", {
                originalErrorMessage:
                  null === (r = e) || void 0 === r ? void 0 : r.message,
              });
              F.warn(t.message);
            }
          }
        }
        function ee(e) {
          return `${e.name}!${e.options.appId}`;
        }
        class te {
          constructor(e) {
            (this.container = e), (this._heartbeatsCache = null);
            const t = this.container.getProvider("app").getImmediate();
            (this._storage = new ne(t)),
              (this._heartbeatsCachePromise = this._storage
                .read()
                .then((e) => ((this._heartbeatsCache = e), e)));
          }
          async triggerHeartbeat() {
            const e = this.container
                .getProvider("platform-logger")
                .getImmediate()
                .getPlatformInfoString(),
              t = re();
            if (
              (null === this._heartbeatsCache &&
                (this._heartbeatsCache = await this._heartbeatsCachePromise),
              this._heartbeatsCache.lastSentHeartbeatDate !== t &&
                !this._heartbeatsCache.heartbeats.some((e) => e.date === t))
            )
              return (
                this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
                (this._heartbeatsCache.heartbeats =
                  this._heartbeatsCache.heartbeats.filter((e) => {
                    const t = new Date(e.date).valueOf();
                    return Date.now() - t <= 2592e6;
                  })),
                this._storage.overwrite(this._heartbeatsCache)
              );
          }
          async getHeartbeatsHeader() {
            if (
              (null === this._heartbeatsCache &&
                (await this._heartbeatsCachePromise),
              null === this._heartbeatsCache ||
                0 === this._heartbeatsCache.heartbeats.length)
            )
              return "";
            const e = re(),
              { heartbeatsToSend: t, unsentEntries: r } = (function (
                e,
                t = 1024
              ) {
                const r = [];
                let n = e.slice();
                for (const a of e) {
                  const e = r.find((e) => e.agent === a.agent);
                  if (e) {
                    if ((e.dates.push(a.date), ae(r) > t)) {
                      e.dates.pop();
                      break;
                    }
                  } else if (
                    (r.push({ agent: a.agent, dates: [a.date] }), ae(r) > t)
                  ) {
                    r.pop();
                    break;
                  }
                  n = n.slice(1);
                }
                return { heartbeatsToSend: r, unsentEntries: n };
              })(this._heartbeatsCache.heartbeats),
              n = i(JSON.stringify({ version: 2, heartbeats: t }));
            return (
              (this._heartbeatsCache.lastSentHeartbeatDate = e),
              r.length > 0
                ? ((this._heartbeatsCache.heartbeats = r),
                  await this._storage.overwrite(this._heartbeatsCache))
                : ((this._heartbeatsCache.heartbeats = []),
                  this._storage.overwrite(this._heartbeatsCache)),
              n
            );
          }
        }
        function re() {
          return new Date().toISOString().substring(0, 10);
        }
        class ne {
          constructor(e) {
            (this.app = e),
              (this._canUseIndexedDBPromise =
                this.runIndexedDBEnvironmentCheck());
          }
          async runIndexedDBEnvironmentCheck() {
            return (
              "object" == typeof indexedDB &&
              new Promise((e, t) => {
                try {
                  let r = !0;
                  const n =
                      "validate-browser-context-for-indexeddb-analytics-module",
                    a = self.indexedDB.open(n);
                  (a.onsuccess = () => {
                    a.result.close(),
                      r || self.indexedDB.deleteDatabase(n),
                      e(!0);
                  }),
                    (a.onupgradeneeded = () => {
                      r = !1;
                    }),
                    (a.onerror = () => {
                      var e;
                      t(
                        (null === (e = a.error) || void 0 === e
                          ? void 0
                          : e.message) || ""
                      );
                    });
                } catch (e) {
                  t(e);
                }
              })
                .then(() => !0)
                .catch(() => !1)
            );
          }
          async read() {
            if (await this._canUseIndexedDBPromise) {
              return (
                (await (async function (e) {
                  var t;
                  try {
                    return (await X()).transaction(Y).objectStore(Y).get(ee(e));
                  } catch (e) {
                    if (e instanceof o) F.warn(e.message);
                    else {
                      const r = G.create("idb-get", {
                        originalErrorMessage:
                          null === (t = e) || void 0 === t ? void 0 : t.message,
                      });
                      F.warn(r.message);
                    }
                  }
                })(this.app)) || { heartbeats: [] }
              );
            }
            return { heartbeats: [] };
          }
          async overwrite(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
              const r = await this.read();
              return Z(this.app, {
                lastSentHeartbeatDate:
                  null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                    ? t
                    : r.lastSentHeartbeatDate,
                heartbeats: e.heartbeats,
              });
            }
          }
          async add(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
              const r = await this.read();
              return Z(this.app, {
                lastSentHeartbeatDate:
                  null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                    ? t
                    : r.lastSentHeartbeatDate,
                heartbeats: [...r.heartbeats, ...e.heartbeats],
              });
            }
          }
        }
        function ae(e) {
          return i(JSON.stringify({ version: 2, heartbeats: e })).length;
        }
        function ie(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  a,
                  i = [],
                  s = !0,
                  o = !1;
                try {
                  for (
                    r = r.call(e);
                    !(s = (n = r.next()).done) &&
                    (i.push(n.value), !t || i.length !== t);
                    s = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    s || null == r.return || r.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return se(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? se(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function se(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oe() {
          var t = ie((0, e.useState)(""), 2),
            r = (t[0], t[1], ie((0, e.useState)(""), 2)),
            n = (r[0], r[1], ie((0, e.useState)(""), 2)),
            a = (n[0], n[1], ie((0, e.useState)(""), 2)),
            i = (a[0], a[1], ie((0, e.useState)(""), 2)),
            s = (i[0], i[1], ie((0, e.useState)(!1), 2));
          s[0], s[1], (0, e.useEffect)(function () {}, []);
        }
        function ce() {
          oe().Login();
        }
        K(new f("platform-logger", (e) => new k(e), "PRIVATE")),
          K(new f("heartbeat", (e) => new te(e), "PRIVATE")),
          J(H, x, ""),
          J(H, x, "esm2017"),
          J("fire-js", ""),
          J("firebase", "9.10.0", "app"),
          (function (e, t = {}) {
            "object" != typeof t && (t = { name: t });
            const r = Object.assign(
                { name: "[DEFAULT]", automaticDataCollectionEnabled: !1 },
                t
              ),
              n = r.name;
            if ("string" != typeof n || !n)
              throw G.create("bad-app-name", { appName: String(n) });
            const a = z.get(n);
            if (a) {
              if (l(e, a.options) && l(r, a.config)) return a;
              throw G.create("duplicate-app", { appName: n });
            }
            const i = new m(n);
            for (const e of U.values()) i.addComponent(e);
            const s = new q(e, r, i);
            z.set(n, s);
          })({
            apiKey: "AIzaSyAYKCEONKIMkzTxjnfweV3_AKsKsu55pjQ",
            authDomain: "ccdelivery-c95e9.firebaseapp.com",
            projectId: "ccdelivery-c95e9",
            storageBucket: "ccdelivery-c95e9.appspot.com",
            messagingSenderId: "612767739408",
            appId: "1:612767739408:web:a39742140acd3efb212495",
          });
      })(),
      n
    );
  })()
);