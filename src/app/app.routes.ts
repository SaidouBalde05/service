import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DeuxComponent } from './deux/deux.component';

export const routes: Routes = [
    {path:'deux', component: DeuxComponent},
    {path:'test', component: TestComponent}
];
