import { useState } from "react";
import "./App.css";

export default function App() {

  const INIT_ITEMS = [
    {
      id: crypto.randomUUID(),
      name: 'pan'
    },
    {
      id: crypto.randomUUID(),
      name: 'macarrones'
    },
  ]

  const [items, setItems] = useState(INIT_ITEMS);

  const addItem = e => {
    e.preventDefault();
    const newItem = {
      id: crypto.randomUUID(),
      name: e.target[0].value
    }
    setItems([...items, newItem])
    e.target[0].value = ''
  }

  return (
    <main className="app">
      <aside>
        <form action="" onSubmit={e => addItem(e)}>
          <label htmlFor="producto">
            <span>Agregar producto: </span>
            <input type="text" />
          </label>
          <button>Agregar</button>
        </form>
      </aside>
      <section>
        <ul>
          {
            items.map(item => {
              return(
                <li key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}

