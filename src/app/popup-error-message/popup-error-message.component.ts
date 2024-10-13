import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-error-message',
  templateUrl: './popup-error-message.component.html',
  styleUrls: ['./popup-error-message.component.css']
})
export class PopupErrorMessageComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<PopupErrorMessageComponent> 
  ) {}

  closePopup(): void {
    this.dialogRef.close();
  }
}
