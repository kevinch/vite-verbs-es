import { useId } from 'react';

const persons = [
  "yo",
  "tú",
  "él/ella/Ud.",
  "nosotros",
  "vosotros",
  "ellos/ellas/Uds.",
];

function Persons({ isImperative }) {
  if (isImperative) {
    return persons.map(
      (el, i) =>
        i !== 0 && (
          <div style={{ textAlign: "right" }} key={useId()}>
            {el}
          </div>
        )
    );
  }

  return persons.map((el, i) => (
    <div style={{ textAlign: "right" }} key={useId()}>
      {el}
    </div>
  ));
}

export default Persons;
