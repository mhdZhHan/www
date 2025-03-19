import type { HTMLAttributes } from "astro/types";

type SVGElementType =
  | "circle"
  | "ellipse"
  | "g"
  | "line"
  | "path"
  | "polygon"
  | "polyline"
  | "rect";

export type IconNode = [
  elementName: SVGElementType,
  attrs: Record<string, string>,
][];

export interface LucideProps extends HTMLAttributes<"svg"> {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type LucideIcon = (props: LucideProps) => any;
