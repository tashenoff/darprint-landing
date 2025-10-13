import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const Header = () => {
  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${mockData.contact.whatsapp}&text=Здравствуйте! Хочу заправить картридж`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.contact.phone}`;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-cyan-600">Dar</span>print
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Услуги
            </a>
            <a href="#advantages" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Преимущества
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 hover:bg-gray-50"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{mockData.contact.phone}</span>
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-2 shadow-md hover:shadow-lg transition-all"
              size="sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};