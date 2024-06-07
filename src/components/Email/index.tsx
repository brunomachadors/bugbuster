import { MaterialIcon } from '../Icons/style';
import { EmailContainer, EmailLink } from './style';

function Email() {
  return (
    <EmailContainer>
      <MaterialIcon iconName="mail"></MaterialIcon>
      <EmailLink href="mailto:brunomachadors@gmail.com">
        brunomachadors@gmail.com
      </EmailLink>
    </EmailContainer>
  );
}

export default Email;
