import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, release-versioning');
  });

  describe('onePlusOne', () => {
    it('should return two', () => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.componentInstance;
      expect(app.onePlusOne()).toBe(2);
    });
  });

  describe('twoPlusTwo', () => {
    it('should return four', () => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.componentInstance;
      expect(app.twoPlusTwo()).toBe(4);
    });
  });
});
