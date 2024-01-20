import { SocialLinks } from "./SocialLinks";
import { FooterNavigation } from "./FooterNavigation";
export const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-700">
      <FooterNavigation />
      <SocialLinks />
      <p className="text-center text-white pb-8">
        Copyright {date}. Všechna práva vyhrazena.
      </p>
    </footer>
  );
};
