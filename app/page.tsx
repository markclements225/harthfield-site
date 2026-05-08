import HomePageClient from './HomePageClient';
import { getImageById } from '@/lib/db/properties';

export default async function Home() {
  // Fetch images by ID
  const heroImage = await getImageById(1);
  const featuredProjectImage = await getImageById(69);

  return (
    <HomePageClient
      heroImage={heroImage}
      featuredProjectImage={featuredProjectImage}
    />
  );
}
