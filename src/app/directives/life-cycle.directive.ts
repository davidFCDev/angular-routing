import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]'
})
export class LifeCycleDirective implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  lifeCycle() {
    console.log('LifeCycleDirective');
  }

}
