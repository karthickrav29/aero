import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,

      ],
      providers: [
        ApiService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    });
    service = TestBed.inject(ApiService);
    
  });

  it('should be created', () => {
    expect(ApiService).toBeTruthy();
  });

