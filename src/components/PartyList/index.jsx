const PartyList = ({ people }) => {


    return (
    <>
      <ul>

{people.map(element => (
  <li>
    <div>
    {element.name}
    {element.age}
    </div>
  </li>  
))}
</ul>

<ul>
  {people.filter((e) => e.age >= 18).map(element => (
  <li>
    <div>
    {element.name}
    {element.age}
    </div>
  </li>  
))}
</ul>
<h1>media das idades</h1>
    <div>
        {people.reduce((a,e) => a + e.age,0) / people.length}
    </div>
    </>
  );
};

export default PartyList;
