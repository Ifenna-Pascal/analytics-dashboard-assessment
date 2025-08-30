import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const shellVariants = cva("grid gap-[22pz]", {
	variants: {
		variant: {
			default:
				"container mx-auto w-full max-w-screen-2xl space-y-6 px-4 py-5 md:px-4 md:py-10 lg:px-[26px]",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ShellProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof shellVariants> {
	as?: React.ElementType;
}

/**
 * @component @name Shell
 * @description Shell container component, renders a container with children.
 * Wrapping your page with this gives consistency on all pages
 *
 *
 * @param {Object} props - Shell component props and any valid DIV attribute
 *
 */

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
	return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
