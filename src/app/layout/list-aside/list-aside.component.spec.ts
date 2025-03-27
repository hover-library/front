import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideComponent } from './list-aside.component';

describe('ListAsideComponent', () => {
  let component: ListAsideComponent;
  let fixture: ComponentFixture<ListAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
