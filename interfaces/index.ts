export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  children?: React.ReactNode;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}
