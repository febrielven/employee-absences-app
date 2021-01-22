declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  type SvgProps = {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: Color;
    title?: string;
  };

  const Component: React.FC<SvgProps>;
  export default Component;
}

/**
 * Icon
 */

type SVGIconProps = {color: string; size: number};
type SVGIconFunction = (props: SVGIconProps) => JSX.Element;

type SVGIconList = {
  close_eye: SVGIconFunction,
  open_eye: SVGIconFunction
};

type IconKey = keyof SVGIconList;