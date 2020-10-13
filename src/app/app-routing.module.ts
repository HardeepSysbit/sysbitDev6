import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaComponent } from './pa/pa.component';
import { BiComponent } from './bi/bi.component';
import { CloudComponent } from './cloud/cloud.component';
import { EsbComponent } from './esb/esb.component';
import { MobileComponent } from './mobile/mobile.component';
import { WebComponent } from './web/web.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { AptlistComponent } from './aptlist/aptlist.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: '', component:HomeComponent},
{ path: 'pa', component:PaComponent},
{ path: 'bi', component:BiComponent},
{ path: 'cloud', component:CloudComponent},
{ path: 'esb', component:EsbComponent},
{ path: 'mobile', component: MobileComponent},
{ path: 'web', component: WebComponent},
{ path: 'desktop', component:DesktopComponent},
{ path: 'fullStack', component:FullstackComponent},
{ path: 'contact', component:ContactComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
