import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

// Define button variants using CVA
export const buttonVariants = cva(
  // Base styles applied to all buttons
  "text-center items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary: "bg-white text-primary hover:bg-gray-200",
        outline:
          "bg-transparent border-2 border-primary text-primary hover:border-primary hover:text-white hover:bg-primary",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200",
        danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        success:
          "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
      fullWidth: {
        true: "w-full block",
        false: "w-auto inline-flex",
      },
      hasShadow: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Small button shadows
      {
        hasShadow: true,
        size: "sm",
        class: "shadow-sm hover:shadow-md active:shadow-sm",
      },
      // Medium button shadows
      {
        hasShadow: true,
        size: "md",
        class: "shadow-md hover:shadow-lg active:shadow-md",
      },
      // Large button shadows
      {
        hasShadow: true,
        size: "lg",
        class: "shadow-lg hover:shadow-xl active:shadow-lg",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      hasShadow: false,
    },
  },
);

// TypeScript interface for Button props
export interface ButtonProps
  extends
    VariantProps<typeof buttonVariants>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
  to?: string;
  className?: string;
}

const Button = ({
  variant,
  size,
  fullWidth,
  hasShadow,
  children,
  to,
  className,
  ...props
}: ButtonProps) => {
  // Generate the className using CVA
  const buttonClassName = clsx(
    buttonVariants({ variant, size, fullWidth, hasShadow }),
    className,
  );

  // Render as Link if 'to' prop is provided, otherwise render as button
  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
