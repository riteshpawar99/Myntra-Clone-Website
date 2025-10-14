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
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
