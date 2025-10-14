import {CommonModule} from "@angular/common";
import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonModule, DropdownModule} from '@coreui/angular';
import {toast} from "ngx-sonner";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {DefaultLayoutService} from "../default-layout/default-layout.service";
import { TippyTooltipDirective } from "../../../directives/tippy-tooltip/tippy-tooltip.directive";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-custom-header',
  standalone: true,
  imports: [ButtonModule, TippyTooltipDirective, RouterOutlet, DropdownModule, CommonModule],
    templateUrl: './custom-header.component.html',
    styleUrl: './custom-header.component.scss'
})
export class CustomHeaderComponent implements OnInit {

 notifCounter: WritableSignal<number> = signal<number>(0);
 notifications: WritableSignal<any> = signal<Notification[]>([]);


  constructor(public defaultLayoutService: DefaultLayoutService) {}



  logout() {
    //
    // if(environment.production){
    //   window.location.href = 'https://test.guford.com';
    //   return;
    // }

    this.defaultLayoutService.navItemsData = [];
    localStorage.clear()
  }

  async ngOnInit() {



  }


}
