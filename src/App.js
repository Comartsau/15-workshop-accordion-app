import { useState } from "react";
import SingleContent from "./components/SingleContent";
import data from "./data"
import "./App.css"

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>เครื่องมือพัฒนาเว็ปปี 2023</h3>
        <section>
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
