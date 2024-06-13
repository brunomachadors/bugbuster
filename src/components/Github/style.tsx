import styled from 'styled-components';

export const GithubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`;

export const GithubIcon = styled.img`
  /* Para telas grandes (desktop) */

  width: 13%;

  /* Para telas pequenas (celulares) */
  @media (max-width: 575px) {
    width: 12%;
  }
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;
``;
