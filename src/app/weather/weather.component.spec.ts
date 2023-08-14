import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [WeatherComponent]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit method when the form is submitted', () => {
    let search = spyOn(component, 'citySearch')
    let el = fixture.debugElement.query(By.css('form'));

    //triggers the submit event on the form
    el.triggerEventHandler('ngSubmit', null)
    //Checks the search function has been called
    expect(search).toHaveBeenCalled();
  })

});
