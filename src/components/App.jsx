//importar
import { DivContainer } from './Widget/Styles/DivStyles';

import FeedbackWidget from "./Widget/FeedbackWidget";
import Contacts from './Contacts/Contacts';

import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <section>
      <DivContainer>
        <FeedbackWidget />
      </DivContainer>
      <DivContainer>
        <Contacts />
      </DivContainer>
      <Toaster /> {/* Agrega el componente Toaster */}
    </section>
  );
};
