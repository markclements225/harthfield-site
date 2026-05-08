import { LucideIcon } from 'lucide-react';

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <Icon size={40} strokeWidth={1} className="text-sage" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-charcoal mb-2 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-sm text-charcoal leading-relaxed">
        {description}
      </p>
    </div>
  );
}
