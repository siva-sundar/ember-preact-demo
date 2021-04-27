import "preact-app/style/index.css";
import App from "preact-app/components/app";
import { render } from "preact";
export default App;

window.renderPreactApp = function (element) {
  render(<App />, element);
};
