import Card from '../card/Card.jsx';

export default function Cards({characters, onclose}) {
   console.log(characters);
   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            borderBlock: "15xp",
            backgroundColor: "grey",
         }}
      >
         {
            characters.map(character =>(
               <Card 
                  key ={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onclose}
               />
            ))
         }
      </div>
   );
}
