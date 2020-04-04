import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Person = ({img, name,job, children}) => {
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className="person">
      <img src={url} alt="Person"/>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
    </article>
    
  );
};

const PersonList = () =>{
  return(
    <section className="person-list">
    <Person img="34" name="Wa" job="Developer"/>
    <Person img="22" name="Josh" job="Designer">
        <p>
          This is about me.
        </p>
      </Person>
    <Person img="20" name="Ian" job="Intern"/>
    
   
    </section>
  );
};

ReactDom.render(<PersonList/>, document.getElementById('root'))