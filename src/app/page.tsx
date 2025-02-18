import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const secondHeroPost = allPosts[1];

  const morePosts = allPosts.slice(2);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        <HeroPost
          title={secondHeroPost.title}
          coverImage={secondHeroPost.coverImage}
          date={secondHeroPost.date}
          author={secondHeroPost.author}
          slug={secondHeroPost.slug}
          excerpt={secondHeroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}