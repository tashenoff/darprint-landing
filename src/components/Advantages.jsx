import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, Shield, DollarSign, Home } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Zap: Zap,
  Shield: Shield,
  DollarSign: DollarSign,
  Home: Home
};

export const Advantages = () => {
  return (
    <section id="advantages" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем надежное функционирование ваших устройств и значительную экономию на печати
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.advantages.map((advantage) => {
            const IconComponent = iconMap[advantage.icon];
            
            return (
              <Card key={advantage.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-100 transition-colors">
                    <IconComponent className="h-8 w-8 text-cyan-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};