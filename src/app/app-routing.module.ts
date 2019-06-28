import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'dolar', loadChildren: './dolar/dolar.module#DolarPageModule' },
  { path: 'linea', loadChildren: './linea/linea.module#LineaPageModule' },
  { path: 'dogfood', loadChildren: './dogfood/dogfood.module#DogfoodPageModule' },
  { path: 'gas', loadChildren: './gas/gas.module#GasPageModule' },
  { path: 'llamadas', loadChildren: './llamadas/llamadas.module#LlamadasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
