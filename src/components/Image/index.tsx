import styled from 'styled-components';

interface PostImageProps {
  imageUrl: string;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 40vw;
  height: auto;
  margin-top: 5vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PostImage: React.FC<PostImageProps> = ({ imageUrl }) => {
  return (
    <ImageContainer>
      <Image src={imageUrl} alt="Imagem relacionada à publicação" />
    </ImageContainer>
  );
};

export default PostImage;
