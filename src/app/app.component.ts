import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from './auth/auth.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'routing1';
  // tslint:disable-next-line:variable-name
  _displayAccountIcons = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authService: AuthService, public media: MediaObserver) {
    iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg') );
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(authStatus => {
        setTimeout(() => {
          this._displayAccountIcons = authStatus.isAuthenticated;
      }, 0);
    });
  }

  get displayAccountIcons() {
    return this._displayAccountIcons;
  }
}
