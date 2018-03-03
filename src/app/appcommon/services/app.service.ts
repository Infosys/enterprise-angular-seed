/**
 * A simple global state implementation..
 * Think of poor man's @ngrx/store
 */
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppState {
  // Demo to show how we can keep global state and get notified.
  private _counter = 0;
  @Output() public counterVal = new EventEmitter<number>();
  public _state: InternalStateType = {};
  public incCounter() {
    this._counter++;
    this.counterVal.emit(this._counter);
  }
  public decCounter() {
    this._counter--;
    this.counterVal.emit(this._counter);
  }

  // Simple global state mgmt system aka lite redux
  /**
   * Already return a clone of the current state.
   */
  public get state() {
    return (this._state = this._clone(this._state));
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : null;
  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return (this._state[prop] = value);
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify(object));
  }
}
