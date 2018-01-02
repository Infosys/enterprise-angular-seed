// import { PubSubService } from './../services/pubsub.service';
// import { Subscription } from 'rxjs/Subscription';
import { Directive, Input, ViewContainerRef,
  OnInit, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

/**
 * TO BE DONE: - accept input.. done
 * 1. color - done
 * 2. css animation? - done
 * 3. full page OR only current element to be hidden - done
 * 4. on-off based on user - done
 * 5. Observer tracker.. - decided against it (as http interceptor does 
 *    not provide knoweldge of context to start busy on right sections).
 * 6. z-index - done
 * 7. customize backdrop color. - done
 * Other thing is .. keep it's own css to be added. - done
 */
@Directive({
  selector: '[appBusy]'
})
export class BusyDirective implements OnInit, OnChanges {
  @Input() appBusy: BusyOptions;
  // private subscription: Subscription;

  set visible(visible: boolean) {
    // console.log('setting visible', visible);
    const busyEl = (this.vcRef.element.nativeElement as HTMLElement).previousElementSibling;
    if (busyEl) {
      if (visible) {
        busyEl.classList.remove('hide');
      } else {
        busyEl.classList.add('hide');
      }
    }
  }

  constructor(private vcRef: ViewContainerRef,
    private renderer: Renderer2,
    /* private pubsubService: PubSubService */) {
      /* this.pubsubService.getMessage().subscribe(message => {
        console.log(message);
        if (message.message === 'httpRequestStarted') {
          this.visible = true;
        }
        if (message.message === 'httpRequestCompleted') {
          this.visible = false;
        }
      }); */
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        if (!chng.firstChange) {  // first change is handled by ngOnInit
          const cur  = chng.currentValue as BusyOptions;
          this.visible = cur.show;
        }
    }
    }
  }

  public ngOnInit(): void {
    // console.log('provided options', this.appBusy);
    const busyIndEl = this.renderer.createElement('div') as HTMLElement;
    busyIndEl.classList.add('busy-indicator', 'hide');
    if (this.appBusy.fullPageBackdrop) {
      busyIndEl.classList.add('full-page');
    } else {  // contextual backdrop.. which is a default
      const currEl = this.vcRef.element.nativeElement;
      const height = currEl.scrollHeight;
      const width = currEl.scrollWidth;
      busyIndEl.style.height = height + 'px';
      busyIndEl.style.width = width + 'px';
      busyIndEl.style.backgroundSize = Math.round(height < width ? (height * 0.2) : width * 0.2) + 'px';
    }
    if (this.appBusy.backdropColor) {
      busyIndEl.style.backgroundColor = this.appBusy.backdropColor;
    }
    const spinner = this.renderer.createElement('div') as HTMLElement;
    spinner.classList.add('spinner');
    if (this.appBusy.color) {
      spinner.style.backgroundColor = this.appBusy.color;
    }

    this.renderer.appendChild(busyIndEl, spinner);
    this.renderer.insertBefore(
      this.vcRef.element.nativeElement.parentElement, busyIndEl, this.vcRef.element.nativeElement
    );
    // Run first round of visibility check
    this.visible = this.appBusy.show || false;
  }

}

export interface BusyOptions {
  // busyObjects: Array<Promise<any> | Subscription>;
  color?: string;
  show: boolean;
  backdropColor?: string;
  fullPageBackdrop?: boolean;
}
