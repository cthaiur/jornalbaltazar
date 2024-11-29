import React, { Suspense } from 'react';
import Navbar from './components/Navbar';

// Importação dos componentes do microfrontend
const NewsHeader = React.lazy(() => import('microfrontend/NewsHeader'));
const NewsList = React.lazy(() => import('microfrontend/NewsList'));
const AdCategoryHeader = React.lazy(() => import('microfrontend/AdCategoryHeader'));
const AdCard = React.lazy(() => import('microfrontend/AdCard'));
const SponsorSlider = React.lazy(() => import('microfrontend/SponsorSlider'));
const SponsorCard = React.lazy(() => import('microfrontend/SponsorCard'));
const WeatherCard = React.lazy(() => import('microfrontend/WeatherCard'));
const ForecastList = React.lazy(() => import('microfrontend/ForecastList'));

const App: React.FC = () => {
  
  return (
    <div className="relative min-h-screen bg-contain bg-top" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg)' }}>
      <Navbar />
      {/* Principal Container */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-50 bg-black">

        {/* Header de Notícias */}
        <Suspense fallback={<div>Carregando NewsHeader...</div>}>
          <NewsHeader className="w-1/3 m-5" title={headerData.title} imageUrl={headerData.imageUrl} />
        </Suspense>

        {/* Lista de Notícias */}
        <Suspense fallback={<div>Carregando NewsList...</div>}>
          <NewsList newsItems={newsItems} />
        </Suspense>

        {/* Categorias de Anúncios */}
        <Suspense fallback={<div>Carregando AdCategoryHeader...</div>}>
          <AdCategoryHeader className="" title={adCategoryData.title} description={adCategoryData.description} />
        </Suspense>

        {/* Cards de Anúncios */}
        <div className="flex justify-center w-full px-4">
          {ads.map((ad, index) => (
            <Suspense key={index} fallback={<div>Carregando AdCard...</div>}>
              <div className="w-1/3 mx-2">
                <AdCard ad={ad} />
              </div>
            </Suspense>
          ))}
        </div>

        {/* Cards de Patrocinadores */}
        <div className="flex flex-wrap justify-center w-full px-4 gap-4">
          {sponsorsData.map((sponsor, index) => (
            <Suspense key={index} fallback={<div>Carregando SponsorCard...</div>}>
              <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mx-2">
                <SponsorCard sponsor={sponsor} />
              </div>
            </Suspense>
          ))}
        </div>


        {/* Cartões do Tempo */}
        <div className="flex justify-center w-full px-4">
          <Suspense fallback={<div>Carregando WeatherCard...</div>}>
            <div className="w-1/3 mx-2">
              <WeatherCard
                city="São Paulo"
                temperature={25} // Temperatura em Celsius
                condition="Ensolarado"
              />
              <ForecastList
                forecast={[
                  { date: "2024-11-29", temperature: 25, description: "Ensolarado" },
                  { date: "2024-11-30", temperature: 22, description: "Nublado" },
                  { date: "2024-12-01", temperature: 19, description: "Chuvoso" },
                ]}
              />
            </div>
          </Suspense>

        </div>
      </div>
    </div>
  );
};

export default App;

const headerData = {
  title: "Notícias de Hoje",
  imageUrl: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2024/05/pro-20240527071824515954.png"
};

const adCategoryData = {
  title: "Classificados de Automóveis",
  description: "Encontre carros, motos e peças para venda."
};

const sponsorsData = [
  {
    name: 'Sponsor 1',
    description: 'Patrocinador do evento de tecnologia.',
    logoUrl: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp',
  },
  {
    name: 'Sponsor 2',
    description: 'Patrocinador do evento de esportes.',
    logoUrl: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp',
  },
  {
    name: 'Sponsor 3',
    description: 'Patrocinador do evento de música.',
    logoUrl: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp',
  },
  {
    name: 'Sponsor 4',
    description: 'Patrocinador do evento de arte.',
    logoUrl: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp',
  },
];

const newsItems = [
  {
    title: "Notícia 1",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp",
    summary: "Resumo da notícia 1"
  },
  {
    title: "Notícia 2",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp",
    summary: "Resumo da notícia 2"
  },
  {
    title: "Notícia 3",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp",
    summary: "Resumo da notícia 3"
  }
];

const ads = [
  {
    title: "Anúncio 1",
    description: "Descrição do anúncio 1",
    price: "R$ 500,00",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp"
  },
  {
    title: "Anúncio 2",
    description: "Descrição do anúncio 2",
    price: "R$ 300,00",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp"
  },
  {
    title: "Anúncio 3",
    description: "Descrição do anúncio 3",
    price: "R$ 200,00",
    imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/Como-inserir-imagem-ou-logo-usando-HTML-no-seu-site-1.webp"
  }
];