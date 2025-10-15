interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer animate-fade-in">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted border-4 border-dashed border-[hsl(45,93%,58%)] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-white/90 text-sm font-semibold">50-80% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
