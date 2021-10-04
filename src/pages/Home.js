import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <li>
        <Link to="/features">Features</Link>
      </li>
      <li>
        <Link to="/layout">Layout</Link>
      </li>
      <li>
        <Link to="/temas">Temas</Link>
      </li>
      <li>
        <Link to="/formulários">Formulários</Link>
      </li>
      <li>
        <Link to="/display-de-dados">Display de dados</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
      <li>
        <Link to="/overlay">Overlay</Link>
      </li>
      <li>
        <Link to="/tipografia">Tipografia</Link>
      </li>
      <li>
        <Link to="/disclosure">Disclosure</Link>
      </li>
      <li>
        <Link to="/navegação">Navegação</Link>
      </li>
      <li>
        <Link to="/media and Icons">Media and Icons</Link>
      </li>
      <li>
        <Link to="/outros">Outros</Link>
      </li>
      <li>
        <Link to="/hooks">Hooks</Link>
      </li>
    </div>
  );
}
