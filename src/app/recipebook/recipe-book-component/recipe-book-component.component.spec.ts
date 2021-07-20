import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookComponentComponent } from './recipe-book-component.component';

describe('RecipeBookComponentComponent', () => {
  let component: RecipeBookComponentComponent;
  let fixture: ComponentFixture<RecipeBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
