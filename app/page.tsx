import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
	async function onSubmit(formData: FormData) {
		"use server";

		const name = formData.get("name");
		const email = formData.get("email");

		console.log(name, email);
	}

	return (
		<main className="w-full">
			<div className="absolute flex align-top justify-end w-full pr-6">
				<ModeToggle />
			</div>
			<Card className="max-w-3xl m-auto mt-12">
				<CardHeader>
					<CardTitle className="flex">
						<span className="flex-1">Bem-vindo ao Sistema, Jhonatan</span>

						<Dialog>
							<DialogTrigger asChild>
								<Avatar className="cursor-pointer">
									<AvatarImage src="https://github.com/jhonatan-oliveiradev.png" />
									<AvatarFallback>JO</AvatarFallback>
								</Avatar>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Editar perfil</DialogTitle>
									<DialogDescription>
										Altere suas informações de perfil aqui. Clique em salvar
										quando terminar.
									</DialogDescription>
								</DialogHeader>
								<form action={onSubmit}>
									<div className="grid gap-4 py-4">
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="name" className="text-right">
												Nome
											</Label>
											<Input
												id="name"
												name="name"
												required
												className="col-span-3"
											/>
										</div>
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="email" className="text-right">
												E-mail
											</Label>
											<Input id="username" required className="col-span-3" />
										</div>
									</div>
								</form>
								<DialogFooter>
									<Button variant="secondary" type="submit">
										Salvar alterações
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</CardTitle>
					<CardDescription>
						Clique na imagem para editar os detalhes do seu usuário.
					</CardDescription>
				</CardHeader>
			</Card>
		</main>
	);
}
