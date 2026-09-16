import { Routes } from '@angular/router';
import {Home} from "./componants/home/home"

export const routes: Routes = [
    {
        path:"",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        title: "home", 
        loadComponent: () => 
          import("./componants/home/home")
             .then((c) => c.Home)
    },
    {
        path: "about",
        title: "about", 
        loadComponent: () => 
          import("./componants/about/about")
             .then((c) => c.About)
    },
    {
        path: "protfolio",
        title: "protfolio", 
        loadComponent: () => 
          import("./componants/protfolio/protfolio")
             .then((c) => c.Protfolio)
    },
    {
        path: "contact",
        title: "contact", 
        loadComponent: () => 
          import("./componants/contact/contact")
             .then((c) => c.Contact)
    },
    // {
    //     path: "**",
    //     title: "contact", 
    //     loadComponent: () => 
    //       import("./componants/contact/contact")
    //          .then((c) => c.Contact)
    // }
];
