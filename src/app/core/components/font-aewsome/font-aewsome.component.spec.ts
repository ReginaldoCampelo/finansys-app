import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAewsomeComponent } from './font-aewsome.component';

describe('FontAewsomeComponent', () => {
  let component: FontAewsomeComponent;
  let fixture: ComponentFixture<FontAewsomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAewsomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAewsomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
