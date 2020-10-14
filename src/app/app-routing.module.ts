import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export class AppRoutingModule { }
