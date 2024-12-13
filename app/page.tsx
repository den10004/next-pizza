import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/product-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <div>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font extrabold"></Title>
        <Categories />
        <SortPopup />
      </Container>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={0}
              />

              <ProductsGroupList
                title="Завтрак"
                products={[
                  {
                    id: 1,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "sd",
                    imageUrl: "",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
