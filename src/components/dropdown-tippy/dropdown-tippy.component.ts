import {
  Component, Input, TemplateRef, ContentChild,
  ViewChild, ElementRef, AfterViewInit, OnDestroy, Renderer2
} from '@angular/core';
import tippy, { Instance,Props, Placement } from 'tippy.js';
import {NgForOf, NgIf} from "@angular/common";


export interface MenuItem {
  label?: string;
  action?: () => void;
  children?: MenuItem[];
  disabled?: boolean;
  icon?: string;
  divider?: boolean;
}


@Component({
  selector: 'app-dropdown-tippy',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './dropdown-tippy.component.html',
  styleUrl: './dropdown-tippy.component.scss'
})
export class DropdownTippyComponent implements AfterViewInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  @Input() placement: Placement = 'bottom-start';
  @Input() ariaLabel = 'Menu';
  @Input() disabled = false;
  @Input() triggerWidth = true;

  @ViewChild('trigger', { static: true }) trigger!: TemplateRef<any>;
  @ContentChild('menuContent', { static: false }) customMenuContent?: TemplateRef<any>;
  @ContentChild('defaultMenu', { static: false }) defaultMenu?: TemplateRef<any>;

  private tippyInstance: Instance<Props> | null = null;
  private activeSubmenu: Instance | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const content = this.customMenuContent || this.defaultMenu;
    this.tippyInstance = tippy(this.el.nativeElement as Element, {
      content: content?.createEmbeddedView({}).rootNodes[0],
      trigger: 'click',
      interactive: true,
      placement: this.placement,
      animation: 'fade',
      appendTo: 'parent',
      arrow: false,
      theme: 'dropdown',
      duration: [150, 100],
      allowHTML: true,
      onShow: () => this.handleMenuShow(),
      onHide: () => this.handleMenuHide(),
      onTrigger: () => this.triggerWidth && this.matchTriggerWidth(),
      ...(this.disabled && { trigger: 'manual' })
    });
  }

  private matchTriggerWidth() {
    const trigger = this.el.nativeElement.querySelector('[trigger]');
    if (trigger) {
      const width = trigger.offsetWidth;
      this.renderer.setStyle(this.tippyInstance?.popper, 'minWidth', `${width}px`);
    }
  }

  private handleMenuShow() {
    document.addEventListener('keydown', this.handleDocumentKeydown);
    this.tippyInstance?.popper.addEventListener('mouseleave', this.handleMenuMouseLeave);
  }

  private handleMenuHide() {
    document.removeEventListener('keydown', this.handleDocumentKeydown);
    this.activeSubmenu?.destroy();
    this.activeSubmenu = null;
  }

  private handleDocumentKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.tippyInstance?.hide();
    }
  };

  private handleMenuMouseLeave = () => {
    this.tippyInstance?.hide();
  };

  handleKeydown(event: KeyboardEvent) {
    const items = this.getFocusableItems();
    const currentIndex = items.findIndex(item => item === document.activeElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex].focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex].focus();
        break;
      case 'ArrowRight':
        if (this.activeSubmenu) {
          this.activeSubmenu.show();
        }
        break;
      case 'Enter':
        (document.activeElement as HTMLElement)?.click();
        break;
    }
  }

  handleItemClick(item: MenuItem) {
    if (item.disabled) return;

    item.action?.();
    if (!item.children) {
      this.tippyInstance?.hide();
    }
  }

  handleItemHover(event: MouseEvent, item: MenuItem) {
    if (item.disabled || !item.children) return;

    this.activeSubmenu?.destroy();
    const element = event.target as HTMLElement;

    this.activeSubmenu = tippy(element, {
      content: this.createSubmenuContent(item.children),
      trigger: 'mouseenter',
      interactive: true,
      placement: 'right-start',
      animation: 'fade',
      appendTo: 'parent',
      arrow: false,
      theme: 'dropdown',
      duration: [150, 100],
      onShow: () => element.classList.add('active'),
      onHide: () => element.classList.remove('active')
    });
  }

  private createSubmenuContent(items: MenuItem[]): HTMLElement {
    const div = document.createElement('div');
    div.className = 'menu';
    div.setAttribute('role', 'menu');

    items.forEach(item => {
      const button = document.createElement('button');
      button.className = 'menu-item';
      button.textContent = item.label as string;
      button.setAttribute('role', 'menuitem');
      if (item.disabled) {
        button.setAttribute('aria-disabled', 'true');
        button.classList.add('disabled');
      }
      button.addEventListener('click', () => {
        if (!item.disabled) {
          item.action?.();
          this.tippyInstance?.hide();
        }
      });
      div.appendChild(button);
    });

    return div;
  }

  private getFocusableItems(): HTMLElement[] {
    return Array.from(this.tippyInstance?.popper.querySelectorAll('.menu-item:not(.disabled)')!);
  }

  ngOnDestroy() {
    this.tippyInstance?.destroy();
    this.activeSubmenu?.destroy();
  }
}

