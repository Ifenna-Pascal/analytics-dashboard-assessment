import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all ease-in focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-300 hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				setup: "bg-primary-50 text-primary hover:bg-primary-200", // New variant
			},
			size: {
				default: "flex p-4",
				sm: "inline-flex rounded-md px-3 py-2",
				lg: "w-full rounded-md px-8 py-6",
				icon: "inline-flex size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const loaderVariants = {
	default: "before:border-white/70 before:border-b-white/20",
	secondary: "before:border-primary/50 before:border-b-primary/20",
	destructive: "before:border-white/70 before:border-b-white/20",
	outline: "before:border-b-primary/50 before:border-t-primary/20",
	ghost: "before:border-b-primary/50 before:border-t-primary/20",
	link: "before:border-b-primary/50 before:border-t-primary/20",
	setup: "before:border-primary/50 before:border-b-primary/20",
};

function Button({
	className,
	variant,
	size,
	loading,
	children,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{loading && (
				<span
					className={cn(
						"flex cursor-wait items-center before:size-3 before:animate-spin before:rounded-full before:border-3 before:border-black/20 before:border-b-primary",
						loaderVariants[variant ?? "default"],
					)}
				/>
			)}
			{children}
		</Comp>
	);
}

export { Button, buttonVariants };
