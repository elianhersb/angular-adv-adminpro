import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu:any = [
    {
      principal:'Dashboard',
      icon:'mdi mdi-gauge',
      submenu:[
        { title:'Main',     href:'/'        },
        { title:'Grafica',  href:'grafica1' },
        { title:'Progreso', href:'progress' },
        { title:'Promesas', href:'promesas' },
        { title:'Rxjs',     href:'rxjs'     },
      ]
      
    }
  ]
  constructor() { }
}
