import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOauth2Login } from './angular-oauth2-login';

describe('AngularOauth2Login', () => {
  let component: AngularOauth2Login;
  let fixture: ComponentFixture<AngularOauth2Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularOauth2Login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularOauth2Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
