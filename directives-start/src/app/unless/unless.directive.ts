import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: Boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templemntRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templemntRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
