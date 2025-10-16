import CategoryCard from "./CategoryCard";
import mensFashion from "@/assets/mens-fashion.jpg";
import womensFashion from "@/assets/womens-fashion.jpg";
import kidsFashion from "@/assets/kids-fashion.jpg";
import beauty from "@/assets/beauty.jpg";
import homeLiving from "@/assets/home-living.jpg";

const CategorySection = () => {
  const categories = [
    { image: mensFashion, title: "Men" },
    { image: womensFashion, title: "Women" },
    { image: kidsFashion, title: "Kids" },
    { image: beauty, title: "Beauty" },
    { image: homeLiving, title: "Home & Living" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer">
          SHOP BY <span className="text-muted-foreground">CATEGORY</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, idx) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CategoryCard
                image={category.image}
                title={category.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
