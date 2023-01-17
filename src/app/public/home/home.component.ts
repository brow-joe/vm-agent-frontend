import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ToastrService } from 'ngx-toastr';

import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading = false;

  public config: DropzoneConfigInterface;

  constructor(private toastr: ToastrService, private service: AgentsService) {
    this.config = this.service.upload();
  }

  ngOnInit() { }

  public sending() {
    this.loading = true;
  }

  public error() {
    this.loading = false;
    this.toastr.error('Error', 'Unable to upload the xml!')
  }

  public success() {
    this.loading = false;
    this.toastr.success('Sucess', 'XML upload successfully completed!');
  }
}
