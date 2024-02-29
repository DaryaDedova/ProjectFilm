import React from "react";

class Search extends React.Component{
    state = {
        search: '',
        type: 'all', //по умолчанию ищем все
    }

    //отправка функции с названием искомого фильма
    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);

        }
    }

    // обновление поиска
    handleFilter = (event) => {
        //когда происходит изменение, то обращаемся к функции изменения состояния
        this.setState(()=> ({type: event.target.dataset.type}), ()=>{
            this.props.searchMovies(this.state.search, this.state.type)//вызываем ыункцию каждый раз, когда происходят изменения
        })
    }

    render(){
        return (
            <div>
                <div className="row search">
                    <input
                        id="search_inline"
                        type="search"
                        placeholder="search"
                        className="validate"
                        value={this.state.search} //управляемы компонент
                        onChange={(e)=> this.setState({ search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    
                    <a href="#!" className="waves-effect waves-light btn blue-grey lighten-1" onClick={()=> this.props.searchMovies(this.state.search, this.state.type)}>Search</a>
                </div>

                <div className="radio_Movies">
                    <label>
                        <input 
                            className="with-gap" 
                            name="group" 
                            type="radio"  
                            checked={this.state.type === "all"}
                            data-type="all" //хранит значение поиска
                            onChange={this.handleFilter}
                        />
                        <span>All</span>
                    </label>


                    <label>
                        <input 
                            className="with-gap" 
                            name="group" 
                            type="radio"  
                            checked={this.state.type === "movie"}
                            data-type="movie" 
                            onChange={this.handleFilter}
                        />
                        <span>Movie only</span>
                    </label>


                    <label>
                        <input 
                            className="with-gap" 
                            name="group" 
                            type="radio"  
                            checked={this.state.type === "series"}
                            data-type="series" 
                            onChange={this.handleFilter}
                        />
                        <span>series</span>
                    </label>
                </div>

            </div>
        )
    }
}

export { Search }