import Icon from '@/components/ui/icon';

const featuredProducts = [
  {
    id: 1,
    title: 'Оплачивайте Steam и игры',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Покупайте ChatGPT',
    image: 'https://cdn.poehali.dev/files/554c5a4e-3a8b-4446-8637-23db05c786ec.png',
  },
  {
    id: 3,
    title: 'Магия медиа сервисов',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'eSIM для путешествий',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0d1220] to-[#1a1f3a]">
      <header className="border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0e1a]/95">
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
        <section className="py-20">
          <div className="text-center mb-20 space-y-7">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              Оплачивайте зарубежные
              <br />
              сервисы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">рублями</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden rounded-3xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white leading-tight">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
