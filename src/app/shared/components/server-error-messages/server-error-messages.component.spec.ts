import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerErrorMessagesComponent } from './server-error-messages.component';

describe('ServerErrorMessagesComponent', () => {
  let component: ServerErrorMessagesComponent;
  let fixture: ComponentFixture<ServerErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
