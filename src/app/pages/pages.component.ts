import { Component, OnInit } from '@angular/core';
import { SettingThemeService } from '../services/setting-theme.service';

declare function currentInitCustom():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor(private settingThemeService: SettingThemeService) { 
    
  }

  ngOnInit(): void {
    currentInitCustom();
  }

}
