import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from'@angular/material'; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    Material.MatGridListModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatDialogModule,
  ],
  exports :[
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatToolbarModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatDialogModule,
  ]
})
export class MaterialModule { }
