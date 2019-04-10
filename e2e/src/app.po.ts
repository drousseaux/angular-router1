import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    // tslint:disable-next-line:max-line-length
    return element(by.css('body app-root div.app-container mat-sidenav-container mat-sidenav-content app-home div app-login div mat-card mat-card-header div mat-card-title div')).getText() as Promise<string>;
  }
}
