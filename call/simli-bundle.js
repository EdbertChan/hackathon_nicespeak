var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/livekit-client/dist/livekit-client.umd.js
var require_livekit_client_umd = __commonJS((exports, module) => {
  (function(e, t) {
    typeof exports == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis != "undefined" ? globalThis : e || self).LivekitClient = {});
  })(exports, function(e) {
    function t(e2, t2) {
      return t2.forEach(function(t3) {
        t3 && typeof t3 != "string" && !Array.isArray(t3) && Object.keys(t3).forEach(function(n2) {
          if (n2 !== "default" && !(n2 in e2)) {
            var i2 = Object.getOwnPropertyDescriptor(t3, n2);
            Object.defineProperty(e2, n2, i2.get ? i2 : { enumerable: true, get: function() {
              return t3[n2];
            } });
          }
        });
      }), Object.freeze(e2);
    }
    var n = Object.defineProperty, i = (e2, t2, i2) => ((e3, t3, i3) => (t3 in e3) ? n(e3, t3, { enumerable: true, configurable: true, writable: true, value: i3 }) : e3[t3] = i3)(e2, typeof t2 != "symbol" ? t2 + "" : t2, i2);

    class r {
      constructor() {
        i(this, "_locking"), i(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0;
      }
      isLocked() {
        return this._locks > 0;
      }
      lock() {
        let e2;
        this._locks += 1;
        const t2 = new Promise((t3) => e2 = () => {
          this._locks -= 1, t3();
        }), n2 = this._locking.then(() => e2);
        return this._locking = this._locking.then(() => t2), n2;
      }
    }
    function a(e2, t2) {
      if (!e2)
        throw new Error(t2);
    }
    function s(e2) {
      if (typeof e2 != "number")
        throw new Error("invalid int 32: " + typeof e2);
      if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648)
        throw new Error("invalid int 32: " + e2);
    }
    function o(e2) {
      if (typeof e2 != "number")
        throw new Error("invalid uint 32: " + typeof e2);
      if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0)
        throw new Error("invalid uint 32: " + e2);
    }
    function c(e2) {
      if (typeof e2 != "number")
        throw new Error("invalid float 32: " + typeof e2);
      if (Number.isFinite(e2) && (e2 > 340282346638528860000000000000000000000 || e2 < -340282346638528860000000000000000000000))
        throw new Error("invalid float 32: " + e2);
    }
    const d = Symbol("@bufbuild/protobuf/enum-type");
    function l(e2) {
      const t2 = e2[d];
      return a(t2, "missing enum type on enum object"), t2;
    }
    function u(e2, t2, n2, i2) {
      e2[d] = h(t2, n2.map((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] })));
    }
    function h(e2, t2, n2) {
      const i2 = Object.create(null), r2 = Object.create(null), a2 = [];
      for (const s2 of t2) {
        const e3 = m(s2);
        a2.push(e3), i2[s2.name] = e3, r2[s2.no] = e3;
      }
      return { typeName: e2, values: a2, findName: (e3) => i2[e3], findNumber: (e3) => r2[e3] };
    }
    function p(e2, t2, n2) {
      const i2 = {};
      for (const r2 of t2) {
        const e3 = m(r2);
        i2[e3.localName] = e3.no, i2[e3.no] = e3.localName;
      }
      return u(i2, e2, t2), i2;
    }
    function m(e2) {
      return "localName" in e2 ? e2 : Object.assign(Object.assign({}, e2), { localName: e2.name });
    }

    class g {
      equals(e2) {
        return this.getType().runtime.util.equals(this.getType(), this, e2);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e2, t2) {
        const n2 = this.getType().runtime.bin, i2 = n2.makeReadOptions(t2);
        return n2.readMessage(this, i2.readerFactory(e2), e2.byteLength, i2), this;
      }
      fromJson(e2, t2) {
        const n2 = this.getType(), i2 = n2.runtime.json, r2 = i2.makeReadOptions(t2);
        return i2.readMessage(n2, e2, r2, this), this;
      }
      fromJsonString(e2, t2) {
        let i2;
        try {
          i2 = JSON.parse(e2);
        } catch (n2) {
          throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(n2 instanceof Error ? n2.message : String(n2)));
        }
        return this.fromJson(i2, t2);
      }
      toBinary(e2) {
        const t2 = this.getType().runtime.bin, n2 = t2.makeWriteOptions(e2), i2 = n2.writerFactory();
        return t2.writeMessage(this, i2, n2), i2.finish();
      }
      toJson(e2) {
        const t2 = this.getType().runtime.json, n2 = t2.makeWriteOptions(e2);
        return t2.writeMessage(this, n2);
      }
      toJsonString(e2) {
        var t2;
        const n2 = this.toJson(e2);
        return JSON.stringify(n2, null, (t2 = e2 == null ? undefined : e2.prettySpaces) !== null && t2 !== undefined ? t2 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    }
    function v() {
      let e2 = 0, t2 = 0;
      for (let i2 = 0;i2 < 28; i2 += 7) {
        let n3 = this.buf[this.pos++];
        if (e2 |= (127 & n3) << i2, !(128 & n3))
          return this.assertBounds(), [e2, t2];
      }
      let n2 = this.buf[this.pos++];
      if (e2 |= (15 & n2) << 28, t2 = (112 & n2) >> 4, !(128 & n2))
        return this.assertBounds(), [e2, t2];
      for (let i2 = 3;i2 <= 31; i2 += 7) {
        let n3 = this.buf[this.pos++];
        if (t2 |= (127 & n3) << i2, !(128 & n3))
          return this.assertBounds(), [e2, t2];
      }
      throw new Error("invalid varint");
    }
    function f(e2, t2, n2) {
      for (let a2 = 0;a2 < 28; a2 += 7) {
        const i3 = e2 >>> a2, r3 = !(i3 >>> 7 == 0 && t2 == 0), s2 = 255 & (r3 ? 128 | i3 : i3);
        if (n2.push(s2), !r3)
          return;
      }
      const i2 = e2 >>> 28 & 15 | (7 & t2) << 4, r2 = !!(t2 >> 3);
      if (n2.push(255 & (r2 ? 128 | i2 : i2)), r2) {
        for (let e3 = 3;e3 < 31; e3 += 7) {
          const i3 = t2 >>> e3, r3 = !(i3 >>> 7 == 0), a2 = 255 & (r3 ? 128 | i3 : i3);
          if (n2.push(a2), !r3)
            return;
        }
        n2.push(t2 >>> 31 & 1);
      }
    }
    const k = 4294967296;
    function y(e2) {
      const t2 = e2[0] === "-";
      t2 && (e2 = e2.slice(1));
      const n2 = 1e6;
      let i2 = 0, r2 = 0;
      function a2(t3, a3) {
        const s2 = Number(e2.slice(t3, a3));
        r2 *= n2, i2 = i2 * n2 + s2, i2 >= k && (r2 += i2 / k | 0, i2 %= k);
      }
      return a2(-24, -18), a2(-18, -12), a2(-12, -6), a2(-6), t2 ? S(i2, r2) : T(i2, r2);
    }
    function b(e2, t2) {
      var n2 = function(e3, t3) {
        return { lo: e3 >>> 0, hi: t3 >>> 0 };
      }(e2, t2);
      if (e2 = n2.lo, (t2 = n2.hi) <= 2097151)
        return String(k * t2 + e2);
      const i2 = 16777215 & (e2 >>> 24 | t2 << 8), r2 = t2 >> 16 & 65535;
      let a2 = (16777215 & e2) + 6777216 * i2 + 6710656 * r2, s2 = i2 + 8147497 * r2, o2 = 2 * r2;
      const c2 = 1e7;
      return a2 >= c2 && (s2 += Math.floor(a2 / c2), a2 %= c2), s2 >= c2 && (o2 += Math.floor(s2 / c2), s2 %= c2), o2.toString() + E(s2) + E(a2);
    }
    function T(e2, t2) {
      return { lo: 0 | e2, hi: 0 | t2 };
    }
    function S(e2, t2) {
      return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, T(e2, t2);
    }
    const E = (e2) => {
      const t2 = String(e2);
      return "0000000".slice(t2.length) + t2;
    };
    function C(e2, t2) {
      if (e2 >= 0) {
        for (;e2 > 127; )
          t2.push(127 & e2 | 128), e2 >>>= 7;
        t2.push(e2);
      } else {
        for (let n2 = 0;n2 < 9; n2++)
          t2.push(127 & e2 | 128), e2 >>= 7;
        t2.push(1);
      }
    }
    function w() {
      let e2 = this.buf[this.pos++], t2 = 127 & e2;
      if (!(128 & e2))
        return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, !(128 & e2))
        return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, !(128 & e2))
        return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, !(128 & e2))
        return this.assertBounds(), t2;
      e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
      for (let n2 = 5;128 & e2 && n2 < 10; n2++)
        e2 = this.buf[this.pos++];
      if (128 & e2)
        throw new Error("invalid varint");
      return this.assertBounds(), t2 >>> 0;
    }
    const R = function() {
      const e2 = new DataView(new ArrayBuffer(8));
      if (typeof BigInt == "function" && typeof e2.getBigInt64 == "function" && typeof e2.getBigUint64 == "function" && typeof e2.setBigInt64 == "function" && typeof e2.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        const t3 = BigInt("-9223372036854775808"), n3 = BigInt("9223372036854775807"), i2 = BigInt("0"), r2 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e3) {
          const i3 = typeof e3 == "bigint" ? e3 : BigInt(e3);
          if (i3 > n3 || i3 < t3)
            throw new Error("int64 invalid: ".concat(e3));
          return i3;
        }, uParse(e3) {
          const t4 = typeof e3 == "bigint" ? e3 : BigInt(e3);
          if (t4 > r2 || t4 < i2)
            throw new Error("uint64 invalid: ".concat(e3));
          return t4;
        }, enc(t4) {
          return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
        }, uEnc(t4) {
          return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
        }, dec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigInt64(0, true)), uDec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigUint64(0, true)) };
      }
      const t2 = (e3) => a(/^-?[0-9]+$/.test(e3), "int64 invalid: ".concat(e3)), n2 = (e3) => a(/^[0-9]+$/.test(e3), "uint64 invalid: ".concat(e3));
      return { zero: "0", supported: false, parse: (e3) => (typeof e3 != "string" && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => (typeof e3 != "string" && (e3 = e3.toString()), n2(e3), e3), enc: (e3) => (typeof e3 != "string" && (e3 = e3.toString()), t2(e3), y(e3)), uEnc: (e3) => (typeof e3 != "string" && (e3 = e3.toString()), n2(e3), y(e3)), dec: (e3, t3) => function(e4, t4) {
        let n3 = T(e4, t4);
        const i2 = 2147483648 & n3.hi;
        i2 && (n3 = S(n3.lo, n3.hi));
        const r2 = b(n3.lo, n3.hi);
        return i2 ? "-" + r2 : r2;
      }(e3, t3), uDec: (e3, t3) => b(e3, t3) };
    }();
    var P, I, _;
    function M(e2, t2, n2) {
      if (t2 === n2)
        return true;
      if (e2 == P.BYTES) {
        if (!(t2 instanceof Uint8Array && n2 instanceof Uint8Array))
          return false;
        if (t2.length !== n2.length)
          return false;
        for (let e3 = 0;e3 < t2.length; e3++)
          if (t2[e3] !== n2[e3])
            return false;
        return true;
      }
      switch (e2) {
        case P.UINT64:
        case P.FIXED64:
        case P.INT64:
        case P.SFIXED64:
        case P.SINT64:
          return t2 == n2;
      }
      return false;
    }
    function D(e2, t2) {
      switch (e2) {
        case P.BOOL:
          return false;
        case P.UINT64:
        case P.FIXED64:
        case P.INT64:
        case P.SFIXED64:
        case P.SINT64:
          return t2 == 0 ? R.zero : "0";
        case P.DOUBLE:
        case P.FLOAT:
          return 0;
        case P.BYTES:
          return new Uint8Array(0);
        case P.STRING:
          return "";
        default:
          return 0;
      }
    }
    function O(e2, t2) {
      switch (e2) {
        case P.BOOL:
          return t2 === false;
        case P.STRING:
          return t2 === "";
        case P.BYTES:
          return t2 instanceof Uint8Array && !t2.byteLength;
        default:
          return t2 == 0;
      }
    }
    function A(e2, t2) {
      (t2 == null || t2 > e2.length) && (t2 = e2.length);
      for (var n2 = 0, i2 = Array(t2);n2 < t2; n2++)
        i2[n2] = e2[n2];
      return i2;
    }
    function N(e2, t2, n2) {
      return (t2 = function(e3) {
        var t3 = function(e4, t4) {
          if (typeof e4 != "object" || !e4)
            return e4;
          var n3 = e4[Symbol.toPrimitive];
          if (n3 !== undefined) {
            var i2 = n3.call(e4, t4);
            if (typeof i2 != "object")
              return i2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t4 === "string" ? String : Number)(e4);
        }(e3, "string");
        return typeof t3 == "symbol" ? t3 : t3 + "";
      }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    function L(e2, t2) {
      return function(e3) {
        if (Array.isArray(e3))
          return e3;
      }(e2) || function(e3, t3) {
        var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
        if (n2 != null) {
          var i2, r2, a2, s2, o2 = [], c2 = true, d2 = false;
          try {
            if (a2 = (n2 = n2.call(e3)).next, t3 === 0) {
              if (Object(n2) !== n2)
                return;
              c2 = false;
            } else
              for (;!(c2 = (i2 = a2.call(n2)).done) && (o2.push(i2.value), o2.length !== t3); c2 = true)
                ;
          } catch (e4) {
            d2 = true, r2 = e4;
          } finally {
            try {
              if (!c2 && n2.return != null && (s2 = n2.return(), Object(s2) !== s2))
                return;
            } finally {
              if (d2)
                throw r2;
            }
          }
          return o2;
        }
      }(e2, t2) || function(e3, t3) {
        if (e3) {
          if (typeof e3 == "string")
            return A(e3, t3);
          var n2 = {}.toString.call(e3).slice(8, -1);
          return n2 === "Object" && e3.constructor && (n2 = e3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? A(e3, t3) : undefined;
        }
      }(e2, t2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    (function(e2) {
      e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64";
    })(P || (P = {})), function(e2) {
      e2[e2.BIGINT = 0] = "BIGINT", e2[e2.STRING = 1] = "STRING";
    }(I || (I = {})), function(e2) {
      e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32";
    }(_ || (_ = {}));

    class x {
      constructor(e2) {
        this.stack = [], this.textEncoder = e2 != null ? e2 : new TextEncoder, this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e2 = 0;
        for (let i2 = 0;i2 < this.chunks.length; i2++)
          e2 += this.chunks[i2].length;
        let t2 = new Uint8Array(e2), n2 = 0;
        for (let i2 = 0;i2 < this.chunks.length; i2++)
          t2.set(this.chunks[i2], n2), n2 += this.chunks[i2].length;
        return this.chunks = [], t2;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e2 = this.finish(), t2 = this.stack.pop();
        if (!t2)
          throw new Error("invalid state, fork stack empty");
        return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
      }
      tag(e2, t2) {
        return this.uint32((e2 << 3 | t2) >>> 0);
      }
      raw(e2) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
      }
      uint32(e2) {
        for (o(e2);e2 > 127; )
          this.buf.push(127 & e2 | 128), e2 >>>= 7;
        return this.buf.push(e2), this;
      }
      int32(e2) {
        return s(e2), C(e2, this.buf), this;
      }
      bool(e2) {
        return this.buf.push(e2 ? 1 : 0), this;
      }
      bytes(e2) {
        return this.uint32(e2.byteLength), this.raw(e2);
      }
      string(e2) {
        let t2 = this.textEncoder.encode(e2);
        return this.uint32(t2.byteLength), this.raw(t2);
      }
      float(e2) {
        c(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
      }
      double(e2) {
        let t2 = new Uint8Array(8);
        return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
      }
      fixed32(e2) {
        o(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
      }
      sfixed32(e2) {
        s(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
      }
      sint32(e2) {
        return s(e2), C(e2 = (e2 << 1 ^ e2 >> 31) >>> 0, this.buf), this;
      }
      sfixed64(e2) {
        let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = R.enc(e2);
        return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
      }
      fixed64(e2) {
        let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = R.uEnc(e2);
        return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
      }
      int64(e2) {
        let t2 = R.enc(e2);
        return f(t2.lo, t2.hi, this.buf), this;
      }
      sint64(e2) {
        let t2 = R.enc(e2), n2 = t2.hi >> 31;
        return f(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
      }
      uint64(e2) {
        let t2 = R.uEnc(e2);
        return f(t2.lo, t2.hi, this.buf), this;
      }
    }

    class U {
      constructor(e2, t2) {
        this.varint64 = v, this.uint32 = w, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = t2 != null ? t2 : new TextDecoder;
      }
      tag() {
        let e2 = this.uint32(), t2 = e2 >>> 3, n2 = 7 & e2;
        if (t2 <= 0 || n2 < 0 || n2 > 5)
          throw new Error("illegal tag: field no " + t2 + " wire type " + n2);
        return [t2, n2];
      }
      skip(e2, t2) {
        let n2 = this.pos;
        switch (e2) {
          case _.Varint:
            for (;128 & this.buf[this.pos++]; )
              ;
            break;
          case _.Bit64:
            this.pos += 4;
          case _.Bit32:
            this.pos += 4;
            break;
          case _.LengthDelimited:
            let n3 = this.uint32();
            this.pos += n3;
            break;
          case _.StartGroup:
            for (;; ) {
              const e3 = L(this.tag(), 2), n4 = e3[0], i2 = e3[1];
              if (i2 === _.EndGroup) {
                if (t2 !== undefined && n4 !== t2)
                  throw new Error("invalid end group tag");
                break;
              }
              this.skip(i2, n4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e2);
        }
        return this.assertBounds(), this.buf.subarray(n2, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len)
          throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e2 = this.uint32();
        return e2 >>> 1 ^ -(1 & e2);
      }
      int64() {
        return R.dec(...this.varint64());
      }
      uint64() {
        return R.uDec(...this.varint64());
      }
      sint64() {
        let e2 = L(this.varint64(), 2), t2 = e2[0], n2 = e2[1], i2 = -(1 & t2);
        return t2 = (t2 >>> 1 | (1 & n2) << 31) ^ i2, n2 = n2 >>> 1 ^ i2, R.dec(t2, n2);
      }
      bool() {
        let e2 = L(this.varint64(), 2), t2 = e2[0], n2 = e2[1];
        return t2 !== 0 || n2 !== 0;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return R.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return R.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e2 = this.uint32(), t2 = this.pos;
        return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    }
    function F(e2) {
      const t2 = e2.field.localName, n2 = Object.create(null);
      return n2[t2] = function(e3) {
        const t3 = e3.field;
        if (t3.repeated)
          return [];
        if (t3.default !== undefined)
          return t3.default;
        switch (t3.kind) {
          case "enum":
            return t3.T.values[0].no;
          case "scalar":
            return D(t3.T, t3.L);
          case "message":
            const e4 = t3.T, n3 = new e4;
            return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(n3) : n3;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      }(e2), [n2, () => n2[t2]];
    }
    let B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), j = [];
    for (let ph = 0;ph < B.length; ph++)
      j[B[ph].charCodeAt(0)] = ph;
    j[45] = B.indexOf("+"), j[95] = B.indexOf("/");
    const q = { dec(e2) {
      let t2 = 3 * e2.length / 4;
      e2[e2.length - 2] == "=" ? t2 -= 2 : e2[e2.length - 1] == "=" && (t2 -= 1);
      let n2, i2 = new Uint8Array(t2), r2 = 0, a2 = 0, s2 = 0;
      for (let o2 = 0;o2 < e2.length; o2++) {
        if (n2 = j[e2.charCodeAt(o2)], n2 === undefined)
          switch (e2[o2]) {
            case "=":
              a2 = 0;
            case `
`:
            case "\r":
            case "\t":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
        switch (a2) {
          case 0:
            s2 = n2, a2 = 1;
            break;
          case 1:
            i2[r2++] = s2 << 2 | (48 & n2) >> 4, s2 = n2, a2 = 2;
            break;
          case 2:
            i2[r2++] = (15 & s2) << 4 | (60 & n2) >> 2, s2 = n2, a2 = 3;
            break;
          case 3:
            i2[r2++] = (3 & s2) << 6 | n2, a2 = 0;
        }
      }
      if (a2 == 1)
        throw Error("invalid base64 string.");
      return i2.subarray(0, r2);
    }, enc(e2) {
      let t2, n2 = "", i2 = 0, r2 = 0;
      for (let a2 = 0;a2 < e2.length; a2++)
        switch (t2 = e2[a2], i2) {
          case 0:
            n2 += B[t2 >> 2], r2 = (3 & t2) << 4, i2 = 1;
            break;
          case 1:
            n2 += B[r2 | t2 >> 4], r2 = (15 & t2) << 2, i2 = 2;
            break;
          case 2:
            n2 += B[r2 | t2 >> 6], n2 += B[63 & t2], i2 = 0;
        }
      return i2 && (n2 += B[r2], n2 += "=", i2 == 1 && (n2 += "=")), n2;
    } };
    function V(e2, t2, n2) {
      K(t2, e2);
      const i2 = t2.runtime.bin.makeReadOptions(n2), r2 = function(e3, t3) {
        if (!t3.repeated && (t3.kind == "enum" || t3.kind == "scalar")) {
          for (let n3 = e3.length - 1;n3 >= 0; --n3)
            if (e3[n3].no == t3.no)
              return [e3[n3]];
          return [];
        }
        return e3.filter((e4) => e4.no === t3.no);
      }(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), a2 = L(F(t2), 2), s2 = a2[0], o2 = a2[1];
      for (const c2 of r2)
        t2.runtime.bin.readField(s2, i2.readerFactory(c2.data), t2.field, c2.wireType, i2);
      return o2();
    }
    function W(e2, t2, n2, i2) {
      K(t2, e2);
      const r2 = t2.runtime.bin.makeReadOptions(i2), a2 = t2.runtime.bin.makeWriteOptions(i2);
      if (H(e2, t2)) {
        const n3 = e2.getType().runtime.bin.listUnknownFields(e2).filter((e3) => e3.no != t2.field.no);
        e2.getType().runtime.bin.discardUnknownFields(e2);
        for (const t3 of n3)
          e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
      }
      const s2 = a2.writerFactory();
      let o2 = t2.field;
      o2.opt || o2.repeated || o2.kind != "enum" && o2.kind != "scalar" || (o2 = Object.assign(Object.assign({}, t2.field), { opt: true })), t2.runtime.bin.writeField(o2, n2, s2, a2);
      const c2 = r2.readerFactory(s2.finish());
      for (;c2.pos < c2.len; ) {
        const t3 = L(c2.tag(), 2), n3 = t3[0], i3 = t3[1], r3 = c2.skip(i3, n3);
        e2.getType().runtime.bin.onUnknownField(e2, n3, i3, r3);
      }
    }
    function H(e2, t2) {
      const n2 = e2.getType();
      return t2.extendee.typeName === n2.typeName && !!n2.runtime.bin.listUnknownFields(e2).find((e3) => e3.no == t2.field.no);
    }
    function K(e2, t2) {
      a(e2.extendee.typeName == t2.getType().typeName, "extension ".concat(e2.typeName, " can only be applied to message ").concat(e2.extendee.typeName));
    }
    function z(e2, t2) {
      const n2 = e2.localName;
      if (e2.repeated)
        return t2[n2].length > 0;
      if (e2.oneof)
        return t2[e2.oneof.localName].case === n2;
      switch (e2.kind) {
        case "enum":
        case "scalar":
          return e2.opt || e2.req ? t2[n2] !== undefined : e2.kind == "enum" ? t2[n2] !== e2.T.values[0].no : !O(e2.T, t2[n2]);
        case "message":
          return t2[n2] !== undefined;
        case "map":
          return Object.keys(t2[n2]).length > 0;
      }
    }
    function G(e2, t2) {
      const n2 = e2.localName, i2 = !e2.opt && !e2.req;
      if (e2.repeated)
        t2[n2] = [];
      else if (e2.oneof)
        t2[e2.oneof.localName] = { case: undefined };
      else
        switch (e2.kind) {
          case "map":
            t2[n2] = {};
            break;
          case "enum":
            t2[n2] = i2 ? e2.T.values[0].no : undefined;
            break;
          case "scalar":
            t2[n2] = i2 ? D(e2.T, e2.L) : undefined;
            break;
          case "message":
            t2[n2] = undefined;
        }
    }
    function J(e2, t2) {
      if (e2 === null || typeof e2 != "object")
        return false;
      if (!Object.getOwnPropertyNames(g.prototype).every((t3) => (t3 in e2) && typeof e2[t3] == "function"))
        return false;
      const n2 = e2.getType();
      return n2 !== null && typeof n2 == "function" && "typeName" in n2 && typeof n2.typeName == "string" && (t2 === undefined || n2.typeName == t2.typeName);
    }
    function Q(e2, t2) {
      return J(t2) || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2);
    }
    P.DOUBLE, P.FLOAT, P.INT64, P.UINT64, P.INT32, P.UINT32, P.BOOL, P.STRING, P.BYTES;
    const Y = { ignoreUnknownFields: false }, X = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function Z(e2) {
      return e2 ? Object.assign(Object.assign({}, Y), e2) : Y;
    }
    function $(e2) {
      return e2 ? Object.assign(Object.assign({}, X), e2) : X;
    }
    const ee = Symbol(), te = Symbol();
    function ne(e2) {
      if (e2 === null)
        return "null";
      switch (typeof e2) {
        case "object":
          return Array.isArray(e2) ? "array" : "object";
        case "string":
          return e2.length > 100 ? "string" : '"'.concat(e2.split('"').join("\\\""), '"');
        default:
          return String(e2);
      }
    }
    function ie(e2, t2, i2, r2, s2) {
      let o2 = i2.localName;
      if (i2.repeated) {
        if (a(i2.kind != "map"), t2 === null)
          return;
        if (!Array.isArray(t2))
          throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(t2)));
        const c3 = e2[o2];
        for (const e3 of t2) {
          if (e3 === null)
            throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(e3)));
          switch (i2.kind) {
            case "message":
              c3.push(i2.T.fromJson(e3, r2));
              break;
            case "enum":
              const t3 = se(i2.T, e3, r2.ignoreUnknownFields, true);
              t3 !== te && c3.push(t3);
              break;
            case "scalar":
              try {
                c3.push(ae(i2.T, e3, i2.L, true));
              } catch (n2) {
                let r3 = "cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(e3));
                throw n2 instanceof Error && n2.message.length > 0 && (r3 += ": ".concat(n2.message)), new Error(r3);
              }
          }
        }
      } else if (i2.kind == "map") {
        if (t2 === null)
          return;
        if (typeof t2 != "object" || Array.isArray(t2))
          throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(t2)));
        const a2 = e2[o2];
        for (const e3 of Object.entries(t2)) {
          var c2 = L(e3, 2);
          const o3 = c2[0], d2 = c2[1];
          if (d2 === null)
            throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: map value null"));
          let l2;
          try {
            l2 = re(i2.K, o3);
          } catch (n2) {
            let r3 = "cannot decode map key for field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(t2));
            throw n2 instanceof Error && n2.message.length > 0 && (r3 += ": ".concat(n2.message)), new Error(r3);
          }
          switch (i2.V.kind) {
            case "message":
              a2[l2] = i2.V.T.fromJson(d2, r2);
              break;
            case "enum":
              const e4 = se(i2.V.T, d2, r2.ignoreUnknownFields, true);
              e4 !== te && (a2[l2] = e4);
              break;
            case "scalar":
              try {
                a2[l2] = ae(i2.V.T, d2, I.BIGINT, true);
              } catch (n2) {
                let r3 = "cannot decode map value for field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(t2));
                throw n2 instanceof Error && n2.message.length > 0 && (r3 += ": ".concat(n2.message)), new Error(r3);
              }
          }
        }
      } else
        switch (i2.oneof && (e2 = e2[i2.oneof.localName] = { case: o2 }, o2 = "value"), i2.kind) {
          case "message":
            const a2 = i2.T;
            if (t2 === null && a2.typeName != "google.protobuf.Value")
              return;
            let c3 = e2[o2];
            J(c3) ? c3.fromJson(t2, r2) : (e2[o2] = c3 = a2.fromJson(t2, r2), a2.fieldWrapper && !i2.oneof && (e2[o2] = a2.fieldWrapper.unwrapField(c3)));
            break;
          case "enum":
            const d2 = se(i2.T, t2, r2.ignoreUnknownFields, false);
            switch (d2) {
              case ee:
                G(i2, e2);
                break;
              case te:
                break;
              default:
                e2[o2] = d2;
            }
            break;
          case "scalar":
            try {
              const n2 = ae(i2.T, t2, i2.L, false);
              if (n2 === ee)
                G(i2, e2);
              else
                e2[o2] = n2;
            } catch (n2) {
              let r3 = "cannot decode field ".concat(s2.typeName, ".").concat(i2.name, " from JSON: ").concat(ne(t2));
              throw n2 instanceof Error && n2.message.length > 0 && (r3 += ": ".concat(n2.message)), new Error(r3);
            }
        }
    }
    function re(e2, t2) {
      if (e2 === P.BOOL)
        switch (t2) {
          case "true":
            t2 = true;
            break;
          case "false":
            t2 = false;
        }
      return ae(e2, t2, I.BIGINT, true).toString();
    }
    function ae(e2, t2, i2, r2) {
      if (t2 === null)
        return r2 ? D(e2, i2) : ee;
      switch (e2) {
        case P.DOUBLE:
        case P.FLOAT:
          if (t2 === "NaN")
            return Number.NaN;
          if (t2 === "Infinity")
            return Number.POSITIVE_INFINITY;
          if (t2 === "-Infinity")
            return Number.NEGATIVE_INFINITY;
          if (t2 === "")
            break;
          if (typeof t2 == "string" && t2.trim().length !== t2.length)
            break;
          if (typeof t2 != "string" && typeof t2 != "number")
            break;
          const r3 = Number(t2);
          if (Number.isNaN(r3))
            break;
          if (!Number.isFinite(r3))
            break;
          return e2 == P.FLOAT && c(r3), r3;
        case P.INT32:
        case P.FIXED32:
        case P.SFIXED32:
        case P.SINT32:
        case P.UINT32:
          let a2;
          if (typeof t2 == "number" ? a2 = t2 : typeof t2 == "string" && t2.length > 0 && t2.trim().length === t2.length && (a2 = Number(t2)), a2 === undefined)
            break;
          return e2 == P.UINT32 || e2 == P.FIXED32 ? o(a2) : s(a2), a2;
        case P.INT64:
        case P.SFIXED64:
        case P.SINT64:
          if (typeof t2 != "number" && typeof t2 != "string")
            break;
          const d2 = R.parse(t2);
          return i2 ? d2.toString() : d2;
        case P.FIXED64:
        case P.UINT64:
          if (typeof t2 != "number" && typeof t2 != "string")
            break;
          const l2 = R.uParse(t2);
          return i2 ? l2.toString() : l2;
        case P.BOOL:
          if (typeof t2 != "boolean")
            break;
          return t2;
        case P.STRING:
          if (typeof t2 != "string")
            break;
          try {
            encodeURIComponent(t2);
          } catch (n2) {
            throw new Error("invalid UTF8");
          }
          return t2;
        case P.BYTES:
          if (t2 === "")
            return new Uint8Array(0);
          if (typeof t2 != "string")
            break;
          return q.dec(t2);
      }
      throw new Error;
    }
    function se(e2, t2, n2, i2) {
      if (t2 === null)
        return e2.typeName == "google.protobuf.NullValue" ? 0 : i2 ? e2.values[0].no : ee;
      switch (typeof t2) {
        case "number":
          if (Number.isInteger(t2))
            return t2;
          break;
        case "string":
          const i3 = e2.findName(t2);
          if (i3 !== undefined)
            return i3.no;
          if (n2)
            return te;
      }
      throw new Error("cannot decode enum ".concat(e2.typeName, " from JSON: ").concat(ne(t2)));
    }
    function oe(e2) {
      return !(!e2.repeated && e2.kind != "map") || !e2.oneof && (e2.kind != "message" && (!e2.opt && !e2.req));
    }
    function ce(e2, t2, n2) {
      if (e2.kind == "map") {
        a(typeof t2 == "object" && t2 != null);
        const o2 = {}, c2 = Object.entries(t2);
        switch (e2.V.kind) {
          case "scalar":
            for (const n3 of c2) {
              var i2 = L(n3, 2);
              const t4 = i2[0], r3 = i2[1];
              o2[t4.toString()] = le(e2.V.T, r3);
            }
            break;
          case "message":
            for (const e3 of c2) {
              var r2 = L(e3, 2);
              const t4 = r2[0], i3 = r2[1];
              o2[t4.toString()] = i3.toJson(n2);
            }
            break;
          case "enum":
            const t3 = e2.V.T;
            for (const e3 of c2) {
              var s2 = L(e3, 2);
              const i3 = s2[0], r3 = s2[1];
              o2[i3.toString()] = de(t3, r3, n2.enumAsInteger);
            }
        }
        return n2.emitDefaultValues || c2.length > 0 ? o2 : undefined;
      }
      if (e2.repeated) {
        a(Array.isArray(t2));
        const i3 = [];
        switch (e2.kind) {
          case "scalar":
            for (let n3 = 0;n3 < t2.length; n3++)
              i3.push(le(e2.T, t2[n3]));
            break;
          case "enum":
            for (let r3 = 0;r3 < t2.length; r3++)
              i3.push(de(e2.T, t2[r3], n2.enumAsInteger));
            break;
          case "message":
            for (let e3 = 0;e3 < t2.length; e3++)
              i3.push(t2[e3].toJson(n2));
        }
        return n2.emitDefaultValues || i3.length > 0 ? i3 : undefined;
      }
      switch (e2.kind) {
        case "scalar":
          return le(e2.T, t2);
        case "enum":
          return de(e2.T, t2, n2.enumAsInteger);
        case "message":
          return Q(e2.T, t2).toJson(n2);
      }
    }
    function de(e2, t2, n2) {
      var i2;
      if (a(typeof t2 == "number"), e2.typeName == "google.protobuf.NullValue")
        return null;
      if (n2)
        return t2;
      const r2 = e2.findNumber(t2);
      return (i2 = r2 == null ? undefined : r2.name) !== null && i2 !== undefined ? i2 : t2;
    }
    function le(e2, t2) {
      switch (e2) {
        case P.INT32:
        case P.SFIXED32:
        case P.SINT32:
        case P.FIXED32:
        case P.UINT32:
          return a(typeof t2 == "number"), t2;
        case P.FLOAT:
        case P.DOUBLE:
          return a(typeof t2 == "number"), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
        case P.STRING:
          return a(typeof t2 == "string"), t2;
        case P.BOOL:
          return a(typeof t2 == "boolean"), t2;
        case P.UINT64:
        case P.FIXED64:
        case P.INT64:
        case P.SFIXED64:
        case P.SINT64:
          return a(typeof t2 == "bigint" || typeof t2 == "string" || typeof t2 == "number"), t2.toString();
        case P.BYTES:
          return a(t2 instanceof Uint8Array), q.enc(t2);
      }
    }
    const ue = Symbol("@bufbuild/protobuf/unknown-fields"), he = { readUnknownFields: true, readerFactory: (e2) => new U(e2) }, pe = { writeUnknownFields: true, writerFactory: () => new x };
    function me(e2) {
      return e2 ? Object.assign(Object.assign({}, he), e2) : he;
    }
    function ge(e2) {
      return e2 ? Object.assign(Object.assign({}, pe), e2) : pe;
    }
    function ve(e2, t2, n2, i2, r2) {
      let { repeated: a2, localName: s2 } = n2;
      switch (n2.oneof && ((e2 = e2[n2.oneof.localName]).case != s2 && delete e2.value, e2.case = s2, s2 = "value"), n2.kind) {
        case "scalar":
        case "enum":
          const o2 = n2.kind == "enum" ? P.INT32 : n2.T;
          let c2 = ye;
          if (n2.kind == "scalar" && n2.L > 0 && (c2 = ke), a2) {
            let n3 = e2[s2];
            if (i2 == _.LengthDelimited && o2 != P.STRING && o2 != P.BYTES) {
              let e3 = t2.uint32() + t2.pos;
              for (;t2.pos < e3; )
                n3.push(c2(t2, o2));
            } else
              n3.push(c2(t2, o2));
          } else
            e2[s2] = c2(t2, o2);
          break;
        case "message":
          const d2 = n2.T;
          a2 ? e2[s2].push(fe(t2, new d2, r2, n2)) : J(e2[s2]) ? fe(t2, e2[s2], r2, n2) : (e2[s2] = fe(t2, new d2, r2, n2), !d2.fieldWrapper || n2.oneof || n2.repeated || (e2[s2] = d2.fieldWrapper.unwrapField(e2[s2])));
          break;
        case "map":
          let l2 = function(e3, t3, n3) {
            const i3 = t3.uint32(), r3 = t3.pos + i3;
            let a3, s3;
            for (;t3.pos < r3; ) {
              switch (L(t3.tag(), 1)[0]) {
                case 1:
                  a3 = ye(t3, e3.K);
                  break;
                case 2:
                  switch (e3.V.kind) {
                    case "scalar":
                      s3 = ye(t3, e3.V.T);
                      break;
                    case "enum":
                      s3 = t3.int32();
                      break;
                    case "message":
                      s3 = fe(t3, new e3.V.T, n3, undefined);
                  }
              }
            }
            a3 === undefined && (a3 = D(e3.K, I.BIGINT));
            typeof a3 != "string" && typeof a3 != "number" && (a3 = a3.toString());
            if (s3 === undefined)
              switch (e3.V.kind) {
                case "scalar":
                  s3 = D(e3.V.T, I.BIGINT);
                  break;
                case "enum":
                  s3 = e3.V.T.values[0].no;
                  break;
                case "message":
                  s3 = new e3.V.T;
              }
            return [a3, s3];
          }(n2, t2, r2), u2 = L(l2, 2), h2 = u2[0], p2 = u2[1];
          e2[s2][h2] = p2;
      }
    }
    function fe(e2, t2, n2, i2) {
      const r2 = t2.getType().runtime.bin, a2 = i2 == null ? undefined : i2.delimited;
      return r2.readMessage(t2, e2, a2 ? i2.no : e2.uint32(), n2, a2), t2;
    }
    function ke(e2, t2) {
      const n2 = ye(e2, t2);
      return typeof n2 == "bigint" ? n2.toString() : n2;
    }
    function ye(e2, t2) {
      switch (t2) {
        case P.STRING:
          return e2.string();
        case P.BOOL:
          return e2.bool();
        case P.DOUBLE:
          return e2.double();
        case P.FLOAT:
          return e2.float();
        case P.INT32:
          return e2.int32();
        case P.INT64:
          return e2.int64();
        case P.UINT64:
          return e2.uint64();
        case P.FIXED64:
          return e2.fixed64();
        case P.BYTES:
          return e2.bytes();
        case P.FIXED32:
          return e2.fixed32();
        case P.SFIXED32:
          return e2.sfixed32();
        case P.SFIXED64:
          return e2.sfixed64();
        case P.SINT64:
          return e2.sint64();
        case P.UINT32:
          return e2.uint32();
        case P.SINT32:
          return e2.sint32();
      }
    }
    function be(e2, t2, n2, i2) {
      a(t2 !== undefined);
      const r2 = e2.repeated;
      switch (e2.kind) {
        case "scalar":
        case "enum":
          let o2 = e2.kind == "enum" ? P.INT32 : e2.T;
          if (r2)
            if (a(Array.isArray(t2)), e2.packed)
              (function(e3, t3, n3, i3) {
                if (!i3.length)
                  return;
                e3.tag(n3, _.LengthDelimited).fork();
                let r3 = L(Ce(t3), 2)[1];
                for (let a2 = 0;a2 < i3.length; a2++)
                  e3[r3](i3[a2]);
                e3.join();
              })(n2, o2, e2.no, t2);
            else
              for (const i3 of t2)
                Ee(n2, o2, e2.no, i3);
          else
            Ee(n2, o2, e2.no, t2);
          break;
        case "message":
          if (r2) {
            a(Array.isArray(t2));
            for (const r3 of t2)
              Se(n2, i2, e2, r3);
          } else
            Se(n2, i2, e2, t2);
          break;
        case "map":
          a(typeof t2 == "object" && t2 != null);
          for (const r3 of Object.entries(t2)) {
            var s2 = L(r3, 2);
            Te(n2, i2, e2, s2[0], s2[1]);
          }
      }
    }
    function Te(e2, t2, n2, i2, r2) {
      e2.tag(n2.no, _.LengthDelimited), e2.fork();
      let s2 = i2;
      switch (n2.K) {
        case P.INT32:
        case P.FIXED32:
        case P.UINT32:
        case P.SFIXED32:
        case P.SINT32:
          s2 = Number.parseInt(i2);
          break;
        case P.BOOL:
          a(i2 == "true" || i2 == "false"), s2 = i2 == "true";
      }
      switch (Ee(e2, n2.K, 1, s2), n2.V.kind) {
        case "scalar":
          Ee(e2, n2.V.T, 2, r2);
          break;
        case "enum":
          Ee(e2, P.INT32, 2, r2);
          break;
        case "message":
          a(r2 !== undefined), e2.tag(2, _.LengthDelimited).bytes(r2.toBinary(t2));
      }
      e2.join();
    }
    function Se(e2, t2, n2, i2) {
      const r2 = Q(n2.T, i2);
      n2.delimited ? e2.tag(n2.no, _.StartGroup).raw(r2.toBinary(t2)).tag(n2.no, _.EndGroup) : e2.tag(n2.no, _.LengthDelimited).bytes(r2.toBinary(t2));
    }
    function Ee(e2, t2, n2, i2) {
      a(i2 !== undefined);
      let r2 = L(Ce(t2), 2), s2 = r2[0], o2 = r2[1];
      e2.tag(n2, s2)[o2](i2);
    }
    function Ce(e2) {
      let t2 = _.Varint;
      switch (e2) {
        case P.BYTES:
        case P.STRING:
          t2 = _.LengthDelimited;
          break;
        case P.DOUBLE:
        case P.FIXED64:
        case P.SFIXED64:
          t2 = _.Bit64;
          break;
        case P.FIXED32:
        case P.SFIXED32:
        case P.FLOAT:
          t2 = _.Bit32;
      }
      return [t2, P[e2].toLowerCase()];
    }
    function we(e2) {
      if (e2 === undefined)
        return e2;
      if (J(e2))
        return e2.clone();
      if (e2 instanceof Uint8Array) {
        const t2 = new Uint8Array(e2.byteLength);
        return t2.set(e2), t2;
      }
      return e2;
    }
    function Re(e2) {
      return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
    }

    class Pe {
      constructor(e2, t2) {
        this._fields = e2, this._normalizer = t2;
      }
      findJsonName(e2) {
        if (!this.jsonNames) {
          const e3 = {};
          for (const t2 of this.list())
            e3[t2.jsonName] = e3[t2.name] = t2;
          this.jsonNames = e3;
        }
        return this.jsonNames[e2];
      }
      find(e2) {
        if (!this.numbers) {
          const e3 = {};
          for (const t2 of this.list())
            e3[t2.no] = t2;
          this.numbers = e3;
        }
        return this.numbers[e2];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e2, t2) => e2.no - t2.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e2 = this.members;
          let t2;
          for (const n2 of this.list())
            n2.oneof ? n2.oneof !== t2 && (t2 = n2.oneof, e2.push(t2)) : e2.push(n2);
        }
        return this.members;
      }
    }
    function Ie(e2, t2) {
      const n2 = Me(e2);
      return t2 ? n2 : Le(Ne(n2));
    }
    const _e = Me;
    function Me(e2) {
      let t2 = false;
      const n2 = [];
      for (let i2 = 0;i2 < e2.length; i2++) {
        let r2 = e2.charAt(i2);
        switch (r2) {
          case "_":
            t2 = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            n2.push(r2), t2 = false;
            break;
          default:
            t2 && (t2 = false, r2 = r2.toUpperCase()), n2.push(r2);
        }
      }
      return n2.join("");
    }
    const De = new Set(["constructor", "toString", "toJSON", "valueOf"]), Oe = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ae = (e2) => "".concat(e2, "$"), Ne = (e2) => Oe.has(e2) ? Ae(e2) : e2, Le = (e2) => De.has(e2) ? Ae(e2) : e2;

    class xe {
      constructor(e2) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = undefined, this.fields = [], this.name = e2, this.localName = Ie(e2, false);
      }
      addField(e2) {
        a(e2.oneof === this, "field ".concat(e2.name, " not one of ").concat(this.name)), this.fields.push(e2);
      }
      findField(e2) {
        if (!this._lookup) {
          this._lookup = Object.create(null);
          for (let e3 = 0;e3 < this.fields.length; e3++)
            this._lookup[this.fields[e3].localName] = this.fields[e3];
        }
        return this._lookup[e2];
      }
    }
    const Ue = (Fe = (e2) => new Pe(e2, (e3) => function(e4) {
      var t2, n2, i2, r2, a2, s2;
      const o2 = [];
      let c2;
      for (const d2 of typeof e4 == "function" ? e4() : e4) {
        const e5 = d2;
        if (e5.localName = Ie(d2.name, d2.oneof !== undefined), e5.jsonName = (t2 = d2.jsonName) !== null && t2 !== undefined ? t2 : _e(d2.name), e5.repeated = (n2 = d2.repeated) !== null && n2 !== undefined && n2, d2.kind == "scalar" && (e5.L = (i2 = d2.L) !== null && i2 !== undefined ? i2 : I.BIGINT), e5.delimited = (r2 = d2.delimited) !== null && r2 !== undefined && r2, e5.req = (a2 = d2.req) !== null && a2 !== undefined && a2, e5.opt = (s2 = d2.opt) !== null && s2 !== undefined && s2, d2.packed === undefined && (e5.packed = d2.kind == "enum" || d2.kind == "scalar" && d2.T != P.BYTES && d2.T != P.STRING), d2.oneof !== undefined) {
          const t3 = typeof d2.oneof == "string" ? d2.oneof : d2.oneof.name;
          c2 && c2.name == t3 || (c2 = new xe(t3)), e5.oneof = c2, c2.addField(e5);
        }
        o2.push(e5);
      }
      return o2;
    }(e3)), Be = (e2) => {
      for (const t2 of e2.getType().fields.byMember()) {
        if (t2.opt)
          continue;
        const n2 = t2.localName, i2 = e2;
        if (t2.repeated)
          i2[n2] = [];
        else
          switch (t2.kind) {
            case "oneof":
              i2[n2] = { case: undefined };
              break;
            case "enum":
              i2[n2] = 0;
              break;
            case "map":
              i2[n2] = {};
              break;
            case "scalar":
              i2[n2] = D(t2.T, t2.L);
          }
      }
    }, { syntax: "proto3", json: { makeReadOptions: Z, makeWriteOptions: $, readMessage(e2, t2, n2, i2) {
      if (t2 == null || Array.isArray(t2) || typeof t2 != "object")
        throw new Error("cannot decode message ".concat(e2.typeName, " from JSON: ").concat(ne(t2)));
      i2 = i2 != null ? i2 : new e2;
      const r2 = new Map, a2 = n2.typeRegistry;
      for (const o2 of Object.entries(t2)) {
        var s2 = L(o2, 2);
        const t3 = s2[0], c2 = s2[1], d2 = e2.fields.findJsonName(t3);
        if (d2) {
          if (d2.oneof) {
            if (c2 === null && d2.kind == "scalar")
              continue;
            const n3 = r2.get(d2.oneof);
            if (n3 !== undefined)
              throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: multiple keys for oneof "').concat(d2.oneof.name, '" present: "').concat(n3, '", "').concat(t3, '"'));
            r2.set(d2.oneof, t3);
          }
          ie(i2, c2, d2, n2, e2);
        } else {
          let r3 = false;
          if ((a2 == null ? undefined : a2.findExtension) && t3.startsWith("[") && t3.endsWith("]")) {
            const s3 = a2.findExtension(t3.substring(1, t3.length - 1));
            if (s3 && s3.extendee.typeName == e2.typeName) {
              r3 = true;
              const e3 = L(F(s3), 2), t4 = e3[0], a3 = e3[1];
              ie(t4, c2, s3.field, n2, s3), W(i2, s3, a3(), n2);
            }
          }
          if (!r3 && !n2.ignoreUnknownFields)
            throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: key "').concat(t3, '" is unknown'));
        }
      }
      return i2;
    }, writeMessage(e2, t2) {
      const i2 = e2.getType(), r2 = {};
      let a2;
      try {
        for (a2 of i2.fields.byNumber()) {
          if (!z(a2, e2)) {
            if (a2.req)
              throw "required field not set";
            if (!t2.emitDefaultValues)
              continue;
            if (!oe(a2))
              continue;
          }
          const n3 = ce(a2, a2.oneof ? e2[a2.oneof.localName].value : e2[a2.localName], t2);
          n3 !== undefined && (r2[t2.useProtoFieldName ? a2.name : a2.jsonName] = n3);
        }
        const n2 = t2.typeRegistry;
        if (n2 == null ? undefined : n2.findExtensionFor)
          for (const a3 of i2.runtime.bin.listUnknownFields(e2)) {
            const s2 = n2.findExtensionFor(i2.typeName, a3.no);
            if (s2 && H(e2, s2)) {
              const n3 = V(e2, s2, t2), i3 = ce(s2.field, n3, t2);
              i3 !== undefined && (r2[s2.field.jsonName] = i3);
            }
          }
      } catch (n2) {
        const t3 = a2 ? "cannot encode field ".concat(i2.typeName, ".").concat(a2.name, " to JSON") : "cannot encode message ".concat(i2.typeName, " to JSON"), r3 = n2 instanceof Error ? n2.message : String(n2);
        throw new Error(t3 + (r3.length > 0 ? ": ".concat(r3) : ""));
      }
      return r2;
    }, readScalar: (e2, t2, n2) => ae(e2, t2, n2 != null ? n2 : I.BIGINT, true), writeScalar(e2, t2, n2) {
      if (t2 !== undefined)
        return n2 || O(e2, t2) ? le(e2, t2) : undefined;
    }, debug: ne }, bin: { makeReadOptions: me, makeWriteOptions: ge, listUnknownFields(e2) {
      var t2;
      return (t2 = e2[ue]) !== null && t2 !== undefined ? t2 : [];
    }, discardUnknownFields(e2) {
      delete e2[ue];
    }, writeUnknownFields(e2, t2) {
      const n2 = e2[ue];
      if (n2)
        for (const i2 of n2)
          t2.tag(i2.no, i2.wireType).raw(i2.data);
    }, onUnknownField(e2, t2, n2, i2) {
      const r2 = e2;
      Array.isArray(r2[ue]) || (r2[ue] = []), r2[ue].push({ no: t2, wireType: n2, data: i2 });
    }, readMessage(e2, t2, n2, i2, r2) {
      const a2 = e2.getType(), s2 = r2 ? t2.len : t2.pos + n2;
      let o2, c2;
      for (;t2.pos < s2; ) {
        var d2 = L(t2.tag(), 2);
        if (o2 = d2[0], c2 = d2[1], r2 === true && c2 == _.EndGroup)
          break;
        const n3 = a2.fields.find(o2);
        if (n3)
          ve(e2, t2, n3, c2, i2);
        else {
          const n4 = t2.skip(c2, o2);
          i2.readUnknownFields && this.onUnknownField(e2, o2, c2, n4);
        }
      }
      if (r2 && (c2 != _.EndGroup || o2 !== n2))
        throw new Error("invalid end group tag");
    }, readField: ve, writeMessage(e2, t2, n2) {
      const i2 = e2.getType();
      for (const r2 of i2.fields.byNumber())
        if (z(r2, e2))
          be(r2, r2.oneof ? e2[r2.oneof.localName].value : e2[r2.localName], t2, n2);
        else if (r2.req)
          throw new Error("cannot encode field ".concat(i2.typeName, ".").concat(r2.name, " to binary: required field not set"));
      return n2.writeUnknownFields && this.writeUnknownFields(e2, t2), t2;
    }, writeField(e2, t2, n2, i2) {
      t2 !== undefined && be(e2, t2, n2, i2);
    } }, util: Object.assign(Object.assign({}, { setEnumType: u, initPartial(e2, t2) {
      if (e2 === undefined)
        return;
      const n2 = t2.getType();
      for (const r2 of n2.fields.byMember()) {
        const n3 = r2.localName, a2 = t2, s2 = e2;
        if (s2[n3] != null)
          switch (r2.kind) {
            case "oneof":
              const e3 = s2[n3].case;
              if (e3 === undefined)
                continue;
              const t3 = r2.findField(e3);
              let o2 = s2[n3].value;
              t3 && t3.kind == "message" && !J(o2, t3.T) ? o2 = new t3.T(o2) : t3 && t3.kind === "scalar" && t3.T === P.BYTES && (o2 = Re(o2)), a2[n3] = { case: e3, value: o2 };
              break;
            case "scalar":
            case "enum":
              let c2 = s2[n3];
              r2.T === P.BYTES && (c2 = r2.repeated ? c2.map(Re) : Re(c2)), a2[n3] = c2;
              break;
            case "map":
              switch (r2.V.kind) {
                case "scalar":
                case "enum":
                  if (r2.V.T === P.BYTES)
                    for (const t4 of Object.entries(s2[n3])) {
                      var i2 = L(t4, 2);
                      const e5 = i2[0], r3 = i2[1];
                      a2[n3][e5] = Re(r3);
                    }
                  else
                    Object.assign(a2[n3], s2[n3]);
                  break;
                case "message":
                  const e4 = r2.V.T;
                  for (const t4 of Object.keys(s2[n3])) {
                    let i3 = s2[n3][t4];
                    e4.fieldWrapper || (i3 = new e4(i3)), a2[n3][t4] = i3;
                  }
              }
              break;
            case "message":
              const d2 = r2.T;
              if (r2.repeated)
                a2[n3] = s2[n3].map((e4) => J(e4, d2) ? e4 : new d2(e4));
              else {
                const e4 = s2[n3];
                d2.fieldWrapper ? d2.typeName === "google.protobuf.BytesValue" ? a2[n3] = Re(e4) : a2[n3] = e4 : a2[n3] = J(e4, d2) ? e4 : new d2(e4);
              }
          }
      }
    }, equals: (e2, t2, n2) => t2 === n2 || !(!t2 || !n2) && e2.fields.byMember().every((e3) => {
      const i2 = t2[e3.localName], r2 = n2[e3.localName];
      if (e3.repeated) {
        if (i2.length !== r2.length)
          return false;
        switch (e3.kind) {
          case "message":
            return i2.every((t3, n3) => e3.T.equals(t3, r2[n3]));
          case "scalar":
            return i2.every((t3, n3) => M(e3.T, t3, r2[n3]));
          case "enum":
            return i2.every((e4, t3) => M(P.INT32, e4, r2[t3]));
        }
        throw new Error("repeated cannot contain ".concat(e3.kind));
      }
      switch (e3.kind) {
        case "message":
          let t3 = i2, n3 = r2;
          return e3.T.fieldWrapper && (t3 === undefined || J(t3) || (t3 = e3.T.fieldWrapper.wrapField(t3)), n3 === undefined || J(n3) || (n3 = e3.T.fieldWrapper.wrapField(n3))), e3.T.equals(t3, n3);
        case "enum":
          return M(P.INT32, i2, r2);
        case "scalar":
          return M(e3.T, i2, r2);
        case "oneof":
          if (i2.case !== r2.case)
            return false;
          const a2 = e3.findField(i2.case);
          if (a2 === undefined)
            return true;
          switch (a2.kind) {
            case "message":
              return a2.T.equals(i2.value, r2.value);
            case "enum":
              return M(P.INT32, i2.value, r2.value);
            case "scalar":
              return M(a2.T, i2.value, r2.value);
          }
          throw new Error("oneof cannot contain ".concat(a2.kind));
        case "map":
          const s2 = Object.keys(i2).concat(Object.keys(r2));
          switch (e3.V.kind) {
            case "message":
              const t4 = e3.V.T;
              return s2.every((e4) => t4.equals(i2[e4], r2[e4]));
            case "enum":
              return s2.every((e4) => M(P.INT32, i2[e4], r2[e4]));
            case "scalar":
              const n4 = e3.V.T;
              return s2.every((e4) => M(n4, i2[e4], r2[e4]));
          }
      }
    }), clone(e2) {
      const t2 = e2.getType(), n2 = new t2, i2 = n2;
      for (const a2 of t2.fields.byMember()) {
        const t3 = e2[a2.localName];
        let n3;
        if (a2.repeated)
          n3 = t3.map(we);
        else if (a2.kind == "map") {
          n3 = i2[a2.localName];
          for (const e3 of Object.entries(t3)) {
            var r2 = L(e3, 2);
            const t4 = r2[0], i3 = r2[1];
            n3[t4] = we(i3);
          }
        } else
          n3 = a2.kind == "oneof" ? a2.findField(t3.case) ? { case: t3.case, value: we(t3.value) } : { case: undefined } : we(t3);
        i2[a2.localName] = n3;
      }
      for (const a2 of t2.runtime.bin.listUnknownFields(e2))
        t2.runtime.bin.onUnknownField(i2, a2.no, a2.wireType, a2.data);
      return n2;
    } }), { newFieldList: Fe, initFields: Be }), makeMessageType(e2, t2, n2) {
      return function(e3, t3, n3, i2) {
        var r2;
        const a2 = (r2 = i2 == null ? undefined : i2.localName) !== null && r2 !== undefined ? r2 : t3.substring(t3.lastIndexOf(".") + 1), s2 = { [a2]: function(t4) {
          e3.util.initFields(this), e3.util.initPartial(t4, this);
        } }[a2];
        return Object.setPrototypeOf(s2.prototype, new g), Object.assign(s2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(n3), fromBinary: (e4, t4) => new s2().fromBinary(e4, t4), fromJson: (e4, t4) => new s2().fromJson(e4, t4), fromJsonString: (e4, t4) => new s2().fromJsonString(e4, t4), equals: (t4, n4) => e3.util.equals(s2, t4, n4) }), s2;
      }(this, e2, t2, n2);
    }, makeEnum: p, makeEnumType: h, getEnumType: l, makeExtension(e2, t2, n2) {
      return function(e3, t3, n3, i2) {
        let r2;
        return { typeName: t3, extendee: n3, get field() {
          if (!r2) {
            const n4 = typeof i2 == "function" ? i2() : i2;
            n4.name = t3.split(".").pop(), n4.jsonName = "[".concat(t3, "]"), r2 = e3.util.newFieldList([n4]).list()[0];
          }
          return r2;
        }, runtime: e3 };
      }(this, e2, t2, n2);
    } });
    var Fe, Be;

    class je extends g {
      constructor(e2) {
        super(), this.seconds = R.zero, this.nanos = 0, Ue.util.initPartial(e2, this);
      }
      fromJson(e2, t2) {
        if (typeof e2 != "string")
          throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(Ue.json.debug(e2)));
        const n2 = e2.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!n2)
          throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const i2 = Date.parse(n2[1] + "-" + n2[2] + "-" + n2[3] + "T" + n2[4] + ":" + n2[5] + ":" + n2[6] + (n2[8] ? n2[8] : "Z"));
        if (Number.isNaN(i2))
          throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (i2 < Date.parse("0001-01-01T00:00:00Z") || i2 > Date.parse("9999-12-31T23:59:59Z"))
          throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = R.parse(i2 / 1000), this.nanos = 0, n2[7] && (this.nanos = parseInt("1" + n2[7] + "0".repeat(9 - n2[7].length)) - 1e9), this;
      }
      toJson(e2) {
        const t2 = 1000 * Number(this.seconds);
        if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z"))
          throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0)
          throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let n2 = "Z";
        if (this.nanos > 0) {
          const e3 = (this.nanos + 1e9).toString().substring(1);
          n2 = e3.substring(3) === "000000" ? "." + e3.substring(0, 3) + "Z" : e3.substring(6) === "000" ? "." + e3.substring(0, 6) + "Z" : "." + e3 + "Z";
        }
        return new Date(t2).toISOString().replace(".000Z", n2);
      }
      toDate() {
        return new Date(1000 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return je.fromDate(new Date);
      }
      static fromDate(e2) {
        const t2 = e2.getTime();
        return new je({ seconds: R.parse(Math.floor(t2 / 1000)), nanos: t2 % 1000 * 1e6 });
      }
      static fromBinary(e2, t2) {
        return new je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return Ue.util.equals(je, e2, t2);
      }
    }
    je.runtime = Ue, je.typeName = "google.protobuf.Timestamp", je.fields = Ue.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const qe = Ue.makeMessageType("livekit.MetricsBatch", () => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: je }, { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "time_series", kind: "message", T: Ve, repeated: true }, { no: 5, name: "events", kind: "message", T: He, repeated: true }]), Ve = Ue.makeMessageType("livekit.TimeSeriesMetric", () => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "samples", kind: "message", T: We, repeated: true }, { no: 5, name: "rid", kind: "scalar", T: 13 }]), We = Ue.makeMessageType("livekit.MetricSample", () => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: je }, { no: 3, name: "value", kind: "scalar", T: 2 }]), He = Ue.makeMessageType("livekit.EventMetric", () => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 }, { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 6, name: "normalized_start_timestamp", kind: "message", T: je }, { no: 7, name: "normalized_end_timestamp", kind: "message", T: je, opt: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "rid", kind: "scalar", T: 13 }]), Ke = Ue.makeEnum("livekit.AudioCodec", [{ no: 0, name: "DEFAULT_AC" }, { no: 1, name: "OPUS" }, { no: 2, name: "AAC" }, { no: 3, name: "AC_MP3" }]), ze = Ue.makeEnum("livekit.VideoCodec", [{ no: 0, name: "DEFAULT_VC" }, { no: 1, name: "H264_BASELINE" }, { no: 2, name: "H264_MAIN" }, { no: 3, name: "H264_HIGH" }, { no: 4, name: "VP8" }]), Ge = Ue.makeEnum("livekit.ImageCodec", [{ no: 0, name: "IC_DEFAULT" }, { no: 1, name: "IC_JPEG" }]), Je = Ue.makeEnum("livekit.BackupCodecPolicy", [{ no: 0, name: "PREFER_REGRESSION" }, { no: 1, name: "SIMULCAST" }, { no: 2, name: "REGRESSION" }]), Qe = Ue.makeEnum("livekit.TrackType", [{ no: 0, name: "AUDIO" }, { no: 1, name: "VIDEO" }, { no: 2, name: "DATA" }]), Ye = Ue.makeEnum("livekit.TrackSource", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "CAMERA" }, { no: 2, name: "MICROPHONE" }, { no: 3, name: "SCREEN_SHARE" }, { no: 4, name: "SCREEN_SHARE_AUDIO" }]), Xe = Ue.makeEnum("livekit.VideoQuality", [{ no: 0, name: "LOW" }, { no: 1, name: "MEDIUM" }, { no: 2, name: "HIGH" }, { no: 3, name: "OFF" }]), Ze = Ue.makeEnum("livekit.ConnectionQuality", [{ no: 0, name: "POOR" }, { no: 1, name: "GOOD" }, { no: 2, name: "EXCELLENT" }, { no: 3, name: "LOST" }]), $e = Ue.makeEnum("livekit.ClientConfigSetting", [{ no: 0, name: "UNSET" }, { no: 1, name: "DISABLED" }, { no: 2, name: "ENABLED" }]), et = Ue.makeEnum("livekit.DisconnectReason", [{ no: 0, name: "UNKNOWN_REASON" }, { no: 1, name: "CLIENT_INITIATED" }, { no: 2, name: "DUPLICATE_IDENTITY" }, { no: 3, name: "SERVER_SHUTDOWN" }, { no: 4, name: "PARTICIPANT_REMOVED" }, { no: 5, name: "ROOM_DELETED" }, { no: 6, name: "STATE_MISMATCH" }, { no: 7, name: "JOIN_FAILURE" }, { no: 8, name: "MIGRATION" }, { no: 9, name: "SIGNAL_CLOSE" }, { no: 10, name: "ROOM_CLOSED" }, { no: 11, name: "USER_UNAVAILABLE" }, { no: 12, name: "USER_REJECTED" }, { no: 13, name: "SIP_TRUNK_FAILURE" }, { no: 14, name: "CONNECTION_TIMEOUT" }, { no: 15, name: "MEDIA_FAILURE" }, { no: 16, name: "AGENT_ERROR" }]), tt = Ue.makeEnum("livekit.ReconnectReason", [{ no: 0, name: "RR_UNKNOWN" }, { no: 1, name: "RR_SIGNAL_DISCONNECTED" }, { no: 2, name: "RR_PUBLISHER_FAILED" }, { no: 3, name: "RR_SUBSCRIBER_FAILED" }, { no: 4, name: "RR_SWITCH_CANDIDATE" }]), nt = Ue.makeEnum("livekit.SubscriptionError", [{ no: 0, name: "SE_UNKNOWN" }, { no: 1, name: "SE_CODEC_UNSUPPORTED" }, { no: 2, name: "SE_TRACK_NOTFOUND" }]), it = Ue.makeEnum("livekit.AudioTrackFeature", [{ no: 0, name: "TF_STEREO" }, { no: 1, name: "TF_NO_DTX" }, { no: 2, name: "TF_AUTO_GAIN_CONTROL" }, { no: 3, name: "TF_ECHO_CANCELLATION" }, { no: 4, name: "TF_NOISE_SUPPRESSION" }, { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" }, { no: 6, name: "TF_PRECONNECT_BUFFER" }]), rt = Ue.makeEnum("livekit.PacketTrailerFeature", [{ no: 0, name: "PTF_USER_TIMESTAMP" }, { no: 1, name: "PTF_FRAME_ID" }, { no: 2, name: "PTF_USER_DATA" }]), at = Ue.makeMessageType("livekit.Room", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 14, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 5, name: "creation_time", kind: "scalar", T: 3 }, { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 }, { no: 6, name: "turn_password", kind: "scalar", T: 9 }, { no: 7, name: "enabled_codecs", kind: "message", T: st, repeated: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "num_participants", kind: "scalar", T: 13 }, { no: 11, name: "num_publishers", kind: "scalar", T: 13 }, { no: 10, name: "active_recording", kind: "scalar", T: 8 }, { no: 13, name: "version", kind: "message", T: Yt }]), st = Ue.makeMessageType("livekit.Codec", () => [{ no: 1, name: "mime", kind: "scalar", T: 9 }, { no: 2, name: "fmtp_line", kind: "scalar", T: 9 }]), ot = Ue.makeMessageType("livekit.ParticipantPermission", () => [{ no: 1, name: "can_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "can_publish", kind: "scalar", T: 8 }, { no: 3, name: "can_publish_data", kind: "scalar", T: 8 }, { no: 9, name: "can_publish_sources", kind: "enum", T: Ue.getEnumType(Ye), repeated: true }, { no: 7, name: "hidden", kind: "scalar", T: 8 }, { no: 8, name: "recorder", kind: "scalar", T: 8 }, { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 }, { no: 11, name: "agent", kind: "scalar", T: 8 }, { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 }, { no: 13, name: "can_manage_agent_session", kind: "scalar", T: 8 }]), ct = Ue.makeMessageType("livekit.ParticipantInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "identity", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Ue.getEnumType(dt) }, { no: 4, name: "tracks", kind: "message", T: mt, repeated: true }, { no: 5, name: "metadata", kind: "scalar", T: 9 }, { no: 6, name: "joined_at", kind: "scalar", T: 3 }, { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 10, name: "version", kind: "scalar", T: 13 }, { no: 11, name: "permission", kind: "message", T: ot }, { no: 12, name: "region", kind: "scalar", T: 9 }, { no: 13, name: "is_publisher", kind: "scalar", T: 8 }, { no: 14, name: "kind", kind: "enum", T: Ue.getEnumType(lt) }, { no: 15, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 16, name: "disconnect_reason", kind: "enum", T: Ue.getEnumType(et) }, { no: 18, name: "kind_details", kind: "enum", T: Ue.getEnumType(ut), repeated: true }, { no: 19, name: "data_tracks", kind: "message", T: gt, repeated: true }, { no: 20, name: "client_protocol", kind: "scalar", T: 5 }, { no: 21, name: "capabilities", kind: "enum", T: Ue.getEnumType(zt), repeated: true }]), dt = Ue.makeEnum("livekit.ParticipantInfo.State", [{ no: 0, name: "JOINING" }, { no: 1, name: "JOINED" }, { no: 2, name: "ACTIVE" }, { no: 3, name: "DISCONNECTED" }]), lt = Ue.makeEnum("livekit.ParticipantInfo.Kind", [{ no: 0, name: "STANDARD" }, { no: 1, name: "INGRESS" }, { no: 2, name: "EGRESS" }, { no: 3, name: "SIP" }, { no: 4, name: "AGENT" }, { no: 7, name: "CONNECTOR" }, { no: 8, name: "BRIDGE" }]), ut = Ue.makeEnum("livekit.ParticipantInfo.KindDetail", [{ no: 0, name: "CLOUD_AGENT" }, { no: 1, name: "FORWARDED" }, { no: 2, name: "CONNECTOR_WHATSAPP" }, { no: 3, name: "CONNECTOR_TWILIO" }, { no: 4, name: "BRIDGE_RTSP" }, { no: 5, name: "SIMULATION" }]), ht = Ue.makeEnum("livekit.Encryption.Type", [{ no: 0, name: "NONE" }, { no: 1, name: "GCM" }, { no: 2, name: "CUSTOM" }]), pt = Ue.makeMessageType("livekit.SimulcastCodecInfo", () => [{ no: 1, name: "mime_type", kind: "scalar", T: 9 }, { no: 2, name: "mid", kind: "scalar", T: 9 }, { no: 3, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: Ct, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: Ue.getEnumType(wt) }, { no: 6, name: "sdp_cid", kind: "scalar", T: 9 }]), mt = Ue.makeMessageType("livekit.TrackInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: Ue.getEnumType(Qe) }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "muted", kind: "scalar", T: 8 }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "simulcast", kind: "scalar", T: 8 }, { no: 8, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 9, name: "source", kind: "enum", T: Ue.getEnumType(Ye) }, { no: 10, name: "layers", kind: "message", T: Ct, repeated: true }, { no: 11, name: "mime_type", kind: "scalar", T: 9 }, { no: 12, name: "mid", kind: "scalar", T: 9 }, { no: 13, name: "codecs", kind: "message", T: pt, repeated: true }, { no: 14, name: "stereo", kind: "scalar", T: 8 }, { no: 15, name: "disable_red", kind: "scalar", T: 8 }, { no: 16, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 17, name: "stream", kind: "scalar", T: 9 }, { no: 18, name: "version", kind: "message", T: Yt }, { no: 19, name: "audio_features", kind: "enum", T: Ue.getEnumType(it), repeated: true }, { no: 20, name: "backup_codec_policy", kind: "enum", T: Ue.getEnumType(Je) }, { no: 21, name: "packet_trailer_features", kind: "enum", T: Ue.getEnumType(rt), repeated: true }]), gt = Ue.makeMessageType("livekit.DataTrackInfo", () => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }, { no: 2, name: "sid", kind: "scalar", T: 9 }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 5, name: "frame_encoding", kind: "message", T: vt, opt: true }, { no: 6, name: "schema", kind: "message", T: bt, opt: true }]), vt = Ue.makeMessageType("livekit.DataTrackFrameEncoding", () => [{ no: 1, name: "well_known", kind: "enum", T: Ue.getEnumType(ft), oneof: "value" }, { no: 2, name: "custom", kind: "scalar", T: 9, oneof: "value" }]), ft = Ue.makeEnum("livekit.DataTrackFrameEncoding.WellKnownFrameEncoding", [{ no: 0, name: "WELL_KNOWN_FRAME_ENCODING_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "WELL_KNOWN_FRAME_ENCODING_ROS1", localName: "ROS1" }, { no: 2, name: "WELL_KNOWN_FRAME_ENCODING_CDR", localName: "CDR" }, { no: 3, name: "WELL_KNOWN_FRAME_ENCODING_PROTOBUF", localName: "PROTOBUF" }, { no: 4, name: "WELL_KNOWN_FRAME_ENCODING_FLATBUFFER", localName: "FLATBUFFER" }, { no: 5, name: "WELL_KNOWN_FRAME_ENCODING_CBOR", localName: "CBOR" }, { no: 6, name: "WELL_KNOWN_FRAME_ENCODING_MSGPACK", localName: "MSGPACK" }, { no: 7, name: "WELL_KNOWN_FRAME_ENCODING_JSON", localName: "JSON" }]), kt = Ue.makeMessageType("livekit.DataTrackSchemaEncoding", () => [{ no: 1, name: "well_known", kind: "enum", T: Ue.getEnumType(yt), oneof: "value" }, { no: 2, name: "custom", kind: "scalar", T: 9, oneof: "value" }]), yt = Ue.makeEnum("livekit.DataTrackSchemaEncoding.WellKnownSchemaEncoding", [{ no: 0, name: "WELL_KNOWN_SCHEMA_ENCODING_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "WELL_KNOWN_SCHEMA_ENCODING_PROTOBUF", localName: "PROTOBUF" }, { no: 2, name: "WELL_KNOWN_SCHEMA_ENCODING_FLATBUFFER", localName: "FLATBUFFER" }, { no: 3, name: "WELL_KNOWN_SCHEMA_ENCODING_ROS1_MSG", localName: "ROS1_MSG" }, { no: 4, name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_MSG", localName: "ROS2_MSG" }, { no: 5, name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_IDL", localName: "ROS2_IDL" }, { no: 6, name: "WELL_KNOWN_SCHEMA_ENCODING_OMG_IDL", localName: "OMG_IDL" }, { no: 7, name: "WELL_KNOWN_SCHEMA_ENCODING_JSON_SCHEMA", localName: "JSON_SCHEMA" }]), bt = Ue.makeMessageType("livekit.DataTrackSchemaId", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "encoding", kind: "message", T: kt }]), Tt = Ue.makeMessageType("livekit.DataTrackSubscriptionOptions", () => [{ no: 1, name: "target_fps", kind: "scalar", T: 13, opt: true }]), St = Ue.makeMessageType("livekit.DataBlobKey", () => [{ no: 1, name: "generic", kind: "scalar", T: 9, oneof: "key" }, { no: 2, name: "schema_id", kind: "message", T: bt, oneof: "key" }]), Et = Ue.makeMessageType("livekit.DataBlob", () => [{ no: 1, name: "key", kind: "message", T: St }, { no: 2, name: "contents", kind: "scalar", T: 12 }]), Ct = Ue.makeMessageType("livekit.VideoLayer", () => [{ no: 1, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }, { no: 4, name: "bitrate", kind: "scalar", T: 13 }, { no: 5, name: "ssrc", kind: "scalar", T: 13 }, { no: 6, name: "spatial_layer", kind: "scalar", T: 5 }, { no: 7, name: "rid", kind: "scalar", T: 9 }, { no: 8, name: "repair_ssrc", kind: "scalar", T: 13 }]), wt = Ue.makeEnum("livekit.VideoLayer.Mode", [{ no: 0, name: "MODE_UNUSED" }, { no: 1, name: "ONE_SPATIAL_LAYER_PER_STREAM" }, { no: 2, name: "MULTIPLE_SPATIAL_LAYERS_PER_STREAM" }, { no: 3, name: "ONE_SPATIAL_LAYER_PER_STREAM_INCOMPLETE_RTCP_SR" }]), Rt = Ue.makeMessageType("livekit.DataPacket", () => [{ no: 1, name: "kind", kind: "enum", T: Ue.getEnumType(Pt) }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }, { no: 5, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "user", kind: "message", T: Ot, oneof: "value" }, { no: 3, name: "speaker", kind: "message", T: Mt, oneof: "value" }, { no: 6, name: "sip_dtmf", kind: "message", T: At, oneof: "value" }, { no: 7, name: "transcription", kind: "message", T: Nt, oneof: "value" }, { no: 8, name: "metrics", kind: "message", T: qe, oneof: "value" }, { no: 9, name: "chat_message", kind: "message", T: xt, oneof: "value" }, { no: 10, name: "rpc_request", kind: "message", T: Ut, oneof: "value" }, { no: 11, name: "rpc_ack", kind: "message", T: Ft, oneof: "value" }, { no: 12, name: "rpc_response", kind: "message", T: Bt, oneof: "value" }, { no: 13, name: "stream_header", kind: "message", T: tn, oneof: "value" }, { no: 14, name: "stream_chunk", kind: "message", T: nn, oneof: "value" }, { no: 15, name: "stream_trailer", kind: "message", T: rn, oneof: "value" }, { no: 18, name: "encrypted_packet", kind: "message", T: It, oneof: "value" }, { no: 16, name: "sequence", kind: "scalar", T: 13 }, { no: 17, name: "participant_sid", kind: "scalar", T: 9 }]), Pt = Ue.makeEnum("livekit.DataPacket.Kind", [{ no: 0, name: "RELIABLE" }, { no: 1, name: "LOSSY" }]), It = Ue.makeMessageType("livekit.EncryptedPacket", () => [{ no: 1, name: "encryption_type", kind: "enum", T: Ue.getEnumType(ht) }, { no: 2, name: "iv", kind: "scalar", T: 12 }, { no: 3, name: "key_index", kind: "scalar", T: 13 }, { no: 4, name: "encrypted_value", kind: "scalar", T: 12 }]), _t = Ue.makeMessageType("livekit.EncryptedPacketPayload", () => [{ no: 1, name: "user", kind: "message", T: Ot, oneof: "value" }, { no: 3, name: "chat_message", kind: "message", T: xt, oneof: "value" }, { no: 4, name: "rpc_request", kind: "message", T: Ut, oneof: "value" }, { no: 5, name: "rpc_ack", kind: "message", T: Ft, oneof: "value" }, { no: 6, name: "rpc_response", kind: "message", T: Bt, oneof: "value" }, { no: 7, name: "stream_header", kind: "message", T: tn, oneof: "value" }, { no: 8, name: "stream_chunk", kind: "message", T: nn, oneof: "value" }, { no: 9, name: "stream_trailer", kind: "message", T: rn, oneof: "value" }]), Mt = Ue.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{ no: 1, name: "speakers", kind: "message", T: Dt, repeated: true }]), Dt = Ue.makeMessageType("livekit.SpeakerInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "level", kind: "scalar", T: 2 }, { no: 3, name: "active", kind: "scalar", T: 8 }]), Ot = Ue.makeMessageType("livekit.UserPacket", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 5, name: "participant_identity", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 12 }, { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "topic", kind: "scalar", T: 9, opt: true }, { no: 8, name: "id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "start_time", kind: "scalar", T: 4, opt: true }, { no: 10, name: "end_time", kind: "scalar", T: 4, opt: true }, { no: 11, name: "nonce", kind: "scalar", T: 12 }]), At = Ue.makeMessageType("livekit.SipDTMF", () => [{ no: 3, name: "code", kind: "scalar", T: 13 }, { no: 4, name: "digit", kind: "scalar", T: 9 }]), Nt = Ue.makeMessageType("livekit.Transcription", () => [{ no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 }, { no: 3, name: "track_id", kind: "scalar", T: 9 }, { no: 4, name: "segments", kind: "message", T: Lt, repeated: true }]), Lt = Ue.makeMessageType("livekit.TranscriptionSegment", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_time", kind: "scalar", T: 4 }, { no: 4, name: "end_time", kind: "scalar", T: 4 }, { no: 5, name: "final", kind: "scalar", T: 8 }, { no: 6, name: "language", kind: "scalar", T: 9 }]), xt = Ue.makeMessageType("livekit.ChatMessage", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: true }, { no: 4, name: "message", kind: "scalar", T: 9 }, { no: 5, name: "deleted", kind: "scalar", T: 8 }, { no: 6, name: "generated", kind: "scalar", T: 8 }]), Ut = Ue.makeMessageType("livekit.RpcRequest", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "method", kind: "scalar", T: 9 }, { no: 3, name: "payload", kind: "scalar", T: 9 }, { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 }, { no: 5, name: "version", kind: "scalar", T: 13 }, { no: 6, name: "compressed_payload", kind: "scalar", T: 12 }]), Ft = Ue.makeMessageType("livekit.RpcAck", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }]), Bt = Ue.makeMessageType("livekit.RpcResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" }, { no: 3, name: "error", kind: "message", T: jt, oneof: "value" }, { no: 4, name: "compressed_payload", kind: "scalar", T: 12, oneof: "value" }]), jt = Ue.makeMessageType("livekit.RpcError", () => [{ no: 1, name: "code", kind: "scalar", T: 13 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "data", kind: "scalar", T: 9 }]), qt = Ue.makeMessageType("livekit.ParticipantTracks", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: true }]), Vt = Ue.makeMessageType("livekit.ServerInfo", () => [{ no: 1, name: "edition", kind: "enum", T: Ue.getEnumType(Wt) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "region", kind: "scalar", T: 9 }, { no: 5, name: "node_id", kind: "scalar", T: 9 }, { no: 6, name: "debug_info", kind: "scalar", T: 9 }, { no: 7, name: "agent_protocol", kind: "scalar", T: 5 }]), Wt = Ue.makeEnum("livekit.ServerInfo.Edition", [{ no: 0, name: "Standard" }, { no: 1, name: "Cloud" }]), Ht = Ue.makeMessageType("livekit.ClientInfo", () => [{ no: 1, name: "sdk", kind: "enum", T: Ue.getEnumType(Kt) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "os", kind: "scalar", T: 9 }, { no: 5, name: "os_version", kind: "scalar", T: 9 }, { no: 6, name: "device_model", kind: "scalar", T: 9 }, { no: 7, name: "browser", kind: "scalar", T: 9 }, { no: 8, name: "browser_version", kind: "scalar", T: 9 }, { no: 9, name: "address", kind: "scalar", T: 9 }, { no: 10, name: "network", kind: "scalar", T: 9 }, { no: 11, name: "other_sdks", kind: "scalar", T: 9 }, { no: 12, name: "client_protocol", kind: "scalar", T: 5 }, { no: 13, name: "capabilities", kind: "enum", T: Ue.getEnumType(zt), repeated: true }]), Kt = Ue.makeEnum("livekit.ClientInfo.SDK", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "JS" }, { no: 2, name: "SWIFT" }, { no: 3, name: "ANDROID" }, { no: 4, name: "FLUTTER" }, { no: 5, name: "GO" }, { no: 6, name: "UNITY" }, { no: 7, name: "REACT_NATIVE" }, { no: 8, name: "RUST" }, { no: 9, name: "PYTHON" }, { no: 10, name: "CPP" }, { no: 11, name: "UNITY_WEB" }, { no: 12, name: "NODE" }, { no: 13, name: "UNREAL" }, { no: 14, name: "ESP32" }]), zt = Ue.makeEnum("livekit.ClientInfo.Capability", [{ no: 0, name: "CAP_UNUSED" }, { no: 1, name: "CAP_PACKET_TRAILER" }, { no: 2, name: "CAP_COMPRESSION_DEFLATE_RAW" }]), Gt = Ue.makeMessageType("livekit.ClientConfiguration", () => [{ no: 1, name: "video", kind: "message", T: Jt }, { no: 2, name: "screen", kind: "message", T: Jt }, { no: 3, name: "resume_connection", kind: "enum", T: Ue.getEnumType($e) }, { no: 4, name: "disabled_codecs", kind: "message", T: Qt }, { no: 5, name: "force_relay", kind: "enum", T: Ue.getEnumType($e) }]), Jt = Ue.makeMessageType("livekit.VideoConfiguration", () => [{ no: 1, name: "hardware_encoder", kind: "enum", T: Ue.getEnumType($e) }]), Qt = Ue.makeMessageType("livekit.DisabledCodecs", () => [{ no: 1, name: "codecs", kind: "message", T: st, repeated: true }, { no: 2, name: "publish", kind: "message", T: st, repeated: true }]), Yt = Ue.makeMessageType("livekit.TimedVersion", () => [{ no: 1, name: "unix_micro", kind: "scalar", T: 3 }, { no: 2, name: "ticks", kind: "scalar", T: 5 }]), Xt = Ue.makeEnum("livekit.DataStream.OperationType", [{ no: 0, name: "CREATE" }, { no: 1, name: "UPDATE" }, { no: 2, name: "DELETE" }, { no: 3, name: "REACTION" }]), Zt = Ue.makeEnum("livekit.DataStream.CompressionType", [{ no: 0, name: "NONE" }, { no: 1, name: "DEFLATE_RAW" }]), $t = Ue.makeMessageType("livekit.DataStream.TextHeader", () => [{ no: 1, name: "operation_type", kind: "enum", T: Ue.getEnumType(Xt) }, { no: 2, name: "version", kind: "scalar", T: 5 }, { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 }, { no: 4, name: "attached_stream_ids", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "generated", kind: "scalar", T: 8 }], { localName: "DataStream_TextHeader" }), en = Ue.makeMessageType("livekit.DataStream.ByteHeader", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }], { localName: "DataStream_ByteHeader" }), tn = Ue.makeMessageType("livekit.DataStream.Header", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "topic", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 5, name: "total_length", kind: "scalar", T: 4, opt: true }, { no: 7, name: "encryption_type", kind: "enum", T: Ue.getEnumType(ht) }, { no: 8, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "text_header", kind: "message", T: $t, oneof: "content_header" }, { no: 10, name: "byte_header", kind: "message", T: en, oneof: "content_header" }, { no: 11, name: "inline_content", kind: "scalar", T: 12, opt: true }, { no: 12, name: "compression", kind: "enum", T: Ue.getEnumType(Zt) }], { localName: "DataStream_Header" }), nn = Ue.makeMessageType("livekit.DataStream.Chunk", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "chunk_index", kind: "scalar", T: 4 }, { no: 3, name: "content", kind: "scalar", T: 12 }, { no: 4, name: "version", kind: "scalar", T: 5 }, { no: 5, name: "iv", kind: "scalar", T: 12, opt: true }], { localName: "DataStream_Chunk" }), rn = Ue.makeMessageType("livekit.DataStream.Trailer", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "DataStream_Trailer" }), an = Ue.makeMessageType("livekit.FilterParams", () => [{ no: 1, name: "include_events", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "exclude_events", kind: "scalar", T: 9, repeated: true }]), sn = Ue.makeMessageType("livekit.WebhookConfig", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "signing_key", kind: "scalar", T: 9 }, { no: 3, name: "filter_params", kind: "message", T: an }]), on = Ue.makeMessageType("livekit.SubscribedAudioCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "enabled", kind: "scalar", T: 8 }]), cn = Ue.makeEnum("livekit.JobRestartPolicy", [{ no: 0, name: "JRP_ON_FAILURE" }, { no: 1, name: "JRP_NEVER" }]), dn = Ue.makeMessageType("livekit.RoomAgentDispatch", () => [{ no: 1, name: "agent_name", kind: "scalar", T: 9 }, { no: 2, name: "metadata", kind: "scalar", T: 9 }, { no: 3, name: "restart_policy", kind: "enum", T: Ue.getEnumType(cn) }, { no: 4, name: "deployment", kind: "scalar", T: 9 }, { no: 5, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), ln = Ue.makeEnum("livekit.EncodingOptionsPreset", [{ no: 0, name: "H264_720P_30" }, { no: 1, name: "H264_720P_60" }, { no: 2, name: "H264_1080P_30" }, { no: 3, name: "H264_1080P_60" }, { no: 4, name: "PORTRAIT_H264_720P_30" }, { no: 5, name: "PORTRAIT_H264_720P_60" }, { no: 6, name: "PORTRAIT_H264_1080P_30" }, { no: 7, name: "PORTRAIT_H264_1080P_60" }]), un = Ue.makeEnum("livekit.EncodedFileType", [{ no: 0, name: "DEFAULT_FILETYPE" }, { no: 1, name: "MP4" }, { no: 2, name: "OGG" }, { no: 3, name: "MP3" }]), hn = Ue.makeEnum("livekit.StreamProtocol", [{ no: 0, name: "DEFAULT_PROTOCOL" }, { no: 1, name: "RTMP" }, { no: 2, name: "SRT" }, { no: 3, name: "WEBSOCKET" }]), pn = Ue.makeEnum("livekit.SegmentedFileProtocol", [{ no: 0, name: "DEFAULT_SEGMENTED_FILE_PROTOCOL" }, { no: 1, name: "HLS_PROTOCOL" }]), mn = Ue.makeEnum("livekit.SegmentedFileSuffix", [{ no: 0, name: "INDEX" }, { no: 1, name: "TIMESTAMP" }]), gn = Ue.makeEnum("livekit.ImageFileSuffix", [{ no: 0, name: "IMAGE_SUFFIX_INDEX" }, { no: 1, name: "IMAGE_SUFFIX_TIMESTAMP" }, { no: 2, name: "IMAGE_SUFFIX_NONE_OVERWRITE" }]), vn = Ue.makeEnum("livekit.AudioMixing", [{ no: 0, name: "DEFAULT_MIXING" }, { no: 1, name: "DUAL_CHANNEL_AGENT" }, { no: 2, name: "DUAL_CHANNEL_ALTERNATE" }]), fn = Ue.makeMessageType("livekit.EncodingOptions", () => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }, { no: 3, name: "depth", kind: "scalar", T: 5 }, { no: 4, name: "framerate", kind: "scalar", T: 5 }, { no: 5, name: "audio_codec", kind: "enum", T: Ue.getEnumType(Ke) }, { no: 6, name: "audio_bitrate", kind: "scalar", T: 5 }, { no: 7, name: "audio_frequency", kind: "scalar", T: 5 }, { no: 8, name: "video_codec", kind: "enum", T: Ue.getEnumType(ze) }, { no: 9, name: "video_bitrate", kind: "scalar", T: 5 }, { no: 10, name: "key_frame_interval", kind: "scalar", T: 1 }, { no: 11, name: "audio_quality", kind: "scalar", T: 5 }, { no: 12, name: "video_quality", kind: "scalar", T: 5 }]), kn = Ue.makeMessageType("livekit.StreamOutput", () => [{ no: 1, name: "protocol", kind: "enum", T: Ue.getEnumType(hn) }, { no: 2, name: "urls", kind: "scalar", T: 9, repeated: true }]), yn = Ue.makeMessageType("livekit.SegmentedFileOutput", () => [{ no: 1, name: "protocol", kind: "enum", T: Ue.getEnumType(pn) }, { no: 2, name: "filename_prefix", kind: "scalar", T: 9 }, { no: 3, name: "playlist_name", kind: "scalar", T: 9 }, { no: 11, name: "live_playlist_name", kind: "scalar", T: 9 }, { no: 4, name: "segment_duration", kind: "scalar", T: 13 }, { no: 10, name: "filename_suffix", kind: "enum", T: Ue.getEnumType(mn) }, { no: 8, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 5, name: "s3", kind: "message", T: Tn, oneof: "output" }, { no: 6, name: "gcp", kind: "message", T: Sn, oneof: "output" }, { no: 7, name: "azure", kind: "message", T: En, oneof: "output" }, { no: 9, name: "aliOSS", kind: "message", T: Cn, oneof: "output" }]), bn = Ue.makeMessageType("livekit.ImageOutput", () => [{ no: 1, name: "capture_interval", kind: "scalar", T: 13 }, { no: 2, name: "width", kind: "scalar", T: 5 }, { no: 3, name: "height", kind: "scalar", T: 5 }, { no: 4, name: "filename_prefix", kind: "scalar", T: 9 }, { no: 5, name: "filename_suffix", kind: "enum", T: Ue.getEnumType(gn) }, { no: 6, name: "image_codec", kind: "enum", T: Ue.getEnumType(Ge) }, { no: 7, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 8, name: "s3", kind: "message", T: Tn, oneof: "output" }, { no: 9, name: "gcp", kind: "message", T: Sn, oneof: "output" }, { no: 10, name: "azure", kind: "message", T: En, oneof: "output" }, { no: 11, name: "aliOSS", kind: "message", T: Cn, oneof: "output" }]), Tn = Ue.makeMessageType("livekit.S3Upload", () => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret", kind: "scalar", T: 9 }, { no: 11, name: "session_token", kind: "scalar", T: 9 }, { no: 12, name: "assume_role_arn", kind: "scalar", T: 9 }, { no: 13, name: "assume_role_external_id", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "endpoint", kind: "scalar", T: 9 }, { no: 5, name: "bucket", kind: "scalar", T: 9 }, { no: 6, name: "force_path_style", kind: "scalar", T: 8 }, { no: 7, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "tagging", kind: "scalar", T: 9 }, { no: 9, name: "content_disposition", kind: "scalar", T: 9 }, { no: 10, name: "proxy", kind: "message", T: wn }]), Sn = Ue.makeMessageType("livekit.GCPUpload", () => [{ no: 1, name: "credentials", kind: "scalar", T: 9 }, { no: 2, name: "bucket", kind: "scalar", T: 9 }, { no: 3, name: "proxy", kind: "message", T: wn }]), En = Ue.makeMessageType("livekit.AzureBlobUpload", () => [{ no: 1, name: "account_name", kind: "scalar", T: 9 }, { no: 2, name: "account_key", kind: "scalar", T: 9 }, { no: 3, name: "container_name", kind: "scalar", T: 9 }]), Cn = Ue.makeMessageType("livekit.AliOSSUpload", () => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "endpoint", kind: "scalar", T: 9 }, { no: 5, name: "bucket", kind: "scalar", T: 9 }]), wn = Ue.makeMessageType("livekit.ProxyConfig", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "password", kind: "scalar", T: 9 }]), Rn = Ue.makeMessageType("livekit.AutoParticipantEgress", () => [{ no: 1, name: "preset", kind: "enum", T: Ue.getEnumType(ln), oneof: "options" }, { no: 2, name: "advanced", kind: "message", T: fn, oneof: "options" }, { no: 3, name: "file_outputs", kind: "message", T: _n, repeated: true }, { no: 4, name: "segment_outputs", kind: "message", T: yn, repeated: true }]), Pn = Ue.makeMessageType("livekit.AutoTrackEgress", () => [{ no: 1, name: "filepath", kind: "scalar", T: 9 }, { no: 5, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 2, name: "s3", kind: "message", T: Tn, oneof: "output" }, { no: 3, name: "gcp", kind: "message", T: Sn, oneof: "output" }, { no: 4, name: "azure", kind: "message", T: En, oneof: "output" }, { no: 6, name: "aliOSS", kind: "message", T: Cn, oneof: "output" }]), In = Ue.makeMessageType("livekit.RoomCompositeEgressRequest", () => [{ no: 1, name: "room_name", kind: "scalar", T: 9 }, { no: 2, name: "layout", kind: "scalar", T: 9 }, { no: 3, name: "audio_only", kind: "scalar", T: 8 }, { no: 15, name: "audio_mixing", kind: "enum", T: Ue.getEnumType(vn) }, { no: 4, name: "video_only", kind: "scalar", T: 8 }, { no: 5, name: "custom_base_url", kind: "scalar", T: 9 }, { no: 6, name: "file", kind: "message", T: _n, oneof: "output" }, { no: 7, name: "stream", kind: "message", T: kn, oneof: "output" }, { no: 10, name: "segments", kind: "message", T: yn, oneof: "output" }, { no: 8, name: "preset", kind: "enum", T: Ue.getEnumType(ln), oneof: "options" }, { no: 9, name: "advanced", kind: "message", T: fn, oneof: "options" }, { no: 11, name: "file_outputs", kind: "message", T: _n, repeated: true }, { no: 12, name: "stream_outputs", kind: "message", T: kn, repeated: true }, { no: 13, name: "segment_outputs", kind: "message", T: yn, repeated: true }, { no: 14, name: "image_outputs", kind: "message", T: bn, repeated: true }, { no: 16, name: "webhooks", kind: "message", T: sn, repeated: true }]), _n = Ue.makeMessageType("livekit.EncodedFileOutput", () => [{ no: 1, name: "file_type", kind: "enum", T: Ue.getEnumType(un) }, { no: 2, name: "filepath", kind: "scalar", T: 9 }, { no: 6, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 3, name: "s3", kind: "message", T: Tn, oneof: "output" }, { no: 4, name: "gcp", kind: "message", T: Sn, oneof: "output" }, { no: 5, name: "azure", kind: "message", T: En, oneof: "output" }, { no: 7, name: "aliOSS", kind: "message", T: Cn, oneof: "output" }]), Mn = Ue.makeMessageType("livekit.RoomEgress", () => [{ no: 1, name: "room", kind: "message", T: In }, { no: 3, name: "participant", kind: "message", T: Rn }, { no: 2, name: "tracks", kind: "message", T: Pn }]), Dn = Ue.makeMessageType("livekit.RoomConfiguration", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 3, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 11, name: "metadata", kind: "scalar", T: 9 }, { no: 5, name: "egress", kind: "message", T: Mn }, { no: 7, name: "min_playout_delay", kind: "scalar", T: 13 }, { no: 8, name: "max_playout_delay", kind: "scalar", T: 13 }, { no: 9, name: "sync_streams", kind: "scalar", T: 8 }, { no: 10, name: "agents", kind: "message", T: dn, repeated: true }, { no: 12, name: "tags", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), On = Ue.makeEnum("livekit.SignalTarget", [{ no: 0, name: "PUBLISHER" }, { no: 1, name: "SUBSCRIBER" }]), An = Ue.makeEnum("livekit.StreamState", [{ no: 0, name: "ACTIVE" }, { no: 1, name: "PAUSED" }]), Nn = Ue.makeEnum("livekit.CandidateProtocol", [{ no: 0, name: "UDP" }, { no: 1, name: "TCP" }, { no: 2, name: "TLS" }]), Ln = Ue.makeMessageType("livekit.SignalRequest", () => [{ no: 1, name: "offer", kind: "message", T: Xn, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: Xn, oneof: "message" }, { no: 3, name: "trickle", kind: "message", T: Kn, oneof: "message" }, { no: 4, name: "add_track", kind: "message", T: Fn, oneof: "message" }, { no: 5, name: "mute", kind: "message", T: zn, oneof: "message" }, { no: 6, name: "subscription", kind: "message", T: $n, oneof: "message" }, { no: 7, name: "track_setting", kind: "message", T: si, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: di, oneof: "message" }, { no: 10, name: "update_layers", kind: "message", T: ui, oneof: "message" }, { no: 11, name: "subscription_permission", kind: "message", T: wi, oneof: "message" }, { no: 12, name: "sync_state", kind: "message", T: Ii, oneof: "message" }, { no: 13, name: "simulate", kind: "message", T: Di, oneof: "message" }, { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" }, { no: 15, name: "update_metadata", kind: "message", T: hi, oneof: "message" }, { no: 16, name: "ping_req", kind: "message", T: Oi, oneof: "message" }, { no: 17, name: "update_audio_track", kind: "message", T: oi, oneof: "message" }, { no: 18, name: "update_video_track", kind: "message", T: ci, oneof: "message" }, { no: 19, name: "publish_data_track_request", kind: "message", T: Bn, oneof: "message" }, { no: 20, name: "unpublish_data_track_request", kind: "message", T: qn, oneof: "message" }, { no: 21, name: "update_data_subscription", kind: "message", T: ei, oneof: "message" }, { no: 22, name: "store_data_blob_request", kind: "message", T: ni, oneof: "message" }, { no: 23, name: "get_data_blob_request", kind: "message", T: ri, oneof: "message" }]), xn = Ue.makeMessageType("livekit.SignalResponse", () => [{ no: 1, name: "join", kind: "message", T: Gn, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: Xn, oneof: "message" }, { no: 3, name: "offer", kind: "message", T: Xn, oneof: "message" }, { no: 4, name: "trickle", kind: "message", T: Kn, oneof: "message" }, { no: 5, name: "update", kind: "message", T: Zn, oneof: "message" }, { no: 6, name: "track_published", kind: "message", T: Qn, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: di, oneof: "message" }, { no: 9, name: "mute", kind: "message", T: zn, oneof: "message" }, { no: 10, name: "speakers_changed", kind: "message", T: mi, oneof: "message" }, { no: 11, name: "room_update", kind: "message", T: gi, oneof: "message" }, { no: 12, name: "connection_quality", kind: "message", T: fi, oneof: "message" }, { no: 13, name: "stream_state_update", kind: "message", T: yi, oneof: "message" }, { no: 14, name: "subscribed_quality_update", kind: "message", T: Si, oneof: "message" }, { no: 15, name: "subscription_permission_update", kind: "message", T: Ri, oneof: "message" }, { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" }, { no: 17, name: "track_unpublished", kind: "message", T: Yn, oneof: "message" }, { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" }, { no: 19, name: "reconnect", kind: "message", T: Jn, oneof: "message" }, { no: 20, name: "pong_resp", kind: "message", T: Ai, oneof: "message" }, { no: 21, name: "subscription_response", kind: "message", T: xi, oneof: "message" }, { no: 22, name: "request_response", kind: "message", T: Ui, oneof: "message" }, { no: 23, name: "track_subscribed", kind: "message", T: Bi, oneof: "message" }, { no: 24, name: "room_moved", kind: "message", T: Pi, oneof: "message" }, { no: 25, name: "media_sections_requirement", kind: "message", T: Hi, oneof: "message" }, { no: 26, name: "subscribed_audio_codec_update", kind: "message", T: Ei, oneof: "message" }, { no: 27, name: "publish_data_track_response", kind: "message", T: jn, oneof: "message" }, { no: 28, name: "unpublish_data_track_response", kind: "message", T: Vn, oneof: "message" }, { no: 29, name: "data_track_subscriber_handles", kind: "message", T: Wn, oneof: "message" }, { no: 30, name: "store_data_blob_response", kind: "message", T: ii, oneof: "message" }, { no: 31, name: "get_data_blob_response", kind: "message", T: ai, oneof: "message" }]), Un = Ue.makeMessageType("livekit.SimulcastCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: Ct, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: Ue.getEnumType(wt) }]), Fn = Ue.makeMessageType("livekit.AddTrackRequest", () => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "enum", T: Ue.getEnumType(Qe) }, { no: 4, name: "width", kind: "scalar", T: 13 }, { no: 5, name: "height", kind: "scalar", T: 13 }, { no: 6, name: "muted", kind: "scalar", T: 8 }, { no: 7, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 8, name: "source", kind: "enum", T: Ue.getEnumType(Ye) }, { no: 9, name: "layers", kind: "message", T: Ct, repeated: true }, { no: 10, name: "simulcast_codecs", kind: "message", T: Un, repeated: true }, { no: 11, name: "sid", kind: "scalar", T: 9 }, { no: 12, name: "stereo", kind: "scalar", T: 8 }, { no: 13, name: "disable_red", kind: "scalar", T: 8 }, { no: 14, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 15, name: "stream", kind: "scalar", T: 9 }, { no: 16, name: "backup_codec_policy", kind: "enum", T: Ue.getEnumType(Je) }, { no: 17, name: "audio_features", kind: "enum", T: Ue.getEnumType(it), repeated: true }, { no: 18, name: "packet_trailer_features", kind: "enum", T: Ue.getEnumType(rt), repeated: true }]), Bn = Ue.makeMessageType("livekit.PublishDataTrackRequest", () => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 4, name: "frame_encoding", kind: "message", T: vt, opt: true }, { no: 5, name: "schema", kind: "message", T: bt, opt: true }]), jn = Ue.makeMessageType("livekit.PublishDataTrackResponse", () => [{ no: 1, name: "info", kind: "message", T: gt }]), qn = Ue.makeMessageType("livekit.UnpublishDataTrackRequest", () => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }]), Vn = Ue.makeMessageType("livekit.UnpublishDataTrackResponse", () => [{ no: 1, name: "info", kind: "message", T: gt }]), Wn = Ue.makeMessageType("livekit.DataTrackSubscriberHandles", () => [{ no: 1, name: "sub_handles", kind: "map", K: 13, V: { kind: "message", T: Hn } }]), Hn = Ue.makeMessageType("livekit.DataTrackSubscriberHandles.PublishedDataTrack", () => [{ no: 1, name: "publisher_identity", kind: "scalar", T: 9 }, { no: 2, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 3, name: "track_sid", kind: "scalar", T: 9 }], { localName: "DataTrackSubscriberHandles_PublishedDataTrack" }), Kn = Ue.makeMessageType("livekit.TrickleRequest", () => [{ no: 1, name: "candidateInit", kind: "scalar", T: 9 }, { no: 2, name: "target", kind: "enum", T: Ue.getEnumType(On) }, { no: 3, name: "final", kind: "scalar", T: 8 }]), zn = Ue.makeMessageType("livekit.MuteTrackRequest", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "muted", kind: "scalar", T: 8 }]), Gn = Ue.makeMessageType("livekit.JoinResponse", () => [{ no: 1, name: "room", kind: "message", T: at }, { no: 2, name: "participant", kind: "message", T: ct }, { no: 3, name: "other_participants", kind: "message", T: ct, repeated: true }, { no: 4, name: "server_version", kind: "scalar", T: 9 }, { no: 5, name: "ice_servers", kind: "message", T: pi, repeated: true }, { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 }, { no: 7, name: "alternative_url", kind: "scalar", T: 9 }, { no: 8, name: "client_configuration", kind: "message", T: Gt }, { no: 9, name: "server_region", kind: "scalar", T: 9 }, { no: 10, name: "ping_timeout", kind: "scalar", T: 5 }, { no: 11, name: "ping_interval", kind: "scalar", T: 5 }, { no: 12, name: "server_info", kind: "message", T: Vt }, { no: 13, name: "sif_trailer", kind: "scalar", T: 12 }, { no: 14, name: "enabled_publish_codecs", kind: "message", T: st, repeated: true }, { no: 15, name: "fast_publish", kind: "scalar", T: 8 }]), Jn = Ue.makeMessageType("livekit.ReconnectResponse", () => [{ no: 1, name: "ice_servers", kind: "message", T: pi, repeated: true }, { no: 2, name: "client_configuration", kind: "message", T: Gt }, { no: 3, name: "server_info", kind: "message", T: Vt }, { no: 4, name: "last_message_seq", kind: "scalar", T: 13 }]), Qn = Ue.makeMessageType("livekit.TrackPublishedResponse", () => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "track", kind: "message", T: mt }]), Yn = Ue.makeMessageType("livekit.TrackUnpublishedResponse", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }]), Xn = Ue.makeMessageType("livekit.SessionDescription", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "sdp", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 13 }, { no: 4, name: "mid_to_track_id", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), Zn = Ue.makeMessageType("livekit.ParticipantUpdate", () => [{ no: 1, name: "participants", kind: "message", T: ct, repeated: true }]), $n = Ue.makeMessageType("livekit.UpdateSubscription", () => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "participant_tracks", kind: "message", T: qt, repeated: true }]), ei = Ue.makeMessageType("livekit.UpdateDataSubscription", () => [{ no: 1, name: "updates", kind: "message", T: ti, repeated: true }]), ti = Ue.makeMessageType("livekit.UpdateDataSubscription.Update", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "options", kind: "message", T: Tt }], { localName: "UpdateDataSubscription_Update" }), ni = Ue.makeMessageType("livekit.StoreDataBlobRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "blob", kind: "message", T: Et }]), ii = Ue.makeMessageType("livekit.StoreDataBlobResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "key", kind: "message", T: St }]), ri = Ue.makeMessageType("livekit.GetDataBlobRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 9 }, { no: 3, name: "key", kind: "message", T: St }]), ai = Ue.makeMessageType("livekit.GetDataBlobResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "blob", kind: "message", T: Et }]), si = Ue.makeMessageType("livekit.UpdateTrackSettings", () => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "disabled", kind: "scalar", T: 8 }, { no: 4, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "fps", kind: "scalar", T: 13 }, { no: 8, name: "priority", kind: "scalar", T: 13 }]), oi = Ue.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "features", kind: "enum", T: Ue.getEnumType(it), repeated: true }]), ci = Ue.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }]), di = Ue.makeMessageType("livekit.LeaveRequest", () => [{ no: 1, name: "can_reconnect", kind: "scalar", T: 8 }, { no: 2, name: "reason", kind: "enum", T: Ue.getEnumType(et) }, { no: 3, name: "action", kind: "enum", T: Ue.getEnumType(li) }, { no: 4, name: "regions", kind: "message", T: Ni }]), li = Ue.makeEnum("livekit.LeaveRequest.Action", [{ no: 0, name: "DISCONNECT" }, { no: 1, name: "RESUME" }, { no: 2, name: "RECONNECT" }]), ui = Ue.makeMessageType("livekit.UpdateVideoLayers", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "layers", kind: "message", T: Ct, repeated: true }]), hi = Ue.makeMessageType("livekit.UpdateParticipantMetadata", () => [{ no: 1, name: "metadata", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 4, name: "request_id", kind: "scalar", T: 13 }]), pi = Ue.makeMessageType("livekit.ICEServer", () => [{ no: 1, name: "urls", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "credential", kind: "scalar", T: 9 }]), mi = Ue.makeMessageType("livekit.SpeakersChanged", () => [{ no: 1, name: "speakers", kind: "message", T: Dt, repeated: true }]), gi = Ue.makeMessageType("livekit.RoomUpdate", () => [{ no: 1, name: "room", kind: "message", T: at }]), vi = Ue.makeMessageType("livekit.ConnectionQualityInfo", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "quality", kind: "enum", T: Ue.getEnumType(Ze) }, { no: 3, name: "score", kind: "scalar", T: 2 }]), fi = Ue.makeMessageType("livekit.ConnectionQualityUpdate", () => [{ no: 1, name: "updates", kind: "message", T: vi, repeated: true }]), ki = Ue.makeMessageType("livekit.StreamStateInfo", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Ue.getEnumType(An) }]), yi = Ue.makeMessageType("livekit.StreamStateUpdate", () => [{ no: 1, name: "stream_states", kind: "message", T: ki, repeated: true }]), bi = Ue.makeMessageType("livekit.SubscribedQuality", () => [{ no: 1, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 2, name: "enabled", kind: "scalar", T: 8 }]), Ti = Ue.makeMessageType("livekit.SubscribedCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "qualities", kind: "message", T: bi, repeated: true }]), Si = Ue.makeMessageType("livekit.SubscribedQualityUpdate", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_qualities", kind: "message", T: bi, repeated: true }, { no: 3, name: "subscribed_codecs", kind: "message", T: Ti, repeated: true }]), Ei = Ue.makeMessageType("livekit.SubscribedAudioCodecUpdate", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_audio_codecs", kind: "message", T: on, repeated: true }]), Ci = Ue.makeMessageType("livekit.TrackPermission", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "all_tracks", kind: "scalar", T: 8 }, { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }]), wi = Ue.makeMessageType("livekit.SubscriptionPermission", () => [{ no: 1, name: "all_participants", kind: "scalar", T: 8 }, { no: 2, name: "track_permissions", kind: "message", T: Ci, repeated: true }]), Ri = Ue.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "allowed", kind: "scalar", T: 8 }]), Pi = Ue.makeMessageType("livekit.RoomMovedResponse", () => [{ no: 1, name: "room", kind: "message", T: at }, { no: 2, name: "token", kind: "scalar", T: 9 }, { no: 3, name: "participant", kind: "message", T: ct }, { no: 4, name: "other_participants", kind: "message", T: ct, repeated: true }]), Ii = Ue.makeMessageType("livekit.SyncState", () => [{ no: 1, name: "answer", kind: "message", T: Xn }, { no: 2, name: "subscription", kind: "message", T: $n }, { no: 3, name: "publish_tracks", kind: "message", T: Qn, repeated: true }, { no: 4, name: "data_channels", kind: "message", T: Mi, repeated: true }, { no: 5, name: "offer", kind: "message", T: Xn }, { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "datachannel_receive_states", kind: "message", T: _i, repeated: true }, { no: 8, name: "publish_data_tracks", kind: "message", T: jn, repeated: true }]), _i = Ue.makeMessageType("livekit.DataChannelReceiveState", () => [{ no: 1, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 2, name: "last_seq", kind: "scalar", T: 13 }]), Mi = Ue.makeMessageType("livekit.DataChannelInfo", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 13 }, { no: 3, name: "target", kind: "enum", T: Ue.getEnumType(On) }]), Di = Ue.makeMessageType("livekit.SimulateScenario", () => [{ no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" }, { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" }, { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" }, { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" }, { no: 5, name: "switch_candidate_protocol", kind: "enum", T: Ue.getEnumType(Nn), oneof: "scenario" }, { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3, oneof: "scenario" }, { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8, oneof: "scenario" }, { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8, oneof: "scenario" }, { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8, oneof: "scenario" }]), Oi = Ue.makeMessageType("livekit.Ping", () => [{ no: 1, name: "timestamp", kind: "scalar", T: 3 }, { no: 2, name: "rtt", kind: "scalar", T: 3 }]), Ai = Ue.makeMessageType("livekit.Pong", () => [{ no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }]), Ni = Ue.makeMessageType("livekit.RegionSettings", () => [{ no: 1, name: "regions", kind: "message", T: Li, repeated: true }]), Li = Ue.makeMessageType("livekit.RegionInfo", () => [{ no: 1, name: "region", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "distance", kind: "scalar", T: 3 }]), xi = Ue.makeMessageType("livekit.SubscriptionResponse", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "err", kind: "enum", T: Ue.getEnumType(nt) }]), Ui = Ue.makeMessageType("livekit.RequestResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "reason", kind: "enum", T: Ue.getEnumType(Fi) }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "trickle", kind: "message", T: Kn, oneof: "request" }, { no: 5, name: "add_track", kind: "message", T: Fn, oneof: "request" }, { no: 6, name: "mute", kind: "message", T: zn, oneof: "request" }, { no: 7, name: "update_metadata", kind: "message", T: hi, oneof: "request" }, { no: 8, name: "update_audio_track", kind: "message", T: oi, oneof: "request" }, { no: 9, name: "update_video_track", kind: "message", T: ci, oneof: "request" }, { no: 10, name: "publish_data_track", kind: "message", T: Bn, oneof: "request" }, { no: 11, name: "unpublish_data_track", kind: "message", T: qn, oneof: "request" }]), Fi = Ue.makeEnum("livekit.RequestResponse.Reason", [{ no: 0, name: "OK" }, { no: 1, name: "NOT_FOUND" }, { no: 2, name: "NOT_ALLOWED" }, { no: 3, name: "LIMIT_EXCEEDED" }, { no: 4, name: "QUEUED" }, { no: 5, name: "UNSUPPORTED_TYPE" }, { no: 6, name: "UNCLASSIFIED_ERROR" }, { no: 7, name: "INVALID_HANDLE" }, { no: 8, name: "INVALID_NAME" }, { no: 9, name: "DUPLICATE_HANDLE" }, { no: 10, name: "DUPLICATE_NAME" }, { no: 11, name: "INVALID_REQUEST" }]), Bi = Ue.makeMessageType("livekit.TrackSubscribed", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }]), ji = Ue.makeMessageType("livekit.ConnectionSettings", () => [{ no: 1, name: "auto_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "adaptive_stream", kind: "scalar", T: 8 }, { no: 3, name: "subscriber_allow_pause", kind: "scalar", T: 8, opt: true }, { no: 4, name: "disable_ice_lite", kind: "scalar", T: 8 }, { no: 5, name: "auto_subscribe_data_track", kind: "scalar", T: 8, opt: true }]), qi = Ue.makeMessageType("livekit.JoinRequest", () => [{ no: 1, name: "client_info", kind: "message", T: Ht }, { no: 2, name: "connection_settings", kind: "message", T: ji }, { no: 3, name: "metadata", kind: "scalar", T: 9 }, { no: 4, name: "participant_attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 5, name: "add_track_requests", kind: "message", T: Fn, repeated: true }, { no: 6, name: "publisher_offer", kind: "message", T: Xn }, { no: 7, name: "reconnect", kind: "scalar", T: 8 }, { no: 8, name: "reconnect_reason", kind: "enum", T: Ue.getEnumType(tt) }, { no: 9, name: "participant_sid", kind: "scalar", T: 9 }, { no: 10, name: "sync_state", kind: "message", T: Ii }]), Vi = Ue.makeMessageType("livekit.WrappedJoinRequest", () => [{ no: 1, name: "compression", kind: "enum", T: Ue.getEnumType(Wi) }, { no: 2, name: "join_request", kind: "scalar", T: 12 }]), Wi = Ue.makeEnum("livekit.WrappedJoinRequest.Compression", [{ no: 0, name: "NONE" }, { no: 1, name: "GZIP" }]), Hi = Ue.makeMessageType("livekit.MediaSectionsRequirement", () => [{ no: 1, name: "num_audios", kind: "scalar", T: 13 }, { no: 2, name: "num_videos", kind: "scalar", T: 13 }]), Ki = Ue.makeMessageType("livekit.TokenSourceRequest", () => [{ no: 1, name: "room_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "participant_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "participant_identity", kind: "scalar", T: 9, opt: true }, { no: 4, name: "participant_metadata", kind: "scalar", T: 9, opt: true }, { no: 5, name: "participant_attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 6, name: "room_config", kind: "message", T: Dn, opt: true }]), zi = Ue.makeMessageType("livekit.TokenSourceResponse", () => [{ no: 1, name: "server_url", kind: "scalar", T: 9 }, { no: 2, name: "participant_token", kind: "scalar", T: 9 }]);
    function Gi(e2) {
      return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
    }
    var Ji, Qi = { exports: {} }, Yi = Qi.exports;
    var Xi, Zi, $i = (Ji || (Ji = 1, function(e2) {
      var t2, i2;
      t2 = Yi, i2 = function() {
        var e3 = function() {}, t3 = "undefined", i3 = typeof window !== t3 && typeof window.navigator !== t3 && /Trident\/|MSIE /.test(window.navigator.userAgent), r2 = ["trace", "debug", "info", "warn", "error"], a2 = {}, s2 = null;
        function o2(e4, t4) {
          var i4 = e4[t4];
          if (typeof i4.bind == "function")
            return i4.bind(e4);
          try {
            return Function.prototype.bind.call(i4, e4);
          } catch (n2) {
            return function() {
              return Function.prototype.apply.apply(i4, [e4, arguments]);
            };
          }
        }
        function c2() {
          console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
        }
        function d2() {
          for (var n2 = this.getLevel(), i4 = 0;i4 < r2.length; i4++) {
            var a3 = r2[i4];
            this[a3] = i4 < n2 ? e3 : this.methodFactory(a3, n2, this.name);
          }
          if (this.log = this.debug, typeof console === t3 && n2 < this.levels.SILENT)
            return "No console available for logging";
        }
        function l2(e4) {
          return function() {
            typeof console !== t3 && (d2.call(this), this[e4].apply(this, arguments));
          };
        }
        function u2(n2, r3, a3) {
          return function(n3) {
            return n3 === "debug" && (n3 = "log"), typeof console !== t3 && (n3 === "trace" && i3 ? c2 : console[n3] !== undefined ? o2(console, n3) : console.log !== undefined ? o2(console, "log") : e3);
          }(n2) || l2.apply(this, arguments);
        }
        function h2(e4, n2) {
          var i4, o3, c3, l3 = this, h3 = "loglevel";
          function p3() {
            var e5;
            if (typeof window !== t3 && h3) {
              try {
                e5 = window.localStorage[h3];
              } catch (a3) {}
              if (typeof e5 === t3)
                try {
                  var n3 = window.document.cookie, i5 = encodeURIComponent(h3), r3 = n3.indexOf(i5 + "=");
                  r3 !== -1 && (e5 = /^([^;]+)/.exec(n3.slice(r3 + i5.length + 1))[1]);
                } catch (a3) {}
              return l3.levels[e5] === undefined && (e5 = undefined), e5;
            }
          }
          function m2(e5) {
            var t4 = e5;
            if (typeof t4 == "string" && l3.levels[t4.toUpperCase()] !== undefined && (t4 = l3.levels[t4.toUpperCase()]), typeof t4 == "number" && t4 >= 0 && t4 <= l3.levels.SILENT)
              return t4;
            throw new TypeError("log.setLevel() called with invalid level: " + e5);
          }
          typeof e4 == "string" ? h3 += ":" + e4 : typeof e4 == "symbol" && (h3 = undefined), l3.name = e4, l3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, l3.methodFactory = n2 || u2, l3.getLevel = function() {
            return c3 != null ? c3 : o3 != null ? o3 : i4;
          }, l3.setLevel = function(e5, n3) {
            return c3 = m2(e5), n3 !== false && function(e6) {
              var n4 = (r2[e6] || "silent").toUpperCase();
              if (typeof window !== t3 && h3) {
                try {
                  return void (window.localStorage[h3] = n4);
                } catch (i5) {}
                try {
                  window.document.cookie = encodeURIComponent(h3) + "=" + n4 + ";";
                } catch (i5) {}
              }
            }(c3), d2.call(l3);
          }, l3.setDefaultLevel = function(e5) {
            o3 = m2(e5), p3() || l3.setLevel(e5, false);
          }, l3.resetLevel = function() {
            c3 = null, function() {
              if (typeof window !== t3 && h3) {
                try {
                  window.localStorage.removeItem(h3);
                } catch (e5) {}
                try {
                  window.document.cookie = encodeURIComponent(h3) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch (e5) {}
              }
            }(), d2.call(l3);
          }, l3.enableAll = function(e5) {
            l3.setLevel(l3.levels.TRACE, e5);
          }, l3.disableAll = function(e5) {
            l3.setLevel(l3.levels.SILENT, e5);
          }, l3.rebuild = function() {
            if (s2 !== l3 && (i4 = m2(s2.getLevel())), d2.call(l3), s2 === l3)
              for (var e5 in a2)
                a2[e5].rebuild();
          }, i4 = m2(s2 ? s2.getLevel() : "WARN");
          var g2 = p3();
          g2 != null && (c3 = m2(g2)), d2.call(l3);
        }
        (s2 = new h2).getLogger = function(e4) {
          if (typeof e4 != "symbol" && typeof e4 != "string" || e4 === "")
            throw new TypeError("You must supply a name when creating a logger.");
          var t4 = a2[e4];
          return t4 || (t4 = a2[e4] = new h2(e4, s2.methodFactory)), t4;
        };
        var p2 = typeof window !== t3 ? window.log : undefined;
        return s2.noConflict = function() {
          return typeof window !== t3 && window.log === s2 && (window.log = p2), s2;
        }, s2.getLoggers = function() {
          return a2;
        }, s2.default = s2, s2;
      }, e2.exports ? e2.exports = i2() : t2.log = i2();
    }(Qi)), Qi.exports);
    e.LogLevel = undefined, (Xi = e.LogLevel || (e.LogLevel = {}))[Xi.trace = 0] = "trace", Xi[Xi.debug = 1] = "debug", Xi[Xi.info = 2] = "info", Xi[Xi.warn = 3] = "warn", Xi[Xi.error = 4] = "error", Xi[Xi.silent = 5] = "silent", e.LoggerNames = undefined, (Zi = e.LoggerNames || (e.LoggerNames = {})).Default = "livekit", Zi.Room = "livekit-room", Zi.TokenSource = "livekit-token-source", Zi.Participant = "livekit-participant", Zi.Track = "livekit-track", Zi.Publication = "livekit-track-publication", Zi.Engine = "livekit-engine", Zi.Signal = "livekit-signal", Zi.PCManager = "livekit-pc-manager", Zi.PCTransport = "livekit-pc-transport", Zi.E2EE = "lk-e2ee", Zi.DataTracks = "livekit-data-tracks", Zi.Region = "livekit-region", Zi.ICE = "livekit-ice";
    let er = $i.getLogger(e.LoggerNames.Default);
    const tr = Object.values(e.LoggerNames).map((e2) => $i.getLogger(e2));
    function nr(e2, t2) {
      const n2 = $i.getLogger(e2);
      return n2.setDefaultLevel(er.getLevel()), t2 ? function(e3, t3) {
        const n3 = (n4) => (i3, r2) => {
          const a2 = t3(), s2 = a2 || r2 ? Object.assign(Object.assign({}, a2), r2) : undefined;
          e3[n4](i3, s2);
        }, i2 = Object.create(e3);
        return i2.trace = n3("trace"), i2.debug = n3("debug"), i2.info = n3("info"), i2.warn = n3("warn"), i2.error = n3("error"), i2;
      }(n2, t2) : n2;
    }
    er.setDefaultLevel(e.LogLevel.info);
    const ir = $i.getLogger(e.LoggerNames.E2EE), rr = 7000, ar = [0, 300, 1200, 2700, 4800, rr, rr, rr, rr, rr];

    class sr {
      constructor(e2) {
        this._retryDelays = e2 !== undefined ? [...e2] : ar;
      }
      nextRetryDelayInMs(e2) {
        if (e2.retryCount >= this._retryDelays.length)
          return null;
        const t2 = this._retryDelays[e2.retryCount];
        return e2.retryCount <= 1 ? t2 : t2 + 1000 * Math.random();
      }
    }
    function or(e2, t2) {
      var n2 = {};
      for (var i2 in e2)
        Object.prototype.hasOwnProperty.call(e2, i2) && t2.indexOf(i2) < 0 && (n2[i2] = e2[i2]);
      if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
        var r2 = 0;
        for (i2 = Object.getOwnPropertySymbols(e2);r2 < i2.length; r2++)
          t2.indexOf(i2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, i2[r2]) && (n2[i2[r2]] = e2[i2[r2]]);
      }
      return n2;
    }
    function cr(e2, t2, i2, r2) {
      return new (i2 || (i2 = Promise))(function(a2, s2) {
        function o2(e3) {
          try {
            d2(r2.next(e3));
          } catch (n2) {
            s2(n2);
          }
        }
        function c2(e3) {
          try {
            d2(r2.throw(e3));
          } catch (n2) {
            s2(n2);
          }
        }
        function d2(e3) {
          var t3;
          e3.done ? a2(e3.value) : (t3 = e3.value, t3 instanceof i2 ? t3 : new i2(function(e4) {
            e4(t3);
          })).then(o2, c2);
        }
        d2((r2 = r2.apply(e2, t2 || [])).next());
      });
    }
    function dr(e2) {
      var t2 = typeof Symbol == "function" && Symbol.iterator, n2 = t2 && e2[t2], i2 = 0;
      if (n2)
        return n2.call(e2);
      if (e2 && typeof e2.length == "number")
        return { next: function() {
          return e2 && i2 >= e2.length && (e2 = undefined), { value: e2 && e2[i2++], done: !e2 };
        } };
      throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function lr(e2) {
      return this instanceof lr ? (this.v = e2, this) : new lr(e2);
    }
    function ur(e2, t2, i2) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var r2, a2 = i2.apply(e2, t2 || []), s2 = [];
      return r2 = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o2("next"), o2("throw"), o2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), r2[Symbol.asyncIterator] = function() {
        return this;
      }, r2;
      function o2(e3, t3) {
        a2[e3] && (r2[e3] = function(t4) {
          return new Promise(function(n2, i3) {
            s2.push([e3, t4, n2, i3]) > 1 || c2(e3, t4);
          });
        }, t3 && (r2[e3] = t3(r2[e3])));
      }
      function c2(e3, t3) {
        try {
          (i3 = a2[e3](t3)).value instanceof lr ? Promise.resolve(i3.value.v).then(d2, l2) : u2(s2[0][2], i3);
        } catch (n2) {
          u2(s2[0][3], n2);
        }
        var i3;
      }
      function d2(e3) {
        c2("next", e3);
      }
      function l2(e3) {
        c2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), s2.shift(), s2.length && c2(s2[0][0], s2[0][1]);
      }
    }
    function hr(e2) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, n2 = e2[Symbol.asyncIterator];
      return n2 ? n2.call(e2) : (e2 = dr(e2), t2 = {}, i2("next"), i2("throw"), i2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function i2(n3) {
        t2[n3] = e2[n3] && function(t3) {
          return new Promise(function(i3, r2) {
            (function(e3, t4, n4, i4) {
              Promise.resolve(i4).then(function(t5) {
                e3({ value: t5, done: n4 });
              }, t4);
            })(i3, r2, (t3 = e2[n3](t3)).done, t3.value);
          });
        };
      }
    }
    typeof SuppressedError == "function" && SuppressedError;
    var pr, mr = { exports: {} };
    var gr = function() {
      if (pr)
        return mr.exports;
      pr = 1;
      var e2, t2 = typeof Reflect == "object" ? Reflect : null, n2 = t2 && typeof t2.apply == "function" ? t2.apply : function(e3, t3, n3) {
        return Function.prototype.apply.call(e3, t3, n3);
      };
      e2 = t2 && typeof t2.ownKeys == "function" ? t2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
        return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
      } : function(e3) {
        return Object.getOwnPropertyNames(e3);
      };
      var i2 = Number.isNaN || function(e3) {
        return e3 != e3;
      };
      function r2() {
        r2.init.call(this);
      }
      mr.exports = r2, mr.exports.once = function(e3, t3) {
        return new Promise(function(n3, i3) {
          function r3(n4) {
            e3.removeListener(t3, a3), i3(n4);
          }
          function a3() {
            typeof e3.removeListener == "function" && e3.removeListener("error", r3), n3([].slice.call(arguments));
          }
          m2(e3, t3, a3, { once: true }), t3 !== "error" && function(e4, t4, n4) {
            typeof e4.on == "function" && m2(e4, "error", t4, n4);
          }(e3, r3, { once: true });
        });
      }, r2.EventEmitter = r2, r2.prototype._events = undefined, r2.prototype._eventsCount = 0, r2.prototype._maxListeners = undefined;
      var a2 = 10;
      function s2(e3) {
        if (typeof e3 != "function")
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
      }
      function o2(e3) {
        return e3._maxListeners === undefined ? r2.defaultMaxListeners : e3._maxListeners;
      }
      function c2(e3, t3, n3, i3) {
        var r3, a3, c3, d3;
        if (s2(n3), (a3 = e3._events) === undefined ? (a3 = e3._events = Object.create(null), e3._eventsCount = 0) : (a3.newListener !== undefined && (e3.emit("newListener", t3, n3.listener ? n3.listener : n3), a3 = e3._events), c3 = a3[t3]), c3 === undefined)
          c3 = a3[t3] = n3, ++e3._eventsCount;
        else if (typeof c3 == "function" ? c3 = a3[t3] = i3 ? [n3, c3] : [c3, n3] : i3 ? c3.unshift(n3) : c3.push(n3), (r3 = o2(e3)) > 0 && c3.length > r3 && !c3.warned) {
          c3.warned = true;
          var l3 = new Error("Possible EventEmitter memory leak detected. " + c3.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          l3.name = "MaxListenersExceededWarning", l3.emitter = e3, l3.type = t3, l3.count = c3.length, d3 = l3, console && console.warn && console.warn(d3);
        }
        return e3;
      }
      function d2() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function l2(e3, t3, n3) {
        var i3 = { fired: false, wrapFn: undefined, target: e3, type: t3, listener: n3 }, r3 = d2.bind(i3);
        return r3.listener = n3, i3.wrapFn = r3, r3;
      }
      function u2(e3, t3, n3) {
        var i3 = e3._events;
        if (i3 === undefined)
          return [];
        var r3 = i3[t3];
        return r3 === undefined ? [] : typeof r3 == "function" ? n3 ? [r3.listener || r3] : [r3] : n3 ? function(e4) {
          for (var t4 = new Array(e4.length), n4 = 0;n4 < t4.length; ++n4)
            t4[n4] = e4[n4].listener || e4[n4];
          return t4;
        }(r3) : p2(r3, r3.length);
      }
      function h2(e3) {
        var t3 = this._events;
        if (t3 !== undefined) {
          var n3 = t3[e3];
          if (typeof n3 == "function")
            return 1;
          if (n3 !== undefined)
            return n3.length;
        }
        return 0;
      }
      function p2(e3, t3) {
        for (var n3 = new Array(t3), i3 = 0;i3 < t3; ++i3)
          n3[i3] = e3[i3];
        return n3;
      }
      function m2(e3, t3, n3, i3) {
        if (typeof e3.on == "function")
          i3.once ? e3.once(t3, n3) : e3.on(t3, n3);
        else {
          if (typeof e3.addEventListener != "function")
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3);
          e3.addEventListener(t3, function r3(a3) {
            i3.once && e3.removeEventListener(t3, r3), n3(a3);
          });
        }
      }
      return Object.defineProperty(r2, "defaultMaxListeners", { enumerable: true, get: function() {
        return a2;
      }, set: function(e3) {
        if (typeof e3 != "number" || e3 < 0 || i2(e3))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
        a2 = e3;
      } }), r2.init = function() {
        this._events !== undefined && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
      }, r2.prototype.setMaxListeners = function(e3) {
        if (typeof e3 != "number" || e3 < 0 || i2(e3))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
        return this._maxListeners = e3, this;
      }, r2.prototype.getMaxListeners = function() {
        return o2(this);
      }, r2.prototype.emit = function(e3) {
        for (var t3 = [], i3 = 1;i3 < arguments.length; i3++)
          t3.push(arguments[i3]);
        var r3 = e3 === "error", a3 = this._events;
        if (a3 !== undefined)
          r3 = r3 && a3.error === undefined;
        else if (!r3)
          return false;
        if (r3) {
          var s3;
          if (t3.length > 0 && (s3 = t3[0]), s3 instanceof Error)
            throw s3;
          var o3 = new Error("Unhandled error." + (s3 ? " (" + s3.message + ")" : ""));
          throw o3.context = s3, o3;
        }
        var c3 = a3[e3];
        if (c3 === undefined)
          return false;
        if (typeof c3 == "function")
          n2(c3, this, t3);
        else {
          var d3 = c3.length, l3 = p2(c3, d3);
          for (i3 = 0;i3 < d3; ++i3)
            n2(l3[i3], this, t3);
        }
        return true;
      }, r2.prototype.addListener = function(e3, t3) {
        return c2(this, e3, t3, false);
      }, r2.prototype.on = r2.prototype.addListener, r2.prototype.prependListener = function(e3, t3) {
        return c2(this, e3, t3, true);
      }, r2.prototype.once = function(e3, t3) {
        return s2(t3), this.on(e3, l2(this, e3, t3)), this;
      }, r2.prototype.prependOnceListener = function(e3, t3) {
        return s2(t3), this.prependListener(e3, l2(this, e3, t3)), this;
      }, r2.prototype.removeListener = function(e3, t3) {
        var n3, i3, r3, a3, o3;
        if (s2(t3), (i3 = this._events) === undefined)
          return this;
        if ((n3 = i3[e3]) === undefined)
          return this;
        if (n3 === t3 || n3.listener === t3)
          --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i3[e3], i3.removeListener && this.emit("removeListener", e3, n3.listener || t3));
        else if (typeof n3 != "function") {
          for (r3 = -1, a3 = n3.length - 1;a3 >= 0; a3--)
            if (n3[a3] === t3 || n3[a3].listener === t3) {
              o3 = n3[a3].listener, r3 = a3;
              break;
            }
          if (r3 < 0)
            return this;
          r3 === 0 ? n3.shift() : function(e4, t4) {
            for (;t4 + 1 < e4.length; t4++)
              e4[t4] = e4[t4 + 1];
            e4.pop();
          }(n3, r3), n3.length === 1 && (i3[e3] = n3[0]), i3.removeListener !== undefined && this.emit("removeListener", e3, o3 || t3);
        }
        return this;
      }, r2.prototype.off = r2.prototype.removeListener, r2.prototype.removeAllListeners = function(e3) {
        var t3, n3, i3;
        if ((n3 = this._events) === undefined)
          return this;
        if (n3.removeListener === undefined)
          return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n3[e3] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n3[e3]), this;
        if (arguments.length === 0) {
          var r3, a3 = Object.keys(n3);
          for (i3 = 0;i3 < a3.length; ++i3)
            (r3 = a3[i3]) !== "removeListener" && this.removeAllListeners(r3);
          return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if (typeof (t3 = n3[e3]) == "function")
          this.removeListener(e3, t3);
        else if (t3 !== undefined)
          for (i3 = t3.length - 1;i3 >= 0; i3--)
            this.removeListener(e3, t3[i3]);
        return this;
      }, r2.prototype.listeners = function(e3) {
        return u2(this, e3, true);
      }, r2.prototype.rawListeners = function(e3) {
        return u2(this, e3, false);
      }, r2.listenerCount = function(e3, t3) {
        return typeof e3.listenerCount == "function" ? e3.listenerCount(t3) : h2.call(e3, t3);
      }, r2.prototype.listenerCount = h2, r2.prototype.eventNames = function() {
        return this._eventsCount > 0 ? e2(this._events) : [];
      }, mr.exports;
    }();
    let vr = true, fr = true;
    function kr(e2, t2, n2) {
      const i2 = e2.match(t2);
      return i2 && i2.length >= n2 && parseFloat(i2[n2], 10);
    }
    function yr(e2, t2, n2) {
      if (!e2.RTCPeerConnection)
        return;
      if (!Object.getOwnPropertyDescriptor(EventTarget.prototype, "addEventListener").writable)
        return void Sr("Unable to polyfill events");
      const i2 = e2.RTCPeerConnection.prototype, r2 = i2.addEventListener;
      i2.addEventListener = function(e3, i3) {
        if (e3 !== t2)
          return r2.apply(this, arguments);
        const a3 = (e4) => {
          const t3 = n2(e4);
          t3 && (i3.handleEvent ? i3.handleEvent(t3) : i3(t3));
        };
        return this._eventMap = this._eventMap || {}, this._eventMap[t2] || (this._eventMap[t2] = new Map), this._eventMap[t2].set(i3, a3), r2.apply(this, [e3, a3]);
      };
      const a2 = i2.removeEventListener;
      i2.removeEventListener = function(e3, n3) {
        if (e3 !== t2 || !this._eventMap || !this._eventMap[t2])
          return a2.apply(this, arguments);
        if (!this._eventMap[t2].has(n3))
          return a2.apply(this, arguments);
        const i3 = this._eventMap[t2].get(n3);
        return this._eventMap[t2].delete(n3), this._eventMap[t2].size === 0 && delete this._eventMap[t2], Object.keys(this._eventMap).length === 0 && delete this._eventMap, a2.apply(this, [e3, i3]);
      }, Object.defineProperty(i2, "on" + t2, { get() {
        return this["_on" + t2];
      }, set(e3) {
        this["_on" + t2] && (this.removeEventListener(t2, this["_on" + t2]), delete this["_on" + t2]), e3 && this.addEventListener(t2, this["_on" + t2] = e3);
      }, enumerable: true, configurable: true });
    }
    function br(e2) {
      return typeof e2 != "boolean" ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (vr = e2, e2 ? "adapter.js logging disabled" : "adapter.js logging enabled");
    }
    function Tr(e2) {
      return typeof e2 != "boolean" ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (fr = !e2, "adapter.js deprecation warnings " + (e2 ? "disabled" : "enabled"));
    }
    function Sr() {
      if (typeof window == "object") {
        if (vr)
          return;
        typeof console != "undefined" && typeof console.log == "function" && console.log.apply(console, arguments);
      }
    }
    function Er(e2, t2) {
      fr && console.warn(e2 + " is deprecated, please use " + t2 + " instead.");
    }
    function Cr(e2) {
      return Object.prototype.toString.call(e2) === "[object Object]";
    }
    function wr(e2) {
      return Cr(e2) ? Object.keys(e2).reduce(function(t2, n2) {
        const i2 = Cr(e2[n2]), r2 = i2 ? wr(e2[n2]) : e2[n2], a2 = i2 && !Object.keys(r2).length;
        return r2 === undefined || a2 ? t2 : Object.assign(t2, { [n2]: r2 });
      }, {}) : e2;
    }
    function Rr(e2, t2, n2) {
      t2 && !n2.has(t2.id) && (n2.set(t2.id, t2), Object.keys(t2).forEach((i2) => {
        i2.endsWith("Id") ? Rr(e2, e2.get(t2[i2]), n2) : i2.endsWith("Ids") && t2[i2].forEach((t3) => {
          Rr(e2, e2.get(t3), n2);
        });
      }));
    }
    function Pr(e2, t2, n2) {
      const i2 = n2 ? "outbound-rtp" : "inbound-rtp", r2 = new Map;
      if (t2 === null)
        return r2;
      const a2 = [];
      return e2.forEach((e3) => {
        e3.type === "track" && e3.trackIdentifier === t2.id && a2.push(e3);
      }), a2.forEach((t3) => {
        e2.forEach((n3) => {
          n3.type === i2 && n3.trackId === t3.id && Rr(e2, n3, r2);
        });
      }), r2;
    }
    const Ir = Sr;
    function _r(e2, t2) {
      if (t2.version >= 64)
        return;
      const n2 = e2 && e2.navigator;
      if (!n2.mediaDevices)
        return;
      const i2 = function(e3) {
        if (typeof e3 != "object" || e3.mandatory || e3.optional)
          return e3;
        const t3 = {};
        return Object.keys(e3).forEach((n3) => {
          if (n3 === "require" || n3 === "advanced" || n3 === "mediaSource")
            return;
          const i3 = typeof e3[n3] == "object" ? e3[n3] : { ideal: e3[n3] };
          i3.exact !== undefined && typeof i3.exact == "number" && (i3.min = i3.max = i3.exact);
          const r3 = function(e4, t4) {
            return e4 ? e4 + t4.charAt(0).toUpperCase() + t4.slice(1) : t4 === "deviceId" ? "sourceId" : t4;
          };
          if (i3.ideal !== undefined) {
            t3.optional = t3.optional || [];
            let e4 = {};
            typeof i3.ideal == "number" ? (e4[r3("min", n3)] = i3.ideal, t3.optional.push(e4), e4 = {}, e4[r3("max", n3)] = i3.ideal, t3.optional.push(e4)) : (e4[r3("", n3)] = i3.ideal, t3.optional.push(e4));
          }
          i3.exact !== undefined && typeof i3.exact != "number" ? (t3.mandatory = t3.mandatory || {}, t3.mandatory[r3("", n3)] = i3.exact) : ["min", "max"].forEach((e4) => {
            i3[e4] !== undefined && (t3.mandatory = t3.mandatory || {}, t3.mandatory[r3(e4, n3)] = i3[e4]);
          });
        }), e3.advanced && (t3.optional = (t3.optional || []).concat(e3.advanced)), t3;
      }, r2 = function(e3, r3) {
        if (t2.version >= 61)
          return r3(e3);
        if ((e3 = JSON.parse(JSON.stringify(e3))) && typeof e3.audio == "object") {
          const t3 = function(e4, t4, n3) {
            t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
          };
          t3((e3 = JSON.parse(JSON.stringify(e3))).audio, "autoGainControl", "googAutoGainControl"), t3(e3.audio, "noiseSuppression", "googNoiseSuppression"), e3.audio = i2(e3.audio);
        }
        if (e3 && typeof e3.video == "object") {
          let a3 = e3.video.facingMode;
          a3 = a3 && (typeof a3 == "object" ? a3 : { ideal: a3 });
          const s2 = t2.version < 66;
          if (a3 && (a3.exact === "user" || a3.exact === "environment" || a3.ideal === "user" || a3.ideal === "environment") && (!n2.mediaDevices.getSupportedConstraints || !n2.mediaDevices.getSupportedConstraints().facingMode || s2)) {
            let t3;
            if (delete e3.video.facingMode, a3.exact === "environment" || a3.ideal === "environment" ? t3 = ["back", "rear"] : a3.exact !== "user" && a3.ideal !== "user" || (t3 = ["front"]), t3)
              return n2.mediaDevices.enumerateDevices().then((n3) => {
                let s3 = (n3 = n3.filter((e4) => e4.kind === "videoinput")).find((e4) => t3.some((t4) => e4.label.toLowerCase().includes(t4)));
                return !s3 && n3.length && t3.includes("back") && (s3 = n3[n3.length - 1]), s3 && (e3.video.deviceId = a3.exact ? { exact: s3.deviceId } : { ideal: s3.deviceId }), e3.video = i2(e3.video), Ir("chrome: " + JSON.stringify(e3)), r3(e3);
              });
          }
          e3.video = i2(e3.video);
        }
        return Ir("chrome: " + JSON.stringify(e3)), r3(e3);
      }, a2 = function(e3) {
        return t2.version >= 64 ? e3 : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e3.name] || e3.name, message: e3.message, constraint: e3.constraint || e3.constraintName, toString() {
          return this.name + (this.message && ": ") + this.message;
        } };
      };
      if (n2.getUserMedia = function(e3, t3, i3) {
        r2(e3, (e4) => {
          n2.webkitGetUserMedia(e4, t3, (e5) => {
            i3 && i3(a2(e5));
          });
        });
      }.bind(n2), n2.mediaDevices.getUserMedia) {
        const e3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
        n2.mediaDevices.getUserMedia = function(t3) {
          return r2(t3, (t4) => e3(t4).then((e4) => {
            if (t4.audio && !e4.getAudioTracks().length || t4.video && !e4.getVideoTracks().length)
              throw e4.getTracks().forEach((e5) => {
                e5.stop();
              }), new DOMException("", "NotFoundError");
            return e4;
          }, (e4) => Promise.reject(a2(e4))));
        };
      }
    }
    function Mr(e2) {
      e2.MediaStream = e2.MediaStream || e2.webkitMediaStream;
    }
    function Dr(e2, t2) {
      if (!(t2.version > 102))
        if (typeof e2 == "object" && e2.RTCPeerConnection && !("ontrack" in e2.RTCPeerConnection.prototype)) {
          Object.defineProperty(e2.RTCPeerConnection.prototype, "ontrack", { get() {
            return this._ontrack;
          }, set(e3) {
            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e3);
          }, enumerable: true, configurable: true });
          const t3 = e2.RTCPeerConnection.prototype.setRemoteDescription;
          e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
            return this._ontrackpoly || (this._ontrackpoly = (t4) => {
              t4.stream.addEventListener("addtrack", (n2) => {
                let i2;
                i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e3) => e3.track && e3.track.id === n2.track.id) : { track: n2.track };
                const r2 = new Event("track");
                r2.track = n2.track, r2.receiver = i2, r2.transceiver = { receiver: i2 }, r2.streams = [t4.stream], this.dispatchEvent(r2);
              }), t4.stream.getTracks().forEach((n2) => {
                let i2;
                i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e3) => e3.track && e3.track.id === n2.id) : { track: n2 };
                const r2 = new Event("track");
                r2.track = n2, r2.receiver = i2, r2.transceiver = { receiver: i2 }, r2.streams = [t4.stream], this.dispatchEvent(r2);
              });
            }, this.addEventListener("addstream", this._ontrackpoly)), t3.apply(this, arguments);
          };
        } else
          yr(e2, "track", (e3) => (e3.transceiver || Object.defineProperty(e3, "transceiver", { value: { receiver: e3.receiver } }), e3));
    }
    function Or(e2) {
      if (typeof e2 == "object" && e2.RTCPeerConnection && !("getSenders" in e2.RTCPeerConnection.prototype) && "createDTMFSender" in e2.RTCPeerConnection.prototype) {
        const t2 = function(e3, t3) {
          return { track: t3, get dtmf() {
            return this._dtmf === undefined && (t3.kind === "audio" ? this._dtmf = e3.createDTMFSender(t3) : this._dtmf = null), this._dtmf;
          }, _pc: e3 };
        };
        if (!e2.RTCPeerConnection.prototype.getSenders) {
          e2.RTCPeerConnection.prototype.getSenders = function() {
            return this._senders = this._senders || [], this._senders.slice();
          };
          const n3 = e2.RTCPeerConnection.prototype.addTrack;
          e2.RTCPeerConnection.prototype.addTrack = function(e3, i4) {
            let r2 = n3.apply(this, arguments);
            return r2 || (r2 = t2(this, e3), this._senders.push(r2)), r2;
          };
          const i3 = e2.RTCPeerConnection.prototype.removeTrack;
          e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
            i3.apply(this, arguments);
            const t3 = this._senders.indexOf(e3);
            t3 !== -1 && this._senders.splice(t3, 1);
          };
        }
        const n2 = e2.RTCPeerConnection.prototype.addStream;
        e2.RTCPeerConnection.prototype.addStream = function(e3) {
          this._senders = this._senders || [], n2.apply(this, [e3]), e3.getTracks().forEach((e4) => {
            this._senders.push(t2(this, e4));
          });
        };
        const i2 = e2.RTCPeerConnection.prototype.removeStream;
        e2.RTCPeerConnection.prototype.removeStream = function(e3) {
          this._senders = this._senders || [], i2.apply(this, [e3]), e3.getTracks().forEach((e4) => {
            const t3 = this._senders.find((t4) => t4.track === e4);
            t3 && this._senders.splice(this._senders.indexOf(t3), 1);
          });
        };
      } else if (typeof e2 == "object" && e2.RTCPeerConnection && "getSenders" in e2.RTCPeerConnection.prototype && "createDTMFSender" in e2.RTCPeerConnection.prototype && e2.RTCRtpSender && !("dtmf" in e2.RTCRtpSender.prototype)) {
        const t2 = e2.RTCPeerConnection.prototype.getSenders;
        e2.RTCPeerConnection.prototype.getSenders = function() {
          const e3 = t2.apply(this, []);
          return e3.forEach((e4) => e4._pc = this), e3;
        }, Object.defineProperty(e2.RTCRtpSender.prototype, "dtmf", { get() {
          return this._dtmf === undefined && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
        } });
      }
    }
    function Ar(e2, t2) {
      if (t2.version >= 67)
        return;
      if (!(typeof e2 == "object" && e2.RTCPeerConnection && e2.RTCRtpSender && e2.RTCRtpReceiver))
        return;
      if (!("getStats" in e2.RTCRtpSender.prototype)) {
        const t3 = e2.RTCPeerConnection.prototype.getSenders;
        t3 && (e2.RTCPeerConnection.prototype.getSenders = function() {
          const e3 = t3.apply(this, []);
          return e3.forEach((e4) => e4._pc = this), e3;
        });
        const n3 = e2.RTCPeerConnection.prototype.addTrack;
        n3 && (e2.RTCPeerConnection.prototype.addTrack = function() {
          const e3 = n3.apply(this, arguments);
          return e3._pc = this, e3;
        }), e2.RTCRtpSender.prototype.getStats = function() {
          const e3 = this;
          return this._pc.getStats().then((t4) => Pr(t4, e3.track, true));
        };
      }
      if (!("getStats" in e2.RTCRtpReceiver.prototype)) {
        const t3 = e2.RTCPeerConnection.prototype.getReceivers;
        t3 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
          const e3 = t3.apply(this, []);
          return e3.forEach((e4) => e4._pc = this), e3;
        }), yr(e2, "track", (e3) => (e3.receiver._pc = e3.srcElement, e3)), e2.RTCRtpReceiver.prototype.getStats = function() {
          const e3 = this;
          return this._pc.getStats().then((t4) => Pr(t4, e3.track, false));
        };
      }
      if (!("getStats" in e2.RTCRtpSender.prototype) || !("getStats" in e2.RTCRtpReceiver.prototype))
        return;
      const n2 = e2.RTCPeerConnection.prototype.getStats;
      e2.RTCPeerConnection.prototype.getStats = function() {
        if (arguments.length > 0 && arguments[0] instanceof e2.MediaStreamTrack) {
          const e3 = arguments[0];
          let t3, n3, i2;
          return this.getSenders().forEach((n4) => {
            n4.track === e3 && (t3 ? i2 = true : t3 = n4);
          }), this.getReceivers().forEach((t4) => (t4.track === e3 && (n3 ? i2 = true : n3 = t4), t4.track === e3)), i2 || t3 && n3 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t3 ? t3.getStats() : n3 ? n3.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
        }
        return n2.apply(this, arguments);
      };
    }
    function Nr(e2) {
      e2.RTCPeerConnection.prototype.getLocalStreams = function() {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((e3) => this._shimmedLocalStreams[e3][0]);
      };
      const t2 = e2.RTCPeerConnection.prototype.addTrack;
      e2.RTCPeerConnection.prototype.addTrack = function(e3, n3) {
        if (!n3)
          return t2.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const i3 = t2.apply(this, arguments);
        return this._shimmedLocalStreams[n3.id] ? this._shimmedLocalStreams[n3.id].indexOf(i3) === -1 && this._shimmedLocalStreams[n3.id].push(i3) : this._shimmedLocalStreams[n3.id] = [n3, i3], i3;
      };
      const n2 = e2.RTCPeerConnection.prototype.addStream;
      e2.RTCPeerConnection.prototype.addStream = function(e3) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3.getTracks().forEach((e4) => {
          if (this.getSenders().find((t4) => t4.track === e4))
            throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        const t3 = this.getSenders();
        n2.apply(this, arguments);
        const i3 = this.getSenders().filter((e4) => t3.indexOf(e4) === -1);
        this._shimmedLocalStreams[e3.id] = [e3].concat(i3);
      };
      const i2 = e2.RTCPeerConnection.prototype.removeStream;
      e2.RTCPeerConnection.prototype.removeStream = function(e3) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e3.id], i2.apply(this, arguments);
      };
      const r2 = e2.RTCPeerConnection.prototype.removeTrack;
      e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3 && Object.keys(this._shimmedLocalStreams).forEach((t3) => {
          const n3 = this._shimmedLocalStreams[t3].indexOf(e3);
          n3 !== -1 && this._shimmedLocalStreams[t3].splice(n3, 1), this._shimmedLocalStreams[t3].length === 1 && delete this._shimmedLocalStreams[t3];
        }), r2.apply(this, arguments);
      };
    }
    function Lr(e2, t2) {
      if (!e2.RTCPeerConnection)
        return;
      if (e2.RTCPeerConnection.prototype.addTrack && t2.version >= 65)
        return Nr(e2);
      const n2 = e2.RTCPeerConnection.prototype.getLocalStreams;
      e2.RTCPeerConnection.prototype.getLocalStreams = function() {
        const e3 = n2.apply(this);
        return this._reverseStreams = this._reverseStreams || {}, e3.map((e4) => this._reverseStreams[e4.id]);
      };
      const i2 = e2.RTCPeerConnection.prototype.addStream;
      e2.RTCPeerConnection.prototype.addStream = function(t3) {
        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t3.getTracks().forEach((e3) => {
          if (this.getSenders().find((t4) => t4.track === e3))
            throw new DOMException("Track already exists.", "InvalidAccessError");
        }), !this._reverseStreams[t3.id]) {
          const n3 = new e2.MediaStream(t3.getTracks());
          this._streams[t3.id] = n3, this._reverseStreams[n3.id] = t3, t3 = n3;
        }
        i2.apply(this, [t3]);
      };
      const r2 = e2.RTCPeerConnection.prototype.removeStream;
      function a2(e3, t3) {
        let n3 = t3.sdp;
        return Object.keys(e3._reverseStreams || []).forEach((t4) => {
          const i3 = e3._reverseStreams[t4], r3 = e3._streams[i3.id];
          n3 = n3.replace(new RegExp(r3.id, "g"), i3.id);
        }), new RTCSessionDescription({ type: t3.type, sdp: n3 });
      }
      e2.RTCPeerConnection.prototype.removeStream = function(e3) {
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, r2.apply(this, [this._streams[e3.id] || e3]), delete this._reverseStreams[this._streams[e3.id] ? this._streams[e3.id].id : e3.id], delete this._streams[e3.id];
      }, e2.RTCPeerConnection.prototype.addTrack = function(t3, n3) {
        if (this.signalingState === "closed")
          throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        const i3 = [].slice.call(arguments, 1);
        if (i3.length !== 1 || !i3[0].getTracks().find((e3) => e3 === t3))
          throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        if (this.getSenders().find((e3) => e3.track === t3))
          throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
        const r3 = this._streams[n3.id];
        if (r3)
          r3.addTrack(t3), Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"));
          });
        else {
          const i4 = new e2.MediaStream([t3]);
          this._streams[n3.id] = i4, this._reverseStreams[i4.id] = n3, this.addStream(i4);
        }
        return this.getSenders().find((e3) => e3.track === t3);
      }, ["createOffer", "createAnswer"].forEach(function(t3) {
        const n3 = e2.RTCPeerConnection.prototype[t3], i3 = { [t3]() {
          const e3 = arguments;
          return arguments.length && typeof arguments[0] == "function" ? n3.apply(this, [(t4) => {
            const n4 = a2(this, t4);
            e3[0].apply(null, [n4]);
          }, (t4) => {
            e3[1] && e3[1].apply(null, t4);
          }, arguments[2]]) : n3.apply(this, arguments).then((e4) => a2(this, e4));
        } };
        e2.RTCPeerConnection.prototype[t3] = i3[t3];
      });
      const s2 = e2.RTCPeerConnection.prototype.setLocalDescription;
      e2.RTCPeerConnection.prototype.setLocalDescription = function() {
        return arguments.length && arguments[0].type ? (arguments[0] = function(e3, t3) {
          let n3 = t3.sdp;
          return Object.keys(e3._reverseStreams || []).forEach((t4) => {
            const i3 = e3._reverseStreams[t4], r3 = e3._streams[i3.id];
            n3 = n3.replace(new RegExp(i3.id, "g"), r3.id);
          }), new RTCSessionDescription({ type: t3.type, sdp: n3 });
        }(this, arguments[0]), s2.apply(this, arguments)) : s2.apply(this, arguments);
      };
      const o2 = Object.getOwnPropertyDescriptor(e2.RTCPeerConnection.prototype, "localDescription");
      Object.defineProperty(e2.RTCPeerConnection.prototype, "localDescription", { get() {
        const e3 = o2.get.apply(this);
        return e3.type === "" ? e3 : a2(this, e3);
      } }), e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
        if (this.signalingState === "closed")
          throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!e3._pc)
          throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        if (!(e3._pc === this))
          throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        let t3;
        this._streams = this._streams || {}, Object.keys(this._streams).forEach((n3) => {
          this._streams[n3].getTracks().find((t4) => e3.track === t4) && (t3 = this._streams[n3]);
        }), t3 && (t3.getTracks().length === 1 ? this.removeStream(this._reverseStreams[t3.id]) : t3.removeTrack(e3.track), this.dispatchEvent(new Event("negotiationneeded")));
      };
    }
    function xr(e2, t2) {
      !e2.RTCPeerConnection && e2.webkitRTCPeerConnection && (e2.RTCPeerConnection = e2.webkitRTCPeerConnection), e2.RTCPeerConnection && t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t3) {
        const n2 = e2.RTCPeerConnection.prototype[t3], i2 = { [t3]() {
          return arguments[0] = new (t3 === "addIceCandidate" ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
        } };
        e2.RTCPeerConnection.prototype[t3] = i2[t3];
      });
    }
    function Ur(e2, t2) {
      t2.version > 102 || yr(e2, "negotiationneeded", (e3) => {
        const n2 = e3.target;
        if (!(t2.version < 72 || n2.getConfiguration && n2.getConfiguration().sdpSemantics === "plan-b") || n2.signalingState === "stable")
          return e3;
      });
    }
    var Fr = Object.freeze({ __proto__: null, fixNegotiationNeeded: Ur, shimAddTrackRemoveTrack: Lr, shimAddTrackRemoveTrackWithNative: Nr, shimGetSendersWithDtmf: Or, shimGetUserMedia: _r, shimMediaStream: Mr, shimOnTrack: Dr, shimPeerConnection: xr, shimSenderReceiverGetStats: Ar });
    function Br(e2, t2) {
      const n2 = e2 && e2.navigator;
      if (!n2.mediaDevices)
        return;
      const i2 = e2 && e2.MediaStreamTrack;
      if (n2.getUserMedia = function(e3, t3, i3) {
        Er("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n2.mediaDevices.getUserMedia(e3).then(t3, i3);
      }, !(t2.version > 55 && ("autoGainControl" in n2.mediaDevices.getSupportedConstraints()))) {
        const e3 = function(e4, t4, n3) {
          t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
        }, t3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
        if (n2.mediaDevices.getUserMedia = function(n3) {
          return typeof n3 == "object" && typeof n3.audio == "object" && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3.audio, "autoGainControl", "mozAutoGainControl"), e3(n3.audio, "noiseSuppression", "mozNoiseSuppression")), t3(n3);
        }, i2 && i2.prototype.getSettings) {
          const t4 = i2.prototype.getSettings;
          i2.prototype.getSettings = function() {
            const n3 = t4.apply(this, arguments);
            return e3(n3, "mozAutoGainControl", "autoGainControl"), e3(n3, "mozNoiseSuppression", "noiseSuppression"), n3;
          };
        }
        if (i2 && i2.prototype.applyConstraints) {
          const t4 = i2.prototype.applyConstraints;
          i2.prototype.applyConstraints = function(n3) {
            return this.kind === "audio" && typeof n3 == "object" && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3, "autoGainControl", "mozAutoGainControl"), e3(n3, "noiseSuppression", "mozNoiseSuppression")), t4.apply(this, [n3]);
          };
        }
      }
    }
    function jr(e2) {
      typeof e2 == "object" && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
        return { receiver: this.receiver };
      } });
    }
    function qr(e2, t2) {
      typeof e2 == "object" && (e2.RTCPeerConnection || e2.mozRTCPeerConnection) && (!e2.RTCPeerConnection && e2.mozRTCPeerConnection && (e2.RTCPeerConnection = e2.mozRTCPeerConnection), t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t3) {
        const n2 = e2.RTCPeerConnection.prototype[t3], i2 = { [t3]() {
          return arguments[0] = new (t3 === "addIceCandidate" ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
        } };
        e2.RTCPeerConnection.prototype[t3] = i2[t3];
      }));
    }
    function Vr(e2, t2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection && !e2.mozRTCPeerConnection)
        return;
      if (t2.version >= 151)
        return;
      const i2 = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, r2 = e2.RTCPeerConnection.prototype.getStats;
      e2.RTCPeerConnection.prototype.getStats = function() {
        const e3 = Array.prototype.slice.call(arguments), a2 = e3[0], s2 = e3[1], o2 = e3[2];
        return this.signalingState === "closed" ? Promise.resolve(new Map) : r2.apply(this, [a2 || null]).then((e4) => {
          if (t2.version < 53 && !s2)
            try {
              e4.forEach((e5) => {
                e5.type = i2[e5.type] || e5.type;
              });
            } catch (n2) {
              if (n2.name !== "TypeError")
                throw n2;
              e4.forEach((t3, n3) => {
                e4.set(n3, Object.assign({}, t3, { type: i2[t3.type] || t3.type }));
              });
            }
          return e4;
        }).then(s2, o2);
      };
    }
    function Wr(e2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection || !e2.RTCRtpSender)
        return;
      if (e2.RTCRtpSender && "getStats" in e2.RTCRtpSender.prototype)
        return;
      const t2 = e2.RTCPeerConnection.prototype.getSenders;
      t2 && (e2.RTCPeerConnection.prototype.getSenders = function() {
        const e3 = t2.apply(this, []);
        return e3.forEach((e4) => e4._pc = this), e3;
      });
      const n2 = e2.RTCPeerConnection.prototype.addTrack;
      n2 && (e2.RTCPeerConnection.prototype.addTrack = function() {
        const e3 = n2.apply(this, arguments);
        return e3._pc = this, e3;
      }), e2.RTCRtpSender.prototype.getStats = function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
      };
    }
    function Hr(e2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection || !e2.RTCRtpSender)
        return;
      if (e2.RTCRtpSender && "getStats" in e2.RTCRtpReceiver.prototype)
        return;
      const t2 = e2.RTCPeerConnection.prototype.getReceivers;
      t2 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
        const e3 = t2.apply(this, []);
        return e3.forEach((e4) => e4._pc = this), e3;
      }), yr(e2, "track", (e3) => (e3.receiver._pc = e3.srcElement, e3)), e2.RTCRtpReceiver.prototype.getStats = function() {
        return this._pc.getStats(this.track);
      };
    }
    function Kr(e2) {
      e2.RTCPeerConnection && !("removeStream" in e2.RTCPeerConnection.prototype) && (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
        Er("removeStream", "removeTrack"), this.getSenders().forEach((t2) => {
          t2.track && e3.getTracks().includes(t2.track) && this.removeTrack(t2);
        });
      });
    }
    function zr(e2) {
      e2.DataChannel && !e2.RTCDataChannel && (e2.RTCDataChannel = e2.DataChannel);
    }
    function Gr(e2, t2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection)
        return;
      if (t2.version >= 110)
        return;
      const n2 = e2.RTCPeerConnection.prototype.addTransceiver;
      n2 && (e2.RTCPeerConnection.prototype.addTransceiver = function() {
        this.setParametersPromises = [];
        let e3 = arguments[1] && arguments[1].sendEncodings;
        e3 === undefined && (e3 = []), e3 = [...e3];
        const t3 = e3.length > 0;
        t3 && e3.forEach((e4) => {
          if ("rid" in e4) {
            if (!/^[a-z0-9]{0,16}$/i.test(e4.rid))
              throw new TypeError("Invalid RID value provided.");
          }
          if ("scaleResolutionDownBy" in e4 && !(parseFloat(e4.scaleResolutionDownBy) >= 1))
            throw new RangeError("scale_resolution_down_by must be >= 1.0");
          if ("maxFramerate" in e4 && !(parseFloat(e4.maxFramerate) >= 0))
            throw new RangeError("max_framerate must be >= 0.0");
        });
        const i2 = n2.apply(this, arguments);
        if (t3) {
          const t4 = i2.sender, n3 = t4.getParameters();
          (!("encodings" in n3) || n3.encodings.length === 1 && Object.keys(n3.encodings[0]).length === 0) && (n3.encodings = e3, t4.sendEncodings = e3, this.setParametersPromises.push(t4.setParameters(n3).then(() => {
            delete t4.sendEncodings;
          }).catch(() => {
            delete t4.sendEncodings;
          })));
        }
        return i2;
      });
    }
    function Jr(e2, t2) {
      if (typeof e2 != "object" || !e2.RTCRtpSender)
        return;
      if (t2.version >= 110)
        return;
      const n2 = e2.RTCRtpSender.prototype.getParameters;
      n2 && (e2.RTCRtpSender.prototype.getParameters = function() {
        const e3 = n2.apply(this, arguments);
        return "encodings" in e3 || (e3.encodings = [].concat(this.sendEncodings || [{}])), e3;
      });
    }
    function Qr(e2, t2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection)
        return;
      if (t2.version >= 110)
        return;
      const n2 = e2.RTCPeerConnection.prototype.createOffer;
      e2.RTCPeerConnection.prototype.createOffer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => n2.apply(this, arguments)).finally(() => {
          this.setParametersPromises = [];
        }) : n2.apply(this, arguments);
      };
    }
    function Yr(e2, t2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection)
        return;
      if (t2.version >= 110)
        return;
      const n2 = e2.RTCPeerConnection.prototype.createAnswer;
      e2.RTCPeerConnection.prototype.createAnswer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => n2.apply(this, arguments)).finally(() => {
          this.setParametersPromises = [];
        }) : n2.apply(this, arguments);
      };
    }
    var Xr = Object.freeze({ __proto__: null, shimAddTransceiver: Gr, shimCreateAnswer: Yr, shimCreateOffer: Qr, shimGetDisplayMedia: function(e2, t2) {
      e2.navigator.mediaDevices && (e2.navigator.mediaDevices && ("getDisplayMedia" in e2.navigator.mediaDevices) || (e2.navigator.mediaDevices.getDisplayMedia = function(n2) {
        if (!n2 || !n2.video) {
          const e3 = new DOMException("getDisplayMedia without video constraints is undefined");
          return e3.name = "NotFoundError", e3.code = 8, Promise.reject(e3);
        }
        return n2.video === true ? n2.video = { mediaSource: t2 } : n2.video.mediaSource = t2, e2.navigator.mediaDevices.getUserMedia(n2);
      }));
    }, shimGetParameters: Jr, shimGetStats: Vr, shimGetUserMedia: Br, shimOnTrack: jr, shimPeerConnection: qr, shimRTCDataChannel: zr, shimReceiverGetStats: Hr, shimRemoveStream: Kr, shimSenderGetStats: Wr });
    function Zr(e2) {
      if (typeof e2 == "object" && e2.RTCPeerConnection) {
        if ("getLocalStreams" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.getLocalStreams = function() {
          return this._localStreams || (this._localStreams = []), this._localStreams;
        }), !("addStream" in e2.RTCPeerConnection.prototype)) {
          const t2 = e2.RTCPeerConnection.prototype.addTrack;
          e2.RTCPeerConnection.prototype.addStream = function(e3) {
            this._localStreams || (this._localStreams = []), this._localStreams.includes(e3) || this._localStreams.push(e3), e3.getAudioTracks().forEach((n2) => t2.call(this, n2, e3)), e3.getVideoTracks().forEach((n2) => t2.call(this, n2, e3));
          }, e2.RTCPeerConnection.prototype.addTrack = function(e3) {
            for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1;r2 < n2; r2++)
              i2[r2 - 1] = arguments[r2];
            return i2 && i2.forEach((e4) => {
              this._localStreams ? this._localStreams.includes(e4) || this._localStreams.push(e4) : this._localStreams = [e4];
            }), t2.apply(this, arguments);
          };
        }
        "removeStream" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
          this._localStreams || (this._localStreams = []);
          const t2 = this._localStreams.indexOf(e3);
          if (t2 === -1)
            return;
          this._localStreams.splice(t2, 1);
          const n2 = e3.getTracks();
          this.getSenders().forEach((e4) => {
            n2.includes(e4.track) && this.removeTrack(e4);
          });
        });
      }
    }
    function $r(e2) {
      if (typeof e2 == "object" && e2.RTCPeerConnection && (("getRemoteStreams" in e2.RTCPeerConnection.prototype) || (e2.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      }), !("onaddstream" in e2.RTCPeerConnection.prototype))) {
        Object.defineProperty(e2.RTCPeerConnection.prototype, "onaddstream", { get() {
          return this._onaddstream;
        }, set(e3) {
          this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e3), this.addEventListener("track", this._onaddstreampoly = (e4) => {
            e4.streams.forEach((e5) => {
              if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e5))
                return;
              this._remoteStreams.push(e5);
              const t3 = new Event("addstream");
              t3.stream = e5, this.dispatchEvent(t3);
            });
          });
        } });
        const t2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
        e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
          const e3 = this;
          return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t3) {
            t3.streams.forEach((t4) => {
              if (e3._remoteStreams || (e3._remoteStreams = []), e3._remoteStreams.indexOf(t4) >= 0)
                return;
              e3._remoteStreams.push(t4);
              const n2 = new Event("addstream");
              n2.stream = t4, e3.dispatchEvent(n2);
            });
          }), t2.apply(e3, arguments);
        };
      }
    }
    function ea(e2) {
      if (typeof e2 != "object" || !e2.RTCPeerConnection)
        return;
      const t2 = e2.RTCPeerConnection.prototype, n2 = t2.createOffer, i2 = t2.createAnswer, r2 = t2.setLocalDescription, a2 = t2.setRemoteDescription, s2 = t2.addIceCandidate;
      t2.createOffer = function(e3, t3) {
        const i3 = arguments.length >= 2 ? arguments[2] : arguments[0], r3 = n2.apply(this, [i3]);
        return t3 ? (r3.then(e3, t3), Promise.resolve()) : r3;
      }, t2.createAnswer = function(e3, t3) {
        const n3 = arguments.length >= 2 ? arguments[2] : arguments[0], r3 = i2.apply(this, [n3]);
        return t3 ? (r3.then(e3, t3), Promise.resolve()) : r3;
      };
      let o2 = function(e3, t3, n3) {
        const i3 = r2.apply(this, [e3]);
        return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
      };
      t2.setLocalDescription = o2, o2 = function(e3, t3, n3) {
        const i3 = a2.apply(this, [e3]);
        return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
      }, t2.setRemoteDescription = o2, o2 = function(e3, t3, n3) {
        const i3 = s2.apply(this, [e3]);
        return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
      }, t2.addIceCandidate = o2;
    }
    function ta(e2) {
      const t2 = e2 && e2.navigator;
      if (t2.mediaDevices && t2.mediaDevices.getUserMedia) {
        const e3 = t2.mediaDevices, n2 = e3.getUserMedia.bind(e3);
        t2.mediaDevices.getUserMedia = (e4) => n2(na(e4));
      }
      !t2.getUserMedia && t2.mediaDevices && t2.mediaDevices.getUserMedia && (t2.getUserMedia = function(e3, n2, i2) {
        t2.mediaDevices.getUserMedia(e3).then(n2, i2);
      }.bind(t2));
    }
    function na(e2) {
      return e2 && e2.video !== undefined ? Object.assign({}, e2, { video: wr(e2.video) }) : e2;
    }
    function ia(e2) {
      if (!e2.RTCPeerConnection)
        return;
      const t2 = e2.RTCPeerConnection;
      e2.RTCPeerConnection = function(e3, n2) {
        if (e3 && e3.iceServers) {
          const t3 = [];
          for (let n3 = 0;n3 < e3.iceServers.length; n3++) {
            let i2 = e3.iceServers[n3];
            i2.urls === undefined && i2.url ? (Er("RTCIceServer.url", "RTCIceServer.urls"), i2 = JSON.parse(JSON.stringify(i2)), i2.urls = i2.url, delete i2.url, t3.push(i2)) : t3.push(e3.iceServers[n3]);
          }
          e3.iceServers = t3;
        }
        return new t2(e3, n2);
      }, e2.RTCPeerConnection.prototype = t2.prototype, "generateCertificate" in t2 && Object.defineProperty(e2.RTCPeerConnection, "generateCertificate", { get: () => t2.generateCertificate });
    }
    function ra(e2) {
      typeof e2 == "object" && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
        return { receiver: this.receiver };
      } });
    }
    function aa(e2) {
      const t2 = e2.RTCPeerConnection.prototype.createOffer;
      e2.RTCPeerConnection.prototype.createOffer = function(e3) {
        if (e3) {
          e3.offerToReceiveAudio !== undefined && (e3.offerToReceiveAudio = !!e3.offerToReceiveAudio);
          const t3 = this.getTransceivers().find((e4) => e4.receiver.track.kind === "audio");
          e3.offerToReceiveAudio === false && t3 ? t3.direction === "sendrecv" ? t3.setDirection ? t3.setDirection("sendonly") : t3.direction = "sendonly" : t3.direction === "recvonly" && (t3.setDirection ? t3.setDirection("inactive") : t3.direction = "inactive") : e3.offerToReceiveAudio !== true || t3 || this.addTransceiver("audio", { direction: "recvonly" }), e3.offerToReceiveVideo !== undefined && (e3.offerToReceiveVideo = !!e3.offerToReceiveVideo);
          const n2 = this.getTransceivers().find((e4) => e4.receiver.track.kind === "video");
          e3.offerToReceiveVideo === false && n2 ? n2.direction === "sendrecv" ? n2.setDirection ? n2.setDirection("sendonly") : n2.direction = "sendonly" : n2.direction === "recvonly" && (n2.setDirection ? n2.setDirection("inactive") : n2.direction = "inactive") : e3.offerToReceiveVideo !== true || n2 || this.addTransceiver("video", { direction: "recvonly" });
        }
        return t2.apply(this, arguments);
      };
    }
    function sa(e2) {
      typeof e2 != "object" || e2.AudioContext || (e2.AudioContext = e2.webkitAudioContext);
    }
    var oa, ca = Object.freeze({ __proto__: null, shimAudioContext: sa, shimCallbacksAPI: ea, shimConstraints: na, shimCreateOfferLegacy: aa, shimGetUserMedia: ta, shimLocalStreamsAPI: Zr, shimRTCIceServerUrls: ia, shimRemoteStreamsAPI: $r, shimTrackEventTransceiver: ra }), da = { exports: {} };
    var la = (oa || (oa = 1, function(e2) {
      const t2 = { generateIdentifier: function() {
        return Math.random().toString(36).substring(2, 12);
      } };
      t2.localCName = t2.generateIdentifier(), t2.splitLines = function(e3) {
        return e3.trim().split(`
`).map((e4) => e4.trim());
      }, t2.splitSections = function(e3) {
        return e3.split(`
m=`).map((e4, t3) => (t3 > 0 ? "m=" + e4 : e4).trim() + `\r
`);
      }, t2.getDescription = function(e3) {
        const n2 = t2.splitSections(e3);
        return n2 && n2[0];
      }, t2.getMediaSections = function(e3) {
        const n2 = t2.splitSections(e3);
        return n2.shift(), n2;
      }, t2.matchPrefix = function(e3, n2) {
        return t2.splitLines(e3).filter((e4) => e4.indexOf(n2) === 0);
      }, t2.parseCandidate = function(e3) {
        let t3;
        t3 = e3.indexOf("a=candidate:") === 0 ? e3.substring(12).split(" ") : e3.substring(10).split(" ");
        const n2 = { foundation: t3[0], component: { 1: "rtp", 2: "rtcp" }[t3[1]] || t3[1], protocol: t3[2].toLowerCase(), priority: parseInt(t3[3], 10), ip: t3[4], address: t3[4], port: parseInt(t3[5], 10), type: t3[7] };
        for (let i2 = 8;i2 < t3.length; i2 += 2)
          switch (t3[i2]) {
            case "raddr":
              n2.relatedAddress = t3[i2 + 1];
              break;
            case "rport":
              n2.relatedPort = parseInt(t3[i2 + 1], 10);
              break;
            case "tcptype":
              n2.tcpType = t3[i2 + 1];
              break;
            case "ufrag":
              n2.ufrag = t3[i2 + 1], n2.usernameFragment = t3[i2 + 1];
              break;
            default:
              n2[t3[i2]] === undefined && (n2[t3[i2]] = t3[i2 + 1]);
          }
        return n2;
      }, t2.writeCandidate = function(e3) {
        const t3 = [];
        t3.push(e3.foundation);
        const n2 = e3.component;
        n2 === "rtp" ? t3.push(1) : n2 === "rtcp" ? t3.push(2) : t3.push(n2), t3.push(e3.protocol.toUpperCase()), t3.push(e3.priority), t3.push(e3.address || e3.ip), t3.push(e3.port);
        const i2 = e3.type;
        return t3.push("typ"), t3.push(i2), i2 !== "host" && e3.relatedAddress && e3.relatedPort !== undefined && (t3.push("raddr"), t3.push(e3.relatedAddress), t3.push("rport"), t3.push(e3.relatedPort)), e3.tcpType && e3.protocol.toLowerCase() === "tcp" && (t3.push("tcptype"), t3.push(e3.tcpType)), (e3.usernameFragment || e3.ufrag) && (t3.push("ufrag"), t3.push(e3.usernameFragment || e3.ufrag)), "candidate:" + t3.join(" ");
      }, t2.parseIceOptions = function(e3) {
        return e3.substring(14).split(" ");
      }, t2.parseRtpMap = function(e3) {
        let t3 = e3.substring(9).split(" ");
        const n2 = { payloadType: parseInt(t3.shift(), 10) };
        return t3 = t3[0].split("/"), n2.name = t3[0], n2.clockRate = parseInt(t3[1], 10), n2.channels = t3.length === 3 ? parseInt(t3[2], 10) : 1, n2.numChannels = n2.channels, n2;
      }, t2.writeRtpMap = function(e3) {
        let t3 = e3.payloadType;
        e3.preferredPayloadType !== undefined && (t3 = e3.preferredPayloadType);
        const n2 = e3.channels || e3.numChannels || 1;
        return "a=rtpmap:" + t3 + " " + e3.name + "/" + e3.clockRate + (n2 !== 1 ? "/" + n2 : "") + `\r
`;
      }, t2.parseExtmap = function(e3) {
        const t3 = e3.substring(9).split(" ");
        return { id: parseInt(t3[0], 10), direction: t3[0].indexOf("/") > 0 ? t3[0].split("/")[1] : "sendrecv", uri: t3[1], attributes: t3.slice(2).join(" ") };
      }, t2.writeExtmap = function(e3) {
        return "a=extmap:" + (e3.id || e3.preferredId) + (e3.direction && e3.direction !== "sendrecv" ? "/" + e3.direction : "") + " " + e3.uri + (e3.attributes ? " " + e3.attributes : "") + `\r
`;
      }, t2.parseFmtp = function(e3) {
        const t3 = {};
        let n2;
        const i2 = e3.substring(e3.indexOf(" ") + 1).split(";");
        for (let r2 = 0;r2 < i2.length; r2++)
          n2 = i2[r2].trim().split("="), t3[n2[0].trim()] = n2[1];
        return t3;
      }, t2.writeFmtp = function(e3) {
        let t3 = "", n2 = e3.payloadType;
        if (e3.preferredPayloadType !== undefined && (n2 = e3.preferredPayloadType), e3.parameters && Object.keys(e3.parameters).length) {
          const i2 = [];
          Object.keys(e3.parameters).forEach((t4) => {
            e3.parameters[t4] !== undefined ? i2.push(t4 + "=" + e3.parameters[t4]) : i2.push(t4);
          }), t3 += "a=fmtp:" + n2 + " " + i2.join(";") + `\r
`;
        }
        return t3;
      }, t2.parseRtcpFb = function(e3) {
        const t3 = e3.substring(e3.indexOf(" ") + 1).split(" ");
        return { type: t3.shift(), parameter: t3.join(" ") };
      }, t2.writeRtcpFb = function(e3) {
        let t3 = "", n2 = e3.payloadType;
        return e3.preferredPayloadType !== undefined && (n2 = e3.preferredPayloadType), e3.rtcpFeedback && e3.rtcpFeedback.length && e3.rtcpFeedback.forEach((e4) => {
          t3 += "a=rtcp-fb:" + n2 + " " + e4.type + (e4.parameter && e4.parameter.length ? " " + e4.parameter : "") + `\r
`;
        }), t3;
      }, t2.parseSsrcMedia = function(e3) {
        const t3 = e3.indexOf(" "), n2 = { ssrc: parseInt(e3.substring(7, t3), 10) }, i2 = e3.indexOf(":", t3);
        return i2 > -1 ? (n2.attribute = e3.substring(t3 + 1, i2), n2.value = e3.substring(i2 + 1)) : n2.attribute = e3.substring(t3 + 1), n2;
      }, t2.parseSsrcGroup = function(e3) {
        const t3 = e3.substring(13).split(" ");
        return { semantics: t3.shift(), ssrcs: t3.map((e4) => parseInt(e4, 10)) };
      }, t2.getMid = function(e3) {
        const n2 = t2.matchPrefix(e3, "a=mid:")[0];
        if (n2)
          return n2.substring(6);
      }, t2.parseFingerprint = function(e3) {
        const t3 = e3.substring(14).split(" ");
        return { algorithm: t3[0].toLowerCase(), value: t3[1].toUpperCase() };
      }, t2.getDtlsParameters = function(e3, n2) {
        return { role: "auto", fingerprints: t2.matchPrefix(e3 + n2, "a=fingerprint:").map(t2.parseFingerprint) };
      }, t2.writeDtlsParameters = function(e3, t3) {
        let n2 = "a=setup:" + t3 + `\r
`;
        return e3.fingerprints.forEach((e4) => {
          n2 += "a=fingerprint:" + e4.algorithm + " " + e4.value + `\r
`;
        }), n2;
      }, t2.parseCryptoLine = function(e3) {
        const t3 = e3.substring(9).split(" ");
        return { tag: parseInt(t3[0], 10), cryptoSuite: t3[1], keyParams: t3[2], sessionParams: t3.slice(3) };
      }, t2.writeCryptoLine = function(e3) {
        return "a=crypto:" + e3.tag + " " + e3.cryptoSuite + " " + (typeof e3.keyParams == "object" ? t2.writeCryptoKeyParams(e3.keyParams) : e3.keyParams) + (e3.sessionParams ? " " + e3.sessionParams.join(" ") : "") + `\r
`;
      }, t2.parseCryptoKeyParams = function(e3) {
        if (e3.indexOf("inline:") !== 0)
          return null;
        const t3 = e3.substring(7).split("|");
        return { keyMethod: "inline", keySalt: t3[0], lifeTime: t3[1], mkiValue: t3[2] ? t3[2].split(":")[0] : undefined, mkiLength: t3[2] ? t3[2].split(":")[1] : undefined };
      }, t2.writeCryptoKeyParams = function(e3) {
        return e3.keyMethod + ":" + e3.keySalt + (e3.lifeTime ? "|" + e3.lifeTime : "") + (e3.mkiValue && e3.mkiLength ? "|" + e3.mkiValue + ":" + e3.mkiLength : "");
      }, t2.getCryptoParameters = function(e3, n2) {
        return t2.matchPrefix(e3 + n2, "a=crypto:").map(t2.parseCryptoLine);
      }, t2.getIceParameters = function(e3, n2) {
        const i2 = t2.matchPrefix(e3 + n2, "a=ice-ufrag:")[0], r2 = t2.matchPrefix(e3 + n2, "a=ice-pwd:")[0];
        return i2 && r2 ? { usernameFragment: i2.substring(12), password: r2.substring(10) } : null;
      }, t2.writeIceParameters = function(e3) {
        let t3 = "a=ice-ufrag:" + e3.usernameFragment + `\r
a=ice-pwd:` + e3.password + `\r
`;
        return e3.iceLite && (t3 += `a=ice-lite\r
`), t3;
      }, t2.parseRtpParameters = function(e3) {
        const n2 = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, i2 = t2.splitLines(e3)[0].split(" ");
        n2.profile = i2[2];
        for (let a2 = 3;a2 < i2.length; a2++) {
          const r3 = i2[a2], s2 = t2.matchPrefix(e3, "a=rtpmap:" + r3 + " ")[0];
          if (s2) {
            const i3 = t2.parseRtpMap(s2), a3 = t2.matchPrefix(e3, "a=fmtp:" + r3 + " ");
            switch (i3.parameters = a3.length ? t2.parseFmtp(a3[0]) : {}, i3.rtcpFeedback = t2.matchPrefix(e3, "a=rtcp-fb:" + r3 + " ").map(t2.parseRtcpFb), n2.codecs.push(i3), i3.name.toUpperCase()) {
              case "RED":
              case "ULPFEC":
                n2.fecMechanisms.push(i3.name.toUpperCase());
            }
          }
        }
        t2.matchPrefix(e3, "a=extmap:").forEach((e4) => {
          n2.headerExtensions.push(t2.parseExtmap(e4));
        });
        const r2 = t2.matchPrefix(e3, "a=rtcp-fb:* ").map(t2.parseRtcpFb);
        return n2.codecs.forEach((e4) => {
          r2.forEach((t3) => {
            e4.rtcpFeedback.find((e5) => e5.type === t3.type && e5.parameter === t3.parameter) || e4.rtcpFeedback.push(t3);
          });
        }), n2;
      }, t2.writeRtpDescription = function(e3, n2) {
        let i2 = "";
        i2 += "m=" + e3 + " ", i2 += n2.codecs.length > 0 ? "9" : "0", i2 += " " + (n2.profile || "UDP/TLS/RTP/SAVPF") + " ", i2 += n2.codecs.map((e4) => e4.preferredPayloadType !== undefined ? e4.preferredPayloadType : e4.payloadType).join(" ") + `\r
`, i2 += `c=IN IP4 0.0.0.0\r
`, i2 += `a=rtcp:9 IN IP4 0.0.0.0\r
`, n2.codecs.forEach((e4) => {
          i2 += t2.writeRtpMap(e4), i2 += t2.writeFmtp(e4), i2 += t2.writeRtcpFb(e4);
        });
        let r2 = 0;
        return n2.codecs.forEach((e4) => {
          e4.maxptime > r2 && (r2 = e4.maxptime);
        }), r2 > 0 && (i2 += "a=maxptime:" + r2 + `\r
`), n2.headerExtensions && n2.headerExtensions.forEach((e4) => {
          i2 += t2.writeExtmap(e4);
        }), i2;
      }, t2.parseRtpEncodingParameters = function(e3) {
        const n2 = [], i2 = t2.parseRtpParameters(e3), r2 = i2.fecMechanisms.indexOf("RED") !== -1, a2 = i2.fecMechanisms.indexOf("ULPFEC") !== -1, s2 = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => e4.attribute === "cname"), o2 = s2.length > 0 && s2[0].ssrc;
        let c2;
        const d2 = t2.matchPrefix(e3, "a=ssrc-group:FID").map((e4) => e4.substring(17).split(" ").map((e5) => parseInt(e5, 10)));
        d2.length > 0 && d2[0].length > 1 && d2[0][0] === o2 && (c2 = d2[0][1]), i2.codecs.forEach((e4) => {
          if (e4.name.toUpperCase() === "RTX" && e4.parameters.apt) {
            let t3 = { ssrc: o2, codecPayloadType: parseInt(e4.parameters.apt, 10) };
            o2 && c2 && (t3.rtx = { ssrc: c2 }), n2.push(t3), r2 && (t3 = JSON.parse(JSON.stringify(t3)), t3.fec = { ssrc: o2, mechanism: a2 ? "red+ulpfec" : "red" }, n2.push(t3));
          }
        }), n2.length === 0 && o2 && n2.push({ ssrc: o2 });
        let l2 = t2.matchPrefix(e3, "b=");
        return l2.length && (l2 = l2[0].indexOf("b=TIAS:") === 0 ? parseInt(l2[0].substring(7), 10) : l2[0].indexOf("b=AS:") === 0 ? 1000 * parseInt(l2[0].substring(5), 10) * 0.95 - 16000 : undefined, n2.forEach((e4) => {
          e4.maxBitrate = l2;
        })), n2;
      }, t2.parseRtcpParameters = function(e3) {
        const n2 = {}, i2 = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => e4.attribute === "cname")[0];
        i2 && (n2.cname = i2.value, n2.ssrc = i2.ssrc);
        const r2 = t2.matchPrefix(e3, "a=rtcp-rsize");
        n2.reducedSize = r2.length > 0, n2.compound = r2.length === 0;
        const a2 = t2.matchPrefix(e3, "a=rtcp-mux");
        return n2.mux = a2.length > 0, n2;
      }, t2.writeRtcpParameters = function(e3) {
        let t3 = "";
        return e3.reducedSize && (t3 += `a=rtcp-rsize\r
`), e3.mux && (t3 += `a=rtcp-mux\r
`), e3.ssrc !== undefined && e3.cname && (t3 += "a=ssrc:" + e3.ssrc + " cname:" + e3.cname + `\r
`), t3;
      }, t2.parseMsid = function(e3) {
        let n2;
        const i2 = t2.matchPrefix(e3, "a=msid:");
        if (i2.length === 1)
          return n2 = i2[0].substring(7).split(" "), { stream: n2[0], track: n2[1] };
        const r2 = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => e4.attribute === "msid");
        return r2.length > 0 ? (n2 = r2[0].value.split(" "), { stream: n2[0], track: n2[1] }) : undefined;
      }, t2.parseSctpDescription = function(e3) {
        const n2 = t2.parseMLine(e3), i2 = t2.matchPrefix(e3, "a=max-message-size:");
        let r2;
        i2.length > 0 && (r2 = parseInt(i2[0].substring(19), 10)), isNaN(r2) && (r2 = 65536);
        const a2 = t2.matchPrefix(e3, "a=sctp-port:");
        if (a2.length > 0)
          return { port: parseInt(a2[0].substring(12), 10), protocol: n2.fmt, maxMessageSize: r2 };
        const s2 = t2.matchPrefix(e3, "a=sctpmap:");
        if (s2.length > 0) {
          const e4 = s2[0].substring(10).split(" ");
          return { port: parseInt(e4[0], 10), protocol: e4[1], maxMessageSize: r2 };
        }
      }, t2.writeSctpDescription = function(e3, t3) {
        let n2 = [];
        return n2 = e3.protocol !== "DTLS/SCTP" ? ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + t3.port + `\r
`] : ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + t3.port + " " + t3.protocol + ` 65535\r
`], t3.maxMessageSize !== undefined && n2.push("a=max-message-size:" + t3.maxMessageSize + `\r
`), n2.join("");
      }, t2.generateSessionId = function() {
        return Math.random().toString().substr(2, 22);
      }, t2.writeSessionBoilerplate = function(e3, n2, i2) {
        let r2;
        const a2 = n2 !== undefined ? n2 : 2;
        return r2 = e3 || t2.generateSessionId(), `v=0\r
o=` + (i2 || "thisisadapterortc") + " " + r2 + " " + a2 + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
      }, t2.getDirection = function(e3, n2) {
        const i2 = t2.splitLines(e3);
        for (let t3 = 0;t3 < i2.length; t3++)
          switch (i2[t3]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
              return i2[t3].substring(2);
          }
        return n2 ? t2.getDirection(n2) : "sendrecv";
      }, t2.getKind = function(e3) {
        return t2.splitLines(e3)[0].split(" ")[0].substring(2);
      }, t2.isRejected = function(e3) {
        return e3.split(" ", 2)[1] === "0";
      }, t2.parseMLine = function(e3) {
        const n2 = t2.splitLines(e3)[0].substring(2).split(" ");
        return { kind: n2[0], port: parseInt(n2[1], 10), protocol: n2[2], fmt: n2.slice(3).join(" ") };
      }, t2.parseOLine = function(e3) {
        const n2 = t2.matchPrefix(e3, "o=")[0].substring(2).split(" ");
        return { username: n2[0], sessionId: n2[1], sessionVersion: parseInt(n2[2], 10), netType: n2[3], addressType: n2[4], address: n2[5] };
      }, t2.isValidSDP = function(e3) {
        if (typeof e3 != "string" || e3.length === 0)
          return false;
        const n2 = t2.splitLines(e3);
        for (let t3 = 0;t3 < n2.length; t3++)
          if (n2[t3].length < 2 || n2[t3].charAt(1) !== "=")
            return false;
        return true;
      }, e2.exports = t2;
    }(da)), da.exports), ua = Gi(la), ha = t({ __proto__: null, default: ua }, [la]);
    function pa(e2) {
      if (!e2.RTCIceCandidate || e2.RTCIceCandidate && "foundation" in e2.RTCIceCandidate.prototype)
        return;
      const t2 = e2.RTCIceCandidate;
      e2.RTCIceCandidate = function(e3) {
        if (typeof e3 == "object" && e3.candidate && e3.candidate.indexOf("a=") === 0 && ((e3 = JSON.parse(JSON.stringify(e3))).candidate = e3.candidate.substring(2)), e3.candidate && e3.candidate.length) {
          const n2 = new t2(e3), i2 = ua.parseCandidate(e3.candidate);
          for (const e4 in i2)
            e4 in n2 || Object.defineProperty(n2, e4, { value: i2[e4] });
          return n2.toJSON = function() {
            return { candidate: n2.candidate, sdpMid: n2.sdpMid, sdpMLineIndex: n2.sdpMLineIndex, usernameFragment: n2.usernameFragment };
          }, n2;
        }
        return new t2(e3);
      }, e2.RTCIceCandidate.prototype = t2.prototype, yr(e2, "icecandidate", (t3) => (t3.candidate && Object.defineProperty(t3, "candidate", { value: new e2.RTCIceCandidate(t3.candidate), writable: "false" }), t3));
    }
    function ma(e2) {
      !e2.RTCIceCandidate || e2.RTCIceCandidate && "relayProtocol" in e2.RTCIceCandidate.prototype || yr(e2, "icecandidate", (e3) => {
        if (e3.candidate) {
          const t2 = ua.parseCandidate(e3.candidate.candidate);
          t2.type === "relay" && (e3.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t2.priority >> 24]);
        }
        return e3;
      });
    }
    function ga(e2, t2) {
      if (!e2.RTCPeerConnection)
        return;
      if (t2.browser === "chrome" && t2.version > 102)
        return;
      if (t2.browser === "firefox" && t2.version >= 113)
        return;
      "sctp" in e2.RTCPeerConnection.prototype || Object.defineProperty(e2.RTCPeerConnection.prototype, "sctp", { get() {
        return this._sctp === undefined ? null : this._sctp;
      } });
      const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
      e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
        if (this._sctp = null, t2.browser === "chrome" && t2.version >= 76) {
          this.getConfiguration().sdpSemantics === "plan-b" && Object.defineProperty(this, "sctp", { get() {
            return this._sctp === undefined ? null : this._sctp;
          }, enumerable: true, configurable: true });
        }
        if (function(e3) {
          if (!e3 || !e3.sdp)
            return false;
          const t3 = ua.splitSections(e3.sdp);
          return t3.shift(), t3.some((e4) => {
            const t4 = ua.parseMLine(e4);
            return t4 && t4.kind === "application" && t4.protocol.indexOf("SCTP") !== -1;
          });
        }(arguments[0])) {
          const e3 = function(e4) {
            const t3 = e4.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (t3 === null || t3.length < 2)
              return -1;
            const n4 = parseInt(t3[1], 10);
            return n4 != n4 ? -1 : n4;
          }(arguments[0]), n3 = function(e4) {
            let n4 = 65536;
            return t2.browser === "firefox" && (n4 = t2.version < 57 ? e4 === -1 ? 16384 : 2147483637 : t2.version < 60 ? t2.version === 57 ? 65535 : 65536 : 2147483637), n4;
          }(e3), i2 = function(e4, n4) {
            let i3 = 65536;
            t2.browser === "firefox" && t2.version === 57 && (i3 = 65535);
            const r3 = ua.matchPrefix(e4.sdp, "a=max-message-size:");
            return r3.length > 0 ? i3 = parseInt(r3[0].substring(19), 10) : t2.browser === "firefox" && n4 !== -1 && (i3 = 2147483637), i3;
          }(arguments[0], e3);
          let r2;
          r2 = n3 === 0 && i2 === 0 ? Number.POSITIVE_INFINITY : n3 === 0 || i2 === 0 ? Math.max(n3, i2) : Math.min(n3, i2);
          const a2 = {};
          Object.defineProperty(a2, "maxMessageSize", { get: () => r2 }), this._sctp = a2;
        }
        return n2.apply(this, arguments);
      };
    }
    function va(e2, t2) {
      if (!e2.RTCPeerConnection || !("createDataChannel" in e2.RTCPeerConnection.prototype))
        return;
      if (t2.browser === "chrome" && t2.version >= 149)
        return;
      if (t2.browser === "firefox" && t2.version > 60)
        return;
      function n2(e3, t3) {
        const n3 = e3.send;
        e3.send = function() {
          const i3 = arguments[0], r2 = i3.length || i3.size || i3.byteLength;
          if (e3.readyState === "open" && t3.sctp && r2 > t3.sctp.maxMessageSize)
            throw new TypeError("Message too large (can send a maximum of " + t3.sctp.maxMessageSize + " bytes)");
          return n3.apply(e3, arguments);
        };
      }
      const i2 = e2.RTCPeerConnection.prototype.createDataChannel;
      e2.RTCPeerConnection.prototype.createDataChannel = function() {
        const e3 = i2.apply(this, arguments);
        return n2(e3, this), e3;
      }, yr(e2, "datachannel", (e3) => (n2(e3.channel, e3.target), e3));
    }
    function fa(e2) {
      if (!e2.RTCPeerConnection || "connectionState" in e2.RTCPeerConnection.prototype)
        return;
      const t2 = e2.RTCPeerConnection.prototype;
      Object.defineProperty(t2, "connectionState", { get() {
        return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
      }, enumerable: true, configurable: true }), Object.defineProperty(t2, "onconnectionstatechange", { get() {
        return this._onconnectionstatechange || null;
      }, set(e3) {
        this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e3 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e3);
      }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((e3) => {
        const n2 = t2[e3];
        t2[e3] = function() {
          return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e4) => {
            const t3 = e4.target;
            if (t3._lastConnectionState !== t3.connectionState) {
              t3._lastConnectionState = t3.connectionState;
              const n3 = new Event("connectionstatechange", e4);
              t3.dispatchEvent(n3);
            }
            return e4;
          }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n2.apply(this, arguments);
        };
      });
    }
    function ka(e2, t2) {
      if (!e2.RTCPeerConnection)
        return;
      if (t2.browser === "chrome" && t2.version >= 71)
        return;
      if (t2.browser === "safari" && t2._safariVersion >= 13.1)
        return;
      const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
      e2.RTCPeerConnection.prototype.setRemoteDescription = function(t3) {
        if (t3 && t3.sdp && t3.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
          const n3 = t3.sdp.split(`
`).filter((e3) => e3.trim() !== "a=extmap-allow-mixed").join(`
`);
          e2.RTCSessionDescription && t3 instanceof e2.RTCSessionDescription ? arguments[0] = new e2.RTCSessionDescription({ type: t3.type, sdp: n3 }) : t3.sdp = n3;
        }
        return n2.apply(this, arguments);
      };
    }
    function ya(e2, t2) {
      if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype)
        return;
      const n2 = e2.RTCPeerConnection.prototype.addIceCandidate;
      n2 && n2.length !== 0 && (e2.RTCPeerConnection.prototype.addIceCandidate = function() {
        return arguments[0] ? (t2.browser === "chrome" && t2.version < 78 || t2.browser === "firefox" && t2.version < 68 || t2.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : n2.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
      });
    }
    function ba(e2, t2) {
      if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype)
        return;
      const n2 = e2.RTCPeerConnection.prototype.setLocalDescription;
      n2 && n2.length !== 0 && (e2.RTCPeerConnection.prototype.setLocalDescription = function() {
        let e3 = arguments[0] || {};
        if (typeof e3 != "object" || e3.type && e3.sdp)
          return n2.apply(this, arguments);
        if (e3 = { type: e3.type, sdp: e3.sdp }, !e3.type)
          switch (this.signalingState) {
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
              e3.type = "offer";
              break;
            default:
              e3.type = "answer";
          }
        if (e3.sdp || e3.type !== "offer" && e3.type !== "answer")
          return n2.apply(this, [e3]);
        return (e3.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((e4) => n2.apply(this, [e4]));
      });
    }
    var Ta, Sa, Ea = Object.freeze({ __proto__: null, removeExtmapAllowMixed: ka, shimAddIceCandidateNullOrEmpty: ya, shimConnectionState: fa, shimMaxMessageSize: ga, shimParameterlessSetLocalDescription: ba, shimRTCIceCandidate: pa, shimRTCIceCandidateRelayProtocol: ma, shimSendThrowTypeError: va });
    (function() {
      let e2 = (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}).window, t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shimChrome: true, shimFirefox: true, shimSafari: true };
      const n2 = Sr, i2 = function(e3) {
        const t3 = { browser: null, version: null };
        if (e3 === undefined || !e3.navigator || !e3.navigator.userAgent)
          return t3.browser = "Not a browser.", t3;
        const n3 = e3.navigator;
        if (n3.userAgentData && n3.userAgentData.brands) {
          const e4 = n3.userAgentData.brands.find((e5) => e5.brand === "Chromium");
          if (e4) {
            const t4 = parseInt(e4.version, 10);
            if (t4 >= 90)
              return { browser: "chrome", version: t4 };
          }
        }
        if (n3.mozGetUserMedia)
          t3.browser = "firefox", t3.version = parseInt(kr(n3.userAgent, /Firefox\/(\d+)\./, 1));
        else if (n3.webkitGetUserMedia || e3.isSecureContext === false && e3.webkitRTCPeerConnection)
          t3.browser = "chrome", t3.version = parseInt(kr(n3.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) || null;
        else {
          if (!e3.RTCPeerConnection || !n3.userAgent.match(/AppleWebKit\/(\d+)\./))
            return t3.browser = "Not a supported browser.", t3;
          t3.browser = "safari", t3.version = parseInt(kr(n3.userAgent, /AppleWebKit\/(\d+)\./, 1)), t3.supportsUnifiedPlan = e3.RTCRtpTransceiver && "currentDirection" in e3.RTCRtpTransceiver.prototype, t3._safariVersion = kr(n3.userAgent, /Version\/(\d+(\.?\d+))/, 1);
        }
        return t3;
      }(e2), r2 = { browserDetails: i2, commonShim: Ea, extractVersion: kr, disableLog: br, disableWarnings: Tr, sdp: ha };
      switch (i2.browser) {
        case "chrome":
          if (!Fr || !xr || !t2.shimChrome)
            return n2("Chrome shim is not included in this adapter release."), r2;
          if (i2.version === null)
            return n2("Chrome shim can not determine version, not shimming."), r2;
          n2("adapter.js shimming chrome."), r2.browserShim = Fr, ya(e2, i2), ba(e2), _r(e2, i2), Mr(e2), xr(e2, i2), Dr(e2, i2), Lr(e2, i2), Or(e2), Ar(e2, i2), Ur(e2, i2), pa(e2), ma(e2), fa(e2), ga(e2, i2), va(e2, i2), ka(e2, i2);
          break;
        case "firefox":
          if (!Xr || !qr || !t2.shimFirefox)
            return n2("Firefox shim is not included in this adapter release."), r2;
          n2("adapter.js shimming firefox."), r2.browserShim = Xr, ya(e2, i2), ba(e2), Br(e2, i2), qr(e2, i2), Vr(e2, i2), jr(e2), Kr(e2), Wr(e2), Hr(e2), zr(e2), Gr(e2, i2), Jr(e2, i2), Qr(e2, i2), Yr(e2, i2), pa(e2), fa(e2), ga(e2, i2), va(e2, i2);
          break;
        case "safari":
          if (!ca || !t2.shimSafari)
            return n2("Safari shim is not included in this adapter release."), r2;
          n2("adapter.js shimming safari."), r2.browserShim = ca, ya(e2, i2), ba(e2), ia(e2), aa(e2), ea(e2), Zr(e2), $r(e2), ra(e2), ta(e2), sa(e2), pa(e2), ma(e2), ga(e2, i2), va(e2, i2), ka(e2, i2);
          break;
        default:
          n2("Unsupported browser!");
      }
    })({ window: typeof window == "undefined" ? undefined : window });

    class Ca extends (Sa = Promise) {
      constructor(e2) {
        super(e2);
      }
      catch(e2) {
        return super.catch(e2);
      }
      static reject(e2) {
        return super.reject(e2);
      }
      static all(e2) {
        return super.all(e2);
      }
      static race(e2) {
        return super.race(e2);
      }
    }
    Ta = Ca, Ca.resolve = (e2) => Reflect.get(Sa, "resolve", Ta).call(Ta, e2);
    const wa = /version\/(\d+(\.?_?\d+)+)/i;
    let Ra;
    function Pa(e2) {
      let t2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
      if (e2 === undefined && typeof navigator == "undefined")
        return;
      const n2 = (e2 != null ? e2 : navigator.userAgent).toLowerCase();
      if (Ra === undefined || t2) {
        const e3 = Ia.find((e4) => e4.test.test(n2));
        Ra = e3 == null ? undefined : e3.describe(n2);
      }
      return Ra;
    }
    const Ia = [{ test: /firefox|iceweasel|fxios/i, describe: (e2) => ({ name: "Firefox", version: _a(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("fxios") ? "iOS" : undefined, osVersion: Ma(e2) }) }, { test: /chrom|crios|crmo/i, describe: (e2) => ({ name: "Chrome", version: _a(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("crios") ? "iOS" : undefined, osVersion: Ma(e2) }) }, { test: /safari|applewebkit/i, describe: (e2) => ({ name: "Safari", version: _a(wa, e2), os: e2.includes("mobile/") ? "iOS" : "macOS", osVersion: Ma(e2) }) }];
    function _a(e2, t2) {
      let n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      const i2 = t2.match(e2);
      return i2 && i2.length >= n2 && i2[n2] || "";
    }
    function Ma(e2) {
      return e2.includes("mac os") ? _a(/\(.+?(\d+_\d+(:?_\d+)?)/, e2, 1).replace(/_/g, ".") : undefined;
    }
    const Da = "2.22.0";

    class Oa extends Error {
      constructor(e2, t2, n2) {
        super(t2 || "an error has occurred"), this.name = "LiveKitError", this.code = e2, (n2 == null ? undefined : n2.cause) !== undefined && (this.cause = n2 == null ? undefined : n2.cause);
      }
    }

    class Aa extends Oa {
    }
    var Na, La, xa, Ua, Fa, Ba, ja;
    e.ConnectionErrorReason = undefined, (Na = e.ConnectionErrorReason || (e.ConnectionErrorReason = {}))[Na.NotAllowed = 0] = "NotAllowed", Na[Na.ServerUnreachable = 1] = "ServerUnreachable", Na[Na.InternalError = 2] = "InternalError", Na[Na.Cancelled = 3] = "Cancelled", Na[Na.LeaveRequest = 4] = "LeaveRequest", Na[Na.Timeout = 5] = "Timeout", Na[Na.WebSocket = 6] = "WebSocket", Na[Na.ServiceNotFound = 7] = "ServiceNotFound";

    class qa extends Aa {
      constructor(t2, n2, i2, r2) {
        super(1, t2), this.name = "ConnectionError", this.status = i2, this.reason = n2, this.context = r2, this.reasonName = e.ConnectionErrorReason[n2];
      }
      static notAllowed(t2, n2, i2) {
        return new qa(t2, e.ConnectionErrorReason.NotAllowed, n2, i2);
      }
      static timeout(t2) {
        return new qa(t2, e.ConnectionErrorReason.Timeout);
      }
      static leaveRequest(t2, n2) {
        return new qa(t2, e.ConnectionErrorReason.LeaveRequest, undefined, n2);
      }
      static internal(t2, n2) {
        return new qa(t2, e.ConnectionErrorReason.InternalError, undefined, n2);
      }
      static cancelled(t2) {
        return new qa(t2, e.ConnectionErrorReason.Cancelled);
      }
      static serverUnreachable(t2, n2) {
        return new qa(t2, e.ConnectionErrorReason.ServerUnreachable, n2);
      }
      static websocket(t2, n2, i2) {
        return new qa(t2, e.ConnectionErrorReason.WebSocket, n2, i2);
      }
      static serviceNotFound(t2, n2) {
        return new qa(t2, e.ConnectionErrorReason.ServiceNotFound, undefined, n2);
      }
    }

    class Va extends Oa {
      constructor(e2) {
        super(21, e2 != null ? e2 : "device is unsupported"), this.name = "DeviceUnsupportedError";
      }
    }

    class Wa extends Oa {
      constructor(e2) {
        super(20, e2 != null ? e2 : "track is invalid"), this.name = "TrackInvalidError";
      }
    }

    class Ha extends Oa {
      constructor(e2) {
        super(10, e2 || "unsupported server"), this.name = "UnsupportedServer";
      }
    }

    class Ka extends Oa {
      constructor(e2) {
        super(12, e2 || "unexpected connection state"), this.name = "UnexpectedConnectionState";
      }
    }

    class za extends Oa {
      constructor(e2) {
        super(13, e2 || "unable to negotiate"), this.name = "NegotiationError";
      }
    }

    class Ga extends Oa {
      constructor(e2) {
        super(14, e2 || "unable to publish data"), this.name = "PublishDataError";
      }
    }

    class Ja extends Oa {
      constructor(e2, t2) {
        super(15, e2), this.name = "PublishTrackError", this.status = t2;
      }
    }

    class Qa extends Aa {
      constructor(e2, t2) {
        super(15, e2), this.name = "SignalRequestError", this.reason = t2, this.reasonName = typeof t2 == "string" ? t2 : Fi[t2];
      }
    }
    e.DataStreamErrorReason = undefined, (La = e.DataStreamErrorReason || (e.DataStreamErrorReason = {}))[La.AlreadyOpened = 0] = "AlreadyOpened", La[La.AbnormalEnd = 1] = "AbnormalEnd", La[La.DecodeFailed = 2] = "DecodeFailed", La[La.LengthExceeded = 3] = "LengthExceeded", La[La.Incomplete = 4] = "Incomplete", La[La.HandlerAlreadyRegistered = 7] = "HandlerAlreadyRegistered", La[La.EncryptionTypeMismatch = 8] = "EncryptionTypeMismatch", La[La.HeaderTooLarge = 9] = "HeaderTooLarge", La[La.PayloadTooLarge = 10] = "PayloadTooLarge";

    class Ya extends Aa {
      constructor(t2, n2) {
        super(16, t2), this.name = "DataStreamError", this.reason = n2, this.reasonName = e.DataStreamErrorReason[n2];
      }
    }

    class Xa extends Oa {
      constructor(e2) {
        super(18, e2), this.name = "SignalReconnectError";
      }
    }
    e.MediaDeviceFailure = undefined, (xa = e.MediaDeviceFailure || (e.MediaDeviceFailure = {})).PermissionDenied = "PermissionDenied", xa.NotFound = "NotFound", xa.DeviceInUse = "DeviceInUse", xa.Other = "Other", function(e2) {
      e2.getFailure = function(t2) {
        if (t2 && "name" in t2)
          return t2.name === "NotFoundError" || t2.name === "DevicesNotFoundError" ? e2.NotFound : t2.name === "NotAllowedError" || t2.name === "PermissionDeniedError" ? e2.PermissionDenied : t2.name === "NotReadableError" || t2.name === "TrackStartError" ? e2.DeviceInUse : e2.Other;
      };
    }(e.MediaDeviceFailure || (e.MediaDeviceFailure = {}));

    class Za {
    }
    Za.setTimeout = function() {
      return setTimeout(...arguments);
    }, Za.setInterval = function() {
      return setInterval(...arguments);
    }, Za.clearTimeout = function() {
      return clearTimeout(...arguments);
    }, Za.clearInterval = function() {
      return clearInterval(...arguments);
    }, e.RoomEvent = undefined, (Ua = e.RoomEvent || (e.RoomEvent = {})).Connected = "connected", Ua.Reconnecting = "reconnecting", Ua.SignalReconnecting = "signalReconnecting", Ua.Reconnected = "reconnected", Ua.Disconnected = "disconnected", Ua.ConnectionStateChanged = "connectionStateChanged", Ua.Moved = "moved", Ua.MediaDevicesChanged = "mediaDevicesChanged", Ua.ParticipantConnected = "participantConnected", Ua.ParticipantDisconnected = "participantDisconnected", Ua.TrackPublished = "trackPublished", Ua.TrackSubscribed = "trackSubscribed", Ua.TrackSubscriptionFailed = "trackSubscriptionFailed", Ua.TrackUnpublished = "trackUnpublished", Ua.TrackUnsubscribed = "trackUnsubscribed", Ua.TrackMuted = "trackMuted", Ua.TrackUnmuted = "trackUnmuted", Ua.LocalTrackPublished = "localTrackPublished", Ua.LocalTrackUnpublished = "localTrackUnpublished", Ua.LocalAudioSilenceDetected = "localAudioSilenceDetected", Ua.ActiveSpeakersChanged = "activeSpeakersChanged", Ua.ParticipantMetadataChanged = "participantMetadataChanged", Ua.ParticipantNameChanged = "participantNameChanged", Ua.ParticipantAttributesChanged = "participantAttributesChanged", Ua.ParticipantActive = "participantActive", Ua.RoomMetadataChanged = "roomMetadataChanged", Ua.DataReceived = "dataReceived", Ua.SipDTMFReceived = "sipDTMFReceived", Ua.TranscriptionReceived = "transcriptionReceived", Ua.ConnectionQualityChanged = "connectionQualityChanged", Ua.TrackStreamStateChanged = "trackStreamStateChanged", Ua.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", Ua.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", Ua.AudioPlaybackStatusChanged = "audioPlaybackChanged", Ua.VideoPlaybackStatusChanged = "videoPlaybackChanged", Ua.MediaDevicesError = "mediaDevicesError", Ua.ParticipantPermissionsChanged = "participantPermissionsChanged", Ua.SignalConnected = "signalConnected", Ua.RecordingStatusChanged = "recordingStatusChanged", Ua.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", Ua.EncryptionError = "encryptionError", Ua.DCBufferStatusChanged = "dcBufferStatusChanged", Ua.ActiveDeviceChanged = "activeDeviceChanged", Ua.ChatMessage = "chatMessage", Ua.LocalTrackSubscribed = "localTrackSubscribed", Ua.MetricsReceived = "metricsReceived", Ua.DataTrackPublished = "dataTrackPublished", Ua.DataTrackUnpublished = "dataTrackUnpublished", Ua.LocalDataTrackPublished = "localDataTrackPublished", Ua.LocalDataTrackUnpublished = "localDataTrackUnpublished", e.ParticipantEvent = undefined, (Fa = e.ParticipantEvent || (e.ParticipantEvent = {})).TrackPublished = "trackPublished", Fa.TrackSubscribed = "trackSubscribed", Fa.TrackSubscriptionFailed = "trackSubscriptionFailed", Fa.TrackUnpublished = "trackUnpublished", Fa.TrackUnsubscribed = "trackUnsubscribed", Fa.TrackMuted = "trackMuted", Fa.TrackUnmuted = "trackUnmuted", Fa.LocalTrackPublished = "localTrackPublished", Fa.LocalTrackUnpublished = "localTrackUnpublished", Fa.LocalTrackCpuConstrained = "localTrackCpuConstrained", Fa.LocalSenderCreated = "localSenderCreated", Fa.ParticipantMetadataChanged = "participantMetadataChanged", Fa.ParticipantNameChanged = "participantNameChanged", Fa.DataReceived = "dataReceived", Fa.SipDTMFReceived = "sipDTMFReceived", Fa.TranscriptionReceived = "transcriptionReceived", Fa.IsSpeakingChanged = "isSpeakingChanged", Fa.ConnectionQualityChanged = "connectionQualityChanged", Fa.TrackStreamStateChanged = "trackStreamStateChanged", Fa.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", Fa.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", Fa.TrackCpuConstrained = "trackCpuConstrained", Fa.MediaDevicesError = "mediaDevicesError", Fa.AudioStreamAcquired = "audioStreamAcquired", Fa.ParticipantPermissionsChanged = "participantPermissionsChanged", Fa.PCTrackAdded = "pcTrackAdded", Fa.AttributesChanged = "attributesChanged", Fa.LocalTrackSubscribed = "localTrackSubscribed", Fa.ChatMessage = "chatMessage", Fa.Active = "active", e.EngineEvent = undefined, (Ba = e.EngineEvent || (e.EngineEvent = {})).TransportsCreated = "transportsCreated", Ba.Connected = "connected", Ba.Disconnected = "disconnected", Ba.Resuming = "resuming", Ba.Resumed = "resumed", Ba.Restarting = "restarting", Ba.Restarted = "restarted", Ba.SignalResumed = "signalResumed", Ba.SignalRestarted = "signalRestarted", Ba.Closing = "closing", Ba.MediaTrackAdded = "mediaTrackAdded", Ba.ActiveSpeakersUpdate = "activeSpeakersUpdate", Ba.DataPacketReceived = "dataPacketReceived", Ba.RTPVideoMapUpdate = "rtpVideoMapUpdate", Ba.DCBufferStatusChanged = "dcBufferStatusChanged", Ba.ParticipantUpdate = "participantUpdate", Ba.RoomUpdate = "roomUpdate", Ba.SpeakersChanged = "speakersChanged", Ba.StreamStateChanged = "streamStateChanged", Ba.ConnectionQualityUpdate = "connectionQualityUpdate", Ba.SubscriptionError = "subscriptionError", Ba.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", Ba.RemoteMute = "remoteMute", Ba.SubscribedQualityUpdate = "subscribedQualityUpdate", Ba.LocalTrackUnpublished = "localTrackUnpublished", Ba.LocalTrackSubscribed = "localTrackSubscribed", Ba.Offline = "offline", Ba.SignalRequestResponse = "signalRequestResponse", Ba.SignalConnected = "signalConnected", Ba.RoomMoved = "roomMoved", Ba.PublishDataTrackResponse = "publishDataTrackResponse", Ba.UnPublishDataTrackResponse = "unPublishDataTrackResponse", Ba.DataTrackSubscriberHandles = "dataTrackSubscriberHandles", Ba.DataTrackPacketReceived = "dataTrackPacketReceived", Ba.Joined = "joined", Ba.TokenRefreshed = "tokenRefreshed", Ba.ServerRegionsReported = "serverRegionsReported", e.TrackEvent = undefined, (ja = e.TrackEvent || (e.TrackEvent = {})).Message = "message", ja.Muted = "muted", ja.Unmuted = "unmuted", ja.Restarted = "restarted", ja.Ended = "ended", ja.Subscribed = "subscribed", ja.Unsubscribed = "unsubscribed", ja.CpuConstrained = "cpuConstrained", ja.UpdateSettings = "updateSettings", ja.UpdateSubscription = "updateSubscription", ja.AudioPlaybackStarted = "audioPlaybackStarted", ja.AudioPlaybackFailed = "audioPlaybackFailed", ja.AudioSilenceDetected = "audioSilenceDetected", ja.VisibilityChanged = "visibilityChanged", ja.VideoDimensionsChanged = "videoDimensionsChanged", ja.VideoPlaybackStarted = "videoPlaybackStarted", ja.VideoPlaybackFailed = "videoPlaybackFailed", ja.ElementAttached = "elementAttached", ja.ElementDetached = "elementDetached", ja.UpstreamPaused = "upstreamPaused", ja.UpstreamResumed = "upstreamResumed", ja.SubscriptionPermissionChanged = "subscriptionPermissionChanged", ja.SubscriptionStatusChanged = "subscriptionStatusChanged", ja.SubscriptionFailed = "subscriptionFailed", ja.TrackProcessorUpdate = "trackProcessorUpdate", ja.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", ja.TranscriptionReceived = "transcriptionReceived", ja.TimeSyncUpdate = "timeSyncUpdate", ja.PreConnectBufferFlushed = "preConnectBufferFlushed";

    class $a {
      constructor(e2, t2, n2, i2, r2) {
        if (typeof e2 == "object")
          this.width = e2.width, this.height = e2.height, this.aspectRatio = e2.aspectRatio, this.encoding = { maxBitrate: e2.maxBitrate, maxFramerate: e2.maxFramerate, priority: e2.priority };
        else {
          if (t2 === undefined || n2 === undefined)
            throw new TypeError("Unsupported options: provide at least width, height and maxBitrate");
          this.width = e2, this.height = t2, this.aspectRatio = e2 / t2, this.encoding = { maxBitrate: n2, maxFramerate: i2, priority: r2 };
        }
      }
      get resolution() {
        return { width: this.width, height: this.height, frameRate: this.encoding.maxFramerate, aspectRatio: this.aspectRatio };
      }
    }
    const es = ["opus", "red"], ts = ["vp8", "h264"], ns = ["vp8", "h264", "vp9", "av1", "h265"];
    function is(e2) {
      return !!ts.find((t2) => t2 === e2);
    }
    const rs = is;
    var as, ss;
    e.BackupCodecPolicy = undefined, (as = e.BackupCodecPolicy || (e.BackupCodecPolicy = {}))[as.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", as[as.SIMULCAST = 1] = "SIMULCAST", as[as.REGRESSION = 2] = "REGRESSION", e.AudioPresets = undefined, (ss = e.AudioPresets || (e.AudioPresets = {})).telephone = { maxBitrate: 12000 }, ss.speech = { maxBitrate: 24000 }, ss.music = { maxBitrate: 48000 }, ss.musicStereo = { maxBitrate: 64000 }, ss.musicHighQuality = { maxBitrate: 96000 }, ss.musicHighQualityStereo = { maxBitrate: 128000 };
    const os = { h90: new $a(160, 90, 90000, 20), h180: new $a(320, 180, 160000, 20), h216: new $a(384, 216, 180000, 20), h360: new $a(640, 360, 450000, 20), h540: new $a(960, 540, 800000, 25), h720: new $a(1280, 720, 1700000, 30), h1080: new $a(1920, 1080, 3000000, 30), h1440: new $a(2560, 1440, 5000000, 30), h2160: new $a(3840, 2160, 8000000, 30) }, cs = { h120: new $a(160, 120, 70000, 20), h180: new $a(240, 180, 125000, 20), h240: new $a(320, 240, 140000, 20), h360: new $a(480, 360, 330000, 20), h480: new $a(640, 480, 500000, 20), h540: new $a(720, 540, 600000, 25), h720: new $a(960, 720, 1300000, 30), h1080: new $a(1440, 1080, 2300000, 30), h1440: new $a(1920, 1440, 3800000, 30) }, ds = { h360fps3: new $a(640, 360, 200000, 3, "medium"), h360fps15: new $a(640, 360, 400000, 15, "medium"), h720fps5: new $a(1280, 720, 800000, 5, "medium"), h720fps15: new $a(1280, 720, 1500000, 15, "medium"), h720fps30: new $a(1280, 720, 2000000, 30, "medium"), h1080fps15: new $a(1920, 1080, 2500000, 15, "medium"), h1080fps30: new $a(1920, 1080, 5000000, 30, "medium"), original: new $a(0, 0, 7000000, 30, "medium") };
    function ls(e2, t2, n2) {
      var i2, r2, a2, s2;
      const o2 = Ts(e2 != null ? e2 : {}), c2 = o2.optionsWithoutProcessor, d2 = o2.audioProcessor, l2 = o2.videoProcessor, u2 = t2 == null ? undefined : t2.processor, h2 = n2 == null ? undefined : n2.processor, p2 = c2 != null ? c2 : {};
      return p2.audio === true && (p2.audio = {}), p2.video === true && (p2.video = {}), p2.audio && (us(p2.audio, t2), (i2 = (a2 = p2.audio).deviceId) !== null && i2 !== undefined || (a2.deviceId = { ideal: "default" }), (d2 || u2) && (p2.audio.processor = d2 != null ? d2 : u2)), p2.video && (us(p2.video, n2), (r2 = (s2 = p2.video).deviceId) !== null && r2 !== undefined || (s2.deviceId = { ideal: "default" }), (l2 || h2) && (p2.video.processor = l2 != null ? l2 : h2)), p2;
    }
    function us(e2, t2) {
      return Object.keys(t2).forEach((n2) => {
        e2[n2] === undefined && (e2[n2] = t2[n2]);
      }), e2;
    }
    function hs(e2) {
      var t2, n2, i2, r2;
      const a2 = {};
      if (e2.video)
        if (typeof e2.video == "object") {
          const n3 = {}, r3 = n3, s2 = e2.video;
          Object.keys(s2).forEach((e3) => {
            if (e3 === "resolution")
              us(r3, s2.resolution);
            else
              r3[e3] = s2[e3];
          }), a2.video = n3, (t2 = (i2 = a2.video).deviceId) !== null && t2 !== undefined || (i2.deviceId = { ideal: "default" });
        } else
          a2.video = !!e2.video && { deviceId: { ideal: "default" } };
      else
        a2.video = false;
      return e2.audio ? typeof e2.audio == "object" ? (a2.audio = e2.audio, (n2 = (r2 = a2.audio).deviceId) !== null && n2 !== undefined || (r2.deviceId = { ideal: "default" })) : a2.audio = { deviceId: { ideal: "default" } } : a2.audio = false, a2;
    }
    function ps(e2) {
      return cr(this, arguments, undefined, function(e3) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        return function* () {
          const n2 = ms();
          if (n2) {
            const i2 = n2.createAnalyser();
            i2.fftSize = 2048;
            const r2 = i2.frequencyBinCount, a2 = new Uint8Array(r2);
            n2.createMediaStreamSource(new MediaStream([e3.mediaStreamTrack])).connect(i2), yield Ms(t2), i2.getByteTimeDomainData(a2);
            const s2 = a2.some((e4) => e4 !== 128 && e4 !== 0);
            return n2.close(), !s2;
          }
          return false;
        }();
      });
    }
    function ms() {
      var e2;
      const t2 = typeof window != "undefined" && (window.AudioContext || window.webkitAudioContext);
      if (t2) {
        const i2 = new t2({ latencyHint: "interactive" });
        if (i2.state === "suspended" && typeof window != "undefined" && ((e2 = window.document) === null || e2 === undefined ? undefined : e2.body)) {
          const e3 = () => cr(this, undefined, undefined, function* () {
            var t3;
            try {
              i2.state === "suspended" && (yield i2.resume());
            } catch (n2) {
              console.warn("Error trying to auto-resume audio context", n2);
            } finally {
              (t3 = window.document.body) === null || t3 === undefined || t3.removeEventListener("click", e3);
            }
          });
          i2.addEventListener("statechange", () => {
            var t3;
            i2.state === "closed" && ((t3 = window.document.body) === null || t3 === undefined || t3.removeEventListener("click", e3));
          }), window.document.body.addEventListener("click", e3);
        }
        return i2;
      }
    }
    function gs(e2) {
      return e2 === "audioinput" ? ws.Source.Microphone : e2 === "videoinput" ? ws.Source.Camera : ws.Source.Unknown;
    }
    function vs(e2) {
      return e2 === ws.Source.Microphone ? "audioinput" : e2 === ws.Source.Camera ? "videoinput" : undefined;
    }
    function fs(e2) {
      var t2, n2;
      let i2 = (t2 = e2.video) === null || t2 === undefined || t2;
      return e2.resolution && e2.resolution.width > 0 && e2.resolution.height > 0 && (i2 = typeof i2 == "boolean" ? {} : i2, i2 = qs() ? Object.assign(Object.assign({}, i2), { width: { max: e2.resolution.width }, height: { max: e2.resolution.height }, frameRate: e2.resolution.frameRate }) : Object.assign(Object.assign({}, i2), { width: { ideal: e2.resolution.width }, height: { ideal: e2.resolution.height }, frameRate: e2.resolution.frameRate })), { audio: (n2 = e2.audio) !== null && n2 !== undefined && n2, video: i2, controller: e2.controller, selfBrowserSurface: e2.selfBrowserSurface, surfaceSwitching: e2.surfaceSwitching, systemAudio: e2.systemAudio, preferCurrentTab: e2.preferCurrentTab };
    }
    function ks(e2) {
      return e2.split("/")[1].toLowerCase();
    }
    function ys(e2) {
      const t2 = [];
      return e2.forEach((e3) => {
        e3.track !== undefined && t2.push(new Qn({ cid: e3.track.mediaStreamID, track: e3.trackInfo }));
      }), t2;
    }
    function bs(e2) {
      return "mediaStreamTrack" in e2 ? { trackID: e2.sid, source: e2.source, muted: e2.isMuted, enabled: e2.mediaStreamTrack.enabled, kind: e2.kind, streamID: e2.mediaStreamID, streamTrackID: e2.mediaStreamTrack.id } : { trackID: e2.trackSid, enabled: e2.isEnabled, muted: e2.isMuted, trackInfo: Object.assign({ mimeType: e2.mimeType, name: e2.trackName, encrypted: e2.isEncrypted, kind: e2.kind, source: e2.source }, e2.track ? bs(e2.track) : {}) };
    }
    function Ts(e2) {
      const t2 = Object.assign({}, e2);
      let n2, i2;
      return typeof t2.audio == "object" && t2.audio.processor && (n2 = t2.audio.processor, t2.audio = Object.assign(Object.assign({}, t2.audio), { processor: undefined })), typeof t2.video == "object" && t2.video.processor && (i2 = t2.video.processor, t2.video = Object.assign(Object.assign({}, t2.video), { processor: undefined })), { audioProcessor: n2, videoProcessor: i2, optionsWithoutProcessor: (r2 = t2, r2 === undefined ? r2 : typeof structuredClone == "function" ? typeof r2 == "object" && r2 !== null ? structuredClone(Object.assign({}, r2)) : structuredClone(r2) : JSON.parse(JSON.stringify(r2))) };
      var r2;
    }
    function Ss(e2, t2) {
      return e2.width * e2.height < t2.width * t2.height;
    }
    const Es = [];
    var Cs;
    e.VideoQuality = undefined, (Cs = e.VideoQuality || (e.VideoQuality = {}))[Cs.LOW = 0] = "LOW", Cs[Cs.MEDIUM = 1] = "MEDIUM", Cs[Cs.HIGH = 2] = "HIGH";

    class ws extends gr.EventEmitter {
      get streamState() {
        return this._streamState;
      }
      setStreamState(e2) {
        this._streamState !== e2 && this.log.debug("stream state changed: ".concat(this._streamState, " -> ").concat(e2)), this._streamState = e2;
      }
      constructor(t2, n2) {
        let i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var r2;
        super(), this.attachedElements = [], this.isMuted = false, this._streamState = ws.StreamState.Active, this.isInBackground = false, this._currentBitrate = 0, this.log = er, this.appVisibilityChangedListener = () => {
          this.backgroundTimeout && clearTimeout(this.backgroundTimeout), document.visibilityState === "hidden" ? this.backgroundTimeout = setTimeout(() => this.handleAppVisibilityChanged(), 5000) : this.handleAppVisibilityChanged();
        }, this.loggerContextCb = i2.loggerContextCb, this.log = nr((r2 = i2.loggerName) !== null && r2 !== undefined ? r2 : e.LoggerNames.Track, () => this.logContext), this.setMaxListeners(100), this.kind = n2, this._mediaStreamTrack = t2, this._mediaStreamID = t2.id, this.source = ws.Source.Unknown;
      }
      get logContext() {
        var e2;
        return Object.assign(Object.assign({}, (e2 = this.loggerContextCb) === null || e2 === undefined ? undefined : e2.call(this)), bs(this));
      }
      get currentBitrate() {
        return this._currentBitrate;
      }
      get mediaStreamTrack() {
        return this._mediaStreamTrack;
      }
      get mediaStreamID() {
        return this._mediaStreamID;
      }
      attach(t2) {
        let n2 = "audio";
        this.kind === ws.Kind.Video && (n2 = "video"), this.attachedElements.length === 0 && this.kind === ws.Kind.Video && this.addAppVisibilityListener(), t2 || (n2 === "audio" && (Es.forEach((e2) => {
          e2.parentElement !== null || t2 || (t2 = e2);
        }), t2 && Es.splice(Es.indexOf(t2), 1)), t2 || (t2 = document.createElement(n2))), this.attachedElements.includes(t2) || this.attachedElements.push(t2), Rs(this.mediaStreamTrack, t2);
        const i2 = t2.srcObject.getTracks(), r2 = i2.some((e2) => e2.kind === "audio");
        return t2.play().then(() => {
          this.emit(r2 ? e.TrackEvent.AudioPlaybackStarted : e.TrackEvent.VideoPlaybackStarted);
        }).catch((n3) => {
          n3.name === "NotAllowedError" ? this.emit(r2 ? e.TrackEvent.AudioPlaybackFailed : e.TrackEvent.VideoPlaybackFailed, n3) : n3.name === "AbortError" ? this.log.debug("".concat(r2 ? "audio" : "video", " playback aborted, likely due to new play request")) : this.log.warn("could not playback ".concat(r2 ? "audio" : "video"), { error: n3 }), r2 && t2 && i2.some((e2) => e2.kind === "video") && n3.name === "NotAllowedError" && (t2.muted = true, t2.play().catch(() => {}));
        }), this.emit(e.TrackEvent.ElementAttached, t2), t2;
      }
      detach(t2) {
        try {
          if (t2) {
            Ps(this.mediaStreamTrack, t2);
            const n3 = this.attachedElements.indexOf(t2);
            return n3 >= 0 && (this.attachedElements.splice(n3, 1), this.recycleElement(t2), this.emit(e.TrackEvent.ElementDetached, t2)), t2;
          }
          const n2 = [];
          return this.attachedElements.forEach((t3) => {
            Ps(this.mediaStreamTrack, t3), n2.push(t3), this.recycleElement(t3), this.emit(e.TrackEvent.ElementDetached, t3);
          }), this.attachedElements = [], n2;
        } finally {
          this.attachedElements.length === 0 && this.removeAppVisibilityListener();
        }
      }
      stop() {
        this.log.debug("stopping track"), this.stopMonitor(), this._mediaStreamTrack.stop();
      }
      enable() {
        this._mediaStreamTrack.enabled = true;
      }
      disable() {
        this._mediaStreamTrack.enabled = false;
      }
      stopMonitor() {
        this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle !== undefined && (cancelAnimationFrame(this.timeSyncHandle), this.timeSyncHandle = undefined);
      }
      updateLoggerOptions(e2) {
        e2.loggerContextCb && (this.loggerContextCb = e2.loggerContextCb), e2.loggerName && (this.log = nr(e2.loggerName, () => this.logContext));
      }
      recycleElement(e2) {
        if (e2 instanceof HTMLAudioElement) {
          let t2 = true;
          e2.pause(), Es.forEach((e3) => {
            e3.parentElement || (t2 = false);
          }), t2 && Es.push(e2);
        }
      }
      handleAppVisibilityChanged() {
        return cr(this, undefined, undefined, function* () {
          this.isInBackground = document.visibilityState === "hidden", this.isInBackground || this.kind !== ws.Kind.Video || setTimeout(() => this.attachedElements.forEach((e2) => e2.play().catch(() => {})), 0);
        });
      }
      addAppVisibilityListener() {
        Ks() ? (this.isInBackground = document.visibilityState === "hidden", document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = false;
      }
      removeAppVisibilityListener() {
        Ks() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener);
      }
    }
    function Rs(e2, t2) {
      let n2, i2;
      n2 = t2.srcObject instanceof MediaStream ? t2.srcObject : new MediaStream, i2 = e2.kind === "audio" ? n2.getAudioTracks() : n2.getVideoTracks(), i2.includes(e2) || (i2.forEach((e3) => {
        n2.removeTrack(e3);
      }), n2.addTrack(e2)), qs() && t2 instanceof HTMLVideoElement || (t2.autoplay = true), t2.muted = n2.getAudioTracks().length === 0, t2 instanceof HTMLVideoElement && (t2.playsInline = true), t2.srcObject !== n2 && (t2.srcObject = n2, (qs() || Bs()) && t2 instanceof HTMLVideoElement && setTimeout(() => {
        t2.srcObject = n2, t2.play().catch(() => {});
      }, 0));
    }
    function Ps(e2, t2) {
      if (t2.srcObject instanceof MediaStream) {
        const n2 = t2.srcObject;
        n2.removeTrack(e2), n2.getTracks().length > 0 ? t2.srcObject = n2 : t2.srcObject = null;
      }
    }
    (function(e2) {
      let t2, n2, i2;
      (function(e3) {
        e3.Audio = "audio", e3.Video = "video", e3.Unknown = "unknown";
      })(t2 = e2.Kind || (e2.Kind = {})), function(e3) {
        e3.Camera = "camera", e3.Microphone = "microphone", e3.ScreenShare = "screen_share", e3.ScreenShareAudio = "screen_share_audio", e3.Unknown = "unknown";
      }(n2 = e2.Source || (e2.Source = {})), function(e3) {
        e3.Active = "active", e3.Paused = "paused", e3.Unknown = "unknown";
      }(i2 = e2.StreamState || (e2.StreamState = {})), e2.kindToProto = function(e3) {
        switch (e3) {
          case t2.Audio:
            return Qe.AUDIO;
          case t2.Video:
            return Qe.VIDEO;
          default:
            return Qe.DATA;
        }
      }, e2.kindFromProto = function(e3) {
        switch (e3) {
          case Qe.AUDIO:
            return t2.Audio;
          case Qe.VIDEO:
            return t2.Video;
          default:
            return t2.Unknown;
        }
      }, e2.sourceToProto = function(e3) {
        switch (e3) {
          case n2.Camera:
            return Ye.CAMERA;
          case n2.Microphone:
            return Ye.MICROPHONE;
          case n2.ScreenShare:
            return Ye.SCREEN_SHARE;
          case n2.ScreenShareAudio:
            return Ye.SCREEN_SHARE_AUDIO;
          default:
            return Ye.UNKNOWN;
        }
      }, e2.sourceFromProto = function(e3) {
        switch (e3) {
          case Ye.CAMERA:
            return n2.Camera;
          case Ye.MICROPHONE:
            return n2.Microphone;
          case Ye.SCREEN_SHARE:
            return n2.ScreenShare;
          case Ye.SCREEN_SHARE_AUDIO:
            return n2.ScreenShareAudio;
          default:
            return n2.Unknown;
        }
      }, e2.streamStateFromProto = function(e3) {
        switch (e3) {
          case An.ACTIVE:
            return i2.Active;
          case An.PAUSED:
            return i2.Paused;
          default:
            return i2.Unknown;
        }
      };
    })(ws || (ws = {}));
    const Is = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
    function _s(e2) {
      const t2 = e2.split("|");
      return t2.length > 1 ? [t2[0], e2.substr(t2[0].length + 1)] : [e2, ""];
    }
    function Ms(e2) {
      return new Ca((t2) => Za.setTimeout(t2, e2));
    }
    function Ds() {
      return "addTransceiver" in RTCPeerConnection.prototype;
    }
    function Os() {
      return "addTrack" in RTCPeerConnection.prototype;
    }
    function As() {
      if (!("getCapabilities" in RTCRtpSender))
        return false;
      if (qs() || Bs())
        return false;
      const e2 = RTCRtpSender.getCapabilities("video");
      let t2 = false;
      if (e2) {
        for (const n2 of e2.codecs)
          if (n2.mimeType.toLowerCase() === "video/av1") {
            t2 = true;
            break;
          }
      }
      return t2;
    }
    function Ns() {
      if (!("getCapabilities" in RTCRtpSender))
        return false;
      if (Bs())
        return false;
      if (qs()) {
        const e3 = Pa();
        if ((e3 == null ? undefined : e3.version) && Zs(e3.version, "16") < 0)
          return false;
        if ((e3 == null ? undefined : e3.os) === "iOS" && (e3 == null ? undefined : e3.osVersion) && Zs(e3.osVersion, "16") < 0)
          return false;
      }
      const e2 = RTCRtpSender.getCapabilities("video");
      let t2 = false;
      if (e2) {
        for (const n2 of e2.codecs)
          if (n2.mimeType.toLowerCase() === "video/vp9") {
            t2 = true;
            break;
          }
      }
      return t2;
    }
    function Ls(e2) {
      return e2 === "av1" || e2 === "vp9";
    }
    function xs(e2) {
      var t2;
      const i2 = (t2 = e2.getHeaderExtensionsToNegotiate) === null || t2 === undefined ? undefined : t2.call(e2);
      if (!i2 || !e2.setHeaderExtensionsToNegotiate)
        return false;
      const r2 = i2.find((e3) => e3.uri === Is);
      if (!r2)
        return false;
      if (r2.direction !== "stopped")
        return true;
      r2.direction = "sendrecv";
      try {
        return e2.setHeaderExtensionsToNegotiate(i2), true;
      } catch (n2) {
        return false;
      }
    }
    function Us(e2) {
      return !(!document || Vs()) && (e2 || (e2 = document.createElement("audio")), ("setSinkId" in e2));
    }
    function Fs() {
      return typeof RTCPeerConnection != "undefined" && (Ds() || Os());
    }
    function Bs() {
      var e2;
      return ((e2 = Pa()) === null || e2 === undefined ? undefined : e2.name) === "Firefox";
    }
    function js() {
      return typeof window != "undefined" && window.RTCRtpScriptTransform !== undefined && !function() {
        const e2 = Pa();
        return !!e2 && e2.name === "Chrome" && e2.os !== "iOS";
      }();
    }
    function qs() {
      var e2;
      return ((e2 = Pa()) === null || e2 === undefined ? undefined : e2.name) === "Safari";
    }
    function Vs() {
      const e2 = Pa();
      return (e2 == null ? undefined : e2.name) === "Safari" || (e2 == null ? undefined : e2.os) === "iOS";
    }
    function Ws() {
      const e2 = Pa();
      return (e2 == null ? undefined : e2.name) === "Safari" && e2.version.startsWith("17.") || (e2 == null ? undefined : e2.os) === "iOS" && !!(e2 == null ? undefined : e2.osVersion) && Zs(e2.osVersion, "17") >= 0;
    }
    function Hs() {
      var e2, t2;
      return !!Ks() && ((t2 = (e2 = navigator.userAgentData) === null || e2 === undefined ? undefined : e2.mobile) !== null && t2 !== undefined ? t2 : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent));
    }
    function Ks() {
      return typeof document != "undefined";
    }
    function zs() {
      return navigator.product == "ReactNative";
    }
    function Gs(e2) {
      return e2.hostname.endsWith(".livekit.cloud") || e2.hostname.endsWith(".livekit.run");
    }
    function Js(e2) {
      return Gs(e2) ? e2.hostname.split(".")[0] : null;
    }
    function Qs() {
      if (global && global.LiveKitReactNativeGlobal)
        return global.LiveKitReactNativeGlobal;
    }
    function Ys() {
      if (!zs())
        return;
      let e2 = Qs();
      return e2 ? e2.platform : undefined;
    }
    function Xs() {
      if (Ks())
        return window.devicePixelRatio;
      if (zs()) {
        let e2 = Qs();
        if (e2)
          return e2.devicePixelRatio;
      }
      return 1;
    }
    function Zs(e2, t2) {
      const n2 = e2.split("."), i2 = t2.split("."), r2 = Math.min(n2.length, i2.length);
      for (let a2 = 0;a2 < r2; ++a2) {
        const e3 = parseInt(n2[a2], 10), t3 = parseInt(i2[a2], 10);
        if (e3 > t3)
          return 1;
        if (e3 < t3)
          return -1;
        if (a2 === r2 - 1 && e3 === t3)
          return 0;
      }
      return e2 === "" && t2 !== "" ? -1 : t2 === "" ? 1 : n2.length == i2.length ? 0 : n2.length < i2.length ? -1 : 1;
    }
    function $s(e2) {
      for (const t2 of e2)
        t2.target.handleResize(t2);
    }
    function eo(e2) {
      for (const t2 of e2)
        t2.target.handleVisibilityChanged(t2);
    }
    let to = null;
    const no = () => (to || (to = new ResizeObserver($s)), to);
    let io = null;
    const ro = () => (io || (io = new IntersectionObserver(eo, { root: null, rootMargin: "0px" })), io);
    let ao, so;
    function oo() {
      let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16, t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16, n2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2], i2 = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      const r2 = document.createElement("canvas");
      r2.width = e2, r2.height = t2;
      const a2 = r2.getContext("2d");
      a2 == null || a2.fillRect(0, 0, r2.width, r2.height), i2 && a2 && (a2.beginPath(), a2.arc(e2 / 2, t2 / 2, 50, 0, 2 * Math.PI, true), a2.closePath(), a2.fillStyle = "grey", a2.fill());
      const s2 = L(r2.captureStream().getTracks(), 1)[0];
      if (!s2)
        throw Error("Could not get empty media stream video track");
      return s2.enabled = n2, s2;
    }
    function co() {
      if (!so) {
        const t2 = new AudioContext, n2 = t2.createOscillator(), i2 = t2.createGain();
        i2.gain.setValueAtTime(0, 0);
        const r2 = t2.createMediaStreamDestination();
        n2.connect(i2), i2.connect(r2), n2.start();
        var e2 = L(r2.stream.getAudioTracks(), 1);
        if (so = e2[0], !so)
          throw Error("Could not get empty media stream audio track");
        so.enabled = false;
      }
      return so.clone();
    }

    class lo {
      get isResolved() {
        return this._isResolved;
      }
      constructor(e2, t2) {
        this._isResolved = false, this.onFinally = t2, this.promise = new Promise((t3, n2) => cr(this, undefined, undefined, function* () {
          this.resolve = t3, this.reject = n2, e2 && (yield e2(t3, n2));
        })).finally(() => {
          var e3;
          this._isResolved = true, (e3 = this.onFinally) === null || e3 === undefined || e3.call(this);
        });
      }
    }
    function uo(e2) {
      return ns.includes(e2);
    }
    function ho(e2) {
      if (typeof e2 == "string" || typeof e2 == "number")
        return e2;
      if (Array.isArray(e2))
        return e2[0];
      if (e2.exact !== undefined)
        return Array.isArray(e2.exact) ? e2.exact[0] : e2.exact;
      if (e2.ideal !== undefined)
        return Array.isArray(e2.ideal) ? e2.ideal[0] : e2.ideal;
      throw Error("could not unwrap constraint");
    }
    function po(e2) {
      return e2.startsWith("ws") ? e2.replace(/^(ws)/, "http") : e2;
    }
    function mo(t2) {
      switch (t2.reason) {
        case e.ConnectionErrorReason.LeaveRequest:
          return t2.context;
        case e.ConnectionErrorReason.Cancelled:
          return et.CLIENT_INITIATED;
        case e.ConnectionErrorReason.NotAllowed:
          return et.USER_REJECTED;
        case e.ConnectionErrorReason.ServerUnreachable:
          return et.JOIN_FAILURE;
        default:
          return et.UNKNOWN_REASON;
      }
    }
    function go(e2) {
      return e2 !== undefined ? Number(e2) : undefined;
    }
    function vo(e2) {
      return e2 !== undefined ? BigInt(e2) : undefined;
    }
    function fo(e2) {
      return !!e2 && !(e2 instanceof MediaStreamTrack) && e2.isLocal;
    }
    function ko(e2) {
      return !!e2 && e2.kind == ws.Kind.Audio;
    }
    function yo(e2) {
      return !!e2 && e2.kind == ws.Kind.Video;
    }
    function bo(e2) {
      return fo(e2) && yo(e2);
    }
    function To(e2) {
      return fo(e2) && ko(e2);
    }
    function So(e2) {
      return !!e2 && !e2.isLocal;
    }
    function Eo(e2) {
      return !!e2 && !e2.isLocal;
    }
    function Co(e2) {
      return So(e2) && yo(e2);
    }
    function wo(e2) {
      return e2.isLocal;
    }
    function Ro(e2) {
      return new ReadableStream({ start(t2) {
        t2.enqueue(e2), t2.close();
      } });
    }
    function Po() {
      return typeof CompressionStream != "undefined";
    }
    function Io(e2, t2) {
      const n2 = L(_s(t2.id), 2)[1];
      return (n2 == null ? undefined : n2.startsWith("TR")) ? n2 : e2.id.startsWith("TR") ? e2.id : undefined;
    }
    function _o(e2, t2) {
      let n2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      const i2 = function(e3, t3) {
        const n3 = new URL(function(e4) {
          return e4.startsWith("http") ? e4.replace(/^(http)/, "ws") : e4;
        }(e3));
        return t3.forEach((e4, t4) => {
          n3.searchParams.set(t4, e4);
        }), Do(n3, "rtc");
      }(e2, t2);
      return n2 ? i2 : Do(i2, "v1");
    }
    function Mo(e2) {
      return e2.endsWith("/") ? e2 : "".concat(e2, "/");
    }
    function Do(e2, t2) {
      return e2.pathname = "".concat(Mo(e2.pathname)).concat(t2), e2;
    }
    function Oo(e2) {
      if (typeof e2 == "string")
        return xn.fromJson(JSON.parse(e2), { ignoreUnknownFields: true });
      if (e2 instanceof ArrayBuffer)
        return xn.fromBinary(new Uint8Array(e2));
      throw new Error("could not decode websocket message: ".concat(typeof e2));
    }
    const Ao = "AES-GCM", No = "lk_e2ee", Lo = { sharedKey: false, ratchetSalt: "LKFrameEncryptionKey", ratchetWindowSize: 8, failureTolerance: 10, keyringSize: 16, keySize: 128 };
    var xo, Uo;
    function Fo() {
      return jo() || Bo();
    }
    function Bo() {
      return typeof window != "undefined" && window.RTCRtpScriptTransform !== undefined;
    }
    function jo() {
      return typeof window != "undefined" && window.RTCRtpSender !== undefined && window.RTCRtpSender.prototype.createEncodedStreams !== undefined;
    }
    function qo(e2) {
      return cr(this, undefined, undefined, function* () {
        let t2 = new TextEncoder;
        return yield crypto.subtle.importKey("raw", t2.encode(e2), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
      });
    }
    function Vo(e2) {
      return cr(this, undefined, undefined, function* () {
        return yield crypto.subtle.importKey("raw", e2, "HKDF", false, ["deriveBits", "deriveKey"]);
      });
    }
    function Wo(e2, t2) {
      const n2 = new TextEncoder().encode(t2);
      switch (e2) {
        case "HKDF":
          return { name: "HKDF", salt: n2, hash: "SHA-256", info: new ArrayBuffer(128) };
        case "PBKDF2":
          return { name: "PBKDF2", salt: n2, hash: "SHA-256", iterations: 1e5 };
        default:
          throw new Error("algorithm ".concat(e2, " is currently unsupported"));
      }
    }
    e.KeyProviderEvent = undefined, (xo = e.KeyProviderEvent || (e.KeyProviderEvent = {})).SetKey = "setKey", xo.RatchetRequest = "ratchetRequest", xo.KeyRatcheted = "keyRatcheted", e.KeyHandlerEvent = undefined, (e.KeyHandlerEvent || (e.KeyHandlerEvent = {})).KeyRatcheted = "keyRatcheted", e.EncryptionEvent = undefined, (Uo = e.EncryptionEvent || (e.EncryptionEvent = {})).ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", Uo.EncryptionError = "encryptionError", e.CryptorEvent = undefined, (e.CryptorEvent || (e.CryptorEvent = {})).Error = "cryptorError";
    function Ho(e2) {
      var t2, n2, i2, r2, a2;
      if (((t2 = e2.value) === null || t2 === undefined ? undefined : t2.case) !== "sipDtmf" && ((n2 = e2.value) === null || n2 === undefined ? undefined : n2.case) !== "metrics" && ((i2 = e2.value) === null || i2 === undefined ? undefined : i2.case) !== "speaker" && ((r2 = e2.value) === null || r2 === undefined ? undefined : r2.case) !== "transcription" && ((a2 = e2.value) === null || a2 === undefined ? undefined : a2.case) !== "encryptedPacket")
        return new _t({ value: e2.value });
    }

    class Ko extends gr.EventEmitter {
      constructor() {
        let t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(), this.latestManuallySetKeyIndex = 0, this.onKeyRatcheted = (e2, t3, n2) => {
          er.debug("key ratcheted event received", { ratchetResult: e2, participantId: t3, keyIndex: n2 });
        }, this.keyInfoMap = new Map, this.options = Object.assign(Object.assign({}, Lo), t2), this.on(e.KeyProviderEvent.KeyRatcheted, this.onKeyRatcheted);
      }
      onSetEncryptionKey(t2, n2, i2) {
        const r2 = { key: t2, participantIdentity: n2, keyIndex: i2 };
        if (!this.options.sharedKey && !n2)
          throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
        this.keyInfoMap.set("".concat(n2 != null ? n2 : "shared", "-").concat(i2 != null ? i2 : 0), r2), i2 !== undefined && (this.latestManuallySetKeyIndex = i2), this.emit(e.KeyProviderEvent.SetKey, r2, i2 !== undefined);
      }
      getKeys() {
        return Array.from(this.keyInfoMap.values());
      }
      getLatestManuallySetKeyIndex() {
        return this.latestManuallySetKeyIndex;
      }
      getOptions() {
        return this.options;
      }
      ratchetKey(t2, n2) {
        this.emit(e.KeyProviderEvent.RatchetRequest, t2, n2);
      }
    }
    var zo;
    e.CryptorErrorReason = undefined, (zo = e.CryptorErrorReason || (e.CryptorErrorReason = {}))[zo.InvalidKey = 0] = "InvalidKey", zo[zo.MissingKey = 1] = "MissingKey", zo[zo.InternalError = 2] = "InternalError";
    function Go() {
      return js();
    }
    function Jo(e2) {
      return !!(e2 == null ? undefined : e2.worker) && (jo() || Go());
    }
    function Qo(e2) {
      return !(!(e2 == null ? undefined : e2.timestamp) && !(e2 == null ? undefined : e2.frameId));
    }
    function Yo(e2) {
      let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50, n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var i2, r2;
      let a2;
      const s2 = (i2 = n2.isImmediate) !== null && i2 !== undefined && i2, o2 = (r2 = n2.callback) !== null && r2 !== undefined && r2, c2 = n2.maxWait;
      let d2 = Date.now(), l2 = [];
      const u2 = function() {
        for (var n3 = arguments.length, i3 = new Array(n3), r3 = 0;r3 < n3; r3++)
          i3[r3] = arguments[r3];
        const u3 = this;
        return new Promise((n4, r4) => {
          const h2 = s2 && a2 === undefined;
          if (a2 !== undefined && Za.clearTimeout(a2), a2 = Za.setTimeout(function() {
            if (a2 = undefined, d2 = Date.now(), !s2) {
              const t3 = e2.apply(u3, i3);
              o2 && o2(t3), l2.forEach((e3) => (0, e3.resolve)(t3)), l2 = [];
            }
          }, function() {
            if (c2 !== undefined) {
              const e3 = Date.now() - d2;
              if (e3 + t2 >= c2)
                return c2 - e3;
            }
            return t2;
          }()), h2) {
            const t3 = e2.apply(u3, i3);
            return o2 && o2(t3), n4(t3);
          }
          l2.push({ resolve: n4, reject: r4 });
        });
      };
      return u2.cancel = function(e3) {
        a2 !== undefined && Za.clearTimeout(a2), l2.forEach((t3) => (0, t3.reject)(e3)), l2 = [];
      }, u2;
    }
    const Xo = 2000;
    function Zo(e2, t2) {
      if (!t2)
        return 0;
      let n2, i2;
      return "bytesReceived" in e2 ? (n2 = e2.bytesReceived, i2 = t2.bytesReceived) : ("bytesSent" in e2) && (n2 = e2.bytesSent, i2 = t2.bytesSent), n2 === undefined || i2 === undefined || e2.timestamp === undefined || t2.timestamp === undefined ? 0 : 8 * (n2 - i2) * 1000 / (e2.timestamp - t2.timestamp);
    }

    class $o extends ws {
      constructor(t2, n2, i2, r2, a2) {
        super(t2, i2, a2), this.timeSyncLoop = () => {
          var t3;
          if (this.listenerCount(e.TrackEvent.TimeSyncUpdate) === 0)
            return void (this.timeSyncHandle = undefined);
          this.timeSyncHandle = requestAnimationFrame(this.timeSyncLoop);
          const n3 = (t3 = this.receiver) === null || t3 === undefined ? undefined : t3.getSynchronizationSources()[0];
          if (n3) {
            const { timestamp: t4, rtpTimestamp: i3 } = n3;
            i3 && this.rtpTimestamp !== i3 && (this.emit(e.TrackEvent.TimeSyncUpdate, { timestamp: t4, rtpTimestamp: i3 }), this.rtpTimestamp = i3);
          }
        }, this.onTimeSyncListenerAdded = (t3) => {
          t3 === e.TrackEvent.TimeSyncUpdate && this.timeSyncHandle === undefined && (this.timeSyncHandle = requestAnimationFrame(this.timeSyncLoop));
        }, this.sid = n2, this.receiver = r2;
      }
      get isLocal() {
        return false;
      }
      setMuted(t2) {
        this.isMuted !== t2 && (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
      }
      setMediaStream(t2) {
        this.mediaStream = t2;
        const n2 = (i2) => {
          i2.track === this._mediaStreamTrack && (t2.removeEventListener("removetrack", n2), this.receiver && ("playoutDelayHint" in this.receiver) && (this.receiver.playoutDelayHint = undefined), this.receiver = undefined, this._currentBitrate = 0, this.emit(e.TrackEvent.Ended, this));
        };
        t2.addEventListener("removetrack", n2);
      }
      start() {
        this.startMonitor(), super.enable();
      }
      stop() {
        this.stopMonitor(), super.disable();
      }
      getRTCStatsReport() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!((e2 = this.receiver) === null || e2 === undefined ? undefined : e2.getStats))
            return;
          return yield this.receiver.getStats();
        });
      }
      setPlayoutDelay(e2) {
        this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e2 : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended");
      }
      getPlayoutDelay() {
        if (this.receiver) {
          if ("playoutDelayHint" in this.receiver)
            return this.receiver.playoutDelayHint;
          this.log.warn("Playout delay not supported in this browser");
        } else
          this.log.warn("Cannot get playout delay, track already ended");
        return 0;
      }
      startMonitor() {
        this.monitorInterval || (this.monitorInterval = setInterval(() => this.monitorReceiver(), Xo)), typeof RTCRtpReceiver != "undefined" && typeof RTCRtpReceiver.prototype.getSynchronizationSources == "function" && this.registerTimeSyncUpdate();
      }
      stopMonitor() {
        super.stopMonitor(), this.off("newListener", this.onTimeSyncListenerAdded);
      }
      registerTimeSyncUpdate() {
        this.off("newListener", this.onTimeSyncListenerAdded), this.on("newListener", this.onTimeSyncListenerAdded), this.timeSyncHandle === undefined && this.timeSyncLoop();
      }
    }

    class ec extends $o {
      constructor(e2, t2, n2, i2, r2) {
        super(e2, t2, ws.Kind.Video, n2, r2), this.elementInfos = [], this.monitorReceiver = () => cr(this, undefined, undefined, function* () {
          if (!this.receiver)
            return void (this._currentBitrate = 0);
          const e3 = yield this.getReceiverStats();
          e3 && this.prevStats && this.receiver && (this._currentBitrate = Zo(e3, this.prevStats)), this.prevStats = e3;
        }), this.debouncedHandleResize = Yo(() => {
          this.updateDimensions();
        }, 100), this.adaptiveStreamSettings = i2;
      }
      get isAdaptiveStream() {
        return this.adaptiveStreamSettings !== undefined;
      }
      lookupFrameMetadata(e2) {
        let t2 = e2.rtpTimestamp;
        var n2;
        return (n2 = this.frameMetadataExtractor) === null || n2 === undefined ? undefined : n2.lookupMetadata(t2);
      }
      setStreamState(e2) {
        super.setStreamState(e2), this.log.debug("setStreamState", e2), this.isAdaptiveStream && e2 === ws.StreamState.Active && this.updateVisibility();
      }
      get mediaStreamTrack() {
        return this._mediaStreamTrack;
      }
      setMuted(e2) {
        super.setMuted(e2), this.attachedElements.forEach((t2) => {
          e2 ? Ps(this._mediaStreamTrack, t2) : Rs(this._mediaStreamTrack, t2);
        });
      }
      attach(e2) {
        if (e2 ? super.attach(e2) : e2 = super.attach(), this.adaptiveStreamSettings && this.elementInfos.find((t2) => t2.element === e2) === undefined) {
          const t2 = new tc(e2);
          this.observeElementInfo(t2);
        }
        return e2;
      }
      observeElementInfo(e2) {
        this.adaptiveStreamSettings && this.elementInfos.find((t2) => t2 === e2) === undefined ? (e2.handleResize = () => {
          this.debouncedHandleResize();
        }, e2.handleVisibilityChanged = () => {
          this.updateVisibility();
        }, this.elementInfos.push(e2), e2.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext);
      }
      stopObservingElementInfo(e2) {
        if (!this.isAdaptiveStream)
          return void this.log.warn("stopObservingElementInfo ignored", this.logContext);
        const t2 = this.elementInfos.filter((t3) => t3 === e2);
        for (const n2 of t2)
          n2.stopObserving();
        this.elementInfos = this.elementInfos.filter((t3) => t3 !== e2), this.updateVisibility(), this.debouncedHandleResize();
      }
      detach(e2) {
        if (e2)
          return this.stopObservingElement(e2), super.detach(e2);
        const t2 = super.detach();
        for (const n2 of t2)
          this.stopObservingElement(n2);
        return t2;
      }
      getDecoderImplementation() {
        var e2;
        return (e2 = this.prevStats) === null || e2 === undefined ? undefined : e2.decoderImplementation;
      }
      getReceiverStats() {
        return cr(this, undefined, undefined, function* () {
          if (!this.receiver || !this.receiver.getStats)
            return;
          const e2 = yield this.receiver.getStats();
          let t2, n2 = "", i2 = new Map;
          return e2.forEach((e3) => {
            e3.type === "inbound-rtp" ? (n2 = e3.codecId, t2 = { type: "video", streamId: e3.id, framesDecoded: e3.framesDecoded, framesDropped: e3.framesDropped, framesReceived: e3.framesReceived, packetsReceived: e3.packetsReceived, packetsLost: e3.packetsLost, frameWidth: e3.frameWidth, frameHeight: e3.frameHeight, pliCount: e3.pliCount, firCount: e3.firCount, nackCount: e3.nackCount, jitter: e3.jitter, timestamp: e3.timestamp, bytesReceived: e3.bytesReceived, decoderImplementation: e3.decoderImplementation }) : e3.type === "codec" && i2.set(e3.id, e3);
          }), t2 && n2 !== "" && i2.get(n2) && (t2.mimeType = i2.get(n2).mimeType), t2;
        });
      }
      stopObservingElement(e2) {
        const t2 = this.elementInfos.filter((t3) => t3.element === e2);
        for (const n2 of t2)
          this.stopObservingElementInfo(n2);
      }
      handleAppVisibilityChanged() {
        const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
        return cr(this, undefined, undefined, function* () {
          yield e2.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility();
        });
      }
      updateVisibility(t2) {
        var n2, i2;
        const r2 = this.elementInfos.reduce((e2, t3) => Math.max(e2, t3.visibilityChangedAt || 0), 0), a2 = !((i2 = (n2 = this.adaptiveStreamSettings) === null || n2 === undefined ? undefined : n2.pauseVideoInBackground) !== null && i2 !== undefined && !i2) && this.isInBackground, s2 = this.elementInfos.some((e2) => e2.pictureInPicture), o2 = this.elementInfos.some((e2) => e2.visible) && !a2 || s2;
        (this.lastVisible !== o2 || t2) && (!o2 && Date.now() - r2 < 100 ? Za.setTimeout(() => {
          this.updateVisibility();
        }, 100) : (this.lastVisible = o2, this.emit(e.TrackEvent.VisibilityChanged, o2, this)));
      }
      updateDimensions() {
        var t2, n2;
        let i2 = 0, r2 = 0;
        const a2 = this.getPixelDensity();
        for (const e2 of this.elementInfos) {
          const t3 = e2.width() * a2, n3 = e2.height() * a2;
          t3 + n3 > i2 + r2 && (i2 = t3, r2 = n3);
        }
        ((t2 = this.lastDimensions) === null || t2 === undefined ? undefined : t2.width) === i2 && ((n2 = this.lastDimensions) === null || n2 === undefined ? undefined : n2.height) === r2 || (this.lastDimensions = { width: i2, height: r2 }, this.emit(e.TrackEvent.VideoDimensionsChanged, this.lastDimensions, this));
      }
      getPixelDensity() {
        var e2;
        const t2 = (e2 = this.adaptiveStreamSettings) === null || e2 === undefined ? undefined : e2.pixelDensity;
        if (t2 === "screen")
          return Xs();
        if (!t2) {
          return Xs() > 2 ? 2 : 1;
        }
        return t2;
      }
    }

    class tc {
      get visible() {
        return this.isPiP || this.isIntersecting;
      }
      get pictureInPicture() {
        return this.isPiP;
      }
      constructor(e2, t2) {
        this.onVisibilityChanged = (e3) => {
          var t3;
          const { target: n2, isIntersecting: i2 } = e3;
          n2 === this.element && (this.isIntersecting = i2, this.isPiP = nc(this.element), this.visibilityChangedAt = Date.now(), (t3 = this.handleVisibilityChanged) === null || t3 === undefined || t3.call(this));
        }, this.onEnterPiP = () => {
          var e3, t3;
          (t3 = (e3 = window.documentPictureInPicture) === null || e3 === undefined ? undefined : e3.window) === null || t3 === undefined || t3.addEventListener("pagehide", this.onLeavePiP), queueMicrotask(() => {
            requestAnimationFrame(() => {
              var e4;
              this.isPiP = nc(this.element), (e4 = this.handleVisibilityChanged) === null || e4 === undefined || e4.call(this);
            });
          });
        }, this.onLeavePiP = () => {
          var e3;
          this.isPiP = nc(this.element), (e3 = this.handleVisibilityChanged) === null || e3 === undefined || e3.call(this);
        }, this.element = e2, this.isIntersecting = t2 != null ? t2 : ic(e2), this.isPiP = Ks() && nc(e2), this.visibilityChangedAt = 0;
      }
      width() {
        return this.element.clientWidth;
      }
      height() {
        return this.element.clientHeight;
      }
      observe() {
        var e2, t2, n2;
        this.isIntersecting = ic(this.element), this.isPiP = nc(this.element), this.element.handleResize = () => {
          var e3;
          (e3 = this.handleResize) === null || e3 === undefined || e3.call(this);
        }, this.element.handleVisibilityChanged = this.onVisibilityChanged, ro().observe(this.element), no().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), (e2 = window.documentPictureInPicture) === null || e2 === undefined || e2.addEventListener("enter", this.onEnterPiP), (n2 = (t2 = window.documentPictureInPicture) === null || t2 === undefined ? undefined : t2.window) === null || n2 === undefined || n2.addEventListener("pagehide", this.onLeavePiP);
      }
      stopObserving() {
        var e2, t2, n2, i2, r2;
        (e2 = ro()) === null || e2 === undefined || e2.unobserve(this.element), (t2 = no()) === null || t2 === undefined || t2.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), (n2 = window.documentPictureInPicture) === null || n2 === undefined || n2.removeEventListener("enter", this.onEnterPiP), (r2 = (i2 = window.documentPictureInPicture) === null || i2 === undefined ? undefined : i2.window) === null || r2 === undefined || r2.removeEventListener("pagehide", this.onLeavePiP);
      }
    }
    function nc(e2) {
      var t2, n2;
      return document.pictureInPictureElement === e2 || !!((t2 = window.documentPictureInPicture) === null || t2 === undefined ? undefined : t2.window) && ic(e2, (n2 = window.documentPictureInPicture) === null || n2 === undefined ? undefined : n2.window);
    }
    function ic(e2, t2) {
      const n2 = t2 || window;
      let { offsetTop: i2, offsetLeft: r2 } = e2;
      const { offsetWidth: a2, offsetHeight: s2, hidden: o2 } = e2, c2 = getComputedStyle(e2).display;
      for (;e2.offsetParent; )
        i2 += (e2 = e2.offsetParent).offsetTop, r2 += e2.offsetLeft;
      return i2 < n2.pageYOffset + n2.innerHeight && r2 < n2.pageXOffset + n2.innerWidth && i2 + s2 > n2.pageYOffset && r2 + a2 > n2.pageXOffset && !o2 && c2 !== "none";
    }

    class rc extends gr.EventEmitter {
      constructor(t2, n2) {
        super(), this.decryptDataRequests = new Map, this.encryptDataRequests = new Map, this.onWorkerMessage = (t3) => {
          var n3, i2;
          const r2 = t3.data, a2 = r2.kind, s2 = r2.data;
          switch (a2) {
            case "error":
              if (er.error(s2.error.message), s2.uuid) {
                const e2 = this.decryptDataRequests.get(s2.uuid);
                if (e2 == null ? undefined : e2.reject) {
                  e2.reject(s2.error);
                  break;
                }
                const t5 = this.encryptDataRequests.get(s2.uuid);
                if (t5 == null ? undefined : t5.reject) {
                  t5.reject(s2.error);
                  break;
                }
              }
              this.emit(e.EncryptionEvent.EncryptionError, s2.error, s2.participantIdentity);
              break;
            case "initAck":
              s2.enabled && this.keyProvider.getKeys().forEach((e2) => {
                this.postKey(e2, false);
              });
              break;
            case "enable":
              if (s2.enabled && this.keyProvider.getKeys().forEach((e2) => {
                this.postKey(e2, false);
              }), this.encryptionEnabled !== s2.enabled && s2.participantIdentity === ((n3 = this.room) === null || n3 === undefined ? undefined : n3.localParticipant.identity))
                this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, s2.enabled, this.room.localParticipant), this.encryptionEnabled = s2.enabled;
              else if (s2.participantIdentity) {
                const t5 = (i2 = this.room) === null || i2 === undefined ? undefined : i2.getParticipantByIdentity(s2.participantIdentity);
                if (!t5)
                  throw TypeError("couldn't set encryption status, participant not found".concat(s2.participantIdentity));
                this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, s2.enabled, t5);
              }
              break;
            case "ratchetKey":
              this.keyProvider.emit(e.KeyProviderEvent.KeyRatcheted, s2.ratchetResult, s2.participantIdentity, s2.keyIndex);
              break;
            case "decryptDataResponse":
              const t4 = this.decryptDataRequests.get(s2.uuid);
              (t4 == null ? undefined : t4.resolve) && t4.resolve(s2);
              break;
            case "encryptDataResponse":
              const r3 = this.encryptDataRequests.get(s2.uuid);
              (r3 == null ? undefined : r3.resolve) && r3.resolve(s2);
              break;
            case "packetTrailerMetadata":
              this.handleFrameMetadata(s2.trackId, s2.rtpTimestamp, s2.ssrc, s2.metadata);
          }
        }, this.onWorkerError = (t3) => {
          er.error("e2ee worker encountered an error:", { error: t3.error }), this.emit(e.EncryptionEvent.EncryptionError, t3.error, undefined);
        }, this.keyProvider = t2.keyProvider, this.worker = t2.worker, this.encryptionEnabled = false, this.dataChannelEncryptionEnabled = n2;
      }
      get isEnabled() {
        return this.encryptionEnabled;
      }
      get isDataChannelEncryptionEnabled() {
        return this.isEnabled && this.dataChannelEncryptionEnabled;
      }
      setup(e2) {
        if (!Fo())
          throw new Va("tried to setup end-to-end encryption on an unsupported browser");
        if (er.info("setting up e2ee"), e2 !== this.room) {
          this.room = e2, this.setupEventListeners(e2, this.keyProvider);
          const t2 = { kind: "init", data: { keyProviderOptions: this.keyProvider.getOptions(), loglevel: ir.getLevel() } };
          this.worker && (er.info("initializing worker", { worker: this.worker }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t2));
        }
      }
      setParticipantCryptorEnabled(e2, t2) {
        er.debug("set e2ee to ".concat(e2, " for participant ").concat(t2)), this.postEnable(e2, t2);
      }
      setSifTrailer(e2) {
        e2 && e2.length !== 0 ? this.postSifTrailer(e2) : er.warn("ignoring server sent trailer as it's empty");
      }
      handleFrameMetadata(e2, t2, n2, i2) {
        if (this.room) {
          for (const r2 of [this.room.localParticipant, ...this.room.remoteParticipants.values()])
            for (const a2 of r2.trackPublications.values())
              if (a2.track && a2.track.mediaStreamID === e2 && a2.track instanceof ec && a2.track.frameMetadataExtractor)
                return void a2.track.frameMetadataExtractor.storeMetadata(t2, n2, i2);
        }
      }
      setupEngine(t2) {
        t2.on(e.EngineEvent.RTPVideoMapUpdate, (e2) => {
          this.postRTPMap(e2);
        });
      }
      setupEventListeners(t2, n2) {
        t2.on(e.RoomEvent.TrackPublished, (e2, t3) => this.setParticipantCryptorEnabled(e2.trackInfo.encryption !== ht.NONE, t3.identity)), t2.on(e.RoomEvent.ConnectionStateChanged, (n3) => {
          n3 === e.ConnectionState.Connected && t2.remoteParticipants.forEach((e2) => {
            e2.trackPublications.forEach((t3) => {
              this.setParticipantCryptorEnabled(t3.trackInfo.encryption !== ht.NONE, e2.identity);
            });
          });
        }).on(e.RoomEvent.TrackUnsubscribed, (e2, t3, n3) => {
          var i2;
          const r2 = { kind: "removeTransform", data: { participantIdentity: n3.identity, trackId: e2.mediaStreamID } };
          (i2 = this.worker) === null || i2 === undefined || i2.postMessage(r2);
        }).on(e.RoomEvent.TrackSubscribed, (e2, t3, n3) => {
          this.setupE2EEReceiver(e2, n3.identity, t3.trackInfo);
        }).on(e.RoomEvent.SignalConnected, () => {
          if (!this.room)
            throw new TypeError("expected room to be present on signal connect");
          const e2 = n2.getLatestManuallySetKeyIndex();
          n2.getKeys().forEach((t3) => {
            var n3;
            this.postKey(t3, e2 === ((n3 = t3.keyIndex) !== null && n3 !== undefined ? n3 : 0));
          }), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity);
        }), t2.localParticipant.on(e.ParticipantEvent.LocalSenderCreated, (e2, t3) => cr(this, undefined, undefined, function* () {
          this.setupE2EESender(t3, e2);
        })), t2.localParticipant.on(e.ParticipantEvent.LocalTrackPublished, (e2) => {
          if (!yo(e2.track) || !Vs())
            return;
          const t3 = { kind: "updateCodec", data: { trackId: e2.track.mediaStreamID, codec: ks(e2.trackInfo.codecs[0].mimeType), participantIdentity: this.room.localParticipant.identity, hasPacketTrailer: false } };
          this.worker.postMessage(t3);
        }), n2.on(e.KeyProviderEvent.SetKey, (e2, t3) => this.postKey(e2, t3 == null || t3)).on(e.KeyProviderEvent.RatchetRequest, (e2, t3) => this.postRatchetRequest(e2, t3));
      }
      encryptData(e2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.worker)
            throw Error("could not encrypt data, worker is missing");
          const t2 = crypto.randomUUID(), n2 = { kind: "encryptDataRequest", data: { uuid: t2, payload: e2, participantIdentity: this.room.localParticipant.identity } }, i2 = new lo;
          return i2.onFinally = () => {
            this.encryptDataRequests.delete(t2);
          }, this.encryptDataRequests.set(t2, i2), this.worker.postMessage(n2), i2.promise;
        });
      }
      handleEncryptedData(e2, t2, n2, i2) {
        if (!this.worker)
          throw Error("could not handle encrypted data, worker is missing");
        const r2 = crypto.randomUUID(), a2 = { kind: "decryptDataRequest", data: { uuid: r2, payload: e2, iv: t2, participantIdentity: n2, keyIndex: i2 } }, s2 = new lo;
        return s2.onFinally = () => {
          this.decryptDataRequests.delete(r2);
        }, this.decryptDataRequests.set(r2, s2), this.worker.postMessage(a2), s2.promise;
      }
      postRatchetRequest(e2, t2) {
        if (!this.worker)
          throw Error("could not ratchet key, worker is missing");
        const n2 = { kind: "ratchetRequest", data: { participantIdentity: e2, keyIndex: t2 } };
        this.worker.postMessage(n2);
      }
      postKey(e2, t2) {
        let { key: n2, participantIdentity: i2, keyIndex: r2 } = e2;
        var a2;
        if (!this.worker)
          throw Error("could not set key, worker is missing");
        const s2 = { kind: "setKey", data: { participantIdentity: i2, isPublisher: i2 === ((a2 = this.room) === null || a2 === undefined ? undefined : a2.localParticipant.identity), key: n2, keyIndex: r2, updateCurrentKeyIndex: t2 } };
        this.worker.postMessage(s2);
      }
      postEnable(e2, t2) {
        if (!this.worker)
          throw new ReferenceError("failed to enable e2ee, worker is not ready");
        {
          const n2 = { kind: "enable", data: { enabled: e2, participantIdentity: t2 } };
          this.worker.postMessage(n2);
        }
      }
      postRTPMap(e2) {
        var t2;
        if (!this.worker)
          throw TypeError("could not post rtp map, worker is missing");
        if (!((t2 = this.room) === null || t2 === undefined ? undefined : t2.localParticipant.identity))
          throw TypeError("could not post rtp map, local participant identity is missing");
        const n2 = { kind: "setRTPMap", data: { map: e2, participantIdentity: this.room.localParticipant.identity } };
        this.worker.postMessage(n2);
      }
      postSifTrailer(e2) {
        if (!this.worker)
          throw Error("could not post SIF trailer, worker is missing");
        const t2 = { kind: "setSifTrailer", data: { trailer: e2 } };
        this.worker.postMessage(t2);
      }
      setupE2EEReceiver(e2, t2, n2) {
        if (!e2.receiver)
          return;
        if (!(n2 == null ? undefined : n2.mimeType) || n2.mimeType === "")
          throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
        const i2 = e2.kind === "video" && !!n2.packetTrailerFeatures && n2.packetTrailerFeatures.length > 0;
        this.handleReceiver(e2.receiver, e2.mediaStreamID, t2, e2.kind === "video" ? ks(n2.mimeType) : undefined, i2);
      }
      setupE2EESender(e2, t2) {
        var n2, i2, r2;
        fo(e2) && t2 ? this.handleSender(t2, e2.mediaStreamID, undefined, yo(e2) ? (i2 = (n2 = e2.publishOptions) === null || n2 === undefined ? undefined : n2.frameMetadata) !== null && i2 !== undefined ? i2 : (r2 = e2.publishOptions) === null || r2 === undefined ? undefined : r2.packetTrailer : undefined) : t2 || er.warn("early return because sender is not ready");
      }
      handleReceiver(e2, t2, n2, i2, r2) {
        return cr(this, undefined, undefined, function* () {
          if (this.worker) {
            if (js()) {
              const a2 = { kind: "decode", participantIdentity: n2, trackId: t2, codec: i2, hasPacketTrailer: r2 };
              e2.transform = new RTCRtpScriptTransform(this.worker, a2);
            } else {
              if (No in e2 && i2) {
                const e3 = { kind: "updateCodec", data: { trackId: t2, codec: i2, participantIdentity: n2, hasPacketTrailer: r2 } };
                return void this.worker.postMessage(e3);
              }
              let { writableStream: a2, readableStream: s2 } = e2;
              if (!a2 || !s2) {
                const t3 = e2.createEncodedStreams();
                e2.writableStream = t3.writable, a2 = t3.writable, e2.readableStream = t3.readable, s2 = t3.readable;
              }
              const o2 = { kind: "decode", data: { readableStream: s2, writableStream: a2, trackId: t2, codec: i2, participantIdentity: n2, isReuse: No in e2, hasPacketTrailer: r2 } };
              this.worker.postMessage(o2, [s2, a2]);
            }
            e2[No] = true;
          }
        });
      }
      handleSender(e2, t2, n2, i2) {
        var r2;
        if (!(No in e2) && this.worker) {
          if (!((r2 = this.room) === null || r2 === undefined ? undefined : r2.localParticipant.identity) || this.room.localParticipant.identity === "")
            throw TypeError("local identity needs to be known in order to set up encrypted sender");
          if (js()) {
            er.info("initialize script transform");
            const r3 = { kind: "encode", participantIdentity: this.room.localParticipant.identity, trackId: t2, codec: n2, hasPacketTrailer: Qo(i2), packetTrailer: i2 };
            e2.transform = new RTCRtpScriptTransform(this.worker, r3);
          } else {
            er.info("initialize encoded streams");
            const r3 = e2.createEncodedStreams(), a2 = { kind: "encode", data: { readableStream: r3.readable, writableStream: r3.writable, codec: n2, trackId: t2, participantIdentity: this.room.localParticipant.identity, isReuse: false, hasPacketTrailer: Qo(i2), packetTrailer: i2 } };
            this.worker.postMessage(a2, [r3.readable, r3.writable]);
          }
          e2[No] = true;
        }
      }
    }

    class ac {
      constructor() {
        this.metadataMap = new Map, this.activeSsrc = 0;
      }
      storeMetadata(e2, t2, n2) {
        for (this.activeSsrc !== 0 && this.activeSsrc !== t2 && this.metadataMap.clear(), this.activeSsrc = t2;this.metadataMap.size >= 300; ) {
          const e3 = this.metadataMap.keys().next().value;
          this.metadataMap.delete(e3);
        }
        this.metadataMap.set(e2, n2);
      }
      lookupMetadata(e2) {
        return this.metadataMap.get(e2);
      }
      dispose() {
        this.metadataMap.clear(), this.activeSsrc = 0;
      }
    }

    class sc {
      constructor(e2) {
        this.extractors = new Map, this.workerPipelines = new Map, this.onWorkerMessage = (e3) => {
          const t2 = e3.data;
          if (t2.kind === "metadata") {
            const e4 = this.extractors.get(t2.data.trackId);
            e4 && e4.storeMetadata(t2.data.rtpTimestamp, t2.data.ssrc, t2.data.metadata);
          }
        }, this.onWorkerError = (e3) => {
          er.error("frame metadata worker encountered an error:", { error: e3.error });
        }, this.worker = e2 == null ? undefined : e2.worker;
      }
      setup(t2) {
        t2 !== this.room && (this.room = t2, this.worker && (this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage({ kind: "init" })), t2.on(e.RoomEvent.TrackSubscribed, (e2, t3, n2) => {
          e2.kind === "video" && this.setupReceiver(e2, t3.trackInfo);
        }).on(e.RoomEvent.TrackUnsubscribed, (e2) => {
          this.teardownTrack(e2);
        }).on(e.RoomEvent.Disconnected, () => {
          this.cleanup();
        }));
      }
      setupReceiver(e2, t2) {
        var n2, i2, r2;
        const a2 = e2.receiver;
        if (!a2)
          return;
        if (!(!!(t2 == null ? undefined : t2.packetTrailerFeatures) && t2.packetTrailerFeatures.length > 0))
          return void (((n2 = this.room) === null || n2 === undefined ? undefined : n2.hasE2EESetup) || this.setupPassthroughReceiver(a2, e2.mediaStreamID));
        if (!Jo(this.worker ? { worker: this.worker } : undefined) && !((i2 = this.room) === null || i2 === undefined ? undefined : i2.hasE2EESetup))
          return void er.warn("frame metadata transform not supported; skipping extraction");
        const s2 = new ac, o2 = e2.mediaStreamID;
        this.extractors.set(o2, s2), e2.frameMetadataExtractor = s2, ((r2 = this.room) === null || r2 === undefined ? undefined : r2.hasE2EESetup) || this.setupWorkerReceiver(a2, o2, true);
      }
      setupPassthroughReceiver(e2, t2) {
        Go() ? "transform" in e2 && (e2.transform = null) : (this.worker && Jo({ worker: this.worker }) && !this.workerPipelines.has(e2) || this.worker && this.workerPipelines.has(e2)) && this.setupWorkerReceiver(e2, t2, false);
      }
      setupWorkerReceiver(e2, t2) {
        let n2 = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
        const i2 = this.worker;
        if (!i2)
          return;
        if (Go())
          return void (e2.transform = new RTCRtpScriptTransform(i2, { kind: "decode", trackId: t2 }));
        const r2 = this.workerPipelines.get(e2);
        if (r2) {
          const a3 = { kind: "updateTrackId", data: { oldTrackId: r2, newTrackId: t2, hasPacketTrailer: n2 } };
          return i2.postMessage(a3), void this.workerPipelines.set(e2, t2);
        }
        if (!("createEncodedStreams" in e2))
          return void er.warn("createEncodedStreams not supported");
        let a2;
        try {
          a2 = e2.createEncodedStreams();
        } catch (o2) {
          return void er.warn("failed to create encoded streams", { error: o2 });
        }
        const s2 = { kind: "decode", data: { readableStream: a2.readable, writableStream: a2.writable, trackId: t2, hasPacketTrailer: n2 } };
        i2.postMessage(s2, [a2.readable, a2.writable]), this.workerPipelines.set(e2, t2);
      }
      teardownTrack(e2) {
        const t2 = e2.mediaStreamID, n2 = this.extractors.get(t2);
        n2 && (n2.dispose(), this.extractors.delete(t2)), e2 instanceof ec && (e2.frameMetadataExtractor = undefined);
      }
      cleanup() {
        var e2;
        for (const t2 of this.extractors.values())
          t2.dispose();
        this.extractors.clear(), this.workerPipelines.clear(), (e2 = this.worker) === null || e2 === undefined || e2.terminate();
      }
    }
    const oc = sc;

    class cc {
      constructor() {
        this.failedConnectionAttempts = new Map, this.backOffPromises = new Map;
      }
      static getInstance() {
        return this._instance || (this._instance = new cc), this._instance;
      }
      addFailedConnectionAttempt(e2) {
        var t2;
        const n2 = Js(new URL(e2));
        if (!n2)
          return;
        let i2 = (t2 = this.failedConnectionAttempts.get(n2)) !== null && t2 !== undefined ? t2 : 0;
        this.failedConnectionAttempts.set(n2, i2 + 1), this.backOffPromises.set(n2, Ms(Math.min(500 * Math.pow(2, i2), 15000)));
      }
      getBackOffPromise(e2) {
        const t2 = new URL(e2), n2 = t2 && Js(t2);
        return n2 && this.backOffPromises.get(n2) || Promise.resolve();
      }
      resetFailedConnectionAttempts(e2) {
        const t2 = new URL(e2), n2 = t2 && Js(t2);
        n2 && (this.failedConnectionAttempts.set(n2, 0), this.backOffPromises.set(n2, Promise.resolve()));
      }
      resetAll() {
        this.backOffPromises.clear(), this.failedConnectionAttempts.clear();
      }
    }
    cc._instance = null;
    const dc = "default";

    class lc {
      constructor() {
        this._previousDevices = [];
      }
      static getInstance() {
        return this.instance === undefined && (this.instance = new lc), this.instance;
      }
      get previousDevices() {
        return this._previousDevices;
      }
      getDevices(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let i2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
          return function* () {
            var r2;
            if (((r2 = lc.userMediaPromiseMap) === null || r2 === undefined ? undefined : r2.size) > 0) {
              er.debug("awaiting getUserMedia promise");
              try {
                e3 ? yield lc.userMediaPromiseMap.get(e3) : yield Promise.all(lc.userMediaPromiseMap.values());
              } catch (n2) {
                er.warn("error waiting for media permissons");
              }
            }
            let a2 = yield navigator.mediaDevices.enumerateDevices();
            if (i2 && (!qs() || !t2.hasDeviceInUse(e3))) {
              if (a2.filter((t3) => t3.kind === e3).length === 0 || a2.some((t3) => {
                const n2 = t3.label === "", i3 = !e3 || t3.kind === e3;
                return n2 && i3;
              })) {
                const t3 = { video: e3 !== "audioinput" && e3 !== "audiooutput", audio: e3 !== "videoinput" && { deviceId: { ideal: "default" } } }, n2 = yield navigator.mediaDevices.getUserMedia(t3);
                a2 = yield navigator.mediaDevices.enumerateDevices(), n2.getTracks().forEach((e4) => {
                  e4.stop();
                });
              }
            }
            return t2._previousDevices = a2, e3 && (a2 = a2.filter((t3) => t3.kind === e3)), a2;
          }();
        });
      }
      normalizeDeviceId(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          if (t2 !== dc)
            return t2;
          const i2 = yield this.getDevices(e2), r2 = i2.find((e3) => e3.deviceId === dc);
          if (!r2)
            return void er.warn("could not reliably determine default device");
          const a2 = i2.find((e3) => e3.deviceId !== dc && e3.groupId === (n2 != null ? n2 : r2.groupId));
          if (a2)
            return a2 == null ? undefined : a2.deviceId;
          er.warn("could not reliably determine default device");
        });
      }
      hasDeviceInUse(e2) {
        return e2 ? lc.userMediaPromiseMap.has(e2) : lc.userMediaPromiseMap.size > 0;
      }
    }
    lc.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"], lc.userMediaPromiseMap = new Map;
    const uc = 65535, hc = 4294967295;

    class pc {
      static u16(e2) {
        return new pc(e2, uc);
      }
      static u32(e2) {
        return new pc(e2, hc);
      }
      constructor(e2, t2) {
        if (this.value = e2, e2 < 0)
          throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer smaller than 0");
        if (t2 > Number.MAX_SAFE_INTEGER)
          throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer bigger than MAX_SAFE_INTEGER.");
        this.maxSize = t2, this.clamp();
      }
      clamp() {
        for (;this.value > this.maxSize; )
          this.value -= this.maxSize + 1;
        for (;this.value < 0; )
          this.value += this.maxSize + 1;
      }
      clone() {
        return new pc(this.value, this.maxSize);
      }
      update(e2) {
        this.value = e2(this.value), this.clamp();
      }
      increment() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.update((t2) => t2 + e2);
      }
      decrement() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.update((t2) => t2 - e2);
      }
      getThenIncrement() {
        const e2 = this.value;
        return this.increment(), new pc(e2, this.maxSize);
      }
      isBefore(e2) {
        const t2 = this.value >>> 0, n2 = (e2.value >>> 0) - t2 >>> 0;
        return n2 !== 0 && n2 < this.maxSize + 1;
      }
    }

    class mc {
      static fromRtpTicks(e2) {
        return new mc(e2, 90000);
      }
      static rtpRandom() {
        const e2 = Math.round(Math.random() * hc);
        return mc.fromRtpTicks(e2);
      }
      constructor(e2, t2) {
        this.timestamp = pc.u32(e2), this.rateInHz = t2;
      }
      asTicks() {
        return this.timestamp.value;
      }
      clone() {
        return new mc(this.timestamp.value, this.rateInHz);
      }
      wrappingAdd(e2) {
        this.timestamp.increment(e2);
      }
      isBefore(e2) {
        return this.timestamp.isBefore(e2.timestamp);
      }
    }

    class gc {
      constructor(e2, t2, n2) {
        this.epoch = t2, this.base = n2, this.previous = n2.clone(), this.rateInHz = e2;
      }
      static startingNow(e2, t2) {
        return new gc(t2, new Date, e2);
      }
      static startingAtTime(e2, t2, n2) {
        return new gc(n2, e2, t2);
      }
      static rtpStartingNow(e2) {
        return gc.startingNow(e2, 90000);
      }
      static rtpStartingAtTime(e2, t2) {
        return gc.startingAtTime(e2, t2, 90000);
      }
      now() {
        return this.at(new Date);
      }
      at(e2) {
        let t2 = e2.getTime() - this.epoch.getTime(), n2 = gc.durationInMsToTicks(t2, this.rateInHz), i2 = this.base.clone();
        return i2.wrappingAdd(n2), i2.isBefore(this.previous) && (i2 = this.previous), this.previous = i2.clone(), i2.clone();
      }
      static durationInMsToTicks(e2, t2) {
        let n2 = (1e6 * e2 * t2 + 500000000) / 1e9;
        return Math.round(n2);
      }
    }
    function vc(e2) {
      if (e2 instanceof DataView)
        return e2;
      if (e2 instanceof ArrayBuffer)
        return new DataView(e2);
      if (e2 instanceof Uint8Array)
        return new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
      throw new Error("Error coercing ".concat(e2, " to DataView - input was not DataView, ArrayBuffer, or Uint8Array."));
    }
    var fc;
    (function(e2) {
      e2[e2.Reserved = 0] = "Reserved", e2[e2.TooLarge = 1] = "TooLarge";
    })(fc || (fc = {}));

    class kc extends Aa {
      constructor(e2, t2) {
        super(19, e2), this.name = "DataTrackHandleError", this.reason = t2, this.reasonName = fc[t2];
      }
      isReason(e2) {
        return this.reason === e2;
      }
      static tooLarge() {
        return new kc("Value too large to be a valid track handle", fc.TooLarge);
      }
      static reserved(e2) {
        return new kc("0x".concat(e2.toString(16), " is a reserved value."), fc.Reserved);
      }
    }
    const yc = { fromNumber(e2) {
      if (e2 === 0)
        throw kc.reserved(e2);
      if (e2 > uc)
        throw kc.tooLarge();
      return e2;
    } };

    class bc {
      constructor() {
        this.value = 0;
      }
      get() {
        return this.value += 1, this.value > uc ? null : this.value;
      }
      reset() {
        this.value = 0;
      }
    }
    const Tc = { from: (e2) => ({ sid: e2.sid, pubHandle: e2.pubHandle, name: e2.name, usesE2ee: e2.encryption !== ht.NONE }), toProtobuf: (e2) => new gt({ sid: e2.sid, pubHandle: e2.pubHandle, name: e2.name, encryption: e2.usesE2ee ? ht.GCM : ht.NONE }) };
    var Sc;
    (function(e2) {
      e2[e2.WAITING = 0] = "WAITING", e2[e2.RUNNING = 1] = "RUNNING", e2[e2.COMPLETED = 2] = "COMPLETED";
    })(Sc || (Sc = {}));

    class Ec {
      constructor() {
        this.pendingTasks = new Map, this.taskMutex = new r, this.nextTaskIndex = 0;
      }
      run(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = { id: this.nextTaskIndex++, enqueuedAt: Date.now(), status: Sc.WAITING };
          this.pendingTasks.set(t2.id, t2);
          const n2 = yield this.taskMutex.lock();
          try {
            return t2.executedAt = Date.now(), t2.status = Sc.RUNNING, yield e2();
          } finally {
            t2.status = Sc.COMPLETED, this.pendingTasks.delete(t2.id), n2();
          }
        });
      }
      flush() {
        return cr(this, undefined, undefined, function* () {
          return this.run(() => cr(this, undefined, undefined, function* () {}));
        });
      }
      snapshot() {
        return Array.from(this.pendingTasks.values());
      }
    }

    class Cc {
      get readyState() {
        return this.ws.readyState;
      }
      constructor(e2) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n2, i2;
        if ((n2 = t2.signal) === null || n2 === undefined ? undefined : n2.aborted)
          throw new DOMException("This operation was aborted", "AbortError");
        this.url = e2;
        const r2 = new WebSocket(e2, (i2 = t2.protocols) !== null && i2 !== undefined ? i2 : []);
        r2.binaryType = "arraybuffer", this.ws = r2;
        const a2 = function() {
          let e3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, t3 = e3.closeCode, n3 = e3.reason;
          return r2.close(t3, n3);
        };
        this.opened = new Ca((e3, t3) => {
          const n3 = () => {
            t3(qa.websocket("Encountered websocket error during connection establishment"));
          };
          r2.onopen = () => {
            e3({ readable: new ReadableStream({ start(e4) {
              r2.onmessage = (t4) => {
                let n4 = t4.data;
                return e4.enqueue(n4);
              }, r2.onerror = (t4) => e4.error(t4);
            }, cancel: a2 }), writable: new WritableStream({ write(e4) {
              r2.send(e4);
            }, abort() {
              r2.close();
            }, close: a2 }), protocol: r2.protocol, extensions: r2.extensions }), r2.removeEventListener("error", n3);
          }, r2.addEventListener("error", n3);
        }), this.closed = new Ca((e3, t3) => {
          const n3 = () => cr(this, undefined, undefined, function* () {
            const n4 = new Ca((e4) => {
              r2.readyState !== WebSocket.CLOSED && r2.addEventListener("close", (t4) => {
                e4(t4);
              }, { once: true });
            }), i3 = yield Ca.race([Ms(250), n4]);
            i3 ? e3(i3) : t3(qa.websocket("Encountered unspecified websocket error without a timely close event"));
          });
          r2.onclose = (t4) => {
            let { code: i3, reason: a3 } = t4;
            e3({ closeCode: i3, reason: a3 }), r2.removeEventListener("error", n3);
          }, r2.addEventListener("error", n3);
        }), t2.signal && (t2.signal.onabort = () => r2.close()), this.close = a2;
      }
    }
    const wc = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
    var Rc;
    (function(e2) {
      e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.CONNECTED = 1] = "CONNECTED", e2[e2.RECONNECTING = 2] = "RECONNECTING", e2[e2.DISCONNECTING = 3] = "DISCONNECTING", e2[e2.DISCONNECTED = 4] = "DISCONNECTED";
    })(Rc || (Rc = {}));

    class Pc {
      get currentState() {
        return this.state;
      }
      get isDisconnected() {
        return this.state === Rc.DISCONNECTING || this.state === Rc.DISCONNECTED;
      }
      get isEstablishingConnection() {
        return this.state === Rc.CONNECTING || this.state === Rc.RECONNECTING;
      }
      getNextRequestId() {
        return this._requestId += 1, this._requestId;
      }
      constructor() {
        let t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0], n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i2;
        this.rtt = 0, this.state = Rc.DISCONNECTED, this.log = er, this._requestId = 0, this.useV0SignalPath = false, this.resetCallbacks = () => {
          this.onAnswer = undefined, this.onLeave = undefined, this.onLocalTrackPublished = undefined, this.onLocalTrackUnpublished = undefined, this.onNegotiateRequested = undefined, this.onOffer = undefined, this.onRemoteMuteChanged = undefined, this.onSubscribedQualityUpdate = undefined, this.onTokenRefresh = undefined, this.onTrickle = undefined, this.onClose = undefined, this.onMediaSectionsRequirement = undefined;
        }, this.loggerContextCb = n2.loggerContextCb, this.log = nr((i2 = n2.loggerName) !== null && i2 !== undefined ? i2 : e.LoggerNames.Signal, () => this.logContext), this.useJSON = t2, this.requestQueue = new Ec, this.queuedRequests = [], this.closingLock = new r, this.connectionLock = new r, this.state = Rc.DISCONNECTED;
      }
      get logContext() {
        var e2, t2;
        return (t2 = (e2 = this.loggerContextCb) === null || e2 === undefined ? undefined : e2.call(this)) !== null && t2 !== undefined ? t2 : {};
      }
      join(e2, t2, n2, i2) {
        return cr(this, arguments, undefined, function(e3, t3, n3, i3) {
          var r2 = this;
          let a2 = arguments.length > 4 && arguments[4] !== undefined && arguments[4], s2 = arguments.length > 5 ? arguments[5] : undefined;
          return function* () {
            r2.state = Rc.CONNECTING, r2.options = n3;
            return yield r2.connect(e3, t3, n3, i3, a2, s2);
          }();
        });
      }
      reconnect(e2, t2, n2, i2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.options)
            return void this.log.warn("attempted to reconnect without signal options being set, ignoring");
          this.state = Rc.RECONNECTING, this.clearPingInterval();
          return yield this.connect(e2, t2, Object.assign(Object.assign({}, this.options), { reconnect: true, sid: n2, reconnectReason: i2 }), undefined, this.useV0SignalPath);
        });
      }
      connect(e2, t2, i2, r2) {
        return cr(this, arguments, undefined, function(e3, t3, i3, r3) {
          var a2 = this;
          let s2 = arguments.length > 4 && arguments[4] !== undefined && arguments[4], o2 = arguments.length > 5 ? arguments[5] : undefined;
          return function* () {
            const c2 = yield a2.connectionLock.lock();
            a2.connectOptions = i3, a2.useV0SignalPath = s2;
            const d2 = function(e4) {
              var t4;
              const n2 = new Ht({ capabilities: e4, sdk: Kt.JS, protocol: 17, clientProtocol: 2, version: Da });
              return zs() && (n2.os = (t4 = Ys()) !== null && t4 !== undefined ? t4 : ""), n2;
            }(i3.clientInfoCapabilities), l2 = s2 ? function(e4, t4, n2) {
              var i4;
              const r4 = new URLSearchParams;
              r4.set("access_token", e4), n2.reconnect && (r4.set("reconnect", "1"), n2.sid && r4.set("sid", n2.sid));
              r4.set("auto_subscribe", n2.autoSubscribe ? "1" : "0"), r4.set("sdk", zs() ? "reactnative" : "js"), r4.set("version", t4.version), r4.set("protocol", t4.protocol.toString()), r4.set("client_protocol", t4.clientProtocol.toString()), t4.deviceModel && r4.set("device_model", t4.deviceModel);
              t4.os && r4.set("os", t4.os);
              t4.osVersion && r4.set("os_version", t4.osVersion);
              t4.browser && r4.set("browser", t4.browser);
              t4.browserVersion && r4.set("browser_version", t4.browserVersion);
              n2.adaptiveStream && r4.set("adaptive_stream", "1");
              n2.reconnectReason && r4.set("reconnect_reason", n2.reconnectReason.toString());
              ((i4 = navigator.connection) === null || i4 === undefined ? undefined : i4.type) && r4.set("network", navigator.connection.type);
              return r4;
            }(t3, d2, i3) : yield function(e4, t4, n2, i4) {
              return cr(this, undefined, undefined, function* () {
                const r4 = new URLSearchParams;
                r4.set("access_token", e4);
                const a3 = new qi({ clientInfo: t4, connectionSettings: new ji({ autoSubscribe: !!n2.autoSubscribe, adaptiveStream: !!n2.adaptiveStream }), reconnect: !!n2.reconnect, participantSid: n2.sid ? n2.sid : undefined, publisherOffer: i4 });
                n2.reconnectReason && (a3.reconnectReason = n2.reconnectReason);
                const s3 = a3.toBinary();
                let o3, c3;
                if (Po()) {
                  const e5 = new CompressionStream("gzip"), t5 = e5.writable.getWriter();
                  t5.write(new Uint8Array(s3)), t5.close();
                  const n3 = [], i5 = e5.readable.getReader();
                  for (;; ) {
                    const e6 = yield i5.read(), t6 = e6.done, r6 = e6.value;
                    if (t6)
                      break;
                    n3.push(r6);
                  }
                  const r5 = n3.reduce((e6, t6) => e6 + t6.length, 0), a4 = new Uint8Array(r5);
                  let d4 = 0;
                  for (const s4 of n3)
                    a4.set(s4, d4), d4 += s4.length;
                  o3 = a4, c3 = Wi.GZIP;
                } else
                  o3 = s3, c3 = Wi.NONE;
                const d3 = new Vi({ joinRequest: o3, compression: c3 }).toBinary(), l3 = (e5) => {
                  const t5 = Array.from(e5, (e6) => String.fromCodePoint(e6)).join("");
                  return btoa(t5);
                };
                return r4.set("join_request", l3(d3).replace(/\+/g, "-").replace(/\//g, "_")), r4;
              });
            }(t3, d2, i3, o2), u2 = _o(e3, l2, s2).toString(), h2 = (p2 = u2, Do(new URL(po(p2)), "validate")).toString();
            var p2;
            return new Promise((e4, t4) => cr(a2, undefined, undefined, function* () {
              var a3, s3;
              try {
                let o3 = false;
                const c3 = (e5) => cr(this, undefined, undefined, function* () {
                  if (o3)
                    return;
                  o3 = true;
                  const n2 = function(e6) {
                    let t5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unknown reason";
                    if (!(e6 instanceof AbortSignal))
                      return t5;
                    const n3 = e6.reason;
                    switch (typeof n3) {
                      case "string":
                        return n3;
                      case "object":
                        return n3 instanceof Error ? n3.message : t5;
                      default:
                        return "toString" in n3 ? n3.toString() : t5;
                    }
                  }(e5 instanceof Event ? e5.currentTarget : e5, "Abort handler called");
                  this.streamWriter && !this.isDisconnected ? this.sendLeave().then(() => this.close(n2)).catch((e6) => {
                    this.log.error(e6), this.close();
                  }) : this.close(), d3(), t4(qa.cancelled(n2));
                });
                r3 == null || r3.addEventListener("abort", c3);
                const d3 = () => {
                  clearTimeout(l3), r3 == null || r3.removeEventListener("abort", c3);
                }, l3 = setTimeout(() => {
                  c3(qa.timeout("room connection has timed out (signal)"));
                }, i3.websocketTimeout), p3 = (e5, t5) => {
                  this.handleSignalConnected(e5, l3, t5);
                }, m2 = new URL(u2);
                if (m2.searchParams.has("access_token") && m2.searchParams.set("access_token", "<redacted>"), this.ws) {
                  const e5 = performance.now();
                  yield this.close(false), this.log.debug("closed previous ws connection in ".concat(performance.now() - e5, "ms"));
                }
                this.log.info("signal connecting to ".concat(m2), { reconnect: i3.reconnect, reconnectReason: i3.reconnectReason }), this.ws = new Cc(u2);
                try {
                  this.ws.closed.then((e5) => {
                    this.isEstablishingConnection && t4(qa.internal("Websocket got closed during a (re)connection attempt: ".concat(e5.reason))), e5.closeCode !== 1000 && (this.log.warn("websocket closed", { reason: e5.reason, code: e5.closeCode, wasClean: e5.closeCode === 1000, state: this.state }), this.state === Rc.CONNECTED && this.handleOnClose(e5.reason || "Unexpected WS error"));
                  }).catch((e5) => {
                    this.isEstablishingConnection && t4(qa.internal("Websocket error during a (re)connection attempt: ".concat(e5)));
                  });
                  const r4 = yield this.ws.opened.catch((e5) => cr(this, undefined, undefined, function* () {
                    if (this.state === Rc.CONNECTED)
                      this.handleWSError(e5), t4(e5);
                    else {
                      this.state = Rc.DISCONNECTED, clearTimeout(l3);
                      const n2 = yield this.handleConnectionError(e5, h2);
                      t4(n2);
                    }
                  }));
                  if (clearTimeout(l3), !r4)
                    return;
                  const o4 = r4.readable.getReader();
                  let c4, d4;
                  this.streamWriter = r4.writable.getWriter();
                  try {
                    c4 = yield Promise.race([o4.read(), new Promise((e5, t5) => {
                      d4 = setTimeout(() => {
                        t5(qa.timeout("signal connection timed out while waiting for the first message"));
                      }, 5000);
                    })]);
                  } catch (n2) {
                    return o4.releaseLock(), t4(n2), void this.close();
                  } finally {
                    clearTimeout(d4);
                  }
                  if (o4.releaseLock(), !c4.value)
                    throw qa.internal("no message received as first message");
                  const u3 = Oo(c4.value), m3 = this.validateFirstMessage(u3, (a3 = i3.reconnect) !== null && a3 !== undefined && a3);
                  if (!m3.isValid)
                    return void t4(m3.error);
                  ((s3 = u3.message) === null || s3 === undefined ? undefined : s3.case) === "join" && (this.pingTimeoutDuration = u3.message.value.pingTimeout, this.pingIntervalDuration = u3.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && this.log.debug("ping config", { timeout: this.pingTimeoutDuration, interval: this.pingIntervalDuration }), this.onJoined && this.onJoined(u3.message.value));
                  p3(r4, m3.shouldProcessFirstMessage ? u3 : undefined), e4(m3.response);
                } catch (n2) {
                  t4(n2);
                } finally {
                  d3();
                }
              } finally {
                c2();
              }
            }));
          }();
        });
      }
      startReadingLoop(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          for (t2 && this.handleSignalResponse(t2);; ) {
            this.signalLatency && (yield Ms(this.signalLatency));
            const t3 = yield e2.read(), n2 = t3.done, i2 = t3.value;
            if (n2)
              break;
            const r2 = Oo(i2);
            this.handleSignalResponse(r2);
          }
        });
      }
      close() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0], i2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Close method called on signal client";
          return function* () {
            if ([Rc.DISCONNECTING || Rc.DISCONNECTED].includes(e2.state))
              return void e2.log.debug("ignoring signal close as it's already in disconnecting state");
            const r2 = yield e2.closingLock.lock();
            try {
              if (e2.clearPingInterval(), t2 && (e2.state = Rc.DISCONNECTING), e2.ws) {
                e2.ws.close({ closeCode: 1000, reason: i2 });
                const t3 = e2.ws.closed;
                e2.ws = undefined, e2.streamWriter = undefined, yield Promise.race([t3, Ms(250)]);
              }
            } catch (n2) {
              e2.log.debug("websocket error while closing", { error: n2 });
            } finally {
              t2 && (e2.state = Rc.DISCONNECTED), r2();
            }
          }();
        });
      }
      sendOffer(e2, t2) {
        this.log.debug("sending offer", { offerSdp: e2.sdp }), this.sendRequest({ case: "offer", value: _c(e2, t2) });
      }
      sendAnswer(e2, t2) {
        return this.log.debug("sending answer", { answerSdp: e2.sdp }), this.sendRequest({ case: "answer", value: _c(e2, t2) });
      }
      sendIceCandidate(e2, t2) {
        return this.log.debug("sending ice candidate", { candidate: e2 }), this.sendRequest({ case: "trickle", value: new Kn({ candidateInit: JSON.stringify(e2), target: t2 }) });
      }
      sendMuteTrack(e2, t2) {
        return this.sendRequest({ case: "mute", value: new zn({ sid: e2, muted: t2 }) });
      }
      sendAddTrack(e2) {
        return this.sendRequest({ case: "addTrack", value: e2 });
      }
      sendUpdateLocalMetadata(e2, t2) {
        return cr(this, arguments, undefined, function(e3, t3) {
          var n2 = this;
          let i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return function* () {
            const r2 = n2.getNextRequestId();
            return yield n2.sendRequest({ case: "updateMetadata", value: new hi({ requestId: r2, metadata: e3, name: t3, attributes: i2 }) }), r2;
          }();
        });
      }
      sendUpdateTrackSettings(e2) {
        this.sendRequest({ case: "trackSetting", value: e2 });
      }
      sendUpdateSubscription(e2) {
        return this.sendRequest({ case: "subscription", value: e2 });
      }
      sendSyncState(e2) {
        return this.sendRequest({ case: "syncState", value: e2 });
      }
      sendUpdateVideoLayers(e2, t2) {
        return this.sendRequest({ case: "updateLayers", value: new ui({ trackSid: e2, layers: t2 }) });
      }
      sendUpdateSubscriptionPermissions(e2, t2) {
        return this.sendRequest({ case: "subscriptionPermission", value: new wi({ allParticipants: e2, trackPermissions: t2 }) });
      }
      sendSimulateScenario(e2) {
        return this.sendRequest({ case: "simulate", value: e2 });
      }
      sendPing() {
        return Promise.all([this.sendRequest({ case: "ping", value: R.parse(Date.now()) }), this.sendRequest({ case: "pingReq", value: new Oi({ timestamp: R.parse(Date.now()), rtt: R.parse(this.rtt) }) })]);
      }
      sendUpdateLocalAudioTrack(e2, t2) {
        return this.sendRequest({ case: "updateAudioTrack", value: new oi({ trackSid: e2, features: t2 }) });
      }
      sendLeave() {
        return this.sendRequest({ case: "leave", value: new di({ reason: et.CLIENT_INITIATED, action: li.DISCONNECT }) });
      }
      sendPublishDataTrackRequest(e2, t2, n2) {
        return this.sendRequest({ case: "publishDataTrackRequest", value: new Bn({ pubHandle: e2, name: t2, encryption: n2 ? ht.GCM : ht.NONE }) });
      }
      sendUnPublishDataTrackRequest(e2) {
        return this.sendRequest({ case: "unpublishDataTrackRequest", value: new qn({ pubHandle: e2 }) });
      }
      sendUpdateDataSubscription(e2, t2) {
        return this.sendRequest({ case: "updateDataSubscription", value: new ei({ updates: [new ti({ trackSid: e2, subscribe: t2 })] }) });
      }
      sendRequest(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let i2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          return function* () {
            const r2 = !i2 && !function(e4) {
              const t3 = wc.indexOf(e4.case) >= 0;
              return er.trace("request allowed to bypass queue:", { canPass: t3, req: e4 }), t3;
            }(e3);
            if (r2 && t2.state === Rc.RECONNECTING)
              return void t2.queuedRequests.push(() => cr(t2, undefined, undefined, function* () {
                yield this.sendRequest(e3, true);
              }));
            if (i2 || (yield t2.requestQueue.flush()), t2.signalLatency && (yield Ms(t2.signalLatency)), t2.isDisconnected)
              return void t2.log.debug("skipping signal request (type: ".concat(e3.case, ") - SignalClient disconnected"));
            if (!t2.streamWriter)
              return void t2.log.error("cannot send signal request before connected, type: ".concat(e3 == null ? undefined : e3.case));
            const a2 = new Ln({ message: e3 });
            try {
              t2.useJSON ? yield t2.streamWriter.write(a2.toJsonString()) : yield t2.streamWriter.write(a2.toBinary().buffer);
            } catch (n2) {
              t2.log.error("error sending signal message", { error: n2 });
            }
          }();
        });
      }
      handleSignalResponse(e2) {
        var t2, n2;
        const i2 = e2.message;
        if (i2 == null)
          return void this.log.debug("received unsupported message");
        let r2 = false;
        if (i2.case === "answer") {
          const e3 = Ic(i2.value);
          this.onAnswer && this.onAnswer(e3, i2.value.id, i2.value.midToTrackId);
        } else if (i2.case === "offer") {
          const e3 = Ic(i2.value);
          this.onOffer && this.onOffer(e3, i2.value.id, i2.value.midToTrackId);
        } else if (i2.case === "trickle") {
          const e3 = JSON.parse(i2.value.candidateInit);
          this.onTrickle && this.onTrickle(e3, i2.value.target);
        } else
          i2.case === "update" ? this.onParticipantUpdate && this.onParticipantUpdate((t2 = i2.value.participants) !== null && t2 !== undefined ? t2 : []) : i2.case === "trackPublished" ? this.onLocalTrackPublished && this.onLocalTrackPublished(i2.value) : i2.case === "speakersChanged" ? this.onSpeakersChanged && this.onSpeakersChanged((n2 = i2.value.speakers) !== null && n2 !== undefined ? n2 : []) : i2.case === "leave" ? this.onLeave && this.onLeave(i2.value) : i2.case === "mute" ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(i2.value.sid, i2.value.muted) : i2.case === "roomUpdate" ? this.onRoomUpdate && i2.value.room && this.onRoomUpdate(i2.value.room) : i2.case === "connectionQuality" ? this.onConnectionQuality && this.onConnectionQuality(i2.value) : i2.case === "streamStateUpdate" ? this.onStreamStateUpdate && this.onStreamStateUpdate(i2.value) : i2.case === "subscribedQualityUpdate" ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(i2.value) : i2.case === "subscriptionPermissionUpdate" ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(i2.value) : i2.case === "refreshToken" ? this.onTokenRefresh && this.onTokenRefresh(i2.value) : i2.case === "trackUnpublished" ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(i2.value) : i2.case === "subscriptionResponse" ? this.onSubscriptionError && this.onSubscriptionError(i2.value) : i2.case === "pong" || (i2.case === "pongResp" ? (this.rtt = Date.now() - Number.parseInt(i2.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r2 = true) : i2.case === "requestResponse" ? this.onRequestResponse && this.onRequestResponse(i2.value) : i2.case === "trackSubscribed" ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(i2.value.trackSid) : i2.case === "roomMoved" ? (this.onTokenRefresh && this.onTokenRefresh(i2.value.token), this.onRoomMoved && this.onRoomMoved(i2.value)) : i2.case === "mediaSectionsRequirement" ? this.onMediaSectionsRequirement && this.onMediaSectionsRequirement(i2.value) : i2.case === "publishDataTrackResponse" ? this.onPublishDataTrackResponse && this.onPublishDataTrackResponse(i2.value) : i2.case === "unpublishDataTrackResponse" ? this.onUnPublishDataTrackResponse && this.onUnPublishDataTrackResponse(i2.value) : i2.case === "dataTrackSubscriberHandles" ? this.onDataTrackSubscriberHandles && this.onDataTrackSubscriberHandles(i2.value) : this.log.debug("unsupported message", { msgCase: i2.case }));
        r2 || this.resetPingTimeout();
      }
      setReconnected() {
        for (;this.queuedRequests.length > 0; ) {
          const e2 = this.queuedRequests.shift();
          e2 && this.requestQueue.run(e2);
        }
      }
      handleOnClose(e2) {
        return cr(this, undefined, undefined, function* () {
          if (this.state === Rc.DISCONNECTED)
            return;
          const t2 = this.onClose;
          yield this.close(undefined, e2), this.log.info("websocket connection closed: ".concat(e2), { reason: e2 }), t2 && t2(e2);
        });
      }
      handleWSError(e2) {
        this.log.error("websocket error", { error: e2 });
      }
      resetPingTimeout() {
        this.clearPingTimeout(), this.pingTimeoutDuration ? this.pingTimeout = Za.setTimeout(() => {
          this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - 1000 * this.pingTimeoutDuration).toUTCString())), this.handleOnClose("ping timeout");
        }, 1000 * this.pingTimeoutDuration) : this.log.warn("ping timeout duration not set");
      }
      clearPingTimeout() {
        this.pingTimeout && Za.clearTimeout(this.pingTimeout);
      }
      startPingInterval() {
        this.clearPingInterval(), this.resetPingTimeout(), this.pingIntervalDuration ? (this.log.debug("start ping interval"), this.pingInterval = Za.setInterval(() => {
          this.sendPing();
        }, 1000 * this.pingIntervalDuration)) : this.log.warn("ping interval duration not set");
      }
      clearPingInterval() {
        this.log.debug("clearing ping interval"), this.clearPingTimeout(), this.pingInterval && Za.clearInterval(this.pingInterval);
      }
      handleSignalConnected(e2, t2, n2) {
        this.state = Rc.CONNECTED, this.log.info("signal connected"), clearTimeout(t2), this.startPingInterval(), this.startReadingLoop(e2.readable.getReader(), n2);
      }
      validateFirstMessage(e2, t2) {
        var n2, i2, r2, a2, s2;
        return ((n2 = e2.message) === null || n2 === undefined ? undefined : n2.case) === "join" ? { isValid: true, response: e2.message.value } : this.state === Rc.RECONNECTING && ((i2 = e2.message) === null || i2 === undefined ? undefined : i2.case) !== "leave" ? ((r2 = e2.message) === null || r2 === undefined ? undefined : r2.case) === "reconnect" ? { isValid: true, response: e2.message.value } : (this.log.debug("declaring signal reconnected without reconnect response received"), { isValid: true, response: undefined, shouldProcessFirstMessage: true }) : this.isEstablishingConnection && ((a2 = e2.message) === null || a2 === undefined ? undefined : a2.case) === "leave" ? { isValid: false, error: qa.leaveRequest("Received leave request while trying to (re)connect", e2.message.value.reason) } : t2 ? { isValid: false, error: qa.internal("Unexpected first message") } : { isValid: false, error: qa.internal("did not receive join response, got ".concat((s2 = e2.message) === null || s2 === undefined ? undefined : s2.case, " instead")) };
      }
      handleConnectionError(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          try {
            const n2 = yield fetch(t2);
            switch (n2.status) {
              case 404:
                const e3 = yield n2.text();
                return e3.includes("requested room does not exist") ? qa.notAllowed(e3, n2.status) : qa.serviceNotFound("v1 RTC path not found. Consider upgrading your LiveKit server version", "v0-rtc");
              case 401:
              case 403:
                const t3 = yield n2.text();
                return qa.notAllowed(t3, n2.status);
            }
            return e2 instanceof qa ? e2 : qa.internal("Encountered unknown websocket error during connection: ".concat(e2), { status: n2.status, statusText: n2.statusText });
          } catch (n2) {
            return n2 instanceof qa ? n2 : qa.serverUnreachable(n2 instanceof Error ? n2.message : "server was not reachable");
          }
        });
      }
    }
    function Ic(e2) {
      const t2 = { type: "offer", sdp: e2.sdp };
      switch (e2.type) {
        case "answer":
        case "offer":
        case "pranswer":
        case "rollback":
          t2.type = e2.type;
      }
      return t2;
    }
    function _c(e2, t2) {
      return new Xn({ sdp: e2.sdp, type: e2.type, id: t2 });
    }

    class Mc {
      constructor(e2) {
        this._map = new Map, this._lastCleanup = 0, this.ttl = e2;
      }
      set(e2, t2) {
        const n2 = Date.now();
        n2 - this._lastCleanup > this.ttl / 2 && this.cleanup();
        const i2 = n2 + this.ttl;
        return this._map.set(e2, { value: t2, expiresAt: i2 }), this;
      }
      get(e2) {
        const t2 = this._map.get(e2);
        if (t2) {
          if (!(t2.expiresAt < Date.now()))
            return t2.value;
          this._map.delete(e2);
        }
      }
      has(e2) {
        const t2 = this._map.get(e2);
        return !!t2 && (!(t2.expiresAt < Date.now()) || (this._map.delete(e2), false));
      }
      delete(e2) {
        return this._map.delete(e2);
      }
      clear() {
        this._map.clear();
      }
      cleanup() {
        const e2 = Date.now();
        for (const n2 of this._map.entries()) {
          var t2 = L(n2, 2);
          const i2 = t2[0];
          t2[1].expiresAt < e2 && this._map.delete(i2);
        }
        this._lastCleanup = e2;
      }
      get size() {
        return this.cleanup(), this._map.size;
      }
      forEach(e2) {
        this.cleanup();
        for (const n2 of this._map.entries()) {
          var t2 = L(n2, 2);
          const i2 = t2[0], r2 = t2[1];
          r2.expiresAt >= Date.now() && e2(r2.value, i2, this.asValueMap());
        }
      }
      map(e2) {
        this.cleanup();
        const t2 = [], n2 = this.asValueMap();
        for (const r2 of n2.entries()) {
          var i2 = L(r2, 2);
          const a2 = i2[0], s2 = i2[1];
          t2.push(e2(s2, a2, n2));
        }
        return t2;
      }
      asValueMap() {
        const e2 = new Map;
        for (const n2 of this._map.entries()) {
          var t2 = L(n2, 2);
          const i2 = t2[0], r2 = t2[1];
          r2.expiresAt >= Date.now() && e2.set(i2, r2.value);
        }
        return e2;
      }
    }
    var Dc, Oc, Ac, Nc, Lc, xc = {}, Uc = {}, Fc = { exports: {} };
    function Bc() {
      if (Dc)
        return Fc.exports;
      Dc = 1;
      var e2 = Fc.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format: function(e3) {
        return e3.encoding ? "rtpmap:%d %s/%s/%s" : e3.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
      } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format: function(e3) {
        return e3.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
      } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format: function(e3) {
        return e3.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
      } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/, names: ["value", "direction", "encrypt-uri", "uri", "config"], format: function(e3) {
        return "extmap:%d" + (e3.direction ? "/%s" : "%v") + (e3["encrypt-uri"] ? " %s" : "%v") + " %s" + (e3.config ? " %s" : "");
      } }, { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format: function(e3) {
        return e3.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
      } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" }, { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format: function(e3) {
        var t2 = "candidate:%s %d %s %d %s %d typ %s";
        return t2 += e3.raddr != null ? " raddr %s rport %d" : "%v%v", t2 += e3.tcptype != null ? " tcptype %s" : "%v", e3.generation != null && (t2 += " generation %d"), t2 += e3["network-id"] != null ? " network-id %d" : "%v", t2 += e3["network-cost"] != null ? " network-cost %d" : "%v";
      } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format: function(e3) {
        var t2 = "ssrc:%d";
        return e3.attribute != null && (t2 += " %s", e3.value != null && (t2 += ":%s")), t2;
      } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format: function(e3) {
        return e3.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
      } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format: function(e3) {
        return e3.params ? "rid:%s %s %s" : "rid:%s %s";
      } }, { push: "imageattrs", reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format: function(e3) {
        return "imageattr:%s %s %s" + (e3.dir2 ? " %s %s" : "");
      } }, { name: "simulcast", reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format: function(e3) {
        return "simulcast:%s %s" + (e3.dir2 ? " %s %s" : "");
      } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { name: "bundleOnly", reg: /^(bundle-only)/ }, { name: "label", reg: /^label:(.+)/, format: "label:%s" }, { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" }, { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" }, { push: "tsRefClocks", reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/, names: ["clksrc", "clksrcExt"], format: function(e3) {
        return "ts-refclk:%s" + (e3.clksrcExt != null ? "=%s" : "");
      } }, { name: "mediaClk", reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/, names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"], format: function(e3) {
        var t2 = "mediaclk:";
        return t2 += e3.id != null ? "id=%s %s" : "%v%s", t2 += e3.mediaClockValue != null ? "=%s" : "", t2 += e3.rateNumerator != null ? " rate=%s" : "", t2 += e3.rateDenominator != null ? "/%s" : "";
      } }, { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" }, { name: "content", reg: /^content:(.+)/, format: "content:%s" }, { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" }, { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" }, { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" }, { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" }, { push: "invalid", names: ["value"] }] };
      return Object.keys(e2).forEach(function(t2) {
        e2[t2].forEach(function(e3) {
          e3.reg || (e3.reg = /(.*)/), e3.format || (e3.format = "%s");
        });
      }), Fc.exports;
    }
    function jc() {
      return Oc || (Oc = 1, function(e2) {
        var t2 = function(e3) {
          return String(Number(e3)) === e3 ? Number(e3) : e3;
        }, n2 = function(e3, n3, i3) {
          var r3 = e3.name && e3.names;
          e3.push && !n3[e3.push] ? n3[e3.push] = [] : r3 && !n3[e3.name] && (n3[e3.name] = {});
          var a3 = e3.push ? {} : r3 ? n3[e3.name] : n3;
          (function(e4, n4, i4, r4) {
            if (r4 && !i4)
              n4[r4] = t2(e4[1]);
            else
              for (var a4 = 0;a4 < i4.length; a4 += 1)
                e4[a4 + 1] != null && (n4[i4[a4]] = t2(e4[a4 + 1]));
          })(i3.match(e3.reg), a3, e3.names, e3.name), e3.push && n3[e3.push].push(a3);
        }, i2 = Bc(), r2 = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        e2.parse = function(e3) {
          var t3 = {}, a3 = [], s2 = t3;
          return e3.split(/(\r\n|\r|\n)/).filter(r2).forEach(function(e4) {
            var t4 = e4[0], r3 = e4.slice(2);
            t4 === "m" && (a3.push({ rtp: [], fmtp: [] }), s2 = a3[a3.length - 1]);
            for (var o2 = 0;o2 < (i2[t4] || []).length; o2 += 1) {
              var c2 = i2[t4][o2];
              if (c2.reg.test(r3))
                return n2(c2, s2, r3);
            }
          }), t3.media = a3, t3;
        };
        var a2 = function(e3, n3) {
          var i3 = n3.split(/=(.+)/, 2);
          return i3.length === 2 ? e3[i3[0]] = t2(i3[1]) : i3.length === 1 && n3.length > 1 && (e3[i3[0]] = undefined), e3;
        };
        e2.parseParams = function(e3) {
          return e3.split(/;\s?/).reduce(a2, {});
        }, e2.parseFmtpConfig = e2.parseParams, e2.parsePayloads = function(e3) {
          return e3.toString().split(" ").map(Number);
        }, e2.parseRemoteCandidates = function(e3) {
          for (var n3 = [], i3 = e3.split(" ").map(t2), r3 = 0;r3 < i3.length; r3 += 3)
            n3.push({ component: i3[r3], ip: i3[r3 + 1], port: i3[r3 + 2] });
          return n3;
        }, e2.parseImageAttributes = function(e3) {
          return e3.split(" ").map(function(e4) {
            return e4.substring(1, e4.length - 1).split(",").reduce(a2, {});
          });
        }, e2.parseSimulcastStreamList = function(e3) {
          return e3.split(";").map(function(e4) {
            return e4.split(",").map(function(e5) {
              var n3, i3 = false;
              return e5[0] !== "~" ? n3 = t2(e5) : (n3 = t2(e5.substring(1, e5.length)), i3 = true), { scid: n3, paused: i3 };
            });
          });
        };
      }(Uc)), Uc;
    }
    function qc() {
      if (Nc)
        return Ac;
      Nc = 1;
      var e2 = Bc(), t2 = /%[sdv%]/g, n2 = function(e3) {
        var n3 = 1, i3 = arguments, r3 = i3.length;
        return e3.replace(t2, function(e4) {
          if (n3 >= r3)
            return e4;
          var t3 = i3[n3];
          switch (n3 += 1, e4) {
            case "%%":
              return "%";
            case "%s":
              return String(t3);
            case "%d":
              return Number(t3);
            case "%v":
              return "";
          }
        });
      }, i2 = function(e3, t3, i3) {
        var r3 = [e3 + "=" + (t3.format instanceof Function ? t3.format(t3.push ? i3 : i3[t3.name]) : t3.format)];
        if (t3.names)
          for (var a3 = 0;a3 < t3.names.length; a3 += 1) {
            var s2 = t3.names[a3];
            t3.name ? r3.push(i3[t3.name][s2]) : r3.push(i3[t3.names[a3]]);
          }
        else
          r3.push(i3[t3.name]);
        return n2.apply(null, r3);
      }, r2 = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"], a2 = ["i", "c", "b", "a"];
      return Ac = function(t3, n3) {
        n3 = n3 || {}, t3.version == null && (t3.version = 0), t3.name == null && (t3.name = " "), t3.media.forEach(function(e3) {
          e3.payloads == null && (e3.payloads = "");
        });
        var s2 = n3.outerOrder || r2, o2 = n3.innerOrder || a2, c2 = [];
        return s2.forEach(function(n4) {
          e2[n4].forEach(function(e3) {
            e3.name in t3 && t3[e3.name] != null ? c2.push(i2(n4, e3, t3)) : (e3.push in t3) && t3[e3.push] != null && t3[e3.push].forEach(function(t4) {
              c2.push(i2(n4, e3, t4));
            });
          });
        }), t3.media.forEach(function(t4) {
          c2.push(i2("m", e2.m[0], t4)), o2.forEach(function(n4) {
            e2[n4].forEach(function(e3) {
              e3.name in t4 && t4[e3.name] != null ? c2.push(i2(n4, e3, t4)) : (e3.push in t4) && t4[e3.push] != null && t4[e3.push].forEach(function(t5) {
                c2.push(i2(n4, e3, t5));
              });
            });
          });
        }), c2.join(`\r
`) + `\r
`;
      }, Ac;
    }
    var Vc = function() {
      if (Lc)
        return xc;
      Lc = 1;
      var e2 = jc(), t2 = qc(), n2 = Bc();
      return xc.grammar = n2, xc.write = t2, xc.parse = e2.parse, xc.parseParams = e2.parseParams, xc.parseFmtpConfig = e2.parseFmtpConfig, xc.parsePayloads = e2.parsePayloads, xc.parseRemoteCandidates = e2.parseRemoteCandidates, xc.parseImageAttributes = e2.parseImageAttributes, xc.parseSimulcastStreamList = e2.parseSimulcastStreamList, xc;
    }();
    const Wc = "negotiationStarted", Hc = "negotiationComplete", Kc = "offerAnswered", zc = "rtpVideoPayloadTypes";

    class Gc extends gr.EventEmitter {
      get pc() {
        return this._pc || (this._pc = this.createPC()), this._pc;
      }
      constructor(t2) {
        let i2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a2;
        super(), this.log = er, this.iceLog = er, this.ddExtID = 0, this.latestOfferId = 0, this.latestAcknowledgedOfferId = 0, this.pendingCandidates = [], this.restartingIce = false, this.renegotiate = false, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = Yo((e2) => cr(this, undefined, undefined, function* () {
          this.emit(Wc);
          try {
            yield this.createAndSendOffer();
          } catch (n2) {
            if (!e2)
              throw n2;
            e2(n2);
          }
        }), 20), this.close = () => {
          this._pc && (this.log.debug("closing peer connection"), this.pendingInitialOffer = undefined, this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null);
        }, this.loggerOptions = i2, this.log = nr((a2 = i2.loggerName) !== null && a2 !== undefined ? a2 : e.LoggerNames.PCTransport, () => this.logContext), this.iceLog = nr(e.LoggerNames.ICE, () => this.logContext), this.config = t2, this._pc = this.createPC(), this.offerLock = new r;
      }
      createPC() {
        const e2 = new RTCPeerConnection(this.config);
        return e2.onicecandidate = (e3) => {
          var t2;
          e3.candidate && (this.iceLog.debug("local ICE candidate gathered", { candidate: e3.candidate.candidate }), (t2 = this.onIceCandidate) === null || t2 === undefined || t2.call(this, e3.candidate));
        }, e2.onicecandidateerror = (e3) => {
          var t2;
          this.iceLog.debug("ICE candidate error", { event: e3 }), (t2 = this.onIceCandidateError) === null || t2 === undefined || t2.call(this, e3);
        }, e2.oniceconnectionstatechange = () => {
          var t2;
          this.iceLog.debug("ICE connection state: ".concat(e2.iceConnectionState)), (t2 = this.onIceConnectionStateChange) === null || t2 === undefined || t2.call(this, e2.iceConnectionState);
        }, e2.onsignalingstatechange = () => {
          var t2;
          this.log.debug("signaling state: ".concat(e2.signalingState)), (t2 = this.onSignalingStatechange) === null || t2 === undefined || t2.call(this, e2.signalingState);
        }, e2.onconnectionstatechange = () => {
          var t2;
          this.log.debug("connection state: ".concat(e2.connectionState)), (t2 = this.onConnectionStateChange) === null || t2 === undefined || t2.call(this, e2.connectionState);
        }, e2.ondatachannel = (e3) => {
          var t2;
          this.log.debug("data channel opened by peer", { label: e3.channel.label, id: e3.channel.id }), (t2 = this.onDataChannel) === null || t2 === undefined || t2.call(this, e3);
        }, e2.ontrack = (e3) => {
          var t2;
          (t2 = this.onTrack) === null || t2 === undefined || t2.call(this, e3);
        }, e2;
      }
      get logContext() {
        var e2, t2;
        return Object.assign({}, (t2 = (e2 = this.loggerOptions).loggerContextCb) === null || t2 === undefined ? undefined : t2.call(e2));
      }
      get isICEConnected() {
        return this._pc !== null && (this.pc.iceConnectionState === "connected" || this.pc.iceConnectionState === "completed");
      }
      addIceCandidate(e2) {
        return cr(this, undefined, undefined, function* () {
          if (this.pc.remoteDescription && !this.restartingIce)
            return this.pc.addIceCandidate(e2);
          this.iceLog.debug("queuing remote ICE candidate until remote description applied", { pendingCount: this.pendingCandidates.length + 1 }), this.pendingCandidates.push(e2);
        });
      }
      setRemoteDescription(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2;
          if (e2.type === "answer" && this.latestOfferId > 0 && t2 > 0 && t2 !== this.latestOfferId)
            return this.log.warn("ignoring answer for old offer", { offerId: t2, latestOfferId: this.latestOfferId }), false;
          let r2;
          if (e2.type === "offer") {
            let t3 = function(e3) {
              var t4;
              const n4 = [], i4 = [], r3 = Vc.parse((t4 = e3.sdp) !== null && t4 !== undefined ? t4 : "");
              let a2 = 0;
              return r3.media.forEach((e4) => {
                var t5;
                const r4 = $c(e4.mid);
                e4.type === "audio" && (e4.rtp.some((e5) => e5.codec.toLowerCase() === "opus" && (a2 = e5.payload, true)), ((t5 = e4.rtcpFb) === null || t5 === undefined ? undefined : t5.some((e5) => e5.payload === a2 && e5.type === "nack")) && i4.push(r4), e4.fmtp.some((e5) => e5.payload === a2 && (Qc(e5.config, "sprop-stereo=1") && n4.push(r4), true)));
              }), { stereoMids: n4, nackMids: i4 };
            }(e2), n3 = t3.stereoMids, i3 = t3.nackMids;
            this.remoteStereoMids = n3, this.remoteNackMids = i3;
          } else if (e2.type === "answer") {
            if (this.pendingInitialOffer && this._pc) {
              const e3 = this.pendingInitialOffer;
              this.pendingInitialOffer = undefined;
              const t4 = Vc.parse((n2 = e3.sdp) !== null && n2 !== undefined ? n2 : "");
              t4.media.forEach((e4) => {
                Zc(e4);
              }), this.log.debug("setting pending initial offer before processing answer"), yield this.setMungedSDP(e3, Vc.write(t4));
            }
            const t3 = Vc.parse((i2 = e2.sdp) !== null && i2 !== undefined ? i2 : "");
            t3.media.forEach((e3) => {
              const t4 = $c(e3.mid);
              e3.type === "audio" && this.trackBitrates.some((n3) => {
                if (!n3.transceiver || t4 != n3.transceiver.mid)
                  return false;
                let i3 = 0;
                if (e3.rtp.some((e4) => e4.codec.toUpperCase() === n3.codec.toUpperCase() && (i3 = e4.payload, true)), i3 === 0)
                  return true;
                let r3 = false;
                for (const t5 of e3.fmtp)
                  if (t5.payload === i3) {
                    t5.config = t5.config.split(";").filter((e4) => !e4.includes("maxaveragebitrate")).join(";"), n3.maxbr > 0 && (t5.config += ";maxaveragebitrate=".concat(1000 * n3.maxbr)), r3 = true;
                    break;
                  }
                return r3 || n3.maxbr > 0 && e3.fmtp.push({ payload: i3, config: "maxaveragebitrate=".concat(1000 * n3.maxbr) }), true;
              });
            });
            const a2 = this.getPlaceholderMids();
            a2.size > 0 && Xc(t3.media, (e3) => a2.has($c(e3.mid))), r2 = Vc.write(t3);
          }
          if (yield this.setMungedSDP(e2, r2, true), this.pendingCandidates.length > 0 && this.iceLog.debug("flushing queued ICE candidates", { count: this.pendingCandidates.length }), this.pendingCandidates.forEach((e3) => {
            this.pc.addIceCandidate(e3);
          }), this.pendingCandidates = [], this.restartingIce = false, e2.type === "answer" && (this.latestAcknowledgedOfferId = t2, this.emit(Kc, t2)), this.renegotiate)
            this.renegotiate = false, yield this.createAndSendOffer();
          else if (e2.type === "answer" && (this.emit(Hc), e2.sdp)) {
            Vc.parse(e2.sdp).media.forEach((e3) => {
              e3.type === "video" && this.emit(zc, e3.rtp);
            });
          }
          return true;
        });
      }
      createInitialOffer() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          const t2 = yield this.offerLock.lock();
          try {
            if (this.pc.signalingState !== "stable")
              return void this.log.warn("signaling state is not stable, cannot create initial offer");
            const t3 = this.latestOfferId + 1;
            this.latestOfferId = t3;
            const n2 = yield this.pc.createOffer();
            this.pendingInitialOffer = { sdp: n2.sdp, type: n2.type };
            const i2 = Vc.parse((e2 = n2.sdp) !== null && e2 !== undefined ? e2 : "");
            return i2.media.forEach((e3) => {
              Zc(e3);
            }), n2.sdp = Vc.write(i2), { offer: n2, offerId: t3 };
          } finally {
            t2();
          }
        });
      }
      createAndSendOffer(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2;
          const n2 = yield this.offerLock.lock();
          try {
            if (this.onOffer === undefined)
              return;
            if ((e2 == null ? undefined : e2.iceRestart) && (this.iceLog.debug("restarting ICE"), this.restartingIce = true), this._pc && (this._pc.signalingState === "have-local-offer" || this.pendingInitialOffer)) {
              const t3 = this._pc.remoteDescription;
              if (!(e2 == null ? undefined : e2.iceRestart) || !t3) {
                if (e2 == null ? undefined : e2.iceRestart)
                  throw new za("ICE restart requested without a remote description, peer connection must be recreated");
                return this.renegotiate = true, void this.log.debug("requesting renegotiation");
              }
              yield this._pc.setRemoteDescription(t3);
            } else if (!this._pc || this._pc.signalingState === "closed")
              return void this.log.warn("could not createOffer with closed peer connection");
            this.log.debug("starting to negotiate");
            const n3 = this.latestOfferId + 1;
            this.latestOfferId = n3;
            const i2 = yield this.pc.createOffer(e2);
            this.log.debug("original offer", { sdp: i2.sdp });
            const r2 = Vc.parse((t2 = i2.sdp) !== null && t2 !== undefined ? t2 : "");
            r2.media.forEach((e3) => {
              Zc(e3), e3.type === "audio" ? Yc(e3, ["all"], []) : e3.type === "video" && this.trackBitrates.some((t3) => {
                if (!t3.cid)
                  return false;
                const n4 = function(e4, t4, n5, i3) {
                  let r3 = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
                  var a3, s2, o2;
                  if (!((a3 = e4.msid) === null || a3 === undefined ? undefined : a3.includes(t4)))
                    return;
                  const c2 = (o2 = (s2 = e4.rtp.find((e5) => e5.codec.toUpperCase() === n5.toUpperCase())) === null || s2 === undefined ? undefined : s2.payload) !== null && o2 !== undefined ? o2 : 0;
                  if (c2 === 0)
                    return 0;
                  const d2 = Math.round(0.9 * i3), l2 = r3 ? d2 : Math.min(d2, 1000), u2 = e4.fmtp.find((e5) => e5.payload === c2);
                  return u2 ? u2.config.includes("x-google-start-bitrate") || (u2.config += ";x-google-start-bitrate=".concat(l2)) : e4.fmtp.push({ payload: c2, config: "x-google-start-bitrate=".concat(l2) }), c2;
                }(e3, t3.cid, t3.codec, t3.maxbr, t3.isScreenShare);
                return n4 !== undefined && (n4 > 0 && Ls(t3.codec) && !qs() && (this.ddExtID = function(e4, t4, n5) {
                  var i3, r3;
                  const a3 = function(e5, t5) {
                    const n6 = function(e6, t6) {
                      var n7;
                      for (const i4 of e6.media) {
                        const e7 = (n7 = i4.ext) === null || n7 === undefined ? undefined : n7.find((e8) => e8.uri === t6);
                        if (e7)
                          return e7.value;
                      }
                      return;
                    }(e5, Is);
                    if (n6 !== undefined)
                      return Jc(e5, n6, Is) ? undefined : n6;
                    if (t5 !== 0 && !Jc(e5, t5, Is))
                      return t5;
                    return function(e6) {
                      let t6 = 0;
                      return e6.media.forEach((e7) => {
                        var n7;
                        (n7 = e7.ext) === null || n7 === undefined || n7.forEach((e8) => {
                          e8.value > t6 && (t6 = e8.value);
                        });
                      }), t6 + 1 === 15 ? 16 : t6 + 1;
                    }(e5);
                  }(t4, n5);
                  if (a3 === undefined)
                    return n5;
                  ((i3 = e4.ext) === null || i3 === undefined ? undefined : i3.some((e5) => e5.uri === Is)) || ((r3 = e4.ext) !== null && r3 !== undefined || (e4.ext = []), e4.ext.push({ value: a3, uri: Is }));
                  return a3;
                }(e3, r2, this.ddExtID)), true);
              });
            });
            const a2 = this.getPlaceholderMids();
            if (a2.size > 0 && Xc(r2.media, (e3) => a2.has($c(e3.mid))), this.latestOfferId > n3)
              return void this.log.warn("latestOfferId mismatch", { latestOfferId: this.latestOfferId, offerId: n3 });
            yield this.setMungedSDP(i2, Vc.write(r2)), this.onOffer(i2, this.latestOfferId);
          } finally {
            n2();
          }
        });
      }
      createAndSetAnswer() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          const t2 = yield this.pc.createAnswer(), n2 = Vc.parse((e2 = t2.sdp) !== null && e2 !== undefined ? e2 : "");
          return n2.media.forEach((e3) => {
            Zc(e3), e3.type === "audio" && Yc(e3, this.remoteStereoMids, this.remoteNackMids);
          }), yield this.setMungedSDP(t2, Vc.write(n2)), t2;
        });
      }
      getPlaceholderMids() {
        var e2, t2;
        return function(e3) {
          const t3 = new Set;
          for (const n2 of e3)
            n2.mid && !n2.sender.track && t3.add(n2.mid);
          return t3;
        }((t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.getTransceivers()) !== null && t2 !== undefined ? t2 : []);
      }
      createDataChannel(e2, t2) {
        return this.pc.createDataChannel(e2, t2);
      }
      addTransceiver(e2, t2) {
        return this.pc.addTransceiver(e2, t2);
      }
      addTransceiverOfKind(e2, t2) {
        return this.pc.addTransceiver(e2, t2);
      }
      addTrack(e2) {
        if (!this._pc)
          throw new Ka("PC closed, cannot add track");
        return this._pc.addTrack(e2);
      }
      setTrackCodecBitrate(e2) {
        this.trackBitrates.push(e2);
      }
      setConfiguration(e2) {
        var t2;
        if (!this._pc)
          throw new Ka("PC closed, cannot configure");
        return (t2 = this._pc) === null || t2 === undefined ? undefined : t2.setConfiguration(e2);
      }
      canRemoveTrack() {
        var e2;
        return !!((e2 = this._pc) === null || e2 === undefined ? undefined : e2.removeTrack);
      }
      removeTrack(e2) {
        var t2;
        return (t2 = this._pc) === null || t2 === undefined ? undefined : t2.removeTrack(e2);
      }
      getConnectionState() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.connectionState) !== null && t2 !== undefined ? t2 : "closed";
      }
      getICEConnectionState() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.iceConnectionState) !== null && t2 !== undefined ? t2 : "closed";
      }
      getSignallingState() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.signalingState) !== null && t2 !== undefined ? t2 : "closed";
      }
      getTransceivers() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.getTransceivers()) !== null && t2 !== undefined ? t2 : [];
      }
      getSenders() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.getSenders()) !== null && t2 !== undefined ? t2 : [];
      }
      getLocalDescription() {
        var e2;
        return (e2 = this._pc) === null || e2 === undefined ? undefined : e2.localDescription;
      }
      getRemoteDescription() {
        var e2;
        return (e2 = this.pc) === null || e2 === undefined ? undefined : e2.remoteDescription;
      }
      getStats() {
        return this.pc.getStats();
      }
      getMaxMessageSize() {
        var e2, t2;
        return (t2 = (e2 = this._pc) === null || e2 === undefined ? undefined : e2.sctp) === null || t2 === undefined ? undefined : t2.maxMessageSize;
      }
      getConnectedAddress() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!this._pc)
            return;
          let t2 = "";
          const n2 = new Map, i2 = new Map;
          if ((yield this._pc.getStats()).forEach((e3) => {
            switch (e3.type) {
              case "transport":
                t2 = e3.selectedCandidatePairId;
                break;
              case "candidate-pair":
                t2 === "" && e3.selected && (t2 = e3.id), n2.set(e3.id, e3);
                break;
              case "remote-candidate":
                i2.set(e3.id, "".concat(e3.address, ":").concat(e3.port));
            }
          }), t2 === "")
            return;
          const r2 = (e2 = n2.get(t2)) === null || e2 === undefined ? undefined : e2.remoteCandidateId;
          return r2 !== undefined ? i2.get(r2) : undefined;
        });
      }
      setMungedSDP(e2, t2, i2) {
        return cr(this, undefined, undefined, function* () {
          var r2, a2;
          const s2 = e2.sdp;
          if (t2) {
            e2.sdp = t2;
            try {
              return this.log.debug("setting munged ".concat(i2 ? "remote" : "local", " description")), void (i2 ? yield this.pc.setRemoteDescription(e2) : yield this.pc.setLocalDescription(e2));
            } catch (n2) {
              this.log.warn("not able to set ".concat(e2.type, ", falling back to unmodified sdp"), { error: n2, mungedSdp: t2, originalSdp: s2 }), e2.sdp = s2;
            }
          }
          try {
            i2 ? yield (r2 = this._pc) === null || r2 === undefined ? undefined : r2.setRemoteDescription(e2) : yield (a2 = this._pc) === null || a2 === undefined ? undefined : a2.setLocalDescription(e2);
          } catch (n2) {
            let a3 = "unknown error";
            n2 instanceof Error ? a3 = n2.message : typeof n2 == "string" && (a3 = n2);
            const o2 = { error: a3, sdp: e2.sdp };
            throw t2 && t2 !== s2 && (o2.mungedSdp = t2), !i2 && this.pc.remoteDescription && (o2.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e2.type), { fields: o2 }), new za(a3);
          }
        });
      }
    }
    function Jc(e2, t2, n2) {
      return e2.media.some((e3) => {
        var i2;
        return (i2 = e3.ext) === null || i2 === undefined ? undefined : i2.some((e4) => e4.value === t2 && e4.uri !== n2);
      });
    }
    function Qc(e2, t2) {
      return e2.split(";").some((e3) => e3.trim() === t2);
    }
    function Yc(e2, t2, n2) {
      const i2 = $c(e2.mid);
      let r2 = 0;
      e2.rtp.some((e3) => e3.codec.toLowerCase() === "opus" && (r2 = e3.payload, true)), r2 > 0 && (e2.rtcpFb || (e2.rtcpFb = []), n2.includes(i2) && !e2.rtcpFb.some((e3) => e3.payload === r2 && e3.type === "nack") && e2.rtcpFb.push({ payload: r2, type: "nack" }), (t2.includes(i2) || t2.length === 1 && t2[0] === "all") && e2.fmtp.some((e3) => e3.payload === r2 && (Qc(e3.config, "stereo=1") || (e3.config += ";stereo=1"), true)));
    }
    function Xc(e2, t2) {
      var n2, i2;
      const r2 = new Map, a2 = new Set;
      for (const s2 of e2) {
        const e3 = t2(s2);
        for (const t3 of (n2 = s2.fmtp) !== null && n2 !== undefined ? n2 : [])
          e3 ? r2.has(t3.payload) || r2.set(t3.payload, t3.config) : (r2.set(t3.payload, t3.config), a2.add(t3.payload));
      }
      if (r2.size !== 0) {
        for (const s2 of e2)
          if (t2(s2))
            for (const e3 of (i2 = s2.fmtp) !== null && i2 !== undefined ? i2 : []) {
              const t3 = r2.get(e3.payload);
              t3 !== undefined && e3.config !== t3 && (e3.config = t3);
            }
      }
    }
    function Zc(e2) {
      if (e2.connection) {
        const t2 = e2.connection.ip.indexOf(":") >= 0;
        (e2.connection.version === 4 && t2 || e2.connection.version === 6 && !t2) && (e2.connection.ip = "0.0.0.0", e2.connection.version = 4);
      }
    }
    function $c(e2) {
      return typeof e2 == "number" ? e2.toFixed(0) : e2;
    }
    const ed = "vp8", td = { audioPreset: e.AudioPresets.music, dtx: true, red: true, forceStereo: false, simulcast: true, screenShareEncoding: ds.h1080fps15.encoding, stopMicTrackOnMute: false, videoCodec: ed, backupCodec: true, preConnectBuffer: false }, nd = { deviceId: { ideal: "default" }, autoGainControl: true, echoCancellation: true, noiseSuppression: true, voiceIsolation: true }, id = { deviceId: { ideal: "default" }, resolution: os.h720.resolution }, rd = { adaptiveStream: false, dynacast: false, stopLocalTrackOnUnpublish: true, reconnectPolicy: new sr, disconnectOnPageLeave: true, webAudioMix: false, singlePeerConnection: true }, ad = { autoSubscribe: true, maxRetries: 1, peerConnectionTimeout: 15000, websocketTimeout: 15000 };
    var sd, od;
    (function(e2) {
      e2[e2.NEW = 0] = "NEW", e2[e2.CONNECTING = 1] = "CONNECTING", e2[e2.CONNECTED = 2] = "CONNECTED", e2[e2.FAILED = 3] = "FAILED", e2[e2.CLOSING = 4] = "CLOSING", e2[e2.CLOSED = 5] = "CLOSED";
    })(sd || (sd = {}));

    class cd {
      get needsPublisher() {
        return this.isPublisherConnectionRequired;
      }
      get needsSubscriber() {
        return this.isSubscriberConnectionRequired;
      }
      get currentState() {
        return this.state;
      }
      get mode() {
        return this._mode;
      }
      constructor(t2, n2, i2) {
        var a2;
        this.peerConnectionTimeout = ad.peerConnectionTimeout, this.log = er, this.iceLog = er, this.updateState = () => {
          var e2, t3;
          const n3 = this.state, i3 = this.requiredTransports.map((e3) => e3.getConnectionState());
          i3.every((e3) => e3 === "connected") ? this.state = sd.CONNECTED : i3.some((e3) => e3 === "failed") ? this.state = sd.FAILED : i3.some((e3) => e3 === "connecting") ? this.state = sd.CONNECTING : i3.every((e3) => e3 === "closed") ? this.state = sd.CLOSED : i3.some((e3) => e3 === "closed") ? this.state = sd.CLOSING : i3.every((e3) => e3 === "new") && (this.state = sd.NEW), n3 !== this.state && (this.log.debug("pc state change: from ".concat(sd[n3], " to ").concat(sd[this.state])), (e2 = this.onStateChange) === null || e2 === undefined || e2.call(this, this.state, this.publisher.getConnectionState(), (t3 = this.subscriber) === null || t3 === undefined ? undefined : t3.getConnectionState()));
        }, this.loggerOptions = n2, this.log = nr((a2 = n2.loggerName) !== null && a2 !== undefined ? a2 : e.LoggerNames.PCManager, () => this.logContext), this.iceLog = nr(e.LoggerNames.ICE, () => this.logContext), this.isPublisherConnectionRequired = t2 !== "subscriber-primary", this.isSubscriberConnectionRequired = t2 === "subscriber-primary", this.publisher = new Gc(i2, n2), this._mode = t2, t2 !== "publisher-only" && (this.subscriber = new Gc(i2, n2), this.subscriber.onConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.subscriber.onIceCandidate = (e2) => {
          var t3;
          (t3 = this.onIceCandidate) === null || t3 === undefined || t3.call(this, e2, On.SUBSCRIBER);
        }, this.subscriber.onDataChannel = (e2) => {
          var t3;
          (t3 = this.onDataChannel) === null || t3 === undefined || t3.call(this, e2);
        }, this.subscriber.onTrack = (e2) => {
          var t3;
          (t3 = this.onTrack) === null || t3 === undefined || t3.call(this, e2);
        }), this.publisher.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = (e2) => {
          var t3;
          (t3 = this.onIceCandidate) === null || t3 === undefined || t3.call(this, e2, On.PUBLISHER);
        }, this.publisher.onTrack = (e2) => {
          var t3;
          (t3 = this.onTrack) === null || t3 === undefined || t3.call(this, e2);
        }, this.publisher.onOffer = (e2, t3) => {
          var n3;
          (n3 = this.onPublisherOffer) === null || n3 === undefined || n3.call(this, e2, t3);
        }, this.state = sd.NEW, this.connectionLock = new r, this.remoteOfferLock = new r;
      }
      get logContext() {
        var e2, t2;
        return Object.assign({}, (t2 = (e2 = this.loggerOptions).loggerContextCb) === null || t2 === undefined ? undefined : t2.call(e2));
      }
      requirePublisher() {
        let e2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
        this.isPublisherConnectionRequired = e2, this.updateState();
      }
      createAndSendPublisherOffer(e2) {
        return this.publisher.createAndSendOffer(e2);
      }
      setPublisherAnswer(e2, t2) {
        return this.publisher.setRemoteDescription(e2, t2);
      }
      removeTrack(e2) {
        return this.publisher.removeTrack(e2);
      }
      close() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (this.publisher && this.publisher.getSignallingState() !== "closed") {
            const e3 = this.publisher;
            for (const t2 of e3.getSenders())
              try {
                e3.canRemoveTrack() && e3.removeTrack(t2);
              } catch (n2) {
                this.log.warn("could not removeTrack", { error: n2 });
              }
          }
          yield Promise.all([this.publisher.close(), (e2 = this.subscriber) === null || e2 === undefined ? undefined : e2.close()]), this.updateState();
        });
      }
      triggerIceRestart() {
        return cr(this, undefined, undefined, function* () {
          this.iceLog.warn("triggering ICE restart"), this.subscriber && (this.subscriber.restartingIce = true), this.needsPublisher && (yield this.createAndSendPublisherOffer({ iceRestart: true }));
        });
      }
      addIceCandidate(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2;
          this.iceLog.debug("adding remote ICE candidate", { target: t2, candidate: e2 }), t2 === On.PUBLISHER ? yield this.publisher.addIceCandidate(e2) : yield (n2 = this.subscriber) === null || n2 === undefined ? undefined : n2.addIceCandidate(e2);
        });
      }
      createSubscriberAnswerFromOffer(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2;
          this.log.debug("received server offer", { RTCSdpType: e2.type, sdp: e2.sdp, signalingState: (n2 = this.subscriber) === null || n2 === undefined ? undefined : n2.getSignallingState().toString() });
          const a2 = yield this.remoteOfferLock.lock();
          try {
            if (!(yield (i2 = this.subscriber) === null || i2 === undefined ? undefined : i2.setRemoteDescription(e2, t2)))
              return;
            return yield (r2 = this.subscriber) === null || r2 === undefined ? undefined : r2.createAndSetAnswer();
          } finally {
            a2();
          }
        });
      }
      updateConfiguration(e2, t2) {
        var n2;
        this.log.debug("updating rtc configuration", { iceRestart: t2 }), this.publisher.setConfiguration(e2), (n2 = this.subscriber) === null || n2 === undefined || n2.setConfiguration(e2), t2 && this.triggerIceRestart();
      }
      ensurePCTransportConnection(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2;
          const i2 = yield this.connectionLock.lock();
          try {
            this.isPublisherConnectionRequired && this.publisher.getConnectionState() !== "connected" && this.publisher.getConnectionState() !== "connecting" && (this.log.debug("negotiation required, start negotiating"), this.publisher.negotiate()), yield Promise.all((n2 = this.requiredTransports) === null || n2 === undefined ? undefined : n2.map((n3) => this.ensureTransportConnected(n3, e2, t2)));
          } finally {
            i2();
          }
        });
      }
      negotiate(e2) {
        return cr(this, undefined, undefined, function* () {
          return new Ca((t2, n2) => {
            const i2 = this.publisher.latestOfferId;
            if (this.publisher.latestAcknowledgedOfferId > i2)
              return this.log.debug("negotiation already handled in more recent acknowledged offer", this.logContext), void t2();
            let r2 = false;
            const a2 = () => {
              r2 || (r2 = true, clearTimeout(c2), this.publisher.off(Kc, s2), e2.signal.removeEventListener("abort", o2));
            }, s2 = (e3) => {
              e3 > i2 && (a2(), t2());
            }, o2 = () => {
              a2(), n2(new za("negotiation aborted"));
            }, c2 = setTimeout(() => {
              a2(), n2(new za("negotiation timed out"));
            }, this.peerConnectionTimeout);
            e2.signal.addEventListener("abort", o2), this.publisher.on(Kc, s2), this.publisher.negotiate((e3) => {
              a2(), e3 instanceof Error ? n2(e3) : n2(new Error(String(e3)));
            });
          });
        });
      }
      addPublisherTransceiver(e2, t2) {
        return this.publisher.addTransceiver(e2, t2);
      }
      addPublisherTransceiverOfKind(e2, t2) {
        return this.publisher.addTransceiverOfKind(e2, t2);
      }
      getMidForReceiver(e2) {
        const t2 = (this.subscriber ? this.subscriber.getTransceivers() : this.publisher.getTransceivers()).find((t3) => t3.receiver === e2);
        return t2 == null ? undefined : t2.mid;
      }
      getMaxPublisherMessageSize() {
        return this.publisher.getMaxMessageSize();
      }
      addPublisherTrack(e2) {
        return this.publisher.addTrack(e2);
      }
      createPublisherDataChannel(e2, t2) {
        return this.publisher.createDataChannel(e2, t2);
      }
      getConnectedAddress(e2) {
        return e2 === On.PUBLISHER || e2 === On.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress();
      }
      get requiredTransports() {
        const e2 = [];
        return this.isPublisherConnectionRequired && e2.push(this.publisher), this.isSubscriberConnectionRequired && this.subscriber && e2.push(this.subscriber), e2;
      }
      ensureTransportConnected(e2, t2) {
        return cr(this, arguments, undefined, function(e3, t3) {
          var n2 = this;
          let i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.peerConnectionTimeout;
          return function* () {
            if (e3.getConnectionState() !== "connected")
              return new Promise((e4, r2) => cr(n2, undefined, undefined, function* () {
                const n3 = () => {
                  this.log.warn("abort transport connection"), Za.clearTimeout(a2), r2(qa.cancelled("room connection has been cancelled"));
                };
                (t3 == null ? undefined : t3.signal.aborted) && n3(), t3 == null || t3.signal.addEventListener("abort", n3);
                const a2 = Za.setTimeout(() => {
                  t3 == null || t3.signal.removeEventListener("abort", n3), r2(qa.internal("could not establish pc connection"));
                }, i2);
                for (;this.state !== sd.CONNECTED; )
                  if (yield Ms(50), t3 == null ? undefined : t3.signal.aborted)
                    return void r2(qa.cancelled("room connection has been cancelled"));
                Za.clearTimeout(a2), t3 == null || t3.signal.removeEventListener("abort", n3), e4();
              }));
          }();
        });
      }
    }

    class dd {
      constructor(e2) {
        this.bufferStatusLow = true, this.headroomLock = new r, this.waiterAbortController = new AbortController, this.kind = e2.kind, this.lowWaterMark = e2.lowWaterMark, this.highWaterMark = e2.highWaterMark, this.isEngineClosed = e2.isEngineClosed, this.onBufferStatusChanged = e2.onBufferStatusChanged;
      }
      get channelHandle() {
        return this.handle;
      }
      attach(e2) {
        this.handle && this.handle !== e2 && this.invalidateWaiters("data channel replaced"), this.handle = e2;
      }
      detach() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data channel torn down";
        this.handle && this.invalidateWaiters(e2), this.handle = undefined;
      }
      getChannel() {
        return this.handle;
      }
      isBelowHighWaterMark(e2) {
        return e2.bufferedAmount <= this.highWaterMark;
      }
      isBelowLowWaterMark(e2) {
        return e2.bufferedAmount <= e2.bufferedAmountLowThreshold;
      }
      lockHeadroom() {
        return this.headroomLock.lock();
      }
      waitForHeadroomWithLock() {
        return cr(this, undefined, undefined, function* () {
          const e2 = yield this.lockHeadroom();
          try {
            yield this.waitForHeadroomWithoutLock();
          } finally {
            e2();
          }
        });
      }
      waitForHeadroomWithoutLock() {
        return cr(this, undefined, undefined, function* () {
          if (this.isEngineClosed())
            throw new Ka("engine closed");
          const e2 = this.getChannel();
          if (!e2)
            throw new Ka("DataChannel not found, kind: ".concat(this.kind));
          if (this.isBelowHighWaterMark(e2))
            return;
          const t2 = this.waiterAbortController.signal;
          yield new Ca((n2, i2) => {
            const r2 = () => {
              o2(), n2();
            }, a2 = () => {
              o2(), i2(new Ka("DataChannel ".concat(this.kind, " closed while draining the buffer")));
            }, s2 = () => {
              o2(), i2(new Ka("DataChannel ".concat(this.kind, " was replaced or torn down while waiting for headroom")));
            }, o2 = () => {
              e2.removeEventListener("bufferedamountlow", r2), e2.removeEventListener("close", a2), t2.removeEventListener("abort", s2);
            };
            t2.aborted ? s2() : (e2.addEventListener("bufferedamountlow", r2), e2.addEventListener("close", a2), t2.addEventListener("abort", s2));
          });
        });
      }
      invalidateWaiters(e2) {
        this.waiterAbortController.abort(e2), this.waiterAbortController = new AbortController;
      }
      refreshBufferStatus() {
        var e2;
        const t2 = this.getChannel();
        if (!t2)
          return;
        const n2 = this.isBelowLowWaterMark(t2);
        n2 !== this.bufferStatusLow && (this.bufferStatusLow = n2, (e2 = this.onBufferStatusChanged) === null || e2 === undefined || e2.call(this, n2));
      }
    }

    class ld extends dd {
      constructor(e2) {
        super(e2), this.statCurrentBytes = 0, this.statByterate = 0, this.dropCount = 0, this.bufferFullBehavior = e2.bufferFullBehavior, this.shouldSkipSends = e2.shouldSkipSends;
      }
      send(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.getChannel();
          if (t2) {
            switch (this.bufferFullBehavior) {
              case "wait":
                this.isBelowHighWaterMark(t2) || (yield this.waitForHeadroomWithLock());
                break;
              case "drop":
                if (!this.isBelowLowWaterMark(t2))
                  return this.dropCount += 1, void (this.dropCount % 100 == 0 && er.warn("dropping lossy data channel messages, total dropped: ".concat(this.dropCount)));
            }
            if (this.statCurrentBytes += e2.byteLength, !this.shouldSkipSends())
              try {
                t2.send(e2), this.refreshBufferStatus();
              } catch (n2) {
                if (!(n2 instanceof TypeError))
                  throw n2;
                er.error(n2);
              }
          }
        });
      }
      startThresholdTuning() {
        this.stopThresholdTuning(), this.statInterval = Za.setInterval(() => {
          this.statByterate = this.statCurrentBytes, this.statCurrentBytes = 0;
          const e2 = this.getChannel();
          if (e2) {
            const t2 = this.statByterate / 10;
            e2.bufferedAmountLowThreshold = Math.min(Math.max(t2, this.lowWaterMark), this.highWaterMark);
          }
        }, 1000);
      }
      stopThresholdTuning() {
        this.statByterate = 0, this.statCurrentBytes = 0, this.statInterval && (Za.clearInterval(this.statInterval), this.statInterval = undefined), this.dropCount = 0;
      }
    }

    class ud {
      constructor() {
        this.buffer = [], this._totalSize = 0, this._sentSize = 0;
      }
      push(e2) {
        this.buffer.push(e2), this._totalSize += e2.data.byteLength, e2.sent && (this._sentSize += e2.data.byteLength);
      }
      pop() {
        const e2 = this.buffer.shift();
        return e2 && (this._totalSize -= e2.data.byteLength, e2.sent && (this._sentSize -= e2.data.byteLength)), e2;
      }
      getAll() {
        return this.buffer.slice();
      }
      getUnsent() {
        return this.buffer.filter((e2) => !e2.sent);
      }
      markSent(e2) {
        e2.sent || (e2.sent = true, this._sentSize += e2.data.byteLength);
      }
      markAllUnsent() {
        for (const e2 of this.buffer)
          e2.sent = false;
        this._sentSize = 0;
      }
      popToSequence(e2) {
        for (;this.buffer.length > 0; ) {
          if (!(this.buffer[0].sequence <= e2))
            break;
          this.pop();
        }
      }
      alignBufferedAmount(e2) {
        for (;this.buffer.length > 0; ) {
          const t2 = this.buffer[0];
          if (!t2.sent)
            break;
          if (this._sentSize - t2.data.byteLength <= e2)
            break;
          this.pop();
        }
      }
      get length() {
        return this.buffer.length;
      }
    }

    class hd extends dd {
      constructor(e2) {
        super(e2), this.messageBuffer = new ud, this.sequence = 1, this.isDeferringSends = e2.isDeferringSends;
      }
      nextSequence() {
        const e2 = this.sequence;
        return this.sequence += 1, e2;
      }
      send(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          if (this.isDeferringSends())
            return void this.messageBuffer.push({ data: e2, sequence: t2, sent: false });
          const n2 = this.getChannel();
          if (n2) {
            try {
              yield this.waitForHeadroomWithLock();
            } catch (i2) {
              if (this.isEngineClosed())
                throw i2;
              return void this.messageBuffer.push({ data: e2, sequence: t2, sent: false });
            }
            this.isDeferringSends() ? this.messageBuffer.push({ data: e2, sequence: t2, sent: false }) : (this.messageBuffer.push({ data: e2, sequence: t2, sent: true }), n2.send(e2), this.refreshBufferStatus());
          }
        });
      }
      replay(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.getChannel();
          if (!t2)
            return;
          this.messageBuffer.popToSequence(e2);
          const n2 = yield this.lockHeadroom();
          try {
            this.messageBuffer.markAllUnsent();
            for (let e3 = this.messageBuffer.getUnsent();e3.length > 0; e3 = this.messageBuffer.getUnsent())
              for (const n3 of e3)
                yield this.waitForHeadroomWithoutLock(), t2.send(n3.data), this.messageBuffer.markSent(n3);
          } finally {
            n2();
          }
          this.refreshBufferStatus();
        });
      }
      refreshBufferStatus() {
        const e2 = this.channelHandle;
        e2 && this.messageBuffer.alignBufferedAmount(e2.bufferedAmount), super.refreshBufferStatus();
      }
      reset() {
        this.messageBuffer = new ud, this.sequence = 1;
      }
    }
    (function(e2) {
      e2[e2.RELIABLE = 0] = "RELIABLE", e2[e2.LOSSY = 1] = "LOSSY", e2[e2.DATA_TRACK_LOSSY = 2] = "DATA_TRACK_LOSSY";
    })(od || (od = {}));
    function pd(e2) {
      return e2 === od.RELIABLE ? 65536 : 8192;
    }
    function md(e2) {
      return e2 === od.RELIABLE ? 1048576 : 262144;
    }
    const gd = "_lossy", vd = "_reliable", fd = "_data_track";

    class kd {
      constructor(e2) {
        this.opts = e2;
        const t2 = (t3) => ({ kind: t3, lowWaterMark: pd(t3), highWaterMark: md(t3), isEngineClosed: e2.isEngineClosed, onBufferStatusChanged: (n2) => e2.onBufferStatusChanged(t3, n2) });
        this.reliable = new hd(Object.assign(Object.assign({}, t2(od.RELIABLE)), { isDeferringSends: e2.isReconnecting })), this.lossy = new ld(Object.assign(Object.assign({}, t2(od.LOSSY)), { bufferFullBehavior: "drop", shouldSkipSends: e2.isReconnecting })), this.dataTrack = new ld(Object.assign(Object.assign({}, t2(od.DATA_TRACK_LOSSY)), { bufferFullBehavior: "wait", shouldSkipSends: e2.isReconnecting }));
      }
      channelFor(e2) {
        switch (e2) {
          case od.RELIABLE:
            return this.reliable;
          case od.LOSSY:
            return this.lossy;
          case od.DATA_TRACK_LOSSY:
            return this.dataTrack;
        }
      }
      getHandle(e2) {
        if (!(arguments.length > 1 && arguments[1] !== undefined && arguments[1]))
          return this.channelFor(e2).channelHandle;
        switch (e2) {
          case od.RELIABLE:
            return this.reliableSub;
          case od.LOSSY:
            return this.lossySub;
          case od.DATA_TRACK_LOSSY:
            return this.dataTrackSub;
        }
      }
      get hasPublisherChannels() {
        return Boolean(this.reliable.channelHandle || this.lossy.channelHandle || this.dataTrack.channelHandle);
      }
      createPublisherChannels(e2) {
        for (const n2 of [this.lossy, this.reliable, this.dataTrack]) {
          const e3 = n2.channelHandle;
          e3 && (e3.onmessage = null, e3.onerror = null, e3.onclose = null);
        }
        const t2 = (e3, t3, n2) => {
          t3.onmessage = n2, t3.onerror = this.opts.onDataError, t3.onclose = () => this.opts.onChannelClose(e3.kind), t3.bufferedAmountLowThreshold = e3.lowWaterMark, t3.onbufferedamountlow = () => e3.refreshBufferStatus(), e3.attach(t3);
        };
        t2(this.lossy, e2.createPublisherDataChannel(gd, { ordered: false, maxRetransmits: 0 }), this.opts.onDataMessage), t2(this.reliable, e2.createPublisherDataChannel(vd, { ordered: true }), this.opts.onDataMessage), t2(this.dataTrack, e2.createPublisherDataChannel(fd, { ordered: false, maxRetransmits: 0 }), this.opts.onDataTrackMessage), this.lossy.startThresholdTuning();
      }
      adoptSubscriberChannel(e2) {
        let t2;
        if (e2.label === vd)
          this.reliableSub = e2, t2 = this.opts.onDataMessage;
        else if (e2.label === gd)
          this.lossySub = e2, t2 = this.opts.onDataMessage;
        else {
          if (e2.label !== fd)
            return false;
          this.dataTrackSub = e2, t2 = this.opts.onDataTrackMessage;
        }
        return e2.onmessage = t2, true;
      }
      teardown() {
        const e2 = (e3) => {
          e3 && (e3.onbufferedamountlow = null, e3.onclose = null, e3.onclosing = null, e3.onerror = null, e3.onmessage = null, e3.onopen = null, e3.close());
        };
        for (const t2 of [this.lossy, this.reliable, this.dataTrack]) {
          const n2 = t2.channelHandle;
          t2.detach("peer connections cleaned up"), e2(n2);
        }
        e2(this.lossySub), e2(this.reliableSub), e2(this.dataTrackSub), this.lossySub = undefined, this.reliableSub = undefined, this.dataTrackSub = undefined, this.reliable.reset();
      }
    }
    const yd = typeof MediaRecorder != "undefined";
    const bd = yd ? MediaRecorder : class {
      constructor() {
        throw new Error("MediaRecorder is not available in this environment");
      }
    };

    class Td extends bd {
      constructor(e2, t2) {
        if (!yd)
          throw new Error("MediaRecorder is not available in this environment");
        let n2, i2;
        super(new MediaStream([e2.mediaStreamTrack]), t2);
        const r2 = () => {
          this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", r2), this.removeEventListener("error", a2), i2 == null || i2.close(), i2 = undefined;
        }, a2 = (e3) => {
          i2 == null || i2.error(e3), this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", r2), this.removeEventListener("error", a2), i2 = undefined;
        };
        this.byteStream = new ReadableStream({ start: (e3) => {
          i2 = e3, n2 = (t3) => cr(this, undefined, undefined, function* () {
            let n3;
            if (t3.data.arrayBuffer) {
              const e4 = yield t3.data.arrayBuffer();
              n3 = new Uint8Array(e4);
            } else {
              if (!t3.data.byteArray)
                throw new Error("no data available!");
              n3 = t3.data.byteArray;
            }
            i2 !== undefined && e3.enqueue(n3);
          }), this.addEventListener("dataavailable", n2);
        }, cancel: () => {
          r2();
        } }), this.addEventListener("stop", r2), this.addEventListener("error", a2);
      }
    }

    class Sd extends ws {
      get sender() {
        return this._sender;
      }
      set sender(e2) {
        this._sender = e2;
      }
      get constraints() {
        return this._constraints;
      }
      get hasPreConnectBuffer() {
        return !!this.localTrackRecorder;
      }
      constructor(t2, n2, i2) {
        let a2 = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
        super(t2, n2, arguments.length > 4 ? arguments[4] : undefined), this.manuallyStopped = false, this.pendingDeviceChange = false, this._isUpstreamPaused = false, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch(() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)), this.debouncedTrackMuteHandler = Yo(() => cr(this, undefined, undefined, function* () {
          yield this.pauseUpstream();
        }), 5000), this.handleTrackUnmuteEvent = () => cr(this, undefined, undefined, function* () {
          this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream();
        }), this.handleEnded = () => {
          this.isInBackground && (this.reacquireTrack = true), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(e.TrackEvent.Ended, this);
        }, this.reacquireTrack = false, this.providedByUser = a2, this.muteLock = new r, this.pauseUpstreamLock = new r, this.trackChangeLock = new r, this.trackChangeLock.lock().then((e2) => cr(this, undefined, undefined, function* () {
          try {
            yield this.setMediaStreamTrack(t2, true);
          } finally {
            e2();
          }
        })), this._constraints = t2.getConstraints(), i2 && (this._constraints = i2);
      }
      get id() {
        return this._mediaStreamTrack.id;
      }
      get dimensions() {
        if (this.kind !== ws.Kind.Video)
          return;
        const e2 = this._mediaStreamTrack.getSettings(), t2 = e2.width, n2 = e2.height;
        return t2 && n2 ? { width: t2, height: n2 } : undefined;
      }
      get isUpstreamPaused() {
        return this._isUpstreamPaused;
      }
      get isUserProvided() {
        return this.providedByUser;
      }
      get mediaStreamTrack() {
        var e2, t2;
        return (t2 = (e2 = this.processor) === null || e2 === undefined ? undefined : e2.processedTrack) !== null && t2 !== undefined ? t2 : this._mediaStreamTrack;
      }
      get isLocal() {
        return true;
      }
      getSourceTrackSettings() {
        return this._mediaStreamTrack.getSettings();
      }
      setMediaStreamTrack(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          var i2;
          if (e2 === this._mediaStreamTrack && !t2)
            return;
          let r2;
          if (this._mediaStreamTrack && (this.attachedElements.forEach((e3) => {
            Ps(this._mediaStreamTrack, e3);
          }), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e2]), e2 && (e2.addEventListener("ended", this.handleEnded), e2.addEventListener("mute", this.handleTrackMuteEvent), e2.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e2.getConstraints()), this.processor && e2) {
            if (this.log.debug("restarting processor", this.logContext), this.kind === "unknown")
              throw TypeError("cannot set processor on track of unknown kind");
            this.processorElement && (Rs(e2, this.processorElement), this.processorElement.muted = true), yield this.processor.restart({ track: e2, kind: this.kind, element: this.processorElement, localTrack: this }), r2 = this.processor.processedTrack;
          }
          this.sender && ((i2 = this.sender.transport) === null || i2 === undefined ? undefined : i2.state) !== "closed" && (yield this.sender.replaceTrack(r2 != null ? r2 : e2)), this.providedByUser || this._mediaStreamTrack === e2 || this._mediaStreamTrack.stop(), this._mediaStreamTrack = e2, e2 && (this._mediaStreamTrack.enabled = !!n2 || !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach((t3) => {
            Rs(r2 != null ? r2 : e2, t3);
          }));
        });
      }
      waitForDimensions() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          return function* () {
            var n2;
            if (e2.kind === ws.Kind.Audio)
              throw new Error("cannot get dimensions for audio tracks");
            ((n2 = Pa()) === null || n2 === undefined ? undefined : n2.os) === "iOS" && (yield Ms(10));
            const i2 = Date.now();
            for (;Date.now() - i2 < t2; ) {
              const t3 = e2.dimensions;
              if (t3)
                return t3;
              yield Ms(50);
            }
            throw new Wa("unable to get track dimensions after timeout");
          }();
        });
      }
      setDeviceId(e2) {
        return cr(this, undefined, undefined, function* () {
          return this._constraints.deviceId === e2 && this._mediaStreamTrack.getSettings().deviceId === ho(e2) || (this._constraints.deviceId = e2, this.isMuted ? (this.pendingDeviceChange = true, true) : (yield this.restartTrack(), ho(e2) === this._mediaStreamTrack.getSettings().deviceId));
        });
      }
      getDeviceId() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
          return function* () {
            if (e2.source === ws.Source.ScreenShare)
              return;
            const n2 = e2._mediaStreamTrack.getSettings(), i2 = n2.deviceId, r2 = n2.groupId, a2 = e2.kind === ws.Kind.Audio ? "audioinput" : "videoinput";
            return t2 ? lc.getInstance().normalizeDeviceId(a2, i2, r2) : i2;
          }();
        });
      }
      mute() {
        return cr(this, undefined, undefined, function* () {
          return this.setTrackMuted(true), this;
        });
      }
      unmute() {
        return cr(this, undefined, undefined, function* () {
          return this.setTrackMuted(false), this;
        });
      }
      replaceTrack(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = yield this.trackChangeLock.lock();
          try {
            if (!this.sender)
              throw new Wa("unable to replace an unpublished track");
            let n3, i2;
            typeof t2 == "boolean" ? n3 = t2 : t2 !== undefined && (n3 = t2.userProvidedTrack, i2 = t2.stopProcessor), this.providedByUser = n3 == null || n3, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e2), i2 && this.processor && (yield this.internalStopProcessor());
          } finally {
            n2();
          }
          return yield this.onSenderTrackSwapped(), this;
        });
      }
      onSenderTrackSwapped() {
        return cr(this, undefined, undefined, function* () {});
      }
      restart(t2, n2) {
        return cr(this, undefined, undefined, function* () {
          this.manuallyStopped = false;
          const i2 = yield this.trackChangeLock.lock();
          try {
            t2 || (t2 = this._constraints);
            const i3 = t2, r2 = i3.deviceId, a2 = i3.facingMode, s2 = or(t2, ["deviceId", "facingMode"]);
            this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), { constraints: t2 }));
            const o2 = { audio: false, video: false };
            this.kind === ws.Kind.Video ? o2.video = !r2 && !a2 || { deviceId: r2, facingMode: a2 } : o2.audio = !r2 || Object.assign({ deviceId: r2 }, s2), this.attachedElements.forEach((e2) => {
              Ps(this.mediaStreamTrack, e2);
            }), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
            const c2 = (yield navigator.mediaDevices.getUserMedia(o2)).getTracks()[0];
            return this.kind === ws.Kind.Video && (yield c2.applyConstraints(s2)), c2.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(c2, false, n2), this._constraints = t2, this.pendingDeviceChange = false, this.emit(e.TrackEvent.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this;
          } finally {
            i2();
          }
        });
      }
      setTrackMuted(t2) {
        this.log.debug("setting ".concat(this.kind, " track ").concat(t2 ? "muted" : "unmuted"), this.logContext), this.isMuted === t2 && this._mediaStreamTrack.enabled !== t2 || (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
      }
      get needsReAcquisition() {
        return this._mediaStreamTrack.readyState !== "live" || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack;
      }
      handleAppVisibilityChanged() {
        const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
        return cr(this, undefined, undefined, function* () {
          yield e2.handleAppVisibilityChanged.call(this), Hs() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), this.isInBackground || !this.needsReAcquisition || this.isUserProvided || this.isMuted || (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = false));
        });
      }
      stop() {
        var e2;
        this.manuallyStopped = true, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), (e2 = this.processor) === null || e2 === undefined || e2.destroy(), this.processor = undefined;
      }
      pauseUpstream() {
        return cr(this, undefined, undefined, function* () {
          var t2;
          const n2 = yield this.pauseUpstreamLock.lock();
          try {
            if (this._isUpstreamPaused === true)
              return;
            if (!this.sender)
              return void this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
            this._isUpstreamPaused = true, this.emit(e.TrackEvent.UpstreamPaused, this);
            const n3 = Pa();
            if ((n3 == null ? undefined : n3.name) === "Safari" && Zs(n3.version, "12.0") < 0)
              throw new Va("pauseUpstream is not supported on Safari < 12.");
            ((t2 = this.sender.transport) === null || t2 === undefined ? undefined : t2.state) !== "closed" && (yield this.sender.replaceTrack(null));
          } finally {
            n2();
          }
        });
      }
      resumeUpstream() {
        return cr(this, undefined, undefined, function* () {
          var t2;
          const n2 = yield this.pauseUpstreamLock.lock();
          try {
            if (this._isUpstreamPaused === false)
              return;
            if (!this.sender)
              return void this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
            this._isUpstreamPaused = false, this.emit(e.TrackEvent.UpstreamResumed, this), ((t2 = this.sender.transport) === null || t2 === undefined ? undefined : t2.state) !== "closed" && (yield this.sender.replaceTrack(this.mediaStreamTrack));
          } finally {
            n2();
          }
        });
      }
      getRTCStatsReport() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!((e2 = this.sender) === null || e2 === undefined ? undefined : e2.getStats))
            return;
          return yield this.sender.getStats();
        });
      }
      setProcessor(t2) {
        return cr(this, arguments, undefined, function(t3) {
          var n2 = this;
          let i2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
          return function* () {
            var r2;
            const a2 = yield n2.trackChangeLock.lock();
            try {
              n2.log.debug("setting up processor", n2.logContext);
              const a3 = document.createElement(n2.kind), s2 = { kind: n2.kind, track: n2._mediaStreamTrack, element: a3, audioContext: n2.audioContext, localTrack: n2 };
              if (yield t3.init(s2), n2.log.debug("processor initialized", n2.logContext), n2.processor && (yield n2.internalStopProcessor()), n2.kind === "unknown")
                throw TypeError("cannot set processor on track of unknown kind");
              if (Rs(n2._mediaStreamTrack, a3), a3.muted = true, a3.play().catch((e2) => {
                e2 instanceof DOMException && e2.name === "AbortError" ? (n2.log.warn("failed to play processor element, retrying", Object.assign(Object.assign({}, n2.logContext), { error: e2 })), setTimeout(() => {
                  a3.play().catch((e3) => {
                    n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { err: e3 }));
                  });
                }, 100)) : n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { error: e2 }));
              }), n2.processor = t3, n2.processorElement = a3, n2.processor.processedTrack) {
                for (const e2 of n2.attachedElements)
                  e2 !== n2.processorElement && i2 && (Ps(n2._mediaStreamTrack, e2), Rs(n2.processor.processedTrack, e2));
                yield (r2 = n2.sender) === null || r2 === undefined ? undefined : r2.replaceTrack(n2.processor.processedTrack);
              }
              n2.emit(e.TrackEvent.TrackProcessorUpdate, n2.processor);
            } finally {
              a2();
            }
            yield n2.onSenderTrackSwapped();
          }();
        });
      }
      getProcessor() {
        return this.processor;
      }
      stopProcessor() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
          return function* () {
            const n2 = yield e2.trackChangeLock.lock();
            try {
              yield e2.internalStopProcessor(t2);
            } finally {
              n2();
            }
            yield e2.onSenderTrackSwapped();
          }();
        });
      }
      internalStopProcessor() {
        return cr(this, arguments, undefined, function() {
          var t2 = this;
          let n2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
          return function* () {
            var i2, r2;
            t2.processor && (t2.log.debug("stopping processor", t2.logContext), (i2 = t2.processor.processedTrack) === null || i2 === undefined || i2.stop(), yield t2.processor.destroy(), t2.processor = undefined, n2 || ((r2 = t2.processorElement) === null || r2 === undefined || r2.remove(), t2.processorElement = undefined), yield t2._mediaStreamTrack.applyConstraints(t2._constraints), yield t2.setMediaStreamTrack(t2._mediaStreamTrack, true), t2.emit(e.TrackEvent.TrackProcessorUpdate));
          }();
        });
      }
      startPreConnectBuffer() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        if (yd)
          if (this.localTrackRecorder)
            this.log.warn("preconnect buffer already started");
          else {
            {
              let e3 = "audio/webm;codecs=opus";
              MediaRecorder.isTypeSupported(e3) || (e3 = "video/mp4"), this.localTrackRecorder = new Td(this, { mimeType: e3 });
            }
            this.localTrackRecorder.start(e2), this.autoStopPreConnectBuffer = setTimeout(() => {
              this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer();
            }, 1e4);
          }
        else
          this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext);
      }
      stopPreConnectBuffer() {
        clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = undefined);
      }
      getPreConnectBuffer() {
        var e2;
        return (e2 = this.localTrackRecorder) === null || e2 === undefined ? undefined : e2.byteStream;
      }
      getPreConnectBufferMimeType() {
        var e2;
        return (e2 = this.localTrackRecorder) === null || e2 === undefined ? undefined : e2.mimeType;
      }
    }

    class Ed extends Sd {
      get enhancedNoiseCancellation() {
        return this.isKrispNoiseFilterEnabled;
      }
      constructor(t2, i2) {
        let r2 = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2], a2 = arguments.length > 3 ? arguments[3] : undefined, s2 = arguments.length > 4 ? arguments[4] : undefined;
        super(t2, ws.Kind.Audio, i2, r2, s2), this.stopOnMute = false, this.isKrispNoiseFilterEnabled = false, this.monitorSender = () => cr(this, undefined, undefined, function* () {
          if (!this.sender)
            return void (this._currentBitrate = 0);
          let e2;
          try {
            e2 = yield this.getSenderStats();
          } catch (n2) {
            return void this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), { error: n2 }));
          }
          e2 && this.prevStats && (this._currentBitrate = Zo(e2, this.prevStats)), this.prevStats = e2;
        }), this.handleKrispNoiseFilterEnable = () => {
          this.isKrispNoiseFilterEnabled = true, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, it.TF_ENHANCED_NOISE_CANCELLATION, true);
        }, this.handleKrispNoiseFilterDisable = () => {
          this.isKrispNoiseFilterEnabled = false, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, it.TF_ENHANCED_NOISE_CANCELLATION, false);
        }, this.audioContext = a2, this.checkForSilence();
      }
      mute() {
        const e2 = Object.create(null, { mute: { get: () => super.mute } });
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.muteLock.lock();
          try {
            return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === ws.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
          } finally {
            t2();
          }
        });
      }
      unmute() {
        const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.muteLock.lock();
          try {
            return this.isMuted ? (this.source !== ws.Source.Microphone || !this.stopOnMute && this._mediaStreamTrack.readyState !== "ended" && !this.pendingDeviceChange || this.isUserProvided || (this.log.debug("reacquiring mic track", this.logContext), yield this.restart(undefined, true)), yield e2.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
          } finally {
            t2();
          }
        });
      }
      restartTrack(e2) {
        return cr(this, undefined, undefined, function* () {
          let t2;
          if (e2) {
            const n2 = hs({ audio: e2 });
            typeof n2.audio != "boolean" && (t2 = n2.audio);
          }
          yield this.restart(t2);
        });
      }
      applyConstraints(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.trackChangeLock.lock();
          try {
            const t3 = yield this._mediaStreamTrack.applyConstraints(e2);
            return this._constraints = Object.assign(Object.assign({}, this._constraints), e2), t3;
          } finally {
            t2();
          }
        });
      }
      restart(e2, t2) {
        const n2 = Object.create(null, { restart: { get: () => super.restart } });
        return cr(this, undefined, undefined, function* () {
          const i2 = yield n2.restart.call(this, e2, t2);
          return this.checkForSilence(), i2;
        });
      }
      startMonitor() {
        Ks() && (this.monitorInterval || (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, Xo)));
      }
      setProcessor(t2) {
        return cr(this, undefined, undefined, function* () {
          var n2;
          const i2 = yield this.trackChangeLock.lock();
          try {
            if (!zs() && !this.audioContext)
              throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
            this.processor && (yield this.internalStopProcessor());
            const i3 = { kind: this.kind, track: this._mediaStreamTrack, audioContext: this.audioContext, localTrack: this };
            this.log.debug("setting up audio processor ".concat(t2.name), this.logContext), yield t2.init(i3), this.processor = t2, this.processor.processedTrack && (yield (n2 = this.sender) === null || n2 === undefined ? undefined : n2.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(e.TrackEvent.TrackProcessorUpdate, this.processor);
          } finally {
            i2();
          }
        });
      }
      setAudioContext(e2) {
        this.audioContext = e2;
      }
      getSenderStats() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!((e2 = this.sender) === null || e2 === undefined ? undefined : e2.getStats))
            return;
          let t2;
          return (yield this.sender.getStats()).forEach((e3) => {
            e3.type === "outbound-rtp" && (t2 = { type: "audio", streamId: e3.id, packetsSent: e3.packetsSent, packetsLost: e3.packetsLost, bytesSent: e3.bytesSent, timestamp: e3.timestamp, roundTripTime: e3.roundTripTime, jitter: e3.jitter });
          }), t2;
        });
      }
      checkForSilence() {
        return cr(this, undefined, undefined, function* () {
          const t2 = yield ps(this);
          return t2 && (this.isMuted || this.log.debug("silence detected on local audio track", this.logContext), this.emit(e.TrackEvent.AudioSilenceDetected)), t2;
        });
      }
    }
    const Cd = Object.values(os), wd = Object.values(cs), Rd = Object.values(ds), Pd = [os.h180, os.h360], Id = [cs.h180, cs.h360], _d = ["q", "h", "f"];
    function Md(e2, t2, n2, i2) {
      var r2, a2;
      let s2 = i2 == null ? undefined : i2.videoEncoding;
      e2 && (s2 = i2 == null ? undefined : i2.screenShareEncoding);
      const o2 = i2 == null ? undefined : i2.simulcast, c2 = i2 == null ? undefined : i2.scalabilityMode, d2 = i2 == null ? undefined : i2.videoCodec;
      if (!s2 && !o2 && !c2 || !t2 || !n2)
        return [{}];
      s2 || (s2 = function(e3, t3, n3, i3) {
        const r3 = function(e4, t4, n4) {
          if (e4)
            return Rd;
          const i4 = t4 > n4 ? t4 / n4 : n4 / t4;
          if (Math.abs(i4 - 16 / 9) < Math.abs(i4 - 4 / 3))
            return Cd;
          return wd;
        }(e3, t3, n3);
        let a3 = r3[0].encoding;
        const s3 = Math.max(t3, n3);
        for (let o3 = 0;o3 < r3.length; o3 += 1) {
          const e4 = r3[o3];
          if (a3 = e4.encoding, e4.width >= s3)
            break;
        }
        if (i3)
          switch (i3) {
            case "av1":
            case "h265":
              a3 = Object.assign({}, a3), a3.maxBitrate = 0.7 * a3.maxBitrate;
              break;
            case "vp9":
              a3 = Object.assign({}, a3), a3.maxBitrate = 0.85 * a3.maxBitrate;
          }
        return a3;
      }(e2, t2, n2, d2), er.debug("using video encoding", s2));
      const l2 = s2.maxFramerate, u2 = new $a(t2, n2, s2.maxBitrate, s2.maxFramerate, s2.priority);
      if (c2 && Ls(d2)) {
        const e3 = new Ld(c2), t3 = [];
        if (e3.spatial > 3)
          throw new Error("unsupported scalabilityMode: ".concat(c2));
        const n3 = Pa();
        if (Vs() || zs() || (n3 == null ? undefined : n3.name) === "Chrome" && Zs(n3 == null ? undefined : n3.version, "113") < 0) {
          const i3 = e3.suffix == "h" ? 2 : 3, r3 = function(e4) {
            return e4 || (e4 = Pa()), (e4 == null ? undefined : e4.name) === "Safari" && Zs(e4.version, "18.3") > 0 || (e4 == null ? undefined : e4.os) === "iOS" && !!(e4 == null ? undefined : e4.osVersion) && Zs(e4.osVersion, "18.3") > 0;
          }(n3);
          for (let n4 = 0;n4 < e3.spatial; n4 += 1)
            t3.push({ rid: _d[2 - n4], maxBitrate: s2.maxBitrate / Math.pow(i3, n4), maxFramerate: u2.encoding.maxFramerate, scaleResolutionDownBy: r3 ? Math.pow(2, n4) : undefined });
          t3[0].scalabilityMode = c2;
        } else
          t3.push({ maxBitrate: s2.maxBitrate, maxFramerate: u2.encoding.maxFramerate, scalabilityMode: c2 });
        return u2.encoding.priority && (t3[0].priority = u2.encoding.priority, t3[0].networkPriority = u2.encoding.priority), er.debug("using svc encoding", { encodings: t3 }), t3;
      }
      if (!o2)
        return [s2];
      let h2, p2;
      if (h2 = e2 ? (r2 = Nd(i2 == null ? undefined : i2.screenShareSimulcastLayers)) !== null && r2 !== undefined ? r2 : Od(e2, u2) : (a2 = Nd(i2 == null ? undefined : i2.videoSimulcastLayers)) !== null && a2 !== undefined ? a2 : Od(e2, u2), h2.length > 0) {
        const e3 = h2[0];
        if (h2.length > 1)
          p2 = L(h2, 2)[1];
        const i3 = Math.max(t2, n2);
        if (i3 >= 960 && p2)
          return Ad(t2, n2, [e3, p2, u2], l2);
        if (i3 >= 480)
          return Ad(t2, n2, [e3, u2], l2);
      }
      return Ad(t2, n2, [u2]);
    }
    function Dd(e2, t2, n2) {
      var i2, r2, a2, s2;
      if (!n2.backupCodec || n2.backupCodec === true || n2.backupCodec.codec === n2.videoCodec)
        return;
      t2 !== n2.backupCodec.codec && er.warn("requested a different codec than specified as backup", { serverRequested: t2, backup: n2.backupCodec.codec }), n2.videoCodec = t2, n2.videoEncoding = n2.backupCodec.encoding;
      const o2 = e2.mediaStreamTrack.getSettings(), c2 = (i2 = o2.width) !== null && i2 !== undefined ? i2 : (r2 = e2.dimensions) === null || r2 === undefined ? undefined : r2.width, d2 = (a2 = o2.height) !== null && a2 !== undefined ? a2 : (s2 = e2.dimensions) === null || s2 === undefined ? undefined : s2.height;
      e2.source === ws.Source.ScreenShare && n2.simulcast && (n2.simulcast = false);
      return Md(e2.source === ws.Source.ScreenShare, c2, d2, n2);
    }
    function Od(e2, t2) {
      if (e2)
        return [{ scaleResolutionDownBy: 2, fps: (n2 = t2).encoding.maxFramerate }].map((e3) => {
          var t3, i3;
          return new $a(Math.floor(n2.width / e3.scaleResolutionDownBy), Math.floor(n2.height / e3.scaleResolutionDownBy), Math.max(150000, Math.floor(n2.encoding.maxBitrate / (Math.pow(e3.scaleResolutionDownBy, 2) * (((t3 = n2.encoding.maxFramerate) !== null && t3 !== undefined ? t3 : 30) / ((i3 = e3.fps) !== null && i3 !== undefined ? i3 : 30))))), e3.fps, n2.encoding.priority);
        });
      var n2;
      const { width: i2, height: r2 } = t2, a2 = i2 > r2 ? i2 / r2 : r2 / i2;
      return Math.abs(a2 - 16 / 9) < Math.abs(a2 - 4 / 3) ? Pd : Id;
    }
    function Ad(e2, t2, n2, i2) {
      const r2 = [];
      if (n2.forEach((n3, a2) => {
        if (a2 >= _d.length)
          return;
        const s2 = Math.min(e2, t2), o2 = { rid: _d[a2], scaleResolutionDownBy: Math.max(1, s2 / Math.min(n3.width, n3.height)), maxBitrate: n3.encoding.maxBitrate }, c2 = i2 && n3.encoding.maxFramerate ? Math.min(i2, n3.encoding.maxFramerate) : n3.encoding.maxFramerate;
        c2 && (o2.maxFramerate = c2);
        const d2 = Pa(), l2 = (d2 == null ? undefined : d2.name) === "Firefox" && d2.os !== "iOS" || a2 === 0;
        n3.encoding.priority && l2 && (o2.priority = n3.encoding.priority, o2.networkPriority = n3.encoding.priority), r2.push(o2);
      }), zs() && Ys() === "ios") {
        let e3;
        r2.forEach((t4) => {
          e3 ? t4.maxFramerate && t4.maxFramerate > e3 && (e3 = t4.maxFramerate) : e3 = t4.maxFramerate;
        });
        let t3 = true;
        r2.forEach((n3) => {
          var i3;
          n3.maxFramerate != e3 && (t3 && (t3 = false, er.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), er.info('Setting framerate of encoding "'.concat((i3 = n3.rid) !== null && i3 !== undefined ? i3 : "", '" to ').concat(e3)), n3.maxFramerate = e3);
        });
      }
      return r2;
    }
    function Nd(e2) {
      if (e2)
        return e2.slice().sort((e3, t2) => {
          const n2 = e3.encoding, i2 = t2.encoding;
          return n2.maxBitrate > i2.maxBitrate ? 1 : n2.maxBitrate < i2.maxBitrate ? -1 : n2.maxBitrate === i2.maxBitrate && n2.maxFramerate && i2.maxFramerate ? n2.maxFramerate > i2.maxFramerate ? 1 : -1 : 0;
        });
    }

    class Ld {
      constructor(e2) {
        const t2 = e2.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
        if (!t2)
          throw new Error("invalid scalability mode");
        if (this.spatial = parseInt(t2[1]), this.temporal = parseInt(t2[2]), t2.length > 3)
          switch (t2[3]) {
            case "h":
            case "_KEY":
            case "_KEY_SHIFT":
              this.suffix = t2[3];
          }
      }
      toString() {
        var e2;
        return "L".concat(this.spatial, "T").concat(this.temporal).concat((e2 = this.suffix) !== null && e2 !== undefined ? e2 : "");
      }
    }

    class xd extends Sd {
      get sender() {
        return this._sender;
      }
      set sender(e2) {
        this._sender = e2, this.degradationPreference && this.setDegradationPreference(this.degradationPreference);
      }
      constructor(t2, i2) {
        let a2 = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2], s2 = arguments.length > 3 ? arguments[3] : undefined;
        super(t2, ws.Kind.Video, i2, a2, s2), this.simulcastCodecs = new Map, this.degradationPreference = "balanced", this.isCpuConstrained = false, this.optimizeForPerformance = false, this.monitorSender = () => cr(this, undefined, undefined, function* () {
          if (!this.sender)
            return void (this._currentBitrate = 0);
          let t3;
          try {
            t3 = yield this.getSenderStats();
          } catch (n2) {
            return void this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), { error: n2 }));
          }
          const i3 = new Map(t3.map((e2) => [e2.rid, e2])), r2 = t3.some((e2) => e2.qualityLimitationReason === "cpu");
          if (r2 !== this.isCpuConstrained && (this.isCpuConstrained = r2, this.isCpuConstrained && this.emit(e.TrackEvent.CpuConstrained)), this.prevStats) {
            let e2 = 0;
            i3.forEach((t4, n2) => {
              var i4;
              const r3 = (i4 = this.prevStats) === null || i4 === undefined ? undefined : i4.get(n2);
              e2 += Zo(t4, r3);
            }), this._currentBitrate = e2;
          }
          this.prevStats = i3;
        }), this.senderLock = new r;
      }
      get isSimulcast() {
        return !!(this.sender && this.sender.getParameters().encodings.length > 1);
      }
      startMonitor(e2) {
        var t2;
        if (this.signalClient = e2, !Ks())
          return;
        const n2 = (t2 = this.sender) === null || t2 === undefined ? undefined : t2.getParameters();
        n2 && (this.encodings = n2.encodings), this.monitorInterval || (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, Xo));
      }
      stop() {
        this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach((e2) => {
          e2.mediaStreamTrack.stop();
        }), super.stop();
      }
      pauseUpstream() {
        const e2 = Object.create(null, { pauseUpstream: { get: () => super.pauseUpstream } });
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2, r2, a2;
          yield e2.pauseUpstream.call(this);
          try {
            for (var s2, o2 = true, c2 = hr(this.simulcastCodecs.values());!(t2 = (s2 = yield c2.next()).done); o2 = true) {
              r2 = s2.value, o2 = false;
              const e3 = r2;
              yield (a2 = e3.sender) === null || a2 === undefined ? undefined : a2.replaceTrack(null);
            }
          } catch (d2) {
            n2 = { error: d2 };
          } finally {
            try {
              o2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
            } finally {
              if (n2)
                throw n2.error;
            }
          }
        });
      }
      resumeUpstream() {
        const e2 = Object.create(null, { resumeUpstream: { get: () => super.resumeUpstream } });
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2, r2, a2;
          yield e2.resumeUpstream.call(this);
          try {
            for (var s2, o2 = true, c2 = hr(this.simulcastCodecs.values());!(t2 = (s2 = yield c2.next()).done); o2 = true) {
              r2 = s2.value, o2 = false;
              const e3 = r2;
              yield (a2 = e3.sender) === null || a2 === undefined ? undefined : a2.replaceTrack(e3.mediaStreamTrack);
            }
          } catch (d2) {
            n2 = { error: d2 };
          } finally {
            try {
              o2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
            } finally {
              if (n2)
                throw n2.error;
            }
          }
        });
      }
      mute() {
        const e2 = Object.create(null, { mute: { get: () => super.mute } });
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.muteLock.lock();
          try {
            return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source !== ws.Source.Camera || this.isUserProvided || (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
          } finally {
            t2();
          }
        });
      }
      unmute() {
        const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.muteLock.lock();
          try {
            return this.isMuted ? (this.source !== ws.Source.Camera || this.isUserProvided || (this.log.debug("reacquiring camera track", this.logContext), yield this.restart(undefined, true)), yield e2.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
          } finally {
            t2();
          }
        });
      }
      setTrackMuted(e2) {
        super.setTrackMuted(e2);
        for (const t2 of this.simulcastCodecs.values())
          t2.mediaStreamTrack.enabled = !e2;
      }
      getSenderStats() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!((e2 = this.sender) === null || e2 === undefined ? undefined : e2.getStats))
            return [];
          const t2 = [], n2 = yield this.sender.getStats();
          return n2.forEach((e3) => {
            var i2;
            if (e3.type === "outbound-rtp") {
              const r2 = { type: "video", streamId: e3.id, frameHeight: e3.frameHeight, frameWidth: e3.frameWidth, framesPerSecond: e3.framesPerSecond, framesSent: e3.framesSent, firCount: e3.firCount, pliCount: e3.pliCount, nackCount: e3.nackCount, packetsSent: e3.packetsSent, bytesSent: e3.bytesSent, qualityLimitationReason: e3.qualityLimitationReason, qualityLimitationDurations: e3.qualityLimitationDurations, qualityLimitationResolutionChanges: e3.qualityLimitationResolutionChanges, rid: (i2 = e3.rid) !== null && i2 !== undefined ? i2 : e3.id, retransmittedPacketsSent: e3.retransmittedPacketsSent, targetBitrate: e3.targetBitrate, timestamp: e3.timestamp }, a2 = n2.get(e3.remoteId);
              a2 && (r2.jitter = a2.jitter, r2.packetsLost = a2.packetsLost, r2.roundTripTime = a2.roundTripTime), t2.push(r2);
            }
          }), t2.sort((e3, t3) => {
            var n3, i2;
            return ((n3 = t3.frameWidth) !== null && n3 !== undefined ? n3 : 0) - ((i2 = e3.frameWidth) !== null && i2 !== undefined ? i2 : 0);
          }), t2;
        });
      }
      setPublishingQuality(t2) {
        const n2 = [];
        for (let i2 = e.VideoQuality.LOW;i2 <= e.VideoQuality.HIGH; i2 += 1)
          n2.push(new bi({ quality: i2, enabled: i2 <= t2 }));
        this.log.debug("setting publishing quality. max quality ".concat(t2), this.logContext), this.setPublishingLayers(Ls(this.codec), n2);
      }
      restartTrack(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2, r2, a2;
          let s2;
          if (e2) {
            const t3 = hs({ video: e2 });
            typeof t3.video != "boolean" && (s2 = t3.video);
          }
          yield this.restart(s2), this.isCpuConstrained = false;
          try {
            for (var o2, c2 = true, d2 = hr(this.simulcastCodecs.values());!(t2 = (o2 = yield d2.next()).done); c2 = true) {
              r2 = o2.value, c2 = false;
              const e3 = r2;
              e3.sender && ((a2 = e3.sender.transport) === null || a2 === undefined ? undefined : a2.state) !== "closed" && (e3.mediaStreamTrack = this.mediaStreamTrack.clone(), yield e3.sender.replaceTrack(e3.mediaStreamTrack));
            }
          } catch (l2) {
            n2 = { error: l2 };
          } finally {
            try {
              c2 || t2 || !(i2 = d2.return) || (yield i2.call(d2));
            } finally {
              if (n2)
                throw n2.error;
            }
          }
          yield this.onSenderTrackSwapped();
        });
      }
      onSenderTrackSwapped() {
        return cr(this, undefined, undefined, function* () {
          yield this.refreshSenderEncodings();
        });
      }
      refreshSenderEncodings() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          if (!this.sender || !this.publishOptions || this.optimizeForPerformance)
            return;
          const t2 = yield this.senderLock.lock();
          try {
            let t3;
            try {
              t3 = yield this.waitForDimensions();
            } catch (n2) {
              return void this.log.warn("could not determine new track dimensions, skipping encoding recompute", Object.assign(Object.assign({}, this.logContext), { error: n2 }));
            }
            if (this.lastEncodedDimensions && this.lastEncodedDimensions.width === t3.width && this.lastEncodedDimensions.height === t3.height)
              return;
            const r2 = Md(this.source === ws.Source.ScreenShare, t3.width, t3.height, Object.assign({}, this.publishOptions));
            yield this.applyEncodingsToSender(this.sender, r2), this.encodings = r2, this.lastEncodedDimensions = t3;
            for (const n2 of this.simulcastCodecs) {
              var i2 = L(n2, 2);
              const t4 = i2[0], r3 = i2[1];
              if (!r3.sender || ((e2 = r3.sender.transport) === null || e2 === undefined ? undefined : e2.state) === "closed")
                continue;
              if (!is(t4))
                continue;
              const a2 = Dd(this, t4, Object.assign({}, this.publishOptions));
              a2 && (yield this.applyEncodingsToSender(r3.sender, a2), r3.encodings = a2);
            }
          } catch (n2) {
            this.log.warn("failed to apply recomputed encodings", Object.assign(Object.assign({}, this.logContext), { error: n2 }));
          } finally {
            t2();
          }
        });
      }
      applyEncodingsToSender(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = e2.getParameters();
          n2.encodings && n2.encodings.length === t2.length && (n2.encodings.forEach((e3, n3) => {
            if (e3.active === false)
              return;
            const i2 = t2[n3];
            i2.scaleResolutionDownBy !== undefined && (e3.scaleResolutionDownBy = i2.scaleResolutionDownBy), i2.maxBitrate !== undefined && (e3.maxBitrate = i2.maxBitrate), i2.maxFramerate !== undefined && (e3.maxFramerate = i2.maxFramerate), i2.priority !== undefined && (e3.priority = i2.priority, e3.networkPriority = i2.priority);
          }), this.log.debug("updating sender encodings after track restart", Object.assign(Object.assign({}, this.logContext), { encodings: n2.encodings })), yield e2.setParameters(n2));
        });
      }
      setProcessor(e2) {
        const t2 = Object.create(null, { setProcessor: { get: () => super.setProcessor } });
        return cr(this, arguments, undefined, function(e3) {
          var n2 = this;
          let i2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
          return function* () {
            var r2, a2, s2, o2, c2, d2;
            if (yield t2.setProcessor.call(n2, e3, i2), (c2 = n2.processor) === null || c2 === undefined ? undefined : c2.processedTrack)
              try {
                for (var l2, u2 = true, h2 = hr(n2.simulcastCodecs.values());!(r2 = (l2 = yield h2.next()).done); u2 = true) {
                  o2 = l2.value, u2 = false;
                  const e4 = o2;
                  yield (d2 = e4.sender) === null || d2 === undefined ? undefined : d2.replaceTrack(n2.processor.processedTrack);
                }
              } catch (p2) {
                a2 = { error: p2 };
              } finally {
                try {
                  u2 || r2 || !(s2 = h2.return) || (yield s2.call(h2));
                } finally {
                  if (a2)
                    throw a2.error;
                }
              }
          }();
        });
      }
      setDegradationPreference(e2) {
        return cr(this, undefined, undefined, function* () {
          this.degradationPreference = e2, yield this.applyDegradationPreference(this.sender);
          for (const e3 of this.simulcastCodecs.values())
            yield this.applyDegradationPreference(e3.sender);
        });
      }
      applyDegradationPreference(e2) {
        return cr(this, undefined, undefined, function* () {
          if (e2)
            try {
              this.log.debug("setting degradationPreference to ".concat(this.degradationPreference), this.logContext);
              const t2 = e2.getParameters();
              t2.degradationPreference = this.degradationPreference, yield e2.setParameters(t2);
            } catch (n2) {
              this.log.warn("failed to set degradationPreference", Object.assign({ error: n2 }, this.logContext));
            }
        });
      }
      addSimulcastTrack(e2, t2) {
        if (this.simulcastCodecs.has(e2))
          return void this.log.error("".concat(e2, " already added, skipping adding simulcast codec"), this.logContext);
        const n2 = { codec: e2, mediaStreamTrack: this.mediaStreamTrack.clone(), sender: undefined, encodings: t2 };
        return this.simulcastCodecs.set(e2, n2), n2;
      }
      setSimulcastTrackSender(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = this.simulcastCodecs.get(e2);
          n2 && (n2.sender = t2, yield this.applyDegradationPreference(t2), setTimeout(() => {
            this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs);
          }, 5000));
        });
      }
      setPublishingCodecs(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2, r2, a2, s2, o2;
          if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), { codecs: e2, currentCodec: this.codec })), !this.codec && e2.length > 0)
            return yield this.setPublishingLayers(Ls(e2[0].codec), e2[0].qualities), [];
          this.subscribedCodecs = e2;
          const c2 = [];
          try {
            for (t2 = true, n2 = hr(e2);!(r2 = (i2 = yield n2.next()).done); t2 = true) {
              o2 = i2.value, t2 = false;
              const e3 = o2;
              if (this.codec && this.codec !== e3.codec) {
                const t3 = this.simulcastCodecs.get(e3.codec);
                if (this.log.debug("try setPublishingCodec for ".concat(e3.codec), Object.assign(Object.assign({}, this.logContext), { simulcastCodecInfo: t3 })), t3 && t3.sender)
                  t3.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(e3.codec), this.logContext), yield Ud(t3.sender, t3.encodings, e3.qualities, this.senderLock, Ls(e3.codec), this.log, this.logContext));
                else
                  for (const n3 of e3.qualities)
                    if (n3.enabled) {
                      c2.push(e3.codec);
                      break;
                    }
              } else
                yield this.setPublishingLayers(Ls(e3.codec), e3.qualities);
            }
          } catch (d2) {
            a2 = { error: d2 };
          } finally {
            try {
              t2 || r2 || !(s2 = n2.return) || (yield s2.call(n2));
            } finally {
              if (a2)
                throw a2.error;
            }
          }
          return c2;
        });
      }
      setPublishingLayers(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          this.optimizeForPerformance ? this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })) : (this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })), this.sender && this.encodings && (yield Ud(this.sender, this.encodings, t2, this.senderLock, e2, this.log, this.logContext)));
        });
      }
      prioritizePerformance() {
        return cr(this, undefined, undefined, function* () {
          if (!this.sender)
            throw new Error("sender not found");
          const e2 = yield this.senderLock.lock();
          try {
            this.optimizeForPerformance = true;
            const e3 = this.sender.getParameters();
            e3.encodings = e3.encodings.map((e4, t2) => {
              var n2;
              return Object.assign(Object.assign({}, e4), { active: t2 === 0, scaleResolutionDownBy: Math.max(1, Math.ceil(((n2 = this.mediaStreamTrack.getSettings().height) !== null && n2 !== undefined ? n2 : 360) / 360)), scalabilityMode: t2 === 0 && Ls(this.codec) ? "L1T3" : undefined, maxFramerate: t2 === 0 ? 15 : 0, maxBitrate: t2 === 0 ? e4.maxBitrate : 0 });
            }), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { encodings: e3.encodings })), this.encodings = e3.encodings, yield this.sender.setParameters(e3);
          } catch (n2) {
            this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { error: n2 })), this.optimizeForPerformance = false;
          } finally {
            e2();
          }
        });
      }
      handleAppVisibilityChanged() {
        const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
        return cr(this, undefined, undefined, function* () {
          yield e2.handleAppVisibilityChanged.call(this), Hs() && this.isInBackground && this.source === ws.Source.Camera && (this._mediaStreamTrack.enabled = false);
        });
      }
    }
    function Ud(e2, t2, n2, i2, r2, a2, s2) {
      return cr(this, undefined, undefined, function* () {
        const o2 = yield i2.lock();
        a2.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, s2), { sender: e2, qualities: n2, senderEncodings: t2 }));
        try {
          const i3 = e2.getParameters(), o3 = i3.encodings;
          if (!o3)
            return;
          if (o3.length !== t2.length)
            return void a2.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, s2), { encodings: o3, senderEncodings: t2 }));
          let c2 = false;
          if (false)
            ;
          else {
            if (r2) {
              n2.some((e3) => e3.enabled) && n2.forEach((e3) => e3.enabled = true);
            }
            o3.forEach((e3, i4) => {
              var r3;
              let o4 = (r3 = e3.rid) !== null && r3 !== undefined ? r3 : "";
              o4 === "" && (o4 = "q");
              const d2 = Fd(o4), l2 = n2.find((e4) => e4.quality === d2);
              l2 && e3.active !== l2.enabled && (c2 = true, e3.active = l2.enabled, a2.debug("setting layer ".concat(l2.quality, " to ").concat(e3.active ? "enabled" : "disabled"), s2), Bs() && (l2.enabled ? (e3.scaleResolutionDownBy = t2[i4].scaleResolutionDownBy, e3.maxBitrate = t2[i4].maxBitrate, e3.maxFrameRate = t2[i4].maxFrameRate) : (e3.scaleResolutionDownBy = 4, e3.maxBitrate = 10, e3.maxFrameRate = 2)));
            });
          }
          c2 && (i3.encodings = o3, a2.debug("setting encodings", Object.assign(Object.assign({}, s2), { encodings: i3.encodings })), yield e2.setParameters(i3));
        } finally {
          o2();
        }
      });
    }
    function Fd(t2) {
      switch (t2) {
        case "f":
        default:
          return e.VideoQuality.HIGH;
        case "h":
          return e.VideoQuality.MEDIUM;
        case "q":
          return e.VideoQuality.LOW;
      }
    }
    function Bd(t2, n2, i2, r2) {
      if (!i2)
        return [new Ct({ quality: e.VideoQuality.HIGH, width: t2, height: n2, bitrate: 0, ssrc: 0 })];
      if (r2) {
        const r3 = i2[0].scalabilityMode, a2 = new Ld(r3), s2 = [], o2 = a2.suffix == "h" ? 1.5 : 2, c2 = a2.suffix == "h" ? 2 : 3;
        for (let d2 = 0;d2 < a2.spatial; d2 += 1)
          s2.push(new Ct({ quality: Math.min(e.VideoQuality.HIGH, a2.spatial - 1) - d2, width: Math.ceil(t2 / Math.pow(o2, d2)), height: Math.ceil(n2 / Math.pow(o2, d2)), bitrate: i2[0].maxBitrate ? Math.ceil(i2[0].maxBitrate / Math.pow(c2, d2)) : 0, ssrc: 0 }));
        return s2;
      }
      return i2.map((e2) => {
        var i3, r3, a2;
        const s2 = (i3 = e2.scaleResolutionDownBy) !== null && i3 !== undefined ? i3 : 1;
        let o2 = Fd((r3 = e2.rid) !== null && r3 !== undefined ? r3 : "");
        return new Ct({ quality: o2, width: Math.ceil(t2 / s2), height: Math.ceil(n2 / s2), bitrate: (a2 = e2.maxBitrate) !== null && a2 !== undefined ? a2 : 0, ssrc: 0 });
      });
    }
    const jd = "leave-reconnect";
    var qd;
    (function(e2) {
      e2[e2.New = 0] = "New", e2[e2.Connected = 1] = "Connected", e2[e2.Disconnected = 2] = "Disconnected", e2[e2.Reconnecting = 3] = "Reconnecting", e2[e2.Closed = 4] = "Closed";
    })(qd || (qd = {}));

    class Vd extends gr.EventEmitter {
      get isClosed() {
        return this._isClosed;
      }
      get isNewlyCreated() {
        return this._isNewlyCreated;
      }
      get pendingReconnect() {
        return !!this.reconnectTimeout;
      }
      get reliableChannel() {
        return this.dataChannels.reliable;
      }
      get lossyChannel() {
        return this.dataChannels.lossy;
      }
      get dataTrackChannel() {
        return this.dataChannels.dataTrack;
      }
      constructor(t2) {
        var i2;
        super(), this.options = t2, this.rtcConfig = {}, this.peerConnectionTimeout = ad.peerConnectionTimeout, this.fullReconnectOnNext = false, this.latestRemoteOfferId = 0, this.subscriberPrimary = false, this.pcState = qd.New, this._isClosed = true, this._isNewlyCreated = true, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = false, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = false, this.shouldFailOnV1Path = false, this.log = er, this.reliableReceivedState = new Mc(30000), this.midToTrackId = {}, this.isWaitingForNetworkReconnect = false, this.handleDataChannel = (e2) => cr(this, [e2], undefined, function(e3) {
          var t3 = this;
          let n2 = e3.channel;
          return function* () {
            n2 && t3.dataChannels.adoptSubscriberChannel(n2) && t3.log.debug("on data channel ".concat(n2.id, ", ").concat(n2.label));
          }();
        }), this.handleDataMessage = (t3) => cr(this, undefined, undefined, function* () {
          var n2, i3, r2, a2, s2;
          const o2 = yield this.dataProcessLock.lock();
          try {
            const o3 = yield this.decodeDataMessage(t3);
            if (!o3)
              return;
            const c2 = Rt.fromBinary(o3);
            if (c2.sequence > 0 && c2.participantSid !== "") {
              const e2 = this.reliableReceivedState.get(c2.participantSid);
              if (e2 && c2.sequence <= e2)
                return;
              this.reliableReceivedState.set(c2.participantSid, c2.sequence);
            }
            if (((n2 = c2.value) === null || n2 === undefined ? undefined : n2.case) === "speaker")
              this.emit(e.EngineEvent.ActiveSpeakersUpdate, c2.value.value.speakers);
            else if (((i3 = c2.value) === null || i3 === undefined ? undefined : i3.case) === "encryptedPacket") {
              if (!this.e2eeManager)
                return void this.log.error("Received encrypted packet but E2EE not set up");
              const t4 = yield (r2 = this.e2eeManager) === null || r2 === undefined ? undefined : r2.handleEncryptedData(c2.value.value.encryptedValue, c2.value.value.iv, c2.participantIdentity, c2.value.value.keyIndex), n3 = _t.fromBinary(t4.payload), i4 = new Rt({ value: n3.value, participantIdentity: c2.participantIdentity, participantSid: c2.participantSid });
              ((a2 = i4.value) === null || a2 === undefined ? undefined : a2.case) === "user" && Wd(i4, i4.value.value), this.emit(e.EngineEvent.DataPacketReceived, i4, c2.value.value.encryptionType);
            } else
              ((s2 = c2.value) === null || s2 === undefined ? undefined : s2.case) === "user" && Wd(c2, c2.value.value), this.emit(e.EngineEvent.DataPacketReceived, c2, ht.NONE);
          } finally {
            o2();
          }
        }), this.handleDataTrackMessage = (e2) => cr(this, undefined, undefined, function* () {
          const t3 = yield this.decodeDataMessage(e2);
          t3 && this.emit("dataTrackPacketReceived", t3);
        }), this.handleDataError = (e2) => {
          if (this._isClosed)
            return;
          const t3 = e2.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
          if (typeof RTCErrorEvent != "undefined" && e2 instanceof RTCErrorEvent && e2.error) {
            const n2 = e2.error;
            this.log.error("DataChannel error on ".concat(t3, ": ").concat(n2.message), { error: n2, errorDetail: n2.errorDetail, sctpCauseCode: n2.sctpCauseCode });
          } else
            this.log.error("Unknown DataChannel error on ".concat(t3), { event: e2 });
        }, this.handleDataChannelClose = (e2) => () => {
          var t3;
          this._isClosed || ((t3 = this.pcManager) === null || t3 === undefined ? undefined : t3.publisher.getConnectionState()) !== "connected" || this.log.error("publisher data channel '".concat(od[e2], "' closed unexpectedly"), this.logContext);
        }, this.handleDisconnect = (t3, n2) => {
          if (this._isClosed)
            return;
          this.log.warn("".concat(t3, " disconnected")), this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
          const i3 = (t4) => {
            this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(t4, "ms. giving up")), this.emit(e.EngineEvent.Disconnected), this.close();
          }, r2 = Date.now() - this.reconnectStart;
          let a2 = this.getNextRetryDelay({ elapsedMs: r2, retryCount: this.reconnectAttempts });
          a2 !== null ? (t3 === jd && (a2 = 0), this.log.debug("reconnecting in ".concat(a2, "ms")), this.clearReconnectTimeout(), this.token && this.emit(e.EngineEvent.TokenRefreshed, this.token), this.reconnectTimeout = Za.setTimeout(() => this.attemptReconnect(n2).finally(() => this.reconnectTimeout = undefined), a2)) : i3(r2);
        }, this.waitForRestarted = () => new Promise((t3, n2) => {
          this.pcState === qd.Connected && t3();
          const i3 = () => {
            this.off(e.EngineEvent.Disconnected, r2), t3();
          }, r2 = () => {
            this.off(e.EngineEvent.Restarted, i3), n2();
          };
          this.once(e.EngineEvent.Restarted, i3), this.once(e.EngineEvent.Disconnected, r2);
        }), this.onRtpMapAvailable = (t3) => {
          const n2 = new Map;
          t3.forEach((e2) => {
            const t4 = e2.codec.toLowerCase();
            uo(t4) && n2.set(e2.payload, t4);
          }), this.emit(e.EngineEvent.RTPVideoMapUpdate, n2);
        }, this.handleBrowserOnLine = () => cr(this, undefined, undefined, function* () {
          if (!this.url)
            return;
          (yield fetch(po(this.url), { method: "HEAD" }).then((e2) => e2.ok).catch(() => false)) && (this.log.info("detected network reconnected"), (this.client.currentState === Rc.RECONNECTING || this.isWaitingForNetworkReconnect && this.client.currentState === Rc.CONNECTED) && (this.clearReconnectTimeout(), this.attemptReconnect(tt.RR_SIGNAL_DISCONNECTED), this.isWaitingForNetworkReconnect = false));
        }), this.handleBrowserOffline = () => cr(this, undefined, undefined, function* () {
          if (this.url)
            try {
              yield Promise.race([fetch(po(this.url), { method: "HEAD" }), Ms(4000).then(() => Promise.reject())]);
            } catch (n2) {
              window.navigator.onLine === false && (this.log.info("detected network interruption"), this.isWaitingForNetworkReconnect = true);
            }
        }), this.log = nr((i2 = t2.loggerName) !== null && i2 !== undefined ? i2 : e.LoggerNames.Engine, () => this.logContext), this.loggerOptions = { loggerName: t2.loggerName, loggerContextCb: () => this.logContext }, this.client = new Pc(undefined, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.closingLock = new r, this.dataProcessLock = new r, this.dataChannels = new kd({ isEngineClosed: () => this.isClosed, isReconnecting: () => this.attemptingReconnect, onDataMessage: (e2) => this.handleDataMessage(e2), onDataTrackMessage: (e2) => this.handleDataTrackMessage(e2), onDataError: (e2) => this.handleDataError(e2), onChannelClose: (e2) => this.handleDataChannelClose(e2)(), onBufferStatusChanged: (t3, n2) => this.emit(e.EngineEvent.DCBufferStatusChanged, n2, t3) }), this.client.onParticipantUpdate = (t3) => this.emit(e.EngineEvent.ParticipantUpdate, t3), this.client.onConnectionQuality = (t3) => {
          this.handleLocalConnectionQuality(t3), this.emit(e.EngineEvent.ConnectionQualityUpdate, t3);
        }, this.client.onRoomUpdate = (t3) => this.emit(e.EngineEvent.RoomUpdate, t3), this.client.onSubscriptionError = (t3) => this.emit(e.EngineEvent.SubscriptionError, t3), this.client.onSubscriptionPermissionUpdate = (t3) => this.emit(e.EngineEvent.SubscriptionPermissionUpdate, t3), this.client.onSpeakersChanged = (t3) => this.emit(e.EngineEvent.SpeakersChanged, t3), this.client.onStreamStateUpdate = (t3) => this.emit(e.EngineEvent.StreamStateChanged, t3), this.client.onRequestResponse = (t3) => this.emit(e.EngineEvent.SignalRequestResponse, t3), this.client.onParticipantUpdate = (t3) => this.emit(e.EngineEvent.ParticipantUpdate, t3), this.client.onJoined = (t3) => this.emit(e.EngineEvent.Joined, t3);
      }
      get logContext() {
        var e2, t2, n2, i2, r2, a2;
        return { room: (t2 = (e2 = this.latestJoinResponse) === null || e2 === undefined ? undefined : e2.room) === null || t2 === undefined ? undefined : t2.name, roomID: (i2 = (n2 = this.latestJoinResponse) === null || n2 === undefined ? undefined : n2.room) === null || i2 === undefined ? undefined : i2.sid, participant: (a2 = (r2 = this.latestJoinResponse) === null || r2 === undefined ? undefined : r2.participant) === null || a2 === undefined ? undefined : a2.identity, participantID: this.participantSid };
      }
      join(t2, i2, r2, a2) {
        return cr(this, arguments, undefined, function(t3, i3, r3, a3) {
          var s2 = this;
          let o2 = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
          return function* () {
            var c2, d2, l2;
            s2._isNewlyCreated = false, s2.url = t3, s2.token = i3, s2.signalOpts = r3, s2.maxJoinAttempts = r3.maxRetries;
            try {
              s2.joinAttempts += 1, s2.setupSignalClientCallbacks();
              const n2 = !o2 && Po() && !Bs();
              let u2;
              if (n2) {
                s2.pcManager || (yield s2.configure(), s2.applyInitialPublisherLayout());
                const e2 = yield (c2 = s2.pcManager) === null || c2 === undefined ? undefined : c2.publisher.createInitialOffer();
                e2 && (u2 = _c(e2.offer, e2.offerId));
              }
              if (a3 == null ? undefined : a3.aborted)
                throw qa.cancelled("Connection aborted");
              if (!o2 && s2.shouldFailOnV1Path)
                throw s2.shouldFailOnV1Path = false, qa.serviceNotFound("Simulated v1 path failure", "v0-rtc");
              const h2 = yield s2.client.join(t3, i3, r3, a3, o2, u2);
              s2._isClosed = false, s2.latestJoinResponse = h2, s2.participantSid = (d2 = h2.participant) === null || d2 === undefined ? undefined : d2.sid, s2.subscriberPrimary = h2.subscriberPrimary, n2 ? (l2 = s2.pcManager) === null || l2 === undefined || l2.updateConfiguration(s2.makeRTCConfiguration(h2)) : (s2.pcManager || (yield s2.configure(h2, !o2), o2 || s2.applyInitialPublisherLayout()), s2.subscriberPrimary && !h2.fastPublish || s2.negotiate().catch((e2) => {
                s2.log.error(e2);
              })), s2.registerOnLineListener(), s2.clientConfiguration = h2.clientConfiguration, s2.emit(e.EngineEvent.SignalConnected, h2);
              let p2 = h2.serverInfo;
              return p2 || (p2 = { version: h2.serverVersion, region: h2.serverRegion }), s2.log.info("connected to Livekit Server ".concat(Object.entries(p2).map((e2) => {
                let t4 = L(e2, 2), n3 = t4[0], i4 = t4[1];
                return "".concat(n3, ": ").concat(i4);
              }).join(", "))), { joinResponse: h2, serverInfo: p2 };
            } catch (n2) {
              if (n2 instanceof qa) {
                if (n2.reason === e.ConnectionErrorReason.ServerUnreachable) {
                  if (s2.log.warn("Couldn't connect to server, attempt ".concat(s2.joinAttempts, " of ").concat(s2.maxJoinAttempts)), s2.joinAttempts < s2.maxJoinAttempts)
                    return s2.join(t3, i3, r3, a3, o2);
                } else if (n2.reason === e.ConnectionErrorReason.ServiceNotFound)
                  return s2.log.warn("Initial connection failed: ".concat(n2.message, " – Retrying")), s2.pcManager && (s2.pcManager.onStateChange = undefined, yield s2.cleanupPeerConnections()), s2.join(t3, i3, r3, a3, true);
              }
              throw n2;
            }
          }();
        });
      }
      close() {
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.closingLock.lock();
          if (this.isClosed)
            t2();
          else
            try {
              this._isClosed = true, this.joinAttempts = 0, this.emit(e.EngineEvent.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), this.clearLostQualityTimeout(), this.cleanupLossyDataStats(), yield this.cleanupPeerConnections(), yield this.cleanupClient();
            } finally {
              t2();
            }
        });
      }
      cleanupPeerConnections() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          this.dataChannels.teardown(), yield (e2 = this.pcManager) === null || e2 === undefined ? undefined : e2.close(), this.pcManager = undefined, this.transportConnectingSince = undefined, this.reliableReceivedState.clear();
        });
      }
      cleanupLossyDataStats() {
        this.lossyChannel.stopThresholdTuning();
      }
      cleanupClient() {
        return cr(this, undefined, undefined, function* () {
          yield this.client.close(), this.client.resetCallbacks();
          for (const e2 of Object.keys(this.pendingTrackResolvers))
            this.pendingTrackResolvers[e2].reject();
          this.pendingTrackResolvers = {};
        });
      }
      addTrack(e2) {
        if (this.pendingTrackResolvers[e2.cid])
          throw new Wa("a track with the same ID has already been published");
        return new Promise((t2, n2) => {
          const i2 = Za.setTimeout(() => {
            delete this.pendingTrackResolvers[e2.cid], n2(qa.timeout("publication of local track timed out, no response from server"));
          }, 1e4);
          this.pendingTrackResolvers[e2.cid] = { resolve: (e3) => {
            Za.clearTimeout(i2), t2(e3);
          }, reject: () => {
            Za.clearTimeout(i2), n2(new Error("Cancelled publication by calling unpublish"));
          } }, this.client.sendAddTrack(e2);
        });
      }
      removeTrack(e2) {
        if (e2.track && this.pendingTrackResolvers[e2.track.id]) {
          const t2 = this.pendingTrackResolvers[e2.track.id].reject;
          t2 && t2(), delete this.pendingTrackResolvers[e2.track.id];
        }
        try {
          return this.pcManager.removeTrack(e2), true;
        } catch (n2) {
          this.log.warn("failed to remove track", { error: n2 });
        }
        return false;
      }
      updateMuteStatus(e2, t2) {
        this.client.sendMuteTrack(e2, t2);
      }
      get dataSubscriberReadyState() {
        var e2;
        return (e2 = this.dataChannelForKind(od.RELIABLE, true)) === null || e2 === undefined ? undefined : e2.readyState;
      }
      getConnectedServerAddress() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          return (e2 = this.pcManager) === null || e2 === undefined ? undefined : e2.getConnectedAddress();
        });
      }
      setRegionStrategy(e2) {
        this.regionStrategy = e2;
      }
      configure(t2, n2) {
        return cr(this, undefined, undefined, function* () {
          var i2;
          if (!this.pcManager || this.pcManager.currentState === sd.NEW) {
            if (t2) {
              this.participantSid = (i2 = t2.participant) === null || i2 === undefined ? undefined : i2.sid;
              const e2 = this.makeRTCConfiguration(t2);
              this.pcManager = new cd(n2 ? "publisher-only" : t2.subscriberPrimary ? "subscriber-primary" : "publisher-primary", this.loggerOptions, e2);
            } else {
              const e2 = this.makeRTCConfiguration();
              this.pcManager = new cd("publisher-only", this.loggerOptions, e2);
            }
            this.emit(e.EngineEvent.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (e2, t3) => {
              this.client.sendIceCandidate(e2, t3);
            }, this.pcManager.onPublisherOffer = (e2, t3) => {
              this.client.sendOffer(e2, t3);
            }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (t3, n3, i3) => cr(this, undefined, undefined, function* () {
              if (this.log.debug("primary PC state changed ".concat(t3)), t3 === sd.CONNECTING ? this.transportConnectingSince = Date.now() : this.transportConnectingSince = undefined, ["closed", "disconnected", "failed"].includes(n3) && (this.publisherConnectionPromise = undefined), t3 === sd.CONNECTED) {
                const t4 = this.pcState === qd.New;
                this.pcState = qd.Connected, t4 && this.emit(e.EngineEvent.Connected, this.latestJoinResponse);
              } else
                t3 === sd.FAILED && (this.pcState !== qd.Connected && this.pcState !== qd.Reconnecting || (this.pcState = qd.Disconnected, this.handleDisconnect("peerconnection failed", i3 === "failed" ? tt.RR_SUBSCRIBER_FAILED : tt.RR_PUBLISHER_FAILED)));
              const r2 = this.client.isDisconnected || this.client.currentState === Rc.RECONNECTING, a2 = [sd.FAILED, sd.CLOSING, sd.CLOSED].includes(t3);
              r2 && a2 && !this._isClosed && this.emit(e.EngineEvent.Offline);
            }), this.pcManager.onTrack = (t3) => {
              t3.streams.length !== 0 && this.emit(e.EngineEvent.MediaTrackAdded, t3.track, t3.streams[0], t3.receiver);
            };
          }
        });
      }
      setupSignalClientCallbacks() {
        this.client.onAnswer = (e2, t2, n2) => cr(this, undefined, undefined, function* () {
          this.pcManager && (this.log.debug("received server answer", { RTCSdpType: e2.type, sdp: e2.sdp, midToTrackId: n2 }), this.midToTrackId = n2, yield this.pcManager.setPublisherAnswer(e2, t2));
        }), this.client.onTrickle = (e2, t2) => {
          this.pcManager && (this.log.debug("got ICE candidate from peer", { candidate: e2, target: t2 }), this.pcManager.addIceCandidate(e2, t2));
        }, this.client.onOffer = (e2, t2, n2) => cr(this, undefined, undefined, function* () {
          if (this.latestRemoteOfferId = t2, !this.pcManager)
            return;
          this.midToTrackId = n2;
          const i2 = yield this.pcManager.createSubscriberAnswerFromOffer(e2, t2);
          i2 && this.client.sendAnswer(i2, t2);
        }), this.client.onLocalTrackPublished = (e2) => {
          var t2;
          if (this.log.debug("received trackPublishedResponse", { cid: e2.cid, track: (t2 = e2.track) === null || t2 === undefined ? undefined : t2.sid }), !this.pendingTrackResolvers[e2.cid])
            return void this.log.error("missing track resolver for ".concat(e2.cid), { cid: e2.cid });
          const n2 = this.pendingTrackResolvers[e2.cid].resolve;
          delete this.pendingTrackResolvers[e2.cid], n2(e2.track);
        }, this.client.onLocalTrackUnpublished = (t2) => {
          this.emit(e.EngineEvent.LocalTrackUnpublished, t2);
        }, this.client.onLocalTrackSubscribed = (t2) => {
          this.emit(e.EngineEvent.LocalTrackSubscribed, t2);
        }, this.client.onTokenRefresh = (t2) => {
          this.token = t2, this.emit(e.EngineEvent.TokenRefreshed, t2);
        }, this.client.onRemoteMuteChanged = (t2, n2) => {
          this.emit(e.EngineEvent.RemoteMute, t2, n2);
        }, this.client.onSubscribedQualityUpdate = (t2) => {
          this.emit(e.EngineEvent.SubscribedQualityUpdate, t2);
        }, this.client.onRoomMoved = (t2) => {
          var n2;
          this.participantSid = (n2 = t2.participant) === null || n2 === undefined ? undefined : n2.sid, this.latestJoinResponse && (this.latestJoinResponse.room = t2.room), this.emit(e.EngineEvent.RoomMoved, t2);
        }, this.client.onMediaSectionsRequirement = (e2) => {
          this.addMediaSections(e2.numAudios, e2.numVideos), this.negotiate();
        }, this.client.onPublishDataTrackResponse = (t2) => {
          this.emit(e.EngineEvent.PublishDataTrackResponse, t2);
        }, this.client.onUnPublishDataTrackResponse = (t2) => {
          this.emit(e.EngineEvent.UnPublishDataTrackResponse, t2);
        }, this.client.onDataTrackSubscriberHandles = (t2) => {
          this.emit(e.EngineEvent.DataTrackSubscriberHandles, t2);
        }, this.client.onClose = () => {
          this.handleDisconnect("signal", tt.RR_SIGNAL_DISCONNECTED);
        }, this.client.onLeave = (t2) => {
          switch (this.log.info("client leave request received (action=".concat(t2 == null ? undefined : t2.action, ")"), { reason: t2 == null ? undefined : t2.reason }), t2.regions && (this.log.debug("updating regions"), this.emit(e.EngineEvent.ServerRegionsReported, t2.regions)), t2.action) {
            case li.DISCONNECT:
              this.emit(e.EngineEvent.Disconnected, t2 == null ? undefined : t2.reason), this.close();
              break;
            case li.RECONNECT:
              this.fullReconnectOnNext = true, this.handleDisconnect(jd);
              break;
            case li.RESUME:
              this.handleDisconnect(jd);
          }
        };
      }
      makeRTCConfiguration(e2) {
        var t2;
        const n2 = Object.assign({}, this.rtcConfig);
        if ((((t2 = this.signalOpts) === null || t2 === undefined ? undefined : t2.e2eeEnabled) || this.frameMetadataWorker && !Go()) && jo() && (this.log.debug("E2EE - setting up transports with insertable streams"), n2.encodedInsertableStreams = true), n2.sdpSemantics = "unified-plan", n2.continualGatheringPolicy = "gather_continually", !e2)
          return n2;
        if (e2.iceServers && !n2.iceServers) {
          const t3 = [];
          e2.iceServers.forEach((e3) => {
            const n3 = { urls: e3.urls };
            e3.username && (n3.username = e3.username), e3.credential && (n3.credential = e3.credential), t3.push(n3);
          }), n2.iceServers = t3;
        }
        return e2.clientConfiguration && e2.clientConfiguration.forceRelay === $e.ENABLED && (n2.iceTransportPolicy = "relay"), n2;
      }
      applyInitialPublisherLayout() {
        this.createDataChannels(), zs() || this.addMediaSections(3, 3);
      }
      addMediaSections(e2, t2) {
        var n2, i2, r2;
        const a2 = { direction: "recvonly" };
        for (let o2 = 0;o2 < e2; o2++)
          (n2 = this.pcManager) === null || n2 === undefined || n2.addPublisherTransceiverOfKind("audio", a2);
        const s2 = ((i2 = this.pcManager) === null || i2 === undefined ? undefined : i2.mode) === "publisher-only";
        for (let o2 = 0;o2 < t2; o2++) {
          const e3 = (r2 = this.pcManager) === null || r2 === undefined ? undefined : r2.addPublisherTransceiverOfKind("video", a2);
          if (s2 && e3) {
            const t3 = xs(e3);
            this.log.debug("dependency descriptor negotiated for received video", { negotiated: t3 });
          }
        }
      }
      createDataChannels() {
        this.pcManager && this.dataChannels.createPublisherChannels(this.pcManager);
      }
      decodeDataMessage(e2) {
        return cr(this, undefined, undefined, function* () {
          return e2.data instanceof ArrayBuffer ? new Uint8Array(e2.data) : e2.data instanceof Blob ? new Uint8Array(yield e2.data.arrayBuffer()) : void this.log.error("unsupported data type", { data: e2.data });
        });
      }
      createSender(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          let i2;
          if (Ds())
            i2 = yield this.createTransceiverRTCRtpSender(e2, t2, n2);
          else {
            if (!Os())
              throw new Ka("Required webRTC APIs not supported on this device");
            this.log.warn("using add-track fallback"), i2 = yield this.createRTCRtpSender(e2.mediaStreamTrack);
          }
          return this.setupFrameMetadataSender(i2, t2), i2;
        });
      }
      createSimulcastSender(e2, t2, n2, i2) {
        return cr(this, undefined, undefined, function* () {
          let r2;
          if (Ds())
            r2 = yield this.createSimulcastTransceiverSender(e2, t2, n2, i2);
          else {
            if (!Os())
              throw new Ka("Cannot stream on this device");
            this.log.debug("using add-track fallback"), r2 = yield this.createRTCRtpSender(e2.mediaStreamTrack);
          }
          return r2 && this.setupFrameMetadataSender(r2, n2), r2;
        });
      }
      get frameMetadataWorker() {
        var e2, t2;
        return (t2 = (e2 = this.options.frameMetadata) !== null && e2 !== undefined ? e2 : this.options.packetTrailer) === null || t2 === undefined ? undefined : t2.worker;
      }
      setupFrameMetadataSender(e2) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n2, i2, r2;
        const a2 = this.frameMetadataWorker;
        if (!a2 || ((n2 = this.signalOpts) === null || n2 === undefined ? undefined : n2.e2eeEnabled))
          return;
        const s2 = (i2 = t2.frameMetadata) !== null && i2 !== undefined ? i2 : t2.packetTrailer, o2 = Qo(s2);
        if (Go())
          return void (o2 && (e2.transform = new RTCRtpScriptTransform(a2, { kind: "encode", packetTrailer: s2 })));
        if (!Jo((r2 = this.options.frameMetadata) !== null && r2 !== undefined ? r2 : this.options.packetTrailer) || !("createEncodedStreams" in e2))
          return void (o2 && this.log.warn("frame metadata transform not supported; skipping write", this.logContext));
        const c2 = e2.createEncodedStreams(), d2 = c2.readable, l2 = c2.writable;
        o2 ? a2.postMessage({ kind: "encode", data: { readableStream: d2, writableStream: l2, packetTrailer: s2 } }, [d2, l2]) : d2.pipeTo(l2);
      }
      createTransceiverRTCRtpSender(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.pcManager)
            throw new Ka("publisher is closed");
          const i2 = [];
          e2.mediaStream && i2.push(e2.mediaStream), yo(e2) && (e2.codec = t2.videoCodec);
          const r2 = { direction: "sendonly", streams: i2 };
          n2 && (r2.sendEncodings = n2);
          return (yield this.pcManager.addPublisherTransceiver(e2.mediaStreamTrack, r2)).sender;
        });
      }
      createSimulcastTransceiverSender(e2, t2, n2, i2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.pcManager)
            throw new Ka("publisher is closed");
          const r2 = { direction: "sendonly" };
          i2 && (r2.sendEncodings = i2);
          const a2 = yield this.pcManager.addPublisherTransceiver(t2.mediaStreamTrack, r2);
          if (n2.videoCodec)
            return yield e2.setSimulcastTrackSender(n2.videoCodec, a2.sender), a2.sender;
        });
      }
      createRTCRtpSender(e2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.pcManager)
            throw new Ka("publisher is closed");
          return this.pcManager.addPublisherTrack(e2);
        });
      }
      handleLocalConnectionQuality(e2) {
        if (!this.participantSid)
          return;
        const t2 = e2.updates.find((e3) => e3.participantSid === this.participantSid);
        t2 && (t2.quality === Ze.LOST ? this.scheduleLostQualityReconnect() : this.clearLostQualityTimeout());
      }
      scheduleLostQualityReconnect() {
        this.lostQualityTimeout || (this.lostQualityTimeout = Za.setTimeout(() => {
          this.lostQualityTimeout = undefined, this._isClosed || this.pcState !== qd.Connected || this.attemptingReconnect || this.hasActivePublisherSenders() && (this.log.warn("local connection quality lost while publishing, triggering full reconnect", this.logContext), this.fullReconnectOnNext = true, this.handleDisconnect("connection quality lost", tt.RR_PUBLISHER_FAILED));
        }, 1e4));
      }
      clearLostQualityTimeout() {
        this.lostQualityTimeout && (Za.clearTimeout(this.lostQualityTimeout), this.lostQualityTimeout = undefined);
      }
      hasActivePublisherSenders() {
        var e2, t2;
        return (t2 = (e2 = this.pcManager) === null || e2 === undefined ? undefined : e2.publisher.getSenders().some((e3) => !!e3.track && e3.track.readyState === "live")) !== null && t2 !== undefined && t2;
      }
      reconnect() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tt.RR_UNKNOWN;
        this.fullReconnectOnNext = true, this.handleDisconnect("reconcile", e2);
      }
      attemptReconnect(t2) {
        return cr(this, undefined, undefined, function* () {
          var i2, r2, a2;
          if (this._isClosed)
            return;
          if (this.attemptingReconnect)
            return void this.log.warn("already attempting reconnect, returning early");
          this.clearLostQualityTimeout(), ((i2 = this.clientConfiguration) === null || i2 === undefined ? undefined : i2.resumeConnection) !== $e.DISABLED && ((a2 = (r2 = this.pcManager) === null || r2 === undefined ? undefined : r2.currentState) !== null && a2 !== undefined ? a2 : sd.NEW) !== sd.NEW || (this.fullReconnectOnNext = true);
          const s2 = this.fullReconnectOnNext;
          this.fullReconnectOnNext = false;
          let o2 = false;
          try {
            this.attemptingReconnect = true, s2 ? yield this.restartConnection() : yield this.resumeConnection(t2), this.clearPendingReconnect(), o2 = true;
          } catch (n2) {
            this.reconnectAttempts += 1;
            let i3 = true;
            n2 instanceof Ka ? (this.log.debug("received unrecoverable error", { error: n2 }), i3 = false) : !s2 && n2 instanceof Xa || (this.fullReconnectOnNext = true), i3 ? this.handleDisconnect("reconnect", tt.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up")), this.emit(e.EngineEvent.Disconnected), yield this.close());
          } finally {
            this.attemptingReconnect = false, o2 && this.fullReconnectOnNext && !this._isClosed && (this.log.debug("full reconnect requested during in-progress attempt, dispatching"), this.handleDisconnect("reconnect"));
          }
        });
      }
      getNextRetryDelay(e2) {
        try {
          return this.reconnectPolicy.nextRetryDelayInMs(e2);
        } catch (n2) {
          this.log.warn("encountered error in reconnect policy", { error: n2 });
        }
        return null;
      }
      restartConnection(t2) {
        return cr(this, undefined, undefined, function* () {
          var i2, r2, a2;
          try {
            if (!this.url || !this.token)
              throw new Ka("could not reconnect, url or token not saved");
            let r3;
            this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts)), this.emit(e.EngineEvent.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
            try {
              if (!this.signalOpts)
                throw this.log.warn("attempted connection restart, without signal options present"), new Xa;
              r3 = (yield this.join(t2 != null ? t2 : this.url, this.token, this.signalOpts, undefined, !this.options.singlePeerConnection)).joinResponse;
            } catch (n2) {
              if (n2 instanceof qa && n2.reason === e.ConnectionErrorReason.NotAllowed)
                throw new Ka("could not reconnect, token might be expired");
              throw new Xa;
            }
            if (this.shouldFailNext)
              throw this.shouldFailNext = false, new Error("simulated failure");
            if (this.client.setReconnected(), this.emit(e.EngineEvent.SignalRestarted, r3), yield this.waitForPCReconnected(), this.client.currentState !== Rc.CONNECTED)
              throw new Xa("Signal connection got severed during reconnect");
            (i2 = this.regionStrategy) === null || i2 === undefined || i2.resetAttempts(), this.emit(e.EngineEvent.Restarted);
          } catch (s2) {
            const e2 = yield (r2 = this.regionStrategy) === null || r2 === undefined ? undefined : r2.getNextUrl();
            if (e2)
              return void (yield this.restartConnection(e2));
            throw (a2 = this.regionStrategy) === null || a2 === undefined || a2.resetAttempts(), s2;
          }
        });
      }
      resumeConnection(t2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.url || !this.token)
            throw new Ka("could not reconnect, url or token not saved");
          if (!this.pcManager)
            throw new Ka("publisher and subscriber connections unset");
          let n2;
          this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts)), this.emit(e.EngineEvent.Resuming);
          try {
            this.setupSignalClientCallbacks(), n2 = yield this.client.reconnect(this.url, this.token, this.participantSid, t2);
          } catch (r2) {
            let t3 = "";
            if (r2 instanceof Error && (t3 = r2.message, this.log.error(r2.message, { error: r2 })), r2 instanceof qa && r2.reason === e.ConnectionErrorReason.NotAllowed)
              throw new Ka("could not reconnect, token might be expired");
            if (r2 instanceof qa && r2.reason === e.ConnectionErrorReason.LeaveRequest)
              throw r2;
            throw new Xa(t3);
          }
          if (this.emit(e.EngineEvent.SignalResumed), n2) {
            const e2 = this.makeRTCConfiguration(n2);
            this.pcManager.updateConfiguration(e2), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = n2.serverInfo);
          } else
            this.log.warn("Did not receive reconnect response");
          if (this.shouldFailNext)
            throw this.shouldFailNext = false, new Error("simulated failure");
          if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== Rc.CONNECTED)
            throw new Xa("Signal connection got severed during reconnect");
          this.client.setReconnected();
          const i2 = this.dataChannelForKind(od.RELIABLE);
          (i2 == null ? undefined : i2.readyState) === "open" && i2.id === null && this.createDataChannels(), (n2 == null ? undefined : n2.lastMessageSeq) && this.resendReliableMessagesForResume(n2.lastMessageSeq).catch((e2) => {
            this.log.warn("failed to resend reliable messages after resume", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
          }), this.emit(e.EngineEvent.Resumed);
        });
      }
      waitForPCInitialConnection(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.pcManager)
            throw new Ka("PC manager is closed");
          yield this.pcManager.ensurePCTransportConnection(t2, e2);
        });
      }
      waitForPCReconnected() {
        return cr(this, undefined, undefined, function* () {
          this.pcState = qd.Reconnecting, this.log.debug("waiting for peer connection to reconnect");
          try {
            if (yield Ms(2000), !this.pcManager)
              throw new Ka("PC manager is closed");
            yield this.pcManager.ensurePCTransportConnection(undefined, this.peerConnectionTimeout), this.pcState = qd.Connected;
          } catch (n2) {
            throw this.pcState = qd.Disconnected, qa.internal("could not establish PC connection, ".concat(n2.message));
          }
        });
      }
      publishRpcAck(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = new Rt({ destinationIdentities: [e2], kind: Pt.RELIABLE, value: { case: "rpcAck", value: new Ft({ requestId: t2 }) } });
          yield this.sendDataPacket(n2, od.RELIABLE);
        });
      }
      sendDataPacket(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2;
          if (yield this.ensurePublisherConnected(t2), this.e2eeManager && this.e2eeManager.isDataChannelEncryptionEnabled) {
            const t3 = Ho(e2);
            if (t3) {
              const n3 = yield this.e2eeManager.encryptData(t3.toBinary());
              e2.value = { case: "encryptedPacket", value: new It({ encryptedValue: n3.payload, iv: n3.iv, keyIndex: n3.keyIndex }) };
            }
          }
          t2 === od.RELIABLE && (e2.sequence = this.reliableChannel.nextSequence());
          const r2 = e2.toBinary(), a2 = Math.min((i2 = (n2 = this.pcManager) === null || n2 === undefined ? undefined : n2.getMaxPublisherMessageSize()) !== null && i2 !== undefined ? i2 : 64000, 64000);
          if (a2 !== undefined && a2 !== 0 && r2.byteLength > a2)
            throw new Ga("cannot publish data packet larger than ".concat(a2, " bytes (got ").concat(r2.byteLength, ")"));
          t2 === od.RELIABLE ? yield this.reliableChannel.send(r2, e2.sequence) : yield this.lossyChannel.send(r2);
        });
      }
      sendDataTrackFrame(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.ensurePublisherConnected(od.DATA_TRACK_LOSSY), yield this.dataTrackChannel.send(e2);
        });
      }
      resendReliableMessagesForResume(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.ensurePublisherConnected(od.RELIABLE), yield this.reliableChannel.replay(e2);
        });
      }
      flowControlFor(e2) {
        return this.dataChannels.channelFor(e2);
      }
      waitForBufferHeadroom(e2) {
        return cr(this, undefined, undefined, function* () {
          return this.flowControlFor(e2).waitForHeadroomWithLock();
        });
      }
      ensureDataTransportConnected(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.subscriberPrimary;
          return function* () {
            var i2;
            if (!t2.pcManager)
              throw new Ka("PC manager is closed");
            const r2 = n2 ? t2.pcManager.subscriber : t2.pcManager.publisher, a2 = n2 ? "Subscriber" : "Publisher";
            if (!r2)
              throw qa.internal("".concat(a2, " connection not set"));
            let s2 = false;
            n2 || t2.dataChannelForKind(e3, n2) || (t2.createDataChannels(), s2 = true), s2 || n2 || t2.pcManager.publisher.isICEConnected || t2.pcManager.publisher.getICEConnectionState() === "checking" || (s2 = true), s2 && t2.negotiate().catch((e4) => {
              t2.log.error(e4);
            });
            const o2 = t2.dataChannelForKind(e3, n2);
            if ((o2 == null ? undefined : o2.readyState) === "open")
              return;
            const c2 = new Date().getTime() + t2.peerConnectionTimeout;
            for (;new Date().getTime() < c2; ) {
              if (r2.isICEConnected && ((i2 = t2.dataChannelForKind(e3, n2)) === null || i2 === undefined ? undefined : i2.readyState) === "open")
                return;
              yield Ms(50);
            }
            throw qa.internal("could not establish ".concat(a2, " connection, state: ").concat(r2.getICEConnectionState()));
          }();
        });
      }
      ensurePublisherConnected(e2) {
        return cr(this, undefined, undefined, function* () {
          this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e2, false)), yield this.publisherConnectionPromise;
        });
      }
      verifyTransport() {
        if (!this.pcManager)
          return false;
        const e2 = this.pcManager.currentState;
        return !![sd.CONNECTING, sd.CONNECTED].includes(e2) && (!(!this.client.ws || this.client.ws.readyState === WebSocket.CLOSED) && (!(e2 === sd.CONNECTING && this.transportConnectingSince !== undefined && Date.now() - this.transportConnectingSince > this.peerConnectionTimeout) || (this.log.warn("transport stuck in connecting state", this.logContext), false)));
      }
      negotiate() {
        return cr(this, undefined, undefined, function* () {
          return new Ca((t2, i2) => cr(this, undefined, undefined, function* () {
            if (!this.pcManager)
              return void i2(new za("PC manager is closed"));
            this.pcManager.requirePublisher(), this.pcManager.publisher.getTransceivers().length != 0 || this.dataChannels.hasPublisherChannels || this.createDataChannels();
            const r2 = new AbortController, a2 = () => {
              r2.abort(), this.log.debug("engine disconnected while negotiation was ongoing"), t2();
            };
            this.isClosed && i2(new za("cannot negotiate on closed engine")), this.on(e.EngineEvent.Closing, a2), this.on(e.EngineEvent.Restarting, a2), this.pcManager.publisher.off(zc, this.onRtpMapAvailable), this.pcManager.publisher.once(zc, this.onRtpMapAvailable);
            try {
              yield this.pcManager.negotiate(r2), t2();
            } catch (n2) {
              if (r2.signal.aborted)
                return void t2();
              n2 instanceof za && (this.fullReconnectOnNext = true), this.handleDisconnect("negotiation", tt.RR_UNKNOWN), n2 instanceof Error ? i2(n2) : i2(new Error(String(n2)));
            } finally {
              this.off(e.EngineEvent.Closing, a2), this.off(e.EngineEvent.Restarting, a2);
            }
          }));
        });
      }
      dataChannelForKind(e2, t2) {
        return this.dataChannels.getHandle(e2, t2);
      }
      sendSyncState(e2, t2, n2) {
        var i2, r2, a2, s2;
        if (!this.pcManager)
          return void this.log.warn("sync state cannot be sent without peer connection setup");
        const o2 = this.pcManager.publisher.getLocalDescription(), c2 = this.pcManager.publisher.getRemoteDescription(), d2 = (i2 = this.pcManager.subscriber) === null || i2 === undefined ? undefined : i2.getRemoteDescription(), l2 = (r2 = this.pcManager.subscriber) === null || r2 === undefined ? undefined : r2.getLocalDescription(), u2 = (s2 = (a2 = this.signalOpts) === null || a2 === undefined ? undefined : a2.autoSubscribe) === null || s2 === undefined || s2, h2 = new Array, p2 = new Array;
        e2.forEach((e3) => {
          e3.isDesired !== u2 && h2.push(e3.trackSid), e3.isEnabled || p2.push(e3.trackSid);
        }), this.client.sendSyncState(new Ii({ answer: this.pcManager.mode === "publisher-only" ? c2 ? _c({ sdp: c2.sdp, type: c2.type }) : undefined : l2 ? _c({ sdp: l2.sdp, type: l2.type }) : undefined, offer: this.pcManager.mode === "publisher-only" ? o2 ? _c({ sdp: o2.sdp, type: o2.type }) : undefined : d2 ? _c({ sdp: d2.sdp, type: d2.type }) : undefined, subscription: new $n({ trackSids: h2, subscribe: !u2, participantTracks: [] }), publishTracks: ys(t2), dataChannels: this.dataChannelsInfo(), trackSidsDisabled: p2, datachannelReceiveStates: this.reliableReceivedState.map((e3, t3) => new _i({ publisherSid: t3, lastSeq: e3 })), publishDataTracks: n2.map((e3) => new jn({ info: Tc.toProtobuf(e3) })) }));
      }
      failNext() {
        this.shouldFailNext = true;
      }
      failNextV1Path() {
        this.shouldFailOnV1Path = true;
      }
      dataChannelsInfo() {
        const e2 = [], t2 = (t3, n2) => {
          (t3 == null ? undefined : t3.id) !== undefined && t3.id !== null && e2.push(new Mi({ label: t3.label, id: t3.id, target: n2 }));
        };
        return t2(this.dataChannelForKind(od.LOSSY), On.PUBLISHER), t2(this.dataChannelForKind(od.RELIABLE), On.PUBLISHER), t2(this.dataChannelForKind(od.LOSSY, true), On.SUBSCRIBER), t2(this.dataChannelForKind(od.RELIABLE, true), On.SUBSCRIBER), e2;
      }
      clearReconnectTimeout() {
        this.reconnectTimeout && Za.clearTimeout(this.reconnectTimeout);
      }
      clearPendingReconnect() {
        this.clearReconnectTimeout(), this.reconnectAttempts = 0;
      }
      registerOnLineListener() {
        Ks() && (window.addEventListener("online", this.handleBrowserOnLine), window.addEventListener("offline", this.handleBrowserOffline));
      }
      deregisterOnLineListener() {
        Ks() && (window.removeEventListener("online", this.handleBrowserOnLine), window.removeEventListener("offline", this.handleBrowserOffline));
      }
      getTrackIdForReceiver(e2) {
        var t2;
        const n2 = (t2 = this.pcManager) === null || t2 === undefined ? undefined : t2.getMidForReceiver(e2);
        if (n2) {
          const e3 = Object.entries(this.midToTrackId).find((e4) => L(e4, 1)[0] === n2);
          if (e3)
            return e3[1];
        }
      }
    }
    function Wd(e2, t2) {
      const n2 = e2.participantIdentity ? e2.participantIdentity : t2.participantIdentity;
      e2.participantIdentity = n2, t2.participantIdentity = n2;
      const i2 = e2.destinationIdentities.length !== 0 ? e2.destinationIdentities : t2.destinationIdentities;
      e2.destinationIdentities = i2, t2.destinationIdentities = i2;
    }
    const Hd = nr(e.LoggerNames.Region), Kd = 5000;

    class zd {
      static fetchRegionSettings(e2, t2, i2) {
        return cr(this, undefined, undefined, function* () {
          const r2 = yield zd.fetchLock.lock();
          try {
            const n2 = yield fetch("".concat(function(e3) {
              return "".concat(e3.protocol.replace("ws", "http"), "//").concat(e3.host, "/settings");
            }(e2), "/regions"), { headers: { authorization: "Bearer ".concat(t2) }, signal: i2 });
            if (n2.ok) {
              const e3 = function(e4) {
                var t4;
                const n3 = e4.get("Cache-Control");
                if (n3) {
                  const e5 = (t4 = n3.match(/(?:^|[,\s])max-age=(\d+)/)) === null || t4 === undefined ? undefined : t4[1];
                  if (e5)
                    return parseInt(e5, 10);
                }
              }(n2.headers), t3 = e3 ? 1000 * e3 : Kd;
              return { regionSettings: yield n2.json(), updatedAtInMs: Date.now(), maxAgeInMs: t3 };
            }
            throw n2.status === 401 ? qa.notAllowed("Could not fetch region settings: ".concat(n2.statusText), n2.status) : qa.internal("Could not fetch region settings: ".concat(n2.statusText));
          } catch (n2) {
            throw n2 instanceof qa ? n2 : (i2 == null ? undefined : i2.aborted) ? qa.cancelled("Region fetching was aborted") : qa.serverUnreachable("Could not fetch region settings, ".concat(n2 instanceof Error ? "".concat(n2.name, ": ").concat(n2.message) : n2));
          } finally {
            r2();
          }
        });
      }
      static scheduleRefetch(t2, n2, i2) {
        return cr(this, undefined, undefined, function* () {
          const r2 = zd.settingsTimeouts.get(t2.hostname);
          clearTimeout(r2), zd.settingsTimeouts.set(t2.hostname, setTimeout(() => cr(this, undefined, undefined, function* () {
            try {
              const e2 = yield zd.fetchRegionSettings(t2, n2);
              zd.updateCachedRegionSettings(t2, n2, e2);
            } catch (r3) {
              if (r3 instanceof qa && r3.reason === e.ConnectionErrorReason.NotAllowed)
                return void Hd.debug("token is not valid, cancelling auto region refresh");
              Hd.debug("auto refetching of region settings failed", { error: r3 }), zd.scheduleRefetch(t2, n2, i2);
            }
          }), i2));
        });
      }
      static updateCachedRegionSettings(e2, t2, n2) {
        zd.cache.set(e2.hostname, n2), zd.scheduleRefetch(e2, t2, n2.maxAgeInMs);
      }
      static stopRefetch(e2) {
        const t2 = zd.settingsTimeouts.get(e2);
        t2 && (clearTimeout(t2), zd.settingsTimeouts.delete(e2));
      }
      static scheduleCleanup(e2) {
        let t2 = zd.connectionTrackers.get(e2);
        t2 && (t2.cleanupTimeout && clearTimeout(t2.cleanupTimeout), t2.cleanupTimeout = setTimeout(() => {
          const t3 = zd.connectionTrackers.get(e2);
          t3 && t3.connectionCount === 0 && (Hd.debug("stopping region refetch after disconnect delay", { hostname: e2 }), zd.stopRefetch(e2)), t3 && (t3.cleanupTimeout = undefined);
        }, 30000));
      }
      static cancelCleanup(e2) {
        const t2 = zd.connectionTrackers.get(e2);
        (t2 == null ? undefined : t2.cleanupTimeout) && (clearTimeout(t2.cleanupTimeout), t2.cleanupTimeout = undefined);
      }
      notifyConnected() {
        const e2 = this.serverUrl.hostname;
        let t2 = zd.connectionTrackers.get(e2);
        t2 || (t2 = { connectionCount: 0 }, zd.connectionTrackers.set(e2, t2)), t2.connectionCount++, zd.cancelCleanup(e2);
      }
      notifyDisconnected() {
        const e2 = this.serverUrl.hostname, t2 = zd.connectionTrackers.get(e2);
        t2 && (t2.connectionCount = Math.max(0, t2.connectionCount - 1), t2.connectionCount === 0 && zd.scheduleCleanup(e2));
      }
      constructor(e2, t2) {
        this.attemptedRegions = [], this.serverUrl = new URL(e2), this.token = t2;
      }
      updateToken(e2) {
        var t2;
        this.token = e2;
        const n2 = this.getServerUrl(), i2 = zd.cache.get(n2.hostname);
        zd.scheduleRefetch(this.serverUrl, this.token, (t2 = i2 == null ? undefined : i2.maxAgeInMs) !== null && t2 !== undefined ? t2 : Kd);
      }
      isCloud() {
        return Gs(this.serverUrl);
      }
      getServerUrl() {
        return this.serverUrl;
      }
      fetchRegionSettings(e2) {
        return cr(this, undefined, undefined, function* () {
          return zd.fetchRegionSettings(this.serverUrl, this.token, e2);
        });
      }
      getNextBestRegionUrl(e2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.isCloud())
            throw Error("region availability is only supported for LiveKit Cloud domains");
          let t2 = zd.cache.get(this.serverUrl.hostname);
          (!t2 || Date.now() - t2.updatedAtInMs > t2.maxAgeInMs) && (t2 = yield this.fetchRegionSettings(e2), zd.updateCachedRegionSettings(this.serverUrl, this.token, t2));
          const n2 = t2.regionSettings.regions.filter((e3) => !this.attemptedRegions.find((t3) => t3.url === e3.url));
          if (n2.length > 0) {
            const e3 = n2[0];
            return this.attemptedRegions.push(e3), Hd.info("switching to region: ".concat(e3.region), { region: e3.region }), e3.url;
          }
          return null;
        });
      }
      resetAttempts() {
        this.attemptedRegions = [];
      }
      setServerReportedRegions(e2) {
        zd.updateCachedRegionSettings(this.serverUrl, this.token, e2);
      }
    }
    function Gd() {
      return new CompressionStream("deflate-raw");
    }
    function Jd() {
      return new DecompressionStream("deflate-raw");
    }
    function Qd(e2, t2) {
      return cr(this, undefined, undefined, function* () {
        const n2 = new DecompressionStream("deflate-raw"), i2 = n2.writable.getWriter();
        return i2.write(e2).catch(() => {}), i2.close().catch(() => {}), Yd(n2.readable, t2);
      });
    }
    function Yd(t2, n2) {
      return cr(this, undefined, undefined, function* () {
        const i2 = t2.getReader(), r2 = [];
        let a2 = 0;
        for (;; ) {
          const t3 = yield i2.read(), s3 = t3.done, o3 = t3.value;
          if (s3)
            break;
          if (r2.push(o3), a2 += o3.byteLength, typeof n2 == "number" && a2 > n2)
            throw yield i2.cancel(), new Ya("Decompressed payload exceeds the maximum payload size of ".concat(n2, " bytes"), e.DataStreamErrorReason.PayloadTooLarge);
        }
        const s2 = new Uint8Array(a2);
        let o2 = 0;
        for (const e2 of r2)
          s2.set(e2, o2), o2 += e2.byteLength;
        return s2;
      });
    }
    zd.cache = new Map, zd.settingsTimeouts = new Map, zd.connectionTrackers = new Map, zd.fetchLock = new r;
    const Xd = 15000;

    class Zd {
      get info() {
        return this._info;
      }
      validateBytesReceived() {
        let t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if (typeof this.totalByteSize == "number" && this.totalByteSize !== 0) {
          if (t2 && this.bytesReceived < this.totalByteSize)
            throw new Ya("Not enough chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, only received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.Incomplete);
          if (this.bytesReceived > this.totalByteSize)
            throw new Ya("Extra chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.LengthExceeded);
        }
      }
      constructor(e2, t2, n2) {
        this.reader = t2, this.totalByteSize = n2, this._info = e2, this.bytesReceived = 0;
      }
    }

    class $d extends Zd {
      handleChunkReceived(e2) {
        var t2;
        this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
        const n2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : undefined;
        (t2 = this.onProgress) === null || t2 === undefined || t2.call(this, n2);
      }
      [Symbol.asyncIterator]() {
        const e2 = this.reader.getReader();
        e2.closed.catch(() => {});
        const t2 = () => {
          e2.releaseLock(), this.signal = undefined;
        };
        return { next: () => cr(this, undefined, undefined, function* () {
          var n2;
          try {
            const t3 = this.signal;
            if (t3 == null ? undefined : t3.aborted)
              throw t3.reason;
            const i2 = yield new Promise((n3, i3) => {
              if (t3) {
                const r2 = () => i3(t3.reason);
                t3.addEventListener("abort", r2, { once: true }), e2.read().then(n3, i3).finally(() => {
                  t3.removeEventListener("abort", r2);
                });
              } else
                e2.read().then(n3, i3);
            });
            return i2.done ? (this.validateBytesReceived(true), typeof this.totalByteSize == "number" && ((n2 = this.onProgress) === null || n2 === undefined || n2.call(this, 1)), { done: true, value: undefined }) : (this.handleChunkReceived(i2.value), { done: false, value: i2.value.content });
          } catch (i2) {
            throw t2(), i2;
          }
        }), return() {
          return cr(this, undefined, undefined, function* () {
            return t2(), { done: true, value: undefined };
          });
        } };
      }
      withAbortSignal(e2) {
        return this.signal = e2, this;
      }
      readAll() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return function* () {
            var n2, i2, r2, a2;
            let s2 = new Set;
            const o2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
            try {
              for (var c2, d2 = true, l2 = hr(o2);!(n2 = (c2 = yield l2.next()).done); d2 = true) {
                a2 = c2.value, d2 = false;
                const e3 = a2;
                s2.add(e3);
              }
            } catch (u2) {
              i2 = { error: u2 };
            } finally {
              try {
                d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
              } finally {
                if (i2)
                  throw i2.error;
              }
            }
            return Array.from(s2);
          }();
        });
      }
    }

    class el extends Zd {
      constructor(e2, t2, n2) {
        super(e2, t2, n2), this.receivedChunks = new Map;
      }
      handleChunkReceived(e2) {
        var t2;
        const n2 = go(e2.chunkIndex), i2 = this.receivedChunks.get(n2);
        if (i2 && i2.version > e2.version)
          return;
        this.receivedChunks.set(n2, e2), this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
        const r2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : undefined;
        (t2 = this.onProgress) === null || t2 === undefined || t2.call(this, r2);
      }
      [Symbol.asyncIterator]() {
        const t2 = this.reader.getReader();
        t2.closed.catch(() => {});
        const n2 = new TextDecoder("utf-8"), i2 = this.signal, r2 = () => {
          t2.releaseLock(), this.signal = undefined;
        };
        return { next: () => cr(this, undefined, undefined, function* () {
          var a2;
          try {
            if (i2 == null ? undefined : i2.aborted)
              throw i2.reason;
            const r3 = yield new Promise((e2, n3) => {
              if (i2) {
                const r4 = () => n3(i2.reason);
                i2.addEventListener("abort", r4, { once: true }), t2.read().then(e2, n3).finally(() => {
                  i2.removeEventListener("abort", r4);
                });
              } else
                t2.read().then(e2, n3);
            });
            if (r3.done)
              return this.validateBytesReceived(true), typeof this.totalByteSize == "number" && ((a2 = this.onProgress) === null || a2 === undefined || a2.call(this, 1)), { done: true, value: undefined };
            {
              let t3;
              this.handleChunkReceived(r3.value);
              try {
                t3 = n2.decode(r3.value.content);
              } catch (s2) {
                throw new Ya("Cannot decode datastream chunk ".concat(r3.value.chunkIndex, " as text: ").concat(s2), e.DataStreamErrorReason.DecodeFailed);
              }
              return { done: false, value: t3 };
            }
          } catch (s2) {
            throw r2(), s2;
          }
        }), return() {
          return cr(this, undefined, undefined, function* () {
            return r2(), { done: true, value: undefined };
          });
        } };
      }
      withAbortSignal(e2) {
        return this.signal = e2, this;
      }
      readAll() {
        return cr(this, arguments, undefined, function() {
          var e2 = this;
          let t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return function* () {
            var n2, i2, r2, a2;
            let s2 = "";
            const o2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
            try {
              for (var c2, d2 = true, l2 = hr(o2);!(n2 = (c2 = yield l2.next()).done); d2 = true) {
                a2 = c2.value, d2 = false;
                s2 += a2;
              }
            } catch (u2) {
              i2 = { error: u2 };
            } finally {
              try {
                d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
              } finally {
                if (i2)
                  throw i2.error;
              }
            }
            return s2;
          }();
        });
      }
    }

    class tl {
      constructor() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000000000;
        this.log = er, this.byteStreamControllers = new Map, this.textStreamControllers = new Map, this.byteStreamHandlers = new Map, this.textStreamHandlers = new Map, this.isConnected = false, this.bufferedPackets = [], this.maxPayloadByteLength = e2;
      }
      setConnected(e2) {
        this.isConnected = e2, e2 && this.flushBufferedPackets();
      }
      flushBufferedPackets() {
        const e2 = this.bufferedPackets;
        this.bufferedPackets = [];
        for (const t2 of e2) {
          const { packet: e3, encryptionType: n2 } = t2;
          this.handleDataStreamPacket(e3, n2);
        }
      }
      registerTextStreamHandler(t2, n2) {
        if (this.textStreamHandlers.has(t2))
          throw new Ya('A text stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
        this.textStreamHandlers.set(t2, n2);
      }
      unregisterTextStreamHandler(e2) {
        this.textStreamHandlers.delete(e2);
      }
      registerByteStreamHandler(t2, n2) {
        if (this.byteStreamHandlers.has(t2))
          throw new Ya('A byte stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
        this.byteStreamHandlers.set(t2, n2);
      }
      unregisterByteStreamHandler(e2) {
        this.byteStreamHandlers.delete(e2);
      }
      clearControllers() {
        this.byteStreamControllers.clear(), this.textStreamControllers.clear(), this.bufferedPackets = [];
      }
      validateParticipantHasNoActiveDataStreams(t2) {
        const n2 = Array.from(this.textStreamControllers.entries()).filter((e2) => e2[1].sendingParticipantIdentity === t2), i2 = Array.from(this.byteStreamControllers.entries()).filter((e2) => e2[1].sendingParticipantIdentity === t2);
        if (n2.length > 0 || i2.length > 0) {
          const s2 = new Ya("Participant ".concat(t2, " unexpectedly disconnected in the middle of sending data"), e.DataStreamErrorReason.AbnormalEnd);
          for (const e2 of i2) {
            var r2 = L(e2, 2);
            const t3 = r2[0];
            r2[1].controller.error(s2), this.byteStreamControllers.delete(t3);
          }
          for (const e2 of n2) {
            var a2 = L(e2, 2);
            const t3 = a2[0];
            a2[1].controller.error(s2), this.textStreamControllers.delete(t3);
          }
        }
      }
      handleDataStreamPacket(e2, t2) {
        if (this.isConnected)
          switch (e2.value.case) {
            case "streamHeader":
              return this.handleStreamHeader(e2.value.value, e2.participantIdentity, t2);
            case "streamChunk":
              return this.handleStreamChunk(e2.value.value, t2);
            case "streamTrailer":
              return this.handleStreamTrailer(e2.value.value, t2);
            default:
              throw new Error('DataPacket of value "'.concat(e2.value.case, '" is not data stream related!'));
          }
        else
          this.bufferedPackets.push({ packet: e2, encryptionType: t2 });
      }
      handleStreamHeader(t2, n2, i2) {
        var r2;
        switch (t2.contentHeader.case) {
          case "byteHeader": {
            const a2 = this.byteStreamHandlers.get(t2.topic);
            if (!a2)
              return void this.log.debug("ignoring incoming byte stream due to no handler for topic", t2.topic);
            let s2;
            const o2 = { id: t2.streamId, name: (r2 = t2.contentHeader.value.name) !== null && r2 !== undefined ? r2 : "unknown", mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : undefined, topic: t2.topic, timestamp: go(t2.timestamp), attributes: t2.attributes, encryptionType: i2 };
            let c2;
            switch (t2.compression) {
              case Zt.DEFLATE_RAW:
                if (!Po())
                  return void er.warn("Data stream ".concat(t2.streamId, " received with deflate-raw compression, but this browser does not have support for DecompressionStream. Dropping..."));
                c2 = true;
                break;
              case Zt.NONE:
                c2 = false;
                break;
              default:
                return void er.warn("Data stream ".concat(t2.streamId, " received with unknown compression type ").concat(t2.compression, ", dropping..."));
            }
            const d2 = t2.inlineContent;
            if (d2 !== undefined)
              return void a2(new $d(o2, nl(t2.streamId, c2 ? Qd(d2, this.maxPayloadByteLength) : d2), go(t2.totalLength)), { identity: n2 });
            const l2 = new ReadableStream({ start: (i3) => {
              if (s2 = i3, this.byteStreamControllers.has(t2.streamId))
                throw new Ya("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
              this.byteStreamControllers.set(t2.streamId, { info: o2, controller: s2, startTime: Date.now(), sendingParticipantIdentity: n2 });
            } });
            return void a2(new $d(o2, c2 ? function(e2, t3, n3) {
              return e2.pipeThrough(il(t3)).pipeThrough(rl()).pipeThrough(Jd()).pipeThrough(al(t3, n3)).pipeThrough(function(e3) {
                let t4 = 0;
                return new TransformStream({ transform: (n4, i3) => {
                  n4.byteLength > 0 && (i3.enqueue(new nn({ streamId: e3, chunkIndex: vo(t4), content: n4 })), t4 += 1);
                } });
              }(t3));
            }(l2, t2.streamId, this.maxPayloadByteLength) : l2, go(t2.totalLength)), { identity: n2 });
          }
          case "textHeader": {
            const r3 = this.textStreamHandlers.get(t2.topic);
            if (!r3)
              return void this.log.debug("ignoring incoming text stream due to no handler for topic", t2.topic);
            let a2;
            const s2 = { id: t2.streamId, mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : undefined, topic: t2.topic, timestamp: Number(t2.timestamp), attributes: t2.attributes, encryptionType: i2, attachedStreamIds: t2.contentHeader.value.attachedStreamIds };
            let o2;
            switch (t2.compression) {
              case Zt.DEFLATE_RAW:
                if (!Po())
                  return void er.warn("Data stream ".concat(t2.streamId, " received with deflate-raw compression, but this browser does not have support for DecompressionStream. Dropping..."));
                o2 = true;
                break;
              case Zt.NONE:
                o2 = false;
                break;
              default:
                return void er.warn("Data stream ".concat(t2.streamId, " received with unknown compression type ").concat(t2.compression, ", dropping..."));
            }
            const c2 = t2.inlineContent;
            if (c2 !== undefined) {
              const e2 = o2 ? Qd(c2, this.maxPayloadByteLength) : c2;
              return void r3(new el(s2, nl(t2.streamId, e2), go(t2.totalLength)), { identity: n2 });
            }
            const d2 = new ReadableStream({ start: (i3) => {
              if (a2 = i3, this.textStreamControllers.has(t2.streamId))
                throw new Ya("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
              this.textStreamControllers.set(t2.streamId, { info: s2, controller: a2, startTime: Date.now(), sendingParticipantIdentity: n2 });
            } });
            return void r3(new el(s2, o2 ? function(t3, n3, i3) {
              return t3.pipeThrough(il(n3)).pipeThrough(rl()).pipeThrough(Jd()).pipeThrough(al(n3, i3)).pipeThrough(function(t4) {
                const n4 = new TextDecoder("utf-8"), i4 = new TextEncoder;
                let r4 = 0;
                const a3 = (i5) => {
                  try {
                    return i5 ? n4.decode(i5, { stream: true }) : n4.decode();
                  } catch (r5) {
                    throw new Ya("Cannot decode compressed data stream ".concat(t4, " as text: ").concat(r5), e.DataStreamErrorReason.DecodeFailed);
                  }
                };
                return new TransformStream({ transform: (e2, n5) => {
                  const s3 = a3(e2);
                  s3.length > 0 && (n5.enqueue(new nn({ streamId: t4, chunkIndex: vo(r4), content: i4.encode(s3) })), r4 += 1);
                }, flush: (e2) => {
                  const n5 = a3();
                  n5.length > 0 && (e2.enqueue(new nn({ streamId: t4, chunkIndex: vo(r4), content: i4.encode(n5) })), r4 += 1);
                } });
              }(n3));
            }(d2, t2.streamId, this.maxPayloadByteLength) : d2, go(t2.totalLength)), { identity: n2 });
          }
        }
      }
      handleStreamChunk(t2, n2) {
        const i2 = this.byteStreamControllers.get(t2.streamId);
        i2 && (i2.info.encryptionType !== n2 ? (i2.controller.error(new Ya("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(i2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)), this.byteStreamControllers.delete(t2.streamId)) : t2.content.length > 0 && i2.controller.enqueue(t2));
        const r2 = this.textStreamControllers.get(t2.streamId);
        r2 && (r2.info.encryptionType !== n2 ? (r2.controller.error(new Ya("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(r2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)), this.textStreamControllers.delete(t2.streamId)) : t2.content.length > 0 && r2.controller.enqueue(t2));
      }
      handleStreamTrailer(t2, n2) {
        const i2 = this.textStreamControllers.get(t2.streamId);
        i2 && (i2.info.encryptionType !== n2 ? i2.controller.error(new Ya("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(i2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)) : (i2.info.attributes = Object.assign(Object.assign({}, i2.info.attributes), t2.attributes), t2.reason ? i2.controller.error(new Ya("Data stream ".concat(t2.streamId, " closed abnormally: ").concat(t2.reason), e.DataStreamErrorReason.AbnormalEnd)) : i2.controller.close()), this.textStreamControllers.delete(t2.streamId));
        const r2 = this.byteStreamControllers.get(t2.streamId);
        r2 && (r2.info.encryptionType !== n2 ? r2.controller.error(new Ya("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(r2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)) : (r2.info.attributes = Object.assign(Object.assign({}, r2.info.attributes), t2.attributes), t2.reason ? r2.controller.error(new Ya("Data stream ".concat(t2.streamId, " closed abnormally: ").concat(t2.reason), e.DataStreamErrorReason.AbnormalEnd)) : r2.controller.close()), this.byteStreamControllers.delete(t2.streamId));
      }
    }
    function nl(e2, t2) {
      return new ReadableStream({ start: (n2) => cr(this, undefined, undefined, function* () {
        try {
          const i2 = yield t2;
          n2.enqueue(new nn({ streamId: e2, chunkIndex: BigInt(0), content: i2 })), n2.close();
        } catch (i2) {
          n2.error(i2);
        }
      }) });
    }
    function il(t2) {
      let n2 = -1;
      return new TransformStream({ transform: (i2, r2) => {
        const a2 = go(i2.chunkIndex);
        if (a2 <= n2)
          er.warn("ignoring duplicate chunk ".concat(a2, " for compressed data stream ").concat(t2, " (last processed: ").concat(n2, ")"));
        else {
          if (a2 > n2 + 1)
            throw new Ya("Missing chunk(s) ".concat(n2 + 1, "..").concat(a2 - 1, " for compressed data stream ").concat(t2, " - cannot continue decompressing"), e.DataStreamErrorReason.Incomplete);
          n2 = a2, r2.enqueue(i2);
        }
      } });
    }
    function rl() {
      return new TransformStream({ transform: (e2, t2) => {
        t2.enqueue(e2.content);
      } });
    }
    function al(t2, n2) {
      let i2 = 0;
      return new TransformStream({ transform: (r2, a2) => {
        if (i2 += r2.byteLength, i2 > n2)
          throw new Ya("Data stream ".concat(t2, " exceeds the maximum payload size of ").concat(n2, " bytes"), e.DataStreamErrorReason.PayloadTooLarge);
        a2.enqueue(r2);
      } });
    }

    class sl {
      constructor(e2, t2, n2) {
        this.writableStream = e2, this.defaultWriter = e2.getWriter(), this.onClose = n2, this.info = t2;
      }
      write(e2) {
        return this.defaultWriter.write(e2);
      }
      close() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), (e2 = this.onClose) === null || e2 === undefined || e2.call(this);
        });
      }
    }

    class ol extends sl {
    }

    class cl extends sl {
    }
    function dl(e2, t2, n2) {
      var i2;
      return new tn({ streamId: e2.id, mimeType: e2.mimeType, topic: e2.topic, timestamp: vo(e2.timestamp), totalLength: vo(e2.size), attributes: e2.attributes, compression: (i2 = n2 == null ? undefined : n2.compression) !== null && i2 !== undefined ? i2 : Zt.NONE, inlineContent: n2 == null ? undefined : n2.inlineContent, contentHeader: { case: "textHeader", value: new $t({ version: t2 == null ? undefined : t2.version, attachedStreamIds: e2.attachedStreamIds, replyToStreamId: t2 == null ? undefined : t2.replyToStreamId, operationType: (t2 == null ? undefined : t2.type) === "update" ? Xt.UPDATE : Xt.CREATE }) } });
    }
    function ll(e2, t2) {
      var n2;
      return new tn({ streamId: e2.id, mimeType: e2.mimeType, topic: e2.topic, timestamp: vo(e2.timestamp), totalLength: vo(e2.size), attributes: e2.attributes, compression: (n2 = t2 == null ? undefined : t2.compression) !== null && n2 !== undefined ? n2 : Zt.NONE, inlineContent: t2 == null ? undefined : t2.inlineContent, contentHeader: { case: "byteHeader", value: new en({ name: e2.name }) } });
    }
    function ul(e2, t2) {
      return new Rt({ destinationIdentities: t2, value: { case: "streamHeader", value: e2 } });
    }
    const hl = new TextEncoder;

    class pl {
      constructor(e2, t2, n2, i2, r2) {
        this.engine = e2, this.log = t2, this.getRemoteParticipantClientProtocol = n2, this.getRemoteParticipantCapabilities = i2, this.getAllRemoteParticipantIdentities = r2;
      }
      setupEngine(e2) {
        this.engine = e2;
      }
      sendText(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2, a2, s2;
          const o2 = crypto.randomUUID(), c2 = hl.encode(e2), d2 = c2.byteLength, l2 = (n2 = t2 == null ? undefined : t2.compress) === null || n2 === undefined || n2;
          let u2 = { id: o2, mimeType: "text/plain", timestamp: Date.now(), topic: (i2 = t2 == null ? undefined : t2.topic) !== null && i2 !== undefined ? i2 : "", size: d2, attributes: t2 == null ? undefined : t2.attributes, encryptionType: ((r2 = this.engine.e2eeManager) === null || r2 === undefined ? undefined : r2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE };
          let h2 = l2 && Po() && this.allRecipientsSupportV2(t2 == null ? undefined : t2.destinationIdentities) && this.allRecipientsSupportCompression(t2 == null ? undefined : t2.destinationIdentities) ? ml.fromStream(Ro(c2).pipeThrough(Gd())) : null;
          if ((!(t2 == null ? undefined : t2.attachments) || t2.attachments.length === 0) && this.allRecipientsSupportV2(t2 == null ? undefined : t2.destinationIdentities)) {
            let e3 = c2, n3 = Zt.NONE;
            if (h2) {
              const t3 = yield h2.collect();
              t3.byteLength < c2.byteLength && (e3 = t3, n3 = Zt.DEFLATE_RAW);
            }
            const i3 = ul(dl(u2, undefined, { compression: n3, inlineContent: e3 }), t2 == null ? undefined : t2.destinationIdentities);
            if (i3.toBinary().byteLength <= Xd)
              return yield this.engine.sendDataPacket(i3, od.RELIABLE), (a2 = t2 == null ? undefined : t2.onProgress) === null || a2 === undefined || a2.call(t2, 1), u2;
          }
          const p2 = (s2 = t2 == null ? undefined : t2.attachments) === null || s2 === undefined ? undefined : s2.map(() => crypto.randomUUID()), m2 = p2 ? p2.length + 1 : 1, g2 = new Array(m2).fill(0), v2 = (e3, n3) => {
            var i3;
            g2[n3] = e3, (i3 = t2 == null ? undefined : t2.onProgress) === null || i3 === undefined || i3.call(t2, g2.reduce((e4, t3) => e4 + t3, 0) / m2);
          };
          if (h2) {
            u2.attachedStreamIds = p2;
            const e3 = ul(dl(u2, undefined, { compression: Zt.DEFLATE_RAW }), t2 == null ? undefined : t2.destinationIdentities);
            yield this.sendChunkedByteStream(e3, o2, t2 == null ? undefined : t2.destinationIdentities, h2.stream().pipeThrough(gl(c2.length, (e4) => v2(e4, 0)))), c2.length === 0 && v2(1, 0);
          } else {
            const n3 = yield this.streamText({ streamId: o2, totalSize: d2, destinationIdentities: t2 == null ? undefined : t2.destinationIdentities, topic: t2 == null ? undefined : t2.topic, attachedStreamIds: p2, attributes: t2 == null ? undefined : t2.attributes });
            yield n3.write(e2), v2(1, 0), yield n3.close(), u2 = n3.info;
          }
          return (t2 == null ? undefined : t2.attachments) && p2 && (yield Promise.all(t2.attachments.map((e3, n3) => cr(this, undefined, undefined, function* () {
            return this._sendFile(p2[n3], e3, { topic: t2.topic, mimeType: e3.type, destinationIdentities: t2.destinationIdentities, compress: t2.compress, onProgress: (e4) => {
              v2(e4, n3 + 1);
            } });
          })))), u2;
        });
      }
      sendBytes(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2, a2, s2, o2, c2;
          const d2 = crypto.randomUUID(), l2 = t2 == null ? undefined : t2.destinationIdentities, u2 = (n2 = t2 == null ? undefined : t2.compress) === null || n2 === undefined || n2, h2 = { id: d2, name: (i2 = t2 == null ? undefined : t2.name) !== null && i2 !== undefined ? i2 : "unknown", mimeType: (r2 = t2 == null ? undefined : t2.mimeType) !== null && r2 !== undefined ? r2 : "application/octet-stream", timestamp: Date.now(), topic: (a2 = t2 == null ? undefined : t2.topic) !== null && a2 !== undefined ? a2 : "", size: e2.byteLength, attributes: t2 == null ? undefined : t2.attributes, encryptionType: ((s2 = this.engine.e2eeManager) === null || s2 === undefined ? undefined : s2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE }, p2 = gl(e2.length, t2 == null ? undefined : t2.onProgress);
          let m2 = u2 && Po() && this.allRecipientsSupportV2(l2) && this.allRecipientsSupportCompression(l2) ? ml.fromStream(Ro(e2).pipeThrough(p2).pipeThrough(Gd())) : null;
          if (this.allRecipientsSupportV2(l2)) {
            let n3 = e2, i3 = Zt.NONE;
            if (m2) {
              const t3 = yield m2.collect();
              t3.byteLength < e2.byteLength && (n3 = t3, i3 = Zt.DEFLATE_RAW);
            }
            const r3 = ul(ll(h2, { compression: i3, inlineContent: n3 }), l2);
            if (r3.toBinary().byteLength <= Xd)
              return yield this.engine.sendDataPacket(r3, od.RELIABLE), (o2 = t2 == null ? undefined : t2.onProgress) === null || o2 === undefined || o2.call(t2, 1), h2;
          }
          const g2 = ul(ll(h2, { compression: m2 ? Zt.DEFLATE_RAW : Zt.NONE }), l2), v2 = m2 ? m2.stream() : Ro(e2).pipeThrough(p2);
          return yield this.sendChunkedByteStream(g2, d2, l2, v2), e2.length === 0 && ((c2 = t2 == null ? undefined : t2.onProgress) === null || c2 === undefined || c2.call(t2, 1)), h2;
        });
      }
      allRecipientsSupportV2(e2) {
        return (e2 && e2.length > 0 ? e2 : this.getAllRemoteParticipantIdentities()).every((e3) => this.getRemoteParticipantClientProtocol(e3) >= 2);
      }
      allRecipientsSupportCompression(e2) {
        return (e2 && e2.length > 0 ? e2 : this.getAllRemoteParticipantIdentities()).every((e3) => this.getRemoteParticipantCapabilities(e3).includes(zt.CAP_COMPRESSION_DEFLATE_RAW));
      }
      sendChunkedByteStream(e2, t2, n2, i2) {
        return cr(this, undefined, undefined, function* () {
          var r2, a2, s2, o2;
          const c2 = this.engine;
          yield vl(c2, e2);
          let d2 = 0;
          try {
            for (var l2, u2 = true, h2 = hr(function(e3, t3) {
              return ur(this, arguments, function* () {
                const n3 = e3.getReader();
                let i3 = new Uint8Array(0);
                try {
                  for (;; ) {
                    const e4 = yield lr(n3.read()), r3 = e4.done, a3 = e4.value;
                    if (r3)
                      break;
                    if (a3.byteLength === 0)
                      continue;
                    const s3 = new Uint8Array(i3.byteLength + a3.byteLength);
                    for (s3.set(i3), s3.set(a3, i3.byteLength), i3 = s3;i3.byteLength >= t3; )
                      yield yield lr(i3.slice(0, t3)), i3 = i3.slice(t3);
                  }
                  i3.byteLength > 0 && (yield yield lr(i3));
                } finally {
                  n3.releaseLock();
                }
              });
            }(i2, Xd));!(r2 = (l2 = yield h2.next()).done); u2 = true) {
              o2 = l2.value, u2 = false;
              const e3 = new Rt({ destinationIdentities: n2, value: { case: "streamChunk", value: new nn({ content: o2, streamId: t2, chunkIndex: vo(d2) }) } });
              yield c2.sendDataPacket(e3, od.RELIABLE), d2 += 1;
            }
          } catch (p2) {
            a2 = { error: p2 };
          } finally {
            try {
              u2 || r2 || !(s2 = h2.return) || (yield s2.call(h2));
            } finally {
              if (a2)
                throw a2.error;
            }
          }
          yield fl(t2, n2, c2);
        });
      }
      streamText(t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2;
          const a2 = (n2 = t2 == null ? undefined : t2.streamId) !== null && n2 !== undefined ? n2 : crypto.randomUUID(), s2 = t2 == null ? undefined : t2.destinationIdentities, o2 = { id: a2, mimeType: "text/plain", timestamp: Date.now(), topic: (i2 = t2 == null ? undefined : t2.topic) !== null && i2 !== undefined ? i2 : "", size: t2 == null ? undefined : t2.totalSize, attributes: t2 == null ? undefined : t2.attributes, encryptionType: ((r2 = this.engine.e2eeManager) === null || r2 === undefined ? undefined : r2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE, attachedStreamIds: t2 == null ? undefined : t2.attachedStreamIds }, c2 = ul(dl(o2, t2), s2);
          yield vl(this.engine, c2);
          let d2 = 0;
          const l2 = this.engine, u2 = new WritableStream({ write(e2) {
            return cr(this, undefined, undefined, function* () {
              for (const t3 of function(e3, t4) {
                const n3 = [];
                let i3 = new TextEncoder().encode(e3);
                for (;i3.length > t4; ) {
                  let e4 = t4;
                  for (;e4 > 0; ) {
                    const t5 = i3[e4];
                    if (t5 !== undefined && (192 & t5) != 128)
                      break;
                    e4--;
                  }
                  n3.push(i3.slice(0, e4)), i3 = i3.slice(e4);
                }
                return i3.length > 0 && n3.push(i3), n3;
              }(e2, Xd)) {
                const e3 = new nn({ content: t3, streamId: a2, chunkIndex: vo(d2) }), n3 = new Rt({ destinationIdentities: s2, value: { case: "streamChunk", value: e3 } });
                yield l2.sendDataPacket(n3, od.RELIABLE), d2 += 1;
              }
            });
          }, close() {
            return cr(this, undefined, undefined, function* () {
              yield fl(a2, s2, l2);
            });
          }, abort(e2) {
            console.log("Sink error:", e2);
          } });
          let h2 = () => cr(this, undefined, undefined, function* () {
            yield p2.close();
          });
          l2.once(e.EngineEvent.Closing, h2);
          const p2 = new ol(u2, o2, () => this.engine.off(e.EngineEvent.Closing, h2));
          return p2;
        });
      }
      sendFile(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = crypto.randomUUID();
          return yield this._sendFile(n2, e2, t2), { id: n2 };
        });
      }
      _sendFile(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          var i2, r2, a2, s2, o2;
          const c2 = n2 == null ? undefined : n2.destinationIdentities, d2 = ((i2 = n2 == null ? undefined : n2.compress) === null || i2 === undefined || i2) && Po() && this.allRecipientsSupportV2(c2) && this.allRecipientsSupportCompression(c2), l2 = { id: e2, name: t2.name, mimeType: (r2 = n2 == null ? undefined : n2.mimeType) !== null && r2 !== undefined ? r2 : t2.type, topic: (a2 = n2 == null ? undefined : n2.topic) !== null && a2 !== undefined ? a2 : "", timestamp: Date.now(), size: t2.size, encryptionType: ((s2 = this.engine.e2eeManager) === null || s2 === undefined ? undefined : s2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE }, u2 = ul(ll(l2, { compression: d2 ? Zt.DEFLATE_RAW : Zt.NONE }), c2), h2 = t2.stream().pipeThrough(gl(t2.size, n2 == null ? undefined : n2.onProgress)), p2 = d2 ? h2.pipeThrough(Gd()) : h2;
          return yield this.sendChunkedByteStream(u2, e2, c2, p2), t2.size === 0 && ((o2 = n2 == null ? undefined : n2.onProgress) === null || o2 === undefined || o2.call(n2, 1)), l2;
        });
      }
      streamBytes(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2, a2, s2;
          const o2 = (t2 = e2 == null ? undefined : e2.streamId) !== null && t2 !== undefined ? t2 : crypto.randomUUID(), c2 = e2 == null ? undefined : e2.destinationIdentities, d2 = { id: o2, mimeType: (n2 = e2 == null ? undefined : e2.mimeType) !== null && n2 !== undefined ? n2 : "application/octet-stream", topic: (i2 = e2 == null ? undefined : e2.topic) !== null && i2 !== undefined ? i2 : "", timestamp: Date.now(), attributes: e2 == null ? undefined : e2.attributes, size: e2 == null ? undefined : e2.totalSize, name: (a2 = e2 == null ? undefined : e2.name) !== null && a2 !== undefined ? a2 : "unknown", encryptionType: ((s2 = this.engine.e2eeManager) === null || s2 === undefined ? undefined : s2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE }, l2 = ul(ll(d2), c2);
          yield vl(this.engine, l2);
          let u2 = 0;
          const h2 = new r, p2 = this.engine, m2 = this.log, g2 = new WritableStream({ write(e3) {
            return cr(this, undefined, undefined, function* () {
              const t3 = yield h2.lock();
              let n3 = 0;
              try {
                for (;n3 < e3.byteLength; ) {
                  const t4 = e3.slice(n3, n3 + Xd), i3 = new Rt({ destinationIdentities: c2, value: { case: "streamChunk", value: new nn({ content: t4, streamId: o2, chunkIndex: vo(u2) }) } });
                  yield p2.sendDataPacket(i3, od.RELIABLE), u2 += 1, n3 += t4.byteLength;
                }
              } finally {
                t3();
              }
            });
          }, close() {
            return cr(this, undefined, undefined, function* () {
              yield fl(o2, c2, p2);
            });
          }, abort(e3) {
            m2.error("Sink error:", e3);
          } });
          return new cl(g2, d2);
        });
      }
    }

    class ml {
      constructor(e2) {
        this.state = e2;
      }
      static fromStream(e2) {
        return new ml({ type: "stream", stream: e2 });
      }
      collect() {
        return cr(this, undefined, undefined, function* () {
          switch (this.state.type) {
            case "stream":
              const e2 = yield Yd(this.state.stream);
              return this.state = { type: "collected", bytes: e2 }, e2;
            case "collected":
              return this.state.bytes;
          }
        });
      }
      stream() {
        switch (this.state.type) {
          case "stream":
            return this.state.stream;
          case "collected":
            return Ro(this.state.bytes);
        }
      }
    }
    function gl(e2, t2) {
      let n2 = 0;
      return new TransformStream({ transform(i2, r2) {
        n2 += i2.byteLength, t2 && typeof e2 == "number" && e2 > 0 && t2(Math.min(n2 / e2, 1)), r2.enqueue(i2);
      } });
    }
    function vl(t2, n2) {
      return cr(this, undefined, undefined, function* () {
        if (n2.toBinary().byteLength > Xd)
          throw new Ya("data stream header exceeds the ".concat(Xd, "-byte limit; reduce attribute size"), e.DataStreamErrorReason.HeaderTooLarge);
        yield t2.sendDataPacket(n2, od.RELIABLE);
      });
    }
    function fl(e2, t2, n2) {
      return cr(this, undefined, undefined, function* () {
        const i2 = new Rt({ destinationIdentities: t2, value: { case: "streamTrailer", value: new rn({ streamId: e2 }) } });
        yield n2.sendDataPacket(i2, od.RELIABLE);
      });
    }
    function kl(e2) {
      if (e2.length === 0) {
        return new AbortController().signal;
      }
      if (e2.length === 1)
        return e2[0];
      for (const i2 of e2)
        if (i2.aborted)
          return i2;
      const t2 = new AbortController, n2 = Array(e2.length);
      return e2.forEach((e3, i2) => {
        const r2 = () => {
          t2.abort(e3.reason), (() => {
            for (const e4 of n2)
              e4();
          })();
        };
        e3.addEventListener("abort", r2), n2[i2] = () => e3.removeEventListener("abort", r2);
      }), t2.signal;
    }
    function yl(e2) {
      const t2 = new AbortController;
      return setTimeout(() => {
        t2.abort(new DOMException("signal timed out after ".concat(e2, " ms"), "TimeoutError"));
      }, e2), t2.signal;
    }
    var bl, Tl, Sl;
    (function(e2) {
      e2[e2.TooShort = 0] = "TooShort", e2[e2.HeaderOverrun = 1] = "HeaderOverrun", e2[e2.MissingExtWords = 2] = "MissingExtWords", e2[e2.UnsupportedVersion = 3] = "UnsupportedVersion", e2[e2.InvalidHandle = 4] = "InvalidHandle", e2[e2.MalformedExt = 5] = "MalformedExt";
    })(bl || (bl = {}));

    class El extends Aa {
      constructor(e2, t2, n2) {
        super(19, e2, n2), this.name = "DataTrackDeserializeError", this.reason = t2, this.reasonName = bl[t2];
      }
      static tooShort() {
        return new El("Too short to contain a valid header", bl.TooShort);
      }
      static headerOverrun() {
        return new El("Header exceeds total packet length", bl.HeaderOverrun);
      }
      static missingExtWords() {
        return new El("Extension word indicator is missing", bl.MissingExtWords);
      }
      static unsupportedVersion(e2) {
        return new El("Unsupported version ".concat(e2), bl.UnsupportedVersion);
      }
      static invalidHandle(e2) {
        return new El("invalid track handle: ".concat(e2.message), bl.InvalidHandle, { cause: e2 });
      }
      static malformedExt(e2) {
        return new El("Extension with tag ".concat(e2, " is malformed"), bl.MalformedExt);
      }
    }
    (function(e2) {
      e2[e2.TooSmallForHeader = 0] = "TooSmallForHeader", e2[e2.TooSmallForPayload = 1] = "TooSmallForPayload";
    })(Tl || (Tl = {}));

    class Cl extends Aa {
      constructor(e2, t2, n2) {
        super(19, e2, n2), this.name = "DataTrackSerializeError", this.reason = t2, this.reasonName = Tl[t2];
      }
      static tooSmallForHeader() {
        return new Cl("Buffer cannot fit header", Tl.TooSmallForHeader);
      }
      static tooSmallForPayload() {
        return new Cl("Buffer cannot fit payload", Tl.TooSmallForPayload);
      }
    }

    class wl {
      toBinary() {
        const e2 = this.toBinaryLengthBytes(), t2 = new ArrayBuffer(e2), n2 = new DataView(t2), i2 = this.toBinaryInto(n2);
        if (e2 !== i2)
          throw new Error("".concat(this.constructor.name, ".toBinary: written bytes (").concat(i2, " bytes) not equal to allocated array buffer length (").concat(e2, " bytes)."));
        return new Uint8Array(t2);
      }
    }
    (function(e2) {
      e2[e2.UserTimestamp = 2] = "UserTimestamp", e2[e2.E2ee = 1] = "E2ee";
    })(Sl || (Sl = {}));

    class Rl extends wl {
    }

    class Pl extends Rl {
      constructor(e2) {
        super(), this.timestamp = e2;
      }
      toBinaryLengthBytes() {
        return 2 + Pl.lengthBytes;
      }
      toBinaryInto(e2) {
        let t2 = 0;
        e2.setUint8(t2, Pl.tag), t2 += 1, e2.setUint8(t2, Pl.lengthBytes), t2 += 1, e2.setBigUint64(t2, this.timestamp), t2 += 8;
        const n2 = this.toBinaryLengthBytes();
        if (t2 !== n2)
          throw new Error("DataTrackUserTimestampExtension.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
        return t2;
      }
      toJSON() {
        return { tag: Pl.tag, lengthBytes: Pl.lengthBytes, timestamp: this.timestamp };
      }
    }
    Pl.tag = Sl.UserTimestamp, Pl.lengthBytes = 8;

    class Il extends Rl {
      constructor(e2, t2) {
        super(), this.keyIndex = e2, this.iv = t2;
      }
      toBinaryLengthBytes() {
        return 2 + Il.lengthBytes;
      }
      toBinaryInto(e2) {
        let t2 = 0;
        e2.setUint8(t2, Il.tag), t2 += 1, e2.setUint8(t2, Il.lengthBytes), t2 += 1, e2.setUint8(t2, this.keyIndex), t2 += 1;
        for (let i2 = 0;i2 < this.iv.length; i2 += 1)
          e2.setUint8(t2, this.iv[i2]), t2 += 1;
        const n2 = this.toBinaryLengthBytes();
        if (t2 !== n2)
          throw new Error("DataTrackE2eeExtension.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
        return t2;
      }
      toJSON() {
        return { tag: Il.tag, lengthBytes: Il.lengthBytes, keyIndex: this.keyIndex, iv: this.iv };
      }
    }
    Il.tag = Sl.E2ee, Il.lengthBytes = 13;

    class _l extends wl {
      constructor() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(), this.userTimestamp = e2.userTimestamp, this.e2ee = e2.e2ee;
      }
      toBinaryLengthBytes() {
        let e2 = 0;
        return this.userTimestamp && (e2 += this.userTimestamp.toBinaryLengthBytes()), this.e2ee && (e2 += this.e2ee.toBinaryLengthBytes()), e2;
      }
      toBinaryInto(e2) {
        let t2 = 0;
        if (this.e2ee) {
          t2 += this.e2ee.toBinaryInto(e2);
        }
        if (this.userTimestamp) {
          t2 += this.userTimestamp.toBinaryInto(new DataView(e2.buffer, e2.byteOffset + t2));
        }
        const n2 = this.toBinaryLengthBytes();
        if (t2 !== n2)
          throw new Error("DataTrackExtensions.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
        return t2;
      }
      static fromBinary(e2) {
        const t2 = vc(e2);
        let n2, i2, r2 = 0;
        for (;t2.byteLength - r2 >= 2; ) {
          const e3 = t2.getUint8(r2);
          r2 += 1;
          const a2 = t2.getUint8(r2);
          if (r2 += 1, e3 !== 0)
            switch (e3) {
              case Sl.UserTimestamp:
                if (t2.byteLength - r2 < Pl.lengthBytes)
                  throw El.malformedExt(e3);
                n2 = new Pl(t2.getBigUint64(r2)), r2 += a2;
                break;
              case Sl.E2ee:
                if (t2.byteLength - r2 < Il.lengthBytes)
                  throw El.malformedExt(e3);
                const s2 = t2.getUint8(r2), o2 = new Uint8Array(12);
                for (let e4 = 0;e4 < o2.length; e4 += 1) {
                  let n3 = r2;
                  n3 += 1, n3 += 1 * e4, o2[e4] = t2.getUint8(n3);
                }
                i2 = new Il(s2, o2), r2 += a2;
                break;
              default:
                if (t2.byteLength - r2 < a2)
                  throw El.malformedExt(e3);
                r2 += a2;
            }
        }
        return [new _l({ userTimestamp: n2, e2ee: i2 }), t2.byteLength];
      }
      toJSON() {
        var e2, t2, n2, i2;
        return { userTimestamp: (t2 = (e2 = this.userTimestamp) === null || e2 === undefined ? undefined : e2.toJSON()) !== null && t2 !== undefined ? t2 : null, e2ee: (i2 = (n2 = this.e2ee) === null || n2 === undefined ? undefined : n2.toJSON()) !== null && i2 !== undefined ? i2 : null };
      }
    }
    const Ml = { from: (e2) => ({ payload: e2.payload, extensions: new _l({ userTimestamp: e2.userTimestamp ? new Pl(e2.userTimestamp) : undefined }) }), lossyIntoFrame(e2) {
      var t2;
      return { payload: e2.payload, userTimestamp: (t2 = e2.extensions.userTimestamp) === null || t2 === undefined ? undefined : t2.timestamp };
    } }, Dl = Symbol.for("lk.track"), Ol = Symbol.for("lk.data-track");

    class Al {
      constructor(e2, t2, n2) {
        this.trackSymbol = Dl, this.isLocal = false, this.typeSymbol = Ol, this.info = e2, this.manager = t2, this.publisherIdentity = n2.publisherIdentity;
      }
      subscribe(e2) {
        try {
          const t2 = L(this.manager.openSubscriptionStream(this.info.sid, e2 == null ? undefined : e2.signal, e2 == null ? undefined : e2.bufferSize), 2), n2 = t2[0];
          return t2[1].catch(() => {}), n2;
        } catch (t2) {
          throw t2;
        }
      }
      setPipelineOptions(e2) {
        this.manager.setPipelineOptions(this.info.sid, e2);
      }
    }

    class Nl extends wl {
      constructor(e2) {
        var t2;
        super(), this.marker = e2.marker, this.trackHandle = e2.trackHandle, this.sequence = e2.sequence, this.frameNumber = e2.frameNumber, this.timestamp = e2.timestamp, this.extensions = (t2 = e2.extensions) !== null && t2 !== undefined ? t2 : new _l;
      }
      extensionsMetrics() {
        const e2 = this.extensions.toBinaryLengthBytes(), t2 = Math.ceil((2 + e2) / 4);
        return { lengthBytes: e2, lengthWords: t2, paddingLengthBytes: 4 * t2 - 2 - e2 };
      }
      toBinaryLengthBytes() {
        const e2 = this.extensionsMetrics(), t2 = e2.lengthBytes, n2 = e2.paddingLengthBytes;
        let i2 = 12;
        return t2 > 0 && (i2 += 2 + t2 + n2), i2;
      }
      toBinaryInto(e2) {
        if (e2.byteLength < this.toBinaryLengthBytes())
          throw Cl.tooSmallForHeader();
        let t2, n2 = 0;
        switch (this.marker) {
          case Ll.Inter:
            t2 = 0;
            break;
          case Ll.Final:
            t2 = 1;
            break;
          case Ll.Start:
            t2 = 2;
            break;
          case Ll.Single:
            t2 = 3;
        }
        n2 |= t2 << 3;
        const i2 = this.extensionsMetrics(), r2 = i2.lengthBytes, a2 = i2.lengthWords, s2 = i2.paddingLengthBytes;
        r2 > 0 && (n2 |= 4);
        let o2 = 0;
        if (e2.setUint8(o2, n2), o2 += 1, e2.setUint8(o2, 0), o2 += 1, e2.setUint16(o2, this.trackHandle), o2 += 2, e2.setUint16(o2, this.sequence.value), o2 += 2, e2.setUint16(o2, this.frameNumber.value), o2 += 2, e2.setUint32(o2, this.timestamp.asTicks()), o2 += 4, r2 > 0) {
          const t3 = a2 - 1;
          e2.setUint16(o2, t3), o2 += 2;
          o2 += this.extensions.toBinaryInto(new DataView(e2.buffer, e2.byteOffset + o2));
          for (let n3 = 0;n3 < s2; n3 += 1)
            e2.setUint8(o2, 0), o2 += 1;
        }
        const c2 = this.toBinaryLengthBytes();
        if (o2 !== c2)
          throw new Error("DataTrackPacketHeader.toBinaryInto: Wrote ".concat(o2, " bytes but expected length was ").concat(c2, " bytes"));
        return c2;
      }
      static fromBinary(e2) {
        const t2 = vc(e2);
        if (t2.byteLength < 12)
          throw El.tooShort();
        let i2 = 0;
        const r2 = t2.getUint8(i2);
        i2 += 1;
        const a2 = r2 >> 5 & 7;
        if (a2 > 0)
          throw El.unsupportedVersion(a2);
        let s2;
        switch (r2 >> 3 & 3) {
          case 2:
            s2 = Ll.Start;
            break;
          case 1:
            s2 = Ll.Final;
            break;
          case 3:
            s2 = Ll.Single;
            break;
          default:
            s2 = Ll.Inter;
        }
        const o2 = (r2 >> 2 & 1) > 0;
        let c2;
        i2 += 1;
        try {
          c2 = yc.fromNumber(t2.getUint16(i2));
        } catch (n2) {
          throw n2 instanceof kc && (n2.isReason(fc.Reserved) || n2.isReason(fc.TooLarge)) ? El.invalidHandle(n2) : n2;
        }
        i2 += 2;
        const d2 = pc.u16(t2.getUint16(i2));
        i2 += 2;
        const l2 = pc.u16(t2.getUint16(i2));
        i2 += 2;
        const u2 = mc.fromRtpTicks(t2.getUint32(i2));
        i2 += 4;
        let h2 = new _l;
        if (o2) {
          if (t2.byteLength - i2 < 2)
            throw El.missingExtWords();
          let e3 = t2.getUint16(i2);
          i2 += 2;
          let n2 = 4 * (e3 + 1) - 2;
          if (i2 + n2 > t2.byteLength)
            throw El.headerOverrun();
          let r3 = new DataView(t2.buffer, t2.byteOffset + i2, n2);
          const a3 = L(_l.fromBinary(r3), 2);
          h2 = a3[0], i2 += a3[1];
        }
        return [new Nl({ marker: s2, trackHandle: c2, sequence: d2, frameNumber: l2, timestamp: u2, extensions: h2 }), i2];
      }
      toJSON() {
        return { marker: this.marker, trackHandle: this.trackHandle, sequence: this.sequence.value, frameNumber: this.frameNumber.value, timestamp: this.timestamp.asTicks(), extensions: this.extensions.toJSON() };
      }
    }
    var Ll;
    (function(e2) {
      e2[e2.Start = 0] = "Start", e2[e2.Inter = 1] = "Inter", e2[e2.Final = 2] = "Final", e2[e2.Single = 3] = "Single";
    })(Ll || (Ll = {}));

    class xl extends wl {
      constructor(e2, t2) {
        super(), this.header = e2, this.payload = t2;
      }
      toBinaryLengthBytes() {
        return this.header.toBinaryLengthBytes() + this.payload.byteLength;
      }
      toBinaryInto(e2) {
        let t2 = 0;
        if (t2 += this.header.toBinaryInto(e2), e2.byteLength - t2 < this.payload.byteLength)
          throw Cl.tooSmallForPayload();
        for (let i2 = 0;i2 < this.payload.length; i2 += 1)
          e2.setUint8(t2, this.payload[i2]), t2 += 1;
        const n2 = this.toBinaryLengthBytes();
        if (t2 !== n2)
          throw new Error("DataTrackPacket.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
        return n2;
      }
      static fromBinary(e2) {
        const t2 = vc(e2), n2 = L(Nl.fromBinary(t2), 2), i2 = n2[0], r2 = n2[1], a2 = t2.buffer.slice(t2.byteOffset + r2, t2.byteOffset + t2.byteLength);
        return [new xl(i2, new Uint8Array(a2)), t2.byteLength];
      }
      toJSON() {
        return { header: this.header.toJSON(), payload: this.payload };
      }
    }
    const Ul = nr(e.LoggerNames.DataTracks);

    class Fl extends Aa {
      constructor(e2, t2, n2, i2) {
        super(19, "Frame ".concat(n2, " dropped: ").concat(e2), i2), this.name = "DataTrackDepacketizerDropError", this.reason = t2, this.reasonName = Bl[t2], this.frameNumber = n2;
      }
      static interrupted(e2, t2) {
        return new Fl("Interrupted by the start of a new frame ".concat(t2), Bl.Interrupted, e2);
      }
      static unknownFrame(e2) {
        return new Fl("Initial packet was never received.", Bl.UnknownFrame, e2);
      }
      static bufferFull(e2) {
        return new Fl("Reorder buffer is full.", Bl.BufferFull, e2);
      }
      static incomplete(e2, t2, n2) {
        return new Fl("Not all packets received before final packet. Received ".concat(t2, " packets, expected ").concat(n2, " packets."), Bl.Incomplete, e2);
      }
    }
    var Bl, jl;
    (function(e2) {
      e2[e2.Interrupted = 0] = "Interrupted", e2[e2.UnknownFrame = 1] = "UnknownFrame", e2[e2.BufferFull = 2] = "BufferFull", e2[e2.Incomplete = 3] = "Incomplete";
    })(Bl || (Bl = {}));

    class ql {
      constructor() {
        this.partials = new Map;
      }
      push(e2, t2) {
        switch (e2.header.marker) {
          case Ll.Single:
            return this.frameFromSingle(e2, t2);
          case Ll.Start:
            return this.beginPartial(e2, t2);
          case Ll.Inter:
          case Ll.Final:
            return this.pushToPartial(e2);
        }
      }
      reset() {
        this.partials.clear();
      }
      peekOldestPartialFrameNumber() {
        const e2 = this.partials.keys().next();
        return e2.done ? null : e2.value;
      }
      frameFromSingle(e2, t2) {
        var n2;
        if (e2.header.marker !== Ll.Single)
          throw new Error("Depacketizer.frameFromSingle: packet.header.marker was not FrameMarker.Single, found ".concat(e2.header.marker, "."));
        const i2 = (n2 = t2 == null ? undefined : t2.maxPartialFrames) !== null && n2 !== undefined ? n2 : 1;
        if (this.partials.size >= i2) {
          const n3 = this.peekOldestPartialFrameNumber();
          if (typeof n3 != "number")
            throw new Error("Depacketizer.frameFromSingle: no oldest frame number found, but partials.size is ".concat(this.partials.size, "."));
          if (this.partials.delete(n3), t2 == null ? undefined : t2.throwOnInterruption)
            throw Fl.interrupted(n3, e2.header.frameNumber.value);
          Ul.warn("Data track frame ".concat(n3, " was interrupted by single-packet frame ").concat(e2.header.frameNumber.value, ", dropping."));
        }
        return { payload: e2.payload, extensions: e2.header.extensions };
      }
      beginPartial(e2, t2) {
        var n2;
        if (e2.header.marker !== Ll.Start)
          throw new Error("Depacketizer.beginPartial: packet.header.marker was not FrameMarker.Start, found ".concat(e2.header.marker, "."));
        const i2 = e2.header.sequence, r2 = e2.header.frameNumber.value, a2 = { startSequence: i2, extensions: e2.header.extensions, payloads: new Map([[i2.value, e2.payload]]) }, s2 = (n2 = t2 == null ? undefined : t2.maxPartialFrames) !== null && n2 !== undefined ? n2 : 1;
        for (;this.partials.size >= s2; ) {
          const e3 = this.peekOldestPartialFrameNumber();
          if (typeof e3 != "number")
            break;
          if (this.partials.delete(e3), t2 == null ? undefined : t2.throwOnInterruption)
            throw Fl.interrupted(e3, r2);
          Ul.warn("Data track partials full (max ".concat(s2, "), evicted oldest frame ").concat(e3, " to make room for new frame ").concat(r2, "."));
        }
        return this.partials.set(r2, a2), null;
      }
      pushToPartial(e2) {
        if (e2.header.marker !== Ll.Inter && e2.header.marker !== Ll.Final)
          throw new Error("Depacketizer.pushToPartial: packet.header.marker was not FrameMarker.Inter or FrameMarker.Final, found ".concat(e2.header.marker, "."));
        const t2 = e2.header.frameNumber.value, n2 = this.partials.get(t2);
        if (!n2)
          throw this.partials.delete(t2), Fl.unknownFrame(t2);
        if (n2.payloads.size >= ql.MAX_BUFFER_PACKETS)
          throw this.partials.delete(t2), Fl.bufferFull(t2);
        return n2.payloads.has(e2.header.sequence.value) && Ul.warn("Data track frame ".concat(t2, " received duplicate packet for sequence ").concat(e2.header.sequence.value, ", so replacing with newly received packet.")), n2.payloads.set(e2.header.sequence.value, e2.payload), e2.header.marker === Ll.Final ? this.finalize(t2, n2, e2.header.sequence.value) : null;
      }
      finalize(e2, t2, n2) {
        const i2 = t2.payloads.size;
        let r2 = 0;
        for (const c2 of t2.payloads.values())
          r2 += c2.length;
        const a2 = new Uint8Array(r2);
        let s2 = t2.startSequence.clone(), o2 = 0;
        for (;; ) {
          const i3 = t2.payloads.get(s2.value);
          if (!i3)
            break;
          t2.payloads.delete(s2.value);
          const r3 = a2.length - o2;
          if (i3.length > r3)
            throw new Error("Depacketizer.finalize: Expected at least ".concat(i3.length, " more bytes left in the payload buffer, only got ").concat(r3, " bytes."));
          if (a2.set(i3, o2), o2 += i3.length, s2.value == n2)
            return this.partials.delete(e2), { payload: a2, extensions: t2.extensions };
          s2.increment();
        }
        throw this.partials.delete(e2), Fl.incomplete(e2, i2, n2 - t2.startSequence.value + 1);
      }
    }
    ql.MAX_BUFFER_PACKETS = 128, function(e2) {
      e2[e2.Unpublished = 0] = "Unpublished", e2[e2.Timeout = 1] = "Timeout", e2[e2.Disconnected = 2] = "Disconnected", e2[e2.Cancelled = 4] = "Cancelled";
    }(jl || (jl = {}));

    class Vl extends Aa {
      constructor(e2, t2, n2) {
        super(22, e2, n2), this.name = "DataTrackSubscribeError", this.reason = t2, this.reasonName = jl[t2];
      }
      static unpublished() {
        return new Vl("The track has been unpublished and is no longer available", jl.Unpublished);
      }
      static timeout() {
        return new Vl("Request to subscribe to data track timed-out", jl.Timeout);
      }
      static disconnected() {
        return new Vl("Cannot subscribe to data track when disconnected", jl.Disconnected);
      }
      static cancelled() {
        return new Vl("Subscription to data track cancelled by caller", jl.Cancelled);
      }
    }
    const Wl = nr(e.LoggerNames.DataTracks);

    class Hl {
      constructor(e2) {
        var t2, n2;
        const i2 = e2.e2eeManager !== null;
        if (e2.info.usesE2ee !== i2)
          throw new Error("IncomingDataTrackPipeline: DataTrackInfo.usesE2ee must match presence of decryptionProvider");
        const r2 = new ql;
        this.publisherIdentity = e2.publisherIdentity, this.e2eeManager = (t2 = e2.e2eeManager) !== null && t2 !== undefined ? t2 : null, this.depacketizer = r2, this.options = (n2 = e2.pipelineOptions) !== null && n2 !== undefined ? n2 : {};
      }
      updateE2eeManager(e2) {
        this.e2eeManager = e2;
      }
      setOptions(e2) {
        this.options = e2;
      }
      processPacket(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.depacketize(e2);
          if (!t2)
            return null;
          const n2 = yield this.decryptIfNeeded(t2);
          return n2 || null;
        });
      }
      depacketize(e2) {
        let t2;
        try {
          t2 = this.depacketizer.push(e2, { throwOnInterruption: false, maxPartialFrames: this.options.maxPartialFrames });
        } catch (n2) {
          return Wl.warn("Data frame depacketize error: ".concat(n2)), null;
        }
        return t2;
      }
      decryptIfNeeded(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2, n2;
          const i2 = this.e2eeManager;
          if (!i2)
            return e2;
          const r2 = (n2 = (t2 = e2.extensions) === null || t2 === undefined ? undefined : t2.e2ee) !== null && n2 !== undefined ? n2 : null;
          if (!r2)
            return Wl.error("Missing E2EE meta"), null;
          let a2;
          try {
            a2 = yield i2.handleEncryptedData(e2.payload, r2.iv, this.publisherIdentity, r2.keyIndex);
          } catch (s2) {
            return Wl.error("Error decrypting packet: ".concat(s2)), null;
          }
          return e2.payload = a2.payload, e2;
        });
      }
    }
    const Kl = nr(e.LoggerNames.DataTracks);

    class zl extends gr.EventEmitter {
      constructor(e2) {
        var t2;
        super(), this.descriptors = new Map, this.subscriptionHandles = new Map, this.e2eeManager = (t2 = e2 == null ? undefined : e2.e2eeManager) !== null && t2 !== undefined ? t2 : null;
      }
      updateE2eeManager(e2) {
        this.e2eeManager = e2;
        for (const t2 of this.descriptors.values())
          t2.subscription.type === "active" && t2.subscription.pipeline.updateE2eeManager(e2);
      }
      setPipelineOptions(e2, t2) {
        const n2 = this.descriptors.get(e2);
        n2 ? (n2.pipelineOptions = t2, n2.subscription.type === "active" && n2.subscription.pipeline.setOptions(t2)) : Kl.warn("Unknown track ".concat(e2, ", cannot set pipeline options."));
      }
      openSubscriptionStream(e2, t2) {
        let n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16, i2 = null;
        const r2 = new lo, a2 = this.descriptors.get(e2), s2 = () => {
          t2 == null || t2.removeEventListener("abort", c2);
        }, o2 = () => {
          s2(), i2 ? a2 && this.descriptors.get(a2.info.sid) === a2 ? a2.subscription.type === "active" ? (a2.subscription.streamControllers.delete(i2), a2.subscription.streamControllers.size === 0 && this.unSubscribeRequest(a2.info.sid)) : Kl.warn("Subscription for track ".concat(e2, " is not active, skipping cancel...")) : Kl.warn("Unknown track ".concat(e2, ", skipping cancel...")) : Kl.warn("ReadableStream subscribed to ".concat(e2, " was not started."));
        }, c2 = () => {
          var e3;
          i2 && ((a2 == null ? undefined : a2.subscription.type) === "active" && a2.subscription.streamControllers.delete(i2), i2.error(Vl.cancelled()), (e3 = r2.reject) === null || e3 === undefined || e3.call(r2, Vl.cancelled()), o2());
        }, d2 = new ReadableStream({ start: (n3) => {
          i2 = n3, this.subscribeRequest(e2, t2).then(() => cr(this, undefined, undefined, function* () {
            var i3, o3, d3;
            if (!a2 || this.descriptors.get(a2.info.sid) !== a2) {
              Kl.error("Unknown track ".concat(e2));
              const t3 = Vl.disconnected();
              return n3.error(t3), void ((i3 = r2.reject) === null || i3 === undefined || i3.call(r2, t3));
            }
            if (a2.subscription.type !== "active") {
              Kl.error("Subscription for track ".concat(e2, " is not active"));
              const t3 = Vl.disconnected();
              return n3.error(t3), void ((o3 = r2.reject) === null || o3 === undefined || o3.call(r2, t3));
            }
            (t2 == null ? undefined : t2.aborted) ? c2() : (t2 == null || t2.addEventListener("abort", c2), a2.subscription.streamControllers.set(n3, s2), (d3 = r2.resolve) === null || d3 === undefined || d3.call(r2));
          })).catch((e3) => {
            var t3;
            n3.error(e3), (t3 = r2.reject) === null || t3 === undefined || t3.call(r2, e3);
          });
        }, cancel: () => {
          o2();
        } }, new CountQueuingStrategy({ highWaterMark: n2 }));
        return [d2, r2.promise];
      }
      subscribeRequest(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = this.descriptors.get(e2);
          if (!n2)
            throw new Error("Cannot subscribe to unknown track");
          const i2 = (t3, n3, i3) => cr(this, undefined, undefined, function* () {
            if (t3.subscription.type === "active")
              return;
            if (t3.subscription.type !== "pending")
              throw new Error("Descriptor for track ".concat(e2, " is not pending, found ").concat(t3.subscription.type));
            const r2 = kl([n3, i3].filter((e3) => e3 !== undefined)), a2 = new lo;
            t3.subscription.completionFuture.promise.then(() => {
              var e3;
              return (e3 = a2.resolve) === null || e3 === undefined ? undefined : e3.call(a2);
            }).catch((e3) => {
              var t4;
              return (t4 = a2.reject) === null || t4 === undefined ? undefined : t4.call(a2, e3);
            });
            const s2 = () => {
              var e3;
              t3.subscription.type === "pending" && (t3.subscription.pendingRequestCount -= 1, (i3 == null ? undefined : i3.aborted) || t3.subscription.pendingRequestCount <= 0 ? t3.subscription.cancel() : (e3 = a2.reject) === null || e3 === undefined || e3.call(a2, Vl.cancelled()));
            };
            r2.aborted && s2(), r2.addEventListener("abort", s2), yield a2.promise, r2.removeEventListener("abort", s2);
          });
          switch (n2.subscription.type) {
            case "none": {
              n2.subscription = { type: "pending", completionFuture: new lo, pendingRequestCount: 1, cancel: () => {
                var e3, t3;
                const i3 = n2.subscription;
                n2.subscription = { type: "none" }, this.emit("sfuUpdateSubscription", { sid: n2.info.sid, subscribe: false }), i3.type === "pending" && ((t3 = (e3 = i3.completionFuture).reject) === null || t3 === undefined || t3.call(e3, r2.aborted ? Vl.timeout() : Vl.cancelled()));
              } }, this.emit("sfuUpdateSubscription", { sid: e2, subscribe: true });
              const r2 = yl(1e4);
              return void (yield i2(n2, t2, r2));
            }
            case "pending":
              return n2.subscription.pendingRequestCount += 1, void (yield i2(n2, t2));
            case "active":
              return;
          }
        });
      }
      querySubscribed() {
        return cr(this, undefined, undefined, function* () {
          return Array.from(this.descriptors.values()).filter((e2) => e2.subscription.type === "active").map((e2) => [e2.info, e2.publisherIdentity]);
        });
      }
      unSubscribeRequest(e2) {
        var t2;
        const n2 = this.descriptors.get(e2);
        if (!n2)
          throw new Error("Cannot subscribe to unknown track");
        if (n2.subscription.type !== "active")
          return void Kl.warn("Unexpected descriptor state in unSubscribeRequest, expected active, found ".concat((t2 = n2.subscription) === null || t2 === undefined ? undefined : t2.type));
        this.closeStreamControllers(n2.subscription.streamControllers, e2);
        const i2 = n2.subscription;
        n2.subscription = { type: "none" }, this.subscriptionHandles.delete(i2.subcriptionHandle), this.emit("sfuUpdateSubscription", { sid: e2, subscribe: false });
      }
      closeStreamControllers(e2, t2) {
        for (const r2 of e2) {
          var n2 = L(r2, 2);
          const e3 = n2[0];
          (0, n2[1])();
          try {
            e3.close();
          } catch (i2) {
            Kl.warn("Failed to close readable stream for track ".concat(t2, ": ").concat(i2));
          }
        }
      }
      receiveSfuPublicationUpdates(e2) {
        return cr(this, undefined, undefined, function* () {
          if (e2.size === 0)
            return;
          const t2 = new Map;
          for (const r2 of e2.entries()) {
            var n2 = L(r2, 2);
            const e3 = n2[0], i3 = n2[1], a2 = new Set;
            for (const t3 of i3)
              a2.add(t3.sid), this.descriptors.has(t3.sid) || this.handleSidReassigned(e3, t3) || (yield this.handleTrackPublished(e3, t3));
            t2.set(e3, a2);
          }
          for (const e3 of t2.entries()) {
            var i2 = L(e3, 2);
            const t3 = i2[0], n3 = i2[1];
            let r2 = Array.from(this.descriptors.entries()).filter((e4) => {
              let n4 = L(e4, 2);
              return n4[0], n4[1].publisherIdentity === t3;
            }).map((e4) => L(e4, 1)[0]).filter((e4) => !n3.has(e4));
            for (const e4 of r2)
              this.handleTrackUnpublished(e4);
          }
        });
      }
      queryPublications() {
        return cr(this, undefined, undefined, function* () {
          return Array.from(this.descriptors.values()).map((e2) => e2.info);
        });
      }
      handleTrackPublished(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          if (this.descriptors.has(t2.sid))
            return void Kl.error("Existing descriptor for track ".concat(t2.sid));
          let n2 = { info: t2, publisherIdentity: e2, subscription: { type: "none" }, pipelineOptions: {} };
          this.descriptors.set(n2.info.sid, n2);
          const i2 = new Al(n2.info, this, { publisherIdentity: e2 });
          this.emit("trackPublished", { track: i2 });
        });
      }
      handleSidReassigned(e2, t2) {
        const n2 = Array.from(this.descriptors.entries()).find((n3) => {
          let i3 = L(n3, 2);
          i3[0];
          let r3 = i3[1];
          return r3.publisherIdentity === e2 && r3.info.pubHandle === t2.pubHandle;
        });
        if (!n2)
          return false;
        const i2 = L(n2, 2), r2 = i2[0], a2 = i2[1], s2 = a2.info, o2 = s2.name, c2 = s2.usesE2ee;
        if (o2 !== t2.name || c2 !== t2.usesE2ee)
          return Kl.warn("Info mismatch for ".concat(r2, ", treating as new publication")), false;
        const d2 = t2.sid;
        if (Kl.debug("SID reassigned: ".concat(r2, " -> ").concat(d2)), !this.descriptors.delete(r2))
          return false;
        switch (a2.info.sid = d2, a2.subscription.type) {
          case "none":
            break;
          case "pending":
          case "active":
            this.emit("sfuUpdateSubscription", { sid: d2, subscribe: true });
        }
        return a2.subscription.type === "active" && this.subscriptionHandles.set(a2.subscription.subcriptionHandle, d2), this.descriptors.set(d2, a2), true;
      }
      handleTrackUnpublished(e2) {
        const t2 = this.descriptors.get(e2);
        t2 ? (this.descriptors.delete(e2), t2.subscription.type === "active" && (this.closeStreamControllers(t2.subscription.streamControllers, e2), this.subscriptionHandles.delete(t2.subscription.subcriptionHandle)), this.emit("trackUnpublished", { sid: e2, publisherIdentity: t2.publisherIdentity })) : Kl.error("Unknown track ".concat(e2));
      }
      receivedSfuSubscriberHandles(e2) {
        for (const n2 of e2.entries()) {
          var t2 = L(n2, 2);
          const e3 = t2[0], i2 = t2[1];
          this.registerSubscriberHandle(e3, i2);
        }
      }
      registerSubscriberHandle(e2, t2) {
        var n2, i2;
        const r2 = this.descriptors.get(t2);
        if (r2)
          switch (r2.subscription.type) {
            case "none":
              return void Kl.warn("No subscription for ".concat(t2));
            case "active":
              return this.subscriptionHandles.delete(r2.subscription.subcriptionHandle), r2.subscription.subcriptionHandle = e2, void this.subscriptionHandles.set(e2, t2);
            case "pending": {
              Kl.debug("data track subscription activated", { sid: t2, handle: e2 });
              const a2 = new Hl({ info: r2.info, publisherIdentity: r2.publisherIdentity, e2eeManager: this.e2eeManager, pipelineOptions: r2.pipelineOptions }), s2 = r2.subscription;
              r2.subscription = { type: "active", subcriptionHandle: e2, pipeline: a2, streamControllers: new Map }, this.subscriptionHandles.set(e2, t2), (i2 = (n2 = s2.completionFuture).resolve) === null || i2 === undefined || i2.call(n2);
            }
          }
        else
          Kl.error("Unknown track ".concat(t2));
      }
      packetReceived(e2) {
        return cr(this, undefined, undefined, function* () {
          let t2;
          try {
            t2 = L(xl.fromBinary(e2), 1)[0];
          } catch (a2) {
            return void Kl.error("Failed to deserialize packet: ".concat(a2));
          }
          const n2 = this.subscriptionHandles.get(t2.header.trackHandle);
          if (!n2)
            return void Kl.warn("Unknown subscriber handle ".concat(t2.header.trackHandle));
          const i2 = this.descriptors.get(n2);
          if (!i2)
            return void Kl.error("Missing descriptor for track ".concat(n2));
          if (i2.subscription.type !== "active")
            return void Kl.warn("Received packet for track ".concat(n2, " without active subscription"));
          const r2 = yield i2.subscription.pipeline.processPacket(t2);
          if (r2)
            for (const e3 of i2.subscription.streamControllers.keys()) {
              if (e3.desiredSize !== null && e3.desiredSize <= 0) {
                Kl.warn("Cannot send frame to subscribers: readable stream is full (desiredSize is ".concat(e3.desiredSize, "). To increase this threshold, set a higher 'options.highWaterMark' when calling .subscribe()."));
                continue;
              }
              const t3 = Ml.lossyIntoFrame(r2);
              e3.enqueue(t3);
            }
        });
      }
      resendSubscriptionUpdates() {
        for (const t2 of this.descriptors) {
          var e2 = L(t2, 2);
          const n2 = e2[0];
          e2[1].subscription.type !== "none" && this.emit("sfuUpdateSubscription", { sid: n2, subscribe: true });
        }
      }
      handleRemoteParticipantDisconnected(e2) {
        var t2, n2;
        for (const i2 of this.descriptors.values())
          if (i2.publisherIdentity === e2)
            switch (i2.subscription.type) {
              case "none":
                break;
              case "pending":
                (n2 = (t2 = i2.subscription.completionFuture).reject) === null || n2 === undefined || n2.call(t2, Vl.disconnected());
                break;
              case "active":
                this.unSubscribeRequest(i2.info.sid);
            }
      }
      reset() {
        var e2, t2;
        for (const n2 of this.descriptors.values())
          this.emit("trackUnpublished", { sid: n2.info.sid, publisherIdentity: n2.publisherIdentity }), n2.subscription.type === "pending" && ((t2 = (e2 = n2.subscription.completionFuture).reject) === null || t2 === undefined || t2.call(e2, Vl.disconnected())), n2.subscription.type === "active" && this.closeStreamControllers(n2.subscription.streamControllers, n2.info.sid);
        this.descriptors.clear(), this.subscriptionHandles.clear();
      }
    }

    class Gl extends Aa {
      constructor(e2, t2, n2) {
        super(19, e2, n2), this.name = "DataTrackPacketizerError", this.reason = t2, this.reasonName = Jl[t2];
      }
      static mtuTooShort() {
        return new Gl("MTU is too short to send frame", Jl.MtuTooShort);
      }
    }
    var Jl, Ql, Yl, Xl;
    (function(e2) {
      e2[e2.MtuTooShort = 0] = "MtuTooShort";
    })(Jl || (Jl = {}));

    class Zl {
      constructor(e2, t2) {
        this.sequence = pc.u16(0), this.frameNumber = pc.u16(0), this.clock = gc.rtpStartingNow(mc.rtpRandom()), this.handle = e2, this.mtuSizeBytes = t2;
      }
      static computeFrameMarker(e2, t2) {
        return t2 <= 1 ? Ll.Single : e2 === 0 ? Ll.Start : e2 === t2 - 1 ? Ll.Final : Ll.Inter;
      }
      *packetize(e2, t2) {
        var n2;
        const i2 = this.frameNumber.getThenIncrement(), r2 = { marker: Ll.Inter, trackHandle: this.handle, sequence: pc.u16(0), frameNumber: i2, timestamp: (n2 = t2 == null ? undefined : t2.now) !== null && n2 !== undefined ? n2 : this.clock.now(), extensions: e2.extensions }, a2 = new Nl(r2).toBinaryLengthBytes();
        if (a2 >= this.mtuSizeBytes)
          throw Gl.mtuTooShort();
        const s2 = this.mtuSizeBytes - a2, o2 = Math.ceil(e2.payload.byteLength / s2);
        for (let d2 = 0, l2 = 0;l2 < e2.payload.byteLength; d2 = (c2 = [d2 + 1, l2 + s2])[0], l2 = c2[1], c2) {
          var c2;
          const t3 = this.sequence.getThenIncrement(), n3 = new Nl(Object.assign(Object.assign({}, r2), { marker: Zl.computeFrameMarker(d2, o2), sequence: t3 })), i3 = Math.min(s2, e2.payload.byteLength - l2), a3 = new Uint8Array(e2.payload.buffer, e2.payload.byteOffset + l2, i3);
          yield new xl(n3, a3);
        }
      }
    }
    (function(e2) {
      e2[e2.NotAllowed = 0] = "NotAllowed", e2[e2.DuplicateName = 1] = "DuplicateName", e2[e2.Timeout = 2] = "Timeout", e2[e2.LimitReached = 3] = "LimitReached", e2[e2.Disconnected = 4] = "Disconnected", e2[e2.Cancelled = 5] = "Cancelled", e2[e2.InvalidName = 6] = "InvalidName", e2[e2.Unknown = 7] = "Unknown";
    })(Ql || (Ql = {}));

    class $l extends Aa {
      constructor(e2, t2, n2) {
        super(21, e2, n2), this.name = "DataTrackPublishError", this.reason = t2, this.reasonName = Ql[t2], this.rawMessage = n2 == null ? undefined : n2.rawMessage;
      }
      static notAllowed(e2) {
        return new $l("Data track publishing unauthorized", Ql.NotAllowed, { rawMessage: e2 });
      }
      static duplicateName(e2) {
        return new $l("Track name already taken", Ql.DuplicateName, { rawMessage: e2 });
      }
      static invalidName(e2) {
        return new $l("Track name is invalid", Ql.InvalidName, { rawMessage: e2 });
      }
      static timeout() {
        return new $l("Publish data track timed-out. Does the LiveKit server support data tracks?", Ql.Timeout);
      }
      static limitReached(e2) {
        return new $l("Data track publication limit reached", Ql.LimitReached, { rawMessage: e2 });
      }
      static unknown(e2, t2) {
        return new $l("Received RequestResponse for publishDataTrack, but reason was unrecognised (".concat(e2, ", ").concat(t2, ")"), Ql.Unknown);
      }
      static disconnected() {
        return new $l("Room disconnected", Ql.Disconnected);
      }
      static cancelled() {
        return new $l("Publish data track cancelled by caller", Ql.Cancelled);
      }
    }
    (function(e2) {
      e2[e2.TrackUnpublished = 0] = "TrackUnpublished", e2[e2.Dropped = 1] = "Dropped";
    })(Yl || (Yl = {}));

    class eu extends Aa {
      constructor(e2, t2, n2) {
        super(22, e2, n2), this.name = "DataTrackPushFrameError", this.reason = t2, this.reasonName = Yl[t2];
      }
      static trackUnpublished() {
        return new eu("Track is no longer published", Yl.TrackUnpublished);
      }
      static dropped(e2) {
        return new eu("Frame was dropped", Yl.Dropped, { cause: e2 });
      }
    }
    (function(e2) {
      e2[e2.Packetizer = 0] = "Packetizer", e2[e2.Encryption = 1] = "Encryption";
    })(Xl || (Xl = {}));

    class tu extends Aa {
      constructor(e2, t2, n2) {
        super(21, e2, n2), this.name = "DataTrackOutgoingPipelineError", this.reason = t2, this.reasonName = Xl[t2];
      }
      static packetizer(e2) {
        return new tu("Error packetizing frame", Xl.Packetizer, { cause: e2 });
      }
      static encryption(e2) {
        return new tu("Error encrypting frame", Xl.Encryption, { cause: e2 });
      }
    }

    class nu {
      constructor(t2, n2) {
        this.trackSymbol = Dl, this.isLocal = true, this.typeSymbol = Ol, this.handle = null, this.log = er, this.flushedFuture = new lo, this.isFlushed = true, this.handleManagerReset = () => {
          var e2, t3;
          (t3 = (e2 = this.flushedFuture).resolve) === null || t3 === undefined || t3.call(e2), this.manager.off("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.off("reset", this.handleManagerReset);
        }, this.handleManagerPacketsFlushedChange = (e2) => {
          var t3, n3;
          this.isFlushed = e2.isFlushed, e2.isFlushed && ((n3 = (t3 = this.flushedFuture).resolve) === null || n3 === undefined || n3.call(t3), this.flushedFuture = new lo);
        }, this.options = t2, this.manager = n2, this.log = nr(e.LoggerNames.DataTracks), this.manager.on("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.on("reset", this.handleManagerReset);
      }
      static withExplicitHandle(e2, t2, n2) {
        const i2 = new nu(e2, t2);
        return i2.handle = n2, i2;
      }
      get info() {
        const e2 = this.descriptor;
        return (e2 == null ? undefined : e2.type) === "active" ? e2.info : undefined;
      }
      get descriptor() {
        return this.handle ? this.manager.getDescriptor(this.handle) : null;
      }
      publish(e2) {
        return cr(this, undefined, undefined, function* () {
          try {
            this.handle = yield this.manager.publishRequest(this.options, e2);
          } catch (t2) {
            throw t2;
          }
        });
      }
      isPublished() {
        var e2;
        return ((e2 = this.descriptor) === null || e2 === undefined ? undefined : e2.type) === "active" && this.descriptor.publishState !== "unpublished";
      }
      tryPush(e2) {
        if (!this.handle)
          throw eu.trackUnpublished();
        const t2 = Ml.from(e2);
        try {
          return this.manager.tryProcessAndSend(this.handle, t2);
        } catch (n2) {
          throw n2;
        }
      }
      flush() {
        return cr(this, undefined, undefined, function* () {
          if (!this.isFlushed)
            return this.flushedFuture.promise;
        });
      }
      unpublish() {
        return cr(this, undefined, undefined, function* () {
          if (this.handle)
            try {
              yield this.manager.unpublishRequest(this.handle);
            } catch (e2) {
              throw e2;
            }
          else
            er.warn('Data track "'.concat(this.options.name, '" is not published, so unpublishing has no effect.'));
        });
      }
    }

    class iu {
      constructor(e2) {
        this.e2eeManager = e2.e2eeManager, this.packetizer = new Zl(e2.info.pubHandle, iu.TRANSPORT_MTU_BYTES);
      }
      updateE2eeManager(e2) {
        this.e2eeManager = e2;
      }
      processFrame(e2) {
        return ur(this, arguments, function* () {
          const t2 = yield lr(this.encryptIfNeeded(e2));
          try {
            yield lr(yield* function(e3) {
              var t3, n2;
              return t3 = {}, i2("next"), i2("throw", function(e4) {
                throw e4;
              }), i2("return"), t3[Symbol.iterator] = function() {
                return this;
              }, t3;
              function i2(i3, r2) {
                t3[i3] = e3[i3] ? function(t4) {
                  return (n2 = !n2) ? { value: lr(e3[i3](t4)), done: false } : r2 ? r2(t4) : t4;
                } : r2;
              }
            }(hr(this.packetizer.packetize(t2))));
          } catch (n2) {
            if (n2 instanceof Gl)
              throw tu.packetizer(n2);
            throw n2;
          }
        });
      }
      encryptIfNeeded(e2) {
        return cr(this, undefined, undefined, function* () {
          if (!this.e2eeManager)
            return e2;
          let t2;
          try {
            t2 = yield this.e2eeManager.encryptData(e2.payload);
          } catch (n2) {
            throw tu.encryption(n2);
          }
          return e2.payload = t2.payload, e2.extensions.e2ee = new Il(t2.keyIndex, t2.iv), e2;
        });
      }
    }
    iu.TRANSPORT_MTU_BYTES = 16000;
    const ru = nr(e.LoggerNames.DataTracks), au = { pending: () => ({ type: "pending", completionFuture: new lo }), active: (e2, t2) => ({ type: "active", info: e2, publishState: "published", pipeline: new iu({ info: e2, e2eeManager: t2 }), unpublishingFuture: new lo }) };

    class su extends gr.EventEmitter {
      constructor(e2) {
        var t2;
        super(), this.handleAllocator = new bc, this.descriptors = new Map, this.inFlightPacketCounter = new Map, this.e2eeManager = (t2 = e2 == null ? undefined : e2.e2eeManager) !== null && t2 !== undefined ? t2 : null;
      }
      static withDescriptors(e2) {
        const t2 = new su;
        return t2.descriptors = e2, t2;
      }
      updateE2eeManager(e2) {
        this.e2eeManager = e2;
        for (const t2 of this.descriptors.values())
          t2.type === "active" && t2.pipeline.updateE2eeManager(e2);
      }
      getDescriptor(e2) {
        var t2;
        return (t2 = this.descriptors.get(e2)) !== null && t2 !== undefined ? t2 : null;
      }
      tryProcessAndSend(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2, a2, s2;
          const o2 = this.getDescriptor(e2);
          if ((o2 == null ? undefined : o2.type) !== "active")
            throw eu.trackUnpublished();
          if (o2.publishState === "unpublished")
            throw eu.trackUnpublished();
          if (o2.publishState === "republishing")
            throw eu.dropped("Data track republishing");
          try {
            try {
              for (var c2, d2 = true, l2 = hr(o2.pipeline.processFrame(t2));!(n2 = (c2 = yield l2.next()).done); d2 = true) {
                a2 = c2.value, d2 = false;
                const t3 = a2, n3 = (s2 = this.inFlightPacketCounter.get(e2)) !== null && s2 !== undefined ? s2 : 0;
                this.inFlightPacketCounter.set(e2, n3 + 1), n3 === 0 && this.emit("packetsFlushedChange", { handle: e2, isFlushed: false }), this.emit("packetAvailable", { handle: e2, bytes: t3.toBinary() });
              }
            } catch (u2) {
              i2 = { error: u2 };
            } finally {
              try {
                d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
              } finally {
                if (i2)
                  throw i2.error;
              }
            }
          } catch (h2) {
            throw eu.dropped(h2);
          }
        });
      }
      handlePacketSendComplete(e2) {
        var t2;
        let n2 = ((t2 = this.inFlightPacketCounter.get(e2)) !== null && t2 !== undefined ? t2 : 0) - 1;
        n2 < 0 && (ru.warn("OutgoingDataTrackManager.handlePacketSendComplete: inFlightPacketCounter was decremented below 0 (got ".concat(this.inFlightPacketCounter, " - resetting to 0. Were more packets send than were emitted?")), n2 = 0), this.inFlightPacketCounter.set(e2, n2), n2 === 0 && this.emit("packetsFlushedChange", { handle: e2, isFlushed: true });
      }
      publishRequest(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = this.handleAllocator.get();
          if (!n2)
            throw $l.limitReached();
          const i2 = yl(1e4), r2 = t2 ? kl([t2, i2]) : i2;
          if (this.descriptors.has(n2))
            throw new Error("Descriptor for handle already exists");
          const a2 = au.pending();
          this.descriptors.set(n2, a2);
          const s2 = () => {
            var e3, t3;
            const r3 = this.descriptors.get(n2);
            r3 ? (this.descriptors.delete(n2), this.emit("sfuUnpublishRequest", { handle: n2 }), r3.type === "pending" && ((t3 = (e3 = r3.completionFuture).reject) === null || t3 === undefined || t3.call(e3, i2.aborted ? $l.timeout() : $l.cancelled()))) : ru.warn("No descriptor for ".concat(n2));
          };
          return r2.aborted ? (s2(), a2.completionFuture.promise.then(() => n2)) : (r2.addEventListener("abort", s2), this.emit("sfuPublishRequest", { handle: n2, name: e2.name, usesE2ee: this.e2eeManager !== null }), yield a2.completionFuture.promise, r2.removeEventListener("abort", s2), this.emit("trackPublished", { track: nu.withExplicitHandle(e2, this, n2) }), n2);
        });
      }
      queryPublished() {
        return Array.from(this.descriptors.values()).filter((e2) => e2.type === "active").map((e2) => e2.info);
      }
      unpublishRequest(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.descriptors.get(e2);
          t2 ? t2.type === "active" ? (this.emit("sfuUnpublishRequest", { handle: e2 }), yield t2.unpublishingFuture.promise, this.inFlightPacketCounter.delete(e2), this.emit("trackUnpublished", { sid: t2.info.sid })) : ru.warn("Track ".concat(e2, " not active")) : ru.warn("No descriptor for ".concat(e2));
        });
      }
      receivedSfuPublishResponse(e2, t2) {
        var n2, i2, r2, a2;
        const s2 = this.descriptors.get(e2);
        if (s2)
          switch (this.descriptors.delete(e2), s2.type) {
            case "pending":
              if (t2.type === "ok") {
                const r3 = t2.data;
                ru.debug("SFU accepted publish request for handle ".concat(e2), { sid: r3.sid });
                const a3 = r3.usesE2ee ? this.e2eeManager : null;
                this.descriptors.set(r3.pubHandle, au.active(r3, a3)), (i2 = (n2 = s2.completionFuture).resolve) === null || i2 === undefined || i2.call(n2);
              } else
                ru.debug("SFU rejected publish request for handle ".concat(e2), { error: t2.error }), (a2 = (r2 = s2.completionFuture).reject) === null || a2 === undefined || a2.call(r2, t2.error);
              return;
            case "active":
              if (s2.publishState !== "republishing")
                return void ru.warn("Track ".concat(e2, " already active"));
              if (t2.type === "error")
                return void ru.warn("Republish failed for track ".concat(e2));
              ru.debug("Track ".concat(e2, " republished")), s2.info.sid = t2.data.sid, s2.publishState = "published", this.descriptors.set(s2.info.pubHandle, s2);
          }
        else
          ru.warn("No descriptor for ".concat(e2));
      }
      receivedSfuUnpublishResponse(e2) {
        var t2, n2;
        const i2 = this.descriptors.get(e2);
        i2 ? (this.descriptors.delete(e2), i2.type === "active" ? (i2.publishState = "unpublished", (n2 = (t2 = i2.unpublishingFuture).resolve) === null || n2 === undefined || n2.call(t2)) : ru.warn("Track ".concat(e2, " not active"))) : ru.warn("No descriptor for ".concat(e2));
      }
      sfuWillRepublishTracks() {
        var e2, t2;
        for (const i2 of this.descriptors.entries()) {
          var n2 = L(i2, 2);
          const r2 = n2[0], a2 = n2[1];
          switch (a2.type) {
            case "pending":
              this.descriptors.delete(r2), (t2 = (e2 = a2.completionFuture).reject) === null || t2 === undefined || t2.call(e2, $l.disconnected());
              break;
            case "active":
              a2.publishState = "republishing", this.emit("sfuPublishRequest", { handle: a2.info.pubHandle, name: a2.info.name, usesE2ee: a2.info.usesE2ee });
          }
        }
      }
      reset() {
        return cr(this, undefined, undefined, function* () {
          var e2, t2, n2, i2;
          this.handleAllocator.reset();
          for (const r2 of this.descriptors.values())
            switch (r2.type) {
              case "pending":
                (t2 = (e2 = r2.completionFuture).reject) === null || t2 === undefined || t2.call(e2, $l.disconnected());
                break;
              case "active":
                (i2 = (n2 = r2.unpublishingFuture).resolve) === null || i2 === undefined || i2.call(n2), yield this.unpublishRequest(r2.info.pubHandle);
            }
          this.descriptors.clear(), this.inFlightPacketCounter.clear(), this.emit("reset");
        });
      }
    }

    class ou extends Error {
      constructor(e2, t2, n2, i2) {
        super(t2), this.code = e2, this.message = hu(t2, ou.MAX_MESSAGE_BYTES), this.data = n2 ? hu(n2, ou.MAX_DATA_BYTES) : undefined, (i2 == null ? undefined : i2.cause) !== undefined && (this.cause = i2 == null ? undefined : i2.cause);
      }
      static fromProto(e2) {
        return new ou(e2.code, e2.message, e2.data);
      }
      toProto() {
        return new jt({ code: this.code, message: this.message, data: this.data });
      }
      static builtIn(e2, t2, n2) {
        return new ou(ou.ErrorCode[e2], ou.ErrorMessage[e2], t2, n2);
      }
    }
    ou.MAX_MESSAGE_BYTES = 256, ou.MAX_DATA_BYTES = 15360, ou.ErrorCode = { APPLICATION_ERROR: 1500, CONNECTION_TIMEOUT: 1501, RESPONSE_TIMEOUT: 1502, RECIPIENT_DISCONNECTED: 1503, RESPONSE_PAYLOAD_TOO_LARGE: 1504, SEND_FAILED: 1505, UNSUPPORTED_METHOD: 1400, RECIPIENT_NOT_FOUND: 1401, REQUEST_PAYLOAD_TOO_LARGE: 1402, UNSUPPORTED_SERVER: 1403, UNSUPPORTED_VERSION: 1404 }, ou.ErrorMessage = { APPLICATION_ERROR: "Application error in method handler", CONNECTION_TIMEOUT: "Connection timeout", RESPONSE_TIMEOUT: "Response timeout", RECIPIENT_DISCONNECTED: "Recipient disconnected", RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large", SEND_FAILED: "Failed to send", UNSUPPORTED_METHOD: "Method not supported at destination", RECIPIENT_NOT_FOUND: "Recipient not found", REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large", UNSUPPORTED_SERVER: "RPC not supported by server", UNSUPPORTED_VERSION: "Unsupported RPC version" };
    const cu = "lk.rpc_request", du = "lk.rpc_response";
    var lu;
    (function(e2) {
      e2.RPC_REQUEST_ID = "lk.rpc_request_id", e2.RPC_REQUEST_METHOD = "lk.rpc_request_method", e2.RPC_REQUEST_RESPONSE_TIMEOUT_MS = "lk.rpc_request_response_timeout_ms", e2.RPC_REQUEST_VERSION = "lk.rpc_request_version";
    })(lu || (lu = {}));
    function uu(e2) {
      return new TextEncoder().encode(e2).length;
    }
    function hu(e2, t2) {
      if (uu(e2) <= t2)
        return e2;
      let n2 = 0, i2 = e2.length;
      const r2 = new TextEncoder;
      for (;n2 < i2; ) {
        const a2 = Math.floor((n2 + i2 + 1) / 2);
        r2.encode(e2.slice(0, a2)).length <= t2 ? n2 = a2 : i2 = a2 - 1;
      }
      return e2.slice(0, n2);
    }

    class pu extends gr.EventEmitter {
      constructor(e2, t2, n2, i2) {
        super(), this.pendingAcks = new Map, this.pendingResponses = new Map, this.log = e2, this.outgoingDataStreamManager = t2, this.getRemoteParticipantClientProtocol = n2, this.getServerVersion = i2;
      }
      performRpc(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let { destinationIdentity: n2, method: i2, payload: r2, responseTimeout: a2 } = e3, s2 = a2 === undefined ? 15000 : a2;
          return function* () {
            const e4 = t2.getRemoteParticipantClientProtocol(n2);
            if (uu(r2) > 15360 && e4 < 1)
              throw ou.builtIn("REQUEST_PAYLOAD_TOO_LARGE");
            const a3 = t2.getServerVersion();
            if (a3 && Zs(a3, "1.8.0") < 0)
              throw ou.builtIn("UNSUPPORTED_SERVER");
            const o2 = Math.max(s2, 8000), c2 = crypto.randomUUID(), d2 = new lo;
            let l2 = null;
            const u2 = setTimeout(() => {
              var e5;
              t2.pendingAcks.delete(c2), (e5 = d2.reject) === null || e5 === undefined || e5.call(d2, ou.builtIn("CONNECTION_TIMEOUT")), t2.pendingResponses.delete(c2), l2 !== null && clearTimeout(l2);
            }, 7000);
            t2.pendingAcks.set(c2, { resolve: () => {
              clearTimeout(u2);
            }, participantIdentity: n2 }), t2.pendingResponses.set(c2, { completionFuture: d2, participantIdentity: n2 }), yield t2.publishRpcRequest(n2, c2, i2, r2, o2, e4), l2 = setTimeout(() => {
              var e5;
              t2.pendingResponses.delete(c2), (e5 = d2.reject) === null || e5 === undefined || e5.call(d2, ou.builtIn("RESPONSE_TIMEOUT"));
            }, s2);
            const h2 = d2.promise.finally(() => {
              clearTimeout(l2), t2.pendingAcks.has(c2) && (t2.log.warn("RPC response received before ack", c2), t2.pendingAcks.delete(c2), clearTimeout(u2));
            });
            return [c2, h2];
          }();
        });
      }
      publishRpcRequest(e2, t2, n2, i2, r2, a2) {
        return cr(this, undefined, undefined, function* () {
          a2 >= 1 ? yield this.outgoingDataStreamManager.sendText(i2, { topic: cu, destinationIdentities: [e2], attributes: { [lu.RPC_REQUEST_ID]: t2, [lu.RPC_REQUEST_METHOD]: n2, [lu.RPC_REQUEST_RESPONSE_TIMEOUT_MS]: "".concat(r2), [lu.RPC_REQUEST_VERSION]: "".concat(2) } }) : this.emit("sendDataPacket", { packet: new Rt({ destinationIdentities: [e2], kind: Pt.RELIABLE, value: { case: "rpcRequest", value: new Ut({ id: t2, method: n2, payload: i2, responseTimeoutMs: r2, version: 1 }) } }) });
        });
      }
      handleIncomingDataStream(e2, t2, i2) {
        return cr(this, undefined, undefined, function* () {
          const r2 = i2[lu.RPC_REQUEST_ID];
          if (!r2)
            return void this.log.warn("RPC data stream malformed: ".concat(lu.RPC_REQUEST_ID, " not set."));
          const a2 = this.pendingResponses.get(r2);
          if (a2 && a2.participantIdentity !== t2)
            return void this.log.warn("RPC response stream for ".concat(r2, " arrived from unexpected sender ").concat(t2, ", expected ").concat(a2.participantIdentity, ". Ignoring."));
          let s2;
          try {
            s2 = yield e2.readAll();
          } catch (n2) {
            return this.log.warn("Error reading RPC response payload: ".concat(n2)), void this.handleIncomingRpcResponseFailure(r2, ou.builtIn("APPLICATION_ERROR", "Error reading RPC response payload", { cause: n2 }));
          }
          this.handleIncomingRpcResponseSuccess(r2, s2);
        });
      }
      handleIncomingRpcResponseSuccess(e2, t2) {
        var n2, i2;
        const r2 = this.pendingResponses.get(e2);
        r2 ? ((i2 = (n2 = r2.completionFuture).resolve) === null || i2 === undefined || i2.call(n2, t2), this.pendingResponses.delete(e2)) : this.log.error("Response received for unexpected RPC request", e2);
      }
      handleIncomingRpcResponseFailure(e2, t2) {
        var n2, i2;
        const r2 = this.pendingResponses.get(e2);
        r2 ? ((i2 = (n2 = r2.completionFuture).reject) === null || i2 === undefined || i2.call(n2, t2), this.pendingResponses.delete(e2)) : this.log.error("Response received for unexpected RPC request", e2);
      }
      handleIncomingRpcAck(e2) {
        const t2 = this.pendingAcks.get(e2);
        t2 ? (t2.resolve(), this.pendingAcks.delete(e2)) : this.log.error("Ack received for unexpected RPC request: ".concat(e2));
      }
      handleParticipantDisconnected(e2) {
        var t2;
        for (const a2 of this.pendingAcks) {
          var n2 = L(a2, 2);
          const t3 = n2[0];
          n2[1].participantIdentity === e2 && this.pendingAcks.delete(t3);
        }
        for (const a2 of this.pendingResponses) {
          var i2 = L(a2, 2);
          const n3 = i2[0];
          var r2 = i2[1];
          const { participantIdentity: s2, completionFuture: o2 } = r2;
          s2 === e2 && ((t2 = o2.reject) === null || t2 === undefined || t2.call(o2, ou.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(n3));
        }
      }
    }

    class mu extends gr.EventEmitter {
      constructor(e2, t2, n2) {
        super(), this.rpcHandlers = new Map, this.log = e2, this.outgoingDataStreamManager = t2, this.getRemoteParticipantClientProtocol = n2;
      }
      registerRpcMethod(e2, t2) {
        if (this.rpcHandlers.has(e2))
          throw Error("RPC handler already registered for method ".concat(e2, ", unregisterRpcMethod before trying to register again"));
        this.rpcHandlers.set(e2, t2);
      }
      unregisterRpcMethod(e2) {
        this.rpcHandlers.delete(e2);
      }
      handleIncomingRpcRequest(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          var n2;
          if (this.publishRpcAck(e2, t2.id), t2.version !== 1)
            return void this.publishRpcResponsePacket(e2, t2.id, null, ou.builtIn("UNSUPPORTED_VERSION"));
          const i2 = this.rpcHandlers.get(t2.method);
          if (!i2)
            return void this.publishRpcResponsePacket(e2, t2.id, null, ou.builtIn("UNSUPPORTED_METHOD"));
          let r2;
          try {
            r2 = yield i2({ requestId: t2.id, callerIdentity: e2, payload: t2.payload, responseTimeout: t2.responseTimeoutMs });
          } catch (a2) {
            let i3;
            return a2 instanceof ou ? i3 = a2 : (this.log.warn("Uncaught error returned by RPC handler for ".concat(t2.method, ". Returning APPLICATION_ERROR instead."), a2), i3 = ou.builtIn("APPLICATION_ERROR", "Uncaught error: ".concat((n2 = a2 == null ? undefined : a2.message) !== null && n2 !== undefined ? n2 : a2), { cause: a2 })), void this.publishRpcResponsePacket(e2, t2.id, null, i3);
          }
          yield this.publishRpcResponse(e2, t2.id, r2 != null ? r2 : "");
        });
      }
      handleIncomingDataStream(e2, t2, i2) {
        return cr(this, undefined, undefined, function* () {
          const r2 = i2[lu.RPC_REQUEST_ID], a2 = i2[lu.RPC_REQUEST_METHOD], s2 = parseInt(i2[lu.RPC_REQUEST_RESPONSE_TIMEOUT_MS], 10), o2 = parseInt(i2[lu.RPC_REQUEST_VERSION], 10);
          if (!r2 || !a2 || Number.isNaN(s2) || Number.isNaN(o2))
            return this.log.warn("RPC data stream malformed: ".concat(lu.RPC_REQUEST_ID, " / ").concat(lu.RPC_REQUEST_METHOD, " / ").concat(lu.RPC_REQUEST_RESPONSE_TIMEOUT_MS, " / ").concat(lu.RPC_REQUEST_VERSION, " not set.")), void this.publishRpcResponsePacket(t2, r2, null, ou.builtIn("APPLICATION_ERROR", "RPC data stream malformed"));
          if (this.publishRpcAck(t2, r2), o2 !== 2)
            return void this.publishRpcResponsePacket(t2, r2, null, ou.builtIn("UNSUPPORTED_VERSION"));
          let c2;
          try {
            c2 = yield e2.readAll();
          } catch (n2) {
            return this.log.warn("Error reading RPC request payload: ".concat(n2)), void this.publishRpcResponsePacket(t2, r2, null, ou.builtIn("APPLICATION_ERROR", "Error reading RPC request payload", { cause: n2 }));
          }
          const d2 = this.rpcHandlers.get(a2);
          if (!d2)
            return void this.publishRpcResponsePacket(t2, r2, null, ou.builtIn("UNSUPPORTED_METHOD"));
          let l2;
          try {
            l2 = yield d2({ requestId: r2, callerIdentity: t2, payload: c2, responseTimeout: s2 });
          } catch (u2) {
            let e3;
            return u2 instanceof ou ? e3 = u2 : (this.log.warn("Uncaught error returned by RPC handler for ".concat(a2, ". Returning APPLICATION_ERROR instead."), u2), e3 = ou.builtIn("APPLICATION_ERROR")), void this.publishRpcResponsePacket(t2, r2, null, e3);
          }
          yield this.publishRpcResponse(t2, r2, l2 != null ? l2 : "");
        });
      }
      publishRpcAck(e2, t2) {
        this.emit("sendDataPacket", { packet: new Rt({ destinationIdentities: [e2], kind: Pt.RELIABLE, value: { case: "rpcAck", value: new Ft({ requestId: t2 }) } }) });
      }
      publishRpcResponsePacket(e2, t2, n2, i2) {
        this.emit("sendDataPacket", { packet: new Rt({ destinationIdentities: [e2], kind: Pt.RELIABLE, value: { case: "rpcResponse", value: new Bt({ requestId: t2, value: i2 ? { case: "error", value: i2.toProto() } : { case: "payload", value: n2 != null ? n2 : "" } }) } }) });
      }
      publishRpcResponse(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          if (this.getRemoteParticipantClientProtocol(e2) >= 1)
            return void (yield this.outgoingDataStreamManager.sendText(n2, { topic: du, destinationIdentities: [e2], attributes: { [lu.RPC_REQUEST_ID]: t2 } }));
          if (uu(n2) > 15360)
            return this.log.warn("RPC Response payload too large for request ".concat(t2, ". To send larger responses, consider updating the sending client.")), void this.publishRpcResponsePacket(e2, t2, null, ou.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"));
          this.publishRpcResponsePacket(e2, t2, n2, null);
        });
      }
    }

    class gu extends $o {
      constructor(e2, t2, n2, i2, r2, a2) {
        super(e2, t2, ws.Kind.Audio, n2, a2), this.monitorReceiver = () => cr(this, undefined, undefined, function* () {
          if (!this.receiver)
            return void (this._currentBitrate = 0);
          const e3 = yield this.getReceiverStats();
          e3 && this.prevStats && this.receiver && (this._currentBitrate = Zo(e3, this.prevStats)), this.prevStats = e3;
        }), this.audioContext = i2, this.webAudioPluginNodes = [], r2 && (this.sinkId = r2.deviceId);
      }
      setVolume(e2) {
        var t2;
        for (const n2 of this.attachedElements)
          this.audioContext ? (t2 = this.gainNode) === null || t2 === undefined || t2.gain.setTargetAtTime(e2, 0, 0.1) : n2.volume = e2;
        zs() && this._mediaStreamTrack._setVolume(e2), this.elementVolume = e2;
      }
      getVolume() {
        if (this.elementVolume)
          return this.elementVolume;
        if (zs())
          return 1;
        let e2 = 0;
        return this.attachedElements.forEach((t2) => {
          t2.volume > e2 && (e2 = t2.volume);
        }), e2;
      }
      setSinkId(e2) {
        return cr(this, undefined, undefined, function* () {
          this.sinkId = e2, yield Promise.all(this.attachedElements.map((t2) => {
            if (Us(t2))
              return t2.setSinkId(e2);
          }));
        });
      }
      attach(e2) {
        const t2 = this.attachedElements.length === 0;
        return e2 ? super.attach(e2) : e2 = super.attach(), this.sinkId && Us(e2) && e2.setSinkId(this.sinkId).catch((e3) => {
          this.log.error("Failed to set sink id on remote audio track", e3, this.logContext);
        }), this.audioContext && t2 && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e2), e2.volume = 0, e2.muted = true), this.elementVolume && this.setVolume(this.elementVolume), e2;
      }
      detach(e2) {
        let t2;
        return e2 ? (t2 = super.detach(e2), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t2 = super.detach(), this.disconnectWebAudio()), t2;
      }
      setAudioContext(e2) {
        this.audioContext = e2, e2 && this.attachedElements.length > 0 ? this.connectWebAudio(e2, this.attachedElements[0]) : e2 || this.disconnectWebAudio();
      }
      setWebAudioPlugins(e2) {
        this.webAudioPluginNodes = e2, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0]);
      }
      connectWebAudio(t2, n2) {
        this.disconnectWebAudio(), this.sourceNode = t2.createMediaStreamSource(n2.srcObject);
        let i2 = this.sourceNode;
        this.webAudioPluginNodes.forEach((e2) => {
          i2.connect(e2), i2 = e2;
        }), this.gainNode = t2.createGain(), i2.connect(this.gainNode), this.gainNode.connect(t2.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1), t2.state !== "running" && t2.resume().then(() => {
          t2.state !== "running" && this.emit(e.TrackEvent.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"));
        }).catch((t3) => {
          this.emit(e.TrackEvent.AudioPlaybackFailed, t3);
        });
      }
      disconnectWebAudio() {
        var e2, t2;
        (e2 = this.gainNode) === null || e2 === undefined || e2.disconnect(), (t2 = this.sourceNode) === null || t2 === undefined || t2.disconnect(), this.gainNode = undefined, this.sourceNode = undefined;
      }
      getReceiverStats() {
        return cr(this, undefined, undefined, function* () {
          if (!this.receiver || !this.receiver.getStats)
            return;
          let e2;
          return (yield this.receiver.getStats()).forEach((t2) => {
            t2.type === "inbound-rtp" && (e2 = { type: "audio", streamId: t2.id, timestamp: t2.timestamp, jitter: t2.jitter, bytesReceived: t2.bytesReceived, concealedSamples: t2.concealedSamples, concealmentEvents: t2.concealmentEvents, silentConcealedSamples: t2.silentConcealedSamples, silentConcealmentEvents: t2.silentConcealmentEvents, totalAudioEnergy: t2.totalAudioEnergy, totalSamplesDuration: t2.totalSamplesDuration });
          }), e2;
        });
      }
    }

    class vu extends gr.EventEmitter {
      constructor(t2, n2, i2, r2) {
        var a2;
        super(), this.metadataMuted = false, this.encryption = ht.NONE, this.log = er, this.handleMuted = () => {
          this.emit(e.TrackEvent.Muted);
        }, this.handleUnmuted = () => {
          this.emit(e.TrackEvent.Unmuted);
        }, this.log = nr((a2 = r2 == null ? undefined : r2.loggerName) !== null && a2 !== undefined ? a2 : e.LoggerNames.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = t2, this.trackSid = n2, this.trackName = i2, this.source = ws.Source.Unknown;
      }
      setTrack(t2) {
        this.track && (this.track.off(e.TrackEvent.Muted, this.handleMuted), this.track.off(e.TrackEvent.Unmuted, this.handleUnmuted)), this.track = t2, t2 && (t2.on(e.TrackEvent.Muted, this.handleMuted), t2.on(e.TrackEvent.Unmuted, this.handleUnmuted));
      }
      get logContext() {
        var e2;
        return Object.assign(Object.assign({}, (e2 = this.loggerContextCb) === null || e2 === undefined ? undefined : e2.call(this)), bs(this));
      }
      get isMuted() {
        return this.metadataMuted;
      }
      get isEnabled() {
        return true;
      }
      get isSubscribed() {
        return this.track !== undefined;
      }
      get isEncrypted() {
        return this.encryption !== ht.NONE;
      }
      get audioTrack() {
        if (ko(this.track))
          return this.track;
      }
      get videoTrack() {
        if (yo(this.track))
          return this.track;
      }
      updateInfo(e2) {
        this.trackSid = e2.sid, this.trackName = e2.name, this.source = ws.sourceFromProto(e2.source), this.mimeType = e2.mimeType, this.kind === ws.Kind.Video && e2.width > 0 && (this.dimensions = { width: e2.width, height: e2.height }, this.simulcasted = e2.simulcast), this.encryption = e2.encryption, this.trackInfo = e2, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), { info: e2 }));
      }
    }
    (function(e2) {
      var t2, n2;
      (t2 = e2.SubscriptionStatus || (e2.SubscriptionStatus = {})).Desired = "desired", t2.Subscribed = "subscribed", t2.Unsubscribed = "unsubscribed", (n2 = e2.PermissionStatus || (e2.PermissionStatus = {})).Allowed = "allowed", n2.NotAllowed = "not_allowed";
    })(vu || (vu = {}));

    class fu extends vu {
      get isUpstreamPaused() {
        var e2;
        return (e2 = this.track) === null || e2 === undefined ? undefined : e2.isUpstreamPaused;
      }
      constructor(t2, n2, i2, r2) {
        super(t2, n2.sid, n2.name, r2), this.track = undefined, this.handleTrackEnded = () => {
          this.emit(e.TrackEvent.Ended);
        }, this.handleCpuConstrained = () => {
          this.track && yo(this.track) && this.emit(e.TrackEvent.CpuConstrained, this.track);
        }, this.updateInfo(n2), this.setTrack(i2);
      }
      setTrack(t2) {
        this.track && (this.track.off(e.TrackEvent.Ended, this.handleTrackEnded), this.track.off(e.TrackEvent.CpuConstrained, this.handleCpuConstrained)), super.setTrack(t2), t2 && (t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.CpuConstrained, this.handleCpuConstrained));
      }
      get isMuted() {
        return this.track ? this.track.isMuted : super.isMuted;
      }
      get audioTrack() {
        return super.audioTrack;
      }
      get videoTrack() {
        return super.videoTrack;
      }
      get isLocal() {
        return true;
      }
      mute() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          return (e2 = this.track) === null || e2 === undefined ? undefined : e2.mute();
        });
      }
      unmute() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          return (e2 = this.track) === null || e2 === undefined ? undefined : e2.unmute();
        });
      }
      pauseUpstream() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          yield (e2 = this.track) === null || e2 === undefined ? undefined : e2.pauseUpstream();
        });
      }
      resumeUpstream() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          yield (e2 = this.track) === null || e2 === undefined ? undefined : e2.resumeUpstream();
        });
      }
      getTrackFeatures() {
        var e2;
        if (ko(this.track)) {
          const t2 = this.track.getSourceTrackSettings(), n2 = new Set;
          return t2.autoGainControl && n2.add(it.TF_AUTO_GAIN_CONTROL), t2.echoCancellation && n2.add(it.TF_ECHO_CANCELLATION), t2.noiseSuppression && n2.add(it.TF_NOISE_SUPPRESSION), t2.channelCount && t2.channelCount > 1 && n2.add(it.TF_STEREO), ((e2 = this.options) === null || e2 === undefined ? undefined : e2.dtx) || n2.add(it.TF_NO_DTX), this.track.enhancedNoiseCancellation && n2.add(it.TF_ENHANCED_NOISE_CANCELLATION), Array.from(n2.values());
        }
        return [];
      }
    }
    function ku(e2, t2) {
      return cr(this, undefined, undefined, function* () {
        e2 != null || (e2 = {});
        let i2 = false;
        const r2 = Ts(e2), a2 = r2.audioProcessor, s2 = r2.videoProcessor, o2 = r2.optionsWithoutProcessor;
        let { audio: c2, video: d2 } = o2;
        if (a2 && typeof o2.audio == "object" && (o2.audio.processor = a2), s2 && typeof o2.video == "object" && (o2.video.processor = s2), e2.audio && typeof o2.audio == "object" && typeof o2.audio.deviceId == "string") {
          const e3 = o2.audio.deviceId;
          o2.audio.deviceId = { exact: e3 }, i2 = true, c2 = Object.assign(Object.assign({}, o2.audio), { deviceId: { ideal: e3 } });
        }
        if (o2.video && typeof o2.video == "object" && typeof o2.video.deviceId == "string") {
          const e3 = o2.video.deviceId;
          o2.video.deviceId = { exact: e3 }, i2 = true, d2 = Object.assign(Object.assign({}, o2.video), { deviceId: { ideal: e3 } });
        }
        o2.audio === true ? o2.audio = { deviceId: "default" } : typeof o2.audio == "object" && o2.audio !== null && (o2.audio = Object.assign(Object.assign({}, o2.audio), { deviceId: o2.audio.deviceId || "default" })), o2.video === true ? o2.video = { deviceId: "default" } : typeof o2.video != "object" || o2.video.deviceId || (o2.video.deviceId = "default");
        const l2 = hs(ls(o2, nd, id)), u2 = navigator.mediaDevices.getUserMedia(l2);
        o2.audio && (lc.userMediaPromiseMap.set("audioinput", u2), u2.catch(() => lc.userMediaPromiseMap.delete("audioinput"))), o2.video && (lc.userMediaPromiseMap.set("videoinput", u2), u2.catch(() => lc.userMediaPromiseMap.delete("videoinput")));
        try {
          const e3 = yield u2;
          return yield Promise.all(e3.getTracks().map((n2) => cr(this, undefined, undefined, function* () {
            let i3;
            const r3 = n2.kind === "audio" ? l2.audio : l2.video;
            typeof r3 != "boolean" && (i3 = r3);
            const o3 = n2.getSettings().deviceId;
            (i3 == null ? undefined : i3.deviceId) && ho(i3.deviceId) !== o3 ? i3.deviceId = o3 : i3 || (i3 = { deviceId: o3 });
            const c3 = function(e4, t3, n3) {
              switch (e4.kind) {
                case "audio":
                  return new Ed(e4, t3, false, undefined, n3);
                case "video":
                  return new xd(e4, t3, false, n3);
                default:
                  throw new Wa("unsupported track type: ".concat(e4.kind));
              }
            }(n2, i3, t2);
            return c3.kind === ws.Kind.Video ? c3.source = ws.Source.Camera : c3.kind === ws.Kind.Audio && (c3.source = ws.Source.Microphone), c3.mediaStream = e3, ko(c3) && a2 ? yield c3.setProcessor(a2) : yo(c3) && s2 && (yield c3.setProcessor(s2)), c3;
          })));
        } catch (n2) {
          if (!i2)
            throw n2;
          return ku(Object.assign(Object.assign({}, e2), { audio: c2, video: d2 }), t2);
        }
      });
    }
    function yu(e2) {
      return cr(this, undefined, undefined, function* () {
        return (yield ku({ audio: false, video: e2 == null || e2 }))[0];
      });
    }
    function bu(e2) {
      return cr(this, undefined, undefined, function* () {
        return (yield ku({ audio: e2 == null || e2, video: false }))[0];
      });
    }
    var Tu, Su;
    e.ConnectionQuality = undefined, (Tu = e.ConnectionQuality || (e.ConnectionQuality = {})).Excellent = "excellent", Tu.Good = "good", Tu.Poor = "poor", Tu.Lost = "lost", Tu.Unknown = "unknown";

    class Eu extends gr.EventEmitter {
      get logContext() {
        var e2, t2;
        return Object.assign({}, (t2 = (e2 = this.loggerOptions) === null || e2 === undefined ? undefined : e2.loggerContextCb) === null || t2 === undefined ? undefined : t2.call(e2));
      }
      get isEncrypted() {
        return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every((e2) => e2.isEncrypted);
      }
      get isAgent() {
        var e2;
        return ((e2 = this.permissions) === null || e2 === undefined ? undefined : e2.agent) || this.kind === lt.AGENT;
      }
      get isActive() {
        var e2;
        return ((e2 = this.participantInfo) === null || e2 === undefined ? undefined : e2.state) === dt.ACTIVE;
      }
      get kind() {
        return this._kind;
      }
      get attributes() {
        return Object.freeze(Object.assign({}, this._attributes));
      }
      constructor(t2, n2, i2, r2, a2, s2) {
        let o2 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : lt.STANDARD;
        var c2;
        super(), this.audioLevel = 0, this.isSpeaking = false, this._connectionQuality = e.ConnectionQuality.Unknown, this.log = er, this.loggerOptions = s2, this.log = nr((c2 = s2 == null ? undefined : s2.loggerName) !== null && c2 !== undefined ? c2 : e.LoggerNames.Participant, () => this.logContext), this.setMaxListeners(100), this.sid = t2, this.identity = n2, this.name = i2, this.metadata = r2, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this._kind = o2, this._attributes = a2 != null ? a2 : {};
      }
      getTrackPublications() {
        return Array.from(this.trackPublications.values());
      }
      getTrackPublication(e2) {
        for (const t2 of this.trackPublications) {
          const n2 = L(t2, 2)[1];
          if (n2.source === e2)
            return n2;
        }
      }
      getTrackPublicationByName(e2) {
        for (const t2 of this.trackPublications) {
          const n2 = L(t2, 2)[1];
          if (n2.trackName === e2)
            return n2;
        }
      }
      waitUntilActive() {
        return this.isActive ? Promise.resolve() : (this.activeFuture || (this.activeFuture = new lo, this.once(e.ParticipantEvent.Active, () => {
          var e2, t2;
          (t2 = (e2 = this.activeFuture) === null || e2 === undefined ? undefined : e2.resolve) === null || t2 === undefined || t2.call(e2), this.activeFuture = undefined;
        })), this.activeFuture.promise);
      }
      get connectionQuality() {
        return this._connectionQuality;
      }
      get isCameraEnabled() {
        var e2;
        const t2 = this.getTrackPublication(ws.Source.Camera);
        return !((e2 = t2 == null ? undefined : t2.isMuted) === null || e2 === undefined || e2);
      }
      get isMicrophoneEnabled() {
        var e2;
        const t2 = this.getTrackPublication(ws.Source.Microphone);
        return !((e2 = t2 == null ? undefined : t2.isMuted) === null || e2 === undefined || e2);
      }
      get isScreenShareEnabled() {
        return !!this.getTrackPublication(ws.Source.ScreenShare);
      }
      get isLocal() {
        return false;
      }
      get joinedAt() {
        return this.participantInfo ? new Date(1000 * Number.parseInt(this.participantInfo.joinedAt.toString())) : new Date;
      }
      updateInfo(t2) {
        var n2;
        return !(this.participantInfo && this.participantInfo.sid === t2.sid && this.participantInfo.version > t2.version) && (this.identity = t2.identity, this.sid = t2.sid, this._setName(t2.name), this._setMetadata(t2.metadata), this._setAttributes(t2.attributes), t2.state === dt.ACTIVE && ((n2 = this.participantInfo) === null || n2 === undefined ? undefined : n2.state) !== dt.ACTIVE && this.emit(e.ParticipantEvent.Active), t2.permission && this.setPermissions(t2.permission), this.participantInfo = t2, true);
      }
      _setMetadata(t2) {
        const n2 = this.metadata !== t2, i2 = this.metadata;
        this.metadata = t2, n2 && this.emit(e.ParticipantEvent.ParticipantMetadataChanged, i2);
      }
      _setName(t2) {
        const n2 = this.name !== t2;
        this.name = t2, n2 && this.emit(e.ParticipantEvent.ParticipantNameChanged, t2);
      }
      _setAttributes(t2) {
        const n2 = function(e2, t3) {
          var n3;
          e2 === undefined && (e2 = {}), t3 === undefined && (t3 = {});
          const i2 = [...Object.keys(t3), ...Object.keys(e2)], r2 = {};
          for (const a2 of i2)
            e2[a2] !== t3[a2] && (r2[a2] = (n3 = t3[a2]) !== null && n3 !== undefined ? n3 : "");
          return r2;
        }(this.attributes, t2);
        this._attributes = t2, Object.keys(n2).length > 0 && this.emit(e.ParticipantEvent.AttributesChanged, n2);
      }
      setPermissions(t2) {
        var n2, i2, r2, a2, s2, o2;
        const c2 = this.permissions, d2 = t2.canPublish !== ((n2 = this.permissions) === null || n2 === undefined ? undefined : n2.canPublish) || t2.canSubscribe !== ((i2 = this.permissions) === null || i2 === undefined ? undefined : i2.canSubscribe) || t2.canPublishData !== ((r2 = this.permissions) === null || r2 === undefined ? undefined : r2.canPublishData) || t2.hidden !== ((a2 = this.permissions) === null || a2 === undefined ? undefined : a2.hidden) || t2.recorder !== ((s2 = this.permissions) === null || s2 === undefined ? undefined : s2.recorder) || t2.canPublishSources.length !== this.permissions.canPublishSources.length || t2.canPublishSources.some((e2, t3) => {
          var n3;
          return e2 !== ((n3 = this.permissions) === null || n3 === undefined ? undefined : n3.canPublishSources[t3]);
        }) || t2.canSubscribeMetrics !== ((o2 = this.permissions) === null || o2 === undefined ? undefined : o2.canSubscribeMetrics);
        return this.permissions = t2, d2 && this.emit(e.ParticipantEvent.ParticipantPermissionsChanged, c2), d2;
      }
      setIsSpeaking(t2) {
        t2 !== this.isSpeaking && (this.isSpeaking = t2, t2 && (this.lastSpokeAt = new Date), this.emit(e.ParticipantEvent.IsSpeakingChanged, t2));
      }
      setConnectionQuality(t2) {
        const n2 = this._connectionQuality;
        this._connectionQuality = function(t3) {
          switch (t3) {
            case Ze.EXCELLENT:
              return e.ConnectionQuality.Excellent;
            case Ze.GOOD:
              return e.ConnectionQuality.Good;
            case Ze.POOR:
              return e.ConnectionQuality.Poor;
            case Ze.LOST:
              return e.ConnectionQuality.Lost;
            default:
              return e.ConnectionQuality.Unknown;
          }
        }(t2), n2 !== this._connectionQuality && this.emit(e.ParticipantEvent.ConnectionQualityChanged, this._connectionQuality);
      }
      setDisconnected() {
        var e2, t2;
        this.activeFuture && ((t2 = (e2 = this.activeFuture).reject) === null || t2 === undefined || t2.call(e2, new Error("Participant disconnected")), this.activeFuture = undefined);
      }
      setAudioContext(e2) {
        this.audioContext = e2, this.audioTrackPublications.forEach((t2) => ko(t2.track) && t2.track.setAudioContext(e2));
      }
      addTrackPublication(t2) {
        this.log.debug("adding track publication", { trackSid: t2.trackSid, source: t2.source, kind: t2.kind }), t2.on(e.TrackEvent.Muted, () => {
          this.emit(e.ParticipantEvent.TrackMuted, t2);
        }), t2.on(e.TrackEvent.Unmuted, () => {
          this.emit(e.ParticipantEvent.TrackUnmuted, t2);
        });
        const n2 = t2;
        switch (n2.track && (n2.track.sid = t2.trackSid), this.trackPublications.set(t2.trackSid, t2), t2.kind) {
          case ws.Kind.Audio:
            this.audioTrackPublications.set(t2.trackSid, t2);
            break;
          case ws.Kind.Video:
            this.videoTrackPublications.set(t2.trackSid, t2);
        }
      }
    }

    class Cu extends Eu {
      constructor(t2, i2, a2, s2, o2, c2, d2, l2) {
        super(t2, i2, undefined, undefined, undefined, { loggerName: s2.loggerName, loggerContextCb: () => this.engine.logContext }), this.pendingPublishing = new Set, this.pendingPublishPromises = new Map, this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = true, this.encryptionType = ht.NONE, this.e2eeStateMutex = new r, this.enabledPublishVideoCodecs = [], this.handleReconnecting = () => {
          this.reconnectFuture || (this.reconnectFuture = new lo);
        }, this.handleReconnected = () => {
          var e2, t3;
          (t3 = (e2 = this.reconnectFuture) === null || e2 === undefined ? undefined : e2.resolve) === null || t3 === undefined || t3.call(e2), this.reconnectFuture = undefined, this.updateTrackSubscriptionPermissions();
        }, this.handleClosing = () => {
          var e2, t3, n2, i3, r2, a3;
          this.reconnectFuture && (this.reconnectFuture.promise.catch((e3) => this.log.warn(e3.message)), (t3 = (e2 = this.reconnectFuture) === null || e2 === undefined ? undefined : e2.reject) === null || t3 === undefined || t3.call(e2, new Error("Got disconnected during reconnection attempt")), this.reconnectFuture = undefined), this.signalConnectedFuture && ((i3 = (n2 = this.signalConnectedFuture).reject) === null || i3 === undefined || i3.call(n2, new Error("Got disconnected without signal connected")), this.signalConnectedFuture = undefined), (a3 = (r2 = this.activeAgentFuture) === null || r2 === undefined ? undefined : r2.reject) === null || a3 === undefined || a3.call(r2, new Error("Got disconnected without active agent present")), this.activeAgentFuture = undefined, this.firstActiveAgent = undefined;
        }, this.handleSignalConnected = (e2) => {
          var t3, n2;
          e2.participant && this.updateInfo(e2.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new lo), (n2 = (t3 = this.signalConnectedFuture).resolve) === null || n2 === undefined || n2.call(t3);
        }, this.handleSignalRequestResponse = (e2) => {
          const { requestId: t3, reason: n2, message: i3 } = e2, r2 = this.pendingSignalRequests.get(t3);
          switch (r2 && (n2 !== Fi.OK && r2.reject(new Qa(i3, n2)), this.pendingSignalRequests.delete(t3)), e2.request.case) {
            case "publishDataTrack": {
              let t4;
              switch (e2.reason) {
                case Fi.NOT_ALLOWED:
                  t4 = $l.notAllowed(e2.message);
                  break;
                case Fi.DUPLICATE_NAME:
                  t4 = $l.duplicateName(e2.message);
                  break;
                case Fi.INVALID_NAME:
                  t4 = $l.invalidName(e2.message);
                  break;
                case Fi.LIMIT_EXCEEDED:
                  t4 = $l.limitReached(e2.message);
                  break;
                default:
                  t4 = $l.unknown(e2.reason, e2.message);
              }
              this.roomOutgoingDataTrackManager.receivedSfuPublishResponse(e2.request.value.pubHandle, { type: "error", error: t4 });
              break;
            }
          }
        }, this.updateTrackSubscriptionPermissions = () => {
          this.log.debug("updating track subscription permissions", { allParticipantsAllowed: this.allParticipantsAllowedToSubscribe, participantTrackPermissions: this.participantTrackPermissions }), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map((e2) => function(e3) {
            var t3, n2, i3;
            if (!e3.participantSid && !e3.participantIdentity)
              throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
            return new Ci({ participantIdentity: (t3 = e3.participantIdentity) !== null && t3 !== undefined ? t3 : "", participantSid: (n2 = e3.participantSid) !== null && n2 !== undefined ? n2 : "", allTracks: (i3 = e3.allowAll) !== null && i3 !== undefined && i3, trackSids: e3.allowedTrackSids || [] });
          }(e2)));
        }, this.onTrackUnmuted = (e2) => {
          this.onTrackMuted(e2, e2.isUpstreamPaused);
        }, this.onTrackMuted = (e2, t3) => {
          t3 === undefined && (t3 = true), e2.sid ? this.engine.updateMuteStatus(e2.sid, t3) : this.log.error("could not update mute status for unpublished track", bs(e2));
        }, this.onTrackUpstreamPaused = (e2) => {
          this.log.debug("upstream paused", bs(e2)), this.onTrackMuted(e2, true);
        }, this.onTrackUpstreamResumed = (e2) => {
          this.log.debug("upstream resumed", bs(e2)), this.onTrackMuted(e2, e2.isMuted);
        }, this.onTrackFeatureUpdate = (e2) => {
          const t3 = this.audioTrackPublications.get(e2.sid);
          t3 ? this.engine.client.sendUpdateLocalAudioTrack(t3.trackSid, t3.getTrackFeatures()) : this.log.warn("Could not update local audio track settings, missing publication for track ".concat(e2.sid));
        }, this.onTrackCpuConstrained = (t3, n2) => {
          this.log.debug("track cpu constrained", bs(n2)), this.emit(e.ParticipantEvent.LocalTrackCpuConstrained, t3, n2);
        }, this.handleSubscribedQualityUpdate = (e2) => cr(this, undefined, undefined, function* () {
          var t3, n2, i3, r2, a3;
          if (!((a3 = this.roomOptions) === null || a3 === undefined ? undefined : a3.dynacast))
            return;
          const s3 = this.videoTrackPublications.get(e2.trackSid);
          if (!s3)
            return void this.log.warn("received subscribed quality update for unknown track", { trackSid: e2.trackSid });
          if (!s3.videoTrack)
            return;
          const o3 = yield s3.videoTrack.setPublishingCodecs(e2.subscribedCodecs);
          try {
            for (var c3, d3 = true, l3 = hr(o3);!(t3 = (c3 = yield l3.next()).done); d3 = true) {
              r2 = c3.value, d3 = false;
              const e3 = r2;
              rs(e3) && (this.log.debug("publish ".concat(e3, " for ").concat(s3.videoTrack.sid), bs(s3)), yield this.publishAdditionalCodecForTrack(s3.videoTrack, e3, s3.options));
            }
          } catch (u2) {
            n2 = { error: u2 };
          } finally {
            try {
              d3 || t3 || !(i3 = l3.return) || (yield i3.call(l3));
            } finally {
              if (n2)
                throw n2.error;
            }
          }
        }), this.handleLocalTrackUnpublished = (e2) => {
          const t3 = this.trackPublications.get(e2.trackSid);
          t3 ? this.unpublishTrack(t3.track) : this.log.warn("received unpublished event for unknown track", { trackSid: e2.trackSid });
        }, this.handleTrackEnded = (e2) => cr(this, undefined, undefined, function* () {
          if (e2.source === ws.Source.ScreenShare || e2.source === ws.Source.ScreenShareAudio)
            this.log.debug("unpublishing local track due to TrackEnded", bs(e2)), this.unpublishTrack(e2);
          else if (e2.isUserProvided)
            yield e2.mute();
          else if (To(e2) || bo(e2))
            try {
              if (Ks())
                try {
                  const t3 = yield navigator === null || navigator === undefined ? undefined : navigator.permissions.query({ name: e2.source === ws.Source.Camera ? "camera" : "microphone" });
                  if (t3 && t3.state === "denied")
                    throw this.log.warn("user has revoked access to ".concat(e2.source), bs(e2)), t3.onchange = () => {
                      t3.state !== "denied" && (e2.isMuted || e2.restartTrack(), t3.onchange = null);
                    }, new Error("GetUserMedia Permission denied");
                } catch (n2) {}
              e2.isMuted || (this.log.debug("track ended, attempting to use a different device", bs(e2)), To(e2) ? yield e2.restartTrack({ deviceId: "default" }) : yield e2.restartTrack());
            } catch (n2) {
              this.log.warn("could not restart track, muting instead", bs(e2)), yield e2.mute();
            }
        }), this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this.engine = a2, this.roomOptions = s2, this.setupEngine(a2), this.activeDeviceMap = new Map([["audioinput", "default"], ["videoinput", "default"], ["audiooutput", "default"]]), this.pendingSignalRequests = new Map, this.roomOutgoingDataStreamManager = o2, this.roomOutgoingDataTrackManager = c2, this.rpcClientManager = d2, this.rpcServerManager = l2;
      }
      get lastCameraError() {
        return this.cameraError;
      }
      get lastMicrophoneError() {
        return this.microphoneError;
      }
      get isE2EEEnabled() {
        return this.encryptionType !== ht.NONE;
      }
      getTrackPublication(e2) {
        const t2 = super.getTrackPublication(e2);
        if (t2)
          return t2;
      }
      getTrackPublicationByName(e2) {
        const t2 = super.getTrackPublicationByName(e2);
        if (t2)
          return t2;
      }
      setupEngine(t2) {
        var n2;
        this.engine = t2, this.engine.on(e.EngineEvent.RemoteMute, (e2, t3) => {
          const n3 = this.trackPublications.get(e2);
          n3 && n3.track && (t3 ? n3.mute() : n3.unmute());
        }), ((n2 = this.signalConnectedFuture) === null || n2 === undefined ? undefined : n2.isResolved) && (this.signalConnectedFuture = undefined), this.engine.on(e.EngineEvent.Connected, this.handleReconnected).on(e.EngineEvent.SignalConnected, this.handleSignalConnected).on(e.EngineEvent.SignalRestarted, this.handleReconnected).on(e.EngineEvent.SignalResumed, this.handleReconnected).on(e.EngineEvent.Restarting, this.handleReconnecting).on(e.EngineEvent.Resuming, this.handleReconnecting).on(e.EngineEvent.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(e.EngineEvent.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(e.EngineEvent.Closing, this.handleClosing).on(e.EngineEvent.SignalRequestResponse, this.handleSignalRequestResponse);
      }
      setMetadata(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.requestMetadataUpdate({ metadata: e2 });
        });
      }
      setName(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.requestMetadataUpdate({ name: e2 });
        });
      }
      setAttributes(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.requestMetadataUpdate({ attributes: e2 });
        });
      }
      requestMetadataUpdate(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let { metadata: i2, name: r2, attributes: a2 } = e3;
          return function* () {
            return new Ca((e4, s2) => cr(t2, undefined, undefined, function* () {
              var t3, o2;
              try {
                let n2 = false;
                const c2 = yield this.engine.client.sendUpdateLocalMetadata((t3 = i2 != null ? i2 : this.metadata) !== null && t3 !== undefined ? t3 : "", (o2 = r2 != null ? r2 : this.name) !== null && o2 !== undefined ? o2 : "", a2), d2 = performance.now();
                for (this.pendingSignalRequests.set(c2, { resolve: e4, reject: (e5) => {
                  s2(e5), n2 = true;
                }, values: { name: r2, metadata: i2, attributes: a2 } });performance.now() - d2 < 5000 && !n2; ) {
                  if ((!r2 || this.name === r2) && (!i2 || this.metadata === i2) && (!a2 || Object.entries(a2).every((e5) => {
                    let t4 = L(e5, 2), n3 = t4[0], i3 = t4[1];
                    return this.attributes[n3] === i3 || i3 === "" && !this.attributes[n3];
                  })))
                    return this.pendingSignalRequests.delete(c2), void e4();
                  yield Ms(50);
                }
                s2(new Qa("Request to update local metadata timed out", "TimeoutError"));
              } catch (n2) {
                n2 instanceof Error ? s2(n2) : s2(new Error(String(n2)));
              }
            }));
          }();
        });
      }
      setCameraEnabled(e2, t2, n2) {
        return this.setTrackEnabled(ws.Source.Camera, e2, t2, n2);
      }
      setMicrophoneEnabled(e2, t2, n2) {
        return this.setTrackEnabled(ws.Source.Microphone, e2, t2, n2);
      }
      setScreenShareEnabled(e2, t2, n2) {
        return this.setTrackEnabled(ws.Source.ScreenShare, e2, t2, n2);
      }
      setE2EEEnabled(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.e2eeStateMutex.lock();
          try {
            if (this.encryptionType = e2 ? ht.GCM : ht.NONE, yield Promise.all(this.pendingPublishPromises.values()), this.trackPublications.size === 0 || Array.from(this.trackPublications.values()).every((t3) => t3.isEncrypted === e2))
              return;
            yield this.republishAllTracks(undefined, false);
          } finally {
            t2();
          }
        });
      }
      setTrackEnabled(t2, i2, r2, a2) {
        return cr(this, undefined, undefined, function* () {
          var s2, o2;
          this.log.debug("setTrackEnabled", { source: t2, enabled: i2 }), this.republishPromise && (yield this.republishPromise);
          let c2 = this.getTrackPublication(t2);
          if (i2)
            if (c2)
              yield c2.unmute();
            else {
              let i3;
              if (this.pendingPublishing.has(t2)) {
                const e2 = yield this.waitForPendingPublicationOfSource(t2);
                return e2 || this.log.info("waiting for pending publication promise timed out", { source: t2 }), yield e2 == null ? undefined : e2.unmute(), e2;
              }
              this.pendingPublishing.add(t2);
              try {
                switch (t2) {
                  case ws.Source.Camera:
                    i3 = yield this.createTracks({ video: (s2 = r2) === null || s2 === undefined || s2 });
                    break;
                  case ws.Source.Microphone:
                    i3 = yield this.createTracks({ audio: (o2 = r2) === null || o2 === undefined || o2 });
                    break;
                  case ws.Source.ScreenShare:
                    i3 = yield this.createScreenTracks(Object.assign({}, r2));
                    break;
                  default:
                    throw new Wa(t2);
                }
              } catch (n2) {
                throw i3 == null || i3.forEach((e2) => {
                  e2.stop();
                }), n2 instanceof Error && this.emit(e.ParticipantEvent.MediaDevicesError, n2, vs(t2)), this.pendingPublishing.delete(t2), n2;
              }
              for (const e2 of i3) {
                const n2 = Object.assign(Object.assign({}, this.roomOptions.publishDefaults), r2);
                t2 === ws.Source.Microphone && ko(e2) && n2.preConnectBuffer && (this.log.info("starting preconnect buffer for microphone"), e2.startPreConnectBuffer());
              }
              try {
                const e2 = [];
                for (const t3 of i3)
                  this.log.info("publishing track", bs(t3)), e2.push(this.publishTrack(t3, a2));
                c2 = L(yield Promise.all(e2), 1)[0];
              } catch (n2) {
                throw i3 == null || i3.forEach((e2) => {
                  e2.stop();
                }), n2;
              } finally {
                this.pendingPublishing.delete(t2);
              }
            }
          else if (!(c2 == null ? undefined : c2.track) && this.pendingPublishing.has(t2) && (c2 = yield this.waitForPendingPublicationOfSource(t2), c2 || this.log.info("waiting for pending publication promise timed out", { source: t2 })), c2 && c2.track)
            if (t2 === ws.Source.ScreenShare) {
              const e2 = [this.unpublishTrack(c2.track)], t3 = this.getTrackPublication(ws.Source.ScreenShareAudio);
              t3 && t3.track && e2.push(this.unpublishTrack(t3.track)), c2 = L(yield Promise.all(e2), 1)[0];
            } else
              yield c2.mute();
          return c2;
        });
      }
      enableCameraAndMicrophone() {
        return cr(this, undefined, undefined, function* () {
          if (!this.pendingPublishing.has(ws.Source.Camera) && !this.pendingPublishing.has(ws.Source.Microphone)) {
            this.pendingPublishing.add(ws.Source.Camera), this.pendingPublishing.add(ws.Source.Microphone);
            try {
              const e2 = yield this.createTracks({ audio: true, video: true });
              yield Promise.all(e2.map((e3) => this.publishTrack(e3)));
            } finally {
              this.pendingPublishing.delete(ws.Source.Camera), this.pendingPublishing.delete(ws.Source.Microphone);
            }
          }
        });
      }
      createTracks(t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2;
          t2 != null || (t2 = {});
          const r2 = ls(t2, (n2 = this.roomOptions) === null || n2 === undefined ? undefined : n2.audioCaptureDefaults, (i2 = this.roomOptions) === null || i2 === undefined ? undefined : i2.videoCaptureDefaults);
          try {
            const t3 = yield ku(r2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
            return t3.map((t4) => (ko(t4) && (this.microphoneError = undefined, t4.setAudioContext(this.audioContext), t4.source = ws.Source.Microphone, this.emit(e.ParticipantEvent.AudioStreamAcquired)), yo(t4) && (this.cameraError = undefined, t4.source = ws.Source.Camera), t4));
          } catch (a2) {
            throw a2 instanceof Error && (t2.audio && (this.microphoneError = a2), t2.video && (this.cameraError = a2)), a2;
          }
        });
      }
      createScreenTracks(t2) {
        return cr(this, undefined, undefined, function* () {
          if (t2 === undefined && (t2 = {}), navigator.mediaDevices.getDisplayMedia === undefined)
            throw new Va("getDisplayMedia not supported");
          t2.resolution !== undefined || Ws() || (t2.resolution = ds.h1080fps30.resolution);
          const n2 = fs(t2), i2 = yield navigator.mediaDevices.getDisplayMedia(n2), r2 = i2.getVideoTracks();
          if (r2.length === 0)
            throw new Wa("no video track found");
          const a2 = new xd(r2[0], undefined, false, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
          a2.source = ws.Source.ScreenShare, t2.contentHint && (a2.mediaStreamTrack.contentHint = t2.contentHint);
          const s2 = [a2];
          if (i2.getAudioTracks().length > 0) {
            this.emit(e.ParticipantEvent.AudioStreamAcquired);
            const t3 = new Ed(i2.getAudioTracks()[0], undefined, false, this.audioContext, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
            t3.source = ws.Source.ScreenShareAudio, s2.push(t3);
          }
          return s2;
        });
      }
      publishTrack(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          return this.publishOrRepublishTrack(e2, t2);
        });
      }
      waitForNextEngineRestart() {
        let t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
        return new Promise((n2, i2) => {
          const r2 = () => {
            clearTimeout(o2), this.engine.off(e.EngineEvent.Restarted, a2), this.engine.off(e.EngineEvent.Closing, s2);
          }, a2 = () => {
            r2(), n2();
          }, s2 = () => {
            r2(), i2(new Error("engine closed before restart completed"));
          }, o2 = setTimeout(() => {
            r2(), i2(new Error("timed out waiting for engine restart"));
          }, t2);
          this.engine.once(e.EngineEvent.Restarted, a2), this.engine.once(e.EngineEvent.Closing, s2);
        });
      }
      publishOrRepublishTrack(e2, t2) {
        return cr(this, arguments, undefined, function(e3, t3) {
          var i2 = this;
          let r2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2], a2 = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
          return function* () {
            var s2, o2, c2, d2;
            let l2, u2;
            if (To(e3) && e3.setAudioContext(i2.audioContext), yield (s2 = i2.reconnectFuture) === null || s2 === undefined ? undefined : s2.promise, i2.republishPromise && !r2 && (yield i2.republishPromise), fo(e3) && i2.pendingPublishPromises.has(e3) && (yield i2.pendingPublishPromises.get(e3)), e3 instanceof MediaStreamTrack)
              l2 = e3.getConstraints();
            else {
              let t4;
              switch (l2 = e3.constraints, e3.source) {
                case ws.Source.Microphone:
                  t4 = "audioinput";
                  break;
                case ws.Source.Camera:
                  t4 = "videoinput";
              }
              t4 && i2.activeDeviceMap.has(t4) && (l2 = Object.assign(Object.assign({}, l2), { deviceId: i2.activeDeviceMap.get(t4) }));
            }
            if (e3 instanceof MediaStreamTrack)
              switch (e3.kind) {
                case "audio":
                  e3 = new Ed(e3, l2, true, i2.audioContext, { loggerName: i2.roomOptions.loggerName, loggerContextCb: () => i2.logContext });
                  break;
                case "video":
                  e3 = new xd(e3, l2, true, { loggerName: i2.roomOptions.loggerName, loggerContextCb: () => i2.logContext });
                  break;
                default:
                  throw new Wa("unsupported MediaStreamTrack kind ".concat(e3.kind));
              }
            else
              e3.updateLoggerOptions({ loggerName: i2.roomOptions.loggerName, loggerContextCb: () => i2.logContext });
            if (i2.trackPublications.forEach((t4) => {
              t4.track && t4.track === e3 && (u2 = t4);
            }), u2)
              return i2.log.warn("track has already been published, skipping", bs(u2)), u2;
            const h2 = Object.assign(Object.assign({}, i2.roomOptions.publishDefaults), t3), p2 = "channelCount" in e3.mediaStreamTrack.getSettings() && e3.mediaStreamTrack.getSettings().channelCount === 2 || e3.mediaStreamTrack.getConstraints().channelCount === 2, m2 = (o2 = h2.forceStereo) !== null && o2 !== undefined ? o2 : p2;
            m2 && (h2.dtx === undefined && i2.log.debug("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", bs(e3)), h2.red === undefined && i2.log.debug("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), (c2 = h2.dtx) !== null && c2 !== undefined || (h2.dtx = false), (d2 = h2.red) !== null && d2 !== undefined || (h2.red = false)), !function() {
              const e4 = Pa(), t4 = "17.2";
              if (e4)
                return e4.name !== "Safari" && e4.os !== "iOS" || !!(e4.os === "iOS" && e4.osVersion && Zs(e4.osVersion, t4) >= 0) || e4.name === "Safari" && Zs(e4.version, t4) >= 0;
            }() && i2.roomOptions.e2ee && (i2.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2"), h2.simulcast = false), h2.source && (e3.source = h2.source);
            const g2 = new Promise((t4, r3) => cr(i2, undefined, undefined, function* () {
              try {
                if (this.engine.client.currentState !== Rc.CONNECTED) {
                  this.log.debug("deferring track publication until signal is connected", { track: bs(e3) });
                  let n2 = false;
                  const i3 = setTimeout(() => {
                    n2 = true, e3.stop(), r3(new Ja("publishing rejected as engine not connected within timeout", 408));
                  }, 15000);
                  if (yield this.waitUntilEngineConnected(), clearTimeout(i3), n2)
                    return;
                  const a3 = yield this.publish(e3, h2, m2);
                  t4(a3);
                } else
                  try {
                    const n2 = yield this.publish(e3, h2, m2);
                    t4(n2);
                  } catch (n2) {
                    r3(n2);
                  }
              } catch (n2) {
                r3(n2);
              }
            }));
            i2.pendingPublishPromises.set(e3, g2);
            try {
              return yield g2;
            } catch (n2) {
              if (!a2 && n2 instanceof za)
                return i2.log.warn("negotiation due to track publish failed, retrying after reconnect", { error: n2 }), i2.pendingPublishPromises.delete(e3), yield i2.waitForNextEngineRestart(), yield i2.publishOrRepublishTrack(e3, t3, r2, true);
              throw n2;
            } finally {
              i2.pendingPublishPromises.delete(e3);
            }
          }();
        });
      }
      waitUntilEngineConnected() {
        return this.signalConnectedFuture || (this.signalConnectedFuture = new lo), this.signalConnectedFuture.promise;
      }
      hasPermissionsToPublish(e2) {
        if (!this.permissions)
          return this.log.warn("no permissions present for publishing track", bs(e2)), false;
        const t2 = this.permissions, n2 = t2.canPublish, i2 = t2.canPublishSources;
        return !(!n2 || i2.length !== 0 && !i2.map((e3) => function(e4) {
          switch (e4) {
            case Ye.CAMERA:
              return ws.Source.Camera;
            case Ye.MICROPHONE:
              return ws.Source.Microphone;
            case Ye.SCREEN_SHARE:
              return ws.Source.ScreenShare;
            case Ye.SCREEN_SHARE_AUDIO:
              return ws.Source.ScreenShareAudio;
            default:
              return ws.Source.Unknown;
          }
        }(e3)).includes(e2.source)) || (this.log.warn("insufficient permissions to publish", bs(e2)), false);
      }
      publish(t2, i2, r2) {
        return cr(this, undefined, undefined, function* () {
          var a2, s2, o2, c2, d2, l2, u2, h2, p2, m2;
          if (!this.hasPermissionsToPublish(t2))
            throw new Ja("failed to publish track, insufficient permissions", 403);
          Array.from(this.trackPublications.values()).find((e2) => fo(t2) && e2.source === t2.source) && t2.source !== ws.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(t2.source), bs(t2)), i2.stopMicTrackOnMute && ko(t2) && (t2.stopOnMute = true), t2.source === ws.Source.ScreenShare && Bs() && (i2.simulcast = false), i2.videoCodec !== "av1" || As() || (i2.videoCodec = undefined), i2.videoCodec !== "vp9" || Ns() || (i2.videoCodec = undefined), i2.videoCodec === undefined && (i2.videoCodec = ed), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some((e2) => i2.videoCodec === ks(e2.mime)) || (i2.videoCodec = ks(this.enabledPublishVideoCodecs[0].mime)));
          const g2 = i2.videoCodec;
          t2.on(e.TrackEvent.Muted, this.onTrackMuted), t2.on(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.on(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.on(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
          const v2 = [], f2 = !((a2 = i2.dtx) === null || a2 === undefined || a2), k2 = t2.getSourceTrackSettings();
          k2.autoGainControl && v2.push(it.TF_AUTO_GAIN_CONTROL), k2.echoCancellation && v2.push(it.TF_ECHO_CANCELLATION), k2.noiseSuppression && v2.push(it.TF_NOISE_SUPPRESSION), k2.channelCount && k2.channelCount > 1 && v2.push(it.TF_STEREO), f2 && v2.push(it.TF_NO_DTX), To(t2) && t2.hasPreConnectBuffer && v2.push(it.TF_PRECONNECT_BUFFER);
          const y2 = this.normalizeRequestedFrameMetadataOptions(t2, i2), b2 = new Fn({ cid: t2.mediaStreamTrack.id, name: i2.name, type: ws.kindToProto(t2.kind), muted: t2.isMuted, source: ws.sourceToProto(t2.source), disableDtx: f2, encryption: this.encryptionType, stereo: r2, disableRed: this.isE2EEEnabled || !((s2 = i2.red) === null || s2 === undefined || s2), stream: i2 == null ? undefined : i2.stream, backupCodecPolicy: i2 == null ? undefined : i2.backupCodecPolicy, audioFeatures: v2, packetTrailerFeatures: y2 });
          let T2;
          if (t2.kind === ws.Kind.Video) {
            let e2;
            try {
              e2 = yield t2.waitForDimensions();
            } catch (n2) {
              const r3 = (c2 = (o2 = this.roomOptions.videoCaptureDefaults) === null || o2 === undefined ? undefined : o2.resolution) !== null && c2 !== undefined ? c2 : os.h720.resolution;
              e2 = { width: r3.width, height: r3.height }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign({}, bs(t2)), { dims: e2 }));
            }
            b2.width = e2.width, b2.height = e2.height, bo(t2) && (Ls(g2) && (t2.source === ws.Source.ScreenShare && (i2.scalabilityMode = "L1T3", ("contentHint" in t2.mediaStreamTrack) && (t2.mediaStreamTrack.contentHint = "motion", this.log.debug("forcing contentHint to motion for screenshare with SVC codecs", bs(t2)))), i2.scalabilityMode = (d2 = i2.scalabilityMode) !== null && d2 !== undefined ? d2 : "L3T3_KEY"), b2.simulcastCodecs = [new Un({ codec: g2, cid: t2.mediaStreamTrack.id })], i2.backupCodec === true && (i2.backupCodec = { codec: ed }), i2.backupCodec && g2 !== i2.backupCodec.codec && b2.encryption === ht.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = true), b2.simulcastCodecs.push(new Un({ codec: i2.backupCodec.codec, cid: "" })))), T2 = Md(t2.source === ws.Source.ScreenShare, b2.width, b2.height, i2), b2.layers = Bd(b2.width, b2.height, T2, Ls(i2.videoCodec));
          } else
            t2.kind === ws.Kind.Audio && (T2 = [{ maxBitrate: (l2 = i2.audioPreset) === null || l2 === undefined ? undefined : l2.maxBitrate, priority: (h2 = (u2 = i2.audioPreset) === null || u2 === undefined ? undefined : u2.priority) !== null && h2 !== undefined ? h2 : "high", networkPriority: (m2 = (p2 = i2.audioPreset) === null || p2 === undefined ? undefined : p2.priority) !== null && m2 !== undefined ? m2 : "high" }]);
          if (!this.engine || this.engine.isClosed)
            throw new Ka("cannot publish track when not connected");
          const S2 = () => cr(this, undefined, undefined, function* () {
            var n2, r3, a3, s3;
            if (!this.engine.pcManager)
              throw new Ka("pcManager is not ready");
            if (t2.sender = yield this.engine.createSender(t2, i2, T2), bo(t2) && (t2.publishOptions = i2), this.emit(e.ParticipantEvent.LocalSenderCreated, t2.sender, t2), bo(t2) && ((n2 = i2.degradationPreference) !== null && n2 !== undefined || (i2.degradationPreference = function(e2) {
              switch (e2.source) {
                case ws.Source.Camera:
                  return "maintain-framerate";
                case ws.Source.ScreenShare:
                  return "maintain-resolution";
                default:
                  return "balanced";
              }
            }(t2)), t2.setDegradationPreference(i2.degradationPreference)), T2) {
              if (Bs() && t2.kind === ws.Kind.Audio) {
                let e2;
                for (const n3 of this.engine.pcManager.publisher.getTransceivers())
                  if (n3.sender === t2.sender) {
                    e2 = n3;
                    break;
                  }
                e2 && this.engine.pcManager.publisher.setTrackCodecBitrate({ transceiver: e2, codec: "opus", maxbr: ((r3 = T2[0]) === null || r3 === undefined ? undefined : r3.maxBitrate) ? T2[0].maxBitrate / 1000 : 0 });
              } else if (t2.codec && uo(t2.codec)) {
                const e2 = Ls(t2.codec) ? (s3 = (a3 = T2[0]) === null || a3 === undefined ? undefined : a3.maxBitrate) !== null && s3 !== undefined ? s3 : 0 : T2.reduce((e3, t3) => {
                  var n3;
                  return e3 + ((n3 = t3.maxBitrate) !== null && n3 !== undefined ? n3 : 0);
                }, 0);
                e2 > 0 && this.engine.pcManager.publisher.setTrackCodecBitrate({ cid: b2.cid, codec: t2.codec, maxbr: e2 / 1000, isScreenShare: t2.source === ws.Source.ScreenShare });
              }
            }
            yield this.engine.negotiate();
          });
          let E2;
          const C2 = new Promise((e2, i3) => cr(this, undefined, undefined, function* () {
            var r3;
            try {
              E2 = yield this.engine.addTrack(b2), e2(E2);
            } catch (a3) {
              if (t2.sender && ((r3 = this.engine.pcManager) === null || r3 === undefined ? undefined : r3.publisher)) {
                try {
                  this.engine.pcManager.publisher.removeTrack(t2.sender);
                } catch (n2) {
                  this.log.error(n2);
                }
                yield this.engine.negotiate().catch((e3) => {
                  this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign({}, bs(t2)), { error: e3 }));
                });
              }
              i3(a3);
            }
          }));
          if (this.enabledPublishVideoCodecs.length > 0 && y2.length === 0) {
            const e2 = yield Promise.all([C2, S2()]);
            E2 = e2[0];
          } else {
            let e2;
            if (E2 = yield C2, E2.codecs.forEach((t3) => {
              e2 === undefined && (e2 = t3.mimeType);
            }), e2 && t2.kind === ws.Kind.Video) {
              const n2 = ks(e2);
              n2 !== g2 && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign({}, bs(t2)), { codec: n2 })), i2.videoCodec = n2, T2 = Md(t2.source === ws.Source.ScreenShare, b2.width, b2.height, i2));
            }
            yield S2();
          }
          const w2 = new fu(t2.kind, E2, t2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
          if (w2.on(e.TrackEvent.CpuConstrained, (e2) => this.onTrackCpuConstrained(e2, w2)), w2.options = i2, t2.sid = E2.sid, bo(t2) && (t2.publishOptions = i2, b2.width && b2.height && (t2.lastEncodedDimensions = { width: b2.width, height: b2.height })), this.log.debug("publishing ".concat(t2.kind, " with encodings"), { encodings: T2, trackInfo: E2 }), bo(t2) ? t2.startMonitor(this.engine.client) : To(t2) && t2.startMonitor(), this.addTrackPublication(w2), this.emit(e.ParticipantEvent.LocalTrackPublished, w2), To(t2) && E2.audioFeatures.includes(it.TF_PRECONNECT_BUFFER)) {
            const i3 = t2.getPreConnectBuffer(), r3 = t2.getPreConnectBufferMimeType();
            if (this.on(e.ParticipantEvent.LocalTrackSubscribed, (e2) => {
              if (e2.trackSid === E2.sid) {
                if (!t2.hasPreConnectBuffer)
                  return void this.log.warn("subscribe event came to late, buffer already closed");
                this.log.debug("finished recording preconnect buffer", bs(t2)), t2.stopPreConnectBuffer();
              }
            }), i3) {
              const e2 = new Promise((e3, a3) => cr(this, undefined, undefined, function* () {
                var s3, o3, c3, d3, l3, u3;
                try {
                  this.log.debug("waiting for agent", bs(t2));
                  const n2 = setTimeout(() => {
                    a3(new Error("agent not active within 10 seconds"));
                  }, 1e4), v3 = yield this.waitUntilActiveAgentPresent();
                  clearTimeout(n2), this.log.debug("sending preconnect buffer", bs(t2));
                  const f3 = yield this.streamBytes({ name: "preconnect-buffer", mimeType: r3, topic: "lk.agent.pre-connect-audio-buffer", destinationIdentities: [v3.identity], attributes: { trackId: w2.trackSid, sampleRate: String((l3 = k2.sampleRate) !== null && l3 !== undefined ? l3 : "48000"), channels: String((u3 = k2.channelCount) !== null && u3 !== undefined ? u3 : "1") } });
                  try {
                    for (var h3, p3 = true, m3 = hr(i3);!(s3 = (h3 = yield m3.next()).done); p3 = true) {
                      d3 = h3.value, p3 = false;
                      const e4 = d3;
                      yield f3.write(e4);
                    }
                  } catch (g3) {
                    o3 = { error: g3 };
                  } finally {
                    try {
                      p3 || s3 || !(c3 = m3.return) || (yield c3.call(m3));
                    } finally {
                      if (o3)
                        throw o3.error;
                    }
                  }
                  yield f3.close(), e3();
                } catch (n2) {
                  a3(n2);
                }
              }));
              e2.then(() => {
                this.log.debug("preconnect buffer sent successfully", bs(t2));
              }).catch((e3) => {
                this.log.error("error sending preconnect buffer", Object.assign(Object.assign({}, bs(t2)), { error: e3 }));
              });
            }
          }
          return w2;
        });
      }
      canPublishFrameMetadata() {
        var e2;
        return !!(this.roomOptions.e2ee || this.roomOptions.encryption || Jo((e2 = this.roomOptions.frameMetadata) !== null && e2 !== undefined ? e2 : this.roomOptions.packetTrailer));
      }
      normalizeRequestedFrameMetadataOptions(e2, t2) {
        var n2;
        const i2 = (n2 = t2.frameMetadata) !== null && n2 !== undefined ? n2 : t2.packetTrailer;
        if (e2.kind !== ws.Kind.Video || !Qo(i2))
          return t2.frameMetadata = undefined, t2.packetTrailer = undefined, [];
        if (!this.canPublishFrameMetadata())
          return this.log.warn("frame metadata transform not supported; not advertising features", Object.assign(Object.assign({}, this.logContext), bs(e2))), t2.frameMetadata = undefined, t2.packetTrailer = undefined, [];
        const r2 = function(e3) {
          const t3 = [];
          return (e3 == null ? undefined : e3.timestamp) && t3.push(rt.PTF_USER_TIMESTAMP), (e3 == null ? undefined : e3.frameId) && t3.push(rt.PTF_FRAME_ID), t3;
        }(i2), a2 = function(e3) {
          if (!e3 || e3.length === 0)
            return;
          const t3 = {};
          return e3.includes(rt.PTF_USER_TIMESTAMP) && (t3.timestamp = true), e3.includes(rt.PTF_FRAME_ID) && (t3.frameId = true), t3.timestamp || t3.frameId ? t3 : undefined;
        }(r2);
        return t2.frameMetadata = a2, t2.packetTrailer = a2, r2;
      }
      get isLocal() {
        return true;
      }
      publishAdditionalCodecForTrack(e2, t2, n2) {
        return cr(this, undefined, undefined, function* () {
          var i2;
          if (this.encryptionType !== ht.NONE)
            return;
          let r2;
          if (this.trackPublications.forEach((t3) => {
            t3.track && t3.track === e2 && (r2 = t3);
          }), !r2)
            throw new Wa("track is not published");
          if (!bo(e2))
            throw new Wa("track is not a video track");
          const a2 = Object.assign(Object.assign({}, (i2 = this.roomOptions) === null || i2 === undefined ? undefined : i2.publishDefaults), n2), s2 = Dd(e2, t2, a2);
          if (!s2)
            return void this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", bs(e2));
          const o2 = e2.addSimulcastTrack(t2, s2);
          if (!o2)
            return;
          const c2 = this.normalizeRequestedFrameMetadataOptions(e2, a2), d2 = new Fn({ cid: o2.mediaStreamTrack.id, type: ws.kindToProto(e2.kind), muted: e2.isMuted, source: ws.sourceToProto(e2.source), sid: e2.sid, packetTrailerFeatures: c2, simulcastCodecs: [{ codec: a2.videoCodec, cid: o2.mediaStreamTrack.id }] });
          if (d2.layers = Bd(d2.width, d2.height, s2), !this.engine || this.engine.isClosed)
            throw new Ka("cannot publish track when not connected");
          const l2 = (yield Promise.all([this.engine.addTrack(d2), (() => cr(this, undefined, undefined, function* () {
            yield this.engine.createSimulcastSender(e2, o2, a2, s2), yield this.engine.negotiate();
          }))()]))[0];
          this.log.debug("published ".concat(t2, " for track ").concat(e2.sid), { encodings: s2, trackInfo: l2 });
        });
      }
      unpublishTrack(t2, i2) {
        return cr(this, undefined, undefined, function* () {
          var r2, a2;
          if (fo(t2)) {
            const e2 = this.pendingPublishPromises.get(t2);
            e2 && (this.log.debug("awaiting publish promise before attempting to unpublish", bs(t2)), yield e2);
          }
          const s2 = this.getPublicationForTrack(t2), o2 = s2 ? bs(s2) : undefined;
          if (this.log.info("unpublishing track", o2), !s2 || !s2.track)
            return void this.log.warn("track was not unpublished because no publication was found", o2);
          (t2 = s2.track).off(e.TrackEvent.Muted, this.onTrackMuted), t2.off(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.off(e.TrackEvent.Ended, this.handleTrackEnded), t2.off(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.off(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.off(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), i2 === undefined && (i2 = (a2 = (r2 = this.roomOptions) === null || r2 === undefined ? undefined : r2.stopLocalTrackOnUnpublish) === null || a2 === undefined || a2), i2 ? t2.stop() : t2.stopMonitor();
          let c2 = false;
          const d2 = t2.sender;
          if (t2.sender = undefined, this.engine.pcManager && this.engine.pcManager.currentState < sd.FAILED && d2)
            try {
              for (const e2 of this.engine.pcManager.publisher.getTransceivers())
                e2.sender === d2 && (e2.direction = "inactive", c2 = true);
              try {
                c2 = this.engine.removeTrack(d2);
              } catch (n2) {
                this.log.warn(n2), c2 = true;
              }
              if (bo(t2)) {
                for (const e2 of t2.simulcastCodecs) {
                  const t3 = L(e2, 2)[1];
                  if (t3.sender) {
                    try {
                      c2 = this.engine.removeTrack(t3.sender);
                    } catch (n2) {
                      this.log.warn(n2), c2 = true;
                    }
                    t3.sender = undefined;
                  }
                }
                t2.simulcastCodecs.clear();
              }
            } catch (n2) {
              this.log.warn("failed to unpublish track", Object.assign(Object.assign({}, o2), { error: n2 }));
            }
          switch (this.trackPublications.delete(s2.trackSid), s2.kind) {
            case ws.Kind.Audio:
              this.audioTrackPublications.delete(s2.trackSid);
              break;
            case ws.Kind.Video:
              this.videoTrackPublications.delete(s2.trackSid);
          }
          return this.emit(e.ParticipantEvent.LocalTrackUnpublished, s2), s2.setTrack(undefined), c2 && (yield this.engine.negotiate()), s2;
        });
      }
      unpublishTracks(e2) {
        return cr(this, undefined, undefined, function* () {
          return (yield Promise.all(e2.map((e3) => this.unpublishTrack(e3)))).filter((e3) => !!e3);
        });
      }
      republishAllTracks(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let n2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
          return function* () {
            t2.republishPromise && (yield t2.republishPromise), t2.republishPromise = new Ca((i2, r2) => cr(t2, undefined, undefined, function* () {
              try {
                const t3 = [];
                this.trackPublications.forEach((n3) => {
                  n3.track && (e3 && (n3.options = Object.assign(Object.assign({}, n3.options), e3)), t3.push(n3));
                }), yield Promise.all(t3.map((e4) => cr(this, undefined, undefined, function* () {
                  const t4 = e4.track;
                  yield this.unpublishTrack(t4, false), !n2 || t4.isMuted || t4.source === ws.Source.ScreenShare || t4.source === ws.Source.ScreenShareAudio || !To(t4) && !bo(t4) || t4.isUserProvided || (this.log.debug("restarting existing track", { track: e4.trackSid }), yield t4.restartTrack()), yield this.publishOrRepublishTrack(t4, e4.options, true);
                }))), i2();
              } catch (t3) {
                t3 instanceof Error ? r2(t3) : r2(new Error(String(t3)));
              } finally {
                this.republishPromise = undefined;
              }
            })), yield t2.republishPromise;
          }();
        });
      }
      publishData(e2) {
        return cr(this, arguments, undefined, function(e3) {
          var t2 = this;
          let n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return function* () {
            const i2 = n2.reliable ? od.RELIABLE : od.LOSSY, r2 = n2.reliable ? Pt.RELIABLE : Pt.LOSSY, a2 = n2.destinationIdentities, s2 = n2.topic;
            let o2 = new Ot({ participantIdentity: t2.identity, payload: e3, destinationIdentities: a2, topic: s2 });
            const c2 = new Rt({ kind: r2, value: { case: "user", value: o2 } });
            yield t2.engine.sendDataPacket(c2, i2);
          }();
        });
      }
      publishDtmf(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = new Rt({ kind: Pt.RELIABLE, value: { case: "sipDtmf", value: new At({ code: e2, digit: t2 }) } });
          yield this.engine.sendDataPacket(n2, od.RELIABLE);
        });
      }
      sendChatMessage(t2, n2) {
        return cr(this, undefined, undefined, function* () {
          const i2 = { id: crypto.randomUUID(), message: t2, timestamp: Date.now(), attachedFiles: n2 == null ? undefined : n2.attachments }, r2 = new Rt({ value: { case: "chatMessage", value: new xt(Object.assign(Object.assign({}, i2), { timestamp: R.parse(i2.timestamp) })) } });
          return yield this.engine.sendDataPacket(r2, od.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
        });
      }
      editChatMessage(t2, n2) {
        return cr(this, undefined, undefined, function* () {
          const i2 = Object.assign(Object.assign({}, n2), { message: t2, editTimestamp: Date.now() }), r2 = new Rt({ value: { case: "chatMessage", value: new xt(Object.assign(Object.assign({}, i2), { timestamp: R.parse(i2.timestamp), editTimestamp: R.parse(i2.editTimestamp) })) } });
          return yield this.engine.sendDataPacket(r2, od.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
        });
      }
      sendText(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          return this.roomOutgoingDataStreamManager.sendText(e2, t2);
        });
      }
      streamText(e2) {
        return cr(this, undefined, undefined, function* () {
          return this.roomOutgoingDataStreamManager.streamText(e2);
        });
      }
      sendFile(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          return this.roomOutgoingDataStreamManager.sendFile(e2, t2);
        });
      }
      sendBytes(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          return this.roomOutgoingDataStreamManager.sendBytes(e2, t2);
        });
      }
      streamBytes(e2) {
        return cr(this, undefined, undefined, function* () {
          return this.roomOutgoingDataStreamManager.streamBytes(e2);
        });
      }
      performRpc(e2) {
        return this.rpcClientManager.performRpc(e2).then((e3) => {
          let t2 = L(e3, 2);
          return t2[0], t2[1];
        });
      }
      registerRpcMethod(e2, t2) {
        this.rpcServerManager.registerRpcMethod(e2, t2);
      }
      unregisterRpcMethod(e2) {
        this.rpcServerManager.unregisterRpcMethod(e2);
      }
      setTrackSubscriptionPermissions(e2) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        this.participantTrackPermissions = t2, this.allParticipantsAllowedToSubscribe = e2, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions();
      }
      setEnabledPublishCodecs(e2) {
        this.enabledPublishVideoCodecs = e2.filter((e3) => e3.mime.split("/")[0].toLowerCase() === "video");
      }
      updateInfo(e2) {
        return !!super.updateInfo(e2) && (e2.tracks.forEach((e3) => {
          var t2, n2;
          const i2 = this.trackPublications.get(e3.sid);
          if (i2) {
            const r2 = i2.isMuted || (n2 = (t2 = i2.track) === null || t2 === undefined ? undefined : t2.isUpstreamPaused) !== null && n2 !== undefined && n2;
            r2 !== e3.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign({}, bs(i2)), { mutedOnServer: r2 })), this.engine.client.sendMuteTrack(e3.sid, r2));
          }
        }), true);
      }
      setActiveAgent(e2) {
        var t2, n2, i2, r2;
        this.firstActiveAgent = e2, e2 && !this.firstActiveAgent && (this.firstActiveAgent = e2), e2 ? (n2 = (t2 = this.activeAgentFuture) === null || t2 === undefined ? undefined : t2.resolve) === null || n2 === undefined || n2.call(t2, e2) : (r2 = (i2 = this.activeAgentFuture) === null || i2 === undefined ? undefined : i2.reject) === null || r2 === undefined || r2.call(i2, new Error("Agent disconnected")), this.activeAgentFuture = undefined;
      }
      waitUntilActiveAgentPresent() {
        return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new lo), this.activeAgentFuture.promise);
      }
      getPublicationForTrack(e2) {
        let t2;
        return this.trackPublications.forEach((n2) => {
          const i2 = n2.track;
          i2 && (e2 instanceof MediaStreamTrack ? (To(i2) || bo(i2)) && i2.mediaStreamTrack === e2 && (t2 = n2) : e2 === i2 && (t2 = n2));
        }), t2;
      }
      waitForPendingPublicationOfSource(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = Date.now();
          for (;Date.now() < t2 + 1e4; ) {
            const t3 = Array.from(this.pendingPublishPromises.entries()).find((t4) => L(t4, 1)[0].source === e2);
            if (t3)
              return t3[1];
            yield Ms(20);
          }
        });
      }
      publishDataTrack(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = new nu(e2, this.roomOutgoingDataTrackManager);
          return yield t2.publish(), t2;
        });
      }
    }

    class wu extends DOMException {
      constructor(e2, t2) {
        super(e2, "AbortError"), this.reason = t2;
      }
    }

    class Ru extends Map {
      constructor() {
        super(...arguments), this.pending = new Map;
      }
      set(e2, t2) {
        var n2, i2;
        super.set(e2, t2);
        const r2 = (n2 = this.pending) === null || n2 === undefined ? undefined : n2.get(e2);
        if (r2) {
          for (const e3 of r2)
            e3.isResolved || (i2 = e3.resolve) === null || i2 === undefined || i2.call(e3, t2);
          this.pending.delete(e2);
        }
        return this;
      }
      get [Symbol.toStringTag]() {
        return "DeferrableMap";
      }
      getDeferred(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = this.get(e2);
          if (n2 !== undefined)
            return n2;
          if (t2 == null ? undefined : t2.aborted)
            throw new wu("The operation was aborted.", t2.reason);
          const i2 = new lo(undefined, () => {
            const t3 = this.pending.get(e2);
            if (!t3)
              return;
            const n3 = t3.indexOf(i2);
            n3 !== -1 && t3.splice(n3, 1), t3.length === 0 && this.pending.delete(e2);
          }), r2 = this.pending.get(e2);
          if (r2 ? r2.push(i2) : this.pending.set(e2, [i2]), t2) {
            const e3 = () => {
              var e4;
              i2.isResolved || (e4 = i2.reject) === null || e4 === undefined || e4.call(i2, new wu("The operation was aborted.", t2.reason));
            };
            t2.addEventListener("abort", e3, { once: true }), i2.promise.finally(() => {
              t2.removeEventListener("abort", e3);
            });
          }
          return i2.promise;
        });
      }
    }

    class Pu extends vu {
      constructor(t2, n2, i2, r2) {
        super(t2, n2.sid, n2.name, r2), this.track = undefined, this.allowed = true, this.requestedDisabled = undefined, this.visible = true, this.handleEnded = (t3) => {
          this.setTrack(undefined), this.emit(e.TrackEvent.Ended, t3);
        }, this.handleVisibilityChange = (e2) => {
          this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(e2), this.logContext), this.visible = e2, this.emitTrackUpdate();
        }, this.handleVideoDimensionsChange = (e2) => {
          this.log.debug("adaptivestream video dimensions ".concat(e2.width, "x").concat(e2.height), this.logContext), this.videoDimensionsAdaptiveStream = e2, this.emitTrackUpdate();
        }, this.subscribed = i2, this.updateInfo(n2);
      }
      setSubscribed(t2) {
        const n2 = this.subscriptionStatus, i2 = this.permissionStatus;
        this.subscribed = t2, t2 && (this.allowed = true);
        const r2 = new $n({ trackSids: [this.trackSid], subscribe: this.subscribed, participantTracks: [new qt({ participantSid: "", trackSids: [this.trackSid] })] });
        this.emit(e.TrackEvent.UpdateSubscription, r2), this.emitSubscriptionUpdateIfChanged(n2), this.emitPermissionUpdateIfChanged(i2);
      }
      get subscriptionStatus() {
        return this.subscribed === false ? vu.SubscriptionStatus.Unsubscribed : super.isSubscribed ? vu.SubscriptionStatus.Subscribed : vu.SubscriptionStatus.Desired;
      }
      get permissionStatus() {
        return this.allowed ? vu.PermissionStatus.Allowed : vu.PermissionStatus.NotAllowed;
      }
      get isSubscribed() {
        return this.subscribed !== false && super.isSubscribed;
      }
      get isDesired() {
        return this.subscribed !== false;
      }
      get isEnabled() {
        return this.requestedDisabled !== undefined ? !this.requestedDisabled : !this.isAdaptiveStream || this.visible;
      }
      get isLocal() {
        return false;
      }
      setEnabled(e2) {
        this.isManualOperationAllowed() && this.requestedDisabled !== !e2 && (this.requestedDisabled = !e2, this.emitTrackUpdate());
      }
      setVideoQuality(e2) {
        this.isManualOperationAllowed() && this.requestedMaxQuality !== e2 && (this.requestedMaxQuality = e2, this.requestedVideoDimensions = undefined, this.emitTrackUpdate());
      }
      setVideoDimensions(e2) {
        var t2, n2;
        this.isManualOperationAllowed() && (((t2 = this.requestedVideoDimensions) === null || t2 === undefined ? undefined : t2.width) === e2.width && ((n2 = this.requestedVideoDimensions) === null || n2 === undefined ? undefined : n2.height) === e2.height || (Co(this.track) && (this.requestedVideoDimensions = e2), this.requestedMaxQuality = undefined, this.emitTrackUpdate()));
      }
      setVideoFPS(e2) {
        this.isManualOperationAllowed() && Co(this.track) && this.fps !== e2 && (this.fps = e2, this.emitTrackUpdate());
      }
      get videoQuality() {
        var t2;
        return (t2 = this.requestedMaxQuality) !== null && t2 !== undefined ? t2 : e.VideoQuality.HIGH;
      }
      setTrack(t2) {
        const n2 = this.subscriptionStatus, i2 = this.permissionStatus, r2 = this.track;
        r2 !== t2 && (r2 && (r2.off(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), r2.off(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), r2.off(e.TrackEvent.Ended, this.handleEnded), r2.detach(), r2.stopMonitor(), this.emit(e.TrackEvent.Unsubscribed, r2)), super.setTrack(t2), t2 && (t2.sid = this.trackSid, t2.on(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), t2.on(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), t2.on(e.TrackEvent.Ended, this.handleEnded), this.emit(e.TrackEvent.Subscribed, t2)), this.emitPermissionUpdateIfChanged(i2), this.emitSubscriptionUpdateIfChanged(n2));
      }
      setAllowed(e2) {
        const t2 = this.subscriptionStatus, n2 = this.permissionStatus;
        this.allowed = e2, this.emitPermissionUpdateIfChanged(n2), this.emitSubscriptionUpdateIfChanged(t2);
      }
      setSubscriptionError(t2) {
        this.emit(e.TrackEvent.SubscriptionFailed, t2);
      }
      updateInfo(t2) {
        super.updateInfo(t2);
        const n2 = this.metadataMuted;
        this.metadataMuted = t2.muted, this.track ? this.track.setMuted(t2.muted) : n2 !== t2.muted && this.emit(t2.muted ? e.TrackEvent.Muted : e.TrackEvent.Unmuted);
      }
      emitSubscriptionUpdateIfChanged(t2) {
        const n2 = this.subscriptionStatus;
        t2 !== n2 && this.emit(e.TrackEvent.SubscriptionStatusChanged, n2, t2);
      }
      emitPermissionUpdateIfChanged(t2) {
        this.permissionStatus !== t2 && this.emit(e.TrackEvent.SubscriptionPermissionChanged, this.permissionStatus, t2);
      }
      isManualOperationAllowed() {
        return !!this.isDesired || (this.log.warn("cannot update track settings when not subscribed", this.logContext), false);
      }
      get isAdaptiveStream() {
        return Co(this.track) && this.track.isAdaptiveStream;
      }
      emitTrackUpdate() {
        const t2 = new si({ trackSids: [this.trackSid], disabled: !this.isEnabled, fps: this.fps });
        if (this.kind === ws.Kind.Video) {
          let n2 = this.requestedVideoDimensions;
          if (this.videoDimensionsAdaptiveStream !== undefined)
            if (n2) {
              Ss(this.videoDimensionsAdaptiveStream, n2) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream);
            } else if (this.requestedMaxQuality !== undefined && this.trackInfo) {
              const e2 = function(e3, t3) {
                var n3;
                return (n3 = e3.layers) === null || n3 === undefined ? undefined : n3.find((e4) => e4.quality === t3);
              }(this.trackInfo, this.requestedMaxQuality);
              e2 && Ss(this.videoDimensionsAdaptiveStream, e2) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream);
            } else
              this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream;
          n2 ? (t2.width = Math.ceil(n2.width), t2.height = Math.ceil(n2.height)) : this.requestedMaxQuality !== undefined ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), { quality: this.requestedMaxQuality })), t2.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), { quality: e.VideoQuality.HIGH })), t2.quality = e.VideoQuality.HIGH);
        }
        this.emit(e.TrackEvent.UpdateSettings, t2);
      }
    }

    class Iu extends Eu {
      static fromParticipantInfo(e2, t2, n2, i2) {
        return new Iu(e2, t2.sid, t2.identity, t2.name, t2.metadata, t2.attributes, n2, t2.kind, t2.dataTracks.map((e3) => {
          const n3 = Tc.from(e3);
          return new Al(n3, i2, { publisherIdentity: t2.identity });
        }), t2.clientProtocol, t2.capabilities);
      }
      get logContext() {
        return Object.assign(Object.assign({}, super.logContext), { remoteParticipantID: this.sid, remoteParticipant: this.identity });
      }
      constructor(e2, t2, n2, i2, r2, a2, s2) {
        let o2 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : lt.STANDARD, c2 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [], d2 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0, l2 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : [];
        super(t2, n2 || "", i2, r2, a2, s2, o2), this.signalClient = e2, this.trackPublications = new Map, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.dataTracks = new Ru(c2.map((e3) => [e3.info.name, e3])), this.volumeMap = new Map, this.clientProtocol = d2, this.capabilities = l2;
      }
      addTrackPublication(t2) {
        super.addTrackPublication(t2), t2.on(e.TrackEvent.UpdateSettings, (e2) => {
          this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), bs(t2)), { settings: e2 })), this.signalClient.sendUpdateTrackSettings(e2);
        }), t2.on(e.TrackEvent.UpdateSubscription, (e2) => {
          e2.participantTracks.forEach((e3) => {
            e3.participantSid = this.sid;
          }), this.signalClient.sendUpdateSubscription(e2);
        }), t2.on(e.TrackEvent.SubscriptionPermissionChanged, (n2) => {
          this.emit(e.ParticipantEvent.TrackSubscriptionPermissionChanged, t2, n2);
        }), t2.on(e.TrackEvent.SubscriptionStatusChanged, (n2) => {
          this.emit(e.ParticipantEvent.TrackSubscriptionStatusChanged, t2, n2);
        }), t2.on(e.TrackEvent.Subscribed, (n2) => {
          this.emit(e.ParticipantEvent.TrackSubscribed, n2, t2);
        }), t2.on(e.TrackEvent.Unsubscribed, (n2) => {
          this.emit(e.ParticipantEvent.TrackUnsubscribed, n2, t2);
        }), t2.on(e.TrackEvent.SubscriptionFailed, (n2) => {
          this.emit(e.ParticipantEvent.TrackSubscriptionFailed, t2.trackSid, n2);
        });
      }
      getTrackPublication(e2) {
        const t2 = super.getTrackPublication(e2);
        if (t2)
          return t2;
      }
      getTrackPublicationByName(e2) {
        const t2 = super.getTrackPublicationByName(e2);
        if (t2)
          return t2;
      }
      setVolume(e2) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ws.Source.Microphone;
        this.volumeMap.set(t2, e2);
        const n2 = this.getTrackPublication(t2);
        n2 && n2.track && n2.track.setVolume(e2);
      }
      getVolume() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ws.Source.Microphone;
        const t2 = this.getTrackPublication(e2);
        return t2 && t2.track ? t2.track.getVolume() : this.volumeMap.get(e2);
      }
      addSubscribedMediaTrack(t2, n2, i2, r2, a2, s2) {
        let o2 = this.getTrackPublicationBySid(n2);
        if (o2 || n2.startsWith("TR") || this.trackPublications.forEach((e2) => {
          o2 || t2.kind !== e2.kind.toString() || (o2 = e2);
        }), !o2)
          return s2 === 0 ? (this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), { trackSid: n2 })), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2)) : (s2 === undefined && (s2 = 20), void setTimeout(() => {
            this.addSubscribedMediaTrack(t2, n2, i2, r2, a2, s2 - 1);
          }, 150));
        if (t2.readyState === "ended")
          return this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), bs(o2))), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2);
        let c2;
        return c2 = t2.kind === "video" ? new ec(t2, n2, r2, a2) : new gu(t2, n2, r2, this.audioContext, this.audioOutput), c2.source = o2.source, c2.isMuted = o2.isMuted, c2.setMediaStream(i2), c2.start(), o2.setTrack(c2), this.volumeMap.has(o2.source) && So(c2) && ko(c2) && c2.setVolume(this.volumeMap.get(o2.source)), o2;
      }
      get hasMetadata() {
        return !!this.participantInfo;
      }
      getTrackPublicationBySid(e2) {
        return this.trackPublications.get(e2);
      }
      updateInfo(t2) {
        if (!super.updateInfo(t2))
          return false;
        const n2 = new Map, i2 = new Map;
        return t2.tracks.forEach((e2) => {
          var t3, r2;
          let a2 = this.getTrackPublicationBySid(e2.sid);
          if (a2)
            a2.updateInfo(e2);
          else {
            const n3 = ws.kindFromProto(e2.type);
            if (!n3)
              return;
            a2 = new Pu(n3, e2, (t3 = this.signalClient.connectOptions) === null || t3 === undefined ? undefined : t3.autoSubscribe, { loggerContextCb: () => this.logContext, loggerName: (r2 = this.loggerOptions) === null || r2 === undefined ? undefined : r2.loggerName }), a2.updateInfo(e2), i2.set(e2.sid, a2);
            const s2 = Array.from(this.trackPublications.values()).find((e3) => e3.source === (a2 == null ? undefined : a2.source));
            s2 && a2.source !== ws.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(a2.source), Object.assign(Object.assign({}, this.logContext), { oldTrack: bs(s2), newTrack: bs(a2) })), this.addTrackPublication(a2);
          }
          n2.set(e2.sid, a2);
        }), this.trackPublications.forEach((e2) => {
          n2.has(e2.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), bs(e2))), this.unpublishTrack(e2.trackSid, true));
        }), i2.forEach((t3) => {
          this.emit(e.ParticipantEvent.TrackPublished, t3);
        }), true;
      }
      unpublishTrack(t2, n2) {
        const i2 = this.trackPublications.get(t2);
        if (!i2)
          return;
        const r2 = i2.track;
        switch (r2 && (r2.stop(), i2.setTrack(undefined)), this.trackPublications.delete(t2), i2.kind) {
          case ws.Kind.Audio:
            this.audioTrackPublications.delete(t2);
            break;
          case ws.Kind.Video:
            this.videoTrackPublications.delete(t2);
        }
        n2 && this.emit(e.ParticipantEvent.TrackUnpublished, i2);
      }
      setAudioOutput(e2) {
        return cr(this, undefined, undefined, function* () {
          this.audioOutput = e2;
          const t2 = [];
          this.audioTrackPublications.forEach((n2) => {
            var i2;
            ko(n2.track) && So(n2.track) && t2.push(n2.track.setSinkId((i2 = e2.deviceId) !== null && i2 !== undefined ? i2 : "default"));
          }), yield Promise.all(t2);
        });
      }
      addRemoteDataTrack(e2) {
        this.dataTracks.set(e2.info.name, e2);
      }
      removeRemoteDataTrack(e2) {
        for (const n2 of this.dataTracks.entries()) {
          var t2 = L(n2, 2);
          const i2 = t2[0];
          e2 === t2[1].info.sid && this.dataTracks.delete(i2);
        }
      }
      emit(e2) {
        for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1;i2 < t2; i2++)
          n2[i2 - 1] = arguments[i2];
        return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), { event: e2, args: n2 })), super.emit(e2, ...n2);
      }
    }
    e.ConnectionState = undefined, (Su = e.ConnectionState || (e.ConnectionState = {})).Disconnected = "disconnected", Su.Connecting = "connecting", Su.Connected = "connected", Su.Reconnecting = "reconnecting", Su.SignalReconnecting = "signalReconnecting";

    class _u extends gr.EventEmitter {
      get hasE2EESetup() {
        return this.e2eeManager !== undefined;
      }
      constructor(t2) {
        var i2, a2, s2, o2, c2, d2, l2;
        if (super(), i2 = this, this.state = e.ConnectionState.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = false, this.audioEnabled = true, this.e2eeStateMutex = new r, this.isVideoPlaybackBlocked = false, this.log = er, this.bufferedEvents = [], this.isResuming = false, this.pendingTrackAddedCallbacks = new Map, this.connect = (t3, n2, i3) => cr(this, undefined, undefined, function* () {
          var r2;
          if (!Fs())
            throw zs() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
          const a3 = yield this.disconnectLock.lock();
          if (this.state === e.ConnectionState.Connected)
            return this.log.info("already connected to room ".concat(this.name)), a3(), Promise.resolve();
          if (this.connectFuture)
            return a3(), this.connectFuture.promise;
          this.setAndEmitConnectionState(e.ConnectionState.Connecting), ((r2 = this.regionUrlProvider) === null || r2 === undefined ? undefined : r2.getServerUrl().toString()) !== Mo(t3) && (this.regionUrl = undefined, this.regionUrlProvider = undefined), Gs(new URL(t3)) && (this.regionUrlProvider === undefined ? this.regionUrlProvider = new zd(t3, n2) : this.regionUrlProvider.updateToken(n2), this.regionUrlProvider.fetchRegionSettings().then((e2) => {
            var t4;
            (t4 = this.regionUrlProvider) === null || t4 === undefined || t4.setServerReportedRegions(e2);
          }).catch((e2) => {
            this.log.warn("could not fetch region settings", { error: e2 });
          }));
          const s3 = (r3, o4, c3) => cr(this, undefined, undefined, function* () {
            var d3, l3;
            this.abortController && this.abortController.abort();
            const u2 = new AbortController;
            this.abortController = u2, a3 == null || a3();
            try {
              if (yield cc.getInstance().getBackOffPromise(t3), u2.signal.aborted)
                throw qa.cancelled("Connection attempt aborted");
              yield this.attemptConnection(c3 != null ? c3 : t3, n2, i3, u2), this.abortController = undefined, r3();
            } catch (h2) {
              if (this.regionUrlProvider && h2 instanceof qa && h2.reason !== e.ConnectionErrorReason.Cancelled && h2.reason !== e.ConnectionErrorReason.NotAllowed) {
                let n3 = null;
                try {
                  this.log.debug("Fetching next region"), n3 = yield this.regionUrlProvider.getNextBestRegionUrl((d3 = this.abortController) === null || d3 === undefined ? undefined : d3.signal);
                } catch (p2) {
                  if (p2 instanceof qa && (p2.status === 401 || p2.reason === e.ConnectionErrorReason.Cancelled))
                    return this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), void o4(p2);
                }
                [e.ConnectionErrorReason.InternalError, e.ConnectionErrorReason.ServerUnreachable, e.ConnectionErrorReason.Timeout].includes(h2.reason) && (this.log.debug("Adding failed connection attempt to back off"), cc.getInstance().addFailedConnectionAttempt(t3)), n3 && !((l3 = this.abortController) === null || l3 === undefined ? undefined : l3.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(h2.message, ". Retrying with another region: ").concat(n3)), this.recreateEngine(true), yield s3(r3, o4, n3)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, mo(h2)), o4(h2));
              } else {
                let e2 = et.UNKNOWN_REASON;
                h2 instanceof qa && (e2 = mo(h2)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2), o4(h2);
              }
            }
          }), o3 = this.regionUrl;
          return this.regionUrl = undefined, this.connectFuture = new lo((e2, t4) => {
            s3(e2, t4, o3);
          }, () => {
            this.clearConnectionFutures();
          }), this.connectFuture.promise;
        }), this.connectSignal = (e2, t3, n2, i3, r2, a3) => cr(this, undefined, undefined, function* () {
          const s3 = yield n2.join(e2, t3, { autoSubscribe: i3.autoSubscribe, adaptiveStream: typeof r2.adaptiveStream == "object" || r2.adaptiveStream, clientInfoCapabilities: this.getClientInfoCapabilities(r2), maxRetries: i3.maxRetries, e2eeEnabled: !!this.e2eeManager, websocketTimeout: i3.websocketTimeout }, a3.signal, !r2.singlePeerConnection), o3 = s3.joinResponse, c3 = s3.serverInfo;
          if (this.serverInfo = c3, !c3.version)
            throw new Ha("unknown server version");
          return c3.version === "0.15.1" && this.options.dynacast && (this.log.debug("disabling dynacast due to server version"), r2.dynacast = false), o3;
        }), this.applyJoinResponse = (e2) => {
          const t3 = e2.participant;
          if (this.localParticipant.sid = t3.sid, this.localParticipant.identity = t3.identity, this.localParticipant.setEnabledPublishCodecs(e2.enabledPublishCodecs), this.e2eeManager)
            try {
              this.e2eeManager.setSifTrailer(e2.sifTrailer);
            } catch (n2) {
              this.log.error(n2 instanceof Error ? n2.message : "Could not set SifTrailer", { error: n2 });
            }
          this.handleParticipantUpdates([t3, ...e2.otherParticipants]), e2.room && this.handleRoomUpdate(e2.room);
        }, this.attemptConnection = (t3, i3, r2, a3) => cr(this, undefined, undefined, function* () {
          var s3, o3;
          this.state === e.ConnectionState.Reconnecting || this.isResuming || ((s3 = this.engine) === null || s3 === undefined ? undefined : s3.pendingReconnect) ? (this.log.info("Reconnection attempt replaced by new connection attempt"), this.recreateEngine(true)) : this.maybeCreateEngine(), ((o3 = this.regionUrlProvider) === null || o3 === undefined ? undefined : o3.isCloud()) && this.engine.setRegionStrategy(this.createRegionStrategy()), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, ad), r2), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
          try {
            const n2 = yield this.connectSignal(t3, i3, this.engine, this.connOptions, this.options, a3);
            this.applyJoinResponse(n2), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected);
          } catch (c3) {
            yield this.engine.close(), this.recreateEngine();
            const e2 = a3.signal.aborted ? qa.cancelled("Signal connection aborted") : qa.serverUnreachable("could not establish signal connection");
            throw c3 instanceof Error && (e2.message = "".concat(e2.message, ": ").concat(c3.message)), c3 instanceof qa && (e2.reason = c3.reason, e2.status = c3.status), this.log.debug("error trying to establish signal connection", { error: c3 }), e2;
          }
          if (a3.signal.aborted)
            throw yield this.engine.close(), this.recreateEngine(), qa.cancelled("Connection attempt aborted");
          try {
            yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, a3);
          } catch (n2) {
            throw yield this.engine.close(), this.recreateEngine(), n2;
          }
          Ks() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), Ks() && window.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Connected), cc.getInstance().resetFailedConnectionAttempts(t3), this.registerConnectionReconcile(), this.regionUrlProvider && this.regionUrlProvider.notifyConnected();
        }), this.disconnect = function() {
          for (var t3 = arguments.length, n2 = new Array(t3), r2 = 0;r2 < t3; r2++)
            n2[r2] = arguments[r2];
          return cr(i2, [...n2], undefined, function() {
            var t4 = this;
            let n3 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
            return function* () {
              var i3, r3, a3;
              const s3 = yield t4.disconnectLock.lock();
              try {
                if (t4.state === e.ConnectionState.Disconnected)
                  return void t4.log.debug("already disconnected");
                if (t4.log.info("disconnect from room"), t4.state === e.ConnectionState.Connecting || t4.state === e.ConnectionState.Reconnecting || t4.isResuming) {
                  const e2 = "Abort connection attempt due to user initiated disconnect";
                  t4.log.warn(e2), (i3 = t4.abortController) === null || i3 === undefined || i3.abort(e2), (a3 = (r3 = t4.connectFuture) === null || r3 === undefined ? undefined : r3.reject) === null || a3 === undefined || a3.call(r3, qa.cancelled("Client initiated disconnect")), t4.connectFuture = undefined;
                }
                t4.engine && (t4.engine.client.isDisconnected || (yield t4.engine.client.sendLeave()), yield t4.engine.close()), t4.handleDisconnect(n3, et.CLIENT_INITIATED), t4.engine = undefined;
              } finally {
                s3();
              }
            }();
          });
        }, this.onPageLeave = () => cr(this, undefined, undefined, function* () {
          this.log.info("Page leave detected, disconnecting"), yield this.disconnect();
        }), this.startAudio = () => cr(this, undefined, undefined, function* () {
          const t3 = [], n2 = Pa();
          if (n2 && n2.os === "iOS") {
            const n3 = "livekit-dummy-audio-el";
            let i3 = document.getElementById(n3);
            if (!i3) {
              i3 = document.createElement("audio"), i3.id = n3, i3.autoplay = true, i3.hidden = true;
              const t4 = co();
              t4.enabled = true;
              const r2 = new MediaStream([t4]);
              i3.srcObject = r2, document.addEventListener("visibilitychange", () => {
                i3 && (i3.srcObject = document.hidden ? null : r2, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status"), this.startAudio()));
              }), document.body.append(i3), this.once(e.RoomEvent.Disconnected, () => {
                i3 == null || i3.remove(), i3 = null;
              });
            }
            t3.push(i3);
          }
          this.remoteParticipants.forEach((e2) => {
            e2.audioTrackPublications.forEach((e3) => {
              e3.track && e3.track.attachedElements.forEach((e4) => {
                t3.push(e4);
              });
            });
          });
          try {
            yield Promise.all([this.acquireAudioContext(), ...t3.map((e2) => (this.options.webAudioMix || (e2.muted = false), e2.play()))]), this.handleAudioPlaybackStarted();
          } catch (i3) {
            throw this.handleAudioPlaybackFailed(i3), i3;
          }
        }), this.startVideo = () => cr(this, undefined, undefined, function* () {
          const e2 = [];
          for (const t3 of this.remoteParticipants.values())
            t3.videoTrackPublications.forEach((t4) => {
              var n2;
              (n2 = t4.track) === null || n2 === undefined || n2.attachedElements.forEach((t5) => {
                e2.includes(t5) || e2.push(t5);
              });
            });
          yield Promise.all(e2.map((e3) => e3.play())).then(() => {
            this.handleVideoPlaybackStarted();
          }).catch((e3) => {
            e3.name === "NotAllowedError" ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler");
          });
        }), this.handleRestarting = () => {
          this.clearConnectionReconcile(), this.isResuming = false;
          for (const e2 of this.remoteParticipants.values())
            this.handleParticipantDisconnected(e2.identity, e2);
          this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
        }, this.handleRestarted = () => {
          this.outgoingDataTrackManager.sfuWillRepublishTracks(), this.incomingDataTrackManager.resendSubscriptionUpdates();
        }, this.handleSignalRestarted = (t3) => cr(this, undefined, undefined, function* () {
          this.log.debug("signal reconnected to server, region ".concat(t3.serverRegion), { region: t3.serverRegion }), this.bufferedEvents = [], this.applyJoinResponse(t3);
          try {
            yield this.localParticipant.republishAllTracks(undefined, true);
          } catch (n2) {
            this.log.error("error trying to re-publish tracks after reconnection", { error: n2 });
          }
          try {
            yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", { region: t3.serverRegion });
          } catch (a3) {
            return;
          }
          this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents();
        }), this.handleParticipantUpdates = (e2) => {
          var t3;
          for (const i3 of e2) {
            if (i3.identity === this.localParticipant.identity) {
              this.localParticipant.updateInfo(i3);
              continue;
            }
            i3.identity === "" && (i3.identity = (t3 = this.sidToIdentity.get(i3.sid)) !== null && t3 !== undefined ? t3 : "");
            let e3 = this.remoteParticipants.get(i3.identity);
            i3.state === dt.DISCONNECTED ? this.handleParticipantDisconnected(i3.identity, e3) : this.getOrCreateParticipant(i3.identity, i3);
          }
          const n2 = new Map(e2.filter((e3) => e3.identity !== this.localParticipant.identity).map((e3) => [e3.identity, e3.dataTracks.map((e4) => Tc.from(e4))]));
          this.incomingDataTrackManager.receiveSfuPublicationUpdates(n2);
        }, this.handleActiveSpeakersUpdate = (t3) => {
          const n2 = [], i3 = {};
          t3.forEach((e2) => {
            if (i3[e2.sid] = true, e2.sid === this.localParticipant.sid)
              this.localParticipant.audioLevel = e2.level, this.localParticipant.setIsSpeaking(true), n2.push(this.localParticipant);
            else {
              const t4 = this.getRemoteParticipantBySid(e2.sid);
              t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(true), n2.push(t4));
            }
          }), i3[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(false)), this.remoteParticipants.forEach((e2) => {
            i3[e2.sid] || (e2.audioLevel = 0, e2.setIsSpeaking(false));
          }), this.activeSpeakers = n2, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, n2);
        }, this.handleSpeakersChanged = (t3) => {
          const n2 = new Map;
          this.activeSpeakers.forEach((e2) => {
            const t4 = this.remoteParticipants.get(e2.identity);
            t4 && t4.sid !== e2.sid || n2.set(e2.sid, e2);
          }), t3.forEach((e2) => {
            let t4 = this.getRemoteParticipantBySid(e2.sid);
            e2.sid === this.localParticipant.sid && (t4 = this.localParticipant), t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(e2.active), e2.active ? n2.set(e2.sid, t4) : n2.delete(e2.sid));
          });
          const i3 = Array.from(n2.values());
          i3.sort((e2, t4) => t4.audioLevel - e2.audioLevel), this.activeSpeakers = i3, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, i3);
        }, this.handleStreamStateUpdate = (t3) => {
          t3.streamStates.forEach((t4) => {
            const n2 = this.getRemoteParticipantBySid(t4.participantSid);
            if (!n2)
              return;
            const i3 = n2.getTrackPublicationBySid(t4.trackSid);
            if (!i3 || !i3.track)
              return;
            const r2 = ws.streamStateFromProto(t4.state), a3 = i3.track.streamState;
            i3.track.setStreamState(r2), r2 !== a3 && (n2.emit(e.ParticipantEvent.TrackStreamStateChanged, i3, i3.track.streamState), this.emitWhenConnected(e.RoomEvent.TrackStreamStateChanged, i3, i3.track.streamState, n2));
          });
        }, this.handleSubscriptionPermissionUpdate = (e2) => {
          const t3 = this.getRemoteParticipantBySid(e2.participantSid);
          if (!t3)
            return;
          const n2 = t3.getTrackPublicationBySid(e2.trackSid);
          n2 && n2.setAllowed(e2.allowed);
        }, this.handleSubscriptionError = (e2) => {
          this.cancelPendingTrackAdded(e2.trackSid);
          const t3 = Array.from(this.remoteParticipants.values()).find((t4) => t4.trackPublications.has(e2.trackSid));
          if (!t3)
            return;
          const n2 = t3.getTrackPublicationBySid(e2.trackSid);
          n2 && n2.setSubscriptionError(e2.err);
        }, this.handleDataPacket = (e2, t3) => {
          const n2 = this.remoteParticipants.get(e2.participantIdentity);
          if (e2.value.case === "user")
            this.handleUserPacket(n2, e2.value.value, e2.kind, t3);
          else if (e2.value.case === "transcription")
            this.handleTranscription(n2, e2.value.value);
          else if (e2.value.case === "sipDtmf")
            this.handleSipDtmf(n2, e2.value.value);
          else if (e2.value.case === "chatMessage")
            this.handleChatMessage(n2, e2.value.value);
          else if (e2.value.case === "metrics")
            this.handleMetrics(e2.value.value, n2);
          else if (e2.value.case === "streamHeader" || e2.value.case === "streamChunk" || e2.value.case === "streamTrailer")
            this.handleDataStream(e2, t3);
          else if (e2.value.case === "rpcRequest") {
            const t4 = e2.value.value;
            this.rpcServerManager.handleIncomingRpcRequest(e2.participantIdentity, t4);
          } else if (e2.value.case === "rpcResponse") {
            const t4 = e2.value.value;
            switch (t4.value.case) {
              case "payload":
                this.rpcClientManager.handleIncomingRpcResponseSuccess(t4.requestId, t4.value.value);
                break;
              case "error":
                this.rpcClientManager.handleIncomingRpcResponseFailure(t4.requestId, ou.fromProto(t4.value.value));
                break;
              default:
                this.log.warn("Unknown rpcResponse.value.case: ".concat(t4.value.case), this.logContext);
            }
          } else
            e2.value.case === "rpcAck" && this.rpcClientManager.handleIncomingRpcAck(e2.value.value.requestId);
        }, this.handleUserPacket = (t3, n2, i3, r2) => {
          this.emit(e.RoomEvent.DataReceived, n2.payload, t3, i3, n2.topic, r2), t3 == null || t3.emit(e.ParticipantEvent.DataReceived, n2.payload, i3, r2);
        }, this.handleSipDtmf = (t3, n2) => {
          this.emit(e.RoomEvent.SipDTMFReceived, n2, t3), t3 == null || t3.emit(e.ParticipantEvent.SipDTMFReceived, n2);
        }, this.handleTranscription = (t3, n2) => {
          const i3 = n2.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(n2.transcribedParticipantIdentity), r2 = i3 == null ? undefined : i3.trackPublications.get(n2.trackId), a3 = function(e2, t4) {
            return e2.segments.map((e3) => {
              let { id: n3, text: i4, language: r3, startTime: a4, endTime: s3, final: o3 } = e3;
              var c3;
              const d3 = (c3 = t4.get(n3)) !== null && c3 !== undefined ? c3 : Date.now(), l3 = Date.now();
              return o3 ? t4.delete(n3) : t4.set(n3, d3), { id: n3, text: i4, startTime: Number.parseInt(a4.toString()), endTime: Number.parseInt(s3.toString()), final: o3, language: r3, firstReceivedTime: d3, lastReceivedTime: l3 };
            });
          }(n2, this.transcriptionReceivedTimes);
          r2 == null || r2.emit(e.TrackEvent.TranscriptionReceived, a3), i3 == null || i3.emit(e.ParticipantEvent.TranscriptionReceived, a3, r2), this.emit(e.RoomEvent.TranscriptionReceived, a3, i3, r2);
        }, this.handleChatMessage = (t3, n2) => {
          const i3 = function(e2) {
            const { id: t4, timestamp: n3, message: i4, editTimestamp: r2 } = e2;
            return { id: t4, timestamp: Number.parseInt(n3.toString()), editTimestamp: r2 ? Number.parseInt(r2.toString()) : undefined, message: i4 };
          }(n2);
          this.emit(e.RoomEvent.ChatMessage, i3, t3);
        }, this.handleMetrics = (t3, n2) => {
          this.emit(e.RoomEvent.MetricsReceived, t3, n2);
        }, this.handleDataStream = (e2, t3) => {
          this.incomingDataStreamManager.handleDataStreamPacket(e2, t3);
        }, this.bufferedSegments = new Map, this.handleAudioPlaybackStarted = () => {
          this.canPlaybackAudio || (this.audioEnabled = true, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, true));
        }, this.handleAudioPlaybackFailed = (t3) => {
          this.log.warn("could not playback audio", { error: t3 }), this.canPlaybackAudio && (this.audioEnabled = false, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, false));
        }, this.handleVideoPlaybackStarted = () => {
          this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = false, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, true));
        }, this.handleVideoPlaybackFailed = () => {
          this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = true, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, false));
        }, this.handleDeviceChange = () => cr(this, undefined, undefined, function* () {
          var t3;
          ((t3 = Pa()) === null || t3 === undefined ? undefined : t3.os) !== "iOS" && (yield this.selectDefaultDevices()), this.emit(e.RoomEvent.MediaDevicesChanged);
        }), this.handleRoomUpdate = (t3) => {
          const n2 = this.roomInfo;
          this.roomInfo = t3, n2 && n2.metadata !== t3.metadata && this.emitWhenConnected(e.RoomEvent.RoomMetadataChanged, t3.metadata), (n2 == null ? undefined : n2.activeRecording) !== t3.activeRecording && this.emitWhenConnected(e.RoomEvent.RecordingStatusChanged, t3.activeRecording);
        }, this.handleConnectionQualityUpdate = (e2) => {
          e2.updates.forEach((e3) => {
            if (e3.participantSid === this.localParticipant.sid)
              return void this.localParticipant.setConnectionQuality(e3.quality);
            const t3 = this.getRemoteParticipantBySid(e3.participantSid);
            t3 && t3.setConnectionQuality(e3.quality);
          });
        }, this.getRemoteParticipantClientProtocol = (e2) => {
          var t3, n2;
          return (n2 = (t3 = this.remoteParticipants.get(e2)) === null || t3 === undefined ? undefined : t3.clientProtocol) !== null && n2 !== undefined ? n2 : 0;
        }, this.getRemoteParticipantCapabilities = (e2) => {
          var t3, n2;
          return (n2 = (t3 = this.remoteParticipants.get(e2)) === null || t3 === undefined ? undefined : t3.capabilities) !== null && n2 !== undefined ? n2 : [];
        }, this.getAllRemoteParticipantIdentities = () => Array.from(this.remoteParticipants.keys()), this.onLocalParticipantMetadataChanged = (t3) => {
          this.emit(e.RoomEvent.ParticipantMetadataChanged, t3, this.localParticipant);
        }, this.onLocalParticipantNameChanged = (t3) => {
          this.emit(e.RoomEvent.ParticipantNameChanged, t3, this.localParticipant);
        }, this.onLocalAttributesChanged = (t3) => {
          this.emit(e.RoomEvent.ParticipantAttributesChanged, t3, this.localParticipant);
        }, this.onLocalTrackMuted = (t3) => {
          this.emit(e.RoomEvent.TrackMuted, t3, this.localParticipant);
        }, this.onLocalTrackUnmuted = (t3) => {
          this.emit(e.RoomEvent.TrackUnmuted, t3, this.localParticipant);
        }, this.onTrackProcessorUpdate = (e2) => {
          var t3;
          (t3 = e2 == null ? undefined : e2.onPublish) === null || t3 === undefined || t3.call(e2, this);
        }, this.onLocalTrackPublished = (t3) => cr(this, undefined, undefined, function* () {
          var n2, i3, r2, a3, s3, o3;
          if ((n2 = t3.track) === null || n2 === undefined || n2.on(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), (i3 = t3.track) === null || i3 === undefined || i3.on(e.TrackEvent.Restarted, this.onLocalTrackRestarted), (s3 = (a3 = (r2 = t3.track) === null || r2 === undefined ? undefined : r2.getProcessor()) === null || a3 === undefined ? undefined : a3.onPublish) === null || s3 === undefined || s3.call(a3, this), this.emit(e.RoomEvent.LocalTrackPublished, t3, this.localParticipant), To(t3.track)) {
            (yield t3.track.checkForSilence()) && this.emit(e.RoomEvent.LocalAudioSilenceDetected, t3);
          }
          const c3 = yield (o3 = t3.track) === null || o3 === undefined ? undefined : o3.getDeviceId(false), d3 = vs(t3.source);
          d3 && c3 && c3 !== this.localParticipant.activeDeviceMap.get(d3) && (this.localParticipant.activeDeviceMap.set(d3, c3), this.emit(e.RoomEvent.ActiveDeviceChanged, d3, c3));
        }), this.onLocalTrackUnpublished = (t3) => {
          var n2, i3;
          (n2 = t3.track) === null || n2 === undefined || n2.off(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), (i3 = t3.track) === null || i3 === undefined || i3.off(e.TrackEvent.Restarted, this.onLocalTrackRestarted), this.emit(e.RoomEvent.LocalTrackUnpublished, t3, this.localParticipant);
        }, this.onLocalTrackRestarted = (t3) => cr(this, undefined, undefined, function* () {
          const n2 = yield t3.getDeviceId(false), i3 = vs(t3.source);
          i3 && n2 && n2 !== this.localParticipant.activeDeviceMap.get(i3) && (this.log.debug("local track restarted, setting ".concat(i3, " ").concat(n2, " active")), this.localParticipant.activeDeviceMap.set(i3, n2), this.emit(e.RoomEvent.ActiveDeviceChanged, i3, n2));
        }), this.onLocalConnectionQualityChanged = (t3) => {
          this.emit(e.RoomEvent.ConnectionQualityChanged, t3, this.localParticipant);
        }, this.onMediaDevicesError = (t3, n2) => {
          this.emit(e.RoomEvent.MediaDevicesError, t3, n2);
        }, this.onLocalParticipantPermissionsChanged = (t3) => {
          this.emit(e.RoomEvent.ParticipantPermissionsChanged, t3, this.localParticipant);
        }, this.onLocalChatMessageSent = (t3) => {
          this.emit(e.RoomEvent.ChatMessage, t3, this.localParticipant);
        }, this.setMaxListeners(100), this.remoteParticipants = new Map, this.sidToIdentity = new Map, this.options = Object.assign(Object.assign({}, rd), t2), this.log = nr((a2 = this.options.loggerName) !== null && a2 !== undefined ? a2 : e.LoggerNames.Room, () => this.logContext), this.transcriptionReceivedTimes = new Map, this.options.audioCaptureDefaults = Object.assign(Object.assign({}, nd), t2 == null ? undefined : t2.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, id), t2 == null ? undefined : t2.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, td), t2 == null ? undefined : t2.publishDefaults), this.maybeCreateEngine(), this.incomingDataStreamManager = new tl, this.outgoingDataStreamManager = new pl(this.engine, this.log, this.getRemoteParticipantClientProtocol, this.getRemoteParticipantCapabilities, this.getAllRemoteParticipantIdentities), this.incomingDataTrackManager = new zl({ e2eeManager: this.e2eeManager }), this.incomingDataTrackManager.on("sfuUpdateSubscription", (e2) => {
          this.engine.client.sendUpdateDataSubscription(e2.sid, e2.subscribe);
        }).on("trackPublished", (t3) => {
          var n2;
          t3.track.publisherIdentity !== this.localParticipant.identity && (this.emit(e.RoomEvent.DataTrackPublished, t3.track), (n2 = this.remoteParticipants.get(t3.track.publisherIdentity)) === null || n2 === undefined || n2.addRemoteDataTrack(t3.track));
        }).on("trackUnpublished", (t3) => {
          var n2;
          t3.publisherIdentity !== this.localParticipant.identity && (this.emit(e.RoomEvent.DataTrackUnpublished, t3.sid), (n2 = this.remoteParticipants.get(t3.publisherIdentity)) === null || n2 === undefined || n2.removeRemoteDataTrack(t3.sid));
        }), this.outgoingDataTrackManager = new su({ e2eeManager: this.e2eeManager }), this.outgoingDataTrackManager.on("sfuPublishRequest", (e2) => {
          this.engine.client.sendPublishDataTrackRequest(e2.handle, e2.name, e2.usesE2ee);
        }).on("sfuUnpublishRequest", (e2) => {
          this.engine.client.sendUnPublishDataTrackRequest(e2.handle);
        }).on("trackPublished", (t3) => {
          this.emit(e.RoomEvent.LocalDataTrackPublished, t3.track);
        }).on("trackUnpublished", (t3) => {
          this.emit(e.RoomEvent.LocalDataTrackUnpublished, t3.sid);
        }).on("packetAvailable", (e2) => {
          let { handle: t3, bytes: n2 } = e2;
          this.engine.sendDataTrackFrame(n2).finally(() => this.outgoingDataTrackManager.handlePacketSendComplete(t3));
        }), this.registerRpcDataStreamHandler(), this.rpcClientManager = new pu(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol, () => {
          var e2, t3;
          return (t3 = (e2 = this.engine.latestJoinResponse) === null || e2 === undefined ? undefined : e2.serverInfo) === null || t3 === undefined ? undefined : t3.version;
        }), this.rpcClientManager.on("sendDataPacket", (e2) => {
          let t3 = e2.packet;
          var n2;
          (n2 = this.engine) === null || n2 === undefined || n2.sendDataPacket(t3, od.RELIABLE);
        }), this.rpcServerManager = new mu(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol), this.rpcServerManager.on("sendDataPacket", (e2) => {
          let t3 = e2.packet;
          var n2;
          (n2 = this.engine) === null || n2 === undefined || n2.sendDataPacket(t3, od.RELIABLE);
        }), this.disconnectLock = new r, this.localParticipant = new Cu("", "", this.engine, this.options, this.outgoingDataStreamManager, this.outgoingDataTrackManager, this.rpcClientManager, this.rpcServerManager), this.setupFrameMetadata(), (this.options.e2ee || this.options.encryption) && this.setupE2EE(), this.engine.e2eeManager = this.e2eeManager, this.incomingDataTrackManager.updateE2eeManager((s2 = this.e2eeManager) !== null && s2 !== undefined ? s2 : null), this.outgoingDataTrackManager.updateE2eeManager((o2 = this.e2eeManager) !== null && o2 !== undefined ? o2 : null), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", ho(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", ho(this.options.audioCaptureDefaults.deviceId)), ((c2 = this.options.audioOutput) === null || c2 === undefined ? undefined : c2.deviceId) && this.switchActiveDevice("audiooutput", ho(this.options.audioOutput.deviceId)).catch((e2) => this.log.warn("Could not set audio output: ".concat(e2.message))), Ks()) {
          const e2 = new AbortController;
          let t3;
          if (_u.cleanupRegistry) {
            const n2 = new WeakRef(this);
            t3 = () => {
              const e3 = n2.deref();
              e3 && e3.handleDeviceChange();
            }, _u.cleanupRegistry.register(this, () => {
              e2.abort();
            });
          } else
            t3 = this.handleDeviceChange;
          (l2 = (d2 = navigator.mediaDevices) === null || d2 === undefined ? undefined : d2.addEventListener) === null || l2 === undefined || l2.call(d2, "devicechange", t3, { signal: e2.signal });
        }
      }
      registerTextStreamHandler(e2, t2) {
        return this.incomingDataStreamManager.registerTextStreamHandler(e2, t2);
      }
      unregisterTextStreamHandler(e2) {
        return this.incomingDataStreamManager.unregisterTextStreamHandler(e2);
      }
      registerByteStreamHandler(e2, t2) {
        return this.incomingDataStreamManager.registerByteStreamHandler(e2, t2);
      }
      unregisterByteStreamHandler(e2) {
        return this.incomingDataStreamManager.unregisterByteStreamHandler(e2);
      }
      registerRpcMethod(e2, t2) {
        this.rpcServerManager.registerRpcMethod(e2, t2);
      }
      unregisterRpcMethod(e2) {
        this.rpcServerManager.unregisterRpcMethod(e2);
      }
      setE2EEEnabled(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = yield this.e2eeStateMutex.lock();
          try {
            if (!this.e2eeManager)
              throw Error("e2ee not configured, please set e2ee settings within the room options");
            this.isE2EEEnabled !== e2 && (yield this.localParticipant.setE2EEEnabled(e2), this.localParticipant.identity !== "" && this.e2eeManager.setParticipantCryptorEnabled(e2, this.localParticipant.identity));
          } finally {
            t2();
          }
        });
      }
      setupE2EE() {
        var t2, n2;
        const i2 = !!this.options.encryption, r2 = this.options.encryption || this.options.e2ee;
        r2 && (("e2eeManager" in r2) ? (this.e2eeManager = r2.e2eeManager, this.e2eeManager.isDataChannelEncryptionEnabled = i2) : this.e2eeManager = new rc(r2, i2), this.e2eeManager.on(e.EncryptionEvent.ParticipantEncryptionStatusChanged, (t3, n3) => {
          wo(n3) && (this.isE2EEEnabled = t3), this.emit(e.RoomEvent.ParticipantEncryptionStatusChanged, t3, n3);
        }), this.e2eeManager.on(e.EncryptionEvent.EncryptionError, (t3, n3) => {
          const i3 = n3 ? this.getParticipantByIdentity(n3) : undefined;
          this.emit(e.RoomEvent.EncryptionError, t3, i3);
        }), (t2 = this.e2eeManager) === null || t2 === undefined || t2.setup(this), (n2 = this.e2eeManager) === null || n2 === undefined || n2.setupEngine(this.engine));
      }
      setupFrameMetadata() {
        var e2;
        const t2 = (e2 = this.options.frameMetadata) !== null && e2 !== undefined ? e2 : this.options.packetTrailer;
        this.frameMetadataManager = new sc(t2), this.frameMetadataManager.setup(this);
      }
      get logContext() {
        var e2, t2, n2;
        return { room: this.name, roomID: (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.sid, participant: (t2 = this.localParticipant) === null || t2 === undefined ? undefined : t2.identity, participantID: (n2 = this.localParticipant) === null || n2 === undefined ? undefined : n2.sid };
      }
      get isRecording() {
        var e2, t2;
        return (t2 = (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.activeRecording) !== null && t2 !== undefined && t2;
      }
      getSid() {
        return this.state === e.ConnectionState.Disconnected ? Ca.resolve("") : this.roomInfo && this.roomInfo.sid !== "" ? Ca.resolve(this.roomInfo.sid) : new Ca((t2, n2) => {
          const i2 = (n3) => {
            n3.sid !== "" && (this.engine.off(e.EngineEvent.RoomUpdate, i2), t2(n3.sid));
          };
          this.engine.on(e.EngineEvent.RoomUpdate, i2), this.once(e.RoomEvent.Disconnected, () => {
            this.engine.off(e.EngineEvent.RoomUpdate, i2), n2(new Ka("Room disconnected before room server id was available"));
          });
        });
      }
      get name() {
        var e2, t2;
        return (t2 = (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.name) !== null && t2 !== undefined ? t2 : "";
      }
      get metadata() {
        var e2;
        return (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.metadata;
      }
      get numParticipants() {
        var e2, t2;
        return (t2 = (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.numParticipants) !== null && t2 !== undefined ? t2 : 0;
      }
      get numPublishers() {
        var e2, t2;
        return (t2 = (e2 = this.roomInfo) === null || e2 === undefined ? undefined : e2.numPublishers) !== null && t2 !== undefined ? t2 : 0;
      }
      maybeCreateEngine() {
        (!this.engine || !this.engine.isNewlyCreated && this.engine.isClosed) && (this.engine = new Vd(this.options), this.engine.e2eeManager = this.e2eeManager, this.engine.on(e.EngineEvent.ParticipantUpdate, this.handleParticipantUpdates).on(e.EngineEvent.RoomUpdate, this.handleRoomUpdate).on(e.EngineEvent.SpeakersChanged, this.handleSpeakersChanged).on(e.EngineEvent.StreamStateChanged, this.handleStreamStateUpdate).on(e.EngineEvent.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(e.EngineEvent.SubscriptionError, this.handleSubscriptionError).on(e.EngineEvent.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(e.EngineEvent.MediaTrackAdded, (e2, t2, n2) => {
          this.onTrackAdded(e2, t2, n2);
        }).on(e.EngineEvent.Disconnected, (e2) => {
          this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2);
        }).on(e.EngineEvent.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(e.EngineEvent.DataPacketReceived, this.handleDataPacket).on(e.EngineEvent.Resuming, () => {
          this.clearConnectionReconcile(), this.isResuming = true, this.log.debug("Resuming signal connection"), this.setAndEmitConnectionState(e.ConnectionState.SignalReconnecting) && this.emit(e.RoomEvent.SignalReconnecting);
        }).on(e.EngineEvent.Resumed, () => {
          this.registerConnectionReconcile(), this.isResuming = false, this.log.debug("Resumed signal connection"), this.updateSubscriptions(), this.setAndEmitConnectionState(e.ConnectionState.Connected) && this.emit(e.RoomEvent.Reconnected), this.emitBufferedEvents();
        }).on(e.EngineEvent.SignalResumed, () => {
          (this.state === e.ConnectionState.Reconnecting || this.isResuming) && this.sendSyncState(), this.emitBufferedEvents();
        }).on(e.EngineEvent.Restarting, this.handleRestarting).on(e.EngineEvent.Restarted, this.handleRestarted).on(e.EngineEvent.SignalRestarted, this.handleSignalRestarted).on(e.EngineEvent.Offline, () => {
          this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
        }).on(e.EngineEvent.DCBufferStatusChanged, (t2, n2) => {
          this.emit(e.RoomEvent.DCBufferStatusChanged, t2, n2);
        }).on(e.EngineEvent.LocalTrackSubscribed, (e2) => {
          this.handleLocalTrackSubscribed(e2);
        }).on(e.EngineEvent.RoomMoved, (t2) => {
          this.log.debug("room moved", t2), t2.room && this.handleRoomUpdate(t2.room), this.remoteParticipants.forEach((e2, t3) => {
            this.handleParticipantDisconnected(t3, e2);
          }), this.emit(e.RoomEvent.Moved, t2.room.name), t2.participant ? this.handleParticipantUpdates([t2.participant, ...t2.otherParticipants]) : this.handleParticipantUpdates(t2.otherParticipants);
        }).on(e.EngineEvent.PublishDataTrackResponse, (e2) => {
          e2.info ? this.outgoingDataTrackManager.receivedSfuPublishResponse(e2.info.pubHandle, { type: "ok", data: { sid: e2.info.sid, pubHandle: e2.info.pubHandle, name: e2.info.name, usesE2ee: e2.info.encryption !== ht.NONE } }) : this.log.warn("received PublishDataTrackResponse, but event.info was ".concat(e2.info, ", so skipping."));
        }).on(e.EngineEvent.UnPublishDataTrackResponse, (e2) => {
          e2.info ? this.outgoingDataTrackManager.receivedSfuUnpublishResponse(e2.info.pubHandle) : this.log.warn("received UnPublishDataTrackResponse, but event.info was ".concat(e2.info, ", so skipping."));
        }).on(e.EngineEvent.DataTrackSubscriberHandles, (e2) => {
          const t2 = new Map(Object.entries(e2.subHandles).map((e3) => {
            let t3 = L(e3, 2), n2 = t3[0], i2 = t3[1];
            return [parseInt(n2, 10), i2.trackSid];
          }));
          this.incomingDataTrackManager.receivedSfuSubscriberHandles(t2);
        }).on(e.EngineEvent.DataTrackPacketReceived, (e2) => {
          try {
            this.incomingDataTrackManager.packetReceived(e2);
          } catch (t2) {
            throw t2;
          }
        }).on(e.EngineEvent.Joined, (e2) => {
          const t2 = new Map(e2.otherParticipants.map((e3) => [e3.identity, e3.dataTracks.map((e4) => Tc.from(e4))]));
          this.incomingDataTrackManager.receiveSfuPublicationUpdates(t2);
        }).on(e.EngineEvent.TokenRefreshed, (e2) => {
          var t2;
          (t2 = this.regionUrlProvider) === null || t2 === undefined || t2.updateToken(e2);
        }).on(e.EngineEvent.ServerRegionsReported, (e2) => {
          var t2;
          (t2 = this.regionUrlProvider) === null || t2 === undefined || t2.setServerReportedRegions({ regionSettings: e2, updatedAtInMs: Date.now(), maxAgeInMs: Kd });
        }), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine), this.outgoingDataStreamManager && this.outgoingDataStreamManager.setupEngine(this.engine));
      }
      createRegionStrategy() {
        return { getNextUrl: (e2) => cr(this, undefined, undefined, function* () {
          return this.regionUrlProvider ? this.regionUrlProvider.getNextBestRegionUrl(e2) : null;
        }), resetAttempts: () => {
          var e2;
          return (e2 = this.regionUrlProvider) === null || e2 === undefined ? undefined : e2.resetAttempts();
        } };
      }
      static getLocalDevices(e2) {
        let t2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
        return lc.getInstance().getDevices(e2, t2);
      }
      prepareConnection(t2, i2) {
        return cr(this, undefined, undefined, function* () {
          if (this.state === e.ConnectionState.Disconnected) {
            this.log.debug("prepareConnection to ".concat(t2));
            try {
              if (Gs(new URL(t2)) && i2) {
                this.regionUrlProvider = new zd(t2, i2);
                const n2 = yield this.regionUrlProvider.getNextBestRegionUrl();
                n2 && this.state === e.ConnectionState.Disconnected && (this.regionUrl = n2, yield fetch(po(n2), { method: "HEAD" }), this.log.debug("prepared connection to ".concat(n2)));
              } else
                yield fetch(po(t2), { method: "HEAD" });
            } catch (n2) {
              this.log.warn("could not prepare connection", { error: n2 });
            }
          }
        });
      }
      getParticipantByIdentity(e2) {
        return this.localParticipant.identity === e2 ? this.localParticipant : this.remoteParticipants.get(e2);
      }
      clearConnectionFutures() {
        this.connectFuture = undefined;
      }
      simulateScenario(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          let n2, i2 = () => cr(this, undefined, undefined, function* () {});
          switch (e2) {
            case "signal-reconnect":
              yield this.engine.client.handleOnClose("simulate disconnect");
              break;
            case "fail-on-v1-path":
              this.engine.failNextV1Path();
              break;
            case "speaker":
              n2 = new Di({ scenario: { case: "speakerUpdate", value: 3 } });
              break;
            case "node-failure":
              n2 = new Di({ scenario: { case: "nodeFailure", value: true } });
              break;
            case "server-leave":
              n2 = new Di({ scenario: { case: "serverLeave", value: true } });
              break;
            case "migration":
              n2 = new Di({ scenario: { case: "migration", value: true } });
              break;
            case "resume-reconnect":
              this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
              break;
            case "disconnect-signal-on-resume":
              i2 = () => cr(this, undefined, undefined, function* () {
                yield this.engine.client.handleOnClose("simulate resume-disconnect");
              }), n2 = new Di({ scenario: { case: "disconnectSignalOnResume", value: true } });
              break;
            case "disconnect-signal-on-resume-no-messages":
              i2 = () => cr(this, undefined, undefined, function* () {
                yield this.engine.client.handleOnClose("simulate resume-disconnect");
              }), n2 = new Di({ scenario: { case: "disconnectSignalOnResumeNoMessages", value: true } });
              break;
            case "full-reconnect":
              this.engine.fullReconnectOnNext = true, yield this.engine.client.handleOnClose("simulate full-reconnect");
              break;
            case "force-tcp":
            case "force-tls":
              n2 = new Di({ scenario: { case: "switchCandidateProtocol", value: e2 === "force-tls" ? 2 : 1 } }), i2 = () => cr(this, undefined, undefined, function* () {
                const e3 = this.engine.client.onLeave;
                e3 && e3(new di({ reason: et.CLIENT_INITIATED, action: li.RECONNECT }));
              });
              break;
            case "subscriber-bandwidth":
              if (t2 === undefined || typeof t2 != "number")
                throw new Error("subscriber-bandwidth requires a number as argument");
              n2 = new Di({ scenario: { case: "subscriberBandwidth", value: vo(t2) } });
              break;
            case "leave-full-reconnect":
              n2 = new Di({ scenario: { case: "leaveRequestFullReconnect", value: true } });
          }
          n2 && (yield this.engine.client.sendSimulateScenario(n2), yield i2());
        });
      }
      get canPlaybackAudio() {
        return this.audioEnabled;
      }
      get canPlaybackVideo() {
        return !this.isVideoPlaybackBlocked;
      }
      getActiveDevice(e2) {
        return this.localParticipant.activeDeviceMap.get(e2);
      }
      switchActiveDevice(t2, i2) {
        return cr(this, arguments, undefined, function(t3, i3) {
          var r2 = this;
          let a2 = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
          return function* () {
            var s2, o2, c2, d2, l2, u2, h2;
            let p2 = true, m2 = false;
            const g2 = a2 ? { exact: i3 } : i3;
            if (t3 === "audioinput") {
              m2 = r2.localParticipant.audioTrackPublications.size === 0;
              const e2 = (s2 = r2.getActiveDevice(t3)) !== null && s2 !== undefined ? s2 : r2.options.audioCaptureDefaults.deviceId;
              r2.options.audioCaptureDefaults.deviceId = g2;
              const i4 = Array.from(r2.localParticipant.audioTrackPublications.values()).filter((e3) => e3.source === ws.Source.Microphone);
              try {
                p2 = (yield Promise.all(i4.map((e3) => {
                  var t4;
                  return (t4 = e3.audioTrack) === null || t4 === undefined ? undefined : t4.setDeviceId(g2);
                }))).every((e3) => e3 === true);
              } catch (n2) {
                throw r2.options.audioCaptureDefaults.deviceId = e2, n2;
              }
              const a3 = i4.some((e3) => {
                var t4, n2;
                return (n2 = (t4 = e3.track) === null || t4 === undefined ? undefined : t4.isMuted) !== null && n2 !== undefined && n2;
              });
              p2 && a3 && (m2 = true);
            } else if (t3 === "videoinput") {
              m2 = r2.localParticipant.videoTrackPublications.size === 0;
              const e2 = (o2 = r2.getActiveDevice(t3)) !== null && o2 !== undefined ? o2 : r2.options.videoCaptureDefaults.deviceId;
              r2.options.videoCaptureDefaults.deviceId = g2;
              const i4 = Array.from(r2.localParticipant.videoTrackPublications.values()).filter((e3) => e3.source === ws.Source.Camera);
              try {
                p2 = (yield Promise.all(i4.map((e3) => {
                  var t4;
                  return (t4 = e3.videoTrack) === null || t4 === undefined ? undefined : t4.setDeviceId(g2);
                }))).every((e3) => e3 === true);
              } catch (n2) {
                throw r2.options.videoCaptureDefaults.deviceId = e2, n2;
              }
              const a3 = i4.some((e3) => {
                var t4, n2;
                return (n2 = (t4 = e3.track) === null || t4 === undefined ? undefined : t4.isMuted) !== null && n2 !== undefined && n2;
              });
              p2 && a3 && (m2 = true);
            } else if (t3 === "audiooutput") {
              if (m2 = true, !Us() && !r2.options.webAudioMix || r2.options.webAudioMix && r2.audioContext && !("setSinkId" in r2.audioContext))
                throw new Error("cannot switch audio output, the current browser does not support it");
              r2.options.webAudioMix && (i3 = (c2 = yield lc.getInstance().normalizeDeviceId("audiooutput", i3)) !== null && c2 !== undefined ? c2 : ""), (d2 = (h2 = r2.options).audioOutput) !== null && d2 !== undefined || (h2.audioOutput = {});
              const e2 = (l2 = r2.getActiveDevice(t3)) !== null && l2 !== undefined ? l2 : r2.options.audioOutput.deviceId;
              r2.options.audioOutput.deviceId = i3;
              try {
                r2.options.webAudioMix && ((u2 = r2.audioContext) === null || u2 === undefined || u2.setSinkId(i3)), yield Promise.all(Array.from(r2.remoteParticipants.values()).map((e3) => e3.setAudioOutput({ deviceId: i3 })));
              } catch (n2) {
                throw r2.options.audioOutput.deviceId = e2, n2;
              }
            }
            return m2 && (r2.localParticipant.activeDeviceMap.set(t3, i3), r2.emit(e.RoomEvent.ActiveDeviceChanged, t3, i3)), p2;
          }();
        });
      }
      setupLocalParticipantEvents() {
        this.localParticipant.on(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).on(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).on(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).on(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).on(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).on(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).on(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).on(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged);
      }
      recreateEngine(e2) {
        const t2 = this.engine;
        e2 && t2 && !t2.client.isDisconnected ? t2.client.sendLeave().finally(() => t2.close()) : t2 == null || t2.close(), this.engine = undefined, this.isResuming = false, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine();
      }
      onTrackAdded(t2, n2, i2) {
        var r2, a2;
        if ([e.ConnectionState.Connecting, e.ConnectionState.Reconnecting].includes(this.state)) {
          const a3 = Io(t2, n2);
          this.log.debug("deferring on track for later", { mediaTrackId: t2.id, mediaStreamId: n2.id, tracksInStream: n2.getTracks().map((e2) => e2.id) });
          const s3 = () => {
            o3(), this.onTrackAdded(t2, n2, i2);
          }, o3 = () => {
            if (this.off(e.RoomEvent.Reconnected, s3), this.off(e.RoomEvent.Connected, s3), this.off(e.RoomEvent.Disconnected, o3), a3) {
              const e2 = this.pendingTrackAddedCallbacks.get(a3);
              e2 == null || e2.delete(o3), (e2 == null ? undefined : e2.size) === 0 && this.pendingTrackAddedCallbacks.delete(a3);
            }
          };
          if (this.once(e.RoomEvent.Reconnected, s3), this.once(e.RoomEvent.Connected, s3), this.once(e.RoomEvent.Disconnected, o3), a3) {
            const e2 = (r2 = this.pendingTrackAddedCallbacks.get(a3)) !== null && r2 !== undefined ? r2 : new Set;
            e2.add(o3), this.pendingTrackAddedCallbacks.set(a3, e2);
          }
          return;
        }
        if (this.state === e.ConnectionState.Disconnected)
          return void this.log.warn("skipping incoming track after Room disconnected");
        if (t2.readyState === "ended")
          return void this.log.debug("skipping incoming track as it already ended");
        const s2 = _s(n2.id), o2 = s2[0], c2 = s2[1];
        let d2 = (a2 = Io(t2, n2)) !== null && a2 !== undefined ? a2 : t2.id;
        if (o2 === this.localParticipant.sid)
          return void this.log.warn("tried to create RemoteParticipant for local participant");
        const l2 = Array.from(this.remoteParticipants.values()).find((e2) => e2.sid === o2);
        if (!l2)
          return void (o2.startsWith("PA") && this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(o2)));
        if (!d2.startsWith("TR")) {
          const e2 = this.engine.getTrackIdForReceiver(i2);
          if (!e2)
            return void this.log.error("Tried to add a track whose 'sid' could not be found for a participant, that's not present. Sid: ".concat(o2));
          d2 = e2;
        }
        let u2;
        d2.startsWith("TR") || this.log.warn("Tried to add a track whose 'sid' could not be determined for a participant, that's not present. Sid: ".concat(o2, ", streamId: ").concat(c2, ", trackId: ").concat(d2), { remoteParticipantID: o2, streamId: c2, trackId: d2 }), this.options.adaptiveStream && (u2 = typeof this.options.adaptiveStream == "object" ? this.options.adaptiveStream : {});
        const h2 = l2.addSubscribedMediaTrack(t2, d2, n2, i2, u2);
        (h2 == null ? undefined : h2.isEncrypted) && !this.e2eeManager && this.emit(e.RoomEvent.EncryptionError, new Error("Encrypted ".concat(h2.source, " track received from participant ").concat(l2.sid, ", but room does not have encryption enabled!")));
      }
      cancelPendingTrackAdded(e2) {
        var t2;
        (t2 = this.pendingTrackAddedCallbacks.get(e2)) === null || t2 === undefined || t2.forEach((e3) => e3());
      }
      handleLocalTrackSubscribed(t2) {
        const n2 = () => this.localParticipant.getTrackPublications().find((e2) => e2.trackSid === t2), i2 = n2();
        if (i2)
          return void this.emitLocalTrackSubscribed(i2);
        this.log.debug("deferring LocalTrackSubscribed, publication not yet available", { subscribedSid: t2 });
        let r2;
        const a2 = (e2) => {
          e2.trackSid === t2 && (s2(), this.emitLocalTrackSubscribed(e2));
        }, s2 = () => {
          clearTimeout(r2), this.localParticipant.off(e.ParticipantEvent.LocalTrackPublished, a2), this.off(e.RoomEvent.Disconnected, s2);
        };
        this.localParticipant.on(e.ParticipantEvent.LocalTrackPublished, a2), this.once(e.RoomEvent.Disconnected, s2), r2 = setTimeout(() => {
          s2();
          const e2 = n2();
          e2 ? this.emitLocalTrackSubscribed(e2) : this.log.warn("could not find local track publication for LocalTrackSubscribed event after timeout", { subscribedSid: t2 });
        }, 1e4);
      }
      emitLocalTrackSubscribed(t2) {
        this.localParticipant.emit(e.ParticipantEvent.LocalTrackSubscribed, t2), this.emitWhenConnected(e.RoomEvent.LocalTrackSubscribed, t2, this.localParticipant);
      }
      handleDisconnect() {
        let t2 = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0], n2 = arguments.length > 1 ? arguments[1] : undefined;
        var i2, r2;
        if (this.clearConnectionReconcile(), this.isResuming = false, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.incomingDataStreamManager.clearControllers(), this.incomingDataTrackManager.reset(), this.outgoingDataTrackManager.reset(), this.state !== e.ConnectionState.Disconnected) {
          this.regionUrl = undefined, this.regionUrlProvider && this.regionUrlProvider.notifyDisconnected();
          try {
            this.remoteParticipants.forEach((e2) => {
              e2.trackPublications.forEach((t3) => {
                e2.unpublishTrack(t3.trackSid);
              });
            }), this.localParticipant.trackPublications.forEach((e2) => {
              var n3, i3, r3;
              e2.track && this.localParticipant.unpublishTrack(e2.track, t2), t2 ? ((n3 = e2.track) === null || n3 === undefined || n3.detach(), (i3 = e2.track) === null || i3 === undefined || i3.stop()) : (r3 = e2.track) === null || r3 === undefined || r3.stopMonitor();
            }), this.localParticipant.off(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).off(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).off(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).off(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).off(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).off(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).off(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).off(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && typeof this.options.webAudioMix == "boolean" && (this.audioContext.close(), this.audioContext = undefined), Ks() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), (r2 = (i2 = navigator.mediaDevices) === null || i2 === undefined ? undefined : i2.removeEventListener) === null || r2 === undefined || r2.call(i2, "devicechange", this.handleDeviceChange));
          } finally {
            this.setAndEmitConnectionState(e.ConnectionState.Disconnected), this.emit(e.RoomEvent.Disconnected, n2);
          }
        }
      }
      handleParticipantDisconnected(t2, n2) {
        this.remoteParticipants.delete(t2), n2 && (this.incomingDataStreamManager.validateParticipantHasNoActiveDataStreams(t2), this.incomingDataTrackManager.handleRemoteParticipantDisconnected(t2), n2.trackPublications.forEach((e2) => {
          n2.unpublishTrack(e2.trackSid, true);
        }), this.emit(e.RoomEvent.ParticipantDisconnected, n2), n2.setDisconnected(), this.rpcClientManager.handleParticipantDisconnected(n2.identity));
      }
      selectDefaultDevices() {
        return cr(this, undefined, undefined, function* () {
          var t2, n2, i2;
          const r2 = lc.getInstance().previousDevices, a2 = yield lc.getInstance().getDevices(undefined, false), s2 = Pa();
          if ((s2 == null ? undefined : s2.name) === "Chrome" && s2.os !== "iOS")
            for (let c2 of a2) {
              const t3 = r2.find((e2) => e2.deviceId === c2.deviceId);
              t3 && t3.label !== "" && t3.kind === c2.kind && t3.label !== c2.label && this.getActiveDevice(c2.kind) === "default" && this.emit(e.RoomEvent.ActiveDeviceChanged, c2.kind, c2.deviceId);
            }
          const o2 = ["audiooutput", "audioinput", "videoinput"];
          for (let e2 of o2) {
            const s3 = gs(e2), o3 = this.localParticipant.getTrackPublication(s3);
            if (o3 && ((t2 = o3.track) === null || t2 === undefined ? undefined : t2.isUserProvided))
              continue;
            const c2 = a2.filter((t3) => t3.kind === e2), d2 = this.getActiveDevice(e2);
            d2 === ((n2 = r2.filter((t3) => t3.kind === e2)[0]) === null || n2 === undefined ? undefined : n2.deviceId) && c2.length > 0 && ((i2 = c2[0]) === null || i2 === undefined ? undefined : i2.deviceId) !== d2 ? yield this.switchActiveDevice(e2, c2[0].deviceId) : e2 === "audioinput" && !Vs() || e2 === "videoinput" || !(c2.length > 0) || c2.find((t3) => t3.deviceId === this.getActiveDevice(e2)) || e2 === "audiooutput" && Vs() || (yield this.switchActiveDevice(e2, c2[0].deviceId));
          }
        });
      }
      acquireAudioContext() {
        return cr(this, undefined, undefined, function* () {
          var t2, i2;
          if (typeof this.options.webAudioMix != "boolean" && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : this.audioContext && this.audioContext.state !== "closed" || (this.audioContext = (t2 = ms()) !== null && t2 !== undefined ? t2 : undefined), this.options.webAudioMix && this.remoteParticipants.forEach((e2) => e2.setAudioContext(this.audioContext)), this.localParticipant.setAudioContext(this.audioContext), this.audioContext && this.audioContext.state === "suspended")
            try {
              yield Promise.race([this.audioContext.resume(), Ms(200)]);
            } catch (n2) {
              this.log.warn("Could not resume audio context", { error: n2 });
            }
          const r2 = ((i2 = this.audioContext) === null || i2 === undefined ? undefined : i2.state) === "running";
          r2 !== this.canPlaybackAudio && (this.audioEnabled = r2, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, r2));
        });
      }
      createParticipant(e2, t2) {
        var n2;
        let i2;
        return i2 = t2 ? Iu.fromParticipantInfo(this.engine.client, t2, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }, this.incomingDataTrackManager) : new Iu(this.engine.client, "", e2, undefined, undefined, undefined, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }), this.options.webAudioMix && i2.setAudioContext(this.audioContext), ((n2 = this.options.audioOutput) === null || n2 === undefined ? undefined : n2.deviceId) && i2.setAudioOutput(this.options.audioOutput).catch((e3) => this.log.warn("Could not set audio output: ".concat(e3.message))), i2;
      }
      getOrCreateParticipant(t2, n2) {
        if (this.remoteParticipants.has(t2)) {
          const e2 = this.remoteParticipants.get(t2);
          if (n2) {
            e2.updateInfo(n2) && this.sidToIdentity.set(n2.sid, n2.identity);
          }
          return e2;
        }
        const i2 = this.createParticipant(t2, n2);
        return this.remoteParticipants.set(t2, i2), this.sidToIdentity.set(n2.sid, n2.identity), this.emitWhenConnected(e.RoomEvent.ParticipantConnected, i2), i2.on(e.ParticipantEvent.TrackPublished, (t3) => {
          this.emitWhenConnected(e.RoomEvent.TrackPublished, t3, i2);
        }).on(e.ParticipantEvent.TrackSubscribed, (t3, n3) => {
          t3.kind === ws.Kind.Audio ? (t3.on(e.TrackEvent.AudioPlaybackStarted, this.handleAudioPlaybackStarted), t3.on(e.TrackEvent.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : t3.kind === ws.Kind.Video && (t3.on(e.TrackEvent.VideoPlaybackFailed, this.handleVideoPlaybackFailed), t3.on(e.TrackEvent.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emitWhenConnected(e.RoomEvent.TrackSubscribed, t3, n3, i2);
        }).on(e.ParticipantEvent.TrackUnpublished, (t3) => {
          this.cancelPendingTrackAdded(t3.trackSid), this.emit(e.RoomEvent.TrackUnpublished, t3, i2);
        }).on(e.ParticipantEvent.TrackUnsubscribed, (t3, n3) => {
          this.emit(e.RoomEvent.TrackUnsubscribed, t3, n3, i2);
        }).on(e.ParticipantEvent.TrackMuted, (t3) => {
          this.emitWhenConnected(e.RoomEvent.TrackMuted, t3, i2);
        }).on(e.ParticipantEvent.TrackUnmuted, (t3) => {
          this.emitWhenConnected(e.RoomEvent.TrackUnmuted, t3, i2);
        }).on(e.ParticipantEvent.ParticipantMetadataChanged, (t3) => {
          this.emitWhenConnected(e.RoomEvent.ParticipantMetadataChanged, t3, i2);
        }).on(e.ParticipantEvent.ParticipantNameChanged, (t3) => {
          this.emitWhenConnected(e.RoomEvent.ParticipantNameChanged, t3, i2);
        }).on(e.ParticipantEvent.AttributesChanged, (t3) => {
          this.emitWhenConnected(e.RoomEvent.ParticipantAttributesChanged, t3, i2);
        }).on(e.ParticipantEvent.ConnectionQualityChanged, (t3) => {
          this.emitWhenConnected(e.RoomEvent.ConnectionQualityChanged, t3, i2);
        }).on(e.ParticipantEvent.ParticipantPermissionsChanged, (t3) => {
          this.emitWhenConnected(e.RoomEvent.ParticipantPermissionsChanged, t3, i2);
        }).on(e.ParticipantEvent.TrackSubscriptionStatusChanged, (t3, n3) => {
          this.emitWhenConnected(e.RoomEvent.TrackSubscriptionStatusChanged, t3, n3, i2);
        }).on(e.ParticipantEvent.TrackSubscriptionFailed, (t3, n3) => {
          this.emit(e.RoomEvent.TrackSubscriptionFailed, t3, i2, n3);
        }).on(e.ParticipantEvent.TrackSubscriptionPermissionChanged, (t3, n3) => {
          this.emitWhenConnected(e.RoomEvent.TrackSubscriptionPermissionChanged, t3, n3, i2);
        }).on(e.ParticipantEvent.Active, () => {
          this.emitWhenConnected(e.RoomEvent.ParticipantActive, i2), i2.kind === lt.AGENT && this.localParticipant.setActiveAgent(i2);
        }), n2 && i2.updateInfo(n2), i2;
      }
      sendSyncState() {
        const e2 = Array.from(this.remoteParticipants.values()).reduce((e3, t3) => (e3.push(...t3.getTrackPublications()), e3), []), t2 = this.localParticipant.getTrackPublications(), n2 = this.outgoingDataTrackManager.queryPublished();
        this.engine.sendSyncState(e2, t2, n2);
      }
      updateSubscriptions() {
        for (const e2 of this.remoteParticipants.values())
          for (const t2 of e2.videoTrackPublications.values())
            t2.isSubscribed && Eo(t2) && t2.emitTrackUpdate();
      }
      getRemoteParticipantBySid(e2) {
        const t2 = this.sidToIdentity.get(e2);
        if (t2)
          return this.remoteParticipants.get(t2);
      }
      getClientInfoCapabilities(e2) {
        var t2;
        const n2 = [];
        return (Jo((t2 = e2.frameMetadata) !== null && t2 !== undefined ? t2 : e2.packetTrailer) || this.e2eeManager) && n2.push(zt.CAP_PACKET_TRAILER), Po() && n2.push(zt.CAP_COMPRESSION_DEFLATE_RAW), n2;
      }
      registerRpcDataStreamHandler() {
        this.incomingDataStreamManager.registerTextStreamHandler(cu, (e2, t2) => cr(this, [e2, t2], undefined, function(e3, t3) {
          var n2 = this;
          let i2 = t3.identity;
          return function* () {
            var t4;
            const r2 = (t4 = e3.info.attributes) !== null && t4 !== undefined ? t4 : {};
            yield n2.rpcServerManager.handleIncomingDataStream(e3, i2, r2);
          }();
        })), this.incomingDataStreamManager.registerTextStreamHandler(du, (e2, t2) => cr(this, [e2, t2], undefined, function(e3, t3) {
          var n2 = this;
          let i2 = t3.identity;
          return function* () {
            var t4;
            const r2 = (t4 = e3.info.attributes) !== null && t4 !== undefined ? t4 : {};
            yield n2.rpcClientManager.handleIncomingDataStream(e3, i2, r2);
          }();
        }));
      }
      registerConnectionReconcile() {
        this.clearConnectionReconcile();
        let e2 = 0;
        this.connectionReconcileInterval = Za.setInterval(() => {
          this.engine && !this.engine.isClosed && this.engine.verifyTransport() ? e2 = 0 : (e2++, this.log.warn("detected connection state mismatch", { numFailures: e2, engine: this.engine ? { closed: this.engine.isClosed, transportsConnectedOrConnecting: this.engine.verifyTransport() } : undefined }), e2 >= 3 && (this.clearConnectionReconcile(), this.engine && !this.engine.isClosed ? (this.log.warn("detected connection state mismatch, attempting full reconnect"), this.engine.reconnect()) : (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, et.STATE_MISMATCH))));
        }, 4000);
      }
      clearConnectionReconcile() {
        this.connectionReconcileInterval && Za.clearInterval(this.connectionReconcileInterval);
      }
      setAndEmitConnectionState(t2) {
        return t2 !== this.state && (this.log.info("connection state changed: ".concat(this.state, " -> ").concat(t2)), this.state = t2, this.incomingDataStreamManager.setConnected(t2 === e.ConnectionState.Connected), this.emit(e.RoomEvent.ConnectionStateChanged, this.state), true);
      }
      emitBufferedEvents() {
        this.bufferedEvents.forEach((e2) => {
          let t2 = L(e2, 2), n2 = t2[0], i2 = t2[1];
          this.emit(n2, ...i2);
        }), this.bufferedEvents = [];
      }
      emitWhenConnected(t2) {
        for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1;r2 < n2; r2++)
          i2[r2 - 1] = arguments[r2];
        if (this.state === e.ConnectionState.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect)
          this.bufferedEvents.push([t2, i2]);
        else if (this.state === e.ConnectionState.Connected)
          return this.emit(t2, ...i2);
        return false;
      }
      simulateParticipants(t2) {
        return cr(this, undefined, undefined, function* () {
          var n2, i2, r2, a2;
          const s2 = Object.assign({ audio: true, video: true, useRealTracks: false }, t2.publish), o2 = Object.assign({ count: 9, audio: false, video: true, aspectRatios: [1.66, 1.7, 1.3] }, t2.participants);
          if (this.handleDisconnect(), this.roomInfo = new at({ sid: "RM_SIMULATED", name: "simulated-room", emptyTimeout: 0, maxParticipants: 0, creationTime: R.parse(new Date().getTime()), metadata: "", numParticipants: 1, numPublishers: 1, turnPassword: "", enabledCodecs: [], activeRecording: false }), this.localParticipant.updateInfo(new ct({ identity: "simulated-local", name: "local-name" })), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected), this.emit(e.RoomEvent.Connected), this.setAndEmitConnectionState(e.ConnectionState.Connected), s2.video) {
            const t3 = new fu(ws.Kind.Video, new mt({ source: Ye.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO, name: "video-dummy" }), new xd(s2.useRealTracks && ((n2 = window.navigator.mediaDevices) === null || n2 === undefined ? undefined : n2.getUserMedia) ? (yield window.navigator.mediaDevices.getUserMedia({ video: true })).getVideoTracks()[0] : oo(160 * ((i2 = o2.aspectRatios[0]) !== null && i2 !== undefined ? i2 : 1), 160, true, true), undefined, false, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
            this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
          }
          if (s2.audio) {
            const t3 = new fu(ws.Kind.Audio, new mt({ source: Ye.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO }), new Ed(s2.useRealTracks && ((r2 = navigator.mediaDevices) === null || r2 === undefined ? undefined : r2.getUserMedia) ? (yield navigator.mediaDevices.getUserMedia({ audio: true })).getAudioTracks()[0] : co(), undefined, false, this.audioContext, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
            this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
          }
          for (let e2 = 0;e2 < o2.count - 1; e2 += 1) {
            let t3 = new ct({ sid: Math.floor(1e4 * Math.random()).toString(), identity: "simulated-".concat(e2), state: dt.ACTIVE, tracks: [], joinedAt: R.parse(Date.now()) });
            const n3 = this.getOrCreateParticipant(t3.identity, t3);
            if (o2.video) {
              const i3 = oo(160 * ((a2 = o2.aspectRatios[e2 % o2.aspectRatios.length]) !== null && a2 !== undefined ? a2 : 1), 160, false, true), r3 = new mt({ source: Ye.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO });
              n3.addSubscribedMediaTrack(i3, r3.sid, new MediaStream([i3]), new RTCRtpReceiver), t3.tracks = [...t3.tracks, r3];
            }
            if (o2.audio) {
              const e3 = co(), i3 = new mt({ source: Ye.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO });
              n3.addSubscribedMediaTrack(e3, i3.sid, new MediaStream([e3]), new RTCRtpReceiver), t3.tracks = [...t3.tracks, i3];
            }
            n3.updateInfo(t3);
          }
        });
      }
      emit(t2) {
        for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1;r2 < n2; r2++)
          i2[r2 - 1] = arguments[r2];
        if (t2 !== e.RoomEvent.ActiveSpeakersChanged && t2 !== e.RoomEvent.TranscriptionReceived) {
          const n3 = Mu(i2).filter((e2) => e2 !== undefined);
          t2 !== e.RoomEvent.TrackSubscribed && t2 !== e.RoomEvent.TrackUnsubscribed || this.log.trace("subscribe trace: ".concat(t2), { event: t2, args: n3 }), this.log.debug("room event ".concat(t2), { event: t2, args: n3 });
        }
        return super.emit(t2, ...i2);
      }
    }
    function Mu(e2) {
      return e2.map((e3) => {
        if (e3)
          return Array.isArray(e3) ? Mu(e3) : typeof e3 == "object" ? "logContext" in e3 ? e3.logContext : undefined : e3;
      });
    }
    _u.cleanupRegistry = typeof FinalizationRegistry != "undefined" && typeof WeakRef != "undefined" && new FinalizationRegistry((e2) => {
      e2();
    });
    var Du, Ou = Object.freeze({ __proto__: null, Convert: class {
      static toAgentAttributes(e2) {
        return JSON.parse(e2);
      }
      static agentAttributesToJson(e2) {
        return JSON.stringify(e2);
      }
      static toTranscriptionAttributes(e2) {
        return JSON.parse(e2);
      }
      static transcriptionAttributesToJson(e2) {
        return JSON.stringify(e2);
      }
    } });
    e.CheckStatus = undefined, (Du = e.CheckStatus || (e.CheckStatus = {}))[Du.IDLE = 0] = "IDLE", Du[Du.RUNNING = 1] = "RUNNING", Du[Du.SKIPPED = 2] = "SKIPPED", Du[Du.SUCCESS = 3] = "SUCCESS", Du[Du.FAILED = 4] = "FAILED";

    class Au extends gr.EventEmitter {
      constructor(t2, n2) {
        let i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        super(), this.status = e.CheckStatus.IDLE, this.logs = [], this.options = {}, this.url = t2, this.token = n2, this.name = this.constructor.name, this.room = new _u(i2.roomOptions), this.connectOptions = i2.connectOptions, this.options = i2;
      }
      run(t2) {
        return cr(this, undefined, undefined, function* () {
          if (this.status !== e.CheckStatus.IDLE)
            throw Error("check is running already");
          this.setStatus(e.CheckStatus.RUNNING);
          try {
            yield this.perform();
          } catch (n2) {
            n2 instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(n2.message) : this.appendError(n2.message));
          }
          return yield this.disconnect(), yield new Promise((e2) => setTimeout(e2, 500)), this.status !== e.CheckStatus.SKIPPED && this.setStatus(this.isSuccess() ? e.CheckStatus.SUCCESS : e.CheckStatus.FAILED), t2 && t2(), this.getInfo();
        });
      }
      isSuccess() {
        return !this.logs.some((e2) => e2.level === "error");
      }
      connect(t2) {
        return cr(this, undefined, undefined, function* () {
          return this.room.state === e.ConnectionState.Connected || (t2 || (t2 = this.url), yield this.room.connect(t2, this.token, this.connectOptions)), this.room;
        });
      }
      disconnect() {
        return cr(this, undefined, undefined, function* () {
          this.room && this.room.state !== e.ConnectionState.Disconnected && (yield this.room.disconnect(), yield new Promise((e2) => setTimeout(e2, 500)));
        });
      }
      skip() {
        this.setStatus(e.CheckStatus.SKIPPED);
      }
      switchProtocol(t2) {
        return cr(this, undefined, undefined, function* () {
          let n2 = false, i2 = false;
          if (this.room.on(e.RoomEvent.Reconnecting, () => {
            n2 = true;
          }), this.room.once(e.RoomEvent.Reconnected, () => {
            i2 = true;
          }), this.room.simulateScenario("force-".concat(t2)), yield new Promise((e2) => setTimeout(e2, 1000)), !n2)
            return;
          const r2 = Date.now() + 1e4;
          for (;Date.now() < r2; ) {
            if (i2)
              return;
            yield Ms(100);
          }
          throw new Error("Could not reconnect using ".concat(t2, " protocol after 10 seconds"));
        });
      }
      appendMessage(e2) {
        this.logs.push({ level: "info", message: e2 }), this.emit("update", this.getInfo());
      }
      appendWarning(e2) {
        this.logs.push({ level: "warning", message: e2 }), this.emit("update", this.getInfo());
      }
      appendError(e2) {
        this.logs.push({ level: "error", message: e2 }), this.emit("update", this.getInfo());
      }
      setStatus(e2) {
        this.status = e2, this.emit("update", this.getInfo());
      }
      get engine() {
        var e2;
        return (e2 = this.room) === null || e2 === undefined ? undefined : e2.engine;
      }
      getInfo() {
        return { logs: this.logs, name: this.name, status: this.status, description: this.description };
      }
    }

    class Nu extends Au {
      get description() {
        return "Cloud regions";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          const e2 = new zd(this.url, this.token);
          if (!e2.isCloud())
            return void this.skip();
          const t2 = [], n2 = new Set;
          for (let r2 = 0;r2 < 3; r2++) {
            const i3 = yield e2.getNextBestRegionUrl();
            if (!i3)
              break;
            if (n2.has(i3))
              continue;
            n2.add(i3);
            const r3 = yield this.checkCloudRegion(i3);
            this.appendMessage("".concat(r3.region, " RTT: ").concat(r3.rtt, "ms, duration: ").concat(r3.duration, "ms")), t2.push(r3);
          }
          t2.sort((e3, t3) => 0.5 * (e3.duration - t3.duration) + 0.5 * (e3.rtt - t3.rtt));
          const i2 = t2[0];
          this.bestStats = i2, this.appendMessage("best Cloud region: ".concat(i2.region));
        });
      }
      getInfo() {
        const e2 = super.getInfo();
        return e2.data = this.bestStats, e2;
      }
      checkCloudRegion(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2, n2;
          yield this.connect(e2), this.options.protocol === "tcp" && (yield this.switchProtocol("tcp"));
          const i2 = (t2 = this.room.serverInfo) === null || t2 === undefined ? undefined : t2.region;
          if (!i2)
            throw new Error("Region not found");
          const r2 = yield this.room.localParticipant.streamText({ topic: "test" }), a2 = "A".repeat(1000), s2 = Date.now();
          for (let e3 = 0;e3 < 1000; e3++)
            yield r2.write(a2);
          yield r2.close();
          const o2 = Date.now(), c2 = yield (n2 = this.room.engine.pcManager) === null || n2 === undefined ? undefined : n2.publisher.getStats(), d2 = { region: i2, rtt: 1e4, duration: o2 - s2 };
          return c2 == null || c2.forEach((e3) => {
            e3.type === "candidate-pair" && e3.nominated && (d2.rtt = 1000 * e3.currentRoundTripTime);
          }), yield this.disconnect(), d2;
        });
      }
    }
    const Lu = 1e4;

    class xu extends Au {
      get description() {
        return "Connection via UDP vs TCP";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          const e2 = yield this.checkConnectionProtocol("udp"), t2 = yield this.checkConnectionProtocol("tcp");
          this.bestStats = e2, e2.qualityLimitationDurations.bandwidth - t2.qualityLimitationDurations.bandwidth > 0.5 || (e2.packetsLost - t2.packetsLost) / e2.packetsSent > 0.01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t2) : this.appendMessage("best connection quality via udp");
          const n2 = this.bestStats;
          this.appendMessage("upstream bitrate: ".concat((n2.bitrateTotal / n2.count / 1000 / 1000).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((n2.rttTotal / n2.count * 1000).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((n2.jitterTotal / n2.count * 1000).toFixed(2), " ms")), n2.packetsLost > 0 && this.appendWarning("packets lost: ".concat((n2.packetsLost / n2.packetsSent * 100).toFixed(2), "%")), n2.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((n2.qualityLimitationDurations.bandwidth / 10 * 100).toFixed(2), "%")), n2.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((n2.qualityLimitationDurations.cpu / 10 * 100).toFixed(2), "%"));
        });
      }
      getInfo() {
        const e2 = super.getInfo();
        return e2.data = this.bestStats, e2;
      }
      checkConnectionProtocol(e2) {
        return cr(this, undefined, undefined, function* () {
          yield this.connect(), e2 === "tcp" ? yield this.switchProtocol("tcp") : yield this.switchProtocol("udp");
          const t2 = document.createElement("canvas");
          t2.width = 1280, t2.height = 720;
          const n2 = t2.getContext("2d");
          if (!n2)
            throw new Error("Could not get canvas context");
          let i2 = 0;
          const r2 = () => {
            i2 = (i2 + 1) % 360, n2.fillStyle = "hsl(".concat(i2, ", 100%, 50%)"), n2.fillRect(0, 0, t2.width, t2.height), requestAnimationFrame(r2);
          };
          r2();
          const a2 = t2.captureStream(30).getVideoTracks()[0], s2 = (yield this.room.localParticipant.publishTrack(a2, { simulcast: false, degradationPreference: "maintain-resolution", videoEncoding: { maxBitrate: 2000000 } })).track, o2 = { protocol: e2, packetsLost: 0, packetsSent: 0, qualityLimitationDurations: {}, rttTotal: 0, jitterTotal: 0, bitrateTotal: 0, count: 0 }, c2 = setInterval(() => cr(this, undefined, undefined, function* () {
            const e3 = yield s2.getRTCStatsReport();
            e3 == null || e3.forEach((e4) => {
              e4.type === "outbound-rtp" ? (o2.packetsSent = e4.packetsSent, o2.qualityLimitationDurations = e4.qualityLimitationDurations, o2.bitrateTotal += e4.targetBitrate, o2.count++) : e4.type === "remote-inbound-rtp" && (o2.packetsLost = e4.packetsLost, o2.rttTotal += e4.roundTripTime, o2.jitterTotal += e4.jitter);
            });
          }), 1000);
          return yield new Promise((e3) => setTimeout(e3, Lu)), clearInterval(c2), a2.stop(), t2.remove(), yield this.disconnect(), o2;
        });
      }
    }

    class Uu extends Au {
      get description() {
        return "Can publish audio";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          const t2 = yield this.connect(), n2 = yield bu();
          if (yield ps(n2, 1000))
            throw new Error("unable to detect audio from microphone");
          this.appendMessage("detected audio from microphone"), t2.localParticipant.publishTrack(n2), yield new Promise((e3) => setTimeout(e3, 3000));
          const i2 = yield (e2 = n2.sender) === null || e2 === undefined ? undefined : e2.getStats();
          if (!i2)
            throw new Error("Could not get RTCStats");
          let r2 = 0;
          if (i2.forEach((e3) => {
            e3.type !== "outbound-rtp" || e3.kind !== "audio" && (e3.kind || e3.mediaType !== "audio") || (r2 = e3.packetsSent);
          }), r2 === 0)
            throw new Error("Could not determine packets are sent");
          this.appendMessage("published ".concat(r2, " audio packets"));
        });
      }
    }

    class Fu extends Au {
      get description() {
        return "Can publish video";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          var e2;
          const t2 = yield this.connect(), n2 = yield yu();
          yield this.checkForVideo(n2.mediaStreamTrack), t2.localParticipant.publishTrack(n2), yield new Promise((e3) => setTimeout(e3, 5000));
          const i2 = yield (e2 = n2.sender) === null || e2 === undefined ? undefined : e2.getStats();
          if (!i2)
            throw new Error("Could not get RTCStats");
          let r2 = 0;
          if (i2.forEach((e3) => {
            e3.type !== "outbound-rtp" || e3.kind !== "video" && (e3.kind || e3.mediaType !== "video") || (r2 += e3.packetsSent);
          }), r2 === 0)
            throw new Error("Could not determine packets are sent");
          this.appendMessage("published ".concat(r2, " video packets"));
        });
      }
      checkForVideo(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = new MediaStream;
          t2.addTrack(e2.clone());
          const n2 = document.createElement("video");
          n2.srcObject = t2, n2.muted = true, n2.autoplay = true, n2.playsInline = true, n2.setAttribute("playsinline", "true"), document.body.appendChild(n2), yield new Promise((t3) => {
            n2.onplay = () => {
              setTimeout(() => {
                var i2, r2, a2, s2;
                const o2 = document.createElement("canvas"), c2 = e2.getSettings(), d2 = (r2 = (i2 = c2.width) !== null && i2 !== undefined ? i2 : n2.videoWidth) !== null && r2 !== undefined ? r2 : 1280, l2 = (s2 = (a2 = c2.height) !== null && a2 !== undefined ? a2 : n2.videoHeight) !== null && s2 !== undefined ? s2 : 720;
                o2.width = d2, o2.height = l2;
                const u2 = o2.getContext("2d");
                u2.drawImage(n2, 0, 0);
                const h2 = u2.getImageData(0, 0, o2.width, o2.height).data;
                let p2 = true;
                for (let e3 = 0;e3 < h2.length; e3 += 4)
                  if (h2[e3] !== 0 || h2[e3 + 1] !== 0 || h2[e3 + 2] !== 0) {
                    p2 = false;
                    break;
                  }
                p2 ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), t3();
              }, 1000);
            }, n2.play();
          }), t2.getTracks().forEach((e3) => e3.stop()), n2.remove();
        });
      }
    }

    class Bu extends Au {
      get description() {
        return "Resuming connection after interruption";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          var t2;
          const n2 = yield this.connect();
          let i2, r2 = false, a2 = false;
          const s2 = new Promise((e2) => {
            setTimeout(e2, 5000), i2 = e2;
          }), o2 = () => {
            r2 = true;
          };
          n2.on(e.RoomEvent.SignalReconnecting, o2).on(e.RoomEvent.Reconnecting, o2).on(e.RoomEvent.Reconnected, () => {
            a2 = true, i2(true);
          }), (t2 = n2.engine.client.ws) === null || t2 === undefined || t2.close();
          const c2 = n2.engine.client.onClose;
          if (c2 && c2(""), yield s2, !r2)
            throw new Error("Did not attempt to reconnect");
          if (!a2 || n2.state !== e.ConnectionState.Connected)
            throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect");
        });
      }
    }

    class ju extends Au {
      get description() {
        return "Can connect via TURN";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          var e2, t2, n2;
          Gs(new URL(this.url)) && (this.appendMessage("Using region specific url"), this.url = (e2 = yield new zd(this.url, this.token).getNextBestRegionUrl()) !== null && e2 !== undefined ? e2 : this.url);
          const i2 = new Pc, r2 = yield i2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15000 }, undefined, true);
          let a2 = false, s2 = false, o2 = false;
          for (let c2 of r2.iceServers)
            for (let e3 of c2.urls)
              e3.startsWith("turn:") ? (s2 = true, o2 = true) : e3.startsWith("turns:") && (s2 = true, o2 = true, a2 = true), e3.startsWith("stun:") && (o2 = true);
          o2 ? s2 && !a2 && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield i2.close(), ((n2 = (t2 = this.connectOptions) === null || t2 === undefined ? undefined : t2.rtcConfig) === null || n2 === undefined ? undefined : n2.iceServers) || s2 ? yield this.room.connect(this.url, this.token, { rtcConfig: { iceTransportPolicy: "relay" } }) : (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise((e3) => setTimeout(e3, 0)));
        });
      }
    }

    class qu extends Au {
      get description() {
        return "Establishing WebRTC connection";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          let t2 = false, n2 = false;
          this.room.on(e.RoomEvent.SignalConnected, () => {
            var e2;
            const i2 = this.room.engine.client.onTrickle;
            this.room.engine.client.onTrickle = (e3, r2) => {
              if (e3.candidate) {
                const i3 = new RTCIceCandidate(e3);
                let r3 = "".concat(i3.protocol, " ").concat(i3.address, ":").concat(i3.port, " ").concat(i3.type);
                i3.address && (!function(e4) {
                  const t3 = e4.split(".");
                  if (t3.length === 4) {
                    if (t3[0] === "10")
                      return true;
                    if (t3[0] === "192" && t3[1] === "168")
                      return true;
                    if (t3[0] === "172") {
                      const e5 = parseInt(t3[1], 10);
                      if (e5 >= 16 && e5 <= 31)
                        return true;
                    }
                  }
                  return false;
                }(i3.address) ? i3.protocol === "tcp" && i3.tcpType === "passive" ? (t2 = true, r3 += " (passive)") : i3.protocol === "udp" && (n2 = true) : r3 += " (private)"), this.appendMessage(r3);
              }
              i2 && i2(e3, r2);
            }, ((e2 = this.room.engine.pcManager) === null || e2 === undefined ? undefined : e2.subscriber) && (this.room.engine.pcManager.subscriber.onIceCandidateError = (e3) => {
              e3 instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(e3.errorCode, " ").concat(e3.errorText, " ").concat(e3.url));
            });
          });
          try {
            yield this.connect(), er.info("now the room is connected");
          } catch (i2) {
            throw this.appendWarning("ports need to be open on firewall in order to connect."), i2;
          }
          t2 || this.appendWarning("Server is not configured for ICE/TCP"), n2 || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly");
        });
      }
    }

    class Vu extends Au {
      get description() {
        return "Connecting to signal connection via WebSocket";
      }
      perform() {
        return cr(this, undefined, undefined, function* () {
          var e2, t2, i2;
          (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
          let r2, a2 = new Pc;
          try {
            r2 = yield a2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15000 }, undefined, true);
          } catch (n2) {
            if (Gs(new URL(this.url))) {
              this.appendMessage("Initial connection failed with error ".concat(n2.message, ". Retrying with region fallback"));
              const t3 = new zd(this.url, this.token), i3 = yield t3.getNextBestRegionUrl();
              i3 && (r2 = yield a2.join(i3, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15000 }, undefined, true), this.appendMessage("Fallback to region worked. To avoid initial connections failing, ensure you're calling room.prepareConnection() ahead of time"));
            }
          }
          r2 ? (this.appendMessage("Connected to server, version ".concat(r2.serverVersion, ".")), ((e2 = r2.serverInfo) === null || e2 === undefined ? undefined : e2.edition) === Wt.Cloud && ((t2 = r2.serverInfo) === null || t2 === undefined ? undefined : t2.region) && this.appendMessage("LiveKit Cloud: ".concat((i2 = r2.serverInfo) === null || i2 === undefined ? undefined : i2.region))) : this.appendError("Websocket connection could not be established"), yield a2.close();
        });
      }
    }

    class Wu extends gr.EventEmitter {
      constructor(e2, t2) {
        let n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        super(), this.options = {}, this.checkResults = new Map, this.url = e2, this.token = t2, this.options = n2;
      }
      getNextCheckId() {
        const t2 = this.checkResults.size;
        return this.checkResults.set(t2, { logs: [], status: e.CheckStatus.IDLE, name: "", description: "" }), t2;
      }
      updateCheck(e2, t2) {
        this.checkResults.set(e2, t2), this.emit("checkUpdate", e2, t2);
      }
      isSuccess() {
        return Array.from(this.checkResults.values()).every((t2) => t2.status !== e.CheckStatus.FAILED);
      }
      getResults() {
        return Array.from(this.checkResults.values());
      }
      createAndRunCheck(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.getNextCheckId(), n2 = new e2(this.url, this.token, this.options), i2 = (e3) => {
            this.updateCheck(t2, e3);
          };
          n2.on("update", i2);
          const r2 = yield n2.run();
          return n2.off("update", i2), r2;
        });
      }
      checkWebsocket() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(Vu);
        });
      }
      checkWebRTC() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(qu);
        });
      }
      checkTURN() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(ju);
        });
      }
      checkReconnect() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(Bu);
        });
      }
      checkPublishAudio() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(Uu);
        });
      }
      checkPublishVideo() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(Fu);
        });
      }
      checkConnectionProtocol() {
        return cr(this, undefined, undefined, function* () {
          const e2 = yield this.createAndRunCheck(xu);
          if (e2.data && "protocol" in e2.data) {
            const t2 = e2.data;
            this.options.protocol = t2.protocol;
          }
          return e2;
        });
      }
      checkCloudRegion() {
        return cr(this, undefined, undefined, function* () {
          return this.createAndRunCheck(Nu);
        });
      }
    }

    class Hu {
    }

    class Ku {
    }
    new TextEncoder;
    const zu = new TextDecoder;
    function Gu(e2) {
      if (Uint8Array.fromBase64)
        return Uint8Array.fromBase64(typeof e2 == "string" ? e2 : zu.decode(e2), { alphabet: "base64url" });
      let t2 = e2;
      t2 instanceof Uint8Array && (t2 = zu.decode(t2)), t2 = t2.replace(/-/g, "+").replace(/_/g, "/");
      try {
        return function(e3) {
          if (Uint8Array.fromBase64)
            return Uint8Array.fromBase64(e3);
          const t3 = atob(e3), n2 = new Uint8Array(t3.length);
          for (let i2 = 0;i2 < t3.length; i2++)
            n2[i2] = t3.charCodeAt(i2);
          return n2;
        }(t2);
      } catch (n2) {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    }

    class Ju extends Error {
      constructor(e2, t2) {
        var n2;
        super(e2, t2), N(this, "code", "ERR_JOSE_GENERIC"), this.name = this.constructor.name, (n2 = Error.captureStackTrace) === null || n2 === undefined || n2.call(Error, this, this.constructor);
      }
    }
    N(Ju, "code", "ERR_JOSE_GENERIC");
    N(class extends Ju {
      constructor(e2, t2) {
        let n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "unspecified", i2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unspecified";
        super(e2, { cause: { claim: n2, reason: i2, payload: t2 } }), N(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED"), N(this, "claim", undefined), N(this, "reason", undefined), N(this, "payload", undefined), this.claim = n2, this.reason = i2, this.payload = t2;
      }
    }, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
    N(class extends Ju {
      constructor(e2, t2) {
        let n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "unspecified", i2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unspecified";
        super(e2, { cause: { claim: n2, reason: i2, payload: t2 } }), N(this, "code", "ERR_JWT_EXPIRED"), N(this, "claim", undefined), N(this, "reason", undefined), N(this, "payload", undefined), this.claim = n2, this.reason = i2, this.payload = t2;
      }
    }, "code", "ERR_JWT_EXPIRED");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
      }
    }, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JOSE_NOT_SUPPORTED");
      }
    }, "code", "ERR_JOSE_NOT_SUPPORTED");
    N(class extends Ju {
      constructor() {
        super(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "decryption operation failed", arguments.length > 1 ? arguments[1] : undefined), N(this, "code", "ERR_JWE_DECRYPTION_FAILED");
      }
    }, "code", "ERR_JWE_DECRYPTION_FAILED");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JWE_INVALID");
      }
    }, "code", "ERR_JWE_INVALID");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JWS_INVALID");
      }
    }, "code", "ERR_JWS_INVALID");

    class Qu extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JWT_INVALID");
      }
    }
    N(Qu, "code", "ERR_JWT_INVALID");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JWK_INVALID");
      }
    }, "code", "ERR_JWK_INVALID");
    N(class extends Ju {
      constructor() {
        super(...arguments), N(this, "code", "ERR_JWKS_INVALID");
      }
    }, "code", "ERR_JWKS_INVALID");
    N(class extends Ju {
      constructor() {
        super(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "no applicable key found in the JSON Web Key Set", arguments.length > 1 ? arguments[1] : undefined), N(this, "code", "ERR_JWKS_NO_MATCHING_KEY");
      }
    }, "code", "ERR_JWKS_NO_MATCHING_KEY");
    N(class extends Ju {
      constructor() {
        super(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "multiple matching keys found in the JSON Web Key Set", arguments.length > 1 ? arguments[1] : undefined), N(this, Symbol.asyncIterator, undefined), N(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
      }
    }, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
    N(class extends Ju {
      constructor() {
        super(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "request timed out", arguments.length > 1 ? arguments[1] : undefined), N(this, "code", "ERR_JWKS_TIMEOUT");
      }
    }, "code", "ERR_JWKS_TIMEOUT");
    N(class extends Ju {
      constructor() {
        super(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "signature verification failed", arguments.length > 1 ? arguments[1] : undefined), N(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
      }
    }, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
    function Yu(e2) {
      if (typeof e2 != "string")
        throw new Qu("JWTs must use Compact JWS serialization, JWT must be a string");
      const t2 = e2.split("."), n2 = t2[1], i2 = t2.length;
      if (i2 === 5)
        throw new Qu("Only JWTs using Compact JWS serialization can be decoded");
      if (i2 !== 3)
        throw new Qu("Invalid JWT");
      if (!n2)
        throw new Qu("JWTs must contain a payload");
      let r2, a2;
      try {
        r2 = Gu(n2);
      } catch (s2) {
        throw new Qu("Failed to base64url decode the payload");
      }
      try {
        a2 = JSON.parse(zu.decode(r2));
      } catch (o2) {
        throw new Qu("Failed to parse the decoded payload as JSON");
      }
      if (!function(e3) {
        if (typeof (t3 = e3) != "object" || t3 === null || Object.prototype.toString.call(e3) !== "[object Object]")
          return false;
        var t3;
        if (Object.getPrototypeOf(e3) === null)
          return true;
        let n3 = e3;
        for (;Object.getPrototypeOf(n3) !== null; )
          n3 = Object.getPrototypeOf(n3);
        return Object.getPrototypeOf(e3) === n3;
      }(a2))
        throw new Qu("Invalid JWT Claims Set");
      return a2;
    }
    const Xu = 1000;
    function Zu(e2) {
      const t2 = Yu(e2);
      t2.roomConfig;
      const n2 = or(t2, ["roomConfig"]);
      return Object.assign(Object.assign({}, n2), { roomConfig: t2.roomConfig ? Dn.fromJson(t2.roomConfig, { ignoreUnknownFields: true }) : undefined });
    }
    function $u(e2, t2) {
      const n2 = new Set([...Object.keys(e2), ...Object.keys(t2)]);
      for (const i2 of n2)
        switch (i2) {
          case "roomName":
          case "participantName":
          case "participantIdentity":
          case "participantMetadata":
          case "participantAttributes":
          case "agentName":
          case "agentMetadata":
          case "deployment":
            if (e2[i2] !== t2[i2])
              return false;
            break;
          default:
            throw new Error("Options key ".concat(i2, " not being checked for equality!"));
        }
      return true;
    }

    class eh extends Ku {
      constructor() {
        super(...arguments), this.cachedFetchOptions = null, this.cachedResponse = null, this.fetchMutex = new r;
      }
      isSameAsCachedFetchOptions(e2) {
        return !!this.cachedFetchOptions && $u(e2, this.cachedFetchOptions);
      }
      shouldReturnCachedValueFromFetch(e2) {
        return !!this.cachedResponse && (!!function(e3) {
          const t2 = Zu(e3.participantToken);
          if (!(t2 == null ? undefined : t2.nbf) || !(t2 == null ? undefined : t2.exp))
            return true;
          const n2 = new Date, i2 = t2.nbf * Xu, r2 = new Date(i2), a2 = t2.exp * Xu, s2 = new Date(a2 - 60000);
          return r2 <= n2 && s2 > n2;
        }(this.cachedResponse) && !!this.isSameAsCachedFetchOptions(e2));
      }
      getCachedResponseJwtPayload() {
        return this.cachedResponse ? Zu(this.cachedResponse.participantToken) : null;
      }
      fetch(e2, t2) {
        return cr(this, undefined, undefined, function* () {
          const n2 = yield this.fetchMutex.lock();
          try {
            if (t2 && (this.cachedResponse = null), this.shouldReturnCachedValueFromFetch(e2))
              return this.cachedResponse.toJson();
            this.cachedFetchOptions = e2;
            const n3 = yield this.update(e2);
            return this.cachedResponse = n3, n3.toJson();
          } finally {
            n2();
          }
        });
      }
    }

    class th extends Hu {
      constructor(e2) {
        super(), this.literalOrFn = e2;
      }
      fetch() {
        return cr(this, undefined, undefined, function* () {
          return typeof this.literalOrFn == "function" ? this.literalOrFn() : this.literalOrFn;
        });
      }
    }

    class nh extends eh {
      constructor(e2) {
        super(), this.customFn = e2;
      }
      update(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = this.customFn(e2);
          let n2;
          return n2 = t2 instanceof Promise ? yield t2 : t2, zi.fromJson(n2, { ignoreUnknownFields: true });
        });
      }
    }

    class ih extends eh {
      constructor(e2) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        super(), this.url = e2, this.endpointOptions = t2;
      }
      createRequestFromOptions(e2) {
        var t2, n2, i2, r2;
        const a2 = new Ki;
        for (const s2 of Object.keys(e2))
          switch (s2) {
            case "roomName":
            case "participantName":
            case "participantIdentity":
            case "participantMetadata":
              a2[s2] = e2[s2];
              break;
            case "participantAttributes":
              a2.participantAttributes = (t2 = e2.participantAttributes) !== null && t2 !== undefined ? t2 : {};
              break;
            case "agentName":
              a2.roomConfig = (n2 = a2.roomConfig) !== null && n2 !== undefined ? n2 : new Dn, a2.roomConfig.agents.length === 0 && a2.roomConfig.agents.push(new dn), a2.roomConfig.agents[0].agentName = e2.agentName;
              break;
            case "agentMetadata":
              a2.roomConfig = (i2 = a2.roomConfig) !== null && i2 !== undefined ? i2 : new Dn, a2.roomConfig.agents.length === 0 && a2.roomConfig.agents.push(new dn), a2.roomConfig.agents[0].metadata = e2.agentMetadata;
              break;
            case "deployment":
              a2.roomConfig = (r2 = a2.roomConfig) !== null && r2 !== undefined ? r2 : new Dn, a2.roomConfig.agents.length === 0 && a2.roomConfig.agents.push(new dn), a2.roomConfig.agents[0].deployment = e2.deployment;
              break;
            default:
              throw new Error("Options key ".concat(s2, " not being included in forming request!"));
          }
        return a2;
      }
      update(e2) {
        return cr(this, undefined, undefined, function* () {
          var t2;
          const n2 = this.createRequestFromOptions(e2), i2 = yield fetch(this.url, Object.assign(Object.assign({}, this.endpointOptions), { method: (t2 = this.endpointOptions.method) !== null && t2 !== undefined ? t2 : "POST", headers: Object.assign({ "Content-Type": "application/json" }, this.endpointOptions.headers), body: n2.toJsonString({ useProtoFieldName: true }) }));
          if (!i2.ok)
            throw new Error("Error generating token from endpoint ".concat(this.url, ": received ").concat(i2.status, " / ").concat(yield i2.text()));
          const r2 = yield i2.json();
          return zi.fromJson(r2, { ignoreUnknownFields: true });
        });
      }
    }

    class rh extends ih {
      constructor(e2, t2) {
        const n2 = t2.baseUrl, i2 = n2 === undefined ? "https://cloud-api.livekit.io" : n2, r2 = or(t2, ["baseUrl"]);
        super("".concat(i2, "/api/v2/sandbox/connection-details"), Object.assign(Object.assign({}, r2), { headers: { "X-Sandbox-ID": e2 } }));
      }
    }

    class ah extends rh {
    }
    const sh = { literal: (e2) => new th(e2), custom: (e2) => new nh(e2), endpoint(e2) {
      return new ih(e2, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
    }, sandboxTokenServer(e2) {
      return new ah(e2, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
    }, developmentTokenServer(e2) {
      return new rh(e2, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
    } };
    const oh = new Map([["obs virtual camera", { facingMode: "environment", confidence: "medium" }]]), ch = new Map([["iphone", { facingMode: "environment", confidence: "medium" }], ["ipad", { facingMode: "environment", confidence: "medium" }]]);
    function dh(e2) {
      var t2;
      const n2 = e2.trim().toLowerCase();
      if (n2 !== "")
        return oh.has(n2) ? oh.get(n2) : (t2 = Array.from(ch.entries()).find((e3) => {
          let t3 = L(e3, 1)[0];
          return n2.includes(t3);
        })) === null || t2 === undefined ? undefined : t2[1];
    }
    const lh = Symbol.for("lk.serializer");
    function uh(e2) {
      return Object.assign(Object.assign({}, e2), { symbol: lh });
    }
    const hh = { json: function() {
      return uh({ parse: (e2) => JSON.parse(e2), serialize: (e2) => JSON.stringify(e2) });
    }, raw: function() {
      return uh({ parse: (e2) => e2, serialize: (e2) => e2 });
    }, custom: function(e2) {
      return uh(e2);
    } };
    e.BaseKeyProvider = Ko, e.CLIENT_PROTOCOL_DATA_STREAM_RPC = 1, e.CLIENT_PROTOCOL_DATA_STREAM_V2 = 2, e.CLIENT_PROTOCOL_DEFAULT = 0, e.Checker = Au, e.ConnectionCheck = Wu, e.ConnectionError = qa, e.CriticalTimers = Za, e.CryptorError = class extends Oa {
      constructor(t2) {
        let n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.CryptorErrorReason.InternalError, i2 = arguments.length > 2 ? arguments[2] : undefined;
        super(40, t2), this.reason = n2, this.participantIdentity = i2;
      }
    }, e.DataPacket_Kind = Pt, e.DataStreamError = Ya, e.DataTrackPacket = xl, e.DefaultReconnectPolicy = sr, e.DeviceUnsupportedError = Va, e.DisconnectReason = et, e.Encryption_Type = ht, e.ExternalE2EEKeyProvider = class extends Ko {
      constructor() {
        let e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(Object.assign(Object.assign({}, e2), { sharedKey: true, ratchetWindowSize: 0, failureTolerance: -1 }));
      }
      setKey(e2) {
        return cr(this, undefined, undefined, function* () {
          const t2 = typeof e2 == "string" ? yield qo(e2) : yield Vo(e2);
          this.onSetEncryptionKey(t2);
        });
      }
    }, e.FrameMetadataManager = sc, e.LivekitError = Oa, e.LivekitReasonedError = Aa, e.LocalAudioTrack = Ed, e.LocalDataTrack = nu, e.LocalParticipant = Cu, e.LocalTrack = Sd, e.LocalTrackPublication = fu, e.LocalTrackRecorder = Td, e.LocalVideoTrack = xd, e.Mutex = r, e.NegotiationError = za, e.PacketTrailerManager = oc, e.Participant = Eu, e.ParticipantKind = lt, e.PublishDataError = Ga, e.PublishTrackError = Ja, e.RemoteAudioTrack = gu, e.RemoteDataTrack = Al, e.RemoteParticipant = Iu, e.RemoteTrack = $o, e.RemoteTrackPublication = Pu, e.RemoteVideoTrack = ec, e.Room = _u, e.RpcError = ou, e.ScreenSharePresets = ds, e.SignalReconnectError = Xa, e.SignalRequestError = Qa, e.SimulatedError = class extends Oa {
      constructor() {
        super(-1, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Simulated failure"), this.name = "simulated";
      }
    }, e.SubscriptionError = nt, e.TokenSource = sh, e.TokenSourceConfigurable = Ku, e.TokenSourceFixed = Hu, e.Track = ws, e.TrackInvalidError = Wa, e.TrackPublication = vu, e.TrackType = Qe, e.UnexpectedConnectionState = Ka, e.UnsupportedServer = Ha, e.VideoPreset = $a, e.VideoPresets = os, e.VideoPresets43 = cs, e.areTokenSourceFetchOptionsEqual = $u, e.asEncryptablePacket = Ho, e.attachToElement = Rs, e.attributes = Ou, e.audioCodecs = es, e.clientProtocol = 2, e.compareVersions = Zs, e.createAudioAnalyser = function(e2, t2) {
      const n2 = Object.assign({ cloneTrack: false, fftSize: 2048, smoothingTimeConstant: 0.8, minDecibels: -100, maxDecibels: -80 }, t2), i2 = ms();
      if (!i2)
        throw new Error("Audio Context not supported on this browser");
      const r2 = n2.cloneTrack ? e2.mediaStreamTrack.clone() : e2.mediaStreamTrack, a2 = i2.createMediaStreamSource(new MediaStream([r2])), s2 = i2.createAnalyser();
      s2.minDecibels = n2.minDecibels, s2.maxDecibels = n2.maxDecibels, s2.fftSize = n2.fftSize, s2.smoothingTimeConstant = n2.smoothingTimeConstant, a2.connect(s2);
      const o2 = new Uint8Array(s2.frequencyBinCount);
      return { calculateVolume: () => {
        s2.getByteFrequencyData(o2);
        let e3 = 0;
        for (const t3 of o2)
          e3 += Math.pow(t3 / 255, 2);
        return Math.sqrt(e3 / o2.length);
      }, analyser: s2, cleanup: () => cr(this, undefined, undefined, function* () {
        yield i2.close(), n2.cloneTrack && r2.stop();
      }) };
    }, e.createE2EEKey = function() {
      return window.crypto.getRandomValues(new Uint8Array(32));
    }, e.createKeyMaterialFromBuffer = Vo, e.createKeyMaterialFromString = qo, e.createLocalAudioTrack = bu, e.createLocalScreenTracks = function(e2) {
      return cr(this, undefined, undefined, function* () {
        if (e2 === undefined && (e2 = {}), e2.resolution !== undefined || Ws() || (e2.resolution = ds.h1080fps30.resolution), navigator.mediaDevices.getDisplayMedia === undefined)
          throw new Va("getDisplayMedia not supported");
        const t2 = fs(e2), n2 = yield navigator.mediaDevices.getDisplayMedia(t2), i2 = n2.getVideoTracks();
        if (i2.length === 0)
          throw new Wa("no video track found");
        const r2 = new xd(i2[0], undefined, false);
        r2.source = ws.Source.ScreenShare;
        const a2 = [r2];
        if (n2.getAudioTracks().length > 0) {
          const e3 = new Ed(n2.getAudioTracks()[0], undefined, false);
          e3.source = ws.Source.ScreenShareAudio, a2.push(e3);
        }
        return a2;
      });
    }, e.createLocalTracks = ku, e.createLocalVideoTrack = yu, e.decodeTokenPayload = Zu, e.deriveKeys = function(e2, t2) {
      return cr(this, undefined, undefined, function* () {
        const n2 = Wo(e2.algorithm.name, t2.ratchetSalt), i2 = yield crypto.subtle.deriveKey(n2, e2, { name: Ao, length: t2.keySize }, false, ["encrypt", "decrypt"]);
        return { material: e2, encryptionKey: i2 };
      });
    }, e.detachTrack = Ps, e.facingModeFromDeviceLabel = dh, e.facingModeFromLocalTrack = function(e2) {
      let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n2;
      const i2 = fo(e2) ? e2.mediaStreamTrack : e2, r2 = i2.getSettings();
      let a2 = { facingMode: (n2 = t2.defaultFacingMode) !== null && n2 !== undefined ? n2 : "user", confidence: "low" };
      if ("facingMode" in r2) {
        const e3 = r2.facingMode;
        er.trace("rawFacingMode", { rawFacingMode: e3 }), e3 && typeof e3 == "string" && function(e4) {
          const t3 = ["user", "environment", "left", "right"];
          return e4 === undefined || t3.includes(e4);
        }(e3) && (a2 = { facingMode: e3, confidence: "high" });
      }
      if (["low", "medium"].includes(a2.confidence)) {
        er.trace("Try to get facing mode from device label: (".concat(i2.label, ")"));
        const e3 = dh(i2.label);
        e3 !== undefined && (a2 = e3);
      }
      return a2;
    }, e.getBrowser = Pa, e.getEmptyAudioStreamTrack = co, e.getEmptyVideoStreamTrack = function() {
      return ao || (ao = oo()), ao.clone();
    }, e.getLogger = nr, e.importKey = function(e2) {
      return cr(this, arguments, undefined, function(e3) {
        let t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { name: Ao }, n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "encrypt";
        return function* () {
          return crypto.subtle.importKey("raw", e3, t2, false, n2 === "derive" ? ["deriveBits", "deriveKey"] : ["encrypt", "decrypt"]);
        }();
      });
    }, e.isAudioCodec = function(e2) {
      return es.includes(e2);
    }, e.isAudioTrack = ko, e.isBackupCodec = rs, e.isBackupVideoCodec = is, e.isBrowserSupported = Fs, e.isE2EESupported = Fo, e.isInsertableStreamSupported = jo, e.isLocalParticipant = wo, e.isLocalTrack = fo, e.isRemoteParticipant = function(e2) {
      return !e2.isLocal;
    }, e.isRemoteTrack = So, e.isScriptTransformSupported = Bo, e.isSerializer = function(e2) {
      return typeof e2 == "object" && e2 !== null && "symbol" in e2 && e2.symbol === lh;
    }, e.isVideoCodec = uo, e.isVideoFrame = function(e2) {
      return "type" in e2;
    }, e.isVideoTrack = yo, e.needsRbspUnescaping = function(e2) {
      for (var t2 = 0;t2 < e2.length - 3; t2++)
        if (e2[t2] == 0 && e2[t2 + 1] == 0 && e2[t2 + 2] == 3)
          return true;
      return false;
    }, e.parseRbsp = function(e2) {
      const t2 = [];
      for (var n2 = e2.length, i2 = 0;i2 < e2.length; )
        n2 - i2 >= 3 && !e2[i2] && !e2[i2 + 1] && e2[i2 + 2] == 3 ? (t2.push(e2[i2++]), t2.push(e2[i2++]), i2++) : t2.push(e2[i2++]);
      return new Uint8Array(t2);
    }, e.protocolVersion = 17, e.ratchet = function(e2, t2) {
      return cr(this, undefined, undefined, function* () {
        const n2 = Wo(e2.algorithm.name, t2);
        return crypto.subtle.deriveBits(n2, e2, 256);
      });
    }, e.serializers = hh, e.setLogExtension = function(t2, n2) {
      (n2 ? [n2] : tr).forEach((n3) => {
        const i2 = n3.methodFactory;
        n3.methodFactory = (n4, r2, a2) => {
          const s2 = i2(n4, r2, a2), o2 = e.LogLevel[n4], c2 = o2 >= r2 && o2 < e.LogLevel.silent;
          return (e2, n5) => {
            n5 ? s2(e2, n5) : s2(e2), c2 && t2(o2, e2, n5);
          };
        }, n3.setLevel(n3.getLevel());
      });
    }, e.setLogLevel = function(e2, t2) {
      if (t2)
        $i.getLogger(t2).setLevel(e2);
      else
        for (const n2 of tr)
          n2.setLevel(e2);
    }, e.supportsAV1 = As, e.supportsAdaptiveStream = function() {
      return typeof ResizeObserver !== undefined && typeof IntersectionObserver !== undefined;
    }, e.supportsAudioOutputSelection = function() {
      return Us();
    }, e.supportsDynacast = function() {
      return Ds();
    }, e.supportsVP9 = Ns, e.version = Da, e.videoCodecs = ns, e.writeRbsp = function(e2) {
      const t2 = [];
      for (var n2 = 0, i2 = 0;i2 < e2.length; ++i2) {
        var r2 = e2[i2];
        r2 <= 3 && n2 >= 2 && (t2.push(3), n2 = 0), t2.push(r2), r2 == 0 ? ++n2 : n2 = 0;
      }
      return new Uint8Array(t2);
    };
  });
});

// node_modules/simli-client/dist/Logger.js
var require_Logger = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Logger = exports.LogLevel = undefined;
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["INFO"] = 1] = "INFO";
    LogLevel2[LogLevel2["ERROR"] = 2] = "ERROR";
    LogLevel2[LogLevel2["CRITICAL"] = 3] = "CRITICAL";
  })(LogLevel || (exports.LogLevel = LogLevel = {}));

  class Logger {
    currentLevel;
    destination;
    session_id;
    constructor(level = LogLevel.INFO) {
      this.currentLevel = level;
      this.destination = null;
      this.session_id = null;
    }
    formatMessage(level, message) {
      const timestamp = new Date().toISOString();
      const destination = this.destination ?? "not_received";
      const sessionId = this.session_id ?? "not_received";
      return `SimliClient | ${timestamp} | ${level} | ${destination}/${sessionId} | ${message}`;
    }
    log(level, levelName, message, ...args) {
      if (level < this.currentLevel) {
        return;
      }
      const formattedMessage = this.formatMessage(levelName, message);
      switch (level) {
        case LogLevel.DEBUG:
        case LogLevel.INFO:
          console.log(formattedMessage, ...args);
          break;
        case LogLevel.ERROR:
        case LogLevel.CRITICAL:
          console.error(formattedMessage, ...args);
          break;
      }
    }
    debug(message, ...args) {
      this.log(LogLevel.DEBUG, "DEBUG", message, ...args);
    }
    info(message, ...args) {
      this.log(LogLevel.INFO, "INFO", message, ...args);
    }
    error(message, ...args) {
      this.log(LogLevel.ERROR, "ERROR", message, ...args);
    }
    critical(message, ...args) {
      this.log(LogLevel.CRITICAL, "CRITICAL", message, ...args);
    }
    setLevel(level) {
      this.currentLevel = level;
    }
    getLevel() {
      return this.currentLevel;
    }
  }
  exports.Logger = Logger;
});

// node_modules/simli-client/dist/Signaling/WebSocketSignaling.js
var require_WebSocketSignaling = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebSocketSignaling = undefined;
  var Logger_1 = require_Logger();

  class WebSocketSignaling {
    wsURL;
    wsConnection;
    logger;
    constructor(wsURL, logger) {
      this.wsURL = wsURL;
      this.wsConnection = new WebSocket(this.wsURL);
      this.wsConnection.addEventListener("message", (message) => this.logger.debug(message.data));
      this.logger = logger;
    }
    async connect(connected) {
      this.wsConnection.onopen = connected;
    }
    disconnect() {
      this.wsConnection.close();
    }
    send(data) {
      if (this.wsConnection.readyState != WebSocket.OPEN) {
        throw `Invalid State, WS Connection ${this.wsConnection.readyState.toString()}`;
      }
      this.wsConnection.send(data);
    }
    sendOffer(offer) {
      this.send(JSON.stringify(offer));
    }
    sendSignal(data) {
      this.send(data);
    }
    sendAudioData(audioData) {
      if (this.logger.getLevel() === Logger_1.LogLevel.DEBUG)
        this.logger.debug("Sent Audio of length: " + (audioData.length / 32000).toString());
      this.send(audioData);
    }
    sendAudioDataImmediate(audioData) {
      if (this.logger.getLevel() === Logger_1.LogLevel.DEBUG)
        this.logger.debug("Sent Audio of length for immediate playback: " + (audioData.length / 32000).toString());
      const asciiStr = "PLAY_IMMEDIATE";
      const encoder = new TextEncoder;
      const strBytes = encoder.encode(asciiStr);
      const buffer = new Uint8Array(strBytes.length + audioData.length);
      buffer.set(strBytes, 0);
      buffer.set(audioData, strBytes.length);
      this.send(buffer);
    }
  }
  exports.WebSocketSignaling = WebSocketSignaling;
});

// node_modules/simli-client/dist/Transports/BaseTransport.js
var require_BaseTransport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.handleMessage = handleMessage;
  exports.register_destination = register_destination;
  function register_destination(logger, serialized_info) {
    const parsed = JSON.parse(serialized_info);
    logger.destination = parsed.destination;
    logger.session_id = parsed.session_id;
  }
  async function handleMessage(transport, message) {
    const firstToken = message.data.toUpperCase().split(" ")[0];
    switch (firstToken) {
      case "START": {
        break;
      }
      case "ACK": {
        transport.emit("ack");
        break;
      }
      case "STOP": {
        transport.disconnect();
        transport.emit("stop");
        break;
      }
      case "CLOSING":
      case "RATE":
      case "ERROR":
      case "ERROR:": {
        transport.disconnect();
        transport.emit("error", message.data);
      }
      case "SPEAK": {
        transport.emit("speaking");
        break;
      }
      case "SILENT": {
        transport.emit("silent");
        break;
      }
      default: {
        if (firstToken.includes("SDP") || firstToken.includes("LIVEKIT")) {
          transport.emit("connection_info", message.data);
        } else if (firstToken.includes("VIDEO_METADATA")) {
          transport.emit("video_info", message.data);
        } else if (firstToken.includes("ENDFRAME")) {
          transport.emit("stop");
          transport.disconnect();
        } else if (firstToken.includes("DESTINATION")) {
          transport.emit("destination", message.data);
        } else {
          transport.emit("unknown", message.data);
        }
      }
    }
  }
});

// node_modules/simli-client/dist/Transports/LivekitTransport.js
var require_LivekitTransport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LivekitTransport = undefined;
  var livekit_client_1 = require_livekit_client_umd();
  var WebSocketSignaling_1 = require_WebSocketSignaling();
  var BaseTransport_1 = require_BaseTransport();

  class LivekitTransport {
    videoElementAnchor;
    audioElementAnchor;
    signalingConnection;
    session_token;
    pc;
    logger;
    events = new Map;
    websocketPromise;
    websocketReject = null;
    constructor(simliBaseWSURL, session_token, videoElementAnchor, audioElementAnchor, logger, failSignal) {
      this.logger = logger;
      this.on("startup_error", failSignal);
      this.session_token = session_token;
      const wsURL = new URL(simliBaseWSURL + "/compose/webrtc/livekit");
      wsURL.searchParams.set("session_token", session_token);
      this.signalingConnection = new WebSocketSignaling_1.WebSocketSignaling(wsURL, this.logger);
      this.on("destination", (serilized_info) => (0, BaseTransport_1.register_destination)(this.logger, serilized_info));
      this.websocketPromise = new Promise((resolve, reject) => {
        this.websocketReject = reject;
        this.signalingConnection.connect(() => {
          resolve("success");
          this.logger.debug("LK WebSocket Connected");
        });
      });
      this.signalingConnection.wsConnection.onmessage = (message) => {
        (0, BaseTransport_1.handleMessage)(this, message);
      };
      this.signalingConnection.wsConnection.onerror = (evt) => {
        this.emit("startup_error", "Websocket Failed");
        if (this.websocketReject) {
          this.websocketReject("Websocket Failed");
          this.websocketReject = null;
        }
      };
      const options = { adaptiveStream: false, dynacast: true };
      this.pc = new livekit_client_1.Room(options);
      this.on("connection_info", (serialized_info) => this.join_lk_room(serialized_info));
      this.videoElementAnchor = videoElementAnchor;
      this.audioElementAnchor = audioElementAnchor;
    }
    on(event, callback) {
      if (!this.events.has(event)) {
        this.events.set(event, new Set);
      }
      this.events.get(event)?.add(callback);
      this.logger.debug("Registered Callback for Event: " + event);
    }
    off(event, callback) {
      if (!this.events.has(event)) {
        throw "Event Not Regsitered";
      }
      this.events.get(event)?.delete(callback);
    }
    emit(event, ...args) {
      this.logger.debug("Event: " + event);
      this.events.get(event)?.forEach((callback) => {
        callback(...args);
      });
    }
    async connect() {
      this.logger.info("Connecting");
      this.setupConnectionStateHandler();
      await this.websocketPromise;
    }
    async disconnect() {
      this.logger.info("Disconnecting");
      try {
        this.signalingConnection.sendSignal("DONE");
      } catch {
        this.logger.error("FAILED TO SEND FINAL MESSAGE");
      }
      try {
        this.signalingConnection.disconnect();
      } catch {
        this.logger.error("SIGNALING ALREADY DISCONNECTED");
      }
      try {
        await this.pc.disconnect();
      } catch {
        this.logger.error("LOCAL PEER ALREADY CLOSED");
      }
    }
    async join_lk_room(serialized_info) {
      const info = JSON.parse(serialized_info);
      this.logger.debug(info);
      if (info.livekit_url && info.livekit_token) {
        await this.pc.connect(info.livekit_url, info.livekit_token);
      } else {
        this.disconnect();
        this.emit("error", "Invalid Join Info, Contact Simli For Support");
      }
    }
    setupConnectionStateHandler() {
      this.pc.on(livekit_client_1.RoomEvent.Disconnected, () => {
        this.disconnect();
      });
      this.pc.on(livekit_client_1.RoomEvent.Connected, () => {});
      this.pc.on(livekit_client_1.RoomEvent.TrackSubscribed, (track, publication, participant) => {
        this.logger.debug("Track Received: " + track.kind);
        if (track.kind === livekit_client_1.Track.Kind.Video) {
          track.attach(this.videoElementAnchor);
          this.videoElementAnchor.requestVideoFrameCallback(() => {
            this.emit("start");
          });
        } else if (track.kind === livekit_client_1.Track.Kind.Audio) {
          track.attach(this.audioElementAnchor);
        }
      });
    }
  }
  exports.LivekitTransport = LivekitTransport;
});

// node_modules/simli-client/dist/Transports/P2PTransport.js
var require_P2PTransport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.P2PTransport = undefined;
  var WebSocketSignaling_1 = require_WebSocketSignaling();
  var BaseTransport_1 = require_BaseTransport();

  class P2PTransport {
    videoElementAnchor;
    audioElementAnchor;
    signalingConnection;
    session_token;
    pc;
    events = new Map;
    logger;
    iceCandidateCount;
    previousIceCandidateCount;
    iceTimeout = null;
    websocketPromise;
    websocketReject = null;
    constructor(simliBaseWSURL, session_token, enableSFU, iceServers, videoElementAnchor, audioElementAnchor, logger, failSignal) {
      this.logger = logger;
      this.on("startup_error", failSignal);
      this.session_token = session_token;
      const wsURL = new URL(simliBaseWSURL + "/compose/webrtc/p2p");
      wsURL.searchParams.set("session_token", session_token);
      wsURL.searchParams.set("enableSFU", String(enableSFU));
      this.on("destination", (serilized_info) => (0, BaseTransport_1.register_destination)(this.logger, serilized_info));
      this.signalingConnection = new WebSocketSignaling_1.WebSocketSignaling(wsURL, this.logger);
      this.websocketPromise = new Promise((resolve, reject) => {
        this.websocketReject = reject;
        this.signalingConnection.connect(() => {
          resolve("success");
          this.logger.debug("P2P WebSocket Connected");
        });
      });
      this.signalingConnection.wsConnection.onmessage = (message) => {
        (0, BaseTransport_1.handleMessage)(this, message);
      };
      this.signalingConnection.wsConnection.onerror = (evt) => {
        this.emit("startup_error", "Websocket Failed");
        if (this.websocketReject) {
          this.websocketReject("Websocket Failed");
          this.websocketReject = null;
        }
      };
      this.on("connection_info", (serialized_info) => this.registerPeerInfo(serialized_info));
      this.videoElementAnchor = videoElementAnchor;
      this.audioElementAnchor = audioElementAnchor;
      this.iceCandidateCount = 0;
      this.previousIceCandidateCount = 0;
      const config = {
        sdpSemantics: "unified-plan",
        iceServers
      };
      this.pc = new window.RTCPeerConnection(config);
      this.pc.addTransceiver("audio", {
        direction: "recvonly"
      });
      this.pc.addTransceiver("video", {
        direction: "recvonly"
      });
    }
    on(event, callback) {
      if (!this.events.has(event)) {
        this.events.set(event, new Set);
      }
      this.events.get(event)?.add(callback);
    }
    off(event, callback) {
      this.events.get(event)?.delete(callback);
    }
    emit(event, ...args) {
      this.events.get(event)?.forEach((callback) => {
        try {
          callback(...args);
        } catch {
          this.logger.error("CALLBACK FAILED: " + callback.name);
        }
      });
    }
    async connect() {
      const offer = await this.pc.createOffer();
      await this.pc.setLocalDescription(offer);
      await this.waitForIceGathering();
      this.setupPeerConnectionListeners();
      await this.websocketPromise;
      if (this.pc.localDescription) {
        this.signalingConnection.sendOffer(this.pc.localDescription);
      }
    }
    async disconnect() {
      this.logger.info("Disconnecting");
      try {
        this.signalingConnection.sendSignal("DONE");
      } catch {
        this.logger.error("FAILED TO SEND FINAL MESSAGE");
      }
      try {
        this.signalingConnection.disconnect();
      } catch {
        this.logger.error("SIGNALING ALREADY DISCONNECTED");
      }
      try {
        this.pc.close();
      } catch {
        this.logger.error("LOCAL PEER ALREADY CLOSED");
      }
    }
    async registerPeerInfo(serialized_info) {
      const info = JSON.parse(serialized_info);
      if (info.sdp && info.type == "answer") {
        await this.pc.setRemoteDescription(new RTCSessionDescription(info));
      } else {
        this.disconnect();
        this.emit("error", "Invalid Join Info, Contact Simli For Support");
      }
    }
    async waitForIceGathering() {
      this.iceCandidateCount = 0;
      this.previousIceCandidateCount = 0;
      if (this.pc.iceGatheringState === "complete") {
        return;
      }
      return new Promise((resolve, reject) => {
        if (!this.iceTimeout) {
          this.iceTimeout = setTimeout(() => {
            reject(new Error("ICE gathering timeout"));
          }, 1e4);
        }
        const checkIceCandidates = () => {
          if (this.pc.iceGatheringState === "complete" || this.iceCandidateCount === this.previousIceCandidateCount) {
            if (this.iceTimeout) {
              clearTimeout(this.iceTimeout);
            }
            resolve();
          } else {
            this.previousIceCandidateCount = this.iceCandidateCount;
            setTimeout(checkIceCandidates, 150);
          }
        };
        checkIceCandidates();
      });
    }
    setupPeerConnectionListeners() {
      this.pc.addEventListener("track", (evt) => {
        if (evt.track.kind === "video") {
          this.videoElementAnchor.srcObject = evt.streams[0];
          this.videoElementAnchor.requestVideoFrameCallback(() => {
            this.emit("start");
          });
        } else if (evt.track.kind === "audio" && this.audioElementAnchor) {
          this.audioElementAnchor.srcObject = evt.streams[0];
        }
      });
      this.pc.onicecandidate = (event) => {
        if (event.candidate !== null) {
          this.iceCandidateCount += 1;
        }
      };
    }
  }
  exports.P2PTransport = P2PTransport;
});

// node_modules/simli-client/dist/Client.js
var require_Client = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LogLevel = exports.Logger = exports.SimliClient = undefined;
  exports.generateSimliSessionToken = generateSimliSessionToken;
  exports.generateIceServers = generateIceServers;
  var LivekitTransport_1 = require_LivekitTransport();
  var P2PTransport_1 = require_P2PTransport();
  var Logger_1 = require_Logger();
  Object.defineProperty(exports, "Logger", { enumerable: true, get: function() {
    return Logger_1.Logger;
  } });
  Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
    return Logger_1.LogLevel;
  } });
  var AudioProcessor = (buffer) => {
    if (buffer <= 0) {
      throw "Invalid Buffer Size, Can't be negative";
    }
    if (Math.floor(buffer) - buffer != 0) {
      throw "Invalid Buffer Size, Can't be a float";
    }
    return `
        class AudioProcessor extends AudioWorkletProcessor {
          constructor() {
            super();
            this.buffer = new Int16Array(${buffer});
            this.bufferIndex = 0;
        }

          process(inputs, outputs, parameters) {
            const input = inputs[0];
            const inputChannel = input[0];
            if (inputChannel) {
              for (let i = 0; i < inputChannel.length; i++) {
                this.buffer[this.bufferIndex] = Math.max(-32768, Math.min(32767, Math.round(inputChannel[i] * 32767)));
                this.bufferIndex++;

                if (this.bufferIndex === this.buffer.length){
                  this.port.postMessage({type: 'audioData', data: this.buffer.slice(0, this.bufferIndex)});
                  this.bufferIndex = 0;
                }
              }
            }
            return true;
          }
        }

        registerProcessor('audio-processor', AudioProcessor);
      `;
  };
  async function generateSimliSessionToken(request, SimliURL = "https://api.simli.ai") {
    const url = `${SimliURL}/compose/token`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(request.config),
      headers: {
        "Content-Type": "application/json",
        "x-simli-api-key": request.apiKey
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw errorText;
    }
    const resJSON = await response.json();
    return resJSON;
  }
  async function generateIceServers(apiKey, SimliURL = "https://api.simli.ai") {
    try {
      const url = `${SimliURL}/compose/ice`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "x-simli-api-key": apiKey
        },
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`SIMLI: HTTP error! status: ${response.status}`);
      }
      const iceServers = await response.json();
      if (!iceServers || iceServers.length === 0) {
        throw new Error("SIMLI: No ICE servers returned");
      }
      return iceServers;
    } catch (error) {
      return [{ urls: ["stun:stun.l.google.com:19302"] }];
    }
  }

  class SimliClient {
    session_token;
    transport = "livekit";
    signaling = "websockets";
    videoElement;
    audioElement;
    audioBufferSize = 3000;
    connection;
    connectionTimeout;
    connectionResolve;
    connectionReject;
    connectionPromise;
    sourceNode = null;
    audioWorklet = null;
    MAX_RETRY_ATTEMPTS = 10;
    RETRY_DELAY = 2000;
    CONNECTION_TIMEOUT_MS = 15000;
    retryAttempt = 0;
    SimliWSURL = "wss://api.simli.ai";
    audioContext = new (window.AudioContext || window.webkitAudioContext)({
      sampleRate: 16000
    });
    logger;
    iceServers;
    persistent_events;
    failReason = null;
    shouldStop = false;
    on(event, callback) {
      if (!this.persistent_events.has(event)) {
        this.persistent_events.set(event, new Set);
      }
      this.persistent_events.get(event)?.add(callback);
      this.logger.debug("Registered Callback for Event: " + event);
      this.connection.on(event, callback);
    }
    off(event, callback) {
      if (!this.persistent_events.has(event)) {
        throw "Event Not Regsitered";
      }
      this.persistent_events.get(event)?.delete(callback);
      this.connection.off(event, callback);
    }
    constructor(session_token, videoElement, audioElement, iceServers, logLevel = Logger_1.LogLevel.DEBUG, transport_mode = "p2p", signaling = "websockets", SimliWSURL = "wss://api.simli.ai", audioBufferSize = 3000) {
      if (audioBufferSize <= 0) {
        throw "Invalid Buffer Size, Can't be negative";
      }
      if (Math.floor(audioBufferSize) - audioBufferSize != 0) {
        throw "Invalid Buffer Size, Can't be a float";
      }
      if (!(SimliWSURL.startsWith("ws://") || SimliWSURL.startsWith("wss://")) || SimliWSURL.endsWith("/")) {
        throw "Invalid Simli WS URL";
      }
      this.audioBufferSize = audioBufferSize;
      this.session_token = session_token;
      this.transport = transport_mode;
      this.signaling = signaling;
      this.SimliWSURL = SimliWSURL;
      this.videoElement = videoElement;
      this.audioElement = audioElement;
      this.iceServers = iceServers;
      this.logger = new Logger_1.Logger(logLevel);
      let resolveFn;
      let rejectFn;
      this.connectionPromise = new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });
      this.connectionResolve = resolveFn;
      this.connectionReject = rejectFn;
      this.persistent_events = new Map;
      this.connectionTimeout = setTimeout(() => this.connectionReject("CONNECTION TIMED OUT"), this.CONNECTION_TIMEOUT_MS);
      switch (this.transport) {
        case "livekit":
          this.connection = new LivekitTransport_1.LivekitTransport(this.SimliWSURL, this.session_token, videoElement, audioElement, this.logger, this.connectionReject);
          break;
        case "p2p":
          if (!iceServers || iceServers.length == 0) {
            throw "Ice Servers Required for P2P Mode";
          }
          this.connection = new P2PTransport_1.P2PTransport(this.SimliWSURL, this.session_token, true, iceServers, videoElement, audioElement, this.logger, this.connectionReject);
          break;
        default:
          throw new Error("Not Implemented Yet");
      }
      this.connection.on("start", () => {
        this.connectionResolve();
        clearTimeout(this.connectionTimeout);
      });
      this.connection.on("unknown", (message) => this.logger.debug("UNKOWN MESSAGE FROM SERVER: " + message));
      this.connection.on("error", (message) => {
        this.failReason = message;
        this.connectionReject(message);
      });
    }
    resetConnections(videoElement, audioElement, iceServers) {
      this.failReason = null;
      let resolveFn;
      let rejectFn;
      this.connectionPromise = new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });
      this.connectionResolve = resolveFn;
      this.connectionReject = rejectFn;
      this.connectionTimeout = setTimeout(() => this.connectionReject("Connection Timed Out"), this.CONNECTION_TIMEOUT_MS);
      switch (this.transport) {
        case "livekit":
          this.connection = new LivekitTransport_1.LivekitTransport(this.SimliWSURL, this.session_token, videoElement, audioElement, this.logger, this.connectionReject);
          break;
        case "p2p":
          if (!iceServers || iceServers.length == 0) {
            throw "Ice Servers Required for P2P Mode";
          }
          this.connection = new P2PTransport_1.P2PTransport(this.SimliWSURL, this.session_token, true, iceServers, videoElement, audioElement, this.logger, this.connectionReject);
          break;
        default:
          throw new Error("Not Implemented Yet");
      }
      this.connection.on("start", () => {
        this.connectionResolve();
        clearTimeout(this.connectionTimeout);
      });
      this.connection.on("error", (message) => {
        this.retryAttempt = this.MAX_RETRY_ATTEMPTS;
        this.connectionReject(message);
      });
      this.connection.on("unknown", (message) => this.logger.debug("UNKOWN MESSAGE FROM SERVER: " + message));
      this.persistent_events.forEach((callbacks, event) => {
        callbacks.forEach((callback) => {
          this.connection.on(event, callback);
        });
      });
    }
    async start() {
      if (this.shouldStop) {
        throw new Error("Disconnect Already Called, Can't reuse same SimliClient multiple times create a new SimliClient Object");
      }
      try {
        await this.connection.connect();
        await this.connectionPromise;
        this.retryAttempt = 0;
      } catch (error) {
        if (this.failReason) {
          throw error;
        }
        if (this.retryAttempt >= this.MAX_RETRY_ATTEMPTS)
          throw new Error("Too Many Retry Attempts Failed to connect");
        if (this.shouldStop) {
          this.shouldStop = false;
          throw new Error("Called Disconnect Before A Connecction succeeded");
        }
        this.logger.error("FAILED: " + error);
        await this.connection.disconnect();
        await new Promise((resolve) => setTimeout(resolve, this.RETRY_DELAY));
        this.retryAttempt += 1;
        if (this.retryAttempt > 2)
          this.transport = "livekit";
        this.resetConnections(this.videoElement, this.audioElement, this.iceServers);
        await this.start();
      }
    }
    async stop() {
      this.shouldStop = true;
      await this.connection.disconnect();
    }
    listenToMediastreamTrack(stream) {
      const source = this.audioContext.createMediaStreamSource(new MediaStream([stream]));
      this.sourceNode = source;
      this.attachSourceToWorklet(this.audioContext, source);
    }
    listenToAudioElement(audioEl) {
      const source = this.audioContext.createMediaElementSource(audioEl);
      this.attachSourceToWorklet(this.audioContext, source);
    }
    attachSourceToWorklet(audioContext, source) {
      audioContext.audioWorklet.addModule(URL.createObjectURL(new Blob([AudioProcessor(this.audioBufferSize)], {
        type: "application/javascript"
      }))).then(() => {
        this.audioWorklet = new AudioWorkletNode(audioContext, "audio-processor");
        if (this.audioWorklet === null) {
          throw new Error("SIMLI: AudioWorklet not initialized");
        }
        source.connect(this.audioWorklet);
        this.audioWorklet.port.onmessage = (event) => {
          if (event.data.type === "audioData") {
            this.connection.signalingConnection.sendAudioData(new Uint8Array(event.data.data.buffer));
          }
        };
      });
    }
    ClearBuffer = () => {
      this.connection.signalingConnection.sendSignal("SKIP");
    };
    sendAudioData(audioData) {
      this.connection.signalingConnection.sendAudioData(audioData);
    }
    sendAudioDataImmediate(audioData) {
      this.connection.signalingConnection.sendAudioDataImmediate(audioData);
    }
  }
  exports.SimliClient = SimliClient;
});

// node_modules/simli-client/dist/index.js
var require_dist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LogLevel = exports.generateIceServers = exports.generateSimliSessionToken = exports.SimliClient = undefined;
  var Client_1 = require_Client();
  Object.defineProperty(exports, "SimliClient", { enumerable: true, get: function() {
    return Client_1.SimliClient;
  } });
  Object.defineProperty(exports, "generateSimliSessionToken", { enumerable: true, get: function() {
    return Client_1.generateSimliSessionToken;
  } });
  Object.defineProperty(exports, "generateIceServers", { enumerable: true, get: function() {
    return Client_1.generateIceServers;
  } });
  Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
    return Client_1.LogLevel;
  } });
});

// simli-entry.js
var import_simli_client = __toESM(require_dist(), 1);
var export_generateSimliSessionToken = import_simli_client.generateSimliSessionToken;
var export_SimliClient = import_simli_client.SimliClient;
var export_LogLevel = import_simli_client.LogLevel;

export {
  export_generateSimliSessionToken as generateSimliSessionToken,
  export_SimliClient as SimliClient,
  export_LogLevel as LogLevel
};
