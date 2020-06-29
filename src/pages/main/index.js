import React, { Component } from "react";
import api from '../../services/api'; // Importar a API
import "./styles.css"

export default class main extends Component {

    state = {        //O conceito de Estado é sempre um objeto
        note: [],
    }

    componentDidMount() {// métodos que pertencem ao react é liberado o uso de funções padrão e não somene arrow funcition
    this.loadNotes();  // tem que usar função normal para o metodo this referenciar a classe;
    }
    
    loadNotes = async () => { // Arrow functions não sobreescreve o valor do this
        const response = await api.get('/');

        this.setState({ note: response.data.docs });
     };
    
    render() {
        const { note } = this.state;
        return (
            <div className="note-list">   
            {note.map(note =>( //Sempre que se usa o método map dever ser inserido o atributo key com um valor único.
                <article key={note._id}>
                    <strong>{note.title}</strong>
                    <p>{note.description}</p>
                    <p>{note.createdAt}</p>
                </article> // 
            ))}
            </div>
        )
    }
}