import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const CTA = () => {
  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${mockData.contact.whatsapp}&text=Здравствуйте! Хочу оформить заказ на заправку картриджа`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.contact.phone}`;
  };

  return (
    <section 
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${mockData.cta.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-blue-700/90"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {mockData.cta.title}
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {mockData.cta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-3 py-4 px-8 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              <span>{mockData.cta.buttonText}</span>
            </Button>
            
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 py-4 px-8 text-lg backdrop-blur-sm flex items-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Позвонить сейчас</span>
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-blue-100 text-sm">
              🕰️ {mockData.contact.workingHours} | 📞 {mockData.contact.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};