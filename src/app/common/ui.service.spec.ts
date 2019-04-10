import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      NoopAnimationsModule ],
    providers: [ UiService ]
  }));

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService);
    expect(service).toBeTruthy();
  });
});
