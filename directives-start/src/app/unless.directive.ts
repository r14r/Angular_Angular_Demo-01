import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(conditon:boolean){
    if(!conditon){
        this.vcref.createEmbeddedView(this.templateRef);
    }else{
      this.vcref.clear();
    }

  }

  constructor(private templateRef:TemplateRef<any>,private vcref:ViewContainerRef) { }

}
