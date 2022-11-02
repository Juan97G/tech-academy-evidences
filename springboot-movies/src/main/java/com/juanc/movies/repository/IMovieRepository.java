package com.juanc.movies.repository;

import com.juanc.movies.models.Movie;

import java.util.List;

public interface IMovieRepository {
   public List<Movie> getMovies();
   public Movie getMovieById(String idMovie);
   public Movie saveMovie(Movie movie);
   public Movie updateMovie(String idMovie, Movie movie);
   public Movie deleteMovie(String idMovie);
   public List<Movie> getMoviesByQualificationLessThan(int qualification);
   public List<Movie> getMoviesByQualificationOverThan(int qualification);

}
