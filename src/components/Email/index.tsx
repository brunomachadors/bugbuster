import { MaterialIcon } from '../Icons/style';
import { EmailContainer, EmailLink } from './style';

function Email() {
  return (
    <EmailContainer>
      <EmailLink href="mailto:brunomachadors@gmail.com">
        <MaterialIcon iconName="mail"></MaterialIcon>
        brunomachadors@gmail.com
      </EmailLink>
    </EmailContainer>
  );
}

export default Email;
