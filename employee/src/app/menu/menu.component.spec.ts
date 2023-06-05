import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule,RouterLinkActive } from '@angular/router'; // Import RouterModule
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [FormsModule,CommonModule,RouterLinkActive, HttpClientModule],
      declarations: [ MenuComponent ],
       providers: [HttpClient, HttpHandler,RouterModule,RouterLinkActive, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
