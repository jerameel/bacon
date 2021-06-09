declare module 'react-native-loader' {
  interface ILoader {
    size: number;
    color: string;
  }
  export function Bubbles(props: ILoader): any;
  export function DoubleBounce(props: ILoader): any;
  export function Bars(props: ILoader): any;
  export function Pulse(props: ILoader): any;
}
