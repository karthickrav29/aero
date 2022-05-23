import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const getData : any =  [({ id: 8, name: 'Air Deccan', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg', code: 'MAU', flightdata: [ Object({ id: 1, flightname: 'AM1', flightid: 'AMX1', arrival: 'MEX', departure: 'MAD', messagetime: '47', feet: '13232', landinghrs: '15', operational: true, nonoperational: false, degret: false, unknown: true, status: 'operational' }), Object({ id: 2, flightname: 'AC1', flightid: 'ACA1', arrival: 'PEA', departure: 'HAN', messagetime: '4', feet: '10234', landinghrs: '04', operational: true, nonoperational: true, degret: false, unknown: true, status: 'nonoperational' }) ] })]

  const matchData : any = [({ id: 8, name: 'Air Deccan', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg', code: 'MAU', flightdata: [ Object({ id: 1, flightname: 'AM1', flightid: 'AMX1', arrival: 'MEX', departure: 'MAD', messagetime: '47', feet: '13232', landinghrs: '15', operational: true, nonoperational: false, degret: false, unknown: true, status: 'operational' }), Object({ id: 2, flightname: 'AC1', flightid: 'ACA1', arrival: 'PEA', departure: 'HAN', messagetime: '4', feet: '10234', landinghrs: '04', operational: true, nonoperational: true, degret: false, unknown: true, status: 'nonoperational' }) ] })]



  it('should get data', () => {
    expect(getData).toEqual(matchData);
  })
});
