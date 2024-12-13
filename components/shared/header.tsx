import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex item-center justify-between py-8">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>

          <Button className="group relative">
            <b>250</b>
            <b>54</b>
          </Button>
        </div>
      </Container>
    </header>
  );
};
