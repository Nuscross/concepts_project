import Header from "./Header";
import ConceptsItem from "./ConceptsItem";

function Concepts(props) {
  return (
    <div>
      <Header imageHeader={props.imageHeader} />
      <ul id="concepts">
        <ConceptsItem
          image={props.concepts[0].image}
          title={props.concepts[0].title}
          description={props.concepts[0].description}
        />
        <ConceptsItem
          image={props.concepts[1].image}
          title={props.concepts[1].title}
          description={props.concepts[1].description}
        />
        <ConceptsItem
          image={props.concepts[2].image}
          title={props.concepts[2].title}
          description={props.concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default Concepts;
