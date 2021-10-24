import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpadListComponent } from './notepad-list.component';

describe('NotpadListComponent', () => {
  let component: NotpadListComponent;
  let fixture: ComponentFixture<NotpadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotpadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotpadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
