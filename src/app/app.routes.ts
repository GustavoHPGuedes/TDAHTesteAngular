import { Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';

export const routes: Routes = [
    {path: '**', component: InicioPage},
];
