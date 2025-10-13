import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Printer, Palette, Settings, MessageCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Printer: Printer,
  Palette: Palette,
  Settings: Settings
};

export const Services = () => {
  const handleWhatsApp = (service) => {
    window.open(`https://api.whatsapp.com/send?phone=${mockData.contact.whatsapp}&text=Здравствуйте! Интересует услуга: ${service}`, '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная заправка картриджей всех типов с гарантией качества и быстрым выполнением
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-cyan-600">{service.price}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Заказать услугу</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};