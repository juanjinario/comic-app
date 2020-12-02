import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListLoadingComponent } from './card-list-loading.component';

describe('CardListLoadingComponent', () => {
  let component: CardListLoadingComponent;
  let fixture: ComponentFixture<CardListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
