import { NgModule } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Este array va a contener todas las rutas
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
