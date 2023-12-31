declare module '*.module.scss';

// declare global {
//   interface FormData {
//     entries(): Iterator<[USVString, USVString | Blob]>;
//   }
// }
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
