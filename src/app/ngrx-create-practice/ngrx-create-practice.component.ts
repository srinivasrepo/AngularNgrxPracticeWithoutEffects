import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgrxPracticeStateInterface } from '../state/ngrxPractice.state';
import * as NgrxPracticeActions from "../state/ngrxPractice.action";

@Component({
  selector: 'app-ngrx-create-practice',
  templateUrl: './ngrx-create-practice.component.html',
  styleUrls: ['./ngrx-create-practice.component.scss']
})
export class NgrxCreatePracticeComponent implements OnInit {

  constructor(private store: Store<NgrxPracticeStateInterface>) { }

  ngOnInit(): void {
  }

  addState(name: string, url: string){
    this.store.dispatch(new NgrxPracticeActions.AddNgrxPracticeAction({name: name, url: url}));
  }
}
