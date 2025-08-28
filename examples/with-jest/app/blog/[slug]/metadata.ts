type Params = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}
