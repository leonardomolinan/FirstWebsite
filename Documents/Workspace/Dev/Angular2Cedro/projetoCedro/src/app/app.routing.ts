import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { FinalComponent } from './final/final.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'questionario', component: QuestionarioComponent},
    {path: 'final', component: FinalComponent},
    {path: 'modal', component: ModalComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);