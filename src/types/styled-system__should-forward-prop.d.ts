// src/types/styled-system__should-forward-prop.d.ts
declare module '@styled-system/should-forward-prop' {
  const createShouldForwardProp: (
    isPropValid: (prop: string) => boolean,
  ) => (prop: string) => boolean;
  export { createShouldForwardProp };
}
