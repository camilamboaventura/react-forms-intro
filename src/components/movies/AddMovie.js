import React from "react";

import TextInput from "../TextInput";
import CheckboxInput from "../CheckboxInput";
import RangeInput from "../RangeInput";
import SelectInput from "../SelectInput";
import RadioInput from "../RadioInput";

// Praticamente todo formulário precisa de state

class AddMovie extends React.Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: 0,
    genre: "default", // Inicializando o state pra option padrão ficar selecionada no input select
    PGRating: "",
    movies: [],
  };

  handleChange = (event) => {
    console.log(event.target.checked);

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário HTML de recarregar a página em um submit

    const newMovie = { ...this.state };

    const updatedArr = [...this.state.movies, newMovie];

    const {
      title,
      director,
      hasOscars,
      IMDbRating,
      genre,
      PGRating,
    } = this.state;

    if (title && director && IMDbRating && genre && PGRating) {
      this.setState({
        movies: [...updatedArr],
        title: "",
        director: "",
        hasOscars: false,
        IMDbRating: 0,
        genre: "default",
        PGRating: "",
      });
    } else {
      window.alert("Please fill all form fields!");
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-8">
          <table class="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Director</th>
                <th scope="col">Has Oscars?</th>
                <th scope="col">IMDB Rating</th>
                <th scope="col">Genre</th>
                <th scope="col">PG Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => {
                return (
                  <tr>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.hasOscars ? "Yes" : "No"}</td>
                    <td>{movie.IMDbRating}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.PGRating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <form>
            {/* Movie Title */}
            <TextInput
              label="Movie Title"
              type="text"
              id="movieFormTitleField"
              name="title" // O valor de 'name' precisa ser igual ao valor da propriedade do state que irá receber o valor desse input
              onChange={this.handleChange} // função atualizado o state no evento change
              value={this.state.title} // forçar o atributo value do input para o state
            />

            {/* Movie Director */}
            <TextInput
              label="Movie Director"
              type="text"
              id="movieFormDirectorField"
              name="director"
              onChange={this.handleChange}
              value={this.state.director}
            />

            {/* Movie has Oscars? */}
            <CheckboxInput
              label="Does the movie have Oscars?"
              id="movieFormHasOscarsField"
              name="hasOscars"
              // Em inputs do tipo checkbox, precisamos atualizar o state com o valor de checked, que é o atributo que verifica se o input está 'ticado' ou não
              onChange={(event) => {
                this.setState({ [event.target.name]: event.target.checked });
              }}
              // E forçar esse atributo para o state, e não o value
              checked={this.state.hasOscars}
            />

            {/* Movie IMDB Rating */}
            <RangeInput
              label="Movie IMDB Rating"
              id="movieFormRatingField"
              name="IMDbRating"
              min={0}
              max={10}
              step={0.1}
              onChange={this.handleChange}
              value={this.state.IMDbRating}
            />

            <SelectInput
              label="Movie Genres"
              id="movieFormGenreField"
              name="genre"
              onChange={this.handleChange}
              value={this.state.genre}
              defaultValue="Comedy"
              items={["Drama", "Romance", "Comedy", "Adventure"]}
            />

            <div className="form-group">
              <h5>Movie PG Rating</h5>
              <RadioInput
                label="G"
                id="movieFormPGRatingFieldG"
                name="PGRating"
                checked={this.state.PGRating === "G"}
                onChange={this.handleChange}
                value="G"
              />

              <RadioInput
                label="PG"
                id="movieFormPGRatingFieldPG"
                name="PGRating"
                checked={this.state.PGRating === "PG"}
                onChange={this.handleChange}
                value="PG"
              />

              <RadioInput
                label="PG-13"
                id="movieFormPGRatingFieldPG-13"
                name="PGRating"
                checked={this.state.PGRating === "PG-13"}
                onChange={this.handleChange}
                value="PG-13"
              />

              <RadioInput
                label="R"
                id="movieFormPGRatingFieldR"
                name="PGRating"
                checked={this.state.PGRating === "R"}
                onChange={this.handleChange}
                value="R"
              />

              <RadioInput
                label="NC-17"
                id="movieFormPGRatingFieldNC-17"
                name="PGRating"
                checked={this.state.PGRating === "NC-17"}
                onChange={this.handleChange}
                value="NC-17"
              />
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovie;
