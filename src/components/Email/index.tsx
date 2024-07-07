import { MaterialIcon } from '../Icons/style';
import { EmailContainer, EmailLink } from './style';

function Email() {
  return (
    <EmailContainer id="emailContainer">
      <EmailLink href="mailto:brunomachadors@gmail.com" id="emailLink">
        <MaterialIcon iconName="mail"></MaterialIcon>
        brunomachadors@gmail.com
      </EmailLink>
    </EmailContainer>
  );
}

export default Email;
