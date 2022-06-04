import { ImageField } from 'react-admin';
import styled from 'styled-components';

const StyledImageField = styled(ImageField)`
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

export const PreviewImage = ({
  record,
  source,
}: {
  record?: any;
  source?: any;
}) => {
  if (typeof record == 'string') {
    record = {
      [source]: `/public/${record}`,
    };
  }
  return <StyledImageField record={record} source={source} />;
};
