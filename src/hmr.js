(() => {
  var e, r, o = {
      163: (e, r, o) => {
        "use strict";

        function t(e) {
          return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }
        o.d(r, {
          Z: () => t
        })
      },
      737: (e, r, o) => {
        "use strict";
        o.r(r);
        var t = o(163);
        (e = o.hmd(e)).exports = s;
        var n = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/,
          a = {
            reset: ["fff", "000"],
            black: "000",
            red: "ff0000",
            green: "209805",
            yellow: "e8bf03",
            blue: "0000ff",
            magenta: "ff00ff",
            cyan: "00ffee",
            lightgrey: "f0f0f0",
            darkgrey: "888"
          },
          i = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "lightgrey"
          },
          c = {
            1: "font-weight:bold",
            2: "opacity:0.5",
            3: "<i>",
            4: "<u>",
            8: "display:none",
            9: "<del>"
          },
          l = {
            23: "</i>",
            24: "</u>",
            29: "</del>"
          };

        function s(e) {
          if (!n.test(e)) return e;
          var r = [],
            o = e.replace(/\033\[(\d+)*m/g, (function (e, o) {
              var t = c[o];
              if (t) return ~r.indexOf(o) ? (r.pop(), "</span>") : (r.push(o), "<" === t[0] ? t : '<span style="' + t + ';">');
              var n = l[o];
              return n ? (r.pop(), n) : ""
            })),
            t = r.length;
          return t > 0 && (o += Array(t + 1).join("</span>")), o
        }

        function u(e) {
          for (var r in c[0] = "font-weight:normal;opacity:1;color:#" + e.reset[0] + ";background:#" + e.reset[1], c[7] = "color:#" + e.reset[1] + ";background:#" + e.reset[0], c[90] = "color:#" + e.darkgrey, i) {
            var o = e[i[r]] || "000";
            c[r] = "color:#" + o, r = parseInt(r), c[(r + 10).toString()] = "background:#" + o
          }
        } [0, 21, 22, 27, 28, 39, 49].forEach((function (e) {
          l[e] = "</span>"
        })), s.setColors = function (e) {
          if ("object" !== (0, t.Z)(e)) throw new Error("`colors` parameter must be an Object.");
          var r = {};
          for (var o in a) {
            var n = e.hasOwnProperty(o) ? e[o] : null;
            if (n) {
              if ("reset" === o) {
                if ("string" == typeof n && (n = [n]), !Array.isArray(n) || 0 === n.length || n.some((function (e) {
                    return "string" != typeof e
                  }))) throw new Error("The value of `" + o + "` property must be an Array and each item could only be a hex string, e.g.: FF0000");
                var i = a[o];
                n[0] || (n[0] = i[0]), 1 !== n.length && n[1] || (n = [n[0]]).push(i[1]), n = n.slice(0, 2)
              } else if ("string" != typeof n) throw new Error("The value of `" + o + "` property must be a hex string, e.g.: FF0000");
              r[o] = n
            } else r[o] = a[o]
          }
          u(r)
        }, s.reset = function () {
          u(a)
        }, s.tags = {}, Object.defineProperty ? (Object.defineProperty(s.tags, "open", {
          get: function () {
            return c
          }
        }), Object.defineProperty(s.tags, "close", {
          get: function () {
            return l
          }
        })) : (s.tags.open = c, s.tags.close = l), s.reset()
      },
      546: e => {
        "use strict";
        e.exports = function () {
          return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
        }
      },
      362: (e, r, o) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var t = o(260),
          n = ["apos", "nbsp", "iexcl", "cent", "pound", "curren", "yen", "brvbar", "sect", "uml", "copy", "ordf", "laquo", "not", "shy", "reg", "macr", "deg", "plusmn", "sup2", "sup3", "acute", "micro", "para", "middot", "cedil", "sup1", "ordm", "raquo", "frac14", "frac12", "frac34", "iquest", "Agrave", "Aacute", "Acirc", "Atilde", "Auml", "Aring", "AElig", "Ccedil", "Egrave", "Eacute", "Ecirc", "Euml", "Igrave", "Iacute", "Icirc", "Iuml", "ETH", "Ntilde", "Ograve", "Oacute", "Ocirc", "Otilde", "Ouml", "times", "Oslash", "Ugrave", "Uacute", "Ucirc", "Uuml", "Yacute", "THORN", "szlig", "agrave", "aacute", "acirc", "atilde", "auml", "aring", "aelig", "ccedil", "egrave", "eacute", "ecirc", "euml", "igrave", "iacute", "icirc", "iuml", "eth", "ntilde", "ograve", "oacute", "ocirc", "otilde", "ouml", "divide", "oslash", "ugrave", "uacute", "ucirc", "uuml", "yacute", "thorn", "yuml", "quot", "amp", "lt", "gt", "OElig", "oelig", "Scaron", "scaron", "Yuml", "circ", "tilde", "ensp", "emsp", "thinsp", "zwnj", "zwj", "lrm", "rlm", "ndash", "mdash", "lsquo", "rsquo", "sbquo", "ldquo", "rdquo", "bdquo", "dagger", "Dagger", "permil", "lsaquo", "rsaquo", "euro", "fnof", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigmaf", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "thetasym", "upsih", "piv", "bull", "hellip", "prime", "Prime", "oline", "frasl", "weierp", "image", "real", "trade", "alefsym", "larr", "uarr", "rarr", "darr", "harr", "crarr", "lArr", "uArr", "rArr", "dArr", "hArr", "forall", "part", "exist", "empty", "nabla", "isin", "notin", "ni", "prod", "sum", "minus", "lowast", "radic", "prop", "infin", "ang", "and", "or", "cap", "cup", "int", "there4", "sim", "cong", "asymp", "ne", "equiv", "le", "ge", "sub", "sup", "nsub", "sube", "supe", "oplus", "otimes", "perp", "sdot", "lceil", "rceil", "lfloor", "rfloor", "lang", "rang", "loz", "spades", "clubs", "hearts", "diams"],
          a = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830],
          i = {},
          c = {};
        ! function () {
          for (var e = 0, r = n.length; e < r;) {
            var o = n[e],
              t = a[e];
            i[o] = String.fromCharCode(t), c[t] = o, e++
          }
        }();
        var l = function () {
          function e() {}
          return e.prototype.decode = function (e) {
            return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, (function (e, r) {
              var o;
              if ("#" === r.charAt(0)) {
                var n = "x" === r.charAt(1).toLowerCase() ? parseInt(r.substr(2), 16) : parseInt(r.substr(1));
                (!isNaN(n) || n >= -32768) && (o = n <= 65535 ? String.fromCharCode(n) : t.fromCodePoint(n))
              } else o = i[r];
              return o || e
            })) : ""
          }, e.decode = function (r) {
            return (new e).decode(r)
          }, e.prototype.encode = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", t = 0; t < r;) {
              var n = c[e.charCodeAt(t)];
              o += n ? "&" + n + ";" : e.charAt(t), t++
            }
            return o
          }, e.encode = function (r) {
            return (new e).encode(r)
          }, e.prototype.encodeNonUTF = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", n = 0; n < r;) {
              var a = e.charCodeAt(n),
                i = c[a];
              i ? o += "&" + i + ";" : a < 32 || a > 126 ? a >= t.highSurrogateFrom && a <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n++) : o += "&#" + a + ";" : o += e.charAt(n), n++
            }
            return o
          }, e.encodeNonUTF = function (r) {
            return (new e).encodeNonUTF(r)
          }, e.prototype.encodeNonASCII = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", n = 0; n < r;) {
              var a = e.charCodeAt(n);
              a <= 255 ? o += e[n++] : (a >= t.highSurrogateFrom && a <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n++) : o += "&#" + a + ";", n++)
            }
            return o
          }, e.encodeNonASCII = function (r) {
            return (new e).encodeNonASCII(r)
          }, e
        }();
        r.Html4Entities = l
      },
      452: (e, r, o) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var t = o(260),
          n = [
            ["Aacute", [193]],
            ["aacute", [225]],
            ["Abreve", [258]],
            ["abreve", [259]],
            ["ac", [8766]],
            ["acd", [8767]],
            ["acE", [8766, 819]],
            ["Acirc", [194]],
            ["acirc", [226]],
            ["acute", [180]],
            ["Acy", [1040]],
            ["acy", [1072]],
            ["AElig", [198]],
            ["aelig", [230]],
            ["af", [8289]],
            ["Afr", [120068]],
            ["afr", [120094]],
            ["Agrave", [192]],
            ["agrave", [224]],
            ["alefsym", [8501]],
            ["aleph", [8501]],
            ["Alpha", [913]],
            ["alpha", [945]],
            ["Amacr", [256]],
            ["amacr", [257]],
            ["amalg", [10815]],
            ["amp", [38]],
            ["AMP", [38]],
            ["andand", [10837]],
            ["And", [10835]],
            ["and", [8743]],
            ["andd", [10844]],
            ["andslope", [10840]],
            ["andv", [10842]],
            ["ang", [8736]],
            ["ange", [10660]],
            ["angle", [8736]],
            ["angmsdaa", [10664]],
            ["angmsdab", [10665]],
            ["angmsdac", [10666]],
            ["angmsdad", [10667]],
            ["angmsdae", [10668]],
            ["angmsdaf", [10669]],
            ["angmsdag", [10670]],
            ["angmsdah", [10671]],
            ["angmsd", [8737]],
            ["angrt", [8735]],
            ["angrtvb", [8894]],
            ["angrtvbd", [10653]],
            ["angsph", [8738]],
            ["angst", [197]],
            ["angzarr", [9084]],
            ["Aogon", [260]],
            ["aogon", [261]],
            ["Aopf", [120120]],
            ["aopf", [120146]],
            ["apacir", [10863]],
            ["ap", [8776]],
            ["apE", [10864]],
            ["ape", [8778]],
            ["apid", [8779]],
            ["apos", [39]],
            ["ApplyFunction", [8289]],
            ["approx", [8776]],
            ["approxeq", [8778]],
            ["Aring", [197]],
            ["aring", [229]],
            ["Ascr", [119964]],
            ["ascr", [119990]],
            ["Assign", [8788]],
            ["ast", [42]],
            ["asymp", [8776]],
            ["asympeq", [8781]],
            ["Atilde", [195]],
            ["atilde", [227]],
            ["Auml", [196]],
            ["auml", [228]],
            ["awconint", [8755]],
            ["awint", [10769]],
            ["backcong", [8780]],
            ["backepsilon", [1014]],
            ["backprime", [8245]],
            ["backsim", [8765]],
            ["backsimeq", [8909]],
            ["Backslash", [8726]],
            ["Barv", [10983]],
            ["barvee", [8893]],
            ["barwed", [8965]],
            ["Barwed", [8966]],
            ["barwedge", [8965]],
            ["bbrk", [9141]],
            ["bbrktbrk", [9142]],
            ["bcong", [8780]],
            ["Bcy", [1041]],
            ["bcy", [1073]],
            ["bdquo", [8222]],
            ["becaus", [8757]],
            ["because", [8757]],
            ["Because", [8757]],
            ["bemptyv", [10672]],
            ["bepsi", [1014]],
            ["bernou", [8492]],
            ["Bernoullis", [8492]],
            ["Beta", [914]],
            ["beta", [946]],
            ["beth", [8502]],
            ["between", [8812]],
            ["Bfr", [120069]],
            ["bfr", [120095]],
            ["bigcap", [8898]],
            ["bigcirc", [9711]],
            ["bigcup", [8899]],
            ["bigodot", [10752]],
            ["bigoplus", [10753]],
            ["bigotimes", [10754]],
            ["bigsqcup", [10758]],
            ["bigstar", [9733]],
            ["bigtriangledown", [9661]],
            ["bigtriangleup", [9651]],
            ["biguplus", [10756]],
            ["bigvee", [8897]],
            ["bigwedge", [8896]],
            ["bkarow", [10509]],
            ["blacklozenge", [10731]],
            ["blacksquare", [9642]],
            ["blacktriangle", [9652]],
            ["blacktriangledown", [9662]],
            ["blacktriangleleft", [9666]],
            ["blacktriangleright", [9656]],
            ["blank", [9251]],
            ["blk12", [9618]],
            ["blk14", [9617]],
            ["blk34", [9619]],
            ["block", [9608]],
            ["bne", [61, 8421]],
            ["bnequiv", [8801, 8421]],
            ["bNot", [10989]],
            ["bnot", [8976]],
            ["Bopf", [120121]],
            ["bopf", [120147]],
            ["bot", [8869]],
            ["bottom", [8869]],
            ["bowtie", [8904]],
            ["boxbox", [10697]],
            ["boxdl", [9488]],
            ["boxdL", [9557]],
            ["boxDl", [9558]],
            ["boxDL", [9559]],
            ["boxdr", [9484]],
            ["boxdR", [9554]],
            ["boxDr", [9555]],
            ["boxDR", [9556]],
            ["boxh", [9472]],
            ["boxH", [9552]],
            ["boxhd", [9516]],
            ["boxHd", [9572]],
            ["boxhD", [9573]],
            ["boxHD", [9574]],
            ["boxhu", [9524]],
            ["boxHu", [9575]],
            ["boxhU", [9576]],
            ["boxHU", [9577]],
            ["boxminus", [8863]],
            ["boxplus", [8862]],
            ["boxtimes", [8864]],
            ["boxul", [9496]],
            ["boxuL", [9563]],
            ["boxUl", [9564]],
            ["boxUL", [9565]],
            ["boxur", [9492]],
            ["boxuR", [9560]],
            ["boxUr", [9561]],
            ["boxUR", [9562]],
            ["boxv", [9474]],
            ["boxV", [9553]],
            ["boxvh", [9532]],
            ["boxvH", [9578]],
            ["boxVh", [9579]],
            ["boxVH", [9580]],
            ["boxvl", [9508]],
            ["boxvL", [9569]],
            ["boxVl", [9570]],
            ["boxVL", [9571]],
            ["boxvr", [9500]],
            ["boxvR", [9566]],
            ["boxVr", [9567]],
            ["boxVR", [9568]],
            ["bprime", [8245]],
            ["breve", [728]],
            ["Breve", [728]],
            ["brvbar", [166]],
            ["bscr", [119991]],
            ["Bscr", [8492]],
            ["bsemi", [8271]],
            ["bsim", [8765]],
            ["bsime", [8909]],
            ["bsolb", [10693]],
            ["bsol", [92]],
            ["bsolhsub", [10184]],
            ["bull", [8226]],
            ["bullet", [8226]],
            ["bump", [8782]],
            ["bumpE", [10926]],
            ["bumpe", [8783]],
            ["Bumpeq", [8782]],
            ["bumpeq", [8783]],
            ["Cacute", [262]],
            ["cacute", [263]],
            ["capand", [10820]],
            ["capbrcup", [10825]],
            ["capcap", [10827]],
            ["cap", [8745]],
            ["Cap", [8914]],
            ["capcup", [10823]],
            ["capdot", [10816]],
            ["CapitalDifferentialD", [8517]],
            ["caps", [8745, 65024]],
            ["caret", [8257]],
            ["caron", [711]],
            ["Cayleys", [8493]],
            ["ccaps", [10829]],
            ["Ccaron", [268]],
            ["ccaron", [269]],
            ["Ccedil", [199]],
            ["ccedil", [231]],
            ["Ccirc", [264]],
            ["ccirc", [265]],
            ["Cconint", [8752]],
            ["ccups", [10828]],
            ["ccupssm", [10832]],
            ["Cdot", [266]],
            ["cdot", [267]],
            ["cedil", [184]],
            ["Cedilla", [184]],
            ["cemptyv", [10674]],
            ["cent", [162]],
            ["centerdot", [183]],
            ["CenterDot", [183]],
            ["cfr", [120096]],
            ["Cfr", [8493]],
            ["CHcy", [1063]],
            ["chcy", [1095]],
            ["check", [10003]],
            ["checkmark", [10003]],
            ["Chi", [935]],
            ["chi", [967]],
            ["circ", [710]],
            ["circeq", [8791]],
            ["circlearrowleft", [8634]],
            ["circlearrowright", [8635]],
            ["circledast", [8859]],
            ["circledcirc", [8858]],
            ["circleddash", [8861]],
            ["CircleDot", [8857]],
            ["circledR", [174]],
            ["circledS", [9416]],
            ["CircleMinus", [8854]],
            ["CirclePlus", [8853]],
            ["CircleTimes", [8855]],
            ["cir", [9675]],
            ["cirE", [10691]],
            ["cire", [8791]],
            ["cirfnint", [10768]],
            ["cirmid", [10991]],
            ["cirscir", [10690]],
            ["ClockwiseContourIntegral", [8754]],
            ["clubs", [9827]],
            ["clubsuit", [9827]],
            ["colon", [58]],
            ["Colon", [8759]],
            ["Colone", [10868]],
            ["colone", [8788]],
            ["coloneq", [8788]],
            ["comma", [44]],
            ["commat", [64]],
            ["comp", [8705]],
            ["compfn", [8728]],
            ["complement", [8705]],
            ["complexes", [8450]],
            ["cong", [8773]],
            ["congdot", [10861]],
            ["Congruent", [8801]],
            ["conint", [8750]],
            ["Conint", [8751]],
            ["ContourIntegral", [8750]],
            ["copf", [120148]],
            ["Copf", [8450]],
            ["coprod", [8720]],
            ["Coproduct", [8720]],
            ["copy", [169]],
            ["COPY", [169]],
            ["copysr", [8471]],
            ["CounterClockwiseContourIntegral", [8755]],
            ["crarr", [8629]],
            ["cross", [10007]],
            ["Cross", [10799]],
            ["Cscr", [119966]],
            ["cscr", [119992]],
            ["csub", [10959]],
            ["csube", [10961]],
            ["csup", [10960]],
            ["csupe", [10962]],
            ["ctdot", [8943]],
            ["cudarrl", [10552]],
            ["cudarrr", [10549]],
            ["cuepr", [8926]],
            ["cuesc", [8927]],
            ["cularr", [8630]],
            ["cularrp", [10557]],
            ["cupbrcap", [10824]],
            ["cupcap", [10822]],
            ["CupCap", [8781]],
            ["cup", [8746]],
            ["Cup", [8915]],
            ["cupcup", [10826]],
            ["cupdot", [8845]],
            ["cupor", [10821]],
            ["cups", [8746, 65024]],
            ["curarr", [8631]],
            ["curarrm", [10556]],
            ["curlyeqprec", [8926]],
            ["curlyeqsucc", [8927]],
            ["curlyvee", [8910]],
            ["curlywedge", [8911]],
            ["curren", [164]],
            ["curvearrowleft", [8630]],
            ["curvearrowright", [8631]],
            ["cuvee", [8910]],
            ["cuwed", [8911]],
            ["cwconint", [8754]],
            ["cwint", [8753]],
            ["cylcty", [9005]],
            ["dagger", [8224]],
            ["Dagger", [8225]],
            ["daleth", [8504]],
            ["darr", [8595]],
            ["Darr", [8609]],
            ["dArr", [8659]],
            ["dash", [8208]],
            ["Dashv", [10980]],
            ["dashv", [8867]],
            ["dbkarow", [10511]],
            ["dblac", [733]],
            ["Dcaron", [270]],
            ["dcaron", [271]],
            ["Dcy", [1044]],
            ["dcy", [1076]],
            ["ddagger", [8225]],
            ["ddarr", [8650]],
            ["DD", [8517]],
            ["dd", [8518]],
            ["DDotrahd", [10513]],
            ["ddotseq", [10871]],
            ["deg", [176]],
            ["Del", [8711]],
            ["Delta", [916]],
            ["delta", [948]],
            ["demptyv", [10673]],
            ["dfisht", [10623]],
            ["Dfr", [120071]],
            ["dfr", [120097]],
            ["dHar", [10597]],
            ["dharl", [8643]],
            ["dharr", [8642]],
            ["DiacriticalAcute", [180]],
            ["DiacriticalDot", [729]],
            ["DiacriticalDoubleAcute", [733]],
            ["DiacriticalGrave", [96]],
            ["DiacriticalTilde", [732]],
            ["diam", [8900]],
            ["diamond", [8900]],
            ["Diamond", [8900]],
            ["diamondsuit", [9830]],
            ["diams", [9830]],
            ["die", [168]],
            ["DifferentialD", [8518]],
            ["digamma", [989]],
            ["disin", [8946]],
            ["div", [247]],
            ["divide", [247]],
            ["divideontimes", [8903]],
            ["divonx", [8903]],
            ["DJcy", [1026]],
            ["djcy", [1106]],
            ["dlcorn", [8990]],
            ["dlcrop", [8973]],
            ["dollar", [36]],
            ["Dopf", [120123]],
            ["dopf", [120149]],
            ["Dot", [168]],
            ["dot", [729]],
            ["DotDot", [8412]],
            ["doteq", [8784]],
            ["doteqdot", [8785]],
            ["DotEqual", [8784]],
            ["dotminus", [8760]],
            ["dotplus", [8724]],
            ["dotsquare", [8865]],
            ["doublebarwedge", [8966]],
            ["DoubleContourIntegral", [8751]],
            ["DoubleDot", [168]],
            ["DoubleDownArrow", [8659]],
            ["DoubleLeftArrow", [8656]],
            ["DoubleLeftRightArrow", [8660]],
            ["DoubleLeftTee", [10980]],
            ["DoubleLongLeftArrow", [10232]],
            ["DoubleLongLeftRightArrow", [10234]],
            ["DoubleLongRightArrow", [10233]],
            ["DoubleRightArrow", [8658]],
            ["DoubleRightTee", [8872]],
            ["DoubleUpArrow", [8657]],
            ["DoubleUpDownArrow", [8661]],
            ["DoubleVerticalBar", [8741]],
            ["DownArrowBar", [10515]],
            ["downarrow", [8595]],
            ["DownArrow", [8595]],
            ["Downarrow", [8659]],
            ["DownArrowUpArrow", [8693]],
            ["DownBreve", [785]],
            ["downdownarrows", [8650]],
            ["downharpoonleft", [8643]],
            ["downharpoonright", [8642]],
            ["DownLeftRightVector", [10576]],
            ["DownLeftTeeVector", [10590]],
            ["DownLeftVectorBar", [10582]],
            ["DownLeftVector", [8637]],
            ["DownRightTeeVector", [10591]],
            ["DownRightVectorBar", [10583]],
            ["DownRightVector", [8641]],
            ["DownTeeArrow", [8615]],
            ["DownTee", [8868]],
            ["drbkarow", [10512]],
            ["drcorn", [8991]],
            ["drcrop", [8972]],
            ["Dscr", [119967]],
            ["dscr", [119993]],
            ["DScy", [1029]],
            ["dscy", [1109]],
            ["dsol", [10742]],
            ["Dstrok", [272]],
            ["dstrok", [273]],
            ["dtdot", [8945]],
            ["dtri", [9663]],
            ["dtrif", [9662]],
            ["duarr", [8693]],
            ["duhar", [10607]],
            ["dwangle", [10662]],
            ["DZcy", [1039]],
            ["dzcy", [1119]],
            ["dzigrarr", [10239]],
            ["Eacute", [201]],
            ["eacute", [233]],
            ["easter", [10862]],
            ["Ecaron", [282]],
            ["ecaron", [283]],
            ["Ecirc", [202]],
            ["ecirc", [234]],
            ["ecir", [8790]],
            ["ecolon", [8789]],
            ["Ecy", [1069]],
            ["ecy", [1101]],
            ["eDDot", [10871]],
            ["Edot", [278]],
            ["edot", [279]],
            ["eDot", [8785]],
            ["ee", [8519]],
            ["efDot", [8786]],
            ["Efr", [120072]],
            ["efr", [120098]],
            ["eg", [10906]],
            ["Egrave", [200]],
            ["egrave", [232]],
            ["egs", [10902]],
            ["egsdot", [10904]],
            ["el", [10905]],
            ["Element", [8712]],
            ["elinters", [9191]],
            ["ell", [8467]],
            ["els", [10901]],
            ["elsdot", [10903]],
            ["Emacr", [274]],
            ["emacr", [275]],
            ["empty", [8709]],
            ["emptyset", [8709]],
            ["EmptySmallSquare", [9723]],
            ["emptyv", [8709]],
            ["EmptyVerySmallSquare", [9643]],
            ["emsp13", [8196]],
            ["emsp14", [8197]],
            ["emsp", [8195]],
            ["ENG", [330]],
            ["eng", [331]],
            ["ensp", [8194]],
            ["Eogon", [280]],
            ["eogon", [281]],
            ["Eopf", [120124]],
            ["eopf", [120150]],
            ["epar", [8917]],
            ["eparsl", [10723]],
            ["eplus", [10865]],
            ["epsi", [949]],
            ["Epsilon", [917]],
            ["epsilon", [949]],
            ["epsiv", [1013]],
            ["eqcirc", [8790]],
            ["eqcolon", [8789]],
            ["eqsim", [8770]],
            ["eqslantgtr", [10902]],
            ["eqslantless", [10901]],
            ["Equal", [10869]],
            ["equals", [61]],
            ["EqualTilde", [8770]],
            ["equest", [8799]],
            ["Equilibrium", [8652]],
            ["equiv", [8801]],
            ["equivDD", [10872]],
            ["eqvparsl", [10725]],
            ["erarr", [10609]],
            ["erDot", [8787]],
            ["escr", [8495]],
            ["Escr", [8496]],
            ["esdot", [8784]],
            ["Esim", [10867]],
            ["esim", [8770]],
            ["Eta", [919]],
            ["eta", [951]],
            ["ETH", [208]],
            ["eth", [240]],
            ["Euml", [203]],
            ["euml", [235]],
            ["euro", [8364]],
            ["excl", [33]],
            ["exist", [8707]],
            ["Exists", [8707]],
            ["expectation", [8496]],
            ["exponentiale", [8519]],
            ["ExponentialE", [8519]],
            ["fallingdotseq", [8786]],
            ["Fcy", [1060]],
            ["fcy", [1092]],
            ["female", [9792]],
            ["ffilig", [64259]],
            ["fflig", [64256]],
            ["ffllig", [64260]],
            ["Ffr", [120073]],
            ["ffr", [120099]],
            ["filig", [64257]],
            ["FilledSmallSquare", [9724]],
            ["FilledVerySmallSquare", [9642]],
            ["fjlig", [102, 106]],
            ["flat", [9837]],
            ["fllig", [64258]],
            ["fltns", [9649]],
            ["fnof", [402]],
            ["Fopf", [120125]],
            ["fopf", [120151]],
            ["forall", [8704]],
            ["ForAll", [8704]],
            ["fork", [8916]],
            ["forkv", [10969]],
            ["Fouriertrf", [8497]],
            ["fpartint", [10765]],
            ["frac12", [189]],
            ["frac13", [8531]],
            ["frac14", [188]],
            ["frac15", [8533]],
            ["frac16", [8537]],
            ["frac18", [8539]],
            ["frac23", [8532]],
            ["frac25", [8534]],
            ["frac34", [190]],
            ["frac35", [8535]],
            ["frac38", [8540]],
            ["frac45", [8536]],
            ["frac56", [8538]],
            ["frac58", [8541]],
            ["frac78", [8542]],
            ["frasl", [8260]],
            ["frown", [8994]],
            ["fscr", [119995]],
            ["Fscr", [8497]],
            ["gacute", [501]],
            ["Gamma", [915]],
            ["gamma", [947]],
            ["Gammad", [988]],
            ["gammad", [989]],
            ["gap", [10886]],
            ["Gbreve", [286]],
            ["gbreve", [287]],
            ["Gcedil", [290]],
            ["Gcirc", [284]],
            ["gcirc", [285]],
            ["Gcy", [1043]],
            ["gcy", [1075]],
            ["Gdot", [288]],
            ["gdot", [289]],
            ["ge", [8805]],
            ["gE", [8807]],
            ["gEl", [10892]],
            ["gel", [8923]],
            ["geq", [8805]],
            ["geqq", [8807]],
            ["geqslant", [10878]],
            ["gescc", [10921]],
            ["ges", [10878]],
            ["gesdot", [10880]],
            ["gesdoto", [10882]],
            ["gesdotol", [10884]],
            ["gesl", [8923, 65024]],
            ["gesles", [10900]],
            ["Gfr", [120074]],
            ["gfr", [120100]],
            ["gg", [8811]],
            ["Gg", [8921]],
            ["ggg", [8921]],
            ["gimel", [8503]],
            ["GJcy", [1027]],
            ["gjcy", [1107]],
            ["gla", [10917]],
            ["gl", [8823]],
            ["glE", [10898]],
            ["glj", [10916]],
            ["gnap", [10890]],
            ["gnapprox", [10890]],
            ["gne", [10888]],
            ["gnE", [8809]],
            ["gneq", [10888]],
            ["gneqq", [8809]],
            ["gnsim", [8935]],
            ["Gopf", [120126]],
            ["gopf", [120152]],
            ["grave", [96]],
            ["GreaterEqual", [8805]],
            ["GreaterEqualLess", [8923]],
            ["GreaterFullEqual", [8807]],
            ["GreaterGreater", [10914]],
            ["GreaterLess", [8823]],
            ["GreaterSlantEqual", [10878]],
            ["GreaterTilde", [8819]],
            ["Gscr", [119970]],
            ["gscr", [8458]],
            ["gsim", [8819]],
            ["gsime", [10894]],
            ["gsiml", [10896]],
            ["gtcc", [10919]],
            ["gtcir", [10874]],
            ["gt", [62]],
            ["GT", [62]],
            ["Gt", [8811]],
            ["gtdot", [8919]],
            ["gtlPar", [10645]],
            ["gtquest", [10876]],
            ["gtrapprox", [10886]],
            ["gtrarr", [10616]],
            ["gtrdot", [8919]],
            ["gtreqless", [8923]],
            ["gtreqqless", [10892]],
            ["gtrless", [8823]],
            ["gtrsim", [8819]],
            ["gvertneqq", [8809, 65024]],
            ["gvnE", [8809, 65024]],
            ["Hacek", [711]],
            ["hairsp", [8202]],
            ["half", [189]],
            ["hamilt", [8459]],
            ["HARDcy", [1066]],
            ["hardcy", [1098]],
            ["harrcir", [10568]],
            ["harr", [8596]],
            ["hArr", [8660]],
            ["harrw", [8621]],
            ["Hat", [94]],
            ["hbar", [8463]],
            ["Hcirc", [292]],
            ["hcirc", [293]],
            ["hearts", [9829]],
            ["heartsuit", [9829]],
            ["hellip", [8230]],
            ["hercon", [8889]],
            ["hfr", [120101]],
            ["Hfr", [8460]],
            ["HilbertSpace", [8459]],
            ["hksearow", [10533]],
            ["hkswarow", [10534]],
            ["hoarr", [8703]],
            ["homtht", [8763]],
            ["hookleftarrow", [8617]],
            ["hookrightarrow", [8618]],
            ["hopf", [120153]],
            ["Hopf", [8461]],
            ["horbar", [8213]],
            ["HorizontalLine", [9472]],
            ["hscr", [119997]],
            ["Hscr", [8459]],
            ["hslash", [8463]],
            ["Hstrok", [294]],
            ["hstrok", [295]],
            ["HumpDownHump", [8782]],
            ["HumpEqual", [8783]],
            ["hybull", [8259]],
            ["hyphen", [8208]],
            ["Iacute", [205]],
            ["iacute", [237]],
            ["ic", [8291]],
            ["Icirc", [206]],
            ["icirc", [238]],
            ["Icy", [1048]],
            ["icy", [1080]],
            ["Idot", [304]],
            ["IEcy", [1045]],
            ["iecy", [1077]],
            ["iexcl", [161]],
            ["iff", [8660]],
            ["ifr", [120102]],
            ["Ifr", [8465]],
            ["Igrave", [204]],
            ["igrave", [236]],
            ["ii", [8520]],
            ["iiiint", [10764]],
            ["iiint", [8749]],
            ["iinfin", [10716]],
            ["iiota", [8489]],
            ["IJlig", [306]],
            ["ijlig", [307]],
            ["Imacr", [298]],
            ["imacr", [299]],
            ["image", [8465]],
            ["ImaginaryI", [8520]],
            ["imagline", [8464]],
            ["imagpart", [8465]],
            ["imath", [305]],
            ["Im", [8465]],
            ["imof", [8887]],
            ["imped", [437]],
            ["Implies", [8658]],
            ["incare", [8453]],
            ["in", [8712]],
            ["infin", [8734]],
            ["infintie", [10717]],
            ["inodot", [305]],
            ["intcal", [8890]],
            ["int", [8747]],
            ["Int", [8748]],
            ["integers", [8484]],
            ["Integral", [8747]],
            ["intercal", [8890]],
            ["Intersection", [8898]],
            ["intlarhk", [10775]],
            ["intprod", [10812]],
            ["InvisibleComma", [8291]],
            ["InvisibleTimes", [8290]],
            ["IOcy", [1025]],
            ["iocy", [1105]],
            ["Iogon", [302]],
            ["iogon", [303]],
            ["Iopf", [120128]],
            ["iopf", [120154]],
            ["Iota", [921]],
            ["iota", [953]],
            ["iprod", [10812]],
            ["iquest", [191]],
            ["iscr", [119998]],
            ["Iscr", [8464]],
            ["isin", [8712]],
            ["isindot", [8949]],
            ["isinE", [8953]],
            ["isins", [8948]],
            ["isinsv", [8947]],
            ["isinv", [8712]],
            ["it", [8290]],
            ["Itilde", [296]],
            ["itilde", [297]],
            ["Iukcy", [1030]],
            ["iukcy", [1110]],
            ["Iuml", [207]],
            ["iuml", [239]],
            ["Jcirc", [308]],
            ["jcirc", [309]],
            ["Jcy", [1049]],
            ["jcy", [1081]],
            ["Jfr", [120077]],
            ["jfr", [120103]],
            ["jmath", [567]],
            ["Jopf", [120129]],
            ["jopf", [120155]],
            ["Jscr", [119973]],
            ["jscr", [119999]],
            ["Jsercy", [1032]],
            ["jsercy", [1112]],
            ["Jukcy", [1028]],
            ["jukcy", [1108]],
            ["Kappa", [922]],
            ["kappa", [954]],
            ["kappav", [1008]],
            ["Kcedil", [310]],
            ["kcedil", [311]],
            ["Kcy", [1050]],
            ["kcy", [1082]],
            ["Kfr", [120078]],
            ["kfr", [120104]],
            ["kgreen", [312]],
            ["KHcy", [1061]],
            ["khcy", [1093]],
            ["KJcy", [1036]],
            ["kjcy", [1116]],
            ["Kopf", [120130]],
            ["kopf", [120156]],
            ["Kscr", [119974]],
            ["kscr", [12e4]],
            ["lAarr", [8666]],
            ["Lacute", [313]],
            ["lacute", [314]],
            ["laemptyv", [10676]],
            ["lagran", [8466]],
            ["Lambda", [923]],
            ["lambda", [955]],
            ["lang", [10216]],
            ["Lang", [10218]],
            ["langd", [10641]],
            ["langle", [10216]],
            ["lap", [10885]],
            ["Laplacetrf", [8466]],
            ["laquo", [171]],
            ["larrb", [8676]],
            ["larrbfs", [10527]],
            ["larr", [8592]],
            ["Larr", [8606]],
            ["lArr", [8656]],
            ["larrfs", [10525]],
            ["larrhk", [8617]],
            ["larrlp", [8619]],
            ["larrpl", [10553]],
            ["larrsim", [10611]],
            ["larrtl", [8610]],
            ["latail", [10521]],
            ["lAtail", [10523]],
            ["lat", [10923]],
            ["late", [10925]],
            ["lates", [10925, 65024]],
            ["lbarr", [10508]],
            ["lBarr", [10510]],
            ["lbbrk", [10098]],
            ["lbrace", [123]],
            ["lbrack", [91]],
            ["lbrke", [10635]],
            ["lbrksld", [10639]],
            ["lbrkslu", [10637]],
            ["Lcaron", [317]],
            ["lcaron", [318]],
            ["Lcedil", [315]],
            ["lcedil", [316]],
            ["lceil", [8968]],
            ["lcub", [123]],
            ["Lcy", [1051]],
            ["lcy", [1083]],
            ["ldca", [10550]],
            ["ldquo", [8220]],
            ["ldquor", [8222]],
            ["ldrdhar", [10599]],
            ["ldrushar", [10571]],
            ["ldsh", [8626]],
            ["le", [8804]],
            ["lE", [8806]],
            ["LeftAngleBracket", [10216]],
            ["LeftArrowBar", [8676]],
            ["leftarrow", [8592]],
            ["LeftArrow", [8592]],
            ["Leftarrow", [8656]],
            ["LeftArrowRightArrow", [8646]],
            ["leftarrowtail", [8610]],
            ["LeftCeiling", [8968]],
            ["LeftDoubleBracket", [10214]],
            ["LeftDownTeeVector", [10593]],
            ["LeftDownVectorBar", [10585]],
            ["LeftDownVector", [8643]],
            ["LeftFloor", [8970]],
            ["leftharpoondown", [8637]],
            ["leftharpoonup", [8636]],
            ["leftleftarrows", [8647]],
            ["leftrightarrow", [8596]],
            ["LeftRightArrow", [8596]],
            ["Leftrightarrow", [8660]],
            ["leftrightarrows", [8646]],
            ["leftrightharpoons", [8651]],
            ["leftrightsquigarrow", [8621]],
            ["LeftRightVector", [10574]],
            ["LeftTeeArrow", [8612]],
            ["LeftTee", [8867]],
            ["LeftTeeVector", [10586]],
            ["leftthreetimes", [8907]],
            ["LeftTriangleBar", [10703]],
            ["LeftTriangle", [8882]],
            ["LeftTriangleEqual", [8884]],
            ["LeftUpDownVector", [10577]],
            ["LeftUpTeeVector", [10592]],
            ["LeftUpVectorBar", [10584]],
            ["LeftUpVector", [8639]],
            ["LeftVectorBar", [10578]],
            ["LeftVector", [8636]],
            ["lEg", [10891]],
            ["leg", [8922]],
            ["leq", [8804]],
            ["leqq", [8806]],
            ["leqslant", [10877]],
            ["lescc", [10920]],
            ["les", [10877]],
            ["lesdot", [10879]],
            ["lesdoto", [10881]],
            ["lesdotor", [10883]],
            ["lesg", [8922, 65024]],
            ["lesges", [10899]],
            ["lessapprox", [10885]],
            ["lessdot", [8918]],
            ["lesseqgtr", [8922]],
            ["lesseqqgtr", [10891]],
            ["LessEqualGreater", [8922]],
            ["LessFullEqual", [8806]],
            ["LessGreater", [8822]],
            ["lessgtr", [8822]],
            ["LessLess", [10913]],
            ["lesssim", [8818]],
            ["LessSlantEqual", [10877]],
            ["LessTilde", [8818]],
            ["lfisht", [10620]],
            ["lfloor", [8970]],
            ["Lfr", [120079]],
            ["lfr", [120105]],
            ["lg", [8822]],
            ["lgE", [10897]],
            ["lHar", [10594]],
            ["lhard", [8637]],
            ["lharu", [8636]],
            ["lharul", [10602]],
            ["lhblk", [9604]],
            ["LJcy", [1033]],
            ["ljcy", [1113]],
            ["llarr", [8647]],
            ["ll", [8810]],
            ["Ll", [8920]],
            ["llcorner", [8990]],
            ["Lleftarrow", [8666]],
            ["llhard", [10603]],
            ["lltri", [9722]],
            ["Lmidot", [319]],
            ["lmidot", [320]],
            ["lmoustache", [9136]],
            ["lmoust", [9136]],
            ["lnap", [10889]],
            ["lnapprox", [10889]],
            ["lne", [10887]],
            ["lnE", [8808]],
            ["lneq", [10887]],
            ["lneqq", [8808]],
            ["lnsim", [8934]],
            ["loang", [10220]],
            ["loarr", [8701]],
            ["lobrk", [10214]],
            ["longleftarrow", [10229]],
            ["LongLeftArrow", [10229]],
            ["Longleftarrow", [10232]],
            ["longleftrightarrow", [10231]],
            ["LongLeftRightArrow", [10231]],
            ["Longleftrightarrow", [10234]],
            ["longmapsto", [10236]],
            ["longrightarrow", [10230]],
            ["LongRightArrow", [10230]],
            ["Longrightarrow", [10233]],
            ["looparrowleft", [8619]],
            ["looparrowright", [8620]],
            ["lopar", [10629]],
            ["Lopf", [120131]],
            ["lopf", [120157]],
            ["loplus", [10797]],
            ["lotimes", [10804]],
            ["lowast", [8727]],
            ["lowbar", [95]],
            ["LowerLeftArrow", [8601]],
            ["LowerRightArrow", [8600]],
            ["loz", [9674]],
            ["lozenge", [9674]],
            ["lozf", [10731]],
            ["lpar", [40]],
            ["lparlt", [10643]],
            ["lrarr", [8646]],
            ["lrcorner", [8991]],
            ["lrhar", [8651]],
            ["lrhard", [10605]],
            ["lrm", [8206]],
            ["lrtri", [8895]],
            ["lsaquo", [8249]],
            ["lscr", [120001]],
            ["Lscr", [8466]],
            ["lsh", [8624]],
            ["Lsh", [8624]],
            ["lsim", [8818]],
            ["lsime", [10893]],
            ["lsimg", [10895]],
            ["lsqb", [91]],
            ["lsquo", [8216]],
            ["lsquor", [8218]],
            ["Lstrok", [321]],
            ["lstrok", [322]],
            ["ltcc", [10918]],
            ["ltcir", [10873]],
            ["lt", [60]],
            ["LT", [60]],
            ["Lt", [8810]],
            ["ltdot", [8918]],
            ["lthree", [8907]],
            ["ltimes", [8905]],
            ["ltlarr", [10614]],
            ["ltquest", [10875]],
            ["ltri", [9667]],
            ["ltrie", [8884]],
            ["ltrif", [9666]],
            ["ltrPar", [10646]],
            ["lurdshar", [10570]],
            ["luruhar", [10598]],
            ["lvertneqq", [8808, 65024]],
            ["lvnE", [8808, 65024]],
            ["macr", [175]],
            ["male", [9794]],
            ["malt", [10016]],
            ["maltese", [10016]],
            ["Map", [10501]],
            ["map", [8614]],
            ["mapsto", [8614]],
            ["mapstodown", [8615]],
            ["mapstoleft", [8612]],
            ["mapstoup", [8613]],
            ["marker", [9646]],
            ["mcomma", [10793]],
            ["Mcy", [1052]],
            ["mcy", [1084]],
            ["mdash", [8212]],
            ["mDDot", [8762]],
            ["measuredangle", [8737]],
            ["MediumSpace", [8287]],
            ["Mellintrf", [8499]],
            ["Mfr", [120080]],
            ["mfr", [120106]],
            ["mho", [8487]],
            ["micro", [181]],
            ["midast", [42]],
            ["midcir", [10992]],
            ["mid", [8739]],
            ["middot", [183]],
            ["minusb", [8863]],
            ["minus", [8722]],
            ["minusd", [8760]],
            ["minusdu", [10794]],
            ["MinusPlus", [8723]],
            ["mlcp", [10971]],
            ["mldr", [8230]],
            ["mnplus", [8723]],
            ["models", [8871]],
            ["Mopf", [120132]],
            ["mopf", [120158]],
            ["mp", [8723]],
            ["mscr", [120002]],
            ["Mscr", [8499]],
            ["mstpos", [8766]],
            ["Mu", [924]],
            ["mu", [956]],
            ["multimap", [8888]],
            ["mumap", [8888]],
            ["nabla", [8711]],
            ["Nacute", [323]],
            ["nacute", [324]],
            ["nang", [8736, 8402]],
            ["nap", [8777]],
            ["napE", [10864, 824]],
            ["napid", [8779, 824]],
            ["napos", [329]],
            ["napprox", [8777]],
            ["natural", [9838]],
            ["naturals", [8469]],
            ["natur", [9838]],
            ["nbsp", [160]],
            ["nbump", [8782, 824]],
            ["nbumpe", [8783, 824]],
            ["ncap", [10819]],
            ["Ncaron", [327]],
            ["ncaron", [328]],
            ["Ncedil", [325]],
            ["ncedil", [326]],
            ["ncong", [8775]],
            ["ncongdot", [10861, 824]],
            ["ncup", [10818]],
            ["Ncy", [1053]],
            ["ncy", [1085]],
            ["ndash", [8211]],
            ["nearhk", [10532]],
            ["nearr", [8599]],
            ["neArr", [8663]],
            ["nearrow", [8599]],
            ["ne", [8800]],
            ["nedot", [8784, 824]],
            ["NegativeMediumSpace", [8203]],
            ["NegativeThickSpace", [8203]],
            ["NegativeThinSpace", [8203]],
            ["NegativeVeryThinSpace", [8203]],
            ["nequiv", [8802]],
            ["nesear", [10536]],
            ["nesim", [8770, 824]],
            ["NestedGreaterGreater", [8811]],
            ["NestedLessLess", [8810]],
            ["nexist", [8708]],
            ["nexists", [8708]],
            ["Nfr", [120081]],
            ["nfr", [120107]],
            ["ngE", [8807, 824]],
            ["nge", [8817]],
            ["ngeq", [8817]],
            ["ngeqq", [8807, 824]],
            ["ngeqslant", [10878, 824]],
            ["nges", [10878, 824]],
            ["nGg", [8921, 824]],
            ["ngsim", [8821]],
            ["nGt", [8811, 8402]],
            ["ngt", [8815]],
            ["ngtr", [8815]],
            ["nGtv", [8811, 824]],
            ["nharr", [8622]],
            ["nhArr", [8654]],
            ["nhpar", [10994]],
            ["ni", [8715]],
            ["nis", [8956]],
            ["nisd", [8954]],
            ["niv", [8715]],
            ["NJcy", [1034]],
            ["njcy", [1114]],
            ["nlarr", [8602]],
            ["nlArr", [8653]],
            ["nldr", [8229]],
            ["nlE", [8806, 824]],
            ["nle", [8816]],
            ["nleftarrow", [8602]],
            ["nLeftarrow", [8653]],
            ["nleftrightarrow", [8622]],
            ["nLeftrightarrow", [8654]],
            ["nleq", [8816]],
            ["nleqq", [8806, 824]],
            ["nleqslant", [10877, 824]],
            ["nles", [10877, 824]],
            ["nless", [8814]],
            ["nLl", [8920, 824]],
            ["nlsim", [8820]],
            ["nLt", [8810, 8402]],
            ["nlt", [8814]],
            ["nltri", [8938]],
            ["nltrie", [8940]],
            ["nLtv", [8810, 824]],
            ["nmid", [8740]],
            ["NoBreak", [8288]],
            ["NonBreakingSpace", [160]],
            ["nopf", [120159]],
            ["Nopf", [8469]],
            ["Not", [10988]],
            ["not", [172]],
            ["NotCongruent", [8802]],
            ["NotCupCap", [8813]],
            ["NotDoubleVerticalBar", [8742]],
            ["NotElement", [8713]],
            ["NotEqual", [8800]],
            ["NotEqualTilde", [8770, 824]],
            ["NotExists", [8708]],
            ["NotGreater", [8815]],
            ["NotGreaterEqual", [8817]],
            ["NotGreaterFullEqual", [8807, 824]],
            ["NotGreaterGreater", [8811, 824]],
            ["NotGreaterLess", [8825]],
            ["NotGreaterSlantEqual", [10878, 824]],
            ["NotGreaterTilde", [8821]],
            ["NotHumpDownHump", [8782, 824]],
            ["NotHumpEqual", [8783, 824]],
            ["notin", [8713]],
            ["notindot", [8949, 824]],
            ["notinE", [8953, 824]],
            ["notinva", [8713]],
            ["notinvb", [8951]],
            ["notinvc", [8950]],
            ["NotLeftTriangleBar", [10703, 824]],
            ["NotLeftTriangle", [8938]],
            ["NotLeftTriangleEqual", [8940]],
            ["NotLess", [8814]],
            ["NotLessEqual", [8816]],
            ["NotLessGreater", [8824]],
            ["NotLessLess", [8810, 824]],
            ["NotLessSlantEqual", [10877, 824]],
            ["NotLessTilde", [8820]],
            ["NotNestedGreaterGreater", [10914, 824]],
            ["NotNestedLessLess", [10913, 824]],
            ["notni", [8716]],
            ["notniva", [8716]],
            ["notnivb", [8958]],
            ["notnivc", [8957]],
            ["NotPrecedes", [8832]],
            ["NotPrecedesEqual", [10927, 824]],
            ["NotPrecedesSlantEqual", [8928]],
            ["NotReverseElement", [8716]],
            ["NotRightTriangleBar", [10704, 824]],
            ["NotRightTriangle", [8939]],
            ["NotRightTriangleEqual", [8941]],
            ["NotSquareSubset", [8847, 824]],
            ["NotSquareSubsetEqual", [8930]],
            ["NotSquareSuperset", [8848, 824]],
            ["NotSquareSupersetEqual", [8931]],
            ["NotSubset", [8834, 8402]],
            ["NotSubsetEqual", [8840]],
            ["NotSucceeds", [8833]],
            ["NotSucceedsEqual", [10928, 824]],
            ["NotSucceedsSlantEqual", [8929]],
            ["NotSucceedsTilde", [8831, 824]],
            ["NotSuperset", [8835, 8402]],
            ["NotSupersetEqual", [8841]],
            ["NotTilde", [8769]],
            ["NotTildeEqual", [8772]],
            ["NotTildeFullEqual", [8775]],
            ["NotTildeTilde", [8777]],
            ["NotVerticalBar", [8740]],
            ["nparallel", [8742]],
            ["npar", [8742]],
            ["nparsl", [11005, 8421]],
            ["npart", [8706, 824]],
            ["npolint", [10772]],
            ["npr", [8832]],
            ["nprcue", [8928]],
            ["nprec", [8832]],
            ["npreceq", [10927, 824]],
            ["npre", [10927, 824]],
            ["nrarrc", [10547, 824]],
            ["nrarr", [8603]],
            ["nrArr", [8655]],
            ["nrarrw", [8605, 824]],
            ["nrightarrow", [8603]],
            ["nRightarrow", [8655]],
            ["nrtri", [8939]],
            ["nrtrie", [8941]],
            ["nsc", [8833]],
            ["nsccue", [8929]],
            ["nsce", [10928, 824]],
            ["Nscr", [119977]],
            ["nscr", [120003]],
            ["nshortmid", [8740]],
            ["nshortparallel", [8742]],
            ["nsim", [8769]],
            ["nsime", [8772]],
            ["nsimeq", [8772]],
            ["nsmid", [8740]],
            ["nspar", [8742]],
            ["nsqsube", [8930]],
            ["nsqsupe", [8931]],
            ["nsub", [8836]],
            ["nsubE", [10949, 824]],
            ["nsube", [8840]],
            ["nsubset", [8834, 8402]],
            ["nsubseteq", [8840]],
            ["nsubseteqq", [10949, 824]],
            ["nsucc", [8833]],
            ["nsucceq", [10928, 824]],
            ["nsup", [8837]],
            ["nsupE", [10950, 824]],
            ["nsupe", [8841]],
            ["nsupset", [8835, 8402]],
            ["nsupseteq", [8841]],
            ["nsupseteqq", [10950, 824]],
            ["ntgl", [8825]],
            ["Ntilde", [209]],
            ["ntilde", [241]],
            ["ntlg", [8824]],
            ["ntriangleleft", [8938]],
            ["ntrianglelefteq", [8940]],
            ["ntriangleright", [8939]],
            ["ntrianglerighteq", [8941]],
            ["Nu", [925]],
            ["nu", [957]],
            ["num", [35]],
            ["numero", [8470]],
            ["numsp", [8199]],
            ["nvap", [8781, 8402]],
            ["nvdash", [8876]],
            ["nvDash", [8877]],
            ["nVdash", [8878]],
            ["nVDash", [8879]],
            ["nvge", [8805, 8402]],
            ["nvgt", [62, 8402]],
            ["nvHarr", [10500]],
            ["nvinfin", [10718]],
            ["nvlArr", [10498]],
            ["nvle", [8804, 8402]],
            ["nvlt", [60, 8402]],
            ["nvltrie", [8884, 8402]],
            ["nvrArr", [10499]],
            ["nvrtrie", [8885, 8402]],
            ["nvsim", [8764, 8402]],
            ["nwarhk", [10531]],
            ["nwarr", [8598]],
            ["nwArr", [8662]],
            ["nwarrow", [8598]],
            ["nwnear", [10535]],
            ["Oacute", [211]],
            ["oacute", [243]],
            ["oast", [8859]],
            ["Ocirc", [212]],
            ["ocirc", [244]],
            ["ocir", [8858]],
            ["Ocy", [1054]],
            ["ocy", [1086]],
            ["odash", [8861]],
            ["Odblac", [336]],
            ["odblac", [337]],
            ["odiv", [10808]],
            ["odot", [8857]],
            ["odsold", [10684]],
            ["OElig", [338]],
            ["oelig", [339]],
            ["ofcir", [10687]],
            ["Ofr", [120082]],
            ["ofr", [120108]],
            ["ogon", [731]],
            ["Ograve", [210]],
            ["ograve", [242]],
            ["ogt", [10689]],
            ["ohbar", [10677]],
            ["ohm", [937]],
            ["oint", [8750]],
            ["olarr", [8634]],
            ["olcir", [10686]],
            ["olcross", [10683]],
            ["oline", [8254]],
            ["olt", [10688]],
            ["Omacr", [332]],
            ["omacr", [333]],
            ["Omega", [937]],
            ["omega", [969]],
            ["Omicron", [927]],
            ["omicron", [959]],
            ["omid", [10678]],
            ["ominus", [8854]],
            ["Oopf", [120134]],
            ["oopf", [120160]],
            ["opar", [10679]],
            ["OpenCurlyDoubleQuote", [8220]],
            ["OpenCurlyQuote", [8216]],
            ["operp", [10681]],
            ["oplus", [8853]],
            ["orarr", [8635]],
            ["Or", [10836]],
            ["or", [8744]],
            ["ord", [10845]],
            ["order", [8500]],
            ["orderof", [8500]],
            ["ordf", [170]],
            ["ordm", [186]],
            ["origof", [8886]],
            ["oror", [10838]],
            ["orslope", [10839]],
            ["orv", [10843]],
            ["oS", [9416]],
            ["Oscr", [119978]],
            ["oscr", [8500]],
            ["Oslash", [216]],
            ["oslash", [248]],
            ["osol", [8856]],
            ["Otilde", [213]],
            ["otilde", [245]],
            ["otimesas", [10806]],
            ["Otimes", [10807]],
            ["otimes", [8855]],
            ["Ouml", [214]],
            ["ouml", [246]],
            ["ovbar", [9021]],
            ["OverBar", [8254]],
            ["OverBrace", [9182]],
            ["OverBracket", [9140]],
            ["OverParenthesis", [9180]],
            ["para", [182]],
            ["parallel", [8741]],
            ["par", [8741]],
            ["parsim", [10995]],
            ["parsl", [11005]],
            ["part", [8706]],
            ["PartialD", [8706]],
            ["Pcy", [1055]],
            ["pcy", [1087]],
            ["percnt", [37]],
            ["period", [46]],
            ["permil", [8240]],
            ["perp", [8869]],
            ["pertenk", [8241]],
            ["Pfr", [120083]],
            ["pfr", [120109]],
            ["Phi", [934]],
            ["phi", [966]],
            ["phiv", [981]],
            ["phmmat", [8499]],
            ["phone", [9742]],
            ["Pi", [928]],
            ["pi", [960]],
            ["pitchfork", [8916]],
            ["piv", [982]],
            ["planck", [8463]],
            ["planckh", [8462]],
            ["plankv", [8463]],
            ["plusacir", [10787]],
            ["plusb", [8862]],
            ["pluscir", [10786]],
            ["plus", [43]],
            ["plusdo", [8724]],
            ["plusdu", [10789]],
            ["pluse", [10866]],
            ["PlusMinus", [177]],
            ["plusmn", [177]],
            ["plussim", [10790]],
            ["plustwo", [10791]],
            ["pm", [177]],
            ["Poincareplane", [8460]],
            ["pointint", [10773]],
            ["popf", [120161]],
            ["Popf", [8473]],
            ["pound", [163]],
            ["prap", [10935]],
            ["Pr", [10939]],
            ["pr", [8826]],
            ["prcue", [8828]],
            ["precapprox", [10935]],
            ["prec", [8826]],
            ["preccurlyeq", [8828]],
            ["Precedes", [8826]],
            ["PrecedesEqual", [10927]],
            ["PrecedesSlantEqual", [8828]],
            ["PrecedesTilde", [8830]],
            ["preceq", [10927]],
            ["precnapprox", [10937]],
            ["precneqq", [10933]],
            ["precnsim", [8936]],
            ["pre", [10927]],
            ["prE", [10931]],
            ["precsim", [8830]],
            ["prime", [8242]],
            ["Prime", [8243]],
            ["primes", [8473]],
            ["prnap", [10937]],
            ["prnE", [10933]],
            ["prnsim", [8936]],
            ["prod", [8719]],
            ["Product", [8719]],
            ["profalar", [9006]],
            ["profline", [8978]],
            ["profsurf", [8979]],
            ["prop", [8733]],
            ["Proportional", [8733]],
            ["Proportion", [8759]],
            ["propto", [8733]],
            ["prsim", [8830]],
            ["prurel", [8880]],
            ["Pscr", [119979]],
            ["pscr", [120005]],
            ["Psi", [936]],
            ["psi", [968]],
            ["puncsp", [8200]],
            ["Qfr", [120084]],
            ["qfr", [120110]],
            ["qint", [10764]],
            ["qopf", [120162]],
            ["Qopf", [8474]],
            ["qprime", [8279]],
            ["Qscr", [119980]],
            ["qscr", [120006]],
            ["quaternions", [8461]],
            ["quatint", [10774]],
            ["quest", [63]],
            ["questeq", [8799]],
            ["quot", [34]],
            ["QUOT", [34]],
            ["rAarr", [8667]],
            ["race", [8765, 817]],
            ["Racute", [340]],
            ["racute", [341]],
            ["radic", [8730]],
            ["raemptyv", [10675]],
            ["rang", [10217]],
            ["Rang", [10219]],
            ["rangd", [10642]],
            ["range", [10661]],
            ["rangle", [10217]],
            ["raquo", [187]],
            ["rarrap", [10613]],
            ["rarrb", [8677]],
            ["rarrbfs", [10528]],
            ["rarrc", [10547]],
            ["rarr", [8594]],
            ["Rarr", [8608]],
            ["rArr", [8658]],
            ["rarrfs", [10526]],
            ["rarrhk", [8618]],
            ["rarrlp", [8620]],
            ["rarrpl", [10565]],
            ["rarrsim", [10612]],
            ["Rarrtl", [10518]],
            ["rarrtl", [8611]],
            ["rarrw", [8605]],
            ["ratail", [10522]],
            ["rAtail", [10524]],
            ["ratio", [8758]],
            ["rationals", [8474]],
            ["rbarr", [10509]],
            ["rBarr", [10511]],
            ["RBarr", [10512]],
            ["rbbrk", [10099]],
            ["rbrace", [125]],
            ["rbrack", [93]],
            ["rbrke", [10636]],
            ["rbrksld", [10638]],
            ["rbrkslu", [10640]],
            ["Rcaron", [344]],
            ["rcaron", [345]],
            ["Rcedil", [342]],
            ["rcedil", [343]],
            ["rceil", [8969]],
            ["rcub", [125]],
            ["Rcy", [1056]],
            ["rcy", [1088]],
            ["rdca", [10551]],
            ["rdldhar", [10601]],
            ["rdquo", [8221]],
            ["rdquor", [8221]],
            ["CloseCurlyDoubleQuote", [8221]],
            ["rdsh", [8627]],
            ["real", [8476]],
            ["realine", [8475]],
            ["realpart", [8476]],
            ["reals", [8477]],
            ["Re", [8476]],
            ["rect", [9645]],
            ["reg", [174]],
            ["REG", [174]],
            ["ReverseElement", [8715]],
            ["ReverseEquilibrium", [8651]],
            ["ReverseUpEquilibrium", [10607]],
            ["rfisht", [10621]],
            ["rfloor", [8971]],
            ["rfr", [120111]],
            ["Rfr", [8476]],
            ["rHar", [10596]],
            ["rhard", [8641]],
            ["rharu", [8640]],
            ["rharul", [10604]],
            ["Rho", [929]],
            ["rho", [961]],
            ["rhov", [1009]],
            ["RightAngleBracket", [10217]],
            ["RightArrowBar", [8677]],
            ["rightarrow", [8594]],
            ["RightArrow", [8594]],
            ["Rightarrow", [8658]],
            ["RightArrowLeftArrow", [8644]],
            ["rightarrowtail", [8611]],
            ["RightCeiling", [8969]],
            ["RightDoubleBracket", [10215]],
            ["RightDownTeeVector", [10589]],
            ["RightDownVectorBar", [10581]],
            ["RightDownVector", [8642]],
            ["RightFloor", [8971]],
            ["rightharpoondown", [8641]],
            ["rightharpoonup", [8640]],
            ["rightleftarrows", [8644]],
            ["rightleftharpoons", [8652]],
            ["rightrightarrows", [8649]],
            ["rightsquigarrow", [8605]],
            ["RightTeeArrow", [8614]],
            ["RightTee", [8866]],
            ["RightTeeVector", [10587]],
            ["rightthreetimes", [8908]],
            ["RightTriangleBar", [10704]],
            ["RightTriangle", [8883]],
            ["RightTriangleEqual", [8885]],
            ["RightUpDownVector", [10575]],
            ["RightUpTeeVector", [10588]],
            ["RightUpVectorBar", [10580]],
            ["RightUpVector", [8638]],
            ["RightVectorBar", [10579]],
            ["RightVector", [8640]],
            ["ring", [730]],
            ["risingdotseq", [8787]],
            ["rlarr", [8644]],
            ["rlhar", [8652]],
            ["rlm", [8207]],
            ["rmoustache", [9137]],
            ["rmoust", [9137]],
            ["rnmid", [10990]],
            ["roang", [10221]],
            ["roarr", [8702]],
            ["robrk", [10215]],
            ["ropar", [10630]],
            ["ropf", [120163]],
            ["Ropf", [8477]],
            ["roplus", [10798]],
            ["rotimes", [10805]],
            ["RoundImplies", [10608]],
            ["rpar", [41]],
            ["rpargt", [10644]],
            ["rppolint", [10770]],
            ["rrarr", [8649]],
            ["Rrightarrow", [8667]],
            ["rsaquo", [8250]],
            ["rscr", [120007]],
            ["Rscr", [8475]],
            ["rsh", [8625]],
            ["Rsh", [8625]],
            ["rsqb", [93]],
            ["rsquo", [8217]],
            ["rsquor", [8217]],
            ["CloseCurlyQuote", [8217]],
            ["rthree", [8908]],
            ["rtimes", [8906]],
            ["rtri", [9657]],
            ["rtrie", [8885]],
            ["rtrif", [9656]],
            ["rtriltri", [10702]],
            ["RuleDelayed", [10740]],
            ["ruluhar", [10600]],
            ["rx", [8478]],
            ["Sacute", [346]],
            ["sacute", [347]],
            ["sbquo", [8218]],
            ["scap", [10936]],
            ["Scaron", [352]],
            ["scaron", [353]],
            ["Sc", [10940]],
            ["sc", [8827]],
            ["sccue", [8829]],
            ["sce", [10928]],
            ["scE", [10932]],
            ["Scedil", [350]],
            ["scedil", [351]],
            ["Scirc", [348]],
            ["scirc", [349]],
            ["scnap", [10938]],
            ["scnE", [10934]],
            ["scnsim", [8937]],
            ["scpolint", [10771]],
            ["scsim", [8831]],
            ["Scy", [1057]],
            ["scy", [1089]],
            ["sdotb", [8865]],
            ["sdot", [8901]],
            ["sdote", [10854]],
            ["searhk", [10533]],
            ["searr", [8600]],
            ["seArr", [8664]],
            ["searrow", [8600]],
            ["sect", [167]],
            ["semi", [59]],
            ["seswar", [10537]],
            ["setminus", [8726]],
            ["setmn", [8726]],
            ["sext", [10038]],
            ["Sfr", [120086]],
            ["sfr", [120112]],
            ["sfrown", [8994]],
            ["sharp", [9839]],
            ["SHCHcy", [1065]],
            ["shchcy", [1097]],
            ["SHcy", [1064]],
            ["shcy", [1096]],
            ["ShortDownArrow", [8595]],
            ["ShortLeftArrow", [8592]],
            ["shortmid", [8739]],
            ["shortparallel", [8741]],
            ["ShortRightArrow", [8594]],
            ["ShortUpArrow", [8593]],
            ["shy", [173]],
            ["Sigma", [931]],
            ["sigma", [963]],
            ["sigmaf", [962]],
            ["sigmav", [962]],
            ["sim", [8764]],
            ["simdot", [10858]],
            ["sime", [8771]],
            ["simeq", [8771]],
            ["simg", [10910]],
            ["simgE", [10912]],
            ["siml", [10909]],
            ["simlE", [10911]],
            ["simne", [8774]],
            ["simplus", [10788]],
            ["simrarr", [10610]],
            ["slarr", [8592]],
            ["SmallCircle", [8728]],
            ["smallsetminus", [8726]],
            ["smashp", [10803]],
            ["smeparsl", [10724]],
            ["smid", [8739]],
            ["smile", [8995]],
            ["smt", [10922]],
            ["smte", [10924]],
            ["smtes", [10924, 65024]],
            ["SOFTcy", [1068]],
            ["softcy", [1100]],
            ["solbar", [9023]],
            ["solb", [10692]],
            ["sol", [47]],
            ["Sopf", [120138]],
            ["sopf", [120164]],
            ["spades", [9824]],
            ["spadesuit", [9824]],
            ["spar", [8741]],
            ["sqcap", [8851]],
            ["sqcaps", [8851, 65024]],
            ["sqcup", [8852]],
            ["sqcups", [8852, 65024]],
            ["Sqrt", [8730]],
            ["sqsub", [8847]],
            ["sqsube", [8849]],
            ["sqsubset", [8847]],
            ["sqsubseteq", [8849]],
            ["sqsup", [8848]],
            ["sqsupe", [8850]],
            ["sqsupset", [8848]],
            ["sqsupseteq", [8850]],
            ["square", [9633]],
            ["Square", [9633]],
            ["SquareIntersection", [8851]],
            ["SquareSubset", [8847]],
            ["SquareSubsetEqual", [8849]],
            ["SquareSuperset", [8848]],
            ["SquareSupersetEqual", [8850]],
            ["SquareUnion", [8852]],
            ["squarf", [9642]],
            ["squ", [9633]],
            ["squf", [9642]],
            ["srarr", [8594]],
            ["Sscr", [119982]],
            ["sscr", [120008]],
            ["ssetmn", [8726]],
            ["ssmile", [8995]],
            ["sstarf", [8902]],
            ["Star", [8902]],
            ["star", [9734]],
            ["starf", [9733]],
            ["straightepsilon", [1013]],
            ["straightphi", [981]],
            ["strns", [175]],
            ["sub", [8834]],
            ["Sub", [8912]],
            ["subdot", [10941]],
            ["subE", [10949]],
            ["sube", [8838]],
            ["subedot", [10947]],
            ["submult", [10945]],
            ["subnE", [10955]],
            ["subne", [8842]],
            ["subplus", [10943]],
            ["subrarr", [10617]],
            ["subset", [8834]],
            ["Subset", [8912]],
            ["subseteq", [8838]],
            ["subseteqq", [10949]],
            ["SubsetEqual", [8838]],
            ["subsetneq", [8842]],
            ["subsetneqq", [10955]],
            ["subsim", [10951]],
            ["subsub", [10965]],
            ["subsup", [10963]],
            ["succapprox", [10936]],
            ["succ", [8827]],
            ["succcurlyeq", [8829]],
            ["Succeeds", [8827]],
            ["SucceedsEqual", [10928]],
            ["SucceedsSlantEqual", [8829]],
            ["SucceedsTilde", [8831]],
            ["succeq", [10928]],
            ["succnapprox", [10938]],
            ["succneqq", [10934]],
            ["succnsim", [8937]],
            ["succsim", [8831]],
            ["SuchThat", [8715]],
            ["sum", [8721]],
            ["Sum", [8721]],
            ["sung", [9834]],
            ["sup1", [185]],
            ["sup2", [178]],
            ["sup3", [179]],
            ["sup", [8835]],
            ["Sup", [8913]],
            ["supdot", [10942]],
            ["supdsub", [10968]],
            ["supE", [10950]],
            ["supe", [8839]],
            ["supedot", [10948]],
            ["Superset", [8835]],
            ["SupersetEqual", [8839]],
            ["suphsol", [10185]],
            ["suphsub", [10967]],
            ["suplarr", [10619]],
            ["supmult", [10946]],
            ["supnE", [10956]],
            ["supne", [8843]],
            ["supplus", [10944]],
            ["supset", [8835]],
            ["Supset", [8913]],
            ["supseteq", [8839]],
            ["supseteqq", [10950]],
            ["supsetneq", [8843]],
            ["supsetneqq", [10956]],
            ["supsim", [10952]],
            ["supsub", [10964]],
            ["supsup", [10966]],
            ["swarhk", [10534]],
            ["swarr", [8601]],
            ["swArr", [8665]],
            ["swarrow", [8601]],
            ["swnwar", [10538]],
            ["szlig", [223]],
            ["Tab", [9]],
            ["target", [8982]],
            ["Tau", [932]],
            ["tau", [964]],
            ["tbrk", [9140]],
            ["Tcaron", [356]],
            ["tcaron", [357]],
            ["Tcedil", [354]],
            ["tcedil", [355]],
            ["Tcy", [1058]],
            ["tcy", [1090]],
            ["tdot", [8411]],
            ["telrec", [8981]],
            ["Tfr", [120087]],
            ["tfr", [120113]],
            ["there4", [8756]],
            ["therefore", [8756]],
            ["Therefore", [8756]],
            ["Theta", [920]],
            ["theta", [952]],
            ["thetasym", [977]],
            ["thetav", [977]],
            ["thickapprox", [8776]],
            ["thicksim", [8764]],
            ["ThickSpace", [8287, 8202]],
            ["ThinSpace", [8201]],
            ["thinsp", [8201]],
            ["thkap", [8776]],
            ["thksim", [8764]],
            ["THORN", [222]],
            ["thorn", [254]],
            ["tilde", [732]],
            ["Tilde", [8764]],
            ["TildeEqual", [8771]],
            ["TildeFullEqual", [8773]],
            ["TildeTilde", [8776]],
            ["timesbar", [10801]],
            ["timesb", [8864]],
            ["times", [215]],
            ["timesd", [10800]],
            ["tint", [8749]],
            ["toea", [10536]],
            ["topbot", [9014]],
            ["topcir", [10993]],
            ["top", [8868]],
            ["Topf", [120139]],
            ["topf", [120165]],
            ["topfork", [10970]],
            ["tosa", [10537]],
            ["tprime", [8244]],
            ["trade", [8482]],
            ["TRADE", [8482]],
            ["triangle", [9653]],
            ["triangledown", [9663]],
            ["triangleleft", [9667]],
            ["trianglelefteq", [8884]],
            ["triangleq", [8796]],
            ["triangleright", [9657]],
            ["trianglerighteq", [8885]],
            ["tridot", [9708]],
            ["trie", [8796]],
            ["triminus", [10810]],
            ["TripleDot", [8411]],
            ["triplus", [10809]],
            ["trisb", [10701]],
            ["tritime", [10811]],
            ["trpezium", [9186]],
            ["Tscr", [119983]],
            ["tscr", [120009]],
            ["TScy", [1062]],
            ["tscy", [1094]],
            ["TSHcy", [1035]],
            ["tshcy", [1115]],
            ["Tstrok", [358]],
            ["tstrok", [359]],
            ["twixt", [8812]],
            ["twoheadleftarrow", [8606]],
            ["twoheadrightarrow", [8608]],
            ["Uacute", [218]],
            ["uacute", [250]],
            ["uarr", [8593]],
            ["Uarr", [8607]],
            ["uArr", [8657]],
            ["Uarrocir", [10569]],
            ["Ubrcy", [1038]],
            ["ubrcy", [1118]],
            ["Ubreve", [364]],
            ["ubreve", [365]],
            ["Ucirc", [219]],
            ["ucirc", [251]],
            ["Ucy", [1059]],
            ["ucy", [1091]],
            ["udarr", [8645]],
            ["Udblac", [368]],
            ["udblac", [369]],
            ["udhar", [10606]],
            ["ufisht", [10622]],
            ["Ufr", [120088]],
            ["ufr", [120114]],
            ["Ugrave", [217]],
            ["ugrave", [249]],
            ["uHar", [10595]],
            ["uharl", [8639]],
            ["uharr", [8638]],
            ["uhblk", [9600]],
            ["ulcorn", [8988]],
            ["ulcorner", [8988]],
            ["ulcrop", [8975]],
            ["ultri", [9720]],
            ["Umacr", [362]],
            ["umacr", [363]],
            ["uml", [168]],
            ["UnderBar", [95]],
            ["UnderBrace", [9183]],
            ["UnderBracket", [9141]],
            ["UnderParenthesis", [9181]],
            ["Union", [8899]],
            ["UnionPlus", [8846]],
            ["Uogon", [370]],
            ["uogon", [371]],
            ["Uopf", [120140]],
            ["uopf", [120166]],
            ["UpArrowBar", [10514]],
            ["uparrow", [8593]],
            ["UpArrow", [8593]],
            ["Uparrow", [8657]],
            ["UpArrowDownArrow", [8645]],
            ["updownarrow", [8597]],
            ["UpDownArrow", [8597]],
            ["Updownarrow", [8661]],
            ["UpEquilibrium", [10606]],
            ["upharpoonleft", [8639]],
            ["upharpoonright", [8638]],
            ["uplus", [8846]],
            ["UpperLeftArrow", [8598]],
            ["UpperRightArrow", [8599]],
            ["upsi", [965]],
            ["Upsi", [978]],
            ["upsih", [978]],
            ["Upsilon", [933]],
            ["upsilon", [965]],
            ["UpTeeArrow", [8613]],
            ["UpTee", [8869]],
            ["upuparrows", [8648]],
            ["urcorn", [8989]],
            ["urcorner", [8989]],
            ["urcrop", [8974]],
            ["Uring", [366]],
            ["uring", [367]],
            ["urtri", [9721]],
            ["Uscr", [119984]],
            ["uscr", [120010]],
            ["utdot", [8944]],
            ["Utilde", [360]],
            ["utilde", [361]],
            ["utri", [9653]],
            ["utrif", [9652]],
            ["uuarr", [8648]],
            ["Uuml", [220]],
            ["uuml", [252]],
            ["uwangle", [10663]],
            ["vangrt", [10652]],
            ["varepsilon", [1013]],
            ["varkappa", [1008]],
            ["varnothing", [8709]],
            ["varphi", [981]],
            ["varpi", [982]],
            ["varpropto", [8733]],
            ["varr", [8597]],
            ["vArr", [8661]],
            ["varrho", [1009]],
            ["varsigma", [962]],
            ["varsubsetneq", [8842, 65024]],
            ["varsubsetneqq", [10955, 65024]],
            ["varsupsetneq", [8843, 65024]],
            ["varsupsetneqq", [10956, 65024]],
            ["vartheta", [977]],
            ["vartriangleleft", [8882]],
            ["vartriangleright", [8883]],
            ["vBar", [10984]],
            ["Vbar", [10987]],
            ["vBarv", [10985]],
            ["Vcy", [1042]],
            ["vcy", [1074]],
            ["vdash", [8866]],
            ["vDash", [8872]],
            ["Vdash", [8873]],
            ["VDash", [8875]],
            ["Vdashl", [10982]],
            ["veebar", [8891]],
            ["vee", [8744]],
            ["Vee", [8897]],
            ["veeeq", [8794]],
            ["vellip", [8942]],
            ["verbar", [124]],
            ["Verbar", [8214]],
            ["vert", [124]],
            ["Vert", [8214]],
            ["VerticalBar", [8739]],
            ["VerticalLine", [124]],
            ["VerticalSeparator", [10072]],
            ["VerticalTilde", [8768]],
            ["VeryThinSpace", [8202]],
            ["Vfr", [120089]],
            ["vfr", [120115]],
            ["vltri", [8882]],
            ["vnsub", [8834, 8402]],
            ["vnsup", [8835, 8402]],
            ["Vopf", [120141]],
            ["vopf", [120167]],
            ["vprop", [8733]],
            ["vrtri", [8883]],
            ["Vscr", [119985]],
            ["vscr", [120011]],
            ["vsubnE", [10955, 65024]],
            ["vsubne", [8842, 65024]],
            ["vsupnE", [10956, 65024]],
            ["vsupne", [8843, 65024]],
            ["Vvdash", [8874]],
            ["vzigzag", [10650]],
            ["Wcirc", [372]],
            ["wcirc", [373]],
            ["wedbar", [10847]],
            ["wedge", [8743]],
            ["Wedge", [8896]],
            ["wedgeq", [8793]],
            ["weierp", [8472]],
            ["Wfr", [120090]],
            ["wfr", [120116]],
            ["Wopf", [120142]],
            ["wopf", [120168]],
            ["wp", [8472]],
            ["wr", [8768]],
            ["wreath", [8768]],
            ["Wscr", [119986]],
            ["wscr", [120012]],
            ["xcap", [8898]],
            ["xcirc", [9711]],
            ["xcup", [8899]],
            ["xdtri", [9661]],
            ["Xfr", [120091]],
            ["xfr", [120117]],
            ["xharr", [10231]],
            ["xhArr", [10234]],
            ["Xi", [926]],
            ["xi", [958]],
            ["xlarr", [10229]],
            ["xlArr", [10232]],
            ["xmap", [10236]],
            ["xnis", [8955]],
            ["xodot", [10752]],
            ["Xopf", [120143]],
            ["xopf", [120169]],
            ["xoplus", [10753]],
            ["xotime", [10754]],
            ["xrarr", [10230]],
            ["xrArr", [10233]],
            ["Xscr", [119987]],
            ["xscr", [120013]],
            ["xsqcup", [10758]],
            ["xuplus", [10756]],
            ["xutri", [9651]],
            ["xvee", [8897]],
            ["xwedge", [8896]],
            ["Yacute", [221]],
            ["yacute", [253]],
            ["YAcy", [1071]],
            ["yacy", [1103]],
            ["Ycirc", [374]],
            ["ycirc", [375]],
            ["Ycy", [1067]],
            ["ycy", [1099]],
            ["yen", [165]],
            ["Yfr", [120092]],
            ["yfr", [120118]],
            ["YIcy", [1031]],
            ["yicy", [1111]],
            ["Yopf", [120144]],
            ["yopf", [120170]],
            ["Yscr", [119988]],
            ["yscr", [120014]],
            ["YUcy", [1070]],
            ["yucy", [1102]],
            ["yuml", [255]],
            ["Yuml", [376]],
            ["Zacute", [377]],
            ["zacute", [378]],
            ["Zcaron", [381]],
            ["zcaron", [382]],
            ["Zcy", [1047]],
            ["zcy", [1079]],
            ["Zdot", [379]],
            ["zdot", [380]],
            ["zeetrf", [8488]],
            ["ZeroWidthSpace", [8203]],
            ["Zeta", [918]],
            ["zeta", [950]],
            ["zfr", [120119]],
            ["Zfr", [8488]],
            ["ZHcy", [1046]],
            ["zhcy", [1078]],
            ["zigrarr", [8669]],
            ["zopf", [120171]],
            ["Zopf", [8484]],
            ["Zscr", [119989]],
            ["zscr", [120015]],
            ["zwj", [8205]],
            ["zwnj", [8204]]
          ],
          a = [
            ["NewLine", [10]]
          ],
          i = {},
          c = {};
        ! function (e, r) {
          for (var o = n.length; o--;) {
            var t = n[o],
              i = t[0],
              c = t[1],
              l = c[0],
              s = c[1],
              u = l < 32 || l > 126 || 62 === l || 60 === l || 38 === l || 34 === l || 39 === l,
              d = void 0;
            u && (d = r[l] = r[l] || {}), s ? (e[i] = String.fromCharCode(l) + String.fromCharCode(s), u && (d[s] = i)) : (e[i] = String.fromCharCode(l), u && (d[""] = i))
          }
          for (o = a.length; o--;) {
            var p = a[o],
              f = (i = p[0], p[1]);
            l = f[0], s = f[1], e[i] = String.fromCharCode(l) + (s ? String.fromCharCode(s) : "")
          }
        }(i, c);
        var l = function () {
          function e() {}
          return e.prototype.decode = function (e) {
            return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, (function (e, r) {
              var o;
              if ("#" === r.charAt(0)) {
                var n = "x" === r.charAt(1) ? parseInt(r.substr(2).toLowerCase(), 16) : parseInt(r.substr(1));
                (!isNaN(n) || n >= -32768) && (o = n <= 65535 ? String.fromCharCode(n) : t.fromCodePoint(n))
              } else o = i[r];
              return o || e
            })) : ""
          }, e.decode = function (r) {
            return (new e).decode(r)
          }, e.prototype.encode = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", t = 0; t < r;) {
              var n = c[e.charCodeAt(t)];
              if (n) {
                var a = n[e.charCodeAt(t + 1)];
                if (a ? t++ : a = n[""], a) {
                  o += "&" + a + ";", t++;
                  continue
                }
              }
              o += e.charAt(t), t++
            }
            return o
          }, e.encode = function (r) {
            return (new e).encode(r)
          }, e.prototype.encodeNonUTF = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", n = 0; n < r;) {
              var a = e.charCodeAt(n),
                i = c[a];
              if (i) {
                var l = i[e.charCodeAt(n + 1)];
                if (l ? n++ : l = i[""], l) {
                  o += "&" + l + ";", n++;
                  continue
                }
              }
              a < 32 || a > 126 ? a >= t.highSurrogateFrom && a <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n++) : o += "&#" + a + ";" : o += e.charAt(n), n++
            }
            return o
          }, e.encodeNonUTF = function (r) {
            return (new e).encodeNonUTF(r)
          }, e.prototype.encodeNonASCII = function (e) {
            if (!e || !e.length) return "";
            for (var r = e.length, o = "", n = 0; n < r;) {
              var a = e.charCodeAt(n);
              a <= 255 ? o += e[n++] : a >= t.highSurrogateFrom && a <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n += 2) : (o += "&#" + a + ";", n++)
            }
            return o
          }, e.encodeNonASCII = function (r) {
            return (new e).encodeNonASCII(r)
          }, e
        }();
        r.Html5Entities = l
      },
      255: (e, r, o) => {
        "use strict";
        o(229).XmlEntities, o(362).Html4Entities;
        var t = o(452);
        t.Html5Entities, r.tQ = t.Html5Entities
      },
      260: (e, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.fromCodePoint = String.fromCodePoint || function (e) {
          return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320)
        }, r.getCodePoint = String.prototype.codePointAt ? function (e, r) {
          return e.codePointAt(r)
        } : function (e, r) {
          return 1024 * (e.charCodeAt(r) - 55296) + e.charCodeAt(r + 1) - 56320 + 65536
        }, r.highSurrogateFrom = 55296, r.highSurrogateTo = 56319
      },
      229: (e, r, o) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var t = o(260),
          n = {
            "&lt": "<",
            "&gt": ">",
            "&quot": '"',
            "&apos": "'",
            "&amp": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&amp;": "&"
          },
          a = {
            60: "lt",
            62: "gt",
            34: "quot",
            39: "apos",
            38: "amp"
          },
          i = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;"
          },
          c = function () {
            function e() {}
            return e.prototype.encode = function (e) {
              return e && e.length ? e.replace(/[<>"'&]/g, (function (e) {
                return i[e]
              })) : ""
            }, e.encode = function (r) {
              return (new e).encode(r)
            }, e.prototype.decode = function (e) {
              return e && e.length ? e.replace(/&#?[0-9a-zA-Z]+;?/g, (function (e) {
                if ("#" === e.charAt(1)) {
                  var r = "x" === e.charAt(2).toLowerCase() ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                  return !isNaN(r) || r >= -32768 ? r <= 65535 ? String.fromCharCode(r) : t.fromCodePoint(r) : ""
                }
                return n[e] || e
              })) : ""
            }, e.decode = function (r) {
              return (new e).decode(r)
            }, e.prototype.encodeNonUTF = function (e) {
              if (!e || !e.length) return "";
              for (var r = e.length, o = "", n = 0; n < r;) {
                var i = e.charCodeAt(n),
                  c = a[i];
                c ? (o += "&" + c + ";", n++) : (i < 32 || i > 126 ? i >= t.highSurrogateFrom && i <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n++) : o += "&#" + i + ";" : o += e.charAt(n), n++)
              }
              return o
            }, e.encodeNonUTF = function (r) {
              return (new e).encodeNonUTF(r)
            }, e.prototype.encodeNonASCII = function (e) {
              if (!e || !e.length) return "";
              for (var r = e.length, o = "", n = 0; n < r;) {
                var a = e.charCodeAt(n);
                a <= 255 ? o += e[n++] : (a >= t.highSurrogateFrom && a <= t.highSurrogateTo ? (o += "&#" + t.getCodePoint(e, n) + ";", n++) : o += "&#" + a + ";", n++)
              }
              return o
            }, e.encodeNonASCII = function (r) {
              return (new e).encodeNonASCII(r)
            }, e
          }();
        r.XmlEntities = c
      },
      183: e => {
        "use strict";

        function r(e, r) {
          return Object.prototype.hasOwnProperty.call(e, r)
        }
        e.exports = function (e, o, t, n) {
          o = o || "&", t = t || "=";
          var a = {};
          if ("string" != typeof e || 0 === e.length) return a;
          var i = /\+/g;
          e = e.split(o);
          var c = 1e3;
          n && "number" == typeof n.maxKeys && (c = n.maxKeys);
          var l = e.length;
          c > 0 && l > c && (l = c);
          for (var s = 0; s < l; ++s) {
            var u, d, p, f, h = e[s].replace(i, "%20"),
              g = h.indexOf(t);
            g >= 0 ? (u = h.substr(0, g), d = h.substr(g + 1)) : (u = h, d = ""), p = decodeURIComponent(u), f = decodeURIComponent(d), r(a, p) ? Array.isArray(a[p]) ? a[p].push(f) : a[p] = [a[p], f] : a[p] = f
          }
          return a
        }
      },
      225: (e, r, o) => {
        "use strict";
        o.r(r);
        var t = o(163);
        e = o.hmd(e);
        var n = function (e) {
          switch ((0, t.Z)(e)) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return ""
          }
        };
        e.exports = function (e, r, o, a) {
          return r = r || "&", o = o || "=", null === e && (e = void 0), "object" === (0, t.Z)(e) ? Object.keys(e).map((function (t) {
            var a = encodeURIComponent(n(t)) + o;
            return Array.isArray(e[t]) ? e[t].map((function (e) {
              return a + encodeURIComponent(n(e))
            })).join(r) : a + encodeURIComponent(n(e[t]))
          })).filter(Boolean).join(r) : a ? encodeURIComponent(n(a)) + o + encodeURIComponent(n(e)) : ""
        }
      },
      326: (e, r, o) => {
        "use strict";
        r.decode = r.parse = o(183), r.encode = r.stringify = o(225)
      },
      106: (e, r, o) => {
        "use strict";
        var t = o(546)();
        e.exports = function (e) {
          return "string" == typeof e ? e.replace(t, "") : e
        }
      },
      977: (e, r, o) => {
        var t = document.createElement("div");
        t.id = "webpack-hot-middleware-clientOverlay";
        var n = {
            background: "rgba(0,0,0,0.85)",
            color: "#e8e8e8",
            lineHeight: "1.6",
            whiteSpace: "pre",
            fontFamily: "Menlo, Consolas, monospace",
            fontSize: "13px",
            position: "fixed",
            zIndex: 9999,
            padding: "10px",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: "auto",
            dir: "ltr",
            textAlign: "left"
          },
          a = o(737),
          i = {
            reset: ["transparent", "transparent"],
            black: "181818",
            red: "ff3348",
            green: "3fff4f",
            yellow: "ffd30e",
            blue: "169be0",
            magenta: "f840b7",
            cyan: "0ad8e9",
            lightgrey: "ebe7e3",
            darkgrey: "6d7891"
          },
          c = new(0, o(255).tQ);

        function l(e, r) {
          t.innerHTML = "", r.forEach((function (r) {
            r = a(c.encode(r));
            var o = document.createElement("div");
            o.style.marginBottom = "26px", o.innerHTML = function (e) {
              return '<span style="background-color:#' + ({
                errors: i.red,
                warnings: i.yellow
              } [e] || i.red) + '; color:#000000; padding:3px 6px; border-radius: 4px;">' + e.slice(0, -1).toUpperCase() + "</span>"
            }(e) + " in " + r, t.appendChild(o)
          })), document.body && document.body.appendChild(t)
        }

        function s() {
          document.body && t.parentNode && document.body.removeChild(t)
        }
        e.exports = function (e) {
          for (var r in e.ansiColors) r in i && (i[r] = e.ansiColors[r]), a.setColors(i);
          for (var o in e.overlayStyles) n[o] = e.overlayStyles[o];
          for (var c in n) t.style[c] = n[c];
          return {
            showProblems: l,
            clear: s
          }
        }, e.exports.clear = s, e.exports.showProblems = l
      },
      13: (e, r, o) => {
        e = o.nmd(e);
        var t = {
          path: "/__webpack_hmr",
          timeout: 2e4,
          overlay: !0,
          reload: !1,
          log: !0,
          warn: !0,
          name: "",
          autoConnect: !0,
          overlayStyles: {},
          overlayWarnings: !1,
          ansiColors: {}
        };

        function n(e) {
          e.autoConnect && (t.autoConnect = "true" == e.autoConnect), e.path && (t.path = e.path), e.timeout && (t.timeout = e.timeout), e.overlay && (t.overlay = "false" !== e.overlay), e.reload && (t.reload = "false" !== e.reload), e.noInfo && "false" !== e.noInfo && (t.log = !1), e.name && (t.name = e.name), e.quiet && "false" !== e.quiet && (t.log = !1, t.warn = !1), e.dynamicPublicPath && (t.path = o.p + t.path), e.ansiColors && (t.ansiColors = JSON.parse(e.ansiColors)), e.overlayStyles && (t.overlayStyles = JSON.parse(e.overlayStyles)), e.overlayWarnings && (t.overlayWarnings = "true" == e.overlayWarnings)
        }

        function a() {
          (window.__whmEventSourceWrapper || (window.__whmEventSourceWrapper = {}), window.__whmEventSourceWrapper[t.path] || (window.__whmEventSourceWrapper[t.path] = function () {
            var e, r = new Date,
              o = [];
            a();
            var n = setInterval((function () {
              new Date - r > t.timeout && l()
            }), t.timeout / 2);

            function a() {
              (e = new window.EventSource(t.path)).onopen = i, e.onerror = l, e.onmessage = c
            }

            function i() {
              t.log && console.log("[HMR] connected"), r = new Date
            }

            function c(e) {
              r = new Date;
              for (var t = 0; t < o.length; t++) o[t](e)
            }

            function l() {
              clearInterval(n), e.close(), setTimeout(a, t.timeout)
            }
            return {
              addMessageListener: function (e) {
                o.push(e)
              }
            }
          }()), window.__whmEventSourceWrapper[t.path]).addMessageListener((function (e) {
            if ("????" != e.data) try {
              ! function (e) {
                switch (e.action) {
                  case "building":
                    t.log && console.log("[HMR] bundle " + (e.name ? "'" + e.name + "' " : "") + "rebuilding");
                    break;
                  case "built":
                    t.log && console.log("[HMR] bundle " + (e.name ? "'" + e.name + "' " : "") + "rebuilt in " + e.time + "ms");
                  case "sync":
                    if (e.name && t.name && e.name !== t.name) return;
                    var r = !0;
                    e.errors.length > 0 ? (i && i.problems("errors", e), r = !1) : e.warnings.length > 0 ? i && (r = i.problems("warnings", e)) : i && (i.cleanProblemsCache(), i.success()), r && u(e.hash, e.modules, t);
                    break;
                  default:
                    l && l(e)
                }
                s && s(e)
              }(JSON.parse(e.data))
            } catch (r) {
              t.warn && console.warn("Invalid HMR message: " + e.data + "\n" + r)
            }
          }))
        }
        n(o(326).parse("?path=/__webpack_hmr&timeout=20000&noInfo=true&reload=true".slice(1))), "undefined" == typeof window || (void 0 === window.EventSource ? console.warn("webpack-hot-middleware's client requires EventSource to work. You should include a polyfill if you want to support this browser: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools") : t.autoConnect && a());
        var i, c = "__webpack_hot_middleware_reporter__";
        "undefined" != typeof window && (window[c] || (window[c] = function () {
          var e, r = o(106);
          "undefined" != typeof document && t.overlay && (e = o(977)({
            ansiColors: t.ansiColors,
            overlayStyles: t.overlayStyles
          }));
          var n = {
              errors: "color: #ff0000;",
              warnings: "color: #999933;"
            },
            a = null;
          return {
            cleanProblemsCache: function () {
              a = null
            },
            problems: function (o, i) {
              if (t.warn && function (e, o) {
                  var t = o[e].map((function (e) {
                    return r(e)
                  })).join("\n");
                  if (a != t) {
                    a = t;
                    var i = n[e],
                      c = "[HMR] bundle " + (o.name ? "'" + o.name + "' " : "") + "has " + o[e].length + " " + e;
                    console.group && console.groupEnd ? (console.group("%c" + c, i), console.log("%c" + t, i), console.groupEnd()) : console.log("%c" + c + "\n\t%c" + t.replace(/\n/g, "\n\t"), i + "font-weight: bold;", i + "font-weight: normal;")
                  }
                }(o, i), e) {
                if (t.overlayWarnings || "errors" === o) return e.showProblems(o, i[o]), !1;
                e.clear()
              }
              return !0
            },
            success: function () {
              e && e.clear()
            },
            useCustomOverlay: function (r) {
              e = r
            }
          }
        }()), i = window[c]);
        var l, s, u = o(63);
        e && (e.exports = {
          subscribeAll: function (e) {
            s = e
          },
          subscribe: function (e) {
            l = e
          },
          useCustomOverlay: function (e) {
            i && i.useCustomOverlay(e)
          },
          setOptionsAndConnect: function (e) {
            n(e), a()
          }
        })
      },
      63: (e, r, o) => {
        var t, n = {
            abort: 1,
            fail: 1
          },
          a = {
            ignoreUnaccepted: !0,
            ignoreDeclined: !0,
            ignoreErrored: !0,
            onUnaccepted: function (e) {
              console.warn("Ignored an update to unaccepted module " + e.chain.join(" -> "))
            },
            onDeclined: function (e) {
              console.warn("Ignored an update to declined module " + e.chain.join(" -> "))
            },
            onErrored: function (e) {
              console.error(e.error), console.warn("Ignored an error while updating module " + e.moduleId + " (" + e.type + ")")
            }
          };

        function i(e) {
          return e && (t = e), t == o.h()
        }
        e.exports = function (r, o, t) {
          var c = t.reload;

          function l(r) {
            if (e.hot.status() in n) return t.warn && (console.warn("[HMR] Cannot check for update (Full reload needed)"), console.warn("[HMR] " + (r.stack || r.message))), void s();
            t.warn && console.warn("[HMR] Update check failed: " + (r.stack || r.message))
          }

          function s() {
            c && (t.warn && console.warn("[HMR] Reloading page"), window.location.reload())
          }
          i(r) || "idle" != e.hot.status() || (t.log && console.log("[HMR] Checking for updates on the server..."), function r() {
            var n = function (n, c) {
                if (n) return l(n);
                if (!c) return t.warn && (console.warn("[HMR] Cannot find update (Full reload needed)"), console.warn("[HMR] (Probably because of restarting the server)")), s(), null;
                var u = function (e, n) {
                    if (e) return l(e);
                    i() || r(),
                      function (e, r) {
                        var n = e.filter((function (e) {
                          return r && r.indexOf(e) < 0
                        }));
                        if (n.length > 0) return t.warn && (console.warn("[HMR] The following modules couldn't be hot updated: (Full reload needed)\nThis is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See https://webpack.js.org/concepts/hot-module-replacement/ for more details."), n.forEach((function (e) {
                          console.warn("[HMR]  - " + (o[e] || e))
                        }))), void s();
                        t.log && (r && 0 !== r.length ? (console.log("[HMR] Updated modules:"), r.forEach((function (e) {
                          console.log("[HMR]  - " + (o[e] || e))
                        }))) : console.log("[HMR] Nothing hot updated."), i() && console.log("[HMR] App is up to date."))
                      }(c, n)
                  },
                  d = e.hot.apply(a, u);
                d && d.then && (d.then((function (e) {
                  u(null, e)
                })), d.catch(u))
              },
              c = e.hot.check(!1, n);
            c && c.then && (c.then((function (e) {
              n(null, e)
            })), c.catch(n))
          }())
        }
      }
    },
    t = {};

  function n(e) {
    var r = t[e];
    if (void 0 !== r) {
      if (void 0 !== r.error) throw r.error;
      return r.exports
    }
    var a = t[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    try {
      var i = {
        id: e,
        module: a,
        factory: o[e],
        require: n
      };
      n.i.forEach((function (e) {
        e(i)
      })), a = i.module, i.factory.call(a.exports, a, a.exports, i.require)
    } catch (e) {
      throw a.error = e, e
    }
    return a.loaded = !0, a.exports
  }
  n.m = o, n.c = t, n.i = [], n.d = (e, r) => {
    for (var o in r) n.o(r, o) && !n.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: r[o]
    })
  }, n.hu = e => e + "." + n.h() + ".hot-update.js", n.hmrF = () => "hmr." + n.h() + ".hot-update.json", n.h = () => "042af0a3233c17d7b583", n.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
    enumerable: !0,
    set: () => {
      throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
    }
  }), e), n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "vue-ssr:", n.l = (o, t, a, i) => {
    if (e[o]) e[o].push(t);
    else {
      var c, l;
      if (void 0 !== a)
        for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
          var d = s[u];
          if (d.getAttribute("src") == o || d.getAttribute("data-webpack") == r + a) {
            c = d;
            break
          }
        }
      c || (l = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", r + a), c.src = o), e[o] = [t];
      var p = (r, t) => {
          c.onerror = c.onload = null, clearTimeout(f);
          var n = e[o];
          if (delete e[o], c.parentNode && c.parentNode.removeChild(c), n && n.forEach((e => e(t))), r) return r(t)
        },
        f = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: c
        }), 12e4);
      c.onerror = p.bind(null, c.onerror), c.onload = p.bind(null, c.onload), l && document.head.appendChild(c)
    }
  }, n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
    var e, r, o, t, a = {},
      i = n.c,
      c = [],
      l = [],
      s = "idle";

    function u(e) {
      s = e;
      for (var r = 0; r < l.length; r++) l[r].call(null, e)
    }

    function d(e) {
      if (0 === r.length) return e();
      var o = r;
      return r = [], Promise.all(o).then((function () {
        return d(e)
      }))
    }

    function p(e) {
      if ("idle" !== s) throw new Error("check() is only allowed in idle status");
      return u("check"), n.hmrM().then((function (t) {
        if (!t) return u(g() ? "ready" : "idle"), null;
        u("prepare");
        var a = [];
        return r = [], o = [], Promise.all(Object.keys(n.hmrC).reduce((function (e, r) {
          return n.hmrC[r](t.c, t.r, t.m, e, o, a), e
        }), [])).then((function () {
          return d((function () {
            return e ? h(e) : (u("ready"), a)
          }))
        }))
      }))
    }

    function f(e) {
      return "ready" !== s ? Promise.resolve().then((function () {
        throw new Error("apply() is only allowed in ready status")
      })) : h(e)
    }

    function h(e) {
      e = e || {}, g();
      var r = o.map((function (r) {
        return r(e)
      }));
      o = void 0;
      var n, a = r.map((function (e) {
        return e.error
      })).filter(Boolean);
      if (a.length > 0) return u("abort"), Promise.resolve().then((function () {
        throw a[0]
      }));
      u("dispose"), r.forEach((function (e) {
        e.dispose && e.dispose()
      })), u("apply");
      var i = function (e) {
          n || (n = e)
        },
        c = [];
      return r.forEach((function (e) {
        if (e.apply) {
          var r = e.apply(i);
          if (r)
            for (var o = 0; o < r.length; o++) c.push(r[o])
        }
      })), n ? (u("fail"), Promise.resolve().then((function () {
        throw n
      }))) : t ? h(e).then((function (e) {
        return c.forEach((function (r) {
          e.indexOf(r) < 0 && e.push(r)
        })), e
      })) : (u("idle"), Promise.resolve(c))
    }

    function g() {
      if (t) return o || (o = []), Object.keys(n.hmrI).forEach((function (e) {
        t.forEach((function (r) {
          n.hmrI[e](r, o)
        }))
      })), t = void 0, !0
    }
    n.hmrD = a, n.i.push((function (h) {
      var g, m, b, v, w = h.module,
        y = function (o, t) {
          var n = i[t];
          if (!n) return o;
          var a = function (r) {
              if (n.hot.active) {
                if (i[r]) {
                  var a = i[r].parents; - 1 === a.indexOf(t) && a.push(t)
                } else c = [t], e = r; - 1 === n.children.indexOf(r) && n.children.push(r)
              } else console.warn("[HMR] unexpected require(" + r + ") from disposed module " + t), c = [];
              return o(r)
            },
            l = function (e) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o[e]
                },
                set: function (r) {
                  o[e] = r
                }
              }
            };
          for (var p in o) Object.prototype.hasOwnProperty.call(o, p) && "e" !== p && Object.defineProperty(a, p, l(p));
          return a.e = function (e) {
            return function (e) {
              switch (s) {
                case "ready":
                  return u("prepare"), r.push(e), d((function () {
                    u("ready")
                  })), e;
                case "prepare":
                  return r.push(e), e;
                default:
                  return e
              }
            }(o.e(e))
          }, a
        }(h.require, h.id);
      w.hot = (g = h.id, m = w, v = {
        _acceptedDependencies: {},
        _acceptedErrorHandlers: {},
        _declinedDependencies: {},
        _selfAccepted: !1,
        _selfDeclined: !1,
        _selfInvalidated: !1,
        _disposeHandlers: [],
        _main: b = e !== g,
        _requireSelf: function () {
          c = m.parents.slice(), e = b ? void 0 : g, n(g)
        },
        active: !0,
        accept: function (e, r, o) {
          if (void 0 === e) v._selfAccepted = !0;
          else if ("function" == typeof e) v._selfAccepted = e;
          else if ("object" == typeof e && null !== e)
            for (var t = 0; t < e.length; t++) v._acceptedDependencies[e[t]] = r || function () {}, v._acceptedErrorHandlers[e[t]] = o;
          else v._acceptedDependencies[e] = r || function () {}, v._acceptedErrorHandlers[e] = o
        },
        decline: function (e) {
          if (void 0 === e) v._selfDeclined = !0;
          else if ("object" == typeof e && null !== e)
            for (var r = 0; r < e.length; r++) v._declinedDependencies[e[r]] = !0;
          else v._declinedDependencies[e] = !0
        },
        dispose: function (e) {
          v._disposeHandlers.push(e)
        },
        addDisposeHandler: function (e) {
          v._disposeHandlers.push(e)
        },
        removeDisposeHandler: function (e) {
          var r = v._disposeHandlers.indexOf(e);
          r >= 0 && v._disposeHandlers.splice(r, 1)
        },
        invalidate: function () {
          switch (this._selfInvalidated = !0, s) {
            case "idle":
              o = [], Object.keys(n.hmrI).forEach((function (e) {
                n.hmrI[e](g, o)
              })), u("ready");
              break;
            case "ready":
              Object.keys(n.hmrI).forEach((function (e) {
                n.hmrI[e](g, o)
              }));
              break;
            case "prepare":
            case "check":
            case "dispose":
            case "apply":
              (t = t || []).push(g)
          }
        },
        check: p,
        apply: f,
        status: function (e) {
          if (!e) return s;
          l.push(e)
        },
        addStatusHandler: function (e) {
          l.push(e)
        },
        removeStatusHandler: function (e) {
          var r = l.indexOf(e);
          r >= 0 && l.splice(r, 1)
        },
        data: a[g]
      }, e = void 0, v), w.parents = c, w.children = [], c = [], h.require = y
    })), n.hmrC = {}, n.hmrI = {}
  })(), n.p = "/dist/", (() => {
    var e, r, o, t, a = {
        685: 0
      },
      i = {};

    function c(e) {
      return new Promise(((r, o) => {
        i[e] = r;
        var t = n.p + n.hu(e),
          a = new Error;
        n.l(t, (r => {
          if (i[e]) {
            i[e] = void 0;
            var t = r && ("load" === r.type ? "missing" : r.type),
              n = r && r.target && r.target.src;
            a.message = "Loading hot update chunk " + e + " failed.\n(" + t + ": " + n + ")", a.name = "ChunkLoadError", a.type = t, a.request = n, o(a)
          }
        }))
      }))
    }

    function l(i) {
      function c(e) {
        for (var r = [e], o = {}, t = r.map((function (e) {
            return {
              chain: [e],
              id: e
            }
          })); t.length > 0;) {
          var a = t.pop(),
            i = a.id,
            c = a.chain,
            s = n.c[i];
          if (s && (!s.hot._selfAccepted || s.hot._selfInvalidated)) {
            if (s.hot._selfDeclined) return {
              type: "self-declined",
              chain: c,
              moduleId: i
            };
            if (s.hot._main) return {
              type: "unaccepted",
              chain: c,
              moduleId: i
            };
            for (var u = 0; u < s.parents.length; u++) {
              var d = s.parents[u],
                p = n.c[d];
              if (p) {
                if (p.hot._declinedDependencies[i]) return {
                  type: "declined",
                  chain: c.concat([d]),
                  moduleId: i,
                  parentId: d
                }; - 1 === r.indexOf(d) && (p.hot._acceptedDependencies[i] ? (o[d] || (o[d] = []), l(o[d], [i])) : (delete o[d], r.push(d), t.push({
                  chain: c.concat([d]),
                  id: d
                })))
              }
            }
          }
        }
        return {
          type: "accepted",
          moduleId: e,
          outdatedModules: r,
          outdatedDependencies: o
        }
      }

      function l(e, r) {
        for (var o = 0; o < r.length; o++) {
          var t = r[o]; - 1 === e.indexOf(t) && e.push(t)
        }
      }
      n.f && delete n.f.jsonpHmr, e = void 0;
      var s = {},
        u = [],
        d = {},
        p = function (e) {
          console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
        };
      for (var f in r)
        if (n.o(r, f)) {
          var h, g = r[f],
            m = !1,
            b = !1,
            v = !1,
            w = "";
          switch ((h = g ? c(f) : {
            type: "disposed",
            moduleId: f
          }).chain && (w = "\nUpdate propagation: " + h.chain.join(" -> ")), h.type) {
            case "self-declined":
              i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (m = new Error("Aborted because of self decline: " + h.moduleId + w));
              break;
            case "declined":
              i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (m = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + w));
              break;
            case "unaccepted":
              i.onUnaccepted && i.onUnaccepted(h), i.ignoreUnaccepted || (m = new Error("Aborted because " + f + " is not accepted" + w));
              break;
            case "accepted":
              i.onAccepted && i.onAccepted(h), b = !0;
              break;
            case "disposed":
              i.onDisposed && i.onDisposed(h), v = !0;
              break;
            default:
              throw new Error("Unexception type " + h.type)
          }
          if (m) return {
            error: m
          };
          if (b)
            for (f in d[f] = g, l(u, h.outdatedModules), h.outdatedDependencies) n.o(h.outdatedDependencies, f) && (s[f] || (s[f] = []), l(s[f], h.outdatedDependencies[f]));
          v && (l(u, [h.moduleId]), d[f] = p)
        } r = void 0;
      for (var y, q = [], E = 0; E < u.length; E++) {
        var A = u[E],
          S = n.c[A];
        S && (S.hot._selfAccepted || S.hot._main) && d[A] !== p && !S.hot._selfInvalidated && q.push({
          module: A,
          require: S.hot._requireSelf,
          errorHandler: S.hot._selfAccepted
        })
      }
      return {
        dispose: function () {
          var e;
          o.forEach((function (e) {
            delete a[e]
          })), o = void 0;
          for (var r, t = u.slice(); t.length > 0;) {
            var i = t.pop(),
              c = n.c[i];
            if (c) {
              var l = {},
                d = c.hot._disposeHandlers;
              for (E = 0; E < d.length; E++) d[E].call(null, l);
              for (n.hmrD[i] = l, c.hot.active = !1, delete n.c[i], delete s[i], E = 0; E < c.children.length; E++) {
                var p = n.c[c.children[E]];
                p && (e = p.parents.indexOf(i)) >= 0 && p.parents.splice(e, 1)
              }
            }
          }
          for (var f in s)
            if (n.o(s, f) && (c = n.c[f]))
              for (y = s[f], E = 0; E < y.length; E++) r = y[E], (e = c.children.indexOf(r)) >= 0 && c.children.splice(e, 1)
        },
        apply: function (e) {
          for (var r in d) n.o(d, r) && (n.m[r] = d[r]);
          for (var o = 0; o < t.length; o++) t[o](n);
          for (var a in s)
            if (n.o(s, a)) {
              var c = n.c[a];
              if (c) {
                y = s[a];
                for (var l = [], p = [], f = [], h = 0; h < y.length; h++) {
                  var g = y[h],
                    m = c.hot._acceptedDependencies[g],
                    b = c.hot._acceptedErrorHandlers[g];
                  if (m) {
                    if (-1 !== l.indexOf(m)) continue;
                    l.push(m), p.push(b), f.push(g)
                  }
                }
                for (var v = 0; v < l.length; v++) try {
                  l[v].call(null, y)
                } catch (r) {
                  if ("function" == typeof p[v]) try {
                    p[v](r, {
                      moduleId: a,
                      dependencyId: f[v]
                    })
                  } catch (o) {
                    i.onErrored && i.onErrored({
                      type: "accept-error-handler-errored",
                      moduleId: a,
                      dependencyId: f[v],
                      error: o,
                      originalError: r
                    }), i.ignoreErrored || (e(o), e(r))
                  } else i.onErrored && i.onErrored({
                    type: "accept-errored",
                    moduleId: a,
                    dependencyId: f[v],
                    error: r
                  }), i.ignoreErrored || e(r)
                }
              }
            } for (var w = 0; w < q.length; w++) {
            var E = q[w],
              A = E.module;
            try {
              E.require(A)
            } catch (r) {
              if ("function" == typeof E.errorHandler) try {
                E.errorHandler(r, {
                  moduleId: A,
                  module: n.c[A]
                })
              } catch (o) {
                i.onErrored && i.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: A,
                  error: o,
                  originalError: r
                }), i.ignoreErrored || (e(o), e(r))
              } else i.onErrored && i.onErrored({
                type: "self-accept-errored",
                moduleId: A,
                error: r
              }), i.ignoreErrored || e(r)
            }
          }
          return u
        }
      }
    }
    self.webpackHotUpdatevue_ssr = (e, o, a) => {
      for (var c in o) n.o(o, c) && (r[c] = o[c]);
      a && t.push(a), i[e] && (i[e](), i[e] = void 0)
    }, n.hmrI.jsonp = function (e, a) {
      r || (r = {}, t = [], o = [], a.push(l)), n.o(r, e) || (r[e] = n.m[e])
    }, n.hmrC.jsonp = function (i, s, u, d, p, f) {
      p.push(l), e = {}, o = s, r = u.reduce((function (e, r) {
        return e[r] = !1, e
      }), {}), t = [], i.forEach((function (r) {
        n.o(a, r) && void 0 !== a[r] && (d.push(c(r)), e[r] = !0)
      })), n.f && (n.f.jsonpHmr = function (r, o) {
        e && !n.o(e, r) && n.o(a, r) && void 0 !== a[r] && (o.push(c(r)), e[r] = !0)
      })
    }, n.hmrM = () => {
      if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
      return fetch(n.p + n.hmrF()).then((e => {
        if (404 !== e.status) {
          if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText);
          return e.json()
        }
      }))
    }
  })(), n(13)
})();
