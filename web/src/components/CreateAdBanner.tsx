import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

function CreateAdBanner() {
	return (
		<div className="mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
			<div className="bg-[#2a2634] px-8 py-6 mt-1 flex justify-between items-center">
				<div>
					<strong className="text-2lx text-white font-black block">
						Não encontrou seu duo?
					</strong>

					<span className="text-zinc-400 block">
						Publique um anúncio para encontrar novos players!
					</span>
				</div>
				<Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-700 duration-300 text-white rounded flex items-center gap-3">
					<MagnifyingGlassPlus size={24} />
					Publicar Anúncio
				</Dialog.Trigger>
			</div>
		</div>
	);
}

export default CreateAdBanner;