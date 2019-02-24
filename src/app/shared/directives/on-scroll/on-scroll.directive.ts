import { Directive, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appOnScroll]',
})
export class OnScrollDirective implements OnInit, OnDestroy {
  private scrollEvent: Subscription;

  @Output()
  appOnScroll: EventEmitter<void> = new EventEmitter();

  @Input()
  appOnScrollDisabled = false;

  ngOnInit() {
    this.scrollEvent = fromEvent(window, 'scroll')
      .pipe(debounceTime(250))
      .subscribe(() => {
        if (this.appOnScrollDisabled) {
          return;
        }
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          console.log('directive found bottom scroll');
          this.appOnScroll.emit();
        }
      });
  }

  ngOnDestroy() {
    if (this.scrollEvent) {
      this.scrollEvent.unsubscribe();
    }
  }
}
