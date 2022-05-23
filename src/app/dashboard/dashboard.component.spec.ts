import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let buttonToggle : boolean = true;
  let button : boolean = false;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const getId :any = ['AMX1','ACA1','UAE38'];
  const matchData:any = ['AMX1','ACA1','UAE38'];

  it('get flight id', () => {
    expect(getId).toEqual(matchData);
  })

  it('get toggle button status', () => {
    expect(buttonToggle).toEqual(true);
  })

  it('get tab button status', () => {
    expect(button).toEqual(false);
  })
});
