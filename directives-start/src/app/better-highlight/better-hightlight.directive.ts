import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor:String='transparent';
  @Input('appBetterHightlight') highlightColor:String='blue';

  @HostBinding('style.backgroundColor') backgroundColor: String;

  constructor(private elRef:ElementRef ,private render:Renderer2) { }

  ngOnInit(){
   // this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
   this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.render.setStyle(this.elRef.nativeElement,'background-color','pink');
    this.backgroundColor=this.defaultColor;
  }
}
