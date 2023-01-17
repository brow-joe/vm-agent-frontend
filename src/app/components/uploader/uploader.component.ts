import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Input() message: string = '';
  @Input() config: DropzoneConfigInterface = {};

  @Output() onSending = new EventEmitter();
  @Output() onError = new EventEmitter();
  @Output() onSuccess = new EventEmitter();

  ngOnInit() { }

  public sending() {
    this.onSending.emit();
  }

  public error() {
    this.onError.emit();
  }

  public success() {
    this.onSuccess.emit();
  }
}
