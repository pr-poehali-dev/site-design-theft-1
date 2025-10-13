import Icon from '@/components/ui/icon';

const featuredProducts = [
  {
    id: 1,
    title: 'Оплачивайте\nSteam и игры',
    image: 'https://cdn.poehali.dev/projects/4bcf8f3d-ee8d-4840-bc82-5134ef177026/files/5e988bd1-126b-4c65-b934-3ca848b1d938.jpg',
  },
  {
    id: 2,
    title: 'Покупайте\nChatGPT',
    image: 'https://cdn.poehali.dev/projects/4bcf8f3d-ee8d-4840-bc82-5134ef177026/files/e8b7ae72-372b-4f4e-95cf-55b9d5f1dd7e.jpg',
  },
  {
    id: 3,
    title: 'Магия медиа\nсервисов',
    image: 'https://api.freelogodesign.org/assets/blog/thumb/4ddcba00db4142899d322683c681601a_1176x840.jpg?t=638369603760000000',
  },
  {
    id: 4,
    title: 'eSIM для\nпутешествий',
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
        <section className="py-16">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
              Оплачивайте зарубежные
              <br />
              сервисы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">рублями</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-16">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
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

          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide max-w-7xl mx-auto mb-12">
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
    </div>
  );
};

export default Index;