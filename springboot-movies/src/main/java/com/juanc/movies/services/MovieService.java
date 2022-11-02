package com.juanc.movies.services;

import com.juanc.movies.models.Movie;
import com.juanc.movies.repository.IMovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
   private final IMovieRepository movieRepository;

   public MovieService(IMovieRepository movieRepository){
      this.movieRepository = movieRepository;
   }


   public List<Movie> getMovies(){
      return movieRepository.getMovies();
   }

   public Movie getMovieById(String idMovie){
      return movieRepository.getMovieById(idMovie);
   }

   public Movie saveMovie(Movie movie){
      return movieRepository.saveMovie(movie);
   }

   public Movie updateMovie(String idMovie, Movie movie){
      /* Validate to exist the movie */
      Movie movieExist = movieRepository.getMovieById(idMovie);
      if (movieExist == null) return null;
      return movieRepository.updateMovie(idMovie, movie);
   }

   public Movie deleteMovie(String idMovie){
      /* Validate to exist the movie */
      Movie movieExist = movieRepository.getMovieById(idMovie);
      if (movieExist == null) return null;
      return movieRepository.deleteMovie(idMovie);
   }

   public List<Movie> getMoviesByQualificationLessThan(int qualification){
      return movieRepository.getMoviesByQualificationLessThan(qualification);
   }

   public List<Movie> getMoviesByQualificationOverThan(int qualification){
      return movieRepository.getMoviesByQualificationOverThan(qualification);
   }
}
