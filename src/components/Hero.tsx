import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Sprowadzamy Twoje Wymarzone Auto z Zagranicy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Zajmujemy się całym procesem - od znalezienia pojazdu, przez transport, po rejestrację w kraju.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Uzyskaj Wycenę</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#process">Dowiedz się więcej</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
