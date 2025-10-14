import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {SensTrafficEnum} from "../enums/sens-traffic.enum";
import {DatePipe} from "@angular/common";
import {Options} from "@popperjs/core";
import { StatusDemandEnum } from "../enums/sttatus-demande.enum";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getConvenialRatio(percent: number) {
  switch (percent) {
    case 0.4:
      return "1/3";
    case 0.5:
      return "1/2";
    case 0.6:
      return "2/3";
    default:
      return `1`;
  }
}

export function getFormattedSensTrafic(sensTrafic: SensTrafficEnum | undefined) {
  switch (sensTrafic) {
    case SensTrafficEnum.IMPORT:
      return "A L'IMPORT";
    case SensTrafficEnum.EXPORT:
      return "A L'EXPORT";
    default:
      return "A L'EXPORT";
  }
}

export function formatDate(date: any, format: string): string {
  return new DatePipe('en-US').transform(date, format)!.toString();
}

export function getPopperConfig(): Partial<Options> {
  return {
    strategy: 'fixed',
  };
}


export function snakeCaseToTitleCase(str: string) {
  if(str === undefined || str === null) {
    return '—';
  }
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', ' ');
  });
}

export function parseJSONValues<T>(input: any): T {
  if (Array.isArray(input)) {
    return input.map(item => parseJSONValues(item)) as T;
  } else if (typeof input === 'object' && input !== null) {
    return Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, parseJSONValues(value)])
    ) as T;
  } else if (typeof input === 'string') {
    if (!isNaN(Number(input))) {
      return Number(input) as T;
    } else if (input.toLowerCase() === 'true') {
      return true as T;
    } else if (input.toLowerCase() === 'false') {
      return false as T;
    }
  }
  return input as T;
}




