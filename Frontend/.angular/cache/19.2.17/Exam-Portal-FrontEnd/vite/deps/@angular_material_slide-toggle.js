import {
  CheckboxRequiredValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-HP6FDM2F.js";
import {
  CdkObserveContent,
  FocusMonitor,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  ObserversModule,
  mixinColor,
  mixinDisableRipple,
  mixinDisabled,
  mixinTabIndex
} from "./chunk-XHU5VVPE.js";
import "./chunk-SJJF4QDK.js";
import "./chunk-SBY7732J.js";
import {
  coerceBooleanProperty
} from "./chunk-EHHKKOZA.js";
import "./chunk-MIFHBWRF.js";
import "./chunk-45LJDHJL.js";
import "./chunk-VR4PK7UF.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-HBZACKLO.js";
import "./chunk-JJFP6CAS.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2020/slide-toggle.mjs
var _c0 = ["thumbContainer"];
var _c1 = ["toggleBar"];
var _c2 = ["input"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  enterDuration: a0
});
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false
  })
});
var nextUniqueId = 0;
var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSlideToggle),
  multi: true
};
var MatSlideToggleChange = class {
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var _MatSlideToggleBase = mixinTabIndex(mixinColor(mixinDisableRipple(mixinDisabled(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
var MatSlideToggle = class extends _MatSlideToggleBase {
  constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this.defaults = defaults;
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
    this._required = false;
    this._checked = false;
    this.name = null;
    this.id = this._uniqueId;
    this.labelPosition = "after";
    this.ariaLabel = null;
    this.ariaLabelledby = null;
    this.change = new EventEmitter();
    this.toggleChange = new EventEmitter();
    this.tabIndex = parseInt(tabIndex) || 0;
    this.color = this.defaultColor = defaults.color || "accent";
    this._noopAnimations = animationMode === "NoopAnimations";
  }
  /** Whether the slide-toggle is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = coerceBooleanProperty(value);
    this._changeDetectorRef.markForCheck();
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this._onTouched());
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Method being called whenever the underlying input emits a change event. */
  _onChangeEvent(event) {
    event.stopPropagation();
    this.toggleChange.emit();
    if (this.defaults.disableToggleValue) {
      this._inputElement.nativeElement.checked = this.checked;
      return;
    }
    this.checked = this._inputElement.nativeElement.checked;
    this._emitChangeEvent();
  }
  /** Method being called whenever the slide-toggle has been clicked. */
  _onInputClick(event) {
    event.stopPropagation();
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the slide-toggle. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(new MatSlideToggleChange(this, this.checked));
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
};
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatSlideToggle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatSlideToggle.ɵcmp = ɵɵdefineComponent({
  type: MatSlideToggle,
  selectors: [["mat-slide-toggle"]],
  viewQuery: function MatSlideToggle_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._thumbEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._thumbBarEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
    }
  },
  hostAttrs: [1, "mat-slide-toggle"],
  hostVars: 13,
  hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("tabindex", null)("aria-label", null)("aria-labelledby", null)("name", null);
      ɵɵclassProp("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex",
    name: "name",
    id: "id",
    labelPosition: "labelPosition",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    required: "required",
    checked: "checked"
  },
  outputs: {
    change: "change",
    toggleChange: "toggleChange"
  },
  exportAs: ["matSlideToggle"],
  standalone: false,
  features: [ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c3,
  decls: 16,
  vars: 20,
  consts: [["label", ""], ["toggleBar", ""], ["input", ""], ["thumbContainer", ""], ["labelContent", ""], [1, "mat-slide-toggle-label"], [1, "mat-slide-toggle-bar"], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "change", "click", "id", "required", "tabIndex", "checked", "disabled"], [1, "mat-slide-toggle-thumb-container"], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], [2, "display", "none"]],
  template: function MatSlideToggle_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "label", 5, 0)(2, "span", 6, 1)(4, "input", 7, 2);
      ɵɵlistener("change", function MatSlideToggle_Template_input_change_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onChangeEvent($event));
      })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onInputClick($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(6, "span", 8, 3);
      ɵɵelement(8, "span", 9);
      ɵɵelementStart(9, "span", 10);
      ɵɵelement(10, "span", 11);
      ɵɵelementEnd()()();
      ɵɵelementStart(11, "span", 12, 4);
      ɵɵlistener("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onLabelTextChange());
      });
      ɵɵelementStart(13, "span", 13);
      ɵɵtext(14, " ");
      ɵɵelementEnd();
      ɵɵprojection(15);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const label_r2 = ɵɵreference(1);
      const labelContent_r3 = ɵɵreference(12);
      ɵɵattribute("for", ctx.inputId);
      ɵɵadvance(2);
      ɵɵclassProp("mat-slide-toggle-bar-no-side-margin", !labelContent_r3.textContent || !labelContent_r3.textContent.trim());
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
      ɵɵattribute("name", ctx.name)("aria-checked", ctx.checked)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      ɵɵadvance(5);
      ɵɵproperty("matRippleTrigger", label_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", ɵɵpureFunction1(18, _c4, ctx._noopAnimations ? 0 : 150));
    }
  },
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      exportAs: "matSlideToggle",
      host: {
        "class": "mat-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.name]": "null",
        "[class.mat-checked]": "checked",
        "[class.mat-disabled]": "disabled",
        "[class.mat-slide-toggle-label-before]": 'labelPosition == "before"',
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
      inputs: ["disabled", "disableRipple", "color", "tabIndex"],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<label [attr.for]="inputId" class="mat-slide-toggle-label" #label>\n  <span #toggleBar class="mat-slide-toggle-bar"\n       [class.mat-slide-toggle-bar-no-side-margin]="!labelContent.textContent || !labelContent.textContent.trim()">\n\n    <input #input class="mat-slide-toggle-input cdk-visually-hidden" type="checkbox"\n           role="switch"\n           [id]="inputId"\n           [required]="required"\n           [tabIndex]="tabIndex"\n           [checked]="checked"\n           [disabled]="disabled"\n           [attr.name]="name"\n           [attr.aria-checked]="checked"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           (change)="_onChangeEvent($event)"\n           (click)="_onInputClick($event)">\n\n    <span class="mat-slide-toggle-thumb-container" #thumbContainer>\n      <span class="mat-slide-toggle-thumb"></span>\n      <span class="mat-slide-toggle-ripple mat-focus-indicator" mat-ripple\n           [matRippleTrigger]="label"\n           [matRippleDisabled]="disableRipple || disabled"\n           [matRippleCentered]="true"\n           [matRippleRadius]="20"\n           [matRippleAnimation]="{enterDuration: _noopAnimations ? 0 : 150}">\n\n        <span class="mat-ripple-element mat-slide-toggle-persistent-ripple"></span>\n      </span>\n    </span>\n\n  </span>\n\n  <span class="mat-slide-toggle-content" #labelContent (cdkObserveContent)="_onLabelTextChange()">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style="display:none">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n',
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FocusMonitor
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _thumbEl: [{
      type: ViewChild,
      args: ["thumbContainer"]
    }],
    _thumbBarEl: [{
      type: ViewChild,
      args: ["toggleBar"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatSlideToggleRequiredValidator),
  multi: true
};
var MatSlideToggleRequiredValidator = class extends CheckboxRequiredValidator {
};
MatSlideToggleRequiredValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatSlideToggleRequiredValidator_BaseFactory;
  return function MatSlideToggleRequiredValidator_Factory(__ngFactoryType__) {
    return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(MatSlideToggleRequiredValidator)))(__ngFactoryType__ || MatSlideToggleRequiredValidator);
  };
})();
MatSlideToggleRequiredValidator.ɵdir = ɵɵdefineDirective({
  type: MatSlideToggleRequiredValidator,
  selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
  standalone: false,
  features: [ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
var _MatSlideToggleRequiredValidatorModule = class {
};
_MatSlideToggleRequiredValidatorModule.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSlideToggleRequiredValidatorModule)();
};
_MatSlideToggleRequiredValidatorModule.ɵmod = ɵɵdefineNgModule({
  type: _MatSlideToggleRequiredValidatorModule,
  declarations: [MatSlideToggleRequiredValidator],
  exports: [MatSlideToggleRequiredValidator]
});
_MatSlideToggleRequiredValidatorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      exports: [MatSlideToggleRequiredValidator],
      declarations: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();
var MatSlideToggleModule = class {
};
MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatSlideToggleModule)();
};
MatSlideToggleModule.ɵmod = ɵɵdefineNgModule({
  type: MatSlideToggleModule,
  declarations: [MatSlideToggle],
  imports: [_MatSlideToggleRequiredValidatorModule, MatRippleModule, MatCommonModule, ObserversModule],
  exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, MatCommonModule]
});
MatSlideToggleModule.ɵinj = ɵɵdefineInjector({
  imports: [[_MatSlideToggleRequiredValidatorModule, MatRippleModule, MatCommonModule, ObserversModule], _MatSlideToggleRequiredValidatorModule, MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [_MatSlideToggleRequiredValidatorModule, MatRippleModule, MatCommonModule, ObserversModule],
      exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, MatCommonModule],
      declarations: [MatSlideToggle]
    }]
  }], null, null);
})();
export {
  MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR,
  MAT_SLIDE_TOGGLE_VALUE_ACCESSOR,
  MatSlideToggle,
  MatSlideToggleChange,
  MatSlideToggleModule,
  MatSlideToggleRequiredValidator,
  _MatSlideToggleRequiredValidatorModule
};
/*! Bundled license information:

@angular/material/fesm2020/slide-toggle.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@angular_material_slide-toggle.js.map
