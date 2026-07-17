import ProjectDetailPage from "@/features/our-work/ProjectDetailPage";

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { category, slug } = await params;

  return (
    <ProjectDetailPage
      categorySlug={category}
      projectSlug={slug}
    />
  );
}