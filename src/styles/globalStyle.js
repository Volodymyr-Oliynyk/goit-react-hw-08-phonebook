import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul{ 
    list-style-type: none;
  }

  
a{
  text-decoration: none;
}

.container{
display: flex;
}
input {
  border-radius: 4px;
  background-color: #fafafa;
  color: #333;
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  width: 120px;
  height: 7px;
}`;
