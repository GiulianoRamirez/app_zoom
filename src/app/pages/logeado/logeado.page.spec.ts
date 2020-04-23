import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogeadoPage } from './logeado.page';

describe('LogeadoPage', () => {
  let component: LogeadoPage;
  let fixture: ComponentFixture<LogeadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogeadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogeadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
