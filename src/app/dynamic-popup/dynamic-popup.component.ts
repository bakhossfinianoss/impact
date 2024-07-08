import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.css']
})
export class DynamicPopupComponent {

  constructor(public dialogRef: MatDialogRef<DynamicPopupComponent>){}
  
  closeDialog() {
    this.dialogRef.close();
  }
}
