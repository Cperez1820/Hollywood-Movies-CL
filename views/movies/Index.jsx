const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render(){
        const {movies} = this.props
        return(
            <DefaultLayout>
            <div>
            {
                movies.map((movie) => {
                    return(
                        <article>
                        <img src={movie.poster} width="350" height="450" alt="" />
                        <h2>{movie.title}</h2>
                        <p>{movie.genre} | {movie.releaseDate ? movie.releaseDate : ""}</p>
                        <p>{movie.rating}</p>
                        <p>{movie.watchAgain ? "i would watch again" : "you gotta pay me to watch it "}</p>
                        <h4>{movie.director}</h4>
                        </article>
                    
                )
                })
            }
            </div>
            </DefaultLayout>   
        )
        }
}
        
    
module.exports = Index