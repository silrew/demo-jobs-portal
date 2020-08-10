import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 // For components using angular-animations
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components 
import {MatButtonModule} from '@angular/material/button';
  import { MatInputModule } from '@angular/material/input';
  import { MatCardModule} from '@angular/material/card';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatIconModule } from '@angular/material/icon';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { MatExpansionModule } from  '@angular/material/expansion';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatTableModule } from '@angular/material/table';
  import { MatSortModule } from '@angular/material/sort';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatSelectModule } from '@angular/material/select';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { MatTooltipModule } from '@angular/material/tooltip'
  import {MatListModule} from '@angular/material/list';
  import {MatMenuModule} from '@angular/material/menu';
  import { MatDialogModule } from '@angular/material/dialog';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
     MatExpansionModule,
     MatDividerModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSelectModule,
     MatTabsModule,
     MatDialogModule,
     MatCheckboxModule,
     MatTooltipModule
  ],
  exports: [
    MatSnackBarModule,
    MatDatepickerModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatExpansionModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSelectModule ,
     MatTabsModule ,
     MatCheckboxModule
  ],
  declarations: [],
  providers:[ MatDatepickerModule]
})
export class AppMaterialModule { }