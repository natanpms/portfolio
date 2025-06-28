import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
    return (
        <div style={{ animationDuration: '1.1s' }} className="absolute bottom-4 m-2 flex justify-center mx-auto animate-bounce ">
            <a href="#skills" className="cursor-pointer">
                <ChevronDown className="w-10 h-10" />
            </a>
        </div>
    );
}
