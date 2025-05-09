import { Button } from "../ui/button";

import { Facebook, Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";

export function UserCard() {

    const icons = [
        {
            icon: <Github />,
            href: "https://github.com/dev",
        },
        {
            icon: <Instagram />,
            href: "https://instagram.com/dev",
        },
        {
            icon: <Linkedin />,
            href: "https://linkedin.com/dev",
        },
        {
            icon: <Twitter />,
            href: "https://twitter.com/dev",
        },
        {
            icon: <Plus />,
            href: "https://facebook.com/dev",
        },

    ]
    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-border-primary bg-[#121212] rounded-3xl text-white">
            <div className="size-48">
                <img
                    src="/me.webp"
                    alt="Dev"
                    className="rounder-full object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
                        Dev
                    </h3>
                </div>
                <p className="opacity-40">
                    Eu faço produtos para a Internet
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex justify-between">
                    {icons.map((icon) => (
                        <button
                            key={icon.href}
                            className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
                        >
                            {icon.icon}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full h-[172px]">
                <div className="w-full flex flex-col items-center gap-3">
                    <Button className="w-full">Template Saas - Compre Agora</Button>
                   
                </div>
            </div>
        </div>
    );
}