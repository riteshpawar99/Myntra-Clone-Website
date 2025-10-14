interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-white p-6">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
