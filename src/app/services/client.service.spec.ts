import { TestBed, inject } from '@angular/core/testing';
import { ClientService } from './clent.service';

describe('ClientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[ClientService]
        });
    });
    
    it('should be created', inject([ClientService], (service: ClientService) => {
        expect(service).toBeTruthy();
    }));
})