import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const featuredProducts = [
  {
    id: 1,
    title: 'Оплачивайте Steam и игры',
    description: 'Пополнение Steam, покупка игр, внутриигровые покупки',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
    gradient: 'from-blue-600/20 to-purple-600/20',
  },
  {
    id: 2,
    title: 'Покупайте ChatGPT',
    description: 'Подписка на ChatGPT Plus, API доступ',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    gradient: 'from-green-600/20 to-emerald-600/20',
  },
  {
    id: 3,
    title: 'Магия нейросетей с Krea',
    description: 'AI-генерация изображений и креативного контента',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=600&fit=crop',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    id: 4,
    title: 'Улучшите планирование с Miro',
    description: 'Онлайн-доски для командной работы',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    gradient: 'from-yellow-600/20 to-orange-600/20',
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#151b2e] to-[#1a1f3a]">
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">ОПЛАТА</span>
            </div>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-muted/50 border-white/10 h-12"
                />
                <Icon name="Search" className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={22} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={22} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={22} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Оплачивайте зарубежные
              <br />
              сервисы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">рублями</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Банковские карты, цифровые сервисы, нейросети и развлечения — всё в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Перейти
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
            <div className="flex items-center gap-3">
              {[
                { icon: 'Brain', label: 'Нейросети' },
                { icon: 'CreditCard', label: 'Зарубежная карта' },
                { icon: 'Palette', label: 'Для дизайна' },
                { icon: 'Gamepad2', label: 'Развлечения' },
                { icon: 'Briefcase', label: 'Для работы' },
                { icon: 'Layout', label: 'Онлайн-доски' },
                { icon: 'MoreHorizontal', label: 'Другое' },
              ].map((cat, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="flex flex-col items-center gap-2 h-auto py-4 px-6 hover:bg-muted/50 rounded-2xl flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon name={cat.icon as any} size={24} />
                  </div>
                  <span className="text-sm whitespace-nowrap">{cat.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'ChatGPT Plus', price: '2 990 ₽', category: 'Нейросети', icon: 'MessageSquare' },
              { name: 'Виртуальная карта Visa', price: '490 ₽', category: 'Банки', icon: 'CreditCard' },
              { name: 'Spotify Premium', price: '199 ₽/мес', category: 'Развлечения', icon: 'Music' },
              { name: 'Adobe Creative Cloud', price: '4 990 ₽', category: 'Дизайн', icon: 'Palette' },
              { name: 'Midjourney', price: '1 990 ₽', category: 'Нейросети', icon: 'Sparkles' },
              { name: 'eSIM для путешествий', price: '590 ₽', category: 'Связь', icon: 'Globe' },
            ].map((product, idx) => (
              <Card
                key={idx}
                className="p-6 border-white/10 bg-card/50 backdrop-blur-sm hover:border-white/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={product.icon as any} size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{product.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Купить
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-24 py-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">ОПЛАТА</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для оплаты зарубежных цифровых сервисов рублями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Нейросети</li>
                <li>Банковские карты</li>
                <li>Для дизайна</li>
                <li>Развлечения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Политика</li>
                <li>Условия</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Оплата. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
