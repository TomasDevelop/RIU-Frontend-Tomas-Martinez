import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should set isLoading to true when show() is called', () => {
    service.show();
    expect(service.isLoading()).toBe(true);
  });

  it('should set isLoading to false when hide() is called', () => {
    service.hide();
    expect(service.isLoading()).toBe(false);
  });

  it('should toggle isLoading correctly', () => {
    service.show();
    expect(service.isLoading()).toBe(true);

    service.hide();
    expect(service.isLoading()).toBe(false);

    service.show();
    expect(service.isLoading()).toBe(true);
  });
});
