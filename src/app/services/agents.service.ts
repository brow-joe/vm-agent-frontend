import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AgentsService {
    private timeout = 1200000;
    private host = environment.backend.host;
    private path = '/api/v1/agent';

    constructor() { }
    
    upload() {
        const endpoint = this.host + this.path;
        return {
            url: endpoint,
            acceptedFiles: '.xml',
            timeout: this.timeout
          }
    }

}
