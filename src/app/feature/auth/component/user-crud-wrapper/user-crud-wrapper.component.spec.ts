import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudComponent } from './user-crud-wrapper.component';

describe('UserCrudComponent', () => {
  let component: UserCrudComponent;
  let fixture: ComponentFixture<UserCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
