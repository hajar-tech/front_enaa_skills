import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListBriefsComponent } from './pages/list-briefs/list-briefs.component';

export const routes: Routes = [
     { path : 'briefs', component: ListBriefsComponent }
];
