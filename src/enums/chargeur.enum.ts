export enum ChargeurEnum {
  CBC = 'CBC',
  EMATO = 'EMATO'
}


export const chargeurList: {value: ChargeurEnum, label: ChargeurEnum}[] = [
  {value: ChargeurEnum.CBC, label: ChargeurEnum.CBC},
  {value: ChargeurEnum.EMATO, label: ChargeurEnum.EMATO}
];
