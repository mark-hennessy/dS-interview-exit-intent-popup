import { useState } from "react";
import { Button } from "semantic-ui-react";
import ExitModal from "./ExitModal";

const App = ({ shouldShowModalInitially }) => {
  const [shouldShowModal, setShouldShowModal] = useState(
    shouldShowModalInitially
  );

  return (
    <div className="app">
      <h1>Lorem Ipsum</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Button
        onClick={() => {
          setShouldShowModal(true);
        }}
      >
        Lay Over öffnen
      </Button>

      <ExitModal
        shouldShowModal={shouldShowModal}
        closeModal={() => {
          setShouldShowModal(false);
        }}
      />
    </div>
  );
};

export default App;
