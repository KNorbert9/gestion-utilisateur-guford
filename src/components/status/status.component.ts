import {Component, Input} from '@angular/core';
import {cn} from "../../lib/utils";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  @Input('haveIcon') haveIcon: boolean = false;
  @Input('content') content: string = "status";
  @Input('status') status: "success" | "error" | "warning" | "pending" | "info" | "loading" | "default" = "default";
  protected readonly cn = cn;
}
