import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function input(props: InputProps) {
	return (
		<input
			{...props}
			className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
		/>
	);
}

export default input;
