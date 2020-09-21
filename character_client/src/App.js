import React from "react";
import CharacterList from "./CharacterList";
import CharacterView from "./CharacterView";
import CharacterEdit from "./CharacterEdit";
import CharacterNew from "./CharacterNew";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/characters/new" component={CharacterNew} />
        <Route path="/character/:id/edit" component={CharacterEdit} />
        <Route path="/character/:id" component={CharacterView} />
      </Switch>
      {/* <CharacterList></CharacterList>
      <section className="CharacterView">
        <Route path="/characters/:id" component={CharacterView} />
      </section> */}
    </div>
  );
};

export default App;
