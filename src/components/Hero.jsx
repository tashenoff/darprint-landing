import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${mockData.contact.whatsapp}&text=Здравствуйте! Хочу заправить картридж`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {mockData.hero.title}
              <span className="block text-cyan-600">{mockData.hero.subtitle}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {mockData.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center space-x-2 py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="h-6 w-6" />
                <span>{mockData.hero.ctaText}</span>
              </Button>
              
              <Button
                onClick={() => window.location.href = `tel:${mockData.contact.phone}`}
                variant="outline"
                size="lg"
                className="py-4 px-8 text-lg border-2 border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300 transition-all"
              >
                Позвонить: {mockData.contact.phone}
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Работаем с 2015 года</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Гарантия 3 месяца</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Выезд на дом в офис</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={mockData.hero.image}
                alt="Заправка картриджей в Астане"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900">💡 Экономьте до 70%</p>
                <p className="text-xs text-gray-600">по сравнению с новыми картриджами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};