import { cn } from "@/src/lib/utils";
import { Container, Categories, SortPopup } from "@/src/components/shared";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex items-center justify-between flex-col sm:flex-row">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
