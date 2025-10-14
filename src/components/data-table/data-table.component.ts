import {Component, Input, signal, WritableSignal} from '@angular/core';
import {ButtonDirective, FormControlDirective, FormSelectDirective, TableDirective, TableModule} from "@coreui/angular";
import {LoadingBarComponent} from "../loading-bar/loading-bar.component";
import {
  ColumnDef, ColumnFiltersState,
  createAngularTable, FlexRenderDirective,
  getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel, SortingState
} from "@tanstack/angular-table";
import {
  ArrowDown, ArrowUp, ChevronFirst, ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FilePenLine,
  LucideAngularModule,
  Menu,
  Trash2
} from "lucide-angular";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}


@Component({
    selector: 'app-data-table',
  standalone: true,

  imports: [
        LucideAngularModule,
        ButtonDirective,
        LoadingBarComponent,
        TableModule,
        FlexRenderDirective,
        FormControlDirective,
        FormSelectDirective,
    ],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss'
})
export class DataTableComponent<TData, TValue> {
  @Input("data") dataIn: WritableSignal<TData[]> = signal<TData[]>([])
  @Input("columns") columns!: ColumnDef<TData, TValue>[];
  @Input("loading") loadingData: boolean = false;
  loadingCamion: boolean = false;
  readonly sorting = signal<SortingState>([]);
  readonly filtering = signal<ColumnFiltersState>([]);
  readonly globalFilter = signal<any>([]);



  table = createAngularTable(() => ({
    data: this.dataIn(),
    columns: this.columns,
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    state: {
      sorting: this.sorting(),
      filtering: this.filtering(),
      globalFilter: this.globalFilter()
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: (updater) => {
      updater instanceof Function
        ? this.sorting.update(updater)
        : this.sorting.set(updater);
    },
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        this.table.setState((prev) => ({
          ...prev,
          pagination: updater(prev.pagination),
        }));
      } else {
        this.table.setState({
          ...this.table.getState(),
          pagination: updater,
        });
      }
    },
    onFilteringChange: (updater: any) => {
      updater instanceof Function
        ? this.filtering.update(updater)
        : this.filtering.set(updater);
    },
    onGlobalFilterChange: (updater: any) => {
      updater instanceof Function
        ? this.globalFilter.update(updater)
        : this.globalFilter.set(updater);
    },
  }));

  constructor() {
    console.log("this.dataIn", this.table)
  }


  changePageSize(event: Event) {
    const pageEvent = event.target as HTMLSelectElement;
    this.table.setState((state) => ({
      ...state,
      pagination: {
        ...state.pagination,
        pageSize: parseInt(pageEvent.value) ,
      },
    }));
  }

  // setSearch(): string {
  //   return (
  //     (this.table.getColumn('immatriculation')?.getFilterValue() as string) ||
  //     (this.table.getColumn('remorque')?.getFilterValue() as string) ||
  //     ''
  //   );
  // }


  onChangeFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    // this.table.getColumn('immatriculation')?.setFilterValue(inputValue) ||
    // this.table.getColumn('remorque')?.setFilterValue(inputValue);
    this.table.setGlobalFilter(String(inputValue));
  }


  getCurrentDisplayRange() {
    const { pageIndex, pageSize } = this.table.getState().pagination;
    const start = pageIndex * pageSize + 1;
    const end = Math.min((pageIndex + 1) * pageSize, this.dataIn().length);
    return { start, end };
  }

  protected readonly ChevronsLeft = ChevronsLeft;
  protected readonly ChevronRight = ChevronRight;
  protected readonly ChevronsRight = ChevronsRight;
  protected readonly ChevronFirst = ChevronFirst;
  protected readonly ChevronLast = ChevronLast;
  protected readonly ChevronLeft = ChevronLeft;
}
