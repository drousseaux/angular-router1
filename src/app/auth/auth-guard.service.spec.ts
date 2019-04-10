import { TestBed } from '@angular/core/testing';
import { commonTestingModules } from '../common/common.testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthServiceFake } from './auth.service.fake';
import { UiService } from '../common/ui.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: commonTestingModules,
    providers: [
      AuthGuardService,
      { provide: AuthService, useClass: AuthServiceFake },
      UiService,
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
