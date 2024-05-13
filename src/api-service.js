//const TOKEN = "e6387912d85eb7e80bedecb3e3358f0151f1c6a9";

export class API {
    static loginUser(body) {
      return fetch(`http://127.0.0.1:8000/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'         
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())    
    }

    static registerUser(body) {
      return fetch(`http://127.0.0.1:8000/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'         
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())    
    }

    static getMovies(token) {
      return fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Token e6387912d85eb7e80bedecb3e3358f0151f1c6a9' 
        'Authorization': `Token ${token}`
      }
    })
    .then( resp => resp.json())
    //.then( resp => setMovies(resp))
    //.catch( error => console.log(error))
    }

    static updateMovie(mov_id, body, token) {
      return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` 
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())    
    }

    static createMovie(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}` 
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())    
      }

    static deleteMovie(mov_id, token) {
      return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}` 
        }
      })    
    }
}