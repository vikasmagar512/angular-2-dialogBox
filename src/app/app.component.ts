import {Component, ComponentFactoryResolver, ComponentRef, Directive, ViewChild, ViewContainerRef} from '@angular/core';
import {DialogAnchorDirective} from './dialog-anchor.directive';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DialogAnchorDirective) appDialogAnchor: DialogAnchorDirective;
  DialogCompoentRef: ComponentRef<DialogComponent> = null;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}
  openDialogBox() {
    this.DialogCompoentRef = this.appDialogAnchor.createDialog(DialogComponent);
  }
  dialogVisible = () => (
    this.DialogCompoentRef ? !this.DialogCompoentRef.hostView.destroyed : false
  )
}
