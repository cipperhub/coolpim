import React, { useState } from "react";

interface BookingModalProps {
  children: React.ReactNode;
}

export const BookingModal: React.FC<BookingModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Agendar Visita</h2>
            <p className="text-gray-600 mb-6">Preencha seus dados para agendar uma visita gratuita.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Agendamento realizado! Entraremos em contato.'); setIsOpen(false); }}>
              <input type="text" placeholder="Seu nome" required className="w-full border rounded-lg p-3 mb-3" />
              <input type="tel" placeholder="Seu telefone" required className="w-full border rounded-lg p-3 mb-3" />
              <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Confirmar Agendamento
              </button>
            </form>
            <button onClick={() => setIsOpen(false)} className="mt-4 w-full text-gray-500 text-sm">Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};