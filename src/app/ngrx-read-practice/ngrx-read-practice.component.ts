import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgrxPracticeModel } from '../state/ngrxPractice.model';
import { NgrxPracticeStateInterface } from '../state/ngrxPractice.state';
import * as NgrxPracticeActions from "../state/ngrxPractice.action"

@Component({
  selector: 'app-ngrx-read-practice',
  templateUrl: './ngrx-read-practice.component.html',
  styleUrls: ['./ngrx-read-practice.component.scss']
})
export class NgrxReadPracticeComponent implements OnInit {

  ngrxPracticeObservable: Observable<NgrxPracticeModel[]>;

  constructor(private store: Store<NgrxPracticeStateInterface>) { }

  ngOnInit(): void {
    this.ngrxPracticeObservable = this.store.select("NgrxPracticeState1");
  }

  deleteItem(index){
    this.store.dispatch(new NgrxPracticeActions.RemoveNgrxPracticeAction(index))
  }

}
