import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidsectionHomeComponent } from './midsection-home.component';

describe('MidsectionHomeComponent', () => {
  let component: MidsectionHomeComponent;
  let fixture: ComponentFixture<MidsectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidsectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidsectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
