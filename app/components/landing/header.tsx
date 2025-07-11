import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
            <div className="flex items-center gap-4">
                <img src="/logo.svg" alt="ProjectInBio Logo" />
                <h1 className="text-white text-2xl font-bold">
                    ProjectInBio
                </h1>
            </div>
            <div className="flex items-center gap-4">
                <Button>Minha Pagina</Button>
                <Button>Sair</Button>
            </div>
        </header>
    )
}