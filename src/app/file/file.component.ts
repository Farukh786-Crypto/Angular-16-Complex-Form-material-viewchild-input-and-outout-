import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Selected File ${i + 1}:`, file);
        // Perform additional actions with each selected file
      }
    }
  }
}

