/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from '../app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import {DebugElement, Class} from '@angular/core';
import {Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {routes} from "../app.router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppService} from "../app.service";
import {RouterTestingModule} from '@angular/router/testing'
import {ShowTaskComponent} from "./showTask.component";
import {Observable} from "rxjs";

describe('ShowTaskComponent should', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<ShowTaskComponent>;
  let service:AppService;

class MockRouter{

  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ {provide:Router,useClass:MockRouter},RouterOutletMap,AppService],
      imports: [RouterTestingModule,BrowserModule,FormsModule,HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    //service:fixture.debugElement.injector.get(AppService)
  });

  it('should create component', () => expect(comp).toBeDefined() );

  // it('should show list of task', () => {
  //   spyOn(service, 'getData3').and.returnValue(
  //     Observable.of<any>(
  //       [{
  //         date: '',
  //         title: '',
  //         description: '',
  //         preority: ''
  //       }]
  //     )
  //   );
  //   spyOn(console, 'log');
  //   comp.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  //   expect(comp.task).toEqual([{
  //     date: '',
  //     title: '',
  //     description: '',
  //     priority: ''
  //   }])
  // });

});
