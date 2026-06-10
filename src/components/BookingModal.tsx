import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

export function BookingModal({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    if (date && time) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration logic will go here
    console.log({ date, time, name, phone });
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setTimeout(() => {
        setStep(1);
        setDate(undefined);
        setTime("");
        setName("");
        setPhone("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Agendar Visita Gratuita</DialogTitle>
          <DialogDescription>
            Escolha o melhor horário para receber nossa equipe. A visita de avaliação é 100% gratuita.
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-6 py-4">
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6">
              <div className="flex-1">
                <Label className="mb-2 block">Data da Visita</Label>
                <div className="border rounded-md inline-block bg-background">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <Label className="mb-2 block">Horário</Label>
                <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      type="button"
                      variant={time === slot ? "default" : "outline"}
                      className="w-full"
                      onClick={() => setTime(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Button 
              className="w-full font-display text-lg h-12" 
              disabled={!date || !time}
              onClick={handleNext}
            >
              Continuar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {date ? format(date, "dd 'de' MMMM", { locale: ptBR }) : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{time}</span>
              </div>
              <Button type="button" variant="link" size="sm" onClick={() => setStep(1)} className="h-auto p-0">
                Alterar
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="Seu nome"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone / WhatsApp *</Label>
              <Input 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
                placeholder="(11) 99999-9999"
              />
            </div>

            <Button type="submit" className="w-full font-display text-lg h-12 mt-4">
              Confirmar Agendamento
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Você não pagará nada pela visita técnica.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
