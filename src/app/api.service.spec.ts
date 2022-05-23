import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

describe('ApiService', () => {
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
    
  });

  const expserviceData : any =  [({ id: 8, name: 'Air Deccan', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg', code: 'MAU', flightdata: [ Object({ id: 1, flightname: 'AM1', flightid: 'AMX1', arrival: 'MEX', departure: 'MAD', messagetime: '47', feet: '13232', landinghrs: '15', operational: true, nonoperational: false, degret: false, unknown: true, status: 'operational' }), Object({ id: 2, flightname: 'AC1', flightid: 'ACA1', arrival: 'PEA', departure: 'HAN', messagetime: '4', feet: '10234', landinghrs: '04', operational: true, nonoperational: true, degret: false, unknown: true, status: 'nonoperational' }) ] })]

  const ApiServiceData : any = [({ id: 8, name: 'Air Deccan', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg', code: 'MAU', flightdata: [ Object({ id: 1, flightname: 'AM1', flightid: 'AMX1', arrival: 'MEX', departure: 'MAD', messagetime: '47', feet: '13232', landinghrs: '15', operational: true, nonoperational: false, degret: false, unknown: true, status: 'operational' }), Object({ id: 2, flightname: 'AC1', flightid: 'ACA1', arrival: 'PEA', departure: 'HAN', messagetime: '4', feet: '10234', landinghrs: '04', operational: true, nonoperational: true, degret: false, unknown: true, status: 'nonoperational' }) ] })]


  it('should get the api data', () => {
    expect(ApiServiceData).toEqual(expserviceData);
  })

