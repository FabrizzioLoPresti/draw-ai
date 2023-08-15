import Hero from "@/components/Layout/Main/Hero";
import MainContent from "@/components/Layout/Main/MainContent";
import Text2ImageContent from "@/components/Layout/Main/Text2ImageContent";
import Image2ImageContent from "@/components/Layout/Main/Image2ImageContent";
import Draw2ImageContent from "@/components/Layout/Main/Draw2ImageContent";
import ContentContainer from "@/components/Layout/Main/ContentContainer";
import Newsletter from "@/components/Layout/Main/Newsletter";
import Gallery from "@/components/Layout/Main/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MainContent />

      <ContentContainer
        urlIMagen="https://res.cloudinary.com/dqaun4x76/image/upload/v1692023467/text2image_mbz25i.gif"
        alt="Text to Image"
      >
        <Text2ImageContent />
      </ContentContainer>

      <ContentContainer
        urlIMagen="https://res.cloudinary.com/dqaun4x76/image/upload/v1692103997/image2image_eqz4hr.gif"
        alt="Image to Image"
        isReversed
      >
        <Image2ImageContent />
      </ContentContainer>

      <ContentContainer
        urlIMagen="https://res.cloudinary.com/dqaun4x76/image/upload/v1692104487/draw2image_xvf4zi.gif"
        alt="Draw to Image"
      >
        <Draw2ImageContent />
      </ContentContainer>

      <Newsletter />
      <Gallery />
    </>
  );
}
