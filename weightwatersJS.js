(this["webpackJsonpcmx-web-react"] =
  this["webpackJsonpcmx-web-react"] || []).push([
  [15],
  {
    1397: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        i = a(4),
        o = a(813),
        s = a.n(o),
        c = a(300),
        d = a(507),
        l = a(874),
        u = a(512),
        p = a(320),
        m = a(58),
        b = a(559),
        h = a(59),
        O = a(57),
        f = a(591),
        E = a(544),
        y = a(56),
        j = a(87),
        g = a(249),
        C = a(98),
        _ = a(482),
        v = a(308),
        I = a(197);
      class N extends r.Component {
        constructor(e) {
          super(e),
            (this.onSave = this.onSave.bind(this)),
            (this.onChange = this.onChange.bind(this)),
            (this.metaData = Object(p.b)(
              `${e.match.params.sourceType}:${e.match.params.itemId}`
            )),
            (this.state = {
              market: e.market,
              nutrition: null,
              quantity: 1,
            });
        }
        componentWillUnmount() {
          this.props.resetState();
        }
        componentDidMount() {
          Object(h.b)("NUI.PAGE_TITLE.CALCULATOR"),
            this.props.details || this.props.fetchItem(this.metaData);
        }
        onSave(e) {
          const t = {
              portionSize: e.quantity,
              portionName: e.portionId,
              name: e.name,
              ...e.nutrition,
            },
            { barcode: a } = this.props;
          a && (t.barcode = a), this.props.createFood(t);
        }
        onChange(e) {
          if (!e.isValidNutrition) return;
          const t = "PT-BR" === this.props.market,
            a = this.previousNutrition !== e.nutrition,
            r = this.previousName !== e.name;
          (a || (t && r)) &&
            (this.props.calculatePoints(e),
            (this.previousNutrition = e.nutrition),
            (this.previousName = e.name));
        }
        render() {
          if ((this.props.errors || {}).hasFetchError)
            return n.a.createElement(
              v.a,
              null,
              n.a.createElement(I.a, {
                type: "fetch",
                as: "message",
              })
            );
          const e = Object(C.a)(
              this.props.details,
              "portions.0.nutrition",
              this.props.nutrition
            ),
            t = Object(C.a)(
              this.props.details,
              "portions.0.name",
              this.props.portionId
            ),
            a = Object(C.a)(
              this.props.details,
              "portions.0.size",
              this.props.quantity
            ),
            r = Object(C.a)(this.props.details, "name", this.props.name),
            i = Object(_.a)(this.props.points)
              ? this.props.points
              : Object(C.a)(this.props.details, "points");
          return n.a.createElement(
            "div",
            {
              className: s.a.container,
            },
            n.a.createElement(m.a, null),
            n.a.createElement(
              "div",
              {
                className: s.a.maxWidth,
              },
              n.a.createElement(b.a, {
                eyebrow: "NUI.CALCULATOR2.SUBTITLE",
                title: "NUI.CALCULATOR2.TITLE",
              }),
              this.props.isLoading
                ? n.a.createElement(
                    j.a,
                    {
                      className: s.a.centeredLoader,
                    },
                    n.a.createElement(g.a, null)
                  )
                : n.a.createElement(l.a, {
                    onSave: this.onSave,
                    points: i,
                    onChange: this.onChange,
                    mode: "create",
                    market: this.props.market,
                    nutrition: e,
                    quantity: a,
                    portionId: t,
                    name: r,
                    program: this.props.program,
                    isMyWW: this.props.isMyWW,
                    hasFoodCreateError: this.props.hasFoodCreateError,
                  })
            )
          );
        }
      }
      N.defaultProps = {
        name: "",
        points: null,
        quantity: Object(c.d)(),
        portionId: Object(c.b)(),
        nutrition: d.c,
        isMyWW: !0,
      };
      const R = Object(i.connect)(
        (e, t) => ({
          isLoading: e.foodDetail.isLoading,
          details: e.foodDetail.detailsById[t.itemId],
          market: e.app.market,
          isSaving: e.foodCalculator.isProcessing,
          points: e.foodCalculator.points,
          barcode: e.foodCalculator.barcode,
          program: e.app.program,
          isMyWW: e.app.member.isMyWW,
          hasFoodCreateError: e.foodCalculator.hasFoodCreateError,
        }),
        (e) => ({
          fetchItem: (t) => e(Object(y.b)(t)),
          createFood: (t) => e(Object(u.b)(t)),
          resetState: () => e(Object(u.d)()),
          calculatePoints: (t) => e(Object(u.a)(t)),
        })
      )(N);
      t.default = (e) =>
        n.a.createElement(
          O.DynamicModuleLoader,
          {
            modules: [Object(f.a)(), Object(E.a)()],
          },
          n.a.createElement(R, e)
        );
    },
    1398: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        i = a(4),
        o = a(813),
        s = a.n(o),
        c = a(874),
        d = a(512),
        l = a(320),
        u = a(56),
        p = a(98),
        m = a(87),
        b = a(58),
        h = a(559),
        O = a(308),
        f = a(197),
        E = a(249),
        y = a(7),
        j = a(59),
        g = a(57),
        C = a(591),
        _ = a(544);
      class v extends r.Component {
        constructor(e) {
          super(e),
            (this.onSave = this.onSave.bind(this)),
            (this.onCancel = this.onCancel.bind(this)),
            (this.onChange = this.onChange.bind(this)),
            (this.metaData = Object(l.b)(
              `${e.match.params.sourceType}:${e.match.params.itemId}`
            )),
            (this.state = {
              didUpdatePoints: !1,
            });
        }
        componentDidMount() {
          Object(j.b)("NUI.PAGE_TITLE.EDIT_ITEM"),
            this.props.details || this.props.fetchItem(this.metaData);
        }
        componentWillUnmount() {
          this.props.resetState();
        }
        onSave(e) {
          const t = {
              ...this.props.details.portions[0],
              nutrition: e.nutrition,
              name: e.portionId,
              size: e.quantity,
            },
            a = {
              ...this.props.details,
              name: e.name,
              portions: [t],
            };
          this.props.updateFood(a);
        }
        onCancel() {
          this.props.setPreloadDetails(this.props.details),
            this.props.history.push(y.a.foodDetail(this.metaData));
        }
        onChange(e) {
          if (!e.isValidNutrition) return;
          const t = "PT-BR" === this.props.market,
            a = this.previousName !== e.name;
          (this.previousNutrition !== e.nutrition || (t && a)) &&
            (this.setState({
              didUpdatePoints: !0,
            }),
            this.props.calculatePoints(e),
            (this.previousNutrition = e.nutrition),
            (this.previousName = e.name));
        }
        getPoints() {
          return this.state.didUpdatePoints && null !== this.props.points
            ? this.props.points
            : Object(p.a)(this.props.details, "points");
        }
        render() {
          if ((this.props.errors || {}).hasFetchError)
            return n.a.createElement(
              O.a,
              null,
              n.a.createElement(f.a, {
                type: "fetch",
                as: "message",
              })
            );
          const e = Object(p.a)(this.props.details, "portions.0.nutrition"),
            t = Object(p.a)(this.props.details, "portions.0.name"),
            a = Object(p.a)(this.props.details, "portions.0.size"),
            r = Object(p.a)(this.props.details, "name"),
            i = this.getPoints();
          return n.a.createElement(
            "div",
            {
              className: s.a.container,
            },
            n.a.createElement(b.a, null),
            n.a.createElement(
              "div",
              {
                className: s.a.maxWidth,
              },
              n.a.createElement(h.a, {
                eyebrow: "NUI.CALCULATOR2.SUBTITLE",
                title: r || "NUI.CALCULATOR2.TITLE",
              }),
              this.props.isLoading
                ? n.a.createElement(
                    m.a,
                    {
                      className: s.a.centeredLoader,
                    },
                    n.a.createElement(E.a, null)
                  )
                : n.a.createElement(c.a, {
                    mode: "edit",
                    points: i,
                    onChange: this.onChange,
                    onSave: this.onSave,
                    onCancel: this.onCancel,
                    market: this.props.market,
                    nutrition: e,
                    quantity: a,
                    portionId: t,
                    name: r,
                    hasFoodUpdateError: this.props.hasFoodUpdateError,
                    hasCalcPointsError: this.props.hasCalcPointsError,
                    program: this.props.program,
                    isMyWW: this.props.isMyWW,
                  })
            )
          );
        }
      }
      const I = Object(i.connect)(
        (e, t) => ({
          isLoading: e.foodDetail.isLoading,
          errors: e.foodDetail.errorsById[t.itemId],
          details: e.foodDetail.detailsById[t.itemId],
          market: e.app.market,
          points: e.foodCalculator.points,
          program: e.app.program,
          isMyWW: e.app.member.isMyWW,
          hasFoodUpdateError: e.foodCalculator.hasFoodUpdateError,
          hasCalcPointsError: e.foodCalculator.hasCalcPointsError,
        }),
        (e) => ({
          setPreloadDetails: (t) => e(Object(u.l)(t)),
          fetchItem: (t) => e(Object(u.b)(t)),
          updateFood: (t) => e(Object(d.i)(t)),
          resetState: () => e(Object(d.d)()),
          calculatePoints: (t) => e(Object(d.a)(t)),
        })
      )(v);
      t.default = (e) =>
        n.a.createElement(
          g.DynamicModuleLoader,
          {
            modules: [Object(C.a)(), Object(_.a)()],
          },
          n.a.createElement(I, e)
        );
    },
    501: function (e, t, a) {
      "use strict";
      a.d(t, "f", function () {
        return r;
      }),
        a.d(t, "h", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "j", function () {
          return s;
        }),
        a.d(t, "i", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return d;
        }),
        a.d(t, "a", function () {
          return l;
        }),
        a.d(t, "g", function () {
          return u;
        }),
        a.d(t, "e", function () {
          return p;
        }),
        a.d(t, "k", function () {
          return m;
        });
      const r = "Calculator/Error",
        n = "Calculator/Processing",
        i = "Calculator/Create",
        o = "Calculator/Created",
        s = "Calculator/Update",
        c = "Calculator/Updated",
        d = "Calculator/Reset",
        l = "Calculator/Calculate",
        u = "Calculator/SetPoints",
        p = "Calculator/SetBarcode",
        m = "Calculator/ValidateNutrition";
    },
    505: function (e, t, a) {
      "use strict";
      a.d(t, "o", function () {
        return r;
      }),
        a.d(t, "r", function () {
          return n;
        }),
        a.d(t, "s", function () {
          return i;
        }),
        a.d(t, "t", function () {
          return o;
        }),
        a.d(t, "f", function () {
          return s;
        }),
        a.d(t, "p", function () {
          return c;
        }),
        a.d(t, "q", function () {
          return d;
        }),
        a.d(t, "h", function () {
          return l;
        }),
        a.d(t, "m", function () {
          return u;
        }),
        a.d(t, "g", function () {
          return p;
        }),
        a.d(t, "l", function () {
          return m;
        }),
        a.d(t, "a", function () {
          return b;
        }),
        a.d(t, "u", function () {
          return h;
        }),
        a.d(t, "n", function () {
          return O;
        }),
        a.d(t, "d", function () {
          return f;
        }),
        a.d(t, "c", function () {
          return E;
        }),
        a.d(t, "b", function () {
          return y;
        }),
        a.d(t, "e", function () {
          return j;
        }),
        a.d(t, "k", function () {
          return g;
        }),
        a.d(t, "i", function () {
          return C;
        }),
        a.d(t, "j", function () {
          return _;
        });
      const r = "BarcodeScanner/SetBarcode",
        n = "BarcodeScanner/SetFoodsById",
        i = "BarcodeScanner/SetFoodIsProcessing",
        o = "BarcodeScanner/SetIsFetching",
        s = "BarcodeScanner/FetchScannedFoods",
        c = "BarcodeScanner/SetBarcodeInCalculator",
        d = "BarcodeScanner/SetErrorScreen",
        l = "BarcodeScanner/IndexScannedFood",
        u = "BarcodeScanner/Reset",
        p = "GO_TO_MY_DAY",
        m = "OPEN_SCANNER",
        b = "CREATE_FOOD",
        h = "UNIVERSAL_CANCEL_LABEL",
        O = "NUI.EVENTS.RETRY",
        f = "BARCODE_SCANNER_DEFAULT_ERROR",
        E = p,
        y = {
          action: m,
          label: O,
        },
        j = {
          errorMessage: f,
          cancelButton: E,
          actionButton: y,
        },
        g = {
          errorMessage: "BARCODE_SCANNER_NO_FOODS_FOUND",
          cancelButton: m,
          actionButton: {
            action: b,
            label: "NUI.CALCULATOR.CREATE_FOOD",
          },
        },
        C = "BARCODE_SCANNER_INVALID_GTIN",
        _ = {
          ...g,
          errorMessage: C,
        };
    },
    507: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return E;
        }),
        a.d(t, "c", function () {
          return y;
        }),
        a.d(t, "i", function () {
          return I;
        }),
        a.d(t, "j", function () {
          return N;
        }),
        a.d(t, "d", function () {
          return R;
        }),
        a.d(t, "e", function () {
          return T;
        }),
        a.d(t, "g", function () {
          return A;
        }),
        a.d(t, "f", function () {
          return F;
        }),
        a.d(t, "k", function () {
          return U;
        }),
        a.d(t, "h", function () {
          return k;
        });
      var r = a(71),
        n = a(154),
        i = a(478);
      const o = "calories",
        s = "fat",
        c = "saturatedFat",
        d = "fiber",
        l = "carbs",
        u = "protein",
        p = [o, s, c, "sodium", l, d, "sugar", u],
        m = [o, u, s, c, l, "sugar", d, "sodium"],
        b = [o, s, c, l, "sugar", d, u, "salt"],
        h = [o, l, "sugar", u, s, c, d, "sodium"],
        O = [o, s, c, l, d, "sugar", u, "sodium"],
        f = [o, s, c, "sodium", l, d, "sugar", "addedSugar", u],
        E = [
          "alcohol",
          o,
          l,
          s,
          d,
          u,
          c,
          "sodium",
          "sugar",
          "addedSugar",
          "salt",
        ],
        y = E.reduce((e, t) => ((e[t] = null), e), {}),
        j = {
          US: f,
          CA: O,
          FC: p,
          UK: b,
          DE: b,
          FR: b,
          NB: b,
          FB: b,
          NL: b,
          ES: b,
          SE: b,
          AU: m,
          "PT-BR": h,
          "DE-CH": b,
          "FR-CH": b,
        },
        g = [
          "US",
          "CA",
          "FC",
          "UK",
          "DE",
          "FR",
          "NB",
          "FB",
          "NL",
          "SE",
          "AU",
          "FR-CH",
          "DE-CH",
        ],
        C = g.concat(["PT-BR"]),
        _ = ["AU"],
        v = {
          [o]: {
            digits: "0000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.calories_label",
            required: C,
            indented: !1,
          },
          [s]: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.fat_label",
            required: C,
            indented: !1,
          },
          [c]: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.saturated_fat_label",
            required: C,
            indented: !0,
          },
          [l]: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.carbohydrates_label",
            required: C,
            indented: !1,
          },
          [d]: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.fiber_label",
            required: ["PT-BR", "US", "CA", "FC"],
            indented: !0,
            indentedIn: ["US", "CA", "FC"],
          },
          sodium: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.sodium_label",
            required: ["US", "AU", "PT-BR", "CA", "FC"],
            indented: !1,
          },
          salt: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.salt_label",
            required: [
              "FB",
              "NB",
              "FR",
              "DE",
              "NL",
              "SE",
              "DE-CH",
              "FR-CH",
              "UK",
            ],
            indented: !1,
          },
          sugar: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.sugars_label",
            required: g,
            indented: !0,
          },
          [u]: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.protein_label",
            required: C,
            indented: !1,
          },
          addedSugar: {
            digits: "000.00",
            label: "FOOD_DASHBOARD.CREATE_FOOD.FOOD.added_sugar_label",
            required: ["US"],
            indented: !1,
          },
        },
        I = (e) => Object(r.a)(_, e),
        N = function (e) {
          return (e = Number(e)) > 0 ? 0.239 * e : 0;
        },
        R = function (e) {
          return (e = Number(e)) > 0 ? 4.184 * e : 0;
        },
        T = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = 0;
          return (a = t ? N(e) : e), parseFloat(a);
        },
        A = function (e) {
          if (!e) throw new Error("The market is invalid");
          return j[(e = j[e] ? e : "US")].map((t) => {
            const a = v[t];
            return {
              name: t,
              required: a.required.indexOf(e) > -1,
              indented: a.indentedIn
                ? Object(r.a)(a.indentedIn, e)
                : a.indented,
              label: a.label,
              digits: a.digits,
            };
          });
        },
        F = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = A(e),
            n = Object(r.a)(_, e);
          return a.map(
            (e) => (
              (e.value = t[e.name]),
              e.name === o &&
                e.value >= 0 &&
                ((e.value = n ? R(e.value) : e.value),
                (e.value = Math.round(e.value))),
              (e.decimalPlaces = e.value % 1 === 0 ? 0 : 1),
              e
            )
          );
        },
        D = (e) => parseFloat(String(e).replace(/\.,/, ".")),
        S = (e, t) => Object(n.a)(e, t) && null !== e[t] && e[t] >= 0,
        U = (e, t) => {
          let a = !0;
          const r = ((e, t) => {
            const a = [
              [s, c],
              [l, "sugar"],
              [l, "addedSugar"],
              ["sugar", "addedSugar"],
            ];
            return (
              ["US", "CA", "FC"].includes(t) && a.push([l, d]),
              a.reduce((t, a) => {
                const [r, n] = a;
                return (
                  S(e, r) &&
                    S(e, n) &&
                    D(e[r]) < D(e[n]) &&
                    ((t[r] = !0), (t[n] = !0)),
                  t
                );
              }, {})
            );
          })(e, t);
          if (S(e, o) && S(e, u)) {
            (a = e[o] - 4 * D(e[u]) >= 0), a || ((r[o] = !0), (r[u] = !0));
          }
          const n = A(t)
              .filter((t) => t.required && !S(e, t.name))
              .map((e) => e.name),
            p = 0 === n.length;
          return {
            validCalorieProteinRatio: a,
            requiredFields: n,
            requiresAttention: r,
            isComplete: p,
            isValid: p && a && Object(i.a)(r),
          };
        };
      function k(e) {
        switch (e) {
          case o:
            return "NUI.NUTRITIONAL_FORM.CALORIES_UNIT";
          case "sodium":
            return "NUI.NUTRITIONAL_FORM.MG_UNIT";
          default:
            return "NUI.NUTRITIONAL_FORM.GRAMS_UNIT";
        }
      }
    },
    512: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "g", function () {
          return o;
        }),
        a.d(t, "f", function () {
          return s;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "h", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return l;
        }),
        a.d(t, "c", function () {
          return u;
        }),
        a.d(t, "i", function () {
          return p;
        }),
        a.d(t, "j", function () {
          return m;
        });
      var r = a(501);
      function n(e) {
        return {
          type: r.e,
          data: e,
        };
      }
      function i(e) {
        return {
          type: r.a,
          data: e,
        };
      }
      function o(e) {
        return {
          type: r.g,
          data: e,
        };
      }
      function s(e, t) {
        return {
          type: r.f,
          data: {
            scope: e,
            data: t,
          },
        };
      }
      function c(e, t) {
        return {
          type: r.d,
        };
      }
      function d(e) {
        return {
          type: r.h,
          data: e,
        };
      }
      function l(e) {
        return {
          type: r.c,
          data: e,
        };
      }
      function u(e) {
        return {
          type: r.b,
          data: e,
        };
      }
      function p(e) {
        return {
          type: r.j,
          data: e,
        };
      }
      function m(e) {
        return {
          type: r.i,
          data: e,
        };
      }
    },
    519: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        i = a(472),
        o = a(268);
      function s(e) {
        let {
          market: t,
          defaultValue: a,
          mask: s,
          maxLength: c,
          onChange: d,
          min: l,
          max: u,
          ...p
        } = e;
        const m = Object(r.useRef)(Object(o.b)(o.a[t])),
          b = m.current.stripRegex,
          h = m.current.decimalMark,
          [O, f] = Object(r.useState)(() => Object(o.d)(a, s, h));
        return n.a.createElement(
          i.a,
          Object.assign({}, p, {
            inputMode: "decimal",
            onChange: (e) => {
              e.persist();
              let t = e.target.value.replace(b, "");
              if (
                ((e, t) => {
                  const a = "." === t ? /\./g : /,/g;
                  return (e.match(a) || []).length;
                })(t, h) > 1
              )
                return;
              t.substr(-1) === h ||
                ((t = Object(o.c)(t, s, h)),
                (t = u && t > u && t ? u : t),
                (t = l && t < l && t ? l : t),
                (t = Object(o.d)(t, s, h))),
                (e.target.value = t),
                f(t),
                d(e, Object(o.c)(t, s, h));
            },
            value: O,
            type: "text",
          })
        );
      }
      (s.defaultProps = {
        onChange: () => {},
        defaultValue: "",
        mask: "0000.00",
        market: "",
      }),
        (t.a = s);
    },
    520: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return l;
      }),
        a.d(t, "b", function () {
          return u;
        });
      var r = a(3),
        n = a(90),
        i = a(24),
        o = a(56),
        s = a(25);
      const c = {
          food: "/api/v3/public/foods/:_id",
          recipe: "/api/v3/public/recipes/:_id",
          meal: "/api/v3/public/meals/:_id",
          memberfood: "/api/v3/cmx/members/~/custom-foods/foods/:_id",
          memberrecipe: "/api/v3/cmx/members/~/custom-foods/recipes/:_id",
          membermeal: "/api/v3/cmx/members/~/custom-foods/meals/:_id",
        },
        d = {
          WWMEAL: "meal",
          WWRECIPE: "recipe",
          WWFOOD: "food",
          VENDOR: "food",
          WWVENDORFOOD: "food",
          MEMBERFOOD: "memberfood",
          MEMBERMEAL: "membermeal",
          MEMBERRECIPE: "memberrecipe",
        },
        l = (e) => {
          const t = e.sourceType;
          if (!d[t]) return null;
          return c[d[t]].replace(":_id", e._id);
        };
      function* u(e) {
        if (Object(s.e)(e)) return e;
        const t = l(e);
        try {
          if (!t) throw new Error();
          const a = {
            fullDetails: !0,
          };
          e.program && (a.program = e.program);
          const i = yield Object(r.b)(n.a, t, {
            params: a,
          });
          if (!i.ok) throw new Error();
          return yield i.json();
        } catch (a) {
          return null;
        }
      }
      t.a = function* () {
        yield Object(r.i)(i.b, function* (e) {
          const t = e.data,
            a = yield Object(r.b)(u, t),
            n = yield Object(r.f)((e) => e.app.foodPreloadDetails);
          if (a) {
            let e = null;
            n &&
              n._id === a._id &&
              (e = {
                preloadDetails: n,
              }),
              yield Object(r.e)(Object(o.j)(a, e));
          } else yield Object(r.e)(Object(o.g)(i.b, t));
        });
      };
    },
    526: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return n;
      }),
        a.d(t, "h", function () {
          return i;
        }),
        a.d(t, "g", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "i", function () {
          return d;
        }),
        a.d(t, "c", function () {
          return l;
        }),
        a.d(t, "e", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return p;
        });
      var r = a(505);
      function n(e) {
        return {
          type: r.o,
          data: e,
        };
      }
      function i(e) {
        return {
          type: r.r,
          data: e,
        };
      }
      function o(e) {
        let { foodId: t, isProcessing: a } = e;
        return {
          type: r.s,
          data: {
            foodId: t,
            isProcessing: a,
          },
        };
      }
      function s(e) {
        return {
          type: r.h,
          data: e,
        };
      }
      function c(e) {
        return {
          type: r.f,
          data: e,
        };
      }
      function d(e) {
        return {
          type: r.t,
          data: e,
        };
      }
      function l() {
        return {
          type: r.m,
        };
      }
      function u() {
        return {
          type: r.p,
        };
      }
      function p() {
        let {
          errorMessage: e = r.d,
          cancelButton: t = r.c,
          actionButton: a = r.b,
        } = arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : r.e;
        return {
          type: r.q,
          data: {
            errorMessage: e,
            cancelButton: t,
            actionButton: a,
          },
        };
      }
    },
    527: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        });
      const r = "favorited",
        n = () => ({
          type: r,
        });
    },
    544: function (e, t, a) {
      "use strict";
      var r = a(98),
        n = a(300),
        i = a(24);
      const o = {
          isLoading: !0,
          isFavorite: !1,
          isRemoving: !1,
          portionId: null,
          portionSize: null,
          isTracking: !1,
          portion: {},
          points: null,
          recipeSuggestions: [],
          isTrackingById: {},
          errorsById: {},
          isTrackedById: {},
          detailsById: {},
          trackedItem: {},
          isUpdating: !1,
          isUpdated: !1,
        },
        s = (e, t) => {
          let {
            itemDetails: a,
            portion: n,
            portionId: i,
            quantity: o,
            ...s
          } = t;
          const d = {
              ...e.detailsById,
              [a._id]: a,
            },
            l = c(e.errorsById, a._id, {
              hasFetchError: !1,
            });
          return {
            ...e,
            detailsById: d,
            errorsById: l,
            isFavorite: a.isFavorite,
            isLoading: !1,
            portion: {
              ...e.portion,
              [a._id]: n,
            },
            portionId: i,
            portionSize: o,
            points: Object(r.a)(n, "points", null),
            ...s,
          };
        },
        c = (e, t, a) => {
          const r = {
            ...(e[t] || {
              hasFetchError: !1,
              hasUpdateError: !1,
              hasTrackError: !1,
              hasUntrackError: !1,
              hasDeleteError: !1,
              hasFavoritingError: !1,
            }),
            ...a,
          };
          return {
            ...e,
            [t]: r,
          };
        },
        d = (e, t) => {
          const { scope: a, item: r, isError: n } = t.data,
            o = {},
            s = {};
          switch (a) {
            case i.w:
              (s.hasTrackError = n), (o.isTracking = !1);
              break;
            case i.d:
            case i.b:
              s.hasFetchError = n;
              break;
            case i.x:
              (s.hasUpdateError = n), (o.isUpdating = !1);
              break;
            case i.v:
              s.hasFavoritingError = n;
              break;
            case i.a:
              (s.hasUntrackError = n), (o.isRemoving = !1);
              break;
            case i.g:
              (s.hasDeleteError = n), (o.isRemoving = !1);
          }
          const d = c(e.errorsById, r._id, s);
          return {
            ...e,
            errorsById: d,
            isLoading: !1,
            ...o,
          };
        };
      var l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case i.j: {
              const a = t.data.item;
              let { portionId: r, quantity: i } = Object(n.i)(a);
              const o = t.data.options && t.data.options.preloadDetails;
              o && o.entryId && ((r = o.portionId), (i = o.portionSize));
              const c = Object(n.a)(a, i, r);
              return s(e, {
                itemDetails: a,
                portion: c,
                portionId: r,
                quantity: i,
              });
            }
            case i.t: {
              const a = t.data;
              return {
                ...e,
                isUpdated: a,
              };
            }
            case i.r: {
              const { itemDetails: a, trackedItem: r } = t.data;
              let i, o;
              if (r) (i = r.portionSize), (o = r.portionId);
              else {
                const e = Object(n.i)(a);
                (i = e.portionSize), (o = e.portionId);
              }
              const c = Object(n.a)(a, i, o);
              return s(e, {
                itemDetails: a,
                portion: c,
                portionId: o,
                quantity: i,
                trackedItem: r,
              });
            }
            case i.u: {
              const { isUpdating: a, item: r } = t.data;
              if (a) {
                const t = c(e.errorsById, r._id, {
                  hasUpdateError: !1,
                });
                return {
                  ...e,
                  isUpdating: a,
                  errorsById: t,
                };
              }
              return {
                ...e,
                isUpdating: a,
              };
            }
            case i.d: {
              const a = !!e.detailsById[t.data.item._id];
              return {
                ...e,
                isLoading: !a,
              };
            }
            case i.b: {
              const a = !!e.detailsById[t.data._id];
              return {
                ...e,
                isLoading: !a,
              };
            }
            case i.q: {
              const { id: a, isTracked: r } = t.data,
                n = {
                  ...e.isTrackedById,
                  [a]: r,
                };
              return {
                ...e,
                isTrackedById: n,
              };
            }
            case i.v: {
              const a = c(e.errorsById, t.data.item._id, {
                hasFavoritingError: !1,
              });
              return {
                ...e,
                errorsById: a,
              };
            }
            case i.h:
              return d(e, t);
            case i.i:
              return {
                ...e,
                isFavorite: t.data,
              };
            case i.n: {
              const { isRemoving: a, item: r } = t.data;
              if (a) {
                const t = c(e.errorsById, r._id, {
                  hasUntrackError: !1,
                  hasDeleteError: !1,
                });
                return {
                  ...e,
                  isRemoving: a,
                  errorsById: t,
                };
              }
              return {
                ...e,
                isRemoving: a,
              };
            }
            case i.s: {
              const { isTracking: a, id: r } = t.data,
                n = c(e.errorsById, r, {
                  hasTrackError: !1,
                }),
                i = {
                  ...e.isTrackingById,
                  [r]: a,
                };
              return {
                ...e,
                isTracking: a,
                isTrackingById: i,
                errorsById: n,
              };
            }
            case i.l:
              return {
                ...e,
                ...(t.data.entryId && {
                  trackedItem: t.data,
                }),
                portionId: t.data.portionId,
                portionSize: t.data.quantity,
                points: t.data.points,
              };
            case i.k:
              const a = {
                ...e.portion,
                [t.data.itemId]: t.data.portion,
              };
              return {
                ...e,
                portion: a,
                points: t.data.portion.points,
              };
            case i.p:
              return {
                ...e,
                portionId: t.data.portionId,
                portionSize: t.data.portionSize,
              };
            case i.m:
              return {
                ...e,
                recipeSuggestions: t.data,
              };
            case i.o:
              return {
                ...e,
                saveAsMealMetadata: t.data,
              };
            default:
              return e;
          }
        },
        u = a(3),
        p = a(520),
        m = a(309),
        b = a(56),
        h = a(205),
        O = function* () {
          yield Object(u.i)(i.p, function* (e) {
            const { itemId: t, portionId: a, portionSize: r } = e.data,
              i = yield Object(u.f)((e) => e.foodDetail.detailsById[t]),
              o = Object(n.a)(i, r, a);
            yield Object(u.e)(Object(b.k)(o, t));
            try {
              Object(h.c)({
                food_points: o.points,
              });
            } catch (s) {}
          });
        },
        f = a(90);
      function* E(e, t) {
        const a = `/api/v3/cmx/members/~/trackedFoods/${e}/${t}`,
          r = yield Object(u.b)(f.a, a, {
            params: {
              fullDetails: !0,
            },
          });
        if (r.ok) {
          return yield r.json();
        }
        return null;
      }
      var y = function* () {
          yield Object(u.i)(i.d, function* (e) {
            const { trackedDate: t, entryId: a, item: r } = e.data;
            try {
              const [e, n] = yield Object(u.a)([
                Object(u.b)(E, t, a),
                Object(u.b)(p.b, r),
              ]);
              yield Object(u.e)(
                Object(b.i)({
                  itemDetails: n,
                  trackedItem: e,
                })
              );
            } catch (n) {
              yield Object(u.e)(Object(b.g)(i.d, r));
            }
          });
        },
        j = a(185),
        g = a(7),
        C = a(16),
        _ = a(10),
        v = a(160);
      function* I(e) {
        const t = `/api/v3/cmx/members/~/trackedFoods/${e.trackedItem.trackedDate}/${e.trackedItem.entryId}`,
          a = {
            method: "PATCH",
            body: {
              ...e.trackedItem,
              portionId: e.portionId,
              portionSize: e.portionSize,
              timeOfDay: e.timeOfDay,
            },
          };
        try {
          return 204 === (yield Object(f.a)(t, a)).status;
        } catch (r) {
          return !1;
        }
      }
      function* N(e) {
        const {
            date: t,
            item: a,
            portionId: r,
            portionSize: n,
            timeOfDay: i,
            trackedItem: o,
          } = e,
          s = {
            date: t,
            item: a,
            portionId: r,
            portionSize: n,
            timeOfDay: i,
          };
        try {
          return (
            yield Object(u.b)(j.b, o.trackedDate, [o]),
            yield Object(u.b)(m.b, s),
            !0
          );
        } catch (c) {
          return !1;
        }
      }
      function* R(e, t, a) {
        e
          ? yield Object(u.a)([
              Object(u.b)(v.b, Object(_.b)(a), {
                multiple: !0,
              }),
              Object(u.b)(v.b, t, {
                multiple: !0,
              }),
            ])
          : yield Object(u.b)(v.b, t);
      }
      function* T(e, t) {
        e && (yield Object(u.e)(Object(C.g)(t)));
        (yield Object(u.f)((e) => e.app.history)).push(g.a.myDay);
      }
      var A = function* () {
          yield Object(u.i)(i.x, function* (e) {
            const { date: t, trackedItem: a, item: r } = e.data.request;
            yield Object(u.e)(Object(b.t)(!0, r));
            const n = e.data.options,
              o = a.trackedDate !== t.toDateString(),
              s = o ? N : I;
            (yield Object(u.b)(s, e.data.request))
              ? (n.refreshFoodLog &&
                  (yield Object(u.b)(R, o, t, a.trackedDate)),
                n.redirect && (yield Object(u.b)(T, o, t)),
                yield Object(u.e)(Object(b.t)(!1, r)),
                yield Object(u.e)(Object(b.s)(!0)),
                yield Object(u.c)(3e3),
                yield Object(u.e)(Object(b.s)(!1)))
              : yield Object(u.e)(Object(b.g)(i.x, r));
          });
        },
        F = a(458),
        D = a(527);
      var S = function* (e) {
          yield Object(u.j)(i.v, function* (e) {
            const t = e.data.isFavorite,
              a = e.data.item;
            yield Object(u.e)(Object(b.h)(t));
            try {
              if (t) {
                const [e, r] = yield Object(u.f)((e) => [
                    e.foodDetail.portionId,
                    e.foodDetail.portionSize,
                  ]),
                  i = (yield (function* (e, t, a) {
                    const r = Object(n.g)(e, t),
                      i = {
                        method: "POST",
                        body: {
                          name: e.name,
                          _id: e._id,
                          versionId: e.versionId,
                          sourceId: e.sourceId,
                          sourceType: e.sourceType,
                          points: e.points,
                          isPowerFood: !!e.isPowerFood,
                          quantity: a,
                          sourcePortionId: r ? r.sourceId : null,
                          portionId: r ? r._id : null,
                        },
                      },
                      o = yield Object(f.a)(
                        "/api/v3/cmx/members/~/favorite-foods",
                        i
                      );
                    if (201 !== o.status) throw Object(F.a)();
                    return yield o.json();
                  })(a, e, r)).success,
                  o = i.id;
                yield Object(u.e)(
                  Object(b.j)({
                    ...a,
                    favoriteEntry: i,
                    isFavorite: t,
                    favoriteEntryId: o,
                  })
                );
              } else
                yield (function* (e) {
                  const t = e.favoriteEntryId || e.entryId;
                  if (
                    200 !==
                    (yield Object(f.a)(
                      `/api/v3/cmx/members/~/favorite-foods/${e.sourceId}/${e.sourceType}/${t}`,
                      {
                        method: "DELETE",
                      }
                    )).status
                  )
                    throw Object(F.a)();
                })(a);
              yield Object(u.e)(Object(D.b)());
            } catch (r) {
              yield Object(u.e)(Object(b.h)(!t)),
                yield Object(u.e)(Object(b.g)(i.v, a));
            }
          });
        },
        U = a(25);
      function* k(e) {
        let t = "/api/v3/cmx/members/~/custom-foods/foods/" + e._id;
        const a = new Set([200, 204]);
        !0 === e.isScanned &&
          (t = "/api/v2/cmx/operations/members/~/foods/" + e._id);
        const r = yield Object(f.a)(t, {
          method: "DELETE",
        });
        if (!a.has(r.status)) throw new Error();
      }
      function* L(e) {
        const t = "/api/v3/cmx/members/~/custom-foods/recipes/" + e._id,
          a = {
            method: "DELETE",
          };
        try {
          if (204 !== (yield Object(f.a)(t, a)).status) throw new Error();
          return !0;
        } catch (r) {
          throw Object(F.a)();
        }
      }
      function* B(e) {
        const t = "/api/v3/cmx/members/~/custom-foods/meals/" + e._id,
          a = {
            method: "DELETE",
          };
        try {
          if (204 !== (yield Object(f.a)(t, a)).status) throw new Error();
          return !0;
        } catch (r) {
          throw Object(F.a)();
        }
      }
      var w = function* () {
          yield Object(u.i)(i.g, function* (e) {
            const t = e.data;
            try {
              yield Object(u.e)(Object(b.n)(!0, t)),
                Object(U.b)(t) && (yield Object(u.b)(k, t)),
                Object(U.f)(t) && (yield Object(u.b)(L, t)),
                Object(U.c)(t) && (yield Object(u.b)(B, t)),
                yield Object(u.e)(Object(b.f)());
              (yield Object(u.f)((e) => e.app.history)).push(g.a.search),
                yield Object(u.e)(
                  Object(C.n)({
                    keywords: "",
                  })
                ),
                yield Object(u.c)(500),
                yield Object(u.e)(Object(b.n)(!1, t));
            } catch (a) {
              yield Object(u.e)(Object(b.g)(i.g, t));
            }
          });
        },
        P = a(878),
        M = a(481),
        x = a(1375),
        V = a(298);
      const q = {
        "food_dietary consideration": 10,
        "food_main ingredient": 8,
        food_course: 4,
        "food_dish type": 2,
        food_cuisines: 1,
      };
      var W = function* () {
        yield Object(u.i)(i.c, function (e) {
          let { data: t } = e;
          return (function* () {
            const { tags: e, itemId: a, program: r } = t;
            try {
              const t = ((e) =>
                  Object(V.a)(
                    e,
                    (e, t) => (
                      t.tags.forEach((a) => {
                        e.push(`contentTags.${t.tagType}.tags:${a.trim()}`);
                      }),
                      e
                    ),
                    ["_type:Recipe"]
                  ))(
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 2;
                    const a = Object(P.a)(e, (e) => !!q[e.tagType]),
                      r = Object(M.a)(
                        a,
                        (e) => ((e.score = q[e.tagType] || 0), e)
                      ),
                      n = Object(x.a)(r, "score"),
                      i = n.slice(0, t);
                    return i;
                  })(e)
                ),
                o = "/api/v3/search/generic",
                s = {
                  method: "GET",
                  params: {
                    analyticsTags: "W",
                    attributesToRetrieve:
                      "_id,sourceType,name,_displayName,images.SQUARE600.url,points,pointsInfo",
                    cmxIndex: "FOOD-S-FEAT",
                    facetFilters: t,
                    hitsPerPage: 4,
                    numericFilters: "(images.SQUARE600.width > 0)",
                    page: 0,
                    query: "",
                    attributesToHighlight: "none",
                    program: r,
                  },
                },
                c = yield Object(f.a)(o, s);
              if (!c.ok) throw new Error("Server error");
              const d = yield c.json(),
                l = ((e) =>
                  e.map((e) => {
                    return {
                      _id: e._id,
                      sourceType: e.sourceType,
                      name: e._displayName || e.name,
                      points: e.points,
                      imageUrl: e.images.SQUARE600.url,
                      images: e.images,
                      slugifiedName:
                        ((t = e.name.toLowerCase()),
                        t
                          .replace(/[^a-z0-9 -]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/-+/g, "-")),
                      pointsInfo: e.pointsInfo,
                    };
                    var t;
                  }))(
                  ((n = d.hits), (i = a), Object(P.a)(n, (e) => e._id !== i))
                );
              yield Object(u.e)(Object(b.m)(l));
            } catch (o) {}
            var n, i;
          })();
        });
      };
      function* z() {
        yield Object(u.a)([
          Object(u.d)(p.a),
          Object(u.d)(m.a),
          Object(u.d)(O),
          Object(u.d)(y),
          Object(u.d)(A),
          Object(u.d)(j.a),
          Object(u.d)(S),
          Object(u.d)(w),
          Object(u.d)(W),
        ]);
      }
      t.a = function () {
        return {
          id: "foodDetail",
          reducerMap: {
            foodDetail: l,
          },
          sagas: [z],
          retained: !0,
        };
      };
    },
    547: function (e, t, a) {
      "use strict";
      var r = a(3),
        n = a(90),
        i = a(458),
        o = a(50),
        s = a(154);
      t.a = function* (e, t) {
        const a = `/api/v3/cmx/operations/business/~/calculate-points/${e}?program=${yield Object(
            r.f
          )((e) => e.app.program)}`,
          c = {
            method: "POST",
            body: t,
          },
          d = yield Object(n.a)(a, c);
        if (!d.ok) throw Object(i.a)();
        const l = yield d.json();
        if (!Object(o.a)(l) || !Object(s.a)(l, "points")) throw Object(i.a)();
        return l.points;
      };
    },
    558: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return d;
      });
      var r = a(3),
        n = a(505),
        i = a(526),
        o = a(7),
        s = a(90);
      function* c(e) {
        (yield Object(r.f)((e) => e.app.history)).push(o.a.foodDetail(e));
      }
      function* d(e) {
        try {
          const t = "/api/v3/cmx/members/~/scanned-foods",
            a = yield Object(r.f)((e) => e.barcodeScanner.barcode),
            { food: n, barcode: i } = e,
            { _id: o, versionId: c, sourceType: d } = n,
            l = i || a;
          if (!l) {
            throw new Error("No barcode to index");
          }
          const u = {
              method: "POST",
              body: {
                gtin: l,
                foodId: o,
                versionId: c,
                mappedCollection: d.toUpperCase(),
              },
            },
            p = yield Object(s.a)(t, u);
          return yield p.json();
        } catch (t) {
          console.log(t);
        }
      }
      function l(e) {
        let { food: t } = e;
        return (function* () {
          const { _id: e } = t;
          yield Object(r.e)(
            Object(i.g)({
              isProcessing: !0,
              foodId: e,
            })
          ),
            yield Object(r.b)(d, {
              food: t,
            }),
            yield Object(r.b)(c, t),
            yield Object(r.e)(
              Object(i.g)({
                isProcessing: !1,
                foodId: e,
              })
            );
        })();
      }
      t.a = function* () {
        yield Object(r.i)(n.h, function* (e) {
          yield Object(r.b)(l, {
            food: e.data,
          });
        });
      };
    },
    559: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        i = a(598),
        o = a.n(i),
        s = a(2),
        c = a(1),
        d = a.n(c);
      class l extends r.Component {
        render() {
          return n.a.createElement(
            "div",
            {
              className: o.a.header,
            },
            n.a.createElement(
              "h2",
              {
                className: "ww eyebrow-3",
              },
              Object(s.b)(this.props.eyebrow)
            ),
            n.a.createElement(
              "h1",
              {
                className: d()("ww headline-4 breakWord"),
              },
              Object(s.b)(this.props.title)
            )
          );
        }
      }
      (l.defaultProps = {
        eyebrow: "",
        title: "",
      }),
        (t.a = l);
    },
    591: function (e, t, a) {
      "use strict";
      var r = a(501);
      const n = {
        isProcessing: !1,
        error: !1,
        item: null,
        isComplete: !1,
        hasFoodCreateError: !1,
        hasFoodUpdateError: !1,
        hasCalcPointsError: !1,
        points: null,
        barcode: null,
      };
      var i = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : n,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case r.e:
              return {
                ...e,
                barcode: t.data,
              };
            case r.h:
              return {
                ...e,
                isComplete: !1,
                isProcessing: t.data,
              };
            case r.g:
              return {
                ...e,
                points: t.data,
              };
            case r.c:
              return {
                ...e,
                hasFoodCreateError: !1,
              };
            case r.j:
              return {
                ...e,
                hasFoodUpdateError: !1,
              };
            case r.a:
              return {
                ...e,
                hasCalcPointsError: !1,
              };
            case r.f:
              return {
                ...e,
                isProcessing: !1,
                hasFoodCreateError:
                  t.data.scope === r.c || e.hasFoodCreateError,
                hasFoodUpdateError:
                  t.data.scope === r.j || e.hasFoodUpdateError,
                hasCalcPointsError:
                  t.data.scope === r.a || e.hasCalcPointsError,
                error: !0,
              };
            case r.d:
              return {
                ...e,
                isComplete: !1,
                isProcessing: !1,
                error: !1,
                item: null,
                points: null,
                barcode: null,
              };
            default:
              return e;
          }
        },
        o = a(3),
        s = a(90),
        c = a(458),
        d = a(512),
        l = a(142),
        u = a(50),
        p = a(507),
        m = a(56),
        b = a(7),
        h = a(558);
      const O = (e) => {
        const t = {};
        p.a.forEach((a) => {
          t[a] = Object(l.a)(e[a]) ? parseFloat(e[a]) : null;
        }),
          (t[p.b] = Object(p.e)(e[p.b]));
        const a = {
            name: e.portionName,
            size: e.portionSize || 1,
            default: !0,
            isActive: !0,
            nutrition: t,
          },
          r = {
            _id: e._id,
            versionId: e.versionId || null,
            name: e.name || "",
            portions: [a],
          },
          { barcode: n } = e;
        return n && (r.barcode = n), r;
      };
      function* f(e) {
        const t = {
            method: "POST",
            body: O(e),
          },
          a = yield Object(o.b)(
            y,
            "/api/v3/cmx/members/~/custom-foods/foods",
            t,
            201
          ),
          { gtin: r } = a;
        return (
          r &&
            (yield Object(o.b)(h.b, {
              food: a,
              barcode: r,
            })),
          a
        );
      }
      function* E(e) {
        const t = "/api/v3/cmx/members/~/custom-foods/foods/" + e._id;
        delete e.barcode;
        const a = {
          method: "PUT",
          body: e,
        };
        return yield Object(o.b)(y, t, a, 201);
      }
      function* y(e, t, a) {
        try {
          const r = yield Object(s.a)(e, t);
          if (r.status !== a) throw new Error();
          const n = yield r.json();
          if (!Object(u.a)(n)) throw new Error();
          return n;
        } catch (r) {
          throw Object(c.a)();
        }
      }
      function* j(e) {
        yield Object(o.e)(Object(m.l)(e));
        (yield Object(o.f)((e) => e.app.history)).push(b.a.foodDetail(e));
      }
      function g(e) {
        let { type: t, action: a, body: r, redirect: n, broadcast: i } = e;
        return (function* () {
          yield Object(o.e)(Object(d.h)(!0));
          try {
            const e = yield Object(o.b)(a, r);
            i && (yield Object(o.e)(i(e))), n && (yield Object(o.b)(n, e));
          } catch (e) {
            yield Object(o.e)(Object(d.f)(t, e));
          }
          yield Object(o.e)(Object(d.h)(!1));
        })();
      }
      var C = function* () {
          yield Object(o.i)(r.c, function* (e) {
            yield Object(o.b)(g, {
              type: r.c,
              action: f,
              body: e.data,
              redirect: j,
              broadcast: d.c,
            });
          }),
            yield Object(o.i)(r.j, function* (e) {
              yield Object(o.b)(g, {
                type: r.j,
                action: E,
                body: e.data,
                redirect: j,
                broadcast: d.j,
              });
            });
        },
        _ = a(547),
        v = function* () {
          yield Object(o.i)(r.a, function* (e) {
            try {
              const t = {
                  name: e.data.name,
                  nutrition: e.data.nutrition,
                },
                a = yield Object(o.b)(_.a, "food", t);
              yield Object(o.e)(Object(d.g)(a));
            } catch (t) {
              yield Object(o.e)(Object(d.f)(r.a, t));
            }
          });
        };
      function* I() {
        yield Object(o.a)([Object(o.d)(C), Object(o.d)(v)]);
      }
      t.a = function () {
        return {
          id: "foodCalculator",
          reducerMap: {
            foodCalculator: i,
          },
          sagas: [I],
          retained: !0,
        };
      };
    },
    598: function (e, t, a) {
      e.exports = {
        header: "styles_header__aJ8Nm",
      };
    },
    599: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        i = a(600),
        o = a.n(i),
        s = a(307),
        c = a(187),
        d = a(300),
        l = a(32),
        u = a(1376);
      const p = Object(c.c)().map((e) => ({
          label: "0" === e ? "--" : e,
          value: e,
          numericalValue: Object(c.b)(e),
        })),
        m = (e) =>
          n.a.createElement(
            l.a,
            {
              for: e,
            },
            "Change the serving size by entering a whole number"
          );
      function b(e) {
        let {
          portionId: t,
          quantity: a,
          onChange: i,
          portions: b,
          idPrefix: h,
          hasError: O,
        } = e;
        const f = h + "-whole",
          E = h + "-fraction",
          y = h + "-portions",
          j = b || Object(d.c)(),
          [g, C, _] = Object(r.useMemo)(() => Object(c.e)(a || 0), [a]),
          v = Object(r.useRef)({
            portionId: t,
            quantity: a,
            whole: g,
            fraction: C,
          }),
          I = Object(r.useCallback)(() => {
            (v.current.quantity = v.current.fraction + v.current.whole),
              i({
                ...v.current,
              });
          }, [i]),
          N = Object(r.useCallback)(
            (e, t) => {
              (v.current.whole = t), I();
            },
            [I]
          ),
          R = Object(r.useCallback)(
            (e) => {
              (v.current.fraction = e.numericalValue), I();
            },
            [I]
          ),
          T = Object(r.useCallback)(
            (e) => {
              (v.current.portionId = e.value), I();
            },
            [I]
          );
        return n.a.createElement(
          "div",
          {
            className: o.a.container,
          },
          n.a.createElement(
            "div",
            {
              className: o.a.whole,
            },
            n.a.createElement(s.a, {
              id: f,
              placeholder: "#",
              label: m,
              defaultValue: 0 === g ? "" : g,
              onChange: N,
              error: O,
            })
          ),
          n.a.createElement(
            "div",
            {
              className: o.a.fraction,
            },
            n.a.createElement(
              l.a,
              {
                for: E,
              },
              "If you serving size has a fraction, select the fraction here."
            ),
            n.a.createElement(u.a, {
              name: E,
              id: E,
              options: p,
              value: _,
              onChange: R,
            })
          ),
          n.a.createElement(
            "div",
            {
              className: o.a.portionType,
            },
            n.a.createElement(
              l.a,
              {
                for: y,
              },
              "Select the portion type"
            ),
            n.a.createElement(u.a, {
              name: y,
              id: y,
              options: j,
              value: t || "",
              onChange: T,
            })
          )
        );
      }
      (b.defaultProps = {
        idPrefix: "serving",
        quantity: "",
        portionId: null,
        portions: null,
        onChange: () => {},
      }),
        (t.a = b);
    },
    600: function (e, t, a) {
      e.exports = {
        container: "styles_container__2W3Cj",
        whole: "styles_whole__Vp5kh",
        fraction: "styles_fraction__LQLEu",
        portionType: "styles_portionType__XOi_i",
      };
    },
    633: function (e, t, a) {
      e.exports = {
        row: "styles_row__krnyy",
        label: "styles_label__2CkvS",
        indented: "styles_indented__2XX_w",
        input: "styles_input__2BlZ3",
        inputColumn: "styles_inputColumn__1NH1E",
        unit: "styles_unit__2hhF6",
        points: "styles_points__2ZBCx",
        pointsLabel: "styles_pointsLabel__Ixkoz",
        list: "styles_list__w7_Yn",
        item: "styles_item__1jz3V",
        pointsServerError: "styles_pointsServerError__3aGeA",
      };
    },
    658: function (e, t, a) {
      "use strict";
      var r = a(50),
        n = a(36),
        i = function () {
          return n.a.Date.now();
        },
        o = a(326),
        s = Math.max,
        c = Math.min;
      t.a = function (e, t, a) {
        var n,
          d,
          l,
          u,
          p,
          m,
          b = 0,
          h = !1,
          O = !1,
          f = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function E(t) {
          var a = n,
            r = d;
          return (n = d = void 0), (b = t), (u = e.apply(r, a));
        }
        function y(e) {
          return (b = e), (p = setTimeout(g, t)), h ? E(e) : u;
        }
        function j(e) {
          var a = e - m;
          return void 0 === m || a >= t || a < 0 || (O && e - b >= l);
        }
        function g() {
          var e = i();
          if (j(e)) return C(e);
          p = setTimeout(
            g,
            (function (e) {
              var a = t - (e - m);
              return O ? c(a, l - (e - b)) : a;
            })(e)
          );
        }
        function C(e) {
          return (p = void 0), f && n ? E(e) : ((n = d = void 0), u);
        }
        function _() {
          var e = i(),
            a = j(e);
          if (((n = arguments), (d = this), (m = e), a)) {
            if (void 0 === p) return y(m);
            if (O) return clearTimeout(p), (p = setTimeout(g, t)), E(m);
          }
          return void 0 === p && (p = setTimeout(g, t)), u;
        }
        return (
          (t = Object(o.a)(t) || 0),
          Object(r.a)(a) &&
            ((h = !!a.leading),
            (l = (O = "maxWait" in a) ? s(Object(o.a)(a.maxWait) || 0, t) : l),
            (f = "trailing" in a ? !!a.trailing : f)),
          (_.cancel = function () {
            void 0 !== p && clearTimeout(p), (b = 0), (n = m = d = p = void 0);
          }),
          (_.flush = function () {
            return void 0 === p ? u : C(i());
          }),
          _
        );
      };
    },
    813: function (e, t, a) {
      e.exports = {
        container: "styles_container__1g0sK",
        maxWidth: "styles_maxWidth__1sTXF",
        centeredLoader: "styles_centeredLoader__21g3a",
      };
    },
    874: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        i = a(633),
        o = a.n(i),
        s = a(2),
        c = a(1),
        d = a.n(c),
        l = a(507),
        u = a(460),
        p = a(32);
      class m extends r.PureComponent {
        render() {
          const e = d()({
              [o.a.label]: !0,
              [o.a.indented]: this.props.indented,
            }),
            t = Object(l.h)(this.props.name);
          return n.a.createElement(
            "label",
            {
              className: e,
              htmlFor: this.props.name,
            },
            Object(s.b)(this.props.label),
            "calories" !== this.props.name &&
              n.a.createElement(p.a, null, "in grams"),
            n.a.createElement(
              "span",
              {
                className: o.a.unit,
                "aria-hidden": "true",
              },
              Object(s.b)(t)
            )
          );
        }
      }
      var b = m;
      const h = {
        protein: "NUI.CALCULATOR.ERROR.CALORIE_PROTEIN_RATIO",
        saturatedFat: "NUI.CALCULATOR.ERROR.FATS_RATIO",
        sugar: "NUI.CALCULATOR.ERROR.CARB_SUGAR_RATIO",
        fiber: "NUI.CALCULATOR.ERROR.CARB_FIBER_RATIO",
      };
      class O extends r.PureComponent {
        render() {
          return h[this.props.name]
            ? n.a.createElement(
                u.a,
                {
                  "data-test": "error-" + this.props.name,
                },
                Object(s.b)(h[this.props.name])
              )
            : null;
        }
      }
      var f = O,
        E = a(519);
      var y = function (e) {
          let {
            name: t,
            indented: a,
            label: i,
            market: c,
            mask: d,
            hasError: u,
            onChange: p,
            required: m,
            value: h,
          } = e;
          const O = t === l.b && Object(l.i)(c);
          O && h > 0 && (h = parseFloat(Object(l.d)(h).toFixed(2)));
          const y = Object(r.useRef)(h),
            j = m
              ? Object(s.b)("NUI.NUTRITIONAL_FORM.FIELD.REQUIRED")
              : Object(s.b)("NUI.NUTRITIONAL_FORM.FIELD.OPTIONAL");
          return n.a.createElement(
            "div",
            {
              className: o.a.row,
            },
            n.a.createElement(b, {
              name: t,
              indented: a,
              label: i,
            }),
            n.a.createElement(
              "div",
              {
                className: o.a.input,
              },
              n.a.createElement(E.a, {
                market: c,
                id: t,
                mask: d,
                name: t,
                error: u,
                onChange: (e, t) => {
                  (y.current = e.target.value), p(e, O ? Object(l.j)(t) : t);
                },
                defaultValue: null === y.current ? "" : y.current,
                placeholder: j,
                autoComplete: "off",
              }),
              u &&
                null !== y.current &&
                n.a.createElement(f, {
                  name: t,
                })
            )
          );
        },
        j = a(48);
      var g = function (e) {
          let { points: t, className: a, program: r } = e;
          return n.a.createElement(
            "div",
            {
              className: o.a.points,
              name: "pointsValue",
            },
            n.a.createElement(
              "div",
              {
                className: d()("ww headline-6", a),
              },
              Object(s.b)("NUI.NUTRITIONAL_FORM.SMARTPOINTS_VALUE")
            ),
            n.a.createElement(j.b, {
              size: "large",
              value: t,
            }),
            n.a.createElement(
              p.a,
              {
                role: "alert",
                "aria-live": "assertive",
                "aria-atomic": "true",
              },
              t,
              " total points value"
            )
          );
        },
        C = a(73),
        _ = a(501);
      function v(e) {
        let {
          market: t,
          nutrition: a,
          className: i,
          onChange: c,
          points: p,
          program: m,
          hasCalcPointsError: b,
        } = e;
        const h = Object(C.b)(_.k),
          O = Object(r.useMemo)(() => Object(l.g)(t), [t]),
          [f, E] = Object(r.useState)(() => ({
            isValid: Object(l.k)(a, t).isValid,
          })),
          j = Object(r.useCallback)(
            (e, a) => {
              const { isValid: r, validations: n } = (function (e, t) {
                let a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                const {
                    requiresAttention: r,
                    requiredFields: n,
                    isValid: i,
                  } = Object(l.k)(e, t),
                  o = {
                    ...r,
                  };
                return (
                  a &&
                    n.forEach((e) => {
                      o[e] = !0;
                    }),
                  {
                    isValid: i,
                    validations: o,
                  }
                );
              })(e, t, a);
              return (
                E({
                  isValid: r,
                  ...n,
                }),
                r
              );
            },
            [t]
          );
        Object(r.useEffect)(() => h.listen(() => j(a, !0)), [h, j, a]);
        const v = (e, t) => {
          const r = e.target.name,
            n = {
              ...a,
              [r]: t,
            },
            i = j(n);
          c(n, i);
        };
        return n.a.createElement(
          "div",
          {
            className: d()(o.a.container, i),
          },
          n.a.createElement(
            "ul",
            {
              className: o.a.list,
              "aria-label": Object(s.b)("NUI.NUTRITIONAL_FORM.TITLE"),
            },
            O.map((e) =>
              n.a.createElement(
                "li",
                {
                  key: e.name,
                  className: o.a.item,
                },
                n.a.createElement(
                  y,
                  Object.assign({}, e, {
                    market: t,
                    hasError: f[e.name],
                    value: a[e.name],
                    onChange: v,
                  })
                )
              )
            )
          ),
          n.a.createElement(g, {
            points: f.isValid ? p : null,
            className: o.a.pointsLabel,
            program: m,
          }),
          b &&
            n.a.createElement(
              "div",
              {
                className: o.a.pointsServerError,
              },
              n.a.createElement(
                u.a,
                {
                  "data-test": "calculation-failure",
                },
                Object(s.b)("NUI.CALCULATOR.ERROR.SERVER")
              )
            )
        );
      }
      v.defaultProps = {
        market: null,
        points: null,
        nutrition: {},
        onChange: () => {},
      };
      var I = v,
        N = a(87),
        R = a(302),
        T = a(599),
        A = a(310),
        F = a(462),
        D = a(472),
        S = a(987),
        U = a.n(S),
        k = a(300),
        L = a(658),
        B = a(478),
        w = a(305);
      class P extends r.Component {
        constructor(e) {
          super(e),
            (this.onNameChange = this.onNameChange.bind(this)),
            (this.onServingsChange = this.onServingsChange.bind(this)),
            (this.onNutritionChange = this.onNutritionChange.bind(this)),
            (this.save = this.save.bind(this)),
            (this.debouncedChangedEvent = Object(L.a)(
              this.didChange.bind(this),
              500
            )),
            (this.state = {
              name: e.name || Object(s.b)("NUI.CALCULATOR.DEFAULT_FOOD_NAME"),
              quantity: e.quantity,
              portionId: e.portionId,
              nutrition: e.nutrition,
              ...this.validate(e),
              isValidName: !0,
            });
        }
        isValidName(e) {
          return !Object(B.a)(e);
        }
        isValidNutrition(e) {
          return Object(l.k)(e, this.props.market).isValid;
        }
        isValidServings(e) {
          return e > 0;
        }
        validate(e) {
          e || (e = this.state);
          const t = this.isValidName(e.name),
            a = this.isValidNutrition(e.nutrition),
            r = this.isValidServings(e.quantity);
          return {
            isValid: t && a && r,
            isValidName: t,
            isValidNutrition: a,
            isValidServings: r,
          };
        }
        broadcastNameChange() {
          "PT-BR" === this.props.market
            ? this.debouncedChangedEvent()
            : this.didChange();
        }
        onNameChange(e) {
          const t = e.target.value,
            a = this.isValidName(t);
          this.setState(
            {
              name: t,
              isValidName: a,
            },
            () => {
              this.broadcastNameChange();
            }
          );
        }
        onServingsChange(e) {
          const t = e.quantity,
            a = e.portionId,
            r = this.isValidServings(t);
          this.setState(
            {
              quantity: t,
              portionId: a,
              isValidServings: r,
            },
            () => {
              this.didChange();
            }
          );
        }
        onNutritionChange(e, t) {
          this.setState(
            {
              nutrition: e,
              isValidNutrition: t,
            },
            () => {
              this.didChange();
            }
          );
        }
        didChange() {
          const e =
            this.state.isValidName &&
            this.state.isValidNutrition &&
            this.state.isValidServings;
          this.setState(
            {
              isValid: e,
            },
            () => {
              this.props.onChange(this.state);
            }
          );
        }
        scrollToNutritionInput() {
          const e = Object(l.k)(this.state.nutrition, this.props.market);
          let t;
          (t = e.isComplete
            ? Object.keys(e.requiresAttention)[0]
            : e.requiredFields[0]),
            Object(w.b)(t);
        }
        save() {
          const e = this.validate();
          if (e.isValid) return this.props.onSave(this.state);
          switch ((this.setState(e), !0)) {
            case !e.isValidNutrition:
              Object(C.a)(_.k), this.scrollToNutritionInput();
              break;
            case !e.isValidName:
              Object(w.b)("name");
              break;
            case !e.isValidServings:
              Object(w.b)("serving-whole");
          }
        }
        getCreateCta() {
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              {
                className: U.a.cta,
              },
              n.a.createElement(
                R.a,
                {
                  kind: "primary",
                  fillMobile: !0,
                  onClick: this.save,
                  pendingWhen: "foodCalculator.isProcessing",
                  completeWhen: "foodCalculator.isComplete",
                  "data-analytics": "create_food",
                  id: "create-food",
                },
                n.a.createElement(A.a, {
                  label: Object(s.b)("NUI.CALCULATOR.CREATE_FOOD"),
                  points: this.state.isValid ? this.props.points : null,
                })
              )
            ),
            this.props.hasFoodCreateError &&
              n.a.createElement(
                u.a,
                {
                  className: U.a.saveError,
                  "data-test": "create-failure",
                },
                Object(s.b)("NUI.CREATE.ERROR.CREATE_FAILED")
              )
          );
        }
        getEditCta() {
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              {
                className: U.a.cta,
              },
              n.a.createElement(
                F.a,
                {
                  onClick: this.props.onCancel,
                  fillMobile: !0,
                },
                "Cancel"
              ),
              n.a.createElement(
                R.a,
                {
                  kind: "primary",
                  fillMobile: !0,
                  onClick: this.save,
                  pendingWhen: "foodCalculator.isProcessing",
                  completeWhen: "foodCalculator.isComplete",
                  pendingLabel: Object(s.b)("NUI.GENERAL.UPDATING"),
                  "data-analytics": "edit_food",
                  id: "update-food",
                },
                Object(s.b)("FOOD_DASHBOARD.CREATE_FOOD.save_button")
              )
            ),
            this.props.hasFoodUpdateError &&
              n.a.createElement(
                u.a,
                {
                  className: U.a.saveError,
                  "data-test": "update-failure",
                },
                Object(s.b)("NUI.CREATE.ERROR.UPDATE_FAILED")
              )
          );
        }
        render() {
          return n.a.createElement(
            r.Fragment,
            null,
            n.a.createElement(
              N.a,
              null,
              n.a.createElement(
                "h3",
                {
                  className: "ww headline-6",
                },
                Object(s.b)("NUI.NUTRITIONAL_FORM.TITLE")
              ),
              n.a.createElement(I, {
                className: U.a.nutritionForm,
                points: this.props.points,
                market: this.props.market,
                nutrition: this.state.nutrition,
                onChange: this.onNutritionChange,
                program: this.props.program,
                hasCalcPointsError: this.props.hasCalcPointsError,
              }),
              n.a.createElement(
                "div",
                {
                  className: U.a.row,
                },
                n.a.createElement(
                  "div",
                  {
                    className: U.a.label,
                  },
                  n.a.createElement(
                    "label",
                    {
                      htmlFor: "name",
                      className: "ww headline-6",
                    },
                    Object(s.b)("NUI.CALCULATOR.FOOD_NAME_LABEL")
                  )
                ),
                n.a.createElement(
                  "div",
                  {
                    className: U.a.value,
                  },
                  n.a.createElement(D.a, {
                    type: "text",
                    name: "name",
                    id: "name",
                    onChange: this.onNameChange,
                    value: this.state.name,
                    error: !this.state.isValidName,
                  }),
                  !this.state.isValidName &&
                    n.a.createElement(
                      u.a,
                      {
                        "data-test": "name-failure",
                      },
                      Object(s.b)(
                        "FOOD_DASHBOARD.CREATE_FOOD.ERROR_NAME_REQUIRED"
                      )
                    )
                )
              ),
              n.a.createElement(
                "div",
                {
                  className: U.a.row,
                },
                n.a.createElement(
                  "div",
                  {
                    className: U.a.label,
                  },
                  n.a.createElement(
                    "label",
                    {
                      htmlFor: "serving-whole",
                      className: "ww headline-6",
                    },
                    Object(s.b)("NUI.CALCULATOR.SERVING_LABEL")
                  )
                ),
                n.a.createElement(T.a, {
                  idPrefix: "serving",
                  quantity: this.state.quantity,
                  portionId: this.state.portionId,
                  onChange: this.onServingsChange,
                  hasError: !this.state.isValidServings,
                })
              ),
              "create" === this.props.mode
                ? this.getCreateCta()
                : this.getEditCta()
            ),
            this.props.isMyWW &&
              n.a.createElement(
                "div",
                {
                  className: d()("ww copy-3", U.a.mismatchMessage),
                },
                n.a.createElement(
                  "p",
                  null,
                  Object(s.b)("NUI.CALCULATOR.SP_MISMATCH_WARNING")
                ),
                n.a.createElement(
                  "p",
                  null,
                  Object(s.b)("NUI.CALCULATOR.SUGAR_ESTIMATION_CLAIM")
                )
              )
          );
        }
      }
      P.defaultProps = {
        name: "",
        mode: "create",
        points: null,
        program: null,
        quantity: Object(k.d)(),
        portionId: Object(k.b)(),
        onCancel: () => {},
        nutrition: l.c,
        isMyWW: !0,
      };
      t.a = P;
    },
    987: function (e, t, a) {
      e.exports = {
        header: "styles_header__89sY6",
        mismatchMessage: "styles_mismatchMessage__1ZA1_",
        nutritionForm: "styles_nutritionForm__1CQAt",
        row: "styles_row__230pK",
        label: "styles_label__1xq-C",
        value: "styles_value__2BMeI",
        cta: "styles_cta__3xpiZ",
        saveError: "styles_saveError__1bb5f",
      };
    },
  },
]);
//# sourceMappingURL=foodCalculator.bd23e315.chunk.js.map
