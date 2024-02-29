import { Movie } from './Movie'

function MovieList(props){
    const { movies = []} = props;

    return <div className='movies'>
        {movies.length ? movies.map(movie => (
            <Movie key={Movie.id}{...movie}/>
            //Оператор soread - это конструкция JS, которая позволяет передавать элементы массива или свойства объекта в виде отдельных аргументов.
        )): <h5>Nothing found</h5>

        }
    </div>
}

export { MovieList }