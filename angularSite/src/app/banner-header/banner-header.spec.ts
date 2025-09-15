import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHeader } from './banner-header';

describe('BannerHeader', () => {
  let component: BannerHeader;
  let fixture: ComponentFixture<BannerHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
