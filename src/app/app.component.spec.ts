import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { commonTestingModules,
  commonTestingProviders,
  MatIconRegistryFake,
  DomSanitizerFake,
  MediaObserverFake,
} from './common/common.testing';
import { MediaObserver } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        commonTestingModules
      ],
      providers: commonTestingProviders.concat([
        { provide: MediaObserver, useClass: MediaObserverFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
        ]),
      declarations: [
        AppComponent,
        NavigationMenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
