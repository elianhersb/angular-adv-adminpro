import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingThemeService {
  private elementTheme: Element | null  = document.querySelector("#theme");

  constructor() { 
    let url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.elementTheme?.setAttribute('href', url);
  }

  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.elementTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url);
    
    this.themeSelected();
  }

  themeSelected(){
    let theme = localStorage.getItem('theme');
    let links = document.querySelectorAll('.selector');

    links.forEach(elem =>{
      elem.classList.remove('working');
      let nameTheme= elem.getAttribute('data-theme');
      let url = `./assets/css/colors/${nameTheme}.css`;
      
      if(theme == url){
        elem.classList.add('working');
      }
    })
  }
}
