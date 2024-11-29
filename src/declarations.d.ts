// declarations.d.ts

declare module 'microfrontend/NewsHeader' {
  const NewsHeader: React.ComponentType<{ className?:string, title: string, imageUrl: string }>;
  export default NewsHeader;
}

declare module 'microfrontend/NewsList' {
  const NewsList: React.ComponentType<{ newsItems: Array<{ title: string, imageUrl: string, summary: string }> }>;
  export default NewsList;
}

declare module 'microfrontend/AdCategoryHeader' {
  const AdCategoryHeader: React.ComponentType<{
    className?: string;
    title: string;
    description: string;
  }>;
  export default AdCategoryHeader;
}

declare module 'microfrontend/AdCard' {
  const AdCard: React.ComponentType<{ ad: { title: string, description: string, price: string, imageUrl: string } }>;
  export default AdCard;
}

declare module 'microfrontend/SponsorSlider' {
  const SponsorSlider: React.ComponentType<{
    sponsors: { name: string; description: string; logoUrl: string }[];
  }>;
  export default SponsorSlider;
}

declare module 'microfrontend/SponsorCard' {
  const SponsorCard: React.ComponentType<{ sponsor: { name: string, description: string, logoUrl: string } }>;
  export default SponsorCard;
}

declare module 'microfrontend/WeatherCard' {
  const WeatherCard: React.ComponentType<{ city: string, temperature: number, condition: string }>;
  export default WeatherCard;
}

declare module 'microfrontend/ForecastList' {
  const ForecastList: React.ComponentType<{ forecast: Array<{ date: string, temperature: number, description: string }> }>;
  export default ForecastList;
}

declare module 'microfrontend/Navbar' {
  const Navbar: FC;  
  export default Navbar;
}