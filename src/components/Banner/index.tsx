import styled from 'styled-components';

const BannerImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export default function Banner() {
  return (
    <BannerImage
      src={
        'https://res.cloudinary.com/dtglidvcw/image/upload/e_improve:outdoor/c_crop,h_0.70,w_1.00/BUGBUSTER/ldz2movmit4domxmp230.jpg'
      }
      alt="Bug Buster Logo"
      id="bannerImage"
    />
  );
}
