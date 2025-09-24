import {
  ViewportRuler
} from "./chunk-RUUROQG7.js";
import "./chunk-6BCOQWW5.js";
import {
  MatCommonModule,
  mixinColor
} from "./chunk-XHU5VVPE.js";
import "./chunk-SJJF4QDK.js";
import "./chunk-SBY7732J.js";
import {
  Platform,
  _getShadowRoot,
  coerceNumberProperty
} from "./chunk-EHHKKOZA.js";
import "./chunk-MIFHBWRF.js";
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase
} from "./chunk-45LJDHJL.js";
import {
  DOCUMENT
} from "./chunk-VR4PK7UF.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-HBZACKLO.js";
import {
  Subscription
} from "./chunk-JJFP6CAS.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2020/progress-spinner.mjs
function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const svg_r2 = ɵɵreference(1);
    ɵɵstyleProp("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%")("transform-origin", ctx_r0._getCircleTransformOrigin(svg_r2));
    ɵɵattribute("r", ctx_r0._getCircleRadius());
  }
}
function MatProgressSpinner__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const svg_r2 = ɵɵreference(1);
    ɵɵstyleProp("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%")("transform-origin", ctx_r0._getCircleTransformOrigin(svg_r2));
    ɵɵattribute("r", ctx_r0._getCircleRadius());
  }
}
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var _MatProgressSpinnerBase = mixinColor(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}, "primary");
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
var INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
var MatProgressSpinner = class _MatProgressSpinner extends _MatProgressSpinnerBase {
  constructor(elementRef, _platform, _document, animationMode, defaults, changeDetectorRef, viewportRuler, ngZone) {
    super(elementRef);
    this._document = _document;
    this._diameter = BASE_SIZE;
    this._value = 0;
    this._resizeSubscription = Subscription.EMPTY;
    this.mode = "determinate";
    const trackedDiameters = _MatProgressSpinner._diameters;
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
    if (!trackedDiameters.has(_document.head)) {
      trackedDiameters.set(_document.head, /* @__PURE__ */ new Set([BASE_SIZE]));
    }
    this._noopAnimations = animationMode === "NoopAnimations" && !!defaults && !defaults._forceAnimations;
    if (elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner") {
      this.mode = "indeterminate";
    }
    if (defaults) {
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
    if (_platform.isBrowser && _platform.SAFARI && viewportRuler && changeDetectorRef && ngZone) {
      this._resizeSubscription = viewportRuler.change(150).subscribe(() => {
        if (this.mode === "indeterminate") {
          ngZone.run(() => changeDetectorRef.markForCheck());
        }
      });
    }
  }
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = coerceNumberProperty(size);
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
    if (this._styleRoot) {
      this._attachStyleNode();
    }
  }
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth || this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = coerceNumberProperty(value);
  }
  /** Value of the progress circle. */
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(newValue) {
    this._value = Math.max(0, Math.min(100, coerceNumberProperty(newValue)));
  }
  ngOnInit() {
    const element = this._elementRef.nativeElement;
    this._styleRoot = _getShadowRoot(element) || this._document.head;
    this._attachStyleNode();
    element.classList.add("mat-progress-spinner-indeterminate-animation");
  }
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** The radius of the spinner, adjusted for stroke width. */
  _getCircleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _getViewBox() {
    const viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _getStrokeCircumference() {
    return 2 * Math.PI * this._getCircleRadius();
  }
  /** The dash offset of the svg circle. */
  _getStrokeDashOffset() {
    if (this.mode === "determinate") {
      return this._getStrokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _getCircleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  /** Gets the `transform-origin` for the inner circle element. */
  _getCircleTransformOrigin(svg) {
    const scale = (svg.currentScale ?? 1) * 50;
    return `${scale}% ${scale}%`;
  }
  /** Dynamically generates a style tag containing the correct animation for this diameter. */
  _attachStyleNode() {
    const styleRoot = this._styleRoot;
    const currentDiameter = this._diameter;
    const diameters = _MatProgressSpinner._diameters;
    let diametersForElement = diameters.get(styleRoot);
    if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
      const styleTag = this._document.createElement("style");
      styleTag.setAttribute("mat-spinner-animation", this._spinnerAnimationLabel);
      styleTag.textContent = this._getAnimationText();
      styleRoot.appendChild(styleTag);
      if (!diametersForElement) {
        diametersForElement = /* @__PURE__ */ new Set();
        diameters.set(styleRoot, diametersForElement);
      }
      diametersForElement.add(currentDiameter);
    }
  }
  /** Generates animation styles adjusted for the spinner's diameter. */
  _getAnimationText() {
    const strokeCircumference = this._getStrokeCircumference();
    return INDETERMINATE_ANIMATION_TEMPLATE.replace(/START_VALUE/g, `${0.95 * strokeCircumference}`).replace(/END_VALUE/g, `${0.2 * strokeCircumference}`).replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
  }
  /** Returns the circle diameter formatted for use with the animation-name CSS property. */
  _getSpinnerAnimationLabel() {
    return this.diameter.toString().replace(".", "_");
  }
};
MatProgressSpinner._diameters = /* @__PURE__ */ new WeakMap();
MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatProgressSpinner)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(NgZone));
};
MatProgressSpinner.ɵcmp = ɵɵdefineComponent({
  type: MatProgressSpinner,
  selectors: [["mat-progress-spinner"], ["mat-spinner"]],
  hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-progress-spinner", "mat-spinner"],
  hostVars: 10,
  hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
      ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
      ɵɵclassProp("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    color: "color",
    diameter: "diameter",
    strokeWidth: "strokeWidth",
    mode: "mode",
    value: "value"
  },
  exportAs: ["matProgressSpinner"],
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 8,
  consts: [["svg", ""], ["preserveAspectRatio", "xMidYMid meet", "focusable", "false", "aria-hidden", "true", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
  template: function MatProgressSpinner_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 1, 0);
      ɵɵtemplate(2, MatProgressSpinner__svg_circle_2_Template, 1, 11, "circle", 2)(3, MatProgressSpinner__svg_circle_3_Template, 1, 9, "circle", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
      ɵɵproperty("ngSwitch", ctx.mode === "indeterminate");
      ɵɵattribute("viewBox", ctx._getViewBox());
      ɵɵadvance(2);
      ɵɵproperty("ngSwitchCase", true);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", false);
    }
  },
  dependencies: [NgSwitch, NgSwitchCase],
  styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        // `mat-spinner` is here for backward compatibility.
        "class": "mat-progress-spinner mat-spinner",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[attr.aria-valuemin]": 'mode === "determinate" ? 0 : null',
        "[attr.aria-valuemax]": 'mode === "determinate" ? 100 : null',
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      inputs: ["color"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's
  center. The center of the circle will remain at the center of the mat-progress-spinner
  element containing the SVG.
-->
<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<svg
  [style.width.px]="diameter"
  [style.height.px]="diameter"
  [attr.viewBox]="_getViewBox()"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  [ngSwitch]="mode === 'indeterminate'"
  aria-hidden="true"
  #svg>

  <!--
    Technically we can reuse the same \`circle\` element, however Safari has an issue that breaks
    the SVG rendering in determinate mode, after switching between indeterminate and determinate.
    Using a different element avoids the issue. An alternative to this is adding \`display: none\`
    for a split second and then removing it when switching between modes, but it's hard to know
    for how long to hide the element and it can cause the UI to blink.
  -->
  <circle
    *ngSwitchCase="true"
    cx="50%"
    cy="50%"
    [attr.r]="_getCircleRadius()"
    [style.animation-name]="'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel"
    [style.stroke-dashoffset.px]="_getStrokeDashOffset()"
    [style.stroke-dasharray.px]="_getStrokeCircumference()"
    [style.stroke-width.%]="_getCircleStrokeWidth()"
    [style.transform-origin]="_getCircleTransformOrigin(svg)"></circle>

  <circle
    *ngSwitchCase="false"
    cx="50%"
    cy="50%"
    [attr.r]="_getCircleRadius()"
    [style.stroke-dashoffset.px]="_getStrokeDashOffset()"
    [style.stroke-dasharray.px]="_getStrokeCircumference()"
    [style.stroke-width.%]="_getCircleStrokeWidth()"
    [style.transform-origin]="_getCircleTransformOrigin(svg)"></circle>
</svg>
`,
      styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Platform
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: NgZone
    }];
  }, {
    diameter: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var MatProgressSpinnerModule = class {
};
MatProgressSpinnerModule.ɵfac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatProgressSpinnerModule)();
};
MatProgressSpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: MatProgressSpinnerModule,
  declarations: [MatProgressSpinner],
  imports: [MatCommonModule, CommonModule],
  exports: [MatProgressSpinner, MatCommonModule]
});
MatProgressSpinnerModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatCommonModule, CommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule],
      exports: [MatProgressSpinner, MatCommonModule],
      declarations: [MatProgressSpinner]
    }]
  }], null, null);
})();
var MatSpinner = MatProgressSpinner;
export {
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSpinner
};
/*! Bundled license information:

@angular/material/fesm2020/progress-spinner.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@angular_material_progress-spinner.js.map
