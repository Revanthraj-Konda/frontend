import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadFilesService } from 'src/app/services/upload-files.service';

import { UploadFilesComponent } from './upload-files.component';

describe('UploadFilesComponent', () => {
  let component: UploadFilesComponent;
  let fixture: ComponentFixture<UploadFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadFilesComponent],
      providers: [{
        provide: UploadFilesService,
        useValue: jasmine.createSpyObj('UploadFilesService', ['upload'])
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
