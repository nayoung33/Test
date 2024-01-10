import React, {Component} from "react";
import './App.css';
import {useState} from 'react';

function Article(props) {
    return   <article>
    <h2>{props.title}</h2>
    {props.body}
</article>
}

function Header(props) {
    console.log('props, props, props title');
    return  <header>
    <h1><a href="/" onClick={(event)=>{event.preventDefault();
    props.onChangeMode();
    }}>{props.title}</a></h1>
    </header>
}
function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id}onClick={event =>{event.preventDefault();
         props.onChangeMode(Number(event.target.id));}}>{t.title}</a></li>)
    }
    return <nav>
    <ol>
        {lis}
    </ol>
</nav>
}

function Create(props) {
    return <article>
      <h2>CREATE</h2>  
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>

      </form>
    </article>
}
function App() {
    const[id, setId] = useState(null);

    //const _mode = useState('WELCOME');
    //const mode = _mode[0];
    //const setMode = _mode[1];

    const [mode, setMode] = useState('WELCOME');
    const [nexId, setNextId] = useState(4);
    const [topics, setTopics] = useState ([
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'},
    ]);
    let content = null;
    if (mode === 'WELCOME') {
        content =   <Article title="WELCOM" body="Hello, WEB"></Article>
    } else if (mode === 'Read') {
        let title, body = null;
        for(let i=0; i<topics.length; i++) {
            console.log(topics[i], id, id);
            if(topics[i].id === id){title = topics[i].title;
            body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
    } else if(mode === 'CREATE') {
        content = <Create onClick={(title, body)=>{
            const newTopic = {id:setNextId, title:title, body:body}
            const newTopics = [...topics]
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('Read');
            setId(nexId);
            setNextId(nexId+1);

        }}></Create>
    }
    return (
        <div>
           <Header title="WEB" onChangeMode={()=>{mode = setMode('WELCOME');}}></Header>
           <Nav topics={topics} onChangeMode={(id)=>{mode = setMode('Read')
            setId(id); }}></Nav>
           {content}
           <a href="/create" onClick={event=>{event.preventDefault();
            setMode('CREATE'); 
        }}>Create</a>
        </div>
    );
}
export default App;