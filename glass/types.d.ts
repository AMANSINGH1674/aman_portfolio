declare module 'leva/plugin' {
  export function createPlugin(config: any): any;
  export function useInputContext<T = any>(): T;
  export type LevaInputProps<V, S = {}, T = string> = {
    label: string;
    displayValue: T;
    value: V;
    onChange: (value: V) => void;
    onUpdate: (value: V) => void;
    settings: S;
    disabled?: boolean;
    [key: string]: any;
  };
  export const Components: any;
}

declare module '@/glass/Controls' {
  export const useLevaControls: () => {
    controls: any;
    controlsAPI: any;
    lang: any;
  };
}
