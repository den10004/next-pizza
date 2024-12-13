import { Input } from "../ui/input";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-10 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={100}
          />
          <Input
            type="number"
            min={100}
            max={30000}
            placeholder="30000"
            value={500}
          />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        name="ingredients"
        className="mt-5"
        title="Ингредиенты"
        limit={6}
        defaultItems={[
          {
            text: "Cыр",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
        ]}
        items={[
          {
            text: "Cыр",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Cыр",
            value: "4",
          },
          {
            text: "Моцарелла",
            value: "5",
          },
          {
            text: "Чеснок",
            value: "6",
          },
          {
            text: "Cыр",
            value: "7",
          },
          {
            text: "Моцарелла",
            value: "8",
          },
          {
            text: "Чеснок",
            value: "9",
          },
        ]}
      />
    </div>
  );
};
