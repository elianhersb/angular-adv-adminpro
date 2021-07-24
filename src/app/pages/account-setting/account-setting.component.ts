import { Component, OnInit } from '@angular/core';
import { SettingThemeService } from 'src/app/services/setting-theme.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  constructor(private settingThemeService: SettingThemeService) { }

  ngOnInit(): void {
    this.settingThemeService.themeSelected();
  }

  changeTheme(theme:string){
    this.settingThemeService.changeTheme(theme);
  }

}
