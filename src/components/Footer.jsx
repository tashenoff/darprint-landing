import React from 'react';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { mockData } from '../data/mock';

export const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${mockData.contact.whatsapp}&text=Здравствуйте! У меня есть вопрос по заправке картриджа`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.contact.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${mockData.contact.email}`;
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">Dar</span>print
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Профессиональная заправка картриджей в Астане. Мы гарантируем качественную работу с 2015 года.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handleCall}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Позвонить</span>
              </button>
            </div>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <button 
                  onClick={handleCall}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {mockData.contact.phone}
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <button 
                  onClick={handleWhatsApp}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp: {mockData.contact.whatsapp}
                </button>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{mockData.contact.workingHours}</span>
              </div>
            </div>
          </div>
          
          {/* График работы */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Наши услуги</h3>
            
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Лазерные картриджи</li>
              <li>• Цветные картриджи</li>
              <li>• Выезд на дом в офис</li>
              <li>• Быстрое выполнение</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Darprint. Все права защищены.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Сделано с ❤️ в Астане
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};