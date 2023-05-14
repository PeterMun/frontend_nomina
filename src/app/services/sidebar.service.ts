import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: '',
      submenu:[
        { title: 'Main', url: 'dashboard' }
      ]
    },
    {
      title: 'Mantenimiento',
      icon: '',
      submenu: [
        { title: 'Centro de costos', url: 'centrocostos' }
      ]
    }
  ]

  constructor() { }
}
