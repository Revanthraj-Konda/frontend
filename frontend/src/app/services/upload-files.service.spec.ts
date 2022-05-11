import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UploadFilesService } from './upload-files.service';

describe('UploadFilesService', () => {
  let injector: TestBed;
  let service: UploadFilesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UploadFilesService],
    });

    injector = getTestBed();
    service = injector.get(UploadFilesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
