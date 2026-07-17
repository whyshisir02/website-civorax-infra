import CategoryPage from "@/features/our-work/CategoryPage";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { category } = await params;

  return <CategoryPage categorySlug={category} />;
}