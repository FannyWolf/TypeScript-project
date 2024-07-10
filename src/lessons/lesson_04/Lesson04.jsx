import "./lesson04.css";
import { forceUsers } from "./data";
import HeroCard from './HeroCard';

export default function Lesson04() {
  return (
    <div className="lesson-container">
      <h3>Lesson 04</h3>
      {forceUsers.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
}
