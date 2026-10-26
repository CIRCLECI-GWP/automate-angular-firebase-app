import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [],
    providers: [UserService, provideHttpClient(withXhr(), withInterceptorsFromDi())]
})
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'List of dummy users'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('List of dummy users');
  });
});
