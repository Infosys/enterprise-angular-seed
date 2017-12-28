import { Directive, Input, ViewContainerRef,
  OnInit, Renderer2} from '@angular/core';

/**
 * TO BE DONE: - accept input..
 * 1. color
 * 2. css animation?
 * 3. full page OR only current element to be hidden
 * 4. on-off based on user
 * 5. Observer tracker..
 * 6. z-index
 * Other thing is .. keep it's own css to be added.
 */
@Directive({
  selector: '[appBusy]'
})
export class BusyDirective implements OnInit {
  @Input() options: any;

  constructor(private vcRef: ViewContainerRef,
    private renderer: Renderer2) { }

  public ngOnInit(): void {
    const busyIndEl = this.renderer.createElement('div');
    const currEl = this.vcRef.element.nativeElement;

    const height = currEl.scrollHeight;
    const width = currEl.scrollWidth;
    busyIndEl.style.height = height + 'px';
    busyIndEl.style.width = width + 'px';
    busyIndEl.style.backgroundSize = Math.round(height < width ? (height * 0.2) : width * 0.2) + 'px';
    busyIndEl.classList.add('busy-indicator');

    const spinner = this.renderer.createElement('div');
    spinner.classList.add('spinner');
    this.renderer.appendChild(busyIndEl, spinner);
    this.renderer.insertBefore(
      this.vcRef.element.nativeElement.parentElement, busyIndEl, this.vcRef.element.nativeElement
    );
  }
}
