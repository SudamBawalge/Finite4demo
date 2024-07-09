import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ListItemsComponent } from './list-items/list-items.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ListItemsComponent},
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
