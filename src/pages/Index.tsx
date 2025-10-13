import { useState } from 'react';
import Icon from '@/components/ui/icon';

const modalData = [
  {
    id: 1,
    title: 'Лучший тиммейт —\nHey, Store!',
    description: 'Пополняйте игры и сервисы за пару кликов',
    image: 'https://cdn.poehali.dev/files/c88c65d9-f041-4316-9096-a917f4d82c68.png',
    buttonText: 'ПОДРОБНЕЕ',
    bgColor: 'bg-gradient-to-b from-slate-400/30 to-slate-600/20',
  },
  {
    id: 2,
    title: 'ChatGPT\nпо выгодным ценам',
    description: 'Выбирай любой из двух тарифов на месяц — Plus или Pro',
    image: 'https://cdn.poehali.dev/files/29cdfb46-e1bd-4000-aa59-81069292b460.png',
    buttonText: 'КУПИТЬ CHATGPT',
    bgColor: 'bg-gradient-to-b from-green-500/30 to-green-700/20',
  },
  {
    id: 3,
    title: 'Овладейте магией\nгенераций с Krea',
    description: 'Нейросеть, раздвигающая границы творчества',
    image: 'https://api.freelogodesign.org/assets/blog/thumb/4ddcba00db4142899d322683c681601a_1176x840.jpg?t=638369603760000000',
    buttonText: 'КУПИТЬ KREA',
    bgColor: 'bg-gradient-to-b from-gray-700/40 to-black/30',
  },
  {
    id: 4,
    title: 'eSIM для\nрегистрации',
    description: 'Виртуальные номера для активации сервисов',
    image: 'https://www.iotinsider.com/wp-content/uploads/2024/02/esim-1.jpg',
    buttonText: 'КУПИТЬ ESIM',
    bgColor: 'bg-gradient-to-b from-blue-500/30 to-blue-700/20',
  },
];

const featuredProducts = [
  {
    id: 1,
    title: 'Оплачивайте\nSteam и игры',
    image: 'https://cdn.poehali.dev/files/c88c65d9-f041-4316-9096-a917f4d82c68.png',
  },
  {
    id: 2,
    title: 'Покупайте\nChatGPT',
    image: 'https://cdn.poehali.dev/files/29cdfb46-e1bd-4000-aa59-81069292b460.png',
  },
  {
    id: 3,
    title: 'Магия медиа\nсервисов',
    image: 'https://api.freelogodesign.org/assets/blog/thumb/4ddcba00db4142899d322683c681601a_1176x840.jpg?t=638369603760000000',
  },
  {
    id: 4,
    title: 'eSIM для\nрегистрации',
    image: 'https://www.iotinsider.com/wp-content/uploads/2024/02/esim-1.jpg',
  },
];

const categories = [
  { icon: 'Brain', label: 'Нейросети' },
  { icon: 'CreditCard', label: 'Зарубежная карта' },
  { icon: 'Palette', label: 'Для дизайна' },
  { icon: 'Star', label: 'Развлечения' },
  { icon: 'Briefcase', label: 'Для работы' },
  { icon: 'Layout', label: 'Онлайн-доски' },
  { icon: 'MoreHorizontal', label: 'Другое' },
];

const Index = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (id: number) => {
    const index = modalData.findIndex(item => item.id === id);
    setCurrentSlide(index);
    setSelectedModal(id);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modalData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modalData.length) % modalData.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020818] via-[#0a0f1e] to-[#0f1629]">
      <header className="border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 bg-[#020818]/95">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Hey, Store!</span>
            </div>
            
            <button className="p-2.5 hover:bg-white/5 rounded-xl transition-colors">
              <Icon name="Search" size={24} className="text-white/80" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <section className="py-12">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
              Оплачивайте зарубежные
              <br />
              сервисы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">рублями</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-12">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product.id)}
                className="group relative overflow-hidden rounded-[28px] cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden rounded-[28px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-lg font-bold text-white leading-snug whitespace-pre-line">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide max-w-7xl mx-auto mb-10">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center gap-3 py-4 px-5 hover:bg-white/5 rounded-2xl flex-shrink-0 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all">
                  <Icon name={cat.icon as any} size={28} className="text-white/90" />
                </div>
                <span className="text-sm text-white/80 whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Популярное</h2>
              <span className="text-3xl">🔥</span>
            </div>
          </div>
        </section>
      </main>

      {selectedModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevSlide}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <Icon name="ChevronLeft" size={28} className="text-white" />
            </button>

            <div className={`relative rounded-[32px] overflow-hidden ${modalData[currentSlide].bgColor} backdrop-blur-xl`}>
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex gap-1">
                  {modalData.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all ${
                        idx === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <Icon name="X" size={20} className="text-white" />
                </button>
              </div>

              <div className="relative pt-16 px-6 pb-6">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-3 leading-tight whitespace-pre-line">
                    {modalData[currentSlide].title}
                  </h2>
                  <p className="text-white/90 text-base">
                    {modalData[currentSlide].description}
                  </p>
                </div>

                <div className="relative h-[400px] mb-6 rounded-3xl overflow-hidden">
                  <img
                    src={modalData[currentSlide].image}
                    alt={modalData[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button className="w-full py-4 bg-white hover:bg-white/90 text-black font-bold text-sm rounded-2xl transition-colors">
                  {modalData[currentSlide].buttonText}
                </button>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <Icon name="ChevronRight" size={28} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
