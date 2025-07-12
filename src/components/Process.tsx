import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Car, FileText, KeyRound } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Wyszukiwanie",
    description: "Znajdujemy idealne auto na podstawie Twoich wytycznych i budżetu.",
  },
  {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Transport i Logistyka",
    description: "Organizujemy bezpieczny transport pojazdu pod wskazany adres.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Formalności i Cło",
    description: "Zajmujemy się wszystkimi opłatami celno-skarbowymi i dokumentacją.",
  },
  {
    icon: <KeyRound className="w-8 h-8 text-primary" />,
    title: "Rejestracja i Odbiór",
    description: "Przygotowujemy auto do rejestracji, a Ty odbierasz gotowy pojazd.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Jak to działa?</h2>
          <p className="mt-2 text-lg text-muted-foreground">Nasz proces w czterech prostych krokach.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-secondary border-none">
              <CardHeader className="flex flex-col items-center text-center">
                {step.icon}
                <CardTitle className="mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
