import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { ErrorComponent } from "./error/error.component";


const appRoute: Routes = [
    { path: '', component:HomeComponent  },
    { path: 'users', component:UsersComponent ,children:[
      { path: ':id/:name', component:UserComponent  }
    ] },
    { path: 'servers',
     //canActivate:[AuthGuard] 
     canActivateChild:[AuthGuard]
    , component:ServersComponent, children:[
      { path: ':id', component:ServerComponent  },
      { path: ':id/edit', component:EditServerComponent  }
    ]  },
    //{ path:'not-found',component:PathNotFoundComponent },
    { path:'not-found',component:ErrorComponent ,data:{message:"Page Not found"} },
    { path: '**' ,redirectTo:'not-found'}
   
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}