import {
  MatCommonModule
} from "./chunk-XHU5VVPE.js";
import {
  coerceBooleanProperty
} from "./chunk-EHHKKOZA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-HBZACKLO.js";

// node_modules/@angular/material/fesm2020/divider.mjs
var MatDivider = class {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
};
MatDivider.ɵfac = function MatDivider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatDivider)();
};
MatDivider.ɵcmp = ɵɵdefineComponent({
  type: MatDivider,
  selectors: [["mat-divider"]],
  hostAttrs: ["role", "separator", 1, "mat-divider"],
  hostVars: 7,
  hostBindings: function MatDivider_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      ɵɵclassProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
    }
  },
  inputs: {
    vertical: "vertical",
    inset: "inset"
  },
  standalone: false,
  decls: 0,
  vars: 0,
  template: function MatDivider_Template(rf, ctx) {
  },
  styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class {
};
MatDividerModule.ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatDividerModule)();
};
MatDividerModule.ɵmod = ɵɵdefineNgModule({
  type: MatDividerModule,
  declarations: [MatDivider],
  imports: [MatCommonModule],
  exports: [MatDivider, MatCommonModule]
});
MatDividerModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatDivider, MatCommonModule],
      declarations: [MatDivider]
    }]
  }], null, null);
})();

export {
  MatDivider,
  MatDividerModule
};
/*! Bundled license information:

@angular/material/fesm2020/divider.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-E75ZMIVZ.js.map
