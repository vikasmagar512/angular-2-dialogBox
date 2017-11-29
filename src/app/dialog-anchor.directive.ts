import {ComponentFactoryResolver, ComponentRef, Directive, ViewContainerRef} from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';

@Directive({
  selector: '[appDialogAnchor]'
})
export class DialogAnchorDirective {
  constructor(private componentFactoryResolver: ComponentFactoryResolver , private viewContainer: ViewContainerRef) { }
  createDialog(dialogComponent: { new(): DialogComponent }): ComponentRef<DialogComponent> {
    this.viewContainer.clear();

    const dialogComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
    const dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);

    dialogComponentRef.instance.close.subscribe(() => {
      dialogComponentRef.destroy();
    });

    return dialogComponentRef;
  }
}
