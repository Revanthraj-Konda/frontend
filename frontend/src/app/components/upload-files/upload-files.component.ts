import { Component, OnInit, HostListener } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgressInfos } from 'src/app/progressInfoInterface';
import { response } from 'src/app/services/response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})


export class UploadFilesComponent implements OnInit {



  ngOnInit(): void {

  }

  // fileInfos?: Observable<any>;
  isBin: Boolean = false;
  errMessage = '';
  // selectedFiles?: FileList;
  selectedFiles = [];
  // message: string[] = [];
  token: string = "";
  responseBody!: response;
  progressInfos: ProgressInfos[] = [];
  // formData: any;
  message = '';
  // fileInfos!: Observable<any>;
  displayCopy = false
  displayUpload = false



  constructor(private uploadService: UploadFilesService, private router: Router) { }

  selectFiles(event: any) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    this.message = '';
    const formData = new FormData();

    let i = 0
    for (let selectedFilesKey in this.selectedFiles) {
      // formData.append('file', this.selectedFiles[selectedFilesKey]this.selectedFiles[selectedFilesKey])
      // console.log(formData);
      // console.log(this.selectedFiles[selectedFilesKey]);
      if (i === 0) {
        formData.append('binary_image', this.selectedFiles[selectedFilesKey])
      }
      else if (i == 1) {
        formData.append('input_file', this.selectedFiles[selectedFilesKey])
      }


      i++
    }
    this.uploader(formData);
    //  }

  }

  uploader(formData: FormData) {
    console.log('entered into uploader')
    this.uploadService.upload(formData).subscribe((data: any) => {
      this.token = data.token;
      if (this.token) {
        window.sessionStorage.setItem('token', this.token);
        this.displayCopy = true
      }
    })

  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

  getStatus(val: string) {
    console.log(val);
    this.router.navigate(['base', { queryParams: { token: val } }]);
  }


  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any) {
    $event.target.files
    this.prepareFilesList($event.target.files);
    this.selectedFiles = $event.target.files
    // this.uploadFiles()
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);

    this.displayUpload = true
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);

    console.log('this.files', this.files)
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
